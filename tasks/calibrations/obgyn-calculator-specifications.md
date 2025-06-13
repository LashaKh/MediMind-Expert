# OB/GYN Medical Calculator Suite - Comprehensive Specifications

## Project Overview
Implementation of a comprehensive Obstetrics and Gynecology Medical Calculator suite with 13 professional-grade calculators organized across six specialty categories. This specification follows evidence-based guidelines from ACOG, SMFM, ASCCP, SGO, ASRM, and NAMS.

---

## Calculator Categories and Suite Overview

### Category 1: PREGNANCY DATING & ASSESSMENT
1. **Estimated Due Date (EDD) Calculator**
2. **Gestational Age Calculator**

### Category 2: ANTENATAL RISK ASSESSMENT  
3. **Preeclampsia Risk Calculator**
4. **Preterm Birth Risk Assessment**
5. **Gestational Diabetes Risk Calculator**

### Category 3: LABOR MANAGEMENT
6. **Bishop Score Calculator**
7. **VBAC Success Predictor**

### Category 4: FETAL & NEONATAL ASSESSMENT
8. **Estimated Fetal Weight (EFW) Calculator**
9. **Apgar Score Calculator**

### Category 5: GYNECOLOGIC ONCOLOGY
10. **Cervical Cancer Risk Calculator**
11. **Ovarian Cancer Risk Assessment**

### Category 6: REPRODUCTIVE ENDOCRINOLOGY
12. **Ovarian Reserve Assessment**
13. **Menopause Symptom Assessment**

---

## DETAILED CALCULATOR SPECIFICATIONS

### 1. ESTIMATED DUE DATE (EDD) CALCULATOR

**Clinical Purpose**: Calculate estimated due date using last menstrual period (LMP) or ultrasound measurements
**Guidelines**: ACOG Practice Bulletin No. 700 - Methods for Estimating the Due Date

**Input Parameters**:
- Last Menstrual Period (LMP) Date: Date picker
  - Validation: Must be within 10 months of current date
  - Range: Past 280 days maximum
- First Trimester Ultrasound Crown-Rump Length (CRL): Number input (mm)
  - Validation: 5-84 mm (corresponds to 6-13.6 weeks)
  - Optional field for LMP verification
- Cycle Length: Number input (days)  
  - Validation: 21-35 days
  - Default: 28 days

**Calculation Formula**:
```javascript
// Naegele's Rule (LMP-based)
EDD = LMP + 280 days - (cycle_length - 28) days

// CRL-based (Robinson & Fleming formula)
GA_days = 8.052 * (sqrt(CRL * 1.037)) + 23.73
EDD = ultrasound_date + (280 - GA_days)
```

**Output Format**:
- Estimated Due Date: MM/DD/YYYY format
- Gestational Age at Current Date: X weeks, Y days
- Term Window: 37-42 weeks (display dates)

**Clinical Interpretation**:
- Dating reliability statement based on input method
- Recommendation for dating source priority (ultrasound vs LMP)
- Term definition and delivery planning guidance

**Edge Cases**:
- Irregular cycles (>35 days or <21 days)
- Multiple ultrasound measurements
- ART pregnancies (future enhancement)

---

### 2. GESTATIONAL AGE CALCULATOR

**Clinical Purpose**: Calculate current gestational age from various dating methods
**Guidelines**: ACOG Practice Bulletin No. 700

**Input Parameters**:
- Dating Method: Dropdown selection
  - LMP (Last Menstrual Period)
  - First Trimester US (Ultrasound)
  - Second Trimester US
- Reference Date: Date picker
- Current Date: Date picker (defaults to today)
- For Ultrasound: Biometric measurement and GA assigned

**Calculation Formula**:
```javascript
// LMP-based
GA_days = (current_date - LMP_date) - (cycle_length - 28)

// Ultrasound-based  
GA_days = (current_date - ultrasound_date) + US_assigned_GA_days
```

**Output Format**:
- Current GA: X weeks, Y days
- Dating confidence level
- Recommended dating method

**Clinical Interpretation**:
- Accuracy statement based on dating method
- Gestational age milestones
- Clinical decision points (viability, term definition)

---

### 3. PREECLAMPSIA RISK CALCULATOR

