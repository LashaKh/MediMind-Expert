import React, { useState, useRef, useCallback, useEffect } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import { 
  Upload, 
  X, 
  File, 
  FileText, 
  FileSpreadsheet, 
  Image as ImageIcon,
  CheckCircle2, 
  AlertTriangle, 
  Loader2,
  Plus,
  Trash2,
  Edit3,
  Tag,
  FolderOpen,
  Eye,
  Clock,
  Zap,
  Sparkles,
  ArrowRight,
  Download
} from 'lucide-react';
import { uploadDocumentToVectorStore, initializeUserVectorStore } from '../../lib/api/vectorStore';
import { useDocumentProgress } from '../../hooks/useDocumentProgress';
import { motion, AnimatePresence } from 'framer-motion';

// Enhanced types with better categorization
type DocumentCategory = 'research-papers' | 'clinical-guidelines' | 'case-studies' | 'medical-images' | 'lab-results' | 'patient-education' | 'protocols' | 'reference-materials' | 'personal-notes' | 'other';

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
  openaiFileId?: string;
}

interface FileValidationResult {
  isValid: boolean;
  error?: string;
  warning?: string;
}

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
  openaiFileId?: string;
  retryCount?: number;
  canRetry?: boolean;
  uploadProgress?: number;
}

interface DocumentUploadProps {
  onClose: () => void;
  onUploadSuccess: (document: Document) => void;
  maxFileSize?: number;
  maxFiles?: number;
}

