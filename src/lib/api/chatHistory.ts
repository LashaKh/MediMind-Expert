import { supabase } from '../supabase';
import { APIError } from './errors';
import { Conversation, ConversationSummary, Message } from '../../types/chat';

// Types for API responses
interface ChatHistoryResponse {
  conversations: Conversation[];
  total: number;
  hasMore: boolean;
}

interface ConversationResponse {
  conversation: Conversation;
  messages: Message[];
}

/**
 * Fetch all conversations for the current user
 */
export const fetchConversations = async (
  limit: number = 50,
  offset: number = 0
): Promise<ChatHistoryResponse> => {
  try {
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      throw new APIError('Authentication required', 401);
    }

    // For now, this will be a mock implementation since we don't have backend storage yet
    // In the future, this could call a Netlify Function or Supabase backend
    const response = await fetch('/api/chat/conversations', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${session.access_token}`,
      },
    });

    if (!response.ok) {
      // If API endpoint doesn't exist yet, return empty response
      if (response.status === 404) {
        return {
          conversations: [],
          total: 0,
          hasMore: false
        };
      }
      
      const errorData = await response.json().catch(() => null);
      throw new APIError(
        errorData?.error || `HTTP error! status: ${response.status}`,
        response.status
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof APIError) {
      throw error;
    }
    
    console.error('Failed to fetch conversations:', error);
    // Return empty response as fallback
    return {
      conversations: [],
      total: 0,
      hasMore: false
    };
  }
};

/**
 * Fetch a specific conversation by ID with its messages
 */
export const fetchConversationById = async (
  conversationId: string
): Promise<ConversationResponse | null> => {
  try {
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      throw new APIError('Authentication required', 401);
    }

    const response = await fetch(`/api/chat/conversations/${conversationId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${session.access_token}`,
      },
    });

    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      
      const errorData = await response.json().catch(() => null);
      throw new APIError(
        errorData?.error || `HTTP error! status: ${response.status}`,
        response.status
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof APIError) {
      throw error;
    }
    
    console.error('Failed to fetch conversation:', error);
    return null;
  }
};

/**
 * Save a conversation to the backend
 */
export const saveConversation = async (
  conversation: Conversation
): Promise<{ success: boolean; error?: string }> => {
  try {
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      throw new APIError('Authentication required', 401);
    }

    const response = await fetch('/api/chat/conversations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${session.access_token}`,
      },
      body: JSON.stringify({ conversation }),
    });

    if (!response.ok) {
      // If API endpoint doesn't exist yet, return success (localStorage fallback)
      if (response.status === 404) {
        return { success: true };
      }
      
      const errorData = await response.json().catch(() => null);
      throw new APIError(
        errorData?.error || `HTTP error! status: ${response.status}`,
        response.status
      );
    }

    const data = await response.json();
    return { success: true };
  } catch (error) {
    console.error('Failed to save conversation:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Failed to save conversation'
    };
  }
};

/**
 * Update a conversation in the backend
 */
export const updateConversation = async (
  conversationId: string,
  updates: Partial<Conversation>
): Promise<{ success: boolean; error?: string }> => {
  try {
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      throw new APIError('Authentication required', 401);
    }

    const response = await fetch(`/api/chat/conversations/${conversationId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${session.access_token}`,
      },
      body: JSON.stringify({ updates }),
    });

    if (!response.ok) {
      // If API endpoint doesn't exist yet, return success (localStorage fallback)
      if (response.status === 404) {
        return { success: true };
      }
      
      const errorData = await response.json().catch(() => null);
      throw new APIError(
        errorData?.error || `HTTP error! status: ${response.status}`,
        response.status
      );
    }

    return { success: true };
  } catch (error) {
    console.error('Failed to update conversation:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Failed to update conversation'
    };
  }
};

/**
 * Delete a conversation from the backend
 */
