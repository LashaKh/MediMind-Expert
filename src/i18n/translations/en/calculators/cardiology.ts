import maggicTranslations from './maggic';
import riskAssessmentTranslations from './risk-assessment';
import { timiRiskScoreTranslations } from './timi-risk-score';
import grace2Translations from './grace-2';
import daptTranslations from './dapt';
import preciseDaptTranslations from './precise-dapt';
import ahaPreventTranslations from './aha-prevent';
import shfmTranslations from './shfm';
import gwtgHfRiskTranslations from './gwtg-hf-risk';
import { heartFailureStagingTranslations } from './heart-failure-staging';

export default {
  // Import risk assessment translations
  ...riskAssessmentTranslations,
  
  // Common translations
  title: 'Cardiology Calculators',
  description: 'Evidence-based cardiovascular risk assessment and clinical decision support tools',
  category: 'Cardiology',

  // Calculator titles for navigation
  graceTitle: 'GRACE 2.0 Calculator',
  hcmRiskScdTitle: 'HCM Risk-SCD Calculator',
  maggicTitle: maggicTranslations.title,
  gwtgHfTitle: 'GWTG-HF Calculator',
  heartFailureStagingTitle: 'Heart Failure Staging',
  shfmTitle: 'SHFM Risk Calculator',
  stsTitle: 'STS Risk Calculator',
  euroScoreTitle: 'EuroSCORE II Calculator',
  timiTitle: 'TIMI Risk Calculator',
  preventTitle: 'AHA PREVENT Calculator',
  hcmAfTitle: 'HCM-AF Calculator',
  chadsVascTitle: 'CHA2DS2-VASc Calculator',
  hasBleedTitle: 'HAS-BLED Calculator',
  chads2Title: 'CHADS2 Calculator',

  // Calculator references used by main calculator list
  timi_risk: {
    title: 'TIMI Risk Calculator',
    subtitle: 'Unstable Angina/NSTEMI Risk Assessment'
  },
  
  grace_acs: {
    title: 'GRACE ACS Risk Calculator',
    subtitle: 'Acute Coronary Syndrome Mortality Risk'
  },

  // HCM Risk-SCD Calculator
  // hcm_risk_scd: { ... } // Moved to hcm-risk-scd.ts

  // GRACE 2.0 Risk Calculator - Extracted to standalone file
  grace: grace2Translations,

  // DAPT Score Calculator - Extracted to standalone file
  dapt: daptTranslations,

  // PRECISE-DAPT Calculator - Extracted to standalone file
  precise_dapt: preciseDaptTranslations,

  // TIMI Risk Calculator - Extracted to standalone file
  timi: timiRiskScoreTranslations,

  // HCM-AF Risk Calculator - PLACEHOLDER FOR PATTERN COMPLIANCE
  hcm_af: {
    title: 'HCM-AF Risk Calculator',
    subtitle: 'Atrial Fibrillation Risk in Hypertrophic Cardiomyopathy',
    description: 'Atrial fibrillation risk assessment in patients with hypertrophic cardiomyopathy.',
    calculate_button: 'Calculate HCM-AF Risk',
    risk_category: 'Risk category',
    recommendations: 'Clinical recommendations',
    low_risk: 'Low risk',
    high_risk: 'High risk'
  },

  // MAGGIC Risk Calculator - Extracted to standalone file
  maggic: maggicTranslations,

  // AHA PREVENT™ Calculator - Extracted to standalone file
  prevent: ahaPreventTranslations,

  // SHFM Risk Calculator - Extracted to standalone file
  shfm: shfmTranslations,

  // GWTG-HF Risk Calculator - Extracted to standalone file
  gwtgHf: gwtgHfRiskTranslations,

  // Heart Failure Staging Calculator - Extracted to standalone file
  heartFailureStaging: heartFailureStagingTranslations,

  // STS Adult Cardiac Surgery Risk Calculator - COMPLETE TRANSLATION
  sts: {
    title: 'STS Adult Cardiac Surgery Risk Calculator',
    subtitle: 'Perioperative Risk Assessment • Evidence-Based Surgical Planning',
    description: 'Society of Thoracic Surgeons risk assessment for perioperative mortality and morbidity in cardiac surgery.',
    
    // Alert section
    alert_title: 'STS National Database - Evidence-Based Risk Assessment',
    alert_description: 'Validated risk prediction model based on >4 million cardiac surgical procedures from the STS National Database.',
    
    // Step navigation
    demographics_step: 'Demographics',
    procedure_step: 'Procedure',
    clinical_step: 'Clinical Status',
    comorbidities_step: 'Comorbidities',
    
    // Step 1: Demographics & Anthropometrics
    patient_demographics: 'Patient Demographics & Anthropometrics',
    demographics_description: 'Basic patient characteristics for surgical risk assessment',
    age_label: 'Age',
    age_placeholder: '65',
    age_unit: 'years',
    gender_label: 'Gender',
    gender_placeholder: 'Select gender...',
    gender_male: 'Male',
    gender_female: 'Female',
    race_label: 'Race/Ethnicity',
    race_placeholder: 'Select race/ethnicity...',
    race_white: 'White',
    race_black: 'Black/African American',
    race_hispanic: 'Hispanic/Latino',
    race_asian: 'Asian',
    race_other: 'Other',
    height_label: 'Height',
    height_placeholder: '170',
    height_unit: 'cm',
    weight_label: 'Weight',
    weight_placeholder: '70',
    weight_unit: 'kg',
    
    // Step 2: Procedure Details & Urgency
    procedure_details: 'Procedure Details & Urgency',
    procedure_description: 'Type of cardiac surgical procedure and urgency status',
    procedure_type_label: 'Procedure Type',
    procedure_placeholder: 'Select procedure...',
    cabg_only: 'CABG Only',
    valve_only: 'Valve Only',
    cabg_valve: 'CABG + Valve',
    urgency_label: 'Urgency',
    urgency_placeholder: 'Select urgency...',
    elective: 'Elective',
    urgent: 'Urgent',
    emergent: 'Emergent',
    
    // Valve Assessment
    valve_assessment: 'Valve Assessment (if applicable)',
    mitral_insufficiency_label: 'Mitral Insufficiency',
    mitral_insufficiency_placeholder: 'Select severity...',
    tricuspid_insufficiency_label: 'Tricuspid Insufficiency',
    tricuspid_insufficiency_placeholder: 'Select severity...',
    severity_none: 'None (0)',
    severity_mild: 'Mild (1+)',
    severity_moderate: 'Moderate (2+)',
    severity_moderate_severe: 'Moderate-Severe (3+)',
    severity_severe: 'Severe (4+)',
    aortic_stenosis_label: 'Aortic Stenosis',
    mitral_stenosis_label: 'Mitral Stenosis',
    previous_cardiac_surgery_label: 'Previous Cardiac Surgery',
    
    // Step 3: Clinical Status & Laboratory
    clinical_status: 'Clinical Status & Laboratory Values',
    clinical_description: 'Cardiac function and key laboratory parameters',
    ejection_fraction_label: 'Left Ventricular Ejection Fraction',
    ejection_fraction_placeholder: '55',
    ejection_fraction_unit: '%',
    nyha_class_label: 'NYHA Functional Class',
    nyha_class_placeholder: 'Select NYHA class...',
    nyha_class_1: 'Class I - No limitation',
    nyha_class_2: 'Class II - Slight limitation',
    nyha_class_3: 'Class III - Marked limitation',
    nyha_class_4: 'Class IV - Severe limitation',
    creatinine_label: 'Serum Creatinine',
    creatinine_placeholder: '1.0',
    creatinine_unit: 'mg/dL',
    hematocrit_label: 'Hematocrit',
    hematocrit_placeholder: '40',
    hematocrit_unit: '%',
    cardiogenic_shock_label: 'Cardiogenic Shock',
    dialysis_label: 'Dialysis',
    
    // Step 4: Comorbidities
    comorbidities_description: 'Additional medical conditions affecting surgical risk',
    diabetes_label: 'Diabetes Mellitus',
    hypertension_label: 'Hypertension',
    immunosuppression_label: 'Immunosuppression',
    pvd_label: 'Peripheral Vascular Disease',
    cerebrovascular_disease_label: 'Cerebrovascular Disease',
    chronic_lung_disease_label: 'Chronic Lung Disease',
    
    // Navigation buttons
    next_procedure: 'Next: Procedure Details',
    next_clinical: 'Next: Clinical Status',
    next_comorbidities: 'Next: Comorbidities',
    back_button: 'Back',
    calculate_button: 'Calculate STS Risk',
    reset_button: 'Reset Calculator',
    
    // Results section
    results_title: 'STS Risk Assessment Results',
    risk_analysis: 'Comprehensive Risk Analysis',
    predicted_outcomes: 'Predicted Outcomes',
    mortality_risk: 'Operative Mortality',
    morbidity_combined: 'Major Morbidity',
    stroke_risk: 'Stroke Risk',
    renal_failure_risk: 'Renal Failure Risk',
    reoperation_risk: 'Reoperation Risk',
    prolonged_ventilation: 'Prolonged Ventilation',
    sternal_infection: 'Deep Sternal Wound Infection',
    
    // Risk categories
    risk_category: 'Risk Category',
    low_risk: 'Low Risk',
    intermediate_risk: 'Intermediate Risk',
    high_risk: 'High Risk',
    very_high_risk: 'Very High Risk',
    
    // Risk interpretations
    interpretation_low: 'Low surgical risk - Excellent candidate for cardiac surgery with favorable outcomes expected',
    interpretation_intermediate: 'Intermediate surgical risk - Good candidate with careful perioperative management',
    interpretation_high: 'High surgical risk - Requires specialized care and consideration of alternative treatments',
    interpretation_very_high: 'Very high surgical risk - Consider heart team evaluation and alternative therapies',
    
    // Clinical recommendations
    recommendation_low: 'Proceed with standard perioperative care and monitoring',
    recommendation_intermediate: 'Enhanced perioperative monitoring and multidisciplinary care coordination',
    recommendation_high: 'Specialized cardiac surgical team with intensive perioperative management',
    recommendation_very_high: 'Heart team evaluation recommended - consider alternative therapies or high-risk protocols',
    
    // Validation messages
    age_required: 'Age is required',
    age_invalid: 'Age must be between 18-120 years',
    gender_required: 'Gender is required',
    procedure_required: 'Procedure type is required',
    height_required: 'Height is required',
    height_invalid: 'Height must be between 100-250 cm',
    weight_required: 'Weight is required',
    weight_invalid: 'Weight must be between 30-300 kg',
    ejection_fraction_required: 'Ejection fraction is required',
    ejection_fraction_invalid: 'Ejection fraction must be between 10-80%',
    nyha_class_required: 'NYHA class is required',
    urgency_required: 'Urgency is required',
    creatinine_required: 'Creatinine is required',
    creatinine_invalid: 'Creatinine must be between 0.5-15 mg/dL',
    hematocrit_required: 'Hematocrit is required',
    hematocrit_invalid: 'Hematocrit must be between 15-60%',
    
    // Badge for validation
    badge_sts_database: 'STS National Database - >4M Procedures',
  
    select_gender: 'Select gender...',
    select_race: 'Select race/ethnicity...',
    select_procedure: 'Select procedure...',
    select_urgency: 'Select urgency...',
    select_nyha: 'Select NYHA class...',
    select_severity: 'Select severity...',
    nyha_1: 'Class I - No limitation',
    nyha_2: 'Class II - Slight limitation',
    nyha_3: 'Class III - Marked limitation',
    nyha_4: 'Class IV - Severe limitation',
    validation_age_required: 'Age is required',
    validation_age_range: 'Age must be between 18-120 years',
    validation_gender_required: 'Gender is required',
    validation_procedure_required: 'Procedure type is required',
    validation_height_required: 'Height is required',
    validation_height_range: 'Height must be between 100-250 cm',
    validation_weight_required: 'Weight is required',
    validation_weight_range: 'Weight must be between 30-300 kg',
    validation_ef_required: 'Ejection fraction is required',
    validation_ef_range: 'Ejection fraction must be between 10-80%',
    validation_nyha_required: 'NYHA class is required',
    validation_urgency_required: 'Urgency is required',
    validation_creatinine_required: 'Creatinine is required',
    validation_creatinine_range: 'Creatinine must be between 0.5-15 mg/dL',
    validation_hematocrit_required: 'Hematocrit is required',
    validation_hematocrit_range: 'Hematocrit must be between 15-60%',
    recommendation_preop_optimization: 'Preoperative optimization protocols',
    recommendation_standard_protocols: 'Standard surgical protocols',
    recommendation_postop_monitoring: 'Enhanced postoperative monitoring',
    recommendation_standard_approach: 'Standard perioperative approach',
    recommendation_fast_track: 'Fast-track protocols when appropriate',
    recommendation_early_discharge: 'Consider early discharge planning',
    recommendation_enhanced_assessment: 'Enhanced preoperative assessment',
    recommendation_cardiology_consult: 'Cardiology consultation recommended',
    recommendation_discuss_risks: 'Thorough risk-benefit discussion',
    recommendation_standard_icu: 'Standard ICU protocols',
    recommendation_multidisciplinary: 'Multidisciplinary team approach',
    recommendation_alternative_therapies: 'Consider alternative therapies',
    recommendation_extended_icu: 'Extended ICU monitoring',
    recommendation_informed_consent: 'Detailed informed consent process',
    recommendation_heart_team: 'Heart team evaluation',
    recommendation_heart_team_mandatory: 'Mandatory heart team evaluation',
    recommendation_nonsurgical_alternatives: 'Consider non-surgical alternatives',
    recommendation_palliative_care: 'Palliative care consultation',
    recommendation_family_meeting: 'Family meeting for goals of care',
    recommendation_alternative_access: 'Consider alternative access routes',
    recommendation_high_risk_programs: 'High-risk surgical programs',
    badge_evidence_based: 'Evidence-Based Risk Assessment',
    aortic_stenosis_description: 'Aortic valve stenosis severity',
    mitral_stenosis_description: 'Mitral valve stenosis severity',
    diabetes_description: 'Diabetes mellitus requiring medication',
    hypertension_description: 'History of hypertension',
    pvd_description: 'Peripheral vascular disease',
    cerebrovascular_description: 'History of stroke or TIA',
    chronic_lung_description: 'Chronic lung disease requiring medication',
    immunosuppression_description: 'Current immunosuppressive therapy',
    previous_cardiac_surgery_description: 'Prior cardiac surgical intervention',
    cardiogenic_shock_description: 'Cardiogenic shock at presentation',
    dialysis_description: 'Currently on dialysis',
    
    // Alert section notes
    comorbidity_impact_note: 'Comorbidities significantly impact surgical risk prediction',
    validation_note: 'Models validated on over 4 million cardiac surgical procedures',
    risk_management_note: 'Risk categories guide perioperative management decisions',
    
    // Section titles
    comorbidities_title: 'Comorbidities & Risk Factors',
    
    // Basic option keys for STS calculator
    male: 'Male',
    female: 'Female',
    white: 'White',
    black: 'Black/African American',
    hispanic: 'Hispanic/Latino',
    asian: 'Asian',
    other: 'Other'
    },



  // Ensure other calculator IDs referenced in Calculators.tsx for cardiology also have title/subtitle
}; 