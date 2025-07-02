import React, { createContext, useContext, useReducer, ReactNode, useEffect, useCallback, useRef } from 'react';
import { Message, ChatState, Conversation, PatientCase, CaseContext, KnowledgeBaseType } from '../types/chat';
import { v4 as uuidv4 } from 'uuid';
import { checkUserVectorStore, getUserDocumentStats } from '../lib/api/vectorStore';

// Chat Actions
type ChatAction =
  | { type: 'ADD_MESSAGE'; payload: Message }
  | { type: 'UPDATE_MESSAGE'; payload: { id: string; updates: Partial<Message> } }
  | { type: 'SET_TYPING'; payload: boolean }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | undefined }
  | { type: 'CLEAR_MESSAGES' }
  | { type: 'SET_MESSAGES'; payload: Message[] }
  | { type: 'SET_CONVERSATIONS'; payload: Conversation[] }
  | { type: 'ADD_CONVERSATION'; payload: Conversation }
  | { type: 'UPDATE_CONVERSATION'; payload: { id: string; updates: Partial<Conversation> } }
  | { type: 'DELETE_CONVERSATION'; payload: string }
  | { type: 'SET_ACTIVE_CONVERSATION'; payload: string | null }
  | { type: 'SET_LOADING_HISTORY'; payload: boolean }
  | { type: 'SET_ACTIVE_CASE'; payload: PatientCase | null }
  | { type: 'ADD_CASE'; payload: PatientCase }
  | { type: 'UPDATE_CASE'; payload: { id: string; updates: Partial<PatientCase> } }
  | { type: 'SET_CASE_HISTORY'; payload: PatientCase[] }
  | { type: 'SET_CASE_DISCUSSION'; payload: boolean }
  | { type: 'SET_KNOWLEDGE_BASE'; payload: KnowledgeBaseType }
  | { type: 'SET_PERSONAL_DOCUMENT_COUNT'; payload: number }
  | { type: 'SET_VECTOR_STORE_INFO'; payload: { vectorStoreId: string | null; documentCount: number } }
  | { type: 'UPDATE_VECTOR_STORE_STATS'; payload: { documentCount: number; totalSize: number } };

