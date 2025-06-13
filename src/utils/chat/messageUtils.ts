import DOMPurify from 'dompurify';
import { sanitizeHTML } from '../messageFormatter';
import { Message, Attachment, SourceReference } from '../../types/chat';
import { v4 as uuidv4 } from 'uuid';

export const sanitizeMessage = (content: string): string => {
  return DOMPurify.sanitize(sanitizeHTML(content));
};

export const formatTimestamp = (date: Date): string => {
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
};

// Enhanced timestamp formatting with multiple options
export const formatTimestampDetailed = (date: Date, format: 'short' | 'long' | 'relative' = 'short'): string => {
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
  const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  switch (format) {
    case 'relative':
      if (diffInMinutes < 1) return 'Just now';
      if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
      if (diffInHours < 24) return `${diffInHours}h ago`;
      if (diffInDays < 7) return `${diffInDays}d ago`;
      return date.toLocaleDateString();

    case 'long':
      return date.toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });

    case 'short':
    default:
      return formatTimestamp(date);
  }
};

// Create a new message with proper metadata
export const createMessage = (
  content: string,
  type: 'user' | 'ai',
  options: {
    attachments?: Attachment[];
    sources?: SourceReference[];
    status?: 'sending' | 'sent' | 'error';
  } = {}
): Message => {
  return {
    id: uuidv4(),
    content: sanitizeMessage(content),
    type,
    timestamp: new Date(),
    status: options.status || 'sent',
    attachments: options.attachments || [],
    sources: options.sources || []
  };
};

// Create a user message
export const createUserMessage = (
  content: string,
  attachments?: Attachment[]
): Message => {
  return createMessage(content, 'user', { 
    attachments,
    status: 'sending'
  });
};

// Create an AI message
export const createAIMessage = (
  content: string,
  sources?: SourceReference[]
): Message => {
  return createMessage(content, 'ai', { 
    sources,
    status: 'sent'
  });
};

// Generate conversation title from messages
export const generateConversationTitle = (messages: Message[]): string => {
  if (messages.length === 0) {
    return `New Conversation ${new Date().toLocaleDateString()}`;
  }

  // Use the first user message if available
  const firstUserMessage = messages.find(msg => msg.type === 'user');
  if (firstUserMessage) {
    const title = firstUserMessage.content.substring(0, 50).trim();
    return title.length < firstUserMessage.content.length ? `${title}...` : title;
  }

  // Fallback to first message
  const firstMessage = messages[0];
  const title = firstMessage.content.substring(0, 50).trim();
  return title.length < firstMessage.content.length ? `${title}...` : title;
};

// Format message content for display
export const formatMessageContent = (content: string, maxLength?: number): string => {
  let formatted = sanitizeMessage(content);
  
  if (maxLength && formatted.length > maxLength) {
    formatted = formatted.substring(0, maxLength).trim() + '...';
  }
  
  return formatted;
};

// Get message preview for conversation lists
export const getMessagePreview = (message: Message, maxLength: number = 100): string => {
  return formatMessageContent(message.content, maxLength);
};

// Check if message is recent (within last hour)
export const isRecentMessage = (timestamp: Date): boolean => {
  const hourAgo = new Date(Date.now() - 60 * 60 * 1000);
  return timestamp > hourAgo;
};

// Group messages by date
export const groupMessagesByDate = (messages: Message[]): Array<{
  date: string;
  messages: Message[];
}> => {
  const groups: { [key: string]: Message[] } = {};
  
  messages.forEach(message => {
    const dateKey = message.timestamp.toDateString();
    if (!groups[dateKey]) {
      groups[dateKey] = [];
    }
    groups[dateKey].push(message);
  });

  return Object.entries(groups).map(([date, msgs]) => ({
    date,
    messages: msgs.sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime())
  })).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
};

// Validate message content
export const validateMessageContent = (content: string): {
  isValid: boolean;
  error?: string;
} => {
  if (!content || content.trim().length === 0) {
    return { isValid: false, error: 'Message cannot be empty' };
  }
  
  if (content.length > 10000) {
    return { isValid: false, error: 'Message is too long (max 10,000 characters)' };
  }
  
  return { isValid: true };
};

// Count total attachments in a conversation
export const countConversationAttachments = (messages: Message[]): number => {
  return messages.reduce((total, message) => total + (message.attachments?.length || 0), 0);
};

// Get conversation statistics
export const getConversationStats = (messages: Message[]): {
  messageCount: number;
  userMessages: number;
  aiMessages: number;
  attachmentCount: number;
  wordCount: number;
} => {
  const userMessages = messages.filter(msg => msg.type === 'user').length;
  const aiMessages = messages.filter(msg => msg.type === 'ai').length;
  const attachmentCount = countConversationAttachments(messages);
  const wordCount = messages.reduce((total, msg) => {
    return total + msg.content.split(/\s+/).filter(word => word.length > 0).length;
  }, 0);

  return {
    messageCount: messages.length,
    userMessages,
    aiMessages,
    attachmentCount,
    wordCount
  };
};