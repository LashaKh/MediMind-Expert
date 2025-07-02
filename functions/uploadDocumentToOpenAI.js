const crypto = require('crypto');
const OpenAI = require('openai');
const { createClient } = require('@supabase/supabase-js');

// CORS headers for cross-origin requests
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

// Supported file types for medical documents (matching frontend validation)
const SUPPORTED_FILE_TYPES = {
  'application/pdf': { ext: 'pdf', maxSize: 50 * 1024 * 1024 }, // 50MB
  'application/msword': { ext: 'doc', maxSize: 25 * 1024 * 1024 }, // 25MB
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': { ext: 'docx', maxSize: 25 * 1024 * 1024 },
  'text/plain': { ext: 'txt', maxSize: 10 * 1024 * 1024 }, // 10MB
  'text/markdown': { ext: 'md', maxSize: 10 * 1024 * 1024 },
};

// Helper function to parse multipart form data manually
function parseMultipartData(body, boundary) {
  const parts = [];
  const sections = body.split(`--${boundary}`);
  
  for (const section of sections) {
    if (section.trim() === '' || section.trim() === '--') continue;
    
    const headerSplit = section.indexOf('\r\n\r\n');
    if (headerSplit === -1) continue;
    
    const headers = section.substring(0, headerSplit);
    const data = section.substring(headerSplit + 4);
    
    // Parse Content-Disposition header
    const contentDisposition = headers.match(/Content-Disposition:\s*([^;]+);?\s*(.*)/i);
    if (!contentDisposition) continue;
    
    const params = {};
    const paramString = contentDisposition[2];
    const paramMatches = paramString.match(/(\w+)="([^"]*)"/g);
    
    if (paramMatches) {
      paramMatches.forEach(match => {
        const [, key, value] = match.match(/(\w+)="([^"]*)"/);
        params[key] = value;
      });
    }
    
    // Parse Content-Type if present
    const contentType = headers.match(/Content-Type:\s*([^\r\n]+)/i);
    
    const part = {
      name: params.name,
      filename: params.filename,
      type: contentType ? contentType[1].trim() : 'text/plain',
      data: Buffer.from(data.replace(/\r?\n$/, ''), 'binary')
    };
    
    parts.push(part);
  }
  
  return parts;
}

