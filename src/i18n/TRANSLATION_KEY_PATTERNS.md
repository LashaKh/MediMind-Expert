# Translation Key Pattern Documentation

## Overview

This document establishes standardized translation key structures based on successful patterns from TIMI/GRACE calculators, providing consistent and type-safe internationalization across all medical calculators in the MediMind Expert platform.

## Pattern Structure

### Base Pattern
```
calculators.{specialty}.{calculator_name}.{property}
```

**Examples:**
- `calculators.cardiology.timi.title`
- `calculators.obgyn.bishop_score.description`
- `calculators.cardiology.grace.validation_age`

## Core Translation Patterns

### 1. Base Calculator Pattern

Every calculator must implement these required keys:

```typescript
{
  title: string;                    // Calculator display name
  subtitle: string;                 // Brief descriptor
  description: string;              // Detailed explanation
  calculate_button: string;         // Primary action button
  risk_category: string;           // Risk classification
  recommendations: string;         // Clinical guidance
  low_risk: string;               // Risk level classification
  high_risk: string;              // Risk level classification
}
```

**Example (TIMI):**
```typescript
timi: {
  title: "TIMI Risk Score Calculator",
  subtitle: "Unstable Angina/NSTEMI Risk Assessment",
  description: "Thrombolysis in Myocardial Infarction risk score...",
  calculate_button: "Calculate TIMI Score",
  risk_category: "Risk category",
  recommendations: "Clinical recommendations",
  low_risk: "Low risk (0-2 points)",
  high_risk: "High risk (5-7 points)"
}
```

### 2. Demographics Pattern

Standard demographic fields across calculators:

```typescript
{
  demographics_section: string;
  age_label: string;
  age_placeholder: string;
  gender_label?: string;
  sex_label?: string;
  male: string;
  female: string;
}
```

**Example:**
```typescript
demographics_section: "Demographics",
age_label: "Age (years)",
age_placeholder: "Enter patient age",
sex_label: "Sex",
male: "Male",
female: "Female"
```

### 3. Clinical Assessment Pattern

For clinical presentation and examination findings:

```typescript
{
  clinical_section: string;
  clinical_assessment?: string;
  clinical_assessment_description?: string;
  risk_factors_section: string;
}
```

**Example (TIMI):**
```typescript
clinical_section: "Clinical Presentation",
clinical_assessment: "Clinical Assessment",
clinical_assessment_description: "Select all clinical factors that apply to this patient:",
risk_factors_section: "Risk Factors"
```

### 4. Validation Messages Pattern

**Structure:** `validation_{field_name}`

```typescript
{
  validation_age: "Age must be between {min}-{max} years";
  validation_weight: "Weight must be between {min}-{max} kg";
  validation_bp: "Blood pressure must be between {min}-{max} mmHg";
}
```

**Examples:**
```typescript
validation_age: "Age must be between 18-120 years",
validation_heart_rate: "Heart rate must be between 30-300 bpm",
validation_creatinine: "Creatinine must be between 0.3-15.0 mg/dL"
```

### 5. Risk Factor Translation Pattern

**Structure:** `{risk_factor}_label`, `{risk_factor}_desc` (optional), `{risk_factor}_help` (optional)

```typescript
{
  smoking_label: string;
  smoking_desc?: string;
  diabetes_label: string;
  family_history_label: string;
  family_history_help?: string;
}
```

**Example (TIMI):**
```typescript
known_cad_label: "Known CAD (stenosis ≥50%)",
known_cad_desc: "Prior catheterization showing ≥50% stenosis in any major coronary vessel",
aspirin_use_label: "Aspirin use in prior 7 days",
aspirin_use_desc: "Aspirin use within 7 days before hospital presentation"
```

### 6. Laboratory Values Pattern

```typescript
{
  laboratory_section: string;
  {lab_name}_label: string;
  {lab_name}_placeholder: string;
  {lab_name}_units?: string;
}
```

**Example (GRACE):**
```typescript
laboratory_section: "Laboratory Values",
creatinine_label: "Serum creatinine (mg/dL)",
creatinine_placeholder: "Enter creatinine level",
heart_rate_label: "Heart rate (bpm)",
heart_rate_placeholder: "Enter heart rate"
```

## Specialty-Specific Patterns

### Emergency/Critical Care Pattern (TIMI, GRACE)

For acute care calculators requiring urgent decision-making:

```typescript
{
  emergency_tool: string;
  tool_description: string;
  management_urgency: string;
  recommended_timeframe: string;
  timeframe_under_24?: string;
  timeframe_24_48?: string;
  conservative_management?: string;
  early_invasive_strategy?: string;
  urgent_invasive_strategy?: string;
}
```

**Example (TIMI):**
```typescript
emergency_tool: "Emergency Risk Assessment Tool",
tool_description: "TIMI Risk Score for rapid evaluation...",
management_urgency: "Management Urgency",
recommended_timeframe: "Recommended timeframe:",
timeframe_under_24: "< 24 hours",
conservative_management: "Conservative management",
urgent_invasive_strategy: "Urgent invasive strategy"
```

### Step-by-Step Calculator Pattern

For multi-step calculators with progressive disclosure:

```typescript
{
  patient_info: string;
  clinical_factors?: string;
  next_demographics?: string;
  next_clinical_factors?: string;
  next_risk_factors?: string;
}
```

**Example (TIMI):**
```typescript
patient_info: "Patient Info",
clinical_factors: "Clinical Factors",
next_clinical_factors: "Next: Clinical Factors"
```

### Cardiovascular Calculator Pattern

```typescript
{
  heart_rate_label?: string;
  systolic_bp_label?: string;
  cholesterol_label?: string;
  cardiovascular_risk?: string;
  mortality_risk?: string;
}
```

