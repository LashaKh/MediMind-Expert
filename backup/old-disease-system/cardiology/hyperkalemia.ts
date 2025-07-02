import { DiseaseData } from '../types';

export const hyperkalemiaData: DiseaseData = {
  id: 'hyperkalemia',
  title: 'Hyperkalemia',
  lastUpdated: 'May 21, 2025',
  category: 'Electrolyte Disorders',
  specialty: 'cardiology',
  content: {
    background: {
      overview: {
        definition: 'Hyperkalemia is defined as an increase in serum potassium levels > 5.0 mmol/L.',
        pathophysiology: 'The pathophysiology of hyperkalemia involves disruptions in potassium balance due to excess potassium intake, impaired potassium excretion, or transcellular shifts. The etiology is often multifactorial, with impaired renal function, medication use, and hyperglycemia being the most common contributors.',
        epidemiology: 'The prevalence of hyperkalemia in the US is estimated at 1,550 per 100,000 population.',
        diseaseCourse: 'Mild and moderate hyperkalemia are usually asymptomatic. Severe cases may manifest as muscle weakness, ascending paralysis, heart palpitations, and paresthesias. ECG changes associated with hyperkalemia include peaked T waves, P-wave flattening, PR-interval prolongation, widening of the QRS complex, and sine waves.',
        prognosis: 'The prognosis of hyperkalemia is dependent on the severity of the condition and the promptness of treatment. Severe untreated hyperkalemia can lead to life-threatening cardiac arrhythmias and cardiac arrest.'
      }
    },
    clinicalFindings: {
      symptoms: [
        'Chest pain',
        'Diarrhea',
        'Muscle cramps',
        'Muscle weakness',
        'Nausea',
        'Palpitations',
        'Paresthesia',
        'Vomiting'
      ],
      pastMedicalHistory: [
        'AKI',
        'Addison\'s disease',
        'Alcohol use disorder',
        'CKD',
        'Diabetes mellitus',
        'HF',
        'Myocardial infarction',
        'Recent diarrheal illness',
        'Recent excessive vomiting',
        'Rhabdomyolysis',
        'Sickle cell disease',
        'Traumatic injury',
        'Tumor lysis syndrome'
      ],
      patientDemographics: [
        'ACEis',
        'ARBs',
        'Calcineurin inhibitor',
        'Digoxin',
        'Direct renin inhibitors',
        'Epithelial sodium channel blockers',
        'Mineralocorticoid receptor antagonists',
        'NSAIDs',
        'Trimethoprim'
      ]
    },
    studies: [
      {
        title: 'DIAMOND (patiromer)',
        year: '2022',
        description: 'In patients with HFrEF and hyperkalemia or a history of hyperkalemia, patiromer was superior to placebo with respect to mean change in serum potassium.',
        authors: 'Javed Butler, Stefan D Anker, Lars H Lund et al.',
        journal: 'Eur Heart J. 2022 Nov 1;43(41):4362-4373',
        link: 'https://pubmed.ncbi.nlm.nih.gov/35900838/'
      },
      {
        title: 'AKIKI',
        year: '2016',
        description: 'In patients with severe AKI who required mechanical ventilation, catecholamine infusion, or both and did not have a potentially life-threatening complication directly related to renal failure, early RRT was not superior to delayed RRT with respect to death at day 60.',
        authors: 'Stéphane Gaudry, Julie Hajage, Alexandre Schortgen et al.',
        journal: 'N Engl J Med. 2016 Jul 14;375(2):122-33',
        link: 'https://pubmed.ncbi.nlm.nih.gov/33812488/'
      }
    ],
    guidelines: {
      keySources: 'The following summarized guidelines for the evaluation and management of hyperkalemia are prepared by our editorial team based on guidelines from the American Academy of Family Physicians (AAFP 2023), the United Kingdom Kidney Association (UKKA 2023), the American Heart Association (AHA 2020), and the Guidelines and Audit Implementation Network (GAIN 2014).',
      sections: [
        {
          title: 'Screening and diagnosis',
          id: 'screening-diagnosis',
          content: [
            {
              statement: 'Obtain routine serum potassium level monitoring in patients with CVD or CKD, especially if it is < 4 or > 5 mEq/L.',
              level: 'B',
              source: 'AAFP 2023'
            },
            {
              statement: 'Obtain regular serum potassium level monitoring at a frequency (2-4 times per year) depending on the level of renal function and degree of proteinuria in patients with known CKD, HF, and/or diabetes.',
              level: 'B',
              source: 'UKKA 2023'
            },
            {
              statement: 'Obtain renal function monitoring in patients at risk of hyperkalemia with known CKD, HF, or diabetes, and in any patient taking RAAS inhibitors.',
              level: 'A',
              source: 'UKKA 2023'
            }
          ],
          subsections: [
            {
              title: 'Indications for screening, before initiating RAAS inhibitors',
              id: 'screening-raas',
              content: [
                {
                  statement: 'Obtain urea and electrolytes testing before initiating ACEis or ARBs, and use these drugs with caution if the serum potassium is > 5.0 mmol.',
                  level: 'A',
                  source: 'UKKA 2023'
                },
                {
                  statement: 'Avoid using mineralocorticoid receptor antagonists in patients with a baseline serum potassium > 5.0 mmol/L or eGFR < 30 mL/min.',
                  level: 'D',
                  source: 'UKKA 2023'
                }
              ]
            },
            {
              title: 'Indications for monitoring, history of hyperkalemia',
              id: 'monitoring-history',
              content: [
                {
                  statement: 'Obtain repeat serum potassium measurement within 3 days, or as soon as feasible, if an episode of mild hyperkalemia (serum potassium 5.5-5.9 mmol/L) is detected unexpectedly in the outpatient setting.',
                  level: 'B',
                  source: 'UKKA 2023'
                },
                {
                  statement: 'Obtain repeat serum potassium measurement within 1 day of an episode of moderate hyperkalemia (serum potassium 6.0-6.4 mmol/L) when detected in the outpatient setting.',
                  level: 'B',
                  source: 'UKKA 2023'
                },
                {
                  statement: 'Admit patients with severe hyperkalemia (serum potassium ≥ 6.5 mmol/L) detected in the outpatient setting to the hospital for immediate assessment and treatment.',
                  level: 'B',
                  source: 'UKKA 2023'
                }
              ]
            },
            {
              title: 'Confirmatory testing',
              id: 'confirmatory-testing',
              content: [
                {
                  statement: 'Obtain a repeat serum potassium urgently in order to exclude pseudohyperkalemia, especially if hyperkalemia is an unexpected or isolated finding.',
                  level: 'E',
                  source: 'GAIN 2014'
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
              statement: 'Use an early warning scoring system for urgent clinical assessment to assess the level of acuity in all patients presenting to the hospital with known or suspected hyperkalemia.',
              level: 'B',
              source: 'UKKA 2023'
            },
            {
              statement: 'Classify the severity of hyperkalemia as follows: Mild (Potassium 5.5-5.9 mmol/L), Moderate (Potassium 6.0-6.5 mmol/L), Severe (Potassium ≥ 6.5 mmol/L or serum potassium ≥ 5.5mmol/L with ECG changes or symptoms).',
              level: 'E',
              source: 'GAIN 2014'
            }
          ]
        },
        {
          title: 'Diagnostic investigations',
          id: 'diagnostic-investigations',
          content: [
            {
              statement: 'Elicit a comprehensive medical and drug history and perform a clinical examination to determine the cause of hyperkalemia in all patients presenting to the hospital with hyperkalemia.',
              level: 'B',
              source: 'UKKA 2023'
            },
            {
              statement: 'Obtain urgent clinical assessment using an early warning scoring system to assess the level of acuity in all patients presenting to the hospital with known or suspected hyperkalemia.',
              level: 'B',
              source: 'UKKA 2023'
            }
          ],
          subsections: [
            {
              title: 'Laboratory tests',
              id: 'laboratory-tests',
              content: [
                {
                  statement: 'Measure potassium from an arterial or venous blood sample using a point-of-care blood gas analyzer in emergencies whilst awaiting the results from a formal laboratory measurement.',
                  level: 'B',
                  source: 'UKKA 2023'
                },
                {
                  statement: 'Use a lithium heparin anticoagulated specimen as the sample type of choice when rapid turnaround of urea and electrolytes results is required.',
                  level: 'B',
                  source: 'UKKA 2023'
                }
              ]
            },
            {
              title: 'ECG',
              id: 'ecg',
              content: [
                {
                  statement: 'Obtain an urgent 12-lead ECG and assess for changes of hyperkalemia in all hospitalized patients with serum potassium ≥ 6.0 mmol/L.',
                  level: 'B',
                  source: 'UKKA 2023'
                },
                {
                  statement: 'Obtain a 12-lead ECG in all patients with hyperkalemia.',
                  level: 'E',
                  source: 'GAIN 2014'
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
              statement: 'Initiate interventions to lower serum potassium in patients with serum potassium ≥ 5.5 mmol/L.',
              level: 'B',
              source: 'UKKA 2023'
            },
            {
              statement: 'Guide treatment of hyperkalemia in the outpatient setting by its severity and clinical condition of the patient.',
              level: 'B',
              source: 'UKKA 2023'
            }
          ],
          subsections: [
            {
              title: 'Indications for urgent treatment',
              id: 'urgent-treatment',
              content: [
                {
                  statement: 'Do not decide on urgent treatment solely based on ECG due to a lack of consistent threshold of ECG changes.',
                  level: 'D',
                  source: 'AAFP 2023'
                },
                {
                  statement: 'Obtain urgent hospital assessment in all patients with severe hyperkalemia (serum potassium ≥ 6.5 mmol/L) detected in the outpatient setting.',
                  level: 'A',
                  source: 'UKKA 2023'
                },
                {
                  statement: 'Initiate urgent treatment if the serum potassium is ≥ 6.5 mmol/L or hyperkalemia is accompanied by ECG changes or symptoms.',
                  level: 'E',
                  source: 'GAIN 2014'
                }
              ]
            },
            {
              title: 'Discontinuation of contributing medications',
              id: 'medication-discontinuation',
              content: [
                {
                  statement: 'Withhold RAAS inhibitors during acute intercurrent illness (such as sepsis, hypovolemia, and/or AKI) at all severities of hyperkalemia.',
                  level: 'B',
                  source: 'UKKA 2023'
                },
                {
                  statement: 'Discontinue RAAS inhibitors in patients with serum potassium ≥ 6 mmol/L not meeting the criteria for treatment with patiromer or sodium zirconium cyclosilicate.',
                  level: 'B',
                  source: 'UKKA 2023'
                },
                {
                  statement: 'Discontinue all medications that can contribute to hyperkalemia, including ACEis, ARBs, potassium-retaining diuretics, potassium-containing laxatives.',
                  level: 'E',
                  source: 'GAIN 2014'
                }
              ]
            },
            {
              title: 'Intravenous calcium',
              id: 'iv-calcium',
              content: [
                {
                  statement: 'Administer IV calcium (equivalent dose of 6.8 mmol) in patients with hyperkalemia in the presence of ECG changes at a dose and rate of 30 mL 10% calcium gluconate over 10 minutes or 10 mL 10% calcium chloride over 5 minutes guided by the clinical setting.',
                  level: 'B',
                  source: 'UKKA 2023'
                },
                {
                  statement: 'Prefer calcium chloride for resuscitation (cardiac arrest or peri-arrest) and calcium gluconate for all other patients in the presence of ECG signs of hyperkalemia.',
                  level: 'B',
                  source: 'UKKA 2023'
                },
                {
                  statement: 'Administer 10 ml of IV calcium gluconate 10% over 2 minutes in patients with hyperkalemia with ECG abnormalities.',
                  level: 'E',
                  source: 'GAIN 2014'
                }
              ]
            },
            {
              title: 'Intracellular shifting, insulin/glucose',
              id: 'insulin-glucose',
              content: [
                {
                  statement: 'Administer insulin/glucose (10 units soluble insulin in 25 g glucose) by IV infusion for the treatment of severe hyperkalemia (serum potassium ≥ 6.5 mmol/L).',
                  level: 'B',
                  source: 'UKKA 2023'
                },
                {
                  statement: 'Consider administering insulin/glucose (10 units soluble insulin in 25 g glucose) by IV infusion for the treatment of moderate hyperkalemia (serum potassium 6.0-6.4 mmol/L).',
                  level: 'C',
                  source: 'UKKA 2023'
                },
                {
                  statement: 'Administer 10 units of rapid-acting insulin combined with 50 mL of 50% glucose solution (25 g of glucose) by slow IV injection over 5 minutes.',
                  level: 'E',
                  source: 'GAIN 2014'
                }
              ]
            },
            {
              title: 'Intracellular shifting, salbutamol',
              id: 'salbutamol',
              content: [
                {
                  statement: 'Administer nebulized salbutamol 10-20 mg as adjuvant therapy in patients with severe hyperkalemia (serum potassium ≥ 6.5 mmol/L).',
                  level: 'B',
                  source: 'UKKA 2023'
                },
                {
                  statement: 'Consider administering nebulized salbutamol 10-20 mg as adjuvant therapy in patients with moderate hyperkalemia (serum potassium 6.0-6.4 mmol/L).',
                  level: 'C',
                  source: 'UKKA 2023'
                },
                {
                  statement: 'Do not use salbutamol as monotherapy in the treatment of severe hyperkalemia.',
                  level: 'D',
                  source: 'UKKA 2023'
                }
              ]
            },
            {
              title: 'Gastrointestinal excretion, sodium zirconium cyclosilicate',
              id: 'sodium-zirconium',
              content: [
                {
                  statement: 'Prefer sodium zirconium cyclosilicate over sodium polystyrene sulfonate in patients with hyperkalemia due to higher efficacy and lower risk of serious adverse effects.',
                  level: 'B',
                  source: 'AAFP 2023'
                },
                {
                  statement: 'Administer sodium zirconium cyclosilicate as an option for the management of persistent hyperkalemia with a confirmed serum potassium ≥ 6.0 mmol/L in adult patients with CKD stage 3b-5 (not on dialysis) or HF receiving a suboptimal dose of RAAS inhibitors.',
                  level: 'A',
                  source: 'UKKA 2023'
                }
              ]
            },
            {
              title: 'Gastrointestinal excretion, patiromer',
              id: 'patiromer',
              content: [
                {
                  statement: 'Prefer patiromer over sodium polystyrene sulfonate in patients with hyperkalemia due to higher efficacy and lower risk of serious adverse effects.',
                  level: 'B',
                  source: 'AAFP 2023'
                },
                {
                  statement: 'Administer patiromer as an option for the management of persistent hyperkalemia with a confirmed serum potassium ≥ 6.0 mmol/L in adult patients with CKD stage 3b-5 (not on dialysis) or HF receiving a suboptimal dose or not receiving RAAS inhibitors due to hyperkalemia.',
                  level: 'A',
                  source: 'UKKA 2023'
                }
              ]
            }
          ]
        },
        {
          title: 'Inpatient care',
          id: 'inpatient-care',
          content: [
            {
              statement: 'Monitor serum potassium closely in all patients with hyperkalemia to assess the efficacy of treatment and monitor for rebound hyperkalemia after the initial response to treatment wanes.',
              level: 'B',
              source: 'UKKA 2023'
            },
            {
              statement: 'Consider monitoring serum potassium at least 1, 2, 4, 6, and 24 hours after identification and treatment of patients with moderate or severe hyperkalemia.',
              level: 'C',
              source: 'UKKA 2023'
            }
          ],
          subsections: [
            {
              title: 'Laboratory monitoring',
              id: 'lab-monitoring',
              content: [
                {
                  statement: 'Monitor blood glucose at regular intervals (0, 30, 60, 90, 120, 180, 240, 300, and 360 minutes) after administration of insulin/glucose infusion in all patients with hyperkalemia.',
                  level: 'B',
                  source: 'UKKA 2023'
                },
                {
                  statement: 'Arrange outpatient blood monitoring on discharge of patients who have required treatment for hyperkalemia during hospital admission.',
                  level: 'B',
                  source: 'UKKA 2023'
                }
              ]
            },
            {
              title: 'Cardiac monitoring',
              id: 'cardiac-monitoring',
              content: [
                {
                  statement: 'Obtain a minimum of continuous 3-lead ECG monitoring, ideally in a higher-dependency setting, in all patients with serum potassium ≥ 6.5 mmol/L, patients with features of hyperkalemia on 12-lead ECG, and in patients with a serum potassium of 6.0-6.4 mmol/L who are clinically unwell.',
                  level: 'B',
                  source: 'UKKA 2023'
                },
                {
                  statement: 'Initiate cardiac monitoring in patients with severe hyperkalemia (serum potassium ≥ 6.5 mmol/L).',
                  level: 'E',
                  source: 'GAIN 2014'
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
              statement: 'Offer dietary strategies to modify potassium intake in non-hospitalized patients with CKD and persistent hyperkalemia with serum potassium > 5.5 mmol/L after addressing non-dietary causes of hyperkalemia, such as constipation, acidosis, and poorly controlled diabetes.',
              level: 'B',
              source: 'UKKA 2023'
            },
            {
              statement: 'Offer expert assessment by a registered or specialist renal dietitian and advice on dietary strategies to modify potassium intake in patients with CKD and persistent hyperkalemia with serum potassium > 5.5 mmol/L.',
              level: 'B',
              source: 'UKKA 2023'
            }
          ],
          subsections: [
            {
              title: 'Low-potassium diet',
              id: 'low-potassium-diet',
              content: [
                {
                  statement: 'Place the patient on a low potassium diet, avoiding fruit juice, fruits, chocolate, fruit gums, biscuits, coffee or potatoes.',
                  level: 'E',
                  source: 'GAIN 2014'
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
              statement: 'Decide on the timing, suitability, and modality for initiation of RRT in patients with life-threatening hyperkalemia, either from the outset or resistant to initial medical therapy, urgently by a nephrologist or critical care specialist.',
              level: 'B',
              source: 'UKKA 2023'
            },
            {
              statement: 'Perform urgent dialysis in hemodialysis patients with severe hyperkalemia (serum potassium ≥ 6.5 mmol/L).',
              level: 'A',
              source: 'UKKA 2023'
            }
          ],
          subsections: [
            {
              title: 'RRT',
              id: 'rrt',
              content: [
                {
                  statement: 'Consider initiating hemodialysis in patients with severe hyperkalemia in whom other first-line agents have been unsuccessful, or if there is ongoing tissue damage and continued release of intracellular potassium is expected.',
                  level: 'E',
                  source: 'GAIN 2014'
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
              statement: 'Consider reinitiating RAAS inhibitor therapy with potassium binders in patients with hyperkalemia and CKD, HF, or diabetic nephropathy.',
              level: 'C',
              source: 'AAFP 2023'
            },
            {
              statement: 'Suspect hyperkalemia in all patients with cardiac arrest, as part of identifying and treating a reversible cause using the 4Hs and 4Ts approach.',
              level: 'A',
              source: 'UKKA 2023'
            }
          ],
          subsections: [
            {
              title: 'Patients on RAAS inhibitor therapy, monitoring',
              id: 'raas-monitoring',
              content: [
                {
                  statement: 'Assess urea and electrolytes 1-2 weeks after initiating ACEis or ARBs and after every dose titration.',
                  level: 'A',
                  source: 'UKKA 2023'
                },
                {
                  statement: 'Assess urea and electrolytes 1 week after initiating mineralocorticoid receptor antagonists or after dose up-titration, then monthly for the first 3 months, 3-monthly for the first year, and 4-monthly thereafter.',
                  level: 'A',
                  source: 'UKKA 2023'
                }
              ]
            },
            {
              title: 'Patients on digoxin',
              id: 'digoxin-patients',
              content: [
                {
                  statement: 'Administer IV calcium slowly (e.g. over 20 minutes) in patients taking digoxin in whom IV calcium is indicated, as rapid calcium administration may precipitate myocardial digoxin toxicity.',
                  level: 'E',
                  source: 'GAIN 2014'
                },
                {
                  statement: 'Consider initiating hemodialysis and administration of digoxin antibody fragments in patients with hyperkalemia due to digoxin toxicity.',
                  level: 'E',
                  source: 'GAIN 2014'
                }
              ]
            },
            {
              title: 'Patients with cardiac arrest, management',
              id: 'cardiac-arrest-management',
              content: [
                {
                  statement: 'Use a treatment algorithm providing guidance on medical therapies and the need for initiation of RRT during CPR in patients with cardiac arrest attributable to hyperkalemia.',
                  level: 'B',
                  source: 'UKKA 2023'
                },
                {
                  statement: 'Administer IV calcium chloride if hyperkalemia is the known or suspected cause of cardiac arrest.',
                  level: 'B',
                  source: 'UKKA 2023'
                },
                {
                  statement: 'Administer IV calcium in addition to standard advanced cardiovascular life support care in patients with cardiac arrest with known or suspected hyperkalemia.',
                  level: 'B',
                  source: 'AHA 2020'
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
              statement: 'Use caution when prescribing trimethoprim in patients with renal impairment or taking RAAS inhibitors.',
              level: 'A',
              source: 'UKKA 2023'
            },
            {
              statement: 'Counsel patients regarding the risks of AKI and hyperkalemia during acute illness and measures to avoid these complications.',
              level: 'B',
              source: 'UKKA 2023'
            }
          ],
          subsections: [
            {
              title: 'Prescribing caution',
              id: 'prescribing-caution',
              content: [
                {
                  statement: 'Review the need for prescribed medication that can cause hyperkalemia in the context of the current illness and level of renal function both on and during hospital admission.',
                  level: 'B',
                  source: 'UKKA 2023'
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
              statement: 'Consider referring patients with severe hyperkalemia (serum potassium ≥ 6.5 mmol/L) to their local renal or critical care team for an urgent opinion, guided by the clinical scenario and its persistence after initial medical treatment.',
              level: 'C',
              source: 'UKKA 2023'
            },
            {
              statement: 'Refer patients to the critical care team by a senior member of the referring team if escalation of care is required from the outset or if the patient fails to respond to initial treatment.',
              level: 'B',
              source: 'UKKA 2023'
            }
          ],
          subsections: [
            {
              title: 'Referral to renal or critical care services',
              id: 'referral-services',
              content: [
                {
                  statement: 'Admit stable patients with severe hyperkalemia to an area with facilities for continuous cardiac monitoring sufficiently staffed to support clinical monitoring and treatment.',
                  level: 'B',
                  source: 'UKKA 2023'
                },
                {
                  statement: 'Consider transferring clinically stable patients to renal services if hyperkalemia cannot be controlled using medical measures (serum potassium < 6.5 mmol/L), particularly in the presence of advanced or oliguric renal failure.',
                  level: 'C',
                  source: 'UKKA 2023'
                }
              ]
            }
          ]
        }
      ]
    },
    references: [
      {
        id: 1,
        authors: 'Anthony J Viera, Noah Wouk',
        title: 'Potassium Disorders: Hypokalemia and Hyperkalemia',
        journal: 'Am Fam Physician. 2015 Sep 15;92(6):487-95',
        year: '2015',
        link: 'https://pubmed.ncbi.nlm.nih.gov/26371733/'
      },
      {
        id: 2,
        authors: 'Keith A Betts, J Michael Woolley, Fan Mu et al.',
        title: 'The prevalence of hyperkalemia in the United States',
        journal: 'Curr Med Res Opin. 2018 Jun;34(6):971-978',
        year: '2018',
        link: 'https://pubmed.ncbi.nlm.nih.gov/29368958'
      },
      {
        id: 3,
        authors: 'Annette Alfonzo, Alexander Harrison, Richard Baines et al.',
        title: 'Clinical Practice Guidelines Treatment of Acute Hyperkalaemia in Adults',
        journal: 'UKKA. 2023 Oct',
        year: '2023'
      },
      {
        id: 4,
        authors: 'McVeigh G, Maxwell P, O\'Donell S et al.',
        title: 'Guidelines for the Treatment of Hyperkalaemia in Adults',
        journal: 'GAIN Sub-Group on the Treatment of Hyperkalaemia in Adults',
        year: '2014'
      },
      {
        id: 5,
        authors: 'Michael J Kim, Christina Valerio, Glynnis K Knobloch',
        title: 'Potassium Disorders: Hypokalemia and Hyperkalemia',
        journal: 'Am Fam Physician. 2023 Jan;107(1):59-70',
        year: '2023',
        link: 'https://pubmed.ncbi.nlm.nih.gov/36689973/'
      },
      {
        id: 6,
        authors: 'Ashish R Panchal, Jason A Bartos, José G Cabañas et al.',
        title: 'Part 3: Adult Basic and Advanced Life Support: 2020 American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care',
        journal: 'Circulation. 2020 Oct 20;142(16_suppl_2):S366-S468',
        year: '2020',
        link: 'https://pubmed.ncbi.nlm.nih.gov/33081529/'
      },
      {
        id: 7,
        authors: 'Annette Alfonzo, Alexander Harrison, Richard Baines et al.',
        title: 'Clinical Practice Guidelines Treatment of Acute Hyperkalaemia in Adults',
        journal: 'The Renal Association. 2020 Jun',
        year: '2020'
      },
      {
        id: 8,
        authors: 'Javed Butler, Stefan D Anker, Lars H Lund et al.',
        title: 'Patiromer for the management of hyperkalemia in heart failure with reduced ejection fraction: the DIAMOND trial',
        journal: 'Eur Heart J. 2022 Nov 1;43(41):4362-4373',
        year: '2022',
        link: 'https://pubmed.ncbi.nlm.nih.gov/35900838/'
      },
      {
        id: 9,
        authors: 'No authors listed',
        title: 'Guideline: Potassium Intake for Adults and Children',
        journal: 'World Health Organization. 2012',
        year: '2012',
        link: 'https://pubmed.ncbi.nlm.nih.gov/23617019/'
      },
      {
        id: 10,
        authors: 'Csaba P Kovesdy',
        title: 'Management of hyperkalaemia in chronic kidney disease',
        journal: 'Nat Rev Nephrol. 2014 Nov;10(11):653-62',
        year: '2014',
        link: 'https://pubmed.ncbi.nlm.nih.gov/25223988/'
      }
    ]
  }
}; 