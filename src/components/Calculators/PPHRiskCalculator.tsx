import React, { useState } from 'react';
import { Droplets, AlertTriangle, Shield, Activity, Heart, Info, CheckCircle, Star, User, Baby, Clock, Target, Calculator, TrendingUp, Stethoscope, Award, ArrowRight, Users, FileText, Calendar, AlertCircle } from 'lucide-react';
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
import { calculatePPHRisk, validateOBGYNInput } from '../../services/obgynCalculatorService';
import { PPHRiskInput, PPHRiskResult } from '../../types/obgyn-calculators';

interface FormData {
  maternalAge: string;
  bmi: string;
  parity: string;
  previousPPH: boolean;
  multipleGestation: boolean;
  polyhydramnios: boolean;
  macrosomia: boolean;
  prolongedLabor: boolean;
  chorioamnionitis: boolean;
  placenta: 'normal' | 'previa' | 'accreta' | 'abruption';
  anticoagulation: boolean;
}

interface Errors {
  maternalAge?: string;
  bmi?: string;
  parity?: string;
}

const PPHRiskCalculator: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    maternalAge: '',
    bmi: '',
    parity: '',
    previousPPH: false,
    multipleGestation: false,
    polyhydramnios: false,
    macrosomia: false,
    prolongedLabor: false,
    chorioamnionitis: false,
    placenta: 'normal',
    anticoagulation: false,
  });

  const [errors, setErrors] = useState<Errors>({});
  const [result, setResult] = useState<PPHRiskResult | null>(null);
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
      if (!formData.maternalAge) {
        newErrors.maternalAge = 'Maternal age is required';
      } else if (Number(formData.maternalAge) < 15 || Number(formData.maternalAge) > 55) {
        newErrors.maternalAge = 'Please enter a valid maternal age (15-55 years)';
      }

      if (!formData.bmi) {
        newErrors.bmi = 'BMI is required';
      } else if (Number(formData.bmi) < 15 || Number(formData.bmi) > 60) {
        newErrors.bmi = 'Please enter a valid BMI (15-60 kg/m²)';
      }

      if (!formData.parity) {
        newErrors.parity = 'Parity is required';
      } else if (Number(formData.parity) < 0 || Number(formData.parity) > 20) {
        newErrors.parity = 'Please enter a valid parity (0-20)';
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
      const input: PPHRiskInput = {
        maternalAge: formData.maternalAge,
        bmi: formData.bmi,
        parity: formData.parity,
        previousPPH: formData.previousPPH,
        multipleGestation: formData.multipleGestation,
        polyhydramnios: formData.polyhydramnios,
        macrosomia: formData.macrosomia,
        prolongedLabor: formData.prolongedLabor,
        chorioamnionitis: formData.chorioamnionitis,
        placenta: formData.placenta,
        anticoagulation: formData.anticoagulation,
      };

      // Validate input
      const validation = validateOBGYNInput('pph-risk', input);
      if (!validation.isValid) {
        const fieldErrors: Errors = {};
        validation.errors.forEach(error => {
          if (error.includes('age')) fieldErrors.maternalAge = error;
          if (error.includes('BMI')) fieldErrors.bmi = error;
          if (error.includes('parity')) fieldErrors.parity = error;
        });
        setErrors(fieldErrors);
        return;
      }

      const calculationResult = calculatePPHRisk(input);
      setResult(calculationResult);
      setShowResult(true);
      
      // Scroll to results
      setTimeout(() => {
        const resultsElement = document.getElementById('pph-results');
        if (resultsElement) {
          resultsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } catch (error) {
      console.error('Calculation error:', error);
      setErrors({ maternalAge: 'An error occurred during calculation. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      maternalAge: '',
      bmi: '',
      parity: '',
      previousPPH: false,
      multipleGestation: false,
      polyhydramnios: false,
      macrosomia: false,
      prolongedLabor: false,
      chorioamnionitis: false,
      placenta: 'normal',
      anticoagulation: false,
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
        return <AlertTriangle className="w-6 h-6 text-yellow-600" />;
      case 'high':
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
        return <FileText className="w-5 h-5" />;
      case 3:
        return <Activity className="w-5 h-5" />;
      default:
        return <Calculator className="w-5 h-5" />;
    }
  };

  return (
    <CalculatorContainer
      title="Postpartum Hemorrhage Risk Assessment"
      subtitle="Comprehensive assessment tool for evaluating PPH risk factors and implementing preventive strategies"
      icon={Droplets}
      gradient="obgyn"
    >
      <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as 'calculator' | 'about')} className="w-full space-y-6">
        <TabsList className="grid w-full grid-cols-2 bg-red-50 border border-red-200">
          <TabsTrigger value="calculator" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
            <Calculator className="w-4 h-4 mr-2" />
            Calculator
          </TabsTrigger>
          <TabsTrigger value="about" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
            <Info className="w-4 h-4 mr-2" />
            About
          </TabsTrigger>
        </TabsList>

        <TabsContent value="calculator" className="space-y-8">
          {/* Progress Indicator */}
          <div className="w-full bg-red-50 border border-red-200 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-red-800">Assessment Progress</h3>
              <span className="text-sm text-red-600 bg-red-100 px-3 py-1 rounded-full">
                Step {step} of 3
              </span>
            </div>
            
            <div className="flex items-center gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center">
                  <div className={`
                    flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors
                    ${step >= i 
                      ? 'bg-red-600 border-red-600 text-white' 
                      : 'bg-white border-red-300 text-red-400'
                    }
                  `}>
                    {getStepIcon(i)}
                  </div>
                  {i < 3 && (
                    <div className={`
                      w-16 h-1 mx-2 rounded transition-colors
                      ${step > i ? 'bg-red-600' : 'bg-red-200'}
                    `} />
                  )}
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-4 text-center">
              <div>
                <p className="text-sm font-medium text-red-800">Demographics</p>
                <p className="text-xs text-red-600">Basic information</p>
              </div>
              <div>
                <p className="text-sm font-medium text-red-800">Medical History</p>
                <p className="text-xs text-red-600">Risk factors</p>
              </div>
              <div>
                <p className="text-sm font-medium text-red-800">Current Pregnancy</p>
                <p className="text-xs text-red-600">Labor factors</p>
              </div>
            </div>
          </div>

          {/* Step 1: Demographics */}
          {step === 1 && (
            <Card className="border-red-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-red-50 to-pink-50 border-b border-red-200">
                <CardTitle className="flex items-center gap-3 text-red-800">
                  <User className="w-6 h-6 text-red-600" />
                  Maternal Demographics
                  <span className="text-sm bg-red-100 text-red-700 px-2 py-1 rounded-full ml-auto">
                    Step 1 of 3
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <CalculatorInput
                    label="Maternal Age"
                    value={formData.maternalAge}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('maternalAge', e.target.value)}
                    type="number"
                    placeholder="32"
                    min={15}
                    max={55}
                    unit="years"
                    error={errors.maternalAge}
                    helpText="Current age in years"
                    icon={User}
                    required
                  />

                  <CalculatorInput
                    label="Body Mass Index"
                    value={formData.bmi}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('bmi', e.target.value)}
                    type="number"
                    step={0.1}
                    placeholder="25.0"
                    min={15}
                    max={60}
                    unit="kg/m²"
                    error={errors.bmi}
                    helpText="Pre-pregnancy or early pregnancy BMI"
                    icon={Activity}
                    required
                  />

                  <CalculatorInput
                    label="Parity"
                    value={formData.parity}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('parity', e.target.value)}
                    type="number"
                    placeholder="2"
                    min={0}
                    max={20}
                    unit="previous births"
                    error={errors.parity}
                    helpText="Number of previous births ≥20 weeks"
                    icon={Baby}
                    required
                  />
                </div>

                <div className="flex justify-end">
                  <CalculatorButton
                    onClick={handleNext}
                    disabled={!formData.maternalAge || !formData.bmi || !formData.parity}
                    className="bg-red-600 hover:bg-red-700 text-white px-8"
                  >
                    Next: Medical History
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </CalculatorButton>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Medical History */}
          {step === 2 && (
            <Card className="border-red-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-red-50 to-pink-50 border-b border-red-200">
                <CardTitle className="flex items-center gap-3 text-red-800">
                  <FileText className="w-6 h-6 text-red-600" />
                  Medical History & Risk Factors
                  <span className="text-sm bg-red-100 text-red-700 px-2 py-1 rounded-full ml-auto">
                    Step 2 of 3
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <h4 className="font-semibold text-red-800 mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Previous Obstetric History
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <CalculatorCheckbox
                      label="Previous Postpartum Hemorrhage"
                      checked={formData.previousPPH}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('previousPPH', e.target.checked)}
                      description="History of PPH in previous deliveries"
                    />
                    
                    <CalculatorCheckbox
                      label="Anticoagulation Therapy"
                      checked={formData.anticoagulation}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('anticoagulation', e.target.checked)}
                      description="Currently on anticoagulant medications"
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
                    className="bg-red-600 hover:bg-red-700 text-white px-8 flex-1"
                  >
                    Next: Current Pregnancy
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </CalculatorButton>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Current Pregnancy & Labor Factors */}
          {step === 3 && (
            <Card className="border-red-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-red-50 to-pink-50 border-b border-red-200">
                <CardTitle className="flex items-center gap-3 text-red-800">
                  <Activity className="w-6 h-6 text-red-600" />
                  Current Pregnancy & Labor Factors
                  <span className="text-sm bg-red-100 text-red-700 px-2 py-1 rounded-full ml-auto">
                    Step 3 of 3
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                {/* Current Pregnancy Factors */}
                <div className="bg-pink-50 p-4 rounded-lg border border-pink-200">
                  <h4 className="font-semibold text-pink-800 mb-4 flex items-center gap-2">
                    <Baby className="w-5 h-5" />
                    Current Pregnancy Factors
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <CalculatorCheckbox
                      label="Multiple Gestation"
                      checked={formData.multipleGestation}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('multipleGestation', e.target.checked)}
                      description="Twins, triplets, or higher multiples"
                    />
                    
                    <CalculatorCheckbox
                      label="Polyhydramnios"
                      checked={formData.polyhydramnios}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('polyhydramnios', e.target.checked)}
                      description="Excessive amniotic fluid volume"
                    />
                    
                    <CalculatorCheckbox
                      label="Macrosomia"
                      checked={formData.macrosomia}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('macrosomia', e.target.checked)}
                      description="Estimated fetal weight ≥4000g"
                    />
                    
                    <CalculatorCheckbox
                      label="Chorioamnionitis"
                      checked={formData.chorioamnionitis}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('chorioamnionitis', e.target.checked)}
                      description="Intraamniotic infection/inflammation"
                    />
                  </div>
                </div>

                {/* Labor & Delivery Factors */}
                <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                  <h4 className="font-semibold text-orange-800 mb-4 flex items-center gap-2">
                    <Heart className="w-5 h-5" />
                    Labor & Delivery Factors
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <CalculatorCheckbox
                      label="Prolonged Labor"
                      checked={formData.prolongedLabor}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('prolongedLabor', e.target.checked)}
                      description="Labor dystocia or arrest disorders"
                    />
                    
                    <div className="space-y-3">
                      <CalculatorSelect
                        label="Placental Condition"
                        value={formData.placenta}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleInputChange('placenta', e.target.value)}
                        options={[
                          { value: 'normal', label: 'Normal Placenta' },
                          { value: 'previa', label: 'Placenta Previa' },
                          { value: 'accreta', label: 'Placenta Accreta' },
                          { value: 'abruption', label: 'Placental Abruption' }
                        ]}
                        helpText="Select the most appropriate placental condition"
                        icon={Target}
                      />
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
                    className="bg-red-600 hover:bg-red-700 text-white px-8 flex-1"
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Calculating Risk...
                      </>
                    ) : (
                      <>
                        <Calculator className="w-4 h-4 mr-2" />
                        Calculate PPH Risk
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
            <div id="pph-results">
              <ResultsDisplay
                title="Postpartum Hemorrhage Risk Assessment"
                value={result.category.charAt(0).toUpperCase() + result.category.slice(1) + ' Risk'}
                category={result.category === 'low' ? 'low' : result.category === 'moderate' ? 'intermediate' : 'high'}
                interpretation={result.interpretation}
                icon={Droplets}
              >
                {/* Risk Assessment Card */}
                <div className={`p-6 rounded-xl border-2 ${getRiskColor(result.category)} mb-6`}>
                  <div className="flex items-center gap-4 mb-4">
                    {getRiskIcon(result.category)}
                    <div>
                      <h3 className="text-xl font-bold">
                        {result.category.charAt(0).toUpperCase() + result.category.slice(1)} Risk Level
                      </h3>
                      <p className="text-sm font-medium">Score: {result.riskScore}/20 points</p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed">{result.interpretation}</p>
                </div>

                {/* Management Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <Shield className="w-5 h-5 text-blue-600" />
                      <h4 className="font-semibold text-blue-800">Prevention Strategy</h4>
                    </div>
                    <p className="text-sm text-blue-700 capitalize">
                      {result.preventionStrategy.replace('-', ' ')} prevention protocol
                    </p>
                  </div>

                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <AlertTriangle className="w-5 h-5 text-purple-600" />
                      <h4 className="font-semibold text-purple-800">Emergency Preparedness</h4>
                    </div>
                    <p className="text-sm text-purple-700">
                      {result.emergencyPreparation ? 'Enhanced emergency protocols required' : 'Standard protocols sufficient'}
                    </p>
                  </div>
                </div>

                {/* Intervention Plan */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                    <Stethoscope className="w-5 h-5" />
                    Intervention Plan
                  </h4>
                  <ul className="space-y-2">
                    {result.interventionPlan.map((intervention, index) => (
                      <li key={index} className="text-sm text-green-700 flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{intervention}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Management Recommendations */}
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-red-800 mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Management Recommendations
                  </h4>
                  <ul className="space-y-2">
                    {result.recommendations.map((rec, index) => (
                      <li key={index} className="text-sm text-red-700 flex items-start gap-3">
                        <Star className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Share Results */}
                <CalculatorResultShare
                  calculatorName="PPH Risk Assessment"
                  calculatorId="pph-risk"
                  results={{
                    riskLevel: result.category,
                    riskScore: `${result.riskScore}/20`,
                    preventionStrategy: result.preventionStrategy,
                    emergencyPreparation: result.emergencyPreparation ? 'Required' : 'Standard'
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
          <Card className="border-red-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-red-50 to-pink-50 border-b border-red-200">
              <CardTitle className="flex items-center gap-3 text-red-800">
                <Info className="w-6 h-6 text-red-600" />
                About Postpartum Hemorrhage Risk Assessment
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-red-800 mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Clinical Purpose
                </h3>
                <p className="text-red-700 mb-3">
                  This calculator assesses the risk of postpartum hemorrhage (PPH) based on maternal 
                  characteristics, pregnancy factors, and clinical conditions to enable early identification 
                  and preventive interventions.
                </p>
                <p className="text-red-700">
                  PPH remains a leading cause of maternal morbidity and mortality worldwide. Early 
                  identification of high-risk patients enables preventive interventions and optimal care planning.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <h3 className="font-semibold text-orange-800 mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    Major Risk Factors
                  </h3>
                  <ul className="text-sm text-orange-700 space-y-1">
                    <li>• Previous postpartum hemorrhage</li>
                    <li>• Placenta previa or accreta</li>
                    <li>• Multiple gestation</li>
                    <li>• Grand multiparity (≥5 deliveries)</li>
                    <li>• Polyhydramnios</li>
                    <li>• Macrosomia (≥4000g)</li>
                    <li>• Prolonged labor</li>
                    <li>• Chorioamnionitis</li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Prevention Strategies
                  </h3>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Active management of third stage</li>
                    <li>• Uterotonic agents (oxytocin)</li>
                    <li>• IV access and blood type/screen</li>
                    <li>• Anesthesia consultation</li>
                    <li>• Blood bank notification</li>
                    <li>• Delivery room preparation</li>
                    <li>• Team communication</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-yellow-800 mb-4 flex items-center gap-2">
                  <Droplets className="w-5 h-5" />
                  PPH Definition & Management
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-yellow-800 mb-2">PPH Definition</h4>
                    <ul className="text-sm text-yellow-700 space-y-1">
                      <li>• Vaginal delivery: Blood loss ≥500 mL within 24 hours</li>
                      <li>• Cesarean delivery: Blood loss ≥1000 mL within 24 hours</li>
                      <li>• Any blood loss causing hemodynamic instability</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-yellow-800 mb-2">Management Protocol</h4>
                    <ul className="text-sm text-yellow-700 space-y-1">
                      <li>• Immediate uterine massage and bimanual compression</li>
                      <li>• Oxytocin 20-40 units in 1L normal saline</li>
                      <li>• Secondary uterotonics: ergot alkaloids, prostaglandins</li>
                      <li>• Surgical interventions if medical management fails</li>
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
                  <li><strong>ACOG Practice Bulletin No. 183:</strong> Postpartum Hemorrhage</li>
                  <li><strong>WHO Guidelines:</strong> Management of postpartum haemorrhage and retained placenta</li>
                  <li><strong>SMFM Consult Series:</strong> Postpartum hemorrhage risk assessment</li>
                  <li><strong>California Maternal Quality Care Collaborative:</strong> OB hemorrhage toolkit</li>
                  <li><strong>National Partnership for Maternal Safety:</strong> Consensus bundle on obstetric hemorrhage</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </CalculatorContainer>
  );
};

export default PPHRiskCalculator; 