import { Conversation, ChatHistoryStorage } from '../../types/chat';

// Storage keys
const STORAGE_KEYS = {
  CONVERSATIONS: 'medimind-conversations',
  USER_PREFERENCES: 'medimind-chat-preferences',
  DRAFT_MESSAGES: 'medimind-draft-messages'
} as const;

// Storage version for migration handling
const STORAGE_VERSION = '1.0';

// Interfaces for storage data
interface StoragePreferences {
  autoSave: boolean;
  maxStoredConversations: number;
  retentionDays: number;
}

interface DraftMessage {
  conversationId: string | null;
  content: string;
  timestamp: Date;
}

/**
 * Save conversations to localStorage
 */
export const saveConversations = (conversations: Conversation[]): void => {
  try {
    const dataToStore: ChatHistoryStorage = {
      conversations,
      lastUpdated: new Date(),
      version: STORAGE_VERSION
    };
    
    localStorage.setItem(STORAGE_KEYS.CONVERSATIONS, JSON.stringify(dataToStore));
  } catch (error) {
    console.error('Failed to save conversations to localStorage:', error);
    // Handle quota exceeded or other storage errors
    if (error instanceof Error && error.name === 'QuotaExceededError') {
      throw new Error('Storage quota exceeded. Please clear some conversation history.');
    }
    throw error;
  }
};

/**
 * Load conversations from localStorage
 */
export const loadConversations = (): Conversation[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.CONVERSATIONS);
    if (!stored) {
      return [];
    }

    const parsed: ChatHistoryStorage = JSON.parse(stored);
    
    // Handle version migration if needed
    if (parsed.version !== STORAGE_VERSION) {
      return migrateConversationData(parsed);
    }

    // Convert date strings back to Date objects
    return parsed.conversations.map(conversation => ({
      ...conversation,
      createdAt: new Date(conversation.createdAt),
      updatedAt: new Date(conversation.updatedAt),
      messages: conversation.messages.map(message => ({
        ...message,
        timestamp: new Date(message.timestamp)
      })),
      metadata: conversation.metadata ? {
        ...conversation.metadata,
        lastActivity: new Date(conversation.metadata.lastActivity)
      } : undefined
    }));
  } catch (error) {
    console.error('Failed to load conversations from localStorage:', error);
    return [];
  }
};

/**
 * Get a specific conversation by ID
 */
export const getConversationById = (conversationId: string): Conversation | null => {
  const conversations = loadConversations();
  return conversations.find(conv => conv.id === conversationId) || null;
};

/**
 * Delete a conversation from storage
 */
export const deleteConversationFromStorage = (conversationId: string): void => {
  const conversations = loadConversations();
  const filteredConversations = conversations.filter(conv => conv.id !== conversationId);
  saveConversations(filteredConversations);
};

/**
 * Update a specific conversation in storage
 */
export const updateConversationInStorage = (conversationId: string, updates: Partial<Conversation>): void => {
  const conversations = loadConversations();
  const updatedConversations = conversations.map(conv =>
    conv.id === conversationId
      ? { ...conv, ...updates, updatedAt: new Date() }
      : conv
  );
  saveConversations(updatedConversations);
};

/**
 * Save user preferences for chat storage
 */
export const saveStoragePreferences = (preferences: StoragePreferences): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.USER_PREFERENCES, JSON.stringify(preferences));
  } catch (error) {
    console.error('Failed to save storage preferences:', error);
  }
};

/**
 * Load user preferences for chat storage
 */
export const loadStoragePreferences = (): StoragePreferences => {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.USER_PREFERENCES);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Failed to load storage preferences:', error);
  }

  // Return default preferences
  return {
    autoSave: true,
    maxStoredConversations: 100,
    retentionDays: 90
  };
};

/**
 * Save draft message for a conversation
 */
export const saveDraftMessage = (conversationId: string | null, content: string): void => {
  try {
    const draft: DraftMessage = {
      conversationId,
      content,
      timestamp: new Date()
    };
    localStorage.setItem(STORAGE_KEYS.DRAFT_MESSAGES, JSON.stringify(draft));
  } catch (error) {
    console.error('Failed to save draft message:', error);
  }
};

