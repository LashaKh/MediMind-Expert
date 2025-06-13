export default {
  endometrialCancer: 'Endometrial Cancer Risk',
  cervicalCancer: 'Cervical Cancer Risk',
  ovarianCancer: 'Ovarian Cancer Risk',
  pretermBirth: 'Preterm Birth Risk',
  ovarianReserve: 'Ovarian Reserve',
  bishopScore: 'Bishop Score',
  dueDate: 'Due Date Calculator',
  preeclampsia: 'Preeclampsia Risk',
  vbacSuccess: 'VBAC Success Calculator',

  endometrial_cancer_risk: {
    title: "Endometrial Cancer Risk Calculator",
    subtitle: "Lifetime Risk Assessment for Endometrial Cancer",
    description: "Evidence-based lifetime risk calculation for endometrial cancer using clinical risk factors and medical literature.",
    
    demographics: "Demographics",
    age_label: "Age (years)",
    age_placeholder: "Enter patient age (18-100 years)",
    
    physical_characteristics: "Physical Characteristics",
    bmi_label: "Body Mass Index (BMI)",
    bmi_placeholder: "Enter BMI (15-60 kg/m²)",
    
    reproductive_history: "Reproductive History",
    parity_label: "Parity (number of live births)",
    parity_placeholder: "Enter number of live births",
    nulliparous: "Nulliparous (no live births)",
    parous: "Parous (one or more live births)",
    
    medical_history: "Medical History",
    diabetes_label: "Diabetes mellitus",
    hypertension_label: "Hypertension",
    pcos_label: "Polycystic ovary syndrome (PCOS)",
    endometrial_hyperplasia_label: "History of endometrial hyperplasia",
    
    family_history: "Family History",
    family_history_endometrial_label: "Family history of endometrial cancer",
    family_history_colorectal_label: "Family history of colorectal cancer",
    lynch_syndrome_label: "Known Lynch syndrome",
    
    hormonal_factors: "Hormonal Factors",
    hrt_use_label: "Hormone replacement therapy use",
    tamoxifen_use_label: "Tamoxifen use",
    oral_contraceptive_use_label: "Oral contraceptive use",
    
    lifetime_risk: "Lifetime Risk",
    risk_category: "Risk Category",
    recommendations: "Clinical Recommendations",
    screening_recommendations: "Screening Recommendations",
    
    average_risk: "Average risk",
    increased_risk: "Increased risk",
    high_risk: "High risk",
    very_high_risk: "Very high risk (Lynch syndrome)",
    
    routine_screening: "Routine screening per guidelines",
    enhanced_surveillance: "Consider enhanced surveillance",
    genetic_counseling: "Genetic counseling recommended",
    specialist_referral: "Specialist referral recommended",
    
    calculate_button: "Calculate Risk",
    
    age_error: "Age must be between 18-100 years",
    bmi_error: "BMI must be between 15-60 kg/m²",
    parity_error: "Parity must be 0 or greater"
  },

  bishop_score: {
    title: "Bishop Score Calculator",
    subtitle: "Cervical Assessment for Induction of Labor",
    description: "Assessment of cervical readiness for labor induction using the Bishop scoring system.",
    
    cervical_assessment: "Cervical Assessment",
    dilation_label: "Cervical dilation (cm)",
    dilation_0: "Closed (0 cm)",
    dilation_1_2: "1-2 cm",
    dilation_3_4: "3-4 cm",
    dilation_5_plus: "5+ cm",
    
    effacement_label: "Cervical effacement (%)",
    effacement_0_30: "0-30%",
    effacement_40_50: "40-50%",
    effacement_60_70: "60-70%",
    effacement_80_plus: "80%+",
    
    consistency_label: "Cervical consistency",
    consistency_firm: "Firm",
    consistency_medium: "Medium",
    consistency_soft: "Soft",
    
    position_label: "Cervical position",
    position_posterior: "Posterior",
    position_mid: "Mid-position",
    position_anterior: "Anterior",
    
    fetal_station: "Fetal Station",
    station_label: "Fetal station",
    station_minus_3: "-3",
    station_minus_2: "-2",
    station_minus_1_0: "-1, 0",
    station_plus_1_2: "+1, +2",
    
    bishop_score: "Bishop Score",
    induction_success: "Induction Success Probability",
    recommendation: "Clinical Recommendation",
    
    unfavorable_cervix: "Unfavorable cervix (≤5)",
    intermediate_cervix: "Intermediate cervix (6-7)",
    favorable_cervix: "Favorable cervix (≥8)",
    
    cervical_ripening_recommended: "Cervical ripening recommended",
    induction_appropriate: "Induction appropriate",
    high_success_probability: "High success probability",
    
    calculate_button: "Calculate Bishop Score"
  },

  vbac_success: {
    title: "VBAC Success Calculator",
    subtitle: "Vaginal Birth After Cesarean Success Predictor",
    description: "Evidence-based prediction of VBAC success using maternal and obstetric factors.",
    
    maternal_demographics: "Maternal Demographics",
    maternal_age_label: "Maternal age (years)",
    maternal_age_placeholder: "Enter maternal age",
    
    obstetric_history: "Obstetric History",
    prior_cesareans_label: "Number of prior cesarean deliveries",
    prior_cesareans_placeholder: "Enter number (1-3)",
    indication_previous_cd_label: "Indication for previous cesarean",
    indication_ftp: "Failure to progress",
    indication_breech: "Breech presentation",
    indication_fetal_distress: "Fetal distress",
    indication_other: "Other indication",
    
    prior_vaginal_delivery_label: "Prior vaginal delivery",
    vbac_history_label: "Prior successful VBAC",
    
    current_pregnancy: "Current Pregnancy",
    gestational_age_label: "Gestational age (weeks)",
    gestational_age_placeholder: "Enter gestational age",
    estimated_fetal_weight_label: "Estimated fetal weight (grams)",
    estimated_fetal_weight_placeholder: "Enter estimated weight",
    
    labor_characteristics: "Labor Characteristics",
    spontaneous_labor_label: "Spontaneous labor onset",
    cervical_dilation_label: "Cervical dilation at admission (cm)",
    cervical_dilation_placeholder: "Enter dilation (0-10 cm)",
    
    vbac_success_probability: "VBAC Success Probability",
    risk_assessment: "Risk Assessment",
    counseling_points: "Counseling Points",
    
    low_success: "Low success probability (<60%)",
    moderate_success: "Moderate success probability (60-80%)",
    high_success: "High success probability (>80%)",
    
    detailed_counseling: "Detailed counseling recommended",
    appropriate_candidate: "Appropriate VBAC candidate",
    consider_risks_benefits: "Consider individual risks and benefits",
    
    calculate_button: "Calculate VBAC Success",
    
    age_error: "Maternal age must be between 15-50 years",
    cesareans_error: "Prior cesareans must be between 1-3",
    gestational_age_error: "Gestational age must be between 24-42 weeks",
    fetal_weight_error: "Estimated fetal weight must be between 500-6000 grams",
    dilation_error: "Cervical dilation must be between 0-10 cm"
  },

  due_date: {
    title: "Due Date Calculator",
    subtitle: "Estimated Date of Delivery Calculator",
    description: "Calculate estimated due date using last menstrual period or ultrasound dating.",
    
    calculation_method: "Calculation Method",
    lmp_method: "Last Menstrual Period (LMP)",
    ultrasound_method: "Ultrasound Dating",
    
    lmp_date_label: "First day of last menstrual period",
    cycle_length_label: "Average cycle length (days)",
    cycle_length_placeholder: "Enter cycle length (21-35 days)",
    
    ultrasound_date_label: "Ultrasound scan date",
    gestational_age_us_label: "Gestational age by ultrasound",
    gestational_age_us_placeholder: "Enter GA (weeks + days)",
    
    estimated_due_date: "Estimated Due Date (EDD)",
    current_gestational_age: "Current Gestational Age",
    term_window: "Term Window",
    
    early_term: "Early term (37-38 weeks)",
    full_term: "Full term (39-40 weeks)",
    late_term: "Late term (41 weeks)",
    post_term: "Post-term (≥42 weeks)",
    
    calculate_button: "Calculate Due Date",
    
    lmp_error: "Please enter a valid LMP date",
    cycle_length_error: "Cycle length must be between 21-35 days",
    ultrasound_date_error: "Please enter a valid ultrasound date",
    gestational_age_error: "Gestational age must be between 6-42 weeks"
  }
}; 