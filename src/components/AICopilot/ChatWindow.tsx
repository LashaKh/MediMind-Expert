import React, { useState, useRef, useEffect } from 'react';
import { Loader2, AlertCircle, Settings, MessageSquare, HelpCircle } from 'lucide-react';
import { MessageList } from './MessageList';
import { MessageInput } from './MessageInput';
import { useTranslation } from '../../hooks/useTranslation';
import { useAuth } from '../../contexts/AuthContext';
import { Message, KnowledgeBaseType, Attachment } from '../../types/chat';

interface ChatWindowProps {
  className?: string;
  initialMessage?: string;
  hideHeader?: boolean;
  maxHeight?: string;
  knowledgeBase?: KnowledgeBaseType;
  personalDocumentCount?: number;
}

export const ChatWindow: React.FC<ChatWindowProps> = ({
  className = '',
  initialMessage,
  hideHeader = false,
  maxHeight = '600px',
  knowledgeBase = 'curated',
  personalDocumentCount = 0
}) => {
  const { t } = useTranslation();
  const { profile } = useAuth();
  const [selectedKnowledgeBase, setSelectedKnowledgeBase] = useState<KnowledgeBaseType>(knowledgeBase);
  const [showSettings, setShowSettings] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isConnected] = useState(true);
  const [connectionError] = useState<string | null>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Handle sending messages (simplified for now)
  const sendMessage = async (content: string, attachments?: Attachment[]) => {
    if (!content.trim() && (!attachments || attachments.length === 0)) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      type: 'user',
      timestamp: new Date(),
      attachments
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    // Simulate AI response for responsive testing
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: `Thank you for your message: "${content}". This is a responsive design test message to demonstrate mobile optimization.`,
        type: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1500);
  };

  // Detect mobile and set up responsive behavior
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-scroll to bottom on new messages (with mobile optimization)
  useEffect(() => {
    if (messagesEndRef.current) {
      const scrollOptions: ScrollIntoViewOptions = {
        behavior: isMobile ? 'instant' : 'smooth',
        block: 'end'
      };
      
      if (isMobile) {
        setTimeout(() => {
          messagesEndRef.current?.scrollIntoView(scrollOptions);
        }, 100);
      } else {
        messagesEndRef.current.scrollIntoView(scrollOptions);
      }
    }
  }, [messages, isMobile]);

  // Send initial message when component mounts
  useEffect(() => {
    if (initialMessage && messages.length === 0) {
      sendMessage(initialMessage);
    }
  }, [initialMessage, messages.length]);

  const handleKnowledgeBaseChange = (newKnowledgeBase: KnowledgeBaseType) => {
    setSelectedKnowledgeBase(newKnowledgeBase);
    setShowSettings(false);
  };

  const getConnectionStatusColor = () => {
    if (!isConnected) return 'text-red-500';
    if (isLoading) return 'text-yellow-500';
    return 'text-green-500';
  };

  const getConnectionStatusText = () => {
    if (!isConnected) return 'Disconnected';
    if (isLoading) return 'Thinking...';
    return 'Connected';
  };

  return (
    <div 
      className={`
        flex flex-col bg-white dark:bg-gray-900 
        ${isMobile ? 'h-full' : 'h-full rounded-lg border border-gray-200 dark:border-gray-700 shadow-lg'}
        ${className}
      `}
      style={{ 
        height: isMobile ? '100%' : '100%'
      }}
    >
      {/* Header - Mobile Optimized */}
      {!hideHeader && (
        <div className={`
          flex items-center justify-between px-3 sm:px-4 py-3 sm:py-4 
          border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800
          ${isMobile ? 'rounded-none safe-top pt-safe-top' : 'rounded-t-lg'}
        `}>
          <div className="flex items-center space-x-2 sm:space-x-3 flex-1 min-w-0">
            <div className={`
              p-1.5 sm:p-2 rounded-lg bg-gradient-to-r from-primary to-secondary
              ${isMobile ? 'flex-shrink-0' : ''}
            `}>
              <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white truncate">
                {t('chat.aiAssistant')}
              </h3>
              <div className="flex items-center space-x-2 text-xs sm:text-sm">
                <span className={`font-medium ${getConnectionStatusColor()}`}>
                  {getConnectionStatusText()}
                </span>
                {!isMobile && profile?.medical_specialty && (
                  <>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-600 dark:text-gray-400 capitalize truncate">
                      {profile.medical_specialty}
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Action buttons - Mobile Optimized */}
          <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
            <button
              onClick={() => setShowSettings(!showSettings)}
              className={`
                touch-target p-2 rounded-lg transition-colors focus-enhanced
                ${showSettings 
                  ? 'bg-primary text-white' 
                  : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }
              `}
              aria-label="Chat settings"
              title="Chat settings"
            >
              <Settings className="w-4 h-4" />
            </button>

            {/* Help button for mobile */}
            {isMobile && (
              <button
                className="touch-target p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors focus-enhanced"
                aria-label="Help"
                title="Help"
              >
                <HelpCircle className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      )}

      {/* Settings Panel - Mobile Optimized */}
      {showSettings && (
        <div className={`
          px-3 sm:px-4 py-3 border-b border-gray-200 dark:border-gray-700 bg-blue-50 dark:bg-blue-900/20
          ${isMobile ? 'rounded-none' : ''}
        `}>
          <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2 sm:mb-3">
            Knowledge Base Selection
          </h4>
          <div className={`
            grid gap-2 sm:gap-3
            ${isMobile ? 'grid-cols-1' : 'grid-cols-2'}
          `}>
            <button
              onClick={() => handleKnowledgeBaseChange('curated')}
              className={`
                touch-target p-2 sm:p-3 rounded-lg border transition-all text-left
                ${selectedKnowledgeBase === 'curated'
                  ? 'border-primary bg-primary/5 text-primary'
                  : 'border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-primary/50'
                }
              `}
            >
              <div className="font-medium text-sm">Curated Medical</div>
              <div className="text-xs opacity-75 mt-1">
                Curated medical knowledge
              </div>
            </button>
            
            <button
              onClick={() => handleKnowledgeBaseChange('personal')}
              className={`
                touch-target p-2 sm:p-3 rounded-lg border transition-all text-left
                ${selectedKnowledgeBase === 'personal'
                  ? 'border-primary bg-primary/5 text-primary'
                  : 'border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-primary/50'
                }
              `}
            >
              <div className="font-medium text-sm">Personal Documents</div>
              <div className="text-xs opacity-75 mt-1">
                {personalDocumentCount > 0 
                  ? `${personalDocumentCount} documents available`
                  : 'No documents uploaded yet'
                }
              </div>
            </button>
          </div>
        </div>
      )}

      {/* Connection Error - Mobile Optimized */}
      {connectionError && (
        <div className="flex items-center space-x-2 px-3 sm:px-4 py-2 sm:py-3 bg-red-50 dark:bg-red-900/20 border-b border-red-200 dark:border-red-800">
          <AlertCircle className="w-4 h-4 text-red-600 dark:text-red-400 flex-shrink-0" />
          <span className="text-xs sm:text-sm text-red-700 dark:text-red-300 flex-1">
            {connectionError}
          </span>
        </div>
      )}

      {/* Chat Content - Mobile Optimized */}
      <div 
        ref={chatContainerRef}
        className={`
          flex-1 overflow-hidden flex flex-col
          ${isMobile ? 'min-h-0' : ''}
        `}
      >
        {/* Messages Area */}
        <div className={`
          flex-1 overflow-y-auto scrollbar-thin
          ${isMobile ? 'px-3 py-2' : 'p-4'}
        `}>
          {/* Welcome message for empty chat */}
          {messages.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full text-center p-4 sm:p-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <MessageSquare className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Welcome to AI Assistant
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-sm">
                Ask me anything about medical topics, calculations, or patient care.
              </p>
              
              {/* Quick start suggestions for mobile */}
              {isMobile && (
                <div className="mt-4 space-y-2 w-full max-w-xs">
                  <button
                    onClick={() => sendMessage("What medical calculations are available?")}
                    className="w-full touch-target px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg transition-colors text-left"
                  >
                    View medical calculators
                  </button>
                  <button
                    onClick={() => sendMessage("How can you help with patient care?")}
                    className="w-full touch-target px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg transition-colors text-left"
                  >
                    Learn about AI assistance
                  </button>
                </div>
              )}
            </div>
          )}
          
          {/* Message List */}
          <MessageList 
            messages={messages} 
            className={isMobile ? 'space-y-3' : 'space-y-4'}
          />
          
          {/* Loading indicator - Mobile optimized */}
          {isLoading && (
            <div className="flex items-center justify-center py-3 sm:py-4">
              <div className="flex items-center space-x-2 text-primary">
                <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                <span className="text-sm sm:text-base">
                  AI is thinking...
                </span>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Message Input - Mobile Optimized */}
      <MessageInput
        onSendMessage={sendMessage}
        disabled={!isConnected}
        allowAttachments={true}
        selectedKnowledgeBase={selectedKnowledgeBase}
        personalDocumentCount={personalDocumentCount}
        className={isMobile ? 'rounded-none safe-bottom' : 'rounded-b-lg'}
        placeholder={isConnected ? undefined : 'Reconnecting...'}
      />
    </div>
  );
}; 