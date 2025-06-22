// API functions for OpenAI Vector Store integration

import { createClient } from '@supabase/supabase-js';
import type {
  UserVectorStore,
  UserDocument,
  VectorStoreCreateRequest,
  VectorStoreCreateResponse,
  VectorStoreGetResponse,
  VectorStoreDeleteResponse,
  DocumentUploadRequest,
  DocumentUploadResponse,
  DocumentListParams,
  DocumentListResponse,
  DocumentDeleteRequest,
  DocumentUpdateRequest,
  ApiResponse
} from '../../types/openai-vector-store';
import {
  VectorStoreError,
  DocumentUploadError
} from '../../types/openai-vector-store';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

// Singleton Supabase client to prevent multiple instances
let supabaseInstance: ReturnType<typeof createClient> | null = null;
const getSupabaseClient = () => {
  if (!supabaseInstance) {
    supabaseInstance = createClient(supabaseUrl, supabaseAnonKey);
  }
  return supabaseInstance;
};

const supabase = getSupabaseClient();

// Simple cache to prevent duplicate simultaneous requests with longer TTL
const requestCache = new Map<string, { promise: Promise<any>; timestamp: number }>();
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes cache TTL

// Rate limiting helper with exponential backoff
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

async function makeRequestWithRetry<T>(
  requestFn: () => Promise<T>,
  cacheKey?: string,
  maxRetries: number = 3
): Promise<T> {
  // Check cache for ongoing requests with TTL
  if (cacheKey) {
    const cached = requestCache.get(cacheKey);
    if (cached && (Date.now() - cached.timestamp) < CACHE_TTL) {
      console.log(`Returning cached request for: ${cacheKey} (age: ${(Date.now() - cached.timestamp) / 1000}s)`);
      return cached.promise;
    }
  }

  const executeRequest = async (): Promise<T> => {
    let lastError: Error | null = null;
    
    for (let attempt = 0; attempt < maxRetries; attempt++) {
      try {
        const result = await requestFn();
        return result;
      } catch (error) {
        lastError = error instanceof Error ? error : new Error('Unknown error');
        
        // Check if it's a rate limit error
        if (lastError.message.includes('Rate limit exceeded') || 
            lastError.message.includes('429') ||
            lastError.message.includes('Try again after')) {
          
          // Extract wait time from message if available
          const waitTimeMatch = lastError.message.match(/Try again after (\d+) minutes?/);
          let waitTime: number;
          
          if (waitTimeMatch) {
            // Use the exact wait time specified by the backend
            waitTime = parseInt(waitTimeMatch[1]) * 60 * 1000; // Convert minutes to ms
            console.log(`Backend requested wait time: ${waitTime / 1000}s`);
          } else {
            // Exponential backoff with max of 10 minutes
            waitTime = Math.min(1000 * Math.pow(2, attempt), 10 * 60 * 1000); // Max 10 minutes
          }
          
          if (attempt < maxRetries - 1) {
            console.log(`Rate limited, waiting ${waitTime / 1000}s before retry ${attempt + 1}/${maxRetries}`);
            await sleep(waitTime);
            continue;
          } else {
            // On final attempt, throw a more user-friendly error
            throw new Error('Rate limit exceeded. Please wait a few minutes before trying again.');
          }
        }
        
        // For non-rate-limit errors, don't retry
        throw lastError;
      }
    }
    
    throw lastError || new Error('Max retries exceeded');
  };

  // Cache the promise if cache key provided
  if (cacheKey) {
    const promise = executeRequest().finally(() => {
      // Remove from cache when done, but keep successful results for TTL
      setTimeout(() => {
        requestCache.delete(cacheKey);
      }, CACHE_TTL);
    });
    
    requestCache.set(cacheKey, { promise, timestamp: Date.now() });
    return promise;
  }

  return executeRequest();
}

/**
 * Vector Store Management
 */

// Create a new Vector Store for the user
export async function createVectorStore(
  request: VectorStoreCreateRequest
): Promise<VectorStoreCreateResponse> {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) {
    throw new VectorStoreError('Authentication required');
  }

  const userId = session.user.id;
  const cacheKey = `createVectorStore-${userId}`;

  return makeRequestWithRetry(async () => {
    const response = await fetch('/.netlify/functions/manageVectorStore', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${session.access_token}`,
      },
      body: JSON.stringify(request),
    });

    const responseData = await response.json();
    console.log('Raw backend response:', responseData);

    if (!response.ok) {
      throw new VectorStoreError(responseData.error || 'Failed to create Vector Store', responseData.code);
    }

    // Backend wraps data in a 'data' property, so we need to extract it
    const result: VectorStoreCreateResponse = {
      message: responseData.message || 'Vector Store created successfully',
      vectorStore: responseData.data?.vectorStore || responseData.vectorStore
    };

    console.log('Parsed response:', result);
    return result;
  }, cacheKey);
}

// Get user's Vector Store
export async function getUserVectorStore(): Promise<VectorStoreGetResponse> {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) {
    throw new VectorStoreError('Authentication required');
  }

  const userId = session.user.id;
  const cacheKey = `getUserVectorStore-${userId}`;

  return makeRequestWithRetry(async () => {
    const response = await fetch('/.netlify/functions/manageVectorStore', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${session.access_token}`,
      },
    });

    const responseData = await response.json();
    console.log('Raw getUserVectorStore response:', responseData);

    if (!response.ok) {
      throw new VectorStoreError(responseData.error || 'Failed to get Vector Store');
    }

    // Backend wraps data in a 'data' property, so we need to extract it
    const result: VectorStoreGetResponse = {
      vectorStore: responseData.data?.vectorStore || responseData.vectorStore
    };

    console.log('Parsed getUserVectorStore response:', {
      vectorStore: result.vectorStore
    });
    
    // Add detailed logging for debugging backend mismatch
    const currentUser = await supabase.auth.getUser();
    console.log('🔍 VECTOR STORE DEBUG - Frontend Data:', {
      userId: currentUser.data.user?.id,
      vectorStoreId: result.vectorStore?.openai_vector_store_id,
      vectorStoreName: result.vectorStore?.name,
      vectorStoreStatus: result.vectorStore?.status,
      documentCount: result.vectorStore?.document_count,
      fullVectorStoreData: result.vectorStore
    });

    return result;
  }, cacheKey);
}

