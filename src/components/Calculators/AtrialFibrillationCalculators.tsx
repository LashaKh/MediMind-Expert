import React, { useState } from 'react';
import { Calculator, Info, Heart, AlertTriangle, Activity, Zap, User, FileText, Target, Stethoscope, Award, BarChart3, Shield, Brain, TrendingUp, Clock, Pill } from 'lucide-react';
import { 
  CalculatorContainer, 
  CalculatorInput, 
  CalculatorSelect, 
  CalculatorCheckbox, 
  CalculatorButton, 
  ResultsDisplay 
} from '../ui/calculator-ui';
import { Button } from '../ui/button';
import { Tooltip } from '../ui/tooltip';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { useTranslation } from '../../hooks/useTranslation';

interface CHA2DS2VAScFormData {
  age: string;
  sex: 'male' | 'female' | '';
  chf: boolean;
  hypertension: boolean;
  diabetes: boolean;
  stroke_tia: boolean;
  vascularDisease: boolean;
}

interface HASBLEDFormData {
  hypertension: boolean;
  abnormalRenal: boolean;
  abnormalLiver: boolean;
  stroke: boolean;
  bleeding: boolean;
  labileINR: boolean;
  elderly: boolean;
  drugs: boolean;
  alcohol: boolean;
}

interface CHA2DS2VAScResult {
  score: number;
  annualStrokeRisk: number;
  riskCategory: 'low' | 'moderate' | 'high';
  recommendation: string;
}

interface HASBLEDResult {
  score: number;
  annualBleedingRisk: number;
  riskCategory: 'low' | 'moderate' | 'high';
  recommendation: string;
}

