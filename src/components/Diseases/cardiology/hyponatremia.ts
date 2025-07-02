import { DiseaseData } from '../types';

export const hyponatremiaDiseaseData: DiseaseData = {
  id: 'hyponatremia',
  title: 'Hyponatremia',
  lastUpdated: 'May 21, 2025',
  category: 'Cardiology',
  specialty: 'cardiology',
  
  content: {
    relatedCalculators: [
      {
        title: "Maintenance Fluids Calculations",
        url: "https://www.pathway.md/calculator"
      },
      {
        title: "Sodium Correction for Hyperglycemia",
        url: "https://www.pathway.md/calculator"
      },
      {
        title: "Serum Osmolality and Osmolarity",
        url: "https://www.pathway.md/calculator"
      }
    ],

    background: {
      overview: {
        definition: "Hyponatremia an electrolyte disorder characterized by low serum sodium concentration, and is typically defined as a serum sodium of < 135 mEq/L.",
        
        pathophysiology: "Causes of hyponatremia include increased water intake (psychogenic polydipsia), low dietary solute intake (tea and toast diet), decreased water excretion secondary to elevated plasma ADH levels (volume depletion, SIADH, severe hypothyroidism, adrenal insufficiency), and expansion of plasma volume in the context of edematous states.",
        
        epidemiology: "The prevalence of hyponatremia in the general population of the US is 1.72%.",
        
        diseaseCourse: "Treatment of hyponatremia requires careful attention to avoid overly rapid correction of serum sodium, which can lead to osmotic demyelination syndrome, permanent neurological impairment, and death.",
        
        prognosis: "Approximately 40% of patients with osmotic demyelination syndrome recover fully, whereas 25% have persistent neurological deficits. Mortality associated with osmotic demyelination syndrome is approximately 6%."
      }
    },

    guidelines: {
      keySources: "The following summarized guidelines for the evaluation and management of hyponatremia are prepared by our editorial team based on guidelines from the American Academy of Family Physicians (AAFP 2023), the American Heart Association (AHA/ASA 2023), the Korean Society of Nephrology (KSN/KSEBPR 2022), the American Association for the Study of Liver Diseases (AASLD 2021), the Wilderness Medical Society (WMS 2020), and other key sources.",
      
      sections: [
        {
          id: 'classification-risk-stratification',
          title: 'Classification and Risk Stratification',
          content: [],
          subsections: [
            {
              id: 'classification-duration',
              title: 'Classification by duration',
              content: [
                {
                  statement: "Classify hyponatremia based on the documented duration.",
                  level: "",
                  source: "ERA-EDTA/ESE/ESICM 2014"
                }
              ],
              riskTable: {
                title: "Classification by Duration",
                headers: ["Situation", "Guidance"],
                rows: [
                  {
                    situation: "Acute",
                    guidance: ["< 48 hours"]
                  },
                  {
                    situation: "Chronic",
                    guidance: ["≥ 48 hours"]
                  },
                  {
                    situation: "Chronic (presumably)",
                    guidance: ["If it cannot be classified unless there is clinical or anamnestic evidence of the contrary"]
                  }
                ]
              }
            },
            {
              id: 'severity-sodium-concentration',
              title: 'Severity grading by sodium concentration',
              content: [
                {
                  statement: "Classify hyponatremia based on the serum sodium concentration.",
                  level: "",
                  source: "ERA-EDTA/ESE/ESICM 2014"
                }
              ],
              riskTable: {
                title: "Severity by Sodium Concentration",
                headers: ["Situation", "Guidance"],
                rows: [
                  {
                    situation: "Mild",
                    guidance: ["130-135 mmol/L"]
                  },
                  {
                    situation: "Moderate",
                    guidance: ["125-129 mmol/L"]
                  },
                  {
                    situation: "Profound",
                    guidance: ["< 125 mmol/L"]
                  }
                ]
              }
            },
            {
              id: 'severity-symptoms',
              title: 'Severity grading by symptoms',
              content: [
                {
                  statement: "Classify hyponatremia based on the symptomatic presentation: Moderate - any biochemical degree of hyponatremia in the presence of moderate symptoms (nausea without vomiting, confusion, or headache). Severe - any biochemical degree of hyponatremia in the presence of severe symptoms (vomiting, altered level of consciousness, seizures, or cardiorespiratory distress).",
                  level: "",
                  source: "ERA-EDTA/ESE/ESICM 2014"
                }
              ]
            },
            {
              id: 'osmotic-demyelination-risk',
              title: 'Risk of osmotic demyelination',
              content: [
                {
                  statement: "Recognize that the risk of osmotic demyelination syndrome depends on the following factors: biochemical degree and duration of hyponatremia at presentation, speed of increase in serum sodium concentration, history of alcohol abuse and/or liver disease, use of thiazide or antidepressant medications.",
                  level: "",
                  source: "ERA-EDTA/ESE/ESICM 2014"
                }
              ]
            }
          ]
        },
        {
          id: 'diagnostic-investigations',
          title: 'Diagnostic Investigations',
          content: [],
          subsections: [
            {
              id: 'urine-sodium',
              title: 'Urine sodium',
              content: [
                {
                  statement: "Measure urine sodium concentration on a spot urine sample (obtained and interpreted with concomitant serum sodium concentration) in patients with urine osmolality > 100 mOsm/kg.",
                  level: "B",
                  source: "ERA-EDTA/ESE/ESICM 2014"
                },
                {
                  statement: "Consider attributing hyponatremia to low effective arterial volume in patients with a urine sodium concentration ≤ 30 mmol/L.",
                  level: "C",
                  source: "ERA-EDTA/ESE/ESICM 2014"
                },
                {
                  statement: "Consider assessing the extracellular fluid status and use of diuretics to further differentiate likely causes of hyponatremia in patients with urine sodium concentration > 30 mmol/L.",
                  level: "C",
                  source: "ERA-EDTA/ESE/ESICM 2014"
                }
              ]
            },
            {
              id: 'urine-osmolality',
              title: 'Urine osmolality',
              content: [
                {
                  statement: "Obtain and interpret urine osmolality on a spot urine sample as the initial step in the evaluation of patients with hypotonic hyponatremia.",
                  level: "B",
                  source: "ERA-EDTA/ESE/ESICM 2014"
                },
                {
                  statement: "Attribute hyponatremia to relative excess water intake in patients with a urine osmolality ≤ 100 mOsm/kg.",
                  level: "B",
                  source: "ERA-EDTA/ESE/ESICM 2014"
                }
              ]
            },
            {
              id: 'serum-osmolality',
              title: 'Serum osmolality',
              content: [
                {
                  statement: "View hyponatremia as hypotonic hyponatremia in the absence of causes of non-hypotonic hyponatremia, such as: effective osmoles raising serum osmolality causing hyponatremia (isotonic or hypertonic glucose, mannitol, glycine, histidine-tryptophan-ketoglutarate, hyperosmolar radiocontrast media, maltose) and presence of endogenous solutes causing pseudohyponatremia (laboratory artifact): triglycerides, cholesterol, protein, IVIG, monoclonal gammopathies. Recognize that hyponatremia with a measured serum osmolality < 275 mOsm/kg reflects hypotonic hyponatremia.",
                  level: "",
                  source: "ERA-EDTA/ESE/ESICM 2014"
                }
              ]
            },
            {
              id: 'serum-glucose',
              title: 'Serum glucose',
              content: [
                {
                  statement: "Measure serum glucose concentration to exclude hyperglycemic hyponatremia, and correct the measured serum sodium concentration for the serum glucose concentration if the latter is increased.",
                  level: "B",
                  source: "ERA-EDTA/ESE/ESICM 2014"
                }
              ]
            },
            {
              id: 'fractional-uric-acid',
              title: 'Fractional urinary excretion of uric acid',
              content: [
                {
                  statement: "Consider obtaining an additional measurement of fractional urinary excretion of uric acid in patients with hyponatremia to differentiate likely causes of hyponatremia, such as syndrome of inappropriate antidiuresis or diuretic-induced hyponatremia.",
                  level: "E",
                  source: "KSEBPR/KSN 2022"
                }
              ]
            },
            {
              id: 'copeptin-ratio',
              title: 'Copeptin-to-urinary sodium ratio',
              content: [
                {
                  statement: "Insufficient evidence to recommend obtaining copeptin-to-urinary sodium ratio to assess patient volume status.",
                  level: "I",
                  source: "KSEBPR/KSN 2022"
                }
              ]
            },
            {
              id: 'vasopressin-levels',
              title: 'Vasopressin levels',
              content: [
                {
                  statement: "Avoid measuring vasopressin as part of the diagnostic evaluation for the SIADH.",
                  level: "D",
                  source: "ERA-EDTA/ESE/ESICM 2014"
                }
              ]
            },
            {
              id: 'siadh-diagnostic-criteria',
              title: 'Diagnostic criteria for syndrome of inappropriate antidiuretic hormone secretion',
              content: [
                {
                  statement: "Use diagnostic criteria to evaluate for SIADH.",
                  level: "",
                  source: "Clinical Practice"
                }
              ],
              calculator: {
                type: "siadh-criteria",
                parameters: {
                  "essential_criteria": {
                    label: "Essential Criteria (8 points each)",
                    options: [
                      {
                        value: 0,
                        label: "Effective serum osmolality < 275 mOsm/kg",
                        points: 8
                      },
                      {
                        value: 1,
                        label: "Urine osmolality > 100 mOsm/kg",
                        points: 8
                      },
                      {
                        value: 2,
                        label: "No clinical evidence of hypovolemia or hypervolemia",
                        points: 8
                      },
                      {
                        value: 3,
                        label: "Urine sodium concentration > 30 mmol/L with normal dietary salt and water intake",
                        points: 8
                      },
                      {
                        value: 4,
                        label: "Absence of adrenal, thyroid, pituitary or renal insufficiency",
                        points: 8
                      },
                      {
                        value: 5,
                        label: "No recent use of diuretic agents",
                        points: 8
                      }
                    ]
                  },
                  "supplemental_criteria": {
                    label: "Supplemental Criteria (1 point each)",
                    options: [
                      {
                        value: 6,
                        label: "Serum uric acid < 0.24 mmol/L [< 4 mg/dL]",
                        points: 1
                      },
                      {
                        value: 7,
                        label: "Serum urea < 3.6 mmol/L [< 21.6 mg/dL]",
                        points: 1
                      },
                      {
                        value: 8,
                        label: "Failure to correct hyponatremia after 0.9% saline infusion",
                        points: 1
                      },
                      {
                        value: 9,
                        label: "Fractional sodium excretion > 0.5%",
                        points: 1
                      },
                      {
                        value: 10,
                        label: "Fractional urea excretion > 55%",
                        points: 1
                      },
                      {
                        value: 11,
                        label: "Fractional uric acid excretion > 12%",
                        points: 1
                      },
                      {
                        value: 12,
                        label: "Correction of hyponatremia through fluid restriction",
                        points: 1
                      }
                    ]
                  }
                },
                riskCategories: [
                  {
                    score: "0-7",
                    risk: "Criteria not met",
                    probability: "Insufficient points",
                    interpretation: "Does not meet criteria for possible SIADH. Consider alternative causes of hyponatremia."
                  },
                  {
                    score: "8+",
                    risk: "Meets criteria for possible SIADH",
                    probability: "Criteria satisfied",
                    interpretation: "Meets criteria for possible SIADH according to diagnostic guidelines. Consider appropriate evaluation and treatment."
                  }
                ]
              }
            }
          ]
        },
        {
          id: 'medical-management',
          title: 'Medical Management',
          content: [],
          subsections: [
            {
              id: 'mild-symptomatic-acute',
              title: 'Management of mildly symptomatic patients, acute setting',
              content: [
                {
                  statement: "Obtain rigorous evaluation for the causes of mild hyponatremia and manage causative diseases to improve clinical outcomes.",
                  level: "E",
                  source: "KSEBPR/KSN 2022"
                },
                {
                  statement: "Obtain prompt diagnostic assessment in mildly symptomatic patients with hyponatremia.",
                  level: "B",
                  source: "ERA-EDTA/ESE/ESICM 2014"
                },
                {
                  statement: "Ensure that the serum sodium concentration has been measured using the same technique used for the previous measurement and that no administrative errors in sample handling have occurred. Discontinue non-essential fluids, medications, and other factors likely to contribute to or provoke hyponatremia.",
                  level: "",
                  source: "ERA-EDTA/ESE/ESICM 2014"
                },
                {
                  statement: "Initiate treatment directed at the underlying cause of hyponatremia.",
                  level: "B",
                  source: "ERA-EDTA/ESE/ESICM 2014"
                },
                {
                  statement: "Consider administering a single infusion of 3% hypertonic saline (150 mL IV, over 20 minutes) if the acute decrease in serum sodium concentration is > 10 mmol/L.",
                  level: "C",
                  source: "ERA-EDTA/ESE/ESICM 2014"
                },
                {
                  statement: "Consider obtaining a follow-up serum sodium concentration after 4 hours, using the same technique as used for the previous measurement.",
                  level: "C",
                  source: "ERA-EDTA/ESE/ESICM 2014"
                }
              ]
            },
            {
              id: 'mild-symptomatic-chronic',
              title: 'Management of mildly symptomatic patients, chronic setting',
              content: [
                {
                  statement: "Discontinue non-essential fluids, medications, and other factors likely to contribute to or provoke hyponatremia.",
                  level: "",
                  source: "ERA-EDTA/ESE/ESICM 2014"
                },
                {
                  statement: "Initiate treatment directed at the underlying cause of hyponatremia.",
                  level: "B",
                  source: "ERA-EDTA/ESE/ESICM 2014"
                },
                {
                  statement: "Avoid implementing therapeutic measures aimed solely at increasing the serum sodium concentration in patients with mild hyponatremia.",
                  level: "D",
                  source: "ERA-EDTA/ESE/ESICM 2014"
                },
                {
                  statement: "Avoid increasing serum sodium concentration of > 10 mmol/L during the first 24 hours, or > 8 mmol/L during every subsequent 24-hour period in patients with moderate or profound hyponatremia.",
                  level: "D",
                  source: "ERA-EDTA/ESE/ESICM 2014"
                },
                {
                  statement: "Consider measuring serum sodium concentration every 6 hours until the serum sodium concentration has stabilized in patients with moderate or profound hyponatremia.",
                  level: "C",
                  source: "ERA-EDTA/ESE/ESICM 2014"
                }
              ]
            },
            {
              id: 'moderately-symptomatic',
              title: 'Management of moderately symptomatic patients',
              content: [
                {
                  statement: "Obtain prompt diagnostic assessment in moderately symptomatic patients with hyponatremia.",
                  level: "B",
                  source: "ERA-EDTA/ESE/ESICM 2014"
                },
                {
                  statement: "Discontinue fluids, medications, and other factors likely to contribute to or provoke hyponatremia, if possible.",
                  level: "",
                  source: "ERA-EDTA/ESE/ESICM 2014"
                },
                {
                  statement: "Initiate treatment directed at the underlying cause of hyponatremia.",
                  level: "B",
                  source: "ERA-EDTA/ESE/ESICM 2014"
                },
                {
                  statement: "Consider administering a single infusion of 3% hypertonic saline (150 mL IV, over 20 minutes) immediately.",
                  level: "C",
                  source: "ERA-EDTA/ESE/ESICM 2014"
                },
                {
                  statement: "Consider obtaining follow-up serum sodium concentration measurements after 1, 6, and 12 hours.",
                  level: "C",
                  source: "ERA-EDTA/ESE/ESICM 2014"
                },
                {
                  statement: "Consider targeting a 5 mmol/L increase in serum sodium concentration per 24-hour period.",
                  level: "C",
                  source: "ERA-EDTA/ESE/ESICM 2014"
                },
                {
                  statement: "Consider limiting the increase in serum sodium concentration to 10 mmol/L in the first 24 hours and 8 mmol/L during every 24 hours thereafter, until a serum sodium concentration of 130 mmol/L is reached.",
                  level: "C",
                  source: "ERA-EDTA/ESE/ESICM 2014"
                },
                {
                  statement: "Consider obtaining additional diagnostic evaluation for other causes of the symptoms if the symptoms do not improve with an increase in serum sodium concentration.",
                  level: "C",
                  source: "ERA-EDTA/ESE/ESICM 2014"
                },
                {
                  statement: "Consider managing patients as in severely symptomatic hyponatremia if the serum sodium concentration further decreases despite treating the underlying diagnosis.",
                  level: "C",
                  source: "ERA-EDTA/ESE/ESICM 2014"
                }
              ]
            },
            {
              id: 'severely-symptomatic-initial',
              title: 'Management of severely symptomatic patients, initial management',
              content: [
                {
                  statement: "Consider administering bolus or continuous infusions of 3% hypertonic saline in patients with a sodium concentration of < 125 mEq/L and moderate or severe symptoms. Recognize that bolus infusion improves sodium concentration more quickly with less overcorrection.",
                  level: "C",
                  source: "AAFP 2023"
                },
                {
                  statement: "Monitor sodium concentration after each hypertonic saline bolus and every 6 hours during the first 24 hours of treatment in patients with severe symptomatic hyponatremia.",
                  level: "B",
                  source: "AAFP 2023"
                },
                {
                  statement: "Limit sodium correction to 8 mEq/L over 24 hours in patients with chronic hyponatremia at increased risk of osmotic demyelination syndrome. Limit sodium correction to 12 mEq/L over 24 hours and 18 mEq/L over 48 hours in patients without risk factors to minimize the risk of osmotic demyelination syndrome.",
                  level: "B",
                  source: "AAFP 2023"
                },
                {
                  statement: "Consider administering rapid intermittent boluses of hypertonic saline in patients with symptomatic severe hypotonic hyponatremia.",
                  level: "C",
                  source: "KSEBPR/KSN 2022"
                },
                {
                  statement: "Administer IV infusion of 3% hypertonic saline (150 mL IV, over 20 minutes) promptly in patients with severely symptomatic hyponatremia.",
                  level: "B",
                  source: "ERA-EDTA/ESE/ESICM 2014"
                },
                {
                  statement: "Obtain a follow-up serum sodium concentration 20 minutes after the initial infusion, while administering a second infusion of 150 mL 3% hypertonic saline over the subsequent 20 minutes.",
                  level: "B",
                  source: "ERA-EDTA/ESE/ESICM 2014"
                },
                {
                  statement: "Consider repeating therapeutic recommendations twice or until a target of 5 mmol/L increase in serum sodium concentration is achieved. Manage patients with severely symptomatic hyponatremia in an environment where close biochemical and clinical monitoring can be provided.",
                  level: "C",
                  source: "ERA-EDTA/ESE/ESICM 2014"
                },
                {
                  statement: "Updated evidence: SALSA - In adults patients with moderately severe-to-severe hyponatremia and glucose-corrected serum sodium levels ≤ 125 mmol/L, rapid intermittent bolus was not superior to slow continuous infusion with respect to incidence of overcorrection. (Seon Ha Baek et al. JAMA Intern Med. 2021 Jan 1. [PubMed](https://pubmed.ncbi.nlm.nih.gov/33104189/))",
                  level: "",
                  source: "SALSA 2021"
                }
              ]
            },
            {
              id: 'severely-symptomatic-adequate-response',
              title: 'Management of severely symptomatic patients, adequate response to initial management',
              content: [
                {
                  statement: "Decide on the next steps of the management of hypotonic hyponatremia (true hyponatremia) in the absence of severe hyponatremia based on whether the patient is hypovolemic, euvolemic, or hypervolemic.",
                  level: "B",
                  source: "AAFP 2023"
                }
              ]
            }
          ]
        }
      ]
    },

    clinicalFindings: {
      patientDemographics: [
        "Elderly age"
      ],
      
      pastMedicalHistory: [
        "Addison's disease",
        "Adrenal insufficiency",
        "Burns",
        "CKD",
        "Cerebral salt wasting",
        "Chronic liver disease",
        "HF",
        "Hypothyroidism",
        "Liver cirrhosis",
        "SIADH",
        "Subarachnoid hemorrhage"
      ],
      
      symptoms: [
        "Confusion",
        "Diarrhea",
        "Dysarthria",
        "Fatigue",
        "Gait disturbance",
        "Headache",
        "Irritability",
        "Muscle cramps",
        "Muscle spasms",
        "Muscle weakness",
        "Nausea",
        "Restlessness",
        "Seizure",
        "Somnolence",
        "Sweating",
        "Vomiting"
      ]
    },

    studies: [
      {
        title: "SALSA",
        year: "2021",
        description: "In adults patients with moderately severe-to-severe hyponatremia and glucose-corrected serum sodium levels ≤ 125 mmol/L, rapid intermittent bolus was not superior to slow continuous infusion with respect to incidence of overcorrection.",
        authors: "Seon Ha Baek et al.",
        journal: "JAMA Intern Med. 2021 Jan 1.",
        link: "https://pubmed.ncbi.nlm.nih.gov/33104189/"
      }
    ],

    specificCircumstances: [
      {
        id: 'hypovolemic-hyponatremia',
        title: 'Patients with hypovolemic hyponatremia',
        population: 'Patients with hypovolemic hyponatremia',
        considerations: [
          'Hemodynamic instability',
          'Extracellular volume depletion',
          'Rapid fluid resuscitation priority'
        ],
        management: [
          'Administer IV infusion of a crystalloid solution (0.9% saline or a balanced crystalloid, 0.5-1.0 mL/kg/hour) to restore extracellular volume',
          'Manage patients with hemodynamic instability in an environment where close biochemical and clinical monitoring can be provided',
          'Prioritize rapid fluid resuscitation over concerns regarding an overly rapid rise in serum sodium concentration in patients with hemodynamic instability'
        ],
        evidenceLevel: 'A',
        source: 'ERA-EDTA/ESE/ESICM 2014'
      },
      {
        id: 'hypervolemic-hyponatremia',
        title: 'Patients with hypervolemic hyponatremia',
        population: 'Patients with hypervolemic hyponatremia',
        considerations: [
          'Fluid overload',
          'Risk of further volume expansion',
          'Underlying heart failure or liver disease'
        ],
        management: [
          'Do not implement therapeutic measures aimed solely at increasing the serum sodium concentration in patients with mild or moderate hyponatremia',
          'Consider restricting fluid administration to prevent further fluid overload',
          'Do not use vasopressin receptor antagonists and demeclocycline in patients with hypervolemic hyponatremia'
        ],
        evidenceLevel: 'D',
        source: 'ERA-EDTA/ESE/ESICM 2014'
      },
      {
        id: 'siadh-patients',
        title: 'Patients with SIADH',
        population: 'Patients with syndrome of inappropriate antidiuretic hormone secretion',
        considerations: [
          'Inappropriate ADH release',
          'Euvolemic presentation',
          'Need for specific diagnostic criteria'
        ],
        management: [
          'Consider administering vaptans in patients with the syndrome of inappropriate antidiuresis and moderate-to-severe hyponatremia',
          'Avoid measuring vasopressin as part of the diagnostic evaluation for the SIADH',
          'Consider restricting fluid intake as first-line treatment in patients with the SIADH and moderate or profound hyponatremia',
          'Consider offering either increasing solute intake with urea (0.25-0.50 g/kg/day) or a combination of low-dose loop diuretics and oral sodium chloride as second-line treatments',
          'Do not use lithium, demeclocycline, or vasopressin receptor antagonists in patients with moderate or profound hyponatremia'
        ],
        evidenceLevel: 'C',
        source: 'KSEBPR/KSN 2022, ERA-EDTA/ESE/ESICM 2014'
      },
      {
        id: 'exercise-associated-hyponatremia',
        title: 'Patients with exercise-associated hyponatremia',
        population: 'Athletes and individuals engaged in prolonged exercise',
        considerations: [
          'Fluid overload from excessive hydration',
          'Risk of cerebral edema',
          'Need for rapid assessment and treatment'
        ],
        management: [
          'Advise avoiding sustained overhydration during exercise as primary prevention',
          'Obtain point-of-care testing in at-risk symptomatic patients when available',
          'Administer 100 mL bolus of IV hypertonic saline in patients with biochemically confirmed severe exercise-associated hyponatremia',
          'Observe patients for at least 60 minutes after exercise to ensure no decompensation occurs'
        ],
        evidenceLevel: 'A',
        source: 'WMS 2020'
      },
      {
        id: 'heart-failure-patients',
        title: 'Patients with heart failure',
        population: 'Patients with heart failure and hypervolemic hyponatremia',
        considerations: [
          'Reduced cardiac output',
          'Volume overload',
          'Need for careful sodium correction'
        ],
        management: [
          'Consider administering vaptans in patients with HF and hypervolemic hyponatremia in terms of rapid sodium correction'
        ],
        evidenceLevel: 'C',
        source: 'KSEBPR/KSN 2022'
      },
      {
        id: 'liver-disease-patients',
        title: 'Patients with liver disease',
        population: 'Patients with liver cirrhosis and hyponatremia',
        considerations: [
          'Increased risk of osmotic demyelination syndrome',
          'Poor prognosis with severe hyponatremia',
          'Liver transplantation considerations'
        ],
        management: [
          'Obtain monitoring and advise water restriction in patients with mild hyponatremia (126-135 mEq/L) without symptoms',
          'Advise water restriction to < 1,000 mL/day and discontinue diuretics for moderate hyponatremia (120-125 mEq/L)',
          'Set goal rate of increase of serum sodium of 4-6 mEq/L per 24-hour period (not exceeding 8 mEq/L per 24-hour period)',
          'Evaluate patients with hyponatremia for liver transplantation due to poor prognosis'
        ],
        evidenceLevel: 'E',
        source: 'AASLD 2021, EASL 2018'
      },
      {
        id: 'cerebral-disease-patients',
        title: 'Patients with cerebral disease',
        population: 'Patients with aneurysmal subarachnoid hemorrhage or other cerebral diseases',
        considerations: [
          'Cerebral salt wasting',
          'Risk of neurological complications',
          'Need for individualized treatment'
        ],
        management: [
          'Consider administering mineralocorticoids for the treatment of natriuresis and hyponatremia in patients with aneurysmal subarachnoid hemorrhage',
          'Individualize administration of hypertonic or isotonic saline infusion, oral sodium chloride, or fludrocortisone'
        ],
        evidenceLevel: 'C',
        source: 'AHA/ASA 2023, KSEBPR/KSN 2022'
      }
    ],

    preventiveMeasures: [
      {
        id: 'primary-prevention-hospitalized',
        title: 'Primary prevention in hospitalized patients',
        intervention: 'Isotonic fluid administration',
        population: 'Hospitalized pediatric patients over 1 month and under 18 years of age',
        efficacy: 'Prevents hyponatremia development',
        evidenceLevel: 'A',
        source: 'KSEBPR/KSN 2022'
      }
    ],

    references: [
      {
        id: 1,
        authors: "Rondon-Berrios H, Agaba EI, Tzamaloukas AH",
        title: "Hyponatremia: pathophysiology, classification, manifestations and management",
        journal: "Int Urol Nephrol. 2014 Nov;46(11):2153-65",
        year: "2014",
        link: "https://pubmed.ncbi.nlm.nih.gov/25000903/"
      },
      {
        id: 2,
        authors: "Mohan S, Gu S, Parikh A et al",
        title: "Prevalence of hyponatremia and association with mortality: results from NHANES",
        journal: "Am J Med. 2013 Dec;126(12):1127-37",
        year: "2013",
        link: "https://pubmed.ncbi.nlm.nih.gov/24138795/"
      },
      {
        id: 3,
        authors: "Goce Spasovski, Raymond Vanholder, Bruno Allolio et al",
        title: "Clinical practice guideline on diagnosis and treatment of hyponatraemia",
        journal: "Eur J Endocrinol. 2014 Feb 25;170(3):G1-47",
        year: "2014",
        link: "https://pubmed.ncbi.nlm.nih.gov/24569125/"
      },
      {
        id: 4,
        authors: "Yeonhee Lee, Kyung Don Yoo, Seon Ha Baek et al",
        title: "Korean Society of Nephrology 2022 Recommendations on controversial issues in diagnosis and management of hyponatremia",
        journal: "Kidney Res Clin Pract. 2022 Jul;41(4):393-411",
        year: "2022",
        link: "https://pubmed.ncbi.nlm.nih.gov/35718525/"
      },
      {
        id: 5,
        authors: "European Association for the Study of the Liver",
        title: "EASL Clinical Practice Guidelines for the management of patients with decompensated cirrhosis",
        journal: "J Hepatol. 2018 Aug;69(2):406-460",
        year: "2018",
        link: "https://pubmed.ncbi.nlm.nih.gov/29653741/"
      },
      {
        id: 6,
        authors: "Nathaniel E Miller, David Rushlow, Stephen K Stacey",
        title: "Diagnosis and Management of Sodium Disorders: Hyponatremia and Hypernatremia",
        journal: "Am Fam Physician. 2023 Nov;108(5):476-486",
        year: "2023",
        link: "https://pubmed.ncbi.nlm.nih.gov/37963087/"
      },
      {
        id: 7,
        authors: "Brad L Bennett, Tamara Hew-Butler, Mitchell H Rosner et al",
        title: "Wilderness Medical Society Clinical Practice Guidelines for the Management of Exercise-Associated Hyponatremia: 2019 Update",
        journal: "Wilderness Environ Med. 2020 Mar;31(1):50-62",
        year: "2020",
        link: "https://pubmed.ncbi.nlm.nih.gov/32007318/"
      },
      {
        id: 8,
        authors: "Brian L Hoh, Nerissa U Ko, Sepideh Amin-Hanjani et al",
        title: "2023 Guideline for the Management of Patients With Aneurysmal Subarachnoid Hemorrhage: A Guideline From the American Heart Association / American Stroke Association",
        journal: "Stroke. 2023 Jul;54(7):e314-e370",
        year: "2023",
        link: "https://pubmed.ncbi.nlm.nih.gov/37212182/"
      },
      {
        id: 9,
        authors: "Scott W Biggins, Paulo Angeli, Guadalupe Garcia-Tsao et al",
        title: "Diagnosis, Evaluation, and Management of Ascites, Spontaneous Bacterial Peritonitis and Hepatorenal Syndrome: 2021 Practice Guidance by the American Association for the Study of Liver Diseases",
        journal: "Hepatology. 2021 Aug;74(2):1014-1048",
        year: "2021",
        link: "https://pubmed.ncbi.nlm.nih.gov/33942342/"
      }
    ]
  }
} 