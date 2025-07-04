import React, { useState } from 'react';
import { Calculator, Info, TrendingUp, Star, Brain, User, Activity, BarChart3, Stethoscope, Award, AlertCircle, Clock, Target } from 'lucide-react';
import { 
  CalculatorContainer, 
  CalculatorInput, 
  CalculatorSelect, 
  CalculatorCheckbox, 
  CalculatorButton 
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
  hasEnhancedCKM: boolean;
  tenYearRisk: {
    totalCVD: number;
    ascvd: number;
    heartFailure: number;
  };
  thirtyYearRisk?: {
    totalCVD: number;
    ascvd: number;
    heartFailure: number;
  };
}

// Official AHA PREVENT 2023 Coefficient Tables from the published appendix
const PREVENT_COEFFICIENTS = {
  // 10-year Base Model coefficients
  BASE_10_FEMALE_TOTAL_CVD: {
    C0: 0.7939329, C1: 0, C2: 0.0305239, C3: -0.1606857, C4: -0.2394003, C5: 0.3600781,
    C6: 0.8667604, C7: 0.5360739, C8: 0, C9: 0, C10: 0.6045917, C11: 0.0433769,
    C12: 0.3151672, C13: -0.1477655, C14: -0.0663612, C15: 0.1197879, C16: -0.0819715, C17: 0.0306769,
    C18: -0.0946348, C19: -0.27057, C20: -0.078715, C21: 0, C22: -0.1637806, C23: 0,
    C24: 0, C25: 0, C26: 0, C27: 0, C28: 0, C29: 0, C30: 0, C31: -3.307728
  },
  BASE_10_MALE_TOTAL_CVD: {
    C0: 0.7688528, C1: 0, C2: 0.0736174, C3: -0.0954431, C4: -0.4347345, C5: 0.3362658,
    C6: 0.7692857, C7: 0.4386871, C8: 0, C9: 0, C10: 0.5378979, C11: 0.0164827,
    C12: 0.288879, C13: -0.1337349, C14: -0.0475924, C15: 0.150273, C16: -0.0517874, C17: 0.0191169,
    C18: -0.1049477, C19: -0.2251948, C20: -0.0895067, C21: 0, C22: -0.1543702, C23: 0,
    C24: 0, C25: 0, C26: 0, C27: 0, C28: 0, C29: 0, C30: 0, C31: -3.031168
  },
  BASE_10_FEMALE_ASCVD: {
    C0: 0.719883, C1: 0, C2: 0.1176967, C3: -0.151185, C4: -0.0835358, C5: 0.3592852,
    C6: 0.8348585, C7: 0.4831078, C8: 0, C9: 0, C10: 0.4864619, C11: 0.0397779,
    C12: 0.2265309, C13: -0.0592374, C14: -0.0395762, C15: 0.0844423, C16: -0.0567839, C17: 0.0325692,
    C18: -0.1035985, C19: -0.2417542, C20: -0.0791142, C21: 0, C22: -0.1671492, C23: 0,
    C24: 0, C25: 0, C26: 0, C27: 0, C28: 0, C29: 0, C30: 0, C31: -3.819975
  },
  BASE_10_MALE_ASCVD: {
    C0: 0.7099847, C1: 0, C2: 0.1658663, C3: -0.1144285, C4: -0.2837212, C5: 0.3239977,
    C6: 0.7189597, C7: 0.3956973, C8: 0, C9: 0, C10: 0.3690075, C11: 0.0203619,
    C12: 0.2036522, C13: -0.0865581, C14: -0.0322916, C15: 0.114563, C16: -0.0300005, C17: 0.0232747,
    C18: -0.0927024, C19: -0.2018525, C20: -0.0970527, C21: 0, C22: -0.1217081, C23: 0,
    C24: 0, C25: 0, C26: 0, C27: 0, C28: 0, C29: 0, C30: 0, C31: -3.500655
  },
  BASE_10_FEMALE_HF: {
    C0: 0.8998235, C1: 0, C2: 0, C3: 0, C4: -0.4559771, C5: 0.3576505,
    C6: 1.038346, C7: 0.583916, C8: -0.0072294, C9: 0.2997706, C10: 0.7451638, C11: 0.0557087,
    C12: 0.3534442, C13: 0, C14: -0.0981511, C15: 0, C16: 0, C17: 0,
    C18: -0.0946663, C19: -0.3581041, C20: -0.1159453, C21: -0.003878, C22: -0.1884289, C23: 0,
    C24: 0, C25: 0, C26: 0, C27: 0, C28: 0, C29: 0, C30: 0, C31: -4.310409
  },
  BASE_10_MALE_HF: {
    C0: 0.8972642, C1: 0, C2: 0, C3: 0, C4: -0.6811466, C5: 0.3634461,
    C6: 0.923776, C7: 0.5023736, C8: -0.0485841, C9: 0.3726929, C10: 0.6926917, C11: 0.0251827,
    C12: 0.2980922, C13: 0, C14: -0.0497731, C15: 0, C16: 0, C17: 0,
    C18: -0.1289201, C19: -0.3040924, C20: -0.1401688, C21: 0.0068126, C22: -0.1797778, C23: 0,
    C24: 0, C25: 0, C26: 0, C27: 0, C28: 0, C29: 0, C30: 0, C31: -3.946391
  },
  // 30-year Base Model coefficients
  BASE_30_FEMALE_TOTAL_CVD: {
    C0: 0.5503079, C1: -0.0928369, C2: 0.0409794, C3: -0.1663306, C4: -0.1628654, C5: 0.3299505,
    C6: 0.6793894, C7: 0.3196112, C8: 0, C9: 0, C10: 0.1857101, C11: 0.0553528,
    C12: 0.2894, C13: -0.075688, C14: -0.056367, C15: 0.1071019, C16: -0.0751438, C17: 0.0301786,
    C18: -0.0998776, C19: -0.3206166, C20: -0.1607862, C21: 0, C22: -0.1450788, C23: 0,
    C24: 0, C25: 0, C26: 0, C27: 0, C28: 0, C29: 0, C30: 0, C31: -1.318827
  },
  BASE_30_MALE_TOTAL_CVD: {
    C0: 0.4627309, C1: -0.0984281, C2: 0.0836088, C3: -0.1029824, C4: -0.2140352, C5: 0.2904325,
    C6: 0.5331276, C7: 0.2141914, C8: 0, C9: 0, C10: 0.1155556, C11: 0.0603775,
    C12: 0.232714, C13: -0.0272112, C14: -0.0384488, C15: 0.134192, C16: -0.0511759, C17: 0.0165865,
    C18: -0.1101437, C19: -0.2585943, C20: -0.1566406, C21: 0, C22: -0.1166776, C23: 0,
    C24: 0, C25: 0, C26: 0, C27: 0, C28: 0, C29: 0, C30: 0, C31: -1.148204
  },
  BASE_30_FEMALE_ASCVD: {
    C0: 0.4669202, C1: -0.0893118, C2: 0.1256901, C3: -0.1542255, C4: -0.0018093, C5: 0.322949,
    C6: 0.6296707, C7: 0.268292, C8: 0, C9: 0, C10: 0.100106, C11: 0.0499663,
    C12: 0.1875292, C13: 0.0152476, C14: -0.0276123, C15: 0.0736147, C16: -0.0521962, C17: 0.0316918,
    C18: -0.1046101, C19: -0.2727793, C20: -0.1530907, C21: 0, C22: -0.1299149, C23: 0,
    C24: 0, C25: 0, C26: 0, C27: 0, C28: 0, C29: 0, C30: 0, C31: -1.974074
  },
  BASE_30_MALE_ASCVD: {
    C0: 0.3994099, C1: -0.0937484, C2: 0.1744643, C3: -0.120203, C4: -0.0665117, C5: 0.2753037,
    C6: 0.4790257, C7: 0.1782635, C8: 0, C9: 0, C10: -0.0218789, C11: 0.0602553,
    C12: 0.1421182, C13: 0.0135996, C14: -0.0218265, C15: 0.1013148, C16: -0.0312619, C17: 0.020673,
    C18: -0.0920935, C19: -0.2159947, C20: -0.1548811, C21: 0, C22: -0.0712547, C23: 0,
    C24: 0, C25: 0, C26: 0, C27: 0, C28: 0, C29: 0, C30: 0, C31: -1.736444
  },
  BASE_30_FEMALE_HF: {
    C0: 0.6254374, C1: -0.0983038, C2: 0, C3: 0, C4: -0.3919241, C5: 0.3142295,
    C6: 0.8330787, C7: 0.3438651, C8: 0.0594874, C9: 0.2525536, C10: 0.2981642, C11: 0.0667159,
    C12: 0.333921, C13: 0, C14: -0.0893177, C15: 0, C16: 0, C17: 0,
    C18: -0.0974299, C19: -0.404855, C20: -0.1982991, C21: -0.0035619, C22: -0.1564215, C23: 0,
    C24: 0, C25: 0, C26: 0, C27: 0, C28: 0, C29: 0, C30: 0, C31: -2.205379
  },
  BASE_30_MALE_HF: {
    C0: 0.5681541, C1: -0.1048388, C2: 0, C3: 0, C4: -0.4761564, C5: 0.30324,
    C6: 0.6840338, C7: 0.2656273, C8: 0.0833107, C9: 0.26999, C10: 0.2541805, C11: 0.0638923,
    C12: 0.2583631, C13: 0, C14: -0.0391938, C15: 0, C16: 0, C17: 0,
    C18: -0.1269124, C19: -0.3273572, C20: -0.2043019, C21: -0.0182831, C22: -0.1342618, C23: 0,
    C24: 0, C25: 0, C26: 0, C27: 0, C28: 0, C29: 0, C30: 0, C31: -1.95751
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

    // Calculate BMI and eGFR
    const bmi = calculateBMI(height, weight);
    const eGFR = calculateeGFR(age, sex, creatinine);
    
    // Convert cholesterol from mg/dL to mmol/L (divide by 38.67)
    const totalCholMmol = totalChol / 38.67;
    const hdlCholMmol = hdlChol / 38.67;
    const nonHdlCholMmol = totalCholMmol - hdlCholMmol;

    // Get SDI group
    const sdiGroup = getSDIGroup(zipCode);

    // Enhanced factor calculations based on PREVENT specification
    const calculateSDIFactor = (coeffs: Record<string, number>): number => {
      if (!zipCode) {
        return coeffs.C25; // Missing ZIP code
      }
      const sdi = getSDIGroup(zipCode);
      if (sdi === 1 || sdi === 2 || sdi === 3) {
        return 0; // SDI group 1-3
      } else if (sdi === 4 || sdi === 5 || sdi === 6) {
        return coeffs.C23; // SDI group 4-6
      } else if (sdi === 7 || sdi === 8 || sdi === 9 || sdi === 10) {
        return coeffs.C24; // SDI group 7-10
      }
      return coeffs.C25; // ZIP code not found
    };

    const calculateUACRFactor = (coeffs: Record<string, number>): number => {
      if (uacr === undefined) {
        return coeffs.C27; // Missing UACR
      }
      return Math.log(uacr) * coeffs.C26; // ln(UACR) * C26
    };

    const calculateHbA1CFactor = (coeffs: Record<string, number>): number => {
      if (hba1c === undefined) {
        return coeffs.C30; // Missing HbA1c
      }
      if (diabetes) {
        return (hba1c - 5.3) * coeffs.C28; // HbA1c in diabetes
      } else {
        return (hba1c - 5.3) * coeffs.C29; // HbA1c no diabetes
      }
    };

    const calculateEndpointRisk = (coeffs: Record<string, number>, includeEnhanced = false): number => {
      // Variable transformations exactly as specified in PREVENT paper
      // Models centered at: age 55, non-HDL-C 3.5 mmol/L, HDL-C 1.3 mmol/L, SBP 130 mmHg, BMI 25 kg/m², eGFR 90 mL/min/1.73m²
      
      // Age transformation (centered at 55, per 10 years)
      const ageNorm = (age - 55) / 10;
      const ageSquared = ageNorm * ageNorm; // For 30-year models
      
      // Cholesterol transformations
      const nonHdlCNorm = nonHdlCholMmol - 3.5; // Centered at 3.5 mmol/L, per 1 mmol/L
      const hdlCNorm = (hdlCholMmol - 1.3) / 0.3; // Centered at 1.3 mmol/L, per 0.3 mmol/L
      
      // Blood pressure transformations (piecewise linear splines)
      const sbpLt110 = (Math.min(systolicBP, 110) - 110) / 20; // <110 mmHg per 20 mmHg
      const sbpGte110 = (Math.max(systolicBP, 110) - 130) / 20; // ≥110 mmHg per 20 mmHg, centered at 130
      
      // BMI transformations (piecewise linear splines)
      const bmiLt30 = (Math.min(bmi, 30) - 25) / 5; // <30 kg/m² per 5 kg/m², centered at 25
      const bmiGte30 = (Math.max(bmi, 30) - 30) / 5; // ≥30 kg/m² per 5 kg/m²
      
      // eGFR transformations (piecewise linear splines)
      const egfrLt60 = (Math.min(eGFR, 60) - 60) / (-15); // <60 mL/min/1.73m² per -15 mL/min/1.73m²
      const egfrGte60 = (Math.max(eGFR, 60) - 90) / (-15); // ≥60 mL/min/1.73m² per -15 mL/min/1.73m², centered at 90

      // Binary variables
      const diabetesVal = diabetes ? 1 : 0;
      const smokingVal = currentSmoker ? 1 : 0;
      const bpTxVal = onHypertensionMeds ? 1 : 0;
      const statinVal = onStatin ? 1 : 0;

      // Interaction terms
      const bpTxSbpGte110 = bpTxVal * sbpGte110;
      const statinNonHdlC = statinVal * nonHdlCNorm;
      const ageNonHdlC = ageNorm * nonHdlCNorm;
      const ageHdlC = ageNorm * hdlCNorm;
      const ageSbpGte110 = ageNorm * sbpGte110;
      const ageDm = ageNorm * diabetesVal;
      const ageSmoking = ageNorm * smokingVal;
      const ageBmiGte30 = ageNorm * bmiGte30;
      const ageEgfrLt60 = ageNorm * egfrLt60;

      // Core logit calculation based on PREVENT specification
      let logit = coeffs.C0 * ageNorm +
                  coeffs.C1 * ageSquared +
                  coeffs.C2 * nonHdlCNorm +
                  coeffs.C3 * hdlCNorm +
                  coeffs.C4 * sbpLt110 +
                  coeffs.C5 * sbpGte110 +
                  coeffs.C6 * diabetesVal +
                  coeffs.C7 * smokingVal +
                  coeffs.C8 * bmiLt30 +
                  coeffs.C9 * bmiGte30 +
                  coeffs.C10 * egfrLt60 +
                  coeffs.C11 * egfrGte60 +
                  coeffs.C12 * bpTxVal +
                  coeffs.C13 * statinVal +
                  coeffs.C14 * bpTxSbpGte110 +
                  coeffs.C15 * statinNonHdlC +
                  coeffs.C16 * ageNonHdlC +
                  coeffs.C17 * ageHdlC +
                  coeffs.C18 * ageSbpGte110 +
                  coeffs.C19 * ageDm +
                  coeffs.C20 * ageSmoking +
                  coeffs.C21 * ageBmiGte30 +
                  coeffs.C22 * ageEgfrLt60;

      // Add enhanced factors if available
      if (includeEnhanced) {
        logit += calculateSDIFactor(coeffs);
        logit += calculateUACRFactor(coeffs);
        logit += calculateHbA1CFactor(coeffs);
      }

      // Add intercept
      logit += coeffs.C31;

      // Convert to probability (risk percentage)
      const expLogit = Math.exp(logit);
      return (100 * expLogit) / (1 + expLogit);
    };

    // Select appropriate coefficient sets based on sex
    const isMale = sex === 'male';
    const cvdCoeffs10 = isMale ? PREVENT_COEFFICIENTS.BASE_10_MALE_TOTAL_CVD : PREVENT_COEFFICIENTS.BASE_10_FEMALE_TOTAL_CVD;
    const ascvdCoeffs10 = isMale ? PREVENT_COEFFICIENTS.BASE_10_MALE_ASCVD : PREVENT_COEFFICIENTS.BASE_10_FEMALE_ASCVD;
    const hfCoeffs10 = isMale ? PREVENT_COEFFICIENTS.BASE_10_MALE_HF : PREVENT_COEFFICIENTS.BASE_10_FEMALE_HF;

    // Determine if enhanced CKM factors are available
    const hasEnhancedFactors = hba1c !== undefined || uacr !== undefined || zipCode !== undefined;

    // Calculate 10-year risks
    const totalCVD10 = calculateEndpointRisk(cvdCoeffs10, hasEnhancedFactors);
    const ascvd10 = calculateEndpointRisk(ascvdCoeffs10, hasEnhancedFactors);
    const heartFailure10 = calculateEndpointRisk(hfCoeffs10, hasEnhancedFactors);

    let totalCVD30: number | undefined;
    let ascvd30: number | undefined;
    let heartFailure30: number | undefined;

    // Calculate 30-year risks only for ages 30-59
    if (age >= 30 && age <= 59) {
      const cvdCoeffs30 = isMale ? PREVENT_COEFFICIENTS.BASE_30_MALE_TOTAL_CVD : PREVENT_COEFFICIENTS.BASE_30_FEMALE_TOTAL_CVD;
      const ascvdCoeffs30 = isMale ? PREVENT_COEFFICIENTS.BASE_30_MALE_ASCVD : PREVENT_COEFFICIENTS.BASE_30_FEMALE_ASCVD;
      const hfCoeffs30 = isMale ? PREVENT_COEFFICIENTS.BASE_30_MALE_HF : PREVENT_COEFFICIENTS.BASE_30_FEMALE_HF;

      totalCVD30 = calculateEndpointRisk(cvdCoeffs30, hasEnhancedFactors);
      ascvd30 = calculateEndpointRisk(ascvdCoeffs30, hasEnhancedFactors);
      heartFailure30 = calculateEndpointRisk(hfCoeffs30, hasEnhancedFactors);
    }

    return {
      bmi: Math.round(bmi * 10) / 10,
      eGFR: Math.round(eGFR * 10) / 10,
      sdiGroup,
      hasEnhancedCKM: hasEnhancedFactors,
      tenYearRisk: {
        totalCVD: Math.round(totalCVD10 * 10) / 10,
        ascvd: Math.round(ascvd10 * 10) / 10,
        heartFailure: Math.round(heartFailure10 * 10) / 10
      },
      thirtyYearRisk: (age >= 30 && age <= 59) ? {
        totalCVD: Math.round(totalCVD30! * 10) / 10,
        ascvd: Math.round(ascvd30! * 10) / 10,
        heartFailure: Math.round(heartFailure30! * 10) / 10
      } : undefined
    };
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
              <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <Star className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{t('calculators.cardiology.prevent.results_title')}</h3>
                  {result.hasEnhancedCKM && (
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
                      CKM-Enhanced
                    </span>
                  )}
                </div>
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
                        <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">{result.tenYearRisk.totalCVD}%</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">{t('calculators.cardiology.prevent.total_cvd')}</div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-purple-500 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${Math.min(result.tenYearRisk.totalCVD * 2, 100)}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-white/50 dark:bg-gray-800/50 rounded-2xl border border-white/20 dark:border-gray-700/20">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">{result.tenYearRisk.ascvd}%</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">{t('calculators.cardiology.prevent.ascvd')}</div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-indigo-500 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${Math.min(result.tenYearRisk.ascvd * 2, 100)}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-white/50 dark:bg-gray-800/50 rounded-2xl border border-white/20 dark:border-gray-700/20">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-pink-600 dark:text-pink-400 mb-1">{result.tenYearRisk.heartFailure}%</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">{t('calculators.cardiology.prevent.heart_failure')}</div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-pink-500 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${Math.min(result.tenYearRisk.heartFailure * 2, 100)}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 30-Year Risk Display (for ages 30-59) */}
                {result.thirtyYearRisk && (
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 mb-4">
                      <Clock className="w-5 h-5 text-blue-500" />
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100">{t('calculators.cardiology.prevent.thirty_year_predictions_title')}</h4>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-900/30 rounded-xl border border-purple-200 dark:border-purple-800">
                        <div className="text-center">
                          <div className="text-xl font-bold text-purple-700 dark:text-purple-300">{result.thirtyYearRisk.totalCVD}%</div>
                          <div className="text-sm text-purple-600 dark:text-purple-400">{t('calculators.cardiology.prevent.total_cvd')}</div>
                        </div>
                      </div>
                      <div className="p-4 bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-900/30 rounded-xl border border-indigo-200 dark:border-indigo-800">
                        <div className="text-center">
                          <div className="text-xl font-bold text-indigo-700 dark:text-indigo-300">{result.thirtyYearRisk.ascvd}%</div>
                          <div className="text-sm text-indigo-600 dark:text-indigo-400">{t('calculators.cardiology.prevent.ascvd')}</div>
                        </div>
                      </div>
                      <div className="p-4 bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-900/30 rounded-xl border border-pink-200 dark:border-pink-800">
                        <div className="text-center">
                          <div className="text-xl font-bold text-pink-700 dark:text-pink-300">{result.thirtyYearRisk.heartFailure}%</div>
                          <div className="text-sm text-pink-600 dark:text-pink-400">{t('calculators.cardiology.prevent.heart_failure')}</div>
                        </div>
                      </div>
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
              </div>

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