exports.handler = async (event, context) => {
  // Quick fix for document statuses when called with fixStatuses parameter
  if (event.queryStringParameters && event.queryStringParameters.fixStatuses === 'true') {
    try {
      const { createClient } = require('@supabase/supabase-js');
      const supabaseUrl = process.env.VITE_SUPABASE_URL;
      const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
      
      if (!supabaseUrl || !supabaseServiceKey) {
        return {
          statusCode: 500,
          body: JSON.stringify({ error: 'Missing Supabase configuration' })
        };
      }
      
      const supabase = createClient(supabaseUrl, supabaseServiceKey);
      
      // Update documents that are stuck in processing but have openai_file_id
      const { data: documentsToFix, error: fetchError } = await supabase
        .from('user_documents')
        .select('id, title, openai_file_id, processing_status')
        .eq('processing_status', 'processing')
        .not('openai_file_id', 'is', null);
      
      if (fetchError) {
        return {
          statusCode: 500,
          body: JSON.stringify({ error: 'Failed to fetch documents: ' + fetchError.message })
        };
      }
      
      if (documentsToFix && documentsToFix.length > 0) {
        const { error: updateError } = await supabase
          .from('user_documents')
          .update({ processing_status: 'completed' })
          .eq('processing_status', 'processing')
          .not('openai_file_id', 'is', null);
        
        if (updateError) {
          return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to update documents: ' + updateError.message })
          };
        }
        
        return {
          statusCode: 200,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          },
          body: JSON.stringify({ 
            message: `Successfully updated ${documentsToFix.length} documents from processing to completed`,
            updatedDocuments: documentsToFix.map(doc => ({ id: doc.id, title: doc.title }))
          })
        };
      } else {
        return {
          statusCode: 200,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          },
          body: JSON.stringify({ message: 'No documents found that need status fixing' })
        };
      }
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Internal error: ' + error.message })
      };
    }
  }
  
  // Regular health check
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({ 
      status: 'healthy', 
      timestamp: new Date().toISOString(),
      message: 'MediMind Expert API is running'
    })
  };
}; 