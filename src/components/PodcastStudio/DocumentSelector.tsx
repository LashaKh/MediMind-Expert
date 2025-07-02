import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileText,
  Search,
  Check,
  AlertTriangle,
  Folder,
  Clock,
  Upload,
  Plus,
  X,
  Loader2
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { supabase } from '../../lib/supabase';
import SimplePodcastUpload from './SimplePodcastUpload';

interface Document {
  id: string;
  title: string;
  file_name: string;
  file_type: string;
  file_size: number;
  category: string;
  tags: string[];
  created_at: string;
  description?: string;
}

interface DocumentSelectorProps {
  selectedDocuments: string[];
  onSelectionChange: (selectedIds: string[]) => void;
  specialty: string;
}

const DocumentSelector: React.FC<DocumentSelectorProps> = ({
  selectedDocuments,
  onSelectionChange,
  specialty
}) => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const [documents, setDocuments] = useState<Document[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [error, setError] = useState<string>('');
  const [showUpload, setShowUpload] = useState(false);

  const categories = [
    { value: 'all', label: t('podcast.documents.categories.all') },
    { value: 'research-papers', label: t('podcast.documents.categories.research') },
    { value: 'clinical-guidelines', label: t('podcast.documents.categories.guidelines') },
    { value: 'case-studies', label: t('podcast.documents.categories.cases') },
    { value: 'reference-materials', label: t('podcast.documents.categories.reference') },
    { value: 'personal-notes', label: t('podcast.documents.categories.notes') }
  ];

  useEffect(() => {
    fetchDocuments();
  }, [user?.id]);

  const fetchDocuments = async () => {
    if (!user?.id) return;

    try {
      setLoading(true);
      setError('');

      const { data, error: fetchError } = await supabase
        .from('user_documents')
        .select('*')
        .eq('user_id', user.id)
        .eq('processing_status', 'completed')
        .order('created_at', { ascending: false });

      if (fetchError) throw fetchError;

      setDocuments(data || []);
    } catch (err) {
      console.error('Error fetching documents:', err);
      setError(t('podcast.documents.errors.fetchFailed'));
    } finally {
      setLoading(false);
    }
  };

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = !searchTerm || 
      doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.file_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleDocumentToggle = (documentId: string) => {
    const newSelection = selectedDocuments.includes(documentId)
      ? selectedDocuments.filter(id => id !== documentId)
      : [...selectedDocuments, documentId];
    
    onSelectionChange(newSelection);
  };

  const handleUploadComplete = async (documentId: string, publicUrl: string) => {
    console.log('✅ Upload completed:', { documentId, publicUrl });
    
    // Add to selection
    onSelectionChange([...selectedDocuments, documentId]);
    
    // Refresh document list
    await fetchDocuments();
    
    // Close upload modal
    setShowUpload(false);
  };


  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-16 bg-gray-100 rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg">
            <FileText className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              {t('podcast.documents.title')}
            </h3>
            <p className="text-sm text-gray-600">
              {t('podcast.documents.subtitle')}
            </p>
          </div>
        </div>
        
        {/* Upload Button */}
        <button
          onClick={() => setShowUpload(!showUpload)}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          <Plus className="w-4 h-4" />
          <span>Upload Files</span>
        </button>
      </div>

      {/* Simple Upload Modal */}
      {showUpload && (
        <SimplePodcastUpload
          onUploadComplete={handleUploadComplete}
          onClose={() => setShowUpload(false)}
        />
      )}

      {/* Search and Filter */}
      <div className="space-y-4 mb-6">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder={t('podcast.documents.search.placeholder')}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`
                px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200
                ${selectedCategory === category.value
                  ? 'bg-blue-100 text-blue-700 border border-blue-200'
                  : 'bg-gray-50 text-gray-600 border border-gray-200 hover:bg-gray-100'
                }
              `}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* Selection Summary */}
      {selectedDocuments.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4"
        >
          <div className="flex items-center space-x-2 text-sm text-blue-700">
            <Check className="w-4 h-4" />
            <span>
              {t('podcast.documents.selected', { count: selectedDocuments.length })}
            </span>
          </div>
        </motion.div>
      )}

      {/* Documents List */}
      <div className="space-y-3 max-h-96 overflow-y-auto">
        <AnimatePresence>
          {error ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center space-x-2 text-red-600 text-sm p-3 bg-red-50 border border-red-200 rounded-lg"
            >
              <AlertTriangle className="w-5 h-5" />
              <span>{error}</span>
            </motion.div>
          ) : filteredDocuments.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-8"
            >
              <Folder className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-500 text-sm">
                {documents.length === 0 
                  ? t('podcast.documents.empty.noDocuments')
                  : t('podcast.documents.empty.noResults')
                }
              </p>
            </motion.div>
          ) : (
            filteredDocuments.map((document) => {
              const isSelected = selectedDocuments.includes(document.id);
              
              return (
                <motion.div
                  key={document.id}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`
                    relative p-4 border rounded-lg cursor-pointer transition-all duration-200 group
                    ${isSelected
                      ? 'bg-blue-50 border-blue-200 shadow-sm'
                      : 'bg-gray-50 border-gray-200 hover:bg-gray-100 hover:border-gray-300'
                    }
                  `}
                  onClick={() => handleDocumentToggle(document.id)}
                >
                  <div className="flex items-start space-x-3">
                    {/* Checkbox */}
                    <div className={`
                      w-5 h-5 mt-0.5 rounded border-2 flex items-center justify-center transition-all duration-200
                      ${isSelected
                        ? 'bg-blue-600 border-blue-600'
                        : 'border-gray-300 group-hover:border-gray-400'
                      }
                    `}>
                      {isSelected && (
                        <Check className="w-3 h-3 text-white" />
                      )}
                    </div>

                    {/* Document Info */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-gray-900 truncate">
                        {document.title}
                      </h4>
                      <p className="text-sm text-gray-600 truncate">
                        {document.file_name}
                      </p>
                      
                      {/* Tags */}
                      {document.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {document.tags.slice(0, 3).map((tag, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-700"
                            >
                              {tag}
                            </span>
                          ))}
                          {document.tags.length > 3 && (
                            <span className="text-xs text-gray-500">
                              +{document.tags.length - 3} more
                            </span>
                          )}
                        </div>
                      )}
                      
                      {/* Metadata */}
                      <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                        <span>{formatFileSize(document.file_size)}</span>
                        <span>•</span>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{formatDate(document.created_at)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })
          )}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <div className="mt-4 pt-4 border-t border-gray-200">
        <p className="text-xs text-gray-500">
          {t('podcast.documents.footer.tip')}
        </p>
      </div>
    </div>
  );
};

export default DocumentSelector;