// Chat Reducer
const chatReducer = (state: ChatState, action: ChatAction): ChatState => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      const updatedConversations = state.activeConversationId
        ? state.conversations.map(conv =>
            conv.id === state.activeConversationId
              ? {
                  ...conv,
                  messages: [...conv.messages, action.payload],
                  updatedAt: new Date(),
                  metadata: {
                    ...conv.metadata,
                    messageCount: conv.messages.length + 1,
                    lastActivity: new Date()
                  }
                }
              : conv
          )
        : state.conversations;

      return {
        ...state,
        messages: [...state.messages, action.payload],
        conversations: updatedConversations,
        error: undefined
      };
    
    case 'UPDATE_MESSAGE':
      return {
        ...state,
        messages: state.messages.map(msg =>
          msg.id === action.payload.id
            ? { ...msg, ...action.payload.updates }
            : msg
        )
      };
    
    case 'SET_TYPING':
      return {
        ...state,
        isTyping: action.payload
      };
    
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload
      };
    
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
        isLoading: false,
        isTyping: false
      };
    
    case 'CLEAR_MESSAGES':
      return {
        ...state,
        messages: [],
        error: undefined
      };
    
    case 'SET_MESSAGES':
      return {
        ...state,
        messages: action.payload,
        error: undefined
      };

    case 'SET_CONVERSATIONS':
      return {
        ...state,
        conversations: action.payload
      };

    case 'ADD_CONVERSATION':
      return {
        ...state,
        conversations: [...state.conversations, action.payload]
      };

    case 'UPDATE_CONVERSATION':
      return {
        ...state,
        conversations: state.conversations.map(conv =>
          conv.id === action.payload.id
            ? { ...conv, ...action.payload.updates }
            : conv
        )
      };

    case 'DELETE_CONVERSATION':
      return {
        ...state,
        conversations: state.conversations.filter(conv => conv.id !== action.payload),
        activeConversationId: state.activeConversationId === action.payload ? null : state.activeConversationId,
        messages: state.activeConversationId === action.payload ? [] : state.messages
      };

    case 'SET_ACTIVE_CONVERSATION':
      const activeConv = action.payload
        ? state.conversations.find(conv => conv.id === action.payload)
        : null;
      
      return {
        ...state,
        activeConversationId: action.payload,
        messages: activeConv ? activeConv.messages : [],
        currentSessionId: action.payload || uuidv4()
      };

    case 'SET_LOADING_HISTORY':
      return {
        ...state,
        isLoadingHistory: action.payload
      };

    // Case management actions
    case 'SET_ACTIVE_CASE':
      return {
        ...state,
        caseContext: {
          ...state.caseContext,
          activeCase: action.payload,
          isInCaseDiscussion: !!action.payload
        }
      };

    case 'ADD_CASE':
      return {
        ...state,
        caseContext: {
          ...state.caseContext,
          caseHistory: [...state.caseContext.caseHistory, action.payload]
        }
      };

    case 'UPDATE_CASE':
      return {
        ...state,
        caseContext: {
          ...state.caseContext,
          caseHistory: state.caseContext.caseHistory.map(caseItem =>
            caseItem.id === action.payload.id
              ? { ...caseItem, ...action.payload.updates }
              : caseItem
          ),
          activeCase: state.caseContext.activeCase?.id === action.payload.id
            ? { ...state.caseContext.activeCase, ...action.payload.updates }
            : state.caseContext.activeCase
        }
      };

    case 'SET_CASE_HISTORY':
      return {
        ...state,
        caseContext: {
          ...state.caseContext,
          caseHistory: action.payload
        }
      };

    case 'SET_CASE_DISCUSSION':
      return {
        ...state,
        caseContext: {
          ...state.caseContext,
          isInCaseDiscussion: action.payload
        }
      };
    
    case 'SET_KNOWLEDGE_BASE':
      return {
        ...state,
        selectedKnowledgeBase: action.payload
      };

    case 'SET_PERSONAL_DOCUMENT_COUNT':
      return {
        ...state,
        personalDocumentCount: action.payload
      };
    
    case 'SET_VECTOR_STORE_INFO':
      return {
        ...state,
        vectorStoreInfo: action.payload
      };

    case 'UPDATE_VECTOR_STORE_STATS':
      return {
        ...state,
        vectorStoreStats: action.payload
      };
    
    default:
      return state;
  }
};

// Context Interface
interface ChatContextType {
  state: ChatState;
  addMessage: (message: Omit<Message, 'id' | 'timestamp'>) => void;
  updateMessage: (id: string, updates: Partial<Message>) => void;
  setTyping: (isTyping: boolean) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | undefined) => void;
  clearMessages: () => void;
  setMessages: (messages: Message[]) => void;
  // New conversation management methods
  createNewConversation: (title?: string, specialty?: 'cardiology' | 'obgyn', caseId?: string) => string;
  setActiveConversation: (conversationId: string | null) => void;
  updateConversation: (id: string, updates: Partial<Conversation>) => void;
  deleteConversation: (conversationId: string) => void;
  loadConversations: () => Promise<void>;
  saveConversationsToStorage: () => void;
  getConversationSummaries: () => Array<{
    id: string;
    title: string;
    lastMessage?: string;
    messageCount: number;
    updatedAt: Date;
    specialty?: 'cardiology' | 'obgyn';
    caseId?: string;
  }>;
  // Case management methods
  createCase: (caseData: Omit<PatientCase, 'id' | 'createdAt' | 'updatedAt'>) => PatientCase;
  setActiveCase: (caseItem: PatientCase | null) => void;
  updateCase: (id: string, updates: Partial<PatientCase>) => void;
  getCaseHistory: () => PatientCase[];
  resetCaseContext: () => void;
  saveCasesToStorage: () => void;
  loadCases: () => Promise<void>;
  // Knowledge base management methods
  setKnowledgeBase: (type: KnowledgeBaseType) => void;
  setPersonalDocumentCount: (count: number) => void;
  // Vector Store management methods
  setVectorStoreInfo: (info: { vectorStoreId: string | null; documentCount: number }) => void;
  updateVectorStoreStats: (stats: { documentCount: number; totalSize: number }) => void;
  clearCachedData: () => boolean;
}

