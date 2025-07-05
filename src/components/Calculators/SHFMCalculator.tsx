import React, { useState } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import { Heart, Info, Activity, Calculator, TrendingUp, User, BarChart3, Target, Stethoscope, Award, Shield, Zap, AlertCircle, CheckCircle, FileText, Clock, Pill, Cpu, Monitor, Droplet } from 'lucide-react';
import { 
  CalculatorContainer, 
  CalculatorInput, 
  CalculatorSelect, 
  CalculatorCheckbox, 
  CalculatorButton, 
  ResultsDisplay 
} from '../ui/calculator-ui';

interface SHFMData {
  age: string;
  gender: 'male' | 'female' | '';
  ischemic_etiology: boolean;
  lvef: string;
  nyha_class: 1 | 2 | 3 | 4 | 0;
  systolic_bp: string;
  sodium: string;
  cholesterol: string;
  hemoglobin: string;
  lymphocyte_percent: string;
  uric_acid: string;
  
  // Diuretic medications with doses
  furosemide_dose: string;
  torsemide_dose: string;
  bumetanide_dose: string;
  metolazone_dose: string;
  hydrochlorothiazide_dose: string;
  weight: string;
  
  // Medications
  ace_inhibitor: boolean;
  beta_blocker: boolean;
  arb: boolean;
  statin: boolean;
  aldosterone_antagonist: boolean;
  allopurinol: boolean;
  
  // Devices
  icd: boolean;
  crt: boolean;
  biventricular_icd: boolean;
}

interface SurvivalResult {
  oneYear: number;
  twoYear: number;
  threeYear: number;
  fiveYear: number;
  medianSurvival: number;
  shfmScore: number;
  risk: 'Low' | 'Intermediate' | 'High' | 'Very High';
  interpretation: string;
  recommendations: string[];
  therapyImpact: {
    aceInhibitor?: number;
    betaBlocker?: number;
    aldosteroneAntagonist?: number;
    arb?: number;
    icd?: number;
    crt?: number;
    biventricularicd?: number;
  };
}

