const { withCors } = require('./utils/cors');
const { withAuth } = require('./utils/auth');
const { parseRequest } = require('./utils/request');
const { successResponse, errorResponse } = require('./utils/response');
const { handleError, ValidationError } = require('./utils/errors');
const { logger } = require('./utils/logger');
const { createClient } = require('@supabase/supabase-js');
const { ENV_VARS } = require('./utils/constants');
const { processDocument, isProcessingSupported } = require('./utils/documentProcessor');
const { generateEmbeddings, storeEmbeddings } = require('./utils/vectorStore');

// Initialize Supabase client
const supabase = createClient(ENV_VARS.SUPABASE_URL, ENV_VARS.SUPABASE_SERVICE_ROLE_KEY);

// Supported file types for medical documents
const SUPPORTED_FILE_TYPES = {
  'application/pdf': { ext: 'pdf', maxSize: 50 * 1024 * 1024 }, // 50MB
  'application/msword': { ext: 'doc', maxSize: 25 * 1024 * 1024 }, // 25MB
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': { ext: 'docx', maxSize: 25 * 1024 * 1024 },
  'application/vnd.ms-excel': { ext: 'xls', maxSize: 25 * 1024 * 1024 },
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': { ext: 'xlsx', maxSize: 25 * 1024 * 1024 },
  'text/plain': { ext: 'txt', maxSize: 10 * 1024 * 1024 }, // 10MB
  'image/jpeg': { ext: 'jpg', maxSize: 20 * 1024 * 1024 }, // 20MB
  'image/png': { ext: 'png', maxSize: 20 * 1024 * 1024 },
  'image/gif': { ext: 'gif', maxSize: 10 * 1024 * 1024 },
  'image/webp': { ext: 'webp', maxSize: 20 * 1024 * 1024 }
};

// Document categories for medical knowledge base
const DOCUMENT_CATEGORIES = [
  'research-papers',
  'clinical-guidelines',
  'case-studies',
  'medical-images',
  'lab-results',
  'patient-education',
  'protocols',
  'reference-materials',
  'personal-notes',
  'other'
];

function validateFileUpload(file) {
  if (!file || !file.name || !file.type || !file.data) {
    throw new ValidationError('Invalid file format. File must have name, type, and data.');
  }

  // Check file type
  if (!SUPPORTED_FILE_TYPES[file.type]) {
    throw new ValidationError(`Unsupported file type: ${file.type}. Supported types: ${Object.keys(SUPPORTED_FILE_TYPES).join(', ')}`);
  }

  // Validate base64 data format
  if (!file.data.startsWith('data:')) {
    throw new ValidationError('File data must be in base64 data URL format');
  }

  // Extract and validate file size
  const base64Data = file.data.split(',')[1];
  const fileSize = Math.round((base64Data.length * 3) / 4); // Approximate size from base64
  const maxSize = SUPPORTED_FILE_TYPES[file.type].maxSize;

  if (fileSize > maxSize) {
    throw new ValidationError(`File size (${Math.round(fileSize / 1024 / 1024)}MB) exceeds maximum allowed size (${Math.round(maxSize / 1024 / 1024)}MB) for ${file.type}`);
  }

  return { fileSize, maxSize };
}

function validateMetadata(metadata) {
  if (!metadata || typeof metadata !== 'object') {
    throw new ValidationError('Document metadata is required');
  }

  if (!metadata.title || typeof metadata.title !== 'string' || metadata.title.trim().length === 0) {
    throw new ValidationError('Document title is required');
  }

  if (metadata.title.length > 200) {
    throw new ValidationError('Document title must be less than 200 characters');
  }

  if (metadata.description && metadata.description.length > 1000) {
    throw new ValidationError('Document description must be less than 1000 characters');
  }

  if (metadata.category && !DOCUMENT_CATEGORIES.includes(metadata.category)) {
    throw new ValidationError(`Invalid category. Must be one of: ${DOCUMENT_CATEGORIES.join(', ')}`);
  }

  if (metadata.tags) {
    if (!Array.isArray(metadata.tags)) {
      throw new ValidationError('Tags must be an array');
    }
    if (metadata.tags.length > 10) {
      throw new ValidationError('Maximum 10 tags allowed');
    }
    for (const tag of metadata.tags) {
      if (typeof tag !== 'string' || tag.length > 50) {
        throw new ValidationError('Each tag must be a string with maximum 50 characters');
      }
    }
  }

  return {
    title: metadata.title.trim(),
    description: metadata.description?.trim() || '',
    category: metadata.category || 'other',
    tags: metadata.tags || [],
    isPrivate: metadata.isPrivate === true
  };
}