// Delete user's Vector Store
export async function deleteVectorStore(): Promise<VectorStoreDeleteResponse> {
  try {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      throw new VectorStoreError('Authentication required');
    }

    const response = await fetch('/.netlify/functions/manageVectorStore', {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${session.access_token}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new VectorStoreError(data.error || 'Failed to delete Vector Store');
    }

    return data;
  } catch (error) {
    console.error('Error deleting Vector Store:', error);
    if (error instanceof VectorStoreError) {
      throw error;
    }
    throw new VectorStoreError('Failed to delete Vector Store');
  }
}

/**
 * Document Management
 */

// Upload document to OpenAI Vector Store
export async function uploadDocumentToVectorStore(
  request: DocumentUploadRequest
): Promise<DocumentUploadResponse> {
  try {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      throw new DocumentUploadError('Authentication required');
    }

    // Create FormData for file upload
    const formData = new FormData();
    formData.append('file', request.file);
    formData.append('vectorStoreId', request.vectorStoreId);
    formData.append('title', request.title);
    
    if (request.description) {
      formData.append('description', request.description);
    }
    
    if (request.category) {
      formData.append('category', request.category);
    }
    
    if (request.tags && request.tags.length > 0) {
      formData.append('tags', JSON.stringify(request.tags));
    }

    const response = await fetch('/.netlify/functions/uploadDocumentToOpenAI', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${session.access_token}`,
      },
      body: formData,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new DocumentUploadError(
        data.error || 'Failed to upload document',
        data.documentId,
        data.uploadedFileId,
        data.errorDetails
      );
    }

    return data;
  } catch (error) {
    console.error('Error uploading document to Vector Store:', error);
    if (error instanceof DocumentUploadError) {
      throw error;
    }
    throw new DocumentUploadError('Failed to upload document to Vector Store');
  }
}

// List user's documents
export async function listUserDocuments(
  params: DocumentListParams = {}
): Promise<DocumentListResponse> {
  try {
    const {
      category,
      search,
      tags,
      limit = 20,
      offset = 0,
      sortBy = 'created_at',
      sortOrder = 'desc'
    } = params;

    let query = supabase
      .from('user_documents')
      .select('*', { count: 'exact' })
      .range(offset, offset + limit - 1)
      .order(sortBy, { ascending: sortOrder === 'asc' });

    // Apply filters
    if (category) {
      query = query.eq('category', category);
    }

    if (search) {
      query = query.or(
        `title.ilike.%${search}%,description.ilike.%${search}%,file_name.ilike.%${search}%`
      );
    }

    if (tags && tags.length > 0) {
      query = query.overlaps('tags', tags);
    }

    const { data, error, count } = await query;

    if (error) {
      throw new Error(error.message);
    }

    return {
      documents: (data || []) as unknown as UserDocument[],
      total: count || 0,
      hasMore: (count || 0) > offset + limit
    };
  } catch (error) {
    console.error('Error listing user documents:', error);
    throw new Error('Failed to list documents');
  }
}

// Get a specific document
export async function getUserDocument(documentId: string): Promise<UserDocument> {
  try {
    const { data, error } = await supabase
      .from('user_documents')
      .select('*')
      .eq('id', documentId)
      .single();

    if (error) {
      throw new Error(error.message);
    }

    if (!data) {
      throw new Error('Document not found');
    }

    return data as unknown as UserDocument;
  } catch (error) {
    console.error('Error getting user document:', error);
    throw new Error('Failed to get document');
  }
}

// Update document metadata
export async function updateUserDocument(
  request: DocumentUpdateRequest
): Promise<UserDocument> {
  try {
    const updateData: Partial<UserDocument> = {};
    
    if (request.title !== undefined) updateData.title = request.title;
    if (request.description !== undefined) updateData.description = request.description;
    if (request.category !== undefined) updateData.category = request.category;
    if (request.tags !== undefined) updateData.tags = request.tags;
    if (request.is_private !== undefined) updateData.is_private = request.is_private;

    const { data, error } = await supabase
      .from('user_documents')
      .update(updateData)
      .eq('id', request.documentId)
      .select()
      .single();

    if (error) {
      throw new Error(error.message);
    }

    if (!data) {
      throw new Error('Document not found');
    }

    return data as unknown as UserDocument;
  } catch (error) {
    console.error('Error updating user document:', error);
    throw new Error('Failed to update document');
  }
}

// Delete document from Vector Store and database
export async function deleteUserDocument(
  request: DocumentDeleteRequest
): Promise<{ success: boolean; message: string }> {
  try {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      throw new Error('Authentication required');
    }

    // Call the Netlify function to delete from OpenAI and database
    const response = await fetch('/.netlify/functions/deleteDocumentFromOpenAI', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${session.access_token}`
      },
      body: JSON.stringify({
        documentId: request.documentId
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `HTTP ${response.status}: ${response.statusText}`);
    }

    const result = await response.json();

    return {
      success: true,
      message: result.message || 'Document deleted successfully from OpenAI and database.'
    };
  } catch (error) {
    console.error('Error deleting user document:', error);
    throw new Error(error instanceof Error ? error.message : 'Failed to delete document');
  }
}

