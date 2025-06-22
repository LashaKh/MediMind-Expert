const { withMedicalSecurity } = require('./utils/middleware');
const { parseRequest } = require('./utils/request');
const { successResponse, errorResponse } = require('./utils/response');
const { handleError, ValidationError } = require('./utils/errors');
const { logger } = require('./utils/logger');
const { createClient } = require('@supabase/supabase-js');

// Initialize Supabase client for database operations
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

// Specialty-specific Flowise endpoints
const FLOWISE_ENDPOINTS = {
  cardiology: process.env.FLOWISE_CARDIOLOGY_URL || "https://flowise-2-0.onrender.com/api/v1/prediction/f8433523-af63-4c53-8db9-63ed3b923f2e",
  'ob-gyn': process.env.FLOWISE_OBGYN_URL || "https://flowise-2-0.onrender.com/api/v1/prediction/57a1285c-971d-48d4-9519-feb7494afe8b",
  'obgyn': process.env.FLOWISE_OBGYN_URL || "https://flowise-2-0.onrender.com/api/v1/prediction/57a1285c-971d-48d4-9519-feb7494afe8b", // Alternative spelling
  // Default fallback to cardiology
  default: process.env.FLOWISE_CARDIOLOGY_URL || "https://flowise-2-0.onrender.com/api/v1/prediction/f8433523-af63-4c53-8db9-63ed3b923f2e"
};

function getFlowiseEndpoint(userSpecialty) {
  // Normalize specialty name to match our endpoint keys
  const normalizedSpecialty = userSpecialty?.toLowerCase().replace(/[^a-z-]/g, '');
  
  logger.info('Determining Flowise endpoint', {
    originalSpecialty: userSpecialty,
    normalizedSpecialty: normalizedSpecialty,
    availableEndpoints: Object.keys(FLOWISE_ENDPOINTS)
  });

  // Return specialty-specific endpoint or default
  return FLOWISE_ENDPOINTS[normalizedSpecialty] || FLOWISE_ENDPOINTS.default;
}

// Get user's OpenAI Vector Store ID from database
async function getUserVectorStoreId(userId) {
  try {
    const { data: vectorStore, error } = await supabase
      .from('user_vector_stores')
      .select('openai_vector_store_id')
      .eq('user_id', userId)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        // No Vector Store found for user
        logger.info(`No Vector Store found for user ${userId}`);
        return null;
      }
      throw error;
    }

    return vectorStore?.openai_vector_store_id || null;
  } catch (error) {
    logger.error('Error fetching user Vector Store ID', {
      userId,
      error: error.message
    });
    return null;
  }
}

// Get user's document IDs for personal knowledge base
async function getUserDocumentIds(userId) {
  try {
    const { data: documents, error } = await supabase
      .from('user_documents')
      .select('openai_file_id')
      .eq('user_id', userId)
      .eq('status', 'completed')
      .not('openai_file_id', 'is', null);

    if (error) {
      logger.error('Error fetching user document IDs', {
        userId,
        error: error.message
      });
      return [];
    }

    return documents?.map(doc => doc.openai_file_id).filter(Boolean) || [];
  } catch (error) {
    logger.error('Error fetching user document IDs', {
      userId,
      error: error.message
    });
    return [];
  }
}