**Clinical Purpose**: Assess risk of developing preeclampsia in pregnancy
**Guidelines**: ACOG Practice Bulletin No. 222 - Gestational Hypertension and Preeclampsia

**Input Parameters**:
- Maternal Age: Number input (years)
  - Validation: 15-50 years
- Body Mass Index (BMI): Number input
  - Validation: 15-60 kg/m²
- Nulliparous: Boolean (first pregnancy)
- Previous Preeclampsia: Boolean
- Chronic Hypertension: Boolean
- Diabetes (Type 1 or 2): Boolean
- Multiple Gestation: Boolean
- Family History of Preeclampsia: Boolean
- African American Race: Boolean
- Assisted Reproductive Technology: Boolean

**Calculation Formula**:
```javascript
// Risk scoring based on validated risk factors
base_risk = 3.4; // Population baseline (%)

risk_multipliers = {
  nulliparous: 2.1,
  previous_preeclampsia: 13.7,
  chronic_htn: 5.1,
  diabetes: 2.1,
  multiple_gestation: 2.6,
  maternal_age_35_plus: 1.6,
  bmi_30_plus: 2.1,
  family_history: 2.3,
  african_american: 1.5,
  art: 1.8
};

// Calculate combined risk
risk_percentage = base_risk * product_of_applicable_multipliers;
```

**Output Format**:
- Risk Percentage: X.X%
- Risk Category: Low (<5%), Moderate (5-15%), High (>15%)
- Aspirin Recommendation based on risk level

**Clinical Interpretation**:
- Risk stratification explanation
- Prevention recommendations (aspirin prophylaxis)
- Monitoring recommendations
- Patient counseling points

---

### 4. PRETERM BIRTH RISK ASSESSMENT

**Clinical Purpose**: Evaluate risk factors for spontaneous preterm birth
**Guidelines**: ACOG Practice Bulletin No. 234 - Prediction and Prevention of Spontaneous Preterm Birth

**Input Parameters**:
- Previous Preterm Birth: Boolean
- Cervical Length (if available): Number input (mm)
  - Validation: 10-60 mm
- Current Gestational Age: Weeks/days input
- Multiple Gestation: Boolean
- Maternal Age: Number input
- BMI: Number input
- Smoking Status: Boolean
- Prior Cervical Surgery: Boolean
- Uterine Anomalies: Boolean

**Calculation Formula**:
```javascript
// Evidence-based risk scoring
base_risk = 9.6; // Population baseline (%)

risk_factors = {
  previous_ptb: { multiplier: 2.5, weight: 1.0 },
  short_cervix_25mm: { multiplier: 6.0, weight: 1.0 },
  short_cervix_15mm: { multiplier: 13.8, weight: 1.0 },
  multiple_gestation: { multiplier: 4.5, weight: 1.0 },
  maternal_age_less_17: { multiplier: 1.4, weight: 0.5 },
  maternal_age_over_35: { multiplier: 1.3, weight: 0.5 },
  smoking: { multiplier: 1.8, weight: 0.7 },
  cervical_surgery: { multiplier: 1.6, weight: 0.6 }
};
```

**Output Format**:
- Risk Percentage: X.X%
- Risk Category: Low, Moderate, High
- Intervention Recommendations

**Clinical Interpretation**:
- Risk stratification
- Progesterone therapy recommendations
- Monitoring frequency suggestions
- Delivery planning considerations

---

### 5. GESTATIONAL DIABETES RISK CALCULATOR

**Clinical Purpose**: Assess risk for gestational diabetes mellitus (GDM)
**Guidelines**: ACOG Practice Bulletin No. 230 - Gestational Diabetes Mellitus

**Input Parameters**:
- Maternal Age: Number input
- Pre-pregnancy BMI: Number input
- Previous GDM: Boolean
- Family History of Diabetes: Boolean
- Previous Macrosomic Baby (>4000g): Boolean
- Ethnicity: Dropdown (Hispanic, Asian, African American, Other)
- Previous Pregnancy Loss: Boolean
- PCOS History: Boolean

**Calculation Formula**:
```javascript
// Risk assessment based on clinical factors
risk_score = 0;

risk_points = {
  age_25_29: 1,
  age_30_34: 2, 
  age_35_plus: 3,
  bmi_25_29: 1,
  bmi_30_plus: 2,
  previous_gdm: 4,
  family_hx_dm: 2,
  previous_macrosomia: 2,
  hispanic_asian: 1,
  previous_loss: 1,
  pcos: 1
};

// Convert to percentage risk
risk_percentage = logistic_regression(risk_score);
```

