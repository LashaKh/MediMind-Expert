import { DiseaseData } from '../types';

export const arrhythmogenicRightVentricularCardiomyopathyData: DiseaseData = {
  id: 'arrhythmogenic-right-ventricular-cardiomyopathy',
  title: 'Arrhythmogenic Right Ventricular Cardiomyopathy',
  lastUpdated: 'May 21, 2025',
  category: 'Cardiomyopathy',
  specialty: 'cardiology',
  content: {
    background: {
      overview: {
        definition: 'ARVC is a genetically inherited cardiomyopathy characterized by the replacement of normal heart muscle with fibrofatty tissue, predominantly in the right ventricle.',
        pathophysiology: 'ARVC is caused by the fibrofatty replacement of the myocardium predisposing the heart to electrical instability, leading to ventricular arrhythmias.',
        epidemiology: 'The prevalence of ARVC worldwide is estimated at 20 per 100,000 population.',
        diseaseCourse: 'Clinically, ARVC can present with a variety of symptoms. The most common presenting symptoms include palpitations, syncope, and SCD. Some patients may also develop signs of HF.',
        prognosis: 'The prognosis of ARVC is variable. It is associated with an increased risk of SCD, particularly in young individuals, and may be the first manifestation of the disease.'
      }
    },
    clinicalFindings: {
      symptoms: [
        'Chest pain',
        'Dyspnea',
        'Lightheadedness',
        'Palpitations',
        'Syncope'
      ],
      vitalSigns: [
        'Tachycardia'
      ],
      patientDemographics: [
        'Fourth heart sound',
        'Split S2 heart sound',
        'Third heart sound'
      ]
    },
    studies: [
      {
        title: 'PAUSE-SCD',
        year: '2022',
        description: 'In patients with cardiomyopathy and monomorphic VT with an indication for ICD implantation, ablation therapy was superior to conventional therapy with respect to the composite outcome of VT recurrence, cardiovascular hospitalization or death.',
        authors: 'Roderick Tung et al.',
        journal: 'Circulation. 2022 Jun 21.'
      }
    ],
    guidelines: {
      keySources: 'The following summarized guidelines for the evaluation and management of arrhythmogenic right ventricular cardiomyopathy are prepared by our editorial team based on guidelines from the European Society of Cardiology (ESC 2023,2022,2018), the Heart Failure Society of America (HFSA/AHA/ACC 2022), the Canadian Cardiovascular Society (CCS/CHRS 2019), the American Heart Association (AHA/HRS/ACC 2018,2017), and the Canadian Cardiovascular Society (CCS 2017).',
      sections: [
        {
          title: 'Screening and Diagnosis',
          id: 'screening-and-diagnosis',
          content: [
            {
              statement: 'Obtain systematic evaluation in all patients with suspected or established cardiomyopathy using a multiparametric approach, including clinical evaluation, pedigree analysis, ECG, Holter monitoring, laboratory tests, and multimodality imaging.',
              level: 'B',
              source: 'ESC 2023',
              subsections: [
                {
                  title: 'Screening of Family Relatives, Clinical and Genetic Testing',
                  id: 'family-screening-genetic',
                  content: [
                    {
                      statement: 'Obtain cascade genetic testing, with pre- and post-test counseling, in adult at-risk relatives of a patient with cardiomyopathy with a confident genetic diagnosis (a pathogenic/likely pathogenic variant) in the family (starting with first-degree relatives, if available, and cascading out sequentially).',
                      level: 'B',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Consider obtaining cascade genetic testing with pre- and post-test counseling in pediatric at-risk relatives of a patient with cardiomyopathy with a confident genetic diagnosis (a pathogenic/likely pathogenic variant) in the family (starting with first-degree relatives, if available, and cascading out sequentially), considering the underlying cardiomyopathy, expected age of onset, presentation in the family, and clinical/legal consequences.',
                      level: 'C',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Consider obtaining testing for the presence of a familial variant of unknown significance, typically in parents and/or affected relatives, to determine if the variant segregates with the cardiomyopathy phenotype and if this might allow the variant to be interpreted with confidence.',
                      level: 'C',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Do not obtain diagnostic genetic testing in phenotype-negative relatives of a patient with cardiomyopathy in the absence of a confident genetic diagnosis (a pathogenic/likely pathogenic variant) in the family.',
                      level: 'D',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Consider obtaining a clinical evaluation of close relatives (second-degree relatives of the index patient) during cascade screening where a first-degree relative has died.',
                      level: 'C',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Obtain an ECG and echocardiogram in a first-degree relative of patients with ARVC.',
                      level: 'B',
                      source: 'ESC 2022'
                    },
                    {
                      statement: 'Consider obtaining clinical screening for ARVC along with providing genetic counseling and obtaining genetic testing in selected first-degree relatives of patients with ARVC if the proband has a disease-causing mutation.',
                      level: 'B',
                      source: 'ACC/AHA/HRS 2018'
                    },
                    {
                      statement: 'Consider providing genetic counseling in families with ARVC for the purpose of screening and/or genetic testing.',
                      level: 'B',
                      source: 'CCS 2017'
                    }
                  ]
                },
                {
                  title: 'Screening of Family Relatives, Cardiac MRI',
                  id: 'family-screening-mri',
                  content: [
                    {
                      statement: 'Consider obtaining contrast-enhanced cardiac MRI in genotype-positive/phenotype-negative family members to aid in diagnosis and detection of early disease in families with cardiomyopathy with an identified disease-causing variant.',
                      level: 'C',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Consider obtaining contrast-enhanced cardiac MRI in phenotype-negative family members to aid diagnosis and detect early disease in cases of familial cardiomyopathy without a genetic diagnosis.',
                      level: 'C',
                      source: 'ESC 2023'
                    }
                  ]
                },
                {
                  title: 'Screening of Family Relatives, Follow-up',
                  id: 'family-screening-followup',
                  content: [
                    {
                      statement: 'Obtain clinical evaluation using a multiparametric approach, including ECG, cardiac imaging, and long-term follow-up, in first-degree relatives with the same disease-causing variant as the proband after cascade genetic testing.',
                      level: 'B',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Discharge first-degree relatives without a phenotype and not having the same disease-causing variant as the proband after cascade genetic testing from further follow-up, but advise seeking re-assessment in case symptoms develop or when new clinically relevant data emerge in the family.',
                      level: 'B',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Obtain initial clinical evaluation using a multiparametric approach, including ECG and cardiac imaging, in first-degree relatives when no pathogenic/likely pathogenic variant is identified in the proband or genetic testing is not obtained.',
                      level: 'B',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Consider obtaining regular, long-term clinical evaluation using a multiparametric approach, including ECG and cardiac imaging, in first-degree relatives when no pathogenic/likely pathogenic variant is identified in the proband or genetic testing is not obtained.',
                      level: 'C',
                      source: 'ESC 2023'
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
              statement: 'Elicit family history and create a three- to four-generation family tree in all patients with suspected cardiomyopathy to aid in diagnosis, provide clues to underlying etiology, determine inheritance patterns, and identify at-risk relatives.',
              level: 'B',
              source: 'ESC 2023',
              subsections: [
                {
                  title: 'History and Physical Examination',
                  id: 'history-physical',
                  content: [
                    {
                      statement: 'Elicit family history and create a three- to four-generation family tree in all patients with suspected cardiomyopathy to aid in diagnosis, provide clues to underlying etiology, determine inheritance patterns, and identify at-risk relatives.',
                      level: 'B',
                      source: 'ESC 2023'
                    }
                  ]
                },
                {
                  title: 'ECG',
                  id: 'ecg',
                  content: [
                    {
                      statement: 'Consider obtaining signal-averaged ECG for diagnosis and risk stratification in patients with suspected ARVC.',
                      level: 'C',
                      source: 'ACC/AHA/HRS 2018'
                    }
                  ]
                },
                {
                  title: 'TTE',
                  id: 'tte',
                  content: [
                    {
                      statement: 'Obtain a comprehensive evaluation of cardiac dimensions and LV and RV systolic (global and regional) and LV diastolic function in all patients with cardiomyopathy at initial evaluation and during follow-up to monitor disease progression and aid risk stratification and management.',
                      level: 'B',
                      source: 'ESC 2023'
                    }
                  ]
                },
                {
                  title: 'Cardiac MRI',
                  id: 'cardiac-mri',
                  content: [
                    {
                      statement: 'Obtain contrast-enhanced cardiac MRI in the initial evaluation of patients with cardiomyopathy.',
                      level: 'B',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Obtain cardiac MRI in patients with suspected ARVC.',
                      level: 'B',
                      source: 'ESC 2022'
                    },
                    {
                      statement: 'Consider obtaining cardiac MRI for establishing a diagnosis and for risk stratification in patients with suspected ARVC and ventricular arrhythmia or ECG abnormalities.',
                      level: 'B',
                      source: 'ACC/AHA/HRS 2018'
                    }
                  ]
                },
                {
                  title: 'Cardiac CT',
                  id: 'cardiac-ct',
                  content: [
                    {
                      statement: 'Consider obtaining contrast-enhanced cardiac CT in patients with suspected cardiomyopathy having inadequate echocardiographic imaging and contraindications to cardiac MRI.',
                      level: 'C',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Consider obtaining CT-based imaging to exclude congenital or acquired coronary artery disease as a cause of the observed myocardial abnormality in patients with suspected cardiomyopathy.',
                      level: 'C',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Consider obtaining 18F-FDG-PET in the evaluation of patients with cardiomyopathy if cardiac sarcoidosis is suspected.',
                      level: 'C',
                      source: 'ESC 2023'
                    }
                  ]
                },
                {
                  title: 'Nuclear Imaging',
                  id: 'nuclear-imaging',
                  content: [
                    {
                      statement: 'Obtain 99mTc-3, 3-diphosphono-1, 2-propanodicarboxylic acid, -PYP, -HMDP bone-tracer scintigraphy in patients with suspected transthyretin amyloidosis-related cardiac amyloidosis.',
                      level: 'B',
                      source: 'ESC 2023'
                    }
                  ]
                },
                {
                  title: 'Laboratory Tests',
                  id: 'laboratory-tests',
                  content: [
                    {
                      statement: 'Obtain routine first-line laboratory tests in all patients with suspected or confirmed cardiomyopathy to evaluate etiology, assess disease severity, and aid in detecting extracardiac manifestations and assessing secondary organ dysfunction.',
                      level: 'B',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Consider obtaining additional tests in patients with cardiomyopathy and extracardiac features to aid in detecting metabolic and syndromic causes following specialist evaluation.',
                      level: 'C',
                      source: 'ESC 2023'
                    }
                  ]
                },
                {
                  title: 'Genetic Testing',
                  id: 'genetic-testing',
                  content: [
                    {
                      statement: 'Obtain genetic testing in patients fulfilling diagnostic criteria for cardiomyopathy in cases where it enables diagnosis, prognostication, therapeutic stratification, or reproductive management of the patient or where it enables cascade genetic evaluation of their relatives otherwise eligible for enrollment into long-term surveillance.',
                      level: 'B',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Consider obtaining genetic testing in patients fulfilling diagnostic criteria for cardiomyopathy when it will have a net benefit to the patient, considering the psychological impact and preference, even if it does not enable diagnosis, prognostication, therapeutic stratification, or cascade genetic screening of their relatives.',
                      level: 'C',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Consider obtaining genetic testing in patients with a borderline phenotype not fulfilling diagnostic criteria for cardiomyopathy only after detailed assessment by specialist teams.',
                      level: 'C',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Obtain genetic testing for a deceased individual identified to have cardiomyopathy at post-mortem if a genetic diagnosis would facilitate the management of surviving relatives.',
                      level: 'B',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Obtain genetic testing for cardiomyopathy with access to a multidisciplinary team with expertise in genetic testing methodology, sequence variant interpretation, and clinical application of genetic testing, typically in a specialized cardiomyopathy service or in a network model with access to equivalent expertise.',
                      level: 'B',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Obtain genetic testing in patients with suspected or confirmed ARVC.',
                      level: 'B',
                      source: 'ESC 2022'
                    },
                    {
                      statement: 'Consider obtaining genetic testing for diagnosis and gene-specific targeted family screening in patients with clinically diagnosed or suspected ARVC.',
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
          title: 'Diagnostic Procedures',
          id: 'diagnostic-procedures',
          content: [
            {
              statement: 'Consider performing programmed electrical stimulation for risk stratification in patients with ARVC and symptoms highly suspicious for ventricular arrhythmia.',
              level: 'C',
              source: 'ESC 2022',
              subsections: [
                {
                  title: 'Electrophysiological Study',
                  id: 'electrophysiological-study',
                  content: [
                    {
                      statement: 'Consider performing programmed electrical stimulation for risk stratification in patients with ARVC and symptoms highly suspicious for ventricular arrhythmia.',
                      level: 'C',
                      source: 'ESC 2022'
                    },
                    {
                      statement: 'Consider obtaining electrophysiologic testing for risk stratification in asymptomatic patients with clinical evidence of ARVC.',
                      level: 'C',
                      source: 'ACC/AHA/HRS 2018'
                    }
                  ]
                },
                {
                  title: 'Endomyocardial Biopsy',
                  id: 'endomyocardial-biopsy',
                  content: [
                    {
                      statement: 'Consider performing an endomyocardial biopsy in patients with suspected cardiomyopathy to aid in diagnosis and management when the results of other clinical investigations suggest myocardial inflammation, infiltration, or storage that cannot be identified by other means.',
                      level: 'C',
                      source: 'ESC 2023'
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
              statement: 'Ensure that all patients with cardiomyopathy and their relatives have access to multidisciplinary teams with expertise in the diagnosis and management of cardiomyopathies.',
              level: 'B',
              source: 'ESC 2023',
              subsections: [
                {
                  title: 'General Principles',
                  id: 'general-principles',
                  content: [
                    {
                      statement: 'Ensure that all patients with cardiomyopathy and their relatives have access to multidisciplinary teams with expertise in the diagnosis and management of cardiomyopathies.',
                      level: 'B',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Identify and manage risk factors and concomitant diseases as an integral part of the management of patients with cardiomyopathy.',
                      level: 'B',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Refer all patients with ARVC to a center with experience and expertise in the management of this condition.',
                      level: 'B',
                      source: 'CCS 2017'
                    }
                  ]
                },
                {
                  title: 'Antiarrhythmic Drugs',
                  id: 'antiarrhythmic-drugs',
                  content: [
                    {
                      statement: 'Initiate β-blockers in patients with ARVC with ventricular extrasystole, non-sustained VT, or VT.',
                      level: 'B',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Consider initiating amiodarone in case regular β-blocker therapy fails to control arrhythmia-related symptoms.',
                      level: 'C',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Consider initiating flecainide in addition to β-blockers when single-agent treatment fails to control arrhythmia-related symptoms.',
                      level: 'C',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Consider initiating β-blocker therapy in all patients with confirmed ARVC.',
                      level: 'C',
                      source: 'ESC 2022'
                    },
                    {
                      statement: 'Initiate β-blockers in patients with ARVC and non-sustained or sustained ventricular arrhythmia.',
                      level: 'B',
                      source: 'ESC 2022'
                    },
                    {
                      statement: 'Consider initiating antiarrhythmic drugs in patients with ARVC and recurrent, symptomatic VT despite β-blocker therapy.',
                      level: 'C',
                      source: 'ESC 2022'
                    },
                    {
                      statement: 'Initiate β-blockers in patients with ARVC and ventricular arrhythmia.',
                      level: 'B',
                      source: 'ACC/AHA/HRS 2018'
                    },
                    {
                      statement: 'Consider initiating β-blockers in patients with clinical evidence of ARVC but not ventricular arrhythmia.',
                      level: 'C',
                      source: 'ACC/AHA/HRS 2018'
                    }
                  ]
                },
                {
                  title: 'Management of AF, Anticoagulation',
                  id: 'af-anticoagulation',
                  content: [
                    {
                      statement: 'Initiate oral anticoagulation to reduce the risk of stroke and thromboembolic events in patients with ARVC and AF or atrial flutter with a CHA2DS2-VASc score ≥ 2 in males or ≥ 3 in females.',
                      level: 'B',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Consider initiating oral anticoagulation to reduce the risk of stroke and thromboembolic events in patients with ARVC and AF or atrial flutter with a CHA2DS2-VASc score of 1 in males or 2 in females.',
                      level: 'C',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Advise modifying unhealthy lifestyles and offer targeted therapy of intercurrent conditions to reduce AF burden and symptom severity in patients with cardiomyopathy.',
                      level: 'B',
                      source: 'ESC 2023'
                    }
                  ]
                },
                {
                  title: 'Management of AF, Catheter Ablation',
                  id: 'af-catheter-ablation',
                  content: [
                    {
                      statement: 'Perform catheter ablation for rhythm control after one failed or intolerant class I or III antiarrhythmic drug to improve symptoms of recurrences in patients with paroxysmal or persistent AF and cardiomyopathy.',
                      level: 'B',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Perform catheter ablation to reverse LV dysfunction in patients with AF when tachycardia-induced component is highly probable, independent of their symptom status.',
                      level: 'B',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Consider ensuring maintenance of sinus rhythm rather than rate control at an early stage in patients with AF without major risk factors for recurrence, regardless of symptoms.',
                      level: 'C',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Consider performing catheter ablation as first-line rhythm control therapy as an alternative to class I or III antiarrhythmic drugs, considering patient choice, benefit, and risk, to improve symptoms in selected patients with paroxysmal or persistent AF without major risk factors for recurrences.',
                      level: 'C',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Consider performing catheter ablation to prevent AF recurrences and improve QoL, LVEF, and survival and reduce HF hospitalization in selected patients with AF and HF and/or reduced LVEF.',
                      level: 'C',
                      source: 'ESC 2023'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: 'Nonpharmacologic Interventions',
          id: 'nonpharmacologic-interventions',
          content: [
            {
              statement: 'Advise practicing regular low-to-moderate-intensity exercise in all able patients with cardiomyopathy.',
              level: 'B',
              source: 'ESC 2023',
              subsections: [
                {
                  title: 'Physical Activity Restrictions',
                  id: 'physical-activity-restrictions',
                  content: [
                    {
                      statement: 'Advise practicing regular low-to-moderate-intensity exercise in all able patients with cardiomyopathy.',
                      level: 'B',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Obtain an individualized risk assessment for exercise prescription in all patients with cardiomyopathy.',
                      level: 'B',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Consider restricting high-intensity exercise, including competitive sport, in genotype-positive/phenotype-negative patients in families with ARVC.',
                      level: 'C',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Restrict moderate- and/or high-intensity exercise, including competitive sport, in patients with ARVC.',
                      level: 'B',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Discourage participation in high-intensity exercise in patients with confirmed ARVC.',
                      level: 'B',
                      source: 'ESC 2022'
                    },
                    {
                      statement: 'Advise avoiding high-intensity exercise in carriers of ARVC-related pathogenic mutations and no phenotype.',
                      level: 'B',
                      source: 'ESC 2022'
                    },
                    {
                      statement: 'Consider restricting sports participation in patients with ARVC.',
                      level: 'B',
                      source: 'CCS/CHRS 2019'
                    },
                    {
                      statement: 'Advise avoiding intensive exercise in patients with a clinical diagnosis of ARVC.',
                      level: 'B',
                      source: 'ACC/AHA/HRS 2018'
                    },
                    {
                      statement: 'Restrict participation in competitive sports in athletes with syncope and phenotype-positive ARVC before evaluation by a specialist.',
                      level: 'B',
                      source: 'ESC 2018'
                    },
                    {
                      statement: 'Advise avoiding strenuous or high-intensity sports activities in patients with ARVC.',
                      level: 'B',
                      source: 'CCS 2017'
                    }
                  ]
                },
                {
                  title: 'Psychological Support',
                  id: 'psychological-support',
                  content: [
                    {
                      statement: 'Offer psychological support by an appropriately trained health professional in all patients with inherited cardiomyopathy receiving an implantable cardioverter defibrillator.',
                      level: 'B',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Consider offering psychological support by an appropriately trained health professional in all patients and families with inherited cardiomyopathy.',
                      level: 'C',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Offer psychological support by an appropriately trained health professional in all persons who have experienced the premature SCD of a family member with cardiomyopathy.',
                      level: 'B',
                      source: 'ESC 2023'
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
              statement: 'Obtain comprehensive SCD risk stratification in all patients with cardiomyopathy not suffered a previous cardiac arrest/sustained ventricular arrhythmia at initial evaluation and at 1-2 year intervals or whenever a change in clinical status occurs.',
              level: 'B',
              source: 'ESC 2023',
              subsections: [
                {
                  title: 'ICD, Indications',
                  id: 'icd-indications',
                  content: [
                    {
                      statement: 'Obtain comprehensive SCD risk stratification in all patients with cardiomyopathy not suffered a previous cardiac arrest/sustained ventricular arrhythmia at initial evaluation and at 1-2 year intervals or whenever a change in clinical status occurs.',
                      level: 'B',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Consider using validated SCD algorithms/scores as aids to the shared decision-making when offering ICD implantation, where available, in patients with ARVC.',
                      level: 'C',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Take into consideration high-risk features to aid individualized decision-making for ICD implantation in patients with ARVC.',
                      level: 'B',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Consider using the updated 2019 ARVC Risk Calculator to aid individualized decision-making for ICD implantation in patients with ARVC.',
                      level: 'C',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Consider obtaining comprehensive SCD risk stratification to evaluate the need for ICD implantation in patients with cardiomyopathy requiring pacemaker implantation.',
                      level: 'C',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Perform ICD placement in patients with ARVC with a history of survived cardiac arrest due to VT or VF or spontaneous sustained ventricular arrhythmia causing syncope or hemodynamic compromise in the absence of reversible causes.',
                      level: 'B',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Perform ICD placement to reduce the risk of sudden death and all-cause mortality in patients with ARVC with a history of survived cardiac arrest or sustained ventricular arrhythmia causing hemodynamic instability.',
                      level: 'A',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Consider performing ICD placement in patients with cardiomyopathy presenting with hemodynamically tolerated VT in the absence of reversible causes.',
                      level: 'C',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Consider performing ICD placement in patients with ARVC with a history of hemodynamically tolerated VT.',
                      level: 'C',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Perform ICD placement only in patients with an expected good quality survival > 1 year.',
                      level: 'B',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Guide ICD implantation by shared decision-making that is evidence-based, takes into account the patient\'s individual preferences, beliefs, circumstances, and values, and ensures that the patient understands the benefits, harms, and possible consequences of different treatment options.',
                      level: 'B',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Do not perform ICD placement in patients with incessant ventricular arrhythmias until the ventricular arrhythmia is controlled.',
                      level: 'D',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Consider performing ICD placement in patients with confirmed ARVC and an arrhythmic syncope.',
                      level: 'C',
                      source: 'ESC 2022'
                    },
                    {
                      statement: 'Consider performing ICD in patients with definite ARVC and severe RV or LV systolic dysfunction.',
                      level: 'C',
                      source: 'ESC 2022'
                    },
                    {
                      statement: 'Consider performing ICD placement in symptomatic patients with confirmed ARVC, moderate right or LV dysfunction, and either non-sustained VT or inducibility of sustained monomorphic VT at programmed electrical stimulation.',
                      level: 'C',
                      source: 'ESC 2022'
                    },
                    {
                      statement: 'Perform ICD placement in patients with ARVC with hemodynamically non-tolerated VT or VF.',
                      level: 'B',
                      source: 'ESC 2022'
                    },
                    {
                      statement: 'Consider performing ICD placement in patients with ARVC with hemodynamically tolerated sustained monomorphic VT.',
                      level: 'C',
                      source: 'ESC 2022'
                    },
                    {
                      statement: 'Consider performing ICD placement to decrease the risk of sudden death in patients with genetic arrhythmogenic cardiomyopathy with high-risk features of sudden death and ejection fraction ≤ 45%.',
                      level: 'C',
                      source: 'ACC/AHA/HFSA 2022'
                    },
                    {
                      statement: 'Perform ICD placement in patients with ARVC and an additional marker of increased risk of SCD (resuscitated sudden cardiac arrest, sustained VT, significant ventricular dysfunction with RV ejection fraction or LVEF ≤ 35%) if the expected meaningful survival is > 1 year.',
                      level: 'B',
                      source: 'ACC/AHA/HRS 2018'
                    },
                    {
                      statement: 'Consider performing ICD placement in patients with ARVC and syncope presumed due to ventricular arrhythmia if the expected meaningful survival is > 1 year.',
                      level: 'C',
                      source: 'ACC/AHA/HRS 2018'
                    },
                    {
                      statement: 'Consider performing ICD placement in patients with ARVC and a history of unexplained syncope.',
                      level: 'C',
                      source: 'ESC 2018'
                    },
                    {
                      statement: 'Consider placing an implantable loop recorder instead of an ICD in patients with recurrent episodes of unexplained syncope at low risk of SCD, based on a multiparametric analysis taking into account other known risk factors for SCD.',
                      level: 'C',
                      source: 'ESC 2018'
                    },
                    {
                      statement: 'Perform ICD placement in patients with ARVC presenting with syncope and having a documented sustained ventricular arrhythmia.',
                      level: 'B',
                      source: 'ACC/AHA/HRS 2017'
                    },
                    {
                      statement: 'Consider performing ICD placement in patients with ARVC presenting with syncope of suspected arrhythmic etiology.',
                      level: 'C',
                      source: 'ACC/AHA/HRS 2017'
                    }
                  ]
                },
                {
                  title: 'ICD, Technical Considerations',
                  id: 'icd-technical-considerations',
                  content: [
                    {
                      statement: 'Counsel patients before ICD implantation on the risk of inappropriate shocks, implant complications, and the social, occupational, and driving implications of the device.',
                      level: 'B',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Evaluate patients for eligibility for CRT when an ICD is indicated.',
                      level: 'A',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Consider placing subcutaneous defibrillators as an alternative to transvenous defibrillators in patients with an indication for an ICD when pacing therapy for bradycardia, cardiac resynchronization, or anti-tachycardia pacing is not anticipated.',
                      level: 'C',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Consider using wearable cardioverter-defibrillator in adult patients with a secondary prevention ICD indication temporarily ineligible for ICD placement.',
                      level: 'C',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Consider placing a device with the capability of anti-tachycardia pacing programming for sustained monomorphic VT up to high rates in patients with ARVC with an indication for ICD placement.',
                      level: 'C',
                      source: 'ESC 2022'
                    }
                  ]
                },
                {
                  title: 'Catheter Ablation, Ventricular Arrhythmia',
                  id: 'catheter-ablation-ventricular',
                  content: [
                    {
                      statement: 'Consider performing catheter ablation with availability for an epicardial approach guided by 3D electroanatomical mapping of VT in patients with ARVC with incessant VT or frequent appropriate ICD interventions for VT despite β-blocker therapy.',
                      level: 'C',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Consider performing catheter ablation in specialized centers in patients with ARVC and recurrent, symptomatic sustained monomorphic VT or ICD shocks for sustained monomorphic VT despite β-blocker therapy.',
                      level: 'C',
                      source: 'ESC 2022'
                    },
                    {
                      statement: 'Consider performing catheter ablation with the availability of a combined endocardial/epicardial approach in patients with ARVC and recurrent symptomatic sustained VT if β-blockers are ineffective or not tolerated.',
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
          title: 'Perioperative Care',
          id: 'perioperative-care',
          content: [
            {
              statement: 'Obtain perioperative ECG monitoring in all patients with cardiomyopathy undergoing noncardiac surgery.',
              level: 'B',
              source: 'ESC 2023',
              subsections: [
                {
                  title: 'Perioperative Assessment',
                  id: 'perioperative-assessment',
                  content: [
                    {
                      statement: 'Obtain perioperative ECG monitoring in all patients with cardiomyopathy undergoing noncardiac surgery.',
                      level: 'B',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Re-evaluate LV function with echocardiography (assessing LVOTO in patients with HCM) and measurement of NT-proBNP/BNP levels (unless recently obtained) in patients with cardiomyopathy and suspected or known HF scheduled for intermediate or high-risk noncardiac surgery.',
                      level: 'B',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Refer patients with cardiomyopathy with high-risk genotypes or associated factors for arrhythmic or HF complications or severe LVOTO to a cardiomyopathy unit for additional specialized investigations before undergoing elective noncardiac surgery.',
                      level: 'B',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Obtain an ECG and TTE before noncardiac surgery, regardless of symptoms, in < 65 years old patients with a first-degree relative with cardiomyopathy.',
                      level: 'B',
                      source: 'ESC 2023'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: 'Surgical Interventions',
          id: 'surgical-interventions',
          content: [
            {
              statement: 'Consider initiating mechanical circulatory support therapy in selected patients with cardiomyopathy with advanced HF (NYHA class III-IV) despite optimal pharmacological and device treatment, otherwise suitable for heart transplantation, to improve symptoms and reduce the risk of HF hospitalization from worsening HF and premature death while awaiting a transplant.',
              level: 'C',
              source: 'ESC 2023',
              subsections: [
                {
                  title: 'LV Assist Device',
                  id: 'lv-assist-device',
                  content: [
                    {
                      statement: 'Consider initiating mechanical circulatory support therapy in selected patients with cardiomyopathy with advanced HF (NYHA class III-IV) despite optimal pharmacological and device treatment, otherwise suitable for heart transplantation, to improve symptoms and reduce the risk of HF hospitalization from worsening HF and premature death while awaiting a transplant.',
                      level: 'C',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Consider initiating mechanical circulatory support therapy in selected patients with cardiomyopathy with advanced HF (NYHA class III-IV) despite optimal pharmacological and device therapy, ineligible for cardiac transplantation or other surgical options, and without severe RV dysfunction, to reduce the risk of death and improve symptoms.',
                      level: 'C',
                      source: 'ESC 2023'
                    }
                  ]
                },
                {
                  title: 'Heart Transplantation',
                  id: 'heart-transplantation',
                  content: [
                    {
                      statement: 'Offer orthotopic cardiac transplantation in eligible patients with cardiomyopathy with advanced HF (NYHA class III-IV) or intractable ventricular arrhythmia refractory to medical/invasive/device therapy in the absence of absolute contraindications.',
                      level: 'B',
                      source: 'ESC 2023'
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
              statement: 'Obtain prenatal diagnostic testing early in pregnancy, if it is to be pursued by the family, to allow making decisions regarding continuation or coordination of pregnancy.',
              level: 'B',
              source: 'ESC 2023',
              subsections: [
                {
                  title: 'Pregnant Patients',
                  id: 'pregnant-patients',
                  content: [
                    {
                      statement: 'Obtain prenatal diagnostic testing early in pregnancy, if it is to be pursued by the family, to allow making decisions regarding continuation or coordination of pregnancy.',
                      level: 'B',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Consider offering discussion about reproductive genetic testing options with an appropriately trained healthcare professional in all families with a genetic diagnosis.',
                      level: 'C',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Obtain pre-pregnancy risk assessment using the modified WHO classification of maternal risk and provide counseling in all female patients.',
                      level: 'B',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Counsel on safe and effective contraception in all females of childbearing age and their partners.',
                      level: 'B',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Counsel on the risk of disease inheritance in all male and female patients before conception.',
                      level: 'B',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Offer vaginal delivery in most female patients with cardiomyopathies unless there are obstetric indications for C-section, severe HF (ejection fraction < 30% or NYHA class III-IV), or severe outflow tract obstructions, as well as in female patients presenting in labor on OACs.',
                      level: 'B',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Obtain careful review of medications for safety before pregnancy and adjust according to tolerability in pregnancy.',
                      level: 'B',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Initiate therapeutic anticoagulation with LMWH or VKAs in patients with AF according to the stage of pregnancy.',
                      level: 'B',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Consider continuing β-blockers during pregnancy with close follow-up of fetal growth and of the condition of the neonate if the benefits outweigh the risks.',
                      level: 'C',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Consider continuing β-blockers during pregnancy in females with ARVC.',
                      level: 'C',
                      source: 'ESC 2022'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: 'Patient Education',
          id: 'patient-education',
          content: [
            {
              statement: 'Provide genetic counseling by an appropriately trained healthcare professional, including genetic education, to inform decision-making and psychosocial support in families with an inherited or suspected inherited cardiomyopathy, regardless of whether genetic testing is being considered.',
              level: 'B',
              source: 'ESC 2023',
              subsections: [
                {
                  title: 'Genetic Counseling',
                  id: 'genetic-counseling',
                  content: [
                    {
                      statement: 'Provide genetic counseling by an appropriately trained healthcare professional, including genetic education, to inform decision-making and psychosocial support in families with an inherited or suspected inherited cardiomyopathy, regardless of whether genetic testing is being considered.',
                      level: 'B',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Provide pre- and post-test genetic counseling in all individuals undergoing genetic testing for cardiomyopathy.',
                      level: 'B',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Provide counseling in patients with suspected or confirmed ARVC.',
                      level: 'B',
                      source: 'ESC 2022'
                    },
                    {
                      statement: 'Consider providing genetic counseling in patients with clinically diagnosed or suspected ARVC.',
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
          title: 'Follow-up and Surveillance',
          id: 'followup-surveillance',
          content: [
            {
              statement: 'Obtain routine follow-up using a multiparametric approach with ECG and echocardiography every 1-2 years in all clinically stable patients with cardiomyopathy.',
              level: 'B',
              source: 'ESC 2023',
              subsections: [
                {
                  title: 'Follow-up',
                  id: 'followup',
                  content: [
                    {
                      statement: 'Obtain routine follow-up using a multiparametric approach with ECG and echocardiography every 1-2 years in all clinically stable patients with cardiomyopathy.',
                      level: 'B',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Obtain annual ambulatory ECG monitoring in patients with ARVC to aid in diagnosis, management, and risk stratification.',
                      level: 'B',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Obtain clinical evaluation with ECG and multimodality imaging in patients with cardiomyopathy in case of a substantial or unexpected change in symptoms.',
                      level: 'B',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Obtain a comprehensive evaluation of cardiac dimensions and LV and RV systolic (global and regional) and LV diastolic function during follow-up to monitor disease progression and aid risk stratification and management.',
                      level: 'B',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Consider obtaining contrast-enhanced cardiac MRI during follow-up to monitor disease progression and aid risk stratification and management in patients with cardiomyopathy.',
                      level: 'C',
                      source: 'ESC 2023'
                    }
                  ]
                },
                {
                  title: 'Transition to Adult Care',
                  id: 'transition-adult-care',
                  content: [
                    {
                      statement: 'Ensure timely and adequate preparation for the transition of care from pediatric to adult services, including joint consultations, for all adolescent patients with cardiomyopathy.',
                      level: 'B',
                      source: 'ESC 2023'
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
        authors: 'Hugh Calkins, Domenico Corrado, Frank Marcus',
        title: 'Risk Stratification in Arrhythmogenic Right Ventricular Cardiomyopathy',
        journal: 'Circulation. 2017 Nov 21;136(21):2068-2082',
        year: '2017',
        link: 'https://pubmed.ncbi.nlm.nih.gov/29158215/'
      },
      {
        id: 2,
        authors: 'Stéphanie Nguengang Wakap, Deborah M Lambert, Annie Olry et al.',
        title: 'Estimating cumulative point prevalence of rare diseases: analysis of the Orphanet database',
        journal: 'Eur J Hum Genet. 2020 Feb;28(2):165-173',
        year: '2020',
        link: 'https://pubmed.ncbi.nlm.nih.gov/31527858/'
      },
      {
        id: 3,
        authors: 'Darshan Dalal, Khurram Nasir, Chandra Bomma et al.',
        title: 'Arrhythmogenic right ventricular dysplasia: a United States experience',
        journal: 'Circulation. 2005 Dec 20;112(25):3823-32',
        year: '2005',
        link: 'https://pubmed.ncbi.nlm.nih.gov/16344387/'
      },
      {
        id: 4,
        authors: 'Katja Zeppenfeld, Jacob Tfelt-Hansen, Marta de Riva et al.',
        title: '2022 ESC Guidelines for the management of patients with ventricular arrhythmias and the prevention of sudden cardiac death',
        journal: 'Eur Heart J. 2022 Oct 21;43(40):3997-4126',
        year: '2022',
        link: 'https://pubmed.ncbi.nlm.nih.gov/36017572/'
      },
      {
        id: 5,
        authors: 'Elena Arbelo, Alexandros Protonotarios, Juan R Gimeno et al.',
        title: '2023 ESC Guidelines for the management of cardiomyopathies',
        journal: 'Eur Heart J. 2023 Oct 1;44(37):3503-3626',
        year: '2023',
        link: 'https://pubmed.ncbi.nlm.nih.gov/37622657/'
      },
      {
        id: 6,
        authors: 'Justin A Ezekowitz, Eileen O\'Meara, Michael A McDonald et al.',
        title: '2017 Comprehensive Update of the Canadian Cardiovascular Society Guidelines for the Management of Heart Failure',
        journal: 'Can J Cardiol. 2017 Nov;33(11):1342-1433',
        year: '2017',
        link: 'https://pubmed.ncbi.nlm.nih.gov/29111106/'
      },
      {
        id: 7,
        authors: 'Sana M Al-Khatib, William G Stevenson, Michael J Ackerman et al.',
        title: '2017 AHA / ACC / HRS Guideline for Management of Patients With Ventricular Arrhythmias and the Prevention of Sudden Cardiac Death: A Report of the American College of Cardiology / American Heart Association Task Force on Clinical Practice Guidelines and the Heart Rhythm Society',
        journal: 'Circulation. 2018 Sep 25;138(13):e272-e391',
        year: '2018',
        link: 'https://pubmed.ncbi.nlm.nih.gov/29084731/'
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
        authors: 'Amer M Johri, Paul Poirier, Paul Dorian et al.',
        title: 'Canadian Cardiovascular Society / Canadian Heart Rhythm Society Joint Position Statement on the Cardiovascular Screening of Competitive Athletes',
        journal: 'Can J Cardiol. 2019 Jan;35(1):1-11',
        year: '2019',
        link: 'https://pubmed.ncbi.nlm.nih.gov/30595170/'
      },
      {
        id: 10,
        authors: 'Paul A Heidenreich, Biykem Bozkurt, David Aguilar et al.',
        title: '2022 AHA / ACC / HFSA Guideline for the Management of Heart Failure: A Report of the American College of Cardiology / American Heart Association Joint Committee on Clinical Practice Guidelines',
        journal: 'Circulation. 2022 May 3;145(18):e895-e1032',
        year: '2022',
        link: 'https://pubmed.ncbi.nlm.nih.gov/35363499/'
      },
      {
        id: 11,
        authors: 'Writing Committee Members, Shen WK, Sheldon RS et al.',
        title: '2017 ACC / AHA / HRS guideline for the evaluation and management of patients with syncope: A report of the American College of Cardiology / American Heart Association Task Force on Clinical Practice Guidelines and the Heart Rhythm Society',
        journal: 'Heart Rhythm. 2017 Aug;14(8):e155-e217',
        year: '2017',
        link: 'https://pubmed.ncbi.nlm.nih.gov/28286247/'
      },
      {
        id: 12,
        authors: 'Jeffrey A Towbin, William J McKenna, Dominic J Abrams et al.',
        title: '2019 HRS expert consensus statement on evaluation, risk stratification, and management of arrhythmogenic cardiomyopathy',
        journal: 'Heart Rhythm. 2019 Nov;16(11):e301-e372',
        year: '2019',
        link: 'https://pubmed.ncbi.nlm.nih.gov/31078652/'
      },
      {
        id: 13,
        authors: 'Michael J Ackerman, Silvia G Priori, Stephan Willems et al.',
        title: 'HRS / EHRA expert consensus statement on the state of genetic testing for the channelopathies and cardiomyopathies this document was developed as a partnership between the Heart Rhythm Society (HRS) and the European Heart Rhythm Association (EHRA)',
        journal: 'Heart Rhythm. 2011 Aug;8(8):1308-39',
        year: '2011',
        link: 'https://pubmed.ncbi.nlm.nih.gov/21787999/'
      },
      {
        id: 14,
        authors: 'Barry J Maron, James E Udelson, Robert O Bonow et al.',
        title: 'Eligibility and Disqualification Recommendations for Competitive Athletes With Cardiovascular Abnormalities: Task Force 3: Hypertrophic Cardiomyopathy, Arrhythmogenic Right Ventricular Cardiomyopathy and Other Cardiomyopathies, and Myocarditis: A Scientific Statement From the American Heart Association and American College of Cardiology',
        journal: 'Circulation. 2015 Dec 1;132(22):e273-80',
        year: '2015',
        link: 'https://pubmed.ncbi.nlm.nih.gov/26621644/'
      },
      {
        id: 15,
        authors: 'Rachel Lampert, Eugene H Chung, Michael J Ackerman et al.',
        title: '2024 HRS expert consensus statement on arrhythmias in the athlete: Evaluation, treatment, and return to play',
        journal: 'Heart Rhythm. 2024 Oct;21(10):e151-e252',
        year: '2024',
        link: 'https://pubmed.ncbi.nlm.nih.gov/38763377/'
      }
    ]
  }
}; 