async function sendToFlowise(message, user, conversationId = null, uploads = null, knowledgeBase = null) {
  // Get the appropriate endpoint based on user's specialty
  const flowiseUrl = getFlowiseEndpoint(user.specialty);
  
  // Start with basic request payload
  const requestPayload = {
    question: message,
    // Add optional overrideConfig if conversationId is provided
    ...(conversationId && {
      overrideConfig: {
        sessionId: conversationId
      }
    }),
    // Add uploads if provided
    ...(uploads && uploads.length > 0 && {
      uploads: uploads
    })
  };

  // Handle knowledge base context
  if (knowledgeBase && knowledgeBase.type === 'personal') {
    const startTime = performance.now();
    
    try {
      // Get user's Vector Store ID
      const vectorStoreId = await getUserVectorStoreId(user.id);
      
      if (vectorStoreId) {
        // Get user's document IDs
        const documentIds = await getUserDocumentIds(user.id);
        
        // Add Vector Store configuration to payload
        requestPayload.vectorStore = {
          type: 'openai',
          id: vectorStoreId,
          namespace: user.id, // For multi-tenant isolation
          documentIds: documentIds
        };

        // Add OpenAI API credentials in headers (will be handled by Flowise)
        requestPayload.openaiConfig = {
          apiKey: process.env.OPENAI_API_KEY
        };

        logger.info('Vector Store query configured', {
          userId: user.id,
          vectorStoreId: vectorStoreId,
          documentCount: documentIds.length,
          queryTime: performance.now() - startTime
        });
      } else {
        // Fallback to default knowledge base if no Vector Store
        logger.warn(`No Vector Store ID found for user ${user.id}, falling back to default knowledge base`);
        requestPayload.knowledgeBase = {
          type: 'curated',
          useDefaultKnowledgeBase: true
        };
      }
    } catch (error) {
      logger.error('Error configuring Vector Store query', {
        userId: user.id,
        error: error.message,
        queryTime: performance.now() - startTime
      });
      
      // Fallback to default knowledge base on error
      requestPayload.knowledgeBase = {
        type: 'curated',
        useDefaultKnowledgeBase: true
      };
    }
  } else {
    // Use curated knowledge base or legacy personal document IDs
    requestPayload.knowledgeBase = {
      type: knowledgeBase?.type || 'curated',
      ...(knowledgeBase?.type === 'personal' && knowledgeBase.personalDocumentIds && {
        personalDocumentIds: knowledgeBase.personalDocumentIds
      })
    };
  }

  logger.info('Sending request to Flowise', {
    url: flowiseUrl,
    userId: user.id,
    specialty: user.specialty,
    hasConversationId: !!conversationId,
    hasUploads: !!(uploads && uploads.length > 0),
    uploadCount: uploads ? uploads.length : 0,
    uploadTypes: uploads ? uploads.map(u => u.type) : [],
    knowledgeBaseType: requestPayload.knowledgeBase?.type || requestPayload.vectorStore?.type || 'curated',
    hasVectorStore: !!requestPayload.vectorStore,
    vectorStoreDocumentCount: requestPayload.vectorStore?.documentIds?.length || 0,
    hasPersonalDocuments: !!(knowledgeBase?.personalDocumentIds && knowledgeBase.personalDocumentIds.length > 0)
  });

  const response = await fetch(flowiseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // Include OpenAI API key for Vector Store access
      ...(requestPayload.vectorStore && {
        'X-OpenAI-Key': process.env.OPENAI_API_KEY
      })
    },
    body: JSON.stringify(requestPayload)
  });

  if (!response.ok) {
    const errorText = await response.text();
    logger.error('Flowise API error', {
      status: response.status,
      statusText: response.statusText,
      error: errorText,
      specialty: user.specialty,
      endpoint: flowiseUrl,
      hasUploads: !!(uploads && uploads.length > 0),
      hasVectorStore: !!requestPayload.vectorStore
    });
    
    throw new Error(`Flowise API error: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  
  // Add telemetry for Vector Store queries
  if (requestPayload.vectorStore) {
    const queryTime = performance.now();
    logger.info(`Vector Store query completed in ${queryTime}ms for user ${user.id}`, {
      userId: user.id,
      vectorStoreId: requestPayload.vectorStore.id,
      documentCount: requestPayload.vectorStore.documentIds?.length || 0,
      responseLength: data.text?.length || 0,
      hasSources: !!(data.sourceDocuments && data.sourceDocuments.length > 0)
    });
  }

  logger.info('Received response from Flowise', {
    userId: user.id,
    specialty: user.specialty,
    responseLength: data.text?.length || 0,
    hasSources: !!(data.sourceDocuments && data.sourceDocuments.length > 0),
    processedUploads: !!(uploads && uploads.length > 0),
    knowledgeBaseType: requestPayload.knowledgeBase?.type || requestPayload.vectorStore?.type || 'curated',
    hasVectorStore: !!requestPayload.vectorStore
  });

  return data;
}

async function handleFlowiseRequest(event, user) {
  const { body, method } = parseRequest(event);

  if (method !== 'POST') {
    throw new ValidationError('Only POST method is allowed');
  }

  if (!body || !body.message) {
    throw new ValidationError('Message is required');
  }

  // Validate user has a specialty
  if (!user.specialty) {
    logger.warn('User has no specialty assigned', { userId: user.id });
    // We'll still allow the request but use the default endpoint
  }

  const { message, conversationId, uploads, knowledgeBase } = body;

  // Log knowledge base context for debugging
  if (knowledgeBase) {
    logger.info('Knowledge base context received', {
      userId: user.id,
      knowledgeBaseType: knowledgeBase.type,
      hasPersonalDocuments: !!(knowledgeBase.personalDocumentIds && knowledgeBase.personalDocumentIds.length > 0),
      personalDocumentCount: knowledgeBase.personalDocumentIds ? knowledgeBase.personalDocumentIds.length : 0
    });
  }

  // Validate uploads if provided
  if (uploads && uploads.length > 0) {
    logger.info('Processing file uploads', {
      userId: user.id,
      uploadCount: uploads.length,
      uploads: uploads.map(upload => ({
        name: upload.name,
        type: upload.type,
        mime: upload.mime,
        hasData: !!upload.data
      }))
    });

    // Basic validation of upload structure
    for (const upload of uploads) {
      if (!upload.data || !upload.name || !upload.type || !upload.mime) {
        throw new ValidationError('Invalid upload format. Each upload must have data, name, type, and mime fields.');
      }
      
      // Validate base64 data format
      if (!upload.data.startsWith('data:')) {
        throw new ValidationError('Upload data must be in base64 data URL format (data:mime/type;base64,data)');
      }
    }
  }

  try {
    const result = await sendToFlowise(message, user, conversationId, uploads, knowledgeBase);
    
    return successResponse({
      message: result.text || result.response || 'Response received',
      sources: result.sourceDocuments || [],
      timestamp: new Date().toISOString(),
      chatId: conversationId || `${user.id}-${Date.now()}`,
      specialty: user.specialty,
      processedUploads: uploads ? uploads.length : 0,
      knowledgeBase: knowledgeBase ? {
        type: knowledgeBase.type,
        personalDocumentCount: knowledgeBase.personalDocumentIds ? knowledgeBase.personalDocumentIds.length : 0,
        // Add Vector Store information if available
        ...(knowledgeBase.type === 'personal' && {
          vectorStoreUsed: true,
          vectorStoreDocumentCount: result.vectorStoreDocumentCount || 0
        })
      } : { 
        type: 'curated', 
        personalDocumentCount: 0,
        vectorStoreUsed: false
      }
    }, 'AI response generated successfully');
    
  } catch (error) {
    logger.error('Error processing Flowise request', {
      error: error.message,
      userId: user.id,
      specialty: user.specialty,
      message: message?.substring(0, 100), // Log first 100 chars of message
      hasUploads: !!(uploads && uploads.length > 0),
      uploadCount: uploads ? uploads.length : 0,
      knowledgeBaseType: knowledgeBase?.type || 'curated',
      isVectorStoreQuery: knowledgeBase?.type === 'personal'
    });
    
    throw error;
  }
}

// Export the handler with enhanced medical security middleware
exports.handler = withMedicalSecurity(
  async (event, context) => {
    try {
      logger.info('Flowise proxy handler called', {
        method: event.httpMethod,
        path: event.path,
        hasContext: !!context,
        hasUser: !!(context && context.user)
      });
      
      // User is already extracted and validated by withMedicalSecurity middleware
      const { user } = context;
      
      if (!user) {
        logger.error('No user found in context after security middleware');
        throw new Error('Authentication failed - no user in context');
      }
      
      return await handleFlowiseRequest(event, user);
    } catch (error) {
      logger.error('Flowise proxy handler error', {
        error: error.message,
        stack: error.stack,
        method: event.httpMethod,
        path: event.path
      });
      return handleError(error);
    }
  }
); 