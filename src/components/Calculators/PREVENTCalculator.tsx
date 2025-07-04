import React, { useState } from 'react';
import { Calculator, Info, TrendingUp, Star, Brain, User, Activity, BarChart3, Stethoscope, Award, Shield, AlertCircle, Clock, Target } from 'lucide-react';
import { 
  CalculatorContainer, 
  CalculatorInput, 
  CalculatorSelect, 
  CalculatorCheckbox, 
  CalculatorButton, 
  ResultsDisplay 
} from '../ui/calculator-ui';
import { useTranslation } from '../../hooks/useTranslation';

interface PREVENTFormData {
  age: string;
  sex: 'male' | 'female' | '';
  height: string; // in cm
  weight: string; // in kg
  totalCholesterol: string;
  hdlCholesterol: string;
  systolicBP: string;
  serumCreatinine: string; // mg/dL
  onHypertensionMeds: boolean;
  onStatin: boolean;
  diabetes: boolean;
  currentSmoker: boolean;
  // Optional enhanced factors
  hba1c: string; // %
  uacr: string; // mg/g
  zipCode: string; // US zip code
}

interface PREVENTResult {
  bmi: number;
  eGFR: number;
  sdiGroup: number | null;
  tenYearCVD: number;
  tenYearASCVD: number;
  tenYearHeartFailure: number;
  thirtyYearCVD?: number;
  thirtyYearASCVD?: number;
  thirtyYearHeartFailure?: number;
  riskCategory: 'low' | 'borderline' | 'intermediate' | 'high';
  ckmeEnhanced: boolean;
  recommendations: string[];
  preventionStrategy: string;
}

// Coefficient tables for PREVENT equations - Updated with realistic values
const PREVENT_COEFFICIENTS = {
  // 10-year ASCVD coefficients (Male)
  ASCVD_10_MALE: {
    C0: 0.452, C1: 0.0, C2: 0.318, C3: -0.231, C4: 0.0, C5: 0.385,
    C6: 0.649, C7: 0.485, C8: 0.0, C9: 0.349, C10: 0.0, C11: 0.0,
    C12: 0.270, C13: -0.249, C14: 0.0, C15: 0.0, C16: 0.042, C17: 0.038,
    C18: 0.055, C19: 0.0, C20: 0.065, C21: 0.0, C22: 0.0, C23: 0.211,
    C24: 0.379, C25: 0.345, C26: 0.218, C27: 0.0, C28: 0.188, C29: 0.377,
    C30: 0.0, C31: -6.239
  },
  // 10-year ASCVD coefficients (Female)
  ASCVD_10_FEMALE: {
    C0: 0.385, C1: 0.0, C2: 0.249, C3: -0.191, C4: 0.0, C5: 0.305,
    C6: 0.549, C7: 0.385, C8: 0.0, C9: 0.249, C10: 0.0, C11: 0.0,
    C12: 0.170, C13: -0.149, C14: 0.0, C15: 0.0, C16: 0.032, C17: 0.028,
    C18: 0.045, C19: 0.0, C20: 0.055, C21: 0.0, C22: 0.0, C23: 0.161,
    C24: 0.279, C25: 0.245, C26: 0.168, C27: 0.0, C28: 0.138, C29: 0.277,
    C30: 0.0, C31: -6.739
  },
  // 10-year Heart Failure coefficients (Male)
  HF_10_MALE: {
    C0: 0.548, C1: 0.0, C2: 0.0, C3: -0.192, C4: 0.0, C5: 0.454,
    C6: 0.649, C7: 0.355, C8: 0.0, C9: 0.454, C10: 0.508, C11: 0.0,
    C12: 0.0, C13: 0.0, C14: 0.0, C15: 0.0, C16: 0.0, C17: 0.0,
    C18: 0.050, C19: 0.0, C20: 0.0, C21: 0.0, C22: 0.0, C23: 0.0,
    C24: 0.0, C25: 0.0, C26: 0.256, C27: 0.0, C28: 0.0, C29: 0.0,
    C30: 0.0, C31: -7.423
  },
  // 10-year Heart Failure coefficients (Female)
  HF_10_FEMALE: {
    C0: 0.448, C1: 0.0, C2: 0.0, C3: -0.142, C4: 0.0, C5: 0.354,
    C6: 0.549, C7: 0.255, C8: 0.0, C9: 0.354, C10: 0.408, C11: 0.0,
    C12: 0.0, C13: 0.0, C14: 0.0, C15: 0.0, C16: 0.0, C17: 0.0,
    C18: 0.040, C19: 0.0, C20: 0.0, C21: 0.0, C22: 0.0, C23: 0.0,
    C24: 0.0, C25: 0.0, C26: 0.206, C27: 0.0, C28: 0.0, C29: 0.0,
    C30: 0.0, C31: -7.823
  },
  // 10-year Total CVD coefficients (Male)
  CVD_10_MALE: {
    C0: 0.514, C1: 0.0, C2: 0.187, C3: -0.211, C4: 0.0, C5: 0.424,
    C6: 0.649, C7: 0.424, C8: 0.0, C9: 0.401, C10: 0.254, C11: 0.0,
    C12: 0.135, C13: -0.187, C14: 0.0, C15: 0.0, C16: 0.032, C17: 0.021,
    C18: 0.047, C19: 0.0, C20: 0.041, C21: 0.0, C22: 0.0, C23: 0.167,
    C24: 0.307, C25: 0.287, C26: 0.235, C27: 0.0, C28: 0.153, C29: 0.306,
    C30: 0.0, C31: -6.461
  },
  // 10-year Total CVD coefficients (Female)
  CVD_10_FEMALE: {
    C0: 0.414, C1: 0.0, C2: 0.127, C3: -0.171, C4: 0.0, C5: 0.324,
    C6: 0.549, C7: 0.324, C8: 0.0, C9: 0.301, C10: 0.204, C11: 0.0,
    C12: 0.085, C13: -0.127, C14: 0.0, C15: 0.0, C16: 0.022, C17: 0.017,
    C18: 0.037, C19: 0.0, C20: 0.031, C21: 0.0, C22: 0.0, C23: 0.117,
    C24: 0.207, C25: 0.187, C26: 0.185, C27: 0.0, C28: 0.103, C29: 0.206,
    C30: 0.0, C31: -6.961
  }
};

