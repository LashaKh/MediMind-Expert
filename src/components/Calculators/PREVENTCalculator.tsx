import React, { useState } from 'react';
import { Calculator, Info, Heart, TrendingUp, Star, Brain, User, Activity, BarChart3, Stethoscope, Award, Shield, Zap, AlertCircle, CheckCircle, FileText, Clock, Target } from 'lucide-react';
import { Button } from '../ui/button';
import { Tooltip } from '../ui/tooltip';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { 
  CalculatorContainer, 
  CalculatorInput, 
  CalculatorSelect, 
  CalculatorCheckbox, 
  CalculatorButton, 
  ResultsDisplay 
} from '../ui/calculator-ui';
import { useTranslation } from '../../hooks/useTranslation';

interface PREVENTFormData {
  age: string;
  sex: 'male' | 'female' | '';
  race: 'white' | 'black' | 'hispanic' | 'asian' | 'other' | '';
  totalCholesterol: string;
  hdlCholesterol: string;
  ldlCholesterol: string;
  systolicBP: string;
  diastolicBP: string;
  antihypertensiveMeds: boolean;
  diabetes: boolean;
  currentSmoker: boolean;
  eGFR: string; // estimated Glomerular Filtration Rate
  uacr: string; // Urine Albumin-to-Creatinine Ratio
  socialDeprivationIndex: string; // SDI score
}

interface PREVENTResult {
  tenYearCVD: number;
  tenYearASCVD: number;
  tenYearHeartFailure: number;
  thirtyYearCVD: number;
  thirtyYearASCVD: number;
  thirtyYearHeartFailure: number;
  riskCategory: 'low' | 'borderline' | 'intermediate' | 'high';
  ckmeEnhanced: boolean;
  recommendations: string[];
  preventionStrategy: string;
}