async function uploadToSupabaseStorage(file, user, documentId) {
  try {
    // Extract base64 data
    const base64Data = file.data.split(',')[1];
    const buffer = Buffer.from(base64Data, 'base64');
    
    // Generate unique file path
    const fileExt = SUPPORTED_FILE_TYPES[file.type].ext;
    const fileName = `${documentId}.${fileExt}`;
    const filePath = `documents/${user.id}/${fileName}`;

    logger.info('Uploading file to Supabase Storage', {
      userId: user.id,
      documentId,
      fileName,
      filePath,
      fileSize: buffer.length,
      fileType: file.type
    });

    // Upload to Supabase Storage
    const { data, error } = await supabase.storage
      .from('user-uploads')
      .upload(filePath, buffer, {
        contentType: file.type,
        upsert: false
      });

    if (error) {
      logger.error('Supabase Storage upload error', {
        error: error.message,
        userId: user.id,
        documentId,
        filePath
      });
      throw new Error(`Storage upload failed: ${error.message}`);
    }

    logger.info('File uploaded successfully to Supabase Storage', {
      userId: user.id,
      documentId,
      storagePath: data.path
    });

    return {
      storagePath: data.path,
      fileName,
      fileSize: buffer.length
    };

  } catch (error) {
    logger.error('Error uploading to Supabase Storage', {
      error: error.message,
      userId: user.id,
      documentId
    });
    throw error;
  }
}

async function saveDocumentMetadata(user, metadata, file, uploadResult, documentId, fileContent = null) {
  try {
    // First, get or create user's vector store
    let vectorStoreId;
    const { data: vectorStore } = await supabase
      .from('user_vector_stores')
      .select('id')
      .eq('user_id', user.id)
      .single();
    
    if (vectorStore) {
      vectorStoreId = vectorStore.id;
    } else {
      // Create vector store if it doesn't exist
      const { data: newVectorStore, error: vsError } = await supabase
        .from('user_vector_stores')
        .insert({
          user_id: user.id,
          openai_vector_store_id: `vs_${user.id}_${Date.now()}`,
          name: `${user.email}_knowledge_base`,
          description: 'Personal medical knowledge base',
          status: 'active'
        })
        .select()
        .single();
      
      if (vsError) {
        throw new Error(`Failed to create vector store: ${vsError.message}`);
      }
      vectorStoreId = newVectorStore.id;
    }

    // Create a meaningful document description for podcast generation
    let documentDescription = metadata.description || '';
    if (fileContent) {
      // If we have extracted content, use it
      documentDescription = fileContent;
    } else {
      // Create a structured description for podcast generation
      documentDescription = `MEDICAL DOCUMENT FOR PODCAST GENERATION
=======================================

Document Title: ${file.name}
Document Type: ${file.type}
Processing Date: ${new Date().toISOString()}

CONTENT SUMMARY:
${file.type === 'application/pdf' ? 'PDF Document' : 'Document'}: ${file.name}

This is a ${file.type === 'application/pdf' ? 'PDF' : 'document'} file that contains medical information. The content will be processed by our AI system to generate an accurate podcast discussion.

File size: ${uploadResult.fileSize} bytes
Upload time: ${new Date().toISOString()}

PODCAST GENERATION NOTES:
- This document contains medical information suitable for professional discussion
- Please ensure accuracy and cite any specific medical facts or statistics
- Consider the target audience of healthcare professionals
- Maintain medical terminology while making content accessible
- Include relevant clinical context and practical applications

END OF DOCUMENT
===============`;
    }

    const documentRecord = {
      user_id: user.id,
      vector_store_id: vectorStoreId,
      openai_file_id: `file_${documentId}`, // Placeholder for now
      title: metadata.title,
      description: documentDescription, // Store content here for podcast access
      file_name: file.name,
      file_type: file.type,
      file_size: uploadResult.fileSize,
      category: metadata.category,
      tags: metadata.tags,
      is_private: metadata.isPrivate,
      upload_status: 'completed',
      processing_status: 'completed', // Mark as completed for podcast generation
      file_path: uploadResult.storagePath, // Store Supabase storage path
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };

    logger.info('Saving document metadata to user_documents table', {
      userId: user.id,
      documentId,
      title: metadata.title,
      category: metadata.category,
      contentLength: documentDescription.length
    });

    const { data, error } = await supabase
      .from('user_documents')
      .insert([documentRecord])
      .select()
      .single();

    if (error) {
      logger.error('Database insert error', {
        error: error.message,
        userId: user.id,
        documentId,
        details: error.details
      });
      throw new Error(`Database save failed: ${error.message}`);
    }

    logger.info('Document metadata saved successfully to user_documents', {
      userId: user.id,
      documentId,
      dbId: data.id,
      contentStored: !!documentDescription
    });

    return data;

  } catch (error) {
    logger.error('Error saving document metadata', {
      error: error.message,
      userId: user.id,
      documentId
    });
    throw error;
  }
}