export const AtrialFibrillationCalculators: React.FC = () => {
  const { t } = useTranslation();
  const [activeCalc, setActiveCalc] = useState('cha2ds2vasc');

  // CHA₂DS₂-VASc State
  const [cha2ds2vascData, setCha2ds2vascData] = useState<CHA2DS2VAScFormData>({
    age: '',
    sex: '',
    chf: false,
    hypertension: false,
    diabetes: false,
    stroke_tia: false,
    vascularDisease: false
  });
  const [cha2ds2vascResult, setCha2ds2vascResult] = useState<CHA2DS2VAScResult | null>(null);
  const [cha2ds2vascErrors, setCha2ds2vascErrors] = useState<Record<string, string>>({});
  const [isCalculatingCHA2DS2VASc, setIsCalculatingCHA2DS2VASc] = useState(false);
  const [showCHA2DS2VAScResult, setShowCHA2DS2VAScResult] = useState(false);

  // HAS-BLED State
  const [hasbledData, setHasbledData] = useState<HASBLEDFormData>({
    hypertension: false,
    abnormalRenal: false,
    abnormalLiver: false,
    stroke: false,
    bleeding: false,
    labileINR: false,
    elderly: false,
    drugs: false,
    alcohol: false
  });
  const [hasbledResult, setHasbledResult] = useState<HASBLEDResult | null>(null);
  const [isCalculatingHASBLED, setIsCalculatingHASBLED] = useState(false);
  const [showHASBLEDResult, setShowHASBLEDResult] = useState(false);

  const validateCHA2DS2VASc = (): boolean => {
    const newErrors: Record<string, string> = {};

    const age = parseInt(cha2ds2vascData.age);
    if (!cha2ds2vascData.age || isNaN(age)) {
      newErrors.age = t('calculators.cardiology.atrial_fibrillation.validation.age_required');
    } else if (age < 18 || age > 120) {
      newErrors.age = t('calculators.cardiology.atrial_fibrillation.validation.age_range');
    }

    if (!cha2ds2vascData.sex) {
      newErrors.sex = t('calculators.cardiology.atrial_fibrillation.validation.sex_required');
    }

    setCha2ds2vascErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateCHA2DS2VASc = (): CHA2DS2VAScResult => {
    const age = parseInt(cha2ds2vascData.age);
    let score = 0;

    // Age scoring
    if (age >= 75) score += 2;
    else if (age >= 65) score += 1;

    // Sex scoring (female gets 1 point)
    if (cha2ds2vascData.sex === 'female') score += 1;

    // Clinical conditions (1 point each)
    if (cha2ds2vascData.chf) score += 1;
    if (cha2ds2vascData.hypertension) score += 1;
    if (cha2ds2vascData.diabetes) score += 1;
    if (cha2ds2vascData.vascularDisease) score += 1;

    // Stroke/TIA (2 points)
    if (cha2ds2vascData.stroke_tia) score += 2;

    // Annual stroke risk based on score
    const riskTable: Record<number, number> = {
      0: 0.2, 1: 0.6, 2: 2.2, 3: 3.2, 4: 4.8, 5: 7.2, 6: 9.7, 7: 11.2, 8: 10.8, 9: 12.2
    };

    const annualStrokeRisk = riskTable[Math.min(score, 9)] || 15;

    // Risk category and recommendations
    let riskCategory: 'low' | 'moderate' | 'high';
    let recommendation: string;

    if (score === 0) {
      riskCategory = 'low';
      recommendation = t('calculators.cardiology.chads_vasc.no_anticoagulation');
    } else if (score === 1 && cha2ds2vascData.sex === 'male') {
      riskCategory = 'low';
      recommendation = t('calculators.cardiology.chads_vasc.no_anticoagulation');
    } else if (score === 1) {
      riskCategory = 'moderate';
      recommendation = t('calculators.cardiology.chads_vasc.consider_anticoagulation');
    } else {
      riskCategory = 'high';
      recommendation = t('calculators.cardiology.chads_vasc.anticoagulation_recommended');
    }

    return {
      score,
      annualStrokeRisk,
      riskCategory,
      recommendation
    };
  };

  const calculateHASBLED = (): HASBLEDResult => {
    let score = 0;

    // Each factor is 1 point
    if (hasbledData.hypertension) score += 1;
    if (hasbledData.abnormalRenal) score += 1;
    if (hasbledData.abnormalLiver) score += 1;
    if (hasbledData.stroke) score += 1;
    if (hasbledData.bleeding) score += 1;
    if (hasbledData.labileINR) score += 1;
    if (hasbledData.elderly) score += 1;
    if (hasbledData.drugs) score += 1;
    if (hasbledData.alcohol) score += 1;

    // Annual bleeding risk based on score
    const riskTable: Record<number, number> = {
      0: 1.13, 1: 1.02, 2: 1.88, 3: 3.74, 4: 8.70, 5: 12.50, 6: 12.50, 7: 12.50, 8: 12.50, 9: 12.50
    };

    const annualBleedingRisk = riskTable[Math.min(score, 9)] || 15;

    // Risk category
    let riskCategory: 'low' | 'moderate' | 'high';
    let recommendation: string;

    if (score <= 2) {
      riskCategory = 'low';
      recommendation = 'Low bleeding risk. Anticoagulation can be used with standard monitoring.';
    } else if (score === 3) {
      riskCategory = 'moderate';
      recommendation = 'Moderate bleeding risk. Caution with anticoagulation. More frequent monitoring and careful assessment of modifiable bleeding risk factors recommended.';
    } else {
      riskCategory = 'high';
      recommendation = 'High bleeding risk. Address modifiable bleeding risk factors. Consider alternatives to anticoagulation or use with extreme caution and close monitoring.';
    }

    return {
      score,
      annualBleedingRisk,
      riskCategory,
      recommendation
    };
  };

  const handleCHA2DS2VAScCalculate = () => {
    if (!validateCHA2DS2VASc()) return;
    
    setIsCalculatingCHA2DS2VASc(true);
    
    // Simulate stroke risk analysis with loading animation
    setTimeout(() => {
      const result = calculateCHA2DS2VASc();
      setCha2ds2vascResult(result);
      setShowCHA2DS2VAScResult(true);
      setIsCalculatingCHA2DS2VASc(false);
    }, 1500);
  };

  const handleHASBLEDCalculate = () => {
    setIsCalculatingHASBLED(true);
    
    // Simulate bleeding risk analysis with loading animation
    setTimeout(() => {
      const result = calculateHASBLED();
      setHasbledResult(result);
      setShowHASBLEDResult(true);
      setIsCalculatingHASBLED(false);
    }, 1500);
  };

  const resetCHA2DS2VASc = () => {
    setCha2ds2vascData({
      age: '',
      sex: '',
      chf: false,
      hypertension: false,
      diabetes: false,
      stroke_tia: false,
      vascularDisease: false
    });
    setCha2ds2vascResult(null);
    setCha2ds2vascErrors({});
    setShowCHA2DS2VAScResult(false);
  };

  const resetHASBLED = () => {
    setHasbledData({
      hypertension: false,
      abnormalRenal: false,
      abnormalLiver: false,
      stroke: false,
      bleeding: false,
      labileINR: false,
      elderly: false,
      drugs: false,
      alcohol: false
    });
    setHasbledResult(null);
    setShowHASBLEDResult(false);
  };

  const getRiskColor = (category: string) => {
    switch (category) {
      case 'low': return 'text-green-600';
      case 'moderate': return 'text-yellow-600';
      case 'high': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getRiskBgColor = (category: string) => {
    switch (category) {
      case 'low': return 'bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800';
      case 'moderate': return 'bg-yellow-50 border-yellow-200 dark:bg-yellow-900/20 dark:border-yellow-800';
      case 'high': return 'bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800';
      default: return 'bg-gray-50 border-gray-200 dark:bg-gray-900/20 dark:border-gray-800';
    }
  };

  return (
    <CalculatorContainer
      title={t('calculators.cardiology.atrial_fibrillation.title')}
      subtitle={t('calculators.cardiology.atrial_fibrillation.subtitle')}
      icon={Activity}
      gradient="cardiology"
      className="max-w-6xl mx-auto"
    >
      <div className="space-y-8">
        {/* Atrial Fibrillation Alert */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-2 border-blue-200 dark:border-blue-800 rounded-2xl p-6">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
              <Activity className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-bold text-blue-800 dark:text-blue-200 mb-2">{t('calculators.cardiology.atrial_fibrillation.alert_title')}</h4>
              <p className="text-blue-700 dark:text-blue-300 leading-relaxed">
                {t('calculators.cardiology.atrial_fibrillation.alert_description')}
              </p>
              <div className="mt-3 inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg px-3 py-1">
                <Award className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="text-xs font-semibold text-blue-700 dark:text-blue-300">{t('calculators.cardiology.atrial_fibrillation.alert_badge')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Calculator Tabs */}
        <Tabs value={activeCalc} onValueChange={setActiveCalc} className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-1">
            <TabsTrigger 
              value="cha2ds2vasc" 
              className="flex items-center space-x-2 rounded-lg data-[state=active]:bg-white dark:data-[state=active]:bg-blue-800 data-[state=active]:shadow-md transition-all duration-200"
            >
              <Heart className="w-4 h-4" />
              <span className="font-medium">{t('calculators.cardiology.atrial_fibrillation.tab_cha2ds2vasc')}</span>
              <span className="text-xs text-gray-500">{t('calculators.cardiology.atrial_fibrillation.tab_cha2ds2vasc_subtitle')}</span>
            </TabsTrigger>
            <TabsTrigger 
              value="hasbled" 
              className="flex items-center space-x-2 rounded-lg data-[state=active]:bg-white dark:data-[state=active]:bg-red-800 data-[state=active]:shadow-md transition-all duration-200"
            >
              <AlertTriangle className="w-4 h-4" />
              <span className="font-medium">{t('calculators.cardiology.atrial_fibrillation.tab_hasbled')}</span>
              <span className="text-xs text-gray-500">{t('calculators.cardiology.atrial_fibrillation.tab_hasbled_subtitle')}</span>
            </TabsTrigger>
          </TabsList>

          {/* CHA₂DS₂-VASc Calculator */}
          <TabsContent value="cha2ds2vasc" className="mt-6">
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {t('calculators.cardiology.atrial_fibrillation.cha2ds2vasc.title')}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {t('calculators.cardiology.atrial_fibrillation.cha2ds2vasc.description')}
                </p>
              </div>

              {/* Form */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Age */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {t('calculators.cardiology.atrial_fibrillation.cha2ds2vasc.age_label')}
                    <Tooltip content={t('calculators.cardiology.atrial_fibrillation.cha2ds2vasc.age_tooltip')}>
                      <Info className="w-4 h-4 inline ml-1 text-gray-400" />
                    </Tooltip>
                  </label>
                  <input
                    type="number"
                    value={cha2ds2vascData.age}
                    onChange={(e) => setCha2ds2vascData({ ...cha2ds2vascData, age: e.target.value })}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                      cha2ds2vascErrors.age ? 'border-red-300' : 'border-gray-300 dark:border-gray-600'
                    } bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100`}
                    placeholder={t('calculators.cardiology.atrial_fibrillation.cha2ds2vasc.age_placeholder')}
                    min="18"
                    max="120"
                  />
                  {cha2ds2vascErrors.age && <p className="text-red-500 text-xs mt-1">{cha2ds2vascErrors.age}</p>}
                </div>

                {/* Sex */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {t('calculators.cardiology.atrial_fibrillation.cha2ds2vasc.sex_label')}
                    <Tooltip content={t('calculators.cardiology.atrial_fibrillation.cha2ds2vasc.sex_tooltip')}>
                      <Info className="w-4 h-4 inline ml-1 text-gray-400" />
                    </Tooltip>
                  </label>
                  <select
                    value={cha2ds2vascData.sex}
                    onChange={(e) => setCha2ds2vascData({ ...cha2ds2vascData, sex: e.target.value as 'male' | 'female' })}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                      cha2ds2vascErrors.sex ? 'border-red-300' : 'border-gray-300 dark:border-gray-600'
                    } bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100`}
                  >
                    <option value="">{t('calculators.cardiology.atrial_fibrillation.cha2ds2vasc.sex_placeholder')}</option>
                    <option value="male">{t('calculators.cardiology.atrial_fibrillation.cha2ds2vasc.sex_male')}</option>
                    <option value="female">{t('calculators.cardiology.atrial_fibrillation.cha2ds2vasc.sex_female')}</option>
                  </select>
                  {cha2ds2vascErrors.sex && <p className="text-red-500 text-xs mt-1">{cha2ds2vascErrors.sex}</p>}
                </div>
              </div>

              {/* Risk Factors */}
              <div>
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  {t('calculators.cardiology.atrial_fibrillation.cha2ds2vasc.risk_factors_title')}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={cha2ds2vascData.chf}
                      onChange={(e) => setCha2ds2vascData({ ...cha2ds2vascData, chf: e.target.checked })}
                      className="rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {t('calculators.cardiology.atrial_fibrillation.cha2ds2vasc.chf_label')}
                    </span>
                  </label>

                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={cha2ds2vascData.hypertension}
                      onChange={(e) => setCha2ds2vascData({ ...cha2ds2vascData, hypertension: e.target.checked })}
                      className="rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{t('calculators.cardiology.atrial_fibrillation.cha2ds2vasc.hypertension_label')}</span>
                  </label>

                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={cha2ds2vascData.diabetes}
                      onChange={(e) => setCha2ds2vascData({ ...cha2ds2vascData, diabetes: e.target.checked })}
                      className="rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{t('calculators.cardiology.atrial_fibrillation.cha2ds2vasc.diabetes_label')}</span>
                  </label>

                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={cha2ds2vascData.vascularDisease}
                      onChange={(e) => setCha2ds2vascData({ ...cha2ds2vascData, vascularDisease: e.target.checked })}
                      className="rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {t('calculators.cardiology.atrial_fibrillation.cha2ds2vasc.vascular_disease_label')}
                    </span>
                  </label>
                </div>
              </div>

              {/* High-Risk Factor */}
              <div>
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  {t('calculators.cardiology.atrial_fibrillation.cha2ds2vasc.high_risk_title')}
                </h4>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={cha2ds2vascData.stroke_tia}
                    onChange={(e) => setCha2ds2vascData({ ...cha2ds2vascData, stroke_tia: e.target.checked })}
                    className="rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {t('calculators.cardiology.atrial_fibrillation.cha2ds2vasc.stroke_tia_label')}
                  </span>
                </label>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <Button
                  onClick={handleCHA2DS2VAScCalculate}
                  className="flex items-center space-x-2"
                >
                  <Calculator className="w-4 h-4" />
                  <span>{t('calculators.cardiology.atrial_fibrillation.cha2ds2vasc.calculate_button')}</span>
                </Button>
                <Button
                  onClick={resetCHA2DS2VASc}
                  variant="outline"
                >
                  {t('calculators.cardiology.atrial_fibrillation.cha2ds2vasc.reset_button')}
                </Button>
              </div>

              {/* Results */}
              {cha2ds2vascResult && (
                <div className="space-y-6">
                  {/* Main Result Card */}
                  <div className={`p-6 rounded-lg border-2 ${getRiskBgColor(cha2ds2vascResult.riskCategory)}`}>
                    <div className="text-center mb-4">
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <Heart className={`w-6 h-6 ${getRiskColor(cha2ds2vascResult.riskCategory)}`} />
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                          {t('calculators.cardiology.atrial_fibrillation.cha2ds2vasc.score_label')}
                        </h3>
                      </div>
                      <div className={`text-4xl font-bold ${getRiskColor(cha2ds2vascResult.riskCategory)}`}>
                        {cha2ds2vascResult.score}
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                        {cha2ds2vascResult.annualStrokeRisk}% {t('calculators.cardiology.atrial_fibrillation.cha2ds2vasc.annual_stroke_risk')}
                      </p>
                      <div className={`inline-block mt-2 px-3 py-1 rounded-full text-sm font-medium ${
                        cha2ds2vascResult.riskCategory === 'low' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' :
                        cha2ds2vascResult.riskCategory === 'moderate' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300' :
                        'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
                      }`}>
                        {cha2ds2vascResult.riskCategory.charAt(0).toUpperCase() + cha2ds2vascResult.riskCategory.slice(1)} Risk
                      </div>
                    </div>

                    <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                        {t('calculators.cardiology.atrial_fibrillation.cha2ds2vasc.recommendation')}
                      </h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        {cha2ds2vascResult.recommendation}
                      </p>
                    </div>
                  </div>

                  {/* Evidence Section */}
                  <div className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                      {t('calculators.cardiology.atrial_fibrillation.cha2ds2vasc.evidence_title')}
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">
                          {t('calculators.cardiology.atrial_fibrillation.cha2ds2vasc.evidence_origin_title')}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {t('calculators.cardiology.atrial_fibrillation.cha2ds2vasc.evidence_origin_description')}
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">
                          {t('calculators.cardiology.atrial_fibrillation.cha2ds2vasc.evidence_validation_title')}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {t('calculators.cardiology.atrial_fibrillation.cha2ds2vasc.evidence_validation_description')}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">
                          {t('calculators.cardiology.atrial_fibrillation.cha2ds2vasc.evidence_guidelines_title')}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {t('calculators.cardiology.atrial_fibrillation.cha2ds2vasc.evidence_guidelines_description')}
                        </p>
                      </div>

                      <div className="pt-3 space-y-2">
                        <a 
                          href="https://www.ahajournals.org/doi/10.1161/CIR.0000000000001193"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium transition-colors"
                        >
                          <FileText className="w-4 h-4 mr-2" />
                          {t('calculators.cardiology.atrial_fibrillation.cha2ds2vasc.evidence_link_guidelines')}
                        </a>
                        <br />
                        <a 
                          href="https://pubmed.ncbi.nlm.nih.gov/20299623/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium transition-colors"
                        >
                          <FileText className="w-4 h-4 mr-2" />
                          {t('calculators.cardiology.atrial_fibrillation.cha2ds2vasc.evidence_link_original')}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Clinical Pearls Section */}
                  <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                      {t('calculators.cardiology.atrial_fibrillation.cha2ds2vasc.clinical_pearls_title')}
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Brain className="w-4 h-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          {t('calculators.cardiology.atrial_fibrillation.cha2ds2vasc.clinical_pearl_1')}
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Shield className="w-4 h-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          {t('calculators.cardiology.atrial_fibrillation.cha2ds2vasc.clinical_pearl_2')}
                        </span>
                      </li>
                      <li className="flex items-start">
                        <TrendingUp className="w-4 h-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          {t('calculators.cardiology.atrial_fibrillation.cha2ds2vasc.clinical_pearl_3')}
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Pill className="w-4 h-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          {t('calculators.cardiology.atrial_fibrillation.cha2ds2vasc.clinical_pearl_4')}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </TabsContent>

          {/* HAS-BLED Calculator */}
          <TabsContent value="hasbled" className="mt-6">
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {t('calculators.cardiology.atrial_fibrillation.hasbled.title')}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {t('calculators.cardiology.atrial_fibrillation.hasbled.description')}
                </p>
              </div>

              {/* Risk Factors */}
              <div>
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  {t('calculators.cardiology.atrial_fibrillation.hasbled.risk_factors_title')}
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={hasbledData.hypertension}
                      onChange={(e) => setHasbledData({ ...hasbledData, hypertension: e.target.checked })}
                      className="rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {t('calculators.cardiology.atrial_fibrillation.hasbled.hypertension_label')}
                    </span>
                  </label>

                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={hasbledData.abnormalRenal}
                      onChange={(e) => setHasbledData({ ...hasbledData, abnormalRenal: e.target.checked })}
                      className="rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {t('calculators.cardiology.atrial_fibrillation.hasbled.abnormal_renal_label')}
                    </span>
                  </label>

                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={hasbledData.abnormalLiver}
                      onChange={(e) => setHasbledData({ ...hasbledData, abnormalLiver: e.target.checked })}
                      className="rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {t('calculators.cardiology.atrial_fibrillation.hasbled.abnormal_liver_label')}
                    </span>
                  </label>

                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={hasbledData.stroke}
                      onChange={(e) => setHasbledData({ ...hasbledData, stroke: e.target.checked })}
                      className="rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {t('calculators.cardiology.atrial_fibrillation.hasbled.stroke_label')}
                    </span>
                  </label>

                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={hasbledData.bleeding}
                      onChange={(e) => setHasbledData({ ...hasbledData, bleeding: e.target.checked })}
                      className="rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {t('calculators.cardiology.atrial_fibrillation.hasbled.bleeding_label')}
                    </span>
                  </label>

                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={hasbledData.labileINR}
                      onChange={(e) => setHasbledData({ ...hasbledData, labileINR: e.target.checked })}
                      className="rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {t('calculators.cardiology.atrial_fibrillation.hasbled.labile_inr_label')}
                    </span>
                  </label>

                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={hasbledData.elderly}
                      onChange={(e) => setHasbledData({ ...hasbledData, elderly: e.target.checked })}
                      className="rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {t('calculators.cardiology.atrial_fibrillation.hasbled.elderly_label')}
                    </span>
                  </label>

                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={hasbledData.drugs}
                      onChange={(e) => setHasbledData({ ...hasbledData, drugs: e.target.checked })}
                      className="rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {t('calculators.cardiology.atrial_fibrillation.hasbled.drugs_label')}
                    </span>
                  </label>

                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={hasbledData.alcohol}
                      onChange={(e) => setHasbledData({ ...hasbledData, alcohol: e.target.checked })}
                      className="rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {t('calculators.cardiology.atrial_fibrillation.hasbled.alcohol_label')}
                    </span>
                  </label>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <Button
                  onClick={handleHASBLEDCalculate}
                  className="flex items-center space-x-2"
                >
                  <Calculator className="w-4 h-4" />
                  <span>{t('calculators.cardiology.atrial_fibrillation.hasbled.calculate_button')}</span>
                </Button>
                <Button
                  onClick={resetHASBLED}
                  variant="outline"
                >
                  {t('calculators.cardiology.atrial_fibrillation.hasbled.reset_button')}
                </Button>
              </div>

              {/* Results */}
              {hasbledResult && (
                <div className={`p-6 rounded-lg border-2 ${getRiskBgColor(hasbledResult.riskCategory)}`}>
                  <div className="text-center mb-4">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <AlertTriangle className={`w-6 h-6 ${getRiskColor(hasbledResult.riskCategory)}`} />
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                        {t('calculators.cardiology.atrial_fibrillation.hasbled.score_label')}
                      </h3>
                    </div>
                    <div className={`text-4xl font-bold ${getRiskColor(hasbledResult.riskCategory)}`}>
                      {hasbledResult.score}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                      {hasbledResult.annualBleedingRisk}% {t('calculators.cardiology.atrial_fibrillation.hasbled.annual_bleeding_risk')}
                    </p>
                    <div className={`inline-block mt-2 px-3 py-1 rounded-full text-sm font-medium ${
                      hasbledResult.riskCategory === 'low' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' :
                      hasbledResult.riskCategory === 'moderate' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300' :
                      'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
                    }`}>
                      {hasbledResult.riskCategory.charAt(0).toUpperCase() + hasbledResult.riskCategory.slice(1)} {t('calculators.cardiology.atrial_fibrillation.hasbled.risk_category')}
                    </div>
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      {t('calculators.cardiology.atrial_fibrillation.hasbled.recommendation')}
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      {hasbledResult.recommendation}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>

        {/* Source Information */}
        <div className="text-xs text-gray-500 dark:text-gray-400 border-t pt-4">
          <p className="flex items-center">
            <Info className="w-3 h-3 mr-1" />
            Based on 2023 ACC/AHA/ACCP/HRS Guideline for the Diagnosis and Management of Atrial Fibrillation.
          </p>
        </div>
      </div>
    </CalculatorContainer>
  );
}; 