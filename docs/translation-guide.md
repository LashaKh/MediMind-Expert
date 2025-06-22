# 🌐 Medical Calculator Translation Guide

**Complete Guide for Proper Calculator Translation Implementation**

*Based on lessons learned from PPH Risk Calculator translation debugging*

---

## 📋 Table of Contents

1. [Prerequisites & Setup](#prerequisites--setup)
2. [Translation File Creation](#translation-file-creation)
3. [Service Layer Integration](#service-layer-integration)
4. [Component Integration](#component-integration)
5. [Language Switching Mechanics](#language-switching-mechanics)
6. [Testing & Validation](#testing--validation)
7. [Debugging Guide](#debugging-guide)
8. [Common Pitfalls & Solutions](#common-pitfalls--solutions)

---

## 🔧 Prerequisites & Setup

### File Structure
Ensure your translation files follow this exact structure:
```
src/i18n/translations/
├── en/calculators/ObGyn/calculator-name.ts
├── ru/calculators/ObGyn/calculator-name.ts
├── ka/calculators/ObGyn/calculator-name.ts
├── en/calculators/index.ts
├── ru/calculators/index.ts
└── ka/calculators/index.ts
```

### Dependencies Required
- `useTranslation` hook properly configured
- `LanguageContext` with event dispatching
- React `useState`, `useEffect` hooks
- Calculator service functions with translation parameter

---

## 📝 Translation File Creation

### Step 1: Create Translation File Structure

**Example for PPH Risk Calculator:**

```typescript
// src/i18n/translations/en/calculators/ObGyn/pph-risk-calculator.ts
export const pphRiskCalculator = {
  title: 'Postpartum Hemorrhage Risk Assessment',
  subtitle: 'Evidence-based risk stratification for maternal bleeding prevention',
  
  // Form sections
  demographics: {
    title: 'Patient Demographics',
    maternal_age: {
      label: 'Maternal Age',
      placeholder: 'Enter age',
      unit: 'years',
      help: 'Age at time of delivery',
      required_error: 'Maternal age is required',
      validation_error: 'Age must be 15-55 years'
    }
    // ... more fields
  },
  
  // Results sections - CRITICAL PATHS
  results: {
    categories: {
      low: 'Low',
      moderate: 'Moderate', 
      high: 'High',
      very_high: 'Very High'
    },
    prevention_strategies: {
      standard: 'Standard',
      enhanced: 'Enhanced',
      'high-risk': 'High-risk'  // Note: quotes needed for hyphenated keys
    },
    emergency_preparations: {
      standard: 'Standard emergency protocols',
      enhanced: 'Enhanced emergency protocols'
    },
    intervention_plans: {
      standard: [
        'Active management of third stage of labor',
        'Immediate postpartum uterine massage',
        'Oxytocin 10-20 units IM or IV after delivery',
        'Quantitative blood loss assessment'
      ]
      // ... more arrays
    }
  }
};
```

### Step 2: Export Structure
```typescript
// src/i18n/translations/en/calculators/ObGyn/index.ts
export { pphRiskCalculator } from './pph-risk-calculator';

// src/i18n/translations/en/calculators/index.ts
import { 
  pphRiskCalculator,
  // ... other calculators
} from './ObGyn';

export const calculators = {
  obgyn: {
    pph_risk_calculator: pphRiskCalculator,
    // ... other calculators
  }
};
```

### ✅ Translation File Checklist
- [ ] All three languages (en, ru, ka) created
- [ ] Exact same key structure across all languages
- [ ] Hyphenated keys properly quoted
- [ ] Arrays properly structured
- [ ] Export statements added to index files
- [ ] No missing nested keys

---

## ⚙️ Service Layer Integration

### Critical Pattern: Translation-Aware Services

```typescript
// src/services/obgynCalculatorService.ts
export function calculatePPHRisk(
  input: PPHRiskInput, 
  t?: (key: string) => string  // Translation function parameter
): PPHRiskResult {
  
  // Use consistent translation key paths
  const standardInterventions = t ? [
    t('calculators.obgyn.pph_risk_calculator.results.intervention_plans.standard.0'),
    t('calculators.obgyn.pph_risk_calculator.results.intervention_plans.standard.1'),
    t('calculators.obgyn.pph_risk_calculator.results.intervention_plans.standard.2'),
    t('calculators.obgyn.pph_risk_calculator.results.intervention_plans.standard.3')
  ] : [
    // English fallbacks
    'Active management of third stage of labor',
    'Immediate postpartum uterine massage', 
    'Oxytocin 10-20 units IM or IV after delivery',
    'Quantitative blood loss assessment'
  ];

  // Build interpretation with translation
  const interpretation = t 
    ? `${t('calculators.obgyn.pph_risk_calculator.results.interpretations.assessment_prefix')} ${t(`calculators.obgyn.pph_risk_calculator.results.categories.${category}`)} ${t('calculators.obgyn.pph_risk_calculator.results.interpretations.category_suffix')} ${riskScore}/20). ${t(`calculators.obgyn.pph_risk_calculator.results.interpretations.${category}`)}`
    : `PPH risk assessment indicates ${category} risk category (Score: ${riskScore}/20). Standard prevention protocols are appropriate.`;

  return {
    riskScore,
    category,
    interpretation,
    preventionStrategy,
    emergencyPreparation,
    interventionPlan: standardInterventions,
    recommendations: getRecommendations(category, t)
  };
}
```

### Key Service Integration Rules
1. **Always pass translation function** to calculation services
2. **Use exact key paths** that match translation files
3. **Provide English fallbacks** for robustness
4. **Maintain consistent namespace** across all calls

---

## ⚛️ Component Integration

### Critical Pattern: Language-Aware Component

```typescript
// src/components/Calculators/PPHRiskCalculator.tsx
import React, { useState, useEffect } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import { useLanguage } from '../../contexts/LanguageContext';

const PPHRiskCalculator: React.FC = () => {
  const { t } = useTranslation();
  const { currentLanguage } = useLanguage();
  
  const [result, setResult] = useState<PPHRiskResult | null>(null);
  const [step, setStep] = useState(1);
  const [showResult, setShowResult] = useState(false);

  // CRITICAL: Clear results when language changes
  useEffect(() => {
    setResult(null);
    setStep(1);
    setShowResult(false);
  }, [currentLanguage]);

  const handleCalculate = async () => {
    // Pass translation function to service
    const calculationResult = calculatePPHRisk(input, t);
    setResult(calculationResult);
    setShowResult(true);
  };

  return (
    <CalculatorContainer
      key={currentLanguage}  // CRITICAL: Force re-render on language change
      title={t('calculators.obgyn.pph_risk_calculator.title')}
      subtitle={t('calculators.obgyn.pph_risk_calculator.subtitle')}
      icon={Droplets}
      gradient="obgyn"
    >
      {/* Component content */}
    </CalculatorContainer>
  );
};
```

### ✅ Component Integration Checklist
- [ ] Import `useLanguage` hook
- [ ] Add `key={currentLanguage}` to main container
- [ ] Clear results in `useEffect` on language change
- [ ] Pass `t` function to calculation services
- [ ] Use consistent translation key paths

---

## 🔄 Language Switching Mechanics

### Critical Pattern: Event Dispatching

```typescript
// src/contexts/LanguageContext.tsx
const setLanguage = (lang: Language) => {
  setCurrentLanguage(lang);
  localStorage.setItem('selectedLanguage', lang);
  
  // CRITICAL: Dispatch event to trigger re-renders
  window.dispatchEvent(new CustomEvent('languageChange', { 
    detail: { language: lang } 
  }));
};

useEffect(() => {
  const handleLanguageChange = () => {
    // Force re-render of current route
    navigate(location.pathname + location.search + location.hash, { replace: true });
  };

  window.addEventListener('languageChange', handleLanguageChange);
  return () => window.removeEventListener('languageChange', handleLanguageChange);
}, [navigate, location]);
```

### Translation Hook Pattern

```typescript
// src/hooks/useTranslation.ts
const t = useCallback((key: string, params?: Record<string, string>): string => {
  const keys = key.split('.');
  let currentLevel: any = translations[currentLanguage];

  // Navigate through key path
  for (const k of keys) {
    if (typeof currentLevel === 'object' && currentLevel !== null && k in currentLevel) {
      currentLevel = currentLevel[k];
    } else {
      currentLevel = undefined;
      break;
    }
  }

  // Fallback to English
  if (currentLevel === undefined) {
    console.warn(`Translation missing for key: ${key} in language: ${currentLanguage}. Falling back to English.`);
    currentLevel = translations.en;
    for (const k of keys) {
      if (typeof currentLevel === 'object' && currentLevel !== null && k in currentLevel) {
        currentLevel = currentLevel[k];
      } else {
        currentLevel = undefined;
        break;
      }
    }
  }

  // Return key if not found
  if (typeof currentLevel !== 'string') {
    console.warn(`Translation for key: ${key} is not a string or not found. Returning key.`);
    return key;
  }

  // Apply parameters
  if (params) {
    return Object.entries(params).reduce(
      (acc, [paramKey, paramValue]) => acc.replace(`{{${paramKey}}}`, paramValue),
      currentLevel
    );
  }

  return currentLevel;
}, [currentLanguage]);
```

---

## 🧪 Testing & Validation

### Manual Testing Checklist

1. **Language Switching Test**
   - [ ] Switch to Russian - all text updates immediately
   - [ ] Switch to Georgian - all text updates immediately  
   - [ ] Switch back to English - all text updates immediately
   - [ ] No stale content from previous language persists

2. **Calculator Function Test**
   - [ ] Fill out form in one language
   - [ ] Calculate results
   - [ ] Switch language - results clear and form resets
   - [ ] Recalculate in new language - results show in correct language

3. **Results Translation Test**
   - [ ] All result categories translate correctly
   - [ ] Prevention strategies translate correctly
   - [ ] Emergency preparations translate correctly
   - [ ] Intervention plans translate correctly
   - [ ] Recommendations translate correctly

### Automated Testing Pattern

```typescript
// Test translation key consistency
describe('PPH Risk Calculator Translations', () => {
  test('all required keys exist in all languages', () => {
    const requiredKeys = [
      'calculators.obgyn.pph_risk_calculator.title',
      'calculators.obgyn.pph_risk_calculator.results.categories.low',
      'calculators.obgyn.pph_risk_calculator.results.prevention_strategies.standard'
    ];
    
    ['en', 'ru', 'ka'].forEach(lang => {
      requiredKeys.forEach(key => {
        const translation = getTranslation(lang, key);
        expect(translation).toBeDefined();
        expect(translation).not.toBe(key); // Not returning key itself
      });
    });
  });
});
```

---

## 🐛 Debugging Guide

### Systematic Debugging Approach

1. **Check Translation Key Paths**
```typescript
// Add debug logging to translation hook
if (key.includes('calculator_name')) {
  console.log('Translation Debug:', {
    key,
    currentLanguage,
    hasTranslations: !!translations[currentLanguage],
    pphKeys: Object.keys(translations[currentLanguage]?.calculators?.obgyn?.pph_risk_calculator || {})
  });
}
```

2. **Verify File Structure**
```bash
# Check that files exist
ls src/i18n/translations/*/calculators/ObGyn/pph-risk-calculator.ts
```

3. **Test Translation Function Directly**
```typescript
// In browser console
console.log(t('calculators.obgyn.pph_risk_calculator.title'));
```

4. **Check Language Context**
```typescript
// Add to component
console.log('Current language:', currentLanguage);
```

### Common Error Patterns

| Error | Cause | Solution |
|-------|-------|----------|
| Georgian text persists | Component not re-rendering | Add `key={currentLanguage}` |
| Translation key returned | Missing translation key | Check file structure and exports |
| Stale results | Results not cleared | Add `useEffect` to clear on language change |
| Partial translation | Service not receiving `t` function | Pass `t` to service functions |

---

## ⚠️ Common Pitfalls & Solutions

### 1. Translation Key Inconsistencies
**Problem:** Service uses different key paths than translation files
```typescript
// WRONG
t('calculators.pph_risk_calculator.results.prevention_strategies.standard')

// CORRECT  
t('calculators.obgyn.pph_risk_calculator.results.prevention_strategies.standard')
```

### 2. Component Re-rendering Issues
**Problem:** Language changes but component content doesn't update
```typescript
// WRONG - Missing key
<CalculatorContainer title={t('...')} />

// CORRECT - Forces re-render
<CalculatorContainer key={currentLanguage} title={t('...')} />
```

### 3. Hyphenated Key Issues
**Problem:** JavaScript object keys with hyphens
```typescript
// WRONG - Syntax error
prevention_strategies: {
  high-risk: 'High-risk'  // Invalid
}

// CORRECT - Quoted key
prevention_strategies: {
  'high-risk': 'High-risk'  // Valid
}
```

### 4. Array Translation Issues
**Problem:** Arrays not properly structured in translations
```typescript
// WRONG - Direct array in translations
intervention_plans: ['item1', 'item2']

// CORRECT - Indexed object
intervention_plans: {
  standard: {
    '0': 'Active management of third stage of labor',
    '1': 'Immediate postpartum uterine massage'
  }
}
```

### 5. Missing Event Dispatch
**Problem:** Language changes don't trigger re-renders
```typescript
// WRONG - Missing event dispatch
const setLanguage = (lang: Language) => {
  setCurrentLanguage(lang);
  localStorage.setItem('selectedLanguage', lang);
};

// CORRECT - With event dispatch
const setLanguage = (lang: Language) => {
  setCurrentLanguage(lang);
  localStorage.setItem('selectedLanguage', lang);
  window.dispatchEvent(new CustomEvent('languageChange', { detail: { language: lang } }));
};
```

---

## ✅ Final Checklist

### Before Starting Translation
- [ ] File structure follows exact pattern
- [ ] Translation hooks are properly configured
- [ ] Language context has event dispatching
- [ ] Calculator service accepts translation parameter

### During Translation
- [ ] All three language files created simultaneously
- [ ] Exact same key structure across all files
- [ ] Hyphenated keys properly quoted
- [ ] Arrays structured as indexed objects
- [ ] No nested keys missing

### Component Integration
- [ ] Import `useLanguage` hook
- [ ] Add `key={currentLanguage}` to main container
- [ ] Clear results on language change with `useEffect`
- [ ] Pass `t` function to all service calls
- [ ] Consistent translation key paths

### Testing Phase
- [ ] Manual language switching test
- [ ] Calculator function test
- [ ] Results translation test
- [ ] No stale content test
- [ ] Debug logging removed

### Deployment Ready
- [ ] Build succeeds without warnings
- [ ] All translation warnings resolved
- [ ] Performance testing completed
- [ ] Cross-browser testing completed

---

## 🎯 Success Criteria

When properly implemented, you should achieve:

✅ **Immediate Translation Updates** - All content updates instantly when language changes  
✅ **No Stale Content** - Previous language content never persists  
✅ **Clean State Management** - Form and results reset appropriately  
✅ **Consistent Experience** - All translated content updates simultaneously  
✅ **Robust Fallbacks** - English fallbacks work when translations missing  
✅ **Performance** - Language switching is fast and smooth  

---

*This guide is based on actual debugging experience with the PPH Risk Calculator and represents battle-tested patterns for medical calculator translation.* 