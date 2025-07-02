import React, { useCallback, useEffect, useRef, useState } from 'react';
import { History, Plus, FileText, Sparkles, Stethoscope, Heart, AlertCircle, X } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';
import { useChat } from '../../contexts/ChatContext';
import { useFlowiseChat } from '../../hooks/chat/useFlowiseChat';
import { useAuth } from '../../contexts/AuthContext';
import { MessageList } from './MessageList';
import { MessageInput } from './MessageInput';
import { ConversationList } from './ConversationList';
import { KnowledgeBaseSelector } from './KnowledgeBaseSelector';
import { usePersonalKBPlaceholder } from './PersonalKBGuidance';
import { NewCaseButton } from './NewCaseButton';
import { CaseCreationModal } from './CaseCreationModal';
import { HeaderCaseIndicator } from './HeaderCaseIndicator';
import { CaseListModal } from './CaseListModal';
import { CalculatorSuggestions } from './CalculatorSuggestions';
import { Button } from '../ui/button';
import { Message, PatientCase, Attachment } from '../../types/chat';
import { useCalculatorIntegration } from '../../hooks/useCalculatorIntegration';
import { v4 as uuidv4 } from 'uuid';
import { WelcomeScreen } from './WelcomeScreen';

interface FlowiseChatWindowProps {
  className?: string;
  isDisabled?: boolean;
  placeholder?: string;
  allowAttachments?: boolean;
}

