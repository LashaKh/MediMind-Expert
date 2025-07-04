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
  // hcm_risk_scd: { ... } // Moved to hcm-risk-scd.ts

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
    age_placeholder: '20-79',
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
    total_cholesterol_placeholder: '130-320',
    hdl_cholesterol_label: 'HDL cholesterol (mg/dL)',
    hdl_cholesterol_placeholder: '20-100',
    systolic_bp_label: 'Systolic blood pressure (mmHg)',
    systolic_bp_placeholder: '90-200',
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
    risk_factors_section: "Risk Factors",
    evidence_title: "Evidence",
    evidence_description: "This calculator is based on the 2013 ACC/AHA Guideline on the Assessment of Cardiovascular Risk and the Pooled Cohort Equations.",
    evidence_link_text: "View Original Research Publication",
    about_creator_title: "About the Creator",
    creator_name: "Dr. David C. Goff, Jr., MD, PhD",
    creator_bio: "David C. Goff, Jr., MD, PhD, is a professor of epidemiology at the University of Colorado and is the dean of the Colorado School of Public Health. He is a former recipient of the Public Policy Award from the National Forum for Heart Disease and Stroke Prevention, and he is currently the Interim Chair of the ASPPH accreditation and credentialing committee. His research interests include the prevention and understanding of heart disease and stroke.",
    // Detailed Analysis Section
    lifetime_risk_title: "Lifetime Risk",
    lifetime_risk_description: "Estimated lifetime cardiovascular risk for patients aged 20-59",
    risk_classification_title: "Risk Classification",
    risk_classification_low: "Risk < 5% - Focus on lifestyle modifications",
    risk_classification_borderline: "Risk 5-7.4% - Consider risk enhancing factors",
    risk_classification_intermediate: "Risk 7.5-19.9% - Statin therapy reasonable",
    risk_classification_high: "Risk ≥ 20% - High-intensity statin recommended",
    therapy_reduction_title: "Estimated Risk Reduction with Therapy",
    statin_therapy: "Statin Therapy",
    bp_control: "BP Control",
    smoking_cessation: "Smoking Cessation",
    aspirin_therapy: "Aspirin (if appropriate)",
    // Interpretation messages
    interpretation_low: "Low cardiovascular risk. Focus on lifestyle modifications and routine preventive care.",
    interpretation_borderline: "Borderline risk. Consider risk enhancing factors and shared decision-making for preventive therapy.",
    interpretation_intermediate: "Intermediate risk. Moderate-intensity statin therapy is reasonable along with lifestyle modifications.",
    interpretation_high: "High cardiovascular risk. High-intensity statin therapy recommended unless contraindicated.",
    // Validation message
    calibration_applied: "Calibration Applied",
    // Footer text
    footer_guidelines: "Based on ACC/AHA 2019 Primary Prevention Guideline and Pooled Cohort Equations",
    footer_validated: "100% Validated"
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
    creatinine_error: "Creatinine must be between 0.3-15.0 mg/dL",
    
    // Strategy and recommendation texts
    strategy_conservative: "Conservative management appropriate",
    strategy_early_invasive: "Early invasive strategy within 24-72 hours",
    strategy_urgent_invasive: "Urgent invasive strategy within 2-24 hours",
    recommendation_low: "Medical therapy, consider invasive if refractory symptoms",
    recommendation_intermediate: "Consider early catheterization and revascularization",
    recommendation_high: "Immediate catheterization and revascularization if indicated",
    
    // Results section labels
    results_title: "GRACE 2.0 Results",
    results_description: "Advanced cardiovascular risk assessment complete",
    grace_score: "GRACE Score",
    short_term_risk: "Short-term risk assessment",
    long_term_prognosis: "Long-term prognosis",
    risk_category_label: "Risk Category",
    clinical_risk_stratification: "Clinical risk stratification",
    clinical_recommendations_title: "Clinical Recommendations",
    intervention_window: "Intervention window",
    
    // NEW - Missing translation keys for hardcoded text
    baseline_patient_info: "Enter baseline patient information",
    high_risk_features: "High-Risk Features",
    at_presentation: "At presentation",
    on_initial_ecg: "On initial ECG",
    troponin_ck_mb: "Troponin/CK-MB",
    back_to_demographics: "Back to Demographics",
    calculate_risk_score: "Calculate Risk Score",
    review_data_assessment: "Review data and generate GRACE 2.0 assessment",
    patient_summary: "Patient Summary",
    demographics: "Demographics",
    vital_signs: "Vital Signs",
    hr_label: "HR:",
    sbp_label: "SBP:",
    labs_clinical: "Labs & Clinical",
    creatinine_short: "Creatinine:",
    killip_short: "Killip:",
    high_risk_features_present: "High-Risk Features Present",
    cardiac_arrest: "Cardiac Arrest",
    st_deviation: "ST Deviation",
    elevated_markers: "Elevated Markers",
    no_additional_risk_factors: "No additional risk factors",
    back_to_clinical: "Back to Clinical",
    reset: "Reset",
    calculating: "Calculating...",
    continue_to_clinical_data: "Continue to Clinical Data",
    
    // Expert insights section
    expert_insights_title: "Expert Insights from the Creators",
    expert_insights_subtitle: "From Dr. Joel Gore and Dr. Keith A. A. Fox",
    dr_joel_gore: "Dr. Joel Gore",
    dr_joel_gore_title: "Director, Anticoagulation Clinic, UMass Memorial",
    dr_keith_fox: "Dr. Keith A. A. Fox",
    dr_keith_fox_title: "Professor of Cardiology, University of Edinburgh",
    
    // Facts and figures section
    facts_figures_title: "Facts & Figures",
    facts_figures_subtitle: "GRACE Score Interpretation",
    grace_score_range: "GRACE Score Range",
    mortality_risk: "Mortality Risk",
    risk_category_column: "Risk Category",
    
    // Evidence and validation section
    evidence_validation_title: "Evidence & Validation",
    evidence_validation_subtitle: "Scientific Foundation",
    database_scale: "Database Scale",
    
    // Clinical pearls section
    clinical_pearls_title: "Clinical Pearls & Pitfalls",
    
    // Score interpretation table rows
    score_0_87: "0-87",
    score_88_128: "88-128",
    score_129_149: "129-149",
    score_150_173: "150-173",
    score_174_182: "174-182",
    score_183_190: "183-190",
    score_191_199: "191-199",
    score_200_207: "200-207",
    score_208_218: "208-218",
    score_219_284: "219-284",
    score_285_plus: "285+",
    
    mortality_0_2: "0-2%",
    mortality_3_10: "3-10%",
    mortality_10_20: "10-20%",
    mortality_20_30: "20-30%",
    mortality_40: "40%",
    mortality_50: "50%",
    mortality_60: "60%",
    mortality_70: "70%",
    mortality_80: "80%",
    mortality_90: "90%",
    mortality_99: "99%",
    
    risk_low: "Low",
    risk_moderate: "Moderate",
    risk_high: "High",
    risk_very_high: "Very High",
    
    // PubMed links
    joel_gore_publications: "Dr. Joel Gore's Publications",
    keith_fox_publications: "Dr. Keith A. A. Fox's Publications",
    
    // Expert quotes and detailed content
    gore_grace_quote: "GRACE 2.0 is an improved and refined list of outcomes from GRACE; instead of using score ranges to calculate outcomes like in-hospital mortality, we can actually calculate a mortality for every score. People should use GRACE 2.0.",
    gore_clinical_usage: "We use the in-hospital mortality outcome with the GRACE score. It helps us determine disposition in our STEMI patients; those with a score of 130 or higher go to the ICU after catheterization, and those with lower scores can go to our step down unit.",
    gore_nstemi_quote: "We'll also occasionally use the GRACE score on our high risk NSTEMI patients to consider doing early invasive management as opposed to delayed intervention.",
    fox_development_purpose: "We developed the GRACE ACS risk score because we saw the need for better risk stratification to guide treatment of ACS and to help address the 'Treatment-Risk' paradox.",
    fox_clinical_pearl: "It is important to consider not only total risk, but also risk that can be modified (MI risk helps with this).",
    fox_current_research: "We are currently working on developing models to identify modifiable risk and long term risk in ACS patients.",
    
    // Section labels for expert content
    on_grace_vs_grace_2: "On GRACE vs GRACE 2.0:",
    clinical_usage: "Clinical Usage:",
    on_nstemi_patients: "On NSTEMI Patients:",
    development_purpose: "Development Purpose:",
    clinical_pearl: "Clinical Pearl:",
    current_research: "Current Research:",
    
    // Facts and figures table content
    grace_score_range_header: "GRACE Score Range",
    mortality_risk_header: "Mortality Risk",
    risk_category_header: "Risk Category",
    
    // Evidence and validation content
    database_scale_title: "Database Scale",
    database_scale_description: "The GRACE (Global Registry of Acute Coronary Events) is a massive, international database of ACS in 94 hospitals in 14 countries which gives it excellent external validity.",
    patient_population_title: "Patient Population",
    patient_population_description: "11,389 ACS patients studied with 98.1% in-hospital mortality status available. 22% of in-hospital deaths occurred within 24 hours of admission, suggesting a very sick cohort.",
    grace_2_improvements_title: "GRACE 2.0 Improvements",
    grace_2_improvements_description: "GRACE 2.0 evaluated variables for non-linear mortality associations, providing more accurate estimates. Includes mortality estimates up to 3 years after ACS event.",
    validation_status_title: "Validation Status",
    validation_status_description: "Validated in >20,000 patients in multiple databases and is extremely well studied. NICE guidelines recommend the GRACE Score for ACS risk stratification.",
    
    // Clinical pearls content
    essential_clinical_insights: "Essential Clinical Insights",
    purpose_limitations_title: "Purpose & Limitations",
    purpose_limitations_description: "The GRACE Score is a prospectively studied scoring system to risk stratify patients with diagnosed ACS to estimate their in-hospital and 6-month to 3-year mortality. Like the TIMI Score, it was not designed to assess which patients' anginal symptoms are due to ACS.",
    score_version_title: "Score Version",
    score_version_description: "The GRACE Score was recently improved (GRACE 2.0); this calculator uses the GRACE 2.0 scoring system, which has been shown to be more accurate than the original score.",
    clinical_validation_title: "Clinical Validation",
    clinical_validation_description: "This score has been validated in >20,000 patients in multiple databases and is extremely well studied and supported. The NICE guidelines recommend the GRACE Score for risk stratification of patients with ACS.",
    mini_grace_title: "Mini-GRACE Alternative",
    mini_grace_description: "An alternative version, the mini-GRACE, allows substitutions of Killip class with diuretic usage and/or serum creatinine with a history of renal dysfunction. However, this platform uses the full version requiring both Killip class and serum creatinine."
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
    score_points: "{{score}} points",
    ischemic_benefit: "Ischemic Benefit",
    bleeding_risk: "Bleeding Risk",
    net_benefit: "Net Clinical Benefit",
    
    // Risk levels
    high_risk: "High",
    intermediate_risk: "Intermediate", 
    low_risk: "Low",
    
    // Risk descriptions
    mace_reduction: "{{reduction}}% MACE reduction",
    bleeding_increase: "{{increase}}% bleeding increase",
    
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
    interpretation_high: "High benefit patient (Score: {{{score}}}) - Extended DAPT likely beneficial",
    interpretation_intermediate: "Intermediate benefit patient (Score: {{{score}}}) - Consider extended DAPT",
    interpretation_low: "Low benefit patient (Score: {{{score}}}) - Extended DAPT may be harmful",
    
    // Enhanced algorithm
    enhanced_algorithm: "Enhanced Algorithm Validation",
    algorithm_validation: "This calculator incorporates age-adjusted bleeding risk assessment and evidence-based recommendations from the DAPT Study for optimal clinical decision-making.",
    
    // Action buttons
    new_assessment: "New Assessment",
    modify_inputs: "Modify Inputs",
    
    // Creator Insights Section
    creator_insights_title: "Creator Insights",
    creator_name: "Dr. Robert W. Yeh",
    creator_bio: "Associate Professor of Medicine at Harvard Medical School and Director of the Richard and Susan Smith Center for Outcomes Research in Cardiology at Beth Israel Deaconess Medical Center.",
    
    creator_insight_condensed: "Determining optimal antiplatelet therapy duration after coronary stents requires balancing heart attack prevention against bleeding risk. The DAPT Score, developed from the largest randomized trial (11,648 patients) at Harvard Clinical Research Institute, helps identify patients who benefit from extended therapy versus those better served by shorter durations. This validated tool guides clinical decisions alongside physician judgment, effectively separating high ischemic/low bleeding risk patients from those with opposite risk profiles. Essential for shared decision-making in routine practice.",
    
    // Evidence Section
    evidence_title: "Evidence & Formula",
    evidence_formula_title: "DAPT Score Formula",
    formula_description: "Addition of the selected points:",
    age_scoring: "Age: ≥75 years (-2 points), 65-74 years (-1 point), <65 years (0 points)",
    risk_factors_scoring: "Risk factors: Each selected factor adds +1 point (smoking, diabetes, MI at presentation, prior PCI/MI, paclitaxel stent, stent <3mm, CHF/LVEF<30%, vein graft)",
    interpretation_note: "Score ≥2: High ischemic/low bleeding risk - Prolonged DAPT recommended | Score -2 to 1: Low ischemic/high bleeding risk - Prolonged DAPT not recommended",
    
    evidence_validation_title: "Study Validation",
    evidence_validation_description: "Developed and validated using data from the DAPT Study, the largest randomized trial of DAPT duration involving 11,648 patients. The score was subsequently validated in multiple independent cohorts including Japanese PCI studies and real-world registries, consistently demonstrating its ability to identify patients who benefit from extended DAPT.",
    
    evidence_guidelines_title: "Clinical Guidelines",
    evidence_guidelines_description: "Incorporated into the 2016 ACC/AHA Guideline Focused Update on Duration of Dual Antiplatelet Therapy. The DAPT Score is recommended as a clinical decision tool to inform DAPT duration decisions in patients who have completed 12 months of DAPT without bleeding complications.",
    
    references_title: "References",
    reference_original: "Original DAPT Score Development (Yeh et al. JAMA 2016)",
    reference_validation: "Validation Studies (Piccolo et al. Ann Intern Med 2017)",
    reference_guidelines: "ACC/AHA Guidelines (Levine et al. JACC 2016)"
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
    interpretation_low: "Low risk patient with {{risk}}% 14-day risk of adverse outcomes",
    interpretation_intermediate: "Intermediate risk patient with {{risk}}% 14-day risk of adverse outcomes",
    interpretation_high: "High risk patient with {{risk}}% 14-day risk of adverse outcomes",
    
    // Recommendations (dynamic)
    recommendation_low_0: "Conservative management with medical therapy",
    recommendation_low_1: "Conservative management with medical therapy",
    recommendation_low_2: "Conservative management with close monitoring",
    recommendation_intermediate_3: "Consider early invasive strategy within 24-48 hours",
    recommendation_intermediate_4: "Early invasive strategy recommended within 24 hours",
    recommendation_high_5: "Urgent invasive strategy within 24 hours",
    recommendation_high_6: "Urgent invasive strategy within 12-24 hours",
    recommendation_high_7: "Immediate invasive strategy - highest risk",
    
    // Simplified category recommendations
    recommendation_low: "Conservative management with medical therapy and close monitoring. Consider early discharge with outpatient follow-up.",
    recommendation_intermediate: "Early invasive strategy within 24-48 hours recommended. Hospitalization with cardiology consultation advised.",
    recommendation_high: "Urgent invasive strategy within 24 hours required. Immediate cardiology consultation and aggressive medical therapy indicated.",
    
    // Risk factor descriptions
    known_cad_desc: "Prior catheterization showing ≥50% stenosis in any major coronary vessel",
    aspirin_use_desc: "Aspirin use within 7 days before hospital presentation",
    severe_angina_desc: "Two or more anginal episodes within 24 hours before presentation",
    st_deviation_desc: "ST segment changes ≥0.5mm on admission ECG",
    elevated_biomarkers_desc: "Elevated troponin, CK-MB, or other cardiac markers",
    
    // About the Creator
    about_creator_title: "About the Creator",
    creator_name: "Dr. Elliott M. Antman",
    creator_description: "Elliott M. Antman, MD, is a professor and associate dean for Clinical/Translational Research at Harvard Medical School. He is also a senior physician in the Cardiovascular Division of the Brigham and Women's Hospital in Massachusetts and President of the American Heart Association (2014-2015). As a senior investigator in the TIMI Study Group, Dr. Antman has published on the use of serum cardiac markers for diagnosis and prognosis of patients with unstable angina and acute myocardial infarction, cyclooxygenase and cardiovascular risk, and antithrombotic therapy for acute coronary syndromes.",
    creator_publications: "To view Dr. Elliott M. Antman's publications, visit",
    
    // Evidence Section
    evidence_title: "Evidence",
    formula_title: "FORMULA",
    formula_description: "Addition of the selected points:",
    variable_age: "Age ≥65",
    variable_risk_factors: "≥3 CAD risk factors*",
    variable_known_cad: "Known CAD (stenosis ≥50%)",
    variable_aspirin: "ASA use in past 7 days",
    variable_angina: "Severe angina (≥2 episodes in 24 hrs)",
    variable_st_changes: "EKG ST changes ≥0.5mm",
    variable_st_deviation: "ST deviation ≥0.5mm",
    variable_biomarkers: "Positive cardiac marker",
    risk_factors_note: "*Risk factors for CAD: Family history of CAD, hypertension, hypercholesterolemia, diabetes, or current smoker",
    
    // Evidence Appraisal
    evidence_appraisal_title: "Evidence Appraisal",
    evidence_appraisal_description: "Antman et al (2000) used a merged database of 7,081 UA/NSTEMI patients in the TIMI 11B and ESSENCE trails for the original derivation and validation of this TIMI risk score for UA/NSTEMI. The risk score was originally derived from 1,957 UA/NSTEMI patients receiving unfractionated heparin in the TIMI 11B trial and internally validated in 3 cohorts of patients from the rest of the merged data: 1,953 patients receiving enoxaparin in the TIMI 11B trial, 1,564 patient receiving unfractionated heparin in the ESSENCE trial, and 1,607 receiving enoxaparin in the ESSENCE trial.",
    validation_studies: "By the end of the 14 days, 16.7% of the derivation group died, had a myocardial infarction, or needed urgent revascularization. An increase of the TIMI Score correlated with an increase in all-cause mortality, MI, or urgent revascularization. The same pattern was seen in the internally validated groups. There have been many external validation studies since its derivation.",
    validation_studies_title: "Validation Studies",
    external_validation: "External validation studies by Scirica et al (2002), Pollack et al (2006), and Chase et al (2006) have consistently demonstrated the prognostic value of the TIMI Risk Score across diverse patient populations, including undifferentiated chest pain patients in emergency department settings.",
    
    // Literature
    literature_title: "Literature",
    original_reference_title: "Original/Primary Reference",
    original_reference: "Antman EM, Cohen M, Bernink PJLM, McCabe CH, Hoacek T, Papuchis G, Mautner B, Corbalan R, Radley D, Braunwald E. The TIMI risk score for unstable angina/non-ST elevation MI: a method for prognostication and therapeutic decision making JAMA. 2000;284(7):835-42.",
    validation_title: "Validation",
    validation_pollack: "Pollack CV, Sites FD, Shofer FS, Sease KL, Hollander JE. Application of the TIMI risk score for unstable angina and non-ST elevation acute coronary syndrome to an unselected emergency department chest pain population. Acad Emerg Med. 2006;13(1):13-18.",
    validation_scirica: "Scirica BM, Cannon CP, Antman EM, Murphy SA, Morrow DA, Sabatine MS, McCabe CH, Gibson CM, Braunwald E. Validation of the thrombolysis in myocardial infarction (TIMI) risk score for unstable angina pectoris and non-ST-elevation myocardial infarction in the TIMI III registry. Am J Cardiol. 2002;90(3):303-5.",
    validation_chase: "Chase M, Robey JL, Zogby KE, Sease KL, Shofer FS, Hollander JE. Prospective validation of the thrombolysis in myocardial infarction risk score in the emergency department chest pain population. Ann Emerg Med. 2006;48(3):252-9.",
    other_references_title: "Other References",
    other_reference: "Than M, Cullen L, Aldous S, et al. 2-Hour accelerated diagnostic protocol to assess patients with chest pain symptoms using contemporary troponins as the only biomarker: the ADAPT trial. J Am Coll Cardiol. 2012;59(23):2091-8."
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
      recommendation: 'Recommendation',
      
      // Evidence section
      evidence_title: 'Evidence & Validation',
      evidence_origin_title: 'Score Development',
      evidence_origin_description: 'The CHA₂DS₂-VASc score was developed in 2010 as a refinement of the CHADS₂ score, incorporating additional stroke risk factors. It was derived from the Euro Heart Survey cohort of 5,333 patients with atrial fibrillation.',
      evidence_validation_title: 'Validation Studies',
      evidence_validation_description: 'The score has been extensively validated in multiple large cohorts worldwide, consistently demonstrating superior performance to CHADS₂ in identifying truly low-risk patients and providing better stroke risk stratification.',
      evidence_guidelines_title: 'Guideline Recommendations',
      evidence_guidelines_description: 'The CHA₂DS₂-VASc score is recommended by major international guidelines including the 2023 ACC/AHA/ACCP/HRS, 2020 ESC, and 2021 NICE guidelines for stroke risk assessment in non-valvular atrial fibrillation.',
      evidence_link_guidelines: '2023 ACC/AHA/ACCP/HRS Guideline for AF Management',
      evidence_link_original: 'Original CHA₂DS₂-VASc Validation Study (Lip et al., 2010)',
      
      // Clinical pearls
      clinical_pearls_title: 'Clinical Pearls',
      clinical_pearl_1: 'Female sex confers stroke risk only in the presence of ≥1 other stroke risk factor. A CHA₂DS₂-VASc score of 1 in women (sex category only) is considered low risk.',
      clinical_pearl_2: 'The score performs best for identifying truly low-risk patients (score 0 in men, 1 in women) who may not require anticoagulation.',
      clinical_pearl_3: 'Annual stroke risk increases progressively with higher scores, from 0.2% at score 0 to >10% at scores ≥7.',
      clinical_pearl_4: 'Direct oral anticoagulants (DOACs) are preferred over warfarin for most patients with AF requiring anticoagulation, unless contraindicated.'
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
      recommendation: 'Recommendation',

      // Author Information
      author_title: 'From the Creator',
      author_name: 'Dr. Ron Pisters, MD, PhD',
      author_bio: 'Dr. Ron Pisters is a cardiologist at Rijnstate Hospital, Netherlands, specializing in atrial fibrillation and antithrombotic management.',
      author_key_message_title: 'Key Clinical Message',
      author_key_message: 'HAS-BLED should be used as a clinical tool to identify and address modifiable bleeding risk factors, not as an absolute contraindication to anticoagulation. Remember: in most AF patients, stroke risk outweighs bleeding risk.',
      author_pubmed_link: 'View Dr. Ron Pisters\' publications on PubMed',
      
      // Formula Section
      formula_title: 'FORMULA',
      formula_description: 'Addition of the selected points:',
      formula_note: 'HAS-BLED is an acronym for Hypertension, Abnormal liver/renal function, Stroke history, Bleeding predisposition, Labile INR, Elderly, Drug/alcohol usage.',
      
      // Risk Table
      facts_figures_title: 'Facts & Figures',
      risk_table_title: 'HAS-BLED Score Risk Assessment',
      risk_table_score: 'Score',
      risk_table_group: 'Risk Group',
      risk_table_major_bleeding: 'Risk of Major Bleeding**',
      risk_table_bleeds_per_100: 'Bleeds per 100 Patient-Years***',
      risk_table_recommendation: 'Recommendation',
      
      // Risk Groups
      risk_low: 'Low',
      risk_moderate: 'Moderate', 
      risk_high: 'High',
      risk_very_high: 'Very High',
      
      // Risk Recommendations
      risk_rec_0_1: 'Anticoagulation should be considered',
      risk_rec_2: 'Anticoagulation can be considered',
      risk_rec_3_4: 'Alternatives to anticoagulation should be considered',
      risk_rec_5_plus: 'Scores greater than 5 were too rare to determine risk, but are likely over 10%',
      
      // Evidence Section
      evidence_title: 'Evidence Appraisal',
      evidence_development: 'The HAS-BLED Score was developed in 2010 as a practical risk score to estimate the 1-year risk of major bleeding in patients with atrial fibrillation (AF). The original study used data from the prospective Euro Heart Survey on AF, and included 3456 ambulatory and hospitalized patients with AF and one-year follow-up status regarding major bleeding, and without mitral valve stenosis or valvular surgery.',
      evidence_validation: 'Many external validations of the HAS-BLED score have been published. A 2020 network meta-analysis of 18 studies found HAS-BLED to be the most balanced predictive score for major bleeding in terms of sensitivity and specificity, compared to other contemporary scores including the ABC‐bleeding score, ATRIA, European score, GARFIELD‐AF, HEMORR₂HAGES, ORBIT, Shireman, and mOBRI.',
      evidence_guidelines: 'The simplicity of the HAS-BLED score and the extensive external validations have led to widespread clinical adoption, with the 2020 ESC guidelines specifically recommending HAS-BLED for the assessment of bleeding risk in patients with AF. However, the more recent 2024 ESC guidelines and the 2023 ACC/AHA/ACCP/HRS guidelines both did not recommend a specific predictive score for major bleeding, citing uncertainties over accuracy and potential harms of not anticoagulating appropriately.',
      evidence_limitations: 'Such reservation at least partly stemmed from the fact that HAS-BLED was derived when DOAC were only starting to become available, which casts doubt on the predictive accuracy of HAS-BLED in truly contemporary cohorts with DOAC use. Additionally, even though clinicians are advised to balance the risks of bleeding and thromboembolism in patients with AF when considering anticoagulation, the real-life implications of these events may not be equivalent.',
      
      // Reference Links
      reference_original: 'Original Research: Pisters et al. (2010)',
      reference_validation: 'Validation Study: Lip et al. (2011)',
      reference_guidelines_2020: '2020 ESC Guidelines',
      reference_guidelines_2023: '2023 ACC/AHA/ACCP/HRS Guidelines'
    },
    
    // Common labels
    score_points: '{{score}} point(s)',
    risk_percentage: '{{risk}}% per year',
    
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
    no_anticoagulation: "No anticoagulation indicated. Continue to monitor risk factors annually.",
    consider_anticoagulation: "Consider oral anticoagulation based on individual patient characteristics and shared decision-making.",
    anticoagulation_recommended: "Oral anticoagulation is recommended unless contraindicated. Prefer DOACs over warfarin in most patients."
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
    score_points: '{{score}} points',
    
    // Risk categories and interpretations
    bleeding_risk: 'Bleeding Risk',
    major_bleeding: 'Major Bleeding Risk',
    safe_duration: 'Safe Duration',
    annual_major_bleeding: 'Annual major bleeding risk',
    overall_bleeding_risk: 'Overall bleeding risk at 12 months: {{risk}}%',
    recommended_dapt_duration: 'Recommended DAPT duration',
    
    // Risk levels
    low_risk: 'Low Risk',
    intermediate_risk: 'Intermediate Risk',
    high_risk: 'High Risk',
    
    // Interpretation messages
    interpretation_low: 'Low bleeding risk ({{risk}}% at 12 months) - Extended DAPT may be considered',
    interpretation_intermediate: 'Intermediate bleeding risk ({{risk}}% at 12 months) - Standard DAPT with careful monitoring',
    interpretation_high: 'High bleeding risk ({{risk}}% at 12 months) - Consider shortened DAPT duration',
    
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
    
    // Step navigation titles and descriptions
    step_1_title: 'Personal Information',
    step_1_description: 'Basic demographic and anthropometric data',
    step_2_title: 'Laboratory Values',
    step_2_description: 'Cholesterol profile and biomarkers',
    step_3_title: 'Clinical Factors',
    step_3_description: 'Blood pressure and medical history',
    step_4_title: 'Enhanced Factors',
    step_4_description: 'Optional CKM-E parameters (Optional)',
    step_5_title: 'Risk Assessment',
    step_5_description: 'Comprehensive cardiovascular risk analysis',
    
    // Progress indicators
    progress_complete: 'Complete',
    progress_of_steps: 'of 4 steps completed',
    
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
    height_label: 'Height',
    height_placeholder: '170',
    weight_label: 'Weight',
    weight_placeholder: '80',
    
    // Step 2: Clinical Assessment
    clinical_title: 'Clinical Assessment',
    clinical_description: 'Blood pressure and clinical risk factors',
    systolic_bp_label: 'Systolic Blood Pressure',
    systolic_bp_placeholder: '120',
    diastolic_bp_label: 'Diastolic Blood Pressure',
    diastolic_bp_placeholder: '80',
    clinical_risk_factors_title: 'Clinical Risk Factors',
    on_hypertension_meds_label: 'On Hypertension Medications',
    on_hypertension_meds_description: 'Currently taking blood pressure medications',
    antihypertensive_meds_label: 'Antihypertensive Medications',
    antihypertensive_meds_description: 'Currently taking blood pressure medications',
    on_statin_label: 'On Statin Therapy',
    on_statin_description: 'Currently taking statin medications',
    diabetes_label: 'Diabetes Mellitus',
    diabetes_description: 'Type 1 or Type 2 diabetes',
    current_smoker_label: 'Current Smoker',
    current_smoker_description: 'Currently smoking tobacco',
    serum_creatinine_label: 'Serum Creatinine',
    serum_creatinine_placeholder: '1.0',
    
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
    hba1c_label: 'HbA1c',
    hba1c_placeholder: '6.5',
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
    algorithm_2023_title: 'AHA PREVENT™ 2023 Algorithm',
    algorithm_implementation_description: 'This calculator implements the official American Heart Association PREVENT™ equations (2023):',
    algorithm_feature_1: 'Derived from over 6 million diverse individuals',
    algorithm_feature_2: 'Calculates 10-year risks for ASCVD, Heart Failure, and Total CVD',
    algorithm_feature_3: 'For ages 30-59: Also provides 30-year risk estimates',
    algorithm_feature_4: 'Includes novel risk factors (HbA1C, UACR, SDI) for enhanced assessment',
    algorithm_feature_5: 'BMI and eGFR calculated using validated equations',
    
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
    unit_cm: 'cm',
    unit_kg: 'kg',
    unit_percent: '%',
    
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
    rec_ckm_e_monitoring: 'CKM-E factors present - enhanced monitoring needed',
    
    // Chart visualization
    ten_year_risk_estimates: '10-Year Risk Estimates',
    thirty_year_risk_estimates: '30-Year Risk Estimates',
    risk_by_age_description: 'Risk estimates by age for individuals with the same risk factors',
    age_years: 'Age (years)',
    risk_percentage: 'Risk (%)',
    age: 'Age',
    years: 'years',
    risk_insights: 'Risk Insights',
    current_age: 'Current Age',
    year_total_risk: 'Year Total Risk',
    risk_increase_decade: 'Risk Increase/Decade'
  },

  // Ensure other calculator IDs referenced in Calculators.tsx for cardiology also have title/subtitle
}; 