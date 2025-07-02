import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  Upload,
  FileText,
  AlertTriangle,
  CheckCircle,
  Loader,
  X
} from 'lucide-react';
import { uploadDocumentForPodcast } from '../../lib/api/podcastUpload';

interface SimplePodcastUploadProps {
  onUploadComplete: (documentId: string, publicUrl: string) => void;
  onClose: () => void;
}

const SimplePodcastUpload: React.FC<SimplePodcastUploadProps> = ({
  onUploadComplete,
  onClose
}) => {
  const { t } = useTranslation();
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');

  const supportedTypes = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'text/plain',
    'text/markdown'
  ];

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (!selectedFile) return;

    // Validate file type
    if (!supportedTypes.includes(selectedFile.type)) {
      setError('Unsupported file type. Please upload PDF, DOC, DOCX, TXT, or MD files.');
      return;
    }

    // Validate file size (50MB for PDF, 25MB for others)
    const maxSize = selectedFile.type === 'application/pdf' ? 50 * 1024 * 1024 : 25 * 1024 * 1024;
    if (selectedFile.size > maxSize) {
      setError(`File too large. Maximum size is ${maxSize / 1024 / 1024}MB for ${selectedFile.type}`);
      return;
    }

    setFile(selectedFile);
    setError('');
    
    // Auto-generate title from filename if empty
    if (!title) {
      const nameWithoutExt = selectedFile.name.replace(/\.[^/.]+$/, '');
      setTitle(nameWithoutExt);
    }
  };

  const handleUpload = async () => {
    if (!file || !title.trim()) {
      setError('Please select a file and provide a title');
      return;
    }

    setIsUploading(true);
    setError('');
    setSuccess('');

    try {
      console.log('📤 Starting simple upload for podcast...');

      const result = await uploadDocumentForPodcast({
        file,
        title: title.trim(),
        description: description.trim() || undefined,
        category: 'podcast_temp',
        tags: ['podcast', 'uploaded']
      });

      console.log('✅ Upload successful:', result);

      setSuccess(result.message);
      onUploadComplete(result.documentId, result.publicUrl);
      
      // Auto-close after success
      setTimeout(() => {
        onClose();
      }, 2000);

    } catch (err) {
      console.error('❌ Upload error:', err);
      setError(err instanceof Error ? err.message : 'Upload failed');
    } finally {
      setIsUploading(false);
    }
  };

  const resetForm = () => {
    setFile(null);
    setTitle('');
    setDescription('');
    setError('');
    setSuccess('');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">
            Upload Document for Podcast
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* File Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Document
            </label>
            <div className="relative">
              <input
                type="file"
                accept=".pdf,.doc,.docx,.txt,.md"
                onChange={handleFileSelect}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                disabled={isUploading}
              />
              <div className={`
                border-2 border-dashed rounded-lg p-6 text-center transition-colors
                ${file ? 'border-green-300 bg-green-50' : 'border-gray-300 hover:border-gray-400'}
                ${isUploading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
              `}>
                {file ? (
                  <div className="space-y-2">
                    <CheckCircle className="w-8 h-8 text-green-500 mx-auto" />
                    <p className="text-sm font-medium text-green-700">{file.name}</p>
                    <p className="text-xs text-green-600">
                      {Math.round(file.size / 1024)} KB
                    </p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto" />
                    <p className="text-sm text-gray-600">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-xs text-gray-500">
                      PDF, DOC, DOCX, TXT, MD files
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Document Title *
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter document title"
              disabled={isUploading}
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description (Optional)
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Brief description of the document content"
              disabled={isUploading}
            />
          </div>

          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center space-x-2 p-3 bg-red-50 border border-red-200 rounded-lg"
            >
              <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0" />
              <p className="text-sm text-red-700">{error}</p>
            </motion.div>
          )}

          {/* Success Message */}
          {success && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center space-x-2 p-3 bg-green-50 border border-green-200 rounded-lg"
            >
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <p className="text-sm text-green-700">{success}</p>
            </motion.div>
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-end space-x-3 p-6 border-t border-gray-200">
          <button
            onClick={resetForm}
            disabled={isUploading}
            className="px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Reset
          </button>
          <button
            onClick={handleUpload}
            disabled={!file || !title.trim() || isUploading}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 transition-colors"
          >
            {isUploading ? (
              <>
                <Loader className="w-4 h-4 animate-spin" />
                <span>Uploading...</span>
              </>
            ) : (
              <>
                <Upload className="w-4 h-4" />
                <span>Upload & Generate</span>
              </>
            )}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SimplePodcastUpload;