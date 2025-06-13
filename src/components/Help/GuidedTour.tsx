import React, { useState, useEffect, useRef } from 'react';
import { X, ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

interface TourStep {
  id: string;
  title: string;
  content: string;
  target: string; // CSS selector for the element to highlight
  position: 'top' | 'bottom' | 'left' | 'right';
  allowSkip?: boolean;
}

interface GuidedTourProps {
  isOpen: boolean;
  onClose: () => void;
  tourType: 'workspace' | 'chat' | 'calculators' | 'knowledge-base';
}

const tourSteps: Record<string, TourStep[]> = {
  workspace: [
    {
      id: 'welcome',
      title: 'Welcome to MediMind Expert!',
      content: 'This guided tour will help you get started with your medical AI co-pilot. Let\'s explore the key features of your workspace.',
      target: 'body',
      position: 'bottom'
    },
    {
      id: 'ai-copilot',
      title: 'AI Co-Pilot',
      content: 'Chat with your medical AI assistant. Ask questions, discuss cases, and get evidence-based recommendations. The AI is specialized for your medical field.',
      target: '[data-tour="ai-copilot"]',
      position: 'right'
    },
    {
      id: 'calculators',
      title: 'Medical Calculators',
      content: 'Access professional-grade medical calculators for clinical decision support. Results can be shared directly with the AI for further analysis.',
      target: '[data-tour="calculators"]',
      position: 'right'
    },
    {
      id: 'knowledge-base',
      title: 'Knowledge Base',
      content: 'Upload and manage your medical documents. The AI can reference these documents in conversations for personalized responses.',
      target: '[data-tour="knowledge-base"]',
      position: 'right'
    },
    {
      id: 'case-management',
      title: 'Case Management',
      content: 'Create anonymized patient cases for structured discussions with the AI. Perfect for complex clinical scenarios.',
      target: '[data-tour="case-management"]',
      position: 'left'
    }
  ],
  chat: [
    {
      id: 'chat-welcome',
      title: 'AI Chat Interface',
      content: 'This is your AI Co-Pilot chat interface. Ask medical questions, discuss cases, and get intelligent responses.',
      target: '[data-tour="chat-window"]',
      position: 'top'
    },
    {
      id: 'message-input',
      title: 'Message Input',
      content: 'Type your questions here. You can also upload files, images, and documents by dragging them into the chat or clicking the attachment icon.',
      target: '[data-tour="message-input"]',
      position: 'top'
    },
    {
      id: 'file-upload',
      title: 'File Upload',
      content: 'Upload medical images, ECGs, lab results, or documents. The AI can analyze and discuss these files with you.',
      target: '[data-tour="file-upload"]',
      position: 'top'
    },
    {
      id: 'calculator-suggestions',
      title: 'Calculator Suggestions',
      content: 'The AI may suggest relevant medical calculators based on your conversation. Click to use them directly.',
      target: '[data-tour="calculator-suggestions"]',
      position: 'left'
    }
  ],
  calculators: [
    {
      id: 'calculator-welcome',
      title: 'Medical Calculators',
      content: 'Professional-grade calculators for clinical decision support. All calculations are validated and follow medical guidelines.',
      target: '[data-tour="calculator-tabs"]',
      position: 'bottom'
    },
    {
      id: 'calculator-categories',
      title: 'Calculator Categories',
      content: 'Calculators are organized by clinical use. Browse categories to find the tools you need for specific scenarios.',
      target: '[data-tour="calculator-categories"]',
      position: 'bottom'
    },
    {
      id: 'calculator-form',
      title: 'Calculator Input',
      content: 'Enter patient parameters carefully. All inputs are validated for clinical accuracy with helpful error messages.',
      target: '[data-tour="calculator-form"]',
      position: 'left'
    },
    {
      id: 'calculator-results',
      title: 'Results & AI Integration',
      content: 'View detailed results with clinical interpretation. Use "Share with AI" to discuss the results with your AI Co-Pilot.',
      target: '[data-tour="calculator-results"]',
      position: 'left'
    }
  ],
  'knowledge-base': [
    {
      id: 'kb-welcome',
      title: 'Knowledge Base',
      content: 'Build your personal medical knowledge base by uploading relevant documents and literature.',
      target: '[data-tour="knowledge-base-header"]',
      position: 'bottom'
    },
    {
      id: 'document-upload',
      title: 'Document Upload',
      content: 'Upload PDFs, Word documents, and text files. Documents are processed with AI for intelligent search and reference.',
      target: '[data-tour="document-upload"]',
      position: 'bottom'
    },
    {
      id: 'document-processing',
      title: 'AI Processing',
      content: 'Uploaded documents are analyzed and indexed. This enables the AI to reference and cite your documents in conversations.',
      target: '[data-tour="processing-status"]',
      position: 'left'
    },
    {
      id: 'document-library',
      title: 'Document Library',
      content: 'View and manage your uploaded documents. Search through your personal knowledge base and organize your medical literature.',
      target: '[data-tour="document-library"]',
      position: 'top'
    }
  ]
};

export const GuidedTour: React.FC<GuidedTourProps> = ({
  isOpen,
  onClose,
  tourType
}) => {
  const { profile } = useAuth();
  const [currentStep, setCurrentStep] = useState(0);
  const [highlightedElement, setHighlightedElement] = useState<HTMLElement | null>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const steps = tourSteps[tourType] || [];
  const currentStepData = steps[currentStep];

  useEffect(() => {
    if (!isOpen || !currentStepData) return;

    const targetElement = document.querySelector(currentStepData.target) as HTMLElement;
    
    if (targetElement) {
      setHighlightedElement(targetElement);
      
      // Scroll target into view
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center'
      });
    } else {
      // If target element not found, still show the tour but without highlighting
      setHighlightedElement(null);
    }

    // Prevent body scroll when tour is open
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, currentStep, currentStepData]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleComplete();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = () => {
    // Mark tour as completed for this user
    localStorage.setItem(`tour-completed-${tourType}`, 'true');
    onClose();
  };

  const handleSkip = () => {
    localStorage.setItem(`tour-completed-${tourType}`, 'true');
    onClose();
  };

  const getTooltipPosition = () => {
    // Always center the tooltip for maximum reliability
    return {
      position: 'fixed' as const,
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 9999,
      maxWidth: '90vw',
      maxHeight: '90vh'
    };
  };

  const getHighlightStyle = () => {
    if (!highlightedElement) return {};

    const rect = highlightedElement.getBoundingClientRect();
    return {
      position: 'fixed' as const,
      top: rect.top - 4,
      left: rect.left - 4,
      width: rect.width + 8,
      height: rect.height + 8,
      zIndex: 9999,
      border: '2px solid #3B82F6',
      borderRadius: '8px',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      pointerEvents: 'none' as const
    };
  };

  if (!isOpen || !currentStepData) {
    return null;
  }

  return (
    <>
      {/* Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black bg-opacity-50 z-[9998]"
        onClick={onClose}
      />

      {/* Highlight */}
      {highlightedElement && (
        <div style={getHighlightStyle()} />
      )}

      {/* Tooltip */}
      <div
        style={getTooltipPosition()}
        className="bg-white rounded-lg shadow-xl border max-w-sm w-full mx-4"
        id="guided-tour-tooltip"
      >
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <h3 className="text-lg font-semibold text-gray-900">
                {currentStepData.title}
              </h3>
              <span className="ml-2 text-sm text-gray-500">
                {currentStep + 1} of {steps.length}
              </span>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close tour"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <p className="text-gray-600 mb-6 leading-relaxed">
            {currentStepData.content}
          </p>

          {/* Progress bar */}
          <div className="mb-6">
            <div className="flex justify-between text-xs text-gray-500 mb-2">
              <span>Progress</span>
              <span>{Math.round(((currentStep + 1) / steps.length) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {currentStep > 0 && (
                <button
                  onClick={handlePrevious}
                  className="flex items-center px-3 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 mr-1" />
                  Previous
                </button>
              )}
            </div>

            <div className="flex items-center space-x-2">
              {(currentStepData.allowSkip !== false) && (
                <button
                  onClick={handleSkip}
                  className="px-3 py-2 text-gray-500 hover:text-gray-700 transition-colors"
                >
                  Skip Tour
                </button>
              )}

              <button
                onClick={handleNext}
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                {currentStep < steps.length - 1 ? (
                  <>
                    Next
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Complete
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}; 