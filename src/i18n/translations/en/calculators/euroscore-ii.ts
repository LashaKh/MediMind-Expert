export default {
  title: 'EuroSCORE II Risk Calculator',
  subtitle: 'European System for Cardiac Operative Risk Evaluation • Version 2 • 30-Day Mortality Prediction',
  description: 'Updated European system for cardiac operative risk evaluation providing 30-day mortality predictions. Validated across European centers with improved calibration over the original EuroSCORE model.',
  
  // Validation messages
  validation: {
    age_required: 'Age is required',
    age_range: 'Age must be between 18-120 years',
    gender_required: 'Gender is required',
    urgency_required: 'Urgency is required',
    nyha_required: 'NYHA class is required',
    procedure_weight_required: 'Procedure weight/complexity is required',
    creatinine_required: 'Creatinine is required',
    creatinine_range: 'Creatinine must be between 0.5-15 mg/dL'
  },
  
  // Alert section
  alert_title: 'EuroSCORE II - European Cardiac Surgery Risk Model',
  alert_description: 'Updated European system for cardiac operative risk evaluation providing 30-day mortality predictions. Validated across European centers with improved calibration over the original EuroSCORE model.',
  alert_validation: 'Nashef et al. - European Validation - Updated Algorithm',
  
  // Progress steps
  step_patient_factors: 'Patient Factors',
  step_cardiac_status: 'Cardiac Status',
  step_operative_factors: 'Operative Factors',
  step_procedures: 'Procedures',
  
  // Section headers
  section_patient_demographics: 'Patient Demographics & Basic Factors',
  section_patient_description: 'Basic patient characteristics and laboratory values',
  section_cardiac_factors: 'Cardiac-Related Factors',
  section_cardiac_description: 'Cardiac history, symptoms, and functional status',
  section_operative_factors: 'Operative Factors',
  section_operative_description: 'Procedure complexity and critical preoperative conditions',
  section_valve_procedures: 'Valve Procedures',
  section_specific_cardiac_procedures: 'Specific Cardiac Procedures',
  section_specific_procedures_description: 'Individual valve and surgical procedure specifications',
  
  // Demographics fields
  age_label: 'Age',
  age_placeholder: '65',
  age_unit: 'years',
  gender_label: 'Gender',
  gender_placeholder: 'Select gender...',
  gender_male: 'Male',
  gender_female: 'Female',
  creatinine_label: 'Serum Creatinine',
  creatinine_placeholder: '1.0',
  creatinine_unit: 'mg/dL',
  
  // Additional risk factors section
  additional_risk_factors: 'Additional Patient Risk Factors',
  poor_mobility_label: 'Poor Mobility',
  poor_mobility_description: 'Impaired mobility affecting daily activities',
  diabetes_insulin_label: 'Diabetes on Insulin',
  diabetes_insulin_description: 'Diabetes mellitus requiring insulin therapy',
  chronic_pulmonary_label: 'Chronic Pulmonary Disease',
  chronic_pulmonary_description: 'COPD or other chronic lung conditions',
  pvd_label: 'Peripheral Vascular Disease',
  pvd_description: 'Peripheral arterial disease or claudication',
  
  // NYHA and cardiac factors
  nyha_label: 'NYHA Functional Class',
  nyha_placeholder: 'Select NYHA class...',
  nyha_class_1: 'Class I - No symptoms',
  nyha_class_2: 'Class II - Slight limitation',
  nyha_class_3: 'Class III - Marked limitation',
  nyha_class_4: 'Class IV - Severe limitation',
  
  urgency_label: 'Urgency',
  urgency_placeholder: 'Select urgency level...',
  urgency_elective: 'Elective',
  urgency_urgent: 'Urgent',
  urgency_emergency: 'Emergency',
  
  // Cardiac conditions
  cardiac_history_title: 'Cardiac History & Conditions',
  recent_mi_label: 'Recent MI (within 90 days)',
  recent_mi_description: 'Myocardial infarction within 90 days',
  unstable_angina_label: 'Unstable Angina',
  unstable_angina_description: 'Rest angina requiring IV nitrates',
  pulmonary_hypertension_label: 'Pulmonary Hypertension',
  pulmonary_hypertension_description: 'Systolic PA pressure > 60 mmHg',
  extracardiac_arteriopathy_label: 'Extracardiac Arteriopathy',
  extracardiac_arteriopathy_description: 'Claudication, carotid occlusion, or stroke',
  neurological_dysfunction_label: 'Neurological Dysfunction',
  neurological_dysfunction_description: 'Disease severely affecting ambulation or day-to-day functioning',
  previous_cardiac_surgery_label: 'Previous Cardiac Surgery',
  previous_cardiac_surgery_description: 'Prior cardiac surgical procedure',
  active_endocarditis_label: 'Active Endocarditis',
  active_endocarditis_description: 'Patient still under antibiotic treatment for endocarditis',
  
  // Operative factors
  procedure_weight_label: 'Procedure Weight/Complexity',
  procedure_weight_placeholder: 'Select procedure complexity...',
  procedure_weight_low: 'Low complexity (CABG only, single valve)',
  procedure_weight_medium: 'Medium complexity (CABG + valve, double valve)',
  procedure_weight_high: 'High complexity (multiple procedures, complex repairs)',
  
  critical_preoperative_label: 'Critical Preoperative State',
  critical_preoperative_description: 'Ventricular tachycardia or ventricular fibrillation or aborted sudden death, preoperative cardiac massage, preoperative ventilation before anesthetic room, preoperative inotropic support, intra-aortic balloon counterpulsation or preoperative acute renal failure (anuria or oliguria < 10 ml/hour)',
  
  critical_conditions_header: 'Critical Preoperative Conditions',
  
  // Procedure complexity info box
  complexity_info_title: 'EuroSCORE II Procedure Complexity',
  complexity_low_info: '• Low: Single valve replacement, CABG only',
  complexity_medium_info: '• Medium: CABG + valve, double valve procedures',
  complexity_high_info: '• High: Multiple valve + CABG, complex aortic surgery, salvage procedures',
  
  // Valve procedures
  aortic_surgery_label: 'Aortic Surgery',
  aortic_surgery_description: 'Aortic valve replacement or repair',
  mitral_surgery_label: 'Mitral Surgery',
  mitral_surgery_description: 'Mitral valve replacement or repair',
  tricuspid_surgery_label: 'Tricuspid Surgery',
  tricuspid_surgery_description: 'Tricuspid valve replacement or repair',
  pulmonary_surgery_label: 'Pulmonary Surgery',
  pulmonary_surgery_description: 'Pulmonary valve replacement or repair',
  
  // Risk assessment info
  risk_assessment_title: 'EuroSCORE II Risk Assessment',
  risk_assessment_complexity: '• Each specific procedure adds to the overall surgical complexity',
  risk_assessment_multiple: '• Multiple valve procedures significantly increase operative risk',
  risk_assessment_combined: '• Consider combined procedures when calculating final risk',
  
  // Navigation buttons
  next_cardiac_status: 'Next: Cardiac Status',
  next_operative_factors: 'Next: Operative Factors',
  next_specific_procedures: 'Next: Specific Procedures',
  back_button: 'Back',
  calculate_euroscore_ii: 'Calculate EuroSCORE II',
  
  // Results section
  results_title: 'EuroSCORE II Assessment Results',
  mortality_risk_30day: '30-Day Mortality Risk',
  predicted_mortality: 'Predicted 30-Day Mortality',
  risk_stratification: 'EuroSCORE II Risk Stratification',
  
  // Risk categories and interpretations
  risk_low: 'Low Risk',
  risk_intermediate: 'Intermediate',
  risk_high: 'High Risk',
  risk_very_high: 'Very High',
  
  mortality_low: '< 2% Mortality',
  mortality_intermediate: '2-5% Mortality',
  mortality_high: '5-10% Mortality',
  mortality_very_high: '> 10% Mortality',
  
  interpretation_low: 'Low operative risk (EuroSCORE II <2%)',
  interpretation_intermediate: 'Intermediate operative risk (EuroSCORE II 2-5%)',
  interpretation_high: 'High operative risk (EuroSCORE II 5-10%)',
  interpretation_very_high: 'Very high operative risk (EuroSCORE II >10%)',
  
  // STS Comparison
  sts_comparison_title: 'Comparison with STS Risk Models',
  sts_comparison_low: 'Generally correlates with STS low risk (<2%). Both models support standard surgical approach.',
  sts_comparison_intermediate: 'Similar to STS intermediate risk (2-5%). Enhanced monitoring and optimization recommended.',
  sts_comparison_high: 'Comparable to STS high risk (5-10%). Consider heart team evaluation and alternatives.',
  sts_comparison_very_high: 'Aligns with STS very high risk (>10%). Strong consideration for non-surgical options.',
  sts_comparison_default: 'Risk assessment comparison with STS models recommended.',
  
  // Clinical recommendations
  clinical_recommendations: 'Clinical Management Recommendations',
  
  // Base recommendations
  recommendation_team_evaluation: 'Multidisciplinary heart team evaluation',
  recommendation_preop_optimization: 'Pre-operative optimization as indicated',
  recommendation_counseling: 'Patient and family counseling on risks',
  
  // Low risk recommendations
  recommendation_standard_approach: 'Standard surgical approach appropriate',
  recommendation_fast_track: 'Consider fast-track protocols',
  recommendation_routine_care: 'Routine post-operative care',
  
  // Intermediate risk recommendations
  recommendation_enhanced_assessment: 'Enhanced pre-operative assessment',
  recommendation_additional_imaging: 'Consider additional imaging studies',
  recommendation_standard_icu: 'Standard ICU monitoring',
  recommendation_risk_modification: 'Review for risk factor modification',
  
  // High risk recommendations
  recommendation_alternative_approaches: 'Consider alternative approaches (TAVI, medical therapy)',
  recommendation_extensive_optimization: 'Extensive pre-operative optimization',
  recommendation_extended_icu: 'Extended ICU monitoring planned',
  recommendation_informed_consent: 'Detailed informed consent discussion',
  recommendation_less_invasive: 'Consider less invasive alternatives',
  
  // Very high risk recommendations
  recommendation_non_surgical: 'Strongly consider non-surgical alternatives',
  recommendation_palliative_care: 'Palliative care consultation',
  recommendation_goals_care: 'Goals of care discussion',
  recommendation_high_risk_protocols: 'If surgery pursued, high-risk protocols',
  recommendation_transcatheter: 'Consider transcatheter approaches',
  recommendation_family_meeting: 'Family meeting essential',
  
  // Validation status
  validation_status_title: 'EuroSCORE II Validation Status',
  validation_status_text: '✓ European Validation • Nashef et al. 2012 • Updated Algorithm • Improved Calibration',
  
  // Action buttons
  new_assessment: 'New Assessment',
  modify_inputs: 'Modify Inputs',
  calculate_button: 'Calculate EuroSCORE II',
  new_assessment_button: 'New Assessment',
  modify_inputs_button: 'Modify Inputs',
  
  // Results display labels
  mortality_risk_title: '30-Day Mortality Risk',
  risk_stratification_title: 'EuroSCORE II Risk Stratification',
  clinical_recommendations_title: 'Clinical Management Recommendations',
  predicted_mortality_label: 'Predicted 30-Day Mortality',
  risk_label: 'Risk',
  
  // Risk category labels for display
  low_risk_label: 'Low Risk',
  intermediate_risk_label: 'Intermediate Risk', 
  high_risk_label: 'High Risk',
  very_high_risk_label: 'Very High Risk',
  
  // Risk category ranges
  low_risk_range: '< 2%',
  intermediate_risk_range: '2-5%',
  high_risk_range: '5-10%',
  very_high_risk_range: '> 10%',
  
  // Validation status
  validation_badge: 'European Validation',
  footer_info: 'Based on EuroSCORE II by Nashef et al. • For educational purposes only',
  
  // Footer
  footer_text: 'Based on EuroSCORE II by Nashef et al. • For educational purposes only',
  european_validation: 'European Validation'
}; 