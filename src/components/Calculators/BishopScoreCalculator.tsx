import React, { useState } from 'react';
import { Calculator, Info, AlertTriangle, CheckCircle, Target, Star, User, Activity, BarChart3, Stethoscope, Award, Shield, Clock, Baby, Zap } from 'lucide-react';
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
import { BishopScoreInput, BishopScoreResult } from '../../types/obgyn-calculators';
import { useTranslation } from '../../hooks/useTranslation';

interface FormData {
  cervicalDilation: string;
  cervicalEffacement: string;
  cervicalConsistency: 'firm' | 'medium' | 'soft' | '';
  cervicalPosition: 'posterior' | 'mid' | 'anterior' | '';
  fetalStation: string;
}

const BishopScoreCalculator: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<'calculator' | 'about'>('calculator');
  const [formData, setFormData] = useState<FormData>({
    cervicalDilation: '',
    cervicalEffacement: '',
    cervicalConsistency: '',
    cervicalPosition: '',
    fetalStation: ''
  });
  
  const [result, setResult] = useState<BishopScoreResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    // Check all required fields
    if (!formData.cervicalDilation) {
      newErrors.cervicalDilation = t('calculators.bishop_score.cervical_dilation_label') + ' is required';
    } else {
      const dilation = parseFloat(formData.cervicalDilation);
      if (isNaN(dilation) || dilation < 0 || dilation > 10) {
        newErrors.cervicalDilation = t('calculators.bishop_score.cervical_dilation_error');
      }
    }

    if (!formData.cervicalEffacement) {
      newErrors.cervicalEffacement = t('calculators.bishop_score.cervical_effacement_label') + ' is required';
    } else {
      const effacement = parseFloat(formData.cervicalEffacement);
      if (isNaN(effacement) || effacement < 0 || effacement > 100) {
        newErrors.cervicalEffacement = t('calculators.bishop_score.cervical_effacement_error');
      }
    }

    if (!formData.cervicalConsistency) {
      newErrors.cervicalConsistency = t('calculators.bishop_score.cervical_consistency_label') + ' is required';
    }

    if (!formData.cervicalPosition) {
      newErrors.cervicalPosition = t('calculators.bishop_score.cervical_position_label') + ' is required';
    }

    if (!formData.fetalStation) {
      newErrors.fetalStation = t('calculators.bishop_score.fetal_station_label') + ' is required';
    } else {
      const station = parseInt(formData.fetalStation);
      if (isNaN(station) || station < -3 || station > 3) {
        newErrors.fetalStation = t('calculators.bishop_score.fetal_station_error');
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCalculate = () => {
    if (!validateForm()) return;

    setIsCalculating(true);
    
    // Professional Bishop Score calculation with loading animation
    setTimeout(() => {
      try {
        const input: BishopScoreInput = {
          cervicalDilation: formData.cervicalDilation,
          cervicalEffacement: formData.cervicalEffacement,
          cervicalConsistency: formData.cervicalConsistency as 'firm' | 'medium' | 'soft',
          cervicalPosition: formData.cervicalPosition as 'posterior' | 'mid' | 'anterior',
          fetalStation: formData.fetalStation,
          calculationDate: new Date().toISOString()
        };

        // Use the service validation
        const validation = validateOBGYNInput('bishop-score', input);
        if (!validation.isValid) {
          setErrors(validation.errors.reduce((acc, error, index) => ({ ...acc, [`error_${index}`]: error }), {}));
          setIsCalculating(false);
          return;
        }

        const calculationResult = calculateOBGYN('bishop-score', input) as BishopScoreResult;
        setResult(calculationResult);
        
      } catch (error) {
        setErrors({ calculation: error instanceof Error ? error.message : 'Calculation failed' });
      } finally {
        setIsCalculating(false);
      }
    }, 1800); // Professional OB/GYN Bishop Score calculation simulation
  };

  const handleReset = () => {
    setFormData({
      cervicalDilation: '',
      cervicalEffacement: '',
      cervicalConsistency: '',
      cervicalPosition: '',
      fetalStation: ''
    });
    setResult(null);
    setErrors({});
    setIsCalculating(false);
    setCurrentStep(1);
  };

  const getScoreColor = (score: number) => {
    if (score <= 3) return 'text-red-600 bg-red-50 border-red-200';
    if (score <= 6) return 'text-yellow-600 bg-yellow-50 border-yellow-200';
    if (score <= 8) return 'text-green-600 bg-green-50 border-green-200';
    return 'text-blue-600 bg-blue-50 border-blue-200';
  };

  const getSuccessBgColor = (success: string) => {
    switch (success) {
      case 'unlikely': return 'bg-red-50 border-red-200 text-red-800';
      case 'possible': return 'bg-orange-50 border-orange-200 text-orange-800';
      case 'likely': return 'bg-green-50 border-green-200 text-green-800';
      case 'very-likely': return 'bg-blue-50 border-blue-200 text-blue-800';
      default: return 'bg-gray-50 border-gray-200 text-gray-800';
    }
  };

  return (
    <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as 'calculator' | 'about')} className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="calculator">{t('common.calculator')}</TabsTrigger>
        <TabsTrigger value="about">{t('common.about')}</TabsTrigger>
      </TabsList>

      <TabsContent value="calculator">
        <CalculatorContainer
          title={t('calculators.bishop_score.title')}
          subtitle={t('calculators.bishop_score.subtitle')}
          icon={Target}
          gradient="obgyn"
          className="max-w-5xl mx-auto"
        >
          <div className="space-y-8">
            {/* OB/GYN Bishop Score Alert */}
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 border-2 border-pink-200 dark:border-pink-800 rounded-2xl p-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-pink-100 dark:bg-pink-900/30 rounded-xl">
                  <Target className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-pink-800 dark:text-pink-200 mb-2">{t('calculators.bishop_score.assessment_tool')}</h4>
                  <p className="text-pink-700 dark:text-pink-300 leading-relaxed">
                    {t('calculators.bishop_score.tool_description')}
                  </p>
                  <div className="mt-3 inline-flex items-center space-x-2 bg-pink-100 dark:bg-pink-900/30 rounded-lg px-3 py-1">
                    <Star className="w-4 h-4 text-pink-600 dark:text-pink-400" />
                    <span className="text-xs font-semibold text-pink-700 dark:text-pink-300">{t('calculators.bishop_score.based_on_bishop')}</span>
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
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{t('calculators.bishop_score.cervical_assessment')}</span>
                  </div>
                  <div className={`w-16 h-1 rounded-full transition-all duration-300 ${
                    currentStep >= 2 ? 'bg-rose-500' : 'bg-gray-200'
                  }`}></div>
                  <div className="flex items-center space-x-2">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                      currentStep >= 3 ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-500'
                    }`}>
                      3
                    </div>
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{t('common.results')}</span>
                  </div>
                </div>

                {/* Step 1: Cervical Assessment */}
                {currentStep === 1 && (
                  <div className="space-y-6 animate-fadeIn">
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 rounded-2xl border border-pink-200 dark:border-pink-800">
                        <Activity className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{t('calculators.bishop_score.cervical_parameters_section')}</h3>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{t('calculators.bishop_score.cervical_parameters_description')}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Cervical Dilation */}
                      <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-2 border-blue-200 dark:border-blue-800 rounded-xl">
                        <div className="flex items-center space-x-3 mb-4">
                          <BarChart3 className="w-5 h-5 text-blue-600" />
                          <h4 className="font-semibold text-blue-800 dark:text-blue-200">{t('calculators.bishop_score.cervical_dilation_label')}</h4>
                        </div>
                        
                        <CalculatorInput
                          label={t('calculators.bishop_score.cervical_dilation_label')}
                          value={formData.cervicalDilation}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, cervicalDilation: e.target.value })}
                          type="number"
                          placeholder="2.0"
                          min={0}
                          max={10}
                          step={0.5}
                          unit={t('calculators.bishop_score.cervical_dilation_unit')}
                          error={errors.cervicalDilation}
                          helpText={t('calculators.bishop_score.cervical_dilation_help')}
                          icon={BarChart3}
                        />

                        <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 rounded-lg">
                          <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">{t('calculators.bishop_score.scoring_system')}</h5>
                          <div className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                            <p>• Closed (0 cm): 0 points</p>
                            <p>• 1-2 cm: 1 point</p>
                            <p>• 3-4 cm: 2 points</p>
                            <p>• ≥5 cm: 3 points</p>
                          </div>
                        </div>
                      </div>

                      {/* Cervical Effacement */}
                      <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-200 dark:border-green-800 rounded-xl">
                        <div className="flex items-center space-x-3 mb-4">
                          <Activity className="w-5 h-5 text-green-600" />
                          <h4 className="font-semibold text-green-800 dark:text-green-200">{t('calculators.bishop_score.cervical_effacement_label')}</h4>
                        </div>
                        
                        <CalculatorInput
                          label={t('calculators.bishop_score.cervical_effacement_label')}
                          value={formData.cervicalEffacement}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, cervicalEffacement: e.target.value })}
                          type="number"
                          placeholder="50"
                          min={0}
                          max={100}
                          step={5}
                          unit={t('calculators.bishop_score.cervical_effacement_unit')}
                          error={errors.cervicalEffacement}
                          helpText={t('calculators.bishop_score.cervical_effacement_help')}
                          icon={Activity}
                        />

                        <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-lg">
                          <h5 className="font-semibold text-green-800 dark:text-green-200 mb-2">{t('calculators.bishop_score.scoring_system')}</h5>
                          <div className="text-sm text-green-700 dark:text-green-300 space-y-1">
                            <p>• 0-30%: 0 points</p>
                            <p>• 40-50%: 1 point</p>
                            <p>• 60-70%: 2 points</p>
                            <p>• ≥80%: 3 points</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Cervical Consistency and Position */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Cervical Consistency */}
                      <div className="p-6 bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 border-2 border-yellow-200 dark:border-yellow-800 rounded-xl">
                        <div className="flex items-center space-x-3 mb-4">
                          <Shield className="w-5 h-5 text-yellow-600" />
                          <h4 className="font-semibold text-yellow-800 dark:text-yellow-200">{t('calculators.bishop_score.cervical_consistency_label')}</h4>
                        </div>
                        
                        <CalculatorSelect
                          label={t('calculators.bishop_score.cervical_consistency_label')}
                          value={formData.cervicalConsistency}
                          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setFormData({ ...formData, cervicalConsistency: e.target.value as typeof formData.cervicalConsistency })}
                          options={[
                            { value: '', label: t('calculators.bishop_score.cervical_consistency_label') + '...' },
                            { value: 'firm', label: t('calculators.bishop_score.cervical_consistency_firm') + ' (0 points)' },
                            { value: 'medium', label: t('calculators.bishop_score.cervical_consistency_medium') + ' (1 point)' },
                            { value: 'soft', label: t('calculators.bishop_score.cervical_consistency_soft') + ' (2 points)' }
                          ]}
                          error={errors.cervicalConsistency}
                          helpText={t('calculators.bishop_score.cervical_consistency_help')}
                          icon={Shield}
                        />

                        <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-700 rounded-lg">
                          <h5 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">{t('calculators.bishop_score.clinical_assessment')}</h5>
                          <div className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                            <p>• Firm: Like tip of nose</p>
                            <p>• Medium: Like chin consistency</p>
                            <p>• Soft: Like lips or earlobe</p>
                          </div>
                        </div>
                      </div>

                      {/* Cervical Position */}
                      <div className="p-6 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border-2 border-red-200 dark:border-red-800 rounded-xl">
                        <div className="flex items-center space-x-3 mb-4">
                          <Target className="w-5 h-5 text-red-600" />
                          <h4 className="font-semibold text-red-800 dark:text-red-200">{t('calculators.bishop_score.cervical_position_label')}</h4>
                        </div>
                        
                        <CalculatorSelect
                          label={t('calculators.bishop_score.cervical_position_label')}
                          value={formData.cervicalPosition}
                          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setFormData({ ...formData, cervicalPosition: e.target.value as typeof formData.cervicalPosition })}
                          options={[
                            { value: '', label: t('calculators.bishop_score.cervical_position_label') + '...' },
                            { value: 'posterior', label: t('calculators.bishop_score.cervical_position_posterior') + ' (0 points)' },
                            { value: 'mid', label: t('calculators.bishop_score.cervical_position_mid') + ' (1 point)' },
                            { value: 'anterior', label: t('calculators.bishop_score.cervical_position_anterior') + ' (2 points)' }
                          ]}
                          error={errors.cervicalPosition}
                          helpText={t('calculators.bishop_score.cervical_position_help')}
                          icon={Target}
                        />

                        <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 rounded-lg">
                          <h5 className="font-semibold text-red-800 dark:text-red-200 mb-2">{t('calculators.bishop_score.position_assessment')}</h5>
                          <div className="text-sm text-red-700 dark:text-red-300 space-y-1">
                            <p>• Posterior: Cervix points toward sacrum</p>
                            <p>• Mid-position: Cervix in neutral position</p>
                            <p>• Anterior: Cervix points toward pubis</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <CalculatorButton
                        onClick={() => setCurrentStep(2)}
                        className="enhanced-calculator-button"
                      >
                        {t('common.next')}: {t('calculators.bishop_score.fetal_station_label')}
                      </CalculatorButton>
                    </div>
                  </div>
                )}

                {/* Step 2: Fetal Position */}
                {currentStep === 2 && (
                  <div className="space-y-6 animate-fadeIn">
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-rose-50 to-purple-50 dark:from-rose-900/20 dark:to-purple-900/20 rounded-2xl border border-rose-200 dark:border-rose-800">
                        <Baby className="w-6 h-6 text-rose-600 dark:text-rose-400" />
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{t('calculators.bishop_score.fetal_station_label')} {t('calculators.bishop_score.assessment_tool')}</h3>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{t('calculators.bishop_score.fetal_station_help')}</p>
                    </div>

                    {/* Fetal Station */}
                    <div className="p-6 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 border-2 border-purple-200 dark:border-purple-800 rounded-xl">
                      <div className="flex items-center space-x-3 mb-4">
                        <Baby className="w-5 h-5 text-purple-600" />
                        <h4 className="font-semibold text-purple-800 dark:text-purple-200">{t('calculators.bishop_score.fetal_station_label')}</h4>
                      </div>
                      
                      <CalculatorSelect
                        label={t('calculators.bishop_score.fetal_station_label')}
                        value={formData.fetalStation}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setFormData({ ...formData, fetalStation: e.target.value })}
                        options={[
                          { value: '', label: t('calculators.bishop_score.fetal_station_label') + '...' },
                          { value: '-3', label: '-3 (0 points) - High' },
                          { value: '-2', label: '-2 (0 points) - High' },
                          { value: '-1', label: '-1 (1 point) - Mid' },
                          { value: '0', label: '0 (2 points) - At spines' },
                          { value: '1', label: '+1 (3 points) - Low' },
                          { value: '2', label: '+2 (3 points) - Low' },
                          { value: '3', label: '+3 (3 points) - Low' }
                        ]}
                        error={errors.fetalStation}
                        helpText={t('calculators.bishop_score.fetal_station_help')}
                        icon={Baby}
                      />

                      <div className="mt-6 p-6 bg-purple-50 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-700 rounded-lg">
                        <h5 className="font-semibold text-purple-800 dark:text-purple-200 mb-4">{t('calculators.bishop_score.fetal_station_label')} Reference</h5>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-purple-700 dark:text-purple-300">
                          <div>
                            <h6 className="font-semibold mb-2">High Station</h6>
                            <p>• -3, -2: 0 points</p>
                            <p>• Head above spines</p>
                            <p>• More difficult delivery</p>
                          </div>
                          <div>
                            <h6 className="font-semibold mb-2">Mid Station</h6>
                            <p>• -1: 1 point</p>
                            <p>• Head approaching spines</p>
                            <p>• Favorable position</p>
                          </div>
                          <div>
                            <h6 className="font-semibold mb-2">Low Station</h6>
                            <p>• 0, +1, +2, +3: 2-3 points</p>
                            <p>• Head at or below spines</p>
                            <p>• Very favorable</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <CalculatorButton
                        onClick={() => setCurrentStep(1)}
                        variant="outline"
                      >
                        {t('common.back')}
                      </CalculatorButton>
                      <CalculatorButton
                        onClick={handleCalculate}
                        loading={isCalculating}
                        icon={Calculator}
                        size="lg"
                        className="enhanced-calculator-button"
                      >
                        {t('calculators.bishop_score.calculate_button')}
                      </CalculatorButton>
                    </div>
                  </div>
                )}
              </>
            ) : (
              /* Results Display */
              <div className="space-y-8 animate-scaleIn">
                <ResultsDisplay
                  title={t('calculators.bishop_score.bishop_score_analysis')}
                  value={result.totalScore.toString()}
                  category={result.totalScore <= 3 ? 'low' : result.totalScore <= 6 ? 'intermediate' : 'high'}
                  interpretation={result.interpretation}
                  icon={Target}
                >
                  {/* Score Display */}
                  <div className="mb-6 p-4 bg-pink-50 dark:bg-pink-900/20 border border-pink-200 dark:border-pink-800 rounded-xl">
                    <div className="flex items-center space-x-2 mb-2">
                      <Star className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                      <span className="font-semibold text-pink-800 dark:text-pink-200">{t('calculators.bishop_score.total_score')}: {result.totalScore}/13</span>
                    </div>
                    <div className={`inline-flex items-center space-x-1 rounded-lg px-3 py-1 ${getScoreColor(result.totalScore)}`}>
                      <span className="text-xs font-semibold">{t('calculators.bishop_score.induction_success')}: {result.inductionSuccess.charAt(0).toUpperCase() + result.inductionSuccess.slice(1).replace('-', ' ')}</span>
                    </div>
                  </div>

                  {/* Assessment Summary */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
                      <div className="flex items-center space-x-3 mb-3">
                        <Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        <h4 className="font-semibold text-blue-800 dark:text-blue-200">{t('calculators.bishop_score.induction_success')}</h4>
                      </div>
                      <p className="text-2xl font-bold text-blue-900 dark:text-blue-100">{result.inductionSuccess.charAt(0).toUpperCase() + result.inductionSuccess.slice(1).replace('-', ' ')}</p>
                      <p className="text-sm text-blue-600 dark:text-blue-400 mt-1">{t('calculators.bishop_score.labor_likelihood')}</p>
                    </div>

                    <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-xl">
                      <div className="flex items-center space-x-3 mb-3">
                        <AlertTriangle className="w-6 h-6 text-green-600 dark:text-green-400" />
                        <h4 className="font-semibold text-green-800 dark:text-green-200">{t('calculators.bishop_score.cesarean_risk')}</h4>
                      </div>
                      <p className="text-2xl font-bold text-green-900 dark:text-green-100">{result.cesareanRisk.toFixed(1)}%</p>
                      <p className="text-sm text-green-600 dark:text-green-400 mt-1">Risk of cesarean delivery</p>
                    </div>
                  </div>

                  {/* Induction Recommendations */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Stethoscope className="w-5 h-5 text-blue-500" />
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100">{t('calculators.bishop_score.clinical_recommendation')}</h4>
                    </div>
                    <div className={`p-6 rounded-2xl border-2 ${getSuccessBgColor(result.inductionSuccess)}`}>
                      <div className="space-y-3">
                        <p className="font-semibold">{result.inductionRecommendation}</p>
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
                      <h4 className="font-semibold text-purple-800 dark:text-purple-200">{t('calculators.bishop_score.evidence_base')}</h4>
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
                    {t('calculators.bishop_score.new_assessment')}
                  </CalculatorButton>
                  <CalculatorButton
                    onClick={() => setResult(null)}
                    variant="secondary"
                    size="lg"
                  >
                    {t('calculators.bishop_score.modify_inputs')}
                  </CalculatorButton>
                </div>

                {/* Result Sharing */}
                <div className="mt-6">
                  <CalculatorResultShare
                    calculatorName={t('calculators.bishop_score.title')}
                    calculatorId="bishop-score-calculator"
                    results={{
                      bishopScore: result.totalScore,
                      inductionSuccess: result.inductionSuccess,
                      cesareanRisk: result.cesareanRisk
                    }}
                    interpretation={result.interpretation}
                    recommendations={result.recommendations}
                    riskLevel={result.totalScore <= 3 ? 'high' : result.totalScore <= 6 ? 'intermediate' : 'low'}
                  />
                </div>
              </div>
            )}

            {/* Footer Information */}
            <div className="text-center pt-8 border-t border-white/20 dark:border-gray-800/20">
              <div className="flex items-center justify-center space-x-3 text-sm text-gray-600 dark:text-gray-400">
                <Info className="w-4 h-4" />
                <span>{t('calculators.bishop_score.based_on_bishop')}</span>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-pink-600" />
                  <span className="text-pink-600 font-semibold">{t('calculators.bishop_score.obstetric_safety_validated')}</span>
                </div>
              </div>
            </div>
          </div>
        </CalculatorContainer>
      </TabsContent>

      <TabsContent value="about" className="space-y-6">
        <CalculatorContainer
          title={t('calculators.bishop_score.about_title')}
          subtitle={t('calculators.bishop_score.subtitle')}
          icon={Target}
          gradient="obgyn"
          className="max-w-5xl mx-auto"
        >
          <div className="space-y-8">
            {/* Clinical Purpose */}
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 border-2 border-pink-200 dark:border-pink-800 rounded-2xl p-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-pink-100 dark:bg-pink-900/30 rounded-xl">
                  <Stethoscope className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-pink-800 dark:text-pink-200 mb-3">{t('common.clinical_purpose')}</h3>
                  <p className="text-pink-700 dark:text-pink-300 leading-relaxed">
                    {t('calculators.bishop_score.tool_description')}
                  </p>
                </div>
              </div>
            </div>

            {/* Scoring System */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-2 border-blue-200 dark:border-blue-800">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <BarChart3 className="w-6 h-6 text-blue-600" />
                    <CardTitle className="text-blue-800 dark:text-blue-200">Scoring Parameters</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm text-gray-900 dark:text-gray-100 mb-2">Five Assessment Parameters:</h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <li>• Cervical dilation (0-3 points)</li>
                      <li>• Cervical effacement (0-3 points)</li>
                      <li>• Cervical consistency (0-2 points)</li>
                      <li>• Cervical position (0-2 points)</li>
                      <li>• Fetal station (0-3 points)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200 dark:border-green-800">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Target className="w-6 h-6 text-green-600" />
                    <CardTitle className="text-green-800 dark:text-green-200">Score Interpretation</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm text-gray-900 dark:text-gray-100 mb-2">Induction Success Prediction:</h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <li>• Score ≤3: Unfavorable cervix</li>
                      <li>• Score 4-6: Intermediate success</li>
                      <li>• Score 7-8: Favorable cervix</li>
                      <li>• Score ≥9: Very favorable cervix</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Clinical Applications */}
            <Card className="border-2 border-purple-200 dark:border-purple-800">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Activity className="w-6 h-6 text-purple-600" />
                  <CardTitle className="text-purple-800 dark:text-purple-200">Clinical Applications</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-sm text-gray-900 dark:text-gray-100 mb-2">Labor Induction Planning</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Determines optimal timing and method for labor induction based on cervical readiness
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-gray-900 dark:text-gray-100 mb-2">Delivery Planning</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Assists in counseling patients about likelihood of vaginal delivery success
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-gray-900 dark:text-gray-100 mb-2">Clinical Documentation</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Standardized assessment tool for medical record documentation and quality metrics
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Evidence Base */}
            <Card className="border-2 border-orange-200 dark:border-orange-800">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-orange-600" />
                  <CardTitle className="text-orange-800 dark:text-orange-200">Evidence Base</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm text-gray-900 dark:text-gray-100 mb-2">Professional Guidelines</h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <li>• ACOG Practice Bulletin No. 107: Induction of Labor</li>
                      <li>• Society for Maternal-Fetal Medicine recommendations</li>
                      <li>• Modified Bishop Score validation studies</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-gray-900 dark:text-gray-100 mb-2">Clinical Validation</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Extensively validated scoring system with demonstrated predictive accuracy for labor 
                      induction success across diverse patient populations and clinical settings.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Important Notes */}
            <div className="bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-200 dark:border-amber-800 rounded-2xl p-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded-xl">
                  <AlertTriangle className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-amber-800 dark:text-amber-200 mb-3">Clinical Considerations</h3>
                  <div className="space-y-2 text-amber-700 dark:text-amber-300 text-sm">
                    <p>• Assessment should be performed by experienced clinicians familiar with cervical examination techniques</p>
                    <p>• Score interpretation should consider individual patient factors and clinical context</p>
                    <p>• Multiple assessments may be needed as cervical status can change rapidly</p>
                    <p>• This tool supports but does not replace clinical judgment and comprehensive patient evaluation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CalculatorContainer>
      </TabsContent>
    </Tabs>
  );
};

export default BishopScoreCalculator; 