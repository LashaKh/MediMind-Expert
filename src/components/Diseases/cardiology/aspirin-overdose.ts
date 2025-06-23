import { DiseaseData } from '../types';

export const aspirinOverdoseData: DiseaseData = {
  id: 'aspirin-overdose',
  title: 'Aspirin Overdose',
  lastUpdated: '2025-05-21',
  category: 'Toxicology',
  specialty: 'cardiology',
  content: {
    background: {
      overview: {
        definition: 'Aspirin overdose is the plasma salicylate concentration of 300-500 mg/L in mild toxicity, 500-700 mg/L in moderate toxicity, and > 750 mg/L in severity toxicity.',
        pathophysiology: 'Aspirin overdose is caused by accidental ingestions in children, suicidal or intentional overdoses in adults.',
        epidemiology: 'Severe salicylate poisoning results in 5% mortality.',
        diseaseCourse: 'Acute aspirin overdose results in salicylate poisoning resulting in either mild, moderate, or severe toxicity depending on the plasma salicylate concentration. Mild toxicity presents with burning in the mouth, lethargy, nausea and vomiting, tinnitus, or dizziness. Moderate toxicity includes additional symptoms of tachypnea, hyperpyrexia, sweating, dehydration, loss of coordination, and restlessness. Severe toxicity causes hallucinations, stupor, convulsions, cerebral edema, oliguria, renal failure, cardiovascular failure, metabolic acidosis, and coma.',
        prognosis: 'Severe salicylate poisoning results in 5% mortality.'
      }
    },
    clinicalFindings: {
      symptoms: [
        'Abdominal pain',
        'Diplopia',
        'Fever',
        'Hallucinations',
        'Nausea',
        'Perception of noise or ringing in the ears',
        'Restlessness',
        'Seizure',
        'Shaking',
        'Somnolence',
        'Throat pain',
        'Tinnitus',
        'Vomiting'
      ],
      patientDemographics: [
        'Accidental ingestions in children',
        'Suicidal or intentional overdoses in adults',
        'History of salicylate exposure'
      ],
      pastMedicalHistory: [
        'Previous episodes of salicylate toxicity',
        'History of intentional overdose',
        'Chronic salicylate use'
      ],
      neurologicalExam: [
        'Observed seizure',
        '↑ ICP (Increased Intracranial Pressure)'
      ],
      vitalSigns: [
        '↓ SpO2 (Decreased Oxygen Saturation)'
      ]
    },
    guidelines: {
      keySources: 'The following summarized guidelines for the evaluation and management of aspirin overdose are prepared by our editorial team based on guidelines from the Extracorporeal Treatments in Poisoning Workgroup (EXTRIP 2015), the U.S. Department of Health and Human Services (HHS 2007), and the National Poisons Information Service (NPIS 2002).',
      sections: [
        {
          title: 'Classification and Risk Stratification',
          id: 'classification-risk-stratification',
          content: [
            {
              statement: 'Assessment of severity and appropriate setting of care based on clinical presentation.',
              level: '',
              source: '',
              subsections: [
                {
                  title: 'Setting of Care',
                  id: 'setting-of-care',
                  content: [
                    {
                      statement: 'Refer patients with stated or suspected self-harm or who are the victims of a potentially malicious administration of a salicylate to an emergency department immediately, regardless of the dose reported.',
                      level: 'B',
                      source: 'HHS 2007'
                    },
                    {
                      statement: 'Refer patients with typical symptoms of salicylate toxicity (such as hematemesis, tachypnea, hyperpnea, dyspnea, tinnitus, deafness, lethargy, seizures, unexplained lethargy, or confusion) to an emergency department for evaluation.',
                      level: 'B',
                      source: 'HHS 2007'
                    },
                    {
                      statement: 'Refer patients who exhibit typical symptoms of salicylate toxicity or nonspecific symptoms (such as unexplained lethargy, confusion, or dyspnea) which could indicate the development of chronic salicylate toxicity, to an emergency department for evaluation.',
                      level: 'B',
                      source: 'HHS 2007'
                    }
                  ]
                },
                {
                  title: 'Severity Grading',
                  id: 'severity-grading',
              content: [
                {
                  statement: 'Very mild poisoning occurs in patients with a salicylate level < 300 mg/L (adults) or < 200 mg/L (children or elderly). These patients are generally asymptomatic.',
                  level: 'E',
                  source: 'NPIS 2002'
                },
                {
                  statement: 'Mild poisoning occurs in patients with a salicylate level 300-600 mg/L (adults) or 200-450 mg/L (children or elderly). Clinical features include lethargy, nausea, vomiting, tinnitus, dizziness.',
                  level: 'E',
                  source: 'NPIS 2002'
                },
                {
                  statement: 'Moderate poisoning occurs in patients with a salicylate level 600-800 mg/L (adults) or 450-700 mg/L (children or elderly). Clinical features include mild tachypnea, hyperpyrexia, sweating, dehydration, loss of coordination, restlessness.',
                  level: 'E',
                  source: 'NPIS 2002'
                },
                {
                  statement: 'Severe poisoning occurs in patients with a salicylate level > 800 mg/L (adults) or > 700 mg/L (children or elderly). Clinical features include hypotension, significant metabolic acidosis after rehydration, renal failure (oliguria), and neurological symptoms.',
                  level: 'E',
                  source: 'NPIS 2002'
                }
              ]
                }
              ]
            }
          ]
        },
        {
          title: 'Diagnostic Investigations',
          id: 'diagnostic-investigations',
          content: [
            {
              statement: 'Comprehensive laboratory assessment to determine severity and guide management.',
              level: '',
              source: '',
              subsections: [
                {
                  title: 'Laboratory Investigations',
                  id: 'laboratory-investigations',
                  content: [
                    {
                      statement: 'Obtain serum salicylate levels, renal function and electrolytes, CBC, and INR in patients with aspirin overdose, including measurements performed at least 4 hours after ingestion.',
                      level: 'E',
                      source: 'NPIS 2002'
                    },
                    {
                      statement: 'Obtain an arterial blood gas in patients with symptomatic aspirin overdose.',
                      level: 'E',
                      source: 'NPIS 2002'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: 'Medical Management',
          id: 'medical-management',
          content: [
            {
              statement: 'Comprehensive management approach based on severity of poisoning.',
              level: '',
              source: '',
              subsections: [
                {
                  title: 'General Principles',
                  id: 'general-principles',
                  content: [
                    {
                      statement: 'Administer oral or intravenous fluid therapy to patients with mild aspirin overdose.',
                      level: 'E',
                      source: 'NPIS 2002'
                    },
                    {
                      statement: 'Perform urinary alkalinization in addition to other measures in patients with moderate aspirin overdose.',
                      level: 'E',
                      source: 'NPIS 2002'
                    },
                    {
                      statement: 'Perform hemodialysis in addition to other measures in patients with severe aspirin overdose (cautious with volume of bicarbonate if anuric).',
                      level: 'E',
                      source: 'NPIS 2002'
                    }
                  ]
                },
                {
                  title: 'Supportive Care',
                  id: 'supportive-care',
                  content: [
                    {
                      statement: 'In patients with aspirin overdose who display severe end-organ manifestations (coma, convulsions, acute renal failure, pulmonary edema): initiate hemodynamic and respiratory support, perform arterial blood gas sampling, discuss with the poison control center and toxicology, consider hemodialysis.',
                      level: 'E',
                      source: 'NPIS 2002'
                    }
                  ]
                },
                {
                  title: 'Poison Center Consultation',
                  id: 'poison-center-consultation',
                  content: [
                    {
                      statement: 'Ensure follow-up communication with the poison center at periodic intervals for at least 12 hours after ingestion of non-enteric-coated salicylate products and for at least 24 hours after the ingestion of enteric-coated aspirin.',
                      level: 'B',
                      source: 'HHS 2007'
                    }
                  ]
                },
                {
                  title: 'Gastric Decontamination',
                  id: 'gastric-decontamination',
                  content: [
                    {
                      statement: 'Avoid intentionally inducing emesis in patients with aspirin overdose.',
                      level: 'D',
                      source: 'HHS 2007'
                    },
                    {
                      statement: 'Consider the out-of-hospital administration of activated charcoal for acute ingestions of a toxic dose if it is immediately available, no contraindications are present, the patient is not vomiting, and local guidelines for its out-of-hospital use are observed. However, do not delay transportation in order to administer activated charcoal.',
                      level: 'C',
                      source: 'HHS 2007'
                    },
                    {
                      statement: 'Perform gastric lavage (ensuring the airway is protected) in patients who have taken an aspirin dose > 500 mg/kg within < 1 hour before the presentation, and the dose and time of ingestion are certain.',
                      level: 'E',
                      source: 'NPIS 2002'
                    },
                    {
                      statement: 'Administer oral activated charcoal (ensuring the airway is protected) in patients who have taken: aspirin with an unknown dose, aspirin ≥ 125 mg/kg, or > 500 mg/kg > 1 hour ago (as an alternative to gastric lavage).',
                      level: 'E',
                      source: 'NPIS 2002'
                    }
                  ]
                },
                {
                  title: 'Urinary Alkalinization',
                  id: 'urinary-alkalinization',
                  content: [
                    {
                      statement: 'Administer 1.26% sodium bicarbonate with 20 to 40 mmol potassium (1,000 mL IV over 3 hours) as the initial strategy for urine alkalinization in adults with aspirin overdose.',
                      level: 'E',
                      source: 'NPIS 2002'
                    },
                    {
                      statement: 'Administer 1 ml/kg 8.4% sodium bicarbonate in 10 ml/kg sodium chloride solution with 1 mmol/kg potassium (IV, at a rate of 2 ml/kg/h) as the initial strategy for urine alkalinization in children with aspirin overdose.',
                      level: 'E',
                      source: 'NPIS 2002'
                    }
                  ]
                },
                {
                  title: 'Management of Metabolic Acidosis',
                  id: 'management-metabolic-acidosis',
                  content: [
                    {
                      statement: 'Administer 8.4% sodium bicarbonate (1 mL/kg IV) in patients with aspirin overdose and serum pH < 7.3, targeting an increase pH to 7.4.',
                      level: 'E',
                      source: 'NPIS 2002'
                    },
                    {
                      statement: 'Consider performing hemodialysis in addition to giving sodium bicarbonate in patients with a serum pH < 7.2.',
                      level: 'E',
                      source: 'NPIS 2002'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: 'Inpatient Care',
          id: 'inpatient-care',
          content: [
            {
              statement: 'Close monitoring of urine alkalinization and electrolyte balance in hospitalized patients.',
              level: '',
              source: '',
              subsections: [
                {
                  title: 'Monitoring of Urinary Alkalinization',
                  id: 'monitoring-urinary-alkalinization',
                  content: [
                    {
                      statement: 'Measure urine pH every 1 hour, targeting a urine pH of 7.5-8.5; increase the rate of bicarbonate administration if the urine pH remains < 7.5 (note: avoid serum pH > 7.55, closely monitor serum sodium).',
                      level: 'E',
                      source: 'NPIS 2002'
                    },
                    {
                      statement: 'Check electrolytes and renal function every 3 hours, and administer supplemental potassium as needed to keep the serum potassium in the range 4.0 to 4.5.',
                      level: 'E',
                      source: 'NPIS 2002'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: 'Therapeutic Procedures',
          id: 'therapeutic-procedures',
          content: [
            {
              statement: 'Extracorporeal treatment recommendations for severe salicylate poisoning.',
              level: '',
              source: '',
              subsections: [
                {
                  title: 'Indications for ECTR',
                  id: 'indications-ectr',
                  content: [
                    {
                      statement: 'ECTR is recommended in severe salicylate poisoning.',
                      level: 'B',
                      source: 'EXTRIP 2015'
                    },
                    {
                      statement: 'ECTR is recommended if the salicylate concentration is greater than 7.2 mmol/L (100 mg/dL) after acute salicylate poisoning.',
                      level: 'B',
                      source: 'EXTRIP 2015'
                    },
                    {
                      statement: 'ECTR is suggested if the acetylsalicylic acid concentration is greater than 6.5 mmol/L (90 mg/dL).',
                      level: 'B',
                      source: 'EXTRIP 2015'
                    },
                    {
                      statement: 'ECTR is recommended if acetylsalicylic acid concentration is greater than 6.5 mmol/L (90 mg/dL) in patients with impaired kidney function.',
                      level: 'B',
                      source: 'EXTRIP 2015'
                    },
                    {
                      statement: 'ECTR is suggested if acetylsalicylic acid concentration is greater than 5.8 mmol/L (80 mg/dL) in patients with impaired kidney function.',
                      level: 'B',
                      source: 'EXTRIP 2015'
                    },
                    {
                      statement: 'ECTR is suggested if the blood pH is less than or equal to 7.20.',
                      level: 'B',
                      source: 'EXTRIP 2015'
                    },
                    {
                      statement: 'ECTR is recommended in the presence of altered mental status.',
                      level: 'B',
                      source: 'EXTRIP 2015'
                    },
                    {
                      statement: 'ECTR is recommended in the presence of new hypoxemia requiring supplemental oxygen.',
                      level: 'B',
                      source: 'EXTRIP 2015'
                    },
                    {
                      statement: 'ECTR is recommended if standard therapy (supportive measures, bicarbonate, etc) fails.',
                      level: 'B',
                      source: 'EXTRIP 2015'
                    },
                    {
                      statement: 'ECTR cessation is indicated when clinical improvement is apparent and a salicylate concentration is less than 1.4 mmol/L or 19 mg/dL or ECTR has been performed for a period of at least 4 to 6 hours when salicylate concentrations are not readily available.',
                      level: 'B',
                      source: 'EXTRIP 2015'
                    },
                    {
                      statement: 'It is recommended to continue intravenous bicarbonate therapy between ECTR sessions.',
                      level: 'B',
                      source: 'EXTRIP 2015'
                    },
                    {
                      statement: 'It is suggested not to perform ECTR on the basis of acetylsalicylic acid ingestion history alone.',
                      level: 'B',
                      source: 'EXTRIP 2015'
                    }
                  ]
                },
                {
                  title: 'ECTR Modality',
                  id: 'ectr-modality',
                  content: [
                    {
                      statement: 'Use intermittent hemodialysis as the preferred modality of ECTR in patients with aspirin overdose.',
                      level: 'B',
                      source: 'EXTRIP 2015'
                    },
                    {
                      statement: 'Consider using hemoperfusion or continuous RRT as alternative modalities if hemodialysis is not feasible.',
                      level: 'C',
                      source: 'EXTRIP 2015'
                    },
                    {
                      statement: 'Consider using exchange transfusion as an acceptable alternative to hemodialysis in neonates with aspirin overdose.',
                      level: 'C',
                      source: 'EXTRIP 2015'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: 'Specific Circumstances',
          id: 'specific-circumstances',
          content: [
            {
              statement: 'Management varies based on specific exposure circumstances.',
              level: '',
              source: '',
              subsections: [
                {
                  title: 'Patients with Dermal Exposure',
                  id: 'dermal-exposure',
                  content: [
                    {
                      statement: 'Perform skin washing with soap and water in asymptomatic patients with dermal exposures to salicylates.',
                      level: 'B',
                      source: 'HHS 2007'
                    },
                    {
                      statement: 'Consider discharging asymptomatic patients with dermal exposures to salicylates after skin washing, with observation at home for the development of symptoms.',
                      level: 'C',
                      source: 'HHS 2007'
                    }
                  ]
                },
                {
                  title: 'Patients with Ocular Exposure',
                  id: 'ocular-exposure',
                  content: [
                    {
                      statement: 'Perform ocular irrigation with room-temperature tap water for 15 minutes in patients with an ocular exposure to salicylates.',
                      level: 'B',
                      source: 'HHS 2007'
                    },
                    {
                      statement: 'Obtain an ophthalmological consultation if ocular pain, decreased visual acuity, or persistent ocular irritation is present after irrigation.',
                      level: 'B',
                      source: 'HHS 2007'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: 'Follow-up and Surveillance',
          id: 'follow-up-surveillance',
          content: [
            {
              statement: 'Guidance for safe discharge and follow-up care.',
              level: '',
              source: '',
              subsections: [
                {
                  title: 'Discharge from Hospital',
                  id: 'discharge-from-hospital',
                  content: [
                    {
                      statement: 'Obtain an assessment of the patient\'s mental state and risk of repeated episodes of deliberate self-harm before discharge, ideally performed by a psychiatrist or psychiatric liaison nurse.',
                      level: 'E',
                      source: 'NPIS 2002'
                    },
                    {
                      statement: 'Consider discharging asymptomatic patients with an ingested dose < 125 mg/kg, if sure of dose. Advise to return if develops any symptoms, particularly vomiting, tinnitus, sweating.',
                      level: 'E',
                      source: 'NPIS 2002'
                    },
                    {
                      statement: 'Consider discharging stable patients in whom salicylate levels have peaked and peak level < 300 mg/L (adults) or < 200 mg/L (children/elderly). Advise to return if develops any symptoms, particularly vomiting, tinnitus, sweating.',
                      level: 'E',
                      source: 'NPIS 2002'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    studies: [
      {
        title: 'NICO Trial - Restricted Intubation in Comatose Patients with Suspected Acute Poisoning',
        year: '2023',
        description: 'In comatose patients with suspected acute poisoning and a GCS score < 9, restricted intubation was superior to routine practice with respect to median length of mechanical ventilation.',
        authors: 'Yonathan Freund et al.',
        journal: 'JAMA. 2023 Dec 19'
      }
    ],
    references: [
      {
        id: 1,
        authors: 'P I Dargan, C I Wallace, A L Jones',
        title: 'An evidence based flowchart to guide the management of acute salicylate (aspirin) overdose',
        journal: 'Emerg Med J. 2002 May;19(3):206-9',
        year: '2002',
        link: 'https://pubmed.ncbi.nlm.nih.gov/11971828'
      },
      {
        id: 2,
        authors: 'Debasish Ghosh, Kenneth M Williams, Garry G Graham et al.',
        title: 'Multiple episodes of aspirin overdose in an individual patient: a case report',
        journal: 'J Med Case Rep. 2014 Nov 19:8:374',
        year: '2014',
        link: 'https://pubmed.ncbi.nlm.nih.gov/25406385/'
      },
      {
        id: 3,
        authors: 'Peter A Chyka, Andrew R Erdman, Gwenn Christianson et al.',
        title: 'Salicylate poisoning: an evidence-based consensus guideline for out-of-hospital management',
        journal: 'Clin Toxicol (Phila). 2007;45(2):95-131',
        year: '2007',
        link: 'https://pubmed.ncbi.nlm.nih.gov/17364628'
      },
      {
        id: 4,
        authors: 'David N Juurlink, Sophie Gosselin, Jan T Kielstein et al.',
        title: 'Extracorporeal Treatment for Salicylate Poisoning: Systematic Review and Recommendations From the EXTRIP Workgroup',
        journal: 'Ann Emerg Med. 2015 Aug;66(2):165-81',
        year: '2015',
        link: 'https://pubmed.ncbi.nlm.nih.gov/25986310'
      },
      {
        id: 5,
        authors: 'Irbert L Vega, Matthew K Griswold, Dayne Laskey',
        title: 'Acute Medication Poisoning',
        journal: 'Am Fam Physician. 2024 Feb;109(2):143-153',
        year: '2024',
        link: 'https://pubmed.ncbi.nlm.nih.gov/38393798/'
      }
    ]
  }
};