import React, { useState, useRef, KeyboardEvent, ChangeEvent, useEffect } from 'react';
import { Send, Paperclip, X, Loader2, AlertCircle, FileText, Image, BookOpen, User } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';
import { Attachment } from '../../types/chat';
import { KnowledgeBaseType } from '../../types/chat';
import { processFileForUpload, validateFileForFlowise, getUploadTypeDescription } from '../../utils/fileUpload';

interface MessageInputProps {
  onSendMessage: (message: string, attachments?: Attachment[]) => Promise<void>;
  disabled?: boolean;
  placeholder?: string;
  maxLength?: number;
  allowAttachments?: boolean;
  maxFileSize?: number; // in MB
  maxFiles?: number;
  className?: string;
  // Knowledge base props
  selectedKnowledgeBase?: KnowledgeBaseType;
  personalDocumentCount?: number;
}

export const MessageInput: React.FC<MessageInputProps> = ({
  onSendMessage,
  disabled = false,
  placeholder,
  maxLength = 2000,
  allowAttachments = false,
  maxFileSize = 10, // 10MB default
  maxFiles = 5,
  className = '',
  // Knowledge base props
  selectedKnowledgeBase,
  personalDocumentCount
}) => {
  const { t } = useTranslation();
  const [message, setMessage] = useState('');
  const [attachments, setAttachments] = useState<Attachment[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isProcessingFiles, setIsProcessingFiles] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Detect mobile device and keyboard
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleResize = () => {
      checkMobile();
      
      // Detect virtual keyboard on mobile
      if (isMobile) {
        const viewportHeight = window.visualViewport?.height || window.innerHeight;
        const windowHeight = window.innerHeight;
        const heightDiff = windowHeight - viewportHeight;
        setKeyboardHeight(heightDiff > 150 ? heightDiff : 0);
      }
    };

    checkMobile();
    window.addEventListener('resize', handleResize);
    window.visualViewport?.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.visualViewport?.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);

  // Auto-resize textarea based on content
  const adjustTextAreaHeight = () => {
    const textArea = textAreaRef.current;
    if (textArea) {
      textArea.style.height = 'auto';
      const maxHeight = isMobile ? 120 : 160;
      textArea.style.height = `${Math.min(textArea.scrollHeight, maxHeight)}px`;
    }
  };

  // Handle focus - scroll to input on mobile
  const handleFocus = () => {
    if (isMobile && textAreaRef.current) {
      setTimeout(() => {
        textAreaRef.current?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center' 
        });
      }, 300); // Wait for keyboard animation
    }
  };

  // Handle message content change
  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (value.length <= maxLength) {
      setMessage(value);
      adjustTextAreaHeight();
    }
  };

  // Handle key press events
  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Handle file selection
  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    processFiles(files);
  };

  // Process selected files and convert to attachments with base64 data
  const processFiles = async (files: File[]) => {
    setUploadError(null);
    setIsProcessingFiles(true);

    try {
      // Check total file count
      if (attachments.length + files.length > maxFiles) {
        setUploadError(t('chat.maxFilesError', { maxFiles: maxFiles.toString() }));
        return;
      }

      const validFiles: File[] = [];
      const errors: string[] = [];

      // Validate each file using Flowise-specific validation
      files.forEach(file => {
        const validation = validateFileForFlowise(file);
        if (!validation.isValid) {
          errors.push(validation.error!);
        } else {
          validFiles.push(file);
        }
      });

      // Show errors if any
      if (errors.length > 0) {
        setUploadError(errors[0]); // Show first error
        return;
      }

      // Process files with base64 conversion (async)
      const newAttachments: Attachment[] = [];
      const processingErrors: string[] = [];

      for (const file of validFiles) {
        try {
          const attachment = await processFileForUpload(file);
          newAttachments.push(attachment);
        } catch (error) {
          processingErrors.push(error instanceof Error ? error.message : 'Unknown error');
        }
      }

      // Handle processing errors
      if (processingErrors.length > 0) {
        setUploadError(processingErrors[0]);
        return;
      }

      // Add successfully processed attachments
      setAttachments(prev => [...prev, ...newAttachments]);
      
      // Clear file input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }

    } catch (error) {
      console.error('Error processing files:', error);
      setUploadError('Failed to process files. Please try again.');
    } finally {
      setIsProcessingFiles(false);
    }
  };

  // Remove attachment
  const removeAttachment = (attachmentId: string) => {
    setAttachments(prev => {
      const attachment = prev.find(att => att.id === attachmentId);
      // Clean up preview URLs (but not base64 data URLs)
      if (attachment?.preview && attachment.preview.startsWith('blob:')) {
        URL.revokeObjectURL(attachment.preview);
      }
      return prev.filter(att => att.id !== attachmentId);
    });
    setUploadError(null); // Clear any upload errors
  };

  // Handle drag and drop
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    if (allowAttachments) {
      setIsDragOver(true);
    }
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    if (!allowAttachments) return;
    
    const files = Array.from(e.dataTransfer.files);
    processFiles(files);
  };

  // Send message
  const handleSendMessage = async () => {
    const trimmedMessage = message.trim();
    
    if (!trimmedMessage && attachments.length === 0) return;
    if (disabled || isSubmitting) return;

    setIsSubmitting(true);
    setUploadError(null);
    
    try {
      await onSendMessage(trimmedMessage, attachments.length > 0 ? attachments : undefined);
      
      // Clear form after successful send
      setMessage('');
      setAttachments([]);
      
      // Reset textarea height
      if (textAreaRef.current) {
        textAreaRef.current.style.height = 'auto';
      }
    } catch (error) {
      console.error('Failed to send message:', error);
      setUploadError('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get file icon based on type
  const getFileIcon = (type: string) => {
    if (type.startsWith('image/')) return Image;
    if (type.includes('pdf') || type.includes('document')) return FileText;
    return FileText;
  };

  // Get knowledge base icon
  const getKnowledgeBaseIcon = () => {
    switch (selectedKnowledgeBase) {
      case 'personal':
        return User;
      default:
        return BookOpen;
    }
  };

  // Get knowledge base info text
  const getKnowledgeBaseInfo = () => {
    switch (selectedKnowledgeBase) {
      case 'personal':
        return personalDocumentCount
          ? t('chat.personalDocsAvailable', { count: personalDocumentCount.toString() })
          : t('chat.noPersonalDocs');
      default:
        return t('chat.generalMedicalKnowledge');
    }
  };

  const canSend = (message.trim() || attachments.length > 0) && !disabled && !isSubmitting;

  return (
    <div 
      ref={containerRef}
      className={`
        flex flex-col transition-all duration-300 safe-bottom
        ${isMobile ? 'mobile-input-container' : ''}
        ${className}
      `}
      style={{
        paddingBottom: isMobile && keyboardHeight > 0 ? `${keyboardHeight}px` : undefined
      }}
    >
      {/* Knowledge Base Indicator - Modern Glass Style */}
      {selectedKnowledgeBase && (
        <div className="flex items-center px-6 py-3 bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm border-b border-white/10 dark:border-gray-700/20">
          <div className="flex items-center space-x-3 flex-1 min-w-0">
            {React.createElement(getKnowledgeBaseIcon(), { 
              className: "w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" 
            })}
            <span className="text-sm text-blue-700 dark:text-blue-300 font-medium truncate">
              {getKnowledgeBaseInfo()}
            </span>
          </div>
        </div>
      )}

      {/* Attachments Preview - Modern Cards */}
      {attachments.length > 0 && (
        <div className="px-6 py-4 bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm border-b border-white/10 dark:border-gray-700/20">
          <div className="flex flex-wrap gap-3">
            {attachments.map((attachment) => {
              const IconComponent = getFileIcon(attachment.type);
              return (
                <div
                  key={attachment.id}
                  className="flex items-center space-x-3 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl px-4 py-3 text-sm border border-white/20 dark:border-gray-700/20 shadow-sm max-w-full hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-200"
                >
                  <IconComponent className="w-4 h-4 text-gray-600 dark:text-gray-400 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300 truncate flex-1 min-w-0 font-medium">
                    {attachment.name}
                  </span>
                  <button
                    onClick={() => removeAttachment(attachment.id)}
                    className="touch-target-sm p-1.5 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-lg transition-all duration-200 focus-enhanced group"
                    aria-label={t('chat.removeAttachment')}
                  >
                    <X className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Error Display - Modern Alert */}
      {uploadError && (
        <div className="flex items-center space-x-3 px-6 py-4 bg-red-50/80 dark:bg-red-900/20 backdrop-blur-sm border-b border-red-200/50 dark:border-red-800/30">
          <div className="p-1 rounded-lg bg-red-100 dark:bg-red-900/40">
            <AlertCircle className="w-4 h-4 text-red-600 dark:text-red-400" />
          </div>
          <span className="text-sm text-red-700 dark:text-red-300 font-medium">
            {uploadError}
          </span>
        </div>
      )}

      {/* Input Area - Modern Glass Container */}
      <div 
        className={`
          flex items-end space-x-4 p-6
          ${isDragOver ? 'bg-blue-50/50 dark:bg-blue-900/20' : ''}
          transition-all duration-300
        `}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {/* File Upload Button - Modern Glass */}
        {allowAttachments && (
          <div className="flex-shrink-0">
            <input
              ref={fileInputRef}
              type="file"
              multiple
              onChange={handleFileSelect}
              className="hidden"
              accept=".pdf,.doc,.docx,.txt,.md,.png,.jpg,.jpeg,.gif,.webp"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              disabled={disabled || isProcessingFiles}
              className="touch-target p-3 rounded-xl bg-white/60 dark:bg-gray-800/60 hover:bg-white/80 dark:hover:bg-gray-800/80 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 transition-all duration-200 disabled:opacity-50 focus-enhanced shadow-sm hover:shadow-md"
              aria-label={t('chat.attachFile')}
            >
              {isProcessingFiles ? (
                <Loader2 className="w-5 h-5 text-gray-600 dark:text-gray-400 animate-spin" />
              ) : (
                <Paperclip className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              )}
            </button>
          </div>
        )}

        {/* Text Input - Modern Glass Design */}
        <div className="flex-1 relative">
          <textarea
            ref={textAreaRef}
            value={message}
            onChange={handleMessageChange}
            onKeyDown={handleKeyPress}
            onFocus={handleFocus}
            placeholder={placeholder || t('chat.typeMessage')}
            disabled={disabled || isSubmitting}
            rows={1}
            className={`
              w-full resize-none rounded-xl border-0
              px-4 py-3 text-base
              bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm text-gray-900 dark:text-white
              placeholder-gray-500 dark:placeholder-gray-400
              focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-white/80 dark:focus:bg-gray-800/80
              disabled:opacity-50 disabled:cursor-not-allowed
              transition-all duration-200 shadow-sm
              border border-white/20 dark:border-gray-700/20
              ${isMobile ? 'text-base' : ''} /* Prevent iOS zoom */
            `}
            style={{
              minHeight: isMobile ? '48px' : '44px', // Touch target height
              maxHeight: isMobile ? '120px' : '160px'
            }}
          />
          
          {/* Character Counter - Hidden on mobile */}
          {message.length > maxLength * 0.8 && (
            <div className="absolute -bottom-6 right-2 text-xs text-gray-500 dark:text-gray-400 hidden sm:block bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-2 py-1 rounded-md">
              {message.length}/{maxLength}
            </div>
          )}
        </div>

        {/* Send Button - Modern Gradient Design */}
        <div className="flex-shrink-0">
          <button
            onClick={handleSendMessage}
            disabled={!canSend}
            className={`
              touch-target p-3 rounded-xl transition-all duration-200 focus-enhanced shadow-lg
              ${canSend
                ? 'bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600 text-white shadow-blue-500/25 hover:shadow-blue-500/40 hover:shadow-xl transform hover:scale-105 active:scale-95'
                : 'bg-gray-200/60 dark:bg-gray-700/60 backdrop-blur-sm text-gray-400 dark:text-gray-500 cursor-not-allowed border border-white/20 dark:border-gray-700/20'
              }
            `}
            aria-label={t('chat.sendMessage')}
          >
            {isSubmitting ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Send className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageInput; 