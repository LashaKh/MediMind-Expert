import { API_ENDPOINTS } from './constants';
import { APIResponse } from './types';
import { APIError } from './errors';
import { analyzeImage } from './vision';
import { supabase } from '../supabase';
import { PatientCase, Attachment, KnowledgeBaseType } from '../../types/chat';
import { convertAttachmentsToUploads } from '../../utils/fileUpload';

export async function fetchAIResponse(
  message: string | { text: string; imageUrl?: string },
  sessionId: string,
  caseContext?: PatientCase,
  attachments?: Attachment[],
  knowledgeBaseType?: KnowledgeBaseType,
  personalDocumentIds?: string[]
): Promise<APIResponse> {
  try {
    let messageText = typeof message === 'string' ? message : message.text;
    let imageAnalysis = '';

    // If there's an image, analyze it first (legacy support)
    if (typeof message === 'object' && message.imageUrl) {
      try {
        // Convert base64 image URL to blob
        const base64Data = message.imageUrl.split(',')[1];
        const byteCharacters = atob(base64Data);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: 'image/jpeg' });
        const imageFile = new File([blob], 'image.jpg', { type: 'image/jpeg' });

        // Analyze the image
        imageAnalysis = await analyzeImage(imageFile);
        messageText = `${messageText}\n\nImage Analysis: ${imageAnalysis}`;
      } catch (error) {
        console.error('Failed to analyze image:', error);
      }
    }

    // If we have case context, prepend it to the message
    if (caseContext) {
      const caseContextText = `
**ACTIVE CASE CONTEXT:**
Case Title: ${caseContext.title}
Case Description: ${caseContext.description}
Specialty: ${caseContext.specialty}
${caseContext.anonymizedInfo ? `Patient Info: ${caseContext.anonymizedInfo}` : ''}
${caseContext.metadata?.tags ? `Tags: ${caseContext.metadata.tags.join(', ')}` : ''}
${caseContext.metadata?.complexity ? `Complexity: ${caseContext.metadata.complexity}` : ''}

**USER QUESTION:**
${messageText}

Please provide clinical insights and recommendations based on this case context.`;
      
      messageText = caseContextText;
    }

    // Get the current user session for authentication
    let { data: { session }, error: sessionError } = await supabase.auth.getSession();
    
    // Check if session exists and token is not expired
    const isTokenExpired = session?.expires_at ? new Date(session.expires_at * 1000) <= new Date() : false;
    
    // If no session, session error, or token is expired, try to refresh
    if (!session || sessionError || isTokenExpired) {
      console.log('🔄 Session invalid, expired, or missing - attempting refresh...', {
        hasSession: !!session,
        hasError: !!sessionError,
        isExpired: isTokenExpired,
        expiresAt: session?.expires_at ? new Date(session.expires_at * 1000).toISOString() : 'N/A',
        currentTime: new Date().toISOString()
      });
      
      const { data: { session: refreshedSession }, error: refreshError } = await supabase.auth.refreshSession();
      
      if (refreshError || !refreshedSession) {
        console.error('Failed to refresh session:', refreshError);
        throw new APIError('Authentication required - please sign in again', 401);
      }
      
      console.log('✅ Session refreshed successfully');
      // Use the refreshed session
      session = refreshedSession;
    }
    
    if (!session) {
      throw new APIError('Authentication required', 401);
    }

    // DEBUG: Log token information
    console.log('🔑 Using session token:', {
      hasAccessToken: !!session.access_token,
      tokenLength: session.access_token?.length,
      tokenPrefix: session.access_token?.substring(0, 20) + '...',
      expiresAt: session.expires_at ? new Date(session.expires_at * 1000).toISOString() : 'N/A',
      currentTime: new Date().toISOString(),
      isValid: session.expires_at ? new Date(session.expires_at * 1000) > new Date() : false
    });

    // Prepare request body
    let requestBody: any = {
      message: messageText,
      conversationId: sessionId,
      caseContext: caseContext ? {
        id: caseContext.id,
        title: caseContext.title,
        specialty: caseContext.specialty
      } : undefined
    };

    // Add uploads if attachments are provided
    if (attachments && attachments.length > 0) {
      const uploads = convertAttachmentsToUploads(attachments);
      if (uploads.length > 0) {
        requestBody.uploads = uploads;
        console.log(`Including ${uploads.length} file uploads in request:`, uploads.map(u => `${u.name} (${u.type})`));
      }
    }

    // ROUTE BASED ON KNOWLEDGE BASE TYPE
    let apiEndpoint: string;
    const isPersonalKB = knowledgeBaseType === 'personal';
    
    console.log('🔍 KNOWLEDGE BASE ROUTING DEBUG:', {
      knowledgeBaseType,
      isPersonalKB,
      sessionId,
      hasCaseContext: !!caseContext
    });
    
    if (isPersonalKB) {
      // Route to OpenAI Assistants for personal knowledge base
      apiEndpoint = '/api/openai-assistant';
      console.log('🤖 Routing to OpenAI Assistants for personal knowledge base');
      
      // Format request body specifically for OpenAI Assistant endpoint
      requestBody = {
        message: messageText,
        conversationId: sessionId,
        caseContext: caseContext || null // Send full case object or null
      };
      
      console.log('🔍 OpenAI Assistant Request Body:', {
        message: messageText,
        messageType: typeof messageText,
        messageLength: messageText?.length,
        conversationId: sessionId,
        caseContext: caseContext,
        fullRequestBody: requestBody
      });
      
      // Remove uploads field for OpenAI Assistant (not supported yet)
      if (requestBody.uploads) {
        console.warn('File uploads not yet supported for personal knowledge base');
        delete requestBody.uploads;
      }
    } else {
      // Route to Flowise for curated knowledge base (existing behavior)
      apiEndpoint = '/api/flowise/chat';
      
      // Add knowledge base context for Flowise
      requestBody.knowledgeBase = {
        type: knowledgeBaseType || 'curated',
        // Legacy support for manual document IDs (fallback)
        ...(personalDocumentIds && personalDocumentIds.length > 0 && {
          personalDocumentIds: personalDocumentIds
        })
      };
      
      console.log('🌊 Routing to Flowise for curated knowledge base');
    }

    console.log(`📡 Sending ${knowledgeBaseType || 'curated'} KB request to:`, apiEndpoint);

    // Make the API request
    const response = await fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${session.access_token}`
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new APIError(
        errorData?.error || `HTTP error! status: ${response.status}`, 
        response.status
      );
    }

    const data = await response.json();
    
    // Extract the response data from our standardized API response
    const responseData = data.data || data;
    
    return { 
      text: responseData.message || '',
      sources: responseData.sources || [],
      imageAnalysis: imageAnalysis || undefined
    };
  } catch (error) {
    console.error('Failed to fetch AI response:', error);
    throw new APIError(
      error instanceof Error ? error.message : 'Failed to fetch AI response'
    );
  }
}