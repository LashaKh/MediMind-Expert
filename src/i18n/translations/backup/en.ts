export default {
  common: {
    aiAssistant: 'Expert',
    medicalAssistant: 'Medical Assistant',
    account: 'Account',
    signedIn: 'Signed In',
    save: 'Save',
    delete: 'Delete',
    cancel: 'Cancel',
    loading: 'Loading...',
    error: 'Error',
    success: 'Success',
    retry: 'Retry',
    close: 'Close',
    back: 'Back',
    next: 'Next',
    previous: 'Previous',
    search: 'Search',
    filter: 'Filter',
    reset: 'Reset',
    confirm: 'Confirm',
    yes: 'Yes',
    no: 'No'
  },
  nav: {
    features: 'Features',
    pricing: 'Pricing',
    about: 'About'
  },
  navigation: {
    aiCoPilot: 'AI Co-Pilot',
    aiCoPilotDesc: 'Chat with specialized medical AI',
    calculators: 'Medical Calculators',
    calculatorsDesc: 'Evidence-based clinical tools',
    forms: 'Medical Forms',
    formsDesc: 'Clinical documentation templates',
    personalKB: 'Knowledge Base',
    personalKBDesc: 'Your medical literature library',
    settings: 'Settings',
    settingsDesc: 'Account and preferences',
    profile: 'Profile',
    helpCenter: 'Help Center',
    toggleMenu: 'Main navigation menu'
  },
  theme: {
    lightMode: 'Light Mode',
    darkMode: 'Dark Mode'
  },
  auth: {
    signInTitle: 'Sign in to your account',
    signUpTitle: 'Create your account',
    emailLabel: 'Email Address',
    emailPlaceholder: 'Enter your email',
    passwordLabel: 'Password',
    passwordPlaceholder: 'Enter your password',
    confirmPasswordLabel: 'Confirm Password',
    confirmPasswordPlaceholder: 'Confirm your password',
    firstNameLabel: 'First Name',
    firstNamePlaceholder: 'Enter your first name',
    lastNameLabel: 'Last Name',
    lastNamePlaceholder: 'Enter your last name',
    fullNameLabel: 'Full Name',
    fullNamePlaceholder: 'Enter your full name',
    createPasswordPlaceholder: 'Create a password',
    passwordHint: 'Must be at least 6 characters',
    termsNotice: 'By creating an account, you agree to our Terms of Service and Privacy Policy. Your medical data will be securely stored and never shared without your consent.',
    signIn: 'Sign in',
    signUp: 'Sign up',
    signingIn: 'Signing in...',
    signingUp: 'Signing up...',
    noAccount: "Don't have an account? Sign up",
    haveAccount: 'Already have an account? Sign in',
    forgotPassword: 'Forgot your password?',
    resetPassword: 'Reset Password',
    errors: {
      invalidCredentials: 'Invalid email or password',
      emailNotConfirmed: 'Please check your email and confirm your account',
      signInFailed: 'Sign in failed. Please try again.',
      signUpFailed: 'Sign up failed. Please try again.',
      emailExists: 'An account with this email already exists',
      weakPassword: 'Password is too weak'
    },
    signOut: 'Sign Out',
    rememberMe: 'Remember Me',
    createAccount: 'Create Account',
    alreadyHaveAccount: 'Already have an account?',
    dontHaveAccount: 'Don\'t have an account?',
    invalidCredentials: 'Invalid credentials',
    emailRequired: 'Email is required',
    passwordRequired: 'Password is required',
    signInWithGoogle: 'Sign in with Google',
    signUpWithGoogle: 'Sign up with Google',
    termsAndConditions: 'Terms and Conditions',
    privacyPolicy: 'Privacy Policy',
    acceptTerms: 'I accept the terms',
    passwordResetSuccess: 'Password reset link sent! Please check your email.',
    invalidEmail: 'Please enter a valid email address',
    invalidPassword: 'Please enter a valid password'
  },
  calculators: {
    categories: {
      cardiology: 'Cardiology',
      obgyn: 'OB/GYN',
      coming_soon: 'Coming Soon'
    },
    common: {
      calculate: 'Calculate',
      calculating: 'Calculating...',
      result: 'Result',
      results: 'Results',
      interpretation: 'Interpretation',
      recommendations: 'Recommendations',
      riskLevel: 'Risk Level',
      lowRisk: 'Low Risk',
      moderateRisk: 'Moderate Risk',
      highRisk: 'High Risk',
      veryHighRisk: 'Very High Risk',
      riskFactors: 'Risk Factors',
      inputs: 'Inputs',
      clearInputs: 'Clear Inputs',
      shareResult: 'Share Result',
      downloadPDF: 'Download PDF',
      printResult: 'Print Result',
      enterValue: 'Enter value',
      selectOption: 'Select option',
      required: 'Required',
      invalidValue: 'Invalid value',
      valueOutOfRange: 'Value out of range'
    },
    cardiology: {
      grace: 'GRACE 2.0 Calculator',
      hcmRiskScd: 'HCM Risk-SCD Calculator',
      dapt: 'DAPT Calculator',
      preciseDapt: 'PRECISE-DAPT Calculator',
      maggic: 'MAGGIC Calculator',
      gwtgHf: 'GWTG-HF Calculator',
      sts: 'STS Risk Calculator',
      euroScore: 'EuroSCORE II Calculator',
      timi: 'TIMI Risk Calculator',
      prevent: 'AHA PREVENT Calculator',
      hcmAf: 'HCM-AF Calculator',
      chadsVasc: 'CHA2DS2-VASc Calculator',
      hasBlед: 'HAS-BLED Calculator',
      chads2: 'CHADS2 Calculator'
    },
    obgyn: {
      endometrialCancer: 'Endometrial Cancer Risk',
      cervicalCancer: 'Cervical Cancer Risk',
      ovarianCancer: 'Ovarian Cancer Risk',
      pretermBirth: 'Preterm Birth Risk',
      ovarianReserve: 'Ovarian Reserve',
      bishopScore: 'Bishop Score',
      dueDate: 'Due Date Calculator',
      preeclampsia: 'Preeclampsia Risk'
    },
    coming_soon: "Coming Soon",
    coming_soon_description: "This calculator will be available in the next development phase. Implementation follows ACC/AHA guidelines for clinical accuracy.",
    calculate: "Calculate",
    reset: "Reset",
    back: "Back",
    next: "Next",
    required: "Required",
    optional: "Optional",
    demographic: "Demographics",
    lab_values: "Lab Values",
    risk_factors: "Risk Factors",
    results: "Results",
    interpretation: "Interpretation",
    recommendations: "Recommendations",
    high_risk: "High Risk",
    intermediate_risk: "Intermediate Risk",
    low_risk: "Low Risk",
    borderline_risk: "Borderline Risk",
    hcm_risk_scd: {
      title: "HCM Risk-SCD Calculator",
      subtitle: "Sudden Cardiac Death Risk Assessment • Hypertrophic Cardiomyopathy",
      description: "5-year sudden cardiac death risk prediction in patients with hypertrophic cardiomyopathy for ICD decision making.",
      demographics: "Demographics",
      age_label: "Age (years)",
      age_placeholder: "Enter patient age (16-80 years)",
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
      risk_category: "Risk category",
      icd_recommendation: "ICD recommendation",
      recommendations: "Clinical recommendations",
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
    ascvd: {
      title: 'ASCVD Risk Calculator',
      subtitle: '10-Year Atherosclerotic Cardiovascular Disease Risk Assessment',
      description: 'ACC/AHA Pooled Cohort Equations to calculate 10-year risk of first major ASCVD event (MI, CHD death, or stroke).',
      age_label: 'Age (years)',
      age_placeholder: 'Enter age (20-79 years)',
      sex_label: 'Sex',
      sex_male: 'Male',
      sex_female: 'Female',
      race_label: 'Race/Ethnicity',
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
      risk_factors_section: "Risk Factors",
      calculate_button: "Calculate ASCVD Risk"
    },
    grace: {
      title: "GRACE 2.0 Risk Calculator",
      subtitle: "Acute Coronary Syndrome Risk Assessment",
      description: "Global Registry of Acute Coronary Events - risk stratification for patients with NSTEMI/UA and STEMI.",
      
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
      risk_category: "Risk category",
      invasive_strategy: "Invasive strategy",
      recommendation: "Treatment recommendation",
      
      // Risk categories
      low_risk: "Low risk",
      intermediate_risk: "Intermediate risk",
      high_risk: "High risk",
      
      // Action buttons
      calculate_button: "Calculate GRACE Score",
      
      // Validation messages
      age_error: "Age must be between 18-120 years",
      heart_rate_error: "Heart rate must be between 30-300 bpm",
      systolic_bp_error: "Systolic blood pressure must be between 60-300 mmHg",
      creatinine_error: "Creatinine must be between 0.3-15.0 mg/dL"
    },
    dapt: {
      title: 'DAPT Score Calculator',
      subtitle: 'Dual Antiplatelet Therapy Duration • Risk-Benefit Assessment',
      description: "Risk-benefit assessment of extended dual antiplatelet therapy duration after PCI.",
      
      // Patient demographics
      age_label: "Age (years)",
      age_placeholder: "Enter patient age",
      
      // Risk factors
      cigarette_smoking_label: "Cigarette smoking",
      diabetes_mellitus_label: "Diabetes mellitus",
      mi_at_presentation_label: "MI at presentation",
      prior_pci_mi_label: "Prior PCI or MI",
      paclitaxel_stent_label: "Paclitaxel-eluting stent",
      stent_diameter_label: "Stent diameter (mm)",
      stent_diameter_placeholder: "Enter stent diameter",
      chf_lvef_label: "CHF or LVEF <30%",
      vein_graft_pci_label: "Vein graft PCI",
      
      // Section headers
      demographics_section: "Patient Demographics",
      risk_factors_section: "Risk Factors",
      procedure_details_section: "Procedure Details",
      
      // Results
      dapt_score: "DAPT Score",
      ischemic_benefit: "Ischemic benefit",
      bleeding_risk: "Bleeding risk",
      net_benefit: "Net benefit",
      recommendation: "Recommendation",
      duration_guidance: "Duration guidance",
      clinical_considerations: "Clinical considerations",
      
      // Benefit categories
      high_benefit: "High benefit",
      intermediate_benefit: "Intermediate benefit",
      low_benefit: "Low benefit",
      
      // Risk categories
      low_risk: "Low risk",
      intermediate_risk: "Intermediate risk",
      high_risk: "High risk",
      
      // Recommendations
      extended_dapt_recommended: "Extended DAPT recommended",
      extended_dapt_consider: "Consider extended DAPT",
      extended_dapt_not_recommended: "Extended DAPT not recommended",
      
      // Calculate button
      calculate_button: "Calculate DAPT Risk-Benefit",
      
      // Validation messages
      age_error: "Age must be between 18-120 years",
      stent_diameter_error: "Stent diameter must be between 1-10 mm",
      
      // Detailed results
      risk_balance: "Risk balance",
      ischemic_reduction: "Ischemic risk reduction",
      bleeding_increase: "Bleeding risk increase",
      net_clinical_benefit: "Net clinical benefit",
      
      // Age factors
      age_factor: "Age factor",
      elderly_bleeding_risk: "Elderly bleeding risk",
      life_expectancy: "Life expectancy",
      
      // Recommended duration
      twelve_months: "12 months (standard)",
      eighteen_months: "18 months",
      thirty_months: "30 months",
      consider_shorter: "Consider shorter duration",
      
      // Monitoring
      bleeding_monitoring: "Bleeding monitoring",
      enhanced_monitoring: "Enhanced monitoring",
      routine_monitoring: "Routine monitoring",

      algorithm_validation: 'Enhanced algorithm with age-adjusted bleeding risk and evidence-based clinical recommendations from DAPT Study and PRECISE-DAPT validation studies.'
    },
    timi: {
      title: 'TIMI Risk Score Calculator',
      subtitle: 'UA/NSTEMI Risk Assessment • Emergency Medicine & Cardiology',
      
      // Emergency Alert
      emergency_tool: 'Emergency Assessment Tool',
      tool_description: 'Designed for rapid risk stratification in emergency department and acute care settings. Results guide immediate management decisions for patients with unstable angina or non-ST elevation myocardial infarction.',
      
      // Progress Steps
      patient_info: 'Patient Info',
      clinical_factors: 'Clinical Factors',
      
      // Demographics Section
      demographics_section: 'Patient Demographics & Risk Factors',
      age_label: 'Patient Age',
      age_help: 'Age ≥65 years contributes 1 point to TIMI score',
      age_error: 'Age must be between 18-120 years',
      
      // Risk Factors Section
      coronary_risk_factors: 'Coronary Risk Factors Count',
      risk_factors_help: 'Risk factors: Family history, hypertension, hypercholesterolemia, diabetes, current smoking. ≥3 factors = 1 point',
      risk_factors_detail: 'Count: Family history of CAD, hypertension, hypercholesterolemia, diabetes mellitus, current smoking',
      
      // Clinical Assessment Section
      clinical_assessment: 'Clinical Assessment Factors',
      clinical_assessment_description: 'Each factor contributes 1 point to the TIMI score',
      
      // Clinical Factors
      known_cad: 'Known Coronary Artery Disease',
      known_cad_desc: 'Stenosis ≥50% on prior catheterization or imaging',
      aspirin_use: 'Recent Aspirin Use',
      aspirin_use_desc: 'Aspirin use within the prior 7 days',
      severe_angina: 'Severe Anginal Symptoms',
      severe_angina_desc: '≥2 anginal episodes within 24 hours',
      st_deviation: 'ST Segment Deviation',
      st_deviation_desc: 'ST deviation ≥0.5mm on ECG',
      elevated_biomarkers: 'Elevated Cardiac Biomarkers',
      elevated_biomarkers_desc: 'Elevated troponin, CK-MB, or other cardiac markers',
      
      // Navigation
      next_clinical_factors: 'Next: Clinical Factors',
      calculate_button: 'Calculate TIMI Risk Score',
      
      // Results
      score_analysis: 'TIMI Risk Score',
      score_points: '{score}/7 points',
      
      // Risk Categories
      low_risk: 'Low Risk',
      intermediate_risk: 'Intermediate Risk', 
      high_risk: 'High Risk',
      
      // Risk Breakdown
      fourteen_day_breakdown: '14-Day Risk Breakdown',
      mortality: 'Mortality',
      myocardial_infarction: 'Myocardial Infarction',
      urgent_revascularization: 'Urgent Revascularization',
      
      // Management Urgency
      management_urgency: 'Management Urgency',
      routine_management: 'Routine Management',
      early_intervention: 'Early Intervention',
      urgent_management: 'Urgent Management',
      timeframe_24_72: '24-72 hours',
      timeframe_24_48: '24-48 hours',
      timeframe_under_24: '<24 hours',
      recommended_timeframe: 'Recommended timeframe:',
      
      // Clinical Management Strategy
      clinical_strategy: 'Clinical Management Strategy',
      
      // Risk Recommendations (based on score)
      recommendation_low_0: 'Low risk for adverse outcomes. Conservative management with medical therapy may be appropriate. Consider early discharge with close outpatient follow-up within 72 hours.',
      recommendation_low_1: 'Low risk for adverse outcomes. Conservative management with medical therapy may be appropriate. Consider early discharge with close outpatient follow-up within 72 hours.',
      recommendation_low_2: 'Low risk for adverse outcomes. Conservative management with medical therapy may be appropriate. Consider early discharge with close outpatient follow-up within 72 hours.',
      recommendation_intermediate_3: 'Intermediate risk for adverse outcomes. Early invasive strategy within 24-48 hours is reasonable. Admission recommended with cardiology consultation.',
      recommendation_intermediate_4: 'Intermediate risk for adverse outcomes. Early invasive strategy within 24-48 hours is reasonable. Admission recommended with cardiology consultation.',
      recommendation_high_5: 'High risk for adverse outcomes. Early invasive strategy recommended within 24 hours. Immediate cardiology consultation and aggressive medical management indicated.',
      recommendation_high_6: 'High risk for adverse outcomes. Early invasive strategy recommended within 24 hours. Immediate cardiology consultation and aggressive medical management indicated.',
      recommendation_high_7: 'High risk for adverse outcomes. Early invasive strategy recommended within 24 hours. Immediate cardiology consultation and aggressive medical management indicated.',
      
      // Score Components
      score_components: 'Score Components ({score}/7 points)',
      age_component: 'Age ≥65 years',
      cad_risk_factors_component: '≥3 CAD risk factors',
      known_cad_component: 'Known coronary disease',
      aspirin_component: 'Recent aspirin use',
      angina_component: 'Severe anginal symptoms',
      st_component: 'ST segment deviation',
      biomarkers_component: 'Elevated biomarkers',
      
      // Interpretations
      interpretation_low: 'Low risk ({risk}%) for death, MI, or urgent revascularization within 14 days. Conservative management is reasonable.',
      interpretation_intermediate: 'Intermediate risk ({risk}%) for adverse outcomes. Early invasive strategy within 24-48 hours recommended.',
      interpretation_high: 'High risk ({risk}%) for adverse outcomes. Urgent invasive management within 24 hours strongly recommended.',
      
      // Action Buttons
      new_assessment: 'New Assessment',
      modify_inputs: 'Modify Inputs',
      
      // Footer
      based_on_timi: 'Based on TIMI Risk Score for UA/NSTEMI • 14-day composite endpoint validation',
      clinically_validated: 'Clinically Validated'
    },
    precise_dapt: {
      title: 'PRECISE-DAPT Bleeding Risk Calculator',
      subtitle: 'DAPT Bleeding Risk Assessment • Cardiovascular Safety Analysis',
      
      // Tool description
      tool_description: 'Validated bleeding risk calculator for patients on dual antiplatelet therapy (DAPT). Provides quantitative bleeding risk assessment to guide DAPT duration decisions in post-PCI patients.',
      bleeding_assessment_tool: 'Bleeding Risk Assessment Tool',
      
      // Step progression
      patient_labs: 'Patient Labs',
      bleeding_history: 'Bleeding History',
      
      // Demographics & Laboratory Values
      demographics_labs_section: 'Patient Demographics & Laboratory Values',
      age_label: 'Patient Age',
      age_help: 'Elderly patients have increased bleeding risk due to comorbidities and medication interactions',
      age_error: 'Age must be between 18-120 years',
      
      // Laboratory values
      laboratory_values: 'Critical Laboratory Parameters',
      laboratory_description: 'Laboratory values significantly impact bleeding risk assessment',
      
      creatinine_label: 'Serum Creatinine',
      creatinine_help: 'Renal function marker - higher creatinine indicates increased bleeding risk',
      creatinine_error: 'Creatinine must be between 0.5-15 mg/dL',
      creatinine_unit: 'mg/dL',
      
      hemoglobin_label: 'Hemoglobin Level',
      hemoglobin_help: 'Anemia increases bleeding complications and transfusion requirements',
      hemoglobin_error: 'Hemoglobin must be between 5-20 g/dL',
      hemoglobin_unit: 'g/dL',
      
      white_blood_count_label: 'White Blood Count',
      white_blood_count_help: 'Elevated or low WBC may indicate underlying conditions affecting bleeding risk',
      white_blood_count_error: 'WBC must be between 1-50 × 10³/μL',
      white_blood_count_unit: '× 10³/μL',
      
      // Bleeding history section
      bleeding_history_section: 'Bleeding History Assessment',
      bleeding_history_description: 'Previous bleeding events are strong predictors of future bleeding risk',
      
      previous_bleed: 'Previous Spontaneous Bleeding',
      previous_bleed_desc: 'History of spontaneous bleeding requiring medical attention or hospitalization',
      
      // Navigation
      next_bleeding_history: 'Next: Bleeding History',
      calculate_button: 'Calculate Bleeding Risk',
      
      // Results
      bleeding_risk_analysis: 'PRECISE-DAPT Bleeding Risk Analysis',
      score_points: '{score} Points',
      
      // Risk categories
      low_risk: 'Low Risk',
      intermediate_risk: 'Intermediate Risk',
      high_risk: 'High Risk',
      
      // Risk panels
      bleeding_risk: 'Bleeding Risk',
      major_bleeding: 'Major Bleeding',
      safe_duration: 'Safe Duration',
      
      // Risk descriptions
      overall_bleeding_risk: '{risk}% overall bleeding risk at 1 year',
      annual_major_bleeding: 'Annual major bleeding risk during DAPT',
      recommended_dapt_duration: 'Recommended DAPT duration range',
      
      // Clinical recommendation sections
      clinical_recommendation: 'Clinical Recommendation',
      clinical_benefit_analysis: 'Clinical Benefit Analysis',
      contributing_risk_factors: 'Contributing Risk Factors',
      score_interpretation: 'PRECISE-DAPT Score Interpretation',
      
      // Risk level interpretations
      interpretation_low: 'Low bleeding risk ({risk}%) supports standard DAPT duration. Extended therapy recommended based on ischemic risk assessment.',
      interpretation_intermediate: 'Intermediate bleeding risk ({risk}%) requires individualized duration decision. Balance ischemic benefit versus bleeding risk with enhanced monitoring.',
      interpretation_high: 'High bleeding risk ({risk}%) indicates shortened DAPT duration. Prioritize bleeding prevention with comprehensive risk mitigation strategies.',
      
      // DAPT recommendations by risk level
      recommendation_low: 'Standard or prolonged DAPT duration is safe and appropriate',
      recommendation_intermediate: 'Individualized DAPT duration with enhanced bleeding risk monitoring',
      recommendation_high: 'Consider shortened DAPT duration with comprehensive bleeding prevention strategies',
      
      // Duration guidance
      duration_low: '12+ months DAPT with standard monitoring protocols',
      duration_intermediate: '6-12 months DAPT duration with careful risk-benefit assessment',
      duration_high: 'Consider 3-6 months DAPT duration if clinically appropriate and safe',
      
      // Clinical guidance
      guidance_low: 'Low bleeding risk profile supports standard DAPT protocols. Consider extended duration based on ischemic risk assessment and DAPT score evaluation.',
      guidance_intermediate: 'Moderate bleeding risk requires careful balance of ischemic benefit versus bleeding risk. Enhanced monitoring with proton pump inhibitor therapy and regular hemoglobin checks recommended.',
      guidance_high: 'High bleeding risk mandates shortened DAPT duration. Prioritize bleeding prevention with PPI therapy, careful procedural planning, and frequent monitoring. Consider alternative antiplatelet strategies if available.',
      
      // Clinical benefit descriptions
      benefit_low: 'Excellent safety profile for extended antiplatelet therapy',
      benefit_intermediate: 'Balanced approach required - bleeding risk mitigation strategies essential',
      benefit_high: 'Bleeding prevention takes priority - minimize DAPT exposure while maintaining essential ischemic protection',
      
      // Safe duration descriptions
      safe_duration_low: '12-30 months with standard monitoring',
      safe_duration_intermediate: '6-12 months with enhanced monitoring and bleeding prevention',
      safe_duration_high: '3-6 months with intensive bleeding prevention protocols',
      
      // Score interpretation guide
      score_low_range: 'Score <25',
      score_intermediate_range: 'Score 25-49',
      score_high_range: 'Score ≥50',
      
      score_low_description: 'Low bleeding risk (7.9%), standard DAPT duration appropriate',
      score_intermediate_description: 'Intermediate risk (17.8%), individualize duration',
      score_high_description: 'High risk (35.1%), consider shortened DAPT',
      
      // Risk factors (these would be populated dynamically based on calculation results)
      risk_factor_advanced_age: 'Advanced age (≥75 years) - highest bleeding risk group',
      risk_factor_elderly_age: 'Elderly age (65-74 years) - increased bleeding susceptibility',
      risk_factor_severe_renal: 'Severe renal impairment (Cr ≥2.0) - significant bleeding risk elevation',
      risk_factor_moderate_renal: 'Moderate renal impairment (Cr 1.5-1.9) - moderate bleeding risk',
      risk_factor_mild_renal: 'Mild renal impairment (Cr 1.2-1.4) - mild bleeding risk elevation',
      risk_factor_severe_anemia: 'Severe anemia (Hgb <10) - major bleeding risk factor',
      risk_factor_moderate_anemia: 'Mild-moderate anemia (Hgb 10-12) - increased bleeding susceptibility',
      risk_factor_low_hemoglobin: 'Low-normal hemoglobin (Hgb 12-13) - slight bleeding risk elevation',
      risk_factor_elevated_wbc: 'Elevated white blood count (>12) - inflammatory state',
      risk_factor_low_wbc: 'Low white blood count (<4) - potential hematologic issue',
      risk_factor_previous_bleeding: 'History of previous bleeding - strongest predictor of future bleeding',
      
      // Action buttons
      new_assessment: 'New Assessment',
      modify_inputs: 'Modify Inputs',
      
      // Footer
      enhanced_algorithm: 'Enhanced PRECISE-DAPT Algorithm',
      algorithm_validation: '✓ PRECISE-DAPT Study Validated • Enhanced bleeding risk assessment with quantitative safety analysis',
      based_on_precise_dapt: 'Based on PRECISE-DAPT Study • Bleeding risk assessment for DAPT duration guidance',
      bleeding_safety_validated: 'Bleeding Safety Validated'
    },
    bishop_score: {
      title: 'Bishop Score Calculator',
      subtitle: 'Cervical Ripeness Assessment • Labor Induction Success Prediction • Evidence-Based Scoring',
      
      // Tool description
      tool_description: 'Standardized cervical ripeness evaluation system for predicting labor induction success. Assesses five key cervical and fetal parameters to guide induction decisions and timing protocols.',
      assessment_tool: 'Cervical Ripeness Assessment Tool',
      
      // Progress steps
      cervical_assessment: 'Cervical Assessment',
      
      // Section headers
      cervical_parameters_section: 'Cervical Assessment Parameters',
      cervical_parameters_description: 'Five key parameters assess cervical readiness for labor induction',
      
      // Cervical dilation
      cervical_dilation_label: 'Cervical Dilation',
      cervical_dilation_help: 'Measure cervical opening in centimeters during digital examination',
      cervical_dilation_error: 'Cervical dilation must be between 0-10 cm',
      cervical_dilation_unit: 'cm',
      
      // Cervical effacement
      cervical_effacement_label: 'Cervical Effacement',
      cervical_effacement_help: 'Percentage of cervical thinning - measures cervical preparation for labor',
      cervical_effacement_error: 'Cervical effacement must be between 0-100%',
      cervical_effacement_unit: '%',
      
      // Cervical consistency
      cervical_consistency_label: 'Cervical Consistency',
      cervical_consistency_help: 'Firmness of cervical tissue assessed during digital examination',
      cervical_consistency_firm: 'Firm',
      cervical_consistency_medium: 'Medium',
      cervical_consistency_soft: 'Soft',
      
      // Cervical position
      cervical_position_label: 'Cervical Position',
      cervical_position_help: 'Anatomical position of cervix relative to the pelvis',
      cervical_position_posterior: 'Posterior',
      cervical_position_mid: 'Mid-position',
      cervical_position_anterior: 'Anterior',
      
      // Fetal station
      fetal_station_label: 'Fetal Station',
      fetal_station_help: 'Position of fetal presenting part relative to ischial spines (-3 to +3)',
      fetal_station_error: 'Fetal station must be between -3 and +3',
      fetal_station_unit: 'station',
      
      // Calculate button
      calculate_button: 'Calculate Bishop Score',
      
      // Results
      bishop_score_analysis: 'Bishop Score Analysis',
      total_score: 'Total Score',
      score_points: '{score}/13 points',
      
      // Score categories
      unfavorable_cervix: 'Unfavorable Cervix',
      intermediate_cervix: 'Intermediate Cervix', 
      favorable_cervix: 'Favorable Cervix',
      very_favorable_cervix: 'Very Favorable Cervix',
      
      // Induction success prediction
      induction_success: 'Induction Success',
      labor_likelihood: 'Labor Likelihood',
      delivery_prediction: 'Delivery Prediction',
      
      // Success categories
      unlikely_success: 'Unlikely Success',
      possible_success: 'Possible Success',
      likely_success: 'Likely Success',
      very_likely_success: 'Very Likely Success',
      
      // Clinical interpretations
      interpretation_0_3: 'Unfavorable cervix (score 0-3). Labor induction unlikely to succeed. Consider cervical ripening agents before induction attempts.',
      interpretation_4_6: 'Intermediate cervical ripeness (score 4-6). Moderate success rate for induction. Consider pre-induction cervical ripening.',
      interpretation_7_8: 'Favorable cervix (score 7-8). Good probability of successful induction. Proceed with standard induction protocols.',
      interpretation_9_13: 'Very favorable cervix (score 9-13). Excellent probability of successful vaginal delivery. Induction likely to succeed.',
      
      // Clinical recommendations
      clinical_recommendation: 'Clinical Recommendation',
      management_guidance: 'Management Guidance',
      induction_timing: 'Induction Timing',
      cervical_ripening: 'Cervical Ripening',
      
      // Recommendations by score
      recommendation_unfavorable: 'Consider cervical ripening with prostaglandins or mechanical methods before induction. Patient counseling regarding higher cesarean risk.',
      recommendation_intermediate: 'May proceed with induction but consider pre-induction cervical ripening. Enhanced monitoring and flexibility in timing recommended.',
      recommendation_favorable: 'Proceed with standard labor induction protocols. Good candidate for successful vaginal delivery.',
      recommendation_very_favorable: 'Excellent candidate for labor induction. Minimal cervical preparation needed. Proceed with confidence.',
      
      // Management guidance
      guidance_unfavorable: 'Unfavorable Bishop score indicates higher risk of failed induction and cesarean delivery. Consider delayed induction with cervical ripening or expectant management if appropriate.',
      guidance_intermediate: 'Intermediate score suggests moderate success likelihood. Pre-induction cervical ripening may improve outcomes. Discuss realistic expectations with patient.',
      guidance_favorable: 'Favorable cervical assessment supports proceeding with induction. Standard protocols appropriate with expectation of successful vaginal delivery.',
      guidance_very_favorable: 'Optimal cervical conditions for induction. Minimal preparation required. High likelihood of successful labor progression and vaginal delivery.',
      
      // Timing recommendations
      timing_unfavorable: 'Delay induction for cervical ripening (12-24 hours) unless urgent indication',
      timing_intermediate: 'Consider pre-ripening (6-12 hours) or proceed with close monitoring',
      timing_favorable: 'Proceed with standard induction timing and protocols',
      timing_very_favorable: 'Ready for immediate induction - no preparation delay needed',
      
      // Score components breakdown
      score_components: 'Bishop Score Components',
      dilation_points: 'Dilation: {points} points',
      effacement_points: 'Effacement: {points} points',
      consistency_points: 'Consistency: {points} points',
      position_points: 'Position: {points} points',
      station_points: 'Station: {points} points',
      
      // Success rates
      success_rate_0_3: '15-20% vaginal delivery success rate',
      success_rate_4_6: '40-60% vaginal delivery success rate',
      success_rate_7_8: '80-85% vaginal delivery success rate',
      success_rate_9_13: '95%+ vaginal delivery success rate',
      
      // Clinical considerations
      clinical_considerations: 'Clinical Considerations',
      cesarean_risk: 'Cesarean Risk',
      monitoring_needs: 'Monitoring Needs',
      patient_counseling: 'Patient Counseling',
      
      // Risk assessments
      high_cesarean_risk: 'High cesarean risk - enhanced counseling and monitoring',
      moderate_cesarean_risk: 'Moderate cesarean risk - standard monitoring protocols',
      low_cesarean_risk: 'Low cesarean risk - routine induction management',
      minimal_cesarean_risk: 'Minimal cesarean risk - excellent induction candidate',
      
      // Action buttons
      new_assessment: 'New Assessment',
      modify_inputs: 'Modify Inputs',
      
      // About section
      about_title: 'About Bishop Score',
      scoring_system: 'Scoring System',
      clinical_validation: 'Clinical Validation',
      evidence_base: 'Evidence Base',
      
      // Footer
      based_on_bishop: 'Based on Modified Bishop Score • ACOG Practice Bulletin validated',
      obstetric_safety_validated: 'Obstetric Safety Validated'
    },
    vbac_success: {
      title: 'VBAC Success Prediction Calculator',
      subtitle: 'Vaginal Birth After Cesarean • Success Prediction • Evidence-Based Assessment • Labor Management',
      
      // Tool description
      tool_description: 'Evidence-based prediction tool for vaginal birth after cesarean success using validated maternal characteristics and clinical parameters to guide counseling and delivery planning decisions.',
      assessment_tool: 'VBAC Success Prediction Model',
      acog_practice_bulletin: 'ACOG Practice Bulletin No. 205',
      
      // Progress steps
      maternal_demographics: 'Maternal Demographics',
      obstetric_history: 'Obstetric History',
      current_pregnancy: 'Current Pregnancy',
      calculator_tab: 'Calculator',
      about_tab: 'About',
      
      // Section headers
      maternal_factors_section: 'Maternal Factors & Demographics',
      maternal_factors_description: 'Key maternal characteristics that influence VBAC success probability',
      
      previous_delivery_section: 'Previous Delivery History',
      previous_delivery_description: 'Prior obstetric history affecting current delivery approach',
      
      current_pregnancy_section: 'Current Pregnancy Parameters',
      current_pregnancy_description: 'Present pregnancy factors influencing delivery planning',
      
      // Maternal factors
      maternal_age_label: 'Maternal Age',
      maternal_age_help: 'Maternal age influences VBAC success rates with optimal outcomes in the 20-35 year range',
      maternal_age_error: 'Maternal age must be between 15-55 years',
      maternal_age_unit: 'years',
      
      bmi_label: 'Body Mass Index (BMI)',
      bmi_help: 'Higher BMI is associated with decreased VBAC success rates and increased cesarean risk',
      bmi_error: 'BMI must be between 15-60 kg/m²',
      bmi_unit: 'kg/m²',
      
      // Previous delivery history
      previous_vaginal_delivery_label: 'Previous Vaginal Delivery',
      previous_vaginal_delivery_help: 'History of vaginal delivery significantly increases VBAC success probability',
      
      indication_previous_cd_label: 'Indication for Previous Cesarean',
      indication_previous_cd_help: 'The reason for previous cesarean affects likelihood of successful VBAC',
      indication_non_recurring: 'Non-recurring (breech, placenta previa, fetal distress)',
      indication_recurring: 'Recurring (cephalopelvic disproportion, failure to progress)',
      indication_unknown: 'Unknown indication',
      
      // Current pregnancy parameters
      gestational_age_label: 'Gestational Age',
      gestational_age_help: 'Current gestational age at time of labor - optimal VBAC success at term',
      gestational_age_error: 'Gestational age must be between 34-42 weeks',
      gestational_age_unit: 'weeks',
      
      cervical_dilation_label: 'Cervical Dilation at Admission',
      cervical_dilation_help: 'Degree of cervical dilation upon hospital admission - higher dilation improves success',
      cervical_dilation_error: 'Cervical dilation must be between 0-10 cm',
      cervical_dilation_unit: 'cm',
      cervical_dilation_optional: 'Optional - leave blank if unknown',
      
      estimated_fetal_weight_label: 'Estimated Fetal Weight',
      estimated_fetal_weight_help: 'Fetal weight estimation affects VBAC success - macrosomia increases cesarean risk',
      estimated_fetal_weight_error: 'Estimated fetal weight must be between 1000-6000 grams',
      estimated_fetal_weight_unit: 'grams',
      estimated_fetal_weight_optional: 'Optional - leave blank if unknown',
      
      // Navigation
      next_obstetric_history: 'Next: Obstetric History',
      next_current_pregnancy: 'Next: Current Pregnancy',
      calculate_button: 'Calculate VBAC Success',
      calculating: 'Calculating success probability...',
      
      // Results
      vbac_success_analysis: 'VBAC Success Prediction Analysis',
      success_probability: 'Success Probability',
      success_percentage: '{percentage}% success probability',
      
      // Success categories
      excellent_candidate: 'Excellent VBAC Candidate',
      good_candidate: 'Good VBAC Candidate',
      moderate_candidate: 'Moderate VBAC Candidate',
      poor_candidate: 'Poor VBAC Candidate',
      
      // Success ranges
      excellent_success: 'Excellent Success (≥70%)',
      good_success: 'Good Success (50-69%)',
      moderate_success: 'Moderate Success (30-49%)',
      poor_success: 'Poor Success (<30%)',
      
      // Clinical interpretations
      interpretation_excellent: 'Excellent VBAC success probability ({percentage}%). Strong candidate for vaginal delivery. Counsel regarding high likelihood of successful VBAC with standard labor management.',
      interpretation_good: 'Good VBAC success probability ({percentage}%). Appropriate candidate for vaginal delivery with careful monitoring. Discuss realistic expectations and backup plans.',
      interpretation_moderate: 'Moderate VBAC success probability ({percentage}%). Individualized counseling required. Careful risk-benefit analysis with patient preferences consideration.',
      interpretation_poor: 'Poor VBAC success probability ({percentage}%). Consider repeat cesarean delivery. Extensive counseling regarding low success rate and increased complications risk.',
      
      // Clinical recommendations
      clinical_recommendation: 'Clinical Recommendation',
      delivery_planning: 'Delivery Planning',
      patient_counseling: 'Patient Counseling',
      labor_management: 'Labor Management',
      
      // Recommendations by success rate
      recommendation_excellent: 'Strong recommendation for VBAC trial. Standard labor management protocols with routine monitoring. Excellent prognosis for vaginal delivery.',
      recommendation_good: 'Recommend VBAC trial with careful monitoring. Enhanced fetal and maternal surveillance during labor. Good prognosis with appropriate management.',
      recommendation_moderate: 'Individualized decision-making required. Careful counseling regarding success rates and alternatives. Consider patient preferences and clinical circumstances.',
      recommendation_poor: 'Consider repeat cesarean delivery as primary recommendation. If VBAC attempted, requires intensive monitoring and immediate cesarean availability.',
      
      // Delivery planning guidance
      planning_excellent: 'Plan for routine vaginal delivery with standard protocols. Prepare for normal labor progression and vaginal birth outcome.',
      planning_good: 'Plan for vaginal delivery with enhanced monitoring. Ensure immediate cesarean availability and clear emergency protocols.',
      planning_moderate: 'Develop individualized birth plan with multiple scenarios. Consider elective repeat cesarean as reasonable alternative option.',
      planning_poor: 'Primary recommendation for elective repeat cesarean delivery. If VBAC attempted, requires tertiary care facility with immediate surgical capability.',
      
      // Patient counseling guidance
      counseling_excellent: 'Counsel regarding excellent success probability. Discuss benefits of vaginal delivery and low complication risk.',
      counseling_good: 'Balanced counseling regarding good success probability. Discuss both vaginal delivery benefits and potential complications.',
      counseling_moderate: 'Extensive counseling regarding moderate success probability. Present realistic expectations and alternative delivery options.',
      counseling_poor: 'Comprehensive counseling regarding low success probability. Strongly recommend consideration of repeat cesarean delivery.',
      
      // Contributing factors analysis
      contributing_factors: 'Contributing Factors Analysis',
      positive_factors: 'Positive Factors',
      negative_factors: 'Negative Factors',
      neutral_factors: 'Neutral Factors',
      
      // Factors descriptions
      factor_optimal_age: 'Optimal maternal age (20-35 years) - favorable for VBAC success',
      factor_advanced_age: 'Advanced maternal age (>35 years) - slightly decreased success',
      factor_young_age: 'Young maternal age (<20 years) - variable success rates',
      factor_normal_bmi: 'Normal BMI (18.5-24.9) - optimal for VBAC success',
      factor_overweight: 'Overweight BMI (25-29.9) - moderately decreased success',
      factor_obese: 'Obese BMI (≥30) - significantly decreased success probability',
      factor_previous_vaginal: 'Previous vaginal delivery - strongly favors VBAC success',
      factor_no_previous_vaginal: 'No previous vaginal delivery - neutral factor',
      factor_non_recurring_indication: 'Non-recurring cesarean indication - favors VBAC success',
      factor_recurring_indication: 'Recurring cesarean indication - decreased VBAC success',
      factor_term_gestation: 'Term gestation (37-40 weeks) - optimal for VBAC',
      factor_preterm_gestation: 'Preterm gestation (<37 weeks) - variable outcomes',
      factor_postterm_gestation: 'Post-term gestation (>40 weeks) - slightly decreased success',
      factor_favorable_dilation: 'Favorable cervical dilation (≥4 cm) - improved success probability',
      factor_minimal_dilation: 'Minimal cervical dilation (<4 cm) - decreased success probability',
      factor_normal_fetal_weight: 'Normal estimated fetal weight (2500-4000g) - optimal for VBAC',
      factor_macrosomia: 'Fetal macrosomia (>4000g) - decreased VBAC success',
      factor_low_birth_weight: 'Low estimated fetal weight (<2500g) - variable outcomes',
      
      // Risk assessment
      risk_assessment: 'Risk Assessment',
      maternal_risks: 'Maternal Risks',
      fetal_risks: 'Fetal Risks',
      uterine_rupture_risk: 'Uterine Rupture Risk',
      
      // Risk descriptions
      risk_uterine_rupture: 'Uterine rupture risk: ~0.4-0.9% (low but serious)',
      risk_maternal_morbidity: 'Maternal morbidity risk varies with success probability',
      risk_fetal_complications: 'Fetal complications risk related to labor duration',
      risk_emergency_cesarean: 'Emergency cesarean risk inversely related to success probability',
      
      // Monitoring recommendations
      monitoring_recommendations: 'Monitoring Recommendations',
      continuous_fetal_monitoring: 'Continuous fetal heart rate monitoring during labor',
      intrauterine_pressure_monitoring: 'Consider intrauterine pressure monitoring',
      immediate_cesarean_availability: 'Immediate cesarean delivery availability required',
      experienced_providers: 'Experienced providers in attendance throughout labor',
      
      // Action buttons
      new_assessment: 'New Assessment',
      modify_inputs: 'Modify Inputs',
      print_results: 'Print Results',
      share_results: 'Share Results',
      
      // About section
      about_title: 'About VBAC Success Prediction',
      clinical_validation: 'Clinical Validation',
      prediction_model: 'Prediction Model',
      evidence_base: 'Evidence Base',
      limitations: 'Limitations',
      
      // Model information
      model_description: 'Validated prediction model incorporating maternal characteristics, obstetric history, and current pregnancy parameters to estimate VBAC success probability.',
      model_validation: 'Based on large-scale retrospective studies and prospective validation cohorts with proven clinical accuracy.',
      model_limitations: 'Prediction model provides probability estimates but cannot guarantee outcomes. Individual patient factors and intrapartum events may influence actual success.',
      
      // Evidence base
      evidence_acog: 'ACOG Practice Bulletin No. 205: Vaginal Birth After Cesarean Delivery',
      evidence_cochrane: 'Cochrane systematic reviews on VBAC outcomes and prediction',
      evidence_studies: 'Multiple large-scale studies validating VBAC success prediction models',
      
      // Footer
      based_on_evidence: 'Based on Evidence-Based VBAC Prediction Models • ACOG Practice Bulletin No. 205',
      obstetric_safety_validated: 'Obstetric Safety Validated',
      
      // Step navigation
      step_1: 'Step 1',
      step_2: 'Step 2', 
      step_3: 'Step 3',
      step_1_title: 'Maternal Demographics',
      step_2_title: 'Obstetric History',
      step_3_title: 'Current Pregnancy'
    }
  },
  sidebar: {
    aiChatbot: 'AI Chatbot',
    patientTable: 'Patient Table',
    myPatients: 'My Patients',
    bgAnalysis: 'BG Analysis',
    ecgAnalysis: 'ECG Analysis',
    medivoice: 'MediVoice'
  },
  chat: {
    newChat: 'New Chat',
    searchPlaceholder: 'Search conversations...',
    noConversations: 'No conversations yet',
    noConversationsFound: 'No conversations found',
    selectConversation: 'Select a conversation or start a new one',
    typeMessage: 'Type your message...',
    startConversation: 'Start a conversation with MediMind AI',
    send: 'Send',
    processing: 'Processing...',
    chatWindow: 'Chat Window',
    messageHistory: 'Message History',
    welcomeTitle: 'Welcome to AI Co-Pilot',
    welcomeMessage: 'Ask me anything about medical cases, guidelines, or get assistance with clinical decisions.',
    aiTyping: 'AI is typing...',
    sources: 'Sources',
    showMore: 'Show more',
    showLess: 'Show less',
    uploadFile: 'Upload file',
    fileUploaded: 'File uploaded',
    fileError: 'File error',
    maxFileSize: 'Maximum file size',
    supportedFormats: 'Supported formats',
    attachFile: 'Attach file',
    removeAttachment: 'Remove attachment',
    sendMessage: 'Send message',
    maxFilesError: 'Maximum {maxFiles} files allowed',
    personalDocsAvailable: '{count} personal documents available',
    noPersonalDocs: 'No personal documents uploaded',
    generalMedicalKnowledge: 'General medical knowledge base'
  },
  case: {
    createNewCase: 'Create New Case',
    newCase: 'New Case',
    caseTitle: 'Case Title',
    caseDescription: 'Case Description',
    anonymizedInfo: 'Anonymized Patient Information',
    category: 'Category',
    complexity: 'Complexity',
    tags: 'Tags',
    createCase: 'Create Case',
    creating: 'Creating...',
    privacyNotice: 'Privacy Notice',
    privacyMessage: 'Please ensure all patient information is completely anonymized. Remove names, dates, specific locations, and any other identifying details.',
    anonymizationHelp: 'Include relevant medical history, symptoms, test results, and other clinical information. Ensure all identifying details are removed.',
    activeCase: 'Active Case',
    caseDiscussion: 'Case Discussion',
    resetCase: 'Reset Case',
    viewCases: 'View Cases',
    noCases: 'No cases created yet',
    caseCreated: 'Case created successfully',
    caseSaved: 'Case saved',
    caseDeleted: 'Case deleted'
  },
  documents: {
    uploadTitle: 'Upload Documents',
    uploadSubtitle: 'Add medical literature, research papers, and clinical documents to your knowledge base',
    dragDropText: 'Drag and drop files here, or click to select',
    browseFiles: 'Browse Files',
    supportedFormats: 'Supported formats: PDF, Word, Text, Markdown, CSV',
    maxFileSize: 'Maximum file size: {size}MB',
    maxFiles: 'Maximum {count} files',
    selectFiles: 'Select Files',
    uploading: 'Uploading...',
    processing: 'Processing...',
    complete: 'Complete',
    error: 'Error',
    success: 'Success',
    retry: 'Retry',
    remove: 'Remove',
    retryAll: 'Retry All Failed',
    clearErrors: 'Clear Errors',
    title: 'Title',
    titlePlaceholder: 'Enter document title',
    description: 'Description',
    descriptionPlaceholder: 'Enter document description',
    tags: 'Tags',
    tagsPlaceholder: 'Add tags (press Enter)',
    category: 'Category',
    selectCategory: 'Select category',
    advancedOptions: 'Advanced Options',
    showAdvancedOptions: 'Show Advanced Options',
    hideAdvancedOptions: 'Hide Advanced Options',
    initializingKnowledgeBase: 'Initializing personal knowledge base...',
    uploadSuccess: 'Documents uploaded successfully!',
    uploadError: 'Failed to upload documents. Please try again.',
    fileTypeError: 'Unsupported file type: {type}. Please upload PDF, Word, text, or CSV files.',
    fileSizeError: 'File size exceeds {size}MB limit. Please choose a smaller file.',
    emptyFileError: 'File appears to be empty. Please select a valid file.',
    largeFileWarning: 'Large file detected. Processing may take longer.',
    imageFileWarning: 'Large image file. Consider compressing for faster processing.',
    noFilesSelected: 'No files selected for upload.',
    allFilesProcessed: 'All files have been processed.',
    categories: {
      'research-papers': 'Research Papers',
      'clinical-guidelines': 'Clinical Guidelines',
      'case-studies': 'Case Studies',
      'medical-images': 'Medical Images',
      'lab-results': 'Lab Results',
      'patient-education': 'Patient Education',
      'protocols': 'Protocols',
      'reference-materials': 'Reference Materials',
      'personal-notes': 'Personal Notes',
      'other': 'Other'
    },
    fileTypes: {
      'pdf': 'PDF Document',
      'word-doc': 'Word Document (.doc)',
      'word-docx': 'Word Document (.docx)',
      'text': 'Text File',
      'markdown': 'Markdown File',
      'csv': 'CSV File',
      'unknown': 'Unknown'
    },
    status: {
      pending: 'Pending',
      uploading: 'Uploading',
      processing: 'Processing',
      complete: 'Complete',
      success: 'Success',
      error: 'Error',
      ready: 'Ready'
    },
    
    // DocumentList translations
    list: {
      noDocuments: 'No documents uploaded yet',
      noDocumentsFiltered: 'No documents found',
      uploadFirstDocument: 'Upload your first medical document to get started with AI-powered analysis and intelligent document management.',
      adjustSearchCriteria: 'Try adjusting your search criteria or filters to find what you\'re looking for.',
      uploadFirstButton: 'Upload Your First Document',
      showing: 'Showing',
      of: 'of',
      documents: 'documents',
      moreResultsAvailable: 'More results available',
      showingFirst: 'Showing first {count} documents. Use filters to narrow down results.'
    },
    
    // DocumentItem translations
    item: {
      viewDetails: 'View Document Details',
      downloadDocument: 'Download Document',
      deleteDocument: 'Delete Document',
      processingError: 'Processing Error',
      moreTagsIndicator: '+{count} more',
      statusLabels: {
        completed: 'Ready',
        processing: 'Processing',
        pending: 'Pending',
        failed: 'Error'
      }
    },
    
    // Status messages
    statuses: {
      pending: 'Pending upload',
      uploading: 'Uploading file...',
      processing: 'Processing document...',
      complete: 'Processing complete',
      success: 'Successfully uploaded',
      error: 'Upload failed'
    },
    
    // Action messages
    selectedFiles: '{count} file selected|{count} files selected',
    filesUploaded: '{count} uploaded',
    filesFailed: '{count} failed',
    filesSelected: '{count} file selected|{count} files selected',
    uploadButton: 'Upload {count} Document|Upload {count} Documents',
    retryCount: 'Retry #{count}',
    retryInstruction: 'Click the retry button or try uploading again.',
    uploadSuccessMessage: 'Upload successful! Processing in background...',
    clearAll: 'Clear All',
    close: 'Close',
    cancel: 'Cancel',
    dropFiles: 'Drop files here'
  },
  profile: {
    profileInfo: 'Profile Information',
    security: 'Security',
    preferences: 'Preferences',
    fullName: 'Full Name',
    medicalSpecialty: 'Medical Specialty',
    aboutMe: 'About Me / Professional Context',
    editProfile: 'Edit Profile',
    saveChanges: 'Save Changes',
    cancel: 'Cancel',
    saving: 'Saving...',
    noNameSet: 'No name set',
    notSet: 'Not set',
    unknown: 'Unknown',
    memberSince: 'Member since',
    enterFullName: 'Enter your full name',
    aboutMeDesc: 'This information helps the AI provide more personalized assistance based on your background and experience.',
    aboutMePlaceholder: 'Tell us about your medical background, experience, areas of interest, or any other context that would help the AI assist you better...',
    selectSpecialty: 'Select a specialty',
    cardiology: 'Cardiology',
    obgyn: 'Obstetrics & Gynecology',
    internalMedicine: 'Internal Medicine',
    emergencyMedicine: 'Emergency Medicine',
    pediatrics: 'Pediatrics',
    surgery: 'Surgery',
    familyMedicine: 'Family Medicine',
    psychiatry: 'Psychiatry',
    radiology: 'Radiology',
    anesthesiology: 'Anesthesiology',
    other: 'Other',
    nameMinLength: 'Full name must be at least 2 characters long',
    updateSuccess: 'Profile updated successfully!',
    updateError: 'Failed to update profile. Please try again.',
    passwordUpdateSuccess: 'Password updated successfully!',
    comingSoon: 'Coming Soon',
    preferencesDesc: 'Preferences and settings will be available in a future update.'
  },
  errors: {
    general: 'General error',
    network: 'Network error',
    authentication: 'Authentication error',
    authorization: 'Authorization error',
    validation: 'Validation error',
    fileUpload: 'File upload error',
    processing: 'Processing error',
    notFound: 'Not found',
    serverError: 'Server error',
    unknownError: 'Unknown error',
    tryAgain: 'Try again',
    contactSupport: 'Contact support'
  },
  medical: {
    age: 'Age',
    weight: 'Weight',
    height: 'Height',
    bmi: 'BMI',
    bloodPressure: 'Blood Pressure',
    systolic: 'Systolic',
    diastolic: 'Diastolic',
    heartRate: 'Heart Rate',
    cholesterol: 'Cholesterol',
    glucose: 'Glucose',
    creatinine: 'Creatinine',
    hemoglobin: 'Hemoglobin',
    pregnancy: 'Pregnancy',
    menopause: 'Menopause',
    smoking: 'Smoking',
    diabetes: 'Diabetes',
    hypertension: 'Hypertension',
    familyHistory: 'Family History',
    medications: 'Medications',
    allergies: 'Allergies',
    symptoms: 'Symptoms',
    diagnosis: 'Diagnosis',
    treatment: 'Treatment',
    prognosis: 'Prognosis',
    followUp: 'Follow-up'
  },
  validation: {
    required: 'This field is required',
    invalidEmail: 'Invalid email address',
    passwordMinLength: 'Password must be at least 6 characters',
    passwordsDoNotMatch: 'Passwords do not match',
    nameMinLength: 'Name must be at least 2 characters',
    confirmPasswordRequired: 'Please confirm your password',
    invalidNumber: 'Please enter a valid number',
    minValue: 'Value must be at least {min}',
    maxValue: 'Value must be at most {max}',
    invalidDate: 'Please enter a valid date',
    invalidPhone: 'Please enter a valid phone number'
  },
  feedback: {
    saveSuccess: 'Successfully saved',
    updateSuccess: 'Successfully updated',
    deleteSuccess: 'Successfully deleted',
    uploadSuccess: 'Successfully uploaded',
    calculationComplete: 'Calculation complete',
    operationComplete: 'Operation complete',
    changesSaved: 'Changes saved',
    dataSynced: 'Data synced',
    actionCompleted: 'Action completed'
  },
  landing: {
    heroTitle: 'Specialized Medical Intelligence, Instantly.',
    heroSubtitle: 'Empowering Cardiologists and OB/GYNs with rapid access to curated medical literature, AI-driven case discussions, and personalized knowledge bases. Streamline your decision-making and stay ahead with MediMind Expert.',
    getStarted: 'Start Free Trial',
    learnMore: 'Learn More',
    features: {
      title: 'Key Features of MediMind Expert',
      subtitle: 'Empowering medical specialists with AI-driven insights and tailored knowledge.',
      aiCoPilot: {
        title: 'AI Medical Co-Pilot',
        description: 'Engage in contextual case discussions, get instant answers from medical literature, and leverage an AI assistant tailored to your specialty.'
      },
      knowledgeAccess: {
        title: 'Specialized Knowledge Access',
        description: 'Instantly access curated, up-to-date medical literature, guidelines, and treatment plans specific to Cardiology & OB/GYN.'
      },
      personalKB: {
        title: 'Personal Knowledge Base',
        description: 'Integrate your trusted resources. Upload documents to create a secure, searchable knowledge base for your AI Co-Pilot.'
      },
      specialtyTools: {
        title: 'Specialty-Specific Tools',
        description: 'Utilize built-in medical calculators and access common forms relevant to your specialty, streamlining daily tasks.'
      }
    },
    testimonials: 'Testimonials',
    pricing: 'Pricing',
    contact: 'Contact',
    footer: 'Footer'
  },
  ui: {
    openMenu: 'Navigation menu opened',
    closeMenu: 'Navigation menu closed',
    expandAll: 'Expand all',
    collapseAll: 'Collapse all',
    selectAll: 'Select all',
    clearAll: 'Clear all',
    sortBy: 'Sort by',
    filterBy: 'Filter by',
    groupBy: 'Group by',
    viewDetails: 'View details',
    editItem: 'Edit item',
    deleteItem: 'Delete item',
    duplicateItem: 'Duplicate item',
    shareItem: 'Share item',
    exportData: 'Export data',
    importData: 'Import data',
    refresh: 'Refresh',
    settings: 'Settings',
    help: 'Help',
    about: 'About',
    escapeToClose: 'Press Escape to close'
  },
  notes: {
    newNote: 'New Note',
    searchNotes: 'Search notes...',
    save: 'Save',
    delete: 'Delete',
    untitledNote: 'Untitled Note',
    addNote: 'Add Note'
  },
  patients: {
    title: 'Cardiac Patient Table - 9th Floor',
    addPatient: 'Add Patient',
    status: {
      unstable: 'Unstable',
      stable: 'Stable',
      'discharge-ready': 'Ready for Discharge'
    },
    rooms: {
      title: 'Rooms',
      room: 'Room {{number}}',
      bed: 'Bed {{number}}',
      clickToAdd: 'Click to add patient'
    },
    basicInfo: {
      name: 'Name',
      diagnosis: 'Diagnosis',
      comorbidities: 'Comorbidities'
    }
  },
  onboarding: {
    welcome: "Welcome to MediMind Expert",
    setupMessage: "Let's set up your personalized medical workspace",
    settingUpWorkspace: "Setting up your workspace...",
    steps: {
      selectSpecialty: "Select Specialty",
      aboutYou: "About You"
    },
    specialty: {
      title: "Choose Your Medical Specialty",
      subtitle: "Select your primary area of practice to get personalized AI assistance and resources",
      featuresTitle: "What you'll get:",
      note: "You can access resources from both specialties, but your workspace will be optimized for your primary choice",
      cardiology: {
        name: "Cardiology",
        description: "Heart and cardiovascular system care",
        features: {
          cardiac: "Cardiac assessment tools",
          ecg: "ECG interpretation guides", 
          heartFailure: "Heart failure protocols",
          interventional: "Interventional cardiology resources"
        }
      },
      obgyn: {
        name: "OB/GYN",
        description: "Obstetrics and Gynecology",
        features: {
          prenatal: "Prenatal care guidelines",
          gynecological: "Gynecological procedures",
          obstetric: "Obstetric calculators",
          reproductive: "Reproductive health resources"
        }
      }
    },
    aboutMe: {
      title: "Tell us about yourself",
      subtitle: "Help us personalize your AI assistant by sharing context about your practice and experience",
      label: "About your practice and experience",
      placeholder: "Share any details that would help the AI provide more relevant assistance. For example, your years of experience, practice setting, areas of special interest, or typical case types you encounter...",
      wordCount: "{{count}} words • Optional but recommended for better personalization",
      keepConcise: "Consider keeping it concise for best results",
      suggestionsTitle: "Consider including:",
      suggestions: {
        experience: "Years of experience in practice",
        workplace: "Current workplace setting (hospital, clinic, private practice)",
        interests: "Areas of special interest within your specialty",
        cases: "Types of cases you see most frequently",
        approaches: "Preferred treatment approaches or methodologies",
        education: "Continuing education focus areas"
      },
      exampleTitle: "Example:",
      exampleText: "\"I'm a cardiologist with 8 years of experience working in a large hospital system. I specialize in interventional cardiology and frequently handle complex PCI cases. I'm particularly interested in the latest evidence on TAVR procedures and managing patients with multiple comorbidities.\"",
      skipForNow: "Skip for now",
      completeSetup: "Complete Setup"
    }
  },
  loading: {
    loading: "Loading...",
    verifying_specialty: "Verifying specialty access...",
    authenticating: "Authenticating...",
    processing: "Processing...",
    please_wait: "Please wait..."
  },
  access: {
    access_denied: "Access denied. This section is restricted to {specialties} specialists.",
    unauthorized: "You are not authorized to access this section.",
    invalid_specialty: "Invalid specialty access.",
    redirect_message: "Redirecting to your workspace..."
  }
};