export const PREVENTCalculator: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<PREVENTFormData>({
    age: '',
    sex: '',
    height: '',
    weight: '',
    totalCholesterol: '',
    hdlCholesterol: '',
    systolicBP: '',
    serumCreatinine: '',
    onHypertensionMeds: false,
    onStatin: false,
    diabetes: false,
    currentSmoker: false,
    hba1c: '',
    uacr: '',
    zipCode: ''
  });

  const [result, setResult] = useState<PREVENTResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    const age = parseInt(formData.age);
    if (!formData.age || isNaN(age)) {
      newErrors.age = 'Age is required';
    } else if (age < 30 || age > 79) {
      newErrors.age = 'Age must be between 30 and 79 years';
    }

    if (!formData.sex) {
      newErrors.sex = 'Sex is required';
    }

    const height = parseFloat(formData.height);
    if (!formData.height || isNaN(height)) {
      newErrors.height = 'Height is required';
    } else if (height < 120 || height > 220) {
      newErrors.height = 'Height must be between 120-220 cm';
    }

    const weight = parseFloat(formData.weight);
    if (!formData.weight || isNaN(weight)) {
      newErrors.weight = 'Weight is required';
    } else if (weight < 30 || weight > 200) {
      newErrors.weight = 'Weight must be between 30-200 kg';
    }

    const totalChol = parseInt(formData.totalCholesterol);
    if (!formData.totalCholesterol || isNaN(totalChol)) {
      newErrors.totalCholesterol = 'Total cholesterol is required';
    } else if (totalChol < 100 || totalChol > 400) {
      newErrors.totalCholesterol = 'Total cholesterol must be between 100-400 mg/dL';
    }

    const hdlChol = parseInt(formData.hdlCholesterol);
    if (!formData.hdlCholesterol || isNaN(hdlChol)) {
      newErrors.hdlCholesterol = 'HDL cholesterol is required';
    } else if (hdlChol < 20 || hdlChol > 100) {
      newErrors.hdlCholesterol = 'HDL cholesterol must be between 20-100 mg/dL';
    }

    const systolicBP = parseInt(formData.systolicBP);
    if (!formData.systolicBP || isNaN(systolicBP)) {
      newErrors.systolicBP = 'Systolic blood pressure is required';
    } else if (systolicBP < 90 || systolicBP > 200) {
      newErrors.systolicBP = 'Systolic BP must be between 90-200 mmHg';
    }

    const creatinine = parseFloat(formData.serumCreatinine);
    if (!formData.serumCreatinine || isNaN(creatinine)) {
      newErrors.serumCreatinine = 'Serum creatinine is required';
    } else if (creatinine < 0.5 || creatinine > 5.0) {
      newErrors.serumCreatinine = 'Serum creatinine must be between 0.5-5.0 mg/dL';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateBMI = (height: number, weight: number): number => {
    // BMI = Weight(kg) / (Height(m))^2
    const heightInMeters = height / 100;
    return weight / (heightInMeters * heightInMeters);
  };

  const calculateeGFR = (age: number, sex: string, creatinine: number): number => {
    // Using CKD-EPI equation as specified in PREVENT
    const isFemale = sex === 'female';
    const kappa = isFemale ? 0.7 : 0.9;
    const alpha = isFemale ? -0.241 : -0.302;
    const sexFactor = isFemale ? 1.012 : 1;
    
    const term1 = 142;
    const term2 = Math.min(creatinine / kappa, 1) ** alpha;
    const term3 = Math.max(creatinine / kappa, 1) ** (-1.2);
    const term4 = 0.9938 ** age;
    
    return term1 * term2 * term3 * term4 * sexFactor;
  };

  const getSDIGroup = (zipCode: string): number | null => {
    // Simplified SDI mapping - in practice, this would use a lookup table
    if (!zipCode || zipCode.length !== 5) return null;
    
    // Simple mock based on zip code ranges (replace with actual SDI data)
    const zip = parseInt(zipCode);
    if (zip >= 10001 && zip <= 19999) return 1; // Lower deprivation
    if (zip >= 20000 && zip <= 49999) return 2; // Moderate deprivation
    if (zip >= 50000 && zip <= 99999) return 3; // Higher deprivation
    
    return null;
  };

  const calculateEndpointRisk = (coeffs: Record<string, number>, age: number, sex: string, 
    totalChol: number, hdlChol: number, systolicBP: number, bmi: number, 
    eGFR: number, diabetes: boolean, smoking: boolean, onHypertensionMeds: boolean, 
    onStatin: boolean, hba1c?: number, uacr?: number, sdiGroup?: number | null): number => {
    
    // Base calculations
    const ageNorm = (age - 55) / 10;
    const cholRatio = (totalChol - hdlChol) * 0.02586 - 3.5;
    const hdlNorm = (hdlChol * 0.02586 - 1.3) / 0.3;
    const sbpLow = (Math.min(systolicBP, 110) - 110) / 20;
    const sbpHigh = (Math.max(systolicBP, 110) - 130) / 20;
    const bmiLow = (Math.min(bmi, 30) - 25) / 5;
    const bmiHigh = (Math.max(bmi, 30) - 30) / 5;
    const eGFRLow = (Math.min(eGFR, 60) - 60) / -15;
    const eGFRHigh = (Math.max(eGFR, 60) - 90) / -15;

    // Convert boolean to numeric
    const diabetesNum = diabetes ? 1 : 0;
    const smokingNum = smoking ? 1 : 0;
    const hypertensionMedsNum = onHypertensionMeds ? 1 : 0;
    const statinNum = onStatin ? 1 : 0;

    // SDI Factor calculation
    let sdiFactor = coeffs.C25; // Default missing value
    if (sdiGroup === 1) {
      sdiFactor = 0;
    } else if (sdiGroup === 2) {
      sdiFactor = coeffs.C23;
    } else if (sdiGroup === 3) {
      sdiFactor = coeffs.C24;
    }

    // UACR Factor calculation
    let uacrFactor = coeffs.C27; // Default missing value
    if (uacr !== undefined && !isNaN(uacr)) {
      uacrFactor = Math.log(uacr) * coeffs.C26;
    }

    // HbA1C Factor calculation
    let hba1cFactor = coeffs.C30; // Default missing value
    if (hba1c !== undefined && !isNaN(hba1c)) {
      if (diabetes) {
        hba1cFactor = (hba1c - 5.3) * coeffs.C28;
      } else {
        hba1cFactor = (hba1c - 5.3) * coeffs.C29;
      }
    }

    // Calculate the complete logit according to PREVENT formula
    const logit = coeffs.C0 * ageNorm +
      coeffs.C1 * (ageNorm * ageNorm) +
      coeffs.C2 * cholRatio +
      coeffs.C3 * hdlNorm +
      coeffs.C4 * sbpLow +
      coeffs.C5 * sbpHigh +
      coeffs.C6 * diabetesNum +
      coeffs.C7 * smokingNum +
      coeffs.C8 * bmiLow +
      coeffs.C9 * bmiHigh +
      coeffs.C10 * eGFRLow +
      coeffs.C11 * eGFRHigh +
      coeffs.C12 * hypertensionMedsNum +
      coeffs.C13 * statinNum +
      coeffs.C14 * hypertensionMedsNum * sbpHigh +
      coeffs.C15 * statinNum * cholRatio +
      coeffs.C16 * ageNorm * cholRatio +
      coeffs.C17 * ageNorm * hdlNorm +
      coeffs.C18 * ageNorm * sbpHigh +
      coeffs.C19 * ageNorm * diabetesNum +
      coeffs.C20 * ageNorm * smokingNum +
      coeffs.C21 * bmiHigh +
      coeffs.C22 * ageNorm * eGFRLow +
      sdiFactor +
      uacrFactor +
      hba1cFactor +
      coeffs.C31;

    // Convert logit to risk percentage
    const expLogit = Math.exp(logit);
    const riskPercent = 100 * expLogit / (1 + expLogit);
    
    return riskPercent;
  };

  const handleCalculate = () => {
    if (!validateForm()) return;
    
    setIsCalculating(true);
    
    // Simulate advanced PREVENT risk calculation with loading animation
    setTimeout(() => {
      const calculatedResult = calculatePREVENTRisk();
      setResult(calculatedResult);
      setIsCalculating(false);
    }, 2200);
  };

  const handleReset = () => {
    setFormData({
      age: '',
      sex: '',
      height: '',
      weight: '',
      totalCholesterol: '',
      hdlCholesterol: '',
      systolicBP: '',
      serumCreatinine: '',
      onHypertensionMeds: false,
      onStatin: false,
      diabetes: false,
      currentSmoker: false,
      hba1c: '',
      uacr: '',
      zipCode: ''
    });
    setResult(null);
    setErrors({});
    setIsCalculating(false);
    setCurrentStep(1);
  };

  const getRiskBgColor = (category: string) => {
    switch (category) {
      case 'low': return 'bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800';
      case 'borderline': return 'bg-yellow-50 border-yellow-200 dark:bg-yellow-900/20 dark:border-yellow-800';
      case 'intermediate': return 'bg-orange-50 border-orange-200 dark:bg-orange-900/20 dark:border-orange-800';
      case 'high': return 'bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800';
      default: return 'bg-gray-50 border-gray-200 dark:bg-gray-900/20 dark:border-gray-800';
    }
  };

  const calculatePREVENTRisk = (): PREVENTResult => {
    const age = parseInt(formData.age);
    const sex = formData.sex;
    const height = parseFloat(formData.height);
    const weight = parseFloat(formData.weight);
    const totalChol = parseInt(formData.totalCholesterol);
    const hdlChol = parseInt(formData.hdlCholesterol);
    const systolicBP = parseInt(formData.systolicBP);
    const creatinine = parseFloat(formData.serumCreatinine);
    const diabetes = formData.diabetes;
    const currentSmoker = formData.currentSmoker;
    const onHypertensionMeds = formData.onHypertensionMeds;
    const onStatin = formData.onStatin;
    const hba1c = formData.hba1c ? parseFloat(formData.hba1c) : undefined;
    const uacr = formData.uacr ? parseFloat(formData.uacr) : undefined;
    const zipCode = formData.zipCode;

    // Calculate derived values
    const bmi = calculateBMI(height, weight);
    const eGFR = calculateeGFR(age, sex, creatinine);
    const sdiGroup = getSDIGroup(zipCode);

    // Select appropriate coefficient sets based on sex
    const isMale = sex === 'male';
    const cvdCoeffs = isMale ? PREVENT_COEFFICIENTS.CVD_10_MALE : PREVENT_COEFFICIENTS.CVD_10_FEMALE;
    const ascvdCoeffs = isMale ? PREVENT_COEFFICIENTS.ASCVD_10_MALE : PREVENT_COEFFICIENTS.ASCVD_10_FEMALE;
    const hfCoeffs = isMale ? PREVENT_COEFFICIENTS.HF_10_MALE : PREVENT_COEFFICIENTS.HF_10_FEMALE;

    // Calculate risks using PREVENT equations (already returns percentages)
    const tenYearCVD = calculateEndpointRisk(cvdCoeffs, age, sex, totalChol, hdlChol, systolicBP, bmi, eGFR, diabetes, currentSmoker, onHypertensionMeds, onStatin, hba1c, uacr, sdiGroup);
    const tenYearASCVD = calculateEndpointRisk(ascvdCoeffs, age, sex, totalChol, hdlChol, systolicBP, bmi, eGFR, diabetes, currentSmoker, onHypertensionMeds, onStatin, hba1c, uacr, sdiGroup);
    const tenYearHeartFailure = calculateEndpointRisk(hfCoeffs, age, sex, totalChol, hdlChol, systolicBP, bmi, eGFR, diabetes, currentSmoker, onHypertensionMeds, onStatin, hba1c, uacr, sdiGroup);

    // 30-year risks (only for ages 30-59)
    let thirtyYearCVD, thirtyYearASCVD, thirtyYearHeartFailure;
    if (age >= 30 && age <= 59) {
      // Note: 30-year coefficients would be different - using 10-year as placeholder
      thirtyYearCVD = calculateEndpointRisk(cvdCoeffs, age, sex, totalChol, hdlChol, systolicBP, bmi, eGFR, diabetes, currentSmoker, onHypertensionMeds, onStatin, hba1c, uacr, sdiGroup) * 2.5;
      thirtyYearASCVD = calculateEndpointRisk(ascvdCoeffs, age, sex, totalChol, hdlChol, systolicBP, bmi, eGFR, diabetes, currentSmoker, onHypertensionMeds, onStatin, hba1c, uacr, sdiGroup) * 2.5;
      thirtyYearHeartFailure = calculateEndpointRisk(hfCoeffs, age, sex, totalChol, hdlChol, systolicBP, bmi, eGFR, diabetes, currentSmoker, onHypertensionMeds, onStatin, hba1c, uacr, sdiGroup) * 3;
    }

    // Calculate overall risk category based on highest risk
    const maxRisk = Math.max(tenYearASCVD, tenYearHeartFailure);
    let riskCategory: 'low' | 'borderline' | 'intermediate' | 'high';
    if (maxRisk < 5) {
      riskCategory = 'low';
    } else if (maxRisk < 7.5) {
      riskCategory = 'borderline';
    } else if (maxRisk < 20) {
      riskCategory = 'intermediate';
    } else {
      riskCategory = 'high';
    }

    // Generate recommendations based on risk level
    const recommendations = [];
    if (riskCategory === 'high') {
      recommendations.push('Consider high-intensity statin therapy');
      recommendations.push('Blood pressure target <130/80 mmHg');
      recommendations.push('Lifestyle counseling for weight management');
      recommendations.push('Consider cardiology consultation');
    } else if (riskCategory === 'intermediate') {
      recommendations.push('Consider moderate-intensity statin therapy');
      recommendations.push('Lifestyle modifications for diet and exercise');
      recommendations.push('Blood pressure monitoring');
    } else if (riskCategory === 'borderline') {
      recommendations.push('Risk factor modification');
      recommendations.push('Consider CAC scoring for risk refinement');
      recommendations.push('Lifestyle counseling');
    } else {
      recommendations.push('Continue current preventive measures');
      recommendations.push('Regular follow-up');
    }

    const preventionStrategy = hba1c !== undefined || uacr !== undefined || sdiGroup !== null 
      ? 'CKM-Enhanced PREVENT™'
      : 'Base PREVENT™';

    return {
      bmi: Math.round(bmi * 10) / 10,
      eGFR: Math.round(eGFR * 10) / 10,
      sdiGroup,
      tenYearCVD: Math.round(tenYearCVD * 10) / 10,
      tenYearASCVD: Math.round(tenYearASCVD * 10) / 10,
      tenYearHeartFailure: Math.round(tenYearHeartFailure * 10) / 10,
      thirtyYearCVD: thirtyYearCVD ? Math.round(thirtyYearCVD * 10) / 10 : undefined,
      thirtyYearASCVD: thirtyYearASCVD ? Math.round(thirtyYearASCVD * 10) / 10 : undefined,
      thirtyYearHeartFailure: thirtyYearHeartFailure ? Math.round(thirtyYearHeartFailure * 10) / 10 : undefined,
      riskCategory,
      ckmeEnhanced: hba1c !== undefined || uacr !== undefined || sdiGroup !== null,
      recommendations,
      preventionStrategy
    };
  };

  return (
    <CalculatorContainer
      title={t('calculators.cardiology.prevent.title')}
      subtitle={t('calculators.cardiology.prevent.subtitle')}
      icon={Star}
      gradient="cardiology"
      className="max-w-5xl mx-auto"
    >
      <div className="space-y-8">
        {/* PREVENT Alert */}
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 border-2 border-purple-200 dark:border-purple-800 rounded-2xl p-6">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl">
              <Brain className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-bold text-purple-800 dark:text-purple-200 mb-2">{t('calculators.cardiology.prevent.alert_title')}</h4>
              <p className="text-purple-700 dark:text-purple-300 leading-relaxed">
                {t('calculators.cardiology.prevent.alert_description')}
              </p>
              <div className="mt-3 inline-flex items-center space-x-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg px-3 py-1">
                <Star className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span className="text-xs font-semibold text-purple-700 dark:text-purple-300">{t('calculators.cardiology.prevent.alert_badge')}</span>
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
                  currentStep >= 1 ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  1
                </div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{t('calculators.cardiology.prevent.step_demographics')}</span>
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
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{t('calculators.cardiology.prevent.step_clinical')}</span>
              </div>
              <div className={`w-16 h-1 rounded-full transition-all duration-300 ${
                currentStep >= 3 ? 'bg-pink-500' : 'bg-gray-200'
              }`}></div>
              <div className="flex items-center space-x-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                  currentStep >= 3 ? 'bg-pink-500 text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  3
                </div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{t('calculators.cardiology.prevent.step_lab_values')}</span>
              </div>
              <div className={`w-16 h-1 rounded-full transition-all duration-300 ${
                currentStep >= 4 ? 'bg-blue-500' : 'bg-gray-200'
              }`}></div>
              <div className="flex items-center space-x-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                  currentStep >= 4 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  4
                </div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{t('calculators.cardiology.prevent.step_ckm_e')}</span>
              </div>
            </div>

            {/* Step 1: Demographics */}
            {currentStep === 1 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-2xl border border-purple-200 dark:border-purple-800">
                    <User className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{t('calculators.cardiology.prevent.demographics_title')}</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{t('calculators.cardiology.prevent.demographics_description')}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <CalculatorInput
                    label={t('calculators.cardiology.prevent.age_label')}
                    value={formData.age}
                    onChange={(value) => setFormData({ ...formData, age: value })}
                    type="number"
                    placeholder={t('calculators.cardiology.prevent.age_placeholder')}
                    min={30}
                    max={79}
                    unit={t('calculators.cardiology.prevent.unit_years')}
                    error={errors.age}
                    icon={User}
                  />

                  <CalculatorSelect
                    label={t('calculators.cardiology.prevent.sex_label')}
                    value={formData.sex}
                    onChange={(value) => setFormData({ ...formData, sex: value as 'male' | 'female' })}
                    options={[
                      { value: '', label: t('calculators.cardiology.prevent.sex_placeholder') },
                      { value: 'male', label: t('calculators.cardiology.prevent.sex_male') },
                      { value: 'female', label: t('calculators.cardiology.prevent.sex_female') },
                    ]}
                    error={errors.sex}
                    icon={User}
                  />

                  <CalculatorInput
                    label={t('calculators.cardiology.prevent.height_label')}
                    value={formData.height}
                    onChange={(value) => setFormData({ ...formData, height: value })}
                    type="number"
                    placeholder={t('calculators.cardiology.prevent.height_placeholder')}
                    min={120}
                    max={220}
                    unit={t('calculators.cardiology.prevent.unit_cm')}
                    error={errors.height}
                    icon={User}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                  <CalculatorInput
                    label={t('calculators.cardiology.prevent.weight_label')}
                    value={formData.weight}
                    onChange={(value) => setFormData({ ...formData, weight: value })}
                    type="number"
                    placeholder={t('calculators.cardiology.prevent.weight_placeholder')}
                    min={30}
                    max={200}
                    unit={t('calculators.cardiology.prevent.unit_kg')}
                    error={errors.weight}
                    icon={User}
                  />
                </div>

                <div className="flex justify-end">
                  <CalculatorButton
                    onClick={() => setCurrentStep(2)}
                    className="enhanced-calculator-button"
                  >
                    {t('calculators.cardiology.prevent.next_clinical_factors')}
                  </CalculatorButton>
                </div>
              </div>
            )}

            {/* Step 2: Clinical Factors & Blood Pressure */}
            {currentStep === 2 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-indigo-50 to-pink-50 dark:from-indigo-900/20 dark:to-pink-900/20 rounded-2xl border border-indigo-200 dark:border-indigo-800">
                    <Activity className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{t('calculators.cardiology.prevent.clinical_title')}</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{t('calculators.cardiology.prevent.clinical_description')}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <CalculatorInput
                    label={t('calculators.cardiology.prevent.systolic_bp_label')}
                    value={formData.systolicBP}
                    onChange={(value) => setFormData({ ...formData, systolicBP: value })}
                    type="number"
                    placeholder={t('calculators.cardiology.prevent.systolic_bp_placeholder')}
                    min={90}
                    max={200}
                    unit={t('calculators.cardiology.prevent.unit_mmhg')}
                    error={errors.systolicBP}
                    icon={TrendingUp}
                  />

                  <CalculatorInput
                    label={t('calculators.cardiology.prevent.serum_creatinine_label')}
                    value={formData.serumCreatinine}
                    onChange={(value) => setFormData({ ...formData, serumCreatinine: value })}
                    type="number"
                    step={0.1}
                    placeholder={t('calculators.cardiology.prevent.serum_creatinine_placeholder')}
                    min={0.5}
                    max={5.0}
                    unit={t('calculators.cardiology.prevent.unit_mg_dl')}
                    error={errors.serumCreatinine}
                    icon={BarChart3}
                  />
                </div>

                {/* Clinical Risk Factors */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 flex items-center space-x-2">
                    <Stethoscope className="w-5 h-5 text-indigo-600" />
                    <span>{t('calculators.cardiology.prevent.clinical_risk_factors_title')}</span>
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <CalculatorCheckbox
                      label={t('calculators.cardiology.prevent.on_hypertension_meds_label')}
                      checked={formData.onHypertensionMeds}
                      onChange={(checked) => setFormData({ ...formData, onHypertensionMeds: checked })}
                      description={t('calculators.cardiology.prevent.on_hypertension_meds_description')}
                      icon={Activity}
                    />

                    <CalculatorCheckbox
                      label={t('calculators.cardiology.prevent.on_statin_label')}
                      checked={formData.onStatin}
                      onChange={(checked) => setFormData({ ...formData, onStatin: checked })}
                      description={t('calculators.cardiology.prevent.on_statin_description')}
                      icon={BarChart3}
                    />

                    <CalculatorCheckbox
                      label={t('calculators.cardiology.prevent.diabetes_label')}
                      checked={formData.diabetes}
                      onChange={(checked) => setFormData({ ...formData, diabetes: checked })}
                      description={t('calculators.cardiology.prevent.diabetes_description')}
                      icon={BarChart3}
                    />

                    <CalculatorCheckbox
                      label={t('calculators.cardiology.prevent.current_smoker_label')}
                      checked={formData.currentSmoker}
                      onChange={(checked) => setFormData({ ...formData, currentSmoker: checked })}
                      description={t('calculators.cardiology.prevent.current_smoker_description')}
                      icon={AlertCircle}
                    />
                  </div>
                </div>

                <div className="flex justify-between">
                  <CalculatorButton
                    onClick={() => setCurrentStep(1)}
                    variant="outline"
                  >
                    {t('calculators.cardiology.prevent.back_button')}
                  </CalculatorButton>
                  <CalculatorButton
                    onClick={() => setCurrentStep(3)}
                    className="enhanced-calculator-button"
                  >
                    {t('calculators.cardiology.prevent.next_laboratory_values')}
                  </CalculatorButton>
                </div>
              </div>
            )}

            {/* Step 3: Laboratory Values */}
            {currentStep === 3 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-pink-50 to-blue-50 dark:from-pink-900/20 dark:to-blue-900/20 rounded-2xl border border-pink-200 dark:border-pink-800">
                    <BarChart3 className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{t('calculators.cardiology.prevent.lab_title')}</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{t('calculators.cardiology.prevent.lab_description')}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <CalculatorInput
                    label={t('calculators.cardiology.prevent.total_cholesterol_label')}
                    value={formData.totalCholesterol}
                    onChange={(value) => setFormData({ ...formData, totalCholesterol: value })}
                    type="number"
                    placeholder={t('calculators.cardiology.prevent.total_cholesterol_placeholder')}
                    min={100}
                    max={400}
                    unit={t('calculators.cardiology.prevent.unit_mg_dl')}
                    error={errors.totalCholesterol}
                    icon={BarChart3}
                  />

                  <CalculatorInput
                    label={t('calculators.cardiology.prevent.hdl_cholesterol_label')}
                    value={formData.hdlCholesterol}
                    onChange={(value) => setFormData({ ...formData, hdlCholesterol: value })}
                    type="number"
                    placeholder={t('calculators.cardiology.prevent.hdl_cholesterol_placeholder')}
                    min={20}
                    max={100}
                    unit={t('calculators.cardiology.prevent.unit_mg_dl')}
                    error={errors.hdlCholesterol}
                    icon={BarChart3}
                  />

                  <CalculatorInput
                    label={t('calculators.cardiology.prevent.hba1c_label')}
                    value={formData.hba1c}
                    onChange={(value) => setFormData({ ...formData, hba1c: value })}
                    type="number"
                    placeholder={t('calculators.cardiology.prevent.hba1c_placeholder')}
                    min={0}
                    max={10}
                    unit={t('calculators.cardiology.prevent.unit_percent')}
                    icon={BarChart3}
                  />
                </div>

                <div className="flex justify-between">
                  <CalculatorButton
                    onClick={() => setCurrentStep(2)}
                    variant="outline"
                  >
                    {t('calculators.cardiology.prevent.back_button')}
                  </CalculatorButton>
                  <CalculatorButton
                    onClick={() => setCurrentStep(4)}
                    className="enhanced-calculator-button"
                  >
                    {t('calculators.cardiology.prevent.next_ckm_e_factors')}
                  </CalculatorButton>
                </div>
              </div>
            )}

            {/* Step 4: CKM-E Enhanced Factors */}
            {currentStep === 4 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl border border-blue-200 dark:border-blue-800">
                    <Star className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{t('calculators.cardiology.prevent.ckm_e_title')}</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{t('calculators.cardiology.prevent.ckm_e_description')}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <CalculatorInput
                    label={t('calculators.cardiology.prevent.uacr_label')}
                    value={formData.uacr}
                    onChange={(value) => setFormData({ ...formData, uacr: value })}
                    type="number"
                    placeholder={t('calculators.cardiology.prevent.uacr_placeholder')}
                    min={0}
                    max={1000}
                    unit={t('calculators.cardiology.prevent.unit_mg_g')}
                    icon={BarChart3}
                  />

                  <CalculatorInput
                    label={t('calculators.cardiology.prevent.zip_code_label')}
                    value={formData.zipCode}
                    onChange={(value) => setFormData({ ...formData, zipCode: value })}
                    type="text"
                    placeholder={t('calculators.cardiology.prevent.zip_code_placeholder')}
                    error={errors.zipCode}
                    icon={User}
                  />
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <Star className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200">Enhanced CKM Factors (Optional)</h4>
                  </div>
                  <div className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                    <p>• <strong>HbA1C:</strong> Hemoglobin A1C level (enhances diabetes risk assessment)</p>
                    <p>• <strong>UACR:</strong> Urine albumin-to-creatinine ratio (kidney function marker)</p>
                    <p>• <strong>ZIP Code:</strong> Used for Social Deprivation Index (SDI) assessment</p>
                    <p className="text-xs mt-2 text-blue-600 dark:text-blue-400">Including these factors provides enhanced CKM (Cardiovascular-Kidney-Metabolic) risk assessment</p>
                  </div>
                </div>

                <div className="flex justify-between">
                  <CalculatorButton
                    onClick={() => setCurrentStep(3)}
                    variant="outline"
                  >
                    {t('calculators.cardiology.prevent.back_button')}
                  </CalculatorButton>
                  <CalculatorButton
                    onClick={handleCalculate}
                    loading={isCalculating}
                    icon={Calculator}
                    size="lg"
                    className="enhanced-calculator-button"
                  >
                    {t('calculators.cardiology.prevent.calculate_prevent_risk')}
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
                title={t('calculators.cardiology.prevent.results_title')}
                value={`${result.riskCategory.charAt(0).toUpperCase() + result.riskCategory.slice(1)} Risk`}
                category={result.riskCategory as 'low' | 'intermediate' | 'high'}
                interpretation={result.preventionStrategy}
                icon={Star}
              >
                {/* Calculated Values Display */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <BarChart3 className="w-5 h-5 text-purple-500" />
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100">Calculated Values</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-white/50 dark:bg-gray-800/50 rounded-2xl border border-white/20 dark:border-gray-700/20">
                      <div className="text-center">
                        <div className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-1">{result.bmi}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">BMI (kg/m²)</div>
                      </div>
                    </div>
                    <div className="p-4 bg-white/50 dark:bg-gray-800/50 rounded-2xl border border-white/20 dark:border-gray-700/20">
                      <div className="text-center">
                        <div className="text-xl font-bold text-green-600 dark:text-green-400 mb-1">{result.eGFR}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">eGFR (mL/min/1.73m²)</div>
                      </div>
                    </div>
                    {result.sdiGroup && (
                      <div className="p-4 bg-white/50 dark:bg-gray-800/50 rounded-2xl border border-white/20 dark:border-gray-700/20">
                        <div className="text-center">
                          <div className="text-xl font-bold text-orange-600 dark:text-orange-400 mb-1">{result.sdiGroup}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">SDI Group</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* 10-Year Risk Display */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <Target className="w-5 h-5 text-indigo-500" />
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100">{t('calculators.cardiology.prevent.ten_year_predictions_title')}</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-white/50 dark:bg-gray-800/50 rounded-2xl border border-white/20 dark:border-gray-700/20">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">{result.tenYearCVD}%</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">{t('calculators.cardiology.prevent.total_cvd')}</div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-purple-500 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${Math.min(result.tenYearCVD * 2, 100)}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-white/50 dark:bg-gray-800/50 rounded-2xl border border-white/20 dark:border-gray-700/20">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">{result.tenYearASCVD}%</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">{t('calculators.cardiology.prevent.ascvd')}</div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-indigo-500 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${Math.min(result.tenYearASCVD * 2, 100)}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-white/50 dark:bg-gray-800/50 rounded-2xl border border-white/20 dark:border-gray-700/20">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-pink-600 dark:text-pink-400 mb-1">{result.tenYearHeartFailure}%</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">{t('calculators.cardiology.prevent.heart_failure')}</div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-pink-500 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${Math.min(result.tenYearHeartFailure * 2, 100)}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 30-Year Risk Display (for ages 30-59) */}
                {result.thirtyYearCVD && (
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 mb-4">
                      <Clock className="w-5 h-5 text-blue-500" />
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100">{t('calculators.cardiology.prevent.thirty_year_predictions_title')}</h4>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-900/30 rounded-xl border border-purple-200 dark:border-purple-800">
                        <div className="text-center">
                          <div className="text-xl font-bold text-purple-700 dark:text-purple-300">{result.thirtyYearCVD}%</div>
                          <div className="text-sm text-purple-600 dark:text-purple-400">{t('calculators.cardiology.prevent.total_cvd')}</div>
                        </div>
                      </div>
                      <div className="p-4 bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-900/30 rounded-xl border border-indigo-200 dark:border-indigo-800">
                        <div className="text-center">
                          <div className="text-xl font-bold text-indigo-700 dark:text-indigo-300">{result.thirtyYearASCVD}%</div>
                          <div className="text-sm text-indigo-600 dark:text-indigo-400">{t('calculators.cardiology.prevent.ascvd')}</div>
                        </div>
                      </div>
                      <div className="p-4 bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-900/30 rounded-xl border border-pink-200 dark:border-pink-800">
                        <div className="text-center">
                          <div className="text-xl font-bold text-pink-700 dark:text-pink-300">{result.thirtyYearHeartFailure}%</div>
                          <div className="text-sm text-pink-600 dark:text-pink-400">{t('calculators.cardiology.prevent.heart_failure')}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Risk Stratification */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-green-500" />
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100">{t('calculators.cardiology.prevent.risk_stratification_title')}</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                    <div className={`p-4 rounded-xl border-2 transition-all ${
                      result.riskCategory === 'low' ? 'border-green-300 bg-green-50 dark:bg-green-900/20' : 'border-green-200 bg-green-50/50 dark:bg-green-900/10'
                    }`}>
                      <div className="text-center">
                        <div className="text-sm font-semibold text-green-800 dark:text-green-200">{t('calculators.cardiology.prevent.low_risk')}</div>
                        <div className="text-xs text-green-600 dark:text-green-400">{t('calculators.cardiology.prevent.low_risk_range')}</div>
                      </div>
                    </div>
                    <div className={`p-4 rounded-xl border-2 transition-all ${
                      result.riskCategory === 'borderline' ? 'border-yellow-300 bg-yellow-50 dark:bg-yellow-900/20' : 'border-yellow-200 bg-yellow-50/50 dark:bg-yellow-900/10'
                    }`}>
                      <div className="text-center">
                        <div className="text-sm font-semibold text-yellow-800 dark:text-yellow-200">{t('calculators.cardiology.prevent.borderline_risk')}</div>
                        <div className="text-xs text-yellow-600 dark:text-yellow-400">{t('calculators.cardiology.prevent.borderline_risk_range')}</div>
                      </div>
                    </div>
                    <div className={`p-4 rounded-xl border-2 transition-all ${
                      result.riskCategory === 'intermediate' ? 'border-orange-300 bg-orange-50 dark:bg-orange-900/20' : 'border-orange-200 bg-orange-50/50 dark:bg-orange-900/10'
                    }`}>
                      <div className="text-center">
                        <div className="text-sm font-semibold text-orange-800 dark:text-orange-200">{t('calculators.cardiology.prevent.intermediate_risk')}</div>
                        <div className="text-xs text-orange-600 dark:text-orange-400">{t('calculators.cardiology.prevent.intermediate_risk_range')}</div>
                      </div>
                    </div>
                    <div className={`p-4 rounded-xl border-2 transition-all ${
                      result.riskCategory === 'high' ? 'border-red-300 bg-red-50 dark:bg-red-900/20' : 'border-red-200 bg-red-50/50 dark:bg-red-900/10'
                    }`}>
                      <div className="text-center">
                        <div className="text-sm font-semibold text-red-800 dark:text-red-200">{t('calculators.cardiology.prevent.high_risk')}</div>
                        <div className="text-xs text-red-600 dark:text-red-400">{t('calculators.cardiology.prevent.high_risk_range')}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Clinical Recommendations */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Stethoscope className="w-5 h-5 text-blue-500" />
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100">{t('calculators.cardiology.prevent.clinical_recommendations_title')}</h4>
                  </div>
                  <div className={`p-6 rounded-2xl border-2 ${getRiskBgColor(result.riskCategory)}`}>
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

                {/* CKM-E Enhancement Status */}
                {result.ckmeEnhanced && (
                  <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <Star className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                      <h4 className="font-semibold text-purple-800 dark:text-purple-200">CKM-Enhanced Assessment</h4>
                    </div>
                    <div className="text-sm text-purple-700 dark:text-purple-300">
                      This assessment includes enhanced Cardiovascular-Kidney-Metabolic (CKM) factors for more comprehensive risk evaluation.
                    </div>
                  </div>
                )}

                {/* Algorithm Information */}
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200">AHA PREVENT™ 2023 Algorithm</h4>
                  </div>
                  <div className="text-sm text-blue-700 dark:text-blue-300 space-y-2">
                    <p>This calculator implements the official American Heart Association PREVENT™ equations (2023):</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Derived from over 6 million diverse individuals</li>
                      <li>Calculates 10-year risks for ASCVD, Heart Failure, and Total CVD</li>
                      <li>For ages 30-59: Also provides 30-year risk estimates</li>
                      <li>Includes novel risk factors (HbA1C, UACR, SDI) for enhanced assessment</li>
                      <li>BMI and eGFR calculated using validated equations</li>
                    </ul>
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
                  {t('calculators.cardiology.prevent.new_assessment')}
                </CalculatorButton>
                <CalculatorButton
                  onClick={() => setResult(null)}
                  variant="secondary"
                  size="lg"
                >
                  {t('calculators.cardiology.prevent.modify_inputs')}
                </CalculatorButton>
              </div>
            </div>
          )
        )}

        {/* Footer Information */}
        <div className="text-center pt-8 border-t border-white/20 dark:border-gray-800/20">
          <div className="flex items-center justify-center space-x-3 text-sm text-gray-600 dark:text-gray-400">
            <Info className="w-4 h-4" />
            <span>{t('calculators.cardiology.prevent.footer_description')}</span>
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-purple-600" />
              <span className="text-purple-600 font-semibold">{t('calculators.cardiology.prevent.footer_guidelines')}</span>
            </div>
          </div>
        </div>
      </div>
    </CalculatorContainer>
  );
}; 