**Output Format**:
- Risk Percentage: X.X%
- Screening Recommendations
- Optimal screening timing

**Clinical Interpretation**:
- Early vs standard screening recommendations
- Risk reduction strategies
- Monitoring recommendations

---

### 6. BISHOP SCORE CALCULATOR

**Clinical Purpose**: Assess cervical readiness for labor induction
**Guidelines**: ACOG Practice Bulletin No. 107 - Induction of Labor

**Input Parameters**:
- Cervical Dilation: Dropdown (0, 1-2, 3-4, 5+ cm)
- Cervical Effacement: Dropdown (0-30%, 40-50%, 60-70%, 80%+)
- Cervical Consistency: Dropdown (Firm, Medium, Soft)
- Cervical Position: Dropdown (Posterior, Mid-position, Anterior)
- Fetal Station: Dropdown (-3, -2, -1/0, +1/+2)

**Calculation Formula**:
```javascript
const bishopScore = {
  dilation: { 0: 0, "1-2": 1, "3-4": 2, "5+": 3 },
  effacement: { "0-30": 0, "40-50": 1, "60-70": 2, "80+": 3 },
  consistency: { firm: 0, medium: 1, soft: 2 },
  position: { posterior: 0, mid: 1, anterior: 2 },
  station: { "-3": 0, "-2": 1, "-1/0": 2, "+1/+2": 3 }
};

total_score = sum_of_component_scores; // 0-13 possible
```

**Output Format**:
- Bishop Score: X/13
- Induction Success Probability
- Recommended induction approach

**Clinical Interpretation**:
- Score interpretation (≤5: unfavorable, 6-7: intermediate, ≥8: favorable)
- Success probability for vaginal delivery
- Cervical ripening recommendations

---

### 7. VBAC SUCCESS PREDICTOR

**Clinical Purpose**: Predict likelihood of successful vaginal birth after cesarean
**Guidelines**: ACOG Practice Bulletin No. 205 - Vaginal Birth After Cesarean Delivery

**Input Parameters**:
- Maternal Age: Number input
- BMI at Delivery: Number input
- Previous Vaginal Delivery: Boolean
- Indication for Previous C-Section: Dropdown
- Estimated Fetal Weight: Number input (grams)
- Labor Onset: Dropdown (Spontaneous, Induced)
- Cervical Dilation at Admission: Number input (cm)

**Calculation Formula**:
```javascript
// MFMU Network prediction model
const vbac_success_factors = {
  maternal_age: -0.0326,
  bmi: -0.0365,
  previous_vaginal: 0.398,
  recurring_indication: -0.524,
  efW_per_100g: -0.0125,
  induced_labor: -0.286,
  cervical_dilation: 0.144
};

// Logistic regression calculation
logit = intercept + sum(factor * coefficient);
success_probability = 1 / (1 + exp(-logit));
```

**Output Format**:
- Success Probability: XX%
- Risk Category: High (>70%), Moderate (40-70%), Low (<40%)
- Clinical Recommendations

**Clinical Interpretation**:
- Counseling points for patient discussion
- Risk-benefit analysis
- Monitoring recommendations during trial of labor

---

### 8. ESTIMATED FETAL WEIGHT (EFW) CALCULATOR

**Clinical Purpose**: Estimate fetal weight from ultrasound biometric measurements
**Guidelines**: ACOG Practice Bulletin No. 230 - Fetal Growth Restriction

**Input Parameters**:
- Biparietal Diameter (BPD): Number input (mm)
  - Validation: 30-110 mm
- Head Circumference (HC): Number input (mm)  
  - Validation: 100-400 mm
- Abdominal Circumference (AC): Number input (mm)
  - Validation: 80-400 mm
- Femur Length (FL): Number input (mm)
  - Validation: 20-90 mm
- Gestational Age: Weeks/days input