exports.handler = async (event, context) => {
  console.log('Netlify function `uploadDocumentToOpenAI` invoked');

  // Handle CORS preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: corsHeaders,
      body: 'OK'
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: corsHeaders,
      body: JSON.stringify({ error: 'Method not allowed. Use POST.' })
    };
  }

  try {
    // Get environment variables
    const openaiApiKey = process.env.OPENAI_API_KEY;
    const supabaseUrl = process.env.VITE_SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!openaiApiKey || !supabaseUrl || !supabaseServiceKey) {
      console.error('CRITICAL: Required environment variables not set.');
      console.error('OPENAI_API_KEY:', !!openaiApiKey);
      console.error('VITE_SUPABASE_URL:', !!supabaseUrl);
      console.error('SUPABASE_SERVICE_ROLE_KEY:', !!supabaseServiceKey);
      
      return {
        statusCode: 500,
        headers: corsHeaders,
        body: JSON.stringify({ error: 'Server configuration error: Missing environment variables.' })
      };
    }

    // Parse multipart form data
    const contentType = event.headers['content-type'] || event.headers['Content-Type'];
    if (!contentType || !contentType.includes('multipart/form-data')) {
      return {
        statusCode: 400,
        headers: corsHeaders,
        body: JSON.stringify({ error: 'Content-Type must be multipart/form-data.' })
      };
    }

    const boundary = contentType.split('boundary=')[1];
    if (!boundary) {
      return {
        statusCode: 400,
        headers: corsHeaders,
        body: JSON.stringify({ error: 'Missing boundary in multipart data.' })
      };
    }

    // Parse the multipart data
    const bodyText = event.isBase64Encoded ? Buffer.from(event.body, 'base64').toString('binary') : event.body;
    
    let file = null;
    let vectorStoreId = null;
    let title = null;
    let description = null;
    let category = null;
    let tags = null;
    
    try {
      const parts = parseMultipartData(bodyText, boundary);

      // Extract form fields
      for (const part of parts) {
        const name = part.name;
        
        if (name === 'file') {
          file = {
            data: part.data,
            filename: part.filename,
            type: part.type,
            size: part.data.length
          };
        } else if (name === 'vectorStoreId') {
          vectorStoreId = part.data.toString('utf8');
        } else if (name === 'title') {
          title = part.data.toString('utf8');
        } else if (name === 'description') {
          description = part.data.toString('utf8');
        } else if (name === 'category') {
          category = part.data.toString('utf8');
        } else if (name === 'tags') {
          tags = part.data.toString('utf8');
        }
      }
      
    } catch (parseError) {
      console.error('Error parsing multipart data:', parseError);
      return {
        statusCode: 400,
        headers: corsHeaders,
        body: JSON.stringify({ error: `Failed to parse multipart data: ${parseError.message}` })
      };
    }

    // Validation
    if (!file) {
      return {
        statusCode: 400,
        headers: corsHeaders,
        body: JSON.stringify({ error: 'File not provided.' })
      };
    }
    
    if (!vectorStoreId) {
      return {
        statusCode: 400,
        headers: corsHeaders,
        body: JSON.stringify({ error: 'Vector Store ID not provided.' })
      };
    }

    if (!title) {
      return {
        statusCode: 400,
        headers: corsHeaders,
        body: JSON.stringify({ error: 'Document title is required.' })
      };
    }

    // Validate file type
    if (!SUPPORTED_FILE_TYPES[file.type]) {
      return {
        statusCode: 400,
        headers: corsHeaders,
        body: JSON.stringify({ 
          error: `Unsupported file type: ${file.type}. Supported types: ${Object.keys(SUPPORTED_FILE_TYPES).join(', ')}` 
        })
      };
    }

    // Validate file size
    const maxSize = SUPPORTED_FILE_TYPES[file.type].maxSize;
    if (file.size > maxSize) {
      return {
        statusCode: 400,
        headers: corsHeaders,
        body: JSON.stringify({ 
          error: `File size (${Math.round(file.size / 1024 / 1024)}MB) exceeds maximum allowed size (${Math.round(maxSize / 1024 / 1024)}MB) for ${file.type}` 
        })
      };
    }

    // Initialize clients
    const openai = new OpenAI({
      apiKey: openaiApiKey,
    });

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Get user from authorization header
    const authHeader = event.headers.authorization || event.headers.Authorization;
    if (!authHeader) {
      return {
        statusCode: 401,
        headers: corsHeaders,
        body: JSON.stringify({ error: 'Authorization header required.' })
      };
    }

    const token = authHeader.replace('Bearer ', '');
    const { data: { user }, error: userError } = await supabase.auth.getUser(token);
    
    if (userError || !user) {
      console.error('Authentication failed:', userError);
      return {
        statusCode: 401,
        headers: corsHeaders,
        body: JSON.stringify({ error: 'Authentication failed.' })
      };
    }

    console.log(`Processing file: ${file.filename}, Size: ${file.size} bytes, Type: ${file.type}, User: ${user.id}`);
    console.log(`Target Vector Store ID: ${vectorStoreId}`);
    console.log(`Document Title: ${title}, Category: ${category || 'other'}, Description provided: ${!!description}`);

    // Verify user owns the vector store
    const { data: vectorStore, error: vectorStoreError } = await supabase
      .from('user_vector_stores')
      .select('*')
      .eq('openai_vector_store_id', vectorStoreId)
      .eq('user_id', user.id)
      .single();

    if (vectorStoreError || !vectorStore) {
      console.error('Vector store not found or access denied:', vectorStoreError);
      return {
        statusCode: 403,
        headers: corsHeaders,
        body: JSON.stringify({ error: 'Vector store not found or access denied.' })
      };
    }

    // Generate document ID for tracking
    const documentId = crypto.randomUUID();
    const parsedTags = tags ? JSON.parse(tags) : [];

    try {
      // Upload file to OpenAI FIRST to get the file ID
      console.log('Uploading file to OpenAI...');
      
      // Create a File-like object for OpenAI
      const fileForOpenAI = new File([file.data], file.filename, { type: file.type });
      
      const uploadedFile = await openai.files.create({
        file: fileForOpenAI,
        purpose: 'assistants',
      });
      
      console.log(`File successfully uploaded to OpenAI. File ID: ${uploadedFile.id}`);

      // Associate file with Vector Store using direct API call
      console.log(`Attempting to add File ID ${uploadedFile.id} to Vector Store ID ${vectorStoreId}...`);
      
      const vectorStoreFileResponse = await fetch(`https://api.openai.com/v1/vector_stores/${vectorStoreId}/files`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${openaiApiKey}`,
          'Content-Type': 'application/json',
          'OpenAI-Beta': 'assistants=v2'
        },
        body: JSON.stringify({ file_id: uploadedFile.id })
      });

      if (!vectorStoreFileResponse.ok) {
        const errorText = await vectorStoreFileResponse.text();
        console.error('Vector Store file association failed:', errorText);
        throw new Error(`Vector Store association failed: ${errorText}`);
      }

      const vectorStoreFileAssociation = await vectorStoreFileResponse.json();
      console.log('File successfully associated with Vector Store:', vectorStoreFileAssociation.id);

      // Create comprehensive document description for podcast generation
      let documentDescription = description?.trim() || '';
      
      // If no description provided or it's too short, create a structured description
      if (!documentDescription || documentDescription.length < 100) {
        documentDescription = `MEDICAL DOCUMENT FOR PODCAST GENERATION
=======================================

Document Title: ${title.trim()}
Original Filename: ${file.filename}
File Type: ${file.type}
File Size: ${Math.round(file.size / 1024)} KB
Category: ${category || 'other'}
Upload Date: ${new Date().toISOString()}
Tags: ${parsedTags.join(', ') || 'None'}

CONTENT SUMMARY:
This is a ${file.type === 'application/pdf' ? 'PDF document' : 'medical document'} uploaded by a healthcare professional. The document contains medical information that can be discussed in a professional podcast format.

${description?.trim() ? `User Description: ${description.trim()}` : ''}

OPENAI INTEGRATION:
- File ID: ${uploadedFile.id}
- Vector Store File ID: ${vectorStoreFileAssociation.id}
- Processed by OpenAI for AI-powered analysis

PODCAST GENERATION NOTES:
- This document contains medical information suitable for professional discussion
- Please ensure accuracy and cite any specific medical facts or statistics
- Consider the target audience of healthcare professionals
- Maintain medical terminology while making content accessible
- Include relevant clinical context and practical applications
- The document has been processed by OpenAI's vector store for enhanced AI analysis

END OF DOCUMENT METADATA
========================

This document is ready for AI-powered podcast generation with medical accuracy and professional context.`;
      }

      // NOW create document record in database with OpenAI IDs and comprehensive description
      const { data: documentRecord, error: documentError } = await supabase
        .from('user_documents')
        .insert({
          id: documentId,
          user_id: user.id,
          vector_store_id: vectorStore.id,
          openai_file_id: uploadedFile.id, // Now we have this from OpenAI
          openai_vector_store_file_id: vectorStoreFileAssociation.id,
          title: title.trim(),
          description: documentDescription, // Store comprehensive description for podcast access
          file_name: file.filename,
          file_type: file.type,
          file_size: file.size,
          category: category || 'other',
          tags: parsedTags,
          upload_status: 'completed', // Mark as completed since OpenAI upload succeeded
          processing_status: 'completed', // Mark as completed since OpenAI processing is done
          uploaded_at: new Date().toISOString(),
          openai_metadata: {
            openai_file: uploadedFile,
            vector_store_file: vectorStoreFileAssociation
          }
        })
        .select()
        .single();

      if (documentError) {
        console.error('Failed to create document record:', documentError);
        
        // If database fails, we should try to clean up the OpenAI file
        // Note: This is optional cleanup - the file will still exist in OpenAI
        console.log('Note: OpenAI file was uploaded successfully but database record creation failed');
        
        return {
          statusCode: 500,
          headers: corsHeaders,
          body: JSON.stringify({ 
            error: 'Failed to create document record after successful OpenAI upload.',
            openaiFileId: uploadedFile.id 
          })
        };
      }

      console.log(`✅ Document record created successfully:`, {
        documentId: documentRecord.id,
        title: documentRecord.title,
        filename: documentRecord.file_name,
        contentLength: documentRecord.description.length,
        openaiFileId: documentRecord.openai_file_id,
        category: documentRecord.category,
        tags: documentRecord.tags
      });

      // Update vector store document count
      await supabase
        .from('user_vector_stores')
        .update({
          document_count: vectorStore.document_count + 1,
          total_size_bytes: (vectorStore.total_size_bytes || 0) + file.size,
          updated_at: new Date().toISOString()
        })
        .eq('id', vectorStore.id);

      return {
        statusCode: 200,
        headers: corsHeaders,
        body: JSON.stringify({
          message: 'Document uploaded successfully to OpenAI Vector Store.',
          documentId: documentId,
          uploadedFileId: uploadedFile.id,
          vectorStoreFileId: vectorStoreFileAssociation.id,
          vectorStoreFileAssociation: vectorStoreFileAssociation
        })
      };

    } catch (uploadError) {
      console.error('Error during OpenAI upload:', uploadError);
      
      return {
        statusCode: 500,
        headers: corsHeaders,
        body: JSON.stringify({
          error: 'Failed to upload document to OpenAI.',
          details: uploadError.message,
          documentId: documentId
        })
      };
    }

  } catch (error) {
    console.error('Unexpected error in uploadDocumentToOpenAI:', error);
    return {
      statusCode: 500,
      headers: corsHeaders,
      body: JSON.stringify({
        error: error.message || 'Internal server error.'
      })
    };
  }
}; 

// Helper function to fix status of existing documents that were uploaded successfully
// but have status stuck at 'processing' due to old upload logic
async function fixExistingDocumentStatuses() {
  try {
    const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
    
    const { data: documentsToFix, error: fetchError } = await supabase
      .from('user_documents')
      .select('*')
      .eq('upload_status', 'completed')
      .eq('processing_status', 'processing')
      .not('openai_file_id', 'is', null);
    
    if (fetchError) {
      console.error('Error fetching documents to fix:', fetchError);
      return;
    }
    
    if (documentsToFix && documentsToFix.length > 0) {
      console.log(`Found ${documentsToFix.length} documents to fix status for`);
      
      const { error: updateError } = await supabase
        .from('user_documents')
        .update({ processing_status: 'completed' })
        .eq('upload_status', 'completed')
        .eq('processing_status', 'processing')
        .not('openai_file_id', 'is', null);
      
      if (updateError) {
        console.error('Error updating document statuses:', updateError);
      } else {
        console.log(`Successfully updated status for ${documentsToFix.length} documents`);
      }
    } else {
      console.log('No documents found that need status fixing');
    }
  } catch (error) {
    console.error('Error in fixExistingDocumentStatuses:', error);
  }
}

// Uncomment the line below and call this function once to fix existing documents
// fixExistingDocumentStatuses(); 