### OB/GYN Calculator Pattern

```typescript
{
  gestational_age_label?: string;
  parity_label?: string;
  reproductive_history?: string;
  obstetric_history?: string;
  maternal_risk?: string;
  fetal_risk?: string;
}
```

## Implementation Guidelines

### 1. Consistency Rules

- **Required fields:** Every calculator must have `title`, `subtitle`, `description`, `calculate_button`, `risk_category`, `recommendations`, `low_risk`, `high_risk`
- **Validation keys:** Use `validation_{field}` pattern consistently
- **Risk factor keys:** Use `{factor}_label` pattern with optional `_desc` and `_help`
- **Section headers:** End with `_section` (e.g., `demographics_section`)

### 2. Naming Conventions

- **Fields:** Use lowercase with underscores: `age_label`, `heart_rate_placeholder`
- **Boolean factors:** Use descriptive names: `diabetes_label`, `smoking_label`
- **Validation:** Always prefix with `validation_`: `validation_age`, `validation_bp`
- **Navigation:** Use descriptive action: `next_clinical_factors`, `calculate_button`

### 3. Medical Accuracy

- **Units:** Always include units in labels: "Age (years)", "Weight (kg)", "BP (mmHg)"
- **Ranges:** Specify valid ranges in placeholders: "Enter age (18-80 years)"
- **Medical terminology:** Use standard medical abbreviations: BP, HR, BMI, ECG
- **Risk levels:** Use clinical standard terms: "Low risk", "High risk", "Very high risk"

### 4. TypeScript Integration

Use the provided interfaces for type safety:

```typescript
import { CalculatorTranslation } from '@/types/translation-patterns';

const timiTranslation: CalculatorTranslation = {
  title: "TIMI Risk Score Calculator",
  subtitle: "Unstable Angina/NSTEMI Risk Assessment",
  // ... rest of implementation
};
```

## Validation Message Templates

### Standard Templates

```typescript
// Age validation
validation_age: "Age must be between {min}-{max} years"

// Numeric range validation  
validation_{field}: "{Field} must be between {min}-{max} {units}"

// Required field validation
validation_{field}_required: "{Field} is required"

// Selection validation
validation_{field}_selection: "Please select a valid {field}"
```

### Examples by Field Type

```typescript
// Demographics
validation_age: "Age must be between 18-120 years",
validation_weight: "Weight must be between 30-300 kg",

// Cardiovascular
validation_heart_rate: "Heart rate must be between 30-300 bpm",
validation_systolic_bp: "Systolic blood pressure must be between 60-300 mmHg",

// Laboratory
validation_creatinine: "Creatinine must be between 0.3-15.0 mg/dL",
validation_cholesterol: "Total cholesterol must be between 130-320 mg/dL",

// OB/GYN
validation_gestational_age: "Gestational age must be between 24-42 weeks",
validation_maternal_age: "Maternal age must be between 15-50 years"
```

## Best Practices

### 1. Language Consistency

- **English:** Use standard medical terminology (AMA/ICD-11 compliant)
- **Russian:** Use accepted Russian medical terminology (МКБ-11 compliant)  
- **Georgian:** Use established Georgian medical terminology with Latin borrowings

### 2. User Experience

- **Progressive disclosure:** Use step-by-step patterns for complex calculators
- **Clear navigation:** Provide explicit "Next" button labels
- **Helpful descriptions:** Include `_help` keys for complex medical concepts
- **Error guidance:** Provide specific validation messages with acceptable ranges

### 3. Clinical Accuracy

- **Evidence-based:** All terminology should align with medical literature
- **Guideline compliance:** Follow ACC/AHA, WHO, and other relevant guidelines
- **Professional language:** Use terminology appropriate for healthcare providers
- **Risk stratification:** Use clinically meaningful risk categories

## Migration Strategy

### Existing Calculators

1. **Assessment:** Review current translation structure against patterns
2. **Gap analysis:** Identify missing required keys
3. **Refactoring:** Update keys to match patterns while maintaining backward compatibility
4. **Validation:** Test all translation keys in components
5. **Documentation:** Update component documentation with new key patterns

### New Calculators

1. **Start with base pattern:** Implement all required keys first
2. **Add specialty patterns:** Include relevant specialty-specific keys
3. **Implement validation:** Add all necessary validation messages
4. **Type checking:** Use TypeScript interfaces for compile-time validation
5. **Testing:** Verify all keys work in components before merging

## Examples

### Complete TIMI Calculator Pattern

```typescript
timi: {
  // Base pattern
  title: "TIMI Risk Score Calculator",
  subtitle: "Unstable Angina/NSTEMI Risk Assessment", 
  description: "Thrombolysis in Myocardial Infarction risk score...",
  calculate_button: "Calculate TIMI Score",
  risk_category: "Risk category",
  recommendations: "Clinical recommendations",
  low_risk: "Low risk (0-2 points)",
  high_risk: "High risk (5-7 points)",
  
  // Emergency pattern
  emergency_tool: "Emergency Risk Assessment Tool",
  management_urgency: "Management Urgency", 
  
  // Step pattern
  patient_info: "Patient Info",
  clinical_factors: "Clinical Factors",
  next_clinical_factors: "Next: Clinical Factors",
  
  // Demographics
  demographics_section: "Demographics",
  age_label: "Age ≥65 years",
  
  // Risk factors
  known_cad_label: "Known CAD (stenosis ≥50%)",
  aspirin_use_label: "Aspirin use in prior 7 days",
  
  // Validation
  validation_age: "Age must be between 18-120 years"
}
```

This pattern ensures consistency, type safety, and medical accuracy across all calculator translations while maintaining the successful structure established by TIMI and GRACE implementations. 