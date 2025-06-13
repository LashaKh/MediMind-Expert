import React from 'react';
import { BookOpen, User, Info } from 'lucide-react';
import { Button } from '../ui/button';
import { useTranslation } from '../../hooks/useTranslation';

export type KnowledgeBaseType = 'curated' | 'personal';

interface KnowledgeBaseSelectorProps {
  selectedKnowledgeBase: KnowledgeBaseType;
  onKnowledgeBaseChange: (type: KnowledgeBaseType) => void;
  personalDocumentCount?: number;
  disabled?: boolean;
  className?: string;
}

export const KnowledgeBaseSelector: React.FC<KnowledgeBaseSelectorProps> = ({
  selectedKnowledgeBase,
  onKnowledgeBaseChange,
  personalDocumentCount = 0,
  disabled = false,
  className = ''
}) => {
  const { t } = useTranslation();

  return (
    <div className={`flex items-center space-x-1 ${className}`}>
      {/* Curated Knowledge Base Button */}
      <div className="relative group">
        <Button
          variant={selectedKnowledgeBase === 'curated' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => onKnowledgeBaseChange('curated')}
          disabled={disabled}
          className={`
            flex items-center gap-2 px-3 py-2 transition-all duration-200
            ${selectedKnowledgeBase === 'curated' 
              ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md' 
              : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
            }
          `}
          title="Curated Knowledge Base"
        >
          <BookOpen className="w-4 h-4" />
          <span className="hidden sm:inline font-medium">{t('knowledgeBase.curated')}</span>
        </Button>
        
        {/* Tooltip for Curated KB */}
        <div className="
          absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 
          opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none
          bg-gray-900 dark:bg-gray-700 text-white text-xs px-3 py-2 rounded-md whitespace-nowrap
          z-10 shadow-lg
        ">
          <div className="flex items-center gap-2">
            <Info className="w-3 h-3" />
            <span>Medical guidelines & research</span>
          </div>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 dark:border-t-gray-700"></div>
        </div>
      </div>

      {/* Separator */}
      <div className="w-px h-6 bg-gray-300 dark:bg-gray-600"></div>

      {/* Personal Knowledge Base Button */}
      <div className="relative group">
        <Button
          variant={selectedKnowledgeBase === 'personal' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => onKnowledgeBaseChange('personal')}
          disabled={disabled || personalDocumentCount === 0}
          className={`
            flex items-center gap-2 px-3 py-2 transition-all duration-200
            ${selectedKnowledgeBase === 'personal' 
              ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-md' 
              : personalDocumentCount === 0
                ? 'opacity-50 cursor-not-allowed text-gray-400'
                : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
            }
          `}
          title="Personal Knowledge Base"
        >
          <User className="w-4 h-4" />
          <span className="hidden sm:inline font-medium">{t('knowledgeBase.personal')}</span>
          {personalDocumentCount > 0 && (
            <span className="
              bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 
              text-xs px-1.5 py-0.5 rounded-full min-w-[20px] text-center
              group-hover:bg-white group-hover:text-emerald-600
              transition-colors duration-200
            ">
              {personalDocumentCount > 99 ? '99+' : personalDocumentCount}
            </span>
          )}
        </Button>
        
        {/* Tooltip for Personal KB */}
        <div className="
          absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 
          opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none
          bg-gray-900 dark:bg-gray-700 text-white text-xs px-3 py-2 rounded-md whitespace-nowrap
          z-10 shadow-lg
        ">
          <div className="flex items-center gap-2">
            <Info className="w-3 h-3" />
            <span>
              {personalDocumentCount === 0 
                ? 'Upload documents to enable' 
                : `${personalDocumentCount} personal document${personalDocumentCount === 1 ? '' : 's'}`
              }
            </span>
          </div>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 dark:border-t-gray-700"></div>
        </div>
      </div>

      {/* Active Knowledge Base Indicator */}
      <div className="ml-2 flex items-center">
        <div className={`
          w-2 h-2 rounded-full transition-colors duration-200
          ${selectedKnowledgeBase === 'curated' ? 'bg-blue-500' : 'bg-emerald-500'}
        `}></div>
        <span className="ml-1 text-xs text-gray-500 dark:text-gray-400 hidden lg:inline">
          {selectedKnowledgeBase === 'curated' ? 'Curated' : 'Personal'} KB
        </span>
      </div>
    </div>
  );
}; 