import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Upload, X, FileText, Image, AlertCircle, CheckCircle, Loader2, Plus, Trash2, RefreshCw, AlertTriangle } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useTranslation } from '../../hooks/useTranslation';
import { 
  uploadDocumentToVectorStore, 
  checkUserVectorStore, 
  initializeUserVectorStore 
} from '../../lib/api/vectorStore';
import { useDocumentProgress } from '../../hooks/useDocumentProgress';
import type { UserDocument, DocumentCategory } from '../../types/openai-vector-store';

// Document interface matching the parent component - updated for OpenAI integration
interface Document {
  id: string;
  title: string;
  filename: string;
  type: string;
  size: number;
  uploadDate: string;
  status: 'processing' | 'ready' | 'error';
  tags: string[];
  description?: string;
  openaiFileId?: string; // New OpenAI identifier
}

// File validation result interface
interface FileValidationResult {
  isValid: boolean;
  error?: string;
  warning?: string;
}

// Uploaded file with processing state - updated for OpenAI integration
interface UploadedFile {
  id: string;
  file: File;
  preview?: string;
  status: 'pending' | 'uploading' | 'processing' | 'complete' | 'success' | 'error';
  error?: string;
  title: string;
  description: string;
  tags: string[];
  category: DocumentCategory;
  documentId?: string;
  openaiFileId?: string; // New OpenAI identifier
  retryCount?: number;
  canRetry?: boolean;
}

interface DocumentUploadProps {
  onClose: () => void;
  onUploadSuccess: (document: Document) => void;
  maxFileSize?: number; // in MB
  maxFiles?: number;
}