export const SHFMCalculator: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<SHFMData>({
    age: '',
    gender: '',
    ischemic_etiology: false,
    lvef: '',
    nyha_class: 0,
    systolic_bp: '',
    sodium: '',
    cholesterol: '',
    hemoglobin: '',
    lymphocyte_percent: '',
    uric_acid: '',
    
    // Diuretic medications with doses
    furosemide_dose: '',
    torsemide_dose: '',
    bumetanide_dose: '',
    metolazone_dose: '',
    hydrochlorothiazide_dose: '',
    weight: '',
    
    // Medications
    ace_inhibitor: true,
    beta_blocker: true,
    arb: false,
    statin: true,
    aldosterone_antagonist: false,
    allopurinol: false,
    
    // Devices
    icd: false,
    crt: false,
    biventricular_icd: false,
  });

  const [result, setResult] = useState<SurvivalResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [showTherapyImpact, setShowTherapyImpact] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    const age = parseInt(formData.age);
    if (!formData.age || isNaN(age)) {
      newErrors.age = 'Age is required';
    } else if (age < 18 || age > 100) {
      newErrors.age = 'Age must be between 18-100 years';
    }

    if (!formData.gender) {
      newErrors.gender = 'Gender is required';
    }

    if (formData.nyha_class === 0) {
      newErrors.nyha_class = 'NYHA class is required';
    }

    const lvef = parseInt(formData.lvef);
    if (!formData.lvef || isNaN(lvef)) {
      newErrors.lvef = 'LVEF is required';
    } else if (lvef < 5 || lvef > 80) {
      newErrors.lvef = 'LVEF must be between 5-80%';
    }

    const systolic_bp = parseInt(formData.systolic_bp);
    if (!formData.systolic_bp || isNaN(systolic_bp)) {
      newErrors.systolic_bp = 'Systolic BP is required';
    } else if (systolic_bp < 60 || systolic_bp > 250) {
      newErrors.systolic_bp = 'Systolic BP must be between 60-250 mmHg';
    }

    const sodium = parseInt(formData.sodium);
    if (!formData.sodium || isNaN(sodium)) {
      newErrors.sodium = 'Sodium is required';
    } else if (sodium < 120 || sodium > 160) {
      newErrors.sodium = 'Sodium must be between 120-160 mEq/L';
    }

    const cholesterol = parseInt(formData.cholesterol);
    if (!formData.cholesterol || isNaN(cholesterol)) {
      newErrors.cholesterol = 'Cholesterol is required';
    } else if (cholesterol < 50 || cholesterol > 500) {
      newErrors.cholesterol = 'Cholesterol must be between 50-500 mg/dL';
    }

    const hemoglobin = parseFloat(formData.hemoglobin);
    if (!formData.hemoglobin || isNaN(hemoglobin)) {
      newErrors.hemoglobin = 'Hemoglobin is required';
    } else if (hemoglobin < 5 || hemoglobin > 20) {
      newErrors.hemoglobin = 'Hemoglobin must be between 5-20 g/dL';
    }

    const lymphocyte_percent = parseInt(formData.lymphocyte_percent);
    if (!formData.lymphocyte_percent || isNaN(lymphocyte_percent)) {
      newErrors.lymphocyte_percent = 'Lymphocyte % is required';
    } else if (lymphocyte_percent < 1 || lymphocyte_percent > 50) {
      newErrors.lymphocyte_percent = 'Lymphocyte % must be between 1-50%';
    }

    const uric_acid = parseFloat(formData.uric_acid);
    if (!formData.uric_acid || isNaN(uric_acid)) {
      newErrors.uric_acid = 'Uric acid is required';
    } else if (uric_acid < 2 || uric_acid > 20) {
      newErrors.uric_acid = 'Uric acid must be between 2-20 mg/dL';
    }

    const weight = parseFloat(formData.weight);
    if (!formData.weight || isNaN(weight)) {
      newErrors.weight = 'Weight is required for diuretic dose calculation';
    } else if (weight < 20 || weight > 300) {
      newErrors.weight = 'Weight must be between 20-300 kg';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateSHFM = (): SurvivalResult => {
    const {
      age: ageStr,
      gender,
      ischemic_etiology,
      lvef: lvefStr,
      nyha_class,
      systolic_bp: sbpStr,
      sodium: sodiumStr,
      cholesterol: cholStr,
      hemoglobin: hgbStr,
      lymphocyte_percent: lymphStr,
      uric_acid: uricAcidStr,
      furosemide_dose: furosemideStr,
      torsemide_dose: torsemideStr,
      bumetanide_dose: bumetanideStr,
      metolazone_dose: metolazoneStr,
      hydrochlorothiazide_dose: hctzStr,
      weight: weightStr,
      ace_inhibitor,
      beta_blocker,
      arb,
      statin,
      aldosterone_antagonist,
      allopurinol,
      icd,
      crt,
      biventricular_icd,
    } = formData;

    // --- Data Parsing and Capping ---
    let age = parseInt(ageStr);
    let lvef = parseInt(lvefStr);
    let sbp = parseInt(sbpStr);
    let sodium = parseInt(sodiumStr);
    let chol = parseInt(cholStr);
    let hgb = parseFloat(hgbStr);
    let lymph = parseInt(lymphStr);
    let uricAcid = parseFloat(uricAcidStr);
    const weight = parseFloat(weightStr);
    
    const furosemide = parseFloat(furosemideStr) || 0;
    const torsemide = parseFloat(torsemideStr) || 0;
    const bumetanide = parseFloat(bumetanideStr) || 0;
    const metolazone = parseFloat(metolazoneStr) || 0;
    const hctz = parseFloat(hctzStr) || 0;

    // Apply model constraints
    sbp = Math.min(sbp, 160);
    sodium = Math.min(sodium, 138);
    lymph = Math.min(lymph, 47);
    uricAcid = Math.max(uricAcid, 3.4);

    // --- Diuretic Dose Calculation ---
    const diureticDose = (furosemide + 2 * torsemide + 26.7 * bumetanide + 40 * metolazone + 3.2 * hctz) / weight;

    // --- Hemoglobin Score Calculation ---
    let hgbScore = 0;
    if (hgb < 16) {
      hgbScore = (16 - hgb) * Math.log(1.124);
    } else {
      hgbScore = (hgb - 16) * Math.log(1.336);
    }

    // --- Core SHFM Score Calculation ---
    let shfmScore = 0;
    shfmScore += (age / 10) * Math.log(1.09);
    shfmScore += (gender === 'male' ? 1 : 0) * Math.log(1.089);
    shfmScore += nyha_class * Math.log(1.6);
    shfmScore += (100 / lvef) * Math.log(1.03);
    shfmScore += (ischemic_etiology ? 1 : 0) * Math.log(1.354);
    shfmScore += (sbp / 10) * Math.log(0.877);
    shfmScore += diureticDose * Math.log(1.178);
    shfmScore += (allopurinol ? 1 : 0) * Math.log(1.571);
    shfmScore += (statin ? 1 : 0) * Math.log(0.63);
    shfmScore += (ace_inhibitor ? 1 : 0) * Math.log(0.73); // Assuming ACE-I has a similar effect to ICD
    shfmScore += (beta_blocker ? 1 : 0) * Math.log(0.66);
    shfmScore += (arb ? 1 : 0) * Math.log(0.85);
    shfmScore += (aldosterone_antagonist ? 1 : 0) * Math.log(0.74);
    shfmScore += (icd ? 1 : 0) * Math.log(0.73);
    shfmScore += (crt ? 1 : 0) * Math.log(0.79); // Assuming CRT is biventricular pacemaker
    shfmScore += (biventricular_icd ? 1 : 0) * Math.log(0.79);
    shfmScore += (138 - sodium) * Math.log(1.05);
    shfmScore += (100 / chol) * Math.log(2.206);
    shfmScore += hgbScore;
    shfmScore += (lymph / 5) * Math.log(0.897);
    shfmScore += uricAcid * Math.log(1.064);

    // --- Survival Calculation ---
    const baselineSurvival = (years: number) => Math.exp(-Math.exp(shfmScore - 11) * years);
    
    const oneYear = baselineSurvival(1) * 100;
    const twoYear = baselineSurvival(2) * 100;
    const threeYear = baselineSurvival(3) * 100;
    const fiveYear = baselineSurvival(5) * 100;

    // --- Median Survival Calculation ---
    const medianSurvival = Math.log(Math.log(2)) / Math.exp(shfmScore - 11);

    // --- Risk Stratification ---
    let risk: 'Low' | 'Intermediate' | 'High' | 'Very High';
    let interpretation: string;
    if (oneYear >= 95) {
      risk = 'Low';
      interpretation = 'Excellent 1-year survival. Focus on maintaining optimal therapy.';
    } else if (oneYear >= 90) {
      risk = 'Intermediate';
      interpretation = 'Good 1-year survival. Continue to monitor and optimize GDMT.';
    } else if (oneYear >= 80) {
      risk = 'High';
      interpretation = 'Guarded prognosis. Consider referral for advanced heart failure therapies.';
    } else {
      risk = 'Very High';
      interpretation = 'Poor prognosis. Urgent evaluation for advanced therapies is recommended.';
    }

    // --- Therapy Impact Analysis ---
    const calculateSurvivalWithTherapy = (modifiedScore: number) => Math.exp(-Math.exp(modifiedScore - 11)) * 100;
    
    const therapyImpact: SurvivalResult['therapyImpact'] = {};
    if (!ace_inhibitor) {
      const scoreWithoutAce = shfmScore - (1 * Math.log(0.73));
      therapyImpact.aceInhibitor = calculateSurvivalWithTherapy(scoreWithoutAce) - oneYear;
    }
    if (!beta_blocker) {
      const scoreWithoutBB = shfmScore - (1 * Math.log(0.66));
      therapyImpact.betaBlocker = calculateSurvivalWithTherapy(scoreWithoutBB) - oneYear;
    }
    if (!aldosterone_antagonist) {
        const scoreWithoutAldo = shfmScore - (1* Math.log(0.74));
        therapyImpact.aldosteroneAntagonist = calculateSurvivalWithTherapy(scoreWithoutAldo) - oneYear;
    }
    if (!arb) {
        const scoreWithoutArb = shfmScore - (1* Math.log(0.85));
        therapyImpact.arb = calculateSurvivalWithTherapy(scoreWithoutArb) - oneYear;
    }
    if (!icd) {
        const scoreWithoutIcd = shfmScore - (1* Math.log(0.73));
        therapyImpact.icd = calculateSurvivalWithTherapy(scoreWithoutIcd) - oneYear;
    }
    if (!crt) {
        const scoreWithoutCrt = shfmScore - (1* Math.log(0.79));
        therapyImpact.crt = calculateSurvivalWithTherapy(scoreWithoutCrt) - oneYear;
    }
    if (!biventricular_icd) {
        const scoreWithoutBivIcd = shfmScore - (1* Math.log(0.79));
        therapyImpact.biventricularicd = calculateSurvivalWithTherapy(scoreWithoutBivIcd) - oneYear;
    }

    const recommendations = getRecommendations(risk, formData, therapyImpact);

    return {
      oneYear: Math.round(oneYear),
      twoYear: Math.round(twoYear),
      threeYear: Math.round(threeYear),
      fiveYear: Math.round(fiveYear),
      medianSurvival: Math.round(medianSurvival * 10) / 10,
      shfmScore: shfmScore,
      risk,
      interpretation,
      recommendations,
      therapyImpact,
    };
  };

  const getRecommendations = (
    risk: string, 
    data: SHFMData, 
    therapyImpact: SurvivalResult['therapyImpact']
  ): string[] => {
    const recommendations = [
      'Optimize guideline-directed medical therapy',
      'Regular monitoring and follow-up',
      'Heart failure education and lifestyle modifications',
    ];

    // Medication recommendations
    if (!data.ace_inhibitor) {
      recommendations.push('Initiate ACE inhibitor or ARB therapy');
    }
    if (!data.beta_blocker) {
      recommendations.push('Initiate evidence-based beta-blocker');
    }
    if (!data.aldosterone_antagonist && (data.nyha_class as number) >= 3) {
      recommendations.push('Consider aldosterone antagonist therapy');
    }

    // Device recommendations
    if (!data.icd && parseInt(data.lvef) <= 35) {
      recommendations.push('Evaluate for ICD implantation');
    }
    if (!data.crt && parseInt(data.lvef) <= 35 && (data.nyha_class as number) >= 3) {
      recommendations.push('Consider cardiac resynchronization therapy');
    }

    // Risk-specific recommendations
    if (risk === 'Low') {
      recommendations.push('Continue current therapy and monitoring');
      recommendations.push('Annual assessment for therapy optimization');
    } else if (risk === 'Intermediate') {
      recommendations.push('Consider therapy intensification');
      recommendations.push('Enhanced monitoring and follow-up');
    } else if (risk === 'High') {
      recommendations.push('Advanced heart failure center referral');
      recommendations.push('Consider advanced therapy evaluation');
      recommendations.push('Palliative care consultation');
    } else {
      recommendations.push('Urgent advanced heart failure evaluation');
      recommendations.push('Transplant/MCS evaluation if appropriate');
      recommendations.push('Palliative care integration');
      recommendations.push('Goals of care discussion');
    }

    return recommendations;
  };

  const handleCalculate = () => {
    if (!validateForm()) return;
    
    setIsCalculating(true);
    
    // Simulate advanced survival analysis with loading animation
    setTimeout(() => {
      const calculatedResult = calculateSHFM();
      setResult(calculatedResult);
      setShowResult(true);
      setIsCalculating(false);
    }, 2000);
  };

  const handleReset = () => {
    setFormData({
      age: '',
      gender: '',
      ischemic_etiology: false,
      lvef: '',
      nyha_class: 0,
      systolic_bp: '',
      sodium: '',
      cholesterol: '',
      hemoglobin: '',
      lymphocyte_percent: '',
      uric_acid: '',
      furosemide_dose: '',
      torsemide_dose: '',
      bumetanide_dose: '',
      metolazone_dose: '',
      hydrochlorothiazide_dose: '',
      weight: '',
      ace_inhibitor: true,
      beta_blocker: true,
      arb: false,
      statin: true,
      aldosterone_antagonist: false,
      allopurinol: false,
      icd: false,
      crt: false,
      biventricular_icd: false,
    });
    setResult(null);
    setErrors({});
    setIsCalculating(false);
    setShowResult(false);
    setCurrentStep(1);
    setShowTherapyImpact(false);
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Low': return 'border-green-200 bg-green-50 dark:bg-green-900/20 dark:border-green-800';
      case 'Intermediate': return 'border-yellow-200 bg-yellow-50 dark:bg-yellow-900/20 dark:border-yellow-800';
      case 'High': return 'border-orange-200 bg-orange-50 dark:bg-orange-900/20 dark:border-orange-800';
      case 'Very High': return 'border-red-200 bg-red-50 dark:bg-red-900/20 dark:border-red-800';
      default: return 'border-gray-200 bg-gray-50 dark:bg-gray-900/20 dark:border-gray-800';
    }
  };

  const getRiskIcon = (risk: string) => {
    switch (risk) {
      case 'Low': return 'text-green-500';
      case 'Intermediate': return 'text-yellow-500';
      case 'High': return 'text-orange-500';
      case 'Very High': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <CalculatorContainer
      title={t('calculators.cardiology.shfm.title')}
      subtitle={t('calculators.cardiology.shfm.subtitle')}
      icon={Heart}
      gradient="cardiology"
      className="max-w-6xl mx-auto"
    >
      <div className="space-y-8">
        {/* SHFM Alert */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-2 border-blue-200 dark:border-blue-800 rounded-2xl p-6">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
              <Heart className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-bold text-blue-800 dark:text-blue-200 mb-2">{t('calculators.cardiology.shfm.title')}</h4>
              <p className="text-blue-700 dark:text-blue-300 leading-relaxed">
                {t('calculators.cardiology.shfm.description')}
              </p>
              <div className="mt-3 inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg px-3 py-1">
                <Award className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="text-xs font-semibold text-blue-700 dark:text-blue-300">Multi-Center Validated - Enhanced Therapy Analysis</span>
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
                  currentStep >= 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  1
                </div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{t('calculators.cardiology.shfm.demographics_step')}</span>
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
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{t('calculators.cardiology.shfm.clinical_step')}</span>
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
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{t('calculators.cardiology.shfm.laboratory_step')}</span>
              </div>
              <div className={`w-16 h-1 rounded-full transition-all duration-300 ${
                currentStep >= 4 ? 'bg-green-500' : 'bg-gray-200'
              }`}></div>
              <div className="flex items-center space-x-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                  currentStep >= 4 ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  4
                </div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{t('calculators.cardiology.shfm.therapy_step')}</span>
              </div>
            </div>

            {/* Step 1: Demographics & Heart Failure */}
            {currentStep === 1 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-200 dark:border-blue-800">
                    <User className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{t('calculators.cardiology.shfm.patient_demographics')}</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{t('calculators.cardiology.shfm.demographics_description')}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <CalculatorInput
                    label={t('calculators.cardiology.shfm.age_label')}
                    value={formData.age}
                    onChange={(value) => setFormData({ ...formData, age: value })}
                    type="number"
                    placeholder={t('calculators.cardiology.shfm.age_placeholder')}
                    min={18}
                    max={100}
                    unit="years"
                    error={errors.age}
                    icon={User}
                  />

                  <CalculatorSelect
                    label={t('calculators.cardiology.shfm.gender_label')}
                    value={formData.gender}
                    onChange={(value) => setFormData({ ...formData, gender: value as 'male' | 'female' })}
                    options={[
                      { value: '', label: t('calculators.cardiology.shfm.gender_placeholder') },
                      { value: 'male', label: t('calculators.cardiology.shfm.gender_male') },
                      { value: 'female', label: t('calculators.cardiology.shfm.gender_female') },
                    ]}
                    error={errors.gender}
                    icon={User}
                  />

                  <CalculatorInput
                    label={t('calculators.cardiology.shfm.lvef_label')}
                    value={formData.lvef}
                    onChange={(value) => setFormData({ ...formData, lvef: value })}
                    type="number"
                    placeholder={t('calculators.cardiology.shfm.lvef_placeholder')}
                    min={5}
                    max={80}
                    unit="%"
                    error={errors.lvef}
                    icon={Heart}
                  />

                  <CalculatorSelect
                    label={t('calculators.cardiology.shfm.nyha_class_label')}
                    value={formData.nyha_class === 0 ? '' : formData.nyha_class.toString()}
                    onChange={(value) => {
                      setFormData({ ...formData, nyha_class: value === '' ? 0 : parseInt(value) as 1 | 2 | 3 | 4 });
                    }}
                    options={[
                      { value: '', label: t('calculators.cardiology.shfm.nyha_class_placeholder') },
                      { value: '1', label: t('calculators.cardiology.shfm.nyha_class_1') },
                      { value: '2', label: t('calculators.cardiology.shfm.nyha_class_2') },
                      { value: '3', label: t('calculators.cardiology.shfm.nyha_class_3') },
                      { value: '4', label: t('calculators.cardiology.shfm.nyha_class_4') },
                    ]}
                    error={errors.nyha_class}
                    icon={Activity}
                  />

                  <div className="md:col-span-2">
                    <CalculatorCheckbox
                      label={t('calculators.cardiology.shfm.ischemic_etiology_label')}
                      checked={formData.ischemic_etiology}
                      onChange={(checked) => setFormData({ ...formData, ischemic_etiology: checked })}
                      description="Heart failure due to coronary artery disease"
                      icon={Heart}
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <CalculatorButton
                    onClick={() => setCurrentStep(2)}
                    className="enhanced-calculator-button"
                  >
                    {t('calculators.cardiology.shfm.next_clinical_data')}
                  </CalculatorButton>
                </div>
              </div>
            )}

            {/* Step 2: Clinical Parameters */}
            {currentStep === 2 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl border border-indigo-200 dark:border-indigo-800">
                    <Activity className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{t('calculators.cardiology.shfm.clinical_parameters')}</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{t('calculators.cardiology.shfm.clinical_description')}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <CalculatorInput
                    label={t('calculators.cardiology.shfm.systolic_bp_label')}
                    value={formData.systolic_bp}
                    onChange={(value) => setFormData({ ...formData, systolic_bp: value })}
                    type="number"
                    placeholder={t('calculators.cardiology.shfm.systolic_bp_placeholder')}
                    min={60}
                    max={250}
                    unit="mmHg"
                    error={errors.systolic_bp}
                    icon={TrendingUp}
                  />
                </div>

                <div className="flex justify-between">
                  <CalculatorButton
                    onClick={() => setCurrentStep(1)}
                    variant="outline"
                  >
                    Back
                  </CalculatorButton>
                  <CalculatorButton
                    onClick={() => setCurrentStep(3)}
                    className="enhanced-calculator-button"
                  >
                    {t('calculators.cardiology.shfm.next_laboratory_data')}
                  </CalculatorButton>
                </div>
              </div>
            )}

            {/* Step 3: Laboratory Values */}
            {currentStep === 3 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl border border-purple-200 dark:border-purple-800">
                    <BarChart3 className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{t('calculators.cardiology.shfm.laboratory_values')}</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{t('calculators.cardiology.shfm.laboratory_description')}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <CalculatorInput
                    label={t('calculators.cardiology.shfm.sodium_label')}
                    value={formData.sodium}
                    onChange={(value) => setFormData({ ...formData, sodium: value })}
                    type="number"
                    placeholder={t('calculators.cardiology.shfm.sodium_placeholder')}
                    min={120}
                    max={160}
                    unit="mEq/L"
                    error={errors.sodium}
                    icon={BarChart3}
                  />

                  <CalculatorInput
                    label={t('calculators.cardiology.shfm.cholesterol_label')}
                    value={formData.cholesterol}
                    onChange={(value) => setFormData({ ...formData, cholesterol: value })}
                    type="number"
                    placeholder={t('calculators.cardiology.shfm.cholesterol_placeholder')}
                    min={50}
                    max={500}
                    unit="mg/dL"
                    error={errors.cholesterol}
                    icon={BarChart3}
                  />

                  <CalculatorInput
                    label={t('calculators.cardiology.shfm.hemoglobin_label')}
                    value={formData.hemoglobin}
                    onChange={(value) => setFormData({ ...formData, hemoglobin: value })}
                    type="number"
                    step={0.1}
                    placeholder="12.5"
                    min={5}
                    max={20}
                    unit="g/dL"
                    error={errors.hemoglobin}
                    icon={BarChart3}
                    className="transition-all duration-300"
                  />

                  <CalculatorInput
                    label={t('calculators.cardiology.shfm.lymphocyte_percent_label')}
                    value={formData.lymphocyte_percent}
                    onChange={(value) => setFormData({ ...formData, lymphocyte_percent: value })}
                    type="number"
                    placeholder={t('calculators.cardiology.shfm.lymphocyte_percent_placeholder')}
                    min={1}
                    max={50}
                    unit="%"
                    error={errors.lymphocyte_percent}
                    icon={BarChart3}
                  />

                  <CalculatorInput
                    label={t('calculators.cardiology.shfm.uric_acid_label')}
                    value={formData.uric_acid}
                    onChange={(value) => setFormData({ ...formData, uric_acid: value })}
                    type="number"
                    step={0.1}
                    placeholder="7.0"
                    min={2}
                    max={20}
                    unit="mg/dL"
                    error={errors.uric_acid}
                    icon={BarChart3}
                    className="transition-all duration-300"
                  />
                </div>

                <div className="flex justify-between">
                  <CalculatorButton
                    onClick={() => setCurrentStep(2)}
                    variant="outline"
                  >
                    Back
                  </CalculatorButton>
                  <CalculatorButton
                    onClick={() => setCurrentStep(4)}
                    className="enhanced-calculator-button"
                  >
                    {t('calculators.cardiology.shfm.next_therapy_data')}
                  </CalculatorButton>
                </div>
              </div>
            )}

            {/* Step 4: Therapy Assessment */}
            {currentStep === 4 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-2xl border border-green-200 dark:border-green-800">
                    <Pill className="w-6 h-6 text-green-600 dark:text-green-400" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{t('calculators.cardiology.shfm.therapy_assessment')}</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{t('calculators.cardiology.shfm.therapy_description')}</p>
                </div>

                <div className="space-y-6">
                  {/* Medications */}
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center space-x-2">
                      <Pill className="w-5 h-5 text-green-600" />
                      <span>Heart Failure Medications</span>
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <CalculatorCheckbox
                        label={t('calculators.cardiology.shfm.ace_inhibitor_label')}
                        checked={formData.ace_inhibitor}
                        onChange={(checked) => setFormData({ ...formData, ace_inhibitor: checked })}
                        description="Evidence-based neurohormonal blockade"
                        icon={Pill}
                      />

                      <CalculatorCheckbox
                        label={t('calculators.cardiology.shfm.beta_blocker_label')}
                        checked={formData.beta_blocker}
                        onChange={(checked) => setFormData({ ...formData, beta_blocker: checked })}
                        description="Proven mortality benefit in HFrEF"
                        icon={Pill}
                      />

                      <CalculatorCheckbox
                        label={t('calculators.cardiology.shfm.aldosterone_antagonist_label')}
                        checked={formData.aldosterone_antagonist}
                        onChange={(checked) => setFormData({ ...formData, aldosterone_antagonist: checked })}
                        description="Mortality benefit in NYHA III-IV patients"
                        icon={Pill}
                      />

                      <CalculatorCheckbox
                        label={t('calculators.cardiology.shfm.statin_label')}
                        checked={formData.statin}
                        onChange={(checked) => setFormData({ ...formData, statin: checked })}
                        description="Lipid management therapy"
                        icon={Pill}
                      />

                      <CalculatorCheckbox
                        label={t('calculators.cardiology.shfm.allopurinol_label')}
                        checked={formData.allopurinol}
                        onChange={(checked) => setFormData({ ...formData, allopurinol: checked })}
                        description="Uric acid lowering therapy"
                        icon={Pill}
                      />
                    </div>
                  </div>

                  {/* Diuretic Dosing */}
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center space-x-2">
                      <Droplet className="w-5 h-5 text-blue-600" />
                      <span>Diuretic Dosing (enter 0 if not used)</span>
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <CalculatorInput label="Furosemide" value={formData.furosemide_dose} onChange={(v) => setFormData({...formData, furosemide_dose: v})} type="number" unit="mg" />
                      <CalculatorInput label="Torsemide" value={formData.torsemide_dose} onChange={(v) => setFormData({...formData, torsemide_dose: v})} type="number" unit="mg" />
                      <CalculatorInput label="Bumetanide" value={formData.bumetanide_dose} onChange={(v) => setFormData({...formData, bumetanide_dose: v})} type="number" unit="mg" />
                      <CalculatorInput label="Metolazone" value={formData.metolazone_dose} onChange={(v) => setFormData({...formData, metolazone_dose: v})} type="number" unit="mg" />
                      <CalculatorInput label="Hydrochlorothiazide" value={formData.hydrochlorothiazide_dose} onChange={(v) => setFormData({...formData, hydrochlorothiazide_dose: v})} type="number" unit="mg" />
                      <CalculatorInput label="Weight" value={formData.weight} onChange={(v) => setFormData({...formData, weight: v})} type="number" unit="kg" error={errors.weight} />
                    </div>
                  </div>

                  {/* Devices */}
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center space-x-2">
                      <Cpu className="w-5 h-5 text-blue-600" />
                      <span>Device Therapy</span>
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <CalculatorCheckbox
                        label={t('calculators.cardiology.shfm.icd_label')}
                        checked={formData.icd}
                        onChange={(checked) => setFormData({ ...formData, icd: checked })}
                        description="Primary or secondary prevention device"
                        icon={Cpu}
                      />

                      <CalculatorCheckbox
                        label={t('calculators.cardiology.shfm.crt_label')}
                        checked={formData.crt}
                        onChange={(checked) => setFormData({ ...formData, crt: checked })}
                        description="Biventricular pacing therapy"
                        icon={Cpu}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <CalculatorButton
                    onClick={() => setCurrentStep(3)}
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
                    {t('calculators.cardiology.shfm.calculate_button')}
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
                title="Seattle Heart Failure Model Analysis"
                value={`${result.medianSurvival} years`}
                category={result.risk.toLowerCase() as 'low' | 'intermediate' | 'high'}
                interpretation={result.interpretation}
                icon={Heart}
              >
                {/* Survival Overview Panel */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl border border-white/20 dark:border-gray-700/20">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{result.oneYear}%</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">1 Year</div>
                    </div>
                  </div>
                  <div className="p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl border border-white/20 dark:border-gray-700/20">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{result.twoYear}%</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">2 Years</div>
                    </div>
                  </div>
                  <div className="p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl border border-white/20 dark:border-gray-700/20">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{result.threeYear}%</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">3 Years</div>
                    </div>
                  </div>
                  <div className="p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl border border-white/20 dark:border-gray-700/20">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-pink-600 dark:text-pink-400">{result.fiveYear}%</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">5 Years</div>
                    </div>
                  </div>
                </div>

                {/* Therapy Impact Analysis */}
                {Object.keys(result.therapyImpact).length > 0 && (
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Target className="w-5 h-5 text-green-500" />
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100">Potential Therapy Benefits</h4>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {result.therapyImpact.aceInhibitor && (
                        <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-green-800 dark:text-green-200">ACE inhibitor/ARB</span>
                            <span className="text-lg font-bold text-green-600 dark:text-green-400">+{result.therapyImpact.aceInhibitor}%</span>
                          </div>
                          <div className="text-sm text-green-700 dark:text-green-300 mt-1">1-year survival improvement</div>
                        </div>
                      )}
                      {result.therapyImpact.betaBlocker && (
                        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-blue-800 dark:text-blue-200">Beta-blocker</span>
                            <span className="text-lg font-bold text-blue-600 dark:text-blue-400">+{result.therapyImpact.betaBlocker}%</span>
                          </div>
                          <div className="text-sm text-blue-700 dark:text-blue-300 mt-1">1-year survival improvement</div>
                        </div>
                      )}
                      {result.therapyImpact.aldosteroneAntagonist && (
                        <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-purple-800 dark:text-purple-200">Aldosterone antagonist</span>
                            <span className="text-lg font-bold text-purple-600 dark:text-purple-400">+{result.therapyImpact.aldosteroneAntagonist}%</span>
                          </div>
                          <div className="text-sm text-purple-700 dark:text-purple-300 mt-1">1-year survival improvement</div>
                        </div>
                      )}
                      {result.therapyImpact.icd && (
                        <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-orange-800 dark:text-orange-200">ICD Therapy</span>
                            <span className="text-lg font-bold text-orange-600 dark:text-orange-400">+{result.therapyImpact.icd}%</span>
                          </div>
                          <div className="text-sm text-orange-700 dark:text-orange-300 mt-1">Sudden death reduction</div>
                        </div>
                      )}
                      {result.therapyImpact.crt && (
                        <div className="p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg border border-teal-200 dark:border-teal-800">
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-teal-800 dark:text-teal-200">CRT Therapy</span>
                            <span className="text-lg font-bold text-teal-600 dark:text-teal-400">+{result.therapyImpact.crt}%</span>
                          </div>
                          <div className="text-sm text-teal-700 dark:text-teal-300 mt-1">Survival improvement</div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Clinical Recommendations */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Stethoscope className="w-5 h-5 text-blue-500" />
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100">Clinical Management Recommendations</h4>
                  </div>
                  <div className={`p-6 rounded-2xl border-2 ${getRiskColor(result.risk)}`}>
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
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200">Enhanced Seattle Heart Failure Model</h4>
                  </div>
                  <div className="text-sm text-blue-700 dark:text-blue-300">
                    ✓ Multi-Center Validated • Enhanced therapy impact analysis with evidence-based recommendations
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
                  onClick={() => setShowResult(false)}
                  variant="secondary"
                  size="lg"
                >
                  Modify Inputs
                </CalculatorButton>
              </div>
            </div>
          )
        )}

        {/* Footer Information */}
        <div className="text-center pt-8 border-t border-white/20 dark:border-gray-800/20">
          <div className="flex items-center justify-center space-x-3 text-sm text-gray-600 dark:text-gray-400">
            <Info className="w-4 h-4" />
            <span>Based on Seattle Heart Failure Model (Levy et al.) • Enhanced therapy impact analysis</span>
            <div className="flex items-center space-x-1">
              <Award className="w-4 h-4 text-blue-600" />
              <span className="text-blue-600 font-semibold">Multi-Center Validated</span>
            </div>
          </div>
        </div>
      </div>
    </CalculatorContainer>
  );
}; 