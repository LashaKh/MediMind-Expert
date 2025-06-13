import React, { useState } from 'react';
import { Share2, MessageCircle, FileText, CheckCircle, AlertTriangle } from 'lucide-react';
import { Button } from '../ui/button';
import { useCalculatorIntegration, CalculatorResult } from '../../hooks/useCalculatorIntegration';

interface CalculatorResultShareProps {
  calculatorName: string;
  calculatorId: string;
  results: Record<string, any>;
  interpretation: string;
  recommendations: string[];
  riskLevel?: 'low' | 'intermediate' | 'high';
  className?: string;
}

export const CalculatorResultShare: React.FC<CalculatorResultShareProps> = ({
  calculatorName,
  calculatorId,
  results,
  interpretation,
  recommendations,
  riskLevel = 'intermediate',
  className = ''
}) => {
  const [isSharing, setIsSharing] = useState(false);
  const [isShared, setIsShared] = useState(false);
  const { shareCalculatorResults } = useCalculatorIntegration();

  const handleShareWithAI = async () => {
    setIsSharing(true);
    
    try {
      const resultData: CalculatorResult = {
        calculatorId,
        calculatorName,
        inputs: {}, // Would be populated with actual calculator inputs
        results,
        interpretation,
        recommendations,
        timestamp: new Date()
      };

      await shareCalculatorResults(resultData);
      setIsShared(true);
      
      // Reset shared status after a few seconds
      setTimeout(() => {
        setIsShared(false);
      }, 3000);
    } catch (error) {
      console.error('Error sharing calculator results:', error);
    } finally {
      setIsSharing(false);
    }
  };

  const getRiskIcon = () => {
    switch (riskLevel) {
      case 'low':
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'high':
        return <AlertTriangle className="w-4 h-4 text-red-600" />;
      default:
        return <AlertTriangle className="w-4 h-4 text-yellow-600" />;
    }
  };

  const getRiskColor = () => {
    switch (riskLevel) {
      case 'low':
        return 'border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20';
      case 'high':
        return 'border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20';
      default:
        return 'border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-900/20';
    }
  };

  return (
    <div className={`border rounded-lg p-4 mt-6 ${getRiskColor()} ${className}`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-2">
          {getRiskIcon()}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
              Calculator Results Summary
            </h4>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              {calculatorName} • {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleShareWithAI}
            disabled={isSharing || isShared}
            className="flex items-center space-x-2"
          >
            {isShared ? (
              <>
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Shared</span>
              </>
            ) : isSharing ? (
              <>
                <div className="w-4 h-4 animate-spin rounded-full border-2 border-blue-600 border-t-transparent" />
                <span>Sharing...</span>
              </>
            ) : (
              <>
                <MessageCircle className="w-4 h-4" />
                <span>Share with AI</span>
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Results Summary */}
      <div className="space-y-3">
        {/* Key Results */}
        <div>
          <h5 className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">
            Key Results:
          </h5>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {Object.entries(results).map(([key, value]) => (
              <div key={key} className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400 capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}:
                </span>
                <span className="font-medium text-gray-900 dark:text-gray-100">
                  {typeof value === 'number' ? value.toFixed(1) : value}
                  {key.includes('percentage') || key.includes('risk') || key.includes('Rate') ? '%' : ''}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Clinical Interpretation */}
        <div>
          <h5 className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">
            Clinical Interpretation:
          </h5>
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            {interpretation}
          </p>
        </div>

        {/* Recommendations */}
        {recommendations.length > 0 && (
          <div>
            <h5 className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">
              Recommendations:
            </h5>
            <ul className="space-y-1">
              {recommendations.slice(0, 3).map((rec, index) => (
                <li key={index} className="text-sm text-gray-700 dark:text-gray-300 flex items-start">
                  <span className="mr-2">•</span>
                  <span>{rec}</span>
                </li>
              ))}
              {recommendations.length > 3 && (
                <li className="text-xs text-gray-500 italic">
                  +{recommendations.length - 3} more recommendations
                </li>
              )}
            </ul>
          </div>
        )}

        {/* Share Information */}
        <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
          <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
            <Share2 className="w-3 h-3 mr-1" />
            Share these results with your AI Co-Pilot for detailed analysis and next steps
          </p>
        </div>
      </div>
    </div>
  );
}; 