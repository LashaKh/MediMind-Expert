import React, { useState } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import { Heart, Info, TrendingUp, Calculator, User, BarChart3, Activity, Stethoscope, Award, AlertCircle, Clock, Pill, Target } from 'lucide-react';
import { 
  CalculatorContainer, 
  CalculatorInput, 
  CalculatorSelect, 
  CalculatorCheckbox, 
  CalculatorButton, 
  ResultsDisplay 
} from '../ui/calculator-ui';

interface MAGGICData {
  age: string;
  gender: 'male' | 'female' | '';
  lv_ejection_fraction: string;
  nyha_class: 1 | 2 | 3 | 4 | 0;
  systolic_bp: string;
  diabetes: boolean;
  copd: boolean;
  smoker: boolean;
  first_diagnosis: boolean; // Within 18 months
  bmi: string;
  creatinine: string;
  beta_blocker: boolean;
  ace_inhibitor: boolean;
}

interface MortalityResult {
  score: number;
  oneYearMortality: number;
  threeYearMortality: number;
  risk: 'Low' | 'Intermediate' | 'High' | 'Very High';
  interpretation: string;
  recommendations: string[];
}

export const MAGGICCalculator: React.FC = () => {
  const { t } = useTranslation();
  
  const [formData, setFormData] = useState<MAGGICData>({
    age: '',
    gender: '',
    lv_ejection_fraction: '',
    nyha_class: 0,
    systolic_bp: '',
    diabetes: false,
    copd: false,
    smoker: false,
    first_diagnosis: false,
    bmi: '',
    creatinine: '',
    beta_blocker: true,
    ace_inhibitor: true,
  });

  const [result, setResult] = useState<MortalityResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    const age = parseInt(formData.age);
    if (!formData.age || isNaN(age)) {
      newErrors.age = t('calculators.cardiology.maggic.validation_age');
    } else if (age < 18 || age > 100) {
      newErrors.age = t('calculators.cardiology.maggic.validation_age');
    }

    if (!formData.gender) {
      newErrors.gender = t('calculators.cardiology.maggic.validation_gender');
    }

    if (formData.nyha_class === 0) {
      newErrors.nyha_class = t('calculators.cardiology.maggic.validation_nyha_class');
    }

    const lvef = parseInt(formData.lv_ejection_fraction);
    if (!formData.lv_ejection_fraction || isNaN(lvef)) {
      newErrors.lv_ejection_fraction = t('calculators.cardiology.maggic.validation_lvef');
    } else if (lvef < 5 || lvef > 80) {
      newErrors.lv_ejection_fraction = t('calculators.cardiology.maggic.validation_lvef');
    }

    const systolic_bp = parseInt(formData.systolic_bp);
    if (!formData.systolic_bp || isNaN(systolic_bp)) {
      newErrors.systolic_bp = t('calculators.cardiology.maggic.validation_systolic_bp');
    } else if (systolic_bp < 60 || systolic_bp > 250) {
      newErrors.systolic_bp = t('calculators.cardiology.maggic.validation_systolic_bp');
    }

    const bmi = parseFloat(formData.bmi);
    if (!formData.bmi || isNaN(bmi)) {
      newErrors.bmi = t('calculators.cardiology.maggic.validation_bmi');
    } else if (bmi < 10 || bmi > 60) {
      newErrors.bmi = t('calculators.cardiology.maggic.validation_bmi');
    }

    const creatinine = parseFloat(formData.creatinine);
    if (!formData.creatinine || isNaN(creatinine)) {
      newErrors.creatinine = t('calculators.cardiology.maggic.validation_creatinine');
    } else if (creatinine < 50 || creatinine > 500) {
      newErrors.creatinine = 'Creatinine should be between 50-500 μmol/L';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateMAGGIC = (): MortalityResult => {
    // Parse all string values to numbers
    const age = parseInt(formData.age);
    const lvef = parseInt(formData.lv_ejection_fraction);
    const systolic_bp = parseInt(formData.systolic_bp);
    const bmi = parseFloat(formData.bmi);
    const creatinine = parseFloat(formData.creatinine);

    // DEBUG: Log all input values
    console.log('=== MAGGIC DEBUG VALUES ===');
    console.log('Age:', age);
    console.log('LVEF:', lvef);
    console.log('Systolic BP:', systolic_bp);
    console.log('BMI:', bmi);
    console.log('Creatinine:', creatinine);
    console.log('Gender:', formData.gender);
    console.log('Smoker:', formData.smoker);
    console.log('Diabetes:', formData.diabetes);
    console.log('COPD:', formData.copd);
    console.log('First diagnosis (>18 months):', formData.first_diagnosis);
    console.log('Beta blocker:', formData.beta_blocker);
    console.log('ACE inhibitor:', formData.ace_inhibitor);
    console.log('NYHA class:', formData.nyha_class);

    let score = 0;
    const scoreBreakdown = [];

    // Basic Risk Factors
    // Male
    if (formData.gender === 'male') {
      score += 1;
      scoreBreakdown.push('Male: +1');
    }

    // Smoker
    if (formData.smoker) {
      score += 1;
      scoreBreakdown.push('Smoker: +1');
    }

    // Diabetic
    if (formData.diabetes) {
      score += 3;
      scoreBreakdown.push('Diabetes: +3');
    }

    // COPD
    if (formData.copd) {
      score += 2;
      scoreBreakdown.push('COPD: +2');
    }

    // Heart failure first diagnosed ≥18 months ago
    // If first_diagnosis is true (≥18 months ago), score = +2
    // If first_diagnosis is false (within 18 months), score = 0
    if (formData.first_diagnosis) {
      score += 2;
      scoreBreakdown.push('HF >18 months: +2');
    }

    // Not on beta blocker
    if (!formData.beta_blocker) {
      score += 3;
      scoreBreakdown.push('Not on beta blocker: +3');
    }

    // Not on ACE-I/ARB
    if (!formData.ace_inhibitor) {
      score += 1;
      scoreBreakdown.push('Not on ACE/ARB: +1');
    }

    // Ejection Fraction
    if (lvef < 20) {
      score += 7;
      scoreBreakdown.push('EF <20: +7');
    } else if (lvef >= 20 && lvef <= 24) {
      score += 6;
      scoreBreakdown.push('EF 20-24: +6');
    } else if (lvef >= 25 && lvef <= 29) {
      score += 5;
      scoreBreakdown.push('EF 25-29: +5');
    } else if (lvef >= 30 && lvef <= 34) {
      score += 3;
      scoreBreakdown.push('EF 30-34: +3');
    } else if (lvef >= 35 && lvef <= 39) {
      score += 2;
      scoreBreakdown.push('EF 35-39: +2');
    } else {
      scoreBreakdown.push('EF ≥40: +0');
    }

    // NYHA Class
    if (formData.nyha_class === 4) {
      score += 8;
      scoreBreakdown.push('NYHA IV: +8');
    } else if (formData.nyha_class === 3) {
      score += 6;
      scoreBreakdown.push('NYHA III: +6');
    } else if (formData.nyha_class === 2) {
      score += 2;
      scoreBreakdown.push('NYHA II: +2');
    } else {
      scoreBreakdown.push('NYHA I: +0');
    }

    // Creatinine (μmol/L)
    if (creatinine >= 250) {
      score += 8;
      scoreBreakdown.push('Creatinine ≥250: +8');
    } else if (creatinine >= 210 && creatinine < 250) {
      score += 6;
      scoreBreakdown.push('Creatinine 210-249: +6');
    } else if (creatinine >= 170 && creatinine < 210) {
      score += 5;
      scoreBreakdown.push('Creatinine 170-209: +5');
    } else if (creatinine >= 150 && creatinine < 170) {
      score += 4;
      scoreBreakdown.push('Creatinine 150-169: +4');
    } else if (creatinine >= 130 && creatinine < 150) {
      score += 3;
      scoreBreakdown.push('Creatinine 130-149: +3');
    } else if (creatinine >= 110 && creatinine < 130) {
      score += 2;
      scoreBreakdown.push('Creatinine 110-129: +2');
    } else if (creatinine >= 90 && creatinine < 110) {
      score += 1;
      scoreBreakdown.push('Creatinine 90-109: +1');
    } else {
      scoreBreakdown.push('Creatinine <90: +0');
    }

    // BMI
    if (bmi < 15) {
      score += 6;
      scoreBreakdown.push('BMI <15: +6');
    } else if (bmi >= 15 && bmi < 20) {
      score += 5;
      scoreBreakdown.push('BMI 15-19: +5');
    } else if (bmi >= 20 && bmi < 25) {
      score += 3;
      scoreBreakdown.push('BMI 20-24: +3');
    } else if (bmi >= 25 && bmi < 30) {
      score += 2;
      scoreBreakdown.push('BMI 25-29: +2');
    } else {
      scoreBreakdown.push('BMI ≥30: +0');
    }

    // Extra points for Systolic BP based on EF
    if (lvef < 30) {
      // EF < 30
      if (systolic_bp < 110) {
        score += 5;
        scoreBreakdown.push('Extra BP (EF<30, <110): +5');
      } else if (systolic_bp >= 110 && systolic_bp < 120) {
        score += 4;
        scoreBreakdown.push('Extra BP (EF<30, 110-119): +4');
      } else if (systolic_bp >= 120 && systolic_bp < 130) {
        score += 3;
        scoreBreakdown.push('Extra BP (EF<30, 120-129): +3');
      } else if (systolic_bp >= 130 && systolic_bp < 140) {
        score += 2;
        scoreBreakdown.push('Extra BP (EF<30, 130-139): +2');
      } else if (systolic_bp >= 140 && systolic_bp < 150) {
        score += 1;
        scoreBreakdown.push('Extra BP (EF<30, 140-149): +1');
      } else {
        scoreBreakdown.push('Extra BP (EF<30, ≥150): +0');
      }
    } else if (lvef >= 30 && lvef <= 39) {
      // EF 30-39
      if (systolic_bp < 110) {
        score += 3;
        scoreBreakdown.push('Extra BP (EF30-39, <110): +3');
      } else if (systolic_bp >= 110 && systolic_bp < 120) {
        score += 2;
        scoreBreakdown.push('Extra BP (EF30-39, 110-119): +2');
      } else if (systolic_bp >= 120 && systolic_bp < 130) {
        score += 1;
        scoreBreakdown.push('Extra BP (EF30-39, 120-129): +1');
      } else if (systolic_bp >= 130 && systolic_bp < 140) {
        score += 1;
        scoreBreakdown.push('Extra BP (EF30-39, 130-139): +1');
      } else {
        scoreBreakdown.push('Extra BP (EF30-39, ≥140): +0');
      }
    } else if (lvef >= 40) {
      // EF >= 40
      if (systolic_bp < 110) {
        score += 2;
        scoreBreakdown.push('Extra BP (EF≥40, <110): +2');
      } else if (systolic_bp >= 110 && systolic_bp < 120) {
        score += 1;
        scoreBreakdown.push('Extra BP (EF≥40, 110-119): +1');
      } else if (systolic_bp >= 120 && systolic_bp < 130) {
        score += 1;
        scoreBreakdown.push('Extra BP (EF≥40, 120-129): +1');
      } else {
        scoreBreakdown.push('Extra BP (EF≥40, ≥130): +0');
      }
    }

    // Extra points for Age based on EF
    if (lvef < 30) {
      // EF < 30
      if (age >= 80) {
        score += 10;
        scoreBreakdown.push('Extra Age (EF<30, ≥80): +10');
      } else if (age >= 75 && age < 80) {
        score += 8;
        scoreBreakdown.push('Extra Age (EF<30, 75-79): +8');
      } else if (age >= 70 && age < 75) {
        score += 6;
        scoreBreakdown.push('Extra Age (EF<30, 70-74): +6');
      } else if (age >= 65 && age < 70) {
        score += 4;
        scoreBreakdown.push('Extra Age (EF<30, 65-69): +4');
      } else if (age >= 60 && age < 65) {
        score += 2;
        scoreBreakdown.push('Extra Age (EF<30, 60-64): +2');
      } else if (age >= 55 && age < 60) {
        score += 1;
        scoreBreakdown.push('Extra Age (EF<30, 55-59): +1');
      } else {
        scoreBreakdown.push('Extra Age (EF<30, <55): +0');
      }
    } else if (lvef >= 30 && lvef <= 39) {
      // EF 30-39
      if (age >= 80) {
        score += 13;
        scoreBreakdown.push('Extra Age (EF30-39, ≥80): +13');
      } else if (age >= 75 && age < 80) {
        score += 10;
        scoreBreakdown.push('Extra Age (EF30-39, 75-79): +10');
      } else if (age >= 70 && age < 75) {
        score += 8;
        scoreBreakdown.push('Extra Age (EF30-39, 70-74): +8');
      } else if (age >= 65 && age < 70) {
        score += 6;
        scoreBreakdown.push('Extra Age (EF30-39, 65-69): +6');
      } else if (age >= 60 && age < 65) {
        score += 4;
        scoreBreakdown.push('Extra Age (EF30-39, 60-64): +4');
      } else if (age >= 55 && age < 60) {
        score += 2;
        scoreBreakdown.push('Extra Age (EF30-39, 55-59): +2');
      } else {
        scoreBreakdown.push('Extra Age (EF30-39, <55): +0');
      }
    } else if (lvef >= 40) {
      // EF >= 40
      if (age >= 80) {
        score += 15;
        scoreBreakdown.push('Extra Age (EF≥40, ≥80): +15');
      } else if (age >= 75 && age < 80) {
        score += 12;
        scoreBreakdown.push('Extra Age (EF≥40, 75-79): +12');
      } else if (age >= 70 && age < 75) {
        score += 9;
        scoreBreakdown.push('Extra Age (EF≥40, 70-74): +9');
      } else if (age >= 65 && age < 70) {
        score += 7;
        scoreBreakdown.push('Extra Age (EF≥40, 65-69): +7');
      } else if (age >= 60 && age < 65) {
        score += 5;
        scoreBreakdown.push('Extra Age (EF≥40, 60-64): +5');
      } else if (age >= 55 && age < 60) {
        score += 3;
        scoreBreakdown.push('Extra Age (EF≥40, 55-59): +3');
      } else {
        scoreBreakdown.push('Extra Age (EF≥40, <55): +0');
      }
    }

    // DEBUG: Log score breakdown
    console.log('\n=== SCORE BREAKDOWN ===');
    scoreBreakdown.forEach(item => console.log(item));
    console.log(`\nFINAL SCORE: ${score}`);
    console.log('========================\n');

    // Calculate mortality risks using continuous conversion formula
    // Based on MAGGIC research data points:
    // 0 points = 1.5% 1-year, 3.9% 3-year
    // 12 points = 4.8% 1-year, 12.2% 3-year
    // 16 points = 7% 1-year, 17.5% 3-year
    // 50 points = 84.2% 1-year, ~90% 3-year (estimated)
    
    // Continuous interpolation function based on exponential growth
    // Using empirically validated data points from MAGGIC studies
    const calculateMortalityRisk = (score: number) => {
      // Clamp score to valid range
      const clampedScore = Math.max(0, Math.min(50, score));
      
      // Known data points for accurate interpolation - corrected to match original MAGGIC calculator
      const oneYearPoints = [
        { score: 0, mortality: 1.2 },
        { score: 8, mortality: 3.2 },
        { score: 12, mortality: 4.8 },
        { score: 15, mortality: 6.3 },
        { score: 16, mortality: 7.0 },
        { score: 19, mortality: 9.3 },
        { score: 20, mortality: 11.2 },
        { score: 25, mortality: 18.5 },
        { score: 30, mortality: 28.5 },
        { score: 35, mortality: 41.2 },
        { score: 40, mortality: 56.8 },
        { score: 45, mortality: 72.5 },
        { score: 50, mortality: 84.2 }
      ];
      
      const threeYearPoints = [
        { score: 0, mortality: 3.2 },
        { score: 8, mortality: 8.4 },
        { score: 12, mortality: 12.2 },
        { score: 15, mortality: 16.0 },
        { score: 16, mortality: 17.5 },
        { score: 19, mortality: 22.7 },
        { score: 20, mortality: 26.8 },
        { score: 25, mortality: 42.1 },
        { score: 30, mortality: 58.2 },
        { score: 35, mortality: 71.8 },
        { score: 40, mortality: 82.5 },
        { score: 45, mortality: 89.2 },
        { score: 50, mortality: 93.8 }
      ];
      
      // Linear interpolation function
      const interpolate = (points: { score: number; mortality: number }[], targetScore: number) => {
        // Find the two points to interpolate between
        for (let i = 0; i < points.length - 1; i++) {
          if (targetScore >= points[i].score && targetScore <= points[i + 1].score) {
            const x1 = points[i].score;
            const y1 = points[i].mortality;
            const x2 = points[i + 1].score;
            const y2 = points[i + 1].mortality;
            
            // Linear interpolation formula
            const interpolatedValue = y1 + ((targetScore - x1) * (y2 - y1)) / (x2 - x1);
            return Math.round(interpolatedValue * 10) / 10; // Round to 1 decimal place
          }
        }
        
        // If score is outside range, use the nearest endpoint
        if (targetScore < points[0].score) return points[0].mortality;
        return points[points.length - 1].mortality;
      };
      
      return {
        oneYear: interpolate(oneYearPoints, clampedScore),
        threeYear: interpolate(threeYearPoints, clampedScore)
      };
    };

    const mortalityRisk = calculateMortalityRisk(score);
    const oneYearMortality = mortalityRisk.oneYear;
    const threeYearMortality = mortalityRisk.threeYear;

    let risk: 'Low' | 'Intermediate' | 'High' | 'Very High';
    let interpretation: string;

    // Risk stratification based on 1-year mortality percentage (evidence-based)
    if (oneYearMortality < 10) {
      risk = 'Low';
      interpretation = 'Low mortality risk in chronic heart failure';
    } else if (oneYearMortality < 20) {
      risk = 'Intermediate';
      interpretation = 'Intermediate mortality risk in chronic heart failure';
    } else if (oneYearMortality < 35) {
      risk = 'High';
      interpretation = 'High mortality risk in chronic heart failure';
    } else {
      risk = 'Very High';
      interpretation = 'Very high mortality risk in chronic heart failure';
    }

    const recommendations = getRecommendations(risk, formData);

    return {
      score,
      oneYearMortality,
      threeYearMortality,
      risk,
      interpretation,
      recommendations,
    };
  };

  const getRecommendations = (risk: string, data: MAGGICData): string[] => {
    const recommendations: string[] = [];

    if (risk === 'High' || risk === 'Very High') {
      recommendations.push('Consider advanced heart failure therapies');
      recommendations.push('Frequent clinical monitoring and follow-up');
      recommendations.push('Heart failure education and self-management');
    }

    if (!data.beta_blocker) {
      recommendations.push('Initiate evidence-based beta-blocker therapy');
    }

    if (!data.ace_inhibitor) {
      recommendations.push('Consider ACE inhibitor or ARB therapy');
    }

    if (data.diabetes) {
      recommendations.push('Optimize diabetes management and glucose control');
    }

    if (data.copd) {
      recommendations.push('Coordinate pulmonary and cardiac care');
    }

    if (risk === 'Very High') {
      recommendations.push('Consider referral to advanced heart failure specialist');
      recommendations.push('Evaluate for cardiac resynchronization therapy or ICD');
    }

    return recommendations;
  };

  const getRiskColor = (risk: string): string => {
    switch (risk) {
      case 'Low':
        return 'border-green-300 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200';
      case 'Intermediate':
        return 'border-yellow-300 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200';
      case 'High':
        return 'border-orange-300 bg-orange-50 dark:bg-orange-900/20 text-orange-800 dark:text-orange-200';
      case 'Very High':
        return 'border-red-300 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200';
      default:
        return 'border-gray-300 bg-gray-50 dark:bg-gray-900/20 text-gray-800 dark:text-gray-200';
    }
  };

  const handleCalculate = () => {
    if (!validateForm()) return;
    
    setIsCalculating(true);
    
    // Simulate advanced risk calculation with loading animation
    setTimeout(() => {
      const calculatedResult = calculateMAGGIC();
      setResult(calculatedResult);
      setShowResult(true);
      setIsCalculating(false);
    }, 1800);
  };

  const handleReset = () => {
    setFormData({
      age: '',
      gender: '',
      lv_ejection_fraction: '',
      nyha_class: 0,
      systolic_bp: '',
      diabetes: false,
      copd: false,
      smoker: false,
      first_diagnosis: false,
      bmi: '',
      creatinine: '',
      beta_blocker: false,
      ace_inhibitor: false,
    });
    setResult(null);
    setErrors({});
    setIsCalculating(false);
    setShowResult(false);
    setCurrentStep(1);
  };

  return (
    <CalculatorContainer
      title={t('calculators.cardiology.maggic.title')}
      subtitle={t('calculators.cardiology.maggic.subtitle')}
      icon={Heart}
      gradient="cardiology"
      className="max-w-4xl mx-auto"
    >
      <div className="space-y-8">
        {/* MAGGIC Alert */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-2 border-purple-200 dark:border-purple-800 rounded-2xl p-6">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl">
              <Heart className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-bold text-purple-800 dark:text-purple-200 mb-2">{t('calculators.cardiology.maggic.alert_title')}</h4>
              <p className="text-purple-700 dark:text-purple-300 leading-relaxed">
                {t('calculators.cardiology.maggic.alert_description')}
              </p>
              <div className="mt-3 inline-flex items-center space-x-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg px-3 py-1">
                <Award className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span className="text-xs font-semibold text-purple-700 dark:text-purple-300">Meta-Analysis Validated - All Heart Failure Types</span>
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
                  currentStep >= 1 ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  1
                </div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{t('calculators.cardiology.maggic.demographics_step')}</span>
              </div>
              <div className={`w-16 h-1 rounded-full transition-all duration-300 ${
                currentStep >= 2 ? 'bg-pink-500' : 'bg-gray-200'
              }`}></div>
              <div className="flex items-center space-x-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                  currentStep >= 2 ? 'bg-pink-500 text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  2
                </div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{t('calculators.cardiology.maggic.clinical_step')}</span>
              </div>
              <div className={`w-16 h-1 rounded-full transition-all duration-300 ${
                currentStep >= 3 ? 'bg-indigo-500' : 'bg-gray-200'
              }`}></div>
              <div className="flex items-center space-x-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                  currentStep >= 3 ? 'bg-indigo-500 text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  3
                </div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{t('calculators.cardiology.maggic.therapy_step')}</span>
              </div>
            </div>

            {/* Step 1: Demographics & Heart Failure */}
            {currentStep === 1 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl border border-purple-200 dark:border-purple-800">
                    <User className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{t('calculators.cardiology.maggic.patient_demographics')}</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{t('calculators.cardiology.maggic.demographics_description')}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <CalculatorInput
                    label={t('calculators.cardiology.maggic.age_label')}
                    value={formData.age}
                    onChange={(value: string) => setFormData({ ...formData, age: value })}
                    type="number"
                    min={18}
                    max={120}
                    placeholder={t('calculators.cardiology.maggic.age_placeholder')}
                    icon={User}
                    className="transition-all duration-300"
                  />

                  <CalculatorSelect
                    label={t('calculators.cardiology.maggic.gender_label')}
                    value={formData.gender}
                    onChange={(value: string) => setFormData({ ...formData, gender: value as 'male' | 'female' | '' })}
                    options={[
                      { value: '', label: t('calculators.cardiology.maggic.gender_placeholder') },
                      { value: 'male', label: t('calculators.cardiology.maggic.gender_male') },
                      { value: 'female', label: t('calculators.cardiology.maggic.gender_female') }
                    ]}
                    icon={User}
                    className="transition-all duration-300"
                  />

                  <CalculatorInput
                    label={t('calculators.cardiology.maggic.lvef_label')}
                    value={formData.lv_ejection_fraction}
                    onChange={(value: string) => setFormData({ ...formData, lv_ejection_fraction: value })}
                    type="number"
                    min={10}
                    max={80}
                    placeholder={t('calculators.cardiology.maggic.lvef_placeholder')}
                    icon={Heart}
                    className="transition-all duration-300"
                  />

                  <CalculatorSelect
                    label={t('calculators.cardiology.maggic.nyha_class_label')}
                    value={formData.nyha_class === 0 ? '' : formData.nyha_class.toString()}
                    onChange={(value: string) => {
                      setFormData({ ...formData, nyha_class: value === '' ? 0 : parseInt(value) as 1 | 2 | 3 | 4 });
                    }}
                    options={[
                      { value: '', label: t('calculators.cardiology.maggic.nyha_class_placeholder') },
                      { value: '1', label: t('calculators.cardiology.maggic.nyha_class_1') },
                      { value: '2', label: t('calculators.cardiology.maggic.nyha_class_2') },
                      { value: '3', label: t('calculators.cardiology.maggic.nyha_class_3') },
                      { value: '4', label: t('calculators.cardiology.maggic.nyha_class_4') },
                    ]}
                    error={errors.nyha_class}
                    icon={Activity}
                  />
                </div>

                <div className="flex justify-end">
                  <CalculatorButton
                    onClick={() => setCurrentStep(2)}
                    className="enhanced-calculator-button"
                  >
                    {t('calculators.cardiology.maggic.next_clinical_assessment')}
                  </CalculatorButton>
                </div>
              </div>
            )}

            {/* Step 2: Clinical Parameters & Comorbidities */}
            {currentStep === 2 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-pink-50 to-indigo-50 dark:from-pink-900/20 dark:to-indigo-900/20 rounded-2xl border border-pink-200 dark:border-pink-800">
                    <Activity className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{t('calculators.cardiology.maggic.clinical_assessment')}</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{t('calculators.cardiology.maggic.clinical_description')}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <CalculatorInput
                    label={t('calculators.cardiology.maggic.systolic_bp_label')}
                    value={formData.systolic_bp}
                    onChange={(value: string) => setFormData({ ...formData, systolic_bp: value })}
                    type="number"
                    placeholder={t('calculators.cardiology.maggic.systolic_bp_placeholder')}
                    min={60}
                    max={250}
                    unit="mmHg"
                    error={errors.systolic_bp}
                    icon={TrendingUp}
                  />

                  <CalculatorInput
                    label={t('calculators.cardiology.maggic.bmi_label')}
                    value={formData.bmi}
                    onChange={(value: string) => setFormData({ ...formData, bmi: value })}
                    type="number"
                    step={0.1}
                    placeholder={t('calculators.cardiology.maggic.bmi_placeholder')}
                    min={10}
                    max={60}
                    icon={User}
                    className="transition-all duration-300"
                  />

                  <CalculatorInput
                    label="Creatinine (μmol/L)"
                    value={formData.creatinine}
                    onChange={(value: string) => setFormData({ ...formData, creatinine: value })}
                    type="number"
                    step={1}
                    placeholder="e.g., 90"
                    min={50}
                    max={500}
                    unit="μmol/L"
                    error={errors.creatinine}
                    icon={Activity}
                    className="transition-all duration-300"
                  />
                </div>

                {/* Comorbidities */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 flex items-center space-x-2">
                    <Stethoscope className="w-5 h-5 text-pink-600" />
                    <span>{t('calculators.cardiology.maggic.comorbidities_section')}</span>
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <CalculatorCheckbox
                      label={t('calculators.cardiology.maggic.diabetes_label')}
                      checked={formData.diabetes}
                      onChange={(checked: boolean) => setFormData({ ...formData, diabetes: checked })}
                      description="History of diabetes mellitus"
                      icon={BarChart3}
                    />

                    <CalculatorCheckbox
                      label={t('calculators.cardiology.maggic.copd_label')}
                      checked={formData.copd}
                      onChange={(checked: boolean) => setFormData({ ...formData, copd: checked })}
                      description="COPD or severe lung disease"
                      icon={Activity}
                    />

                    <CalculatorCheckbox
                      label="Smoker"
                      checked={formData.smoker}
                      onChange={(checked: boolean) => setFormData({ ...formData, smoker: checked })}
                      description="Current or former smoker"
                      icon={AlertCircle}
                    />

                    <CalculatorCheckbox
                      label="Heart failure first diagnosed >18 months ago"
                      checked={formData.first_diagnosis}
                      onChange={(checked: boolean) => setFormData({ ...formData, first_diagnosis: checked })}
                      description="Chronic heart failure (>18 months ago)"
                      icon={Clock}
                    />
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
                    onClick={() => setCurrentStep(3)}
                    className="enhanced-calculator-button"
                  >
                    {t('calculators.cardiology.maggic.next_therapy_assessment')}
                  </CalculatorButton>
                </div>
              </div>
            )}

            {/* Step 3: Current Therapy */}
            {currentStep === 3 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-2xl border border-indigo-200 dark:border-indigo-800">
                    <Pill className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{t('calculators.cardiology.maggic.therapy_assessment')}</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{t('calculators.cardiology.maggic.therapy_description')}</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center space-x-2">
                      <Pill className="w-5 h-5 text-indigo-600" />
                      <span>{t('calculators.cardiology.maggic.gdmt_section')}</span>
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <CalculatorCheckbox
                        label={t('calculators.cardiology.maggic.beta_blocker_label')}
                        checked={formData.beta_blocker}
                        onChange={(checked: boolean) => setFormData({ ...formData, beta_blocker: checked })}
                        description="Evidence-based beta-blocker (carvedilol, metoprolol, bisoprolol)"
                        icon={Pill}
                      />

                      <CalculatorCheckbox
                        label={t('calculators.cardiology.maggic.ace_inhibitor_label')}
                        checked={formData.ace_inhibitor}
                        onChange={(checked: boolean) => setFormData({ ...formData, ace_inhibitor: checked })}
                        description="Neurohormonal blockade therapy"
                        icon={Pill}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <CalculatorButton
                    onClick={() => setCurrentStep(2)}
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
                    {t('calculators.cardiology.maggic.calculate_maggic_risk')}
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
                title={t('calculators.cardiology.maggic.results_title')}
                value={`${result.score} points`}
                category={result.risk.toLowerCase() as 'low' | 'intermediate' | 'high'}
                interpretation={result.interpretation}
                icon={Heart}
              >
                {/* Risk Score Overview */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-white/50 dark:bg-gray-800/50 rounded-2xl border border-white/20 dark:border-gray-700/20">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">{result.oneYearMortality}%</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">{t('calculators.cardiology.maggic.one_year_mortality')}</div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-purple-500 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${Math.min(result.oneYearMortality * 2, 100)}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 bg-white/50 dark:bg-gray-800/50 rounded-2xl border border-white/20 dark:border-gray-700/20">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-2">{result.threeYearMortality}%</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">{t('calculators.cardiology.maggic.three_year_mortality')}</div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-pink-500 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${Math.min(result.threeYearMortality, 100)}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Risk Stratification Table */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Target className="w-5 h-5 text-indigo-500" />
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100">{t('calculators.cardiology.maggic.risk_stratification_title')}</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                    <div className={`p-4 rounded-xl border-2 transition-all ${
                      result.risk === 'Low' ? 'border-green-300 bg-green-50 dark:bg-green-900/20' : 'border-green-200 bg-green-50/50 dark:bg-green-900/10'
                    }`}>
                      <div className="text-center">
                        <div className="text-sm font-semibold text-green-800 dark:text-green-200">{t('calculators.cardiology.maggic.low_risk_category')}</div>
                        <div className="text-xs text-green-600 dark:text-green-400">&lt;10% 1-year</div>
                        <div className="text-xs text-green-700 dark:text-green-300 mt-1">Examples: 1.5-8.5%</div>
                      </div>
                    </div>
                    <div className={`p-4 rounded-xl border-2 transition-all ${
                      result.risk === 'Intermediate' ? 'border-yellow-300 bg-yellow-50 dark:bg-yellow-900/20' : 'border-yellow-200 bg-yellow-50/50 dark:bg-yellow-900/10'
                    }`}>
                      <div className="text-center">
                        <div className="text-sm font-semibold text-yellow-800 dark:text-yellow-200">{t('calculators.cardiology.maggic.intermediate_risk_category')}</div>
                        <div className="text-xs text-yellow-600 dark:text-yellow-400">10-19% 1-year</div>
                        <div className="text-xs text-yellow-700 dark:text-yellow-300 mt-1">Examples: 11-18%</div>
                      </div>
                    </div>
                    <div className={`p-4 rounded-xl border-2 transition-all ${
                      result.risk === 'High' ? 'border-orange-300 bg-orange-50 dark:bg-orange-900/20' : 'border-orange-200 bg-orange-50/50 dark:bg-orange-900/10'
                    }`}>
                      <div className="text-center">
                        <div className="text-sm font-semibold text-orange-800 dark:text-orange-200">{t('calculators.cardiology.maggic.high_risk_category')}</div>
                        <div className="text-xs text-orange-600 dark:text-orange-400">20-34% 1-year</div>
                        <div className="text-xs text-orange-700 dark:text-orange-300 mt-1">Examples: 25-30%</div>
                      </div>
                    </div>
                    <div className={`p-4 rounded-xl border-2 transition-all ${
                      result.risk === 'Very High' ? 'border-red-300 bg-red-50 dark:bg-red-900/20' : 'border-red-200 bg-red-50/50 dark:bg-red-900/10'
                    }`}>
                      <div className="text-center">
                        <div className="text-sm font-semibold text-red-800 dark:text-red-200">{t('calculators.cardiology.maggic.very_high_risk_category')}</div>
                        <div className="text-xs text-red-600 dark:text-red-400">≥35% 1-year</div>
                        <div className="text-xs text-red-700 dark:text-red-300 mt-1">Examples: 40-80%</div>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                    {t('calculators.cardiology.maggic.mortality_rates_note')}
                  </p>
                </div>

                {/* Clinical Recommendations */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Stethoscope className="w-5 h-5 text-blue-500" />
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100">{t('calculators.cardiology.maggic.recommendations_title')}</h4>
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
                <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <Award className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    <h4 className="font-semibold text-purple-800 dark:text-purple-200">{t('calculators.cardiology.maggic.algorithm_validation_title')}</h4>
                  </div>
                  <div className="text-sm text-purple-700 dark:text-purple-300">
                    {t('calculators.cardiology.maggic.algorithm_validation_text')}
                  </div>
                </div>

                {/* About Creator Section */}
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <User className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200">{t('calculators.cardiology.maggic.about_creator_title')}</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="font-medium text-blue-900 dark:text-blue-100">{t('calculators.cardiology.maggic.creator_name')}</div>
                    <p className="text-sm text-blue-700 dark:text-blue-300 leading-relaxed">
                      {t('calculators.cardiology.maggic.creator_description')}
                    </p>
                    <div className="pt-2">
                      <a 
                        href="https://www.ncbi.nlm.nih.gov/pubmed/?term=Pocock+SJ%5BAuthor%5D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors"
                      >
                        <span className="text-sm font-medium">{t('calculators.cardiology.maggic.view_publications')}</span>
                        <span className="text-xs bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">
                          {t('calculators.cardiology.maggic.pubmed_link_text')}
                        </span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Evidence Section */}
                <div className="bg-gray-50 dark:bg-gray-900/20 border border-gray-200 dark:border-gray-800 rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <BarChart3 className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">{t('calculators.cardiology.maggic.evidence_title')}</h4>
                  </div>
                  
                  {/* Formula */}
                  <div className="mb-6">
                    <h5 className="font-medium text-gray-900 dark:text-gray-100 mb-2">{t('calculators.cardiology.maggic.formula_title')}</h5>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{t('calculators.cardiology.maggic.formula_description')}</p>
                  </div>

                  {/* Facts & Figures */}
                  <div>
                    <h5 className="font-medium text-gray-900 dark:text-gray-100 mb-4">{t('calculators.cardiology.maggic.facts_figures_title')}</h5>
                    
                    {/* Risk Factors Table */}
                    <div className="space-y-6">
                      {/* Basic Risk Factors */}
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                          <thead>
                            <tr className="bg-gray-100 dark:bg-gray-800">
                              <th className="text-left p-3 font-medium text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700">
                                {t('calculators.cardiology.maggic.risk_factor_title')}
                              </th>
                              <th className="text-left p-3 font-medium text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700">
                                {t('calculators.cardiology.maggic.points_title')}
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                                {t('calculators.cardiology.maggic.male_factor')}
                              </td>
                              <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">+1</td>
                            </tr>
                            <tr className="bg-gray-50 dark:bg-gray-800/50">
                              <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                                {t('calculators.cardiology.maggic.smoker_factor')}
                              </td>
                              <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">+1</td>
                            </tr>
                            <tr>
                              <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                                {t('calculators.cardiology.maggic.diabetic_factor')}
                              </td>
                              <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">+3</td>
                            </tr>
                            <tr className="bg-gray-50 dark:bg-gray-800/50">
                              <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                                {t('calculators.cardiology.maggic.copd_factor')}
                              </td>
                              <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">+2</td>
                            </tr>
                            <tr>
                              <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                                {t('calculators.cardiology.maggic.heart_failure_18_months')}
                              </td>
                              <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">+2</td>
                            </tr>
                            <tr className="bg-gray-50 dark:bg-gray-800/50">
                              <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                                {t('calculators.cardiology.maggic.not_on_beta_blocker')}
                              </td>
                              <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">+3</td>
                            </tr>
                            <tr>
                              <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                                {t('calculators.cardiology.maggic.not_on_ace_arb')}
                              </td>
                              <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">+1</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      {/* Ejection Fraction Table */}
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                          <thead>
                            <tr className="bg-blue-100 dark:bg-blue-900/30">
                              <th className="text-left p-3 font-medium text-blue-900 dark:text-blue-100 border border-blue-200 dark:border-blue-700">
                                {t('calculators.cardiology.maggic.ejection_fraction_title')}
                              </th>
                              <th className="text-left p-3 font-medium text-blue-900 dark:text-blue-100 border border-blue-200 dark:border-blue-700">
                                {t('calculators.cardiology.maggic.points_title')}
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="p-3 border border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-300">
                                {t('calculators.cardiology.maggic.ef_less_than_20')}
                              </td>
                              <td className="p-3 border border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-300">+7</td>
                            </tr>
                            <tr className="bg-blue-50 dark:bg-blue-900/20">
                              <td className="p-3 border border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-300">
                                {t('calculators.cardiology.maggic.ef_20_24')}
                              </td>
                              <td className="p-3 border border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-300">+6</td>
                            </tr>
                            <tr>
                              <td className="p-3 border border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-300">
                                {t('calculators.cardiology.maggic.ef_25_29')}
                              </td>
                              <td className="p-3 border border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-300">+5</td>
                            </tr>
                            <tr className="bg-blue-50 dark:bg-blue-900/20">
                              <td className="p-3 border border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-300">
                                {t('calculators.cardiology.maggic.ef_30_34')}
                              </td>
                              <td className="p-3 border border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-300">+3</td>
                            </tr>
                            <tr>
                              <td className="p-3 border border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-300">
                                {t('calculators.cardiology.maggic.ef_35_39')}
                              </td>
                              <td className="p-3 border border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-300">+2</td>
                            </tr>
                            <tr className="bg-blue-50 dark:bg-blue-900/20">
                              <td className="p-3 border border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-300">
                                {t('calculators.cardiology.maggic.ef_40_plus')}
                              </td>
                              <td className="p-3 border border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-300">+0</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      {/* NYHA Class Table */}
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                          <thead>
                            <tr className="bg-green-100 dark:bg-green-900/30">
                              <th className="text-left p-3 font-medium text-green-900 dark:text-green-100 border border-green-200 dark:border-green-700">
                                {t('calculators.cardiology.maggic.nyha_class_title')}
                              </th>
                              <th className="text-left p-3 font-medium text-green-900 dark:text-green-100 border border-green-200 dark:border-green-700">
                                {t('calculators.cardiology.maggic.points_title')}
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="p-3 border border-green-200 dark:border-green-700 text-green-700 dark:text-green-300">
                                {t('calculators.cardiology.maggic.nyha_1')}
                              </td>
                              <td className="p-3 border border-green-200 dark:border-green-700 text-green-700 dark:text-green-300">+0</td>
                            </tr>
                            <tr className="bg-green-50 dark:bg-green-900/20">
                              <td className="p-3 border border-green-200 dark:border-green-700 text-green-700 dark:text-green-300">
                                {t('calculators.cardiology.maggic.nyha_2')}
                              </td>
                              <td className="p-3 border border-green-200 dark:border-green-700 text-green-700 dark:text-green-300">+2</td>
                            </tr>
                            <tr>
                              <td className="p-3 border border-green-200 dark:border-green-700 text-green-700 dark:text-green-300">
                                {t('calculators.cardiology.maggic.nyha_3')}
                              </td>
                              <td className="p-3 border border-green-200 dark:border-green-700 text-green-700 dark:text-green-300">+6</td>
                            </tr>
                            <tr className="bg-green-50 dark:bg-green-900/20">
                              <td className="p-3 border border-green-200 dark:border-green-700 text-green-700 dark:text-green-300">
                                {t('calculators.cardiology.maggic.nyha_4')}
                              </td>
                              <td className="p-3 border border-green-200 dark:border-green-700 text-green-700 dark:text-green-300">+8</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      {/* Creatinine Table */}
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                          <thead>
                            <tr className="bg-yellow-100 dark:bg-yellow-900/30">
                              <th className="text-left p-3 font-medium text-yellow-900 dark:text-yellow-100 border border-yellow-200 dark:border-yellow-700">
                                {t('calculators.cardiology.maggic.creatinine_title')}
                              </th>
                              <th className="text-left p-3 font-medium text-yellow-900 dark:text-yellow-100 border border-yellow-200 dark:border-yellow-700">
                                {t('calculators.cardiology.maggic.points_title')}
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="p-3 border border-yellow-200 dark:border-yellow-700 text-yellow-700 dark:text-yellow-300">
                                {t('calculators.cardiology.maggic.creatinine_less_90')}
                              </td>
                              <td className="p-3 border border-yellow-200 dark:border-yellow-700 text-yellow-700 dark:text-yellow-300">+0</td>
                            </tr>
                            <tr className="bg-yellow-50 dark:bg-yellow-900/20">
                              <td className="p-3 border border-yellow-200 dark:border-yellow-700 text-yellow-700 dark:text-yellow-300">
                                {t('calculators.cardiology.maggic.creatinine_90_109')}
                              </td>
                              <td className="p-3 border border-yellow-200 dark:border-yellow-700 text-yellow-700 dark:text-yellow-300">+1</td>
                            </tr>
                            <tr>
                              <td className="p-3 border border-yellow-200 dark:border-yellow-700 text-yellow-700 dark:text-yellow-300">
                                {t('calculators.cardiology.maggic.creatinine_110_129')}
                              </td>
                              <td className="p-3 border border-yellow-200 dark:border-yellow-700 text-yellow-700 dark:text-yellow-300">+2</td>
                            </tr>
                            <tr className="bg-yellow-50 dark:bg-yellow-900/20">
                              <td className="p-3 border border-yellow-200 dark:border-yellow-700 text-yellow-700 dark:text-yellow-300">
                                {t('calculators.cardiology.maggic.creatinine_130_149')}
                              </td>
                              <td className="p-3 border border-yellow-200 dark:border-yellow-700 text-yellow-700 dark:text-yellow-300">+3</td>
                            </tr>
                            <tr>
                              <td className="p-3 border border-yellow-200 dark:border-yellow-700 text-yellow-700 dark:text-yellow-300">
                                {t('calculators.cardiology.maggic.creatinine_150_169')}
                              </td>
                              <td className="p-3 border border-yellow-200 dark:border-yellow-700 text-yellow-700 dark:text-yellow-300">+4</td>
                            </tr>
                            <tr className="bg-yellow-50 dark:bg-yellow-900/20">
                              <td className="p-3 border border-yellow-200 dark:border-yellow-700 text-yellow-700 dark:text-yellow-300">
                                {t('calculators.cardiology.maggic.creatinine_170_209')}
                              </td>
                              <td className="p-3 border border-yellow-200 dark:border-yellow-700 text-yellow-700 dark:text-yellow-300">+5</td>
                            </tr>
                            <tr>
                              <td className="p-3 border border-yellow-200 dark:border-yellow-700 text-yellow-700 dark:text-yellow-300">
                                {t('calculators.cardiology.maggic.creatinine_210_249')}
                              </td>
                              <td className="p-3 border border-yellow-200 dark:border-yellow-700 text-yellow-700 dark:text-yellow-300">+6</td>
                            </tr>
                            <tr className="bg-yellow-50 dark:bg-yellow-900/20">
                              <td className="p-3 border border-yellow-200 dark:border-yellow-700 text-yellow-700 dark:text-yellow-300">
                                {t('calculators.cardiology.maggic.creatinine_250_plus')}
                              </td>
                              <td className="p-3 border border-yellow-200 dark:border-yellow-700 text-yellow-700 dark:text-yellow-300">+8</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      {/* BMI Table */}
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                          <thead>
                            <tr className="bg-purple-100 dark:bg-purple-900/30">
                              <th className="text-left p-3 font-medium text-purple-900 dark:text-purple-100 border border-purple-200 dark:border-purple-700">
                                {t('calculators.cardiology.maggic.bmi_title')}
                              </th>
                              <th className="text-left p-3 font-medium text-purple-900 dark:text-purple-100 border border-purple-200 dark:border-purple-700">
                                {t('calculators.cardiology.maggic.points_title')}
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="p-3 border border-purple-200 dark:border-purple-700 text-purple-700 dark:text-purple-300">
                                {t('calculators.cardiology.maggic.bmi_less_15')}
                              </td>
                              <td className="p-3 border border-purple-200 dark:border-purple-700 text-purple-700 dark:text-purple-300">+6</td>
                            </tr>
                            <tr className="bg-purple-50 dark:bg-purple-900/20">
                              <td className="p-3 border border-purple-200 dark:border-purple-700 text-purple-700 dark:text-purple-300">
                                {t('calculators.cardiology.maggic.bmi_15_19')}
                              </td>
                              <td className="p-3 border border-purple-200 dark:border-purple-700 text-purple-700 dark:text-purple-300">+5</td>
                            </tr>
                            <tr>
                              <td className="p-3 border border-purple-200 dark:border-purple-700 text-purple-700 dark:text-purple-300">
                                {t('calculators.cardiology.maggic.bmi_20_24')}
                              </td>
                              <td className="p-3 border border-purple-200 dark:border-purple-700 text-purple-700 dark:text-purple-300">+3</td>
                            </tr>
                            <tr className="bg-purple-50 dark:bg-purple-900/20">
                              <td className="p-3 border border-purple-200 dark:border-purple-700 text-purple-700 dark:text-purple-300">
                                {t('calculators.cardiology.maggic.bmi_25_29')}
                              </td>
                              <td className="p-3 border border-purple-200 dark:border-purple-700 text-purple-700 dark:text-purple-300">+2</td>
                            </tr>
                            <tr>
                              <td className="p-3 border border-purple-200 dark:border-purple-700 text-purple-700 dark:text-purple-300">
                                {t('calculators.cardiology.maggic.bmi_30_plus')}
                              </td>
                              <td className="p-3 border border-purple-200 dark:border-purple-700 text-purple-700 dark:text-purple-300">+0</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                      <p className="text-xs text-yellow-800 dark:text-yellow-200">
                        {t('calculators.cardiology.maggic.creatinine_note')}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Evidence Appraisal Section */}
                <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <BarChart3 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    <h4 className="font-semibold text-emerald-800 dark:text-emerald-200">{t('calculators.cardiology.maggic.evidence_appraisal_title')}</h4>
                  </div>
                  <div className="space-y-4 text-sm text-emerald-700 dark:text-emerald-300">
                    <p className="leading-relaxed">{t('calculators.cardiology.maggic.evidence_appraisal_description')}</p>
                    <p className="leading-relaxed">{t('calculators.cardiology.maggic.poisson_regression_description')}</p>
                    <p className="leading-relaxed">{t('calculators.cardiology.maggic.subsequent_study_description')}</p>
                    <p className="leading-relaxed font-medium">{t('calculators.cardiology.maggic.validation_note')}</p>
                  </div>
                </div>

                {/* Literature Section */}
                <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Award className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    <h4 className="font-semibold text-indigo-800 dark:text-indigo-200">{t('calculators.cardiology.maggic.literature_title')}</h4>
                  </div>
                  
                  <div className="space-y-6">
                    {/* Original/Primary Reference */}
                    <div>
                      <h5 className="font-medium text-indigo-900 dark:text-indigo-100 mb-2">
                        {t('calculators.cardiology.maggic.original_reference_title')}
                      </h5>
                      <div className="bg-indigo-100 dark:bg-indigo-900/30 rounded-lg p-4">
                        <div className="text-xs font-medium text-indigo-700 dark:text-indigo-300 mb-1">
                          {t('calculators.cardiology.maggic.primary_reference_title')}
                        </div>
                        <p className="text-sm text-indigo-800 dark:text-indigo-200 leading-relaxed">
                          {t('calculators.cardiology.maggic.primary_reference_citation')}
                        </p>
                      </div>
                    </div>

                    {/* Validation */}
                    <div>
                      <h5 className="font-medium text-indigo-900 dark:text-indigo-100 mb-2">
                        {t('calculators.cardiology.maggic.validation_title')}
                      </h5>
                      <div className="bg-indigo-100 dark:bg-indigo-900/30 rounded-lg p-4">
                        <div className="text-xs font-medium text-indigo-700 dark:text-indigo-300 mb-1">
                          {t('calculators.cardiology.maggic.validation_reference_title')}
                        </div>
                        <p className="text-sm text-indigo-800 dark:text-indigo-200 leading-relaxed">
                          {t('calculators.cardiology.maggic.validation_reference_citation')}
                        </p>
                      </div>
                    </div>

                    {/* Other References */}
                    <div>
                      <h5 className="font-medium text-indigo-900 dark:text-indigo-100 mb-2">
                        {t('calculators.cardiology.maggic.other_references_title')}
                      </h5>
                      <div className="space-y-3">
                        <div className="bg-indigo-100 dark:bg-indigo-900/30 rounded-lg p-4">
                          <div className="text-xs font-medium text-indigo-700 dark:text-indigo-300 mb-1">
                            {t('calculators.cardiology.maggic.other_reference_1_title')}
                          </div>
                          <p className="text-sm text-indigo-800 dark:text-indigo-200 leading-relaxed">
                            {t('calculators.cardiology.maggic.other_reference_1_citation')}
                          </p>
                        </div>
                        
                        <div className="bg-indigo-100 dark:bg-indigo-900/30 rounded-lg p-4">
                          <div className="text-xs font-medium text-indigo-700 dark:text-indigo-300 mb-1">
                            {t('calculators.cardiology.maggic.other_reference_2_title')}
                          </div>
                          <p className="text-sm text-indigo-800 dark:text-indigo-200 leading-relaxed">
                            {t('calculators.cardiology.maggic.other_reference_2_citation')}
                          </p>
                        </div>
                        
                        <div className="bg-indigo-100 dark:bg-indigo-900/30 rounded-lg p-4">
                          <div className="text-xs font-medium text-indigo-700 dark:text-indigo-300 mb-1">
                            {t('calculators.cardiology.maggic.other_reference_3_title')}
                          </div>
                          <p className="text-sm text-indigo-800 dark:text-indigo-200 leading-relaxed">
                            {t('calculators.cardiology.maggic.other_reference_3_citation')}
                          </p>
                        </div>
                      </div>
                    </div>
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
                  {t('calculators.cardiology.maggic.new_assessment_button')}
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
            <span>Based on MAGGIC Risk Model (Pocock et al.) • For educational purposes only</span>
            <div className="flex items-center space-x-1">
              <Award className="w-4 h-4 text-purple-600" />
              <span className="text-purple-600 font-semibold">Meta-Analysis Validated</span>
            </div>
          </div>
        </div>
      </div>
    </CalculatorContainer>
  );
}; 