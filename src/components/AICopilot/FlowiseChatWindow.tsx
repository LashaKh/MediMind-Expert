import React, { useCallback, useEffect, useRef, useState } from 'react';
import { MessageSquare, Wifi, WifiOff, History, Plus, FileText, Sparkles, Brain, Stethoscope, User, BookOpen } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';
import { useChat } from '../../contexts/ChatContext';
import { useFlowiseChat } from '../../hooks/chat/useFlowiseChat';
import { useAuth } from '../../contexts/AuthContext';
import { MessageList } from './MessageList';
import { MessageInput } from './MessageInput';
import { ConversationList } from './ConversationList';
import { KnowledgeBaseSelector } from './KnowledgeBaseSelector';
import { PersonalKBGuidance, usePersonalKBPlaceholder } from './PersonalKBGuidance';
import { NewCaseButton } from './NewCaseButton';
import { CaseCreationModal } from './CaseCreationModal';
import { CaseIndicator } from './CaseIndicator';
import { CaseListModal } from './CaseListModal';
import { CalculatorSuggestions } from './CalculatorSuggestions';
import { Button } from '../ui/button';
import { Message, PatientCase } from '../../types/chat';
import { useCalculatorIntegration } from '../../hooks/useCalculatorIntegration';
import { v4 as uuidv4 } from 'uuid';

interface FlowiseChatWindowProps {
  className?: string;
  isDisabled?: boolean;
  placeholder?: string;
  allowAttachments?: boolean;
  enableDemo?: boolean;
}