// Create Context
const ChatContext = createContext<ChatContextType | undefined>(undefined);

// Initial State
const initialState: ChatState = {
  messages: [],
  isTyping: false,
  currentSessionId: uuidv4(),
  isLoading: false,
  error: undefined,
  conversations: [],
  activeConversationId: null,
  isLoadingHistory: false,
  caseContext: {
    activeCase: null,
    isInCaseDiscussion: false,
    caseHistory: []
  },
  selectedKnowledgeBase: 'curated',
  personalDocumentCount: 0,
  vectorStoreInfo: { vectorStoreId: null, documentCount: 0 },
  vectorStoreStats: { documentCount: 0, totalSize: 0 }
};

// Provider Component
interface ChatProviderProps {
  children: ReactNode;
  initialMessages?: Message[];
}

export const ChatProvider: React.FC<ChatProviderProps> = ({ 
  children, 
  initialMessages = [] 
}) => {
  const [state, dispatch] = useReducer(chatReducer, {
    ...initialState,
    messages: initialMessages
  });

  // Use refs to track initialization state without causing re-renders
  const hasLoadedInitialData = useRef(false);
  const isInitializing = useRef(true);
  const isInitializingVectorStore = useRef(false);

  // Vector Store initialization
  const initializeVectorStore = useCallback(async () => {
    // Prevent multiple simultaneous calls
    if (isInitializingVectorStore.current) {
      console.log('Vector Store initialization already in progress, skipping...');
      return;
    }

    try {
      isInitializingVectorStore.current = true;
      const { hasVectorStore, vectorStore } = await checkUserVectorStore();
      
      if (hasVectorStore && vectorStore) {
        dispatch({ 
          type: 'SET_VECTOR_STORE_INFO', 
          payload: { 
            vectorStoreId: vectorStore.openai_vector_store_id,
            documentCount: vectorStore.document_count || 0
          }
        });

        // Get detailed document stats
        const stats = await getUserDocumentStats();
        dispatch({
          type: 'UPDATE_VECTOR_STORE_STATS',
          payload: {
            documentCount: stats.totalDocuments,
            totalSize: stats.totalSize
          }
        });

        // Update personal document count for knowledge base selection
        dispatch({ type: 'SET_PERSONAL_DOCUMENT_COUNT', payload: stats.totalDocuments });
      } else {
        // No Vector Store yet
        dispatch({ 
          type: 'SET_VECTOR_STORE_INFO', 
          payload: { vectorStoreId: null, documentCount: 0 }
        });
        dispatch({ type: 'SET_PERSONAL_DOCUMENT_COUNT', payload: 0 });
      }
    } catch (error) {
      console.error('Error initializing Vector Store in ChatContext:', error);
      
      // Handle rate limiting specifically
      if (error instanceof Error && error.message.includes('Rate limit exceeded')) {
        console.log('Rate limit encountered in ChatContext, will retry later...');
        // Don't set error state for rate limiting, just use default values
        dispatch({ 
          type: 'SET_VECTOR_STORE_INFO', 
          payload: { vectorStoreId: null, documentCount: 0 }
        });
        dispatch({ type: 'SET_PERSONAL_DOCUMENT_COUNT', payload: 0 });
      } else {
        // Don't fail completely, just set empty state
        dispatch({ 
          type: 'SET_VECTOR_STORE_INFO', 
          payload: { vectorStoreId: null, documentCount: 0 }
        });
        dispatch({ type: 'SET_PERSONAL_DOCUMENT_COUNT', payload: 0 });
      }
    } finally {
      isInitializingVectorStore.current = false;
    }
  }, []);

  // Initialize Vector Store on mount
  useEffect(() => {
    initializeVectorStore();
  }, [initializeVectorStore]);

  // Memoized function to save conversations to localStorage
  const saveConversationsToStorage = useCallback(() => {
    // Only save if we've finished initialization and have loaded initial data
    if (!isInitializing.current && hasLoadedInitialData.current) {
      try {
        const dataToStore = {
          conversations: state.conversations,
          lastUpdated: new Date(),
          version: '1.0'
        };
        localStorage.setItem('medimind-conversations', JSON.stringify(dataToStore));
      } catch (error) {
        console.error('Failed to save conversations to localStorage:', error);
      }
    }
  }, [state.conversations]);

  // Memoized function to load conversations from localStorage
  const loadConversations = useCallback(async (): Promise<void> => {
    dispatch({ type: 'SET_LOADING_HISTORY', payload: true });
    
    try {
      const stored = localStorage.getItem('medimind-conversations');
      console.log('Raw localStorage content:', stored);
      if (stored) {
        const parsed = JSON.parse(stored);
        console.log('Parsed conversations:', parsed);
        
        // Validate that parsed data has conversations property and it's an array
        if (parsed && Array.isArray(parsed.conversations)) {
          console.log('Found', parsed.conversations.length, 'conversations in localStorage');
          // Convert date strings back to Date objects
          const conversations = parsed.conversations.map((conv: any) => ({
            ...conv,
            createdAt: new Date(conv.createdAt),
            updatedAt: new Date(conv.updatedAt),
            messages: conv.messages.map((msg: any) => ({
              ...msg,
              timestamp: new Date(msg.timestamp)
            })),
            metadata: conv.metadata ? {
              ...conv.metadata,
              lastActivity: new Date(conv.metadata.lastActivity)
            } : undefined
          }));
          
          dispatch({ type: 'SET_CONVERSATIONS', payload: conversations });
        } else {
          console.warn('Invalid conversation data structure in localStorage, clearing...');
          localStorage.removeItem('medimind-conversations');
        }
      }
      
      // Mark that we've loaded initial data
      hasLoadedInitialData.current = true;
      
      // Allow auto-saving after a short delay to ensure all initialization is complete
      setTimeout(() => {
        isInitializing.current = false;
      }, 100);
      
    } catch (error) {
      console.error('Failed to load conversations from localStorage:', error);
      // Clear corrupted data
      localStorage.removeItem('medimind-conversations');
      dispatch({ type: 'SET_ERROR', payload: 'Failed to load conversation history' });
      hasLoadedInitialData.current = true;
      isInitializing.current = false;
    } finally {
      dispatch({ type: 'SET_LOADING_HISTORY', payload: false });
    }
  }, []);

  // Load conversations from localStorage on mount
  useEffect(() => {
    console.log('ChatContext: Loading conversations from localStorage...');
    loadConversations();
  }, [loadConversations]);

  // Auto-save conversations to localStorage when they change
  // Note: saveConversationsToStorage is intentionally NOT in the dependency array
  // to prevent infinite loops when the callback reference changes
  useEffect(() => {
    if (state.conversations.length > 0) {
      saveConversationsToStorage();
    }
  }, [state.conversations]); // Only react to conversation changes, not callback changes

  const addMessage = (message: Omit<Message, 'id' | 'timestamp'>) => {
    const fullMessage: Message = {
      ...message,
      id: uuidv4(),
      timestamp: new Date()
    };
    dispatch({ type: 'ADD_MESSAGE', payload: fullMessage });
  };

  const updateMessage = (id: string, updates: Partial<Message>) => {
    dispatch({ type: 'UPDATE_MESSAGE', payload: { id, updates } });
  };

  const setTyping = (isTyping: boolean) => {
    dispatch({ type: 'SET_TYPING', payload: isTyping });
  };

  const setLoading = (isLoading: boolean) => {
    dispatch({ type: 'SET_LOADING', payload: isLoading });
  };

  const setError = (error: string | undefined) => {
    dispatch({ type: 'SET_ERROR', payload: error });
  };

  const clearMessages = () => {
    dispatch({ type: 'CLEAR_MESSAGES' });
  };

  const setMessages = (messages: Message[]) => {
    dispatch({ type: 'SET_MESSAGES', payload: messages });
  };

  const createNewConversation = (title?: string, specialty?: 'cardiology' | 'obgyn', caseId?: string): string => {
    const conversationId = uuidv4();
    const now = new Date();
    
    const newConversation: Conversation = {
      id: conversationId,
      title: title || `New Conversation ${now.toLocaleDateString()}`,
      messages: [],
      createdAt: now,
      updatedAt: now,
      specialty,
      metadata: {
        messageCount: 0,
        lastActivity: now
      }
    };

    dispatch({ type: 'ADD_CONVERSATION', payload: newConversation });
    dispatch({ type: 'SET_ACTIVE_CONVERSATION', payload: conversationId });
    
    return conversationId;
  };

  const setActiveConversation = (conversationId: string | null) => {
    dispatch({ type: 'SET_ACTIVE_CONVERSATION', payload: conversationId });
  };

  const updateConversation = (id: string, updates: Partial<Conversation>) => {
    dispatch({ type: 'UPDATE_CONVERSATION', payload: { id, updates } });
  };

  const deleteConversation = (conversationId: string) => {
    dispatch({ type: 'DELETE_CONVERSATION', payload: conversationId });
    
    // Force clear from localStorage if this is the last conversation
    setTimeout(() => {
      const stored = localStorage.getItem('medimind-conversations');
      if (stored) {
        const parsed = JSON.parse(stored);
        const filtered = parsed.conversations.filter((conv: any) => conv.id !== conversationId);
        if (filtered.length === 0) {
          // If no conversations left, clear the storage entirely
          localStorage.removeItem('medimind-conversations');
          console.log('All conversations deleted, localStorage cleared');
        } else {
          // Otherwise, save the filtered list
          const dataToStore = {
            conversations: filtered,
            lastUpdated: new Date(),
            version: '1.0'
          };
          localStorage.setItem('medimind-conversations', JSON.stringify(dataToStore));
          console.log('Conversation deleted and localStorage updated');
        }
      }
    }, 200);
  };

  const getConversationSummaries = () => {
    return state.conversations.map(conv => ({
      id: conv.id,
      title: conv.title,
      lastMessage: conv.messages.length > 0 
        ? conv.messages[conv.messages.length - 1].content.substring(0, 100) + '...'
        : undefined,
      messageCount: conv.messages.length,
      updatedAt: conv.updatedAt,
      specialty: conv.specialty,
      caseId: conv.caseId
    }));
  };

  // Case management methods
  const createCase = (caseData: Omit<PatientCase, 'id' | 'createdAt' | 'updatedAt'>): PatientCase => {
    const now = new Date();
    const newCase: PatientCase = {
      ...caseData,
      id: uuidv4(),
      createdAt: now,
      updatedAt: now
    };

    dispatch({ type: 'ADD_CASE', payload: newCase });
    dispatch({ type: 'SET_ACTIVE_CASE', payload: newCase });
    
    return newCase;
  };

  const setActiveCase = (caseItem: PatientCase | null) => {
    dispatch({ type: 'SET_ACTIVE_CASE', payload: caseItem });
  };

  const updateCase = (id: string, updates: Partial<PatientCase>) => {
    const updatedCase = {
      ...updates,
      updatedAt: new Date()
    };
    dispatch({ type: 'UPDATE_CASE', payload: { id, updates: updatedCase } });
  };

  const getCaseHistory = (): PatientCase[] => {
    return state.caseContext.caseHistory;
  };

  const resetCaseContext = () => {
    dispatch({ type: 'SET_ACTIVE_CASE', payload: null });
    dispatch({ type: 'SET_CASE_DISCUSSION', payload: false });
  };

  // Case storage methods
  const saveCasesToStorage = useCallback(() => {
    if (!isInitializing.current && hasLoadedInitialData.current) {
      try {
        const dataToStore = {
          cases: state.caseContext.caseHistory,
          activeCase: state.caseContext.activeCase,
          lastUpdated: new Date(),
          version: '1.0'
        };
        localStorage.setItem('medimind-cases', JSON.stringify(dataToStore));
      } catch (error) {
        console.error('Failed to save cases to localStorage:', error);
      }
    }
  }, [state.caseContext.caseHistory, state.caseContext.activeCase]);

  const loadCases = useCallback(async (): Promise<void> => {
    try {
      const stored = localStorage.getItem('medimind-cases');
      if (stored) {
        const parsed = JSON.parse(stored);
        
        // Validate that parsed data has cases property and it's an array
        if (parsed && Array.isArray(parsed.cases)) {
          // Convert date strings back to Date objects
          const cases = parsed.cases.map((caseItem: any) => ({
            ...caseItem,
            createdAt: new Date(caseItem.createdAt),
            updatedAt: new Date(caseItem.updatedAt)
          }));
          
          dispatch({ type: 'SET_CASE_HISTORY', payload: cases });
          
          // Restore active case if it exists
          if (parsed.activeCase) {
            const activeCase = {
              ...parsed.activeCase,
              createdAt: new Date(parsed.activeCase.createdAt),
              updatedAt: new Date(parsed.activeCase.updatedAt)
            };
            dispatch({ type: 'SET_ACTIVE_CASE', payload: activeCase });
          }
        } else {
          console.warn('Invalid case data structure in localStorage, clearing...');
          localStorage.removeItem('medimind-cases');
        }
      }
    } catch (error) {
      console.error('Failed to load cases from localStorage:', error);
      // Clear corrupted data
      localStorage.removeItem('medimind-cases');
    }
  }, []);

  // Load cases from localStorage on mount
  useEffect(() => {
    loadCases();
  }, [loadCases]);

  // Auto-save cases to localStorage when they change
  useEffect(() => {
    if (state.caseContext.caseHistory.length > 0 || state.caseContext.activeCase) {
      saveCasesToStorage();
    }
  }, [state.caseContext.caseHistory, state.caseContext.activeCase, saveCasesToStorage]);

  // Add function to clear cached data
  const clearCachedData = useCallback(() => {
    try {
      // Clear conversation localStorage
      localStorage.removeItem('medimind_conversation');
      localStorage.removeItem('medimind_conversation_metadata');
      
      // Clear any other PPH calculator related cache
      const keysToRemove = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && (
          key.includes('pph') || 
          key.includes('calculator') || 
          key.includes('obgyn') ||
          key.includes('medimind_')
        )) {
          keysToRemove.push(key);
        }
      }
      
      keysToRemove.forEach(key => localStorage.removeItem(key));
      
      // Reset chat state
      dispatch({ type: 'CLEAR_MESSAGES' });
      
      console.log('Cached data cleared successfully');
      return true;
    } catch (error) {
      console.error('Error clearing cached data:', error);
      return false;
    }
  }, []);

  const value: ChatContextType = {
    state,
    addMessage,
    updateMessage,
    setTyping,
    setLoading,
    setError,
    clearMessages,
    setMessages,
    createNewConversation,
    setActiveConversation,
    updateConversation,
    deleteConversation,
    loadConversations,
    saveConversationsToStorage,
    getConversationSummaries,
    // Case management methods
    createCase,
    setActiveCase,
    updateCase,
    getCaseHistory,
    resetCaseContext,
    saveCasesToStorage,
    loadCases,
    // Knowledge base management methods
    setKnowledgeBase: (type: KnowledgeBaseType) => dispatch({ type: 'SET_KNOWLEDGE_BASE', payload: type }),
    setPersonalDocumentCount: (count: number) => dispatch({ type: 'SET_PERSONAL_DOCUMENT_COUNT', payload: count }),
    // Vector store management methods
    setVectorStoreInfo: (info: { vectorStoreId: string | null; documentCount: number }) => dispatch({ type: 'SET_VECTOR_STORE_INFO', payload: info }),
    updateVectorStoreStats: (stats: { documentCount: number; totalSize: number }) => dispatch({ type: 'UPDATE_VECTOR_STORE_STATS', payload: stats }),
    clearCachedData,
  };

  return (
    <ChatContext.Provider value={value}>
      {children}
    </ChatContext.Provider>
  );
};

// Hook to use Chat Context
export const useChat = (): ChatContextType => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};

export default ChatContext; 