export const FlowiseChatWindow: React.FC<FlowiseChatWindowProps> = ({
  className = '',
  isDisabled = false,
  placeholder,
  allowAttachments = true
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
    setKnowledgeBase
  } = useChat();

  const [showConversationList, setShowConversationList] = useState(false);
  const [showCaseModal, setShowCaseModal] = useState(false);
  const [showCaseListModal, setShowCaseListModal] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Check if we need to create a conversation when user sends first message
  const ensureConversationExists = useCallback(() => {
    if (!chatState.activeConversationId) {
      const newConversationId = createNewConversation(
        `Conversation ${new Date().toLocaleDateString()}`,
        profile?.medical_specialty as 'cardiology' | 'obgyn'
      );
      setActiveConversation(newConversationId);
      return newConversationId;
    }
    return chatState.activeConversationId;
  }, [chatState.activeConversationId, createNewConversation, setActiveConversation, profile]);

  // Enhanced animations and interactions
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute

    return () => {
      clearInterval(timer);
    };
  }, []);

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
    error: flowiseError
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
  const handleSendMessage = useCallback(async (content: string, attachments?: Attachment[]) => {
    if (!content.trim() && (!attachments || attachments.length === 0)) return;

    // Ensure a conversation exists before sending the message
    ensureConversationExists();

    // Create user message with enhanced metadata
    const userMessage: Message = {
      id: uuidv4(),
      content,
      type: 'user',
      timestamp: new Date(),
      attachments,
      metadata: {
        sessionId: chatState.currentSessionId,
        knowledgeBase: chatState.selectedKnowledgeBase,
        caseId: chatState.caseContext.activeCase?.id
      }
    };

    addMessage(userMessage);
    setLoading(true);

    try {
      // Pass the current knowledge base type and case context to the API
      await sendToFlowise(
        content, 
        attachments, 
        chatState.caseContext.activeCase, 
        chatState.selectedKnowledgeBase, 
        undefined // personalDocumentIds - handled automatically by backend
      );
    } catch (error) {
      console.error('Failed to send message:', error);
      setError('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  }, [addMessage, sendToFlowise, chatState.currentSessionId, chatState.selectedKnowledgeBase, chatState.caseContext.activeCase, setLoading, setError, ensureConversationExists]);

  // Handle case creation
  const handleCaseCreate = async (caseData: Omit<PatientCase, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newCase = createCase(caseData);
    
    // Create a new conversation for this case
    createNewConversation(
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

  // Handle case reset - Enhanced with better debugging
  const handleResetCase = () => {
    console.log('🔥 HANDLE RESET CASE FUNCTION CALLED!!! - This should appear if button click works');
    console.log('🚀 Starting case reset process...');
    console.log('Current active case:', chatState.caseContext.activeCase);
    console.log('Current messages count:', chatState.messages.length);
    
    try {
      // Step 1: Clear the active case first
      console.log('Step 1: Resetting case context...');
      resetCaseContext();
      
      // Step 2: Clear current messages
      console.log('Step 2: Clearing messages...');
      clearMessages();
      
      // Step 3: Force clear any lingering case references in localStorage
      console.log('Step 3: Cleaning localStorage...');
      try {
        const conversationsData = localStorage.getItem('medimind-conversations');
        if (conversationsData) {
          const conversations = JSON.parse(conversationsData);
          if (Array.isArray(conversations)) {
            const updatedConversations = conversations.map((conv: any) => ({
              ...conv,
              caseId: undefined,
              title: conv.title?.startsWith('Case:') ? 'General Discussion' : conv.title
            }));
            localStorage.setItem('medimind-conversations', JSON.stringify(updatedConversations));
          }
        }
      } catch (storageError) {
        console.warn('localStorage cleanup failed:', storageError);
        // Clear the entire conversations storage if it's corrupted
        localStorage.removeItem('medimind-conversations');
      }
      
      // Step 4: Create a completely new conversation without any case context
      console.log('Step 4: Creating new conversation...');
      const newConversationId = createNewConversation(
        'Fresh Conversation', 
        profile?.medical_specialty as 'cardiology' | 'obgyn',
        undefined // explicitly no case ID
      );
      
      // Step 5: Set the new conversation as active
      console.log('Step 5: Setting active conversation...');
      setActiveConversation(newConversationId);
      
      // Step 6: Add a welcoming AI message for the fresh start
      console.log('Step 6: Adding welcome message...');
      setTimeout(() => {
        const welcomeMessage = {
          id: `msg-${Date.now()}`,
          content: `Hello! I've cleared the previous case context and we're starting fresh. How can I assist you with your ${profile?.medical_specialty || 'medical'} practice today?`,
          type: 'ai' as const,
          timestamp: new Date(),
        };
        addMessage(welcomeMessage);
        console.log('✅ Welcome message added');
      }, 100);
      
      // Step 7: Force re-render by clearing error state
      setError(undefined);
      
      console.log('✅ Case reset completed successfully!');
      console.log('New conversation ID:', newConversationId);
      
    } catch (error) {
      console.error('❌ Error during case reset:', error);
      setError('Failed to reset case. Please try again.');
    }
  };

  // Handle viewing case details (could expand to show full case modal later)
  const handleViewCase = () => {
    console.log('🔍 handleViewCase called!');
    console.log('Current active case:', chatState.caseContext.activeCase);
    // For now, we'll show the case list modal to allow case switching
    setShowCaseListModal(true);
    console.log('Case list modal should be opening...');
  };

  // Handle case selection from list
  const handleCaseSelect = (selectedCase: PatientCase) => {
    // Set the selected case as active
    setActiveCase(selectedCase);
    
    // Clear current messages to start fresh with the new case
    clearMessages();
    
    // Create a new conversation for the selected case
    const newConversationId = createNewConversation(
      `Case: ${selectedCase.title}`, 
      profile?.medical_specialty as 'cardiology' | 'obgyn',
      selectedCase.id
    );
    
    // Set the new conversation as active
    setActiveConversation(newConversationId);
    
    // Add an initial AI message with case context
    const caseIntroMessage: Message = {
      id: uuidv4(),
      content: t('chat.caseReceived', { title: selectedCase.title }) + 
              '\n\n' + t('chat.caseSummary') + 
              `\n${selectedCase.description}` +
              '\n\n' + t('chat.caseDiscussionPrompt'),
      type: 'ai',
      timestamp: new Date(),
    };
    
    addMessage(caseIntroMessage);
    
    // Close the case list modal
    setShowCaseListModal(false);
  };

  // Calculator integration for AI suggestions
  const onCalculatorSelect = useCallback((calculatorId: string) => {
    handleCalculatorSelect(calculatorId);
  }, [handleCalculatorSelect]);

  // Handle new conversation - Enhanced
  const handleNewConversation = () => {
    // Clear current messages
    clearMessages();
    
    // Reset any active case context
    resetCaseContext();
    
    // Create a completely fresh conversation
    const newConversationId = createNewConversation(
      undefined, 
      profile?.medical_specialty as 'cardiology' | 'obgyn'
    );
    
    // Set the new conversation as active
    setActiveConversation(newConversationId);
    
    // Optional: Show success feedback
    console.log('New conversation started successfully');
  };

  // Connection status
  const isConnected = !flowiseError;

  // Get specialty configuration
  const getSpecialtyConfig = () => {
    if (profile?.medical_specialty === 'cardiology') {
      return {
        icon: <Heart className="w-5 h-5" />,
        title: t('chat.cardiologyAICoPilot'),
        gradient: 'from-red-500 via-pink-500 to-rose-600',
        bgGradient: 'from-red-50/30 via-pink-50/30 to-rose-50/30',
        borderColor: 'border-red-200/50',
        accentColor: 'red'
      };
    } else if (profile?.medical_specialty === 'obgyn') {
      return {
        icon: <Stethoscope className="w-5 h-5" />,
        title: t('chat.obgynAICoPilot'),
        gradient: 'from-purple-500 via-violet-500 to-indigo-600',
        bgGradient: 'from-purple-50/30 via-violet-50/30 to-indigo-50/30',
        borderColor: 'border-purple-200/50',
        accentColor: 'purple'
      };
    } else {
      return {
        icon: <Sparkles className="w-5 h-5" />,
        title: t('chat.medicalAICoPilot'),
        gradient: 'from-blue-500 via-indigo-500 to-purple-500',
        bgGradient: 'from-blue-50/30 via-indigo-50/30 to-purple-50/30',
        borderColor: 'border-blue-200/50',
        accentColor: 'blue'
      };
    }
  };

  const specialtyConfig = getSpecialtyConfig();

  return (
    <div className={`h-full w-full flex flex-col relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50 ${className}`}>
      {/* Sophisticated Premium Header */}
      <div className="relative bg-white/98 backdrop-blur-xl border-b border-slate-200/50 shadow-sm">
        {/* Luxurious Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Primary gradient mesh */}
          <div className="absolute -top-24 -left-24 w-96 h-48 bg-gradient-conic from-blue-500/8 via-indigo-500/6 to-purple-500/8 rounded-full blur-3xl transform rotate-12" />
          <div className="absolute -top-16 -right-16 w-80 h-32 bg-gradient-conic from-violet-500/6 via-rose-500/4 to-blue-500/6 rounded-full blur-2xl transform -rotate-12" />
          
          {/* Subtle texture overlay */}
          <div className="absolute inset-0 opacity-[0.02] bg-gradient-to-br from-slate-900/5 via-transparent to-slate-900/5" />
        </div>

        {/* Enhanced Top Navigation Bar */}
        <div className="relative px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6">
          <div className="flex items-center justify-between flex-wrap gap-4 lg:flex-nowrap">
            {/* Elevated Brand Identity */}
            <div className="flex items-center space-x-3 sm:space-x-4 lg:space-x-5 min-w-0">
              {/* Premium Brand Icon */}
              <div className={`
                relative group cursor-pointer transform transition-all duration-700 hover:scale-105
                flex-shrink-0
              `}>
                <div className={`
                  relative p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br ${specialtyConfig.gradient}
                  shadow-xl sm:shadow-2xl shadow-slate-900/20 backdrop-blur-xl border border-white/20
                  transition-all duration-500 hover:shadow-3xl hover:shadow-blue-500/25
                `}>
                  {React.cloneElement(specialtyConfig.icon, { 
                    className: "w-6 h-6 sm:w-7 lg:w-8 sm:h-7 lg:h-8 text-white relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" 
                  })}
                  
                  {/* Sophisticated shine effect */}
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-white/30 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Luxury glow ring */}
                  <div className="absolute -inset-1 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-400/30 via-purple-400/20 to-rose-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-lg" />
                </div>
              </div>

              {/* Refined Brand Typography */}
              <div className="flex flex-col space-y-0.5 sm:space-y-1 min-w-0">
                <h1 className={`
                  text-lg sm:text-xl lg:text-2xl font-black tracking-tight leading-none
                  bg-gradient-to-r ${specialtyConfig.gradient} bg-clip-text text-transparent
                  transition-all duration-500 hover:tracking-wide
                  drop-shadow-sm truncate
                `}>
                  MediMind AI
                </h1>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className={`
                    flex items-center space-x-1.5 sm:space-x-2 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full
                    bg-gradient-to-r from-slate-100/80 to-slate-50/80 border border-slate-200/50
                    backdrop-blur-sm flex-shrink-0
                  `}>
                    <div className={`
                      w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300
                      ${isConnected ? 'bg-emerald-400 shadow-emerald-400/50' : 'bg-red-400 shadow-red-400/50'}
                      ${isConnected ? 'animate-pulse shadow-lg' : 'animate-ping shadow-lg'}
                    `} />
                    <span className="text-xs font-semibold text-slate-600 uppercase tracking-widest hidden sm:inline">
                      {profile?.medical_specialty || 'Medical'} Expert
                    </span>
                    <span className="text-xs font-semibold text-slate-600 uppercase tracking-widest sm:hidden">
                      {(profile?.medical_specialty || 'Medical').slice(0, 6)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium Control Suite */}
            <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4 w-full lg:w-auto justify-end lg:justify-start order-last lg:order-none">
              {/* Mobile: Collapsible Quick Actions */}
              <div className="hidden sm:flex items-center space-x-2 lg:space-x-3">
                {/* Fresh Start - Premium Design */}
                <Button
                  variant="ghost" 
                  size="sm"
                  onClick={() => {
                    console.log('Fresh Start: Clearing conversations but preserving case studies');
                    clearMessages();
                    resetCaseContext(); // Clear active case but preserve case history
                    localStorage.removeItem('medimind-conversations'); // Only clear conversations
                    // NOTE: Preserving medimind-cases so case studies persist
                    createNewConversation('Fresh Start', profile?.medical_specialty as 'cardiology' | 'obgyn');
                    window.location.reload();
                  }}
                  className={`
                    group relative h-10 sm:h-11 px-4 sm:px-5 rounded-xl
                    bg-gradient-to-r from-emerald-50/90 to-green-50/90 border border-emerald-200/60
                    text-emerald-700 font-semibold text-sm
                    hover:shadow-lg hover:shadow-emerald-500/20 hover:border-emerald-300/60
                    active:scale-95 transition-all duration-200 ease-out
                    focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:ring-offset-2
                  `}
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500/10 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  <span className="relative z-10 flex items-center">
                    <span>Fresh Start</span>
                  </span>
                </Button>

                {/* Header Case Indicator or Connection Status */}
                {chatState.caseContext.activeCase ? (
                  <HeaderCaseIndicator
                    activeCase={chatState.caseContext.activeCase}
                    onViewCase={handleViewCase}
                    onResetCase={handleResetCase}
                  />
                ) : (
                  <div className={`
                    flex items-center space-x-2 sm:space-x-3 h-10 sm:h-11 px-4 sm:px-5 rounded-xl
                    bg-gradient-to-r from-white/90 to-slate-50/90 border border-slate-200/60
                    shadow-md backdrop-blur-xl
                  `}>
                    {/* Status Indicator */}
                    <div className="flex items-center space-x-1.5 sm:space-x-2 lg:space-x-3">
                      {isConnected ? (
                        <>
                          <div className="relative">
                            <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 bg-emerald-400 rounded-full shadow-emerald-400/50 shadow-md" />
                            <div className="absolute inset-0 w-2 sm:w-2.5 h-2 sm:h-2.5 bg-emerald-400 rounded-full animate-ping opacity-30" />
                          </div>
                          <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest hidden lg:inline">
                            Connected
                          </span>
                          <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest lg:hidden">
                            Online
                          </span>
                        </>
                      ) : (
                        <>
                          <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 bg-red-400 rounded-full animate-pulse shadow-red-400/50 shadow-md" />
                          <span className="text-xs font-bold text-red-600 uppercase tracking-widest">
                            Offline
                          </span>
                        </>
                      )}
                    </div>

                    {/* Elegant Divider - Hidden on mobile */}
                    <div className="hidden sm:block w-px h-3 lg:h-4 bg-gradient-to-b from-transparent via-slate-300 to-transparent" />

                    {/* Session Time - Enhanced */}
                    <div className="hidden sm:block text-xs font-medium text-slate-500 tabular-nums">
                      {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                )}
              </div>

              {/* Knowledge Base Selector - Enhanced with responsive sizing */}
              <div className="hidden lg:block">
                <KnowledgeBaseSelector
                  selectedKnowledgeBase={chatState.selectedKnowledgeBase}
                  onKnowledgeBaseChange={setKnowledgeBase}
                  personalDocumentCount={chatState.personalDocumentCount}
                  disabled={chatState.isLoading}
                  className="min-w-[280px] lg:min-w-[320px]"
                />
              </div>

              {/* Visual Separator */}
              <div className="hidden lg:block w-px h-8 bg-gradient-to-b from-transparent via-slate-300/50 to-transparent" />

              {/* Sophisticated Action Group */}
              <div className="flex items-center space-x-1 sm:space-x-2">
                {/* History - Elevated */}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowConversationList(true)}
                  className={`
                    group relative h-10 w-10 sm:h-11 sm:w-11 p-0 rounded-xl
                    bg-gradient-to-br from-slate-50/90 to-slate-100/90 border border-slate-200/60
                    text-slate-600 hover:text-slate-800 shadow-md
                    hover:shadow-lg hover:border-slate-300/60
                    active:scale-95 transition-all duration-200 ease-out
                    focus:outline-none focus:ring-2 focus:ring-slate-500/20 focus:ring-offset-2
                  `}
                  title="View conversation history"
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-slate-500/5 to-gray-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  <History className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" />
                </Button>

                {/* Cases - Premium */}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowCaseListModal(true)}
                  className={`
                    group relative h-10 w-10 sm:h-11 sm:w-11 p-0 rounded-xl
                    bg-gradient-to-br from-purple-50/90 to-violet-100/90 border border-purple-200/60
                    text-purple-600 hover:text-purple-800 shadow-md
                    hover:shadow-lg hover:border-purple-300/60
                    active:scale-95 transition-all duration-200 ease-out
                    focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:ring-offset-2
                  `}
                  title={`View cases (${chatState.caseContext.caseHistory.length} created)`}
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/5 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" />
                  {/* Enhanced Case Badge */}
                  {chatState.caseContext.caseHistory.length > 0 && (
                    <div className="absolute -top-1 -right-1 sm:-top-1.5 sm:-right-1.5 min-w-[16px] sm:min-w-[20px] h-4 sm:h-5 px-0.5 sm:px-1 rounded-full bg-gradient-to-r from-purple-500 to-violet-600 text-white text-xs font-bold flex items-center justify-center shadow-lg shadow-purple-500/30">
                      {chatState.caseContext.caseHistory.length > 9 ? '9+' : chatState.caseContext.caseHistory.length}
                    </div>
                  )}
                </Button>

                {/* Visual Separator */}
                <div className="w-px h-6 bg-gradient-to-b from-transparent via-slate-300/50 to-transparent mx-1" />

                {/* New Case - Refined */}
                <NewCaseButton
                  onClick={() => setShowCaseModal(true)}
                  disabled={isDisabled || !isConnected}
                  variant="ghost"
                  size="sm"
                  className={`
                    group relative h-10 sm:h-11 px-4 sm:px-5 rounded-xl
                    bg-gradient-to-br from-blue-50/90 to-indigo-100/90 border border-blue-200/60
                    text-blue-600 hover:text-blue-800 shadow-md
                    hover:shadow-lg hover:border-blue-300/60
                    active:scale-95 transition-all duration-200 ease-out
                    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:translate-y-0
                    focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-2
                  `}
                />
              </div>
            </div>

            {/* Mobile Knowledge Base Selector */}
            <div className="lg:hidden w-full order-2">
              <KnowledgeBaseSelector
                selectedKnowledgeBase={chatState.selectedKnowledgeBase}
                onKnowledgeBaseChange={setKnowledgeBase}
                personalDocumentCount={chatState.personalDocumentCount}
                disabled={chatState.isLoading}
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Refined Progress Indicator */}
        {(chatState.isLoading || isAnalyzing) && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-200/30 via-blue-200/50 to-purple-200/30 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full shadow-lg" 
              style={{ 
                width: '40%', 
                animation: 'sophisticatedSlide 3s cubic-bezier(0.4, 0, 0.2, 1) infinite',
                filter: 'drop-shadow(0 2px 8px rgba(59, 130, 246, 0.4))'
              }} 
            />
          </div>
        )}

        {/* Subtle Bottom Enhancement */}
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-2/3 h-4 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent blur-2xl rounded-full" />
      </div>

      {/* Enhanced Main Content Area */}
      <div className="flex-1 flex flex-col min-h-0 overflow-hidden relative">
        {/* Messages Area with Enhanced Styling */}
        <div className="flex-1 flex flex-col min-h-0 overflow-hidden relative">
          {chatState.messages.length === 0 ? (
            // Enhanced Welcome Screen
            <div className="relative">
              <WelcomeScreen 
                onQuickAction={(action) => {
                  if (action === 'case') {
                    setShowCaseModal(true);
                  } else if (action === 'cases') {
                    setShowCaseListModal(true);
                  } else if (action.startsWith('selectCase:')) {
                    const caseId = action.split(':')[1];
                    const selectedCase = chatState.caseContext.caseHistory.find(c => c.id === caseId);
                    if (selectedCase) {
                      handleCaseSelect(selectedCase);
                    }
                  }
                }}
                specialty={profile?.medical_specialty || 'general'}
                caseHistory={chatState.caseContext.caseHistory}
              />
              
            </div>
          ) : (
            // Enhanced Chat Messages
            <div className="flex-1 flex flex-col min-h-0 relative">
              <MessageList 
                messages={chatState.messages} 
                isTyping={chatState.isTyping}
                className="flex-1"
              />
              
            </div>
          )}
        </div>
      </div>

      {/* Enhanced Error and Notifications */}
      {chatState.error && (
        <div className={`
          flex-shrink-0 mx-6 mb-2 p-4 rounded-2xl
          backdrop-blur-xl bg-gradient-to-r from-red-500/10 to-rose-500/10
          border border-red-200/30 shadow-lg
        `}>
          <div className="flex items-start space-x-3">
            <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-sm font-medium text-red-800">Connection Error</p>
              <p className="text-xs text-red-600 mt-1">{chatState.error}</p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setError(undefined)}
              className="p-1 h-6 w-6 text-red-600 hover:text-red-800 hover:bg-red-100 rounded-lg"
            >
              <X className="w-3 h-3" />
            </Button>
          </div>
        </div>
      )}

      {/* Calculator Suggestions with Enhanced Design */}
      {showSuggestions && suggestions && suggestions.recommendations && suggestions.recommendations.length > 0 && (
        <div className="flex-shrink-0 px-6 mb-2">
          <CalculatorSuggestions
            recommendations={suggestions.recommendations}
            matchedKeywords={suggestions.matchedKeywords}
            confidence={suggestions.confidence}
            onCalculatorSelect={onCalculatorSelect}
            onDismiss={dismissSuggestions}
            className="backdrop-blur-xl bg-gradient-to-r from-white/90 to-white/80 border border-white/30 rounded-2xl shadow-xl"
          />
        </div>
      )}

      {/* Enhanced Input Area */}
      <div className="flex-shrink-0 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/95 to-transparent backdrop-blur-2xl" />
        
        <div className="relative border-t border-white/30 bg-gradient-to-r from-white/90 via-white/80 to-white/90 backdrop-blur-2xl">
          <MessageInput
            onSendMessage={handleSendMessage}
            disabled={isDisabled || chatState.isLoading || !isConnected}
            placeholder={
              personalKBPlaceholder || 
              placeholder || 
              (isConnected ? "Ask me about medical guidelines, case analysis, or clinical decisions..." : "Connecting to AI assistant...")
            }
            allowAttachments={allowAttachments}
            maxFileSize={10}
            maxFiles={5}
            selectedKnowledgeBase={chatState.selectedKnowledgeBase}
            personalDocumentCount={chatState.personalDocumentCount}
            className="border-0 bg-transparent"
          />
        </div>

        {/* Input Area Glow Effect */}
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-3/4 h-6 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent blur-xl rounded-full" />
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

      {/* Global Styles for Animations */}
      <style>{`
        @keyframes slide {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(0%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default FlowiseChatWindow;