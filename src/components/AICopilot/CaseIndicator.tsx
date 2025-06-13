import React from 'react';
import { FileText, X, Eye } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { PatientCase } from '../../types/chat';
import { useTranslation } from '../../hooks/useTranslation';

interface CaseIndicatorProps {
  activeCase: PatientCase | null;
  onViewCase?: () => void;
  onResetCase?: () => void;
  className?: string;
}

export const CaseIndicator: React.FC<CaseIndicatorProps> = ({
  activeCase,
  onViewCase,
  onResetCase,
  className = ''
}) => {
  const { t } = useTranslation();

  if (!activeCase) return null;

  const getComplexityColor = (complexity: 'low' | 'medium' | 'high') => {
    switch (complexity) {
      case 'low':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'high':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className={`bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4 ${className}`}>
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-3 flex-1">
          <FileText className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2 mb-1">
              <h4 className="text-sm font-medium text-blue-900 truncate">
                {activeCase.title}
              </h4>
              {activeCase.metadata?.complexity && (
                <Badge 
                  variant="outline" 
                  className={`text-xs ${getComplexityColor(activeCase.metadata.complexity)}`}
                >
                  {activeCase.metadata.complexity}
                </Badge>
              )}
            </div>
            <p className="text-xs text-blue-700 line-clamp-2">
              {activeCase.description}
            </p>
            {activeCase.metadata?.tags && activeCase.metadata.tags.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-2">
                {activeCase.metadata.tags.slice(0, 3).map((tag, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="text-xs bg-blue-100 text-blue-700 border-blue-300"
                  >
                    {tag}
                  </Badge>
                ))}
                {activeCase.metadata.tags.length > 3 && (
                  <Badge 
                    variant="outline" 
                    className="text-xs bg-blue-100 text-blue-700 border-blue-300"
                  >
                    +{activeCase.metadata.tags.length - 3}
                  </Badge>
                )}
              </div>
            )}
          </div>
        </div>
        
        <div className="flex items-center space-x-1 ml-2">
          {onViewCase && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onViewCase}
              className="p-1 h-6 w-6 text-blue-600 hover:text-blue-800 hover:bg-blue-100"
              title="View case details"
            >
              <Eye className="w-3 h-3" />
            </Button>
          )}
          {onResetCase && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onResetCase}
              className="p-1 h-6 w-6 text-blue-600 hover:text-blue-800 hover:bg-blue-100"
              title="Exit case discussion"
            >
              <X className="w-3 h-3" />
            </Button>
          )}
        </div>
      </div>
      
      <div className="mt-2 text-xs text-blue-600">
        <span className="font-medium">{t('case.activeCase')}</span> • 
        <span className="ml-1">
          Created {activeCase.createdAt.toLocaleDateString()}
        </span>
      </div>
    </div>
  );
}; 