const OpenAI = require('openai');
const { createClient } = require('@supabase/supabase-js');

// CORS headers for cross-origin requests
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, GET, DELETE, OPTIONS',
};

exports.handler = async (event, context) => {
  console.log('Netlify function `manageVectorStore` invoked with method:', event.httpMethod);

  // Handle CORS preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: corsHeaders,
      body: 'OK'
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

    console.log(`Processing ${event.httpMethod} request for user: ${user.id}`);

    // Handle different HTTP methods
    if (event.httpMethod === 'POST') {
      // Create Vector Store
      const body = JSON.parse(event.body || '{}');
      const { name, description } = body;

      if (!name) {
        return {
          statusCode: 400,
          headers: corsHeaders,
          body: JSON.stringify({ error: 'Vector Store name is required.' })
        };
      }

      console.log(`Creating Vector Store for user ${user.id}: ${name}`);

      try {
        // Check if user already has a Vector Store
        const { data: existingStore } = await supabase
          .from('user_vector_stores')
          .select('*')
          .eq('user_id', user.id)
          .single();

        if (existingStore) {
          return {
            statusCode: 409,
            headers: corsHeaders,
            body: JSON.stringify({ 
              error: 'User already has a Vector Store. Only one Vector Store per user is currently supported.',
              existingStore: {
                id: existingStore.id,
                name: existingStore.name,
                openai_vector_store_id: existingStore.openai_vector_store_id
              }
            })
          };
        }

        // Create Vector Store in OpenAI
        const vectorStore = await openai.beta.vectorStores.create({
          name: `${name} - ${user.email || user.id}`,
          file_counts: {},
        });

        console.log(`Vector Store created in OpenAI: ${vectorStore.id}`);

        // Save to database
        const { data: dbRecord, error: dbError } = await supabase
          .from('user_vector_stores')
          .insert({
            user_id: user.id,
            openai_vector_store_id: vectorStore.id,
            name: name.trim(),
            description: description?.trim() || '',
            status: 'active',
            document_count: 0,
            total_size_bytes: 0,
            openai_metadata: vectorStore
          })
          .select()
          .single();

        if (dbError) {
          console.error('Failed to save Vector Store to database:', dbError);
          // Try to clean up the OpenAI Vector Store
          try {
            await openai.beta.vectorStores.del(vectorStore.id);
            console.log('Cleaned up OpenAI Vector Store after database error');
          } catch (cleanupError) {
            console.error('Failed to cleanup OpenAI Vector Store:', cleanupError);
          }
          
          return {
            statusCode: 500,
            headers: corsHeaders,
            body: JSON.stringify({ error: 'Failed to save Vector Store metadata.' })
          };
        }

        return {
          statusCode: 201,
          headers: corsHeaders,
          body: JSON.stringify({
            message: 'Vector Store created successfully.',
            vectorStore: {
              id: dbRecord.id,
              openai_vector_store_id: vectorStore.id,
              name: dbRecord.name,
              description: dbRecord.description,
              status: dbRecord.status,
              document_count: dbRecord.document_count,
              created_at: dbRecord.created_at
            }
          })
        };

      } catch (error) {
        console.error('Error creating Vector Store:', error);
        return {
          statusCode: 500,
          headers: corsHeaders,
          body: JSON.stringify({
            error: error.message || 'Failed to create Vector Store.'
          })
        };
      }

    } else if (event.httpMethod === 'GET') {
      // Get user's Vector Store
      console.log(`Getting Vector Store for user ${user.id}`);

      const { data: vectorStore, error: dbError } = await supabase
        .from('user_vector_stores')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (dbError) {
        if (dbError.code === 'PGRST116') { // No rows returned
          return {
            statusCode: 200,
            headers: corsHeaders,
            body: JSON.stringify({
              message: 'No Vector Store found for user.',
              vectorStore: null
            })
          };
        }
        
        console.error('Database error getting Vector Store:', dbError);
        return {
          statusCode: 500,
          headers: corsHeaders,
          body: JSON.stringify({ error: 'Failed to get Vector Store.' })
        };
      }

      // Optionally get fresh status from OpenAI
      try {
        const openaiVectorStore = await openai.beta.vectorStores.retrieve(vectorStore.openai_vector_store_id);
        
        // Update our database with latest OpenAI data
        await supabase
          .from('user_vector_stores')
          .update({
            openai_metadata: openaiVectorStore,
            last_accessed_at: new Date().toISOString()
          })
          .eq('id', vectorStore.id);

        // Return enhanced data
        return {
          statusCode: 200,
          headers: corsHeaders,
          body: JSON.stringify({
            message: 'Vector Store retrieved successfully.',
            vectorStore: {
              ...vectorStore,
              openai_status: openaiVectorStore.status,
              openai_file_counts: openaiVectorStore.file_counts,
              openai_error: null
            }
          })
        };

      } catch (openaiError) {
        console.error('Error fetching from OpenAI:', openaiError);
        
        // Update error status in database
        await supabase
          .from('user_vector_stores')
          .update({
            openai_error: openaiError.message,
            last_accessed_at: new Date().toISOString()
          })
          .eq('id', vectorStore.id);

        // Still return the database data with error info
        return {
          statusCode: 200,
          headers: corsHeaders,
          body: JSON.stringify({
            message: 'Vector Store retrieved with OpenAI error.',
            vectorStore: {
              ...vectorStore,
              openai_error: openaiError.message
            }
          })
        };
      }

    } else if (event.httpMethod === 'DELETE') {
      // Delete user's Vector Store
      console.log(`Deleting Vector Store for user ${user.id}`);

      const { data: vectorStore, error: getError } = await supabase
        .from('user_vector_stores')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (getError) {
        if (getError.code === 'PGRST116') { // No rows returned
          return {
            statusCode: 404,
            headers: corsHeaders,
            body: JSON.stringify({ error: 'No Vector Store found to delete.' })
          };
        }
        
        console.error('Database error getting Vector Store for deletion:', getError);
        return {
          statusCode: 500,
          headers: corsHeaders,
          body: JSON.stringify({ error: 'Failed to find Vector Store for deletion.' })
        };
      }

      try {
        // Delete from OpenAI first
        await openai.beta.vectorStores.del(vectorStore.openai_vector_store_id);
        console.log(`Deleted Vector Store from OpenAI: ${vectorStore.openai_vector_store_id}`);

        // Delete associated documents
        await supabase
          .from('user_documents')
          .delete()
          .eq('vector_store_id', vectorStore.id);

        // Delete from our database
        const { error: deleteError } = await supabase
          .from('user_vector_stores')
          .delete()
          .eq('id', vectorStore.id);

        if (deleteError) {
          console.error('Failed to delete Vector Store from database:', deleteError);
          return {
            statusCode: 500,
            headers: corsHeaders,
            body: JSON.stringify({ error: 'Failed to delete Vector Store from database.' })
          };
        }

        return {
          statusCode: 200,
          headers: corsHeaders,
          body: JSON.stringify({
            message: 'Vector Store deleted successfully.',
            deletedVectorStoreId: vectorStore.openai_vector_store_id
          })
        };

      } catch (error) {
        console.error('Error deleting Vector Store:', error);
        return {
          statusCode: 500,
          headers: corsHeaders,
          body: JSON.stringify({
            error: error.message || 'Failed to delete Vector Store.'
          })
        };
      }

    } else {
      return {
        statusCode: 405,
        headers: corsHeaders,
        body: JSON.stringify({ error: 'Method not allowed.' })
      };
    }

  } catch (error) {
    console.error('Unexpected error in manageVectorStore:', error);
    return {
      statusCode: 500,
      headers: corsHeaders,
      body: JSON.stringify({
        error: error.message || 'Internal server error.'
      })
    };
  }
}; 