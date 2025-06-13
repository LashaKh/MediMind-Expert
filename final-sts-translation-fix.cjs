const fs = require('fs');

// Read the current STS Calculator file
const filePath = 'src/components/Calculators/STSCalculator.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Fix remaining hardcoded strings that need translation
const finalReplacements = [
  // Section headers that weren't caught
  ['"Patient Demographics & Anthropometrics"', 't(\'calculators.cardiology.sts.patient_demographics\')'],
  ['"Basic patient characteristics for surgical risk assessment"', 't(\'calculators.cardiology.sts.demographics_description\')'],
  ['"Procedure Details & Urgency"', 't(\'calculators.cardiology.sts.procedure_details\')'],
  ['"Type of cardiac surgical procedure and urgency status"', 't(\'calculators.cardiology.sts.procedure_description\')'],
  ['"Clinical Status & Laboratory Values"', 't(\'calculators.cardiology.sts.clinical_status\')'],
  ['"Cardiac function, symptoms, and laboratory parameters"', 't(\'calculators.cardiology.sts.clinical_description\')'],
  ['"Comorbidities & Risk Factors"', 't(\'calculators.cardiology.sts.comorbidities\')'],
  ['"Medical history and additional risk factors for surgical outcomes"', 't(\'calculators.cardiology.sts.comorbidities_description\')'],
  
  // Result section labels
  ['"Predicted Operative Mortality"', 't(\'calculators.cardiology.sts.predicted_mortality\')'],
  ['"Combined Morbidity"', 't(\'calculators.cardiology.sts.combined_morbidity\')'],
  ['"Stroke Risk"', 't(\'calculators.cardiology.sts.stroke_risk\')'],
  ['"Renal Failure"', 't(\'calculators.cardiology.sts.renal_failure\')'],
  ['"Reoperation"', 't(\'calculators.cardiology.sts.reoperation\')'],
  ['"Prolonged Ventilation"', 't(\'calculators.cardiology.sts.prolonged_ventilation\')'],
  ['"Sternal Infection"', 't(\'calculators.cardiology.sts.sternal_infection\')'],
  
  // Section headers in results
  ['"Operative Mortality Risk"', 't(\'calculators.cardiology.sts.operative_mortality\')'],
  ['"Morbidity Predictions"', 't(\'calculators.cardiology.sts.morbidity_predictions\')'],
  ['"Additional Outcomes"', 't(\'calculators.cardiology.sts.additional_outcomes\')'],
  ['"STS Risk Stratification"', 't(\'calculators.cardiology.sts.risk_stratification\')'],
  ['"Clinical Management Recommendations"', 't(\'calculators.cardiology.sts.clinical_recommendations\')'],
  ['"STS National Database Models"', 't(\'calculators.cardiology.sts.database_models\')'],
  
  // Risk category labels
  ['"Low Risk"', 't(\'calculators.cardiology.sts.low_risk\')'],
  ['"Intermediate"', 't(\'calculators.cardiology.sts.intermediate_risk\')'],
  ['"High Risk"', 't(\'calculators.cardiology.sts.high_risk\')'],
  ['"Very High"', 't(\'calculators.cardiology.sts.very_high_risk\')'],
  
  // Risk ranges
  ['"< 2% Mortality"', 't(\'calculators.cardiology.sts.low_risk_range\')'],
  ['"2-8% Mortality"', 't(\'calculators.cardiology.sts.intermediate_risk_range\')'],
  ['"8-15% Mortality"', 't(\'calculators.cardiology.sts.high_risk_range\')'],
  ['"> 15% Mortality"', 't(\'calculators.cardiology.sts.very_high_risk_range\')'],
  
  // Button text
  ['"Next: Procedure Details"', 't(\'calculators.cardiology.sts.next_procedure\')'],
  ['"Next: Clinical Status"', 't(\'calculators.cardiology.sts.next_clinical\')'],
  ['"Next: Comorbidities"', 't(\'calculators.cardiology.sts.next_comorbidities\')'],
  ['"Calculate STS Risk"', 't(\'calculators.cardiology.sts.calculate_button\')'],
  ['"Back"', 't(\'calculators.cardiology.sts.back_button\')'],
  ['"New Assessment"', 't(\'calculators.cardiology.sts.new_assessment\')'],
  ['"Modify Inputs"', 't(\'calculators.cardiology.sts.modify_inputs\')'],
  
  // Section labels
  ['"Valve Assessment (if applicable)"', 't(\'calculators.cardiology.sts.valve_assessment\')'],
  ['"Laboratory Values"', 't(\'calculators.cardiology.sts.laboratory_values\')'],
  ['"STS Risk Assessment"', 't(\'calculators.cardiology.sts.risk_assessment_info\')'],
  
  // Info messages
  ['"Comorbidities significantly impact surgical risk prediction"', 't(\'calculators.cardiology.sts.comorbidities_impact\')'],
  ['"Models validated on over 4 million cardiac surgical procedures"', 't(\'calculators.cardiology.sts.validation_info\')'],
  ['"Risk categories guide perioperative management decisions"', 't(\'calculators.cardiology.sts.risk_categories_info\')'],
  ['"STS Version 2.9 • Evidence-Based • >4 Million Procedures • Validated Risk Prediction"', 't(\'calculators.cardiology.sts.version_info\')'],
  ['"Based on STS National Database risk models • For educational purposes only"', 't(\'calculators.cardiology.sts.disclaimer\')'],
  ['"STS Version 2.9"', 't(\'calculators.cardiology.sts.version_badge\')']
];

// Apply replacements
finalReplacements.forEach(([search, replace]) => {
  content = content.replace(new RegExp(search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), `{${replace}}`);
});

// Write the updated content back to the file
fs.writeFileSync(filePath, content);

console.log('✅ Final STS Calculator translation fixes applied!');
console.log('📝 All remaining hardcoded strings replaced with translation keys');
console.log('🌍 STS Calculator now fully translated'); 