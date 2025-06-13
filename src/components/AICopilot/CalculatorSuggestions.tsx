import React from 'react';
import { Calculator, ChevronRight, Lightbulb, X } from 'lucide-react';
import { Button } from '../ui/button';
import { CalculatorRecommendation } from '../../services/calculatorRecommendation';

interface CalculatorSuggestionsProps {
  recommendations: CalculatorRecommendation[];
  matchedKeywords: string[];
  confidence: number;
  onCalculatorSelect: (calculatorId: string) => void;
  onDismiss: () => void;
  className?: string;
}

export const CalculatorSuggestions: React.FC<CalculatorSuggestionsProps> = ({
  recommendations,
  matchedKeywords,
  confidence,
  onCalculatorSelect,
  onDismiss,
  className = ''
}) => {
  if (recommendations.length === 0 || confidence < 0.3) {
    return null;
  }

  const getIconComponent = (iconName: string) => {
    // Simple icon mapping - in a real app you might use dynamic imports
    const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
      Heart: ({ className }) => <div className={`w-4 h-4 ${className}`}>❤️</div>,
      Activity: ({ className }) => <div className={`w-4 h-4 ${className}`}>📊</div>,
      Zap: ({ className }) => <div className={`w-4 h-4 ${className}`}>⚡</div>,
      HeartHandshake: ({ className }) => <div className={`w-4 h-4 ${className}`}>🤝</div>,
      Wrench: ({ className }) => <div className={`w-4 h-4 ${className}`}>🔧</div>,
      Dna: ({ className }) => <div className={`w-4 h-4 ${className}`}>🧬</div>
    };
    
    return iconMap[iconName] || Calculator;
  };

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 0.7) return 'text-green-600';
    if (confidence >= 0.5) return 'text-yellow-600';
    return 'text-blue-600';
  };

  const getConfidenceText = (confidence: number) => {
    if (confidence >= 0.7) return 'High';
    if (confidence >= 0.5) return 'Medium';
    return 'Low';
  };

  return (
    <div className={`bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-4 ${className}`}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-2">
          <Lightbulb className="w-5 h-5 text-blue-600" />
          <div>
            <h4 className="text-sm font-semibold text-blue-800 dark:text-blue-200">
              Relevant Calculators Detected
            </h4>
            <p className="text-xs text-blue-600 dark:text-blue-300">
              Based on your conversation • {getConfidenceText(confidence)} confidence
            </p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={onDismiss}
          className="h-6 w-6 p-0 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-800"
        >
          <X className="w-4 h-4" />
        </Button>
      </div>

      {/* Matched Keywords */}
      {matchedKeywords.length > 0 && (
        <div className="mb-3">
          <p className="text-xs text-blue-600 dark:text-blue-400 mb-1">Detected topics:</p>
          <div className="flex flex-wrap gap-1">
            {matchedKeywords.slice(0, 5).map((keyword, index) => (
              <span
                key={index}
                className="inline-block bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-300 text-xs px-2 py-0.5 rounded-full"
              >
                {keyword}
              </span>
            ))}
            {matchedKeywords.length > 5 && (
              <span className="text-xs text-blue-500">+{matchedKeywords.length - 5} more</span>
            )}
          </div>
        </div>
      )}

      {/* Calculator Recommendations */}
      <div className="space-y-2">
        {recommendations.map((calc) => {
          const IconComponent = getIconComponent(calc.icon);
          return (
            <button
              key={calc.id}
              onClick={() => onCalculatorSelect(calc.id)}
              className="w-full flex items-center justify-between p-3 bg-white dark:bg-gray-800 border border-blue-200 dark:border-blue-700 rounded-lg hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-sm transition-all group text-left"
            >
              <div className="flex items-start space-x-3 flex-1">
                <div className="flex-shrink-0 mt-0.5">
                  <IconComponent className="text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h5 className="text-sm font-medium text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {calc.name}
                  </h5>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">
                    {calc.description}
                  </p>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                      {calc.category}
                    </span>
                    <span className={`text-xs font-medium ${getConfidenceColor(calc.relevanceScore)}`}>
                      {Math.round(calc.relevanceScore * 100)}% match
                    </span>
                  </div>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 flex-shrink-0" />
            </button>
          );
        })}
      </div>

      {/* Action Buttons */}
      <div className="mt-3 pt-3 border-t border-blue-200 dark:border-blue-700">
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onCalculatorSelect('all')}
            className="text-blue-600 border-blue-300 hover:bg-blue-50"
          >
            <Calculator className="w-3 h-3 mr-1" />
            View All Calculators
          </Button>
          <p className="text-xs text-blue-500 dark:text-blue-400">
            AI-powered suggestions
          </p>
        </div>
      </div>
    </div>
  );
}; 