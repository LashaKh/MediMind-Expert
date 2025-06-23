import { DiseaseData } from '../types';

export const brugadaSyndromeData: DiseaseData = {
  id: 'brugada-syndrome',
  title: 'Brugada Syndrome',
  lastUpdated: 'May 21, 2025',
  category: 'Electrophysiology',
  specialty: 'cardiology',
  content: {
    background: {
      overview: {
        definition: 'BS is a genetic disorder characterized by a specific pattern on ECG and an increased risk of SCD due to ventricular arrhythmia.',
        pathophysiology: 'The pathophysiology of BS involves dysfunction of the cardiac sodium channels. Mutations in the SCN5A gene, which encodes the predominant cardiac sodium channel alpha subunit NaV1.5, have been identified in some patients with BS.',
        epidemiology: 'The incidence of BS in Japan is estimated at 14.2 per 100,000 person-years. Risk factors for BS include a family history of the syndrome and the presence of specific genetic mutations. The SCN5A gene is the most frequently mutated gene in BS.',
        diseaseCourse: 'The clinical course of BS can vary, but common symptoms include recurrent syncope, VF, and SCD. Some patients may remain asymptomatic, while others may experience symptoms such as unheralded syncope and nocturnal agonal respiration.',
        prognosis: 'The prognosis of BS is variable and depends on several factors. Patients who have experienced aborted SCD or syncope have a higher risk of future cardiac events, with annual event rates of 7.7% and 1.9%, respectively.'
      }
    },
    clinicalFindings: {
      patientDemographics: [
        'Risk factors for BS include a family history of the syndrome and the presence of specific genetic mutations',
        'The SCN5A gene is the most frequently mutated gene in BS'
      ],
      pastMedicalHistory: [
        'Family history of BS',
        'Family history of sudden death (< 45 years old) with a negative autopsy and circumstance suspicious for BS',
        'Genetic mutations in SCN5A gene',
        'Previous cardiac arrest',
        'History of syncope'
      ],
      symptoms: [
        'Chest discomfort',
        'Dyspnea',
        'Palpitations',
        'Seizure',
        'Syncope'
      ],
      likelihoodRatios: [
        {
          finding: 'Spontaneous type 1 Brugada ECG pattern',
          lrPlus: 'High',
          value: 'Diagnostic for Brugada syndrome in absence of other heart disease'
        },
        {
          finding: 'Type 1 Brugada ECG induced by sodium channel blocker challenge',
          lrPlus: 'High', 
          value: 'Diagnostic when associated with VF/VT survival'
        },
        {
          finding: 'ST-segment elevation in right precordial leads',
          lrPlus: 'High',
          value: 'Classic ECG finding in Brugada syndrome'
        },
        {
          finding: 'Cardiac arrest due to VF',
          lrPlus: 'High',
          value: 'Strong indicator for Brugada syndrome diagnosis'
        }
      ]
    },
    guidelines: {
      keySources: 'The following summarized guidelines for the evaluation and management of Brugada syndrome are prepared by our editorial team based on guidelines from the European Society of Cardiology (ESC 2022,2018), the American Heart Association (AHA/HRS/ACC 2018), the Asia Pacific Heart Rhythm Society (APHRS/EHRA/HRS 2013), and the European Heart Rhythm Association (EHRA/HRS 2011).',
      sections: [
        {
          title: 'Screening and Diagnosis',
          id: 'screening-diagnosis',
          content: [
            {
              statement: 'Diagnose BS in patients with spontaneous type 1 Brugada ECG pattern and no other heart disease.',
              level: 'B',
              source: 'ESC 2022 guidelines',
              subsections: [
                {
                  title: 'ESC 2022 diagnostic criteria',
                  id: 'esc-2022-diagnosis',
                  content: [
                    {
                      statement: 'Diagnose BS in patients with spontaneous type 1 Brugada ECG pattern and no other heart disease.',
                      level: 'B',
                      source: 'ESC 2022'
                    },
                    {
                      statement: 'Diagnose BS in patients survived a cardiac arrest due to VF or polymorphic VT, exhibiting type 1 Brugada ECG induced by sodium channel blocker challenge or during fever, and with no other heart disease.',
                      level: 'B',
                      source: 'ESC 2022'
                    },
                    {
                      statement: 'Suspect BS in patients with induced type 1 Brugada pattern having at least one of the following and with no other heart disease: arrhythmic syncope or nocturnal agonal respiration, family history of BS, family history of sudden death (< 45 years old) with a negative autopsy and circumstance suspicious for BS.',
                      level: 'B',
                      source: 'ESC 2022'
                    },
                    {
                      statement: 'Consider suspecting BS in patients exhibiting induced type 1 Brugada ECG with no other heart disease.',
                      level: 'C',
                      source: 'ESC 2022'
                    }
                  ]
                },
                {
                  title: 'APHRS/EHRA/HRS 2013 diagnostic criteria',
                  id: 'aphrs-2013-diagnosis',
                  content: [
                    {
                      statement: 'Diagnose BS in patients with ST-segment elevation with type 1 morphology ≥ 2 mm in ≥ 1 lead among the right precordial leads V1, V2, positioned in the 2nd, 3rd, or 4th intercostal space occurring either spontaneously or after provocative drug test with IV administration of class I antiarrhythmic drugs.',
                      level: 'B',
                      source: 'APHRS/EHRA/HRS 2013'
                    },
                    {
                      statement: 'Diagnose BS in patients with type 2 or type 3 ST-segment elevation in ≥ 1 lead among the right precordial leads V1, V2 positioned in the 2nd, 3rd, or 4th intercostal space when a provocative drug test with IV administration of class I antiarrhythmic drugs induces a type I ECG morphology.',
                      level: 'B',
                      source: 'APHRS/EHRA/HRS 2013'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: 'Drug Challenge Testing',
          id: 'drug-challenge-testing',
          content: [
            {
              statement: 'Do not obtain sodium channel blocker testing in patients with a prior type 1 Brugada pattern.',
              level: 'D',
              source: 'ESC 2022 guidelines',
              subsections: [
                {
                  title: 'ESC 2022 recommendations',
                  id: 'esc-drug-challenge',
                  content: [
                    {
                      statement: 'Do not obtain sodium channel blocker testing in patients with a prior type 1 Brugada pattern.',
                      level: 'D',
                      source: 'ESC 2022'
                    }
                  ]
                },
                {
                  title: 'ACC/AHA/HRS 2018 recommendations',
                  id: 'acc-drug-challenge',
                  content: [
                    {
                      statement: 'Consider obtaining pharmacological challenge testing with a sodium channel blocker in patients with suspected BS in the absence of spontaneous type 1 Brugada ECG pattern.',
                      level: 'C',
                      source: 'ACC/AHA/HRS 2018'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: 'Genetic Testing',
          id: 'genetic-testing',
          content: [
            {
              statement: 'Obtain genetic testing for SCN5A gene mutation in probands with BS.',
              level: 'B',
              source: 'ESC 2022 guidelines',
              subsections: [
                {
                  title: 'ESC 2022 recommendations',
                  id: 'esc-genetic-testing',
                  content: [
                    {
                      statement: 'Obtain genetic testing for SCN5A gene mutation in probands with BS.',
                      level: 'B',
                      source: 'ESC 2022'
                    }
                  ]
                },
                {
                  title: 'ACC/AHA/HRS 2018 recommendations',
                  id: 'acc-genetic-testing',
                  content: [
                    {
                      statement: 'Consider providing genetic counseling and obtaining genetic testing to facilitate cascade screening of relatives in patients with suspected or established BS.',
                      level: 'C',
                      source: 'ACC/AHA/HRS 2018'
                    },
                    {
                      statement: 'Provide genetic counseling and obtaining mutation-specific genetic testing in first-degree relatives of patients with a causative mutation for BS.',
                      level: 'B',
                      source: 'ACC/AHA/HRS 2018'
                    }
                  ]
                },
                {
                  title: 'EHRA/HRS 2011 recommendations',
                  id: 'ehra-genetic-testing',
                  content: [
                    {
                      statement: 'Obtain mutation-specific genetic testing in family members and appropriate relatives following the identification of BS-causative mutation in an index case.',
                      level: 'A',
                      source: 'EHRA/HRS 2011'
                    },
                    {
                      statement: 'Consider obtaining comprehensive or type 1 BS-targeted (SCN5A) genetic testing in patients with suspected BS based on examination of the patient\'s clinical history, family history, and expressed ECG (resting 12-lead ECGs and/or provocative drug challenge testing) phenotype.',
                      level: 'C',
                      source: 'EHRA/HRS 2011'
                    },
                    {
                      statement: 'Do not obtain genetic testing in the setting of an isolated type 2 or type 3 Brugada ECG pattern.',
                      level: 'D',
                      source: 'EHRA/HRS 2011'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: 'Diagnostic Procedures',
          id: 'diagnostic-procedures',
          content: [
            {
              statement: 'Consider implanting a loop recorder in patients with BS with unexplained syncope.',
              level: 'C',
              source: 'ESC 2022 guidelines',
              subsections: [
                {
                  title: 'Implantable loop recorder',
                  id: 'loop-recorder',
                  content: [
                    {
                      statement: 'Consider implanting a loop recorder in patients with BS with unexplained syncope.',
                      level: 'C',
                      source: 'ESC 2022'
                    }
                  ]
                },
                {
                  title: 'Electrophysiology study - ESC guidelines',
                  id: 'eps-esc',
                  content: [
                    {
                      statement: 'Consider performing programmed electrical stimulation in asymptomatic patients with a spontaneous type I BS ECG pattern.',
                      level: 'C',
                      source: 'ESC 2022'
                    },
                    {
                      statement: 'Consider obtaining an invasive electrophysiology study in patients with Brugada ECG pattern and syncope of suspected arrhythmic etiology.',
                      level: 'C',
                      source: 'ESC 2018'
                    }
                  ]
                },
                {
                  title: 'Electrophysiology study - ACC/AHA/HRS guidelines',
                  id: 'eps-acc',
                  content: [
                    {
                      statement: 'Consider obtaining an electrophysiological study with programmed ventricular stimulation using single and double extra stimuli for further risk stratification in patients with asymptomatic BS and spontaneous type 1 Brugada ECG pattern.',
                      level: 'C',
                      source: 'ACC/AHA/HRS 2018'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: 'Avoidance of Aggravating Factors',
          id: 'aggravating-factors',
          content: [
            {
              statement: 'Avoid using drugs likely to induce ST-segment elevation in right precordial leads in patients with BS.',
              level: 'D',
              source: 'ESC 2022 guidelines',
              subsections: [
                {
                  title: 'ESC 2022 recommendations',
                  id: 'esc-aggravating-factors',
                  content: [
                    {
                      statement: 'Avoid using drugs likely to induce ST-segment elevation in right precordial leads in patients with BS.',
                      level: 'D',
                      source: 'ESC 2022'
                    },
                    {
                      statement: 'Advise avoiding cocaine, cannabis, and excessive alcohol intake.',
                      level: 'B',
                      source: 'ESC 2022'
                    },
                    {
                      statement: 'Treat fever with antipyretic drugs.',
                      level: 'B',
                      source: 'ESC 2022'
                    }
                  ]
                },
                {
                  title: 'APHRS/EHRA/HRS 2013 recommendations',
                  id: 'aphrs-aggravating-factors',
                  content: [
                    {
                      statement: 'Avoid using drugs likely to induce or aggravate ST-segment elevation in right precordial leads in patients with BS.',
                      level: 'D',
                      source: 'APHRS/EHRA/HRS 2013'
                    },
                    {
                      statement: 'Advise avoiding excessive alcohol intake.',
                      level: 'A',
                      source: 'APHRS/EHRA/HRS 2013'
                    },
                    {
                      statement: 'Administer antipyretic drugs immediately to treat fever.',
                      level: 'A',
                      source: 'APHRS/EHRA/HRS 2013'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: 'Watchful Waiting',
          id: 'watchful-waiting',
          content: [
            {
              statement: 'Offer observation without therapy in asymptomatic patients with only inducible type 1 Brugada ECG pattern.',
              level: 'B',
              source: 'ACC/AHA/HRS 2018 guidelines'
            }
          ]
        },
        {
          title: 'Quinidine Therapy',
          id: 'quinidine-therapy',
          content: [
            {
              statement: 'Consider initiating quinidine in patients with BS qualifying for an ICD but having a contraindication, declining, or having recurrent ICD shocks.',
              level: 'C',
              source: 'ESC 2022 guidelines',
              subsections: [
                {
                  title: 'ESC 2022 recommendations',
                  id: 'esc-quinidine',
                  content: [
                    {
                      statement: 'Consider initiating quinidine in patients with BS qualifying for an ICD but having a contraindication, declining, or having recurrent ICD shocks.',
                      level: 'C',
                      source: 'ESC 2022'
                    }
                  ]
                },
                {
                  title: 'ACC/AHA/HRS 2018 recommendations',
                  id: 'acc-quinidine',
                  content: [
                    {
                      statement: 'Offer intensification of therapy with quinidine or catheter ablation in patients with BS experiencing recurrent ICD shocks for polymorphic VT.',
                      level: 'B',
                      source: 'ACC/AHA/HRS 2018'
                    },
                    {
                      statement: 'Initiate quinidine or offer catheter ablation in patients with spontaneous type 1 Brugada ECG pattern and symptomatic ventricular arrhythmia either not eligible for or declining ICD placement.',
                      level: 'B',
                      source: 'ACC/AHA/HRS 2018'
                    }
                  ]
                },
                {
                  title: 'APHRS/EHRA/HRS 2013 recommendations',
                  id: 'aphrs-quinidine',
                  content: [
                    {
                      statement: 'Consider initiating quinidine in patients with BS and a history of arrhythmic storms defined as > 2 episodes of VT/VF in 24 hours.',
                      level: 'C',
                      source: 'APHRS/EHRA/HRS 2013'
                    },
                    {
                      statement: 'Consider initiating quinidine in patients with BS qualifying for an ICD but having a contraindication to or refusing ICD and in patients having a history of documented supraventricular arrhythmias requiring treatment.',
                      level: 'C',
                      source: 'APHRS/EHRA/HRS 2013'
                    },
                    {
                      statement: 'Consider initiating quinidine in asymptomatic patients with BS with spontaneous type I ECG pattern.',
                      level: 'C',
                      source: 'APHRS/EHRA/HRS 2013'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: 'Isoproterenol Infusion',
          id: 'isoproterenol-infusion',
          content: [
            {
              statement: 'Consider administering isoproterenol infusion in patients with BS in electrical storm.',
              level: 'C',
              source: 'ESC 2022 guidelines',
              subsections: [
                {
                  title: 'ESC 2022 recommendations',
                  id: 'esc-isoproterenol',
                  content: [
                    {
                      statement: 'Consider administering isoproterenol infusion in patients with BS in electrical storm.',
                      level: 'C',
                      source: 'ESC 2022'
                    }
                  ]
                },
                {
                  title: 'APHRS/EHRA/HRS 2013 recommendations',
                  id: 'aphrs-isoproterenol',
                  content: [
                    {
                      statement: 'Consider administering isoproterenol infusion for the management of arrhythmic storms in patients with BS.',
                      level: 'C',
                      source: 'APHRS/EHRA/HRS 2013'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: 'ICD Placement',
          id: 'icd-placement',
          content: [
            {
              statement: 'Perform ICD placement in patients with BS with a history of aborted cardiac arrest or documented spontaneous sustained VT.',
              level: 'B',
              source: 'ESC 2022 guidelines',
              subsections: [
                {
                  title: 'ESC 2022 recommendations',
                  id: 'esc-icd',
                  content: [
                    {
                      statement: 'Perform ICD placement in patients with BS with a history of any of the following: aborted cardiac arrest, documented spontaneous sustained VT.',
                      level: 'B',
                      source: 'ESC 2022'
                    },
                    {
                      statement: 'Consider performing ICD placement in patients with type 1 Brugada pattern and an arrhythmic syncope.',
                      level: 'C',
                      source: 'ESC 2022'
                    },
                    {
                      statement: 'Consider performing ICD placement in selected asymptomatic patients with BS and inducible VF during programmed electrical stimulation using up to 2 extra stimuli.',
                      level: 'C',
                      source: 'ESC 2022'
                    }
                  ]
                },
                {
                  title: 'ACC/AHA/HRS 2018 recommendations',
                  id: 'acc-icd',
                  content: [
                    {
                      statement: 'Perform ICD in patients with a cardiac channelopathy and sudden cardiac arrest, if the expected meaningful survival is > 1 year.',
                      level: 'B',
                      source: 'ACC/AHA/HRS 2018'
                    },
                    {
                      statement: 'Perform ICD in patients with BS with spontaneous type 1 Brugada ECG pattern survived cardiac arrest, sustained ventricular arrhythmia, or with a recent history of syncope presumed due to ventricular arrhythmia, if the expected meaningful survival is > 1 year.',
                      level: 'B',
                      source: 'ACC/AHA/HRS 2018'
                    }
                  ]
                },
                {
                  title: 'ESC 2018 recommendations',
                  id: 'esc-2018-icd',
                  content: [
                    {
                      statement: 'Consider performing ICD placement in patients with Brugada ECG pattern and syncope of suspected arrhythmic etiology.',
                      level: 'C',
                      source: 'ESC 2018'
                    },
                    {
                      statement: 'Do not perform ICD placement in patients with Brugada ECG pattern and reflex-mediated syncope in the absence of other risk factors.',
                      level: 'D',
                      source: 'ESC 2018'
                    }
                  ]
                },
                {
                  title: 'APHRS/EHRA/HRS 2013 recommendations',
                  id: 'aphrs-icd',
                  content: [
                    {
                      statement: 'Perform ICD placement in patients with BS with any of the following: cardiac arrest, documented spontaneous sustained VT with or without syncope.',
                      level: 'A',
                      source: 'APHRS/EHRA/HRS 2013'
                    },
                    {
                      statement: 'Consider performing ICD placement in patients with spontaneous diagnostic type I ECG with a history of syncope deemed to be likely caused by ventricular arrhythmias.',
                      level: 'C',
                      source: 'APHRS/EHRA/HRS 2013'
                    },
                    {
                      statement: 'Consider performing ICD placement in patients with BS developing VF during programmed electrical stimulation (inducible patients).',
                      level: 'C',
                      source: 'APHRS/EHRA/HRS 2013'
                    },
                    {
                      statement: 'Do not perform ICD placement in asymptomatic patients with BS with drug-induced type I ECG and on the basis of a family history of SCD alone.',
                      level: 'D',
                      source: 'APHRS/EHRA/HRS 2013'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: 'Catheter Ablation',
          id: 'catheter-ablation',
          content: [
            {
              statement: 'Consider performing catheter ablation of triggering premature ventricular contractions and/or RV outflow tract epicardial substrate in patients with BS with recurrent appropriate ICD shocks refractory to drug therapy.',
              level: 'C',
              source: 'ESC 2022 guidelines',
              subsections: [
                {
                  title: 'ESC 2022 recommendations',
                  id: 'esc-ablation',
                  content: [
                    {
                      statement: 'Consider performing catheter ablation of triggering premature ventricular contractions and/or RV outflow tract epicardial substrate in patients with BS with recurrent appropriate ICD shocks refractory to drug therapy.',
                      level: 'C',
                      source: 'ESC 2022'
                    },
                    {
                      statement: 'Do not perform catheter ablation in asymptomatic patients with BS.',
                      level: 'D',
                      source: 'ESC 2022'
                    }
                  ]
                },
                {
                  title: 'ACC/AHA/HRS 2018 recommendations',
                  id: 'acc-ablation',
                  content: [
                    {
                      statement: 'Perform catheter ablation or offer intensification of therapy with quinidine in patients with BS experiencing recurrent ICD shocks for polymorphic VT.',
                      level: 'B',
                      source: 'ACC/AHA/HRS 2018'
                    },
                    {
                      statement: 'Perform catheter ablation or initiate quinidine in patients with spontaneous type 1 Brugada ECG pattern and symptomatic ventricular arrhythmia either not eligible for or declining ICD placement.',
                      level: 'B',
                      source: 'ACC/AHA/HRS 2018'
                    }
                  ]
                },
                {
                  title: 'APHRS/EHRA/HRS 2013 recommendations',
                  id: 'aphrs-ablation',
                  content: [
                    {
                      statement: 'Consider performing catheter ablation in patients with BS and a history of arrhythmic storms or repeated appropriate ICD shocks.',
                      level: 'C',
                      source: 'APHRS/EHRA/HRS 2013'
                    }
                  ]
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
        authors: 'Thein Swe, Bikash Bhattarai, Alix Dufresne',
        title: 'Type 1 Brugada pattern ECG due to supra-therapeutic phenytoin level',
        journal: 'BMJ Case Rep. 2016 Jun 28:2016:bcr2016214899',
        year: '2016',
        link: 'https://pubmed.ncbi.nlm.nih.gov/27353175/'
      },
      {
        id: 2,
        authors: 'Hiroshi Watanabe, Tamara T Koopmann, Solena Le Scouarnec et al.',
        title: 'Sodium channel β1 subunit mutations associated with Brugada syndrome and cardiac conduction disease in humans',
        journal: 'J Clin Invest. 2008 Jun;118(6):2260-8',
        year: '2008',
        link: 'https://pubmed.ncbi.nlm.nih.gov/18464934/'
      },
      {
        id: 3,
        authors: 'K Matsuo, M Akahoshi, E Nakashima et al.',
        title: 'The prevalence, incidence and prognostic value of the Brugada-type electrocardiogram: a population-based study of four decades',
        journal: 'J Am Coll Cardiol. 2001 Sep;38(3):765-70',
        year: '2001',
        link: 'https://pubmed.ncbi.nlm.nih.gov/11527630/'
      },
      {
        id: 4,
        authors: 'Esperanza García-Molina, María Sabater-Molina, Carmen Muñoz et al.',
        title: 'An R1632C variant in the SCN5A gene causing Brugada syndrome',
        journal: 'Mol Med Rep. 2016 Jun;13(6):4677-80',
        year: '2016',
        link: 'https://pubmed.ncbi.nlm.nih.gov/27082542/'
      },
      {
        id: 5,
        authors: 'Hariharan Raju, Michael Papadakis, Malini Govindan et al.',
        title: 'Low prevalence of risk markers in cases of sudden death due to Brugada syndrome relevance to risk stratification in Brugada syndrome',
        journal: 'J Am Coll Cardiol. 2011 Jun 7;57(23):2340-5',
        year: '2011',
        link: 'https://pubmed.ncbi.nlm.nih.gov/21636035/'
      },
      {
        id: 6,
        authors: 'Katja Zeppenfeld, Jacob Tfelt-Hansen, Marta de Riva et al.',
        title: '2022 ESC Guidelines for the management of patients with ventricular arrhythmias and the prevention of sudden cardiac death',
        journal: 'Eur Heart J. 2022 Oct 21;43(40):3997-4126',
        year: '2022',
        link: 'https://pubmed.ncbi.nlm.nih.gov/36017572/'
      },
      {
        id: 7,
        authors: 'V Probst, C Veltmann, L Eckardt et al.',
        title: 'Long-term prognosis of patients diagnosed with Brugada syndrome: Results from the FINGER Brugada Syndrome Registry',
        journal: 'Circulation. 2010 Feb 9;121(5):635-43',
        year: '2010',
        link: 'https://pubmed.ncbi.nlm.nih.gov/20100972/'
      },
      {
        id: 8,
        authors: 'Michele Brignole, Angel Moya, Frederik J de Lange et al.',
        title: '2018 ESC Guidelines for the diagnosis and management of syncope',
        journal: 'Eur Heart J. 2018 Jun 1;39(21):1883-1948',
        year: '2018',
        link: 'https://pubmed.ncbi.nlm.nih.gov/29562304/'
      },
      {
        id: 9,
        authors: 'Silvia G Priori, Arthur A Wilde, Minoru Horie et al.',
        title: 'HRS / EHRA / APHRS expert consensus statement on the diagnosis and management of patients with inherited primary arrhythmia syndromes: document endorsed by HRS, EHRA, and APHRS in May 2013 and by ACCF, AHA, PACES, and AEPC in June 2013',
        journal: 'Heart Rhythm. 2013 Dec;10(12):1932-63',
        year: '2013',
        link: 'https://pubmed.ncbi.nlm.nih.gov/24011539/'
      },
      {
        id: 10,
        authors: 'Sana M Al-Khatib, William G Stevenson, Michael J Ackerman et al.',
        title: '2017 AHA / ACC / HRS Guideline for Management of Patients With Ventricular Arrhythmias and the Prevention of Sudden Cardiac Death: A Report of the American College of Cardiology / American Heart Association Task Force on Clinical Practice Guidelines and the Heart Rhythm Society',
        journal: 'Circulation. 2018 Sep 25;138(13):e272-e391',
        year: '2018',
        link: 'https://pubmed.ncbi.nlm.nih.gov/29084731/'
      },
      {
        id: 11,
        authors: 'Michael J Ackerman, Silvia G Priori, Stephan Willems et al.',
        title: 'HRS / EHRA expert consensus statement on the state of genetic testing for the channelopathies and cardiomyopathies this document was developed as a partnership between the Heart Rhythm Society (HRS) and the European Heart Rhythm Association (EHRA)',
        journal: 'Heart Rhythm. 2011 Aug;8(8):1308-39',
        year: '2011',
        link: 'https://pubmed.ncbi.nlm.nih.gov/21787999/'
      },
      {
        id: 12,
        authors: 'Juan Sieira, Pedro Brugada',
        title: 'The definition of the Brugada syndrome',
        journal: 'Eur Heart J. 2017 Oct 21;38(40):3029-3034',
        year: '2017',
        link: 'https://pubmed.ncbi.nlm.nih.gov/29020354/'
      },
      {
        id: 13,
        authors: 'Vincent Probst, Isabelle Denjoy, Paola G Meregalli et al.',
        title: 'Clinical aspects and prognosis of Brugada syndrome in children',
        journal: 'Circulation. 2007 Apr 17;115(15):2042-8',
        year: '2007',
        link: 'https://pubmed.ncbi.nlm.nih.gov/17404158/'
      },
      {
        id: 14,
        authors: 'Wenqing Wu, Li Tian, Jinshan Ke et al.',
        title: 'Risk factors for cardiac events in patients with Brugada syndrome: A PRISMA-compliant meta-analysis and systematic review',
        journal: 'Medicine (Baltimore). 2016 Jul;95(30):e4214',
        year: '2016',
        link: 'https://pubmed.ncbi.nlm.nih.gov/27472692/'
      }
    ]
  }
};
