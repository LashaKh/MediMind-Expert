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

// Environment variables
const ENV_VARS = {
  SUPABASE_URL: process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL,
  SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  FLOWISE_CARDIOLOGY_URL: process.env.FLOWISE_CARDIOLOGY_URL || "https://flowise-2-0.onrender.com/api/v1/prediction/f8433523-af63-4c53-8db9-63ed3b923f2e",
  FLOWISE_OBGYN_URL: process.env.FLOWISE_OBGYN_URL || "https://flowise-2-0.onrender.com/api/v1/prediction/57a1285c-971d-48d4-9519-feb7494afe8b"
};

// Initialize Supabase client
const supabase = createClient(
  ENV_VARS.SUPABASE_URL,
  ENV_VARS.SUPABASE_SERVICE_ROLE_KEY
);

// Specialty-specific Flowise endpoints
const FLOWISE_ENDPOINTS = {
  cardiology: ENV_VARS.FLOWISE_CARDIOLOGY_URL,
  'ob-gyn': ENV_VARS.FLOWISE_OBGYN_URL,
  'obgyn': ENV_VARS.FLOWISE_OBGYN_URL,
  default: ENV_VARS.FLOWISE_CARDIOLOGY_URL
};

// Simple JWT token decoder for Supabase tokens
function decodeSupabaseJWT(token) {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) return null;
    
    const payload = JSON.parse(atob(parts[1]));
    return {
      id: payload.sub,
      email: payload.email,
      role: payload.app_metadata?.role || payload.user_metadata?.role,
      specialty: payload.app_metadata?.specialty || payload.user_metadata?.specialty,
      aud: payload.aud,
      iat: payload.iat,
      exp: payload.exp
    };
  } catch (error) {
    console.error('JWT decode error:', error);
    return null;
  }
}

// Get user profile from database
async function getUserProfile(userId) {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('medical_specialty, role')
      .eq('id', userId)
      .single();

    if (error) {
      console.log('Profile fetch error (user may not have profile yet):', error.message);
      return {};
    }

    return {
      specialty: data?.medical_specialty,
      role: data?.role
    };
  } catch (error) {
    console.error('Error in getUserProfile:', error);
    return {};
  }
}

// Get Flowise endpoint based on specialty
function getFlowiseEndpoint(specialty) {
  const normalizedSpecialty = specialty?.toLowerCase().replace(/[^a-z-]/g, '');
  return FLOWISE_ENDPOINTS[normalizedSpecialty] || FLOWISE_ENDPOINTS.default;
}

// Get user's Vector Store ID
async function getUserVectorStoreId(userId) {
  try {
    const { data, error } = await supabase
      .from('user_vector_stores')
      .select('openai_vector_store_id')
      .eq('user_id', userId)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        console.log(`No Vector Store found for user ${userId}`);
        return null;
      }
      throw error;
    }

    return data?.openai_vector_store_id || null;
  } catch (error) {
    console.error('Error fetching Vector Store ID:', error);
    return null;
  }
}

// Send request to Flowise
async function sendToFlowise(message, user, conversationId, uploads, knowledgeBase) {
  const flowiseUrl = getFlowiseEndpoint(user.specialty);
  
  console.log('Sending to Flowise:', {
    url: flowiseUrl,
    userId: user.id,
    specialty: user.specialty,
    hasUploads: !!(uploads && uploads.length > 0)
  });

  const requestPayload = {
    question: message,
    ...(conversationId && {
      overrideConfig: { sessionId: conversationId }
    }),
    ...(uploads && uploads.length > 0 && { uploads })
  };

  // Handle knowledge base
  if (knowledgeBase && knowledgeBase.type === 'personal') {
    try {
      const vectorStoreId = await getUserVectorStoreId(user.id);
      if (vectorStoreId) {
        requestPayload.vectorStore = {
          type: 'openai',
          id: vectorStoreId,
          namespace: user.id
        };
        requestPayload.openaiConfig = {
          apiKey: ENV_VARS.OPENAI_API_KEY
        };
      } else {
        requestPayload.knowledgeBase = {
          type: 'curated',
          useDefaultKnowledgeBase: true
        };
      }
    } catch (error) {
      console.error('Vector Store error:', error);
      requestPayload.knowledgeBase = {
        type: 'curated',
        useDefaultKnowledgeBase: true
      };
    }
  } else {
    requestPayload.knowledgeBase = {
      type: knowledgeBase?.type || 'curated'
    };
  }

  const response = await fetch(flowiseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(requestPayload.vectorStore && {
        'X-OpenAI-Key': ENV_VARS.OPENAI_API_KEY
      })
    },
    body: JSON.stringify(requestPayload)
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('Flowise API error:', {
      status: response.status,
      error: errorText
    });
    throw new Error(`Flowise API error: ${response.status} ${response.statusText}`);
  }

  return await response.json();
}

exports.handler = async (event, context) => {
  const origin = event.headers.origin || event.headers.Origin;
  
  console.log('Flowise handler called:', {
    method: event.httpMethod,
    path: event.path,
    hasBody: !!event.body
  });

  // Handle OPTIONS for CORS
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: getCorsHeaders(origin),
      body: ''
    };
  }

  try {
    // Check authentication
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

    // Decode JWT token
    const token = authHeader.replace('Bearer ', '');
    const jwtPayload = decodeSupabaseJWT(token);
    
    if (!jwtPayload) {
      return {
        statusCode: 401,
        headers: {
          'Content-Type': 'application/json',
          ...getCorsHeaders(origin)
        },
        body: JSON.stringify({ error: 'Invalid authentication token' })
      };
    }

    // Check token expiration
    if (jwtPayload.exp && Date.now() >= jwtPayload.exp * 1000) {
      return {
        statusCode: 401,
        headers: {
          'Content-Type': 'application/json',
          ...getCorsHeaders(origin)
        },
        body: JSON.stringify({ error: 'Token expired' })
      };
    }

    // Get user profile to get specialty
    const profile = await getUserProfile(jwtPayload.id);
    const user = {
      ...jwtPayload,
      specialty: profile.specialty || jwtPayload.specialty,
      role: profile.role || jwtPayload.role
    };

    console.log('Authenticated user:', {
      id: user.id,
      email: user.email,
      specialty: user.specialty
    });

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

    const { message, conversationId, uploads, knowledgeBase } = body;

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

    // Send to Flowise
    const result = await sendToFlowise(message, user, conversationId, uploads, knowledgeBase);
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        ...getCorsHeaders(origin)
      },
      body: JSON.stringify({
        success: true,
        data: {
          message: result.text || result.response || 'Response received',
          sources: result.sourceDocuments || [],
          timestamp: new Date().toISOString(),
          chatId: conversationId || `${user.id}-${Date.now()}`,
          specialty: user.specialty
        }
      })
    };

  } catch (error) {
    console.error('Flowise handler error:', error);
    
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