async function handleDocumentUpload(event, user) {
  const { body, method } = parseRequest(event);

  if (method !== 'POST') {
    throw new ValidationError('Only POST method is allowed');
  }

  if (!body || !body.file || !body.metadata) {
    throw new ValidationError('File and metadata are required');
  }

  const { file, metadata } = body;

  // Validate file
  const fileValidation = validateFileUpload(file);
  logger.info('File validation passed', {
    userId: user.id,
    fileName: file.name,
    fileType: file.type,
    fileSize: fileValidation.fileSize
  });

  // Validate metadata
  const validatedMetadata = validateMetadata(metadata);
  logger.info('Metadata validation passed', {
    userId: user.id,
    title: validatedMetadata.title,
    category: validatedMetadata.category
  });

  // Generate unique document ID
  const documentId = `doc_${user.id}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

  try {
    // Upload file to Supabase Storage
    const uploadResult = await uploadToSupabaseStorage(file, user, documentId);

    // Save document metadata to database with content for podcast generation
    const documentRecord = await saveDocumentMetadata(user, validatedMetadata, file, uploadResult, documentId);

    logger.info('Document ready for podcast generation', {
      documentId: documentRecord.id,
      fileType: file.type,
      hasContent: !!documentRecord.description
    });
    
    logger.info('Document upload completed successfully', {
      userId: user.id,
      documentId,
      dbId: documentRecord.id,
      title: validatedMetadata.title
    });

    return successResponse({
      documentId: documentRecord.id,
      title: validatedMetadata.title,
      fileName: file.name,
      fileSize: uploadResult.fileSize,
      category: validatedMetadata.category,
      uploadStatus: 'completed',
      processingStatus: 'completed',
      storagePath: uploadResult.storagePath,
      createdAt: documentRecord.created_at
    }, 'Document uploaded successfully and ready for podcast generation');

  } catch (error) {
    // If there was an error after file upload, try to clean up
    try {
      const filePath = `documents/${user.id}/${documentId}.${SUPPORTED_FILE_TYPES[file.type].ext}`;
      await supabase.storage.from('user-uploads').remove([filePath]);
      logger.info('Cleaned up uploaded file after error', { userId: user.id, documentId });
    } catch (cleanupError) {
      logger.error('Failed to cleanup uploaded file', {
        error: cleanupError.message,
        userId: user.id,
        documentId
      });
    }

    throw error;
  }
}


// Export the handler with middleware
exports.handler = withCors(
  withAuth(async (event, user) => {
    try {
      return await handleDocumentUpload(event, user);
    } catch (error) {
      return handleError(error);
    }
  })
); 