**Calculation Formula**:
```javascript
// Hadlock Formula (most commonly used)
log10_EFW = 1.304 + 
  0.05281 * AC + 
  0.1938 * FL - 
  0.004 * AC * FL;

// Alternative formulas available
// Shepard: log10_EFW = -1.7492 + 0.166 * BPD + 0.046 * AC - 0.002646 * AC * BPD
// Hadlock 1: Uses BPD, AC, FL
// Hadlock 2: Uses HC, AC, FL  
// Hadlock 3: Uses BPD, HC, AC, FL (most accurate)

EFW_grams = 10^log10_EFW;
```

**Output Format**:
- Estimated Fetal Weight: XXXX grams (X lbs Y oz)
- Percentile for Gestational Age: XXth percentile
- Growth Assessment: AGA/SGA/LGA classification

**Clinical Interpretation**:
- Growth percentile interpretation
- SGA (<10th percentile) and LGA (>90th percentile) alerts
- Delivery planning considerations
- Accuracy limitations statement

---

### 9. APGAR SCORE CALCULATOR

**Clinical Purpose**: Assess newborn status immediately after birth
**Guidelines**: AAP/ACOG Guidelines for Perinatal Care

**Input Parameters**:
- Heart Rate: Dropdown (Absent=0, <100=1, ≥100=2)
- Respiratory Effort: Dropdown (Absent=0, Weak/irregular=1, Strong=2)
- Muscle Tone: Dropdown (Limp=0, Some flexion=1, Active motion=2)
- Reflex Irritability: Dropdown (None=0, Grimace=1, Cough/sneeze=2)
- Color: Dropdown (Blue/pale=0, Pink body/blue extremities=1, Completely pink=2)
- Assessment Time: Dropdown (1 minute, 5 minutes, 10 minutes)

**Calculation Formula**:
```javascript
// Simple summation of five components
apgar_score = heart_rate + respiratory_effort + muscle_tone + reflex_irritability + color;
// Range: 0-10
```

**Output Format**:
- Apgar Score: X/10 at Y minutes
- Score Interpretation
- Clinical Actions Recommended

**Clinical Interpretation**:
- Score ranges: 7-10 (normal), 4-6 (moderately depressed), 0-3 (severely depressed)
- Resuscitation recommendations based on score
- Correlation with long-term outcomes (limited)
- Documentation requirements

---

### 10. CERVICAL CANCER RISK CALCULATOR

**Clinical Purpose**: Assess cervical cancer risk and screening recommendations
**Guidelines**: ASCCP Risk-Based Management Consensus Guidelines

**Input Parameters**:
- Age: Number input (21-65+ years)
- Previous Pap Results: Dropdown options
- HPV Test Results: Dropdown (Positive, Negative, Not tested)
- Vaccination Status: Dropdown (None, Partial, Complete)
- Sexual History: Number input (lifetime partners)
- Smoking Status: Boolean
- Immunocompromised Status: Boolean

**Calculation Formula**:
```javascript
// Risk stratification based on ASCCP guidelines
const risk_factors = {
  age_categories: {
    "21-24": { base_risk: 0.1, screening: "cytology_every_3_years" },
    "25-29": { base_risk: 0.2, screening: "cotest_every_5_years" },
    "30-65": { base_risk: 0.3, screening: "cotest_every_5_years" }
  },
  
  hpv_positive: { multiplier: 15.0 },
  abnormal_cytology: { multiplier: 8.0 },
  smoking: { multiplier: 2.0 },
  immunocompromised: { multiplier: 3.0 },
  unvaccinated: { multiplier: 1.5 }
};
```

**Output Format**:
- Current Risk Level: Low/Average/High
- Screening Recommendations
- Next Screening Date

**Clinical Interpretation**:
- Risk-stratified screening intervals
- Vaccination recommendations
- Risk reduction strategies

---

### 11. OVARIAN CANCER RISK ASSESSMENT

**Clinical Purpose**: Evaluate ovarian cancer risk factors
**Guidelines**: SGO Clinical Practice Statement on Genetic Testing

**Input Parameters**:
- Age: Number input
- Family History: Multiple selections (ovarian, breast, colorectal cancers)
- Personal History: Checkboxes (breast cancer, endometrial cancer)
- BRCA Status: Dropdown (Positive, Negative, Unknown, Not tested)
- Reproductive History: Multiple inputs (pregnancies, breastfeeding duration)
- Contraceptive Use: Duration of hormonal contraceptives

