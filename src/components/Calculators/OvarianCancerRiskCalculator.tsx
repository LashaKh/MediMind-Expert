import React, { useState } from 'react';
import { Shield, AlertTriangle, Info, CheckCircle, Star, User, FileText, Activity, Clock, Target, Calculator, TrendingUp, Stethoscope, Award, ArrowRight, Users, Calendar, AlertCircle, Microscope, Dna, Heart, FlaskConical, Baby, Zap } from 'lucide-react';
import { Button } from '../ui/button';
import { Tooltip } from '../ui/tooltip';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
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
import { OvarianCancerRiskInput, OvarianCancerRiskResult } from '../../types/obgyn-calculators';

interface FormData {
  age: string;
  familyHistory: 'none' | 'ovarian' | 'breast' | 'both';
  brca1: boolean;
  brca2: boolean;
  lynchSyndrome: boolean;
  personalBreastCancer: boolean;
  parity: string;
  oralContraceptiveUse: string;
  hormonetherapy: boolean;
}

interface Errors {
  age?: string;
  parity?: string;
  oralContraceptiveUse?: string;
}

const OvarianCancerRiskCalculator: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    age: '',
    familyHistory: 'none',
    brca1: false,
    brca2: false,
    lynchSyndrome: false,
    personalBreastCancer: false,
    parity: '',
    oralContraceptiveUse: '',
    hormonetherapy: false
  });
  
  const [errors, setErrors] = useState<Errors>({});
  const [result, setResult] = useState<OvarianCancerRiskResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [showResult, setShowResult] = useState(false);
  const [activeTab, setActiveTab] = useState<'calculator' | 'about'>('calculator');

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear errors when user starts typing
    if (errors[field as keyof Errors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validateStep = (currentStep: number): boolean => {
    const newErrors: Errors = {};

    if (currentStep === 1) {
    if (!formData.age) {
        newErrors.age = 'Age is required';
      } else if (Number(formData.age) < 18 || Number(formData.age) > 100) {
        newErrors.age = 'Please enter a valid age (18-100 years)';
    }

    if (!formData.parity) {
        newErrors.parity = 'Parity is required';
      } else if (Number(formData.parity) < 0 || Number(formData.parity) > 20) {
        newErrors.parity = 'Please enter a valid parity (0-20)';
    }

    if (!formData.oralContraceptiveUse) {
        newErrors.oralContraceptiveUse = 'Oral contraceptive use duration is required';
      } else if (Number(formData.oralContraceptiveUse) < 0 || Number(formData.oralContraceptiveUse) > 50) {
        newErrors.oralContraceptiveUse = 'Please enter a valid duration (0-50 years)';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleCalculate = async () => {
    if (!validateStep(1)) return;

    setIsLoading(true);
    setShowResult(false);

    try {
      const input: OvarianCancerRiskInput = {
        age: formData.age,
        familyHistory: formData.familyHistory,
        brca1: formData.brca1,
        brca2: formData.brca2,
        lynchSyndrome: formData.lynchSyndrome,
        personalBreastCancer: formData.personalBreastCancer,
        parity: formData.parity,
        oralContraceptiveUse: formData.oralContraceptiveUse,
        hormonetherapy: formData.hormonetherapy,
        calculationDate: new Date().toISOString()
      };

      // Validate input
      const validation = validateOBGYNInput('ovarian-cancer-risk', input);
      if (!validation.isValid) {
        const fieldErrors: Errors = {};
        validation.errors.forEach(error => {
          if (error.includes('age')) fieldErrors.age = error;
          if (error.includes('parity')) fieldErrors.parity = error;
          if (error.includes('oral contraceptive')) fieldErrors.oralContraceptiveUse = error;
        });
        setErrors(fieldErrors);
        return;
      }

      const calculationResult = calculateOBGYN('ovarian-cancer-risk', input) as OvarianCancerRiskResult;
      setResult(calculationResult);
      setShowResult(true);
      
      // Scroll to results
      setTimeout(() => {
        const resultsElement = document.getElementById('ovarian-results');
        if (resultsElement) {
          resultsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } catch (error) {
      console.error('Calculation error:', error);
      setErrors({ age: 'An error occurred during calculation. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      age: '',
      familyHistory: 'none',
      brca1: false,
      brca2: false,
      lynchSyndrome: false,
      personalBreastCancer: false,
      parity: '',
      oralContraceptiveUse: '',
      hormonetherapy: false
    });
    setErrors({});
    setResult(null);
    setStep(1);
    setShowResult(false);
  };

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'low':
        return 'bg-green-50 border-green-200 text-green-800';
      case 'moderate':
        return 'bg-yellow-50 border-yellow-200 text-yellow-800';
      case 'high':
        return 'bg-orange-50 border-orange-200 text-orange-800';
      case 'very-high':
        return 'bg-red-50 border-red-200 text-red-800';
      default:
        return 'bg-gray-50 border-gray-200 text-gray-800';
    }
  };

  const getRiskIcon = (level: string) => {
    switch (level) {
      case 'low':
        return <CheckCircle className="w-6 h-6 text-green-600" />;
      case 'moderate':
        return <Info className="w-6 h-6 text-yellow-600" />;
      case 'high':
        return <AlertTriangle className="w-6 h-6 text-orange-600" />;
      case 'very-high':
        return <AlertCircle className="w-6 h-6 text-red-600" />;
      default:
        return <Info className="w-6 h-6 text-gray-600" />;
    }
  };

  const getStepIcon = (stepNumber: number) => {
    switch (stepNumber) {
      case 1:
        return <User className="w-5 h-5" />;
      case 2:
        return <Dna className="w-5 h-5" />;
      case 3:
        return <Activity className="w-5 h-5" />;
      default:
        return <Calculator className="w-5 h-5" />;
    }
  };

  return (
    <CalculatorContainer
      title="Ovarian Cancer Risk Assessment"
      subtitle="Evidence-based ovarian cancer risk evaluation with genetic and reproductive factor analysis"
      icon={Shield}
      gradient="obgyn"
    >
      <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as 'calculator' | 'about')} className="w-full space-y-6">
        <TabsList className="grid w-full grid-cols-2 bg-purple-50 border border-purple-200">
          <TabsTrigger value="calculator" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
            <Calculator className="w-4 h-4 mr-2" />
            Calculator
          </TabsTrigger>
          <TabsTrigger value="about" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
            <Info className="w-4 h-4 mr-2" />
            About
          </TabsTrigger>
        </TabsList>

        <TabsContent value="calculator" className="space-y-8">
          {/* Progress Indicator */}
          <div className="w-full bg-purple-50 border border-purple-200 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-purple-800">Risk Assessment Progress</h3>
              <span className="text-sm text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                Step {step} of 3
              </span>
            </div>
            
            <div className="flex items-center gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center">
                  <div className={`
                    flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors
                    ${step >= i 
                      ? 'bg-purple-600 border-purple-600 text-white' 
                      : 'bg-white border-purple-300 text-purple-400'
                    }
                  `}>
                    {getStepIcon(i)}
                  </div>
                  {i < 3 && (
                    <div className={`
                      w-16 h-1 mx-2 rounded transition-colors
                      ${step > i ? 'bg-purple-600' : 'bg-purple-200'}
                    `} />
                  )}
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-4 text-center">
              <div>
                <p className="text-sm font-medium text-purple-800">Demographics</p>
                <p className="text-xs text-purple-600">Age & reproductive history</p>
              </div>
              <div>
                <p className="text-sm font-medium text-purple-800">Genetic Factors</p>
                <p className="text-xs text-purple-600">BRCA & family history</p>
              </div>
              <div>
                <p className="text-sm font-medium text-purple-800">Risk Assessment</p>
                <p className="text-xs text-purple-600">Calculate & review</p>
              </div>
            </div>
          </div>

          {/* Step 1: Demographics & Reproductive History */}
          {step === 1 && (
            <Card className="border-purple-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-indigo-50 border-b border-purple-200">
                <CardTitle className="flex items-center gap-3 text-purple-800">
                  <User className="w-6 h-6 text-purple-600" />
                  Demographics & Reproductive History
                  <span className="text-sm bg-purple-100 text-purple-700 px-2 py-1 rounded-full ml-auto">
                    Step 1 of 3
                  </span>
              </CardTitle>
            </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <CalculatorInput
                    label="Patient Age"
                    value={formData.age}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('age', e.target.value)}
                    type="number"
                    placeholder="45"
                    min={18}
                    max={100}
                    unit="years"
                    error={errors.age}
                    helpText="Current age in years"
                    icon={User}
                    required
                  />

                  <CalculatorInput
                    label="Parity (Number of Births)"
                    value={formData.parity}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('parity', e.target.value)}
                    type="number"
                    placeholder="2"
                    min={0}
                    max={20}
                    unit="births"
                    error={errors.parity}
                    helpText="Total number of live births"
                    icon={Baby}
                    required
                  />
                </div>

                <div className="bg-pink-50 p-4 rounded-lg border border-pink-200">
                  <h4 className="font-semibold text-pink-800 mb-4 flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    Hormonal History
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <CalculatorInput
                      label="Oral Contraceptive Use"
                      value={formData.oralContraceptiveUse}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('oralContraceptiveUse', e.target.value)}
                      type="number"
                      placeholder="5"
                      min={0}
                      max={50}
                      step={0.5}
                      unit="years"
                      error={errors.oralContraceptiveUse}
                      helpText="Enter 0 if never used oral contraceptives"
                      icon={Target}
                      required
                    />

                    <div className="space-y-3 pt-6">
                      <CalculatorCheckbox
                        label="Hormone Replacement Therapy"
                        checked={formData.hormonetherapy}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('hormonetherapy', e.target.checked)}
                        description="Current or previous HRT use"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <CalculatorButton
                    onClick={handleNext}
                    disabled={!formData.age || !formData.parity || !formData.oralContraceptiveUse}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-8"
                  >
                    Next: Genetic Factors
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </CalculatorButton>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Genetic Risk Factors */}
          {step === 2 && (
            <Card className="border-purple-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-indigo-50 border-b border-purple-200">
                <CardTitle className="flex items-center gap-3 text-purple-800">
                  <Dna className="w-6 h-6 text-purple-600" />
                  Genetic Risk Factors
                  <span className="text-sm bg-purple-100 text-purple-700 px-2 py-1 rounded-full ml-auto">
                    Step 2 of 3
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                {/* Family History */}
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Family History of Cancer
                  </h4>
                  
                  <CalculatorSelect
                    label="Family Cancer History"
                    value={formData.familyHistory}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleInputChange('familyHistory', e.target.value)}
                    options={[
                      { value: 'none', label: 'No family history of cancer' },
                      { value: 'ovarian', label: 'Ovarian cancer history' },
                      { value: 'breast', label: 'Breast cancer history' },
                      { value: 'both', label: 'Both ovarian and breast cancer history' }
                    ]}
                    helpText="First or second-degree relatives with cancer history"
                    icon={Users}
                  />
                  </div>

                  {/* Genetic Mutations */}
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <h4 className="font-semibold text-red-800 mb-4 flex items-center gap-2">
                    <FlaskConical className="w-5 h-5" />
                    Known Genetic Mutations
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <CalculatorCheckbox
                      label="BRCA1 Mutation"
                        checked={formData.brca1}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('brca1', e.target.checked)}
                      description="Known pathogenic BRCA1 variant (17q21)"
                      />

                    <CalculatorCheckbox
                      label="BRCA2 Mutation"
                        checked={formData.brca2}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('brca2', e.target.checked)}
                      description="Known pathogenic BRCA2 variant (13q13)"
                      />

                    <CalculatorCheckbox
                      label="Lynch Syndrome"
                        checked={formData.lynchSyndrome}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('lynchSyndrome', e.target.checked)}
                      description="Hereditary nonpolyposis colorectal cancer (MLH1, MSH2, MSH6, PMS2)"
                      />

                    <CalculatorCheckbox
                      label="Personal Breast Cancer History"
                        checked={formData.personalBreastCancer}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('personalBreastCancer', e.target.checked)}
                      description="Previous diagnosis of breast cancer"
                      />
                  </div>
                </div>

                <div className="flex gap-4">
                  <CalculatorButton
                    onClick={handlePrevious}
                    variant="outline"
                    className="px-8"
                  >
                    Previous
                  </CalculatorButton>
                  <CalculatorButton
                    onClick={handleNext}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-8 flex-1"
                  >
                    Next: Calculate Risk
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </CalculatorButton>
              </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Risk Calculation */}
          {step === 3 && (
            <Card className="border-purple-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-indigo-50 border-b border-purple-200">
                <CardTitle className="flex items-center gap-3 text-purple-800">
                  <Activity className="w-6 h-6 text-purple-600" />
                  Risk Assessment Review
                  <span className="text-sm bg-purple-100 text-purple-700 px-2 py-1 rounded-full ml-auto">
                    Step 3 of 3
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                {/* Summary of inputs */}
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    Assessment Summary
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p><strong>Age:</strong> {formData.age} years</p>
                      <p><strong>Parity:</strong> {formData.parity} births</p>
                      <p><strong>OC Use:</strong> {formData.oralContraceptiveUse} years</p>
                      <p><strong>HRT:</strong> {formData.hormonetherapy ? 'Yes' : 'No'}</p>
                  </div>
                    <div>
                      <p><strong>Family History:</strong> {formData.familyHistory === 'none' ? 'None' : formData.familyHistory}</p>
                      <p><strong>BRCA1:</strong> {formData.brca1 ? 'Positive' : 'Negative'}</p>
                      <p><strong>BRCA2:</strong> {formData.brca2 ? 'Positive' : 'Negative'}</p>
                      <p><strong>Lynch Syndrome:</strong> {formData.lynchSyndrome ? 'Positive' : 'Negative'}</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CalculatorButton
                    onClick={handlePrevious}
                    variant="outline"
                    className="px-8"
                  >
                    Previous
                  </CalculatorButton>
                  <CalculatorButton
                    onClick={handleCalculate}
                    disabled={isLoading}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-8 flex-1"
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Calculating Risk...
                      </>
                    ) : (
                      <>
                        <Calculator className="w-4 h-4 mr-2" />
                        Calculate Risk Assessment
                      </>
                    )}
                  </CalculatorButton>
              </div>

                <CalculatorButton
                  onClick={handleReset}
                  variant="outline"
                  className="w-full mt-4"
                >
                  Reset All Fields
                </CalculatorButton>
              </CardContent>
            </Card>
          )}

          {/* Results Section */}
          {showResult && result && (
            <div id="ovarian-results">
              <ResultsDisplay
                title="Ovarian Cancer Risk Assessment"
                value={result.category.charAt(0).toUpperCase() + result.category.slice(1) + ' Risk'}
                category={result.category === 'low' ? 'low' : result.category === 'moderate' ? 'intermediate' : 'high'}
                interpretation={result.interpretation}
                icon={Shield}
              >
                {/* Risk Assessment Card */}
                <div className={`p-6 rounded-xl border-2 ${getRiskColor(result.category)} mb-6`}>
                  <div className="flex items-center gap-4 mb-4">
                    {getRiskIcon(result.category)}
                    <div>
                      <h3 className="text-xl font-bold">
                        {result.category.charAt(0).toUpperCase() + result.category.slice(1)} Risk Level
                      </h3>
                      <p className="text-sm font-medium">Lifetime Risk: {result.lifetimeRisk}%</p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed">{result.interpretation}</p>
                </div>

                {/* Management Strategy Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <Stethoscope className="w-5 h-5 text-blue-600" />
                      <h4 className="font-semibold text-blue-800">Management Recommendation</h4>
                    </div>
                    <p className="text-sm text-blue-700">
                      Based on risk assessment, follow evidence-based guidelines for monitoring and prevention.
                    </p>
                  </div>

                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <Clock className="w-5 h-5 text-purple-600" />
                      <h4 className="font-semibold text-purple-800">Screening Recommendation</h4>
                    </div>
                    <p className="text-sm text-purple-700">
                      {result.screeningRecommendation}
                    </p>
                  </div>
              </div>

                {/* Genetic Counseling */}
                {result.prophylacticSurgeryDiscussion && (
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-orange-800 mb-3 flex items-center gap-2">
                      <FlaskConical className="w-5 h-5" />
                      Prophylactic Surgery Discussion Recommended
                    </h4>
                    <div className="text-sm text-orange-700 flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span>Discuss prophylactic bilateral salpingo-oophorectomy with genetic counselor for high-risk patients</span>
                    </div>
                  </div>
                )}

                {/* Clinical Recommendations */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Clinical Recommendations
                  </h4>
                  <div className="space-y-2">
                    {result.recommendations.map((rec: string, index: number) => (
                      <div key={index} className="text-sm text-green-700 flex items-start gap-3">
                        <Star className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{rec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Share Results */}
                <CalculatorResultShare
                  calculatorName="Ovarian Cancer Risk Assessment"
                  calculatorId="ovarian-cancer-risk"
                  results={{
                    riskLevel: result.category,
                    lifetimeRisk: `${result.lifetimeRisk}%`,
                    riskMultiplier: `${result.riskMultiplier}x`,
                    screeningRecommendation: result.screeningRecommendation,
                    prophylacticSurgeryDiscussion: result.prophylacticSurgeryDiscussion ? 'Yes' : 'No'
                  }}
                  interpretation={result.interpretation}
                  recommendations={result.recommendations}
                  riskLevel={result.category === 'low' ? 'low' : result.category === 'moderate' ? 'intermediate' : 'high'}
                />
              </ResultsDisplay>
              </div>
          )}
        </TabsContent>

        <TabsContent value="about" className="space-y-6">
          <Card className="border-purple-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-indigo-50 border-b border-purple-200">
              <CardTitle className="flex items-center gap-3 text-purple-800">
                <Info className="w-6 h-6 text-purple-600" />
                About Ovarian Cancer Risk Assessment
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-800 mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Clinical Purpose
                </h3>
                <p className="text-purple-700 mb-3">
                  This calculator provides comprehensive ovarian cancer risk assessment incorporating genetic, 
                  family history, and reproductive factors to guide screening and prevention strategies.
                </p>
                <p className="text-purple-700">
                  Ovarian cancer has the highest mortality among gynecologic cancers, making risk stratification 
                  crucial for early detection and prevention in high-risk populations. Risk-based management 
                  optimizes surveillance while minimizing unnecessary interventions.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h3 className="font-semibold text-red-800 mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    High-Risk Factors
                  </h3>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• BRCA1 mutation (39-46% lifetime risk)</li>
                    <li>• BRCA2 mutation (12-20% lifetime risk)</li>
                    <li>• Lynch syndrome (9-12% lifetime risk)</li>
                    <li>• Strong family history (2+ relatives)</li>
                    <li>• Personal breast cancer history</li>
                    <li>• Ashkenazi Jewish ancestry</li>
                    <li>• Nulliparity (no pregnancies)</li>
                    <li>• Late menopause (&gt;55 years)</li>
                    <li>• Hormone replacement therapy</li>
                    <li>• Endometriosis</li>
                    <li>• Talc exposure (perineal use)</li>
                  </ul>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h3 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Protective Factors
                  </h3>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Oral contraceptive use (5+ years)</li>
                    <li>• Multiparity (2+ pregnancies)</li>
                    <li>• Extended breastfeeding (&gt;12 months)</li>
                    <li>• Tubal ligation</li>
                    <li>• Hysterectomy (with ovaries retained)</li>
                    <li>• Early menopause (&lt;45 years)</li>
                    <li>• Prophylactic oophorectomy</li>
                    <li>• Lower BMI (&lt;25 kg/m²)</li>
                    <li>• NSAID use (aspirin)</li>
                    <li>• Mediterranean diet</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Risk-Based Management Strategies
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-blue-800 mb-2">Very High Risk (BRCA1/2, Lynch Syndrome)</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Consider prophylactic bilateral salpingo-oophorectomy (PBSO)</li>
                      <li>• Enhanced surveillance: CA-125 + transvaginal ultrasound q6months</li>
                      <li>• Annual pelvic MRI for very high-risk patients</li>
                      <li>• Genetic counseling and family cascade testing</li>
                      <li>• Risk-reducing strategies counseling</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-blue-800 mb-2">Moderate Risk (Family History)</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Enhanced surveillance with CA-125 + TVS annually</li>
                      <li>• Genetic counseling evaluation</li>
                      <li>• Risk factor modification counseling</li>
                      <li>• Symptom awareness education</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-blue-800 mb-2">Average Risk (General Population)</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• No routine screening recommended (insufficient evidence)</li>
                      <li>• Symptom awareness and education</li>
                      <li>• Risk factor modification (OC use, family planning)</li>
                      <li>• Annual pelvic examination</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-yellow-800 mb-4 flex items-center gap-2">
                  <Stethoscope className="w-5 h-5" />
                  Clinical Symptom Recognition
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-yellow-800 mb-2">Early Warning Signs (Often Subtle)</h4>
                    <ul className="text-sm text-yellow-700 space-y-1">
                      <li>• Persistent abdominal bloating or distension</li>
                      <li>• Difficulty eating or feeling full quickly</li>
                      <li>• Pelvic or abdominal pain</li>
                      <li>• Urinary urgency or frequency</li>
                      <li>• Unusual fatigue</li>
                      <li>• Irregular menstrual bleeding</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-yellow-800 mb-2">Advanced Disease Signs</h4>
                    <ul className="text-sm text-yellow-700 space-y-1">
                      <li>• Ascites (abdominal fluid accumulation)</li>
                      <li>• Bowel obstruction symptoms</li>
                      <li>• Pleural effusion (shortness of breath)</li>
                      <li>• Palpable adnexal masses</li>
                      <li>• Significant weight loss</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-orange-800 mb-4 flex items-center gap-2">
                  <FlaskConical className="w-5 h-5" />
                  Genetic Testing Considerations
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-orange-800 mb-2">BRCA Testing Indications</h4>
                    <ul className="text-sm text-orange-700 space-y-1">
                      <li>• Personal history: Breast cancer ≤45 years</li>
                      <li>• Personal history: Triple-negative breast cancer ≤60 years</li>
                      <li>• Personal history: Ovarian cancer at any age</li>
                      <li>• Family history: ≥2 breast cancers (same side of family)</li>
                      <li>• Family history: Breast and ovarian cancer</li>
                      <li>• Family history: Male breast cancer</li>
                      <li>• Ashkenazi Jewish ancestry with relevant history</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-orange-800 mb-2">Lynch Syndrome Testing</h4>
                    <ul className="text-sm text-orange-700 space-y-1">
                      <li>• Colorectal cancer &lt;50 years</li>
                      <li>• Endometrial cancer &lt;50 years</li>
                      <li>• Multiple Lynch-associated cancers</li>
                      <li>• Family history meeting Amsterdam criteria</li>
                      <li>• Tumor microsatellite instability (MSI-H)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Clinical Guidelines & Evidence
                </h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li><strong>NCCN Guidelines v2024.1:</strong> Ovarian cancer screening and risk reduction strategies</li>
                  <li><strong>SGO Clinical Practice Statement:</strong> Genetic testing for hereditary breast and ovarian cancer</li>
                  <li><strong>ACOG Practice Bulletin No. 182:</strong> Hereditary cancer syndromes and risk assessment</li>
                  <li><strong>USPSTF 2018:</strong> Risk assessment, genetic counseling, and genetic testing for BRCA-related cancer</li>
                  <li><strong>ESMO Guidelines:</strong> Hereditary breast and ovarian cancer syndrome management</li>
                  <li><strong>NICE Guidelines CG164:</strong> Familial breast cancer classification and care</li>
                  <li><strong>CDC Tier 1 Evidence:</strong> BRCA testing for women with family history</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </CalculatorContainer>
  );
};

export default OvarianCancerRiskCalculator; 