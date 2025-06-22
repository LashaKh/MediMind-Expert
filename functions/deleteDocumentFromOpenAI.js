const OpenAI = require('openai');
const { createClient } = require('@supabase/supabase-js');

// CORS headers for cross-origin requests
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'DELETE, OPTIONS',
};

exports.handler = async (event, context) => {
  console.log('Netlify function `deleteDocumentFromOpenAI` invoked');

  // Handle CORS preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: corsHeaders,
      body: 'OK'
    };
  }

  if (event.httpMethod !== 'DELETE') {
    return {
      statusCode: 405,
      headers: corsHeaders,
      body: JSON.stringify({ error: 'Method not allowed. Use DELETE.' })
    };
  }

  try {
    // Get environment variables
    const openaiApiKey = process.env.OPENAI_API_KEY;
    const supabaseUrl = process.env.VITE_SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!openaiApiKey || !supabaseUrl || !supabaseServiceKey) {
      console.error('CRITICAL: Required environment variables not set.');
      return {
        statusCode: 500,
        headers: corsHeaders,
        body: JSON.stringify({ error: 'Server configuration error: Missing environment variables.' })
      };
    }

    // Parse request body to get document ID
    let requestData;
    try {
      requestData = JSON.parse(event.body || '{}');
    } catch (parseError) {
      return {
        statusCode: 400,
        headers: corsHeaders,
        body: JSON.stringify({ error: 'Invalid JSON in request body.' })
      };
    }

    const { documentId } = requestData;

    if (!documentId) {
      return {
        statusCode: 400,
        headers: corsHeaders,
        body: JSON.stringify({ error: 'Document ID is required.' })
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

    console.log(`Processing document deletion: ${documentId} for user: ${user.id}`);

    // Get document details from database first
    const { data: document, error: documentError } = await supabase
      .from('user_documents')
      .select('*')
      .eq('id', documentId)
      .eq('user_id', user.id)
      .single();

    if (documentError || !document) {
      console.error('Document not found or access denied:', documentError);
      return {
        statusCode: 404,
        headers: corsHeaders,
        body: JSON.stringify({ error: 'Document not found or access denied.' })
      };
    }

    const { openai_file_id, openai_vector_store_file_id, vector_store_id } = document;

    try {
      // Get vector store details to get the OpenAI vector store ID
      const { data: vectorStore, error: vectorStoreError } = await supabase
        .from('user_vector_stores')
        .select('openai_vector_store_id')
        .eq('id', vector_store_id)
        .single();

      if (vectorStoreError || !vectorStore) {
        console.error('Vector store not found:', vectorStoreError);
        return {
          statusCode: 404,
          headers: corsHeaders,
          body: JSON.stringify({ error: 'Vector store not found.' })
        };
      }

      const openaiVectorStoreId = vectorStore.openai_vector_store_id;

      // Step 1: Remove file from Vector Store (if it exists)
      if (openai_vector_store_file_id && openaiVectorStoreId) {
        try {
          console.log(`Removing file from Vector Store: ${openai_vector_store_file_id}`);
          
          const removeFromVectorStoreResponse = await fetch(
            `https://api.openai.com/v1/vector_stores/${openaiVectorStoreId}/files/${openai_vector_store_file_id}`,
            {
              method: 'DELETE',
              headers: {
                'Authorization': `Bearer ${openaiApiKey}`,
                'OpenAI-Beta': 'assistants=v2'
              }
            }
          );

          if (removeFromVectorStoreResponse.ok) {
            console.log(`Successfully removed file from Vector Store: ${openai_vector_store_file_id}`);
          } else {
            const errorText = await removeFromVectorStoreResponse.text();
            console.warn(`Failed to remove file from Vector Store: ${errorText}`);
            // Continue with deletion even if Vector Store removal fails
          }
        } catch (vectorStoreRemovalError) {
          console.warn('Error removing file from Vector Store:', vectorStoreRemovalError);
          // Continue with deletion even if Vector Store removal fails
        }
      }

      // Step 2: Delete the file from OpenAI Files (if it exists)
      if (openai_file_id) {
        try {
          console.log(`Deleting OpenAI file: ${openai_file_id}`);
          
          await openai.files.del(openai_file_id);
          console.log(`Successfully deleted OpenAI file: ${openai_file_id}`);
        } catch (fileDeleteError) {
          console.warn('Error deleting OpenAI file:', fileDeleteError);
          // Continue with database deletion even if OpenAI file deletion fails
        }
      }

      // Step 3: Delete from database
      const { error: dbDeleteError } = await supabase
        .from('user_documents')
        .delete()
        .eq('id', documentId)
        .eq('user_id', user.id);

      if (dbDeleteError) {
        console.error('Failed to delete document from database:', dbDeleteError);
        return {
          statusCode: 500,
          headers: corsHeaders,
          body: JSON.stringify({ 
            error: 'Failed to delete document from database.',
            details: dbDeleteError.message
          })
        };
      }

      // Step 4: Update vector store document count
      if (vectorStore) {
        const { data: currentVectorStore } = await supabase
          .from('user_vector_stores')
          .select('document_count, total_size_bytes')
          .eq('id', vector_store_id)
          .single();

        if (currentVectorStore) {
          await supabase
            .from('user_vector_stores')
            .update({
              document_count: Math.max(0, (currentVectorStore.document_count || 1) - 1),
              total_size_bytes: Math.max(0, (currentVectorStore.total_size_bytes || document.file_size) - document.file_size),
              updated_at: new Date().toISOString()
            })
            .eq('id', vector_store_id);
        }
      }

      return {
        statusCode: 200,
        headers: corsHeaders,
        body: JSON.stringify({
          message: 'Document deleted successfully from OpenAI and database.',
          documentId: documentId,
          deletedFromOpenAI: !!openai_file_id,
          deletedFromVectorStore: !!openai_vector_store_file_id
        })
      };

    } catch (deletionError) {
      console.error('Error during OpenAI deletion:', deletionError);
      
      return {
        statusCode: 500,
        headers: corsHeaders,
        body: JSON.stringify({
          error: 'Failed to delete document from OpenAI.',
          details: deletionError.message,
          documentId: documentId
        })
      };
    }

  } catch (error) {
    console.error('Unexpected error in deleteDocumentFromOpenAI:', error);
    return {
      statusCode: 500,
      headers: corsHeaders,
      body: JSON.stringify({
        error: error.message || 'Internal server error.'
      })
    };
  }
}; 