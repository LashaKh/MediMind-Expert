import { DiseaseData } from '../types';

export const digoxinToxicityData: DiseaseData = {
  id: 'digoxin-toxicity',
  title: 'Digoxin Toxicity',
  lastUpdated: 'May 22, 2025',
  category: 'Toxicology',
  specialty: 'cardiology',
  content: {
    background: {
      overview: {
        definition: 'Digoxin toxicity is a clinical condition resulting from excessive levels of digoxin or digitoxin, characterized by cardiac arrhythmias, gastrointestinal symptoms, and neurological manifestations.',
        pathophysiology: 'Digoxin toxicity occurs through inhibition of the sodium-potassium ATPase pump, leading to increased intracellular calcium and enhanced automaticity. This results in bradyarrhythmias due to enhanced vagal tone and AV conduction blocks, as well as ventricular arrhythmias due to enhanced automaticity.',
        epidemiology: 'Digoxin toxicity is more common in elderly patients due to decreased renal function and drug clearance. Risk factors include renal impairment, electrolyte imbalances (particularly hypokalemia and hypomagnesemia), and drug interactions.',
        diseaseCourse: 'The clinical course of digoxin toxicity can range from mild gastrointestinal symptoms to life-threatening cardiac arrhythmias. Early manifestations include nausea, vomiting, and visual disturbances, while severe cases present with bradycardia, heart blocks, or ventricular arrhythmias.',
        prognosis: 'The prognosis depends on the severity of toxicity and promptness of treatment. With appropriate management including digoxin immune Fab when indicated, most patients recover without long-term sequelae. Severe cases with hemodynamic compromise carry higher morbidity and mortality.'
      }
    },
    clinicalFindings: {
      patientDemographics: [
        'Elderly age - Increased risk due to decreased renal function and drug clearance'
      ],
      pastMedicalHistory: [
        'Chronic kidney disease',
        'Heart failure',
        'Atrial fibrillation',
        'Electrolyte imbalances',
        'Recent medication changes'
      ],
      symptoms: [
        'Abdominal pain - Gastrointestinal manifestation of toxicity',
        'Dizziness - Due to hemodynamic compromise from arrhythmias',
        'Dyspnea - Shortness of breath from cardiac dysfunction',
        'Loss of appetite - Common gastrointestinal symptom',
        'Nausea - Early sign of digoxin toxicity',
        'Palpitations - Awareness of irregular or rapid heartbeat',
        'Visual disturbances - Classic neurological sign including yellow-green vision',
        'Vomiting - Gastrointestinal manifestation'
      ],
      vitalSigns: [
        'Bradycardia - Slow heart rate due to enhanced vagal tone and AV conduction blocks',
        'Tachycardia - Ventricular arrhythmias due to enhanced automaticity'
      ]
    },
    guidelines: {
      keySources: 'The following summarized guidelines for the management of digoxin toxicity are prepared by our editorial team based on guidelines from the American Heart Association (AHA 2023), the American Heart Association (AHA/HRS/ACC 2019), and the Extracorporeal Treatments in Poisoning Workgroup (EXTRIP 2016).',
      sections: [
        {
          title: 'Medical Management',
          id: 'medical-management',
          content: [
            {
              statement: 'Administer digoxin immune Fab in patients with digoxin or digitoxin poisoning.',
              level: 'B',
              source: 'AHA 2023 guidelines',
              subsections: [
                {
                  title: 'Digoxin Immune Fab',
                  id: 'digoxin-immune-fab',
                  content: [
                    {
                      statement: 'Administer digoxin immune Fab in patients with digoxin or digitoxin poisoning.',
                      level: 'B',
                      source: 'AHA 2023'
                    },
                    {
                      statement: 'Consider administering digoxin immune Fab in patients with yellow oleander poisoning.',
                      level: 'C',
                      source: 'AHA 2023'
                    },
                    {
                      statement: 'Consider administering digoxin immune Fab in patients with poisoning from cardiac glycosides other than digoxin, digitoxin, and yellow oleander.',
                      level: 'C',
                      source: 'AHA 2023'
                    },
                    {
                      statement: 'Consider administering digoxin immune fAb to increase HR and improve symptoms in patients with bradycardia associated with symptoms or hemodynamic compromise in the setting of digoxin toxicity.',
                      level: 'C',
                      source: 'ACC/AHA/HRS 2019'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: 'Management of Arrhythmias',
          id: 'arrhythmia-management',
          content: [
            {
              statement: 'Consider administering atropine for the management of bradyarrhythmias in patients with digoxin or other cardiac glycoside poisoning.',
              level: 'C',
              source: 'AHA 2023 guidelines',
              subsections: [
                {
                  title: 'Bradyarrhythmia Management',
                  id: 'bradyarrhythmia-management',
                  content: [
                    {
                      statement: 'Consider administering atropine for the management of bradyarrhythmias in patients with digoxin or other cardiac glycoside poisoning.',
                      level: 'C',
                      source: 'AHA 2023'
                    }
                  ]
                },
                {
                  title: 'Ventricular Arrhythmia Management',
                  id: 'ventricular-arrhythmia-management',
                  content: [
                    {
                      statement: 'Consider administering lidocaine, phenytoin, or bretylium for the management of ventricular arrhythmias in patients with digitalis or other cardiac glycoside poisoning until digoxin immune Fab can be administered.',
                      level: 'C',
                      source: 'AHA 2023'
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
              statement: 'Consider attempting electrical pacing for the management of bradyarrhythmias in patients with digoxin or other cardiac glycoside poisoning.',
              level: 'C',
              source: 'AHA 2023 guidelines',
              subsections: [
                {
                  title: 'Temporary Cardiac Pacing',
                  id: 'temporary-cardiac-pacing',
                  content: [
                    {
                      statement: 'Consider attempting electrical pacing for the management of bradyarrhythmias in patients with digoxin or other cardiac glycoside poisoning.',
                      level: 'C',
                      source: 'AHA 2023'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: 'Extracorporeal Treatment (ECTR)',
          id: 'extracorporeal-treatment',
          content: [
            {
              statement: 'Do not perform hemodialysis, hemofiltration, hemoperfusion, or plasmapheresis in patients with digoxin poisoning.',
              level: 'D',
              source: 'AHA 2023 guidelines',
              subsections: [
                {
                  title: 'AHA 2023 ECTR Recommendations',
                  id: 'aha-ectr-recommendations',
                  content: [
                    {
                      statement: 'Do not perform hemodialysis, hemofiltration, hemoperfusion, or plasmapheresis in patients with digoxin poisoning.',
                      level: 'D',
                      source: 'AHA 2023'
                    }
                  ]
                },
                {
                  title: 'ACC/AHA/HRS 2019 ECTR Recommendations',
                  id: 'acc-ectr-recommendations',
                  content: [
                    {
                      statement: 'Do not offer hemodialysis for removal of digoxin in patients with bradycardia associated with symptoms or hemodynamic compromise attributable to digoxin toxicity.',
                      level: 'D',
                      source: 'ACC/AHA/HRS 2019'
                    }
                  ]
                },
                {
                  title: 'EXTRIP 2016 ECTR Recommendations',
                  id: 'extrip-ectr-recommendations',
                  content: [
                    {
                      statement: 'Do not offer ECTR in severe digoxin toxicity regardless if Fab is administered.',
                      level: 'D',
                      source: 'EXTRIP 2016'
                    },
                    {
                      statement: 'Do not offer ECTR in suspected digoxin ingestion regardless if Fab is administered.',
                      level: 'D',
                      source: 'EXTRIP 2016'
                    },
                    {
                      statement: 'Do not offer ECTR in elevated digoxin serum concentrations regardless if Fab is administered.',
                      level: 'D',
                      source: 'EXTRIP 2016'
                    },
                    {
                      statement: 'Do not offer ECTR in cardiovascular disturbances if Fab is administered.',
                      level: 'D',
                      source: 'EXTRIP 2016'
                    },
                    {
                      statement: 'Do not offer ECTR in serum potassium > 6.0 mmol/L.',
                      level: 'D',
                      source: 'EXTRIP 2016'
                    },
                    {
                      statement: 'Avoid offering ECTR in patients with severe digoxin toxicity regardless if Fab is not administered.',
                      level: 'D',
                      source: 'EXTRIP 2016'
                    },
                    {
                      statement: 'Avoid offering ECTR for removing digoxin immune Fab complex in patients with no clinical toxicity and impaired kidney function in cardiovascular disturbance if Fab is not administered.',
                      level: 'D',
                      source: 'EXTRIP 2016'
                    },
                    {
                      statement: 'Avoid offering ECTR for removing digoxin immune Fab complex in patients with no clinical toxicity and impaired kidney function in serum potassium level of 6.0-7.0 mEq/L.',
                      level: 'D',
                      source: 'EXTRIP 2016'
                    },
                    {
                      statement: 'Insufficient evidence to recommend for or against ECTR for removing digoxin immune Fab complex in patients with clinical toxicity and impaired kidney function in case of serum potassium levels > 7.0 mmol/L.',
                      level: 'I',
                      source: 'EXTRIP 2016'
                    },
                    {
                      statement: 'Do not offer intermittent hemodialysis, hemoperfusion, or other ECTR modalities in patients with severe digoxin poisoning.',
                      level: 'D',
                      source: 'EXTRIP 2016'
                    },
                    {
                      statement: 'Do not offer therapeutic plasma exchange for removing digoxin immune Fab complex in patients with impaired kidney function.',
                      level: 'D',
                      source: 'EXTRIP 2016'
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
              statement: 'Consider administering digoxin immune fAb in patients with Bufo toad venom poisoning.',
              level: 'C',
              source: 'AHA 2023 guidelines',
              subsections: [
                {
                  title: 'Patients with Toad Venom Poisoning',
                  id: 'toad-venom-poisoning',
                  content: [
                    {
                      statement: 'Consider administering digoxin immune fAb in patients with Bufo toad venom poisoning.',
                      level: 'C',
                      source: 'AHA 2023'
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
        title: 'NICO Study',
        year: '2023',
        description: 'In comatose patients with suspected acute poisoning and a GCS score < 9, restricted intubation was superior to routine practice with respect to median length of mechanical ventilation.',
        authors: 'Yonathan Freund et al.',
        journal: 'JAMA. 2023 Dec 19.'
      }
    ],
    references: [
      {
        id: 1,
        authors: 'Eric J Lavonas, Peter D Akpunonu, Ann M Arens et al.',
        title: '2023 American Heart Association Focused Update on the Management of Patients With Cardiac Arrest or Life-Threatening Toxicity Due to Poisoning: An Update to the American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care',
        journal: 'Circulation. 2023 Oct 17;148(16):e149-e184',
        year: '2023',
        link: 'https://pubmed.ncbi.nlm.nih.gov/37721023/'
      },
      {
        id: 2,
        authors: 'James B Mowry, Emmanuel A Burdmann, Kurt Anseeuw et al.',
        title: 'Extracorporeal treatment for digoxin poisoning: systematic review and recommendations from the EXTRIP Workgroup',
        journal: 'Clin Toxicol (Phila). 2016;54(2):103-14',
        year: '2016',
        link: 'https://pubmed.ncbi.nlm.nih.gov/26795743/'
      },
      {
        id: 3,
        authors: 'Fred M Kusumoto, Mark H Schoenfeld, Coletta Barrett et al.',
        title: '2018 ACC / AHA / HRS Guideline on the Evaluation and Management of Patients With Bradycardia and Cardiac Conduction Delay: A Report of the American College of Cardiology / American Heart Association Task Force on Clinical Practice Guidelines and the Heart Rhythm Society',
        journal: 'Circulation. 2019 Aug 20;140(8):e382-e482',
        year: '2019',
        link: 'https://pubmed.ncbi.nlm.nih.gov/30586771/'
      },
      {
        id: 4,
        authors: 'Ashish R Panchal, Jason A Bartos, José G Cabañas et al.',
        title: 'Part 3: Adult Basic and Advanced Life Support: 2020 American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care',
        journal: 'Circulation. 2020 Oct 20;142(16_suppl_2):S366-S468',
        year: '2020',
        link: 'https://pubmed.ncbi.nlm.nih.gov/33081529/'
      },
      {
        id: 5,
        authors: 'Cenk Gokalp, Aysun Fatma Dogan, Guray Aygun et al.',
        title: 'Continuous venovenous hemodialysis may be effective in digoxin removal in digoxin toxicity: A case report',
        journal: 'Hemodial Int. 2020 Oct;24(4):E58-E60',
        year: '2020',
        link: 'https://pubmed.ncbi.nlm.nih.gov/32770621/'
      },
      {
        id: 6,
        authors: 'Mamatha Punjee Raja Rao, Prashanth Panduranga, Kadhim Sulaiman et al.',
        title: 'Digoxin toxicity with normal digoxin and serum potassium levels: beware of magnesium, the hidden malefactor',
        journal: 'J Emerg Med. 2013 Aug;45(2):e31-4',
        year: '2013',
        link: 'https://pubmed.ncbi.nlm.nih.gov/23685098/'
      },
      {
        id: 7,
        authors: 'Irbert L Vega, Matthew K Griswold, Dayne Laskey',
        title: 'Acute Medication Poisoning',
        journal: 'Am Fam Physician. 2024 Feb;109(2):143-153',
        year: '2024',
        link: 'https://pubmed.ncbi.nlm.nih.gov/38393798/'
      }
    ]
  }
};