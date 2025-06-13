export interface Message {
  id: string;
  content: string;
  type: 'user' | 'ai';
  timestamp: Date;
  status?: 'sending' | 'sent' | 'error';
  sources?: SourceReference[];
  attachments?: Attachment[];
}

export interface SourceReference {
  id: string;
  title: string;
  url?: string;
  type: 'guideline' | 'research' | 'document' | 'textbook' | 'personal';
  excerpt?: string;
  // OpenAI Vector Store specific fields
  openaiFileId?: string;
  vectorStoreId?: string;
  confidenceScore?: number; // 0-1 relevance score from Vector Store
  chunkIndex?: number; // Which chunk of the document this reference comes from
  documentMetadata?: {
    uploadDate?: string;
    fileSize?: number;
    pageNumber?: number;
    sectionTitle?: string;
    category?: string;
    tags?: string[];
  };
  // Vector Store context
  vectorStoreContext?: {
    namespace?: string;
    retrievalMethod?: 'semantic' | 'keyword' | 'hybrid';
    queryContext?: string;
  };
}

export interface Attachment {
  id: string;
  name: string;
  type: string;
  size: number;
  url?: string;
  preview?: string;
  // New fields for Flowise integration
  base64Data?: string; // Base64 data URL format: "data:mime/type;base64,data"
  uploadType?: FlowiseUploadType; // Type of upload for Flowise API
}

// Flowise upload types
export type FlowiseUploadType = 'file' | 'file:rag' | 'file:full' | 'audio' | 'url';

// Flowise API upload format
export interface FlowiseUpload {
  data: string; // Base64 data URL or URL
  type: FlowiseUploadType;
  name: string;
  mime: string;
}

// Knowledge base types
export type KnowledgeBaseType = 'curated' | 'personal';

// Case management interfaces
export interface PatientCase {
  id: string;
  title: string;
  description: string;
  anonymizedInfo: string;
  createdAt: Date;
  updatedAt: Date;
  specialty?: 'cardiology' | 'obgyn';
  status: 'active' | 'archived';
  conversationId?: string;
  metadata?: {
    tags?: string[];
    category?: string;
    complexity?: 'low' | 'medium' | 'high';
  };
}

export interface CaseContext {
  activeCase: PatientCase | null;
  isInCaseDiscussion: boolean;
  caseHistory: PatientCase[];
}

// New conversation interface for history management
export interface Conversation {
  id: string;
  title: string;
  messages: Message[];
  createdAt: Date;
  updatedAt: Date;
  specialty?: 'cardiology' | 'obgyn';
  caseId?: string; // Link to associated case if any
  metadata?: {
    messageCount: number;
    lastActivity: Date;
  };
}

export interface ChatState {
  messages: Message[];
  isTyping: boolean;
  currentSessionId: string;
  isLoading: boolean;
  error?: string;
  // New conversation management state
  conversations: Conversation[];
  activeConversationId: string | null;
  isLoadingHistory: boolean;
  // Case management state
  caseContext: CaseContext;
  // Knowledge base selection state (top-level, not in caseContext)
  selectedKnowledgeBase: KnowledgeBaseType;
  personalDocumentCount: number;
  // Vector Store information for OpenAI integration
  vectorStoreInfo: {
    vectorStoreId: string | null;
    documentCount: number;
  };
  vectorStoreStats: {
    documentCount: number;
    totalSize: number;
  };
}

export interface SendMessageOptions {
  sessionId: string;
  attachments?: Attachment[];
  messageType?: 'text' | 'case' | 'document';
  caseContext?: PatientCase;
  knowledgeBase?: KnowledgeBaseType;
}

// New interfaces for history management
export interface ConversationSummary {
  id: string;
  title: string;
  lastMessage?: string;
  messageCount: number;
  updatedAt: Date;
  specialty?: 'cardiology' | 'obgyn';
  caseId?: string;
}

export interface ChatHistoryStorage {
  conversations: Conversation[];
  lastUpdated: Date;
  version: string;
} 