import { DiseaseData } from '../types';

export const betaBlockerToxicityData: DiseaseData = {
  id: 'beta-blocker-toxicity',
  title: 'Beta-blocker Toxicity',
  lastUpdated: '2025-05-21',
  category: 'Toxicology',
  specialty: 'cardiology',
  content: {
    background: {
      overview: {
        definition: 'Beta-blocker toxicity refers to an overdose or excessive exposure to β-blocker medications.',
        pathophysiology: 'The pathophysiology of β-blocker toxicity involves the excessive blockade of β-adrenergic receptors. This blockade leads to a decrease in HR and myocardial workload.',
        epidemiology: 'The incidence of β-blocker toxicity is estimated at 5.1% among hospitalized patients with acute poisoning.',
        diseaseCourse: 'Clinically, patients with β-blocker toxicity often present with bradycardia, hypotension, and varying degrees of AV block. In severe cases, patients may experience life-threatening cardiogenic shock refractory to pharmacological interventions.',
        prognosis: 'The prognosis of β-blocker toxicity can range from mild to severe toxicity, depending on the amount of β-blocker ingested and the time elapsed before treatment.'
      }
    },
    clinicalFindings: {
      symptoms: [
        'Seizure'
      ],
      vitalSigns: [
        'Bradycardia',
        'Hypotension'
      ],
      pastMedicalHistory: [
        'β-blockers'
      ]
    },
    guidelines: {
      keySources: 'The following summarized guidelines for the evaluation and management of beta-blocker toxicity are prepared by our editorial team based on guidelines from: American Heart Association (AHA 2023), American Heart Association (AHA/HRS/ACC 2019), American Association of Poison Control Centers (AAPCC/AACT/ACMT 2005).',
      sections: [
        {
          title: 'Diagnostic Investigations',
          id: 'diagnostic-investigations',
          content: [
            {
              statement: 'Initial Assessment',
              level: '',
              source: '',
              subsections: [
                {
                  title: 'Initial Assessment',
                  id: 'initial-assessment',
                  content: [
                    {
                      statement: 'Elicit history to determine the precise ingested dose of a β-blocker, the presence of coingestants and comorbidities in patients without evidence of self-harm.',
                      level: 'B',
                      source: 'AACT/AAPCC/ACMT 2005'
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
              statement: 'Comprehensive emergency management for beta-blocker toxicity.',
              level: '',
              source: '',
              subsections: [
                {
                  title: 'Admission to Emergency Department',
                  id: 'admission-emergency-department',
                  content: [
                    {
                      statement: 'Refer patients with stated or suspected self-harm or victims of a potentially malicious administration of β-blocker to an emergency department immediately, guided by local poison center procedures, regardless of the dose reported.',
                      level: 'B',
                      source: 'AACT/AAPCC/ACMT 2005'
                    },
                    {
                      statement: 'Consider referring patients without evidence of self-harm to an emergency department if ingested: An amount exceeding the usual maximum single therapeutic dose, An amount equal to or greater than the lowest reported toxic dose, Any excess dose of any β-blocker in combination with a CCB, Any excess dose of any β-blocker in the presence of a serious underlying CVD (such as end-stage cardiomyopathy).',
                      level: 'C',
                      source: 'AACT/AAPCC/ACMT 2005'
                    },
                    {
                      statement: 'Refer asymptomatic patients ingested a β-blocker exceeding the referral dose to an emergency department if the ingestion occurred within the following timeframes of contacting the poison center: 6 hours for an immediate-release product other than sotalol, 8 hours for a sustained-release product, 12 hours for sotalol.',
                      level: 'B',
                      source: 'AACT/AAPCC/ACMT 2005'
                    },
                    {
                      statement: 'Offer ambulance transportation for patients referred to emergency departments because of the potential for life-threatening complications of β-blocker overdose. Provide usual supportive care en route to the hospital, including IV fluids for hypotension.',
                      level: 'B',
                      source: 'AACT/AAPCC/ACMT 2005'
                    }
                  ]
                },
                {
                  title: 'Gastric Decontamination',
                  id: 'gastric-decontamination',
                  content: [
                    {
                      statement: 'Do not induce emesis in patients who have ingested a β-blocker exceeding the referral dose.',
                      level: 'D',
                      source: 'AACT/AAPCC/ACMT 2005'
                    },
                    {
                      statement: 'Consider administering oral activated charcoal, if available and not contraindicated, but not delaying transportation.',
                      level: 'B',
                      source: 'AACT/AAPCC/ACMT 2005'
                    }
                  ]
                },
                {
                  title: 'High-dose Insulin',
                  id: 'high-dose-insulin',
                  content: [
                    {
                      statement: 'Administer high-dose insulin for the management of hypotension in patients with β-blocker toxicity refractory to or in conjunction with vasopressor therapy.',
                      level: 'B',
                      source: 'AHA 2023'
                    },
                    {
                      statement: 'Consider administering high-dose insulin to increase HR and improve symptoms in patients with bradycardia associated with symptoms or hemodynamic compromise because of β-blocker overdose.',
                      level: 'C',
                      source: 'ACC/AHA/HRS 2019'
                    }
                  ]
                },
                {
                  title: 'Glucagon',
                  id: 'glucagon',
                  content: [
                    {
                      statement: 'Consider administering a bolus of glucagon, followed by continuous infusion, for the management of bradycardia or hypotension in patients with β-blocker toxicity.',
                      level: 'C',
                      source: 'AHA 2023'
                    },
                    {
                      statement: 'Consider administering glucagon to increase HR and improve symptoms in patients with bradycardia associated with symptoms or hemodynamic compromise because of β-blocker overdose.',
                      level: 'C',
                      source: 'ACC/AHA/HRS 2019'
                    }
                  ]
                },
                {
                  title: 'Vasopressors',
                  id: 'vasopressors',
                  content: [
                    {
                      statement: 'Administer vasopressors for the management of hypotension in patients with β-blocker toxicity.',
                      level: 'B',
                      source: 'AHA 2023'
                    }
                  ]
                },
                {
                  title: 'Atropine',
                  id: 'atropine',
                  content: [
                    {
                      statement: 'Consider administering atropine for the management of β-blocker-induced bradycardia.',
                      level: 'C',
                      source: 'AHA 2023'
                    }
                  ]
                },
                {
                  title: 'Lipid Emulsion Therapy',
                  id: 'lipid-emulsion-therapy',
                  content: [
                    {
                      statement: 'Insufficient evidence to support the use of IV lipid emulsion therapy in patients with life-threatening β-blocker toxicity.',
                      level: 'I',
                      source: 'AHA 2023'
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
              statement: 'Monitoring and surveillance protocols for hospitalized patients.',
              level: '',
              source: '',
              subsections: [
                {
                  title: 'Inpatient Monitoring',
                  id: 'inpatient-monitoring',
                  content: [
                    {
                      statement: 'Monitor asymptomatic patients referred to healthcare facilities for the following durations after ingestion: 6 hours for an immediate-release product other than sotalol, 8 hours for a sustained-release product, 12 hours for sotalol.',
                      level: 'B',
                      source: 'AACT/AAPCC/ACMT 2005'
                    },
                    {
                      statement: 'Do not obtain routine 24-hour inpatient monitoring in asymptomatic patients who have unintentionally ingested a sustained-release product.',
                      level: 'D',
                      source: 'AACT/AAPCC/ACMT 2005'
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
              statement: 'Advanced interventions for refractory beta-blocker toxicity.',
              level: '',
              source: '',
              subsections: [
                {
                  title: 'Temporary Cardiac Pacing',
                  id: 'temporary-cardiac-pacing',
                  content: [
                    {
                      statement: 'Consider attempting electrical pacing in patients with β-blocker-induced bradycardia.',
                      level: 'C',
                      source: 'AHA 2023'
                    }
                  ]
                },
                {
                  title: 'Hemodialysis',
                  id: 'hemodialysis',
                  content: [
                    {
                      statement: 'Consider performing hemodialysis in patients with life-threatening atenolol or sotalol toxicity.',
                      level: 'C',
                      source: 'AHA 2023'
                    }
                  ]
                },
                {
                  title: 'ECMO',
                  id: 'ecmo',
                  content: [
                    {
                      statement: 'Consider initiating extracorporeal life support, such as venoarterial ECMO, in patients with life-threatening β-blocker toxicity with cardiogenic shock refractory to pharmacological interventions.',
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
          title: 'Follow-up and Surveillance',
          id: 'follow-up-surveillance',
          content: [
            {
              statement: 'Post-acute care and outcome monitoring.',
              level: '',
              source: '',
              subsections: [
                {
                  title: 'Outcome Assessment',
                  id: 'outcome-assessment',
                  content: [
                    {
                      statement: 'Obtain follow-up calls depending on the specific circumstances to determine outcome at appropriate intervals for up to 12-24 hours based on the judgment of the poison center staff.',
                      level: 'B',
                      source: 'AACT/AAPCC/ACMT 2005'
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
        journal: 'JAMA. 2023 Dec 19.'
      }
    ],
    references: [
      {
        id: 1,
        authors: 'R Preston Mason, Thomas D Giles, James R Sowers',
        title: 'Evolving mechanisms of action of beta blockers: focus on nebivolol',
        journal: 'J Cardiovasc Pharmacol. 2009 Aug;54(2):123-8',
        year: '2009',
        link: 'https://pubmed.ncbi.nlm.nih.gov/19528811/'
      },
      {
        id: 2,
        authors: 'Frauke Gorre, Hans Vandekerckhove',
        title: 'Beta-blockers: focus on mechanism of action. Which beta-blocker, when and why?',
        journal: 'Acta Cardiol. 2010 Oct;65(5):565-70',
        year: '2010',
        link: 'https://pubmed.ncbi.nlm.nih.gov/21125979/'
      },
      {
        id: 3,
        authors: 'Nastaran Eizadi-Mood, Mahtab Adib, Arman Otroshi et al.',
        title: 'A Clinical-Epidemiological Study on Beta-Blocker Poisonings Based on the Type of Drug Overdose',
        journal: 'J Toxicol. 2023 Feb 24:2023:1064955',
        year: '2023',
        link: 'https://pubmed.ncbi.nlm.nih.gov/36875968/'
      },
      {
        id: 4,
        authors: 'Eric J Lavonas, Peter D Akpunonu, Ann M Arens et al.',
        title: '2023 American Heart Association Focused Update on the Management of Patients With Cardiac Arrest or Life-Threatening Toxicity Due to Poisoning: An Update to the American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care',
        journal: 'Circulation. 2023 Oct 17;148(16):e149-e184',
        year: '2023',
        link: 'https://pubmed.ncbi.nlm.nih.gov/37721023/'
      },
      {
        id: 5,
        authors: 'Paul M Wax, Andrew R Erdman, Peter A Chyka et al.',
        title: 'beta-blocker ingestion: an evidence-based consensus guideline for out-of-hospital management',
        journal: 'Clin Toxicol (Phila). 2005;43(3):131-46',
        year: '2005',
        link: 'https://pubmed.ncbi.nlm.nih.gov/15906457/'
      },
      {
        id: 6,
        authors: 'Fred M Kusumoto, Mark H Schoenfeld, Coletta Barrett et al.',
        title: '2018 ACC / AHA / HRS Guideline on the Evaluation and Management of Patients With Bradycardia and Cardiac Conduction Delay: A Report of the American College of Cardiology / American Heart Association Task Force on Clinical Practice Guidelines and the Heart Rhythm Society',
        journal: 'Circulation. 2019 Aug 20;140(8):e382-e482',
        year: '2019',
        link: 'https://pubmed.ncbi.nlm.nih.gov/30586771/'
      },
      {
        id: 7,
        authors: 'Ashish R Panchal, Jason A Bartos, José G Cabañas et al.',
        title: 'Part 3: Adult Basic and Advanced Life Support: 2020 American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care',
        journal: 'Circulation. 2020 Oct 20;142(16_suppl_2):S366-S468',
        year: '2020',
        link: 'https://pubmed.ncbi.nlm.nih.gov/33081529/'
      },
      {
        id: 8,
        authors: 'Irbert L Vega, Matthew K Griswold, Dayne Laskey',
        title: 'Acute Medication Poisoning',
        journal: 'Am Fam Physician. 2024 Feb;109(2):143-153',
        year: '2024',
        link: 'https://pubmed.ncbi.nlm.nih.gov/38393798/'
      }
    ]
  }
};