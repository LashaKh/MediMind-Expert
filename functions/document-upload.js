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

async function saveDocumentMetadata(user, metadata, file, uploadResult, documentId) {
  try {
    const documentRecord = {
      id: documentId,
      user_id: user.id,
      title: metadata.title,
      description: metadata.description,
      category: metadata.category,
      tags: metadata.tags,
      is_private: metadata.isPrivate,
      file_name: file.name,
      file_type: file.type,
      file_size: uploadResult.fileSize,
      storage_path: uploadResult.storagePath,
      upload_status: 'uploaded',
      processing_status: 'pending',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };

    logger.info('Saving document metadata to database', {
      userId: user.id,
      documentId,
      title: metadata.title,
      category: metadata.category
    });

    const { data, error } = await supabase
      .from('knowledge_base_documents')
      .insert([documentRecord])
      .select()
      .single();

    if (error) {
      logger.error('Database insert error', {
        error: error.message,
        userId: user.id,
        documentId
      });
      throw new Error(`Database save failed: ${error.message}`);
    }

    logger.info('Document metadata saved successfully', {
      userId: user.id,
      documentId,
      dbId: data.id
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

    // Save document metadata to database
    const documentRecord = await saveDocumentMetadata(user, validatedMetadata, file, uploadResult, documentId);

    // Process document asynchronously (don't wait for completion)
    if (isProcessingSupported(file.type)) {
      processDocumentAsync(file, documentRecord, uploadResult.storagePath)
        .catch(error => {
          logger.error('Async document processing failed', {
            documentId: documentRecord.id,
            error: error.message
          });
        });
    } else {
      logger.info('Document processing not supported for file type', {
        documentId: documentRecord.id,
        fileType: file.type
      });
    }
    
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
      uploadStatus: 'uploaded',
      processingStatus: isProcessingSupported(file.type) ? 'pending' : 'completed',
      storagePath: uploadResult.storagePath,
      createdAt: documentRecord.created_at
    }, 'Document uploaded successfully');

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

/**
 * Process document asynchronously after upload
 */
async function processDocumentAsync(file, documentRecord, storagePath) {
  try {
    // Update processing status to 'processing'
    await supabase
      .from('knowledge_base_documents')
      .update({ 
        processing_status: 'processing',
        updated_at: new Date().toISOString()
      })
      .eq('id', documentRecord.id);

    logger.info('Started async document processing', {
      documentId: documentRecord.id,
      fileName: file.name
    });

    // Step 1: Process the document (extract text and create chunks)
    const processingResults = await processDocument(file, documentRecord, storagePath);

    logger.info('Document processing completed, starting vector storage', {
      documentId: documentRecord.id,
      chunkCount: processingResults.chunks.length
    });

    // Step 2: Generate embeddings for chunks
    const embeddedChunks = await generateEmbeddings(processingResults.chunks);

    // Step 3: Store embeddings in vector database
    const vectorResults = await storeEmbeddings(embeddedChunks, processingResults.metadata);

    // Step 4: Update document record with processing results
    await supabase
      .from('knowledge_base_documents')
      .update({
        processing_status: 'completed',
        vector_store_id: vectorResults.vectorStoreId,
        updated_at: new Date().toISOString()
      })
      .eq('id', documentRecord.id);

    logger.info('Document processing and vector storage completed successfully', {
      documentId: documentRecord.id,
      textLength: processingResults.processing.textLength,
      chunkCount: processingResults.processing.chunkCount,
      vectorsStored: vectorResults.documentsStored,
      vectorStoreId: vectorResults.vectorStoreId,
      duration: processingResults.processing.duration
    });

  } catch (error) {
    logger.error('Document processing failed', {
      documentId: documentRecord.id,
      error: error.message
    });

    // Update document record with error status
    await supabase
      .from('knowledge_base_documents')
      .update({
        processing_status: 'failed',
        error_message: error.message,
        updated_at: new Date().toISOString()
      })
      .eq('id', documentRecord.id);
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