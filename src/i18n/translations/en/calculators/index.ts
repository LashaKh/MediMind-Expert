import common from './common';
import cardiology from './cardiology';
import eurscoreII from './euroscore-ii';
import hcmRiskSCD from './hcm-risk-scd';
import hcmAFRisk from './hcm-af-risk';
import { 
  gestationalAgeCalculator,
  eddCalculator,
  preeclampsiaRiskCalculator,
  pretermBirthRiskCalculator,
  gdmScreeningCalculator,
  bishopScoreCalculator
} from './ObGyn';

export default {
  common,
  cardiology,
  eurscoreII,
  
  // Individual OB/GYN calculators with direct access
  gestational_age: gestationalAgeCalculator,
  edd: eddCalculator,
  preeclampsia_risk: preeclampsiaRiskCalculator,
  preterm_birth_risk: pretermBirthRiskCalculator,
  gdm_screening: gdmScreeningCalculator,
  bishop_score: bishopScoreCalculator,
  
  // Top-level keys for Calculator landing page
  specialty: {
    cardiology: {
      title: 'Cardiology Calculators',
      description: 'Professional cardiovascular risk assessment and clinical decision support tools',
      status: 'PRODUCTION READY', 
      message: '✅ 16 Calculators • 100% Validated • 6 Categories'
    },
    obgyn: {
      title: 'OB/GYN Calculators',
      description: 'Comprehensive obstetrics and gynecology assessment tools',
      status: 'IMPLEMENTATION READY',
      message: '⚠️ 14 Calculators • Implementation Phase • Professional Grade'
    }
  },
  
  stats: {
    calculators: 'Calculators',
    validated: 'Validated', 
    categories: 'Categories'
  },
  
  categories: {
    risk_assessment: 'Risk Assessment',
    acute_care: 'Acute Care',
    therapy_management: 'Therapy Management',
    heart_failure: 'Heart Failure',
    surgical_risk: 'Surgical Risk',
    cardiomyopathy: 'Cardiomyopathy',
    pregnancy_dating: 'Pregnancy Dating',
    antenatal_risk: 'Antenatal Risk',
    labor_management: 'Labor Management',
    assessment_tools: 'Assessment Tools',
    gynecologic_oncology: 'Gynecologic Oncology',
    reproductive_health: 'Reproductive Health'
  },
  
  // Calculator title/subtitle shortcuts for cards
  dapt: {
    title: 'DAPT Score Calculator',
    subtitle: 'Dual Antiplatelet Therapy Duration • Risk-Benefit Assessment'
  },
  
  precise_dapt: {
    title: 'PRECISE-DAPT Calculator',
    subtitle: 'Bleeding Risk Assessment • DAPT Duration Optimization'
  },
  
  prevent: {
    title: 'AHA PREVENT™ Calculator',
    subtitle: 'Cardiovascular Risk Assessment • CKM-E Enhanced'
  },
  
  ascvd: {
    title: 'ASCVD Risk Calculator',
    subtitle: '10-Year Atherosclerotic Cardiovascular Disease Risk'
  },
  
  atrial_fibrillation: {
    title: 'Atrial Fibrillation Calculators',
    subtitle: 'CHA₂DS₂-VASc • HAS-BLED • Comprehensive AF Assessment'
  },
  
  timi_risk: {
    title: 'TIMI Risk Calculator',
    subtitle: 'Thrombolysis in Myocardial Infarction Risk Assessment'
  },
  
  grace_acs: {
    title: 'GRACE ACS Calculator',
    subtitle: 'Global Registry of Acute Coronary Events Risk Assessment'
  },
  
  heart_failure_staging: {
    title: 'Heart Failure Staging',
    subtitle: 'ACC/AHA Stage Classification • Clinical Assessment'
  },
  
  gwtg_hf: {
    title: 'GWTG-HF Calculator',
    subtitle: 'Get With The Guidelines - Heart Failure Risk Score'
  },
  
  maggic: {
    title: 'MAGGIC Calculator',
    subtitle: 'Meta-Analysis Global Group in Chronic Heart Failure'
  },
  
  shfm: {
    title: 'SHFM Calculator',
    subtitle: 'Seattle Heart Failure Model • Survival Prediction'
  },
  
  sts: {
    title: 'STS Calculator',
    subtitle: 'Society of Thoracic Surgeons Risk Assessment'
  },
  
  euroscore: {
    title: 'EuroSCORE II Calculator',
    subtitle: 'European System for Cardiac Operative Risk Evaluation'
  },
  
  hcm_risk_scd: hcmRiskSCD,
  
  hcmAFRisk,
  hcm_af_risk: hcmAFRisk,
  
  categories_label: 'Categories',
  calculator_categories: 'Calculator Categories',
  back_to: 'Back to',
  view_grid: 'Grid',
  view_list: 'List',
};

export {
  eurscoreII
}; 