import { DiseaseData } from '../types';

export const abdominalAorticAneurysmData: DiseaseData = {
  id: 'abdominal-aortic-aneurysm',
  title: 'Abdominal aortic aneurysm',
  lastUpdated: 'May 31, 2025',
  category: 'Cardiovascular',
  content: {
    background: {
      overview: {
        definition: 'An AAA is a structural disease of the abdominal aorta characterized by a pathological, localized dilatation of > 30 mm or > 50% of the original aortic size.',
        pathophysiology: 'Multiple environmental factors (including smoking, hypertension, coronary artery disease, and collagen diseases) and genetic factors can induce and accelerate degeneration of the layers of the aortic wall. An inflammatory response in the aortic vessel wall leads to destruction of elastin and collagen in the media and adventitia, loss of smooth muscle cells, thinning of the media, and neovascularization.',
        epidemiology: 'In the US, the overall prevalence of AAA is estimated at 2,200 persons per 100,000 population.',
        diseaseCourse: 'The majority of AAAs are asymptomatic and are detected as an incidental finding on diagnostic imaging performed for other purposes. AAAs can also present with abdominal pain or complications such as thrombosis, embolization and rupture.',
        prognosis: 'The overall mortality associated with ruptured AAA is approximately 85-90%.'
      }
    },
    clinicalFindings: {
      patientDemographics: ['Male sex'],
      pastMedicalHistory: ['Aortic aneurysm', 'COPD', 'CVD', 'Hypercholesterolemia', 'Hypertension'],
      symptoms: [
        'Abdominal pain', 'Diffuse abdominal pain', 'Dizziness', 'Dyspnea',
        'Epigastric abdominal pain', 'Fainting', 'Flank pain', 'LLQ pain',
        'LUQ pain', 'Low back pain', 'Periumbilical abdominal pain',
        'Poorly localized abdominal pain', 'Pulsating sensation', 'RLQ pain', 'Throbbing in abdomen'
      ],
      likelihoodRatios: [
        {
          finding: 'Increased aortic width (> 4.0 cm)',
          lrPlus: '16',
          value: '(8.6-29)'
        },
        {
          finding: 'Increased aortic width (> 3.0 cm)',
          lrPlus: '12',
          value: '(7.4-20)'
        }
      ]
    },
    studies: [
      {
        year: '2024',
        title: 'eHealth intervention on Anxiety for AAA',
        description: 'In patients undergoing AAA surgery, eHealth intervention was not superior to usual care with respect to reduction in mean anxiety score at 1 year after surgery.',
        authors: 'Olga Nilsson et al.',
        journal: 'BJS Open. 2024 Dec 30.'
      },
      {
        year: '2009',
        title: 'MASS',
        description: 'In males aged 65-74 years, ultrasound screening for AAA was superior to no ultrasound screening with respect to death related to AAA at 10 years.',
        authors: 'Thompson SG et al.',
        journal: 'BMJ. 2009 Jun 24.'
      }
    ],
    guidelines: {
      keySources: 'The following summarized guidelines for the evaluation and management of abdominal aortic aneurysm are prepared by our editorial team based on guidelines from the European Society for Vascular Surgery (ESVS 2024,2019), the European Society of Cardiology (ESC 2024,2014), the American Heart Association (AHA/ACC 2022), the U.S. Preventive Services Task Force (USPSTF 2019), the Society for Vascular Surgery (SVS 2018), and the Society for Cardiovascular Angiography and Interventions (SCAI/STS/SVM/AATS/SCA/AHA/ACR/ACC/ASA/SIR 2010).',
      sections: [
        {
          id: 'screening-diagnosis',
          title: 'Screening and diagnosis',
          content: [
            {
              statement: 'Obtain ultrasound screening for AAA in males aged 65-75 years with history of smoking.',
              level: 'A',
              source: 'ESVS 2024 guidelines',
              subsections: [
                {
                  id: 'screening-indications',
                  title: 'Indications for screening',
                  content: [
                    {
                      statement: 'Screen males aged 65-75 years with history of smoking with ultrasound.',
                      level: 'A',
                      source: 'ESVS 2024'
                    },
                    {
                      statement: 'Consider screening in males aged 65-75 years without smoking history.',
                      level: 'B',
                      source: 'ESVS 2024'
                    },
                    {
                      statement: 'Screen females aged 65-75 years with family history of AAA.',
                      level: 'B',
                      source: 'ESVS 2024'
                    }
                  ]
                },
                {
                  id: 'diagnostic-criteria',
                  title: 'Diagnostic criteria',
                  content: [
                    {
                      statement: 'AAA is defined as abdominal aortic diameter ≥ 30 mm.',
                      level: 'A',
                      source: 'ESVS 2024'
                    },
                    {
                      statement: 'Use CT angiography for detailed anatomical assessment before intervention.',
                      level: 'A',
                      source: 'ESVS 2024'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 'diagnostic-investigations',
          title: 'Diagnostic investigations',
          content: [
            {
              statement: 'Perform CT angiography to assess AAA anatomy and plan intervention.',
              level: 'A',
              source: 'ESVS 2024 guidelines',
              subsections: [
                {
                  id: 'imaging-modalities',
                  title: 'Imaging modalities',
                  content: [
                    {
                      statement: 'Use ultrasound for initial screening and surveillance.',
                      level: 'A',
                      source: 'ESVS 2024'
                    },
                    {
                      statement: 'Perform CT angiography for pre-operative planning.',
                      level: 'A',
                      source: 'ESVS 2024'
                    },
                    {
                      statement: 'Consider MR angiography in patients with renal impairment.',
                      level: 'B',
                      source: 'ESVS 2024'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 'medical-management',
          title: 'Medical management',
          content: [
            {
              statement: 'Prescribe statins for cardiovascular risk reduction in patients with AAA.',
              level: 'A',
              source: 'ESVS 2024 guidelines',
              subsections: [
                {
                  id: 'pharmacotherapy',
                  title: 'Pharmacotherapy',
                  content: [
                    {
                      statement: 'Prescribe ACE inhibitors or ARBs for blood pressure control.',
                      level: 'A',
                      source: 'ESVS 2024'
                    },
                    {
                      statement: 'Prescribe antiplatelet therapy for cardiovascular protection.',
                      level: 'A',
                      source: 'ESVS 2024'
                    },
                    {
                      statement: 'Achieve smoking cessation in all patients.',
                      level: 'A',
                      source: 'ESVS 2024'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 'surveillance',
          title: 'Surveillance',
          content: [
            {
              statement: 'Perform surveillance imaging every 12 months for AAA 40-54 mm.',
              level: 'A',
              source: 'ESVS 2024 guidelines',
              subsections: [
                {
                  id: 'surveillance-intervals',
                  title: 'Surveillance intervals',
                  content: [
                    {
                      statement: 'AAA 30-39 mm: surveillance every 3 years.',
                      level: 'A',
                      source: 'ESVS 2024'
                    },
                    {
                      statement: 'AAA 40-44 mm: surveillance every 2 years.',
                      level: 'A',
                      source: 'ESVS 2024'
                    },
                    {
                      statement: 'AAA 45-54 mm: surveillance every 12 months.',
                      level: 'A',
                      source: 'ESVS 2024'
                    },
                    {
                      statement: 'AAA ≥ 55 mm: consider intervention.',
                      level: 'A',
                      source: 'ESVS 2024'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 'surgical-interventions',
          title: 'Surgical interventions',
          content: [
            {
              statement: 'Offer elective repair for AAA ≥ 55 mm in males and ≥ 50 mm in females.',
              level: 'A',
              source: 'ESVS 2024 guidelines',
              subsections: [
                {
                  id: 'intervention-thresholds',
                  title: 'Intervention thresholds',
                  content: [
                    {
                      statement: 'Consider EVAR as first-line treatment when anatomically suitable.',
                      level: 'A',
                      source: 'ESVS 2024'
                    },
                    {
                      statement: 'Perform open surgical repair when EVAR is not suitable.',
                      level: 'A',
                      source: 'ESVS 2024'
                    },
                    {
                      statement: 'Emergency repair indicated for ruptured AAA.',
                      level: 'A',
                      source: 'ESVS 2024'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 'perioperative-care',
          title: 'Perioperative care',
          content: [
            {
              statement: 'Provide comprehensive perioperative assessment and optimization.',
              level: 'A',
              source: 'ESVS 2024 guidelines',
              subsections: [
                {
                  id: 'preoperative-assessment',
                  title: 'Preoperative assessment',
                  content: [
                    {
                      statement: 'Perform cardiac risk assessment before elective AAA repair.',
                      level: 'A',
                      source: 'ESVS 2024'
                    },
                    {
                      statement: 'Assess pulmonary function in patients with COPD.',
                      level: 'B',
                      source: 'ESVS 2024'
                    },
                    {
                      statement: 'Evaluate renal function before contrast procedures.',
                      level: 'A',
                      source: 'ESVS 2024'
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
        authors: 'Wanhainen A, et al.',
        title: 'Editor\'s Choice - European Society for Vascular Surgery (ESVS) 2024 Clinical Practice Guidelines on the Management of Abdominal Aorto-Iliac Artery Aneurysms.',
        journal: 'Eur J Vasc Endovasc Surg.',
        year: '2024',
        link: 'https://pubmed.ncbi.nlm.nih.gov/37940156/'
      },
      {
        id: 2,
        authors: 'Isselbacher EM, et al.',
        title: '2022 ACC/AHA Guideline for the Diagnosis and Management of Aortic Disease.',
        journal: 'J Am Coll Cardiol.',
        year: '2022',
        link: 'https://pubmed.ncbi.nlm.nih.gov/36334170/'
      },
      {
        id: 3,
        authors: 'US Preventive Services Task Force.',
        title: 'Screening for Abdominal Aortic Aneurysm: US Preventive Services Task Force Recommendation Statement.',
        journal: 'JAMA.',
        year: '2019',
        link: 'https://pubmed.ncbi.nlm.nih.gov/31790545/'
      }
    ]
  }
};