export const FlowiseChatWindow: React.FC<FlowiseChatWindowProps> = ({
  className = '',
  isDisabled = false,
  placeholder,
  allowAttachments = true,
  enableDemo = false
}) => {
  const { t } = useTranslation();
  const { profile } = useAuth();
  const {
    state: chatState,
    addMessage,
    setTyping,
    setLoading,
    setError,
    clearMessages,
    createNewConversation,
    setActiveConversation,
    // Case management methods
    createCase,
    setActiveCase,
    resetCaseContext,
    // Knowledge base management methods
    setKnowledgeBase,
    setPersonalDocumentCount
  } = useChat();

  const [showConversationList, setShowConversationList] = useState(false);
  const [showCaseModal, setShowCaseModal] = useState(false);
  const [showCaseListModal, setShowCaseListModal] = useState(false);

  // Calculator integration
  const {
    suggestions,
    showSuggestions,
    isAnalyzing,
    dismissSuggestions,
    handleCalculatorSelect
  } = useCalculatorIntegration();

  // Personal KB guidance and placeholder
  const personalKBPlaceholder = usePersonalKBPlaceholder(chatState.selectedKnowledgeBase === 'personal');

  // Initialize Flowise chat with context integration
  const {
    sendMessage: sendToFlowise,
    isLoading: flowiseLoading,
    error: flowiseError,
    sessionId
  } = useFlowiseChat({
    onMessageReceived: (message: Message) => {
      addMessage(message);
    },
    onError: (error: string) => {
      setError(error);
    },
    onTypingStart: () => {
      setTyping(true);
    },
    onTypingEnd: () => {
      setTyping(false);
    },
    sessionId: chatState.currentSessionId,
    caseContext: chatState.caseContext.activeCase,
    knowledgeBaseType: chatState.selectedKnowledgeBase,
    // For personal knowledge base, the backend automatically finds user's Vector Store
    // No need to pass document IDs - OpenAI Vector Store handles document retrieval
    personalDocumentIds: undefined
  });

  // Update loading state based on Flowise status
  useEffect(() => {
    setLoading(flowiseLoading);
  }, [flowiseLoading]);

  // Update error state based on Flowise errors
  useEffect(() => {
    if (flowiseError) {
      setError(flowiseError);
    }
  }, [flowiseError]);

  // Handle sending a new message
  const handleSendMessage = useCallback(async (content: string, attachments?: any[]) => {
    if (!content.trim() || isDisabled || flowiseLoading) return;

    // Add user message to context immediately
    const userMessage: Message = {
      id: uuidv4(),
      content: content.trim(),
      type: 'user',
      timestamp: new Date(),
      status: 'sent',
      attachments: attachments
    };

    addMessage(userMessage);

    // Send to Flowise API with case context and Vector Store integration
    try {
      await sendToFlowise(
        content, 
        attachments, 
        chatState.caseContext.activeCase,
        chatState.selectedKnowledgeBase,
        // Vector Store integration handles document retrieval automatically
        undefined
      );
    } catch (error) {
      console.error('Error sending message:', error);
      // Error handling is managed by the useFlowiseChat hook
    }
  }, [isDisabled, flowiseLoading, addMessage, sendToFlowise, chatState.caseContext.activeCase, chatState.selectedKnowledgeBase]);

  // Handle case creation
  const handleCaseCreate = async (caseData: Omit<PatientCase, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newCase = createCase(caseData);
    
    // Create a new conversation for this case
    const conversationId = createNewConversation(
      `Case: ${newCase.title}`, 
      profile?.medical_specialty as 'cardiology' | 'obgyn',
      newCase.id
    );
    
    // Add an initial AI message with case context
    const caseIntroMessage: Message = {
      id: uuidv4(),
      content: t('chat.caseReceived', { title: newCase.title }) + 
              '\n\n' + t('chat.caseSummary') + 
              `\n${newCase.description}` +
              '\n\n' + t('chat.caseDiscussionPrompt'),
      type: 'ai',
      timestamp: new Date(),
    };
    
    addMessage(caseIntroMessage);
    
    return newCase;
  };

  // Handle case reset
  const handleResetCase = () => {
    resetCaseContext();
    // Optionally create a new conversation without case context
    createNewConversation(undefined, profile?.medical_specialty as 'cardiology' | 'obgyn');
  };

  // Handle viewing case details (could expand to show full case modal later)
  const handleViewCase = () => {
    // For now, we'll just console log the case details
    // This could be expanded to show a case details modal
    if (chatState.caseContext.activeCase) {
      console.log('Active case details:', chatState.caseContext.activeCase);
      // Future: show case details modal
    }
  };

  // Handle case selection from list
  const handleCaseSelect = (selectedCase: PatientCase) => {
    setActiveCase(selectedCase);
    // Create a new conversation for the selected case
    createNewConversation(
      `Case: ${selectedCase.title}`, 
      profile?.medical_specialty as 'cardiology' | 'obgyn',
      selectedCase.id
    );
  };

  // Calculator integration for AI suggestions
  const onCalculatorSelect = useCallback((calculatorId: string) => {
    handleCalculatorSelect(calculatorId);
  }, [handleCalculatorSelect]);

  // Handle new conversation
  const handleNewConversation = () => {
    createNewConversation(undefined, profile?.medical_specialty as 'cardiology' | 'obgyn');
  };

  const getCurrentConversationTitle = () => {
    const activeConversation = chatState.conversations.find(
      conv => conv.id === chatState.activeConversationId
    );
    return activeConversation?.title || t('chat.defaultChatTitle');
  };

  // Connection status
  const isConnected = !flowiseError && sessionId;

  // Get specialty configuration
  const getSpecialtyConfig = () => {
    switch (profile?.medical_specialty) {
      case 'cardiology':
        return {
          icon: <Stethoscope className="w-5 h-5" />,
          title: t('chat.cardiologyAICoPilot'),
          gradient: 'from-red-500 via-pink-500 to-purple-500',
          bgGradient: 'from-red-50/30 via-pink-50/30 to-purple-50/30',
          borderColor: 'border-red-200/50'
        };
      case 'obgyn':
        return {
          icon: <Brain className="w-5 h-5" />,
          title: t('chat.obgynAICoPilot'),
          gradient: 'from-purple-500 via-pink-500 to-rose-500',
          bgGradient: 'from-purple-50/30 via-pink-50/30 to-rose-50/30',
          borderColor: 'border-purple-200/50'
        };
      default:
        return {
          icon: <Sparkles className="w-5 h-5" />,
          title: t('chat.medicalAICoPilot'),
          gradient: 'from-blue-500 via-indigo-500 to-purple-500',
          bgGradient: 'from-blue-50/30 via-indigo-50/30 to-purple-50/30',
          borderColor: 'border-blue-200/50'
        };
    }
  };

  const specialtyConfig = getSpecialtyConfig();

  return (
    <div 
      className={`h-full w-full flex flex-col bg-gradient-to-br ${specialtyConfig.bgGradient} dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 ${className}`}
      role="main"
      aria-label={t('chat.chatWindow')}
    >
      {/* Compact Modern Glass Header */}
      <div className="flex-shrink-0 backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border-b border-white/20 dark:border-gray-700/50 shadow-lg">
        {/* Single Compact Header Row */}
        <div className="flex items-center justify-between px-4 py-2.5">
          <div className="flex items-center space-x-3">
            <div className={`p-1.5 rounded-lg bg-gradient-to-r ${specialtyConfig.gradient} shadow-md`}>
              {React.cloneElement(specialtyConfig.icon, { className: "w-4 h-4 text-white" })}
            </div>
            <div className="min-w-0">
              <h1 className={`text-lg font-bold bg-gradient-to-r ${specialtyConfig.gradient} bg-clip-text text-transparent leading-tight`}>
                {specialtyConfig.title}
              </h1>
              <div className="flex items-center space-x-2 mt-0.5">
                <p className="text-xs text-gray-600 dark:text-gray-400 truncate">
                  {getCurrentConversationTitle()}
                </p>
                {chatState.messages.length > 0 && (
                  <span className="text-xs px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-gray-600 dark:text-gray-400">
                    {chatState.messages.length}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Compact Right Side */}
          <div className="flex items-center space-x-2">
            {/* Compact Status */}
            <div className="flex items-center space-x-1.5 px-2 py-1 rounded-md bg-white/40 dark:bg-gray-800/40">
              {isConnected ? (
                <>
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium text-green-700 dark:text-green-400">{t('chat.online')}</span>
                </>
              ) : (
                <>
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                  <span className="text-xs font-medium text-red-700 dark:text-red-400">{t('chat.offline')}</span>
                </>
              )}
            </div>

            {/* Compact Knowledge Base Selector */}
            <div className="flex items-center">
              <KnowledgeBaseSelector
                selectedKnowledgeBase={chatState.selectedKnowledgeBase}
                onKnowledgeBaseChange={setKnowledgeBase}
                personalDocumentCount={chatState.personalDocumentCount}
                disabled={chatState.isLoading}
                className="text-xs scale-90"
              />
            </div>

            {/* Compact Action Buttons */}
            <div className="flex items-center space-x-1">
              <NewCaseButton
                onClick={() => setShowCaseModal(true)}
                disabled={isDisabled || !isConnected}
                variant="ghost"
                size="sm"
                className="h-7 w-7 p-0 hover:bg-white/40 dark:hover:bg-gray-800/40"
              />

              {chatState.caseContext.caseHistory.length > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowCaseListModal(true)}
                  className="h-7 w-7 p-0 hover:bg-white/40 dark:hover:bg-gray-800/40"
                  title={t('chat.viewAllCases')}
                >
                  <FileText className="w-3.5 h-3.5" />
                </Button>
              )}

              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowConversationList(true)}
                className="h-7 w-7 p-0 hover:bg-white/40 dark:hover:bg-gray-800/40"
                title={t('chat.viewConversationHistory')}
              >
                <History className="w-3.5 h-3.5" />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={handleNewConversation}
                className="h-7 w-7 p-0 hover:bg-white/40 dark:hover:bg-gray-800/40"
                title={t('chat.startNewConversation')}
              >
                <Plus className="w-3.5 h-3.5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Compact Personal KB Guidance - Only show if active and no messages */}
        {chatState.selectedKnowledgeBase === 'personal' && chatState.messages.length === 0 && (
          <div className="px-4 pb-2">
            <div className="text-xs text-blue-600 dark:text-blue-400 bg-blue-50/60 dark:bg-blue-900/20 rounded-lg px-3 py-1.5 flex items-center space-x-2">
              <User className="w-3 h-3" />
              <span>
                {chatState.personalDocumentCount > 0 
                  ? t('chat.usingPersonalDocs', { count: chatState.personalDocumentCount.toString() })
                  : t('chat.uploadDocsForKB')
                }
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Messages Container - Properly distributed layout */}
      <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
        {/* Active Case Indicator */}
        {chatState.caseContext.activeCase && (
          <div className="flex-shrink-0 px-6 pt-4 pb-2">
            <CaseIndicator
              activeCase={chatState.caseContext.activeCase}
              onViewCase={handleViewCase}
              onResetCase={handleResetCase}
            />
          </div>
        )}

        {/* Main Chat Content Area - Properly spaced */}
        <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
          {chatState.messages.length === 0 ? (
            // Welcome Screen with proper spacing
            <div className="flex-1 flex flex-col overflow-hidden">
              {/* Main Welcome Content */}
              <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-8 overflow-y-auto">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${specialtyConfig.gradient} shadow-xl flex items-center justify-center mb-4`}>
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {t('chat.welcomeToMediMind')}
                </h2>
                <p className="text-base text-gray-600 dark:text-gray-400 max-w-2xl mb-6">
                  {t('chat.welcomeDescription')}
                </p>
                
                {/* Feature Cards - Responsive Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl w-full mb-6">
                  <div className="p-4 rounded-lg bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-white/30 dark:border-gray-700/30 hover:bg-white/70 dark:hover:bg-gray-800/70 transition-all duration-200">
                    <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center mb-3">
                      <Stethoscope className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">{t('chat.clinicalGuidelines')}</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {t('chat.clinicalGuidelinesExample')}
                    </p>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-white/30 dark:border-gray-700/30 hover:bg-white/70 dark:hover:bg-gray-800/70 transition-all duration-200">
                    <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center mb-3">
                      <Brain className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">{t('chat.caseAnalysis')}</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {t('chat.caseAnalysisExample')}
                    </p>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-white/30 dark:border-gray-700/30 hover:bg-white/70 dark:hover:bg-gray-800/70 transition-all duration-200">
                    <div className="w-10 h-10 rounded-lg bg-purple-500 flex items-center justify-center mb-3">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">{t('chat.drugInformation')}</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {t('chat.drugInformationExample')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Knowledge Base Status - Fixed at bottom of welcome area */}
              <div className="flex-shrink-0 px-6 pb-4">
                <div className="flex items-center justify-center">
                  <div className="flex items-center space-x-2 px-4 py-2 bg-blue-50/80 dark:bg-blue-900/30 rounded-lg border border-blue-200/50 dark:border-blue-800/50 backdrop-blur-sm">
                    <BookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <span className="text-sm text-blue-700 dark:text-blue-300 font-medium">
                      {t('chat.usingGeneralMedicalKnowledge')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // Message List - Full height when messages exist
            <MessageList 
              messages={chatState.messages}
              isTyping={chatState.isTyping}
              className="flex-1"
              typingMessage={chatState.isLoading ? t('chat.analyzingQuery') : undefined}
            />
          )}
        </div>

        {/* Notifications Area - Properly positioned */}
        <div className="flex-shrink-0">
          {/* Error Display */}
          {chatState.error && (
            <div className="mx-6 mb-4">
              <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg shadow-sm">
                <p className="text-sm text-red-600 dark:text-red-400 font-medium">{chatState.error}</p>
                <button
                  onClick={() => setError(undefined)}
                  className="mt-2 text-xs text-red-500 hover:text-red-700 underline font-medium"
                >
                  {t('chat.dismiss')}
                </button>
              </div>
            </div>
          )}

          {/* Loading Indicator */}
          {chatState.isLoadingHistory && (
            <div className="mx-6 mb-4">
              <div className="p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg shadow-sm">
                <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">{t('chat.loadingConversationHistory')}</p>
              </div>
            </div>
          )}

          {/* Calculator Suggestions */}
          {showSuggestions && suggestions && (
            <div className="mx-6 mb-4">
              <CalculatorSuggestions
                recommendations={suggestions.recommendations}
                matchedKeywords={suggestions.matchedKeywords}
                confidence={suggestions.confidence}
                onCalculatorSelect={onCalculatorSelect}
                onDismiss={dismissSuggestions}
              />
            </div>
          )}
        </div>
      </div>

      {/* Message Input - No gaps, attached to bottom */}
      <div className="flex-shrink-0 border-t border-white/20 dark:border-gray-700/50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl">
        <MessageInput
          onSendMessage={handleSendMessage}
          disabled={isDisabled || chatState.isLoading || !isConnected}
          placeholder={
            personalKBPlaceholder || 
            placeholder || 
            (isConnected ? t('chat.typeMessage') : t('chat.connectToStartChatting'))
          }
          allowAttachments={allowAttachments}
          maxFileSize={10}
          maxFiles={5}
          selectedKnowledgeBase={chatState.selectedKnowledgeBase}
          personalDocumentCount={chatState.personalDocumentCount}
          className="border-0 bg-transparent"
        />
      </div>

      {/* Modals */}
      <ConversationList
        isOpen={showConversationList}
        onClose={() => setShowConversationList(false)}
      />

      <CaseCreationModal
        isOpen={showCaseModal}
        onClose={() => setShowCaseModal(false)}
        onCaseCreate={handleCaseCreate}
        specialty={profile?.medical_specialty as 'cardiology' | 'obgyn'}
      />

      <CaseListModal
        isOpen={showCaseListModal}
        onClose={() => setShowCaseListModal(false)}
        cases={chatState.caseContext.caseHistory}
        onCaseSelect={handleCaseSelect}
        activeCase={chatState.caseContext.activeCase}
      />
    </div>
  );
};

export default FlowiseChatWindow; 