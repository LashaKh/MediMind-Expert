import React, { useState, useEffect } from 'react';
import { 
  Database, 
  Plus, 
  Settings, 
  AlertCircle, 
  CheckCircle, 
  RefreshCw, 
  Trash2,
  FileText,
  Users,
  Clock,
  HardDrive
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { 
  getUserVectorStore,
  createVectorStore,
  deleteVectorStore,
  getVectorStoreStatus,
  initializeUserVectorStore,
  getUserDocumentStats
} from '../../lib/api/vectorStore';
import type { 
  UserVectorStore,
  VectorStoreStatus
} from '../../types/openai-vector-store';

interface VectorStoreStats {
  totalDocuments: number;
  categoryCounts: Record<string, number>;
  totalSize: number;
}

export const VectorStoreManager: React.FC = () => {
  const { user } = useAuth();
  const [vectorStore, setVectorStore] = useState<UserVectorStore | null>(null);
  const [status, setStatus] = useState<VectorStoreStatus | null>(null);
  const [stats, setStats] = useState<VectorStoreStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isCreating, setIsCreating] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [createForm, setCreateForm] = useState({
    name: '',
    description: ''
  });

  // Load Vector Store data
  const loadVectorStore = async () => {
    if (!user) return;

    try {
      setIsLoading(true);
      setError(null);

      const [vectorStoreResponse, statusResponse, statsResponse] = await Promise.allSettled([
        getUserVectorStore(),
        getVectorStoreStatus().catch(() => null),
        getUserDocumentStats().catch(() => null)
      ]);

      // Handle Vector Store response
      if (vectorStoreResponse.status === 'fulfilled') {
        setVectorStore(vectorStoreResponse.value.vectorStore);
      } else {
        console.error('Error loading Vector Store:', vectorStoreResponse.reason);
      }

      // Handle status response
      if (statusResponse.status === 'fulfilled' && statusResponse.value) {
        // Convert the API response to VectorStoreStatus format
        const statusData = statusResponse.value;
        setStatus({
          status: statusData.status as 'active' | 'inactive' | 'error' | 'deleting',
          document_count: statusData.documentCount,
          total_size_bytes: statusData.totalSize,
          openai_status: statusData.openaiStatus,
          openai_file_counts: statusData.openaiFileCounts,
          error_message: statusData.errorMessage
        });
      }

      // Handle stats response
      if (statsResponse.status === 'fulfilled' && statsResponse.value) {
        setStats(statsResponse.value);
      }

    } catch (err) {
      console.error('Error loading Vector Store data:', err);
      setError(err instanceof Error ? err.message : 'Failed to load Vector Store data');
    } finally {
      setIsLoading(false);
    }
  };

  // Create new Vector Store
  const handleCreateVectorStore = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!createForm.name.trim()) {
      setError('Vector Store name is required');
      return;
    }

    try {
      setIsCreating(true);
      setError(null);

      const response = await createVectorStore({
        name: createForm.name.trim(),
        description: createForm.description.trim() || undefined
      });

      // Reload data to get the new Vector Store
      await loadVectorStore();
      
      // Reset form and close modal
      setCreateForm({ name: '', description: '' });
      setShowCreateForm(false);

    } catch (err) {
      console.error('Error creating Vector Store:', err);
      setError(err instanceof Error ? err.message : 'Failed to create Vector Store');
    } finally {
      setIsCreating(false);
    }
  };

  // Initialize with default Vector Store
  const handleInitializeDefault = async () => {
    try {
      setIsCreating(true);
      setError(null);

      await initializeUserVectorStore();
      await loadVectorStore();

    } catch (err) {
      console.error('Error initializing Vector Store:', err);
      setError(err instanceof Error ? err.message : 'Failed to initialize Vector Store');
    } finally {
      setIsCreating(false);
    }
  };

  // Delete Vector Store
  const handleDeleteVectorStore = async () => {
    if (!vectorStore) return;

    const confirmMessage = `Are you sure you want to delete your Vector Store "${vectorStore.name}"? This will permanently delete all uploaded documents and cannot be undone.`;
    
    if (!window.confirm(confirmMessage)) {
      return;
    }

    try {
      setIsDeleting(true);
      setError(null);

      await deleteVectorStore();
      
      // Clear local state
      setVectorStore(null);
      setStatus(null);
      setStats(null);

    } catch (err) {
      console.error('Error deleting Vector Store:', err);
      setError(err instanceof Error ? err.message : 'Failed to delete Vector Store');
    } finally {
      setIsDeleting(false);
    }
  };

  // Refresh data
  const handleRefresh = () => {
    loadVectorStore();
  };

  // Load data on component mount
  useEffect(() => {
    loadVectorStore();
  }, [user]);

  // Format file size
  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  // Get status color
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-600 bg-green-100 dark:bg-green-900/20';
      case 'error': return 'text-red-600 bg-red-100 dark:bg-red-900/20';
      case 'deleting': return 'text-orange-600 bg-orange-100 dark:bg-orange-900/20';
      case 'inactive': return 'text-gray-600 bg-gray-100 dark:bg-gray-900/20';
      default: return 'text-gray-600 bg-gray-100 dark:bg-gray-900/20';
    }
  };

  if (isLoading) {
    return (
      <div className="p-6">
        <div className="animate-pulse">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-gray-300 rounded"></div>
            <div className="h-6 bg-gray-300 rounded w-48"></div>
          </div>
          <div className="bg-gray-300 rounded-lg h-64"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Database className="w-8 h-8 text-primary" />
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              Vector Store Management
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Manage your OpenAI Vector Store for document storage and AI search
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <button
            onClick={handleRefresh}
            disabled={isLoading}
            className="flex items-center space-x-2 px-3 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors disabled:opacity-50"
            title="Refresh Vector Store data"
          >
            <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
          </button>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
          <div className="flex items-start space-x-3">
            <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-red-800 dark:text-red-200 font-medium">Error</p>
              <p className="text-red-700 dark:text-red-300 text-sm mt-1">{error}</p>
            </div>
          </div>
        </div>
      )}

      {/* Vector Store Status */}
      {vectorStore ? (
        <div className="space-y-6">
          {/* Vector Store Info Card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {vectorStore.name}
                </h2>
                {vectorStore.description && (
                  <p className="text-gray-600 dark:text-gray-400 mb-3">
                    {vectorStore.description}
                  </p>
                )}
                <div className="flex items-center space-x-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(vectorStore.status)}`}>
                    {vectorStore.status.charAt(0).toUpperCase() + vectorStore.status.slice(1)}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    ID: {vectorStore.openai_vector_store_id}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleDeleteVectorStore}
                  disabled={isDeleting}
                  className="flex items-center space-x-2 px-3 py-2 text-red-600 hover:text-red-700 transition-colors disabled:opacity-50"
                  title="Delete Vector Store"
                >
                  <Trash2 className="w-4 h-4" />
                  <span className="text-sm">Delete</span>
                </button>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <FileText className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Documents</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      {vectorStore.document_count}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <HardDrive className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Storage Used</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      {formatFileSize(vectorStore.total_size_bytes)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-purple-600" />
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Created</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      {new Date(vectorStore.created_at).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <Settings className="w-5 h-5 text-orange-600" />
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Last Updated</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      {new Date(vectorStore.updated_at).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* OpenAI Status Card */}
          {status && (
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                OpenAI Vector Store Status
              </h3>
              
              {status.openai_file_counts && (
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-blue-600">{status.openai_file_counts.total || 0}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Total Files</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-600">{status.openai_file_counts.completed || 0}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Completed</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-yellow-600">{status.openai_file_counts.in_progress || 0}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Processing</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-red-600">{status.openai_file_counts.failed || 0}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Failed</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-600">{status.openai_file_counts.cancelled || 0}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Cancelled</p>
                  </div>
                </div>
              )}

              {status.error_message && (
                <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                  <p className="text-red-800 dark:text-red-200 text-sm">{status.error_message}</p>
                </div>
              )}
            </div>
          )}

          {/* Document Categories */}
          {stats && stats.categoryCounts && Object.keys(stats.categoryCounts).length > 0 && (
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Document Categories
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {Object.entries(stats.categoryCounts).map(([category, count]) => (
                  <div key={category} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                    <p className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                      {category.replace('-', ' ')}
                    </p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      {count} docs
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        // No Vector Store - Show creation options
        <div className="text-center py-12">
          <Database className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
            No Vector Store Found
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
            Create a Vector Store to upload and manage your documents for AI-powered search and analysis.
          </p>
          
          <div className="space-y-4">
            <button
              onClick={handleInitializeDefault}
              disabled={isCreating}
              className="inline-flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              <Plus className="w-5 h-5" />
              <span>{isCreating ? 'Creating...' : 'Create Default Vector Store'}</span>
            </button>
            
            <div className="text-gray-500 dark:text-gray-400">or</div>
            
            <button
              onClick={() => setShowCreateForm(true)}
              className="inline-flex items-center space-x-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <Settings className="w-5 h-5" />
              <span>Create Custom Vector Store</span>
            </button>
          </div>
        </div>
      )}

      {/* Create Vector Store Modal */}
      {showCreateForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md mx-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Create Vector Store
            </h3>
            
            <form onSubmit={handleCreateVectorStore} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  value={createForm.name}
                  onChange={(e) => setCreateForm({ ...createForm, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-gray-100"
                  placeholder="My Medical Knowledge Base"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Description
                </label>
                <textarea
                  value={createForm.description}
                  onChange={(e) => setCreateForm({ ...createForm, description: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-gray-100"
                  placeholder="Personal collection of medical documents and research papers"
                  rows={3}
                />
              </div>
              
              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowCreateForm(false)}
                  className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isCreating}
                  className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
                >
                  {isCreating ? 'Creating...' : 'Create Vector Store'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}; 