/**
 * Utility Functions
 */

// Check if user has a Vector Store
export async function checkUserVectorStore(): Promise<{ hasVectorStore: boolean; vectorStore?: UserVectorStore }> {
  try {
    const response = await getUserVectorStore();
    return {
      hasVectorStore: response.vectorStore !== null,
      vectorStore: response.vectorStore || undefined
    };
  } catch (error) {
    console.error('Error checking user Vector Store:', error);
    return { hasVectorStore: false };
  }
}

// Get Vector Store status and health
export async function getVectorStoreStatus(): Promise<{
  status: string;
  documentCount: number;
  totalSize: number;
  openaiStatus?: string;
  openaiFileCounts?: any;
  errorMessage?: string;
}> {
  try {
    const response = await getUserVectorStore();
    
    if (!response.vectorStore) {
      return {
        status: 'not_found',
        documentCount: 0,
        totalSize: 0,
        errorMessage: 'No Vector Store found'
      };
    }

    return {
      status: response.vectorStore.status,
      documentCount: response.vectorStore.document_count,
      totalSize: response.vectorStore.total_size_bytes,
      openaiStatus: response.vectorStore.openai_status,
      openaiFileCounts: response.vectorStore.openai_file_counts,
      errorMessage: response.vectorStore.openai_error
    };
  } catch (error) {
    console.error('Error getting Vector Store status:', error);
    return {
      status: 'error',
      documentCount: 0,
      totalSize: 0,
      errorMessage: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

// Initialize Vector Store for new user
export async function initializeUserVectorStore(
  name: string = 'Personal Knowledge Base',
  description: string = 'Personal medical knowledge base and documents'
): Promise<VectorStoreCreateResponse> {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) {
    throw new VectorStoreError('Authentication required');
  }

  const userId = session.user.id;
  const cacheKey = `initializeUserVectorStore-${userId}`;

  return makeRequestWithRetry(async () => {
    // First check if user already has a Vector Store
    const { hasVectorStore, vectorStore } = await checkUserVectorStore();
    
    console.log('CheckUserVectorStore result:', { hasVectorStore, vectorStore });
    
    if (hasVectorStore && vectorStore) {
      // Return existing vector store information in the expected format
      const existingResponse = {
        message: 'Vector Store already exists',
        vectorStore: {
          id: vectorStore.id,
          openai_vector_store_id: vectorStore.openai_vector_store_id,
          name: vectorStore.name,
          description: vectorStore.description || '',
          status: vectorStore.status,
          document_count: vectorStore.document_count,
          created_at: vectorStore.created_at
        }
      };
      console.log('Returning existing vector store response:', existingResponse);
      return existingResponse;
    }
    
    // If no vector store exists, create a new one
    console.log('Creating new vector store...');
    const createResponse = await createVectorStore({ name, description });
    console.log('Create vector store response:', createResponse);
    return createResponse;
  }, cacheKey);
}

// Count user documents by category
export async function getUserDocumentStats(): Promise<{
  totalDocuments: number;
  categoryCounts: Record<string, number>;
  totalSize: number;
}> {
  try {
    const { data, error } = await supabase
      .from('user_documents')
      .select('category, file_size')
      .eq('upload_status', 'completed');

    if (error) {
      throw new Error(error.message);
    }

    const stats = {
      totalDocuments: data?.length || 0,
      categoryCounts: {} as Record<string, number>,
      totalSize: 0
    };

    if (data) {
      for (const doc of data) {
        const docData = doc as any; // Type assertion for database row
        // Count by category
        stats.categoryCounts[docData.category] = (stats.categoryCounts[docData.category] || 0) + 1;
        
        // Sum file sizes
        stats.totalSize += docData.file_size || 0;
      }
    }

    return stats;
  } catch (error) {
    console.error('Error getting user document stats:', error);
    throw new Error('Failed to get document statistics');
  }
} 