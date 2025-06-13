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

const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Vector Store Management
 */

// Create a new Vector Store for the user
export async function createVectorStore(
  request: VectorStoreCreateRequest
): Promise<VectorStoreCreateResponse> {
  try {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      throw new VectorStoreError('Authentication required');
    }

    const response = await fetch('/.netlify/functions/manageVectorStore', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${session.access_token}`,
      },
      body: JSON.stringify(request),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new VectorStoreError(data.error || 'Failed to create Vector Store', data.code);
    }

    return data;
  } catch (error) {
    console.error('Error creating Vector Store:', error);
    if (error instanceof VectorStoreError) {
      throw error;
    }
    throw new VectorStoreError('Failed to create Vector Store');
  }
}

// Get user's Vector Store
export async function getUserVectorStore(): Promise<VectorStoreGetResponse> {
  try {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      throw new VectorStoreError('Authentication required');
    }

    const response = await fetch('/.netlify/functions/manageVectorStore', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${session.access_token}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new VectorStoreError(data.error || 'Failed to get Vector Store');
    }

    return data;
  } catch (error) {
    console.error('Error getting Vector Store:', error);
    if (error instanceof VectorStoreError) {
      throw error;
    }
    throw new VectorStoreError('Failed to get Vector Store');
  }
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
      documents: data || [],
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

    return data;
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

    return data;
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

    // Get document details first
    const document = await getUserDocument(request.documentId);
    
    if (request.deleteFromOpenAI !== false) {
      // TODO: Create Edge Function to delete from OpenAI Vector Store
      // For now, we'll just delete from our database
      console.log('Note: OpenAI file deletion not yet implemented');
    }

    // Delete from database
    const { error } = await supabase
      .from('user_documents')
      .delete()
      .eq('id', request.documentId);

    if (error) {
      throw new Error(error.message);
    }

    return {
      success: true,
      message: 'Document deleted successfully'
    };
  } catch (error) {
    console.error('Error deleting user document:', error);
    throw new Error('Failed to delete document');
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
  try {
    return await createVectorStore({ name, description });
  } catch (error) {
    console.error('Error initializing user Vector Store:', error);
    throw error;
  }
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
        // Count by category
        stats.categoryCounts[doc.category] = (stats.categoryCounts[doc.category] || 0) + 1;
        
        // Sum file sizes
        stats.totalSize += doc.file_size || 0;
      }
    }

    return stats;
  } catch (error) {
    console.error('Error getting user document stats:', error);
    throw new Error('Failed to get document statistics');
  }
} 