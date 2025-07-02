import { DiseaseData } from '../types';

export const atrialFibrillationData: DiseaseData = {
  id: 'atrial-fibrillation',
  title: 'Atrial Fibrillation',
  lastUpdated: 'June 19, 2025',
  category: 'Electrophysiology',
  content: {
    background: {
      overview: {
        definition: 'AF is a cardiac arrhythmia characterized by a diffuse and abnormal pattern of electrical activity in the atria of the heart. AF is classified as valvular or nonvalvular based on the presence or absence of valvular heart disease, specifically MS, or a prosthetic heart valve.',
        pathophysiology: 'The development of AF is related to structural and electrophysiological abnormalities resulting from comorbid conditions (including hypertension, diabetes mellitus, obesity, obstructive sleep apnea, myocardial infarction, HF), genetics, sex, and other factors.',
        epidemiology: 'The prevalence of AF in the US ranges is estimated at 700-775 cases per 100,000 persons.',
        diseaseCourse: 'In patients with AF, rapid and irregular atrial contractions lead to tachyarrhythmias, which lead to symptoms of palpitations, dyspnea, and an increased risk of HF; as well as stasis of blood in the LAA, which increases the risk of stroke and systemic embolism.',
        prognosis: 'AF is estimated to cause 15% of all strokes and is associated with a 5-fold increased risk of stroke and a 2-fold risk for all-cause mortality, respectively.'
      }
    },
    guidelines: {
      keySources: 'The following summarized guidelines for the evaluation and management of atrial fibrillation are prepared by our editorial team based on guidelines from the American College of Cardiology (ACC 2025), the American Academy of Family Physicians (AAFP 2024,2017), the American Heart Association (AHA/HRS/ACC/ACCP 2024), the Canadian Cardiovascular Society (CCS/CAIC 2024), the European Society of Cardiology (ESC/EACTS 2024,2021), the Kidney Disease: Improving Global Outcomes (KDIGO 2024), and other major medical organizations.',
      sections: [
        {
          title: 'Screening and diagnosis',
          id: 'screening-diagnosis',
          content: [
            {
              statement: 'Obtain routine heart rhythm assessment during healthcare contact in all individuals aged ≥ 65 years for earlier detection of AF. Consider obtaining population-based screening for AF using a prolonged noninvasive ECG-based approach in individuals aged ≥ 75 years, or ≥ 65 years with additional CHA2DS2-VA risk factors.',
              level: 'B,C',
              source: 'EACTS/ESC 2024 guidelines',
              subsections: [
                {
                  title: 'Indications for screening (general population)',
                  id: 'screening-general',
                  content: [
                    {
                      statement: 'Obtain routine heart rhythm assessment during healthcare contact in all individuals aged ≥ 65 years for earlier detection of AF.',
                      level: 'B',
                      source: 'EACTS/ESC 2024'
                    }
                  ]
                },
                {
                  title: 'Confirmatory testing',
                  id: 'confirmatory-testing',
                  content: [
                    {
                      statement: 'Obtain a 12-lead ECG to document AF rhythm and assess for other arrhythmias or conduction abnormalities.',
                      level: 'A',
                      source: 'ACC/ACCP/AHA/HRS 2024'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: 'Classification and risk stratification',
          id: 'classification-risk',
          content: [
            {
              statement: 'Assess the annual risk of thromboembolic events using a validated clinical risk score, such as the CHA2DS2-VASc score, in patients with AF.',
              level: 'B',
              source: 'ACC/ACCP/AHA/HRS 2024 guidelines',
              subsections: [
                {
                  title: 'Stroke risk assessment',
                  id: 'stroke-risk',
                  content: [
                    {
                      statement: 'Assess the annual risk of thromboembolic events using a validated clinical risk score, such as the CHA2DS2-VASc score, in patients with AF.',
                      level: 'B',
                      source: 'ACC/ACCP/AHA/HRS 2024'
                    }
                  ]
                },
                {
                  title: 'Bleeding risk assessment',
                  id: 'bleeding-risk',
                  content: [
                    {
                      statement: 'Assess bleeding risk using validated risk scores such as HAS-BLED before initiating anticoagulation.',
                      level: 'B',
                      source: 'ESC/EACTS 2024'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: 'Diagnostic investigations',
          id: 'diagnostic-investigations',
          content: [
            {
              statement: 'Obtain a 12-lead ECG as part of the initial evaluation of patients with palpitations to screen for structural and ischemic heart disease, conduction disorders, and arrhythmias.',
              level: 'B',
              source: 'AAFP 2024 guidelines',
              subsections: [
                {
                  title: 'Evaluation of palpitations',
                  id: 'palpitations-eval',
                  content: [
                    {
                      statement: 'Recognize that ambulatory ECG monitoring for 2 weeks has the highest diagnostic yield-to-cost ratio in the evaluation of palpitations of unknown etiology.',
                      level: 'B',
                      source: 'AAFP 2024'
                    }
                  ]
                },
                {
                  title: 'Initial evaluation',
                  id: 'initial-evaluation',
                  content: [
                    {
                      statement: 'Perform comprehensive history and physical examination focusing on cardiovascular symptoms and risk factors.',
                      level: 'A',
                      source: 'ACC/ACCP/AHA/HRS 2024'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: 'Medical management',
          id: 'medical-management',
          content: [
            {
              statement: 'Provide comprehensive care addressing guideline-directed lifestyle risk factor modification, AF symptoms, risk of stroke, and other associated medical conditions to reduce AF burden, progression, or consequences.',
              level: 'A',
              source: 'ACC/ACCP/AHA/HRS 2024 guidelines',
              subsections: [
                {
                  title: 'General principles',
                  id: 'general-principles',
                  content: [
                    {
                      statement: 'Provide comprehensive care addressing guideline-directed lifestyle risk factor modification, AF symptoms, risk of stroke, and other associated medical conditions.',
                      level: 'A',
                      source: 'ACC/ACCP/AHA/HRS 2024'
                    }
                  ]
                },
                {
                  title: 'Rate control',
                  id: 'rate-control',
                  content: [
                    {
                      statement: 'Use beta-blockers or non-dihydropyridine calcium channel blockers for acute rate control in patients with AF.',
                      level: 'A',
                      source: 'ACC/ACCP/AHA/HRS 2024'
                    }
                  ]
                },
                {
                  title: 'Rhythm control',
                  id: 'rhythm-control',
                  content: [
                    {
                      statement: 'Consider rhythm control strategy for symptom improvement and quality of life in patients with AF.',
                      level: 'A',
                      source: 'ACC/ACCP/AHA/HRS 2024'
                    }
                  ]
                },
                {
                  title: 'Anticoagulant therapy',
                  id: 'anticoagulant-therapy',
                  content: [
                    {
                      statement: 'Prescribe oral anticoagulation in patients with AF and CHA2DS2-VASc score ≥2 in males or ≥3 in females.',
                      level: 'A',
                      source: 'ACC/ACCP/AHA/HRS 2024'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: 'Nonpharmacologic interventions',
          id: 'nonpharmacologic',
          content: [
            {
              statement: 'Advise weight loss with an ideal target of at least 10% weight loss to reduce AF symptoms, burden, recurrence, and progression to persistent AF in patients with overweight or obesity (with BMI > 27 kg/m²).',
              level: 'B',
              source: 'ACC/ACCP/AHA/HRS 2024 guidelines',
              subsections: [
                {
                  title: 'Weight loss',
                  id: 'weight-loss',
                  content: [
                    {
                      statement: 'Advise weight loss with an ideal target of at least 10% weight loss to reduce AF symptoms, burden, recurrence, and progression to persistent AF in patients with overweight or obesity.',
                      level: 'B',
                      source: 'ACC/ACCP/AHA/HRS 2024'
                    }
                  ]
                },
                {
                  title: 'Physical activity',
                  id: 'physical-activity',
                  content: [
                    {
                      statement: 'Recommend regular moderate physical activity while avoiding excessive endurance exercise.',
                      level: 'B',
                      source: 'ESC/EACTS 2024'
                    }
                  ]
                },
                {
                  title: 'Smoking cessation',
                  id: 'smoking-cessation',
                  content: [
                    {
                      statement: 'Counsel all patients with AF who smoke to quit smoking and provide smoking cessation support.',
                      level: 'A',
                      source: 'ACC/ACCP/AHA/HRS 2024'
                    }
                  ]
                },
                {
                  title: 'Alcohol restriction',
                  id: 'alcohol-restriction',
                  content: [
                    {
                      statement: 'Recommend alcohol restriction or abstinence in patients with AF, particularly those with alcohol-triggered episodes.',
                      level: 'B',
                      source: 'ESC/EACTS 2024'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: 'Therapeutic procedures',
          id: 'therapeutic-procedures',
          content: [
            {
              statement: 'Consider performing catheter ablation to improve symptoms in patients with symptomatic AF if antiarrhythmic drugs have been ineffective, contraindicated, not tolerated, or not preferred, and continued rhythm control is desired.',
              level: 'B',
              source: 'ACC/ACCP/AHA/HRS 2024 guidelines',
              subsections: [
                {
                  title: 'Catheter ablation',
                  id: 'catheter-ablation',
                  content: [
                    {
                      statement: 'Consider catheter ablation as first-line rhythm control therapy in selected patients with paroxysmal AF.',
                      level: 'B',
                      source: 'ESC/EACTS 2024'
                    }
                  ]
                },
                {
                  title: 'Atrioventricular nodal ablation',
                  id: 'av-nodal-ablation',
                  content: [
                    {
                      statement: 'Consider AV nodal ablation with permanent pacemaker implantation in patients with AF and inadequate rate control despite optimal medical therapy.',
                      level: 'B',
                      source: 'ACC/ACCP/AHA/HRS 2024'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: 'Perioperative care',
          id: 'perioperative-care',
          content: [
            {
              statement: 'Interrupt oral anticoagulation without bridging anticoagulation in patients with AF, excluding patients with recent stroke or TIA or a mechanical valve, receiving oral anticoagulation scheduled to undergo an invasive procedure or surgery.',
              level: 'B',
              source: 'ACC/ACCP/AHA/HRS 2024 guidelines',
              subsections: [
                {
                  title: 'Pre-procedural anticoagulation interruption',
                  id: 'preop-anticoag-interruption',
                  content: [
                    {
                      statement: 'Interrupt oral anticoagulation without bridging anticoagulation in patients with AF scheduled to undergo invasive procedures.',
                      level: 'B',
                      source: 'ACC/ACCP/AHA/HRS 2024'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: 'Surgical interventions',
          id: 'surgical-interventions',
          content: [
            {
              statement: 'Consider performing percutaneous LAA occlusion in patients with AF, a moderate-to-high risk of stroke (CHA₂DS₂-VASc score ≥ 2), and contraindications to long-term oral anticoagulation due to a nonreversible cause.',
              level: 'C',
              source: 'ACC/ACCP/AHA/HRS 2024 guidelines',
              subsections: [
                {
                  title: 'LAA closure',
                  id: 'laa-closure',
                  content: [
                    {
                      statement: 'Consider LAA closure in patients with contraindications to anticoagulation.',
                      level: 'C',
                      source: 'ACC/ACCP/AHA/HRS 2024'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: 'Specific circumstances',
          id: 'specific-circumstances',
          content: [
            {
              statement: 'Consider offering a period of decreased exercise intensity (detraining) as a possible management strategy in patients engaged in high-intensity, long-duration endurance activity.',
              level: 'C',
              source: 'CCS/CHRS 2020 guidelines',
              subsections: [
                {
                  title: 'Athletes',
                  id: 'athletes',
                  content: [
                    {
                      statement: 'Consider decreased exercise intensity in endurance athletes with AF.',
                      level: 'C',
                      source: 'CCS/CHRS 2020'
                    }
                  ]
                },
                {
                  title: 'Elderly patients',
                  id: 'elderly-patients',
                  content: [
                    {
                      statement: 'Consider anticoagulation in elderly patients with AF, with careful attention to bleeding risk.',
                      level: 'B',
                      source: 'ESC/EACTS 2024'
                    }
                  ]
                },
                {
                  title: 'Patients with HF',
                  id: 'hf-patients',
                  content: [
                    {
                      statement: 'Consider catheter ablation in patients with AF and heart failure with reduced ejection fraction.',
                      level: 'A',
                      source: 'ESC/EACTS 2024'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: 'Patient education',
          id: 'patient-education',
          content: [
            {
              statement: 'Provide education to patients, family members, caregivers, and healthcare professionals to optimize shared decision-making and facilitate open discussion of both the benefits and risks associated with each treatment option.',
              level: 'B',
              source: 'EACTS/ESC 2024 guidelines',
              subsections: [
                {
                  title: 'General counseling',
                  id: 'general-counseling',
                  content: [
                    {
                      statement: 'Provide comprehensive education about AF, its risks, and treatment options.',
                      level: 'B',
                      source: 'EACTS/ESC 2024'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: 'Preventative measures',
          id: 'preventative-measures',
          content: [
            {
              statement: 'Offer comprehensive guideline-directed lifestyle risk factor modification for AF, targeting obesity, physical inactivity, unhealthy alcohol consumption, smoking, diabetes, and hypertension in patients at increased risk of AF.',
              level: 'B',
              source: 'ACC/ACCP/AHA/HRS 2024 guidelines',
              subsections: [
                {
                  title: 'Primary prevention',
                  id: 'primary-prevention',
                  content: [
                    {
                      statement: 'Target modifiable risk factors including obesity, hypertension, diabetes, and sleep apnea.',
                      level: 'B',
                      source: 'ACC/ACCP/AHA/HRS 2024'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: 'Follow-up and surveillance',
          id: 'follow-up',
          content: [
            {
              statement: 'Assess patient-reported AF-related symptoms and QoL with validated instruments as part of the longitudinal management of patients with AF.',
              level: 'B',
              source: 'CCS/CHRS 2020 guidelines',
              subsections: [
                {
                  title: 'Clinical follow-up',
                  id: 'clinical-followup',
                  content: [
                    {
                      statement: 'Assess patient-reported AF-related symptoms and quality of life with validated instruments.',
                      level: 'B',
                      source: 'CCS/CHRS 2020'
                    }
                  ]
                },
                {
                  title: 'ECG monitoring',
                  id: 'ecg-monitoring',
                  content: [
                    {
                      statement: 'Perform periodic ECG monitoring to assess rhythm status and response to therapy.',
                      level: 'B',
                      source: 'ACC/ACCP/AHA/HRS 2024'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: 'Quality improvement',
          id: 'quality-improvement',
          content: [
            {
              statement: 'Consider evaluating quality of care and identifying opportunities for improved treatment of AF by practitioners and institutions to improve patient experiences.',
              level: 'C',
              source: 'EACTS/ESC 2024 guidelines',
              subsections: [
                {
                  title: 'Quality of care',
                  id: 'quality-care',
                  content: [
                    {
                      statement: 'Implement quality improvement measures to optimize AF care delivery.',
                      level: 'C',
                      source: 'EACTS/ESC 2024'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  }
};