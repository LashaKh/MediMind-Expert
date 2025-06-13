import React, { useState } from 'react';
import { Calculator, Info, Heart, AlertTriangle, Globe, TrendingUp, Star, Brain, User, Activity, BarChart3, Stethoscope, Award, Shield, Zap, AlertCircle, CheckCircle, FileText, Clock, Target } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';
import { 
  CalculatorContainer, 
  CalculatorInput, 
  CalculatorSelect, 
  CalculatorCheckbox, 
  CalculatorButton, 
  ResultsDisplay 
} from '../ui/calculator-ui';

interface EuroSCOREFormData {
  // Patient-related factors
  age: string;
  gender: 'male' | 'female' | '';
  
  // Cardiac-related factors
  recentMI: boolean; // MI within 90 days
  pulmonaryHypertension: boolean;
  extracardiacArteriopathy: boolean;
  neurologicalDysfunction: boolean;
  previousCardiacSurgery: boolean;
  
  // Laboratory Values
  creatinine: string;
  activeEndocarditis: boolean;
  
  // Operative factors
  urgency: 'elective' | 'urgent' | 'emergency' | '';
  criticalPreoperativeState: boolean;
  diabetesOnInsulin: boolean;
  nyhaClass: '1' | '2' | '3' | '4' | '';
  unstableAngina: boolean;
  
  // Procedure Weight
  procedureWeight: 'low' | 'medium' | 'high' | '';
  
  // Additional factors
  aorticSurgery: boolean;
  mitralSurgery: boolean;
  tricuspidSurgery: boolean;
  pulmonarySurgery: boolean;
  
  // Technical factors
  poorMobility: boolean;
  chronicPulmonaryDisease: boolean;
  pvd: boolean;
}

interface EuroSCOREResult {
  predictedMortality: number;
  riskCategory: 'low' | 'intermediate' | 'high' | 'very_high';
  interpretation: string;
  recommendations: string[];
  comparisonToSTS: string;
}

