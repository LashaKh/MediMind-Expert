# Medical Terminology Standardization Guide

## Purpose
This document establishes standardized medical vocabulary and terminology patterns across all languages (English, Russian, Georgian) and medical specialties for the MediMind Expert platform.

## Core Principles

### 1. Hierarchical Structure
All medical terminology follows a consistent nested structure pattern:
```
medical.{specialty}.{category}.{term}
medical.{category}.{subcategory}.{term}
```

### 2. Language Consistency
- **English**: Use standard medical terminology (AMA/ICD-11 compliant)
- **Russian**: Use accepted Russian medical terminology (МКБ-11 compliant)
- **Georgian**: Use established Georgian medical terminology with Latin borrowings where appropriate

### 3. Unit Standardization
Medical units must be consistent across all languages:
- **Weight**: kg, g, mg, lbs
- **Length**: cm, m, mm, ft, in
- **Pressure**: mmHg, kPa
- **Laboratory**: mg/dL, mmol/L, g/dL, IU/L, mEq/L
- **Time**: years, months, weeks, days, hours, minutes
- **Volume**: mL, L
- **Frequency**: bpm, /min, /hour, /day

## Standard Categories

### 1. Patient Demographics (`patient`)
```typescript
patient: {
  age: string,
  gender: string,
  male: string,
  female: string,
  weight: string,
  height: string,
  bmi: string,
  bloodPressure: string,
  heartRate: string,
  temperature: string
}
```

### 2. Medical Specialties (`specialty`)
```typescript
specialty: {
  cardiology: string,
  obgyn: string,
  neurology: string,
  endocrinology: string,
  general: string
}
```

### 3. Symptoms (`symptoms`)
```typescript
symptoms: {
  chestPain: string,
  shortnessOfBreath: string,
  palpitations: string,
  dizziness: string,
  fatigue: string,
  syncope: string,
  nausea: string,
  vomiting: string,
  headache: string,
  abdominalPain: string
}
```

### 4. Diagnosis (`diagnosis`)
```typescript
diagnosis: {
  primary: string,
  secondary: string,
  differential: string,
  provisional: string,
  final: string,
  ruleOut: string,
  suspected: string,
  confirmed: string
}
```

### 5. Treatment (`treatment`)
```typescript
treatment: {
  medication: string,
  dosage: string,
  frequency: string,
  duration: string,
  instructions: string,
  contraindications: string,
  sideEffects: string,
  monitoring: string,
  followUp: string
}
```

### 6. Medical Units (`units`)
```typescript
units: {
  // Weight
  kg: string,
  g: string,
  mg: string,
  lbs: string,
  
  // Length
  cm: string,
  m: string,
  mm: string,
  ft: string,
  in: string,
  
  // Pressure
  mmHg: string,
  kPa: string,
  
  // Laboratory
  mgdL: string,
  mmolL: string,
  gdL: string,
  IUL: string,
  mEqL: string,
  ngmL: string,
  pgmL: string,
  
  // Time
  years: string,
  months: string,
  weeks: string,
  days: string,
  hours: string,
  minutes: string,
  
  // Volume
  mL: string,
  L: string,
  
  // Frequency
  bpm: string,
  perMin: string,
  perHour: string,
  perDay: string,
  
  // Temperature
  celsius: string,
  fahrenheit: string,
  
  // Percentage
  percent: string
}
```

### 7. Medical Conditions (`conditions`)
```typescript
conditions: {
  diabetes: string,
  hypertension: string,
  hyperlipidemia: string,
  coronaryArteryDisease: string,
  heartFailure: string,
  atrialFibrillation: string,
  myocardialInfarction: string,
  stroke: string,
  obesity: string,
  metabolicSyndrome: string
}
```