export const PREVENTCalculator: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('calculator');
  const [formData, setFormData] = useState<PREVENTFormData>({
    age: '',
    sex: '',
    race: '',
    totalCholesterol: '',
    hdlCholesterol: '',
    ldlCholesterol: '',
    systolicBP: '',
    diastolicBP: '',
    antihypertensiveMeds: false,
    diabetes: false,
    currentSmoker: false,
    eGFR: '',
    uacr: '',
    socialDeprivationIndex: ''
  });

  const [result, setResult] = useState<PREVENTResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    const age = parseInt(formData.age);
    if (!formData.age || isNaN(age)) {
      newErrors.age = t('calculators.cardiology.prevent.validation_age');
    } else if (age < 30 || age > 79) {
      newErrors.age = t('calculators.cardiology.prevent.validation_age_range');
    }

    if (!formData.sex) {
      newErrors.sex = t('calculators.cardiology.prevent.validation_sex');
    }

    if (!formData.race) {
      newErrors.race = t('calculators.cardiology.prevent.validation_race');
    }

    const totalChol = parseInt(formData.totalCholesterol);
    if (!formData.totalCholesterol || isNaN(totalChol)) {
      newErrors.totalCholesterol = t('calculators.cardiology.prevent.validation_total_cholesterol');
    } else if (totalChol < 100 || totalChol > 400) {
      newErrors.totalCholesterol = t('calculators.cardiology.prevent.validation_total_cholesterol_range');
    }

    const hdlChol = parseInt(formData.hdlCholesterol);
    if (!formData.hdlCholesterol || isNaN(hdlChol)) {
      newErrors.hdlCholesterol = t('calculators.cardiology.prevent.validation_hdl_cholesterol');
    } else if (hdlChol < 20 || hdlChol > 100) {
      newErrors.hdlCholesterol = t('calculators.cardiology.prevent.validation_hdl_cholesterol_range');
    }

    const systolicBP = parseInt(formData.systolicBP);
    if (!formData.systolicBP || isNaN(systolicBP)) {
      newErrors.systolicBP = t('calculators.cardiology.prevent.validation_systolic_bp');
    } else if (systolicBP < 90 || systolicBP > 200) {
      newErrors.systolicBP = t('calculators.cardiology.prevent.validation_systolic_bp_range');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculatePREVENTRisk = (): PREVENTResult => {
    const age = parseInt(formData.age);
    const totalChol = parseInt(formData.totalCholesterol);
    const hdlChol = parseInt(formData.hdlCholesterol);
    const systolicBP = parseInt(formData.systolicBP);
    const eGFR = parseFloat(formData.eGFR);
    const uacr = parseFloat(formData.uacr);
    const sdi = parseFloat(formData.socialDeprivationIndex);

    // Simplified PREVENT calculation for demonstration
    // Note: Actual PREVENT uses complex ML algorithms
    let baseRisk = 0;

    // Age factor
    baseRisk += (age - 30) * 0.3;

    // Sex factor
    if (formData.sex === 'male') baseRisk += 2;

    // Race/ethnicity factor
    if (formData.race === 'black') baseRisk += 1.5;

    // Cholesterol factors
    const cholRatio = totalChol / hdlChol;
    baseRisk += Math.max(0, (cholRatio - 3) * 2);

    // Blood pressure
    if (systolicBP >= 140) baseRisk += 3;
    else if (systolicBP >= 130) baseRisk += 2;
    else if (systolicBP >= 120) baseRisk += 1;

    // Clinical factors
    if (formData.antihypertensiveMeds) baseRisk += 1;
    if (formData.diabetes) baseRisk += 3;
    if (formData.currentSmoker) baseRisk += 2;

    // CKM-E factors (enhanced with kidney/metabolic factors)
    let ckmeEnhanced = false;
    if (eGFR && eGFR < 60) {
      baseRisk += 2;
      ckmeEnhanced = true;
    }
    if (uacr && uacr > 30) {
      baseRisk += 1.5;
      ckmeEnhanced = true;
    }
    if (sdi && sdi > 0.5) {
      baseRisk += 1;
      ckmeEnhanced = true;
    }

    // Convert to percentages (simplified)
    const tenYearCVD = Math.min(Math.max(baseRisk * 2, 1), 50);
    const tenYearASCVD = Math.min(Math.max(baseRisk * 1.5, 0.5), 40);
    const tenYearHeartFailure = Math.min(Math.max(baseRisk * 0.8, 0.2), 20);

    // 30-year risks (approximately 2.5x higher)
    const thirtyYearCVD = Math.min(tenYearCVD * 2.5, 80);
    const thirtyYearASCVD = Math.min(tenYearASCVD * 2.5, 70);
    const thirtyYearHeartFailure = Math.min(tenYearHeartFailure * 3, 40);

    // Risk categorization
    let riskCategory: 'low' | 'borderline' | 'intermediate' | 'high';
    if (tenYearASCVD < 5) riskCategory = 'low';
    else if (tenYearASCVD < 7.5) riskCategory = 'borderline';
    else if (tenYearASCVD < 20) riskCategory = 'intermediate';
    else riskCategory = 'high';

    // Generate recommendations
    const recommendations: string[] = [];
    if (riskCategory === 'low') {
      recommendations.push('Continue lifestyle optimization');
      recommendations.push('Reassess in 4-6 years');
    } else if (riskCategory === 'borderline') {
      recommendations.push('Risk enhancers assessment recommended');
      recommendations.push('Consider CAC scoring if uncertain');
      recommendations.push('Lifestyle therapy essential');
    } else if (riskCategory === 'intermediate') {
      recommendations.push('Statin therapy recommended');
      recommendations.push('Consider CAC scoring for refinement');
      recommendations.push('Lifestyle therapy essential');
    } else {
      recommendations.push('High-intensity statin therapy recommended');
      recommendations.push('Consider additional therapies (ezetimibe, PCSK9i)');
      recommendations.push('Aggressive lifestyle modification');
    }

    if (ckmeEnhanced) {
      recommendations.push('CKM-E factors present - enhanced monitoring needed');
    }

    const preventionStrategy = ckmeEnhanced ? 
      'Comprehensive CKM health approach with enhanced monitoring' :
      'Standard cardiovascular prevention approach';

    return {
      tenYearCVD: Math.round(tenYearCVD * 10) / 10,
      tenYearASCVD: Math.round(tenYearASCVD * 10) / 10,
      tenYearHeartFailure: Math.round(tenYearHeartFailure * 10) / 10,
      thirtyYearCVD: Math.round(thirtyYearCVD * 10) / 10,
      thirtyYearASCVD: Math.round(thirtyYearASCVD * 10) / 10,
      thirtyYearHeartFailure: Math.round(thirtyYearHeartFailure * 10) / 10,
      riskCategory,
      ckmeEnhanced,
      recommendations,
      preventionStrategy
    };
  };

  const handleCalculate = () => {
    if (!validateForm()) return;
    
    setIsCalculating(true);
    
    // Simulate advanced PREVENT risk calculation with loading animation
    setTimeout(() => {
      const calculatedResult = calculatePREVENTRisk();
      setResult(calculatedResult);
      setIsCalculating(false);
    }, 2200);
  };

  const handleReset = () => {
    setFormData({
      age: '',
      sex: '',
      race: '',
      totalCholesterol: '',
      hdlCholesterol: '',
      ldlCholesterol: '',
      systolicBP: '',
      diastolicBP: '',
      antihypertensiveMeds: false,
      diabetes: false,
      currentSmoker: false,
      eGFR: '',
      uacr: '',
      socialDeprivationIndex: ''
    });
    setResult(null);
    setErrors({});
    setIsCalculating(false);
    setCurrentStep(1);
  };

  const getRiskColor = (category: string) => {
    switch (category) {
      case 'low': return 'text-green-600';
      case 'borderline': return 'text-yellow-600';
      case 'intermediate': return 'text-orange-600';
      case 'high': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getRiskBgColor = (category: string) => {
    switch (category) {
      case 'low': return 'bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800';
      case 'borderline': return 'bg-yellow-50 border-yellow-200 dark:bg-yellow-900/20 dark:border-yellow-800';
      case 'intermediate': return 'bg-orange-50 border-orange-200 dark:bg-orange-900/20 dark:border-orange-800';
      case 'high': return 'bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800';
      default: return 'bg-gray-50 border-gray-200 dark:bg-gray-900/20 dark:border-gray-800';
    }
  };

  return (
    <CalculatorContainer
      title={t('calculators.cardiology.prevent.title')}
      subtitle={t('calculators.cardiology.prevent.subtitle')}
      icon={Star}
      gradient="cardiology"
      className="max-w-5xl mx-auto"
    >
      <div className="space-y-8">
        {/* PREVENT Alert */}
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 border-2 border-purple-200 dark:border-purple-800 rounded-2xl p-6">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl">
              <Brain className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-bold text-purple-800 dark:text-purple-200 mb-2">{t('calculators.cardiology.prevent.alert_title')}</h4>
              <p className="text-purple-700 dark:text-purple-300 leading-relaxed">
                {t('calculators.cardiology.prevent.alert_description')}
              </p>
              <div className="mt-3 inline-flex items-center space-x-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg px-3 py-1">
                <Star className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span className="text-xs font-semibold text-purple-700 dark:text-purple-300">{t('calculators.cardiology.prevent.alert_badge')}</span>
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
                  currentStep >= 1 ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  1
                </div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{t('calculators.cardiology.prevent.step_demographics')}</span>
              </div>
              <div className={`w-16 h-1 rounded-full transition-all duration-300 ${
                currentStep >= 2 ? 'bg-indigo-500' : 'bg-gray-200'
              }`}></div>
              <div className="flex items-center space-x-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                  currentStep >= 2 ? 'bg-indigo-500 text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  2
                </div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{t('calculators.cardiology.prevent.step_clinical')}</span>
              </div>
              <div className={`w-16 h-1 rounded-full transition-all duration-300 ${
                currentStep >= 3 ? 'bg-pink-500' : 'bg-gray-200'
              }`}></div>
              <div className="flex items-center space-x-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                  currentStep >= 3 ? 'bg-pink-500 text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  3
                </div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{t('calculators.cardiology.prevent.step_lab_values')}</span>
              </div>
              <div className={`w-16 h-1 rounded-full transition-all duration-300 ${
                currentStep >= 4 ? 'bg-blue-500' : 'bg-gray-200'
              }`}></div>
              <div className="flex items-center space-x-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                  currentStep >= 4 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  4
                </div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{t('calculators.cardiology.prevent.step_ckm_e')}</span>
              </div>
            </div>

            {/* Step 1: Demographics */}
            {currentStep === 1 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-2xl border border-purple-200 dark:border-purple-800">
                    <User className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{t('calculators.cardiology.prevent.demographics_title')}</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{t('calculators.cardiology.prevent.demographics_description')}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <CalculatorInput
                    label={t('calculators.cardiology.prevent.age_label')}
                    value={formData.age}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, age: e.target.value })}
                    type="number"
                    placeholder={t('calculators.cardiology.prevent.age_placeholder')}
                    min={30}
                    max={79}
                    unit={t('calculators.cardiology.prevent.unit_years')}
                    error={errors.age}
                    icon={User}
                  />

                  <CalculatorSelect
                    label={t('calculators.cardiology.prevent.sex_label')}
                    value={formData.sex}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setFormData({ ...formData, sex: e.target.value as 'male' | 'female' })}
                    options={[
                      { value: '', label: t('calculators.cardiology.prevent.sex_placeholder') },
                      { value: 'male', label: t('calculators.cardiology.prevent.sex_male') },
                      { value: 'female', label: t('calculators.cardiology.prevent.sex_female') },
                    ]}
                    error={errors.sex}
                    icon={User}
                  />

                  <CalculatorSelect
                    label={t('calculators.cardiology.prevent.race_label')}
                    value={formData.race}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setFormData({ ...formData, race: e.target.value as any })}
                    options={[
                      { value: '', label: t('calculators.cardiology.prevent.race_placeholder') },
                      { value: 'white', label: t('calculators.cardiology.prevent.race_white') },
                      { value: 'black', label: t('calculators.cardiology.prevent.race_black') },
                      { value: 'hispanic', label: t('calculators.cardiology.prevent.race_hispanic') },
                      { value: 'asian', label: t('calculators.cardiology.prevent.race_asian') },
                      { value: 'other', label: t('calculators.cardiology.prevent.race_other') },
                    ]}
                    error={errors.race}
                    icon={User}
                  />
                </div>

                <div className="flex justify-end">
                  <CalculatorButton
                    onClick={() => setCurrentStep(2)}
                    className="enhanced-calculator-button"
                  >
                    {t('calculators.cardiology.prevent.next_clinical_factors')}
                  </CalculatorButton>
                </div>
              </div>
            )}

            {/* Step 2: Clinical Factors & Blood Pressure */}
            {currentStep === 2 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-indigo-50 to-pink-50 dark:from-indigo-900/20 dark:to-pink-900/20 rounded-2xl border border-indigo-200 dark:border-indigo-800">
                    <Activity className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{t('calculators.cardiology.prevent.clinical_title')}</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{t('calculators.cardiology.prevent.clinical_description')}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <CalculatorInput
                    label={t('calculators.cardiology.prevent.systolic_bp_label')}
                    value={formData.systolicBP}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, systolicBP: e.target.value })}
                    type="number"
                    placeholder={t('calculators.cardiology.prevent.systolic_bp_placeholder')}
                    min={90}
                    max={200}
                    unit={t('calculators.cardiology.prevent.unit_mmhg')}
                    error={errors.systolicBP}
                    icon={TrendingUp}
                  />

                  <CalculatorInput
                    label={t('calculators.cardiology.prevent.diastolic_bp_label')}
                    value={formData.diastolicBP}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, diastolicBP: e.target.value })}
                    type="number"
                    placeholder={t('calculators.cardiology.prevent.diastolic_bp_placeholder')}
                    min={50}
                    max={120}
                    unit={t('calculators.cardiology.prevent.unit_mmhg')}
                    icon={TrendingUp}
                  />
                </div>

                {/* Clinical Risk Factors */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 flex items-center space-x-2">
                    <Stethoscope className="w-5 h-5 text-indigo-600" />
                    <span>{t('calculators.cardiology.prevent.clinical_risk_factors_title')}</span>
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <CalculatorCheckbox
                      label={t('calculators.cardiology.prevent.antihypertensive_meds_label')}
                      checked={formData.antihypertensiveMeds}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, antihypertensiveMeds: e.target.checked })}
                      description={t('calculators.cardiology.prevent.antihypertensive_meds_description')}
                      icon={Activity}
                    />

                    <CalculatorCheckbox
                      label={t('calculators.cardiology.prevent.diabetes_label')}
                      checked={formData.diabetes}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, diabetes: e.target.checked })}
                      description={t('calculators.cardiology.prevent.diabetes_description')}
                      icon={BarChart3}
                    />

                    <CalculatorCheckbox
                      label={t('calculators.cardiology.prevent.current_smoker_label')}
                      checked={formData.currentSmoker}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, currentSmoker: e.target.checked })}
                      description={t('calculators.cardiology.prevent.current_smoker_description')}
                      icon={AlertCircle}
                    />
                  </div>
                </div>

                <div className="flex justify-between">
                  <CalculatorButton
                    onClick={() => setCurrentStep(1)}
                    variant="outline"
                  >
                    {t('calculators.cardiology.prevent.back_button')}
                  </CalculatorButton>
                  <CalculatorButton
                    onClick={() => setCurrentStep(3)}
                    className="enhanced-calculator-button"
                  >
                    {t('calculators.cardiology.prevent.next_laboratory_values')}
                  </CalculatorButton>
                </div>
              </div>
            )}

            {/* Step 3: Laboratory Values */}
            {currentStep === 3 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-pink-50 to-blue-50 dark:from-pink-900/20 dark:to-blue-900/20 rounded-2xl border border-pink-200 dark:border-pink-800">
                    <BarChart3 className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{t('calculators.cardiology.prevent.lab_title')}</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{t('calculators.cardiology.prevent.lab_description')}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <CalculatorInput
                    label={t('calculators.cardiology.prevent.total_cholesterol_label')}
                    value={formData.totalCholesterol}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, totalCholesterol: e.target.value })}
                    type="number"
                    placeholder={t('calculators.cardiology.prevent.total_cholesterol_placeholder')}
                    min={100}
                    max={400}
                    unit={t('calculators.cardiology.prevent.unit_mg_dl')}
                    error={errors.totalCholesterol}
                    icon={BarChart3}
                  />

                  <CalculatorInput
                    label={t('calculators.cardiology.prevent.hdl_cholesterol_label')}
                    value={formData.hdlCholesterol}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, hdlCholesterol: e.target.value })}
                    type="number"
                    placeholder={t('calculators.cardiology.prevent.hdl_cholesterol_placeholder')}
                    min={20}
                    max={100}
                    unit={t('calculators.cardiology.prevent.unit_mg_dl')}
                    error={errors.hdlCholesterol}
                    icon={BarChart3}
                  />

                  <CalculatorInput
                    label={t('calculators.cardiology.prevent.ldl_cholesterol_label')}
                    value={formData.ldlCholesterol}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, ldlCholesterol: e.target.value })}
                    type="number"
                    placeholder={t('calculators.cardiology.prevent.ldl_cholesterol_placeholder')}
                    min={30}
                    max={300}
                    unit={t('calculators.cardiology.prevent.unit_mg_dl')}
                    icon={BarChart3}
                  />
                </div>

                <div className="flex justify-between">
                  <CalculatorButton
                    onClick={() => setCurrentStep(2)}
                    variant="outline"
                  >
                    {t('calculators.cardiology.prevent.back_button')}
                  </CalculatorButton>
                  <CalculatorButton
                    onClick={() => setCurrentStep(4)}
                    className="enhanced-calculator-button"
                  >
                    {t('calculators.cardiology.prevent.next_ckm_e_factors')}
                  </CalculatorButton>
                </div>
              </div>
            )}

            {/* Step 4: CKM-E Enhanced Factors */}
            {currentStep === 4 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl border border-blue-200 dark:border-blue-800">
                    <Star className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{t('calculators.cardiology.prevent.ckm_e_title')}</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{t('calculators.cardiology.prevent.ckm_e_description')}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <CalculatorInput
                    label={t('calculators.cardiology.prevent.egfr_label')}
                    value={formData.eGFR}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, eGFR: e.target.value })}
                    type="number"
                    placeholder={t('calculators.cardiology.prevent.egfr_placeholder')}
                    min={15}
                    max={150}
                    unit={t('calculators.cardiology.prevent.unit_ml_min')}
                    icon={BarChart3}
                  />

                  <CalculatorInput
                    label={t('calculators.cardiology.prevent.uacr_label')}
                    value={formData.uacr}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, uacr: e.target.value })}
                    type="number"
                    placeholder={t('calculators.cardiology.prevent.uacr_placeholder')}
                    min={0}
                    max={1000}
                    unit={t('calculators.cardiology.prevent.unit_mg_g')}
                    icon={BarChart3}
                  />

                  <CalculatorInput
                    label={t('calculators.cardiology.prevent.sdi_label')}
                    value={formData.socialDeprivationIndex}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, socialDeprivationIndex: e.target.value })}
                    type="number"
                    step={0.1}
                    placeholder={t('calculators.cardiology.prevent.sdi_placeholder')}
                    min={0}
                    max={1}
                    unit={t('calculators.cardiology.prevent.unit_score')}
                    icon={User}
                  />
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <Star className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200">{t('calculators.cardiology.prevent.ckm_e_info_title')}</h4>
                  </div>
                  <div className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                    <p>• <strong>eGFR:</strong> {t('calculators.cardiology.prevent.egfr_info')}</p>
                    <p>• <strong>UACR:</strong> {t('calculators.cardiology.prevent.uacr_info')}</p>
                    <p>• <strong>SDI:</strong> {t('calculators.cardiology.prevent.sdi_info')}</p>
                  </div>
                </div>

                <div className="flex justify-between">
                  <CalculatorButton
                    onClick={() => setCurrentStep(3)}
                    variant="outline"
                  >
                    {t('calculators.cardiology.prevent.back_button')}
                  </CalculatorButton>
                  <CalculatorButton
                    onClick={handleCalculate}
                    loading={isCalculating}
                    icon={Calculator}
                    size="lg"
                    className="enhanced-calculator-button"
                  >
                    {t('calculators.cardiology.prevent.calculate_prevent_risk')}
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
                title={t('calculators.cardiology.prevent.results_title')}
                value={`${result.riskCategory.charAt(0).toUpperCase() + result.riskCategory.slice(1)} Risk`}
                category={result.riskCategory as 'low' | 'intermediate' | 'high'}
                interpretation={result.preventionStrategy}
                icon={Star}
              >
                {/* Enhanced CKM Status */}
                {result.ckmeEnhanced && (
                  <div className="mb-6 p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl">
                    <div className="flex items-center space-x-2 mb-2">
                      <Star className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                      <span className="font-semibold text-purple-800 dark:text-purple-200">{t('calculators.cardiology.prevent.ckm_e_enhanced_title')}</span>
                    </div>
                    <p className="text-sm text-purple-700 dark:text-purple-300">
                      {t('calculators.cardiology.prevent.ckm_e_enhanced_description')}
                    </p>
                  </div>
                )}

                {/* 10-Year Risk Display */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <Target className="w-5 h-5 text-indigo-500" />
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100">{t('calculators.cardiology.prevent.ten_year_predictions_title')}</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-white/50 dark:bg-gray-800/50 rounded-2xl border border-white/20 dark:border-gray-700/20">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">{result.tenYearCVD}%</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">{t('calculators.cardiology.prevent.total_cvd')}</div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-purple-500 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${Math.min(result.tenYearCVD * 2, 100)}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-white/50 dark:bg-gray-800/50 rounded-2xl border border-white/20 dark:border-gray-700/20">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">{result.tenYearASCVD}%</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">{t('calculators.cardiology.prevent.ascvd')}</div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-indigo-500 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${Math.min(result.tenYearASCVD * 2, 100)}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-white/50 dark:bg-gray-800/50 rounded-2xl border border-white/20 dark:border-gray-700/20">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-pink-600 dark:text-pink-400 mb-1">{result.tenYearHeartFailure}%</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">{t('calculators.cardiology.prevent.heart_failure')}</div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-pink-500 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${Math.min(result.tenYearHeartFailure * 2, 100)}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 30-Year Risk Display */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <Clock className="w-5 h-5 text-blue-500" />
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100">{t('calculators.cardiology.prevent.thirty_year_predictions_title')}</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-900/30 rounded-xl border border-purple-200 dark:border-purple-800">
                      <div className="text-center">
                        <div className="text-xl font-bold text-purple-700 dark:text-purple-300">{result.thirtyYearCVD}%</div>
                        <div className="text-sm text-purple-600 dark:text-purple-400">{t('calculators.cardiology.prevent.total_cvd')}</div>
                      </div>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-900/30 rounded-xl border border-indigo-200 dark:border-indigo-800">
                      <div className="text-center">
                        <div className="text-xl font-bold text-indigo-700 dark:text-indigo-300">{result.thirtyYearASCVD}%</div>
                        <div className="text-sm text-indigo-600 dark:text-indigo-400">{t('calculators.cardiology.prevent.ascvd')}</div>
                      </div>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-900/30 rounded-xl border border-pink-200 dark:border-pink-800">
                      <div className="text-center">
                        <div className="text-xl font-bold text-pink-700 dark:text-pink-300">{result.thirtyYearHeartFailure}%</div>
                        <div className="text-sm text-pink-600 dark:text-pink-400">{t('calculators.cardiology.prevent.heart_failure')}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Risk Stratification */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-green-500" />
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100">{t('calculators.cardiology.prevent.risk_stratification_title')}</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                    <div className={`p-4 rounded-xl border-2 transition-all ${
                      result.riskCategory === 'low' ? 'border-green-300 bg-green-50 dark:bg-green-900/20' : 'border-green-200 bg-green-50/50 dark:bg-green-900/10'
                    }`}>
                      <div className="text-center">
                        <div className="text-sm font-semibold text-green-800 dark:text-green-200">{t('calculators.cardiology.prevent.low_risk')}</div>
                        <div className="text-xs text-green-600 dark:text-green-400">{t('calculators.cardiology.prevent.low_risk_range')}</div>
                      </div>
                    </div>
                    <div className={`p-4 rounded-xl border-2 transition-all ${
                      result.riskCategory === 'borderline' ? 'border-yellow-300 bg-yellow-50 dark:bg-yellow-900/20' : 'border-yellow-200 bg-yellow-50/50 dark:bg-yellow-900/10'
                    }`}>
                      <div className="text-center">
                        <div className="text-sm font-semibold text-yellow-800 dark:text-yellow-200">{t('calculators.cardiology.prevent.borderline_risk')}</div>
                        <div className="text-xs text-yellow-600 dark:text-yellow-400">{t('calculators.cardiology.prevent.borderline_risk_range')}</div>
                      </div>
                    </div>
                    <div className={`p-4 rounded-xl border-2 transition-all ${
                      result.riskCategory === 'intermediate' ? 'border-orange-300 bg-orange-50 dark:bg-orange-900/20' : 'border-orange-200 bg-orange-50/50 dark:bg-orange-900/10'
                    }`}>
                      <div className="text-center">
                        <div className="text-sm font-semibold text-orange-800 dark:text-orange-200">{t('calculators.cardiology.prevent.intermediate_risk')}</div>
                        <div className="text-xs text-orange-600 dark:text-orange-400">{t('calculators.cardiology.prevent.intermediate_risk_range')}</div>
                      </div>
                    </div>
                    <div className={`p-4 rounded-xl border-2 transition-all ${
                      result.riskCategory === 'high' ? 'border-red-300 bg-red-50 dark:bg-red-900/20' : 'border-red-200 bg-red-50/50 dark:bg-red-900/10'
                    }`}>
                      <div className="text-center">
                        <div className="text-sm font-semibold text-red-800 dark:text-red-200">{t('calculators.cardiology.prevent.high_risk')}</div>
                        <div className="text-xs text-red-600 dark:text-red-400">{t('calculators.cardiology.prevent.high_risk_range')}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Clinical Recommendations */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Stethoscope className="w-5 h-5 text-blue-500" />
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100">{t('calculators.cardiology.prevent.clinical_recommendations_title')}</h4>
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
                <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <Award className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    <h4 className="font-semibold text-purple-800 dark:text-purple-200">{t('calculators.cardiology.prevent.algorithm_title')}</h4>
                  </div>
                  <div className="text-sm text-purple-700 dark:text-purple-300">
                    {t('calculators.cardiology.prevent.algorithm_description')}
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
                  {t('calculators.cardiology.prevent.new_assessment')}
                </CalculatorButton>
                <CalculatorButton
                  onClick={() => setResult(null)}
                  variant="secondary"
                  size="lg"
                >
                  {t('calculators.cardiology.prevent.modify_inputs')}
                </CalculatorButton>
              </div>
            </div>
          )
        )}

        {/* Footer Information */}
        <div className="text-center pt-8 border-t border-white/20 dark:border-gray-800/20">
          <div className="flex items-center justify-center space-x-3 text-sm text-gray-600 dark:text-gray-400">
            <Info className="w-4 h-4" />
            <span>{t('calculators.cardiology.prevent.footer_description')}</span>
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-purple-600" />
              <span className="text-purple-600 font-semibold">{t('calculators.cardiology.prevent.footer_guidelines')}</span>
            </div>
          </div>
        </div>
      </div>
    </CalculatorContainer>
  );
}; 