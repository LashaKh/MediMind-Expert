#!/usr/bin/env node

// Test script to verify GDM screening calculator translations
// Tests that all required translation keys exist in all supported languages

const fs = require('fs');
const path = require('path');

// Import translation files
const enTranslations = require('./src/i18n/translations/en/calculators/ObGyn/gdm-screening-calculator.ts');
const ruTranslations = require('./src/i18n/translations/ru/calculators/ObGyn/gdm-screening-calculator.ts');
const kaTranslations = require('./src/i18n/translations/ka/calculators/ObGyn/gdm-screening-calculator.ts');

// Required translation keys for GDM screening
const requiredKeys = [
  'title',
  'interpretations.low',
  'interpretations.moderate', 
  'interpretations.high',
  'recommendations.low',
  'recommendations.moderate',
  'recommendations.high',
  'recommendations.universal',
  'result_values.risk_levels.low',
  'result_values.risk_levels.moderate',
  'result_values.risk_levels.high',
  'result_values.screening_recommendations.early',
  'result_values.screening_recommendations.standard',
  'result_values.testing_protocols.one-step',
  'result_values.testing_protocols.two-step'
];

function checkTranslations(translations, language) {
  console.log(`\n🔍 Checking ${language.toUpperCase()} translations:`);
  
  const gdm = translations.gdmScreeningCalculator;
  let missingKeys = [];
  let foundKeys = [];
  
  requiredKeys.forEach(key => {
    const keyPath = key.split('.');
    let current = gdm;
    
    for (const segment of keyPath) {
      if (current && typeof current === 'object' && segment in current) {
        current = current[segment];
      } else {
        current = undefined;
        break;
      }
    }
    
    if (current !== undefined) {
      foundKeys.push(key);
      if (typeof current === 'string') {
        console.log(`  ✅ ${key}: "${current.substring(0, 50)}${current.length > 50 ? '...' : ''}"`);
      } else if (Array.isArray(current)) {
        console.log(`  ✅ ${key}: [${current.length} items]`);
      } else {
        console.log(`  ✅ ${key}: ${typeof current}`);
      }
    } else {
      missingKeys.push(key);
      console.log(`  ❌ ${key}: MISSING`);
    }
  });
  
  return { found: foundKeys.length, missing: missingKeys.length, missingKeys };
}

function testInterpretationInterpolation(translations, language) {
  console.log(`\n🧪 Testing interpretation interpolation for ${language.toUpperCase()}:`);
  
  const gdm = translations.gdmScreeningCalculator;
  const riskLevels = ['low', 'moderate', 'high'];
  
  riskLevels.forEach(level => {
    const interpretation = gdm.interpretations[level];
    if (interpretation && interpretation.includes('{score}')) {
      const interpolated = interpretation.replace('{score}', '3');
      console.log(`  ✅ ${level}: "${interpolated.substring(0, 80)}${interpolated.length > 80 ? '...' : ''}"`);
    } else {
      console.log(`  ❌ ${level}: Missing {score} placeholder or interpretation`);
    }
  });
}

function main() {
  console.log('🏥 GDM Screening Calculator Translation Test');
  console.log('='.repeat(50));
  
  // Test all languages
  const enResult = checkTranslations(enTranslations, 'English');
  const ruResult = checkTranslations(ruTranslations, 'Russian');
  const kaResult = checkTranslations(kaTranslations, 'Georgian');
  
  // Test interpretation interpolation
  testInterpretationInterpolation(enTranslations, 'English');
  testInterpretationInterpolation(ruTranslations, 'Russian');
  testInterpretationInterpolation(kaTranslations, 'Georgian');
  
  // Summary
  console.log('\n📊 SUMMARY:');
  console.log('='.repeat(50));
  console.log(`English: ${enResult.found}/${requiredKeys.length} keys found`);
  console.log(`Russian: ${ruResult.found}/${requiredKeys.length} keys found`);
  console.log(`Georgian: ${kaResult.found}/${requiredKeys.length} keys found`);
  
  const allComplete = enResult.missing === 0 && ruResult.missing === 0 && kaResult.missing === 0;
  
  if (allComplete) {
    console.log('\n🎉 SUCCESS: All translations are complete!');
    console.log('✅ GDM screening calculator mixed language issue should be resolved');
    process.exit(0);
  } else {
    console.log('\n⚠️  WARNING: Some translations are missing');
    if (enResult.missing > 0) console.log(`   English missing: ${enResult.missingKeys.join(', ')}`);
    if (ruResult.missing > 0) console.log(`   Russian missing: ${ruResult.missingKeys.join(', ')}`);
    if (kaResult.missing > 0) console.log(`   Georgian missing: ${kaResult.missingKeys.join(', ')}`);
    process.exit(1);
  }
}

main(); 