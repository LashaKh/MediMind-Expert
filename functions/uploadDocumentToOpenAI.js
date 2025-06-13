const OpenAI = require('openai');
const { createClient } = require('@supabase/supabase-js');
const multipart = require('parse-multipart');

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
    const bodyBuffer = Buffer.from(event.body, event.isBase64Encoded ? 'base64' : 'utf8');
    const parts = multipart.parse(bodyBuffer, boundary);

    // Extract form fields
    let file = null;
    let vectorStoreId = null;
    let title = null;
    let description = null;
    let category = null;
    let tags = null;

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
        vectorStoreId = part.data.toString();
      } else if (name === 'title') {
        title = part.data.toString();
      } else if (name === 'description') {
        description = part.data.toString();
      } else if (name === 'category') {
        category = part.data.toString();
      } else if (name === 'tags') {
        tags = part.data.toString();
      }
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

    // Create document record in database first
    const documentId = crypto.randomUUID();
    const parsedTags = tags ? JSON.parse(tags) : [];
    
    const { data: documentRecord, error: documentError } = await supabase
      .from('user_documents')
      .insert({
        id: documentId,
        user_id: user.id,
        vector_store_id: vectorStore.id,
        title: title.trim(),
        description: description?.trim() || '',
        file_name: file.filename,
        file_type: file.type,
        file_size: file.size,
        category: category || 'other',
        tags: parsedTags,
        upload_status: 'uploading',
        processing_status: 'pending'
      })
      .select()
      .single();

    if (documentError) {
      console.error('Failed to create document record:', documentError);
      return {
        statusCode: 500,
        headers: corsHeaders,
        body: JSON.stringify({ error: 'Failed to create document record.' })
      };
    }

    try {
      // Upload file to OpenAI
      console.log('Uploading file to OpenAI...');
      
      // Create a File-like object for OpenAI
      const fileForOpenAI = new File([file.data], file.filename, { type: file.type });
      
      const uploadedFile = await openai.files.create({
        file: fileForOpenAI,
        purpose: 'assistants',
      });
      
      console.log(`File successfully uploaded to OpenAI. File ID: ${uploadedFile.id}`);

      // Associate file with Vector Store using direct API call (more reliable than SDK for vector stores)
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

      // Update document record with OpenAI IDs
      const { data: updatedDocument, error: updateError } = await supabase
        .from('user_documents')
        .update({
          openai_file_id: uploadedFile.id,
          openai_vector_store_file_id: vectorStoreFileAssociation.id,
          upload_status: 'completed',
          processing_status: 'processing',
          uploaded_at: new Date().toISOString(),
          openai_metadata: {
            openai_file: uploadedFile,
            vector_store_file: vectorStoreFileAssociation
          }
        })
        .eq('id', documentId)
        .select()
        .single();

      if (updateError) {
        console.error('Failed to update document with OpenAI IDs:', updateError);
        // Don't fail the upload, just log the error
      }

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
      
      // Update document record with error status
      await supabase
        .from('user_documents')
        .update({
          upload_status: 'failed',
          processing_status: 'failed',
          error_message: uploadError.message || 'Upload to OpenAI failed'
        })
        .eq('id', documentId);

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