**Calculation Formula**:
```javascript
// Risk assessment based on validated models
const ovarian_risk_factors = {
  brca1_mutation: { lifetime_risk: 0.39 },
  brca2_mutation: { lifetime_risk: 0.11 },
  family_history_strong: { relative_risk: 3.0 },
  nulliparity: { relative_risk: 1.6 },
  endometriosis: { relative_risk: 1.3 },
  hrt_use: { relative_risk: 1.2 },
  
  protective_factors: {
    oral_contraceptives: { risk_reduction: 0.08_per_year },
    pregnancy: { risk_reduction: 0.15_per_pregnancy },
    breastfeeding: { risk_reduction: 0.02_per_month }
  }
};
```

**Output Format**:
- Lifetime Risk: X.X%
- Risk Comparison to Average Woman
- Screening/Prevention Recommendations

**Clinical Interpretation**:
- Risk counseling points
- Genetic testing recommendations
- Surveillance strategies
- Risk reduction options

---

### 12. OVARIAN RESERVE ASSESSMENT

**Clinical Purpose**: Evaluate ovarian reserve for fertility planning
**Guidelines**: ASRM Practice Committee Guidelines on Ovarian Reserve Testing

**Input Parameters**:
- Age: Number input (18-45 years)
- Anti-Müllerian Hormone (AMH): Number input (ng/mL)
  - Validation: 0.01-15.0 ng/mL
- Antral Follicle Count (AFC): Number input
  - Validation: 0-50 follicles
- Day 3 FSH: Number input (mIU/mL) [Optional]
- Day 3 Estradiol: Number input (pg/mL) [Optional]
- Cycle Regularity: Dropdown

**Calculation Formula**:
```javascript
// Age-adjusted nomograms for reserve assessment
const amh_percentiles_by_age = {
  25: { p10: 1.7, p25: 2.8, p50: 4.2, p75: 6.8, p90: 9.7 },
  30: { p10: 1.3, p25: 2.1, p50: 3.2, p75: 5.1, p90: 7.4 },
  35: { p10: 0.8, p25: 1.3, p50: 2.0, p75: 3.2, p90: 4.7 },
  40: { p10: 0.4, p25: 0.7, p50: 1.1, p75: 1.7, p90: 2.5 }
};

// AFC normal ranges by age
const afc_ranges = {
  normal: { "20-30": [15, 25], "31-35": [12, 20], "36-40": [8, 15], "41+": [5, 10] },
  low: { threshold: "below_p10" },
  very_low: { threshold: "<5_follicles" }
};
```

**Output Format**:
- Ovarian Reserve Assessment: Normal/Low/Very Low
- Predicted Response to Stimulation
- Fertility Timeline Recommendations

**Clinical Interpretation**:
- Reserve interpretation by age
- Fertility treatment prognosis
- Family planning recommendations
- Testing limitations

---

### 13. MENOPAUSE SYMPTOM ASSESSMENT

**Clinical Purpose**: Quantify menopausal symptoms for treatment planning
**Guidelines**: NAMS Position Statement on Menopause Hormone Therapy

**Input Parameters**:
- Age: Number input
- Menstrual Status: Dropdown (Regular, Irregular, Absent <12mo, Absent >12mo)
- Hot Flash Frequency: Dropdown (None, 1-2/day, 3-5/day, >5/day)
- Hot Flash Severity: Scale 1-4 (Mild to Severe)
- Sleep Disturbance: Scale 1-4
- Mood Changes: Scale 1-4
- Vaginal Dryness: Scale 1-4
- Sexual Function: Scale 1-4
- Cognitive Symptoms: Scale 1-4

**Calculation Formula**:
```javascript
// Modified Menopause Rating Scale (MRS)
const symptom_weights = {
  hot_flashes: { weight: 1.0, max_score: 4 },
  sleep_disturbance: { weight: 0.8, max_score: 4 },
  mood_changes: { weight: 0.9, max_score: 4 },
  vaginal_symptoms: { weight: 0.7, max_score: 4 },
  sexual_function: { weight: 0.6, max_score: 4 },
  cognitive: { weight: 0.5, max_score: 4 }
};

total_score = sum(symptom_score * weight);
severity = categorize_score(total_score); // Mild, Moderate, Severe
```

**Output Format**:
- Total Symptom Score: XX/100
- Severity Level: Mild/Moderate/Severe
- Treatment Recommendations

