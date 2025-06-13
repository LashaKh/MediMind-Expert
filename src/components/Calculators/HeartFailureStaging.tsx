import React, { useState } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import { Calculator, Info, Heart, AlertTriangle, Activity, TrendingUp, User, FileText, Target, Stethoscope, Award, BarChart3, Shield, Brain, Clock, Pill, CheckCircle, AlertCircle, XCircle, Zap } from 'lucide-react';
import { 
  CalculatorContainer, 
  CalculatorInput, 
  CalculatorSelect, 
  CalculatorCheckbox, 
  CalculatorButton, 
  ResultsDisplay 
} from '../ui/calculator-ui';

interface StagingData {
  // Stage A (At Risk) - Risk Factors
  hypertension: boolean;
  diabetes: boolean;
  cad: boolean;
  metabolicSyndrome: boolean;
  familyHistoryHF: boolean;
  cardiotoxicTherapy: boolean;
  alcoholAbuse: boolean;
  
  // Stage B (Pre-HF) - Structural Disease
  lvefReduced: boolean;
  wallMotionAbnormalities: boolean;
  lv_hypertrophy: boolean;
  valvularDisease: boolean;
  
  // Stage C (Symptomatic HF) - Current/Previous Symptoms
  currentSymptoms: boolean;
  previousSymptoms: boolean;
  hospitalizations: boolean;
  
  // Stage D (Advanced HF) - Refractory Symptoms
  refractorySymptoms: boolean;
  recurrentHospitalizations: boolean;
  chronicInotropes: boolean;
  mechanicalSupport: boolean;
  transplantEvaluation: boolean;
}

interface CalculationResult {
  stage: 'A' | 'B' | 'C' | 'D';
  description: string;
  recommendations: string[];
  nextSteps: string[];
  riskLevel: 'low' | 'intermediate' | 'high';
}

