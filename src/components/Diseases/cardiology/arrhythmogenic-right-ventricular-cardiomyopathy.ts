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
    guidelines: {
      keySources: 'The following summarized guidelines for the evaluation and management of arrhythmogenic right ventricular cardiomyopathy are prepared by our editorial team based on guidelines from the European Society of Cardiology (ESC 2023,2022,2018), the Heart Failure Society of America (HFSA/AHA/ACC 2022), the Canadian Cardiovascular Society (CCS/CHRS 2019), the American Heart Association (AHA/HRS/ACC 2018,2017), and the Canadian Cardiovascular Society (CCS 2017).',
      sections: [
        {
          title: 'Screening and diagnosis',
          id: 'screening-diagnosis',
          content: [
            {
              statement: 'Obtain cascade genetic testing, with pre- and post-test counseling, in adult at-risk relatives of a patient with cardiomyopathy with a confident genetic diagnosis (a pathogenic/likely pathogenic variant) in the family (starting with first-degree relatives, if available, and cascading out sequentially).',
              level: 'Class B',
              source: 'ESC 2023 guidelines',
              subsections: [
                {
                  title: 'Screening of family relatives, clinical and genetic testing',
                  id: 'family-screening-genetic',
                  content: [
                    {
                      statement: 'Obtain cascade genetic testing, with pre- and post-test counseling, in adult at-risk relatives of a patient with cardiomyopathy with a confident genetic diagnosis (a pathogenic/likely pathogenic variant) in the family (starting with first-degree relatives, if available, and cascading out sequentially).',
                      level: 'Class B',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Consider obtaining cascade genetic testing with pre- and post-test counseling in pediatric at-risk relatives of a patient with cardiomyopathy with a confident genetic diagnosis (a pathogenic/likely pathogenic variant) in the family (starting with first-degree relatives, if available, and cascading out sequentially), considering the underlying cardiomyopathy, expected age of onset, presentation in the family, and clinical/legal consequences.',
                      level: 'Class C',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Consider obtaining testing for the presence of a familial variant of unknown significance, typically in parents and/or affected relatives, to determine if the variant segregates with the cardiomyopathy phenotype and if this might allow the variant to be interpreted with confidence.',
                      level: 'Class C',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Do not obtain diagnostic genetic testing in phenotype-negative relatives of a patient with cardiomyopathy in the absence of a confident genetic diagnosis (a pathogenic/likely pathogenic variant) in the family.',
                      level: 'Class D',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Consider obtaining a clinical evaluation of close relatives (second-degree relatives of the index patient) during cascade screening where a first-degree relative has died.',
                      level: 'Class C',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Obtain an ECG and echocardiogram in a first-degree relative of patients with ARVC.',
                      level: 'Class B',
                      source: 'ESC 2022'
                    },
                    {
                      statement: 'Consider obtaining clinical screening for ARVC along with providing genetic counseling and obtaining genetic testing in selected first-degree relatives of patients with ARVC if the proband has a disease-causing mutation.',
                      level: 'Class B',
                      source: 'ACC/AHA/HRS 2018'
                    },
                    {
                      statement: 'Consider providing genetic counseling in families with ARVC for the purpose of screening and/or genetic testing.',
                      level: 'Class B',
                      source: 'CCS 2017'
                    }
                  ]
                },
                {
                  title: 'Screening of family relatives, cardiac MRI',
                  id: 'family-screening-mri',
                  content: [
                    {
                      statement: 'Consider obtaining contrast-enhanced cardiac MRI in genotype-positive/phenotype-negative family members to aid in diagnosis and detection of early disease in families with cardiomyopathy with an identified disease-causing variant.',
                      level: 'Class C',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Consider obtaining contrast-enhanced cardiac MRI in phenotype-negative family members to aid diagnosis and detect early disease in cases of familial cardiomyopathy without a genetic diagnosis.',
                      level: 'Class C',
                      source: 'ESC 2023'
                    }
                  ]
                },
                {
                  title: 'Screening of family relatives, follow-up',
                  id: 'family-screening-followup',
                  content: [
                    {
                      statement: 'Obtain clinical evaluation using a multiparametric approach, including ECG, cardiac imaging, and long-term follow-up, in first-degree relatives with the same disease-causing variant as the proband after cascade genetic testing.',
                      level: 'Class B',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Discharge first-degree relatives without a phenotype and not having the same disease-causing variant as the proband after cascade genetic testing from further follow-up, but advise seeking re-assessment in case symptoms develop or when new clinically relevant data emerge in the family.',
                      level: 'Class B',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Obtain initial clinical evaluation using a multiparametric approach, including ECG and cardiac imaging, in first-degree relatives when no pathogenic/likely pathogenic variant is identified in the proband or genetic testing is not obtained.',
                      level: 'Class B',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Consider obtaining regular, long-term clinical evaluation using a multiparametric approach, including ECG and cardiac imaging, in first-degree relatives when no pathogenic/likely pathogenic variant is identified in the proband or genetic testing is not obtained.',
                      level: 'Class C',
                      source: 'ESC 2023'
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
              statement: 'Obtain systematic evaluation in all patients with suspected or established cardiomyopathy using a multiparametric approach, including clinical evaluation, pedigree analysis, ECG, Holter monitoring, laboratory tests, and multimodality imaging.',
              level: 'Class B',
              source: 'ESC 2023 guidelines',
              subsections: [
                {
                  title: 'General principles',
                  id: 'diagnostic-general',
                  content: [
                    {
                      statement: 'Obtain systematic evaluation in all patients with suspected or established cardiomyopathy using a multiparametric approach, including clinical evaluation, pedigree analysis, ECG, Holter monitoring, laboratory tests, and multimodality imaging.',
                      level: 'Class B',
                      source: 'ESC 2023'
                    }
                  ]
                },
                {
                  title: 'History and physical examination',
                  id: 'history-physical',
                  content: [
                    {
                      statement: 'Elicit family history and create a three- to four-generation family tree in all patients with suspected cardiomyopathy to aid in diagnosis, provide clues to underlying etiology, determine inheritance patterns, and identify at-risk relatives.',
                      level: 'Class B',
                      source: 'ESC 2023'
                    }
                  ]
                },
                {
                  title: 'ECG',
                  id: 'ecg-testing',
                  content: [
                    {
                      statement: 'Consider obtaining signal-averaged ECG for diagnosis and risk stratification in patients with suspected ARVC.',
                      level: 'Class C',
                      source: 'ACC/AHA/HRS 2018'
                    }
                  ]
                },
                {
                  title: 'TTE',
                  id: 'tte-testing',
                  content: [
                    {
                      statement: 'Obtain a comprehensive evaluation of cardiac dimensions and LV and RV systolic (global and regional) and LV diastolic function in all patients with cardiomyopathy at initial evaluation and during follow-up to monitor disease progression and aid risk stratification and management.',
                      level: 'Class B',
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
                      level: 'Class B',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Obtain cardiac MRI in patients with suspected ARVC.',
                      level: 'Class B',
                      source: 'ESC 2022'
                    },
                    {
                      statement: 'Consider obtaining cardiac MRI for establishing a diagnosis and for risk stratification in patients with suspected ARVC and ventricular arrhythmia or ECG abnormalities.',
                      level: 'Class B',
                      source: 'ACC/AHA/HRS 2018'
                    }
                  ]
                },
                {
                  title: 'Genetic testing',
                  id: 'genetic-testing',
                  content: [
                    {
                      statement: 'Obtain genetic testing in patients fulfilling diagnostic criteria for cardiomyopathy in cases where it enables diagnosis, prognostication, therapeutic stratification, or reproductive management of the patient or where it enables cascade genetic evaluation of their relatives otherwise eligible for enrollment into long-term surveillance.',
                      level: 'Class B',
                      source: 'ESC 2023'
                    },
                    {
                      statement: 'Obtain genetic testing in patients with suspected or confirmed ARVC.',
                      level: 'Class B',
                      source: 'ESC 2022'
                    },
                    {
                      statement: 'Consider obtaining genetic testing for diagnosis and gene-specific targeted family screening in patients with clinically diagnosed or suspected ARVC.',
                      level: 'Class C',
                      source: 'ACC/AHA/HRS 2018'
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
              statement: 'Consider providing comprehensive care in a multidisciplinary team approach to all patients with cardiomyopathy, including adequate medical therapy, lifestyle counseling, physical activity recommendations, risk stratification, and arrhythmia management.',
              level: 'Class C',
              source: 'ESC 2023 guidelines',
              subsections: [
                {
                  title: 'General principles',
                  id: 'management-general',
                  content: [
                    {
                      statement: 'Consider providing comprehensive care in a multidisciplinary team approach to all patients with cardiomyopathy, including adequate medical therapy, lifestyle counseling, physical activity recommendations, risk stratification, and arrhythmia management.',
                      level: 'Class C',
                      source: 'ESC 2023'
                    }
                  ]
                },
                {
                  title: 'Antiarrhythmic therapy',
                  id: 'antiarrhythmic-therapy',
                  content: [
                    {
                      statement: 'Consider using sotalol for prevention of ventricular arrhythmias in patients with ARVC.',
                      level: 'Class B',
                      source: 'ACC/AHA/HRS 2018'
                    },
                    {
                      statement: 'Consider using amiodarone for prevention of ventricular arrhythmias in patients with ARVC.',
                      level: 'Class B',
                      source: 'ACC/AHA/HRS 2018'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: 'Interventional management',
          id: 'interventional-management',
          content: [
            {
              statement: 'Prescribe ICD therapy for secondary prevention in ARVC patients who survive cardiac arrest, and who have a reasonable life expectancy and no other comorbidities that would prevent realistic benefit from ICD therapy.',
              level: 'Class B',
              source: 'ACC/AHA/HRS 2018 guidelines',
              subsections: [
                {
                  title: 'ICD therapy',
                  id: 'icd-therapy',
                  content: [
                    {
                      statement: 'Prescribe ICD therapy for secondary prevention in ARVC patients who survive cardiac arrest, and who have a reasonable life expectancy and no other comorbidities that would prevent realistic benefit from ICD therapy.',
                      level: 'Class B',
                      source: 'ACC/AHA/HRS 2018'
                    },
                    {
                      statement: 'Consider prescribing ICD therapy for primary prevention in patients with an ARVC diagnosis who are at high risk for SCD when the patient has a reasonable expectation of survival with a reasonable functional status for more than 1 year.',
                      level: 'Class B',
                      source: 'ACC/AHA/HRS 2018'
                    }
                  ]
                },
                {
                  title: 'Catheter ablation',
                  id: 'catheter-ablation',
                  content: [
                    {
                      statement: 'Consider obtaining catheter ablation for symptomatic ventricular arrhythmias that recur despite antiarrhythmic drugs in patients with ARVC.',
                      level: 'Class B',
                      source: 'ACC/AHA/HRS 2018'
                    }
                  ]
                },
                {
                  title: 'Cardiac transplantation',
                  id: 'cardiac-transplantation',
                  content: [
                    {
                      statement: 'Consider transplantation in patients with ARVC and drug-refractory HF with a reasonable expectation of a meaningful life.',
                      level: 'Class B',
                      source: 'ACC/AHA/HRS 2018'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: 'Lifestyle counseling',
          id: 'lifestyle-counseling',
          content: [
            {
              statement: 'Recommend avoiding or restricting participation in competitive sports in patients with ARVC.',
              level: 'Class B',
              source: 'ACC/AHA/HRS 2018 guidelines',
              subsections: [
                {
                  title: 'Activity restriction',
                  id: 'activity-restriction',
                  content: [
                    {
                      statement: 'Recommend avoiding or restricting participation in competitive sports in patients with ARVC.',
                      level: 'Class B',
                      source: 'ACC/AHA/HRS 2018'
                    },
                    {
                      statement: 'Consider advising avoidance of competitive and high-intensity sports in all patients diagnosed with ARVC.',
                      level: 'Class B',
                      source: 'ESC 2022'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    clinicalFindings: {
      patientDemographics: [],
      pastMedicalHistory: [],
      symptoms: [
        'Chest pain',
        'Dyspnea',
        'Lightheadedness',
        'Palpitations',
        'Syncope'
      ],
      likelihoodRatios: [
        {
          finding: 'Fourth heart sound',
          lrPlus: 'Present',
          value: 'Clinical significance'
        },
        {
          finding: 'Split S2 heart sound',
          lrPlus: 'Present',
          value: 'Clinical significance'
        },
        {
          finding: 'Third heart sound',
          lrPlus: 'Present',
          value: 'Clinical significance'
        },
        {
          finding: 'Tachycardia',
          lrPlus: 'Present',
          value: 'Vital sign finding'
        }
      ]
    },
    studies: [
      {
        title: 'PAUSE-SCD',
        year: '2022',
        description: 'In patients with cardiomyopathy and monomorphic VT with an indication for ICD implantation, ablation therapy was superior to conventional therapy with respect to the composite outcome of VT recurrence, cardiovascular hospitalization or death.',
        authors: 'Roderick Tung et al.',
        journal: 'Circulation. 2022 Jun 21'
      }
    ],
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
        authors: 'Barbara Bauce, Cristina Basso, Alessandra Rampazzo et al.',
        title: 'Clinical profile of four families with arrhythmogenic right ventricular cardiomyopathy caused by dominant desmoplakin mutations',
        journal: 'Eur Heart J. 2005 Aug;26(16):1666-75',
        year: '2005',
        link: 'https://pubmed.ncbi.nlm.nih.gov/15941723/'
      },
      {
        id: 5,
        authors: 'Roderick Tung, Pasquale Santangeli, Fermin C Garcia et al.',
        title: 'Freedom from recurrent ventricular tachycardia after catheter ablation is associated with improved survival in patients with structural heart disease: An International VT Ablation Center Collaborative Group study',
        journal: 'Heart Rhythm. 2015 Sep;12(9):1997-2007',
        year: '2015',
        link: 'https://pubmed.ncbi.nlm.nih.gov/26031376/'
      },
      {
        id: 6,
        authors: 'Crystal Tichnell, Brittney Murray, Hugh Calkins et al.',
        title: 'Arrhythmogenic right ventricular cardiomyopathy: the North American experience',
        journal: 'Heart Rhythm. 2009 Dec;6(12):1702-6',
        year: '2009',
        link: 'https://pubmed.ncbi.nlm.nih.gov/19959120/'
      },
      {
        id: 7,
        authors: 'Frank I Marcus, William J McKenna, Dan Sherrill et al.',
        title: 'Diagnosis of arrhythmogenic right ventricular cardiomyopathy/dysplasia: proposed modification of the task force criteria',
        journal: 'Circulation. 2010 Apr 6;121(13):1533-41',
        year: '2010',
        link: 'https://pubmed.ncbi.nlm.nih.gov/20172911/'
      },
      {
        id: 8,
        authors: 'Domenico Corrado, Cristina Basso, Gaetano Thiene et al.',
        title: 'Spectrum of clinicopathologic manifestations of arrhythmogenic right ventricular cardiomyopathy/dysplasia: a multicenter study',
        journal: 'J Am Coll Cardiol. 1997 Nov 15;30(6):1512-20',
        year: '1997',
        link: 'https://pubmed.ncbi.nlm.nih.gov/9362408/'
      },
      {
        id: 9,
        authors: 'Cynthia A James, Suzanne Jongbloed, Anneline S J M te Riele et al.',
        title: 'Mortality and transplantation in arrhythmogenic right ventricular cardiomyopathy: a systematic review',
        journal: 'Heart Rhythm. 2012 Jul;9(7):1068-73',
        year: '2012',
        link: 'https://pubmed.ncbi.nlm.nih.gov/22342863/'
      },
      {
        id: 10,
        authors: 'Anneline S J M te Riele, Cynthia A James, Richard Tandri et al.',
        title: 'Yield of serial evaluation in at-risk family members of patients with ARVC',
        journal: 'J Am Coll Cardiol. 2014 Jan 21;63(3):293-301',
        year: '2014',
        link: 'https://pubmed.ncbi.nlm.nih.gov/24140659/'
      }
    ]
  }
}; 