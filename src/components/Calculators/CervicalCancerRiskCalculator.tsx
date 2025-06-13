import React, { useState } from 'react';
import { Shield, AlertTriangle, Info, CheckCircle, Star, User, FileText, Activity, Clock, Target, Calculator, TrendingUp, Stethoscope, Award, ArrowRight, Users, Calendar, AlertCircle, Microscope, Dna, Heart } from 'lucide-react';
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
import { CervicalCancerRiskInput, CervicalCancerRiskResult } from '../../types/obgyn-calculators';

interface FormData {
  age: string;
  hpvStatus: 'negative' | 'positive-low-risk' | 'positive-high-risk' | 'unknown';
  cytologyResult: 'normal' | 'ascus' | 'lsil' | 'hsil' | 'agc' | 'asc-h';
  previousAbnormalScreening: boolean;
  smokingStatus: boolean;
  immunocompromised: boolean;
  screeningHistory: 'adequate' | 'inadequate' | 'never-screened';
}

interface Errors {
  age?: string;
  hpvStatus?: string;
  cytologyResult?: string;
}

const CervicalCancerRiskCalculator: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    age: '',
    hpvStatus: 'unknown',
    cytologyResult: 'normal',
    previousAbnormalScreening: false,
    smokingStatus: false,
    immunocompromised: false,
    screeningHistory: 'adequate'
  });
  
  const [errors, setErrors] = useState<Errors>({});
  const [result, setResult] = useState<CervicalCancerRiskResult | null>(null);
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
      const input: CervicalCancerRiskInput = {
        age: formData.age,
        hpvStatus: formData.hpvStatus,
        cytologyResult: formData.cytologyResult,
        previousAbnormalScreening: formData.previousAbnormalScreening,
        smokingStatus: formData.smokingStatus,
        immunocompromised: formData.immunocompromised,
        screeningHistory: formData.screeningHistory,
        calculationDate: new Date().toISOString()
      };

      // Validate input
      const validation = validateOBGYNInput('cervical-cancer-risk', input);
      if (!validation.isValid) {
        const fieldErrors: Errors = {};
        validation.errors.forEach(error => {
          if (error.includes('age')) fieldErrors.age = error;
          if (error.includes('HPV')) fieldErrors.hpvStatus = error;
          if (error.includes('cytology')) fieldErrors.cytologyResult = error;
        });
        setErrors(fieldErrors);
        return;
      }

      const calculationResult = calculateOBGYN('cervical-cancer-risk', input) as CervicalCancerRiskResult;
      setResult(calculationResult);
      setShowResult(true);
      
      // Scroll to results
      setTimeout(() => {
        const resultsElement = document.getElementById('cervical-results');
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
      hpvStatus: 'unknown',
      cytologyResult: 'normal',
      previousAbnormalScreening: false,
      smokingStatus: false,
      immunocompromised: false,
      screeningHistory: 'adequate'
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
        return <Microscope className="w-5 h-5" />;
      case 3:
        return <Activity className="w-5 h-5" />;
      default:
        return <Calculator className="w-5 h-5" />;
    }
  };

  return (
    <CalculatorContainer
      title="Cervical Cancer Risk Assessment"
      subtitle="ASCCP guideline-based cervical cancer risk assessment and management recommendations"
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
              <h3 className="text-lg font-semibold text-purple-800">Assessment Progress</h3>
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
                <p className="text-xs text-purple-600">Basic information</p>
              </div>
              <div>
                <p className="text-sm font-medium text-purple-800">Test Results</p>
                <p className="text-xs text-purple-600">HPV & cytology</p>
              </div>
              <div>
                <p className="text-sm font-medium text-purple-800">Risk Factors</p>
                <p className="text-xs text-purple-600">Clinical history</p>
              </div>
            </div>
          </div>

          {/* Step 1: Demographics */}
          {step === 1 && (
            <Card className="border-purple-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-indigo-50 border-b border-purple-200">
                <CardTitle className="flex items-center gap-3 text-purple-800">
                  <User className="w-6 h-6 text-purple-600" />
                  Patient Demographics
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
                    placeholder="32"
                    min={18}
                    max={100}
                    unit="years"
                    error={errors.age}
                    helpText="Current age in years"
                    icon={User}
                    required
                  />

                  <CalculatorSelect
                    label="Screening History"
                    value={formData.screeningHistory}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleInputChange('screeningHistory', e.target.value)}
                    options={[
                      { value: 'adequate', label: 'Adequate screening history' },
                      { value: 'inadequate', label: 'Inadequate screening history' },
                      { value: 'never-screened', label: 'Never been screened' }
                    ]}
                    helpText="Previous cervical cancer screening participation"
                    icon={Calendar}
                  />
                </div>

                <div className="flex justify-end">
                  <CalculatorButton
                    onClick={handleNext}
                    disabled={!formData.age}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-8"
                  >
                    Next: Test Results
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </CalculatorButton>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 2: HPV and Cytology Results */}
          {step === 2 && (
            <Card className="border-purple-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-indigo-50 border-b border-purple-200">
                <CardTitle className="flex items-center gap-3 text-purple-800">
                  <Microscope className="w-6 h-6 text-purple-600" />
                  HPV & Cytology Test Results
                  <span className="text-sm bg-purple-100 text-purple-700 px-2 py-1 rounded-full ml-auto">
                    Step 2 of 3
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                {/* HPV Testing */}
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-4 flex items-center gap-2">
                    <Dna className="w-5 h-5" />
                    HPV Test Result
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                      <CalculatorCheckbox
                        label="HPV Positive (High-risk types)"
                          checked={formData.hpvStatus === 'positive-high-risk'}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                          handleInputChange('hpvStatus', e.target.checked ? 'positive-high-risk' : 'unknown')
                        }
                        description="Types 16, 18, 31, 33, 35, 39, 45, 51, 52, 56, 58, 59, 68"
                      />
                      
                      <CalculatorCheckbox
                        label="HPV Positive (Low-risk types)"
                          checked={formData.hpvStatus === 'positive-low-risk'}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                          handleInputChange('hpvStatus', e.target.checked ? 'positive-low-risk' : 'unknown')
                        }
                        description="Types 6, 11, and other low-risk types"
                      />
                  </div>

                  <div className="space-y-3">
                      <CalculatorCheckbox
                        label="HPV Negative"
                        checked={formData.hpvStatus === 'negative'}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                          handleInputChange('hpvStatus', e.target.checked ? 'negative' : 'unknown')
                        }
                        description="No HPV DNA detected"
                        />
                      
                      <CalculatorCheckbox
                        label="HPV Unknown/Not tested"
                        checked={formData.hpvStatus === 'unknown'}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                          handleInputChange('hpvStatus', e.target.checked ? 'unknown' : 'negative')
                        }
                        description="HPV testing not performed or results unavailable"
                      />
                    </div>
                  </div>
                </div>

                {/* Cytology Results */}
                <div className="bg-pink-50 p-4 rounded-lg border border-pink-200">
                  <h4 className="font-semibold text-pink-800 mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    Cytology (Pap Test) Result
                  </h4>
                  
                  <CalculatorSelect
                    label="Cytology Result"
                    value={formData.cytologyResult}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleInputChange('cytologyResult', e.target.value)}
                    options={[
                      { value: 'normal', label: 'Normal/NILM (Negative for Intraepithelial Lesion)' },
                      { value: 'ascus', label: 'ASCUS (Atypical Squamous Cells of Undetermined Significance)' },
                      { value: 'lsil', label: 'LSIL (Low-grade Squamous Intraepithelial Lesion)' },
                      { value: 'hsil', label: 'HSIL (High-grade Squamous Intraepithelial Lesion)' },
                      { value: 'asc-h', label: 'ASC-H (Atypical Squamous Cells, Cannot Exclude HSIL)' },
                      { value: 'agc', label: 'AGC (Atypical Glandular Cells)' }
                    ]}
                    helpText="Most recent cervical cytology (Pap test) result"
                    icon={Microscope}
                  />
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
                    Next: Risk Factors
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </CalculatorButton>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Clinical Risk Factors */}
          {step === 3 && (
            <Card className="border-purple-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-indigo-50 border-b border-purple-200">
                <CardTitle className="flex items-center gap-3 text-purple-800">
                  <Activity className="w-6 h-6 text-purple-600" />
                  Clinical Risk Factors
                  <span className="text-sm bg-purple-100 text-purple-700 px-2 py-1 rounded-full ml-auto">
                    Step 3 of 3
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                {/* Medical History Risk Factors */}
                <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                  <h4 className="font-semibold text-orange-800 mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Medical History
                  </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <CalculatorCheckbox
                      label="Previous Abnormal Screening"
                      checked={formData.previousAbnormalScreening}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('previousAbnormalScreening', e.target.checked)}
                      description="History of abnormal Pap tests or HPV results"
                    />
                    
                    <CalculatorCheckbox
                      label="Immunocompromised Status"
                      checked={formData.immunocompromised}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('immunocompromised', e.target.checked)}
                      description="HIV, organ transplant, immunosuppressive therapy"
                    />
                  </div>
                    </div>

                {/* Lifestyle Risk Factors */}
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <h4 className="font-semibold text-red-800 mb-4 flex items-center gap-2">
                    <Heart className="w-5 h-5" />
                    Lifestyle Factors
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <CalculatorCheckbox
                      label="Current Smoker"
                      checked={formData.smokingStatus}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('smokingStatus', e.target.checked)}
                      description="Active tobacco use (increases cervical cancer risk)"
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
            <div id="cervical-results">
              <ResultsDisplay
                title="Cervical Cancer Risk Assessment"
                value={result.riskLevel.charAt(0).toUpperCase() + result.riskLevel.slice(1) + ' Risk'}
                category={result.riskLevel === 'minimal' || result.riskLevel === 'low' ? 'low' : result.riskLevel === 'intermediate' ? 'intermediate' : 'high'}
                interpretation={result.interpretation}
                icon={Shield}
              >
                {/* Risk Assessment Card */}
                <div className={`p-6 rounded-xl border-2 ${getRiskColor(result.riskLevel)} mb-6`}>
                  <div className="flex items-center gap-4 mb-4">
                    {getRiskIcon(result.riskLevel)}
                    <div>
                      <h3 className="text-xl font-bold">
                        {result.riskLevel.charAt(0).toUpperCase() + result.riskLevel.slice(1)} Risk Level
                      </h3>
                      <p className="text-sm font-medium">Follow-up: {result.followUpInterval}</p>
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
                      {result.managementRecommendation}
                    </p>
                  </div>

                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <Clock className="w-5 h-5 text-purple-600" />
                      <h4 className="font-semibold text-purple-800">Follow-up Interval</h4>
                    </div>
                    <p className="text-sm text-purple-700">
                      {result.followUpInterval}
                    </p>
                  </div>
                </div>

                {/* Colposcopy Recommendation */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    ASCCP Management Recommendations
                  </h4>
                  <div className="space-y-2">
                    <div className="text-sm text-green-700 flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{result.managementRecommendation}</span>
                    </div>
                    {result.colposcopyRecommended && (
                      <div className="text-sm text-green-700 flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Colposcopy examination recommended</span>
                      </div>
                    )}
                </div>
              </div>

                {/* Clinical Recommendations */}
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-orange-800 mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    Clinical Recommendations
                  </h4>
                  <div className="space-y-2">
                    {result.recommendations.map((rec: string, index: number) => (
                      <div key={index} className="text-sm text-orange-700 flex items-start gap-3">
                        <Star className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                        <span>{rec}</span>
              </div>
                    ))}
                  </div>
                </div>

                {/* Share Results */}
                <CalculatorResultShare
                  calculatorName="Cervical Cancer Risk Assessment"
                  calculatorId="cervical-cancer-risk"
                  results={{
                    riskLevel: result.riskLevel,
                    followUpInterval: result.followUpInterval,
                    managementRecommendation: result.managementRecommendation,
                    colposcopyRecommended: result.colposcopyRecommended ? 'Yes' : 'No'
                  }}
                  interpretation={result.interpretation}
                  recommendations={result.recommendations}
                  riskLevel={result.riskLevel === 'minimal' || result.riskLevel === 'low' ? 'low' : result.riskLevel === 'intermediate' ? 'intermediate' : 'high'}
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
                About Cervical Cancer Risk Assessment
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-800 mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Clinical Purpose
                </h3>
                <p className="text-purple-700 mb-3">
                  This calculator provides comprehensive cervical cancer risk assessment based on ASCCP 
                  (American Society for Colposcopy and Cervical Pathology) guidelines and established clinical risk factors.
                </p>
                <p className="text-purple-700">
                  Cervical cancer is highly preventable through effective screening and vaccination. Risk-based 
                  management optimizes outcomes while reducing overtreatment and patient anxiety.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h3 className="font-semibold text-red-800 mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    High-Risk Factors
                  </h3>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• High-risk HPV infection (16, 18, others)</li>
                    <li>• High-grade cytology (HSIL, ASC-H)</li>
                    <li>• Immunocompromised status</li>
                    <li>• Prior abnormal screening</li>
                    <li>• Smoking (current)</li>
                    <li>• Multiple sexual partners</li>
                    <li>• Early age at first intercourse</li>
                    <li>• Long-term oral contraceptive use</li>
                  </ul>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h3 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Protective Factors
                  </h3>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• HPV vaccination</li>
                    <li>• Regular screening participation</li>
                    <li>• HPV-negative status</li>
                    <li>• Normal cytology</li>
                    <li>• Monogamous relationships</li>
                    <li>• No smoking history</li>
                    <li>• Normal immune function</li>
                    <li>• Adequate screening history</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  ASCCP Risk-Based Management
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-blue-800 mb-2">Immediate Risk Categories</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• <strong>CIN 3+ risk ≥60%:</strong> Immediate treatment recommended</li>
                      <li>• <strong>CIN 3+ risk 25-59%:</strong> Colposcopy recommended</li>
                      <li>• <strong>CIN 3+ risk &lt;25%:</strong> Surveillance or routine screening</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-blue-800 mb-2">Management Strategies</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Risk-based colposcopy referral thresholds</li>
                      <li>• HPV testing algorithms</li>
                      <li>• Enhanced surveillance protocols</li>
                      <li>• HPV vaccination recommendations</li>
                      <li>• Patient counseling guidelines</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-yellow-800 mb-4 flex items-center gap-2">
                  <Microscope className="w-5 h-5" />
                  Screening Guidelines Summary
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-yellow-800 mb-2">Age-Based Screening</h4>
                    <ul className="text-sm text-yellow-700 space-y-1">
                      <li>• Ages 21-29: Cytology alone every 3 years</li>
                      <li>• Ages 30-65: HPV testing every 5 years (preferred) OR</li>
                      <li>• Ages 30-65: HPV/cytology co-testing every 5 years OR</li>
                      <li>• Ages 30-65: Cytology alone every 3 years</li>
                      <li>• Ages &gt;65: Discontinue if adequate screening history</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-yellow-800 mb-2">Special Populations</h4>
                    <ul className="text-sm text-yellow-700 space-y-1">
                      <li>• Immunocompromised: More frequent screening</li>
                      <li>• Post-hysterectomy: Generally discontinue if no CIN 2+ history</li>
                      <li>• HPV vaccinated: Follow standard guidelines</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Clinical Guidelines
                </h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li><strong>ASCCP Guidelines 2019:</strong> Risk-based management of cervical screening abnormalities</li>
                  <li><strong>USPSTF 2018:</strong> Screening for cervical cancer recommendations</li>
                  <li><strong>ACOG Practice Bulletin No. 168:</strong> Cervical cancer screening and prevention</li>
                  <li><strong>ACS/ASCCP/ASCP Guidelines:</strong> Cervical cancer prevention and early detection</li>
                  <li><strong>CDC Guidelines:</strong> Cervical cancer screening guidelines for healthcare providers</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </CalculatorContainer>
  );
};

export default CervicalCancerRiskCalculator; 