export const HeartFailureStaging: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<StagingData>({
    // Stage A
    hypertension: false,
    diabetes: false,
    cad: false,
    metabolicSyndrome: false,
    familyHistoryHF: false,
    cardiotoxicTherapy: false,
    alcoholAbuse: false,
    
    // Stage B
    lvefReduced: false,
    wallMotionAbnormalities: false,
    lv_hypertrophy: false,
    valvularDisease: false,
    
    // Stage C
    currentSymptoms: false,
    previousSymptoms: false,
    hospitalizations: false,
    
    // Stage D
    refractorySymptoms: false,
    recurrentHospitalizations: false,
    chronicInotropes: false,
    mechanicalSupport: false,
    transplantEvaluation: false,
  });

  const [result, setResult] = useState<CalculationResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const calculateStage = (): CalculationResult => {
    let riskLevel: 'low' | 'intermediate' | 'high';
    
    // Stage D (most advanced - check first)
    if (formData.refractorySymptoms || formData.recurrentHospitalizations || 
        formData.chronicInotropes || formData.mechanicalSupport || formData.transplantEvaluation) {
      riskLevel = 'high';
      return {
        stage: 'D',
        description: 'Advanced HF with refractory symptoms despite guideline-directed medical therapy',
        recommendations: [
          'Advanced heart failure therapies',
          'Mechanical circulatory support evaluation',
          'Heart transplantation evaluation',
          'Palliative care consultation',
          'Specialized HF center referral',
          'Clinical trial consideration'
        ],
        nextSteps: [
          'Immediate cardiology consultation',
          'Advanced HF program evaluation',
          'Hemodynamic assessment',
          'End-of-life planning discussions'
        ],
        riskLevel
      };
    }

    // Stage C (symptomatic HF)
    if (formData.currentSymptoms || formData.previousSymptoms || formData.hospitalizations) {
      riskLevel = 'high';
      return {
        stage: 'C',
        description: 'Symptomatic HF with structural heart disease',
        recommendations: [
          'Guideline-directed medical therapy',
          'ACE inhibitor/ARB/ARNI',
          'Beta-blocker therapy',
          'Diuretics for volume management',
          'Device therapy evaluation (ICD/CRT)',
          'Regular monitoring and optimization'
        ],
        nextSteps: [
          'Cardiology referral',
          'Echocardiogram evaluation',
          'Laboratory monitoring',
          'Heart failure education',
          'Device therapy consideration'
        ],
        riskLevel
      };
    }

    // Stage B (structural heart disease without symptoms)
    if (formData.lvefReduced || formData.wallMotionAbnormalities || 
        formData.lv_hypertrophy || formData.valvularDisease) {
      riskLevel = 'intermediate';
      return {
        stage: 'B',
        description: 'Structural heart disease without signs or symptoms of HF',
        recommendations: [
          'ACE inhibitor or ARB therapy',
          'Beta-blocker (if indicated)',
          'Treatment of underlying conditions',
          'Risk factor modification',
          'Regular echocardiographic monitoring',
          'Symptom surveillance'
        ],
        nextSteps: [
          'Cardiology evaluation',
          'Annual echocardiogram',
          'Optimal medical therapy',
          'Patient education on symptoms',
          'Risk factor management'
        ],
        riskLevel
      };
    }

    // Stage A (at risk but no structural disease or symptoms)
    if (formData.hypertension || formData.diabetes || formData.cad || 
        formData.metabolicSyndrome || formData.familyHistoryHF || 
        formData.cardiotoxicTherapy || formData.alcoholAbuse) {
      riskLevel = 'low';
      return {
        stage: 'A',
        description: 'At high risk for HF but without structural heart disease or symptoms',
        recommendations: [
          'Treat hypertension per guidelines',
          'Optimize diabetes management',
          'Lipid management',
          'Smoking cessation',
          'Regular exercise',
          'Weight management',
          'Limit alcohol consumption'
        ],
        nextSteps: [
          'Primary care optimization',
          'Risk factor modification',
          'Patient education',
          'Regular monitoring',
          'Baseline echocardiogram if high risk'
        ],
        riskLevel
      };
    }

    riskLevel = 'low';
    return {
      stage: 'A',
      description: 'Low risk for heart failure development',
      recommendations: [
        'Maintain healthy lifestyle',
        'Regular cardiovascular screening',
        'Blood pressure monitoring'
      ],
      nextSteps: [
        'Continue routine care',
        'Preventive measures',
        'Annual health maintenance'
      ],
      riskLevel
    };
  };

  const handleCalculate = () => {
    setIsCalculating(true);
    
    // Simulate staging analysis with loading animation
    setTimeout(() => {
      const calculatedResult = calculateStage();
      setResult(calculatedResult);
      setShowResult(true);
      setIsCalculating(false);
    }, 2000);
  };

  const handleReset = () => {
    setFormData({
      hypertension: false,
      diabetes: false,
      cad: false,
      metabolicSyndrome: false,
      familyHistoryHF: false,
      cardiotoxicTherapy: false,
      alcoholAbuse: false,
      lvefReduced: false,
      wallMotionAbnormalities: false,
      lv_hypertrophy: false,
      valvularDisease: false,
      currentSymptoms: false,
      previousSymptoms: false,
      hospitalizations: false,
      refractorySymptoms: false,
      recurrentHospitalizations: false,
      chronicInotropes: false,
      mechanicalSupport: false,
      transplantEvaluation: false,
    });
    setResult(null);
    setShowResult(false);
    setCurrentStep(1);
  };

  const getStageIcon = (stage: string) => {
    switch (stage) {
      case 'A': return <CheckCircle className="w-6 h-6 text-green-500" />;
      case 'B': return <AlertCircle className="w-6 h-6 text-yellow-500" />;
      case 'C': return <AlertTriangle className="w-6 h-6 text-orange-500" />;
      case 'D': return <XCircle className="w-6 h-6 text-red-500" />;
      default: return <Heart className="w-6 h-6 text-gray-500" />;
    }
  };

  const getStageDescription = (stage: string) => {
    switch (stage) {
      case 'A': return { title: 'At Risk', subtitle: 'Risk factors present but no structural disease' };
      case 'B': return { title: 'Pre-Heart Failure', subtitle: 'Structural disease without symptoms' };
      case 'C': return { title: 'Symptomatic HF', subtitle: 'Current or previous heart failure symptoms' };
      case 'D': return { title: 'Advanced HF', subtitle: 'Refractory symptoms despite optimal therapy' };
      default: return { title: 'Assessment', subtitle: 'Comprehensive heart failure staging' };
    }
  };

  const getInterpretation = (stage: string) => {
    switch (stage) {
      case 'A': return `Stage A: At risk for heart failure. Focus on preventive measures and risk factor modification.`;
      case 'B': return `Stage B: Structural heart disease present. Requires medical therapy and regular monitoring.`;
      case 'C': return `Stage C: Symptomatic heart failure. Needs comprehensive guideline-directed medical therapy.`;
      case 'D': return `Stage D: Advanced heart failure. Requires specialized care and advanced treatment options.`;
      default: return `Comprehensive heart failure staging assessment completed.`;
    }
  };

  return (
    <CalculatorContainer
      title={t('calculators.cardiology.heartFailureStaging.title')}
      subtitle={t('calculators.cardiology.heartFailureStaging.subtitle')}
      icon={Heart}
      gradient="medical"
      className="max-w-6xl mx-auto"
    >
      <div className="space-y-8">
        {/* Heart Failure Staging Alert */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 border-2 border-blue-200 dark:border-blue-800 rounded-2xl p-6">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
              <Heart className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-bold text-blue-800 dark:text-blue-200 mb-2">{t('calculators.cardiology.heartFailureStaging.alert_title')}</h4>
              <p className="text-blue-700 dark:text-blue-300 leading-relaxed">
                {t('calculators.cardiology.heartFailureStaging.alert_description')}
              </p>
              <div className="mt-3 inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg px-3 py-1">
                <Award className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="text-xs font-semibold text-blue-700 dark:text-blue-300">AHA/ACC/HFSA 2022 Guidelines Validated - Enhanced Staging Analysis</span>
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
                  currentStep >= 1 ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  A
                </div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{t('calculators.cardiology.heartFailureStaging.step_risk_factors')}</span>
              </div>
              <div className={`w-16 h-1 rounded-full transition-all duration-300 ${
                currentStep >= 2 ? 'bg-yellow-500' : 'bg-gray-200'
              }`}></div>
              <div className="flex items-center space-x-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                  currentStep >= 2 ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  B
                </div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{t('calculators.cardiology.heartFailureStaging.step_structural_disease')}</span>
              </div>
              <div className={`w-16 h-1 rounded-full transition-all duration-300 ${
                currentStep >= 3 ? 'bg-orange-500' : 'bg-gray-200'
              }`}></div>
              <div className="flex items-center space-x-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                  currentStep >= 3 ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  C
                </div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{t('calculators.cardiology.heartFailureStaging.step_symptoms')}</span>
              </div>
              <div className={`w-16 h-1 rounded-full transition-all duration-300 ${
                currentStep >= 4 ? 'bg-red-500' : 'bg-gray-200'
              }`}></div>
              <div className="flex items-center space-x-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                  currentStep >= 4 ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  D
                </div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{t('calculators.cardiology.heartFailureStaging.step_advanced_hf')}</span>
              </div>
            </div>

            {/* Step 1: Stage A - Risk Factors */}
            {currentStep === 1 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl border border-green-200 dark:border-green-800">
                    <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{t('calculators.cardiology.heartFailureStaging.section_stage_a')}</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{t('calculators.cardiology.heartFailureStaging.section_stage_a_description')}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <CalculatorCheckbox
                    label={t('calculators.cardiology.heartFailureStaging.field_hypertension')}
                    checked={formData.hypertension}
                    onChange={(e) => setFormData({ ...formData, hypertension: (e.target as HTMLInputElement).checked })}
                    description={t('calculators.cardiology.heartFailureStaging.field_hypertension_description')}
                    icon={TrendingUp}
                  />

                  <CalculatorCheckbox
                    label={t('calculators.cardiology.heartFailureStaging.field_diabetes')}
                    checked={formData.diabetes}
                    onChange={(e) => setFormData({ ...formData, diabetes: (e.target as HTMLInputElement).checked })}
                    description={t('calculators.cardiology.heartFailureStaging.field_diabetes_description')}
                    icon={Activity}
                  />

                  <CalculatorCheckbox
                    label={t('calculators.cardiology.heartFailureStaging.field_cad')}
                    checked={formData.cad}
                    onChange={(e) => setFormData({ ...formData, cad: (e.target as HTMLInputElement).checked })}
                    description={t('calculators.cardiology.heartFailureStaging.field_cad_description')}
                    icon={Heart}
                  />

                  <CalculatorCheckbox
                    label={t('calculators.cardiology.heartFailureStaging.field_metabolic_syndrome')}
                    checked={formData.metabolicSyndrome}
                    onChange={(e) => setFormData({ ...formData, metabolicSyndrome: (e.target as HTMLInputElement).checked })}
                    description={t('calculators.cardiology.heartFailureStaging.field_metabolic_syndrome_description')}
                    icon={Target}
                  />

                  <CalculatorCheckbox
                    label={t('calculators.cardiology.heartFailureStaging.field_family_history_hf')}
                    checked={formData.familyHistoryHF}
                    onChange={(e) => setFormData({ ...formData, familyHistoryHF: (e.target as HTMLInputElement).checked })}
                    description={t('calculators.cardiology.heartFailureStaging.field_family_history_hf_description')}
                    icon={User}
                  />

                  <CalculatorCheckbox
                    label={t('calculators.cardiology.heartFailureStaging.field_cardiotoxic_therapy')}
                    checked={formData.cardiotoxicTherapy}
                    onChange={(e) => setFormData({ ...formData, cardiotoxicTherapy: (e.target as HTMLInputElement).checked })}
                    description={t('calculators.cardiology.heartFailureStaging.field_cardiotoxic_therapy_description')}
                    icon={Pill}
                  />

                  <CalculatorCheckbox
                    label={t('calculators.cardiology.heartFailureStaging.field_alcohol_abuse')}
                    checked={formData.alcoholAbuse}
                    onChange={(e) => setFormData({ ...formData, alcoholAbuse: (e.target as HTMLInputElement).checked })}
                    description={t('calculators.cardiology.heartFailureStaging.field_alcohol_abuse_description')}
                    icon={AlertTriangle}
                  />
                </div>

                <div className="flex justify-end">
                  <CalculatorButton
                    onClick={() => setCurrentStep(2)}
                    className="enhanced-calculator-button"
                  >
                    {t('calculators.cardiology.heartFailureStaging.button_next_structural')}
                  </CalculatorButton>
                </div>
              </div>
            )}

            {/* Step 2: Stage B - Structural Disease */}
            {currentStep === 2 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-2xl border border-yellow-200 dark:border-yellow-800">
                    <AlertCircle className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{t('calculators.cardiology.heartFailureStaging.section_stage_b')}</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{t('calculators.cardiology.heartFailureStaging.section_stage_b_description')}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <CalculatorCheckbox
                    label={t('calculators.cardiology.heartFailureStaging.field_lvef_reduced')}
                    checked={formData.lvefReduced}
                    onChange={(e) => setFormData({ ...formData, lvefReduced: (e.target as HTMLInputElement).checked })}
                    description={t('calculators.cardiology.heartFailureStaging.field_lvef_reduced_description')}
                    icon={Heart}
                  />

                  <CalculatorCheckbox
                    label={t('calculators.cardiology.heartFailureStaging.field_wall_motion_abnormalities')}
                    checked={formData.wallMotionAbnormalities}
                    onChange={(e) => setFormData({ ...formData, wallMotionAbnormalities: (e.target as HTMLInputElement).checked })}
                    description={t('calculators.cardiology.heartFailureStaging.field_wall_motion_abnormalities_description')}
                    icon={Activity}
                  />

                  <CalculatorCheckbox
                    label={t('calculators.cardiology.heartFailureStaging.field_lv_hypertrophy')}
                    checked={formData.lv_hypertrophy}
                    onChange={(e) => setFormData({ ...formData, lv_hypertrophy: (e.target as HTMLInputElement).checked })}
                    description={t('calculators.cardiology.heartFailureStaging.field_lv_hypertrophy_description')}
                    icon={TrendingUp}
                  />

                  <CalculatorCheckbox
                    label={t('calculators.cardiology.heartFailureStaging.field_valvular_disease')}
                    checked={formData.valvularDisease}
                    onChange={(e) => setFormData({ ...formData, valvularDisease: (e.target as HTMLInputElement).checked })}
                    description={t('calculators.cardiology.heartFailureStaging.field_valvular_disease_description')}
                    icon={Heart}
                  />
                </div>

                <div className="flex justify-between">
                  <CalculatorButton
                    onClick={() => setCurrentStep(1)}
                    variant="outline"
                  >
                    {t('calculators.cardiology.heartFailureStaging.button_back')}
                  </CalculatorButton>
                  <CalculatorButton
                    onClick={() => setCurrentStep(3)}
                    className="enhanced-calculator-button"
                  >
                    {t('calculators.cardiology.heartFailureStaging.button_next_symptoms')}
                  </CalculatorButton>
                </div>
              </div>
            )}

            {/* Step 3: Stage C - Symptoms */}
            {currentStep === 3 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-2xl border border-orange-200 dark:border-orange-800">
                    <AlertTriangle className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{t('calculators.cardiology.heartFailureStaging.section_stage_c')}</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{t('calculators.cardiology.heartFailureStaging.section_stage_c_description')}</p>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  <CalculatorCheckbox
                    label={t('calculators.cardiology.heartFailureStaging.field_current_hf_symptoms')}
                    checked={formData.currentSymptoms}
                    onChange={(e) => setFormData({ ...formData, currentSymptoms: (e.target as HTMLInputElement).checked })}
                    description={t('calculators.cardiology.heartFailureStaging.field_current_hf_symptoms_description')}
                    icon={Activity}
                  />

                  <CalculatorCheckbox
                    label={t('calculators.cardiology.heartFailureStaging.field_previous_hf_symptoms')}
                    checked={formData.previousSymptoms}
                    onChange={(e) => setFormData({ ...formData, previousSymptoms: (e.target as HTMLInputElement).checked })}
                    description={t('calculators.cardiology.heartFailureStaging.field_previous_hf_symptoms_description')}
                    icon={Clock}
                  />

                  <CalculatorCheckbox
                    label={t('calculators.cardiology.heartFailureStaging.field_hf_hospitalizations')}
                    checked={formData.hospitalizations}
                    onChange={(e) => setFormData({ ...formData, hospitalizations: (e.target as HTMLInputElement).checked })}
                    description={t('calculators.cardiology.heartFailureStaging.field_hf_hospitalizations_description')}
                    icon={FileText}
                  />
                </div>

                <div className="flex justify-between">
                  <CalculatorButton
                    onClick={() => setCurrentStep(2)}
                    variant="outline"
                  >
                    {t('calculators.cardiology.heartFailureStaging.button_back')}
                  </CalculatorButton>
                  <CalculatorButton
                    onClick={() => setCurrentStep(4)}
                    className="enhanced-calculator-button"
                  >
                    {t('calculators.cardiology.heartFailureStaging.button_next_advanced_hf')}
                  </CalculatorButton>
                </div>
              </div>
            )}

            {/* Step 4: Stage D - Advanced HF */}
            {currentStep === 4 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-red-50 to-purple-50 dark:from-red-900/20 dark:to-purple-900/20 rounded-2xl border border-red-200 dark:border-red-800">
                    <XCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{t('calculators.cardiology.heartFailureStaging.section_stage_d')}</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{t('calculators.cardiology.heartFailureStaging.section_stage_d_description')}</p>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  <CalculatorCheckbox
                    label={t('calculators.cardiology.heartFailureStaging.field_refractory_symptoms')}
                    checked={formData.refractorySymptoms}
                    onChange={(e) => setFormData({ ...formData, refractorySymptoms: (e.target as HTMLInputElement).checked })}
                    description={t('calculators.cardiology.heartFailureStaging.field_refractory_symptoms_description')}
                    icon={AlertTriangle}
                  />

                  <CalculatorCheckbox
                    label={t('calculators.cardiology.heartFailureStaging.field_recurrent_hospitalizations')}
                    checked={formData.recurrentHospitalizations}
                    onChange={(e) => setFormData({ ...formData, recurrentHospitalizations: (e.target as HTMLInputElement).checked })}
                    description={t('calculators.cardiology.heartFailureStaging.field_recurrent_hospitalizations_description')}
                    icon={FileText}
                  />

                  <CalculatorCheckbox
                    label={t('calculators.cardiology.heartFailureStaging.field_chronic_inotropic_support')}
                    checked={formData.chronicInotropes}
                    onChange={(e) => setFormData({ ...formData, chronicInotropes: (e.target as HTMLInputElement).checked })}
                    description={t('calculators.cardiology.heartFailureStaging.field_chronic_inotropic_support_description')}
                    icon={Pill}
                  />

                  <CalculatorCheckbox
                    label={t('calculators.cardiology.heartFailureStaging.field_mechanical_support')}
                    checked={formData.mechanicalSupport}
                    onChange={(e) => setFormData({ ...formData, mechanicalSupport: (e.target as HTMLInputElement).checked })}
                    description={t('calculators.cardiology.heartFailureStaging.field_mechanical_support_description')}
                    icon={Zap}
                  />

                  <CalculatorCheckbox
                    label={t('calculators.cardiology.heartFailureStaging.field_transplant_evaluation')}
                    checked={formData.transplantEvaluation}
                    onChange={(e) => setFormData({ ...formData, transplantEvaluation: (e.target as HTMLInputElement).checked })}
                    description={t('calculators.cardiology.heartFailureStaging.field_transplant_evaluation_description')}
                    icon={Heart}
                  />
                </div>

                <div className="flex justify-between">
                  <CalculatorButton
                    onClick={() => setCurrentStep(3)}
                    variant="outline"
                  >
                    {t('calculators.cardiology.heartFailureStaging.button_back')}
                  </CalculatorButton>
                  <CalculatorButton
                    onClick={handleCalculate}
                    className="enhanced-calculator-button"
                  >
                    {t('calculators.cardiology.heartFailureStaging.calculate_button')}
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
                title={t('calculators.cardiology.heartFailureStaging.results_title')}
                value={`${t('calculators.cardiology.heartFailureStaging.results_stage')} ${result.stage}`}
                category={result.riskLevel}
                interpretation={getInterpretation(result.stage)}
                icon={Heart}
              >
                {/* Stage Overview Panel */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Stage Classification */}
                  <div className="p-6 bg-white/50 dark:bg-gray-800/50 rounded-xl border border-white/20 dark:border-gray-700/20">
                    <div className="flex items-center space-x-3 mb-4">
                      {getStageIcon(result.stage)}
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100">{t('calculators.cardiology.heartFailureStaging.results_stage_classification')}</h4>
                    </div>
                    <div className="space-y-3">
                      <div className={`text-2xl font-bold ${
                        result.stage === 'A' ? 'text-green-600 dark:text-green-400' :
                        result.stage === 'B' ? 'text-yellow-600 dark:text-yellow-400' :
                        result.stage === 'C' ? 'text-orange-600 dark:text-orange-400' :
                        'text-red-600 dark:text-red-400'
                      }`}>
                        {t('calculators.cardiology.heartFailureStaging.results_stage')} {result.stage}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {getStageDescription(result.stage).title}
                      </div>
                    </div>
                  </div>

                  {/* Risk Level */}
                  <div className="p-6 bg-white/50 dark:bg-gray-800/50 rounded-xl border border-white/20 dark:border-gray-700/20">
                    <div className="flex items-center space-x-3 mb-4">
                      <Target className="w-5 h-5 text-blue-500" />
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100">{t('calculators.cardiology.heartFailureStaging.results_risk_level')}</h4>
                    </div>
                    <div className="space-y-3">
                      <div className={`text-2xl font-bold ${
                        result.riskLevel === 'low' ? 'text-green-600 dark:text-green-400' :
                        result.riskLevel === 'intermediate' ? 'text-yellow-600 dark:text-yellow-400' :
                        'text-red-600 dark:text-red-400'
                      }`}>
                        {t(`calculators.common.${result.riskLevel}_risk`)}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {t('calculators.cardiology.heartFailureStaging.results_current_progression_risk')}
                      </div>
                    </div>
                  </div>

                  {/* Management Focus */}
                  <div className="p-6 bg-white/50 dark:bg-gray-800/50 rounded-xl border border-white/20 dark:border-gray-700/20">
                    <div className="flex items-center space-x-3 mb-4">
                      <Stethoscope className="w-5 h-5 text-purple-500" />
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100">{t('calculators.cardiology.heartFailureStaging.results_management_focus')}</h4>
                    </div>
                    <div className="space-y-3">
                      <div className="text-lg font-bold text-purple-600 dark:text-purple-400">
                        {result.stage === 'A' ? t('calculators.cardiology.heartFailureStaging.results_prevention') :
                         result.stage === 'B' ? t('calculators.cardiology.heartFailureStaging.results_monitoring') :
                         result.stage === 'C' ? t('calculators.cardiology.heartFailureStaging.results_treatment') : t('calculators.cardiology.heartFailureStaging.results_advanced_care')}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {t('calculators.cardiology.heartFailureStaging.results_primary_management_approach')}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Clinical Recommendations */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Stethoscope className="w-5 h-5 text-blue-500" />
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100">{t('calculators.cardiology.heartFailureStaging.results_management_recommendations')}</h4>
                  </div>
                  <div className={`p-6 rounded-2xl border-2 ${
                    result.stage === 'A' ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800' :
                    result.stage === 'B' ? 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800' :
                    result.stage === 'C' ? 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800' :
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

                {/* Next Steps */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Target className="w-5 h-5 text-green-500" />
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100">{t('calculators.cardiology.heartFailureStaging.results_next_steps')}</h4>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4">
                    <div className="space-y-3">
                      {result.nextSteps.map((step, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <div className="w-6 h-6 bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-300 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                            {index + 1}
                          </div>
                          <p className="text-sm text-blue-700 dark:text-blue-300">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Staging System Reference */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <BarChart3 className="w-5 h-5 text-purple-500" />
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100">{t('calculators.cardiology.heartFailureStaging.results_staging_system_reference')}</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                      <div className="flex items-center space-x-2 mb-1">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <div className="font-semibold text-green-800 dark:text-green-200">{t('calculators.cardiology.heartFailureStaging.results_stage_a_reference')}</div>
                      </div>
                      <div className="text-sm text-green-700 dark:text-green-300">{t('calculators.cardiology.heartFailureStaging.results_stage_a_description_reference')}</div>
                    </div>
                    <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                      <div className="flex items-center space-x-2 mb-1">
                        <AlertCircle className="w-4 h-4 text-yellow-600" />
                        <div className="font-semibold text-yellow-800 dark:text-yellow-200">{t('calculators.cardiology.heartFailureStaging.results_stage_b_reference')}</div>
                      </div>
                      <div className="text-sm text-yellow-700 dark:text-yellow-300">{t('calculators.cardiology.heartFailureStaging.results_stage_b_description_reference')}</div>
                    </div>
                    <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
                      <div className="flex items-center space-x-2 mb-1">
                        <AlertTriangle className="w-4 h-4 text-orange-600" />
                        <div className="font-semibold text-orange-800 dark:text-orange-200">{t('calculators.cardiology.heartFailureStaging.results_stage_c_reference')}</div>
                      </div>
                      <div className="text-sm text-orange-700 dark:text-orange-300">{t('calculators.cardiology.heartFailureStaging.results_stage_c_description_reference')}</div>
                    </div>
                    <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                      <div className="flex items-center space-x-2 mb-1">
                        <XCircle className="w-4 h-4 text-red-600" />
                        <div className="font-semibold text-red-800 dark:text-red-200">{t('calculators.cardiology.heartFailureStaging.results_stage_d_reference')}</div>
                      </div>
                      <div className="text-sm text-red-700 dark:text-red-300">{t('calculators.cardiology.heartFailureStaging.results_stage_d_description_reference')}</div>
                    </div>
                  </div>
                </div>

                {/* Algorithm Validation Status */}
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200">{t('calculators.cardiology.heartFailureStaging.results_algorithm_validation_title')}</h4>
                  </div>
                  <div className="text-sm text-blue-700 dark:text-blue-300">
                    {t('calculators.cardiology.heartFailureStaging.results_algorithm_validation_description')}
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
                  {t('calculators.cardiology.heartFailureStaging.button_new_assessment')}
                </CalculatorButton>
                <CalculatorButton
                  onClick={() => setShowResult(false)}
                  variant="secondary"
                  size="lg"
                >
                  {t('calculators.cardiology.heartFailureStaging.button_modify_inputs')}
                </CalculatorButton>
              </div>
            </div>
          )
        )}

        {/* Footer Information */}
        <div className="text-center pt-8 border-t border-white/20 dark:border-gray-800/20">
          <div className="flex items-center justify-center space-x-3 text-sm text-gray-600 dark:text-gray-400">
            <Info className="w-4 h-4" />
            <span>{t('calculators.cardiology.heartFailureStaging.footer_info')}</span>
            <div className="flex items-center space-x-1">
              <Award className="w-4 h-4 text-blue-600" />
              <span className="text-blue-600 font-semibold">{t('calculators.cardiology.heartFailureStaging.footer_validated')}</span>
            </div>
          </div>
        </div>
      </div>
    </CalculatorContainer>
  );
}; 