export const DocumentUpload: React.FC<DocumentUploadProps> = ({
  onClose,
  onUploadSuccess,
  maxFileSize = 50, // Updated to 50MB for OpenAI Vector Store support
  maxFiles = 10
}) => {
  const { user } = useAuth();
  const { t } = useTranslation();
  const { startTracking } = useDocumentProgress();
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [showAdvancedOptions, setShowAdvancedOptions] = useState(false);
  const [vectorStoreId, setVectorStoreId] = useState<string | null>(null);
  const [isInitializingVectorStore, setIsInitializingVectorStore] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Updated supported file types for OpenAI Vector Store
  const supportedTypes = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'text/plain',
    'text/markdown',
    'text/csv'
  ];

  // Available document categories
  const documentCategories: DocumentCategory[] = [
    'research-papers',
    'clinical-guidelines', 
    'case-studies',
    'medical-images',
    'lab-results',
    'patient-education',
    'protocols',
    'reference-materials',
    'personal-notes',
    'other'
  ];

  // Initialize Vector Store if needed
  useEffect(() => {
    const initializeVectorStore = async () => {
      if (!user) return;

      try {
        const { hasVectorStore, vectorStore } = await checkUserVectorStore();
        
        if (hasVectorStore && vectorStore) {
          setVectorStoreId(vectorStore.openai_vector_store_id);
        } else {
          // Auto-initialize Vector Store for the user
          setIsInitializingVectorStore(true);
          const response = await initializeUserVectorStore();
          setVectorStoreId(response.vectorStore.openai_vector_store_id);
        }
      } catch (error) {
        console.error('Error checking/initializing Vector Store:', error);
        setUploadError('Failed to initialize personal knowledge base. Please try again.');
      } finally {
        setIsInitializingVectorStore(false);
      }
    };

    initializeVectorStore();
  }, [user]);

  // File type display names
  const getFileTypeDisplay = (type: string): string => {
    switch (type) {
      case 'application/pdf':
        return t('documents.fileTypes.pdf');
      case 'application/msword':
        return t('documents.fileTypes.word-doc');
      case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
        return t('documents.fileTypes.word-docx');
      case 'text/plain':
        return t('documents.fileTypes.text');
      case 'text/markdown':
        return t('documents.fileTypes.markdown');
      case 'text/csv':
        return t('documents.fileTypes.csv');
      default:
        return t('documents.fileTypes.unknown');
    }
  };

  // Category display names
  const getCategoryDisplay = (category: DocumentCategory): string => {
    const categoryMap: { [key in DocumentCategory]: string } = {
      'research-papers': 'Research Papers',
      'clinical-guidelines': 'Clinical Guidelines',
      'case-studies': 'Case Studies',
      'medical-images': 'Medical Images',
      'lab-results': 'Lab Results',
      'patient-education': 'Patient Education',
      'protocols': 'Protocols',
      'reference-materials': 'Reference Materials',
      'personal-notes': 'Personal Notes',
      'other': 'Other'
    };
    return categoryMap[category];
  };

  // Enhanced file validation with warnings
  const validateFile = (file: File): FileValidationResult => {
    // Check file type
    if (!supportedTypes.includes(file.type)) {
      return {
        isValid: false,
        error: `Unsupported file type: ${file.type}. Please upload PDF, Word, text, Excel, or image files.`
      };
    }

    // Check file size
    const maxSizeBytes = maxFileSize * 1024 * 1024;
    if (file.size > maxSizeBytes) {
      return {
        isValid: false,
        error: `File size exceeds ${maxFileSize}MB limit. Please choose a smaller file.`
      };
    }

    // Check for empty files
    if (file.size === 0) {
      return {
        isValid: false,
        error: 'File appears to be empty. Please select a valid file.'
      };
    }

    // Add warnings for potential issues
    let warning: string | undefined;
    
    // Large file warning
    if (file.size > 10 * 1024 * 1024) { // 10MB
      warning = 'Large file detected. Processing may take longer.';
    }
    
    // Image file warning
    if (file.type.startsWith('image/') && file.size > 5 * 1024 * 1024) { // 5MB
      warning = 'Large image file. Consider compressing for faster processing.';
    }

    return { 
      isValid: true, 
      warning 
    };
  };

  // Format file size for display
  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  // Generate unique ID for files
  const generateId = (): string => {
    return `file-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  };

  // Get file icon based on type
  const getFileIcon = (type: string) => {
    if (type.startsWith('image/')) {
      return <Image className="w-5 h-5" />;
    }
    return <FileText className="w-5 h-5" />;
  };

  // Get status color and styling
  const getStatusStyling = (status: UploadedFile['status']) => {
    switch (status) {
      case 'pending':
        return 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800';
      case 'uploading':
        return 'border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-900/20';
      case 'processing':
        return 'border-yellow-200 dark:border-yellow-700 bg-yellow-50 dark:bg-yellow-900/20';
      case 'success':
        return 'border-green-200 dark:border-green-700 bg-green-50 dark:bg-green-900/20';
      case 'error':
        return 'border-red-200 dark:border-red-700 bg-red-50 dark:bg-red-900/20';
      default:
        return 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800';
    }
  };

  // Process selected files
  const processFiles = useCallback(async (files: File[]) => {
    setUploadError(null);

    // Check total file count
    if (uploadedFiles.length + files.length > maxFiles) {
      setUploadError(`Maximum ${maxFiles} files allowed. Please remove some files first.`);
      return;
    }

    const validFiles: UploadedFile[] = [];
    const errors: string[] = [];
    const warnings: string[] = [];

    // Validate and process each file
    files.forEach(file => {
      const validation = validateFile(file);
      if (!validation.isValid) {
        errors.push(`${file.name}: ${validation.error}`);
      } else {
        if (validation.warning) {
          warnings.push(`${file.name}: ${validation.warning}`);
        }

        const uploadedFile: UploadedFile = {
          id: generateId(),
          file,
          status: 'pending',
          title: file.name.replace(/\.[^/.]+$/, ''), // Remove extension for default title
          description: '',
          tags: [],
          category: 'other',
          retryCount: 0,
          canRetry: false
        };

        // Create preview for images
        if (file.type.startsWith('image/')) {
          uploadedFile.preview = URL.createObjectURL(file);
        }

        validFiles.push(uploadedFile);
      }
    });

    // Show validation errors
    if (errors.length > 0) {
      setUploadError(errors.join('\n'));
      return;
    }

    // Show warnings if any
    if (warnings.length > 0) {
      console.warn('File validation warnings:', warnings.join('\n'));
    }

    // Add validated files to state
    setUploadedFiles(prev => [...prev, ...validFiles]);
  }, [uploadedFiles.length, maxFiles]);

  // Handle file selection via button
  const handleFileSelect = () => {
    fileInputRef.current?.click();
  };

  // Handle file input change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    processFiles(files);
    // Clear input for re-selection of same files
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Handle drag and drop events
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = Array.from(e.dataTransfer.files);
    processFiles(files);
  };

  // Remove file from upload list
  const removeFile = (fileId: string) => {
    setUploadedFiles(prev => {
      const file = prev.find(f => f.id === fileId);
      // Clean up preview URLs
      if (file?.preview) {
        URL.revokeObjectURL(file.preview);
      }
      return prev.filter(f => f.id !== fileId);
    });
    setUploadError(null);
  };

  // Retry failed upload
  const retryFile = async (fileId: string) => {
    const file = uploadedFiles.find(f => f.id === fileId);
    if (!file || file.status !== 'error') return;

    // Update file for retry
    setUploadedFiles(prev => prev.map(f => 
      f.id === fileId 
        ? { ...f, status: 'pending', error: undefined, retryCount: (f.retryCount || 0) + 1 }
        : f
    ));

    // Upload just this file
    await uploadSingleFile(file);
  };

  // Upload a single file - updated for OpenAI Vector Store integration
  const uploadSingleFile = async (file: UploadedFile) => {
    if (!vectorStoreId) {
      throw new Error('Vector Store not initialized');
    }

    try {
      // Update file status to uploading
      setUploadedFiles(prev => prev.map(f => 
        f.id === file.id ? { ...f, status: 'uploading' } : f
      ));

      // Prepare upload request for OpenAI Vector Store
      const uploadRequest = {
        file: file.file,
        vectorStoreId: vectorStoreId,
        title: file.title.trim(),
        description: file.description.trim() || undefined,
        category: file.category,
        tags: file.tags.filter(tag => tag.trim().length > 0)
      };

      // Upload the document to OpenAI Vector Store
      const response = await uploadDocumentToVectorStore(uploadRequest);

      // Start tracking the document's progress
      startTracking(response.documentId, {
        uploadProgress: 100,
        processingStage: 'Upload complete, processing in OpenAI Vector Store...',
        status: 'processing'
      });

      // Update file status
      setUploadedFiles(prev => prev.map(f => 
        f.id === file.id 
          ? { 
              ...f, 
              status: 'success', 
              documentId: response.documentId,
              openaiFileId: response.uploadedFileId
            }
          : f
      ));

      // Create document object and call success handler
      const newDocument: Document = {
        id: response.documentId,
        title: file.title,
        filename: file.file.name,
        type: getFileTypeDisplay(file.file.type),
        size: file.file.size,
        uploadDate: new Date().toISOString().split('T')[0],
        status: 'processing', // OpenAI will process in background
        tags: file.tags,
        description: file.description,
        openaiFileId: response.uploadedFileId
      };

      onUploadSuccess(newDocument);
    } catch (fileError) {
      console.error(`Error uploading file ${file.file.name}:`, fileError);
      
      const errorMessage = fileError instanceof Error ? fileError.message : 'Upload failed';
      const canRetry = (file.retryCount || 0) < 3; // Allow up to 3 retries
      
      // Update file status
      setUploadedFiles(prev => prev.map(f => 
        f.id === file.id 
          ? { ...f, status: 'error', error: errorMessage, canRetry }
          : f
      ));
    }
  };

  // Update file metadata
  const updateFileMetadata = (fileId: string, field: keyof Pick<UploadedFile, 'title' | 'description' | 'tags' | 'category'>, value: any) => {
    setUploadedFiles(prev => prev.map(file => 
      file.id === fileId ? { ...file, [field]: value } : file
    ));
  };

  // Convert file to base64 data URL - kept for backward compatibility but not used in OpenAI integration
  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  // Upload all files
  const uploadFiles = async () => {
    if (uploadedFiles.length === 0) return;

    setIsUploading(true);
    setUploadError(null);

    const pendingFiles = uploadedFiles.filter(f => f.status === 'pending');
    const results: Array<{ success: boolean; file: UploadedFile; documentId?: string; error?: string }> = [];

    try {
      // Process files sequentially to avoid overwhelming the server
      for (const file of pendingFiles) {
        await uploadSingleFile(file);
      }

      // Check results after all uploads
      const successCount = uploadedFiles.filter(f => f.status === 'success').length;
      const failureCount = uploadedFiles.filter(f => f.status === 'error').length;

      if (successCount > 0) {
        setSuccess(`Successfully uploaded ${successCount} document${successCount > 1 ? 's' : ''}`);
        
        // Auto-close if all uploads succeeded
        if (failureCount === 0) {
          setTimeout(() => {
            onClose();
          }, 2000);
        }
      }

      if (failureCount > 0) {
        setUploadError(`${failureCount} upload${failureCount > 1 ? 's' : ''} failed. You can retry individual files or contact support if the issue persists.`);
      }

    } catch (error) {
      console.error('Upload process error:', error);
      setUploadError(error instanceof Error ? error.message : 'Upload process failed');
    } finally {
      setIsUploading(false);
    }
  };

  // Clear all errors
  const clearErrors = () => {
    setUploadError(null);
  };

  // Retry all failed uploads
  const retryAllFailed = async () => {
    const failedFiles = uploadedFiles.filter(f => f.status === 'error' && f.canRetry);
    for (const file of failedFiles) {
      await retryFile(file.id);
    }
  };

  // Check if upload is ready
  const canUpload = uploadedFiles.length > 0 && !isUploading && uploadedFiles.some(f => f.status === 'pending') && uploadedFiles.every(f => f.title.trim().length > 0);
  const hasFailedUploads = uploadedFiles.some(f => f.status === 'error' && f.canRetry);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              {t('documents.uploadTitle')}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {t('documents.uploadSubtitle')}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
          {/* Main content */}
          {isInitializingVectorStore && (
            <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg flex items-start space-x-3">
              <Loader2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5 animate-spin" />
              <div className="flex-1">
                <p className="text-blue-700 dark:text-blue-300 font-medium">{t('documents.initializingKnowledgeBase')}</p>
                <p className="text-blue-600 dark:text-blue-400 text-sm mt-1">
                  {t('documents.initializingKnowledgeBase')}...
                </p>
              </div>
            </div>
          )}

          {/* Success Message */}
          {success && (
            <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="text-green-700 dark:text-green-300 font-medium">{success}</p>
                <p className="text-green-600 dark:text-green-400 text-sm mt-1">
                  {t('documents.uploadSuccess')}
                </p>
              </div>
            </div>
          )}

          {/* Error Message */}
          {uploadError && (
            <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-red-700 dark:text-red-300 font-medium">{t('documents.error')}</p>
                  <p className="text-red-600 dark:text-red-400 text-sm mt-1 whitespace-pre-line">{uploadError}</p>
                  {hasFailedUploads && (
                    <div className="flex items-center space-x-3 mt-3">
                      <button
                        onClick={retryAllFailed}
                        className="text-sm text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-200 underline"
                      >
                        {t('documents.retryAll')}
                      </button>
                      <button
                        onClick={clearErrors}
                        className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline"
                      >
                        {t('documents.clearErrors')}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Drop Zone */}
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-xl p-8 text-center transition-all duration-200 ${
              isDragOver
                ? 'border-primary bg-primary/10 scale-[1.02]'
                : 'border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700/30'
            } ${isInitializingVectorStore ? 'opacity-50 pointer-events-none' : ''}`}
          >
            <div className="flex flex-col items-center">
              <div className={`p-4 rounded-full mb-4 transition-colors ${
                isDragOver ? 'bg-primary text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-400'
              }`}>
                <Upload className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
                {isDragOver ? t('documents.dropFiles') : t('documents.dragDropText')}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4 max-w-md">
                {t('documents.supportedFormats')}
                <br />
                <span className="text-sm">{t('documents.maxFileSize', { size: maxFileSize.toString() })}</span>
              </p>
              <button
                onClick={handleFileSelect}
                disabled={isUploading || isInitializingVectorStore}
                className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 font-medium"
              >
                <Plus className="w-4 h-4" />
                <span>{t('documents.selectFiles')}</span>
              </button>
            </div>
          </div>

          {/* Hidden file input */}
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept={supportedTypes.join(',')}
            onChange={handleFileChange}
            className="hidden"
          />

          {/* Files List */}
          {uploadedFiles.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {t('documents.selectedFiles')} ({uploadedFiles.length})
                </h3>
                <div className="flex items-center space-x-2">
                  {hasFailedUploads && (
                    <button
                      onClick={retryAllFailed}
                      className="text-sm bg-red-100 text-red-700 px-3 py-1 rounded-md hover:bg-red-200 transition-colors dark:bg-red-900/30 dark:text-red-300 dark:hover:bg-red-900/50"
                    >
                      <RefreshCw className="w-3 h-3 mr-1 inline" />
                      {t('documents.retryAll')}
                    </button>
                  )}
                  <button
                    onClick={() => setUploadedFiles([])}
                    className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    <Trash2 className="w-4 h-4 mr-1 inline" />
                    {t('documents.clearAll')}
                  </button>
                </div>
              </div>
              
              <div className="space-y-4">
                {uploadedFiles.map((file) => (
                  <div key={file.id} className={`border rounded-lg p-4 transition-all duration-200 ${getStatusStyling(file.status)}`}>
                    <div className="flex items-start space-x-4">
                      {/* File icon/preview */}
                      <div className="flex-shrink-0">
                        {file.preview ? (
                          <img
                            src={file.preview}
                            alt="Preview"
                            className="w-12 h-12 object-cover rounded border"
                          />
                        ) : (
                          <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded border flex items-center justify-center">
                            {getFileIcon(file.file.type)}
                          </div>
                        )}
                      </div>

                      {/* File info and metadata */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                              {file.file.name}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              {getFileTypeDisplay(file.file.type)} • {formatFileSize(file.file.size)}
                              {file.retryCount && file.retryCount > 0 && (
                                <span className="ml-2 text-orange-600 dark:text-orange-400">
                                  • {t('documents.retryCount', { count: file.retryCount.toString() })}
                                </span>
                              )}
                            </p>
                          </div>

                          {/* Status indicator and actions */}
                          <div className="ml-4 flex items-center space-x-2">
                            {file.status === 'uploading' && (
                              <Loader2 className="w-4 h-4 animate-spin text-blue-500" />
                            )}
                            {file.status === 'processing' && (
                              <Loader2 className="w-4 h-4 animate-spin text-yellow-500" />
                            )}
                            {file.status === 'success' && (
                              <CheckCircle className="w-4 h-4 text-green-500" />
                            )}
                            {file.status === 'error' && (
                              <div className="flex items-center space-x-2">
                                <AlertTriangle className="w-4 h-4 text-red-500" />
                                {file.canRetry && (
                                  <button
                                    onClick={() => retryFile(file.id)}
                                    className="p-1 text-red-500 hover:text-red-700 transition-colors"
                                    title="Retry upload"
                                  >
                                    <RefreshCw className="w-4 h-4" />
                                  </button>
                                )}
                              </div>
                            )}
                            {file.status === 'pending' && !isUploading && (
                              <button
                                onClick={() => removeFile(file.id)}
                                className="p-1 text-gray-400 hover:text-red-600 transition-colors"
                                title="Remove file"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            )}
                          </div>
                        </div>

                        {/* Metadata inputs (only show for pending files) */}
                        {file.status === 'pending' && (
                          <div className="mt-3 space-y-3">
                            <input
                              type="text"
                              placeholder={t('documents.titlePlaceholder')}
                              value={file.title}
                              onChange={(e) => updateFileMetadata(file.id, 'title', e.target.value)}
                              className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                            />
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              <select
                                value={file.category}
                                onChange={(e) => updateFileMetadata(file.id, 'category', e.target.value as DocumentCategory)}
                                className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                              >
                                {documentCategories.map((category) => (
                                  <option key={category} value={category}>
                                    {t(`documents.categories.${category}`)}
                                  </option>
                                ))}
                              </select>
                              
                              {showAdvancedOptions && (
                                <input
                                  type="text"
                                  placeholder={t('documents.tagsPlaceholder')}
                                  value={file.tags.join(', ')}
                                  onChange={(e) => updateFileMetadata(file.id, 'tags', e.target.value.split(',').map(tag => tag.trim()).filter(Boolean))}
                                  className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                                />
                              )}
                            </div>
                            
                            <textarea
                              placeholder={t('documents.descriptionPlaceholder')}
                              value={file.description}
                              onChange={(e) => updateFileMetadata(file.id, 'description', e.target.value)}
                              rows={2}
                              className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 resize-none"
                            />
                          </div>
                        )}

                        {/* Display metadata for non-pending files */}
                        {file.status !== 'pending' && (file.category !== 'other' || file.tags.length > 0) && (
                          <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 mr-2">
                              {getCategoryDisplay(file.category)}
                            </span>
                            {file.tags.length > 0 && (
                              <>
                                {file.tags.map((tag, index) => (
                                  <span key={index} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 mr-1">
                                    {tag}
                                  </span>
                                ))}
                              </>
                            )}
                          </div>
                        )}

                        {/* Error message */}
                        {file.status === 'error' && file.error && (
                          <div className="mt-2 p-2 bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded text-sm">
                            <p className="text-red-700 dark:text-red-300 font-medium">{t('documents.error')}:</p>
                            <p className="text-red-600 dark:text-red-400">{file.error}</p>
                            {file.canRetry && (
                              <p className="text-red-500 dark:text-red-400 text-xs mt-1">
                                {t('documents.retryInstruction')}
                              </p>
                            )}
                          </div>
                        )}

                        {/* Success message */}
                        {file.status === 'success' && (
                          <p className="mt-2 text-sm text-green-600 dark:text-green-400 font-medium">
                            ✓ {t('documents.uploadSuccessMessage')}
                          </p>
                        )}

                        {/* Status display */}
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {file.status === 'pending' && t('documents.statuses.pending')}
                          {file.status === 'uploading' && t('documents.statuses.uploading')}
                          {file.status === 'processing' && t('documents.statuses.processing')}
                          {file.status === 'complete' && t('documents.statuses.complete')}
                          {file.status === 'success' && t('documents.statuses.success')}
                          {file.status === 'error' && file.error}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-750">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {uploadedFiles.length > 0 && (
              <div className="flex items-center space-x-4">
                <span>
                  {t('documents.filesSelected', { count: uploadedFiles.length.toString() })}
                </span>
                {uploadedFiles.some(f => f.status === 'success') && (
                  <span className="text-green-600 dark:text-green-400">
                    • {t('documents.filesUploaded', { count: uploadedFiles.filter(f => f.status === 'success').length.toString() })}
                  </span>
                )}
                {uploadedFiles.some(f => f.status === 'error') && (
                  <span className="text-red-600 dark:text-red-400">
                    • {t('documents.filesFailed', { count: uploadedFiles.filter(f => f.status === 'error').length.toString() })}
                  </span>
                )}
              </div>
            )}
          </div>
          
          <div className="flex items-center space-x-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              {uploadedFiles.some(f => f.status === 'success') ? t('documents.close') : t('documents.cancel')}
            </button>
            <button
              onClick={uploadFiles}
              disabled={!canUpload}
              className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 font-medium"
            >
              {isUploading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>{t('documents.uploading')}</span>
                </>
              ) : (
                <>
                  <Upload className="w-4 h-4" />
                  <span>
                    {t('documents.uploadButton', { count: uploadedFiles.filter(f => f.status === 'pending').length.toString() })}
                  </span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}; 