export const deleteConversation = async (
  conversationId: string
): Promise<{ success: boolean; error?: string }> => {
  try {
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      throw new APIError('Authentication required', 401);
    }

    const response = await fetch(`/api/chat/conversations/${conversationId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${session.access_token}`,
      },
    });

    if (!response.ok) {
      // If API endpoint doesn't exist yet, return success (localStorage fallback)
      if (response.status === 404) {
        return { success: true };
      }
      
      const errorData = await response.json().catch(() => null);
      throw new APIError(
        errorData?.error || `HTTP error! status: ${response.status}`,
        response.status
      );
    }

    return { success: true };
  } catch (error) {
    console.error('Failed to delete conversation:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Failed to delete conversation'
    };
  }
};

/**
 * Search conversations by content or title
 */
export const searchConversations = async (
  query: string,
  filters?: {
    specialty?: 'cardiology' | 'obgyn';
    dateRange?: { start: Date; end: Date };
    messageCount?: { min: number; max: number };
  }
): Promise<ConversationSummary[]> => {
  try {
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      throw new APIError('Authentication required', 401);
    }

    const searchParams = new URLSearchParams({
      q: query,
      ...(filters?.specialty && { specialty: filters.specialty }),
      ...(filters?.dateRange && {
        startDate: filters.dateRange.start.toISOString(),
        endDate: filters.dateRange.end.toISOString(),
      }),
      ...(filters?.messageCount && {
        minMessages: filters.messageCount.min.toString(),
        maxMessages: filters.messageCount.max.toString(),
      }),
    });

    const response = await fetch(`/api/chat/search?${searchParams}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${session.access_token}`,
      },
    });

    if (!response.ok) {
      // If API endpoint doesn't exist yet, return empty results
      if (response.status === 404) {
        return [];
      }
      
      const errorData = await response.json().catch(() => null);
      throw new APIError(
        errorData?.error || `HTTP error! status: ${response.status}`,
        response.status
      );
    }

    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error('Failed to search conversations:', error);
    return [];
  }
};

/**
 * Get conversation statistics for the current user
 */
export const getConversationStats = async (): Promise<{
  totalConversations: number;
  totalMessages: number;
  messagesBySpecialty: { cardiology: number; obgyn: number };
  averageMessageLength: number;
  lastActivity: Date | null;
}> => {
  try {
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      throw new APIError('Authentication required', 401);
    }

    const response = await fetch('/api/chat/stats', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${session.access_token}`,
      },
    });

    if (!response.ok) {
      // If API endpoint doesn't exist yet, return default stats
      if (response.status === 404) {
        return {
          totalConversations: 0,
          totalMessages: 0,
          messagesBySpecialty: { cardiology: 0, obgyn: 0 },
          averageMessageLength: 0,
          lastActivity: null
        };
      }
      
      const errorData = await response.json().catch(() => null);
      throw new APIError(
        errorData?.error || `HTTP error! status: ${response.status}`,
        response.status
      );
    }

    const data = await response.json();
    return {
      ...data,
      lastActivity: data.lastActivity ? new Date(data.lastActivity) : null
    };
  } catch (error) {
    console.error('Failed to fetch conversation stats:', error);
    return {
      totalConversations: 0,
      totalMessages: 0,
      messagesBySpecialty: { cardiology: 0, obgyn: 0 },
      averageMessageLength: 0,
      lastActivity: null
    };
  }
};

/**
 * Sync local conversations with backend (for offline/online sync)
 */
export const syncConversations = async (
  localConversations: Conversation[]
): Promise<{
  success: boolean;
  syncedCount: number;
  conflicts: Array<{ localId: string; remoteId: string }>;
  error?: string;
}> => {
  try {
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      throw new APIError('Authentication required', 401);
    }

    const response = await fetch('/api/chat/sync', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${session.access_token}`,
      },
      body: JSON.stringify({ conversations: localConversations }),
    });

    if (!response.ok) {
      // If API endpoint doesn't exist yet, return no-op success
      if (response.status === 404) {
        return {
          success: true,
          syncedCount: 0,
          conflicts: []
        };
      }
      
      const errorData = await response.json().catch(() => null);
      throw new APIError(
        errorData?.error || `HTTP error! status: ${response.status}`,
        response.status
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to sync conversations:', error);
    return {
      success: false,
      syncedCount: 0,
      conflicts: [],
      error: error instanceof Error ? error.message : 'Failed to sync conversations'
    };
  }
}; 