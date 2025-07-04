import React, { useState } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import { Heart, Info, TrendingUp, Calculator, User, BarChart3, Activity, Stethoscope, Award, Shield, Zap, AlertCircle, CheckCircle, FileText, Clock, Pill, Target } from 'lucide-react';
import { 
  CalculatorContainer, 
  CalculatorInput, 
  CalculatorSelect, 
  CalculatorCheckbox, 
  CalculatorButton, 
  ResultsDisplay 
} from '../ui/calculator-ui';

interface MAGGICData {
  age: string;
  gender: 'male' | 'female' | '';
  lv_ejection_fraction: string;
  nyha_class: 1 | 2 | 3 | 4 | 0;
  systolic_bp: string;
  diabetes: boolean;
  copd: boolean;
  smoker: boolean;
  first_diagnosis: boolean; // Within 18 months
  bmi: string;
  creatinine: string;
  beta_blocker: boolean;
  ace_inhibitor: boolean;
}

interface MortalityResult {
  score: number;
  oneYearMortality: number;
  threeYearMortality: number;
  risk: 'Low' | 'Intermediate' | 'High' | 'Very High';
  interpretation: string;
  recommendations: string[];
}

export const MAGGICCalculator: React.FC = () => {
  const { t } = useTranslation();
  
  const [formData, setFormData] = useState<MAGGICData>({
    age: '',
    gender: '',
    lv_ejection_fraction: '',
    nyha_class: 0,
    systolic_bp: '',
    diabetes: false,
    copd: false,
    smoker: false,
    first_diagnosis: false,
    bmi: '',
    creatinine: '',
    beta_blocker: true,
    ace_inhibitor: true,
  });

  const [result, setResult] = useState<MortalityResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    const age = parseInt(formData.age);
    if (!formData.age || isNaN(age)) {
      newErrors.age = t('calculators.cardiology.maggic.validation_age');
    } else if (age < 18 || age > 100) {
      newErrors.age = t('calculators.cardiology.maggic.validation_age');
    }

    if (!formData.gender) {
      newErrors.gender = t('calculators.cardiology.maggic.validation_gender');
    }

    // NYHA class validation removed - not part of MAGGIC formula

    const lvef = parseInt(formData.lv_ejection_fraction);
    if (!formData.lv_ejection_fraction || isNaN(lvef)) {
      newErrors.lv_ejection_fraction = t('calculators.cardiology.maggic.validation_lvef');
    } else if (lvef < 5 || lvef > 80) {
      newErrors.lv_ejection_fraction = t('calculators.cardiology.maggic.validation_lvef');
    }

    const systolic_bp = parseInt(formData.systolic_bp);
    if (!formData.systolic_bp || isNaN(systolic_bp)) {
      newErrors.systolic_bp = t('calculators.cardiology.maggic.validation_systolic_bp');
    } else if (systolic_bp < 60 || systolic_bp > 250) {
      newErrors.systolic_bp = t('calculators.cardiology.maggic.validation_systolic_bp');
    }

    const bmi = parseFloat(formData.bmi);
    if (!formData.bmi || isNaN(bmi)) {
      newErrors.bmi = t('calculators.cardiology.maggic.validation_bmi');
    } else if (bmi < 10 || bmi > 60) {
      newErrors.bmi = t('calculators.cardiology.maggic.validation_bmi');
    }

    const creatinine = parseFloat(formData.creatinine);
    if (!formData.creatinine || isNaN(creatinine)) {
      newErrors.creatinine = t('calculators.cardiology.maggic.validation_creatinine');
    } else if (creatinine < 50 || creatinine > 500) {
      newErrors.creatinine = 'Creatinine should be between 50-500 μmol/L';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateMAGGIC = (): MortalityResult => {
    // Parse all string values to numbers
    const age = parseInt(formData.age);
    const lvef = parseInt(formData.lv_ejection_fraction);
    const systolic_bp = parseInt(formData.systolic_bp);
    const bmi = parseFloat(formData.bmi);
    const creatinine = parseFloat(formData.creatinine);

    let score = 0;

    // Basic Risk Factors
    // Male
    if (formData.gender === 'male') score += 1;

    // Smoker
    if (formData.smoker) score += 1;

    // Diabetic
    if (formData.diabetes) score += 3;

    // COPD
    if (formData.copd) score += 2;

    // Heart failure first diagnosed >18 months ago
    // If first_diagnosis is true (>18 months ago), score = +2
    // If first_diagnosis is false (within 18 months), score = 0
    if (formData.first_diagnosis) score += 2;

    // Not on beta blocker
    if (!formData.beta_blocker) score += 3;

    // Not on ACE-I/ARB
    if (!formData.ace_inhibitor) score += 1;

    // Ejection Fraction
    if (lvef < 20) score += 7;
    else if (lvef >= 20 && lvef <= 24) score += 6;
    else if (lvef >= 25 && lvef <= 29) score += 5;
    else if (lvef >= 30 && lvef <= 34) score += 3;
    else if (lvef >= 35 && lvef <= 39) score += 2;
    // EF >= 40 = 0 points

    // NYHA Class is NOT part of the MAGGIC formula - removed to match official formula

    // Creatinine (μmol/L)
    if (creatinine >= 250) score += 8;
    else if (creatinine >= 210 && creatinine < 250) score += 6;
    else if (creatinine >= 170 && creatinine < 210) score += 5;
    else if (creatinine >= 150 && creatinine < 170) score += 4;
    else if (creatinine >= 130 && creatinine < 150) score += 3;
    else if (creatinine >= 110 && creatinine < 130) score += 2;
    else if (creatinine >= 90 && creatinine < 110) score += 1;
    // Creatinine < 90 = 0 points

    // BMI
    if (bmi < 15) score += 6;
    else if (bmi >= 15 && bmi < 20) score += 5;
    else if (bmi >= 20 && bmi < 25) score += 3;
    else if (bmi >= 25 && bmi < 30) score += 2;
    // BMI >= 30 = 0 points

    // Extra points for Systolic BP based on EF
    if (lvef < 30) {
      // EF < 30
      if (systolic_bp < 110) score += 5;
      else if (systolic_bp >= 110 && systolic_bp < 120) score += 4;
      else if (systolic_bp >= 120 && systolic_bp < 130) score += 3;
      else if (systolic_bp >= 130 && systolic_bp < 140) score += 2;
      else if (systolic_bp >= 140 && systolic_bp < 150) score += 1;
      // >= 150 = 0 points
    } else if (lvef >= 30 && lvef <= 39) {
      // EF 30-39
      if (systolic_bp < 110) score += 3;
      else if (systolic_bp >= 110 && systolic_bp < 120) score += 2;
      else if (systolic_bp >= 120 && systolic_bp < 130) score += 1;
      else if (systolic_bp >= 130 && systolic_bp < 140) score += 1;
      // >= 140 = 0 points
    } else if (lvef >= 40) {
      // EF >= 40
      if (systolic_bp < 110) score += 2;
      else if (systolic_bp >= 110 && systolic_bp < 120) score += 1;
      else if (systolic_bp >= 120 && systolic_bp < 130) score += 1;
      // >= 130 = 0 points
    }

    // Extra points for Age based on EF
    if (lvef < 30) {
      // EF < 30
      if (age >= 80) score += 10;
      else if (age >= 75 && age < 80) score += 8;
      else if (age >= 70 && age < 75) score += 6;
      else if (age >= 65 && age < 70) score += 4;
      else if (age >= 60 && age < 65) score += 2;
      else if (age >= 55 && age < 60) score += 1;
      // < 55 = 0 points
    } else if (lvef >= 30 && lvef <= 39) {
      // EF 30-39
      if (age >= 80) score += 13;
      else if (age >= 75 && age < 80) score += 10;
      else if (age >= 70 && age < 75) score += 8;
      else if (age >= 65 && age < 70) score += 6;
      else if (age >= 60 && age < 65) score += 4;
      else if (age >= 55 && age < 60) score += 2;
      // < 55 = 0 points
    } else if (lvef >= 40) {
      // EF >= 40
      if (age >= 80) score += 15;
      else if (age >= 75 && age < 80) score += 12;
      else if (age >= 70 && age < 75) score += 9;
      else if (age >= 65 && age < 70) score += 7;
      else if (age >= 60 && age < 65) score += 5;
      else if (age >= 55 && age < 60) score += 3;
      // < 55 = 0 points
    }

    // Calculate mortality risks
    let oneYearMortality: number;
    let threeYearMortality: number;

    // Mortality calculation based on MAGGIC score
    if (score <= 14) {
      oneYearMortality = 2.9;
      threeYearMortality = 10.4;
    } else if (score <= 19) {
      oneYearMortality = 5.8;
      threeYearMortality = 18.6;
    } else if (score <= 24) {
      oneYearMortality = 11.2;
      threeYearMortality = 31.5;
    } else if (score <= 29) {
      oneYearMortality = 20.2;
      threeYearMortality = 47.8;
    } else {
      oneYearMortality = 34.4;
      threeYearMortality = 65.2;
    }

    let risk: 'Low' | 'Intermediate' | 'High' | 'Very High';
    let interpretation: string;

    if (score <= 14) {
      risk = 'Low';
      interpretation = 'Low mortality risk in chronic heart failure';
    } else if (score <= 19) {
      risk = 'Intermediate';
      interpretation = 'Intermediate mortality risk in chronic heart failure';
    } else if (score <= 24) {
      risk = 'High';
      interpretation = 'High mortality risk in chronic heart failure';
    } else {
      risk = 'Very High';
      interpretation = 'Very high mortality risk in chronic heart failure';
    }

    const recommendations = getRecommendations(risk, formData);

    return {
      score,
      oneYearMortality,
      threeYearMortality,
      risk,
      interpretation,
      recommendations,
    };
  };

  const getRecommendations = (risk: string, data: MAGGICData): string[] => {
    const recommendations: string[] = [];

    if (risk === 'High' || risk === 'Very High') {
      recommendations.push('Consider advanced heart failure therapies');
      recommendations.push('Frequent clinical monitoring and follow-up');
      recommendations.push('Heart failure education and self-management');
    }

    if (!data.beta_blocker) {
      recommendations.push('Initiate evidence-based beta-blocker therapy');
    }

    if (!data.ace_inhibitor) {
      recommendations.push('Consider ACE inhibitor or ARB therapy');
    }

    if (data.diabetes) {
      recommendations.push('Optimize diabetes management and glucose control');
    }

    if (data.copd) {
      recommendations.push('Coordinate pulmonary and cardiac care');
    }

    if (risk === 'Very High') {
      recommendations.push('Consider referral to advanced heart failure specialist');
      recommendations.push('Evaluate for cardiac resynchronization therapy or ICD');
    }

    return recommendations;
  };

  const getRiskColor = (risk: string): string => {
    switch (risk) {
      case 'Low':
        return 'border-green-300 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200';
      case 'Intermediate':
        return 'border-yellow-300 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200';
      case 'High':
        return 'border-orange-300 bg-orange-50 dark:bg-orange-900/20 text-orange-800 dark:text-orange-200';
      case 'Very High':
        return 'border-red-300 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200';
      default:
        return 'border-gray-300 bg-gray-50 dark:bg-gray-900/20 text-gray-800 dark:text-gray-200';
    }
  };

  const handleCalculate = () => {
    if (!validateForm()) return;
    
    setIsCalculating(true);
    
    // Simulate advanced risk calculation with loading animation
    setTimeout(() => {
      const calculatedResult = calculateMAGGIC();
      setResult(calculatedResult);
      setShowResult(true);
      setIsCalculating(false);
    }, 1800);
  };

  const handleReset = () => {
    setFormData({
      age: '',
      gender: '',
      lv_ejection_fraction: '',
      nyha_class: 0,
      systolic_bp: '',
      diabetes: false,
      copd: false,
      smoker: false,
      first_diagnosis: false,
      bmi: '',
      creatinine: '',
      beta_blocker: false,
      ace_inhibitor: false,
    });
    setResult(null);
    setErrors({});
    setIsCalculating(false);
    setShowResult(false);
    setCurrentStep(1);
  };

  const getRiskIcon = (risk: string) => {
    switch (risk) {
      case 'Low': return 'text-green-500';
      case 'Intermediate': return 'text-yellow-500';
      case 'High': return 'text-orange-500';
      case 'Very High': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <CalculatorContainer
      title={t('calculators.cardiology.maggic.title')}
      subtitle={t('calculators.cardiology.maggic.subtitle')}
      icon={Heart}
      gradient="cardiology"
      className="max-w-4xl mx-auto"
    >
      <div className="space-y-8">
        {/* MAGGIC Alert */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-2 border-purple-200 dark:border-purple-800 rounded-2xl p-6">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl">
              <Heart className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-bold text-purple-800 dark:text-purple-200 mb-2">{t('calculators.cardiology.maggic.alert_title')}</h4>
              <p className="text-purple-700 dark:text-purple-300 leading-relaxed">
                {t('calculators.cardiology.maggic.alert_description')}
              </p>
              <div className="mt-3 inline-flex items-center space-x-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg px-3 py-1">
                <Award className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span className="text-xs font-semibold text-purple-700 dark:text-purple-300">Meta-Analysis Validated - All Heart Failure Types</span>
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
                  currentStep >= 1 ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  1
                </div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{t('calculators.cardiology.maggic.demographics_step')}</span>
              </div>
              <div className={`w-16 h-1 rounded-full transition-all duration-300 ${
                currentStep >= 2 ? 'bg-pink-500' : 'bg-gray-200'
              }`}></div>
              <div className="flex items-center space-x-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                  currentStep >= 2 ? 'bg-pink-500 text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  2
                </div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{t('calculators.cardiology.maggic.clinical_step')}</span>
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
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{t('calculators.cardiology.maggic.therapy_step')}</span>
              </div>
            </div>

            {/* Step 1: Demographics & Heart Failure */}
            {currentStep === 1 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl border border-purple-200 dark:border-purple-800">
                    <User className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{t('calculators.cardiology.maggic.patient_demographics')}</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{t('calculators.cardiology.maggic.demographics_description')}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <CalculatorInput
                    label={t('calculators.cardiology.maggic.age_label')}
                    value={formData.age}
                    onChange={(value: string) => setFormData({ ...formData, age: value })}
                    type="number"
                    min={18}
                    max={120}
                    placeholder={t('calculators.cardiology.maggic.age_placeholder')}
                    icon={User}
                    className="transition-all duration-300"
                  />

                  <CalculatorSelect
                    label={t('calculators.cardiology.maggic.gender_label')}
                    value={formData.gender}
                    onChange={(value: string) => setFormData({ ...formData, gender: value as 'male' | 'female' | '' })}
                    options={[
                      { value: '', label: t('calculators.cardiology.maggic.gender_placeholder') },
                      { value: 'male', label: t('calculators.cardiology.maggic.gender_male') },
                      { value: 'female', label: t('calculators.cardiology.maggic.gender_female') }
                    ]}
                    icon={User}
                    className="transition-all duration-300"
                  />

                  <CalculatorInput
                    label={t('calculators.cardiology.maggic.lvef_label')}
                    value={formData.lv_ejection_fraction}
                    onChange={(value: string) => setFormData({ ...formData, lv_ejection_fraction: value })}
                    type="number"
                    min={10}
                    max={80}
                    placeholder={t('calculators.cardiology.maggic.lvef_placeholder')}
                    icon={Heart}
                    className="transition-all duration-300"
                  />

                  <CalculatorSelect
                    label={t('calculators.cardiology.maggic.nyha_class_label')}
                    value={formData.nyha_class === 0 ? '' : formData.nyha_class.toString()}
                    onChange={(value: string) => {
                      setFormData({ ...formData, nyha_class: value === '' ? 0 : parseInt(value) as 1 | 2 | 3 | 4 });
                    }}
                    options={[
                      { value: '', label: t('calculators.cardiology.maggic.nyha_class_placeholder') },
                      { value: '1', label: t('calculators.cardiology.maggic.nyha_class_1') },
                      { value: '2', label: t('calculators.cardiology.maggic.nyha_class_2') },
                      { value: '3', label: t('calculators.cardiology.maggic.nyha_class_3') },
                      { value: '4', label: t('calculators.cardiology.maggic.nyha_class_4') },
                    ]}
                    error={errors.nyha_class}
                    icon={Activity}
                  />
                </div>

                <div className="flex justify-end">
                  <CalculatorButton
                    onClick={() => setCurrentStep(2)}
                    className="enhanced-calculator-button"
                  >
                    {t('calculators.cardiology.maggic.next_clinical_assessment')}
                  </CalculatorButton>
                </div>
              </div>
            )}

            {/* Step 2: Clinical Parameters & Comorbidities */}
            {currentStep === 2 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-pink-50 to-indigo-50 dark:from-pink-900/20 dark:to-indigo-900/20 rounded-2xl border border-pink-200 dark:border-pink-800">
                    <Activity className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{t('calculators.cardiology.maggic.clinical_assessment')}</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{t('calculators.cardiology.maggic.clinical_description')}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <CalculatorInput
                    label={t('calculators.cardiology.maggic.systolic_bp_label')}
                    value={formData.systolic_bp}
                    onChange={(value: string) => setFormData({ ...formData, systolic_bp: value })}
                    type="number"
                    placeholder={t('calculators.cardiology.maggic.systolic_bp_placeholder')}
                    min={60}
                    max={250}
                    unit="mmHg"
                    error={errors.systolic_bp}
                    icon={TrendingUp}
                  />

                  <CalculatorInput
                    label={t('calculators.cardiology.maggic.bmi_label')}
                    value={formData.bmi}
                    onChange={(value: string) => setFormData({ ...formData, bmi: value })}
                    type="number"
                    step={0.1}
                    placeholder={t('calculators.cardiology.maggic.bmi_placeholder')}
                    min={10}
                    max={60}
                    icon={User}
                    className="transition-all duration-300"
                  />

                  <CalculatorInput
                    label="Creatinine (μmol/L)"
                    value={formData.creatinine}
                    onChange={(value: string) => setFormData({ ...formData, creatinine: value })}
                    type="number"
                    step={1}
                    placeholder="e.g., 90"
                    min={50}
                    max={500}
                    unit="μmol/L"
                    error={errors.creatinine}
                    icon={Activity}
                    className="transition-all duration-300"
                  />
                </div>

                {/* Comorbidities */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 flex items-center space-x-2">
                    <Stethoscope className="w-5 h-5 text-pink-600" />
                    <span>{t('calculators.cardiology.maggic.comorbidities_section')}</span>
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <CalculatorCheckbox
                      label={t('calculators.cardiology.maggic.diabetes_label')}
                      checked={formData.diabetes}
                      onChange={(checked: boolean) => setFormData({ ...formData, diabetes: checked })}
                      description="History of diabetes mellitus"
                      icon={BarChart3}
                    />

                    <CalculatorCheckbox
                      label={t('calculators.cardiology.maggic.copd_label')}
                      checked={formData.copd}
                      onChange={(checked: boolean) => setFormData({ ...formData, copd: checked })}
                      description="COPD or severe lung disease"
                      icon={Activity}
                    />

                    <CalculatorCheckbox
                      label="Smoker"
                      checked={formData.smoker}
                      onChange={(checked: boolean) => setFormData({ ...formData, smoker: checked })}
                      description="Current or former smoker"
                      icon={AlertCircle}
                    />

                    <CalculatorCheckbox
                      label="Heart failure first diagnosed >18 months ago"
                      checked={formData.first_diagnosis}
                      onChange={(checked: boolean) => setFormData({ ...formData, first_diagnosis: checked })}
                      description="Chronic heart failure (>18 months ago)"
                      icon={Clock}
                    />
                  </div>
                </div>

                <div className="flex justify-between">
                  <CalculatorButton
                    onClick={() => setCurrentStep(1)}
                    variant="outline"
                  >
                    Back
                  </CalculatorButton>
                  <CalculatorButton
                    onClick={() => setCurrentStep(3)}
                    className="enhanced-calculator-button"
                  >
                    {t('calculators.cardiology.maggic.next_therapy_assessment')}
                  </CalculatorButton>
                </div>
              </div>
            )}

            {/* Step 3: Current Therapy */}
            {currentStep === 3 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-2xl border border-indigo-200 dark:border-indigo-800">
                    <Pill className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{t('calculators.cardiology.maggic.therapy_assessment')}</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{t('calculators.cardiology.maggic.therapy_description')}</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center space-x-2">
                      <Pill className="w-5 h-5 text-indigo-600" />
                      <span>{t('calculators.cardiology.maggic.gdmt_section')}</span>
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <CalculatorCheckbox
                        label={t('calculators.cardiology.maggic.beta_blocker_label')}
                        checked={formData.beta_blocker}
                        onChange={(checked: boolean) => setFormData({ ...formData, beta_blocker: checked })}
                        description="Evidence-based beta-blocker (carvedilol, metoprolol, bisoprolol)"
                        icon={Pill}
                      />

                      <CalculatorCheckbox
                        label={t('calculators.cardiology.maggic.ace_inhibitor_label')}
                        checked={formData.ace_inhibitor}
                        onChange={(checked: boolean) => setFormData({ ...formData, ace_inhibitor: checked })}
                        description="Neurohormonal blockade therapy"
                        icon={Pill}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <CalculatorButton
                    onClick={() => setCurrentStep(2)}
                    variant="outline"
                  >
                    Back
                  </CalculatorButton>
                  <CalculatorButton
                    onClick={handleCalculate}
                    loading={isCalculating}
                    icon={Calculator}
                    size="lg"
                    className="enhanced-calculator-button"
                  >
                    {t('calculators.cardiology.maggic.calculate_maggic_risk')}
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
                title={t('calculators.cardiology.maggic.results_title')}
                value={`${result.score} points`}
                category={result.risk.toLowerCase() as 'low' | 'intermediate' | 'high'}
                interpretation={result.interpretation}
                icon={Heart}
              >
                {/* Risk Score Overview */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-white/50 dark:bg-gray-800/50 rounded-2xl border border-white/20 dark:border-gray-700/20">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">{result.oneYearMortality}%</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">{t('calculators.cardiology.maggic.one_year_mortality')}</div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-purple-500 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${Math.min(result.oneYearMortality * 2, 100)}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 bg-white/50 dark:bg-gray-800/50 rounded-2xl border border-white/20 dark:border-gray-700/20">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-2">{result.threeYearMortality}%</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">{t('calculators.cardiology.maggic.three_year_mortality')}</div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-pink-500 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${Math.min(result.threeYearMortality, 100)}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Risk Stratification Table */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Target className="w-5 h-5 text-indigo-500" />
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100">{t('calculators.cardiology.maggic.risk_stratification_title')}</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                    <div className={`p-4 rounded-xl border-2 transition-all ${
                      result.risk === 'Low' ? 'border-green-300 bg-green-50 dark:bg-green-900/20' : 'border-green-200 bg-green-50/50 dark:bg-green-900/10'
                    }`}>
                      <div className="text-center">
                        <div className="text-sm font-semibold text-green-800 dark:text-green-200">{t('calculators.cardiology.maggic.low_risk_category')}</div>
                        <div className="text-xs text-green-600 dark:text-green-400">≤14 points</div>
                        <div className="text-xs text-green-700 dark:text-green-300 mt-1">2.9% / 10.4%</div>
                      </div>
                    </div>
                    <div className={`p-4 rounded-xl border-2 transition-all ${
                      result.risk === 'Intermediate' ? 'border-yellow-300 bg-yellow-50 dark:bg-yellow-900/20' : 'border-yellow-200 bg-yellow-50/50 dark:bg-yellow-900/10'
                    }`}>
                      <div className="text-center">
                        <div className="text-sm font-semibold text-yellow-800 dark:text-yellow-200">{t('calculators.cardiology.maggic.intermediate_risk_category')}</div>
                        <div className="text-xs text-yellow-600 dark:text-yellow-400">15-19 points</div>
                        <div className="text-xs text-yellow-700 dark:text-yellow-300 mt-1">5.8% / 18.6%</div>
                      </div>
                    </div>
                    <div className={`p-4 rounded-xl border-2 transition-all ${
                      result.risk === 'High' ? 'border-orange-300 bg-orange-50 dark:bg-orange-900/20' : 'border-orange-200 bg-orange-50/50 dark:bg-orange-900/10'
                    }`}>
                      <div className="text-center">
                        <div className="text-sm font-semibold text-orange-800 dark:text-orange-200">{t('calculators.cardiology.maggic.high_risk_category')}</div>
                        <div className="text-xs text-orange-600 dark:text-orange-400">20-24 points</div>
                        <div className="text-xs text-orange-700 dark:text-orange-300 mt-1">11.2% / 31.5%</div>
                      </div>
                    </div>
                    <div className={`p-4 rounded-xl border-2 transition-all ${
                      result.risk === 'Very High' ? 'border-red-300 bg-red-50 dark:bg-red-900/20' : 'border-red-200 bg-red-50/50 dark:bg-red-900/10'
                    }`}>
                      <div className="text-center">
                        <div className="text-sm font-semibold text-red-800 dark:text-red-200">{t('calculators.cardiology.maggic.very_high_risk_category')}</div>
                        <div className="text-xs text-red-600 dark:text-red-400">≥25 points</div>
                        <div className="text-xs text-red-700 dark:text-red-300 mt-1">34.4% / 65.2%</div>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                    {t('calculators.cardiology.maggic.mortality_rates_note')}
                  </p>
                </div>

                {/* Clinical Recommendations */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Stethoscope className="w-5 h-5 text-blue-500" />
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100">{t('calculators.cardiology.maggic.recommendations_title')}</h4>
                  </div>
                  <div className={`p-6 rounded-2xl border-2 ${getRiskColor(result.risk)}`}>
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
                <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <Award className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    <h4 className="font-semibold text-purple-800 dark:text-purple-200">{t('calculators.cardiology.maggic.algorithm_validation_title')}</h4>
                  </div>
                  <div className="text-sm text-purple-700 dark:text-purple-300">
                    {t('calculators.cardiology.maggic.algorithm_validation_text')}
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
                  {t('calculators.cardiology.maggic.new_assessment_button')}
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
            <span>Based on MAGGIC Risk Model (Pocock et al.) • For educational purposes only</span>
            <div className="flex items-center space-x-1">
              <Award className="w-4 h-4 text-purple-600" />
              <span className="text-purple-600 font-semibold">Meta-Analysis Validated</span>
            </div>
          </div>
        </div>
      </div>
    </CalculatorContainer>
  );
}; 