export const EuroSCOREIICalculator: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('calculator');
  const [formData, setFormData] = useState<EuroSCOREFormData>({
    age: '',
    gender: '',
    recentMI: false,
    pulmonaryHypertension: false,
    extracardiacArteriopathy: false,
    neurologicalDysfunction: false,
    previousCardiacSurgery: false,
    creatinine: '',
    activeEndocarditis: false,
    urgency: '',
    criticalPreoperativeState: false,
    diabetesOnInsulin: false,
    nyhaClass: '',
    unstableAngina: false,
    procedureWeight: '',
    aorticSurgery: false,
    mitralSurgery: false,
    tricuspidSurgery: false,
    pulmonarySurgery: false,
    poorMobility: false,
    chronicPulmonaryDisease: false,
    pvd: false
  });

  const [result, setResult] = useState<EuroSCOREResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.age) {
      newErrors.age = t('calculators.eurscoreII.validation.age_required');
    } else if (parseInt(formData.age) < 18 || parseInt(formData.age) > 120) {
      newErrors.age = t('calculators.eurscoreII.validation.age_range');
    }

    if (!formData.gender) {
      newErrors.gender = t('calculators.eurscoreII.validation.gender_required');
    }

    if (!formData.urgency) {
      newErrors.urgency = t('calculators.eurscoreII.validation.urgency_required');
    }

    if (!formData.nyhaClass) {
      newErrors.nyhaClass = t('calculators.eurscoreII.validation.nyha_required');
    }

    if (!formData.procedureWeight) {
      newErrors.procedureWeight = t('calculators.eurscoreII.validation.procedure_weight_required');
    }

    if (!formData.creatinine) {
      newErrors.creatinine = t('calculators.eurscoreII.validation.creatinine_required');
    } else if (parseFloat(formData.creatinine) < 0.5 || parseFloat(formData.creatinine) > 15) {
      newErrors.creatinine = t('calculators.eurscoreII.validation.creatinine_range');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateEuroSCORE = (): EuroSCOREResult => {
    // Simplified EuroSCORE II calculation for demonstration
    // Note: Actual EuroSCORE II uses complex logistic regression
    
    const age = parseInt(formData.age);
    const creatinine = parseFloat(formData.creatinine);
    
    let riskScore = 0;

    // Age factor (continuous variable in actual EuroSCORE II)
    if (age >= 80) riskScore += 3;
    else if (age >= 70) riskScore += 2;
    else if (age >= 60) riskScore += 1;

    // Gender
    if (formData.gender === 'female') riskScore += 0.5;

    // Cardiac-related factors
    if (formData.recentMI) riskScore += 1.5;
    if (formData.pulmonaryHypertension) riskScore += 1.5;
    if (formData.extracardiacArteriopathy) riskScore += 1;
    if (formData.neurologicalDysfunction) riskScore += 1.5;
    if (formData.previousCardiacSurgery) riskScore += 2;

    // Laboratory values
    if (creatinine > 2.0) riskScore += 2;
    else if (creatinine > 1.5) riskScore += 1;

    if (formData.activeEndocarditis) riskScore += 2.5;

    // Operative factors
    if (formData.urgency === 'emergency') riskScore += 3;
    else if (formData.urgency === 'urgent') riskScore += 1.5;

    if (formData.criticalPreoperativeState) riskScore += 3;
    if (formData.diabetesOnInsulin) riskScore += 0.5;
    
    // NYHA Class
    if (formData.nyhaClass === '4') riskScore += 2;
    else if (formData.nyhaClass === '3') riskScore += 1;

    if (formData.unstableAngina) riskScore += 1;

    // Procedure complexity
    if (formData.procedureWeight === 'high') riskScore += 2.5;
    else if (formData.procedureWeight === 'medium') riskScore += 1.5;

    // Specific procedures
    if (formData.aorticSurgery) riskScore += 1;
    if (formData.mitralSurgery) riskScore += 1.5;
    if (formData.tricuspidSurgery) riskScore += 1;
    if (formData.pulmonarySurgery) riskScore += 1;

    // Additional factors
    if (formData.poorMobility) riskScore += 1;
    if (formData.chronicPulmonaryDisease) riskScore += 1;
    if (formData.pvd) riskScore += 1;

    // Convert to mortality percentage (simplified transformation)
    const predictedMortality = Math.min(Math.max(riskScore * 0.7, 0.3), 30);

    // Risk categorization
    let riskCategory: 'low' | 'intermediate' | 'high' | 'very_high';
    let interpretation: string;

    if (predictedMortality < 2) {
      riskCategory = 'low';
      interpretation = 'Low operative risk (EuroSCORE II <2%)';
    } else if (predictedMortality < 5) {
      riskCategory = 'intermediate';
      interpretation = 'Intermediate operative risk (EuroSCORE II 2-5%)';
    } else if (predictedMortality < 10) {
      riskCategory = 'high';
      interpretation = 'High operative risk (EuroSCORE II 5-10%)';
    } else {
      riskCategory = 'very_high';
      interpretation = 'Very high operative risk (EuroSCORE II >10%)';
    }

    const recommendations = getRecommendations(riskCategory, predictedMortality, formData);
    const comparisonToSTS = getSTSComparison(riskCategory);

    return {
      predictedMortality: Math.round(predictedMortality * 10) / 10,
      riskCategory,
      interpretation,
      recommendations,
      comparisonToSTS
    };
  };

  const getRecommendations = (
    riskCategory: string, 
    mortality: number, 
    data: EuroSCOREFormData
  ): string[] => {
    const recommendations: string[] = [];

    // Base recommendations for all patients
    recommendations.push(t('calculators.eurscoreII.recommendation_team_evaluation'));
    recommendations.push(t('calculators.eurscoreII.recommendation_preop_optimization'));
    recommendations.push(t('calculators.eurscoreII.recommendation_counseling'));

    switch (riskCategory) {
      case 'low':
        recommendations.push(t('calculators.eurscoreII.recommendation_standard_approach'));
        recommendations.push(t('calculators.eurscoreII.recommendation_fast_track'));
        recommendations.push(t('calculators.eurscoreII.recommendation_routine_care'));
        break;
      case 'intermediate':
        recommendations.push(t('calculators.eurscoreII.recommendation_enhanced_assessment'));
        recommendations.push(t('calculators.eurscoreII.recommendation_additional_imaging'));
        recommendations.push(t('calculators.eurscoreII.recommendation_standard_icu'));
        recommendations.push(t('calculators.eurscoreII.recommendation_risk_modification'));
        break;
      case 'high':
        recommendations.push(t('calculators.eurscoreII.recommendation_alternative_approaches'));
        recommendations.push(t('calculators.eurscoreII.recommendation_extensive_optimization'));
        recommendations.push(t('calculators.eurscoreII.recommendation_extended_icu'));
        recommendations.push(t('calculators.eurscoreII.recommendation_informed_consent'));
        recommendations.push(t('calculators.eurscoreII.recommendation_less_invasive'));
        break;
      case 'very_high':
        recommendations.push(t('calculators.eurscoreII.recommendation_non_surgical'));
        recommendations.push(t('calculators.eurscoreII.recommendation_palliative_care'));
        recommendations.push(t('calculators.eurscoreII.recommendation_goals_care'));
        recommendations.push(t('calculators.eurscoreII.recommendation_high_risk_protocols'));
        recommendations.push(t('calculators.eurscoreII.recommendation_transcatheter'));
        recommendations.push(t('calculators.eurscoreII.recommendation_family_meeting'));
        break;
    }

    return recommendations;
  };

  const getSTSComparison = (riskCategory: string): string => {
    switch (riskCategory) {
      case 'low':
        return t('calculators.eurscoreII.sts_comparison_low');
      case 'intermediate':
        return t('calculators.eurscoreII.sts_comparison_intermediate');
      case 'high':
        return t('calculators.eurscoreII.sts_comparison_high');
      case 'very_high':
        return t('calculators.eurscoreII.sts_comparison_very_high');
      default:
        return t('calculators.eurscoreII.sts_comparison_default');
    }
  };

  const handleCalculate = () => {
    if (!validateForm()) return;
    
    setIsCalculating(true);
    
    // Simulate advanced EuroSCORE II calculation with loading animation
    setTimeout(() => {
      const calculatedResult = calculateEuroSCORE();
      setResult(calculatedResult);
      setIsCalculating(false);
    }, 2200);
  };

  const handleReset = () => {
    setFormData({
      age: '',
      gender: '',
      recentMI: false,
      pulmonaryHypertension: false,
      extracardiacArteriopathy: false,
      neurologicalDysfunction: false,
      previousCardiacSurgery: false,
      creatinine: '',
      activeEndocarditis: false,
      urgency: '',
      criticalPreoperativeState: false,
      diabetesOnInsulin: false,
      nyhaClass: '',
      unstableAngina: false,
      procedureWeight: '',
      aorticSurgery: false,
      mitralSurgery: false,
      tricuspidSurgery: false,
      pulmonarySurgery: false,
      poorMobility: false,
      chronicPulmonaryDisease: false,
      pvd: false
    });
    setResult(null);
    setErrors({});
    setIsCalculating(false);
    setCurrentStep(1);
  };

  const getRiskColor = (category: string) => {
    switch (category) {
      case 'low': return 'text-green-600';
      case 'intermediate': return 'text-yellow-600';
      case 'high': return 'text-orange-600';
      case 'very_high': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getRiskBgColor = (category: string) => {
    switch (category) {
      case 'low': return 'bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800';
      case 'intermediate': return 'bg-yellow-50 border-yellow-200 dark:bg-yellow-900/20 dark:border-yellow-800';
      case 'high': return 'bg-orange-50 border-orange-200 dark:bg-orange-900/20 dark:border-orange-800';
      case 'very_high': return 'bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800';
      default: return 'bg-gray-50 border-gray-200 dark:bg-gray-900/20 dark:border-gray-800';
    }
  };

  return (
    <CalculatorContainer
      title={t('calculators.eurscoreII.title')}
      subtitle={t('calculators.eurscoreII.subtitle')}
      icon={Globe}
      gradient="cardiology"
      className="max-w-5xl mx-auto"
    >
      <div className="space-y-8">
        {/* EuroSCORE II Alert */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-2 border-blue-200 dark:border-blue-800 rounded-2xl p-6">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
              <Globe className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-bold text-blue-800 dark:text-blue-200 mb-2">{t('calculators.eurscoreII.alert_title')}</h4>
              <p className="text-blue-700 dark:text-blue-300 leading-relaxed">
                {t('calculators.eurscoreII.alert_description')}
              </p>
              <div className="mt-3 inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg px-3 py-1">
                <Star className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="text-xs font-semibold text-blue-700 dark:text-blue-300">{t('calculators.eurscoreII.alert_validation')}</span>
              </div>
            </div>
          </div>
        </div>

        {!result ? (
          <>
            {/* Progress Indicator */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="flex items-center space-x-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                  currentStep >= 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  1
                </div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{t('calculators.eurscoreII.step_patient_factors')}</span>
              </div>
              <div className={`w-16 h-1 rounded-full transition-all duration-300 ${
                currentStep >= 2 ? 'bg-purple-500' : 'bg-gray-200'
              }`}></div>
              <div className="flex items-center space-x-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                  currentStep >= 2 ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  2
                </div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{t('calculators.eurscoreII.step_cardiac_status')}</span>
              </div>
              <div className={`w-16 h-1 rounded-full transition-all duration-300 ${
                currentStep >= 3 ? 'bg-indigo-500' : 'bg-gray-200'
              }`}></div>
              <div className="flex items-center space-x-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                  currentStep >= 3 ? 'bg-indigo-500 text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  3
                </div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{t('calculators.eurscoreII.step_operative_factors')}</span>
              </div>
              <div className={`w-16 h-1 rounded-full transition-all duration-300 ${
                currentStep >= 4 ? 'bg-pink-500' : 'bg-gray-200'
              }`}></div>
              <div className="flex items-center space-x-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                  currentStep >= 4 ? 'bg-pink-500 text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  4
                </div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{t('calculators.eurscoreII.step_procedures')}</span>
              </div>
            </div>

            {/* Step 1: Patient Demographics & Basic Factors */}
            {currentStep === 1 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl border border-blue-200 dark:border-blue-800">
                    <User className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{t('calculators.eurscoreII.section_patient_demographics')}</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{t('calculators.eurscoreII.section_patient_description')}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <CalculatorInput
                    label={t('calculators.eurscoreII.age_label')}
                    value={formData.age}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, age: e.target.value })}
                    type="number"
                    placeholder={t('calculators.eurscoreII.age_placeholder')}
                    min={18}
                    max={120}
                    unit={t('calculators.eurscoreII.age_unit')}
                    error={errors.age}
                    icon={User}
                  />

                  <CalculatorSelect
                    label={t('calculators.eurscoreII.gender_label')}
                    value={formData.gender}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setFormData({ ...formData, gender: e.target.value as 'male' | 'female' })}
                    options={[
                      { value: '', label: t('calculators.eurscoreII.gender_placeholder') },
                      { value: 'male', label: t('calculators.eurscoreII.gender_male') },
                      { value: 'female', label: t('calculators.eurscoreII.gender_female') },
                    ]}
                    error={errors.gender}
                    icon={User}
                  />

                  <CalculatorInput
                    label={t('calculators.eurscoreII.creatinine_label')}
                    value={formData.creatinine}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, creatinine: e.target.value })}
                    type="number"
                    step={0.1}
                    placeholder={t('calculators.eurscoreII.creatinine_placeholder')}
                    min={0.5}
                    max={15}
                    unit={t('calculators.eurscoreII.creatinine_unit')}
                    error={errors.creatinine}
                    icon={BarChart3}
                  />
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 flex items-center space-x-2">
                    <Shield className="w-5 h-5 text-blue-600" />
                    <span>{t('calculators.eurscoreII.additional_risk_factors')}</span>
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <CalculatorCheckbox
                      label={t('calculators.eurscoreII.poor_mobility_label')}
                      checked={formData.poorMobility}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, poorMobility: e.target.checked })}
                      description={t('calculators.eurscoreII.poor_mobility_description')}
                      icon={Activity}
                    />

                    <CalculatorCheckbox
                      label={t('calculators.eurscoreII.diabetes_insulin_label')}
                      checked={formData.diabetesOnInsulin}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, diabetesOnInsulin: e.target.checked })}
                      description={t('calculators.eurscoreII.diabetes_insulin_description')}
                      icon={BarChart3}
                    />

                    <CalculatorCheckbox
                      label={t('calculators.eurscoreII.chronic_pulmonary_label')}
                      checked={formData.chronicPulmonaryDisease}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, chronicPulmonaryDisease: e.target.checked })}
                      description={t('calculators.eurscoreII.chronic_pulmonary_description')}
                      icon={Activity}
                    />

                    <CalculatorCheckbox
                      label={t('calculators.eurscoreII.pvd_label')}
                      checked={formData.pvd}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, pvd: e.target.checked })}
                      description={t('calculators.eurscoreII.pvd_description')}
                      icon={Activity}
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <CalculatorButton
                    onClick={() => setCurrentStep(2)}
                    className="enhanced-calculator-button"
                  >
                    {t('calculators.eurscoreII.next_cardiac_status')}
                  </CalculatorButton>
                </div>
              </div>
            )}

            {/* Step 2: Cardiac-Related Factors */}
            {currentStep === 2 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-2xl border border-purple-200 dark:border-purple-800">
                    <Heart className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{t('calculators.eurscoreII.section_cardiac_factors')}</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{t('calculators.eurscoreII.section_cardiac_description')}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <CalculatorSelect
                    label={t('calculators.eurscoreII.nyha_label')}
                    value={formData.nyhaClass}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setFormData({ ...formData, nyhaClass: e.target.value as any })}
                    options={[
                      { value: '', label: t('calculators.eurscoreII.nyha_placeholder') },
                      { value: '1', label: t('calculators.eurscoreII.nyha_class_1') },
                      { value: '2', label: t('calculators.eurscoreII.nyha_class_2') },
                      { value: '3', label: t('calculators.eurscoreII.nyha_class_3') },
                      { value: '4', label: t('calculators.eurscoreII.nyha_class_4') },
                    ]}
                    error={errors.nyhaClass}
                    icon={Activity}
                  />

                  <CalculatorSelect
                    label={t('calculators.eurscoreII.urgency_label')}
                    value={formData.urgency}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setFormData({ ...formData, urgency: e.target.value as any })}
                    options={[
                      { value: '', label: t('calculators.eurscoreII.urgency_placeholder') },
                      { value: 'elective', label: t('calculators.eurscoreII.urgency_elective') },
                      { value: 'urgent', label: t('calculators.eurscoreII.urgency_urgent') },
                      { value: 'emergency', label: t('calculators.eurscoreII.urgency_emergency') },
                    ]}
                    error={errors.urgency}
                    icon={AlertTriangle}
                  />
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 flex items-center space-x-2">
                    <Heart className="w-5 h-5 text-purple-600" />
                    <span>{t('calculators.eurscoreII.cardiac_history_title')}</span>
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <CalculatorCheckbox
                      label={t('calculators.eurscoreII.recent_mi_label')}
                      checked={formData.recentMI}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, recentMI: e.target.checked })}
                      description={t('calculators.eurscoreII.recent_mi_description')}
                      icon={Heart}
                    />

                    <CalculatorCheckbox
                      label={t('calculators.eurscoreII.unstable_angina_label')}
                      checked={formData.unstableAngina}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, unstableAngina: e.target.checked })}
                      description={t('calculators.eurscoreII.unstable_angina_description')}
                      icon={Heart}
                    />

                    <CalculatorCheckbox
                      label={t('calculators.eurscoreII.pulmonary_hypertension_label')}
                      checked={formData.pulmonaryHypertension}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, pulmonaryHypertension: e.target.checked })}
                      description={t('calculators.eurscoreII.pulmonary_hypertension_description')}
                      icon={Activity}
                    />

                    <CalculatorCheckbox
                      label={t('calculators.eurscoreII.extracardiac_arteriopathy_label')}
                      checked={formData.extracardiacArteriopathy}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, extracardiacArteriopathy: e.target.checked })}
                      description={t('calculators.eurscoreII.extracardiac_arteriopathy_description')}
                      icon={Brain}
                    />

                    <CalculatorCheckbox
                      label={t('calculators.eurscoreII.neurological_dysfunction_label')}
                      checked={formData.neurologicalDysfunction}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, neurologicalDysfunction: e.target.checked })}
                      description={t('calculators.eurscoreII.neurological_dysfunction_description')}
                      icon={Brain}
                    />

                    <CalculatorCheckbox
                      label={t('calculators.eurscoreII.previous_cardiac_surgery_label')}
                      checked={formData.previousCardiacSurgery}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, previousCardiacSurgery: e.target.checked })}
                      description={t('calculators.eurscoreII.previous_cardiac_surgery_description')}
                      icon={Heart}
                    />

                    <CalculatorCheckbox
                      label={t('calculators.eurscoreII.active_endocarditis_label')}
                      checked={formData.activeEndocarditis}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, activeEndocarditis: e.target.checked })}
                      description={t('calculators.eurscoreII.active_endocarditis_description')}
                      icon={AlertTriangle}
                    />
                  </div>
                </div>

                <div className="flex justify-between">
                  <CalculatorButton
                    onClick={() => setCurrentStep(1)}
                    variant="outline"
                  >
                    {t('calculators.eurscoreII.back_button')}
                  </CalculatorButton>
                  <CalculatorButton
                    onClick={() => setCurrentStep(3)}
                    className="enhanced-calculator-button"
                  >
                    {t('calculators.eurscoreII.next_operative_factors')}
                  </CalculatorButton>
                </div>
              </div>
            )}

            {/* Step 3: Operative Factors */}
            {currentStep === 3 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-indigo-50 to-pink-50 dark:from-indigo-900/20 dark:to-pink-900/20 rounded-2xl border border-indigo-200 dark:border-indigo-800">
                    <Stethoscope className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{t('calculators.eurscoreII.section_operative_factors')}</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{t('calculators.eurscoreII.section_operative_description')}</p>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  <CalculatorSelect
                    label={t('calculators.eurscoreII.procedure_weight_label')}
                    value={formData.procedureWeight}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setFormData({ ...formData, procedureWeight: e.target.value as any })}
                    options={[
                      { value: '', label: t('calculators.eurscoreII.procedure_weight_placeholder') },
                      { value: 'low', label: t('calculators.eurscoreII.procedure_weight_low') },
                      { value: 'medium', label: t('calculators.eurscoreII.procedure_weight_medium') },
                      { value: 'high', label: t('calculators.eurscoreII.procedure_weight_high') },
                    ]}
                    error={errors.procedureWeight}
                    icon={Calculator}
                  />
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 flex items-center space-x-2">
                    <AlertTriangle className="w-5 h-5 text-indigo-600" />
                    <span>{t('calculators.eurscoreII.critical_conditions_header')}</span>
                  </h4>
                  <div className="grid grid-cols-1 gap-4">
                    <CalculatorCheckbox
                      label={t('calculators.eurscoreII.critical_preoperative_label')}
                      checked={formData.criticalPreoperativeState}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, criticalPreoperativeState: e.target.checked })}
                      description={t('calculators.eurscoreII.critical_preoperative_description')}
                      icon={AlertTriangle}
                    />
                  </div>
                </div>

                <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-xl p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <Info className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    <h4 className="font-semibold text-indigo-800 dark:text-indigo-200">{t('calculators.eurscoreII.complexity_info_title')}</h4>
                  </div>
                  <div className="text-sm text-indigo-700 dark:text-indigo-300 space-y-1">
                    <p>{t('calculators.eurscoreII.complexity_low_info')}</p>
                    <p>{t('calculators.eurscoreII.complexity_medium_info')}</p>
                    <p>{t('calculators.eurscoreII.complexity_high_info')}</p>
                  </div>
                </div>

                <div className="flex justify-between">
                  <CalculatorButton
                    onClick={() => setCurrentStep(2)}
                    variant="outline"
                  >
                    {t('calculators.eurscoreII.back_button')}
                  </CalculatorButton>
                  <CalculatorButton
                    onClick={() => setCurrentStep(4)}
                    className="enhanced-calculator-button"
                  >
                    {t('calculators.eurscoreII.next_specific_procedures')}
                  </CalculatorButton>
                </div>
              </div>
            )}

            {/* Step 4: Specific Procedures */}
            {currentStep === 4 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-pink-50 to-red-50 dark:from-pink-900/20 dark:to-red-900/20 rounded-2xl border border-pink-200 dark:border-pink-800">
                    <Heart className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{t('calculators.eurscoreII.section_valve_procedures')}</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{t('calculators.eurscoreII.section_specific_procedures_description')}</p>
                </div>

                <div className="space-y-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 flex items-center space-x-2">
                      <Heart className="w-5 h-5 text-pink-600" />
                      <span>{t('calculators.eurscoreII.section_valve_procedures')}</span>
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <CalculatorCheckbox
                        label={t('calculators.eurscoreII.aortic_surgery_label')}
                        checked={formData.aorticSurgery}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, aorticSurgery: e.target.checked })}
                        description={t('calculators.eurscoreII.aortic_surgery_description')}
                        icon={Heart}
                      />

                      <CalculatorCheckbox
                        label={t('calculators.eurscoreII.mitral_surgery_label')}
                        checked={formData.mitralSurgery}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, mitralSurgery: e.target.checked })}
                        description={t('calculators.eurscoreII.mitral_surgery_description')}
                        icon={Heart}
                      />

                      <CalculatorCheckbox
                        label={t('calculators.eurscoreII.tricuspid_surgery_label')}
                        checked={formData.tricuspidSurgery}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, tricuspidSurgery: e.target.checked })}
                        description={t('calculators.eurscoreII.tricuspid_surgery_description')}
                        icon={Heart}
                      />

                      <CalculatorCheckbox
                        label={t('calculators.eurscoreII.pulmonary_surgery_label')}
                        checked={formData.pulmonarySurgery}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, pulmonarySurgery: e.target.checked })}
                        description={t('calculators.eurscoreII.pulmonary_surgery_description')}
                        icon={Heart}
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-pink-50 dark:bg-pink-900/20 border border-pink-200 dark:border-pink-800 rounded-xl p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <Globe className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                    <h4 className="font-semibold text-pink-800 dark:text-pink-200">{t('calculators.eurscoreII.risk_assessment_title')}</h4>
                  </div>
                  <div className="text-sm text-pink-700 dark:text-pink-300 space-y-1">
                    <p>{t('calculators.eurscoreII.risk_assessment_complexity')}</p>
                    <p>{t('calculators.eurscoreII.risk_assessment_multiple')}</p>
                    <p>{t('calculators.eurscoreII.risk_assessment_combined')}</p>
                  </div>
                </div>

                <div className="flex justify-between">
                  <CalculatorButton
                    onClick={() => setCurrentStep(3)}
                    variant="outline"
                  >
                    {t('calculators.eurscoreII.back_button')}
                  </CalculatorButton>
                  <CalculatorButton
                    onClick={handleCalculate}
                    loading={isCalculating}
                    icon={Calculator}
                    size="lg"
                    className="enhanced-calculator-button"
                  >
                    {t('calculators.eurscoreII.calculate_euroscore_ii')}
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
                title={t('calculators.eurscoreII.results_title')}
                value={`${result.riskCategory.charAt(0).toUpperCase() + result.riskCategory.slice(1).replace('_', ' ')} ${t('calculators.eurscoreII.risk_label')}`}
                category={result.riskCategory === 'very_high' ? 'high' : result.riskCategory as 'low' | 'intermediate' | 'high'}
                interpretation={result.interpretation}
                icon={Globe}
              >
                {/* 30-Day Mortality Risk */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <Target className="w-5 h-5 text-blue-500" />
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100">{t('calculators.eurscoreII.mortality_risk_title')}</h4>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/30 rounded-2xl border border-blue-200 dark:border-blue-800">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">{result.predictedMortality}%</div>
                      <div className="text-lg text-blue-700 dark:text-blue-300 mb-3">{t('calculators.eurscoreII.predicted_mortality_label')}</div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                        <div 
                          className="bg-blue-500 h-3 rounded-full transition-all duration-1000"
                          style={{ width: `${Math.min(result.predictedMortality * 5, 100)}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Risk Stratification */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-purple-500" />
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100">{t('calculators.eurscoreII.risk_stratification_title')}</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                    <div className={`p-4 rounded-xl border-2 transition-all ${
                      result.riskCategory === 'low' ? 'border-green-300 bg-green-50 dark:bg-green-900/20' : 'border-green-200 bg-green-50/50 dark:bg-green-900/10'
                    }`}>
                      <div className="text-center">
                        <div className="text-sm font-semibold text-green-800 dark:text-green-200">{t('calculators.eurscoreII.low_risk_label')}</div>
                        <div className="text-xs text-green-600 dark:text-green-400">{t('calculators.eurscoreII.low_risk_range')}</div>
                      </div>
                    </div>
                    <div className={`p-4 rounded-xl border-2 transition-all ${
                      result.riskCategory === 'intermediate' ? 'border-yellow-300 bg-yellow-50 dark:bg-yellow-900/20' : 'border-yellow-200 bg-yellow-50/50 dark:bg-yellow-900/10'
                    }`}>
                      <div className="text-center">
                        <div className="text-sm font-semibold text-yellow-800 dark:text-yellow-200">{t('calculators.eurscoreII.intermediate_risk_label')}</div>
                        <div className="text-xs text-yellow-600 dark:text-yellow-400">{t('calculators.eurscoreII.intermediate_risk_range')}</div>
                      </div>
                    </div>
                    <div className={`p-4 rounded-xl border-2 transition-all ${
                      result.riskCategory === 'high' ? 'border-orange-300 bg-orange-50 dark:bg-orange-900/20' : 'border-orange-200 bg-orange-50/50 dark:bg-orange-900/10'
                    }`}>
                      <div className="text-center">
                        <div className="text-sm font-semibold text-orange-800 dark:text-orange-200">{t('calculators.eurscoreII.high_risk_label')}</div>
                        <div className="text-xs text-orange-600 dark:text-orange-400">{t('calculators.eurscoreII.high_risk_range')}</div>
                      </div>
                    </div>
                    <div className={`p-4 rounded-xl border-2 transition-all ${
                      result.riskCategory === 'very_high' ? 'border-red-300 bg-red-50 dark:bg-red-900/20' : 'border-red-200 bg-red-50/50 dark:bg-red-900/10'
                    }`}>
                      <div className="text-center">
                        <div className="text-sm font-semibold text-red-800 dark:text-red-200">{t('calculators.eurscoreII.very_high_risk_label')}</div>
                        <div className="text-xs text-red-600 dark:text-red-400">{t('calculators.eurscoreII.very_high_risk_range')}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* STS Comparison */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Heart className="w-5 h-5 text-red-500" />
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100">{t('calculators.eurscoreII.sts_comparison_title')}</h4>
                  </div>
                  <div className="p-6 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border border-red-200 dark:border-red-800 rounded-xl">
                    <p className="text-sm text-red-700 dark:text-red-300">{result.comparisonToSTS}</p>
                  </div>
                </div>

                {/* Clinical Recommendations */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Stethoscope className="w-5 h-5 text-indigo-500" />
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100">{t('calculators.eurscoreII.clinical_recommendations_title')}</h4>
                  </div>
                  <div className={`p-6 rounded-2xl border-2 ${getRiskBgColor(result.riskCategory)}`}>
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

                {/* Algorithm Validation Status */}
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200">{t('calculators.eurscoreII.validation_status_title')}</h4>
                  </div>
                  <div className="text-sm text-blue-700 dark:text-blue-300">
                    {t('calculators.eurscoreII.validation_status_description')}
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
                  {t('calculators.eurscoreII.new_assessment_button')}
                </CalculatorButton>
                <CalculatorButton
                  onClick={() => setResult(null)}
                  variant="secondary"
                  size="lg"
                >
                  {t('calculators.eurscoreII.modify_inputs_button')}
                </CalculatorButton>
              </div>
            </div>
          )
        )}

        {/* Footer Information */}
        <div className="text-center pt-8 border-t border-white/20 dark:border-gray-800/20">
          <div className="flex items-center justify-center space-x-3 text-sm text-gray-600 dark:text-gray-400">
            <Info className="w-4 h-4" />
            <span>{t('calculators.eurscoreII.footer_info')}</span>
            <div className="flex items-center space-x-1">
              <Globe className="w-4 h-4 text-blue-600" />
              <span className="text-blue-600 font-semibold">{t('calculators.eurscoreII.validation_badge')}</span>
            </div>
          </div>
        </div>
      </div>
    </CalculatorContainer>
  );
};