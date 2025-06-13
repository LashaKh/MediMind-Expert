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
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      throw new APIError('Authentication required', 401);
    }

    // Prepare request body
    const requestBody: any = {
      message: messageText,
      conversationId: sessionId,
      caseContext: caseContext ? {
        id: caseContext.id,
        title: caseContext.title,
        specialty: caseContext.specialty
      } : undefined,
      // Knowledge base context - simplified for OpenAI Vector Store integration
      knowledgeBase: {
        type: knowledgeBaseType || 'curated',
        // For personal knowledge base, the backend will automatically fetch
        // the user's Vector Store ID and document IDs from the database
        ...(knowledgeBaseType === 'personal' && {
          useVectorStore: true
        }),
        // Legacy support for manual document IDs (fallback)
        ...(knowledgeBaseType === 'personal' && personalDocumentIds && personalDocumentIds.length > 0 && {
          personalDocumentIds: personalDocumentIds
        })
      }
    };

    // Add uploads if attachments are provided
    if (attachments && attachments.length > 0) {
      const uploads = convertAttachmentsToUploads(attachments);
      if (uploads.length > 0) {
        requestBody.uploads = uploads;
        console.log(`Including ${uploads.length} file uploads in request:`, uploads.map(u => `${u.name} (${u.type})`));
      }
    }

    // Use our Netlify Function proxy instead of direct Flowise endpoint
    const response = await fetch('/api/flowise/chat', {
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