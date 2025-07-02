import { DiseaseData } from '../types';

export const chagasCardiomyopathyData: DiseaseData = {
  id: 'chagas-cardiomyopathy',
  title: 'Chagas Cardiomyopathy',
  category: 'Cardiomyopathy',
  lastUpdated: 'May 22, 2025',
  specialty: 'cardiology',
  content: {
    background: {
      overview: {
        definition: 'Chagas cardiomyopathy is a form of dilated cardiomyopathy caused by chronic infection with Trypanosoma cruzi, representing the most serious manifestation of chronic Chagas disease. It is characterized by progressive myocardial damage, arrhythmias, heart failure, and increased risk of sudden cardiac death.',
        pathophysiology: 'Chagas cardiomyopathy results from chronic infection with Trypanosoma cruzi parasites that persist in cardiac tissue, leading to chronic inflammation, myocyte destruction, and progressive fibrosis. The parasite causes direct cellular damage through mechanical disruption and triggers autoimmune responses that contribute to ongoing myocardial damage. This results in dilated cardiomyopathy with characteristic features including regional wall motion abnormalities, apical aneurysms, conduction defects, and ventricular arrhythmias.',
        epidemiology: 'Chagas disease affects approximately 6-7 million people worldwide, primarily in Latin America. Chagas cardiomyopathy develops in 20-30% of chronically infected individuals over 10-20 years. It represents the leading cause of cardiomyopathy in endemic areas and is increasingly recognized in non-endemic regions due to migration patterns.',
        diseaseCourse: 'The disease progresses through acute infection, an asymptomatic indeterminate phase that can last decades, and eventual development of chronic cardiac manifestations. The cardiac form typically manifests as progressive heart failure, conduction abnormalities, ventricular arrhythmias, and thromboembolism. Disease progression varies widely, with some patients remaining asymptomatic while others develop severe cardiomyopathy and sudden cardiac death.',
        prognosis: 'Prognosis varies significantly based on the degree of cardiac involvement. Patients with the indeterminate form have excellent prognosis, while those with established cardiomyopathy have worse outcomes than other forms of dilated cardiomyopathy. Factors associated with worse prognosis include reduced ejection fraction, ventricular arrhythmias, heart failure symptoms, and QRS prolongation. Five-year survival rates range from 50-80% depending on functional class and extent of cardiac damage.'
      }
    },
    clinicalFindings: {
      patientDemographics: [
        'History of residence in or travel to endemic areas (Central and South America)',
        'Age typically 40-60 years at time of cardiac manifestation',
        'More common in rural populations from endemic regions',
        'May occur in non-endemic areas due to migration patterns'
      ],
      pastMedicalHistory: [
        'Dilated cardiomyopathy',
        'Heart failure (HF)',
        'Stroke or thromboembolic events',
        'History of acute Chagas disease (often asymptomatic)',
        'Conduction abnormalities',
        'Ventricular arrhythmias'
      ],
      symptoms: [
        'Chest pain',
        'Dyspnea on exertion',
        'Fatigue',
        'Palpitations',
        'Syncope or presyncope',
        'Peripheral edema',
        'Symptoms may be absent in indeterminate form'
      ],
      physicalExamination: [
        'Bradycardia (due to conduction abnormalities)',
        'Signs of heart failure (elevated JVP, S3 gallop, peripheral edema)',
        'Irregular rhythm (atrial fibrillation, ventricular ectopy)',
        'Mitral or tricuspid regurgitation murmurs',
        'Signs of thromboembolism'
      ]
    },
    guidelines: {
      keySources: 'European Society of Cardiology (ESC 2022), Brazilian Society of Cardiology/American Society of Echocardiography (BSC/ASE 2018), American Heart Association/Heart Rhythm Society/American College of Cardiology (AHA/HRS/ACC 2013), Brazilian Society of Cardiology (BSC 2011)',
      sections: [
        {
          title: 'Diagnostic Investigations',
          id: 'diagnostic-investigations',
          content: [
            {
              statement: 'Obtain an ECG in the initial evaluation to exclude conduction abnormalities (right bundle branch, left anterior fascicular, and AV block) and arrhythmias in all patients with newly diagnosed Chagas disease.',
              level: 'E',
              source: 'ASE/BSC 2018'
            },
            {
              statement: 'Consider obtaining follow-up ECGs at least every 2-5 years in patients with Chagas disease with the indeterminate form.',
              level: 'E',
              source: 'ASE/BSC 2018'
            },
            {
              statement: 'Obtain a 12-lead ECG for periodic assessment of patients with Chagas disease.',
              level: 'B',
              source: 'BSC 2011'
            },
            {
              statement: 'Obtain dynamic ECG (Holter) for evaluation of arrhythmias and prognostic stratification of patients with chronic Chagas cardiomyopathy.',
              level: 'B',
              source: 'BSC 2011'
            }
          ],
          subsections: [
            {
              title: 'Echocardiography',
              id: 'echocardiography',
              content: [
                {
                  statement: 'Obtain echocardiography in patients with suspected acute Chagas disease.',
                  level: 'E',
                  source: 'ASE/BSC 2018'
                },
                {
                  statement: 'Obtain echocardiography in the initial evaluation to exclude LV dysfunction and aneurysms in all patients with newly diagnosed Chagas disease.',
                  level: 'E',
                  source: 'ASE/BSC 2018'
                },
                {
                  statement: 'Assess ejection fraction and wall motion abnormalities as acute myocarditis is a common cardiac presentation.',
                  level: 'E',
                  source: 'ASE/BSC 2018'
                },
                {
                  statement: 'Obtain echocardiography if any changes in ECG findings or clinical condition suggest possible HF.',
                  level: 'E',
                  source: 'ASE/BSC 2018'
                },
                {
                  statement: 'Set imaging goals of identifying the substrate for HF, thromboembolism, and malignant arrhythmias such as the presence of LV dysfunction, LV aneurysms or thrombus, myocardial fibrosis or inflammation, and regional sympathetic denervation.',
                  level: 'E',
                  source: 'ASE/BSC 2018'
                },
                {
                  statement: 'Obtain follow-up echocardiography (and/or cardiac MRI) for monitoring of cardiac structure and function at least yearly in patients at stage B or higher to provide important prognostic information and assist in making therapeutic decisions.',
                  level: 'E',
                  source: 'ASE/BSC 2018'
                },
                {
                  statement: 'Obtain Doppler echocardiography for additional diagnostic and prognostic assessment of patients with chronic Chagas cardiomyopathy.',
                  level: 'B',
                  source: 'BSC 2011'
                },
                {
                  statement: 'Obtain Doppler echocardiography to evaluate patients with the indeterminate form.',
                  level: 'B',
                  source: 'BSC 2011'
                }
              ]
            },
            {
              title: 'Advanced Cardiac Imaging',
              id: 'advanced-cardiac-imaging',
              content: [
                {
                  statement: 'Do not obtain advanced imaging modalities (such as strain imaging or cardiac MRI) to detect silent myocardial damage in the indeterminate stage.',
                  level: 'D',
                  source: 'ASE/BSC 2018'
                },
                {
                  statement: 'Consider obtaining cardiac MRI as an alternative modality to achieve imaging identification goals. Consider obtaining nuclear angiography for the evaluation of LV and RV function, and nuclear scintigraphy to detect myocardial perfusion defects, fibrosis, or denervation.',
                  level: 'E',
                  source: 'ASE/BSC 2018'
                },
                {
                  statement: 'Obtain cardiopulmonary stress testing for functional assessment, risk stratification, and support in the indication of cardiac transplantation in patients with advanced HF.',
                  level: 'B',
                  source: 'BSC 2011'
                },
                {
                  statement: 'Obtain chest radiography for periodic diagnostic assessment of patients with Chagas disease.',
                  level: 'B',
                  source: 'BSC 2011'
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
              statement: 'Manage HF in patients with Chagas-related heart disease according to current published guidelines on HF.',
              level: 'E',
              source: 'Pathway 2025'
            },
            {
              statement: 'Manage ventricular arrhythmias in patients with Chagas-related heart disease according to current published guidelines on ventricular arrhythmias.',
              level: 'E',
              source: 'Pathway 2025'
            },
            {
              statement: 'Initiate anticoagulation therapy for AF in patients with Chagas-related heart disease according to current published guidelines on thromboprophylaxis in AF.',
              level: 'E',
              source: 'Pathway 2025'
            }
          ],
          subsections: [
            {
              title: 'Management of Ventricular Arrhythmia',
              id: 'ventricular-arrhythmia-management',
              content: [
                {
                  statement: 'Consider initiating amiodarone to reduce the arrhythmia burden in patients with Chagas cardiomyopathy presenting with symptomatic premature ventricular complexes or VT.',
                  level: 'C',
                  source: 'ESC 2022'
                }
              ]
            }
          ]
        },
        {
          title: 'Therapeutic Procedures',
          id: 'therapeutic-procedures',
          content: [],
          subsections: [
            {
              title: 'Implantable Cardioverter Defibrillator (ICD)',
              id: 'icd-implantation',
              content: [
                {
                  statement: 'Consider placing an ICD in patients with Chagas cardiomyopathy and symptomatic VT, if antiarrhythmic drugs (amiodarone and β-blockers) are ineffective or not tolerated.',
                  level: 'C',
                  source: 'ESC 2022'
                },
                {
                  statement: 'Consider placing an ICD in patients with Chagas cardiomyopathy.',
                  level: 'C',
                  source: 'ACC/AHA/HRS 2013'
                }
              ]
            },
            {
              title: 'Catheter Ablation',
              id: 'catheter-ablation',
              content: [
                {
                  statement: 'Consider performing catheter ablation in specialized centers in patients with Chagas cardiomyopathy and recurrent, symptomatic sustained monomorphic VT or ICD shocks for sustained monomorphic VT, if antiarrhythmic drugs are ineffective, contraindicated, or not tolerated.',
                  level: 'C',
                  source: 'ESC 2022'
                }
              ]
            }
          ]
        }
      ]
    },
    studies: [
      {
        title: 'CHAGASICS Study: Amiodarone or Implantable Cardioverter-Defibrillator in Chagas Cardiomyopathy',
        year: '2024',
        description: 'In patients with chronic Chagas cardiomyopathy at moderate-to-high risk of death and at least 1 episode of nonsustained VT, ICD was not superior to amiodarone with respect to death from all causes.',
        authors: 'Martino Martinelli-Filho et al.',
        journal: 'JAMA Cardiol. 2024 Dec 1'
      }
    ],
    references: [
      {
        id: 1,
        authors: 'Harry Acquatella, Federico M Asch, Marcia M Barbosa et al.',
        title: 'Recommendations for Multimodality Cardiac Imaging in Patients with Chagas Disease: A Report from the American Society of Echocardiography in Collaboration With the InterAmerican Association of Echocardiography (ECOSIAC) and the Cardiovascular Imaging Department of the Brazilian Society of Cardiology (DIC-SBC)',
        journal: 'J Am Soc Echocardiogr. 2018 Jan;31(1):3-25',
        year: '2018',
        link: 'https://pubmed.ncbi.nlm.nih.gov/29306364/'
      },
      {
        id: 2,
        authors: 'Karapetyan H, Grigoryan A, Mullie L',
        title: 'Recommendations & Algorithms',
        journal: 'Pathway Editors',
        year: '2025',
        link: 'https://pathway.md/'
      },
      {
        id: 3,
        authors: 'Katja Zeppenfeld, Jacob Tfelt-Hansen, Marta de Riva et al.',
        title: '2022 ESC Guidelines for the management of patients with ventricular arrhythmias and the prevention of sudden cardiac death',
        journal: 'Eur Heart J. 2022 Oct 21;43(40):3997-4126',
        year: '2022',
        link: 'https://pubmed.ncbi.nlm.nih.gov/36017572/'
      },
      {
        id: 4,
        authors: 'Jadelson Pinheiro de Andrade, Jose Antonio Marin Neto, Angelo Amato Vincenzo de Paola et al.',
        title: 'I Latin American Guidelines for the diagnosis and treatment of Chagas\' heart disease: executive summary',
        journal: 'Arq Bras Cardiol. 2011 Jun;96(6):434-42',
        year: '2011',
        link: 'https://pubmed.ncbi.nlm.nih.gov/21789345/'
      },
      {
        id: 5,
        authors: 'Epstein AE, DiMarco JP, Ellenbogen KA et al.',
        title: '2012 ACCF / AHA / HRS focused update incorporated into the ACCF / AHA / HRS 2008 guidelines for device-based therapy of cardiac rhythm abnormalities: a report of the American College of Cardiology Foundation / American Heart Association Task Force on Practice Guidelines and the Heart Rhythm Society',
        journal: 'J Am Coll Cardiol. 2013 Jan 22;61(3):e6-75',
        year: '2013',
        link: 'https://pubmed.ncbi.nlm.nih.gov/23265327/'
      },
      {
        id: 6,
        authors: 'Kevin M Bonney, Daniel J Luthringer, Stacey A Kim et al.',
        title: 'Pathology and Pathogenesis of Chagas Heart Disease',
        journal: 'Annu Rev Pathol. 2019 Jan 24:14:421-447',
        year: '2019',
        link: 'https://pubmed.ncbi.nlm.nih.gov/30355152/'
      },
      {
        id: 7,
        authors: 'Héctor González-Zambrano, Gerardo Amaya-Tapia, María C Franco-Ramos et al.',
        title: 'Prevalence of Chagas heart disease in dilated cardiomyopathy',
        journal: 'Arch Cardiol Mex. 2020 Oct 20;91(1):50-57',
        year: '2020',
        link: 'https://pubmed.ncbi.nlm.nih.gov/33079075/'
      },
      {
        id: 8,
        authors: 'Lillian Benck, Evan Kransdorf, Jignesh Patel',
        title: 'Diagnosis and Management of Chagas Cardiomyopathy in the United States',
        journal: 'Curr Cardiol Rep. 2018 Oct 11;20(12):131',
        year: '2018',
        link: 'https://pubmed.ncbi.nlm.nih.gov/30311008/'
      },
      {
        id: 9,
        authors: 'Ana T Chaves, Cristiane A S Menezes, Henrique S Costa et al.',
        title: 'Myocardial fibrosis in chagas disease and molecules related to fibrosis',
        journal: 'Parasite Immunol. 2019 Oct;41(10):e12663',
        year: '2019',
        link: 'https://pubmed.ncbi.nlm.nih.gov/31309590/'
      },
      {
        id: 10,
        authors: 'Martino Martinelli-Filho, José A Marin-Neto, Mauricio Ibrahim Scanavacca et al.',
        title: 'Amiodarone or Implantable Cardioverter-Defibrillator in Chagas Cardiomyopathy: The CHAGASICS Randomized Clinical Trial',
        journal: 'JAMA Cardiol. 2024 Dec 1;9(12):1073-1081',
        year: '2024',
        link: 'https://pubmed.ncbi.nlm.nih.gov/39356542/'
      }
    ]
  }
};