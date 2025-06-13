// Verification script for MAGGIC translation keys
import fs from 'fs';

const georgianFile = fs.readFileSync('src/i18n/translations/ka/calculators/cardiology.ts', 'utf8');

const criticalKeys = [
  'alert_title',
  'alert_description', 
  'demographics_step',
  'clinical_step',
  'therapy_step',
  'patient_demographics',
  'demographics_description',
  'clinical_assessment',
  'clinical_description',
  'therapy_assessment',
  'therapy_description',
  'lvef_label',
  'nyha_class_label',
  'systolic_bp_label',
  'bmi_label',
  'creatinine_label',
  'diabetes_label',
  'copd_label',
  'beta_blocker_label',
  'ace_inhibitor_label',
  'next_clinical_assessment',
  'next_therapy_assessment',
  'interpretation_low',
  'interpretation_intermediate',
  'interpretation_high',
  'interpretation_very_high',
  'recommendation_optimal',
  'recommendation_intensive',
  'recommendation_frequent_monitoring',
  'recommendation_advanced_therapies',
  'badge_meta_analysis'
];

console.log('🔍 Verifying MAGGIC translation keys in Georgian file:');
console.log('='.repeat(60));

let allFound = true;
criticalKeys.forEach(key => {
  const found = georgianFile.includes(`${key}:`);
  const status = found ? '✅ FOUND' : '❌ MISSING';
  console.log(`${key.padEnd(35)} ${status}`);
  if (!found) allFound = false;
});

console.log('='.repeat(60));
if (allFound) {
  console.log('🎉 SUCCESS: All critical MAGGIC translation keys are present!');
  console.log('📱 The Georgian interface should now be fully translated.');
} else {
  console.log('⚠️  WARNING: Some keys are still missing.');
} 