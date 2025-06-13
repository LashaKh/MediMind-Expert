import { serve } from 'https://deno.land/std@0.177.0/http/server.ts';
import OpenAI from 'https://deno.land/x/openai@v4.33.0/mod.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.38.0';

// Define CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*', // IMPORTANT: For production, restrict this to your app's domain
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

console.log('Edge function `uploadDocumentToOpenAI` initializing...');

// Supported file types for medical documents (matching frontend validation)
const SUPPORTED_FILE_TYPES = {
  'application/pdf': { ext: 'pdf', maxSize: 50 * 1024 * 1024 }, // 50MB
  'application/msword': { ext: 'doc', maxSize: 25 * 1024 * 1024 }, // 25MB
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': { ext: 'docx', maxSize: 25 * 1024 * 1024 },
  'text/plain': { ext: 'txt', maxSize: 10 * 1024 * 1024 }, // 10MB
  'text/markdown': { ext: 'md', maxSize: 10 * 1024 * 1024 },
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    console.log('Handling OPTIONS request (CORS preflight)');
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    console.log('Received new request for document upload to OpenAI.');
    
    // Parse the request
    const formData = await req.formData();
    const file = formData.get('file') as File | null;
    const vectorStoreId = formData.get('vectorStoreId') as string | null;
    const title = formData.get('title') as string | null;
    const description = formData.get('description') as string | null;
    const category = formData.get('category') as string | null;
    const tags = formData.get('tags') as string | null;

    // Validation
    if (!file) {
      console.error('File not provided in form data.');
      return new Response(JSON.stringify({ error: 'File not provided.' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      });
    }
    
    if (!vectorStoreId) {
      console.error('Vector Store ID not provided in form data.');
      return new Response(JSON.stringify({ error: 'Vector Store ID not provided.' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      });
    }

    if (!title) {
      console.error('Document title not provided.');
      return new Response(JSON.stringify({ error: 'Document title is required.' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      });
    }

    // Validate file type
    if (!SUPPORTED_FILE_TYPES[file.type]) {
      console.error(`Unsupported file type: ${file.type}`);
      return new Response(JSON.stringify({ 
        error: `Unsupported file type: ${file.type}. Supported types: ${Object.keys(SUPPORTED_FILE_TYPES).join(', ')}` 
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      });
    }

    // Validate file size
    const maxSize = SUPPORTED_FILE_TYPES[file.type].maxSize;
    if (file.size > maxSize) {
      console.error(`File size (${file.size}) exceeds maximum (${maxSize}) for type ${file.type}`);
      return new Response(JSON.stringify({ 
        error: `File size (${Math.round(file.size / 1024 / 1024)}MB) exceeds maximum allowed size (${Math.round(maxSize / 1024 / 1024)}MB) for ${file.type}` 
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      });
    }

    // Get environment variables
    const openaiApiKey = Deno.env.get('OPENAI_API_KEY');
    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

    if (!openaiApiKey) {
      console.error('CRITICAL: OPENAI_API_KEY environment variable not set.');
      return new Response(JSON.stringify({ error: 'Server configuration error: Missing OpenAI API key.' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      });
    }

    if (!supabaseUrl || !supabaseServiceKey) {
      console.error('CRITICAL: Supabase environment variables not set.');
      return new Response(JSON.stringify({ error: 'Server configuration error: Missing Supabase configuration.' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      });
    }

    // Initialize clients
    const openai = new OpenAI({
      apiKey: openaiApiKey,
    });

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Get user from authorization header
    const authHeader = req.headers.get('authorization');
    if (!authHeader) {
      return new Response(JSON.stringify({ error: 'Authorization header required.' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 401,
      });
    }

    const token = authHeader.replace('Bearer ', '');
    const { data: { user }, error: userError } = await supabase.auth.getUser(token);
    
    if (userError || !user) {
      console.error('Authentication failed:', userError);
      return new Response(JSON.stringify({ error: 'Authentication failed.' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 401,
      });
    }

    console.log(`Processing file: ${file.name}, Size: ${file.size} bytes, Type: ${file.type}, User: ${user.id}`);
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
      return new Response(JSON.stringify({ error: 'Vector store not found or access denied.' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 403,
      });
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
        file_name: file.name,
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
      return new Response(JSON.stringify({ error: 'Failed to create document record.' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      });
    }

    try {
      // Upload file to OpenAI
      console.log('Uploading file to OpenAI...');
      const uploadedFile = await openai.files.create({
        file: file,
        purpose: 'assistants',
      });
      console.log(`File successfully uploaded to OpenAI. File ID: ${uploadedFile.id}`);

      // Associate file with Vector Store
      console.log(`Attempting to add File ID ${uploadedFile.id} to Vector Store ID ${vectorStoreId}...`);
      const vectorStoreFileUrl = `https://api.openai.com/v1/vector_stores/${vectorStoreId}/files`;
      const body = JSON.stringify({ file_id: uploadedFile.id });

      const vectorStoreResponse = await fetch(vectorStoreFileUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${openaiApiKey}`,
          'Content-Type': 'application/json',
          'OpenAI-Beta': 'assistants=v2', // Crucial header for beta APIs
        },
        body: body,
      });

      const vectorStoreData = await vectorStoreResponse.json();

      if (!vectorStoreResponse.ok) {
        console.error('Error response from OpenAI when adding file to vector store:', vectorStoreData);
        
        // Update document record with error
        await supabase
          .from('user_documents')
          .update({
            upload_status: 'failed',
            processing_status: 'failed',
            error_message: `Failed to add to vector store: ${vectorStoreData.error?.message || 'Unknown error'}`,
            openai_file_id: uploadedFile.id, // Save file ID even if vector store association failed
            openai_metadata: { openai_error: vectorStoreData }
          })
          .eq('id', documentId);

        return new Response(JSON.stringify({
          message: 'File uploaded to OpenAI, but failed to add to Vector Store.',
          documentId,
          uploadedFileId: uploadedFile.id,
          errorDetails: vectorStoreData,
        }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: vectorStoreResponse.status,
        });
      }

      console.log('File successfully associated with Vector Store. Details:', vectorStoreData);

      // Update document record with success
      const { error: updateError } = await supabase
        .from('user_documents')
        .update({
          openai_file_id: uploadedFile.id,
          openai_vector_store_file_id: vectorStoreData.id,
          upload_status: 'completed',
          processing_status: 'completed',
          uploaded_at: new Date().toISOString(),
          processed_at: new Date().toISOString(),
          openai_metadata: {
            openai_file: uploadedFile,
            vector_store_file: vectorStoreData
          }
        })
        .eq('id', documentId);

      if (updateError) {
        console.error('Failed to update document record after successful upload:', updateError);
        // File was uploaded successfully, but we couldn't update our record
        // This is not a critical error for the user
      }

      return new Response(JSON.stringify({ 
        message: 'Document uploaded and added to Vector Store successfully.',
        documentId,
        uploadedFileId: uploadedFile.id,
        vectorStoreFileId: vectorStoreData.id,
        vectorStoreFileAssociation: vectorStoreData,
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      });

    } catch (uploadError) {
      console.error('Error during file upload to OpenAI:', uploadError);
      
      // Update document record with error
      await supabase
        .from('user_documents')
        .update({
          upload_status: 'failed',
          processing_status: 'failed',
          error_message: uploadError.message
        })
        .eq('id', documentId);

      let errorMessage = 'Failed to upload file to OpenAI.';
      if (uploadError.response && uploadError.response.data && uploadError.response.data.error) {
        errorMessage = uploadError.response.data.error.message;
      } else if (uploadError.message) {
        errorMessage = uploadError.message;
      }

      return new Response(JSON.stringify({ 
        error: errorMessage,
        documentId
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      });
    }

  } catch (error) {
    console.error('Error during document upload processing:', error);
    let errorMessage = 'Failed to process document upload.';
    
    if (error.response && error.response.data && error.response.data.error && error.response.data.error.message) {
      errorMessage = error.response.data.error.message;
    } else if (error.message) {
      errorMessage = error.message;
    }
    
    return new Response(JSON.stringify({ error: errorMessage }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    });
  }
});

console.log('Edge function `uploadDocumentToOpenAI` is ready to serve requests.'); 