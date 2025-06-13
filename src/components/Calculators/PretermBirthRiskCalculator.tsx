import React, { useState } from 'react';
import { Calculator, Info, AlertTriangle, CheckCircle, Baby, Star, User, Activity, BarChart3, Stethoscope, Award, Shield, Clock, Target, Zap, Monitor, Microscope } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
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
import { calculatePretermBirthRisk, validateOBGYNInput } from '../../services/obgynCalculatorService';
import { PretermBirthRiskInput, PretermBirthRiskResult } from '../../types/obgyn-calculators';

interface FormData {
  gestationalAge: string;
  previousPretermBirth: boolean;
  cervicalLength: string;
  multipleGestation: boolean;
  uterineAnomalies: boolean;
  smoking: boolean;
  bmi: string;
  fFN: boolean;
}

export const PretermBirthRiskCalculator: React.FC = () => {
  const [activeTab, setActiveTab] = useState('calculator');
  const [formData, setFormData] = useState<FormData>({
    gestationalAge: '',
    previousPretermBirth: false,
    cervicalLength: '',
    multipleGestation: false,
    uterineAnomalies: false,
    smoking: false,
    bmi: '',
    fFN: false
  });
  
  const [result, setResult] = useState<PretermBirthRiskResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    // Gestational age validation
    if (!formData.gestationalAge) {
      newErrors.gestationalAge = 'Current gestational age is required';
    } else {
      const ga = parseFloat(formData.gestationalAge);
      if (isNaN(ga) || ga < 16 || ga > 36) {
        newErrors.gestationalAge = 'Gestational age must be between 16-36 weeks for risk assessment';
      }
    }

    // Cervical length validation
    if (!formData.cervicalLength) {
      newErrors.cervicalLength = 'Cervical length measurement is required';
    } else {
      const cl = parseFloat(formData.cervicalLength);
      if (isNaN(cl) || cl < 5 || cl > 60) {
        newErrors.cervicalLength = 'Cervical length must be between 5-60mm';
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

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCalculate = () => {
    if (!validateForm()) return;

    setIsCalculating(true);
    
    // Professional preterm birth risk calculation with loading animation
    setTimeout(() => {
      try {
        const input: PretermBirthRiskInput = {
          gestationalAge: formData.gestationalAge,
          previousPretermBirth: formData.previousPretermBirth,
          cervicalLength: formData.cervicalLength,
          multipleGestation: formData.multipleGestation,
          uterineAnomalies: formData.uterineAnomalies,
          smoking: formData.smoking,
          bmi: formData.bmi,
          fFN: formData.fFN,
          calculationDate: new Date().toISOString()
        };

        // Use the service validation
        const validation = validateOBGYNInput('preterm-birth-risk', input);
        if (!validation.isValid) {
          setErrors(validation.errors.reduce((acc, error, index) => ({ ...acc, [`error_${index}`]: error }), {}));
          setIsCalculating(false);
          return;
        }

        const calculationResult = calculatePretermBirthRisk(input);
        setResult(calculationResult);
        
      } catch (error) {
        setErrors({ calculation: error instanceof Error ? error.message : 'Calculation failed' });
      } finally {
        setIsCalculating(false);
      }
    }, 1800); // Professional OB/GYN preterm birth calculation simulation
  };

  const handleReset = () => {
    setFormData({
      gestationalAge: '',
      previousPretermBirth: false,
      cervicalLength: '',
      multipleGestation: false,
      uterineAnomalies: false,
      smoking: false,
      bmi: '',
      fFN: false
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
          title="Preterm Birth Risk Calculator"
          subtitle="Evidence-Based Risk Stratification • ACOG Guidelines • Cervical Length Assessment • Clinical Decision Support"
          icon={Baby}
          gradient="obgyn"
          className="max-w-5xl mx-auto"
        >
          <div className="space-y-8">
            {/* OB/GYN Preterm Birth Alert */}
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 border-2 border-pink-200 dark:border-pink-800 rounded-2xl p-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-pink-100 dark:bg-pink-900/30 rounded-xl">
                  <Baby className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-pink-800 dark:text-pink-200 mb-2">ACOG Evidence-Based Preterm Birth Risk Assessment</h4>
                  <p className="text-pink-700 dark:text-pink-300 leading-relaxed">
                    Comprehensive risk stratification for spontaneous preterm birth using clinical risk factors, 
                    cervical length assessment, and biomarkers. Guides preventive interventions and monitoring protocols.
                  </p>
                  <div className="mt-3 inline-flex items-center space-x-2 bg-pink-100 dark:bg-pink-900/30 rounded-lg px-3 py-1">
                    <Star className="w-4 h-4 text-pink-600 dark:text-pink-400" />
                    <span className="text-xs font-semibold text-pink-700 dark:text-pink-300">ACOG Practice Bulletin No. 234 - Preterm Birth Risk Assessment</span>
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
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Clinical Assessment</span>
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
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Risk Factors</span>
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

                {/* Step 1: Clinical Assessment */}
                {currentStep === 1 && (
                  <div className="space-y-6 animate-fadeIn">
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 rounded-2xl border border-pink-200 dark:border-pink-800">
                        <Stethoscope className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Clinical Assessment</h3>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Current pregnancy parameters and cervical assessment</p>
                    </div>

                    <div className="space-y-6">
                      {/* Current Pregnancy Assessment */}
                      <div className="p-6 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl">
                        <div className="flex items-center space-x-3 mb-4">
                          <Clock className="w-5 h-5 text-blue-600" />
                          <h4 className="font-semibold text-gray-900 dark:text-gray-100">Current Pregnancy</h4>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <CalculatorInput
                            label="Current Gestational Age"
                            value={formData.gestationalAge}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, gestationalAge: e.target.value })}
                            type="number"
                            placeholder="24.5"
                            min={16}
                            max={36}
                            unit="weeks"
                            step={0.1}
                            error={errors.gestationalAge}
                            helpText="Assessment typically performed between 16-36 weeks"
                            icon={Clock}
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
                            helpText="Pre-pregnancy or early pregnancy BMI"
                            icon={Activity}
                          />
                        </div>
                      </div>

                      {/* Cervical Assessment */}
                      <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-2 border-blue-200 dark:border-blue-800 rounded-xl">
                        <div className="flex items-center space-x-3 mb-4">
                          <Monitor className="w-5 h-5 text-blue-600" />
                          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Cervical Length Assessment</h4>
                        </div>
                        
                        <CalculatorInput
                          label="Cervical Length"
                          value={formData.cervicalLength}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, cervicalLength: e.target.value })}
                          type="number"
                          placeholder="35"
                          min={5}
                          max={60}
                          unit="mm"
                          step={0.1}
                          error={errors.cervicalLength}
                          helpText="Transvaginal ultrasound measurement (normal: ≥25mm)"
                          icon={Monitor}
                        />

                        {/* Cervical Length Interpretation */}
                        <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 rounded-lg">
                          <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Cervical Length Reference Values</h5>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                            <div className="flex items-center space-x-2">
                              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                              <span className="text-blue-700 dark:text-blue-300">Normal: ≥25mm</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                              <span className="text-blue-700 dark:text-blue-300">Short: 15-24mm</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                              <span className="text-blue-700 dark:text-blue-300">Very Short: {'<'}15mm</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Biomarker Assessment */}
                      <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-200 dark:border-green-800 rounded-xl">
                        <div className="flex items-center space-x-3 mb-4">
                          <Microscope className="w-5 h-5 text-green-600" />
                          <h4 className="font-semibold text-green-800 dark:text-green-200">Biomarker Assessment</h4>
                        </div>
                        
                        <CalculatorCheckbox
                          id="fFN"
                          checked={formData.fFN}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, fFN: e.target.checked })}
                          label="Positive Fetal Fibronectin (fFN)"
                          description="fFN positive test result (≥50 ng/mL or qualitative positive)"
                        />

                        <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-lg">
                          <h5 className="font-semibold text-green-800 dark:text-green-200 mb-2">Fetal Fibronectin Information</h5>
                          <div className="text-sm text-green-700 dark:text-green-300 space-y-1">
                            <p>• High negative predictive value ({'>'}95%) for delivery within 7-14 days</p>
                            <p>• Best used in combination with cervical length assessment</p>
                            <p>• Optimal timing: 22-34 weeks gestation for symptomatic patients</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <CalculatorButton
                        onClick={() => setCurrentStep(2)}
                        className="enhanced-calculator-button"
                      >
                        Next: Risk Factors
                      </CalculatorButton>
                    </div>
                  </div>
                )}

                {/* Step 2: Risk Factors */}
                {currentStep === 2 && (
                  <div className="space-y-6 animate-fadeIn">
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-rose-50 to-purple-50 dark:from-rose-900/20 dark:to-purple-900/20 rounded-2xl border border-rose-200 dark:border-rose-800">
                        <AlertTriangle className="w-6 h-6 text-rose-600 dark:text-rose-400" />
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Risk Factors</h3>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Historical and anatomical risk factors for preterm birth</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Historical Risk Factors */}
                      <div className="p-6 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border-2 border-red-200 dark:border-red-800 rounded-xl">
                        <div className="flex items-center space-x-3 mb-4">
                          <User className="w-5 h-5 text-red-600" />
                          <h4 className="font-semibold text-red-800 dark:text-red-200">Historical Risk Factors</h4>
                        </div>
                        
                        <div className="space-y-4">
                          <CalculatorCheckbox
                            id="previousPretermBirth"
                            checked={formData.previousPretermBirth}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, previousPretermBirth: e.target.checked })}
                            label="Previous spontaneous preterm birth"
                            description="Prior delivery between 16-36+6 weeks gestation"
                          />

                          <CalculatorCheckbox
                            id="multipleGestation"
                            checked={formData.multipleGestation}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, multipleGestation: e.target.checked })}
                            label="Multiple gestation"
                            description="Current pregnancy with twins, triplets, or higher-order multiples"
                          />
                        </div>

                        <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 rounded-lg">
                          <h5 className="font-semibold text-red-800 dark:text-red-200 mb-2">High-Impact Risk Factors</h5>
                          <div className="text-sm text-red-700 dark:text-red-300 space-y-1">
                            <p>• Previous preterm birth increases risk 2.5-fold</p>
                            <p>• Earlier gestational age at prior delivery = higher recurrence risk</p>
                            <p>• Multiple gestations account for ~15% of preterm births</p>
                          </div>
                        </div>
                      </div>

                      {/* Anatomical & Lifestyle Factors */}
                      <div className="p-6 bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 border-2 border-yellow-200 dark:border-yellow-800 rounded-xl">
                        <div className="flex items-center space-x-3 mb-4">
                          <Shield className="w-5 h-5 text-yellow-600" />
                          <h4 className="font-semibold text-yellow-800 dark:text-yellow-200">Anatomical & Lifestyle Factors</h4>
                        </div>
                        
                        <div className="space-y-4">
                          <CalculatorCheckbox
                            id="uterineAnomalies"
                            checked={formData.uterineAnomalies}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, uterineAnomalies: e.target.checked })}
                            label="Uterine anomalies"
                            description="Congenital uterine malformations or acquired defects"
                          />

                          <CalculatorCheckbox
                            id="smoking"
                            checked={formData.smoking}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, smoking: e.target.checked })}
                            label="Smoking during pregnancy"
                            description="Active tobacco use during current pregnancy"
                          />
                        </div>

                        <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-700 rounded-lg">
                          <h5 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Modifiable Risk Factors</h5>
                          <div className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                            <p>• Smoking cessation reduces preterm birth risk</p>
                            <p>• Uterine anomalies may require specialized monitoring</p>
                            <p>• Consider cervical cerclage for specific anatomical risks</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Risk Assessment Summary */}
                    <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <BarChart3 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        <h4 className="font-semibold text-purple-800 dark:text-purple-200">Risk Assessment Framework</h4>
                      </div>
                      <div className="text-sm text-purple-700 dark:text-purple-300 space-y-2">
                        <p>• Risk stratification guides preventive interventions and monitoring intensity</p>
                        <p>• Combines clinical risk factors with cervical length and biomarker assessment</p>
                        <p>• Evidence-based approach for progesterone therapy and enhanced surveillance decisions</p>
                        <p>• Individualized care plans based on composite risk assessment</p>
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
                  title="Preterm Birth Risk Assessment"
                  value={formatRiskPercentage(parseFloat(result.value.toString()))}
                  category={result.category === 'very-high' ? 'high' : result.category as 'low' | 'intermediate' | 'high'}
                  interpretation={result.interpretation}
                  icon={Baby}
                >
                  {/* Risk Category Display */}
                  <div className="mb-6 p-4 bg-pink-50 dark:bg-pink-900/20 border border-pink-200 dark:border-pink-800 rounded-xl">
                    <div className="flex items-center space-x-2 mb-2">
                      <Star className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                      <span className="font-semibold text-pink-800 dark:text-pink-200">Risk Category: {result.category.charAt(0).toUpperCase() + result.category.slice(1)}</span>
                    </div>
                    <div className={`inline-flex items-center space-x-1 rounded-lg px-3 py-1 ${getConfidenceColor(result.category)}`}>
                      <span className="text-xs font-semibold">Preterm Birth Risk: {formatRiskPercentage(parseFloat(result.value.toString()))}</span>
                    </div>
                  </div>

                  {/* Risk Assessment Summary */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
                      <div className="flex items-center space-x-3 mb-3">
                        <Baby className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        <h4 className="font-semibold text-blue-800 dark:text-blue-200">Risk Assessment</h4>
                      </div>
                      <p className="text-2xl font-bold text-blue-900 dark:text-blue-100">{formatRiskPercentage(parseFloat(result.value.toString()))}</p>
                      <p className="text-sm text-blue-600 dark:text-blue-400 mt-1">Spontaneous preterm birth risk</p>
                    </div>

                    <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-xl">
                      <div className="flex items-center space-x-3 mb-3">
                        <Shield className="w-6 h-6 text-green-600 dark:text-green-400" />
                        <h4 className="font-semibold text-green-800 dark:text-green-200">Monitoring Level</h4>
                      </div>
                      <p className="text-2xl font-bold text-green-900 dark:text-green-100">
                        {(result as any).monitoringLevel?.charAt(0).toUpperCase() + (result as any).monitoringLevel?.slice(1) || 'Standard'}
                      </p>
                      <p className="text-sm text-green-600 dark:text-green-400 mt-1">Recommended surveillance intensity</p>
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
                    calculatorName="Preterm Birth Risk Calculator"
                    calculatorId="preterm-birth-risk-calculator"
                    results={{
                      riskPercentage: formatRiskPercentage(parseFloat(result.value.toString())),
                      category: result.category,
                      monitoringLevel: (result as any).monitoringLevel || 'Standard'
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
                <span>Based on ACOG Practice Bulletin No. 234 • For educational purposes only</span>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-pink-600" />
                  <span className="text-pink-600 font-semibold">ACOG 2021 Guidelines</span>
                </div>
              </div>
            </div>
          </div>
        </CalculatorContainer>
      </TabsContent>

      <TabsContent value="about" className="space-y-6">
        <CalculatorContainer
          title="About the Preterm Birth Risk Calculator"
          subtitle="Evidence-Based Risk Stratification • ACOG Guidelines • Clinical Documentation"
          icon={Baby}
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
                    The Preterm Birth Risk Calculator provides evidence-based risk stratification for spontaneous preterm birth 
                    using clinical risk factors, cervical length assessment, and biomarkers. It guides preventive interventions 
                    and monitoring protocols per ACOG guidelines.
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

export default PretermBirthRiskCalculator; 