export const DocumentUpload: React.FC<DocumentUploadProps> = ({
  onClose,
  onUploadSuccess,
  maxFileSize = 50,
  maxFiles = 10
}) => {
  const { t } = useTranslation();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [isInitializingVectorStore, setIsInitializingVectorStore] = useState(false);
  const [currentStep, setCurrentStep] = useState<'select' | 'configure' | 'upload' | 'complete'>('select');
  const [editingFile, setEditingFile] = useState<string | null>(null);
  const { startTracking } = useDocumentProgress();

  // Sophisticated file type mapping with icons
  const getFileTypeInfo = (type: string) => {
    const typeMap = {
      'application/pdf': { 
        icon: FileText, 
        color: 'text-red-500 bg-red-50 dark:bg-red-900/20', 
        label: 'PDF',
        gradient: 'from-red-500 to-red-600'
      },
      'application/msword': { 
        icon: FileText, 
        color: 'text-blue-500 bg-blue-50 dark:bg-blue-900/20', 
        label: 'Word',
        gradient: 'from-blue-500 to-blue-600'
      },
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': { 
        icon: FileText, 
        color: 'text-blue-500 bg-blue-50 dark:bg-blue-900/20', 
        label: 'Word',
        gradient: 'from-blue-500 to-blue-600'
      },
      'text/plain': { 
        icon: File, 
        color: 'text-gray-500 bg-gray-50 dark:bg-gray-900/20', 
        label: 'Text',
        gradient: 'from-gray-500 to-gray-600'
      },
      'application/vnd.ms-excel': { 
        icon: FileSpreadsheet, 
        color: 'text-green-500 bg-green-50 dark:bg-green-900/20', 
        label: 'Excel',
        gradient: 'from-green-500 to-green-600'
      },
      'text/csv': { 
        icon: FileSpreadsheet, 
        color: 'text-green-500 bg-green-50 dark:bg-green-900/20', 
        label: 'CSV',
        gradient: 'from-green-500 to-green-600'
      }
    };
    
    return typeMap[type as keyof typeof typeMap] || { 
      icon: File, 
      color: 'text-gray-500 bg-gray-50 dark:bg-gray-900/20', 
      label: 'File',
      gradient: 'from-gray-500 to-gray-600'
    };
  };

  const getCategoryInfo = (category: DocumentCategory) => {
    const categoryMap = {
      'research-papers': { 
        label: t('documents.categories.research-papers'), 
        color: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
        icon: '🔬'
      },
      'clinical-guidelines': { 
        label: t('documents.categories.clinical-guidelines'), 
        color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
        icon: '🏥'
      },
      'case-studies': { 
        label: t('documents.categories.case-studies'), 
        color: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
        icon: '👤'
      },
      'protocols': { 
        label: t('documents.categories.protocols'), 
        color: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
        icon: '📋'
      },
      'reference-materials': { 
        label: t('documents.categories.reference-materials'), 
        color: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300',
        icon: '📚'
      },
      'medical-images': { 
        label: t('documents.categories.medical-images'), 
        color: 'bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300',
        icon: '🩻'
      },
      'lab-results': { 
        label: t('documents.categories.lab-results'), 
        color: 'bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300',
        icon: '🧪'
      },
      'patient-education': { 
        label: t('documents.categories.patient-education'), 
        color: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300',
        icon: '📖'
      },
      'personal-notes': { 
        label: t('documents.categories.personal-notes'), 
        color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
        icon: '📝'
      },
      'other': { 
        label: t('documents.categories.other'), 
        color: 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300',
        icon: '📄'
      }
    };
    
    return categoryMap[category];
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const validateFile = (file: File): FileValidationResult => {
    const supportedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'text/plain',
      'text/markdown',
      'application/vnd.ms-excel',
      'text/csv'
    ];

    if (!supportedTypes.includes(file.type)) {
      return {
        isValid: false,
        error: `Unsupported file type: ${file.type}`
      };
    }

    const maxSizeBytes = maxFileSize * 1024 * 1024;
    if (file.size > maxSizeBytes) {
      return {
        isValid: false,
        error: `File size (${formatFileSize(file.size)}) exceeds maximum allowed size (${maxFileSize}MB)`
      };
    }

    if (file.size > 10 * 1024 * 1024) {
      return {
        isValid: true,
        warning: 'Large files may take longer to process'
      };
    }

    return { isValid: true };
  };

  const handleFileSelect = () => {
    fileInputRef.current?.click();
  };

  const processFiles = (files: FileList) => {
    const newFiles: UploadedFile[] = [];
    
    for (let i = 0; i < Math.min(files.length, maxFiles - uploadedFiles.length); i++) {
      const file = files[i];
      const validation = validateFile(file);
      
      if (validation.isValid) {
        const fileId = crypto.randomUUID();
        newFiles.push({
          id: fileId,
          file,
          status: 'pending',
          title: file.name.replace(/\.[^/.]+$/, ''), // Remove extension
          description: '',
          tags: [],
          category: 'other',
          uploadProgress: 0
        });
      }
    }
    
    setUploadedFiles(prev => [...prev, ...newFiles]);
    
    if (newFiles.length > 0) {
      setCurrentStep('configure');
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      processFiles(e.target.files);
    }
  };

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
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processFiles(e.dataTransfer.files);
    }
  };

  const removeFile = (fileId: string) => {
    setUploadedFiles(prev => prev.filter(f => f.id !== fileId));
    if (uploadedFiles.length === 1) {
      setCurrentStep('select');
    }
  };

  const updateFileMetadata = (fileId: string, field: keyof Pick<UploadedFile, 'title' | 'description' | 'tags' | 'category'>, value: any) => {
    setUploadedFiles(prev => prev.map(file => 
      file.id === fileId ? { ...file, [field]: value } : file
    ));
  };

  const uploadSingleFile = async (file: UploadedFile) => {
    try {
      setUploadedFiles(prev => prev.map(f => 
        f.id === file.id ? { ...f, status: 'uploading', uploadProgress: 0 } : f
      ));

      // Initialize vector store if needed
      let vectorStoreId = '';
      try {
        const vectorStoreResponse = await initializeUserVectorStore();
        vectorStoreId = vectorStoreResponse.vectorStore.openai_vector_store_id;
      } catch (vectorError) {
        console.error('Error initializing vector store:', vectorError);
        throw new Error('Failed to initialize knowledge base. Please try again.');
      }

      const uploadRequest = {
        file: file.file,
        vectorStoreId: vectorStoreId,
        title: file.title.trim(),
        description: file.description.trim() || undefined,
        category: file.category,
        tags: file.tags.filter(tag => tag.trim().length > 0)
      };

      // Simulate progress for better UX
      const progressInterval = setInterval(() => {
        setUploadedFiles(prev => prev.map(f => 
          f.id === file.id ? { 
            ...f, 
            uploadProgress: Math.min(90, (f.uploadProgress || 0) + Math.random() * 20)
          } : f
        ));
      }, 500);

      const response = await uploadDocumentToVectorStore(uploadRequest);
      
      clearInterval(progressInterval);

      // Complete progress and update status
      setUploadedFiles(prev => prev.map(f => 
        f.id === file.id ? { 
          ...f, 
          status: 'success',
          uploadProgress: 100,
          documentId: response.documentId,
          openaiFileId: response.uploadedFileId
        } : f
      ));

      startTracking(response.documentId, {
        uploadProgress: 100,
        processingStage: 'Upload complete - Document ready for AI assistance!',
        status: 'completed'
      });

      const newDocument: Document = {
        id: response.documentId,
        title: file.title,
        filename: file.file.name,
        type: getFileTypeInfo(file.file.type).label,
        size: file.file.size,
        uploadDate: new Date().toISOString().split('T')[0],
        status: 'ready',
        tags: file.tags,
        description: file.description,
        openaiFileId: response.uploadedFileId
      };

      onUploadSuccess(newDocument);
    } catch (error) {
      console.error(`Error uploading file ${file.file.name}:`, error);
      
      const errorMessage = error instanceof Error ? error.message : 'Upload failed';
      const canRetry = (file.retryCount || 0) < 3;
      
      setUploadedFiles(prev => prev.map(f => 
        f.id === file.id ? { 
          ...f, 
          status: 'error', 
          error: errorMessage, 
          canRetry,
          uploadProgress: 0
        } : f
      ));
    }
  };

  const uploadFiles = async () => {
    if (uploadedFiles.length === 0) return;

    setIsUploading(true);
    setUploadError(null);
    setCurrentStep('upload');

    const pendingFiles = uploadedFiles.filter(f => f.status === 'pending');

    try {
      for (const file of pendingFiles) {
        await uploadSingleFile(file);
      }

      const successCount = uploadedFiles.filter(f => f.status === 'success').length;
      const failureCount = uploadedFiles.filter(f => f.status === 'error').length;

      if (successCount > 0) {
        setSuccess(`Successfully uploaded ${successCount} document${successCount > 1 ? 's' : ''}`);
        setCurrentStep('complete');
        
        setTimeout(() => {
          if (failureCount === 0) {
            onClose();
          }
        }, 2000);
      }

      if (failureCount > 0) {
        setUploadError(`${failureCount} upload${failureCount > 1 ? 's' : ''} failed`);
      }

    } catch (error) {
      console.error('Upload process error:', error);
      setUploadError(error instanceof Error ? error.message : 'Upload process failed');
    } finally {
      setIsUploading(false);
    }
  };

  const canUpload = uploadedFiles.length > 0 && 
                   !isUploading && 
                   uploadedFiles.some(f => f.status === 'pending') && 
                   uploadedFiles.every(f => f.title.trim().length > 0);

  // Animation variants
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.95, 
      y: 20,
      transition: { duration: 0.2 }
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0, 
      x: -20,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{
        background: 'rgba(0, 0, 0, 0.6)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)'
      }}
    >
      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.9) 100%)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderRadius: '24px',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 32px 64px rgba(0, 0, 0, 0.15), 0 16px 32px rgba(0, 0, 0, 0.1)'
        }}
      >
        {/* Elegant Header */}
        <div className="relative px-8 py-6 border-b border-gray-200/50">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5" />
          <div className="relative flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg">
                <Upload className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  {t('documents.modal.title')}
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  {t('documents.modal.subtitle')}
                </p>
              </div>
            </div>
            
            {/* Progress Steps */}
            <div className="flex items-center space-x-3">
              {['select', 'configure', 'upload', 'complete'].map((step, index) => {
                const isActive = currentStep === step;
                const isCompleted = ['select', 'configure', 'upload', 'complete'].indexOf(currentStep) > index;
                
                return (
                  <div key={step} className="flex items-center">
                    <motion.div
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        isActive 
                          ? 'bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg' 
                          : isCompleted
                          ? 'bg-green-500'
                          : 'bg-gray-300'
                      }`}
                      animate={isActive ? { scale: [1, 1.2, 1] } : {}}
                      transition={{ duration: 1, repeat: isActive ? Infinity : 0 }}
                    />
                    {index < 3 && (
                      <div className={`w-8 h-0.5 mx-2 transition-colors duration-300 ${
                        isCompleted ? 'bg-green-500' : 'bg-gray-300'
                      }`} />
                    )}
                  </div>
                );
              })}
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-gray-500 hover:text-gray-700 hover:bg-gray-100/80 transition-all duration-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Dynamic Content Area */}
        <div className="p-8 overflow-y-auto max-h-[calc(90vh-200px)]">
          <AnimatePresence mode="wait">
            {currentStep === 'select' && (
              <motion.div
                key="select"
                variants={stepVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-8"
              >
                {/* Drag & Drop Zone */}
                <motion.div
                  className={`relative overflow-hidden transition-all duration-300 ${
                    isDragOver 
                      ? 'border-blue-500 bg-blue-50/50 scale-105' 
                      : 'border-gray-300 bg-gray-50/50 hover:bg-gray-100/50'
                  }`}
                  style={{
                    borderRadius: '20px',
                    border: '2px dashed',
                    minHeight: '300px'
                  }}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50" />
                  <div className="relative flex flex-col items-center justify-center h-full p-12 text-center">
                    <motion.div
                      className="mb-6"
                      animate={isDragOver ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="p-6 rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-2xl">
                        <Upload className="w-12 h-12 text-white" />
                      </div>
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {isDragOver ? t('documents.modal.select.dropFiles') : t('documents.modal.select.title')}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 max-w-md">
                      {t('documents.modal.select.subtitle')}
                    </p>

                    <motion.button
                      onClick={handleFileSelect}
                      className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-3"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Plus className="w-5 h-5" />
                      <span>{t('documents.modal.select.selectFiles')}</span>
                    </motion.button>

                    <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-2">
                        <FileText className="w-4 h-4" />
                        <span>{t('documents.fileTypes.pdf')}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <File className="w-4 h-4" />
                        <span>{t('documents.fileTypes.word-doc')}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <FileSpreadsheet className="w-4 h-4" />
                        <span>{t('documents.fileTypes.excel')}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <FileText className="w-4 h-4" />
                        <span>{t('documents.fileTypes.text')}</span>
                      </div>
                    </div>
                    
                    <p className="text-xs text-gray-400 mt-4">
                      Maximum file size: {maxFileSize}MB • Maximum files: {maxFiles}
                    </p>
                  </div>
                </motion.div>

                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept=".pdf,.doc,.docx,.txt,.md,.xls,.xlsx,.csv"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </motion.div>
            )}

            {currentStep === 'configure' && (
              <motion.div
                key="configure"
                variants={stepVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-6"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">{t('documents.modal.configure.title')}</h3>
                  <span className="text-sm text-gray-500">{t('documents.modal.configure.filesSelected', { count: uploadedFiles.length })}</span>
                </div>

                <div className="grid gap-4">
                  {uploadedFiles.map((file) => {
                    const typeInfo = getFileTypeInfo(file.file.type);
                    const Icon = typeInfo.icon;
                    
                    return (
                      <motion.div
                        key={file.id}
                        layout
                        className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex items-start space-x-4">
                          <div className={`p-3 rounded-xl ${typeInfo.color}`}>
                            <Icon className="w-6 h-6" />
                          </div>
                          
                          <div className="flex-1 space-y-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-semibold text-gray-900 truncate max-w-md">
                                  {file.file.name}
                                </p>
                                <p className="text-sm text-gray-500">
                                  {formatFileSize(file.file.size)} • {typeInfo.label}
                                </p>
                              </div>
                              
                              <button
                                onClick={() => removeFile(file.id)}
                                className="p-2 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all duration-200"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                  {t('documents.modal.configure.documentTitleRequired')}
                                </label>
                                <input
                                  type="text"
                                  value={file.title}
                                  onChange={(e) => updateFileMetadata(file.id, 'title', e.target.value)}
                                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                  placeholder={t('documents.modal.configure.titlePlaceholder')}
                                />
                              </div>

                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                  {t('documents.modal.configure.category')}
                                </label>
                                <select
                                  value={file.category}
                                  onChange={(e) => updateFileMetadata(file.id, 'category', e.target.value as DocumentCategory)}
                                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                >
                                  <option value="research-papers">🔬 Research Papers</option>
                                  <option value="clinical-guidelines">🏥 Clinical Guidelines</option>
                                  <option value="case-studies">👤 Case Studies</option>
                                  <option value="medical-images">🩻 Medical Images</option>
                                  <option value="lab-results">🧪 Lab Results</option>
                                  <option value="patient-education">📖 Patient Education</option>
                                  <option value="protocols">📋 Protocols</option>
                                  <option value="reference-materials">📚 Reference Materials</option>
                                  <option value="personal-notes">📝 Personal Notes</option>
                                  <option value="other">📄 Other</option>
                                </select>
                              </div>
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                {t('documents.modal.configure.description')}
                              </label>
                              <textarea
                                value={file.description}
                                onChange={(e) => updateFileMetadata(file.id, 'description', e.target.value)}
                                rows={2}
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                                placeholder={t('documents.modal.configure.descriptionPlaceholder')}
                              />
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                {t('documents.modal.configure.tags')}
                              </label>
                              <input
                                type="text"
                                value={file.tags.join(', ')}
                                onChange={(e) => updateFileMetadata(file.id, 'tags', e.target.value.split(',').map(tag => tag.trim()).filter(Boolean))}
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                placeholder={t('documents.modal.configure.tagsPlaceholder')}
                              />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="flex justify-between pt-6">
                  <button
                    onClick={() => setCurrentStep('select')}
                    className="px-6 py-3 text-gray-600 hover:text-gray-800 font-medium rounded-xl hover:bg-gray-100 transition-all duration-200"
                  >
                    {t('documents.modal.configure.addMoreFiles')}
                  </button>
                  
                  <motion.button
                    onClick={uploadFiles}
                    disabled={!canUpload}
                    className={`px-8 py-4 rounded-2xl font-semibold shadow-lg transition-all duration-300 flex items-center space-x-3 ${
                      canUpload
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-xl'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                    whileHover={canUpload ? { scale: 1.05 } : {}}
                    whileTap={canUpload ? { scale: 0.95 } : {}}
                  >
                    <Zap className="w-5 h-5" />
                    <span>{t('documents.modal.configure.startUpload')}</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </motion.div>
            )}

            {currentStep === 'upload' && (
              <motion.div
                key="upload"
                variants={stepVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-6"
              >
                <div className="text-center mb-8">
                  <motion.div
                    className="inline-flex p-4 rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-2xl mb-4"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('documents.modal.upload.title')}</h3>
                  <p className="text-gray-600">{t('documents.modal.upload.subtitle')}</p>
                </div>

                <div className="space-y-4">
                  {uploadedFiles.map((file) => {
                    const typeInfo = getFileTypeInfo(file.file.type);
                    const Icon = typeInfo.icon;
                    
                    return (
                      <motion.div
                        key={file.id}
                        layout
                        className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg"
                      >
                        <div className="flex items-center space-x-4">
                          <div className={`p-3 rounded-xl ${typeInfo.color}`}>
                            <Icon className="w-6 h-6" />
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <p className="font-semibold text-gray-900">{file.title}</p>
                              
                              {file.status === 'uploading' && (
                                <div className="flex items-center space-x-2 text-sm text-blue-600">
                                  <Loader2 className="w-4 h-4 animate-spin" />
                                  <span>{t('documents.modal.upload.uploading')}</span>
                                </div>
                              )}
                              
                              {file.status === 'success' && (
                                <div className="flex items-center space-x-2 text-sm text-green-600">
                                  <CheckCircle2 className="w-4 h-4" />
                                  <span>{t('documents.modal.upload.complete')}</span>
                                </div>
                              )}
                              
                              {file.status === 'error' && (
                                <div className="flex items-center space-x-2 text-sm text-red-600">
                                  <AlertTriangle className="w-4 h-4" />
                                  <span>{t('documents.modal.upload.failed')}</span>
                                </div>
                              )}
                            </div>
                            
                            {(file.status === 'uploading' || file.uploadProgress !== undefined) && (
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <motion.div
                                  className="h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                                  style={{ width: `${file.uploadProgress || 0}%` }}
                                  initial={{ width: 0 }}
                                  animate={{ width: `${file.uploadProgress || 0}%` }}
                                  transition={{ duration: 0.3 }}
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {currentStep === 'complete' && (
              <motion.div
                key="complete"
                variants={stepVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="text-center space-y-6"
              >
                <motion.div
                  className="inline-flex p-6 rounded-3xl bg-gradient-to-br from-green-500 to-emerald-600 shadow-2xl"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                >
                  <CheckCircle2 className="w-12 h-12 text-white" />
                </motion.div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Upload Complete!</h3>
                  <p className="text-gray-600">Your documents have been successfully added to your knowledge base.</p>
                </div>

                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-50 rounded-xl border border-green-200"
                  >
                    <p className="text-green-800 font-medium">{success}</p>
                  </motion.div>
                )}

                <motion.button
                  onClick={onClose}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Continue to Knowledge Base
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Error Display */}
        {uploadError && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-8 mb-6 p-4 bg-red-50 border border-red-200 rounded-xl"
          >
            <div className="flex items-center space-x-2 text-red-800">
              <AlertTriangle className="w-5 h-5" />
              <p className="font-medium">{uploadError}</p>
            </div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}; 