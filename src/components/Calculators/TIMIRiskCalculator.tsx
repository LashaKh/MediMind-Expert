import React, { useState } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import { Calculator, Info, Zap, AlertTriangle, Clock, Activity, Heart, User, FileText, AlertCircle, Target, Stethoscope, Pill, Award, TrendingUp, BarChart3, Shield, ArrowRight, ArrowLeft, CheckCircle, HelpCircle } from 'lucide-react';
import { 
  CalculatorContainer, 
  CalculatorInput, 
  CalculatorSelect, 
  CalculatorCheckbox, 
  CalculatorButton, 
  ResultsDisplay 
} from '../ui/calculator-ui';

interface TIMIFormData {
  age: string;
  coronaryRiskFactors: string;
  knownCAD: boolean;
  aspirinUse: boolean;
  severeAngina: boolean;
  stDeviation: boolean;
  elevatedBiomarkers: boolean;
}

interface TIMIResult {
  score: number;
  riskCategory: 'low' | 'intermediate' | 'high';
  adverseOutcomeRisk: number;
  riskDetails: {
    mortality: number;
    miRisk: number;
    urgentRevasc: number;
  };
  urgency: 'routine' | 'moderate' | 'high';
  recommendations: string[];
}

export const TIMIRiskCalculator: React.FC = () => {
  const { t } = useTranslation();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<TIMIFormData>({
    age: '',
    coronaryRiskFactors: '',
    knownCAD: false,
    aspirinUse: false,
    severeAngina: false,
    stDeviation: false,
    elevatedBiomarkers: false
  });
  const [result, setResult] = useState<TIMIResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateStep = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
    const age = parseInt(formData.age);
    if (!formData.age || isNaN(age)) {
        newErrors.age = t('calculators.cardiology.timi.age_error');
    } else if (age < 18 || age > 120) {
        newErrors.age = t('calculators.cardiology.timi.age_error');
      }

      const riskFactors = parseInt(formData.coronaryRiskFactors);
      if (!formData.coronaryRiskFactors || isNaN(riskFactors) || riskFactors < 0 || riskFactors > 5) {
        newErrors.coronaryRiskFactors = t('calculators.cardiology.timi.risk_factors_help');
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateTIMI = (): TIMIResult => {
    let score = 0;

    // Age ≥65 years = 1 point
    if (parseInt(formData.age) >= 65) score += 1;

    // ≥3 CAD risk factors = 1 point
    if (parseInt(formData.coronaryRiskFactors) >= 3) score += 1;

    // Known CAD (stenosis ≥50%) = 1 point
    if (formData.knownCAD) score += 1;

    // Aspirin use in prior 7 days = 1 point
    if (formData.aspirinUse) score += 1;

    // Severe anginal symptoms (≥2 episodes in 24h) = 1 point
    if (formData.severeAngina) score += 1;

    // ST deviation ≥0.5mm = 1 point
    if (formData.stDeviation) score += 1;

    // Elevated cardiac biomarkers = 1 point
    if (formData.elevatedBiomarkers) score += 1;

    // Risk stratification based on TIMI risk score
    let riskCategory: 'low' | 'intermediate' | 'high';
    let adverseOutcomeRisk: number;
    let mortality: number;
    let miRisk: number;
    let urgentRevasc: number;
    let urgency: 'routine' | 'moderate' | 'high';

    if (score <= 2) {
      riskCategory = 'low';
      adverseOutcomeRisk = 8.3;
      mortality = 2.2;
      miRisk = 3.3;
      urgentRevasc = 5.0;
      urgency = 'routine';
    } else if (score <= 4) {
      riskCategory = 'intermediate';
      adverseOutcomeRisk = 16.7;
      mortality = 4.7;
      miRisk = 6.6;
      urgentRevasc = 9.4;
      urgency = 'moderate';
    } else {
      riskCategory = 'high';
      adverseOutcomeRisk = 26.2;
      mortality = 8.8;
      miRisk = 10.9;
      urgentRevasc = 15.0;
      urgency = 'high';
    }

    const recommendations = [
      t(`calculators.cardiology.timi.recommendation_${riskCategory}_${score}`)
    ];

    return {
      score,
      riskCategory,
      adverseOutcomeRisk,
      riskDetails: {
        mortality,
        miRisk,
        urgentRevasc
      },
      urgency,
      recommendations
    };
  };

  const handleCalculate = () => {
    if (validateStep()) {
      const result = calculateTIMI();
      setResult(result);
      setStep(2);
    }
  };

  const handleNextStep = () => {
    if (validateStep()) setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
    setErrors({});
  };

  const resetCalculator = () => {
    setFormData({
      age: '',
      coronaryRiskFactors: '',
      knownCAD: false,
      aspirinUse: false,
      severeAngina: false,
      stDeviation: false,
      elevatedBiomarkers: false
    });
    setErrors({});
    setStep(1);
    setResult(null);
  };

  const getRiskLevel = (category: string): 'low' | 'intermediate' | 'high' => {
    switch (category) {
      case 'high': return 'high';
      case 'intermediate': return 'intermediate';
      default: return 'low';
    }
  };

  const getInterpretation = (category: string, score: number, risk: number) => {
    return t(`calculators.cardiology.timi.interpretation_${category}`, { risk: risk.toFixed(1) });
  };

  const getUrgencyInfo = (urgency: string) => {
    switch (urgency) {
      case 'routine':
        return { icon: Clock, color: 'green', label: t('calculators.cardiology.timi.routine_management') };
      case 'moderate':
        return { icon: AlertTriangle, color: 'orange', label: t('calculators.cardiology.timi.early_intervention') };
      case 'high':
        return { icon: Zap, color: 'red', label: t('calculators.cardiology.timi.urgent_management') };
      default:
        return { icon: Clock, color: 'gray', label: '' };
    }
  };

  if (result) {
  return (
    <CalculatorContainer
        title={t('calculators.cardiology.timi.title')}
        subtitle={t('calculators.cardiology.timi.subtitle')}
      icon={Zap}
      gradient="cardiology"
      className="max-w-6xl mx-auto"
    >
      <div className="space-y-8">
        {/* Emergency Alert */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border-2 border-red-200 dark:border-red-800 rounded-2xl p-6">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-xl">
              <Zap className="w-6 h-6 text-red-600 dark:text-red-400" />
            </div>
            <div className="flex-1">
                <h4 className="text-lg font-bold text-red-800 dark:text-red-200 mb-2">
                  {t('calculators.cardiology.timi.emergency_tool')}
                </h4>
              <p className="text-red-700 dark:text-red-300 leading-relaxed">
                  {t('calculators.cardiology.timi.tool_description')}
              </p>
            </div>
          </div>
        </div>

          {/* Results Display */}
              <ResultsDisplay
            title={t('calculators.cardiology.timi.score_analysis')}
            value={`${result.score}/7 ${t('common.points', { defaultValue: 'points' })}`}
                category={getRiskLevel(result.riskCategory)}
                interpretation={getInterpretation(result.riskCategory, result.score, result.adverseOutcomeRisk)}
                icon={Target}
              >
                {/* Detailed Risk Analysis */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* 14-Day Risk Breakdown */}
                  <div className="p-6 bg-white/50 dark:bg-gray-800/50 rounded-xl border border-white/20 dark:border-gray-700/20">
                    <div className="flex items-center space-x-3 mb-4">
                      <BarChart3 className="w-5 h-5 text-purple-500" />
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                    {t('calculators.cardiology.timi.fourteen_day_breakdown')}
                  </h4>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {t('calculators.cardiology.timi.mortality')}
                    </span>
                    <span className="font-bold text-red-600 dark:text-red-400">
                      {result.riskDetails.mortality}%
                    </span>
                      </div>
                      <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {t('calculators.cardiology.timi.myocardial_infarction')}
                    </span>
                    <span className="font-bold text-orange-600 dark:text-orange-400">
                      {result.riskDetails.miRisk}%
                    </span>
                      </div>
                      <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {t('calculators.cardiology.timi.urgent_revascularization')}
                    </span>
                    <span className="font-bold text-blue-600 dark:text-blue-400">
                      {result.riskDetails.urgentRevasc}%
                    </span>
                      </div>
                    </div>
                  </div>

                  {/* Management Urgency */}
                  <div className="p-6 bg-white/50 dark:bg-gray-800/50 rounded-xl border border-white/20 dark:border-gray-700/20">
                    <div className="flex items-center space-x-3 mb-4">
                      {(() => {
                        const urgencyInfo = getUrgencyInfo(result.urgency);
                    const IconComponent = urgencyInfo.icon;
                        return (
                          <>
                        <IconComponent className={`w-5 h-5 text-${urgencyInfo.color}-500`} />
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                          {t('calculators.cardiology.timi.management_urgency')}
                        </h4>
                          </>
                        );
                      })()}
                    </div>
                    <div className="space-y-3">
                      <div className={`text-lg font-bold ${
                        result.urgency === 'high' ? 'text-red-600 dark:text-red-400' :
                        result.urgency === 'moderate' ? 'text-orange-600 dark:text-orange-400' :
                        'text-green-600 dark:text-green-400'
                      }`}>
                        {getUrgencyInfo(result.urgency).label}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                    {t('calculators.cardiology.timi.recommended_timeframe')} {
                      result.urgency === 'high' ? t('calculators.cardiology.timi.timeframe_under_24') :
                      result.urgency === 'moderate' ? t('calculators.cardiology.timi.timeframe_24_48') :
                      t('calculators.cardiology.timi.timeframe_24_72')
                    }
                      </div>
                    </div>
                  </div>
                </div>

            {/* Score Components */}
            <div className="p-6 bg-white/50 dark:bg-gray-800/50 rounded-xl border border-white/20 dark:border-gray-700/20">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">
                {t('calculators.cardiology.timi.score_components')} ({result.score}/7 {t('common.points', { defaultValue: 'points' })})
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className={`flex items-center space-x-2 ${parseInt(formData.age) >= 65 ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400'}`}>
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm">{t('calculators.cardiology.timi.age_component')}</span>
                </div>
                <div className={`flex items-center space-x-2 ${parseInt(formData.coronaryRiskFactors) >= 3 ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400'}`}>
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm">{t('calculators.cardiology.timi.cad_risk_factors_component')}</span>
                </div>
                <div className={`flex items-center space-x-2 ${formData.knownCAD ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400'}`}>
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm">{t('calculators.cardiology.timi.known_cad_component')}</span>
                </div>
                <div className={`flex items-center space-x-2 ${formData.aspirinUse ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400'}`}>
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm">{t('calculators.cardiology.timi.aspirin_component')}</span>
                </div>
                <div className={`flex items-center space-x-2 ${formData.severeAngina ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400'}`}>
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm">{t('calculators.cardiology.timi.angina_component')}</span>
                  </div>
                <div className={`flex items-center space-x-2 ${formData.stDeviation ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400'}`}>
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm">{t('calculators.cardiology.timi.st_component')}</span>
                  </div>
                <div className={`flex items-center space-x-2 ${formData.elevatedBiomarkers ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400'}`}>
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm">{t('calculators.cardiology.timi.biomarkers_component')}</span>
                </div>
                  </div>
                        </div>

            {/* Clinical Recommendation */}
            <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-2 border-blue-200 dark:border-blue-800 rounded-xl">
              <div className="flex items-center space-x-3 mb-4">
                <Stethoscope className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <h4 className="text-lg font-bold text-blue-800 dark:text-blue-200">
                  {t('calculators.cardiology.timi.clinical_strategy')}
                </h4>
                      </div>
              <div className="space-y-3">
                {result.recommendations.map((rec, index) => (
                  <p key={index} className="text-blue-700 dark:text-blue-300 leading-relaxed">
                    {rec}
                  </p>
                    ))}
                  </div>
                </div>

              {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CalculatorButton
                onClick={resetCalculator}
                  variant="outline"
                className="flex items-center justify-center space-x-2"
                >
                <ArrowLeft className="w-4 h-4" />
                <span>{t('calculators.cardiology.timi.new_assessment')}</span>
                </CalculatorButton>
              
                <CalculatorButton
                onClick={() => setResult(null)}
                className="flex items-center justify-center space-x-2"
                >
                <Calculator className="w-4 h-4" />
                <span>{t('calculators.cardiology.timi.modify_inputs')}</span>
                </CalculatorButton>
            </div>

            {/* Footer */}
            <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl text-center">
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                <Award className="w-4 h-4" />
                <span>{t('calculators.cardiology.timi.based_on_timi')}</span>
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                {t('calculators.cardiology.timi.clinically_validated')}
              </div>
            </div>
          </ResultsDisplay>
        </div>
      </CalculatorContainer>
    );
  }

  return (
    <CalculatorContainer
      title={t('calculators.cardiology.timi.title')}
      subtitle={t('calculators.cardiology.timi.subtitle')}
      icon={Zap}
      gradient="cardiology"
      className="max-w-4xl mx-auto"
    >
      <div className="space-y-8">
        {/* Emergency Alert */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border-2 border-red-200 dark:border-red-800 rounded-2xl p-6">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-xl">
              <Zap className="w-6 h-6 text-red-600 dark:text-red-400" />
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-bold text-red-800 dark:text-red-200 mb-2">
                {t('calculators.cardiology.timi.emergency_tool')}
              </h4>
              <p className="text-red-700 dark:text-red-300 leading-relaxed">
                {t('calculators.cardiology.timi.tool_description')}
              </p>
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center">
          <div className="flex items-center space-x-4">
            <div className={`flex items-center ${step >= 1 ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-400'
              }`}>
                1
              </div>
              <span className="ml-2 font-medium">{t('calculators.cardiology.timi.patient_info')}</span>
            </div>
            <div className="w-8 h-px bg-gray-300 dark:bg-gray-600"></div>
            <div className={`flex items-center ${step >= 2 ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-400'
              }`}>
                2
              </div>
              <span className="ml-2 font-medium">{t('calculators.cardiology.timi.clinical_factors')}</span>
            </div>
          </div>
        </div>

        {/* Step 1: Demographics & Risk Factors */}
        {step === 1 && (
          <div className="space-y-6">
            <div className="p-6 bg-white/50 dark:bg-gray-800/50 rounded-xl border border-white/20 dark:border-gray-700/20">
              <div className="flex items-center space-x-3 mb-6">
                <User className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  {t('calculators.cardiology.timi.demographics_section')}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <CalculatorInput
                  label={t('calculators.cardiology.timi.age_label')}
                  type="number"
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: (e.target as HTMLInputElement).value })}
                  placeholder="65"
                  min={18}
                  max={120}
                  error={errors.age}
                />
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {t('calculators.cardiology.timi.age_help')}
                </p>

                <CalculatorSelect
                  label={t('calculators.cardiology.timi.coronary_risk_factors')}
                  value={formData.coronaryRiskFactors}
                  onChange={(e) => setFormData({ ...formData, coronaryRiskFactors: (e.target as HTMLSelectElement).value })}
                  options={[
                    { value: '', label: t('common.selectOption', { defaultValue: 'Select option' }) },
                    { value: '0', label: '0' },
                    { value: '1', label: '1' },
                    { value: '2', label: '2' },
                    { value: '3', label: '3+' }
                  ]}
                  error={errors.coronaryRiskFactors}
                />
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {t('calculators.cardiology.timi.risk_factors_help')}
                </p>
              </div>

              <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <div className="flex items-start space-x-2">
                  <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    {t('calculators.cardiology.timi.risk_factors_detail')}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <CalculatorButton
                onClick={handleNextStep}
                className="flex items-center space-x-2"
              >
                <span>{t('calculators.cardiology.timi.next_clinical_factors')}</span>
                <ArrowRight className="w-4 h-4" />
              </CalculatorButton>
            </div>
          </div>
        )}

        {/* Step 2: Clinical Assessment */}
        {step === 2 && (
          <div className="space-y-6">
            <div className="p-6 bg-white/50 dark:bg-gray-800/50 rounded-xl border border-white/20 dark:border-gray-700/20">
              <div className="flex items-center space-x-3 mb-6">
                <Activity className="w-6 h-6 text-red-600 dark:text-red-400" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  {t('calculators.cardiology.timi.clinical_assessment')}
                </h3>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {t('calculators.cardiology.timi.clinical_assessment_description')}
              </p>

              <div className="space-y-6">
                <CalculatorCheckbox
                  label={t('calculators.cardiology.timi.known_cad')}
                  checked={formData.knownCAD}
                  onChange={(e) => setFormData({ ...formData, knownCAD: (e.target as HTMLInputElement).checked })}
                  description={t('calculators.cardiology.timi.known_cad_desc')}
                />

                <CalculatorCheckbox
                  label={t('calculators.cardiology.timi.aspirin_use')}
                  checked={formData.aspirinUse}
                  onChange={(e) => setFormData({ ...formData, aspirinUse: (e.target as HTMLInputElement).checked })}
                  description={t('calculators.cardiology.timi.aspirin_use_desc')}
                />

                <CalculatorCheckbox
                  label={t('calculators.cardiology.timi.severe_angina')}
                  checked={formData.severeAngina}
                  onChange={(e) => setFormData({ ...formData, severeAngina: (e.target as HTMLInputElement).checked })}
                  description={t('calculators.cardiology.timi.severe_angina_desc')}
                />

                <CalculatorCheckbox
                  label={t('calculators.cardiology.timi.st_deviation')}
                  checked={formData.stDeviation}
                  onChange={(e) => setFormData({ ...formData, stDeviation: (e.target as HTMLInputElement).checked })}
                  description={t('calculators.cardiology.timi.st_deviation_desc')}
                />

                <CalculatorCheckbox
                  label={t('calculators.cardiology.timi.elevated_biomarkers')}
                  checked={formData.elevatedBiomarkers}
                  onChange={(e) => setFormData({ ...formData, elevatedBiomarkers: (e.target as HTMLInputElement).checked })}
                  description={t('calculators.cardiology.timi.elevated_biomarkers_desc')}
                />
              </div>
            </div>

            <div className="flex justify-between">
              <CalculatorButton
                onClick={handlePrevStep}
                variant="outline"
                className="flex items-center space-x-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>{t('common.previous')}</span>
              </CalculatorButton>
              
              <CalculatorButton
                onClick={handleCalculate}
                className="flex items-center space-x-2"
              >
                <Calculator className="w-4 h-4" />
                <span>{t('calculators.cardiology.timi.calculate_button')}</span>
              </CalculatorButton>
            </div>
          </div>
        )}
      </div>
    </CalculatorContainer>
  );
}; 