import maggicTranslations from './maggic';
import riskAssessmentTranslations from './risk-assessment';
import { timiRiskScoreTranslations } from './timi-risk-score';
import grace2Translations from './grace-2';
import daptTranslations from './dapt';
import preciseDaptTranslations from './precise-dapt';
import ahaPreventTranslations from './aha-prevent';

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

  // GWTG-HF Risk Calculator
  gwtgHf: {
    title: 'GWTG-HF Risk Calculator',
    subtitle: 'Get With The Guidelines - Heart Failure Risk Assessment',
    description: 'Evidence-based risk prediction tool for in-hospital mortality in heart failure patients.',
    
    // Alert section
    alert_title: 'GWTG-HF Risk Assessment',
    alert_description: 'Validated risk calculator for in-hospital mortality prediction in heart failure patients based on the Get With The Guidelines-Heart Failure registry. This tool helps stratify patients and guide clinical decision-making during hospitalization.',
    
    // Section headers
    section_demographics: 'Demographics & Comorbidities',
    section_demographics_description: 'Patient demographic information and cardiovascular comorbidities',
    vital_signs_section: 'Vital Signs Assessment', 
    vital_signs_description: 'Current hemodynamic status and cardiovascular vital signs',
    laboratory_section: 'Laboratory Values',
    laboratory_description: 'Key laboratory markers affecting heart failure prognosis',
    
    // Demographics fields
    field_age: 'Age',
    field_age_placeholder: 'Enter age in years',
    field_race: 'Race/Ethnicity',
    field_race_select: 'Select race/ethnicity',
    field_race_black: 'Black or African American',
    field_race_other: 'Other',
    field_copd: 'Chronic Obstructive Pulmonary Disease (COPD)',
    field_copd_description: 'History of chronic obstructive pulmonary disease',
    
    // Vital signs fields
    systolic_bp_label: 'Systolic Blood Pressure',
    systolic_bp_placeholder: 'Enter systolic BP',
    heart_rate_label: 'Heart Rate',
    heart_rate_placeholder: 'Enter heart rate',
    
    // Laboratory fields
    bun_label: 'Blood Urea Nitrogen (BUN)',
    bun_placeholder: 'Enter BUN value',
    sodium_label: 'Serum Sodium',
    sodium_placeholder: 'Enter sodium level',
    
    // Button labels
    button_next_vital_signs: 'Next: Vital Signs',
    next_laboratory: 'Next: Laboratory',
    back_button: 'Back',
    calculate_button: 'Calculate Risk',
    
    // Results section
    results_title: 'GWTG-HF Risk Assessment Results',
    gwtg_points: 'GWTG Points',
    risk_score_label: 'Risk Score',
    mortality_risk_label: 'Mortality Risk',
    in_hospital_mortality: 'In-hospital mortality',
    risk_category_label: 'Risk Category',
    risk_stratification: 'Risk stratification',
    
    // Risk factor breakdown
    risk_factor_contribution: 'Risk Factor Contribution',
    age_factor: 'Age',
    systolic_bp_factor: 'SBP',
    bun_factor: 'BUN',
    sodium_factor: 'Sodium',
    race_factor: 'Race',
    copd_factor: 'COPD',
    heart_rate_factor: 'HR',
    
    // Clinical management
    clinical_management: 'Clinical Management Recommendations',
    
    // Risk interpretations
    interpretation_template: 'GWTG-HF Risk Score: {{score}} points. {{interpretation}} Estimated in-hospital mortality: {{mortality}}%.',
    interpretation_low: 'Low risk for in-hospital mortality',
    interpretation_intermediate: 'Intermediate risk for in-hospital mortality',
    interpretation_high: 'High risk for in-hospital mortality',
    interpretation_very_high: 'Very high risk for in-hospital mortality',
    
    // Clinical recommendations - Base
    recommendation_guideline_therapy: 'Guideline-directed medical therapy optimization',
    recommendation_fluid_monitoring: 'Close monitoring of fluid balance and daily weights',
    recommendation_vital_assessment: 'Regular assessment of vital signs and oxygen saturation',
    recommendation_precipitating_factors: 'Evaluation for precipitating factors and triggers',
    
    // Clinical recommendations - Low risk
    recommendation_standard_protocols: 'Standard heart failure management protocols',
    recommendation_early_discharge: 'Consider early discharge planning with HF education',
    recommendation_outpatient_followup: 'Outpatient cardiology follow-up within 7-14 days',
    recommendation_medication_reconciliation: 'Medication reconciliation and optimization',
    
    // Clinical recommendations - Intermediate risk
    recommendation_enhanced_monitoring: 'Enhanced inpatient monitoring with frequent assessments',
    recommendation_telemetry_consideration: 'Consider telemetry monitoring for arrhythmias',
    recommendation_nurse_navigator: 'HF nurse navigator involvement for care coordination',
    recommendation_close_followup: 'Discharge planning with close follow-up within 3-7 days',
    recommendation_biomarker_monitoring: 'Consider BNP/NT-proBNP trend monitoring',
    
    // Clinical recommendations - High risk
    recommendation_intensive_monitoring: 'Intensive monitoring with continuous telemetry',
    recommendation_early_consultation: 'Early cardiology consultation and co-management',
    recommendation_icu_consideration: 'Consider ICU monitoring if clinically indicated',
    recommendation_palliative_consult: 'Palliative care consultation for symptom management',
    recommendation_advance_directive: 'Advanced directive discussions with patient/family',
    recommendation_inotropic_support: 'Consider inotropic support if appropriate',
    
    // Clinical recommendations - Very high risk
    recommendation_icu_level_care: 'ICU-level monitoring and care recommended',
    recommendation_immediate_hf_consult: 'Immediate advanced heart failure consultation',
    recommendation_mechanical_support: 'Consider mechanical circulatory support evaluation',
    recommendation_goals_of_care: 'Palliative care consultation for goals of care',
    recommendation_family_meetings: 'Family meetings for end-of-life planning',
    recommendation_hospice_consideration: 'Consider hospice consultation if appropriate',
    recommendation_multidisciplinary_team: 'Multidisciplinary team involvement',
    
    // Algorithm validation
    algorithm_title: 'Enhanced GWTG-HF Algorithm',
    algorithm_description: '✓ AHA Get With The Guidelines Validated • Enhanced risk stratification with comprehensive clinical recommendations',
    
    // Risk reference ranges
    risk_reference_title: 'GWTG-HF Risk Score Reference',
    low_risk_range: 'Low Risk (≤25 points)',
    low_mortality: '<2% mortality risk',
    intermediate_risk_range: 'Intermediate Risk (26-35 points)',
    intermediate_mortality: '2-4% mortality risk',
    high_risk_range: 'High Risk (36-45 points)',
    high_mortality: '4-8% mortality risk',
    very_high_risk_range: 'Very High Risk (>45 points)',
    very_high_mortality: '>8% mortality risk',
    
    // Enhanced alert section
    enhanced_alert_title: 'Enhanced GWTG-HF Risk Assessment',
    enhanced_alert_description: 'Evidence-based in-hospital mortality risk prediction for heart failure patients. Validates risk stratification and guides intensive care decisions for optimal patient outcomes.',
    enhanced_alert_badge: 'AHA Get With The Guidelines Validated - Enhanced Risk Analysis',
    
    // Progress step labels
    progress_demographics: 'Demographics',
    progress_vital_signs: 'Vital Signs',
    progress_laboratory: 'Laboratory',
    
    // Action buttons
    new_assessment: 'New Assessment',
    modify_inputs: 'Modify Inputs',
    
    // Footer validation text
    footer_validation_text: '✓ AHA Get With The Guidelines Validated • Enhanced risk stratification with comprehensive clinical recommendations',
    footer_based_on: 'Based on AHA Get With The Guidelines-Heart Failure (GWTG-HF) Registry • Enhanced risk assessment',
    footer_guidelines_validated: 'Guidelines Validated',
    
    // Validation messages
    validation: {
      age_required: 'Age is required',
      age_range: 'Age must be between 18-120 years',
      race_required: 'Race is required',
      sbp_required: 'Systolic blood pressure is required',
      sbp_range: 'Systolic BP must be between 60-300 mmHg',
      bun_required: 'Blood urea nitrogen is required',
      bun_range: 'BUN must be between 5-200 mg/dL',
      sodium_required: 'Serum sodium is required',
      sodium_range: 'Sodium must be between 115-160 mEq/L',
      heart_rate_required: 'Heart rate is required',
      heart_rate_range: 'Heart rate must be between 30-200 bpm'
    },
    
    // From the Creator section
    from_creator_title: 'From the Creator',
    creator_name: 'Dr. Gregg C. Fonarow, MD',
    creator_title_role: 'Professor of Medicine & Director, Ahmanson-UCLA Cardiomyopathy Center',
    why_developed: 'Why GWTG-HF Was Developed',
    why_developed_text: 'Risk models help inform patient triage and treatment decisions. The GWTG-HF Score was developed using data from almost 200 US hospitals to provide objective prognostic information that guides appropriate monitoring and treatment for heart failure patients.',
    clinical_application: 'Clinical Application',
    clinical_application_text: 'The GWTG-HF risk score quantifies patient risk at the point of care, facilitating patient triage and encouraging evidence-based therapy in highest-risk patients. It helps increase use of recommended medical therapy in high-risk patients while reducing resource utilization in low-risk patients.',
    view_publications: 'View Dr. Fonarow\'s Publications',
    pubmed_link_text: 'PubMed',
    
    // Evidence section
    evidence_title: 'Evidence & Validation',
    formula_title: 'Formula',
    formula_description: 'Addition of lab and demographic values assigned point values.',
    score_interpretation_title: 'Score Interpretation',
    score_interpretation_ranges: [
      { range: '0-33', mortality: '<1%' },
      { range: '34-50', mortality: '1-5%' },
      { range: '51-57', mortality: '5-10%' },
      { range: '58-61', mortality: '10-15%' },
      { range: '62-65', mortality: '15-20%' },
      { range: '66-70', mortality: '20-30%' },
      { range: '71-74', mortality: '30-40%' },
      { range: '75-78', mortality: '40-50%' },
      { range: '≥79', mortality: '>50%' }
    ],
    validation_cohort: 'Validated in 39,783 patients from 198 hospitals in the GWTG-HF registry (2005-2007)',
    key_predictors: 'Key predictors: age, systolic blood pressure, BUN at admission, with additional contributions from heart rate, serum sodium, COPD presence, and race',
    ehealthrecords_validation: 'Further validated in 13,163 patients using electronic health record data',
    funding_note: 'GWTG-HF was supported in part by GlaxoSmithKline',
    original_reference: 'Original Reference',
    validation_reference: 'Validation Study'
  },

  // Heart Failure Staging Calculator - COMPLETE TRANSLATION IMPLEMENTATION
  heartFailureStaging: {
    title: 'Heart Failure Staging',
    subtitle: 'ACC/AHA Heart Failure Stages A-D • Risk Assessment & Management',
    description: 'ACC/AHA heart failure staging system for risk assessment and management guidance.',
    calculate_button: 'Determine HF Stage',
    risk_category: 'Heart failure stage',
    recommendations: 'Management recommendations',
    low_risk: 'Stage A (At risk)',
    high_risk: 'Stage D (Advanced HF)',

    // Alert section
    alert_title: 'ACC/AHA Heart Failure Staging',
    alert_description: 'Comprehensive staging system for heart failure from risk factors to advanced disease. This validated classification guides evidence-based management and helps predict prognosis.',

    // Step navigation
    step_risk_factors: 'Risk Factors',
    step_structural_disease: 'Structural Disease',
    step_symptoms: 'Symptoms',
    step_advanced_hf: 'Advanced HF',

    // Section headers
    section_stage_a: 'Stage A - Risk Factors Assessment',
    section_stage_a_description: 'At high risk for HF but without structural heart disease or symptoms',
    section_stage_b: 'Stage B - Structural Disease Assessment', 
    section_stage_b_description: 'Structural heart disease without signs or symptoms of HF',
    section_stage_c: 'Stage C - Symptomatic HF Assessment',
    section_stage_c_description: 'Structural heart disease with prior or current symptoms of HF',
    section_stage_d: 'Stage D - Advanced HF Assessment',
    section_stage_d_description: 'Refractory HF requiring specialized interventions',

    // Stage A fields
    field_hypertension: 'Hypertension',
    field_hypertension_description: 'History of high blood pressure',
    field_diabetes: 'Diabetes mellitus',
    field_diabetes_description: 'Type 1 or Type 2 diabetes',
    field_cad: 'Coronary artery disease',
    field_cad_description: 'History of coronary artery disease',
    field_metabolic_syndrome: 'Metabolic syndrome',
    field_metabolic_syndrome_description: 'Cluster of metabolic risk factors',
    field_family_history_hf: 'Family history of heart failure',
    field_family_history_hf_description: 'Family history of cardiomyopathy',
    field_cardiotoxic_therapy: 'History of cardiotoxic therapy',
    field_cardiotoxic_therapy_description: 'Chemotherapy or radiation therapy',
    field_alcohol_abuse: 'History of alcohol abuse',
    field_alcohol_abuse_description: 'Chronic alcohol consumption',

    // Stage B fields
    field_lvef_reduced: 'Reduced left ventricular ejection fraction',
    field_lvef_reduced_description: 'LVEF <50% without symptoms',
    field_wall_motion_abnormalities: 'Regional wall motion abnormalities',
    field_wall_motion_abnormalities_description: 'Segmental wall motion defects',
    field_lv_hypertrophy: 'Left ventricular hypertrophy',
    field_lv_hypertrophy_description: 'Increased LV wall thickness',
    field_valvular_disease: 'Significant valvular disease',
    field_valvular_disease_description: 'Moderate to severe valve disease',

    // Stage C fields
    field_current_hf_symptoms: 'Current heart failure symptoms',
    field_current_hf_symptoms_description: 'Active dyspnea, fatigue, or edema',
    field_previous_hf_symptoms: 'Previous heart failure symptoms',
    field_previous_hf_symptoms_description: 'Prior HF symptoms now resolved',
    field_hf_hospitalizations: 'Prior heart failure hospitalizations',
    field_hf_hospitalizations_description: 'Previous admissions for HF',

    // Stage D fields
    field_refractory_symptoms: 'Refractory symptoms despite optimal therapy',
    field_refractory_symptoms_description: 'Symptoms persist despite maximum medical therapy',
    field_recurrent_hospitalizations: 'Recurrent hospitalizations',
    field_recurrent_hospitalizations_description: 'Multiple recent HF admissions',
    field_chronic_inotropic_support: 'Chronic inotropic support',
    field_chronic_inotropic_support_description: 'Ongoing inotropic medication requirement',
    field_mechanical_support: 'Mechanical circulatory support',
    field_mechanical_support_description: 'LVAD, ECMO, or balloon pump',
    field_transplant_evaluation: 'Heart transplant evaluation',
    field_transplant_evaluation_description: 'Listed or being evaluated for transplant',

    // Button labels
    button_next_structural: 'Next: Structural Disease',
    button_next_symptoms: 'Next: Symptoms',
    button_next_advanced_hf: 'Next: Advanced HF',
    button_back: 'Back',
    button_new_assessment: 'New Assessment',
    button_modify_inputs: 'Modify Inputs',

    // Results section
    results_title: 'Heart Failure Stage Analysis',
    results_stage: 'Stage',
    results_stage_classification: 'Stage Classification',
    results_risk_level: 'Risk Level',
    results_current_progression_risk: 'Current progression risk assessment',
    results_management_focus: 'Management Focus',
    results_prevention: 'Prevention strategies',
    results_monitoring: 'Monitoring and early intervention',
    results_treatment: 'Guideline-directed medical therapy',
    results_advanced_care: 'Advanced heart failure care',
    results_primary_management_approach: 'Primary management approach',
    results_management_recommendations: 'Management Recommendations',
    results_next_steps: 'Next Steps',
    results_staging_system_reference: 'ACC/AHA Heart Failure Staging Reference',

    // Results nested structure for stages
    results: {
      stageA: {
        title: 'Stage A - At Risk',
        description: 'At high risk for heart failure development but without structural heart disease or symptoms',
        recommendations: [
          'Optimal hypertension management per current guidelines',
          'Comprehensive diabetes management with target HbA1c <7%',
          'Evidence-based lipid management and statin therapy',
          'Smoking cessation counseling and support programs',
          'Regular aerobic exercise and weight management',
          'Alcohol moderation and dietary sodium restriction'
        ],
        nextSteps: [
          'Primary care optimization with cardiovascular risk focus',
          'Comprehensive risk factor modification program',
          'Patient education on cardiovascular health',
          'Regular monitoring with annual assessments',
          'Baseline echocardiogram if multiple high-risk factors present'
        ]
      },
      stageB: {
        title: 'Stage B - Structural Disease',
        description: 'Structural heart disease without signs or symptoms of heart failure requiring preventive therapy',
        recommendations: [
          'ACE inhibitor or ARB therapy for cardiac protection',
          'Beta-blocker therapy if prior MI or reduced ejection fraction',
          'Treatment of underlying cardiovascular conditions',
          'Comprehensive risk factor modification program',
          'Regular echocardiographic monitoring for progression',
          'Symptom surveillance and patient education'
        ],
        nextSteps: [
          'Cardiology evaluation for structural heart disease management',
          'Annual or biannual echocardiogram monitoring',
          'Optimal medical therapy initiation and titration',
          'Patient education on heart failure symptoms recognition',
          'Aggressive risk factor management and lifestyle modification'
        ]
      },
      stageC: {
        title: 'Stage C - Symptomatic HF',
        description: 'Symptomatic heart failure with structural heart disease requiring guideline-directed medical therapy',
        recommendations: [
          'Comprehensive guideline-directed medical therapy optimization',
          'ACE inhibitor/ARB/ARNI therapy at maximum tolerated dose',
          'Evidence-based beta-blocker therapy initiation and titration',
          'Diuretics for optimal volume management and symptom control',
          'Device therapy evaluation (ICD/CRT) per current guidelines',
          'Regular monitoring and medication optimization'
        ],
        nextSteps: [
          'Cardiology referral for specialized heart failure management',
          'Comprehensive echocardiographic evaluation and monitoring',
          'Laboratory monitoring and medication adjustment',
          'Patient education and self-care management training',
          'Device therapy consideration and electrophysiology consultation'
        ]
      },
      stageD: {
        title: 'Stage D - Advanced HF',
        description: 'Advanced heart failure with refractory symptoms despite guideline-directed medical therapy requiring specialized interventions',
        recommendations: [
          'Advanced heart failure therapies and specialized care coordination',
          'Mechanical circulatory support evaluation with heart team consultation',
          'Heart transplantation evaluation at qualified center',
          'Palliative care consultation for symptom management',
          'Specialized heart failure center referral for comprehensive care',
          'Clinical trial consideration for experimental therapies'
        ],
        nextSteps: [
          'Immediate advanced heart failure specialist consultation',
          'Comprehensive hemodynamic and functional assessment',
          'Multidisciplinary heart team evaluation',
          'End-of-life planning and advanced directive discussions'
        ]
      }
    },
    
    // Stage reference results
    results_stage_a_reference: 'Stage A - At Risk',
    results_stage_a_description_reference: 'Risk factor modification and prevention',
    results_stage_b_reference: 'Stage B - Structural Disease',
    results_stage_b_description_reference: 'Structural heart disease without symptoms',
    results_stage_c_reference: 'Stage C - Symptomatic HF',
    results_stage_c_description_reference: 'Structural disease with HF symptoms',
    results_stage_d_reference: 'Stage D - Advanced HF',
    results_stage_d_description_reference: 'Refractory HF requiring specialized care',

    // Footer
    results_algorithm_validation_title: 'ACC/AHA Heart Failure Staging',
    results_algorithm_validation_description: '✓ ACC/AHA Guidelines Validated • Evidence-based staging system',
    footer_info: 'Based on ACC/AHA Heart Failure Guidelines • Evidence-based staging system',
    footer_validated: 'ACC/AHA Validated',

    // Creator Section
    creator_insights_title: 'About the Creator',
    creator_name: 'Dr. Sharon Hunt',
    creator_bio: 'Sharon Hunt, MD, is a professor of medicine at Stanford University as well as the Med Center Line. She is a member of the Cardiovascular Institute. Dr. Hunt\'s research focuses on cardiovascular diseases including heart failure and myocardial infarction and is a co-author on many ACC/AHA guidelines.',
    creator_publications_link: 'To view Dr. Sharon Hunt\'s publications, visit',

    // Evidence Section
    evidence_title: 'Evidence & Formula',
    evidence_formula_title: 'FORMULA',
    evidence_stage_a_title: 'Stage A (at risk for heart failure)',
    evidence_stage_a_definition: 'is defined as a patient without symptoms, structural heart disease, or cardiac biomarkers of stretch or injury but who has chronic condition(s) that put them at increased risk. These conditions include HTN, DM, atherosclerotic CVD, metabolic syndrome and obesity, exposure to cardiotoxic drugs, genetic variant carrier for cardiomyopathy, or a positive family history of cardiomyopathy.',
    
    evidence_stage_b_title: 'Stage B (pre-heart failure)',
    evidence_stage_b_definition: 'is defined as evidence of one of the following AND no symptoms or signs of heart failure.',
    evidence_stage_b_structural: '1. Structural heart disease includes:',
    evidence_stage_b_structural_items: 'Reduced left or right ventricular systolic function (ie reduced ejection fraction or reduced strain)\nVentricular hypertrophy\nChamber enlargement\nWall motion abnormalities\nValvular heart disease',
    evidence_stage_b_filling: '2. Evidence of increased filling pressures can be confirmed with:',
    evidence_stage_b_filling_items: 'Invasive hemodynamic measurements or\nNoninvasive imaging such as echocardiography',
    evidence_stage_b_biomarkers: '3. Patients with risk factors AND either',
    evidence_stage_b_biomarkers_items: 'Increased BNP or\nPersistently elevated cardiac troponin',

    evidence_stage_c_title: 'Stage C (symptomatic heart failure)',
    evidence_stage_c_definition: 'is defined as structural heart disease with current or previous symptoms of heart failure.',

    evidence_stage_d_title: 'Stage D (advanced heart failure)',
    evidence_stage_d_definition: 'is defined as marked symptoms of heart failure that interfere with daily life and lead to recurrent hospitalizations, despite goal directed medical therapy (GDMT).',

    evidence_appraisal_title: 'Evidence Appraisal',
    evidence_appraisal_text: 'The ACC/AHA Heart Failure Stages were developed jointly by the American College of Cardiology (ACC) and American Heart Association (AHA) by expert consensus. They were intended to complement, but not replace, the more widely-used New York Heart Association (NYHA) functional classification, since contemporary treatment recommendations did not vary by class.',

    evidence_literature_title: 'Literature',
    evidence_guidelines_title: 'Clinical Practice Guidelines',
    evidence_research_title: 'Research Paper',
    evidence_research_citation: 'Heidenreich PA, Bozkurt B, Aguilar D, et al. 2022 AHA/ACC/HFSA Guideline for the Management of Heart Failure: A Report of the American College of Cardiology/American Heart Association Joint Committee on Clinical Practice Guidelines. Circulation. 2022;145(18):e895-e1032.',

    // New fields for component
    main_title: 'Heart Failure Staging Calculator',
    main_subtitle: 'Advanced ACC/AHA classification system for precise heart failure staging with comprehensive clinical guidance',
    calculate_stage: 'Calculate Heart Failure Stage',
    analyzing_stage: 'Analyzing Heart Failure Stage...',
    
    // Stage A checkbox fields
    stage_a_risk_factors_label: 'Patient with history of hypertension, cardiovascular disease, diabetes, or obesity',
    stage_a_risk_factors_desc: 'Common cardiovascular risk factors that predispose to heart failure development',
    stage_a_cardiotoxins_label: 'Patient using cardiotoxins',
    stage_a_cardiotoxins_desc: 'Chemotherapy agents or radiation therapy with known cardiotoxic effects',
    stage_a_genetic_label: 'Patient with genetic variant for cardiomyopathy or family history of cardiomyopathy',
    stage_a_genetic_desc: 'Hereditary predisposition to heart failure and cardiomyopathy',
    
    // Stage B checkbox fields
    stage_b_structural_label: 'Patient with structural heart disease',
    stage_b_structural_desc: 'Reduced LVEF, wall motion abnormalities, LV hypertrophy, or significant valvular disease',
    stage_b_filling_label: 'Patient with evidence of increased filling pressures',
    stage_b_filling_desc: 'Invasive hemodynamic measurements or noninvasive imaging evidence of elevated pressures',
    stage_b_biomarkers_label: 'Patient with increased natriuretic peptide levels or persistently elevated cardiac troponin',
    stage_b_biomarkers_desc: 'Elevated BNP/NT-proBNP or persistent troponin elevation in absence of competing diagnoses',
    
    // Stage C checkbox field
    stage_c_symptoms_label: 'Patient with current or previous signs/symptoms of heart failure',
    stage_c_symptoms_desc: 'Shortness of breath, dyspnea on exertion, fatigue, reduced exercise tolerance, or fluid retention',
    
    // Stage D checkbox field
    stage_d_advanced_label: 'Patient with marked heart failure symptoms that interfere with daily life and with recurrent hospitalizations despite attempts to optimize guideline-directed medical therapy',
    stage_d_advanced_desc: 'Advanced heart failure requiring specialized care, mechanical support, or transplant evaluation',
    
    // Result descriptions
    stage_a_result_desc: 'At high risk for heart failure development but without structural heart disease or symptoms',
    stage_a_result_desc_low: 'Low risk for heart failure development with focus on primary prevention',
    stage_b_result_desc: 'Structural heart disease without signs or symptoms of heart failure requiring preventive therapy',
    stage_c_result_desc: 'Symptomatic heart failure with structural heart disease requiring guideline-directed medical therapy',
    stage_d_result_desc: 'Advanced heart failure with refractory symptoms despite guideline-directed medical therapy requiring specialized interventions',
    
    // Stage A recommendations
    stage_a_rec_1: 'Optimal hypertension management per current guidelines',
    stage_a_rec_2: 'Comprehensive diabetes management with target HbA1c <7%',
    stage_a_rec_3: 'Evidence-based lipid management and statin therapy',
    stage_a_rec_4: 'Smoking cessation counseling and support programs',
    stage_a_rec_5: 'Regular aerobic exercise and weight management',
    stage_a_rec_6: 'Alcohol moderation and dietary sodium restriction',
    stage_a_rec_low_1: 'Maintain healthy lifestyle with regular physical activity',
    stage_a_rec_low_2: 'Regular cardiovascular health screening and monitoring',
    stage_a_rec_low_3: 'Blood pressure monitoring and management',
    stage_a_rec_low_4: 'Healthy diet with emphasis on fruits, vegetables, and whole grains',
    
    // Stage B recommendations
    stage_b_rec_1: 'ACE inhibitor or ARB therapy for cardiac protection',
    stage_b_rec_2: 'Beta-blocker therapy if prior MI or reduced ejection fraction',
    stage_b_rec_3: 'Treatment of underlying cardiovascular conditions',
    stage_b_rec_4: 'Comprehensive risk factor modification program',
    stage_b_rec_5: 'Regular echocardiographic monitoring for progression',
    stage_b_rec_6: 'Symptom surveillance and patient education',
    
    // Stage C recommendations
    stage_c_rec_1: 'Comprehensive guideline-directed medical therapy optimization',
    stage_c_rec_2: 'ACE inhibitor/ARB/ARNI therapy at maximum tolerated dose',
    stage_c_rec_3: 'Evidence-based beta-blocker therapy initiation and titration',
    stage_c_rec_4: 'Diuretics for optimal volume management and symptom control',
    stage_c_rec_5: 'Device therapy evaluation (ICD/CRT) per current guidelines',
    stage_c_rec_6: 'Regular monitoring and medication optimization',
    
    // Stage D recommendations
    stage_d_rec_1: 'Advanced heart failure therapies and specialized care coordination',
    stage_d_rec_2: 'Mechanical circulatory support evaluation with heart team consultation',
    stage_d_rec_3: 'Heart transplantation evaluation at qualified center',
    stage_d_rec_4: 'Palliative care consultation for symptom management',
    stage_d_rec_5: 'Specialized heart failure center referral for comprehensive care',
    stage_d_rec_6: 'Clinical trial consideration for experimental therapies',
    
    // Stage A next steps
    stage_a_next_1: 'Primary care optimization with cardiovascular risk focus',
    stage_a_next_2: 'Comprehensive risk factor modification program',
    stage_a_next_3: 'Patient education on cardiovascular health',
    stage_a_next_4: 'Regular monitoring with annual assessments',
    stage_a_next_5: 'Baseline echocardiogram if multiple high-risk factors present',
    stage_a_next_low_1: 'Continue routine preventive care',
    stage_a_next_low_2: 'Annual health maintenance and screening',
    stage_a_next_low_3: 'Lifestyle counseling and education',
    stage_a_next_low_4: 'Regular follow-up with primary care provider',
    
    // Stage B next steps
    stage_b_next_1: 'Cardiology evaluation for structural heart disease management',
    stage_b_next_2: 'Annual or biannual echocardiogram monitoring',
    stage_b_next_3: 'Optimal medical therapy initiation and titration',
    stage_b_next_4: 'Patient education on heart failure symptoms recognition',
    stage_b_next_5: 'Aggressive risk factor management and lifestyle modification',
    
    // Stage C next steps
    stage_c_next_1: 'Cardiology referral for specialized heart failure management',
    stage_c_next_2: 'Comprehensive echocardiographic evaluation and monitoring',
    stage_c_next_3: 'Laboratory monitoring and medication adjustment',
    stage_c_next_4: 'Patient education and self-care management training',
    stage_c_next_5: 'Device therapy consideration and electrophysiology consultation',
    
    // Stage D next steps
    stage_d_next_1: 'Immediate advanced heart failure specialist consultation',
    stage_d_next_2: 'Comprehensive hemodynamic and functional assessment',
    stage_d_next_3: 'Multidisciplinary heart team evaluation',
    stage_d_next_4: 'End-of-life planning and advanced directive discussions',
    
    // Result card section
    heart_failure_stage: 'Heart Failure Stage',
    clinical_recommendations: 'Clinical Recommendations',
    next_steps: 'Next Steps',
    
    // Creator section updates
    creator_insights: 'Creator Insights',
    creator_guidance: 'Expert guidance from leading heart failure specialists',
    creator_full_title: 'Stanford University School of Medicine | Heart Failure Specialist',
    creator_description: 'Dr. Hunt is a renowned cardiologist and Professor of Cardiovascular Medicine at Stanford University. She has dedicated her career to advancing heart failure care and has been instrumental in developing evidence-based staging systems that improve patient outcomes through early detection and intervention.',
    view_publications: 'View Publications on PubMed',
    
    // Evidence section updates
    evidence_staging_criteria: 'Evidence & Staging Criteria',
    evidence_subtitle: 'ACC/AHA 2022 Heart Failure Guidelines - Complete Staging Framework',
    evidence_reference: 'Reference:',
    evidence_reference_text: '2022 AHA/ACC/HFSA Guideline for the Management of Heart Failure. Circulation. 2022;145(18):e895-e1032. This classification system enables early intervention and risk stratification to prevent progression and improve outcomes.',
    
    // Management recommendations section
    management_recommendations: 'Management Recommendations',
    management_subtitle: 'Stage-specific therapeutic strategies and clinical interventions',
    
    // Stage titles for management
    stage_a_management_title: 'Risk Factor Management',
    stage_b_management_title: 'Structural Heart Disease Prevention',
    stage_c_management_title: 'Guideline-Directed Medical Therapy',
    stage_d_management_title: 'Advanced Heart Failure Management',
    
    // Clinical note
    clinical_note: 'Clinical Note:',
    clinical_note_text: 'All recommendations should be individualized based on patient characteristics, comorbidities, and clinical judgment. Regular monitoring and medication optimization are essential for optimal outcomes at every stage.',

    // Management Section
    management_title: 'MANAGEMENT',
    management_summary: 'Below is a summary of Class I recommendation statements. This list focuses on goal directed medical therapy (GDMT) and does not contain all guideline statements. Refer to the full guideline text for further details and management options.',

    management_stage_a_title: 'Stage A: Patients at high risk of developing HF because of the presence of conditions that are strongly associated with the development of HF.',
    management_stage_a_htn: 'In patients with HTN, blood pressure should be controlled with GDMT for HTN to prevent symptomatic heart failure. (LOE: A)',
    management_stage_a_dm: 'In patients with type 2 diabetes mellitus and either established CVD or who are at high cardiovascular risk, an SGLT2i should be used to prevent hospitalizations for heart failure. (LOE: A)',
    management_stage_a_lifestyle: 'Healthy lifestyle habits such as regular physical activity, maintaining normal weight, following a healthy diet, and avoiding smoking are helpful to reduce future risk of heart failure. (LOE: B-NR)',
    management_stage_a_cvd: 'In patients with CVD, optimal management is recommended.',
    management_stage_a_cardiotoxic: 'In patients with exposure to cardiotoxic agents, multidisciplinary management is recommended.',
    management_stage_a_genetic: 'For patients who have first-degree relatives with genetic or inherited cardiomyopathies, genetic screening and counseling is recommended.',

    management_stage_b_title: 'Stage B: Patients who have developed structural heart disease that is strongly associated with the development of HF but who have never shown signs or symptoms of HF.',
    management_stage_b_ace: 'In patients with LVEF <40%, treatment with an ACEi is recommended to prevent symptomatic heart failure and reduce mortality. (LOE: A)',
    management_stage_b_statin: 'In patients with a recent or remote history of MI or ACS, statins should be used to prevent symptomatic heart failure and adverse cardiovascular events. (LOE: B-R)',
    management_stage_b_arb: 'In patients with a recent MI and LVEF <40%, treatment with an ARB is recommended if an ACEI is not tolerated. (LOE: A)',
    management_stage_b_beta: 'In patients with LVEF <40% and a recent or remote history of MI or ACS, evidence-based beta blocker therapy is recommended. (LOE: B-R)',
    management_stage_b_icd: 'In patients with an LVEF <30%, >1 year survival, > 40 days post MI, treatment with an ICD is recommended to reduce mortality and for primary prevention of sudden cardiac death. (LOE: B-R)',
    management_stage_b_beta_prevent: 'In patients with LVEF <40%, beta blockers should be used to prevent symptomatic heart failure. (LOE: C-LD)',

    management_stage_c_title: 'Stage C: Patients who have current or prior symptoms of HF associated with underlying structural heart disease.',
    management_stage_c_diuretics: 'In patients who have fluid retention, diuretics are recommended to relieve congestion, improve symptoms, and prevent worsening heart failure. (Level of Evidence: B-NR)',
    management_stage_c_arni: 'In patients with HFrEF and NYHA class II or III symptoms, the use of an ARNi is recommended to reduce morbidity and mortality. (LOE: A)',
    management_stage_c_ace: 'The use of ACEi is beneficial to reduce morbidity and mortality when use of an ARNi is not feasible. (LOE: A)',
    management_stage_c_arb: 'The use of an ARB is recommended only if intolerant to an ACEi or ARNi. (LOE: A)',
    management_stage_c_arni_switch: 'In patients with chronic symptomatic HFrEF NYHA class II or III who are able to tolerate ACEi or ARB, replacement with an ARNi is recommended to further reduce morbidity and mortality. (LOE: B-R)',
    management_stage_c_beta_blocker: 'If a beta blocker is indicated, use of bisoprolol, carvedilol or metoprolol succinate is recommended to reduce mortality and hospitalizations. (LOE: A)',
    management_stage_c_mra: 'In patients with HFrEF and NYHA class II-IV symptoms, spironolactone or eplerenone is recommended to reduce morbidity and mortality. (LOE: A) eGFR should be >30 ml/min/1.73m2 and serum potassium should be <5.0 mEq/L.',
    management_stage_c_sglt2i: 'In patients with symptomatic chronic HFrEF, SGLT2i are recommended to reduce hospitalizations for heart failure and cardiovascular mortality, regardless of the presence or absence of type 2 diabetes. (LOE: A)',
    management_stage_c_hydralazine: 'For patients who self-identify as African American, who have NYHA class III-IV HFrEF, and who are receiving optimal medical therapy, the combination of hydralazine and isosorbide dinitrate is recommended to improve symptoms and reduce morbidity and mortality. (LOE: A)',

    management_stage_d_title: 'Stage D: Patients with advanced structural heart disease and marked symptoms of HF at rest despite maximal medical therapy and who require specialized interventions.',
    management_stage_d_referral: 'In patients with advanced heart failure, timely referral for HF specialty care is recommended (if consistent with patient\'s goals) to review management and advanced HF therapies. (LOE: C-LD)',
    management_stage_d_lvad: 'In select patients with advanced HFrEF with NYHA class IV symptoms who are deemed to be dependent on continuous IV inotropes or temporary MCS, durable LVAD implantation is effective to improve functional status, QOL, and survival. (LOE: A)',
    management_stage_d_transplant: 'For selected patients with advanced HF despite GDMT, cardiac transplantation is indicated to improve survival and QOL. (LOE: C-LD)',
    management_stage_d_assessment: 'In patients hospitalized with HF, severity of congestion and adequacy of perfusion should be assessed to guide triage and initial therapy. (LOE: C-LD).'
  },

  // SHFM Risk Calculator
  shfm: {
    title: 'SHFM Risk Calculator',
    subtitle: 'Seattle Heart Failure Model • Survival Prediction',
    description: 'Comprehensive survival prediction model for heart failure patients incorporating demographics, clinical parameters, laboratory values, and therapy.',
    
    // Step labels
    demographics_step: 'Demographics',
    clinical_step: 'Clinical Data',
    laboratory_step: 'Laboratory',
    therapy_step: 'Therapy',
    
    // Demographics section
    patient_demographics: 'Patient Demographics',
    demographics_description: 'Basic patient characteristics and heart failure classification',
    age_label: 'Age',
    age_placeholder: 'Enter age in years',
    gender_label: 'Gender',
    gender_placeholder: 'Select gender',
    gender_male: 'Male',
    gender_female: 'Female',
    lvef_label: 'Left Ventricular Ejection Fraction (LVEF)',
    lvef_placeholder: 'Enter LVEF percentage',
    nyha_class_label: 'NYHA Functional Class',
    nyha_class_placeholder: 'Select NYHA class',
    nyha_class_1: 'Class I - No limitation',
    nyha_class_2: 'Class II - Slight limitation',
    nyha_class_3: 'Class III - Marked limitation',
    nyha_class_4: 'Class IV - Severe limitation',
    ischemic_etiology_label: 'Ischemic Etiology',
    
    // Clinical parameters section
    clinical_parameters: 'Clinical Parameters',
    clinical_description: 'Vital signs and functional assessment',
    systolic_bp_label: 'Systolic Blood Pressure',
    systolic_bp_placeholder: 'Enter systolic BP',
    peak_vo2_label: 'Peak VO2 (if available)',
    peak_vo2_placeholder: '14.0',
    
    // Laboratory values section
    laboratory_values: 'Laboratory Values',
    laboratory_description: 'Key laboratory markers for risk assessment',
    sodium_label: 'Serum Sodium',
    sodium_placeholder: '140',
    cholesterol_label: 'Total Cholesterol',
    cholesterol_placeholder: '180',
    hemoglobin_label: 'Hemoglobin',
    hemoglobin_placeholder: '12.5',
    lymphocyte_percent_label: 'Lymphocyte Percentage',
    lymphocyte_percent_placeholder: '20',
    uric_acid_label: 'Uric Acid',
    uric_acid_placeholder: '7.0',
    
    // Therapy assessment section
    therapy_assessment: 'Current Therapy Assessment',
    therapy_description: 'Current medications and device therapy',
    ace_inhibitor_label: 'ACE Inhibitor or ARB',
    beta_blocker_label: 'Beta-blocker',
    aldosterone_antagonist_label: 'Aldosterone Antagonist',
    statin_label: 'Statin Therapy',
    allopurinol_label: 'Allopurinol',
    icd_label: 'Implantable Cardioverter Defibrillator (ICD)',
    crt_label: 'Cardiac Resynchronization Therapy (CRT)',
    
    // Button labels
    next_clinical_data: 'Next: Clinical Data',
    next_laboratory_data: 'Next: Laboratory',
    next_therapy_data: 'Next: Therapy',
    calculate_button: 'Calculate SHFM Risk',
    
    // Validation messages
    age_required: 'Age is required',
    age_invalid: 'Age must be between 18 and 120 years',
    gender_required: 'Gender is required',
    lvef_required: 'LVEF is required',
    lvef_invalid: 'LVEF must be between 5% and 80%',
    nyha_class_required: 'NYHA class is required',
    systolic_bp_required: 'Systolic blood pressure is required',
    systolic_bp_invalid: 'Systolic BP must be between 60 and 250 mmHg',
    peak_vo2_required: 'Peak VO2 is required',
    peak_vo2_invalid: 'Peak VO2 must be between 5 and 50 mL/kg/min',
    sodium_required: 'Serum sodium is required',
    sodium_invalid: 'Sodium must be between 120 and 160 mEq/L',
    cholesterol_required: 'Total cholesterol is required',
    cholesterol_invalid: 'Cholesterol must be between 50 and 500 mg/dL',
    hemoglobin_required: 'Hemoglobin is required',
    hemoglobin_invalid: 'Hemoglobin must be between 5 and 20 g/dL',
    lymphocyte_percent_required: 'Lymphocyte percentage is required',
    lymphocyte_percent_invalid: 'Lymphocyte percentage must be between 1% and 50%',
    uric_acid_required: 'Uric acid is required',
    uric_acid_invalid: 'Uric acid must be between 2 and 20 mg/dL'
  },



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