**Clinical Interpretation**:
- Symptom severity classification
- Treatment options by severity
- Hormone therapy considerations
- Non-hormonal alternatives

---

## TECHNICAL IMPLEMENTATION REQUIREMENTS

### Framework Architecture
- Extend existing Cardiology calculator framework
- Maintain tabbed interface structure (6 specialty categories)
- Reuse validation patterns and error handling
- Apply consistent UI/UX patterns

### Data Models & Validation
```typescript
interface OBGYNCalculatorInput {
  calculatorId: string;
  parameters: Record<string, any>;
  validationRules: ValidationRule[];
}

interface ValidationRule {
  field: string;
  type: 'range' | 'required' | 'pattern' | 'custom';
  constraint: any;
  errorMessage: string;
}
```

### AI Integration Points
- Clinical decision support prompts
- Calculator recommendations based on context
- Result interpretation enhancement
- Educational content delivery

### Accessibility Requirements
- WCAG 2.1 AA compliance
- Screen reader optimization
- Keyboard navigation support
- Mobile-responsive design

### Testing Framework
- Unit tests for all calculation functions
- Integration tests for UI components
- Clinical validation against published references
- Cross-browser compatibility testing

---

## CLINICAL GUIDELINES REFERENCES

### Primary Guidelines Sources
1. **ACOG (American College of Obstetricians and Gynecologists)**
   - Practice Bulletin No. 700: Methods for Estimating the Due Date
   - Practice Bulletin No. 222: Gestational Hypertension and Preeclampsia  
   - Practice Bulletin No. 234: Prediction and Prevention of Spontaneous Preterm Birth
   - Practice Bulletin No. 230: Gestational Diabetes Mellitus
   - Practice Bulletin No. 107: Induction of Labor
   - Practice Bulletin No. 205: Vaginal Birth After Cesarean Delivery

2. **SMFM (Society for Maternal-Fetal Medicine)**
   - Clinical Guidelines on Fetal Growth Restriction
   - Position Statements on Cervical Length Screening

3. **ASCCP (American Society for Colposcopy and Cervical Pathology)**
   - Risk-Based Management Consensus Guidelines
   - HPV Screening and Management Algorithms

4. **SGO (Society of Gynecologic Oncology)**
   - Clinical Practice Statements on Genetic Testing
   - Ovarian Cancer Risk Assessment Guidelines

5. **ASRM (American Society for Reproductive Medicine)**
   - Practice Committee Guidelines on Ovarian Reserve Testing
   - Fertility Assessment and Treatment Guidelines

6. **NAMS (North American Menopause Society)**
   - Position Statement on Menopause Hormone Therapy
   - Clinical Guidelines for Symptom Management

---

## VALIDATION & TESTING STRATEGY

### Clinical Validation Methodology
1. **Reference Standard Comparison**
   - Validate against published calculator implementations
   - Cross-reference with medical literature examples
   - Expert clinical review of interpretation text

2. **Edge Case Testing**
   - Boundary value analysis for all input parameters
   - Invalid input handling and error messaging
   - Clinical scenario testing with realistic patient profiles

3. **Accuracy Requirements**
   - Target: 100% validation success (following Cardiology model)
   - Mathematical precision within clinical tolerances
   - Consistent results across multiple test runs

4. **User Acceptance Testing**
   - Clinical stakeholder review and feedback
   - Usability testing with target users
   - Mobile device compatibility verification

---

## IMPLEMENTATION PHASES

### Phase 1: Foundation (Subtasks 1-2)
- Complete specification documentation
- Set up base calculator framework
- Establish data models and validation patterns

### Phase 2: Core Calculators (Subtasks 3-5)  
- Implement pregnancy-related calculators
- Develop labor management tools
- Create gynecologic assessment calculators

### Phase 3: Integration (Subtasks 6-7)
- Build specialized UI components
- Implement tabbed navigation interface
- Apply responsive design patterns

### Phase 4: Quality Assurance (Subtasks 8-10)
- Comprehensive validation and error handling
- AI integration and clinical decision support
- Testing, documentation, and clinical validation

---

This specification document provides the foundation for implementing a comprehensive, evidence-based OB/GYN Medical Calculator suite that maintains the high standards established by the successful Cardiology implementation while addressing the unique clinical needs of obstetric and gynecologic practice. 