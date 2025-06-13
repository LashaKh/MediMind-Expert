import { useState, useCallback } from 'react';
import { fetchAIResponse } from '../../lib/api/chat';
import { APIError } from '../../lib/api/errors';
import { Message, SourceReference, PatientCase, Attachment, KnowledgeBaseType } from '../../types/chat';
import { v4 as uuidv4 } from 'uuid';

interface UseFlowiseChatOptions {
  onMessageReceived?: (message: Message) => void;
  onError?: (error: string) => void;
  onTypingStart?: () => void;
  onTypingEnd?: () => void;
  sessionId?: string;
  caseContext?: PatientCase | null;
  knowledgeBaseType?: KnowledgeBaseType;
  personalDocumentIds?: string[];
}

interface UseFlowiseChatReturn {
  sendMessage: (content: string, attachments?: Attachment[], caseContext?: PatientCase | null, knowledgeBaseType?: KnowledgeBaseType, personalDocumentIds?: string[]) => Promise<void>;
  isLoading: boolean;
  error: string | null;
  sessionId: string;
}

export const useFlowiseChat = (options: UseFlowiseChatOptions = {}): UseFlowiseChatReturn => {
  const {
    onMessageReceived,
    onError,
    onTypingStart,
    onTypingEnd,
    sessionId: providedSessionId,
    caseContext: defaultCaseContext,
    knowledgeBaseType,
    personalDocumentIds
  } = options;

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sessionId] = useState(providedSessionId || uuidv4());

  const sendMessage = useCallback(async (content: string, attachments?: Attachment[], caseContext?: PatientCase | null, knowledgeBaseType?: KnowledgeBaseType, personalDocumentIds?: string[]) => {
    if (!content.trim() && (!attachments || attachments.length === 0)) return;

    setIsLoading(true);
    setError(null);
    onTypingStart?.();

    // Use provided case context or default from options
    const activeCaseContext = caseContext !== undefined ? caseContext : defaultCaseContext;

    try {
      // Format message for API - with new attachment support, we primarily use string
      let messageInput: string | { text: string; imageUrl?: string } = content;
      
      // Legacy image handling for backward compatibility
      if (attachments && attachments.length > 0) {
        const imageAttachment = attachments.find(att => att.type?.startsWith('image/') && att.preview && !att.base64Data);
        if (imageAttachment) {
          messageInput = {
            text: content,
            imageUrl: imageAttachment.url || imageAttachment.preview
          };
        }
      }

      // Send to Flowise API with case context and attachments
      const response = await fetchAIResponse(
        messageInput, 
        sessionId, 
        activeCaseContext || undefined,
        attachments, // Pass attachments to the API
        knowledgeBaseType,
        personalDocumentIds
      );
      
      // Process the response and create AI message
      const aiMessage: Message = {
        id: uuidv4(),
        content: response.text || 'I apologize, but I couldn\'t generate a response. Please try again.',
        type: 'ai',
        timestamp: new Date(),
        sources: response.sources?.map((source: any) => ({
          id: uuidv4(),
          title: source.title || source.name || 'Medical Source',
          url: source.url,
          type: source.type || 'document',
          excerpt: source.excerpt || source.content?.substring(0, 200) + '...'
        } as SourceReference)) || []
      };

      // Add image analysis if present (legacy support)
      if (response.imageAnalysis) {
        aiMessage.content = `${aiMessage.content}\n\n**Image Analysis:**\n${response.imageAnalysis}`;
      }

      onMessageReceived?.(aiMessage);
      
    } catch (err) {
      console.error('Failed to send message to Flowise:', err);
      
      const errorMessage = err instanceof APIError 
        ? err.message 
        : err instanceof Error 
        ? err.message 
        : 'Failed to send message. Please try again.';

      setError(errorMessage);
      onError?.(errorMessage);

      // Create error message for display
      const errorAIMessage: Message = {
        id: uuidv4(),
        content: `I'm sorry, I encountered an error: ${errorMessage}. Please try again or contact support if the issue persists.`,
        type: 'ai',
        timestamp: new Date(),
        status: 'error'
      };

      onMessageReceived?.(errorAIMessage);
      
    } finally {
      setIsLoading(false);
      onTypingEnd?.();
    }
  }, [sessionId, onMessageReceived, onError, onTypingStart, onTypingEnd, defaultCaseContext, knowledgeBaseType, personalDocumentIds]);

  return {
    sendMessage,
    isLoading,
    error,
    sessionId
  };
}; 