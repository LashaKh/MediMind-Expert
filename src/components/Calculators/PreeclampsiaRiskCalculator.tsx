import React, { useState } from 'react';
import { Calculator, Info, AlertTriangle, CheckCircle, Star, User, Activity, BarChart3, Stethoscope, Award, Shield, Clock, Target, Heart, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { 
  CalculatorContainer, 
  CalculatorInput, 
  CalculatorSelect, 
  CalculatorCheckbox, 
  CalculatorButton, 
  ResultsDisplay 
} from '../ui/calculator-ui';
import { CalculatorResultShare } from './CalculatorResultShare';
import { calculatePreeclampsiaRisk, validateOBGYNInput } from '../../services/obgynCalculatorService';
import { PreeclampsiaRiskInput, PreeclampsiaRiskResult } from '../../types/obgyn-calculators';

interface FormData {
  maternalAge: string;
  nulliparity: boolean;
  previousPreeclampsia: boolean;
  familyHistory: boolean;
  chronicHypertension: boolean;
  diabetes: boolean;
  multipleGestation: boolean;
  bmi: string;
  meanArterialPressure: string;
  uterineArteryPI: string;
  plgf: string;
  pappA: string;
}

export const PreeclampsiaRiskCalculator: React.FC = () => {
  const [activeTab, setActiveTab] = useState('calculator');
  const [formData, setFormData] = useState<FormData>({
    maternalAge: '',
    nulliparity: false,
    previousPreeclampsia: false,
    familyHistory: false,
    chronicHypertension: false,
    diabetes: false,
    multipleGestation: false,
    bmi: '',
    meanArterialPressure: '',
    uterineArteryPI: '',
    plgf: '',
    pappA: ''
  });
  
  const [result, setResult] = useState<PreeclampsiaRiskResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    // Maternal age validation
    if (!formData.maternalAge) {
      newErrors.maternalAge = 'Maternal age is required';
    } else {
      const age = parseInt(formData.maternalAge);
      if (isNaN(age) || age < 12 || age > 55) {
        newErrors.maternalAge = 'Maternal age must be between 12-55 years';
      }
    }

    // BMI validation
    if (!formData.bmi) {
      newErrors.bmi = 'BMI is required';
    } else {
      const bmi = parseFloat(formData.bmi);
      if (isNaN(bmi) || bmi < 15 || bmi > 60) {
        newErrors.bmi = 'BMI must be between 15-60 kg/m²';
      }
    }

    // Optional parameters validation
    if (formData.meanArterialPressure) {
      const map = parseFloat(formData.meanArterialPressure);
      if (isNaN(map) || map < 60 || map > 150) {
        newErrors.meanArterialPressure = 'Mean arterial pressure must be between 60-150 mmHg';
      }
    }

    if (formData.uterineArteryPI) {
      const pi = parseFloat(formData.uterineArteryPI);
      if (isNaN(pi) || pi < 0.5 || pi > 3.0) {
        newErrors.uterineArteryPI = 'Uterine artery PI must be between 0.5-3.0';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCalculate = () => {
    if (!validateForm()) return;

    setIsCalculating(true);
    
    // Professional preeclampsia risk calculation with loading animation
    setTimeout(() => {
      try {
        const input: PreeclampsiaRiskInput = {
          maternalAge: formData.maternalAge,
          nulliparity: formData.nulliparity,
          previousPreeclampsia: formData.previousPreeclampsia,
          familyHistory: formData.familyHistory,
          chronicHypertension: formData.chronicHypertension,
          diabetes: formData.diabetes,
          multipleGestation: formData.multipleGestation,
          bmi: formData.bmi,
          meanArterialPressure: formData.meanArterialPressure || undefined,
          uterineArteryPI: formData.uterineArteryPI || undefined,
          plgf: formData.plgf || undefined,
          pappA: formData.pappA || undefined,
          calculationDate: new Date().toISOString()
        };

        // Use the service validation
        const validation = validateOBGYNInput('preeclampsia-risk', input);
        if (!validation.isValid) {
          setErrors(validation.errors.reduce((acc, error, index) => ({ ...acc, [`error_${index}`]: error }), {}));
          setIsCalculating(false);
          return;
        }

        const calculationResult = calculatePreeclampsiaRisk(input);
        setResult(calculationResult);
        
      } catch (error) {
        setErrors({ calculation: error instanceof Error ? error.message : 'Calculation failed' });
      } finally {
        setIsCalculating(false);
      }
    }, 2000); // Professional OB/GYN preeclampsia calculation simulation
  };

  const handleReset = () => {
    setFormData({
      maternalAge: '',
      nulliparity: false,
      previousPreeclampsia: false,
      familyHistory: false,
      chronicHypertension: false,
      diabetes: false,
      multipleGestation: false,
      bmi: '',
      meanArterialPressure: '',
      uterineArteryPI: '',
      plgf: '',
      pappA: ''
    });
    setResult(null);
    setErrors({});
    setIsCalculating(false);
    setCurrentStep(1);
  };

  const formatRiskPercentage = (value: number): string => {
    return `${value.toFixed(1)}%`;
  };

  const getConfidenceColor = (category: string) => {
    switch (category) {
      case 'low': return 'text-green-600 bg-green-50 border-green-200';
      case 'moderate': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'high': return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'very-high': return 'text-red-600 bg-red-50 border-red-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getRiskBgColor = (category: string) => {
    switch (category) {
      case 'low': return 'bg-green-50 border-green-200 text-green-800';
      case 'moderate': return 'bg-yellow-50 border-yellow-200 text-yellow-800';
      case 'high': return 'bg-orange-50 border-orange-200 text-orange-800';
      case 'very-high': return 'bg-red-50 border-red-200 text-red-800';
      default: return 'bg-gray-50 border-gray-200 text-gray-800';
    }
  };

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="calculator">Calculator</TabsTrigger>
        <TabsTrigger value="about">About</TabsTrigger>
      </TabsList>

      <TabsContent value="calculator">
        <CalculatorContainer
          title="Preeclampsia Risk Calculator"
          subtitle="ACOG/SMFM Evidence-Based Risk Assessment • Aspirin Prophylaxis Guidance • Clinical Decision Support"
          icon={Heart}
          gradient="obgyn"
          className="max-w-5xl mx-auto"
        >
          <div className="space-y-8">
            {/* OB/GYN Risk Assessment Alert */}
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 border-2 border-pink-200 dark:border-pink-800 rounded-2xl p-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-pink-100 dark:bg-pink-900/30 rounded-xl">
                  <Heart className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-pink-800 dark:text-pink-200 mb-2">ACOG/SMFM Preeclampsia Risk Assessment</h4>
                  <p className="text-pink-700 dark:text-pink-300 leading-relaxed">
                    Evidence-based risk stratification for preeclampsia using clinical risk factors and optional biomarkers. 
                    Provides aspirin prophylaxis recommendations per USPSTF and ACOG guidelines.
                  </p>
                  <div className="mt-3 inline-flex items-center space-x-2 bg-pink-100 dark:bg-pink-900/30 rounded-lg px-3 py-1">
                    <Star className="w-4 h-4 text-pink-600 dark:text-pink-400" />
                    <span className="text-xs font-semibold text-pink-700 dark:text-pink-300">ACOG Practice Bulletin No. 222 - Preeclampsia Risk Assessment</span>
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
                      currentStep >= 1 ? 'bg-pink-500 text-white' : 'bg-gray-200 text-gray-500'
                    }`}>
                      1
                    </div>
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Risk Factors</span>
                  </div>
                  <div className={`w-16 h-1 rounded-full transition-all duration-300 ${
                    currentStep >= 2 ? 'bg-rose-500' : 'bg-gray-200'
                  }`}></div>
                  <div className="flex items-center space-x-2">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                      currentStep >= 2 ? 'bg-rose-500 text-white' : 'bg-gray-200 text-gray-500'
                    }`}>
                      2
                    </div>
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Clinical Parameters</span>
                  </div>
                  <div className={`w-16 h-1 rounded-full transition-all duration-300 ${
                    currentStep >= 3 ? 'bg-purple-500' : 'bg-gray-200'
                  }`}></div>
                  <div className="flex items-center space-x-2">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                      currentStep >= 3 ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-500'
                    }`}>
                      3
                    </div>
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Assessment</span>
                  </div>
                </div>

                {/* Step 1: Risk Factor Assessment */}
                {currentStep === 1 && (
                  <div className="space-y-6 animate-fadeIn">
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 rounded-2xl border border-pink-200 dark:border-pink-800">
                        <User className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Risk Factor Assessment</h3>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Identify major and moderate risk factors for preeclampsia</p>
                    </div>

                    <div className="space-y-6">
                      {/* Patient Demographics */}
                      <div className="p-6 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl">
                        <div className="flex items-center space-x-3 mb-4">
                          <User className="w-5 h-5 text-blue-600" />
                          <h4 className="font-semibold text-gray-900 dark:text-gray-100">Patient Demographics</h4>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <CalculatorInput
                            label="Maternal Age"
                            value={formData.maternalAge}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, maternalAge: e.target.value })}
                            type="number"
                            placeholder="25"
                            min={12}
                            max={55}
                            unit="years"
                            error={errors.maternalAge}
                            helpText="Age ≥35 is a moderate risk factor"
                            icon={User}
                          />

                          <CalculatorInput
                            label="Body Mass Index (BMI)"
                            value={formData.bmi}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, bmi: e.target.value })}
                            type="number"
                            placeholder="24.5"
                            min={15}
                            max={60}
                            unit="kg/m²"
                            step={0.1}
                            error={errors.bmi}
                            helpText="BMI ≥30 is a moderate risk factor"
                            icon={Activity}
                          />
                        </div>

                        <div className="mt-4">
                          <CalculatorCheckbox
                            id="nulliparity"
                            checked={formData.nulliparity}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, nulliparity: e.target.checked })}
                            label="Nulliparity (first pregnancy)"
                            description="First-time pregnancy - moderate risk factor"
                          />
                        </div>
                      </div>

                      {/* Major Risk Factors */}
                      <div className="p-6 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border-2 border-red-200 dark:border-red-800 rounded-xl">
                        <div className="flex items-center space-x-3 mb-4">
                          <AlertTriangle className="w-5 h-5 text-red-600" />
                          <h4 className="font-semibold text-red-800 dark:text-red-200">Major Risk Factors (High Impact)</h4>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <CalculatorCheckbox
                            id="previousPreeclampsia"
                            checked={formData.previousPreeclampsia}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, previousPreeclampsia: e.target.checked })}
                            label="Previous preeclampsia"
                            description="History of preeclampsia in prior pregnancy"
                          />

                          <CalculatorCheckbox
                            id="chronicHypertension"
                            checked={formData.chronicHypertension}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, chronicHypertension: e.target.checked })}
                            label="Chronic hypertension"
                            description="Pre-existing hypertension before pregnancy"
                          />

                          <CalculatorCheckbox
                            id="diabetes"
                            checked={formData.diabetes}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, diabetes: e.target.checked })}
                            label="Diabetes mellitus"
                            description="Type 1, Type 2, or gestational diabetes"
                          />

                          <CalculatorCheckbox
                            id="multipleGestation"
                            checked={formData.multipleGestation}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, multipleGestation: e.target.checked })}
                            label="Multiple gestation"
                            description="Twins, triplets, or higher-order multiples"
                          />
                        </div>
                      </div>

                      {/* Moderate Risk Factors */}
                      <div className="p-6 bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 border-2 border-yellow-200 dark:border-yellow-800 rounded-xl">
                        <div className="flex items-center space-x-3 mb-4">
                          <Info className="w-5 h-5 text-yellow-600" />
                          <h4 className="font-semibold text-yellow-800 dark:text-yellow-200">Moderate Risk Factors</h4>
                        </div>
                        
                        <CalculatorCheckbox
                          id="familyHistory"
                          checked={formData.familyHistory}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, familyHistory: e.target.checked })}
                          label="Family history of preeclampsia"
                          description="Mother or sister with history of preeclampsia"
                        />
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <CalculatorButton
                        onClick={() => setCurrentStep(2)}
                        className="enhanced-calculator-button"
                      >
                        Next: Clinical Parameters
                      </CalculatorButton>
                    </div>
                  </div>
                )}

                {/* Step 2: Clinical Parameters */}
                {currentStep === 2 && (
                  <div className="space-y-6 animate-fadeIn">
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-rose-50 to-purple-50 dark:from-rose-900/20 dark:to-purple-900/20 rounded-2xl border border-rose-200 dark:border-rose-800">
                        <Stethoscope className="w-6 h-6 text-rose-600 dark:text-rose-400" />
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Clinical Parameters</h3>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Optional biomarkers and clinical measurements (11-13+6 weeks)</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Basic Clinical Measurements */}
                      <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
                        <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-4">Clinical Measurements</h4>
                        <div className="space-y-4">
                          <CalculatorInput
                            label="Mean Arterial Pressure (MAP)"
                            value={formData.meanArterialPressure}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, meanArterialPressure: e.target.value })}
                            type="number"
                            placeholder="95"
                            min={60}
                            max={150}
                            unit="mmHg"
                            step={1}
                            error={errors.meanArterialPressure}
                            helpText="Optional: First trimester MAP measurement"
                            icon={Heart}
                          />

                          <CalculatorInput
                            label="Uterine Artery Pulsatility Index"
                            value={formData.uterineArteryPI}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, uterineArteryPI: e.target.value })}
                            type="number"
                            placeholder="1.2"
                            min={0.5}
                            max={3.0}
                            step={0.1}
                            error={errors.uterineArteryPI}
                            helpText="Optional: Doppler assessment at 11-13+6 weeks"
                            icon={Activity}
                          />
                        </div>
                      </div>

                      {/* Biochemical Markers */}
                      <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-xl">
                        <h4 className="font-semibold text-green-800 dark:text-green-200 mb-4">Biochemical Markers</h4>
                        <div className="space-y-4">
                          <CalculatorInput
                            label="PlGF (Placental Growth Factor)"
                            value={formData.plgf}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, plgf: e.target.value })}
                            type="number"
                            placeholder="45"
                            min={1}
                            max={200}
                            unit="pg/mL"
                            step={0.1}
                            error={errors.plgf}
                            helpText="Optional: First trimester PlGF level"
                            icon={BarChart3}
                          />

                          <CalculatorInput
                            label="PAPP-A"
                            value={formData.pappA}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, pappA: e.target.value })}
                            type="number"
                            placeholder="1.2"
                            min={0.1}
                            max={5.0}
                            unit="MoM"
                            step={0.1}
                            error={errors.pappA}
                            helpText="Optional: PAPP-A level (multiples of median)"
                            icon={BarChart3}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Information Box */}
                    <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <Info className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        <h4 className="font-semibold text-purple-800 dark:text-purple-200">Clinical Parameters Information</h4>
                      </div>
                      <div className="text-sm text-purple-700 dark:text-purple-300 space-y-2">
                        <p>• These parameters are optional but can improve risk assessment accuracy</p>
                        <p>• Optimal timing for assessment is 11-13+6 weeks gestation</p>
                        <p>• Combined screening algorithms use these parameters for enhanced risk stratification</p>
                        <p>• Clinical risk factors alone are sufficient for basic risk assessment</p>
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
                        onClick={handleCalculate}
                        loading={isCalculating}
                        icon={Calculator}
                        size="lg"
                        className="enhanced-calculator-button"
                      >
                        Calculate Risk
                      </CalculatorButton>
                    </div>
                  </div>
                )}
              </>
            ) : (
              /* Results Display */
              <div className="space-y-8 animate-scaleIn">
                <ResultsDisplay
                  title="Preeclampsia Risk Assessment"
                  value={formatRiskPercentage(parseFloat(result.value.toString()))}
                  category={result.category === 'very-high' ? 'high' : result.category as 'low' | 'intermediate' | 'high'}
                  interpretation={result.interpretation}
                  icon={Heart}
                >
                  {/* Risk Category Display */}
                  <div className="mb-6 p-4 bg-pink-50 dark:bg-pink-900/20 border border-pink-200 dark:border-pink-800 rounded-xl">
                    <div className="flex items-center space-x-2 mb-2">
                      <Star className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                      <span className="font-semibold text-pink-800 dark:text-pink-200">Risk Category: {result.category.charAt(0).toUpperCase() + result.category.slice(1)}</span>
                    </div>
                    <div className={`inline-flex items-center space-x-1 rounded-lg px-3 py-1 ${getConfidenceColor(result.category)}`}>
                      <span className="text-xs font-semibold">Estimated Risk: {formatRiskPercentage(parseFloat(result.value.toString()))}</span>
                    </div>
                  </div>

                  {/* Risk Assessment Summary */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
                      <div className="flex items-center space-x-3 mb-3">
                        <Heart className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        <h4 className="font-semibold text-blue-800 dark:text-blue-200">Risk Assessment</h4>
                      </div>
                      <p className="text-2xl font-bold text-blue-900 dark:text-blue-100">{formatRiskPercentage(parseFloat(result.value.toString()))}</p>
                      <p className="text-sm text-blue-600 dark:text-blue-400 mt-1">Preeclampsia risk estimate</p>
                    </div>

                    <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-xl">
                      <div className="flex items-center space-x-3 mb-3">
                        <Shield className="w-6 h-6 text-green-600 dark:text-green-400" />
                        <h4 className="font-semibold text-green-800 dark:text-green-200">Aspirin Recommendation</h4>
                      </div>
                      <p className="text-2xl font-bold text-green-900 dark:text-green-100">
                        {result.aspirinRecommended ? 'Recommended' : 'Not Recommended'}
                      </p>
                      <p className="text-sm text-green-600 dark:text-green-400 mt-1">Low-dose aspirin prophylaxis</p>
                    </div>
                  </div>

                  {/* Clinical Recommendations */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Stethoscope className="w-5 h-5 text-blue-500" />
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100">Clinical Recommendations</h4>
                    </div>
                    <div className={`p-6 rounded-2xl border-2 ${getRiskBgColor(result.category)}`}>
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

                  {/* Evidence References */}
                  <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <Award className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                      <h4 className="font-semibold text-purple-800 dark:text-purple-200">Evidence Base</h4>
                    </div>
                    <div className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                      {result.references.map((ref, index) => (
                        <p key={index}>• {ref}</p>
                      ))}
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
                    onClick={() => setResult(null)}
                    variant="secondary"
                    size="lg"
                  >
                    Modify Inputs
                  </CalculatorButton>
                </div>

                {/* Result Sharing */}
                <div className="mt-6">
                  <CalculatorResultShare
                    calculatorName="Preeclampsia Risk Calculator"
                    calculatorId="preeclampsia-risk-calculator"
                    results={{
                      riskPercentage: formatRiskPercentage(parseFloat(result.value.toString())),
                      category: result.category,
                      aspirinRecommended: result.aspirinRecommended ? 'Yes' : 'No'
                    }}
                    interpretation={result.interpretation}
                    recommendations={result.recommendations}
                    riskLevel={result.category === 'low' ? 'low' : result.category === 'very-high' ? 'high' : 'intermediate'}
                  />
                </div>
              </div>
            )}

            {/* Footer Information */}
            <div className="text-center pt-8 border-t border-white/20 dark:border-gray-800/20">
              <div className="flex items-center justify-center space-x-3 text-sm text-gray-600 dark:text-gray-400">
                <Info className="w-4 h-4" />
                <span>Based on ACOG Practice Bulletin No. 222 • For educational purposes only</span>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-pink-600" />
                  <span className="text-pink-600 font-semibold">ACOG 2020 Guidelines</span>
                </div>
              </div>
            </div>
          </div>
        </CalculatorContainer>
      </TabsContent>

      <TabsContent value="about" className="space-y-6">
        {/* About content will be added next */}
        <CalculatorContainer
          title="About the Preeclampsia Risk Calculator"
          subtitle="Evidence-Based Risk Assessment • ACOG Guidelines • Clinical Documentation"
          icon={Heart}
          gradient="obgyn"
          className="max-w-5xl mx-auto"
        >
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 border-2 border-pink-200 dark:border-pink-800 rounded-2xl p-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-pink-100 dark:bg-pink-900/30 rounded-xl">
                  <Stethoscope className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-pink-800 dark:text-pink-200 mb-3">Clinical Purpose</h3>
                  <p className="text-pink-700 dark:text-pink-300 leading-relaxed">
                    The Preeclampsia Risk Calculator provides evidence-based risk assessment for preeclampsia using clinical risk factors 
                    and optional biomarkers. It guides aspirin prophylaxis decisions per USPSTF and ACOG recommendations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CalculatorContainer>
      </TabsContent>
    </Tabs>
  );
};

export default PreeclampsiaRiskCalculator; 