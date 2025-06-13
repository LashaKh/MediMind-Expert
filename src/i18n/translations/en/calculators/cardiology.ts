export default {
  // Common translations
  title: 'Cardiology Calculators',
  description: 'Evidence-based cardiovascular risk assessment and clinical decision support tools',
  category: 'Cardiology',
  
  // Risk Assessment Category (Phase 1)
  riskAssessment: 'Risk Assessment',
  ascvdTitle: 'ASCVD Risk Calculator',
  framinghamTitle: 'Framingham Risk Score',
  reyonldsTitle: 'Reynolds Risk Score',

  // Calculator titles for navigation
  graceTitle: 'GRACE 2.0 Calculator',
  hcmRiskScdTitle: 'HCM Risk-SCD Calculator',
  maggicTitle: 'MAGGIC Calculator',
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
  hcm_risk_scd: {
    title: "HCM Risk-SCD Calculator",
    subtitle: "Sudden Cardiac Death Risk Assessment • Hypertrophic Cardiomyopathy",
    description: "5-year sudden cardiac death risk prediction in patients with hypertrophic cardiomyopathy for ICD decision making.",
    calculate_button: "Calculate HCM Risk-SCD",
    risk_category: "Risk category",
    recommendations: "Clinical recommendations",
    low_risk: "Low risk (<4%)",
    high_risk: "High risk (≥6%)",
    intermediate_risk: "Intermediate risk (4-6%)",
    
    demographics: "Demographics",
    age_label: "Age (years)",
    age_placeholder: "Enter thickness (10-50 mm)",
    gender_label: "Gender",
    gender_male: "Male",
    gender_female: "Female",
    clinical_features: "Clinical Features",
    max_wall_thickness: "Maximum wall thickness (mm)",
    max_wall_thickness_placeholder: "Enter thickness (10-50 mm)",
    left_atrial_size: "Left atrial size (mm)",
    left_atrial_size_placeholder: "Enter size (25-70 mm)",
    max_lvot_gradient: "Maximum LVOT gradient (mmHg)",
    max_lvot_gradient_placeholder: "Enter gradient (0-200 mmHg)",
    risk_factors: "Risk Factors",
    family_history_scd: "Family history of sudden cardiac death",
    non_sustained_vt: "Non-sustained ventricular tachycardia",
    unexplained_syncope: "Unexplained syncope",
    additional_factors: "Additional Risk Factors",
    apical_aneurysm: "Apical aneurysm",
    extensive_lge: "Extensive late gadolinium enhancement (>15% LV mass)",
    exclusions: "Exclusion Criteria",
    prior_scd: "Prior sudden cardiac death",
    prior_icd: "Prior ICD implantation",
    concurrent_vhd: "Concurrent significant valvular heart disease",
    infiltrative_disease: "Infiltrative cardiomyopathy",
    validation_age: "Age must be between 16-80 years",
    validation_gender: "Gender is required",
    validation_wall_thickness: "Wall thickness must be between 10-50 mm",
    validation_atrial_size: "Left atrial size must be between 25-70 mm",
    validation_lvot_gradient: "LVOT gradient must be between 0-200 mmHg",
    five_year_risk: "5-year SCD risk",
    icd_recommendation: "ICD recommendation",
    not_indicated: "Not indicated",
    consider: "Consider",
    reasonable: "Reasonable",
    indicated: "Indicated",
    family_history_scd_label: "Family history of sudden cardiac death",
    non_sustained_vt_label: "Non-sustained ventricular tachycardia",
    unexplained_syncope_label: "Unexplained syncope",
    apical_aneurysm_label: "Apical aneurysm",
    extensive_lge_label: "Extensive late gadolinium enhancement",
    prior_scd_label: "Prior sudden cardiac death",
    prior_icd_label: "Prior ICD implantation",
    concurrent_vhd_label: "Concurrent significant valvular heart disease",
    infiltrative_disease_label: "Infiltrative cardiomyopathy",
    next_clinical_data: "Next: Clinical Data",
    next_risk_factors: "Next: Risk Factors",
    next_exclusions: "Next: Exclusions",
    traditional_risk_factors: "Traditional Risk Factors",
    advanced_risk_markers: "Advanced Risk Markers",
    calculator_exclusions: "Calculator Exclusions"
  },

  // ASCVD Risk Calculator
  ascvd: {
    title: 'ASCVD Risk Calculator',
    subtitle: '10-Year Atherosclerotic Cardiovascular Disease Risk Assessment',
    description: 'ACC/AHA Pooled Cohort Equations to calculate 10-year risk of first major ASCVD event (MI, CHD death, or stroke).',
    calculate_button: "Calculate ASCVD Risk",
    risk_category: "Risk category",
    recommendations: "Clinical recommendations",
    low_risk: "Low risk (<5%)",
    high_risk: "High risk (≥20%)",
    intermediate_risk: "Intermediate risk (5-20%)",
    
    age_label: 'Age (years)',
    age_placeholder: 'Enter age (20-79 years)',
    sex_label: 'Sex',
    sex_placeholder: 'Select sex...',
    sex_male: 'Male',
    sex_female: 'Female',
    race_label: 'Race/Ethnicity',
    race_placeholder: 'Select race...',
    race_white: 'White',
    race_african_american: 'African American',
    race_other: 'Other',
    total_cholesterol_label: 'Total cholesterol (mg/dL)',
    total_cholesterol_placeholder: 'Enter total cholesterol (130-320)',
    hdl_cholesterol_label: 'HDL cholesterol (mg/dL)',
    hdl_cholesterol_placeholder: 'Enter HDL cholesterol (20-100)',
    systolic_bp_label: 'Systolic blood pressure (mmHg)',
    systolic_bp_placeholder: 'Enter systolic pressure (90-200)',
    on_htn_meds_label: 'Currently on blood pressure medication',
    diabetes_label: 'Diabetes mellitus',
    smoker_label: 'Current smoker',
    validation_age: 'Age must be 20-79 years for ASCVD risk calculation',
    validation_sex: 'Sex is required',
    validation_race: 'Race is required for accurate risk calculation',
    validation_total_cholesterol: 'Total cholesterol must be between 130-320 mg/dL',
    validation_hdl_cholesterol: 'HDL cholesterol must be between 20-100 mg/dL',
    validation_systolic_bp: 'Systolic blood pressure must be between 90-200 mmHg',
    ten_year_risk: '10-Year ASCVD Risk',
    lifetime_risk: 'Lifetime risk',
    statin_benefit: 'Statin therapy benefit',
    bp_control_benefit: 'Blood pressure control benefit',
    smoking_cessation_benefit: 'Smoking cessation benefit',
    aspirin_benefit: 'Aspirin therapy benefit',
    demographics_section: "Demographics",
    lab_values_section: "Lab Values",
    risk_factors_section: "Risk Factors"
  },

  // GRACE 2.0 Risk Calculator
  grace: {
    title: "GRACE 2.0 Risk Calculator",
    subtitle: "Acute Coronary Syndrome Risk Assessment",
    description: "Global Registry of Acute Coronary Events - risk stratification for patients with NSTEMI/UA and STEMI.",
    calculate_button: "Calculate GRACE Score",
    risk_category: "Risk category",
    recommendations: "Clinical recommendations",
    low_risk: "Low risk (<109)",
    high_risk: "High risk (>140)",
    intermediate_risk: "Intermediate risk (109-140)",
    
    // Patient demographics
    age_label: "Age (years)",
    age_placeholder: "Enter patient age",
    heart_rate_label: "Heart rate (bpm)",
    heart_rate_placeholder: "Enter heart rate",
    systolic_bp_label: "Systolic blood pressure (mmHg)",
    systolic_bp_placeholder: "Enter systolic pressure",
    creatinine_label: "Serum creatinine (mg/dL)",
    creatinine_placeholder: "Enter creatinine level",
    
    // Clinical characteristics
    killip_class_label: "Killip classification",
    killip_class_1: "Class I (no heart failure)",
    killip_class_2: "Class II (mild heart failure, rales)",
    killip_class_3: "Class III (pulmonary edema)",
    killip_class_4: "Class IV (cardiogenic shock)",
    
    cardiac_arrest_label: "Cardiac arrest at admission",
    st_deviation_label: "ST segment deviation",
    elevated_markers_label: "Elevated cardiac markers",
    
    // Section headers
    demographics_section: "Patient Demographics",
    clinical_section: "Clinical Presentation",
    labs_section: "Laboratory Values",
    
    // Results
    in_hospital_mortality: "In-hospital mortality",
    one_year_mortality: "1-year mortality",
    invasive_strategy: "Invasive strategy",
    recommendation: "Treatment recommendation",
    
    // Validation messages
    age_error: "Age must be between 18-120 years",
    heart_rate_error: "Heart rate must be between 30-300 bpm",
    systolic_bp_error: "Systolic blood pressure must be between 60-300 mmHg",
    creatinine_error: "Creatinine must be between 0.3-15.0 mg/dL"
  },

  // DAPT Score Calculator - COMPLETE TRANSLATION
  dapt: {
    title: 'DAPT Score Calculator',
    subtitle: 'Dual Antiplatelet Therapy Duration • Risk-Benefit Assessment',
    description: "Risk-benefit assessment of extended dual antiplatelet therapy duration after PCI.",
    
    // Alert section
    therapy_management_tool: "Therapy Management Tool",
    tool_description: "DAPT Score Calculator helps determine optimal dual antiplatelet therapy duration after percutaneous coronary intervention (PCI) by balancing ischemic and bleeding risks.",
    study_validated: "DAPT Study Validated",
    
    // Progress steps
    patient_profile: "Patient Profile",
    risk_assessment: "Risk Assessment", 
    dapt_analysis: "DAPT Analysis",
    
    // Step 1: Demographics
    demographics_section: "Patient Demographics & Procedure Details",
    demographics_description: "Enter basic patient information and procedural details",
    age_label: "Age",
    age_help: "Patient age in years (affects bleeding risk calculation)",
    age_error: "Age must be between 18-120 years",
    stent_diameter_label: "Stent Diameter",
    stent_diameter_help: "Smallest stent diameter used during PCI procedure",
    stent_diameter_error: "Stent diameter must be between 1-10 mm",
    next_risk_factors: "Next: Risk Factors",
    
    // Step 2: Risk factors
    risk_factors_section: "Clinical Risk Factors",
    risk_factors_description: "Select all applicable clinical risk factors for this patient",
    cigarette_smoking: "Cigarette Smoking",
    cigarette_smoking_desc: "Current smoker or quit within past year",
    diabetes_mellitus: "Diabetes Mellitus",
    diabetes_mellitus_desc: "Type 1 or Type 2 diabetes requiring medication",
    mi_at_presentation: "MI at Presentation",
    mi_at_presentation_desc: "STEMI or NSTEMI as indication for current PCI",
    prior_pci_mi: "Prior PCI or MI",
    prior_pci_mi_desc: "Previous percutaneous coronary intervention or myocardial infarction",
    paclitaxel_stent: "Paclitaxel-Eluting Stent",
    paclitaxel_stent_desc: "Use of paclitaxel-eluting drug-eluting stent",
    chf_lvef: "CHF or LVEF <30%",
    chf_lvef_desc: "Congestive heart failure or left ventricular ejection fraction <30%",
    next_specialized_factors: "Next: Specialized Factors",
    
    // Step 3: Specialized factors
    specialized_factors_section: "Specialized Procedural Factors",
    specialized_factors_description: "Additional procedural and anatomical considerations",
    vein_graft_pci: "Vein Graft PCI",
    vein_graft_pci_desc: "PCI performed on saphenous vein graft or other bypass graft",
    
    // Calculation button
    calculate_button: "Calculate DAPT Score",
    
    // Results
    score_analysis: "DAPT Score Analysis",
    score_points: "{score} points",
    ischemic_benefit: "Ischemic Benefit",
    bleeding_risk: "Bleeding Risk",
    net_benefit: "Net Clinical Benefit",
    
    // Risk levels
    high_risk: "High",
    intermediate_risk: "Intermediate", 
    low_risk: "Low",
    
    // Risk descriptions
    mace_reduction: "{reduction}% MACE reduction",
    bleeding_increase: "{increase}% bleeding increase",
    
    // Net benefit categories
    favorable_benefit: "Favorable",
    uncertain_benefit: "Uncertain",
    unfavorable_benefit: "Unfavorable",
    benefits_outweigh_risks: "Benefits outweigh risks",
    requires_individual_assessment: "Requires individualized assessment",
    risks_outweigh_benefits: "Risks outweigh benefits",
    assessment_required: "Assessment Required",
    clinical_evaluation_needed: "Clinical evaluation needed",
    
    // Net benefit descriptions
    net_benefit_strong: "Strong net clinical benefit - ischemic risk reduction substantially outweighs bleeding risk",
    net_benefit_modest: "Modest net clinical benefit with careful patient selection", 
    net_benefit_harm: "Net clinical harm - bleeding risk outweighs ischemic benefit",
    net_benefit_modest_uncertain: "Modest benefit with uncertainty - individualized assessment recommended",
    net_benefit_neutral: "Neutral net benefit - requires careful individual consideration",
    net_benefit_unfavorable: "Unfavorable balance - bleeding risk likely outweighs benefit",
    net_benefit_harm_elderly: "Net harm in elderly - high bleeding risk with limited ischemic benefit",
    net_benefit_neutral_unfavorable: "Neutral to unfavorable - limited ischemic benefit",
    
    // Recommendations
    recommendation_extended_strongly: "Extended DAPT strongly recommended - high ischemic benefit with acceptable bleeding risk",
    recommendation_extended_may_benefit: "Extended DAPT may provide benefit - consider individualized assessment",
    recommendation_not_recommended_bleeding: "Extended DAPT not recommended due to excessive bleeding risk",
    recommendation_individualized_assessment: "Individualized assessment recommended - benefits and risks are balanced",
    recommendation_careful_consideration: "Careful consideration needed - uncertain net benefit",
    recommendation_not_recommended: "Extended DAPT not recommended - unfavorable risk-benefit ratio",
    recommendation_not_recommended_limited: "Extended DAPT not recommended - limited ischemic benefit",
    
    // Duration guidance
    duration_18_30_months: "Consider 18-30 months of DAPT with close monitoring",
    duration_18_months_monitoring: "Consider 18 months with enhanced bleeding monitoring",
    duration_12_months_early: "Standard 12 months, consider early discontinuation if bleeding occurs",
    duration_12_18_individualized: "12-18 months based on individualized risk assessment",
    duration_12_months_rationale: "Standard 12 months unless compelling rationale for extension",
    duration_12_months_early_consideration: "Standard 12 months with early discontinuation consideration",
    duration_12_months_shorter: "Standard 12 months or shorter if high bleeding risk",
    
    // Clinical considerations
    consideration_advanced_age: "Advanced age (≥75 years) significantly increases bleeding risk",
    consideration_moderate_age: "Moderate age-related bleeding risk (65-74 years)",
    consideration_diabetes: "Diabetes increases both ischemic and bleeding risk",
    consideration_mi_presentation: "Recent MI increases ischemic risk and DAPT benefit",
    consideration_small_vessel: "Small vessel PCI (<3mm) increases risk of stent thrombosis",
    consideration_heart_failure: "Heart failure increases both ischemic and bleeding risk",
    consideration_paclitaxel_stent: "Paclitaxel-eluting stents may benefit from extended DAPT",
    consideration_vein_graft: "Vein graft PCI has unique risk profile requiring individualized approach",
    
    // Duration recommendation section
    duration_recommendation: "Duration Recommendation",
    clinical_considerations: "Clinical Considerations",
    
    // Interpretation guide
    interpretation_guide: "DAPT Score Interpretation Guide",
    score_high: "Score ≥2 (High Benefit)",
    score_high_desc: "Likely to benefit from extended DAPT duration",
    score_intermediate: "Score 1 (Intermediate Benefit)", 
    score_intermediate_desc: "May benefit from extended DAPT with careful assessment",
    score_low: "Score ≤0 (Low/No Benefit)",
    score_low_desc: "Limited benefit from extended DAPT, bleeding risk may outweigh benefit",
    
    // Interpretations
    interpretation_high: "High benefit patient (Score: {score}) - Extended DAPT likely beneficial",
    interpretation_intermediate: "Intermediate benefit patient (Score: {score}) - Consider extended DAPT",
    interpretation_low: "Low benefit patient (Score: {score}) - Extended DAPT may be harmful",
    
    // Enhanced algorithm
    enhanced_algorithm: "Enhanced Algorithm Validation",
    algorithm_validation: "This calculator incorporates age-adjusted bleeding risk assessment and evidence-based recommendations from the DAPT Study for optimal clinical decision-making.",
    
    // Action buttons
    new_assessment: "New Assessment",
    modify_inputs: "Modify Inputs"
  },

  // TIMI Risk Calculator
  timi: {
    title: "TIMI Risk Score Calculator",
    subtitle: "Unstable Angina/NSTEMI Risk Assessment",
    description: "Thrombolysis in Myocardial Infarction risk score for patients with unstable angina or NSTEMI.",
    
    // Emergency alert
    emergency_tool: "Emergency Risk Assessment Tool",
    tool_description: "TIMI Risk Score for rapid evaluation of patients with unstable angina or NSTEMI. This validated tool helps stratify risk and guide management decisions in the emergency setting.",
    
    // Step labels
    patient_info: "Patient Info",
    clinical_factors: "Clinical Factors",
    
    // Section headers
    demographics_section: "Demographics",
    clinical_assessment: "Clinical Assessment",
    clinical_assessment_description: "Select all clinical factors that apply to this patient:",
    risk_factors_section: "Risk Factors",
    clinical_section: "Clinical Presentation",
    
    // Demographics
    age_label: "Age ≥65 years",
    age_help: "Patients 65 years or older receive 1 point",
    age_error: "Age must be between 18-120 years",
    
    // Risk factors
    coronary_risk_factors: "Coronary artery disease risk factors",
    risk_factors_help: "Number of CAD risk factors (0-3+)",
    risk_factors_detail: "Risk factors include: family history of CAD, hypertension, hypercholesterolemia, diabetes mellitus, current smoking",
    
    cad_risk_factors_label: "≥3 CAD risk factors",
    known_cad_label: "Known CAD (stenosis ≥50%)",
    known_cad: "Known coronary artery disease",
    
    aspirin_use_label: "Aspirin use in prior 7 days",
    aspirin_use: "Aspirin use in prior 7 days",
    
    severe_angina_label: "Severe angina (≥2 episodes in 24h)",
    severe_angina: "Severe anginal symptoms",
    
    st_deviation_label: "ST deviation ≥0.5mm",
    st_deviation: "ST segment deviation ≥0.5mm",
    
    elevated_markers_label: "Elevated cardiac markers",
    elevated_biomarkers: "Elevated cardiac biomarkers",
    
    // Navigation
    next_clinical_factors: "Next: Clinical Factors",
    
    // Results
    score_analysis: "TIMI Risk Score Analysis",
    timi_score: "TIMI Score",
    fourteen_day_breakdown: "14-Day Risk Breakdown",
    fourteen_day_risk: "14-day risk",
    mortality: "Mortality",
    myocardial_infarction: "Myocardial Infarction",
    urgent_revascularization: "Urgent Revascularization",
    
    composite_endpoint: "Composite endpoint",
    death_mi_revascularization: "Death, MI, or urgent revascularization",
    risk_category: "Risk category",
    management_strategy: "Management strategy",
    management_urgency: "Management Urgency",
    recommended_timeframe: "Recommended timeframe:",
    
    // Time frames
    timeframe_under_24: "< 24 hours",
    timeframe_24_48: "24-48 hours",
    timeframe_24_72: "24-72 hours",
    
    // Risk categories
    low_risk: "Low risk (0-2 points)",
    intermediate_risk: "Intermediate risk (3-4 points)",
    high_risk: "High risk (5-7 points)",
    
    // Management recommendations
    conservative_management: "Conservative management",
    routine_management: "Routine Management",
    early_invasive_strategy: "Early invasive strategy",
    early_intervention: "Early Intervention",
    urgent_invasive_strategy: "Urgent invasive strategy",
    urgent_management: "Urgent Management",
    
    // Score components
    score_components: "Score Components",
    age_component: "Age ≥65 years",
    cad_risk_factors_component: "≥3 CAD risk factors",
    known_cad_component: "Known CAD (≥50% stenosis)",
    aspirin_component: "Aspirin use (prior 7 days)",
    angina_component: "Severe angina (≥2 episodes/24h)",
    st_component: "ST deviation ≥0.5mm",
    biomarkers_component: "Elevated cardiac markers",
    
    // Clinical strategy
    clinical_strategy: "Clinical Management Strategy",
    
    // Action buttons
    calculate_button: "Calculate TIMI Score",
    new_assessment: "New Assessment",
    modify_inputs: "Modify Inputs",
    
    // Footer
    based_on_timi: "Based on TIMI Risk Score",
    clinically_validated: "Clinically validated risk assessment tool",
    
    // Interpretations (dynamic)
    interpretation_low: "Low risk patient with {risk}% 14-day risk of adverse outcomes",
    interpretation_intermediate: "Intermediate risk patient with {risk}% 14-day risk of adverse outcomes",
    interpretation_high: "High risk patient with {risk}% 14-day risk of adverse outcomes",
    
    // Recommendations (dynamic)
    recommendation_low_0: "Conservative management with medical therapy",
    recommendation_low_1: "Conservative management with medical therapy",
    recommendation_low_2: "Conservative management with close monitoring",
    recommendation_intermediate_3: "Consider early invasive strategy within 24-48 hours",
    recommendation_intermediate_4: "Early invasive strategy recommended within 24 hours",
    recommendation_high_5: "Urgent invasive strategy within 24 hours",
    recommendation_high_6: "Urgent invasive strategy within 12-24 hours",
    recommendation_high_7: "Immediate invasive strategy - highest risk",
    
    // Risk factor descriptions
    known_cad_desc: "Prior catheterization showing ≥50% stenosis in any major coronary vessel",
    aspirin_use_desc: "Aspirin use within 7 days before hospital presentation",
    severe_angina_desc: "Two or more anginal episodes within 24 hours before presentation",
    st_deviation_desc: "ST segment changes ≥0.5mm on admission ECG",
    elevated_biomarkers_desc: "Elevated troponin, CK-MB, or other cardiac markers"
  },

  // ADDING/ENSURING ENTRIES FOR MAIN CALCULATOR PAGE CARD DISPLAY
  atrial_fibrillation: {
    title: 'Atrial Fibrillation Risk Assessment',
    subtitle: 'CHA₂DS₂-VASc stroke risk and HAS-BLED bleeding risk • Comprehensive AF management',
    
    // Component header and description
    component_title: 'Atrial Fibrillation Risk Assessment',
    component_subtitle: 'CHA₂DS₂-VASc stroke risk and HAS-BLED bleeding risk • Comprehensive AF management',
    
    // Alert section
    alert_title: 'Comprehensive Atrial Fibrillation Risk Assessment',
    alert_description: 'Evidence-based stroke and bleeding risk assessment for patients with non-valvular atrial fibrillation. Guide anticoagulation therapy decisions with balanced benefit-risk analysis.',
    alert_badge: 'Validated by ACC/AHA/ESC Guidelines - Advanced Risk Analysis',
    
    // Tab labels
    tab_cha2ds2vasc: 'CHA₂DS₂-VASc',
    tab_cha2ds2vasc_subtitle: '(Stroke Risk)',
    tab_hasbled: 'HAS-BLED',
    tab_hasbled_subtitle: '(Bleeding Risk)',
    
    // CHA₂DS₂-VASc section
    cha2ds2vasc: {
      title: 'CHA₂DS₂-VASc Score',
      description: 'Stroke risk assessment in non-valvular atrial fibrillation',
      
      // Form fields
      age_label: 'Age (years)',
      age_placeholder: '65',
      age_tooltip: 'Age 65-74 = 1 point, Age ≥75 = 2 points',
      
      sex_label: 'Sex',
      sex_placeholder: 'Select...',
      sex_tooltip: 'Female sex = 1 point',
      sex_male: 'Male',
      sex_female: 'Female',
      
      // Risk factors
      risk_factors_title: 'Risk Factors (1 point each)',
      chf_label: 'Congestive heart failure/LV dysfunction',
      hypertension_label: 'Hypertension',
      diabetes_label: 'Diabetes mellitus',
      vascular_disease_label: 'Vascular disease (MI, PAD, aortic plaques)',
      
      // High-risk factors
      high_risk_title: 'High-Risk Factor (2 points)',
      stroke_tia_label: 'Previous stroke, TIA, or thromboembolism',
      
      // Buttons
      calculate_button: 'Calculate Score',
      reset_button: 'Reset',
      
      // Results
      score_label: 'CHA₂DS₂-VASc Score',
      annual_stroke_risk: 'Annual stroke risk',
      risk_category: 'Risk category',
      recommendation: 'Recommendation'
    },
    
    // HAS-BLED section
    hasbled: {
      title: 'HAS-BLED Score',
      description: 'Bleeding risk assessment during anticoagulation therapy',
      
      // Risk factors
      risk_factors_title: 'Bleeding Risk Factors (1 point each)',
      hypertension_label: 'Uncontrolled hypertension (systolic BP >160 mmHg)',
      abnormal_renal_label: 'Abnormal renal function (dialysis, transplant, creatinine >200 μmol/L)',
      abnormal_liver_label: 'Abnormal liver function (cirrhosis, bilirubin >2x normal, ALT/AST >3x normal)',
      stroke_label: 'Stroke history',
      bleeding_label: 'Bleeding history or predisposition',
      labile_inr_label: 'Labile INR (unstable/high INR, <60% time in therapeutic range)',
      elderly_label: 'Elderly (>65 years)',
      drugs_label: 'Drugs or alcohol (antiplatelet agents, NSAIDs)',
      alcohol_label: 'Alcohol (≥8 drinks per week)',
      
      // Buttons
      calculate_button: 'Calculate Score',
      reset_button: 'Reset',
      
      // Results
      score_label: 'HAS-BLED Score',
      annual_bleeding_risk: 'Annual bleeding risk',
      risk_category: 'Risk category',
      recommendation: 'Recommendation'
    },
    
    // Common labels
    score_points: '{score} point(s)',
    risk_percentage: '{risk}% per year',
    
    // Validation messages
    validation: {
      age_required: 'Age is required',
      age_range: 'Age must be between 18-120 years',
      sex_required: 'Sex selection is required'
    }
  },

  // CHA2DS2-VASc Calculator - UPDATED TO PATTERN COMPLIANCE
  chads_vasc: {
    title: "CHA2DS2-VASc Calculator",
    subtitle: "Stroke risk assessment in atrial fibrillation",
    description: "Risk stratification for stroke in patients with non-valvular atrial fibrillation.",
    calculate_button: "Calculate CHA2DS2-VASc",
    risk_category: "Risk category",
    recommendations: "Clinical recommendations",
    low_risk: "Low risk (0 points)",
    high_risk: "High risk (≥2 points)",
    
    // Risk factors
    congestive_heart_failure_label: "Congestive heart failure",
    hypertension_label: "Hypertension",
    age_75_label: "Age ≥75 years",
    diabetes_label: "Diabetes mellitus",
    stroke_tia_label: "Previous stroke/TIA",
    vascular_disease_label: "Vascular disease",
    age_65_74_label: "Age 65-74 years",
    female_sex_label: "Female sex",
    
    // Section headers
    risk_factors: "Risk Factors",
    
    // Results
    chads_vasc_score: "CHA2DS2-VASc Score",
    annual_stroke_risk: "Annual stroke risk",
    anticoagulation_recommendation: "Anticoagulation recommendation",
    
    // Recommendations
    no_anticoagulation: "Anticoagulation not indicated",
    consider_anticoagulation: "Consider anticoagulation",
    anticoagulation_recommended: "Anticoagulation recommended"
  },

  // HAS-BLED Calculator - UPDATED TO PATTERN COMPLIANCE
  has_bled: {
    title: "HAS-BLED Calculator",
    subtitle: "Bleeding risk assessment during anticoagulation therapy",
    description: "Assessment of major bleeding risk in AF patients receiving anticoagulants.",
    calculate_button: "Calculate HAS-BLED",
    risk_category: "Risk category",
    recommendations: "Clinical recommendations",
    low_risk: "Low risk (0-2 points)",
    high_risk: "High risk (≥3 points)",
    
    // Risk factors
    hypertension_label: "Uncontrolled hypertension",
    abnormal_renal_function_label: "Abnormal renal function",
    abnormal_liver_function_label: "Abnormal liver function",
    stroke_label: "Previous stroke",
    bleeding_history_label: "Bleeding history",
    labile_inr_label: "Labile INR",
    elderly_label: "Elderly (>65 years)",
    drugs_alcohol_label: "Drugs/alcohol",
    
    // Section headers
    risk_factors: "Risk Factors",
    
    // Results
    has_bled_score: "HAS-BLED Score",
    annual_bleeding_risk: "Annual bleeding risk",
    clinical_recommendation: "Clinical recommendations"
  },

  // CHADS2 Calculator - UPDATED TO PATTERN COMPLIANCE
  chads2: {
    title: "CHADS2 Calculator",
    subtitle: "Classic stroke risk assessment in atrial fibrillation",
    description: "Original stroke risk stratification scale for non-valvular AF.",
    calculate_button: "Calculate CHADS2",
    risk_category: "Risk category",
    recommendations: "Clinical recommendations",
    low_risk: "Low risk (0 points)",
    high_risk: "High risk (≥2 points)",
    
    // Risk factors
    congestive_heart_failure_label: "Congestive heart failure",
    hypertension_label: "Hypertension",
    age_75_label: "Age ≥75 years",
    diabetes_label: "Diabetes mellitus",
    stroke_tia_label: "Previous stroke/TIA",
    
    // Section headers
    risk_factors: "Risk Factors",
    
    // Results
    chads2_score: "CHADS2 Score",
    annual_stroke_risk: "Annual stroke risk",
    anticoagulation_recommendation: "Anticoagulation recommendation"
  },
  
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

  // MAGGIC Risk Calculator
  maggic: {
    title: 'MAGGIC Risk Calculator',
    subtitle: 'Meta-Analysis Global Group In Chronic Heart Failure • 1-3 Year Mortality Risk',
    description: 'Evidence-based prognostic tool for chronic heart failure mortality risk using large-scale meta-analysis data.',
    
    // Alert section
    alert_title: 'MAGGIC Risk Assessment Tool',
    alert_description: 'Meta-Analysis Global Group in Chronic Heart Failure (MAGGIC) risk calculator provides evidence-based mortality prediction for patients with chronic heart failure. This tool is validated across diverse patient populations and helps guide clinical decision-making and prognosis discussions.',
    
    // Step labels
    demographics_step: 'Demographics',
    clinical_step: 'Clinical Assessment',
    therapy_step: 'Therapy Assessment',
    
    // Demographics section
    patient_demographics: 'Patient Demographics',
    demographics_description: 'Basic patient demographic and clinical characteristics',
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
    
    // Clinical assessment section
    clinical_assessment: 'Clinical Assessment',
    clinical_description: 'Current vital signs, laboratory values, and comorbidity status',
    systolic_bp_label: 'Systolic Blood Pressure',
    systolic_bp_placeholder: 'Enter systolic BP',
    bmi_label: 'Body Mass Index (BMI)',
    bmi_placeholder: 'Enter BMI',
    creatinine_label: 'Serum Creatinine',
    creatinine_placeholder: 'Enter creatinine level',
    comorbidities_section: 'Comorbidities',
    diabetes_label: 'Diabetes Mellitus',
    copd_label: 'Chronic Obstructive Pulmonary Disease (COPD)',
    first_diagnosis_label: 'First HF Diagnosis (within 18 months)',
    
    // Therapy assessment section
    therapy_assessment: 'Current Therapy Assessment',
    therapy_description: 'Current guideline-directed medical therapy status',
    gdmt_section: 'Guideline-Directed Medical Therapy',
    beta_blocker_label: 'Beta-blocker therapy',
    ace_inhibitor_label: 'ACE inhibitor or ARB therapy',
    
    // Button labels
    next_clinical_assessment: 'Next: Clinical Assessment',
    next_therapy_assessment: 'Next: Therapy Assessment',
    calculate_maggic_risk: 'Calculate MAGGIC Risk',
    new_assessment_button: 'New Assessment',
    
    // Validation messages
    validation_age: 'Please enter a valid age between 18 and 100 years',
    validation_gender: 'Please select gender',
    validation_nyha_class: 'Please select NYHA functional class',
    validation_lvef: 'Please enter a valid LVEF between 10% and 80%',
    validation_systolic_bp: 'Please enter a valid systolic BP between 70 and 250 mmHg',
    validation_bmi: 'Please enter a valid BMI between 15 and 50 kg/m²',
    validation_creatinine: 'Please enter a valid creatinine between 0.5 and 10.0 mg/dL',
    
    // Results section
    results_title: 'MAGGIC Risk Assessment Results',
    one_year_mortality: '1-Year Mortality Risk',
    three_year_mortality: '3-Year Mortality Risk',
    risk_stratification_title: 'Risk Stratification Categories',
    low_risk_category: 'Low Risk (<10% 1-year)',
    intermediate_risk_category: 'Intermediate Risk (10-20% 1-year)',
    high_risk_category: 'High Risk (20-35% 1-year)',
    very_high_risk_category: 'Very High Risk (>35% 1-year)',
    mortality_rates_note: '* Mortality rates based on MAGGIC consortium meta-analysis of >39,000 patients',
    recommendations_title: 'Clinical Management Recommendations',
    algorithm_validation_title: 'MAGGIC Algorithm Validation',
    algorithm_validation_text: '✓ Validated in >39,000 HF patients • Meta-analysis derived • Comprehensive risk assessment'
  },

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
    }
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
    footer_validated: 'ACC/AHA Validated'
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

  // PRECISE-DAPT Calculator - COMPLETE TRANSLATION IMPLEMENTATION
  precise_dapt: {
    title: 'PRECISE-DAPT Bleeding Risk Calculator',
    subtitle: 'Bleeding Risk Assessment • DAPT Duration Guidance',
    description: 'Prediction of bleeding risk associated with dual antiplatelet therapy to guide optimal duration after PCI.',
    
    // Tool description
    bleeding_assessment_tool: 'Bleeding Risk Assessment Tool',
    tool_description: 'PRECISE-DAPT Calculator predicts bleeding risk associated with dual antiplatelet therapy (DAPT) to guide optimal duration selection after percutaneous coronary intervention. This validated tool balances bleeding safety with ischemic protection.',
    
    // Step navigation
    patient_labs: 'Patient Labs',
    bleeding_history: 'Bleeding History',
    
    // Step 1: Demographics & Lab Values
    demographics_labs_section: 'Patient Demographics and Laboratory Values',
    laboratory_description: 'Enter patient age and key laboratory parameters that influence bleeding risk',
    
    // Form fields
    age_label: 'Age',
    age_error: 'Age must be between 18-120 years',
    
    creatinine_label: 'Serum Creatinine',
    creatinine_unit: 'mg/dL',
    creatinine_error: 'Creatinine must be between 0.5-15.0 mg/dL',
    
    hemoglobin_label: 'Hemoglobin',
    hemoglobin_unit: 'g/dL',
    hemoglobin_error: 'Hemoglobin must be between 5.0-20.0 g/dL',
    
    white_blood_count_label: 'White Blood Cell Count',
    white_blood_count_unit: '×10³/μL',
    white_blood_count_error: 'White blood count must be between 1.0-50.0 ×10³/μL',
    
    // Step 2: Bleeding History
    bleeding_history_section: 'Bleeding History Assessment',
    bleeding_history_description: 'Prior bleeding history is a strong predictor of future bleeding risk',
    
    previous_bleed: 'Previous Bleeding History',
    previous_bleed_desc: 'History of major bleeding requiring hospitalization, transfusion, or surgery',
    
    // Navigation buttons
    next_bleeding_history: 'Next: Bleeding History',
    calculate_button: 'Calculate PRECISE-DAPT Score',
    
    // Results section
    bleeding_risk_analysis: 'PRECISE-DAPT Bleeding Risk Analysis',
    score_points: '{score} points',
    
    // Risk categories and interpretations
    bleeding_risk: 'Bleeding Risk',
    major_bleeding: 'Major Bleeding Risk',
    safe_duration: 'Safe Duration',
    annual_major_bleeding: 'Annual major bleeding risk',
    overall_bleeding_risk: 'Overall bleeding risk at 12 months: {risk}%',
    recommended_dapt_duration: 'Recommended DAPT duration',
    
    // Risk levels
    low_risk: 'Low Risk',
    intermediate_risk: 'Intermediate Risk',
    high_risk: 'High Risk',
    
    // Interpretation messages
    interpretation_low: 'Low bleeding risk ({risk}% at 12 months) - Extended DAPT may be considered',
    interpretation_intermediate: 'Intermediate bleeding risk ({risk}% at 12 months) - Standard DAPT with careful monitoring',
    interpretation_high: 'High bleeding risk ({risk}% at 12 months) - Consider shortened DAPT duration',
    
    // Risk factors
    contributing_risk_factors: 'Contributing Risk Factors',
    risk_factor_advanced_age: 'Advanced age (≥75 years) - Significantly increased bleeding risk',
    risk_factor_elderly_age: 'Elderly age (65-74 years) - Moderately increased bleeding risk',
    risk_factor_severe_renal: 'Severe renal impairment (Creatinine ≥2.0 mg/dL) - High bleeding risk',
    risk_factor_moderate_renal: 'Moderate renal impairment (Creatinine 1.5-1.9 mg/dL) - Increased bleeding risk',
    risk_factor_mild_renal: 'Mild renal impairment (Creatinine 1.2-1.4 mg/dL) - Mildly increased bleeding risk',
    risk_factor_severe_anemia: 'Severe anemia (Hemoglobin <10 g/dL) - Significantly increased bleeding risk and complications',
    risk_factor_moderate_anemia: 'Moderate anemia (Hemoglobin 10-11.9 g/dL) - Increased bleeding risk',
    risk_factor_low_hemoglobin: 'Low hemoglobin (Hemoglobin 12-12.9 g/dL) - Mildly increased bleeding risk',
    risk_factor_elevated_wbc: 'Elevated white blood count (>12 ×10³/μL) - Inflammation marker, increased bleeding risk',
    risk_factor_low_wbc: 'Low white blood count (<4 ×10³/μL) - Increased bleeding and infection risk',
    risk_factor_previous_bleeding: 'Previous major bleeding - Strongest predictor of future bleeding events',
    
    // Recommendations by risk level
    recommendation_low: 'Extended DAPT (12-30 months) may provide ischemic benefit with acceptable bleeding risk',
    recommendation_intermediate: 'Standard DAPT duration (12 months) with enhanced bleeding monitoring and risk factor modification',
    recommendation_high: 'Consider shortened DAPT duration (3-6 months) due to elevated bleeding risk, but ensure adequate ischemic protection',
    
    // Duration guidance
    duration_low: '12-30 months with monitoring',
    duration_intermediate: '12 months with surveillance',
    duration_high: '3-6 months with assessment',
    
    // Clinical guidance
    guidance_low: 'Low bleeding risk allows consideration of extended DAPT for high ischemic risk patients',
    guidance_intermediate: 'Balance bleeding and ischemic risks with individualized duration assessment',
    guidance_high: 'High bleeding risk warrants consideration of shorter DAPT duration and bleeding risk modification',
    
    // Clinical benefit
    benefit_low: 'Favorable bleeding safety profile supports extended DAPT consideration for ischemic benefit',
    benefit_intermediate: 'Moderate bleeding risk requires careful balance with ischemic protection needs',
    benefit_high: 'Elevated bleeding risk may limit extended DAPT benefit, consider alternative antiplatelet strategies',
    
    // Safe duration recommendations
    safe_duration_low: '12-30 months with monitoring',
    safe_duration_intermediate: '12 months with surveillance',
    safe_duration_high: '3-6 months with assessment',
    
    // Clinical sections
    clinical_recommendation: 'Clinical Recommendation',
    clinical_benefit_analysis: 'Clinical Benefit Analysis',
    
    // Score interpretation guide
    score_interpretation: 'PRECISE-DAPT Score Interpretation Guide',
    score_low_range: 'Low Risk (<25 points)',
    score_low_description: 'Extended DAPT may be beneficial with acceptable bleeding risk',
    score_intermediate_range: 'Intermediate Risk (25-35 points)',
    score_intermediate_description: 'Standard DAPT with enhanced monitoring recommended',
    score_high_range: 'High Risk (≥35 points)',
    score_high_description: 'Consider shortened DAPT due to elevated bleeding risk',
    
    // Algorithm validation
    enhanced_algorithm: 'Enhanced PRECISE-DAPT Algorithm',
    algorithm_validation: '✓ PRECISE-DAPT Study Validated • Enhanced bleeding risk assessment with quantitative safety analysis',
    based_on_precise_dapt: 'Based on PRECISE-DAPT Study • Bleeding risk assessment for DAPT duration guidance',
    bleeding_safety_validated: 'Bleeding Safety Validated',
    
    // Action buttons
    new_assessment: 'New Assessment',
    modify_inputs: 'Modify Inputs'
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

  prevent: {
    // Core information
    title: 'AHA PREVENT™ Calculator',
    subtitle: 'Next-Generation Cardiovascular Risk Assessment • CKM Health Integration',
    description: 'Revolutionary risk prediction incorporating cardiovascular-kidney-metabolic (CKM) health factors. Enhanced with social determinants of health for comprehensive 10-year and 30-year risk assessment.',
    
    // Alert section
    alert_title: 'American Heart Association PREVENT™',
    alert_description: 'Revolutionary risk prediction incorporating cardiovascular-kidney-metabolic (CKM) health factors. Enhanced with social determinants of health for comprehensive 10-year and 30-year risk assessment.',
    alert_badge: 'AHA 2023 - CKM-Enhanced Prediction',
    
    // Progress steps
    step_demographics: 'Demographics',
    step_clinical: 'Clinical',
    step_lab_values: 'Lab Values',
    step_ckm_e: 'CKM-E',
    
    // Step 1: Demographics
    demographics_title: 'Patient Demographics',
    demographics_description: 'Basic demographic information for risk assessment',
    age_label: 'Age',
    age_placeholder: '45',
    age_help: 'Age in years (30-79 for PREVENT)',
    sex_label: 'Sex',
    sex_placeholder: 'Select sex...',
    sex_male: 'Male',
    sex_female: 'Female',
    race_label: 'Race/Ethnicity',
    race_placeholder: 'Select race/ethnicity...',
    race_white: 'White',
    race_black: 'Black/African American',
    race_hispanic: 'Hispanic/Latino',
    race_asian: 'Asian',
    race_other: 'Other',
    
    // Step 2: Clinical Assessment
    clinical_title: 'Clinical Assessment',
    clinical_description: 'Blood pressure and clinical risk factors',
    systolic_bp_label: 'Systolic Blood Pressure',
    systolic_bp_placeholder: '120',
    diastolic_bp_label: 'Diastolic Blood Pressure',
    diastolic_bp_placeholder: '80',
    clinical_risk_factors_title: 'Clinical Risk Factors',
    antihypertensive_meds_label: 'Antihypertensive Medications',
    antihypertensive_meds_description: 'Currently taking blood pressure medications',
    diabetes_label: 'Diabetes Mellitus',
    diabetes_description: 'Type 1 or Type 2 diabetes',
    current_smoker_label: 'Current Smoker',
    current_smoker_description: 'Currently smoking tobacco',
    
    // Step 3: Laboratory Assessment
    lab_title: 'Laboratory Assessment',
    lab_description: 'Lipid profile and cholesterol measurements',
    total_cholesterol_label: 'Total Cholesterol',
    total_cholesterol_placeholder: '200',
    hdl_cholesterol_label: 'HDL Cholesterol',
    hdl_cholesterol_placeholder: '50',
    ldl_cholesterol_label: 'LDL Cholesterol',
    ldl_cholesterol_placeholder: '130',
    
    // Step 4: CKM-E Enhanced Factors
    ckm_e_title: 'CKM-E Enhanced Factors',
    ckm_e_description: 'Cardiovascular-Kidney-Metabolic health enhancement factors',
    egfr_label: 'eGFR',
    egfr_placeholder: '90',
    uacr_label: 'UACR',
    uacr_placeholder: '15',
    sdi_label: 'Social Deprivation Index',
    sdi_placeholder: '0.3',
    
    // CKM-E Information
    ckm_e_info_title: 'CKM-E Enhancement Information',
    egfr_info: 'Estimated glomerular filtration rate (kidney function marker)',
    uacr_info: 'Urine albumin-to-creatinine ratio (kidney damage marker)',
    sdi_info: 'Social Deprivation Index (social determinants of health)',
    
    // Navigation buttons
    next_clinical_factors: 'Next: Clinical Factors',
    next_laboratory_values: 'Next: Laboratory Values',
    next_ckm_e_factors: 'Next: CKM-E Factors',
    back_button: 'Back',
    calculate_prevent_risk: 'Calculate PREVENT Risk',
    
    // Results section
    results_title: 'AHA PREVENT™ Risk Analysis',
    ckm_e_enhanced_title: 'CKM-E Enhanced Assessment',
    ckm_e_enhanced_description: 'Enhanced cardiovascular-kidney-metabolic factors detected - comprehensive monitoring recommended',
    
    // Risk predictions
    ten_year_predictions_title: '10-Year Risk Predictions',
    thirty_year_predictions_title: '30-Year Risk Predictions',
    total_cvd: 'Total CVD',
    ascvd: 'ASCVD',
    heart_failure: 'Heart Failure',
    
    // Risk stratification
    risk_stratification_title: 'PREVENT Risk Stratification',
    low_risk: 'Low Risk',
    low_risk_range: '<5% ASCVD',
    borderline_risk: 'Borderline',
    borderline_risk_range: '5-7.5% ASCVD',
    intermediate_risk: 'Intermediate',
    intermediate_risk_range: '7.5-20% ASCVD',
    high_risk: 'High Risk',
    high_risk_range: '≥20% ASCVD',
    
    // Clinical recommendations
    clinical_recommendations_title: 'Clinical Management Recommendations',
    
    // Algorithm validation
    algorithm_title: 'AHA PREVENT™ Model',
    algorithm_description: '✓ AHA 2023 Guidelines • CKM-Enhanced • Machine Learning Validated • 30-Year Predictions',
    
    // Action buttons
    new_assessment: 'New Assessment',
    modify_inputs: 'Modify Inputs',
    
    // Footer
    footer_description: 'Based on AHA PREVENT™ equations with CKM health factors • For educational purposes only',
    footer_guidelines: 'AHA 2023 Guidelines',
    
    // Validation messages
    validation_age: 'Age is required',
    validation_age_range: 'Age must be between 30-79 years for PREVENT',
    validation_sex: 'Sex is required',
    validation_race: 'Race/ethnicity is required',
    validation_total_cholesterol: 'Total cholesterol is required',
    validation_total_cholesterol_range: 'Total cholesterol must be between 100-400 mg/dL',
    validation_hdl_cholesterol: 'HDL cholesterol is required',
    validation_hdl_cholesterol_range: 'HDL cholesterol must be between 20-100 mg/dL',
    validation_systolic_bp: 'Systolic BP is required',
    validation_systolic_bp_range: 'Systolic BP must be between 90-200 mmHg',
    
    // Units
    unit_years: 'years',
    unit_mg_dl: 'mg/dL',
    unit_mmhg: 'mmHg',
    unit_ml_min: 'mL/min/1.73m²',
    unit_mg_g: 'mg/g',
    unit_score: 'score',
    
    // Risk categories and prevention strategies
    risk_category: 'Risk category',
    prevention_strategy: 'Prevention strategy',
    standard_prevention: 'Standard cardiovascular prevention approach',
    comprehensive_ckm: 'Comprehensive CKM health approach with enhanced monitoring',
    
    // Recommendations content
    rec_continue_lifestyle: 'Continue lifestyle optimization',
    rec_reassess: 'Reassess in 4-6 years',
    rec_risk_enhancers: 'Risk enhancers assessment recommended',
    rec_cac_scoring: 'Consider CAC scoring if uncertain',
    rec_lifestyle_therapy: 'Lifestyle therapy essential',
    rec_statin_therapy: 'Statin therapy recommended',
    rec_cac_refinement: 'Consider CAC scoring for refinement',
    rec_high_intensity_statin: 'High-intensity statin therapy recommended',
    rec_additional_therapies: 'Consider additional therapies (ezetimibe, PCSK9i)',
    rec_aggressive_lifestyle: 'Aggressive lifestyle modification',
    rec_ckm_e_monitoring: 'CKM-E factors present - enhanced monitoring needed'
  },

  // Ensure other calculator IDs referenced in Calculators.tsx for cardiology also have title/subtitle
}; 