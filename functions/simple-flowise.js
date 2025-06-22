const { createClient } = require('@supabase/supabase-js');

// Basic CORS headers
function getCorsHeaders(origin) {
  return {
    'Access-Control-Allow-Origin': origin || '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Credentials': 'true'
  };
}

exports.handler = async (event, context) => {
  const origin = event.headers.origin || event.headers.Origin;
  
  console.log('Simple Flowise handler called:', {
    method: event.httpMethod,
    path: event.path,
    hasBody: !!event.body,
    headers: Object.keys(event.headers)
  });

  // Handle OPTIONS request for CORS
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: getCorsHeaders(origin),
      body: ''
    };
  }

  try {
    // Basic authentication check
    const authHeader = event.headers.authorization || event.headers.Authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return {
        statusCode: 401,
        headers: {
          'Content-Type': 'application/json',
          ...getCorsHeaders(origin)
        },
        body: JSON.stringify({ error: 'Authentication required' })
      };
    }

    // Parse request body
    let body;
    try {
      body = JSON.parse(event.body || '{}');
    } catch (error) {
      return {
        statusCode: 400,
        headers: {
          'Content-Type': 'application/json',
          ...getCorsHeaders(origin)
        },
        body: JSON.stringify({ error: 'Invalid JSON in request body' })
      };
    }

    const { message } = body;
    if (!message) {
      return {
        statusCode: 400,
        headers: {
          'Content-Type': 'application/json',
          ...getCorsHeaders(origin)
        },
        body: JSON.stringify({ error: 'Message is required' })
      };
    }

    // Simple successful response for testing
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        ...getCorsHeaders(origin)
      },
      body: JSON.stringify({
        success: true,
        data: {
          message: `Test response: Received "${message}"`,
          sources: [],
          timestamp: new Date().toISOString()
        }
      })
    };

  } catch (error) {
    console.error('Simple Flowise error:', error);
    
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        ...getCorsHeaders(origin)
      },
      body: JSON.stringify({ 
        error: 'Internal server error',
        details: error.message 
      })
    };
  }
};