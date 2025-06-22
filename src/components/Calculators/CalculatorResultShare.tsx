import React, { useState } from 'react';
import { Share2, MessageCircle, FileText, CheckCircle, AlertTriangle } from 'lucide-react';
import { Button } from '../ui/button';
import { useCalculatorIntegration, CalculatorResult } from '../../hooks/useCalculatorIntegration';
import { useTranslation } from '../../hooks/useTranslation';

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
  const { t } = useTranslation();
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
              {t('calculators.common.calculator_results_summary')}
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
                <span>{t('calculators.common.shared')}</span>
              </>
            ) : isSharing ? (
              <>
                <div className="w-4 h-4 animate-spin rounded-full border-2 border-blue-600 border-t-transparent" />
                <span>{t('calculators.common.sharing')}</span>
              </>
            ) : (
              <>
                <MessageCircle className="w-4 h-4" />
                <span>{t('calculators.common.share_with_ai')}</span>
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
            {t('calculators.common.key_results')}
          </h5>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {Object.entries(results).map(([key, value]) => {
              // Create a mapping for proper translation of field names
              const getTranslatedFieldName = (fieldKey: string): string => {
                const fieldTranslations: Record<string, string> = {
                  // GDM Calculator specific fields
                  screeningTiming: t('calculators.gdm_screening.screening_timing'),
                  riskLevel: t('calculators.gdm_screening.risk_level'),
                  testingProtocol: t('calculators.gdm_screening.testing_protocol'),
                  
                  // VBAC Calculator specific fields
                  successProbability: t('calculators.vbac_success.success_probability'),
                  
                  // Endometrial Cancer Risk Calculator specific fields
                  annualRisk: t('calculators.common.annual_risk'),
                  protectiveFactors: t('calculators.common.protective_factors'),
                  
                  // Common calculator fields
                  ascvdRisk: t('calculators.common.ascvd_risk'),
                  tenYearRisk: t('calculators.common.ten_year_risk'),
                  lifetimeRisk: t('calculators.common.lifetime_risk'),
                  'Lifetime Risk': t('calculators.common.lifetime_risk'),
                  riskMultiplier: t('calculators.common.risk_multiplier'),
                  'Risk Multiplier': t('calculators.common.risk_multiplier'),
                  screeningRecommendation: t('calculators.common.screening_recommendation'),
                  'Screening Recommendation': t('calculators.common.screening_recommendation'),
                  prophylacticSurgeryDiscussion: t('calculators.common.prophylactic_surgery_discussion'),
                  'Prophylactic Surgery Discussion': t('calculators.common.prophylactic_surgery_discussion'),
                  riskCategory: t('calculators.common.risk_category'),
                  recommendations: t('calculators.common.recommendations'),
                  
                  // Fallback to automatic conversion with proper capitalization
                  default: fieldKey.replace(/([A-Z])/g, ' $1').trim()
                };
                
                return fieldTranslations[fieldKey] || fieldTranslations.default;
              };
              
              return (
                <div key={key} className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">
                    {getTranslatedFieldName(key)}
                  </span>
                  <span className="font-medium text-gray-900 dark:text-gray-100">
                    {typeof value === 'number' ? value.toFixed(1) : value}
                    {key.includes('percentage') || key.includes('risk') || key.includes('Rate') ? '%' : ''}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Clinical Interpretation */}
        <div>
          <h5 className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">
            {t('calculators.common.clinical_interpretation_label')}
          </h5>
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            {interpretation}
          </p>
        </div>

        {/* Recommendations */}
        {recommendations.length > 0 && (
          <div>
            <h5 className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">
              {t('calculators.common.recommendations_label')}
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
                  +{recommendations.length - 3} {t('calculators.common.more_recommendations')}
                </li>
              )}
            </ul>
          </div>
        )}

        {/* Share Information */}
        <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
          <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
            <Share2 className="w-3 h-3 mr-1" />
            {t('calculators.common.share_results_description')}
          </p>
        </div>
      </div>
    </div>
  );
}; 