/**
 * Load draft message for a conversation
 */
export const loadDraftMessage = (conversationId: string | null): string | null => {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.DRAFT_MESSAGES);
    if (stored) {
      const draft: DraftMessage = JSON.parse(stored);
      if (draft.conversationId === conversationId) {
        return draft.content;
      }
    }
  } catch (error) {
    console.error('Failed to load draft message:', error);
  }
  return null;
};

/**
 * Clear draft message
 */
export const clearDraftMessage = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEYS.DRAFT_MESSAGES);
  } catch (error) {
    console.error('Failed to clear draft message:', error);
  }
};

/**
 * Clear all stored chat data
 */
export const clearAllChatData = (): void => {
  try {
    Object.values(STORAGE_KEYS).forEach(key => {
      localStorage.removeItem(key);
    });
  } catch (error) {
    console.error('Failed to clear chat data:', error);
  }
};

/**
 * Get storage usage information
 */
export const getStorageInfo = (): {
  used: number;
  available: number;
  conversationCount: number;
  totalMessages: number;
} => {
  const conversations = loadConversations();
  const totalMessages = conversations.reduce((total, conv) => total + conv.messages.length, 0);
  
  // Estimate storage usage (approximate)
  const conversationData = localStorage.getItem(STORAGE_KEYS.CONVERSATIONS);
  const usedBytes = conversationData ? new Blob([conversationData]).size : 0;
  
  // Most browsers have 5-10MB localStorage limit
  const estimatedLimit = 5 * 1024 * 1024; // 5MB
  
  return {
    used: usedBytes,
    available: estimatedLimit - usedBytes,
    conversationCount: conversations.length,
    totalMessages
  };
};

/**
 * Clean up old conversations based on retention policy
 */
export const cleanupOldConversations = (retentionDays: number = 90): number => {
  const conversations = loadConversations();
  const cutoffDate = new Date(Date.now() - retentionDays * 24 * 60 * 60 * 1000);
  
  const filteredConversations = conversations.filter(conv => 
    conv.updatedAt > cutoffDate
  );
  
  const removedCount = conversations.length - filteredConversations.length;
  
  if (removedCount > 0) {
    saveConversations(filteredConversations);
  }
  
  return removedCount;
};

/**
 * Handle data migration between storage versions
 */
const migrateConversationData = (oldData: any): Conversation[] => {
  console.log('Migrating conversation data from version:', oldData.version);
  
  // For now, just return empty array for unsupported versions
  // In the future, add migration logic here
  if (oldData.version === '0.9') {
    // Example migration logic
    return oldData.conversations || [];
  }
  
  return [];
};

/**
 * Export conversations to JSON file
 */
export const exportConversations = (): string => {
  const conversations = loadConversations();
  const exportData = {
    conversations,
    exportedAt: new Date(),
    version: STORAGE_VERSION,
    source: 'MediMind Expert'
  };
  
  return JSON.stringify(exportData, null, 2);
};

/**
 * Import conversations from JSON data
 */
export const importConversations = (jsonData: string): {
  success: boolean;
  importedCount: number;
  error?: string;
} => {
  try {
    const importData = JSON.parse(jsonData);
    
    if (!importData.conversations || !Array.isArray(importData.conversations)) {
      return { success: false, importedCount: 0, error: 'Invalid data format' };
    }
    
    const existingConversations = loadConversations();
    const existingIds = new Set(existingConversations.map(conv => conv.id));
    
    // Filter out duplicates
    const newConversations = importData.conversations.filter(
      (conv: any) => !existingIds.has(conv.id)
    );
    
    const allConversations = [...existingConversations, ...newConversations];
    saveConversations(allConversations);
    
    return { success: true, importedCount: newConversations.length };
  } catch (error) {
    return { 
      success: false, 
      importedCount: 0, 
      error: error instanceof Error ? error.message : 'Failed to import data'
    };
  }
}; 