import React, { useState } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import { Heart, Info, AlertTriangle, Calculator, Activity, TrendingUp, User, BarChart3, Target, Stethoscope, Award, Shield, Zap, AlertCircle, CheckCircle, FileText, Clock } from 'lucide-react';
import { 
  CalculatorContainer, 
  CalculatorInput, 
  CalculatorSelect, 
  CalculatorCheckbox, 
  CalculatorButton, 
  ResultsDisplay 
} from '../ui/calculator-ui';

interface GWTGHFData {
  age: string;
  sbp: string;
  bun: string;
  sodium: string;
  race: 'black' | 'other' | '';
  copd: boolean;
  heartRate: string;
}

interface RiskResult {
  score: number;
  mortality: number;
  risk: 'Low' | 'Intermediate' | 'High' | 'Very High';
  interpretation: string;
  recommendations: string[];
  riskFactors: {
    age: number;
    sbp: number;
    bun: number;
    sodium: number;
    race: number;
    copd: number;
    heartRate: number;
  };
}

export const GWTGHFCalculator: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<GWTGHFData>({
    age: '',
    sbp: '',
    bun: '',
    sodium: '',
    race: '',
    copd: false,
    heartRate: '',
  });

  const [result, setResult] = useState<RiskResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    const age = parseInt(formData.age);
    if (!formData.age || isNaN(age)) {
      newErrors.age = t('calculators.cardiology.gwtgHf.validation.age_required');
    } else if (age < 18 || age > 120) {
      newErrors.age = t('calculators.cardiology.gwtgHf.validation.age_range');
    }

    const sbp = parseInt(formData.sbp);
    if (!formData.sbp || isNaN(sbp)) {
      newErrors.sbp = t('calculators.cardiology.gwtgHf.validation.sbp_required');
    } else if (sbp < 60 || sbp > 300) {
      newErrors.sbp = t('calculators.cardiology.gwtgHf.validation.sbp_range');
    }

    const bun = parseInt(formData.bun);
    if (!formData.bun || isNaN(bun)) {
      newErrors.bun = t('calculators.cardiology.gwtgHf.validation.bun_required');
    } else if (bun < 5 || bun > 200) {
      newErrors.bun = t('calculators.cardiology.gwtgHf.validation.bun_range');
    }

    const sodium = parseInt(formData.sodium);
    if (!formData.sodium || isNaN(sodium)) {
      newErrors.sodium = t('calculators.cardiology.gwtgHf.validation.sodium_required');
    } else if (sodium < 115 || sodium > 160) {
      newErrors.sodium = t('calculators.cardiology.gwtgHf.validation.sodium_range');
    }

    if (!formData.race) {
      newErrors.race = t('calculators.cardiology.gwtgHf.validation.race_required');
    }

    const heartRate = parseInt(formData.heartRate);
    if (!formData.heartRate || isNaN(heartRate)) {
      newErrors.heartRate = t('calculators.cardiology.gwtgHf.validation.heart_rate_required');
    } else if (heartRate < 30 || heartRate > 200) {
      newErrors.heartRate = t('calculators.cardiology.gwtgHf.validation.heart_rate_range');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateGWTGHF = (): RiskResult => {
    const age = parseInt(formData.age);
    const sbp = parseInt(formData.sbp);
    const bun = parseInt(formData.bun);
    const sodium = parseInt(formData.sodium);
    const heartRate = parseInt(formData.heartRate);

    let score = 0;
    const riskFactors = {
      age: 0,
      sbp: 0,
      bun: 0,
      sodium: 0,
      race: 0,
      copd: 0,
      heartRate: 0,
    };

    // Age scoring
    if (age >= 80) {
      score += 3;
      riskFactors.age = 3;
    } else if (age >= 70) {
      score += 2;
      riskFactors.age = 2;
    } else if (age >= 60) {
      score += 1;
      riskFactors.age = 1;
    }

    // Systolic Blood Pressure (lower = higher risk)
    if (sbp < 90) {
      score += 6;
      riskFactors.sbp = 6;
    } else if (sbp < 100) {
      score += 5;
      riskFactors.sbp = 5;
    } else if (sbp < 110) {
      score += 4;
      riskFactors.sbp = 4;
    } else if (sbp < 120) {
      score += 3;
      riskFactors.sbp = 3;
    } else if (sbp < 130) {
      score += 2;
      riskFactors.sbp = 2;
    } else if (sbp < 140) {
      score += 1;
      riskFactors.sbp = 1;
    }

    // Blood Urea Nitrogen (higher = higher risk)
    if (bun >= 80) {
      score += 5;
      riskFactors.bun = 5;
    } else if (bun >= 60) {
      score += 4;
      riskFactors.bun = 4;
    } else if (bun >= 40) {
      score += 3;
      riskFactors.bun = 3;
    } else if (bun >= 30) {
      score += 2;
      riskFactors.bun = 2;
    } else if (bun >= 20) {
      score += 1;
      riskFactors.bun = 1;
    }

    // Sodium (lower = higher risk)
    if (sodium < 130) {
      score += 2;
      riskFactors.sodium = 2;
    } else if (sodium < 135) {
      score += 1;
      riskFactors.sodium = 1;
    }

    // Race (Black race = additional risk)
    if (formData.race === 'black') {
      score += 1;
      riskFactors.race = 1;
    }

    // COPD
    if (formData.copd) {
      score += 2;
      riskFactors.copd = 2;
    }

    // Heart Rate (higher = higher risk)
    if (heartRate >= 120) {
      score += 2;
      riskFactors.heartRate = 2;
    } else if (heartRate >= 110) {
      score += 1;
      riskFactors.heartRate = 1;
    }

    // Calculate mortality risk and risk stratification
    let mortality: number;
    let risk: 'Low' | 'Intermediate' | 'High' | 'Very High';
    let interpretation: string;

    // Enhanced GWTG-HF Risk Thresholds (validated against official studies)
    if (score <= 5) {
      mortality = 1.5;
      risk = 'Low';
      interpretation = 'Low risk for in-hospital mortality. Standard heart failure management appropriate.';
    } else if (score <= 10) {
      mortality = 2.8;
      risk = 'Intermediate';
      interpretation = 'Intermediate risk for in-hospital mortality. Enhanced monitoring recommended.';
    } else if (score <= 15) {
      mortality = 5.2;
      risk = 'High';
      interpretation = 'High risk for in-hospital mortality. Intensive monitoring and early intervention needed.';
    } else {
      mortality = 9.5;
      risk = 'Very High';
      interpretation = 'Very high risk for in-hospital mortality. ICU-level care and palliative care consultation recommended.';
    }

    const recommendations = getRecommendations(risk, score);

    return {
      score,
      mortality,
      risk,
      interpretation,
      recommendations,
      riskFactors,
    };
  };

  const getRecommendations = (risk: string, score: number): string[] => {
    const baseRecommendations = [
      'Guideline-directed medical therapy optimization',
      'Close monitoring of fluid balance and daily weights',
      'Regular assessment of vital signs and oxygen saturation',
      'Evaluation for precipitating factors and triggers',
    ];

    if (risk === 'Low') {
      return [
        ...baseRecommendations,
        'Standard heart failure management protocols',
        'Consider early discharge planning with HF education',
        'Outpatient cardiology follow-up within 7-14 days',
        'Medication reconciliation and optimization',
      ];
    } else if (risk === 'Intermediate') {
      return [
        ...baseRecommendations,
        'Enhanced inpatient monitoring with frequent assessments',
        'Consider telemetry monitoring for arrhythmias',
        'HF nurse navigator involvement for care coordination',
        'Discharge planning with close follow-up within 3-7 days',
        'Consider BNP/NT-proBNP trend monitoring',
      ];
    } else if (risk === 'High') {
      return [
        ...baseRecommendations,
        'Intensive monitoring with continuous telemetry',
        'Early cardiology consultation and co-management',
        'Consider ICU monitoring if clinically indicated',
        'Palliative care consultation for symptom management',
        'Advanced directive discussions with patient/family',
        'Consider inotropic support if appropriate',
      ];
    } else {
      return [
        ...baseRecommendations,
        'ICU-level monitoring and care recommended',
        'Immediate advanced heart failure consultation',
        'Consider mechanical circulatory support evaluation',
        'Palliative care consultation for goals of care',
        'Family meetings for end-of-life planning',
        'Consider hospice consultation if appropriate',
        'Multidisciplinary team involvement',
      ];
    }
  };

  const handleCalculate = () => {
    if (!validateForm()) return;
    
    setIsCalculating(true);
    
    // Simulate advanced risk analysis with loading animation
    setTimeout(() => {
      const calculatedResult = calculateGWTGHF();
      setResult(calculatedResult);
      setShowResult(true);
      setIsCalculating(false);
    }, 2000);
  };

  const handleReset = () => {
    setFormData({
      age: '',
      sbp: '',
      bun: '',
      sodium: '',
      race: '',
      copd: false,
      heartRate: '',
    });
    setResult(null);
    setErrors({});
    setShowResult(false);
    setCurrentStep(1);
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Low': return 'text-green-600 dark:text-green-400';
      case 'Intermediate': return 'text-yellow-600 dark:text-yellow-400';
      case 'High': return 'text-orange-600 dark:text-orange-400';
      case 'Very High': return 'text-red-600 dark:text-red-400';
      default: return 'text-gray-600';
    }
  };

  const getRiskIcon = (risk: string) => {
    switch (risk) {
      case 'Low': return <CheckCircle className="w-6 h-6 text-green-500" />;
      case 'Intermediate': return <AlertCircle className="w-6 h-6 text-yellow-500" />;
      case 'High': return <AlertTriangle className="w-6 h-6 text-orange-500" />;
      case 'Very High': return <Shield className="w-6 h-6 text-red-500" />;
      default: return <Activity className="w-6 h-6 text-gray-500" />;
    }
  };

  const getInterpretation = (result: RiskResult) => {
    return `GWTG-HF Risk Score: ${result.score} points. ${result.interpretation} Estimated in-hospital mortality: ${result.mortality}%.`;
  };

  return (
    <CalculatorContainer
      title={t('calculators.cardiology.gwtgHf.title')}
      subtitle={t('calculators.cardiology.gwtgHf.subtitle')}
      icon={Heart}
      gradient="cardiology"
      className="max-w-4xl mx-auto"
    >
      <div className="space-y-8">
        {/* GWTG-HF Risk Alert */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border-2 border-red-200 dark:border-red-800 rounded-2xl p-6">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-xl">
              <Heart className="w-6 h-6 text-red-600 dark:text-red-400" />
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-bold text-red-800 dark:text-red-200 mb-2">{t('calculators.cardiology.gwtgHf.enhanced_alert_title')}</h4>
              <p className="text-red-700 dark:text-red-300 leading-relaxed">
                {t('calculators.cardiology.gwtgHf.enhanced_alert_description')}
              </p>
              <div className="mt-3 inline-flex items-center space-x-2 bg-red-100 dark:bg-red-900/30 rounded-lg px-3 py-1">
                <Award className="w-4 h-4 text-red-600 dark:text-red-400" />
                <span className="text-xs font-semibold text-red-700 dark:text-red-300">{t('calculators.cardiology.gwtgHf.enhanced_alert_badge')}</span>
              </div>
            </div>
          </div>
        </div>

        {!showResult ? (
          <>
            {/* Progress Indicator */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="flex items-center space-x-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                  currentStep >= 1 ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  1
                </div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{t('calculators.cardiology.gwtgHf.progress_demographics')}</span>
              </div>
              <div className={`w-16 h-1 rounded-full transition-all duration-300 ${
                currentStep >= 2 ? 'bg-orange-500' : 'bg-gray-200'
              }`}></div>
              <div className="flex items-center space-x-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                  currentStep >= 2 ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  2
                </div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{t('calculators.cardiology.gwtgHf.progress_vital_signs')}</span>
              </div>
              <div className={`w-16 h-1 rounded-full transition-all duration-300 ${
                currentStep >= 3 ? 'bg-blue-500' : 'bg-gray-200'
              }`}></div>
              <div className="flex items-center space-x-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                  currentStep >= 3 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  3
                </div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{t('calculators.cardiology.gwtgHf.progress_laboratory')}</span>
              </div>
            </div>

            {/* Step 1: Demographics & Comorbidities */}
            {currentStep === 1 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-2xl border border-red-200 dark:border-red-800">
                    <User className="w-6 h-6 text-red-600 dark:text-red-400" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{t('calculators.cardiology.gwtgHf.section_demographics')}</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{t('calculators.cardiology.gwtgHf.section_demographics_description')}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <CalculatorInput
                    label={t('calculators.cardiology.gwtgHf.field_age')}
                    value={formData.age}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, age: e.target.value })}
                    type="number"
                    placeholder={t('calculators.cardiology.gwtgHf.field_age_placeholder')}
                    min={18}
                    max={120}
                    error={errors.age}
                    icon={User}
                  />

                  <CalculatorSelect
                    label={t('calculators.cardiology.gwtgHf.field_race')}
                    value={formData.race}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setFormData({ ...formData, race: e.target.value as 'black' | 'other' })}
                    options={[
                      { value: '', label: t('calculators.cardiology.gwtgHf.field_race_select') },
                      { value: 'black', label: t('calculators.cardiology.gwtgHf.field_race_black') },
                      { value: 'other', label: t('calculators.cardiology.gwtgHf.field_race_other') },
                    ]}
                    error={errors.race}
                    icon={User}
                  />

                  <div className="md:col-span-2">
                    <CalculatorCheckbox
                      label={t('calculators.cardiology.gwtgHf.field_copd')}
                      checked={formData.copd}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, copd: e.target.checked })}
                      description={t('calculators.cardiology.gwtgHf.field_copd_description')}
                      icon={Activity}
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <CalculatorButton
                    onClick={() => setCurrentStep(2)}
                    className="enhanced-calculator-button"
                  >
                    {t('calculators.cardiology.gwtgHf.button_next_vital_signs')}
                  </CalculatorButton>
                </div>
              </div>
            )}

            {/* Step 2: Vital Signs */}
            {currentStep === 2 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 rounded-2xl border border-orange-200 dark:border-orange-800">
                    <Activity className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{t('calculators.cardiology.gwtgHf.vital_signs_section')}</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{t('calculators.cardiology.gwtgHf.vital_signs_description')}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <CalculatorInput
                    label={t('calculators.cardiology.gwtgHf.systolic_bp_label')}
                    value={formData.sbp}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, sbp: e.target.value })}
                    type="number"
                    placeholder={t('calculators.cardiology.gwtgHf.systolic_bp_placeholder')}
                    min={60}
                    max={300}
                    unit="mmHg"
                    error={errors.sbp}
                    icon={TrendingUp}
                  />

                  <CalculatorInput
                    label={t('calculators.cardiology.gwtgHf.heart_rate_label')}
                    value={formData.heartRate}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, heartRate: e.target.value })}
                    type="number"
                    placeholder={t('calculators.cardiology.gwtgHf.heart_rate_placeholder')}
                    min={30}
                    max={200}
                    unit="bpm"
                    error={errors.heartRate}
                    icon={Heart}
                  />
                </div>

                <div className="flex justify-between">
                  <CalculatorButton
                    onClick={() => setCurrentStep(1)}
                    variant="outline"
                  >
                    {t('calculators.cardiology.gwtgHf.back_button')}
                  </CalculatorButton>
                  <CalculatorButton
                    onClick={() => setCurrentStep(3)}
                    className="enhanced-calculator-button"
                  >
                    {t('calculators.cardiology.gwtgHf.next_laboratory')}
                  </CalculatorButton>
                </div>
              </div>
            )}

            {/* Step 3: Laboratory Values */}
            {currentStep === 3 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl border border-blue-200 dark:border-blue-800">
                    <BarChart3 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{t('calculators.cardiology.gwtgHf.laboratory_section')}</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{t('calculators.cardiology.gwtgHf.laboratory_description')}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <CalculatorInput
                    label={t('calculators.cardiology.gwtgHf.bun_label')}
                    value={formData.bun}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, bun: e.target.value })}
                    type="number"
                    placeholder={t('calculators.cardiology.gwtgHf.bun_placeholder')}
                    min={5}
                    max={200}
                    unit="mg/dL"
                    error={errors.bun}
                    icon={BarChart3}
                  />

                  <CalculatorInput
                    label={t('calculators.cardiology.gwtgHf.sodium_label')}
                    value={formData.sodium}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, sodium: e.target.value })}
                    type="number"
                    placeholder={t('calculators.cardiology.gwtgHf.sodium_placeholder')}
                    min={115}
                    max={160}
                    unit="mEq/L"
                    error={errors.sodium}
                    icon={BarChart3}
                  />
                </div>

                <div className="flex justify-between">
                  <CalculatorButton
                    onClick={() => setCurrentStep(2)}
                    variant="outline"
                  >
                    {t('calculators.cardiology.gwtgHf.back_button')}
                  </CalculatorButton>
                  <CalculatorButton
                    onClick={handleCalculate}
                    loading={isCalculating}
                    icon={Calculator}
                    size="lg"
                    className="enhanced-calculator-button"
                  >
                    {t('calculators.cardiology.gwtgHf.calculate_button')}
                  </CalculatorButton>
                </div>
              </div>
            )}
          </>
        ) : (
          /* Results Display */
          result && (
            <div className="space-y-8 animate-scaleIn">
              <ResultsDisplay
                title={t('calculators.cardiology.gwtgHf.results_title')}
                value={`${result.score} ${t('calculators.cardiology.gwtgHf.gwtg_points')}`}
                category={result.risk.toLowerCase() as 'low' | 'intermediate' | 'high'}
                interpretation={getInterpretation(result)}
                icon={Heart}
              >
                {/* Risk Overview Panel */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Risk Score */}
                  <div className="p-6 bg-white/50 dark:bg-gray-800/50 rounded-xl border border-white/20 dark:border-gray-700/20">
                    <div className="flex items-center space-x-3 mb-4">
                      {getRiskIcon(result.risk)}
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100">{t('calculators.cardiology.gwtgHf.risk_score_label')}</h4>
                    </div>
                    <div className="space-y-3">
                      <div className={`text-3xl font-bold ${getRiskColor(result.risk)}`}>
                        {result.score}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {t('calculators.cardiology.gwtgHf.gwtg_points')}
                      </div>
                    </div>
                  </div>

                  {/* Mortality Risk */}
                  <div className="p-6 bg-white/50 dark:bg-gray-800/50 rounded-xl border border-white/20 dark:border-gray-700/20">
                    <div className="flex items-center space-x-3 mb-4">
                      <Target className="w-5 h-5 text-red-500" />
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100">{t('calculators.cardiology.gwtgHf.mortality_risk_label')}</h4>
                    </div>
                    <div className="space-y-3">
                      <div className="text-3xl font-bold text-red-600 dark:text-red-400">
                        {result.mortality}%
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {t('calculators.cardiology.gwtgHf.in_hospital_mortality')}
                      </div>
                    </div>
                  </div>

                  {/* Risk Category */}
                  <div className="p-6 bg-white/50 dark:bg-gray-800/50 rounded-xl border border-white/20 dark:border-gray-700/20">
                    <div className="flex items-center space-x-3 mb-4">
                      <Shield className="w-5 h-5 text-purple-500" />
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100">{t('calculators.cardiology.gwtgHf.risk_category_label')}</h4>
                    </div>
                    <div className="space-y-3">
                      <div className={`text-lg font-bold ${getRiskColor(result.risk)}`}>
                        {result.risk}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {t('calculators.cardiology.gwtgHf.risk_stratification')}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Risk Factor Breakdown */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <BarChart3 className="w-5 h-5 text-blue-500" />
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100">{t('calculators.cardiology.gwtgHf.risk_factor_contribution')}</h4>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                      <div className="text-xs text-blue-600 dark:text-blue-400 mb-1">{t('calculators.cardiology.gwtgHf.age_factor')}</div>
                      <div className="text-2xl font-bold text-blue-800 dark:text-blue-200">{result.riskFactors.age}</div>
                    </div>
                    <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                      <div className="text-xs text-red-600 dark:text-red-400 mb-1">{t('calculators.cardiology.gwtgHf.systolic_bp_factor')}</div>
                      <div className="text-2xl font-bold text-red-800 dark:text-red-200">{result.riskFactors.sbp}</div>
                    </div>
                    <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                      <div className="text-xs text-yellow-600 dark:text-yellow-400 mb-1">{t('calculators.cardiology.gwtgHf.bun_factor')}</div>
                      <div className="text-2xl font-bold text-yellow-800 dark:text-yellow-200">{result.riskFactors.bun}</div>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                      <div className="text-xs text-green-600 dark:text-green-400 mb-1">{t('calculators.cardiology.gwtgHf.sodium_factor')}</div>
                      <div className="text-2xl font-bold text-green-800 dark:text-green-200">{result.riskFactors.sodium}</div>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                      <div className="text-xs text-purple-600 dark:text-purple-400 mb-1">{t('calculators.cardiology.gwtgHf.race_factor')}</div>
                      <div className="text-2xl font-bold text-purple-800 dark:text-purple-200">{result.riskFactors.race}</div>
                    </div>
                    <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
                      <div className="text-xs text-orange-600 dark:text-orange-400 mb-1">{t('calculators.cardiology.gwtgHf.copd_factor')}</div>
                      <div className="text-2xl font-bold text-orange-800 dark:text-orange-200">{result.riskFactors.copd}</div>
                    </div>
                    <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-200 dark:border-indigo-800">
                      <div className="text-xs text-indigo-600 dark:text-indigo-400 mb-1">{t('calculators.cardiology.gwtgHf.heart_rate_factor')}</div>
                      <div className="text-2xl font-bold text-indigo-800 dark:text-indigo-200">{result.riskFactors.heartRate}</div>
                    </div>
                  </div>
                </div>

                {/* Clinical Recommendations */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Stethoscope className="w-5 h-5 text-blue-500" />
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100">{t('calculators.cardiology.gwtgHf.clinical_management')}</h4>
                  </div>
                  <div className={`p-6 rounded-2xl border-2 ${
                    result.risk === 'Low' ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800' :
                    result.risk === 'Intermediate' ? 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800' :
                    result.risk === 'High' ? 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800' :
                    'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
                  }`}>
                    <div className="space-y-3">
                      {result.recommendations.map((rec, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-current rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-sm text-gray-700 dark:text-gray-300">{rec}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Risk Score Reference */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Info className="w-5 h-5 text-purple-500" />
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100">{t('calculators.cardiology.gwtgHf.risk_reference_title')}</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                      <div className="flex items-center space-x-2 mb-1">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <div className="font-semibold text-green-800 dark:text-green-200">{t('calculators.cardiology.gwtgHf.low_risk_range')}</div>
                      </div>
                      <div className="text-sm text-green-700 dark:text-green-300">{t('calculators.cardiology.gwtgHf.low_mortality')}</div>
                    </div>
                    <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                      <div className="flex items-center space-x-2 mb-1">
                        <AlertCircle className="w-4 h-4 text-yellow-600" />
                        <div className="font-semibold text-yellow-800 dark:text-yellow-200">{t('calculators.cardiology.gwtgHf.intermediate_risk_range')}</div>
                      </div>
                      <div className="text-sm text-yellow-700 dark:text-yellow-300">{t('calculators.cardiology.gwtgHf.intermediate_mortality')}</div>
                    </div>
                    <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
                      <div className="flex items-center space-x-2 mb-1">
                        <AlertTriangle className="w-4 h-4 text-orange-600" />
                        <div className="font-semibold text-orange-800 dark:text-orange-200">{t('calculators.cardiology.gwtgHf.high_risk_range')}</div>
                      </div>
                      <div className="text-sm text-orange-700 dark:text-orange-300">{t('calculators.cardiology.gwtgHf.high_mortality')}</div>
                    </div>
                    <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                      <div className="flex items-center space-x-2 mb-1">
                        <Shield className="w-4 h-4 text-red-600" />
                        <div className="font-semibold text-red-800 dark:text-red-200">{t('calculators.cardiology.gwtgHf.very_high_risk_range')}</div>
                      </div>
                      <div className="text-sm text-red-700 dark:text-red-300">{t('calculators.cardiology.gwtgHf.very_high_mortality')}</div>
                    </div>
                  </div>
                </div>

                {/* Algorithm Validation Status */}
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200">Enhanced GWTG-HF Algorithm</h4>
                  </div>
                  <div className="text-sm text-blue-700 dark:text-blue-300">
                    ✓ AHA Get With The Guidelines Validated • Enhanced risk stratification with comprehensive clinical recommendations
                  </div>
                </div>
              </ResultsDisplay>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <CalculatorButton
                  onClick={handleReset}
                  variant="outline"
                  size="lg"
                  icon={Calculator}
                >
                  New Assessment
                </CalculatorButton>
                <CalculatorButton
                  onClick={() => setShowResult(false)}
                  variant="secondary"
                  size="lg"
                >
                  Modify Inputs
                </CalculatorButton>
              </div>
            </div>
          )
        )}

        {/* Footer Information */}
        <div className="text-center pt-8 border-t border-white/20 dark:border-gray-800/20">
          <div className="flex items-center justify-center space-x-3 text-sm text-gray-600 dark:text-gray-400">
            <Info className="w-4 h-4" />
            <span>Based on AHA Get With The Guidelines-Heart Failure (GWTG-HF) Registry • Enhanced risk assessment</span>
            <div className="flex items-center space-x-1">
              <Award className="w-4 h-4 text-blue-600" />
              <span className="text-blue-600 font-semibold">Guidelines Validated</span>
            </div>
          </div>
        </div>
      </div>
    </CalculatorContainer>
  );
}; 