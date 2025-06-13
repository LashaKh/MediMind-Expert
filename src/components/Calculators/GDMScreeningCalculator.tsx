import React, { useState } from 'react';
import { Calculator, Info, AlertTriangle, CheckCircle, TestTube, Calendar, Star, User, Activity, BarChart3, Stethoscope, Award, Shield, Clock, Target, Heart, Zap } from 'lucide-react';
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
import { calculateOBGYN, validateOBGYNInput } from '../../services/obgynCalculatorService';
import { GDMScreeningInput, GDMScreeningResult } from '../../types/obgyn-calculators';

interface FormData {
  maternalAge: string;
  bmi: string;
  race: 'white' | 'hispanic' | 'african-american' | 'asian' | 'native-american' | 'other';
  familyHistoryDM: boolean;
  previousGDM: boolean;
  previousMacrosomia: boolean;
  pcos: boolean;
}

const GDMScreeningCalculator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'calculator' | 'about'>('calculator');
  const [formData, setFormData] = useState<FormData>({
    maternalAge: '',
    bmi: '',
    race: 'white',
    familyHistoryDM: false,
    previousGDM: false,
    previousMacrosomia: false,
    pcos: false
  });
  
  const [result, setResult] = useState<GDMScreeningResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.maternalAge) {
      newErrors.maternalAge = 'Maternal age is required';
    } else {
      const age = parseInt(formData.maternalAge);
      if (isNaN(age) || age < 15 || age > 55) {
        newErrors.maternalAge = 'Maternal age must be between 15-55 years';
      }
    }

    if (!formData.bmi) {
      newErrors.bmi = 'Pre-pregnancy BMI is required';
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
    
    // Professional GDM screening calculation with loading animation
    setTimeout(() => {
      try {
        const input: GDMScreeningInput = {
          maternalAge: formData.maternalAge,
          bmi: formData.bmi,
          race: formData.race,
          familyHistoryDM: formData.familyHistoryDM,
          previousGDM: formData.previousGDM,
          previousMacrosomia: formData.previousMacrosomia,
          pcos: formData.pcos,
          calculationDate: new Date().toISOString()
        };

        // Use the service validation
        const validation = validateOBGYNInput('gdm-screening', input);
        if (!validation.isValid) {
          setErrors(validation.errors.reduce((acc, error, index) => ({ ...acc, [`error_${index}`]: error }), {}));
          setIsCalculating(false);
          return;
        }

        const calculationResult = calculateOBGYN('gdm-screening', input) as GDMScreeningResult;
        setResult(calculationResult);
        
      } catch (error) {
        setErrors({ calculation: error instanceof Error ? error.message : 'Calculation failed' });
      } finally {
        setIsCalculating(false);
      }
    }, 2200); // Professional OB/GYN GDM screening calculation simulation
  };

  const handleReset = () => {
    setFormData({
      maternalAge: '',
      bmi: '',
      race: 'white',
      familyHistoryDM: false,
      previousGDM: false,
      previousMacrosomia: false,
      pcos: false
    });
    setResult(null);
    setErrors({});
    setIsCalculating(false);
    setCurrentStep(1);
  };

  const getRiskColor = (category: string) => {
    switch (category) {
      case 'low': return 'text-green-700 bg-green-50 border-green-200';
      case 'moderate': return 'text-yellow-700 bg-yellow-50 border-yellow-200';
      case 'high': return 'text-orange-700 bg-orange-50 border-orange-200';
      case 'very-high': return 'text-red-700 bg-red-50 border-red-200';
      default: return 'text-gray-700 bg-gray-50 border-gray-200';
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

  const formatRiskPercentage = (value: number): string => {
    return `${value.toFixed(1)}%`;
  };

  return (
    <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as 'calculator' | 'about')} className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="calculator">Calculator</TabsTrigger>
        <TabsTrigger value="about">About</TabsTrigger>
      </TabsList>

      <TabsContent value="calculator">
        <CalculatorContainer
          title="Gestational Diabetes Mellitus (GDM) Screening"
          subtitle="Evidence-Based Risk Assessment • ACOG Guidelines • Personalized Screening Protocol • Clinical Decision Support"
          icon={TestTube}
          gradient="obgyn"
          className="max-w-5xl mx-auto"
        >
          <div className="space-y-8">
            {/* OB/GYN GDM Screening Alert */}
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 border-2 border-pink-200 dark:border-pink-800 rounded-2xl p-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-pink-100 dark:bg-pink-900/30 rounded-xl">
                  <TestTube className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-pink-800 dark:text-pink-200 mb-2">ACOG Evidence-Based GDM Screening Protocol</h4>
                  <p className="text-pink-700 dark:text-pink-300 leading-relaxed">
                    Comprehensive risk-based screening strategy for gestational diabetes mellitus using clinical risk factors 
                    and evidence-based guidelines. Provides personalized screening timing and methodology recommendations.
                  </p>
                  <div className="mt-3 inline-flex items-center space-x-2 bg-pink-100 dark:bg-pink-900/30 rounded-lg px-3 py-1">
                    <Star className="w-4 h-4 text-pink-600 dark:text-pink-400" />
                    <span className="text-xs font-semibold text-pink-700 dark:text-pink-300">ACOG Practice Bulletin No. 230 - GDM Screening</span>
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
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Risk Assessment</span>
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
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Demographics & History</span>
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
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Screening Recommendations</span>
                  </div>
                </div>

                {/* Step 1: Risk Assessment */}
                {currentStep === 1 && (
                  <div className="space-y-6 animate-fadeIn">
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 rounded-2xl border border-pink-200 dark:border-pink-800">
                        <User className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Patient Demographics</h3>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Basic maternal characteristics and anthropometric data</p>
                    </div>

                    <div className="space-y-6">
                      {/* Patient Demographics */}
                      <div className="p-6 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl">
                        <div className="flex items-center space-x-3 mb-4">
                          <User className="w-5 h-5 text-blue-600" />
                          <h4 className="font-semibold text-gray-900 dark:text-gray-100">Basic Demographics</h4>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <CalculatorInput
                            label="Maternal Age"
                            value={formData.maternalAge}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, maternalAge: e.target.value })}
                            type="number"
                            placeholder="28"
                            min={15}
                            max={55}
                            unit="years"
                            error={errors.maternalAge}
                            helpText="Age ≥35 increases GDM risk"
                            icon={User}
                          />

                          <CalculatorInput
                            label="Pre-pregnancy BMI"
                            value={formData.bmi}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, bmi: e.target.value })}
                            type="number"
                            placeholder="24.5"
                            min={15}
                            max={60}
                            unit="kg/m²"
                            step={0.1}
                            error={errors.bmi}
                            helpText="BMI ≥25 increases GDM risk"
                            icon={Activity}
                          />
                        </div>
                      </div>

                      {/* Race/Ethnicity Assessment */}
                      <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-2 border-blue-200 dark:border-blue-800 rounded-xl">
                        <div className="flex items-center space-x-3 mb-4">
                          <BarChart3 className="w-5 h-5 text-blue-600" />
                          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Race/Ethnicity</h4>
                        </div>
                        
                        <CalculatorSelect
                          label="Race/Ethnicity"
                          value={formData.race}
                          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setFormData({ ...formData, race: e.target.value as typeof formData.race })}
                          options={[
                            { value: 'white', label: 'White/Caucasian' },
                            { value: 'hispanic', label: 'Hispanic/Latino' },
                            { value: 'african-american', label: 'African American' },
                            { value: 'asian', label: 'Asian' },
                            { value: 'native-american', label: 'Native American' },
                            { value: 'other', label: 'Other/Mixed' }
                          ]}
                          helpText="Certain ethnic groups have higher GDM prevalence"
                          icon={BarChart3}
                        />

                        <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 rounded-lg">
                          <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">High-Risk Ethnic Groups</h5>
                          <div className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                            <p>• Hispanic/Latino: 2-3x increased risk</p>
                            <p>• Asian: 2-4x increased risk (especially South Asian)</p>
                            <p>• African American: 1.5-2x increased risk</p>
                            <p>• Native American: 3-5x increased risk</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <CalculatorButton
                        onClick={() => setCurrentStep(2)}
                        className="enhanced-calculator-button"
                      >
                        Next: Clinical History
                      </CalculatorButton>
                    </div>
                  </div>
                )}

                {/* Step 2: Demographics & History */}
                {currentStep === 2 && (
                  <div className="space-y-6 animate-fadeIn">
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-rose-50 to-purple-50 dark:from-rose-900/20 dark:to-purple-900/20 rounded-2xl border border-rose-200 dark:border-rose-800">
                        <Calendar className="w-6 h-6 text-rose-600 dark:text-rose-400" />
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Clinical History</h3>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Medical and obstetric history assessment</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Family History */}
                      <div className="p-6 bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 border-2 border-yellow-200 dark:border-yellow-800 rounded-xl">
                        <div className="flex items-center space-x-3 mb-4">
                          <Heart className="w-5 h-5 text-yellow-600" />
                          <h4 className="font-semibold text-yellow-800 dark:text-yellow-200">Family History</h4>
                        </div>
                        
                        <CalculatorCheckbox
                          id="familyHistoryDM"
                          checked={formData.familyHistoryDM}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, familyHistoryDM: e.target.checked })}
                          label="Family history of diabetes"
                          description="First-degree relative (parent, sibling) with Type 1 or Type 2 diabetes"
                        />

                        <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-700 rounded-lg">
                          <h5 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Family History Impact</h5>
                          <div className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                            <p>• First-degree relative with DM: 2-3x increased risk</p>
                            <p>• Type 2 diabetes in parents: strongest predictor</p>
                            <p>• Multiple affected relatives: additive risk</p>
                          </div>
                        </div>
                      </div>

                      {/* Obstetric History */}
                      <div className="p-6 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border-2 border-red-200 dark:border-red-800 rounded-xl">
                        <div className="flex items-center space-x-3 mb-4">
                          <Calendar className="w-5 h-5 text-red-600" />
                          <h4 className="font-semibold text-red-800 dark:text-red-200">Obstetric History</h4>
                        </div>
                        
                        <div className="space-y-4">
                          <CalculatorCheckbox
                            id="previousGDM"
                            checked={formData.previousGDM}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, previousGDM: e.target.checked })}
                            label="Previous gestational diabetes"
                            description="GDM diagnosis in prior pregnancy"
                          />

                          <CalculatorCheckbox
                            id="previousMacrosomia"
                            checked={formData.previousMacrosomia}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, previousMacrosomia: e.target.checked })}
                            label="Previous macrosomic infant"
                            description="Prior baby weighing ≥4000g (8 lbs 13 oz) or ≥4500g (9 lbs 15 oz)"
                          />
                        </div>

                        <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 rounded-lg">
                          <h5 className="font-semibold text-red-800 dark:text-red-200 mb-2">Major Risk Factors</h5>
                          <div className="text-sm text-red-700 dark:text-red-300 space-y-1">
                            <p>• Previous GDM: 35-70% recurrence risk</p>
                            <p>• Macrosomic infant: Strong GDM association</p>
                            <p>• Combined factors: Multiplicative risk increase</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Medical History */}
                    <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-200 dark:border-green-800 rounded-xl">
                      <div className="flex items-center space-x-3 mb-4">
                        <Stethoscope className="w-5 h-5 text-green-600" />
                        <h4 className="font-semibold text-green-800 dark:text-green-200">Medical History</h4>
                      </div>
                      
                      <CalculatorCheckbox
                        id="pcos"
                        checked={formData.pcos}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, pcos: e.target.checked })}
                        label="Polycystic Ovary Syndrome (PCOS)"
                        description="Diagnosed PCOS or clinical features suggestive of PCOS"
                      />

                      <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-lg">
                        <h5 className="font-semibold text-green-800 dark:text-green-200 mb-2">PCOS and GDM Risk</h5>
                        <div className="text-sm text-green-700 dark:text-green-300 space-y-1">
                          <p>• PCOS increases GDM risk 2-4 fold</p>
                          <p>• Insulin resistance mechanism</p>
                          <p>• Consider early screening if PCOS present</p>
                        </div>
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
                        Generate Screening Plan
                      </CalculatorButton>
                    </div>
                  </div>
                )}
              </>
            ) : (
              /* Results Display */
              <div className="space-y-8 animate-scaleIn">
                <ResultsDisplay
                  title="GDM Screening Assessment"
                  value={result.screeningRecommendation}
                  category={result.riskLevel === 'high' ? 'high' : result.riskLevel as 'low' | 'intermediate' | 'high'}
                  interpretation={result.interpretation}
                  icon={TestTube}
                >
                  {/* Risk Category Display */}
                  <div className="mb-6 p-4 bg-pink-50 dark:bg-pink-900/20 border border-pink-200 dark:border-pink-800 rounded-xl">
                    <div className="flex items-center space-x-2 mb-2">
                      <Star className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                      <span className="font-semibold text-pink-800 dark:text-pink-200">Risk Level: {result.riskLevel.charAt(0).toUpperCase() + result.riskLevel.slice(1)}</span>
                    </div>
                    <div className={`inline-flex items-center space-x-1 rounded-lg px-3 py-1 ${getRiskColor(result.riskLevel)}`}>
                      <span className="text-xs font-semibold">Screening: {result.screeningRecommendation.charAt(0).toUpperCase() + result.screeningRecommendation.slice(1)}</span>
                    </div>
                  </div>

                  {/* Screening Assessment Summary */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
                      <div className="flex items-center space-x-3 mb-3">
                        <TestTube className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        <h4 className="font-semibold text-blue-800 dark:text-blue-200">Screening Timing</h4>
                      </div>
                      <p className="text-2xl font-bold text-blue-900 dark:text-blue-100">{result.screeningRecommendation.charAt(0).toUpperCase() + result.screeningRecommendation.slice(1)}</p>
                      <p className="text-sm text-blue-600 dark:text-blue-400 mt-1">Recommended timing</p>
                    </div>

                    <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-xl">
                      <div className="flex items-center space-x-3 mb-3">
                        <Clock className="w-6 h-6 text-green-600 dark:text-green-400" />
                        <h4 className="font-semibold text-green-800 dark:text-green-200">Testing Protocol</h4>
                      </div>
                      <p className="text-2xl font-bold text-green-900 dark:text-green-100">{result.testingProtocol.charAt(0).toUpperCase() + result.testingProtocol.slice(1)}</p>
                      <p className="text-sm text-green-600 dark:text-green-400 mt-1">Recommended approach</p>
                    </div>
                  </div>

                  {/* Clinical Recommendations */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Stethoscope className="w-5 h-5 text-blue-500" />
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100">Clinical Recommendations</h4>
                    </div>
                    <div className={`p-6 rounded-2xl border-2 ${getRiskBgColor(result.riskLevel)}`}>
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
                    calculatorName="GDM Screening Calculator"
                    calculatorId="gdm-screening-calculator"
                    results={{
                      screeningTiming: result.screeningRecommendation,
                      riskLevel: result.riskLevel,
                      testingProtocol: result.testingProtocol
                    }}
                    interpretation={result.interpretation}
                    recommendations={result.recommendations}
                    riskLevel={result.riskLevel === 'low' ? 'low' : result.riskLevel === 'high' ? 'high' : 'intermediate'}
                  />
                </div>
              </div>
            )}

            {/* Footer Information */}
            <div className="text-center pt-8 border-t border-white/20 dark:border-gray-800/20">
              <div className="flex items-center justify-center space-x-3 text-sm text-gray-600 dark:text-gray-400">
                <Info className="w-4 h-4" />
                <span>Based on ACOG Practice Bulletin No. 230 • For educational purposes only</span>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-pink-600" />
                  <span className="text-pink-600 font-semibold">ACOG 2022 Guidelines</span>
                </div>
              </div>
            </div>
          </div>
        </CalculatorContainer>
      </TabsContent>

      <TabsContent value="about" className="space-y-6">
        <CalculatorContainer
          title="About the GDM Screening Calculator"
          subtitle="Evidence-Based Risk Assessment • ACOG Guidelines • Clinical Documentation"
          icon={TestTube}
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
                    The GDM Screening Calculator provides evidence-based risk assessment for gestational diabetes mellitus 
                    using clinical risk factors and patient characteristics. It guides personalized screening timing and 
                    methodology per ACOG guidelines and international recommendations.
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

export default GDMScreeningCalculator; 