### 8. Medical Procedures (`procedures`)
```typescript
procedures: {
  ecg: string,
  echocardiogram: string,
  stressTest: string,
  catheterization: string,
  angioplasty: string,
  surgery: string,
  biopsy: string,
  bloodTest: string,
  imaging: string,
  xray: string,
  ct: string,
  mri: string
}
```

### 9. Risk Assessment (`risk`)
```typescript
risk: {
  factors: {
    age: string,
    gender: string,
    smoking: string,
    diabetes: string,
    hypertension: string,
    familyHistory: string,
    obesity: string,
    inactivity: string
  },
  levels: {
    low: string,
    moderate: string,
    high: string,
    veryHigh: string,
    borderline: string,
    intermediate: string
  },
  cardiovascular: {
    low: string,
    moderate: string,
    high: string,
    veryHigh: string
  }
}
```

### 10. Laboratory Values (`laboratory`)
```typescript
laboratory: {
  cholesterol: {
    total: string,
    ldl: string,
    hdl: string,
    triglycerides: string
  },
  glucose: {
    fasting: string,
    random: string,
    hba1c: string,
    ogtt: string
  },
  cardiac: {
    troponin: string,
    bnp: string,
    ck: string,
    ldh: string
  },
  renal: {
    creatinine: string,
    bun: string,
    egfr: string,
    albumin: string
  },
  liver: {
    alt: string,
    ast: string,
    bilirubin: string,
    alkalinePhosphatase: string
  }
}
```

## Translation Guidelines

### English Translation Rules
1. Use standard medical terminology from trusted sources (AMA, WHO, ICD-11)
2. Prefer full terms over abbreviations for clarity
3. Use American English spelling conventions
4. Maintain consistency with existing cardiac calculator terminology

### Russian Translation Rules
1. Use official Russian medical terminology from МКБ-11
2. Maintain gender agreement for adjectives
3. Use established Russian medical abbreviations
4. Prefer Russian terms over transliterations when available

### Georgian Translation Rules
1. Use established Georgian medical terminology
2. Use Latin borrowings for international medical terms when appropriate
3. Maintain consistency with Georgian medical education standards
4. Follow Georgian grammatical rules for medical term formation

## Validation Requirements

### 1. Consistency Checks
- All three languages must have identical key structures
- No missing translations for any defined term
- Consistent capitalization patterns within each language

### 2. Medical Accuracy
- All terms must be medically accurate and current
- Units must follow international standards
- Risk classifications must align with medical guidelines

### 3. Professional Review
- Terms should be reviewed by medical professionals for each language
- Terminology should be appropriate for healthcare provider use
- Complex medical concepts should be accurately translated

## Extension Guidelines

### Adding New Specialties
1. Create new specialty category: `medical.specialty.{newSpecialty}`
2. Add specialty-specific terms under: `medical.{newSpecialty}`
3. Follow the established hierarchical structure
4. Ensure all three languages are implemented simultaneously

### Adding New Categories
1. Define the category structure in TypeScript interfaces
2. Implement in all three languages simultaneously
3. Update this documentation with new category guidelines
4. Add validation rules for the new category

## File Organization

```
src/i18n/translations/
├── en/
│   └── medical.ts          # English medical terminology
├── ru/
│   └── medical.ts          # Russian medical terminology
├── ka/
│   └── medical.ts          # Georgian medical terminology
└── MEDICAL_TERMINOLOGY_STANDARDS.md
```

## Quality Assurance

### Automated Testing
- Structure consistency validation
- Translation completeness checks
- Unit standardization verification
- Medical term accuracy validation

### Manual Review Process
1. Medical professional review for accuracy
2. Native speaker review for language quality
3. Clinical workflow integration testing
4. User interface compatibility verification

## Maintenance

### Regular Updates
- Annual review of medical terminology
- Updates based on new medical guidelines
- Integration of new medical specialties
- Terminology alignment with international standards

### Version Control
- Track all changes to medical terminology
- Document rationale for terminology updates
- Maintain backward compatibility where possible
- Provide migration guides for breaking changes 