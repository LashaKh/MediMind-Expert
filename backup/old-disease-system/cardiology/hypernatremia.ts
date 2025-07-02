import { DiseaseData } from '../types';

export const hypernatremiaDiseaseData: DiseaseData = {
  id: 'hypernatremia',
  title: 'Hypernatremia',
  lastUpdated: 'May 22, 2025',
  category: 'Emergency Cardiology',
  specialty: 'cardiology',
  content: {
    background: {
      overview: {
        definition: 'Hypernatremia is defined as serum sodium concentration above normal range, typically > 145 mmol/L, resulting from water loss or sodium gain.',
        pathophysiology: 'Hypernatremia occurs when there is a net loss of water relative to sodium, leading to increased serum osmolality and cellular dehydration. This can result from inadequate water intake, excessive water loss, or excessive sodium intake.',
        epidemiology: 'Hypernatremia is more common in elderly patients, infants, and critically ill patients. It is associated with significant morbidity and mortality if not properly managed.',
        diseaseCourse: 'The clinical course depends on the rate of development and severity. Acute hypernatremia (developing within 48 hours) carries higher risk of neurological complications than chronic hypernatremia.',
        prognosis: 'Prognosis depends on underlying cause, severity, and rate of correction. Rapid correction can lead to cerebral edema and neurological complications.'
      }
    },
    clinicalFindings: {
      patientDemographics: ['Elderly patients', 'Infants', 'Critically ill patients'],
      pastMedicalHistory: ['Head trauma', 'Central diabetes insipidus', 'Decreased water intake'],
      symptoms: [
        'Increased thirst',
        'Irritability', 
        'Polyuria',
        'Seizure',
        'Urinary frequency'
      ]
    },
    guidelines: {
      keySources: 'The following summarized guidelines for the evaluation and management of hypernatremia are prepared by our editorial team based on guidelines from the American Academy of Family Physicians (AAFP 2023) and the Society for Endocrinology (SE 2018).',
      sections: [
        {
          id: 'classification-risk-stratification',
          title: 'Classification and Risk Stratification',
          content: [
            {
              statement: 'Classify hypernatremia according to serum sodium level: Mild (146-149 mmol/L), Moderate (150-159 mmol/L), Severe (> 160 mmol/L).',
              level: 'E',
              source: 'SE 2018 guidelines',
              subsections: [
                {
                  id: 'classification-table',
                  title: 'Classification by Serum Sodium Level',
                  content: [
                    {
                      statement: 'Mild hypernatremia: 146-149 mmol/L',
                      level: 'E',
                      source: 'SE 2018'
                    },
                    {
                      statement: 'Moderate hypernatremia: 150-159 mmol/L',
                      level: 'E',
                      source: 'SE 2018'
                    },
                    {
                      statement: 'Severe hypernatremia: > 160 mmol/L',
                      level: 'E',
                      source: 'SE 2018'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 'medical-management',
          title: 'Medical Management',
          content: [
            {
              statement: 'Consider correcting hypernatremia in adult patients at a rate of 12 mEq/L over 24 hours. Avoid increasing serum sodium again for therapeutic purposes if the recommended correction rate is exceeded.',
              level: 'C',
              source: 'AAFP 2023 guidelines',
              subsections: [
                {
                  id: 'fluid-replacement',
                  title: 'Fluid Replacement Strategy',
                  content: [
                    {
                      statement: 'Correct hypernatremia at a controlled rate to prevent cerebral edema.',
                      level: 'C',
                      source: 'AAFP 2023'
                    },
                    {
                      statement: 'Calculate free water deficit and replace gradually over 24-48 hours.',
                      level: 'C',
                      source: 'AAFP 2023'
                    },
                    {
                      statement: 'Monitor serum sodium levels every 2-4 hours during active correction.',
                      level: 'E',
                      source: 'Expert consensus'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 'specific-circumstances',
          title: 'Specific Circumstances',
          content: [
            {
              statement: 'Patients with central diabetes insipidus - As per SE 2018 guidelines:',
              level: 'E',
              source: 'SE 2018 guidelines'
            },
            {
              statement: 'Correct serum sodium at a rate of 5 mmol/L in the first hour (or until symptoms improve) and limited to 10 mmol/L per 24 hours in symptomatic patients with hypernatremia developed within 48 hours (acute hypernatremia).',
              level: 'E',
              source: 'SE 2018'
            },
            {
              statement: 'Correct hypernatremia at a rate not exceeding 0.5 mmol/L per hour and limited to 10 mmol/L per 24 hours in patients with no or mild symptoms.',
              level: 'E',
              source: 'SE 2018'
            },
            {
              statement: 'Decide on the type and volume of fluid replacement in patients with hypernatremia reflecting the standard daily fluid and electrolyte requirement together with a component of the estimated fluid deficit such that correction of hypernatremia is controlled.',
              level: 'E',
              source: 'SE 2018'
            },
            {
              statement: 'Administer IV or IM vasopressin 1-2 mcg in patients with known central diabetes insipidus and excessive, inappropriately dilute urine output, with close observation of the clinical and biochemical response. Consider administering further doses of desmopressin when production of higher volumes of dilute (100 mosmol/kg) urine returns to avoid the development of overly rapid correction of hypernatremia through the combination of high fluid loads together with the obligate antidiuresis of exogenous desmopressin.',
              level: 'E',
              source: 'SE 2018'
            }
          ]
        },
        {
          id: 'diagnostic-investigations',
          title: 'Diagnostic Investigations',
          content: [
            {
              statement: 'Obtain comprehensive metabolic panel including serum sodium, glucose, BUN, and creatinine.',
              level: 'E',
              source: 'Expert consensus',
              subsections: [
                {
                  id: 'laboratory-studies',
                  title: 'Laboratory Studies',
                  content: [
                    {
                      statement: 'Measure serum osmolality to confirm hyperosmolar state.',
                      level: 'E',
                      source: 'Expert consensus'
                    },
                    {
                      statement: 'Obtain urine osmolality and specific gravity to assess concentrating ability.',
                      level: 'E',
                      source: 'Expert consensus'
                    },
                    {
                      statement: 'Check blood glucose to rule out hyperglycemic causes.',
                      level: 'E',
                      source: 'Expert consensus'
                    }
                  ]
                },
                {
                  id: 'related-calculators',
                  title: 'Related Calculators',
                  content: [
                    {
                      statement: 'Use Sodium Correction for Hyperglycemia calculator when hyperglycemia is present.',
                      level: 'E',
                      source: 'Clinical tools'
                    },
                    {
                      statement: 'Calculate Free Water Deficit in Hypernatremia to guide fluid replacement therapy.',
                      level: 'E',
                      source: 'Clinical tools'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 'monitoring-follow-up',
          title: 'Monitoring and Follow-up',
          content: [
            {
              statement: 'Monitor serum sodium levels every 2-4 hours during active correction phase.',
              level: 'E',
              source: 'Expert consensus',
              subsections: [
                {
                  id: 'monitoring-parameters',
                  title: 'Monitoring Parameters',
                  content: [
                    {
                      statement: 'Check neurological status frequently during correction.',
                      level: 'E',
                      source: 'Expert consensus'
                    },
                    {
                      statement: 'Monitor urine output and fluid balance hourly.',
                      level: 'E',
                      source: 'Expert consensus'
                    },
                    {
                      statement: 'Assess for signs of cerebral edema if correction is too rapid.',
                      level: 'E',
                      source: 'Expert consensus'
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
        year: '2023',
        title: 'Diagnosis and Management of Sodium Disorders: Hyponatremia and Hypernatremia',
        description: 'Comprehensive review of sodium disorders management in clinical practice, providing evidence-based guidelines for diagnosis and treatment approaches.',
        authors: 'Nathaniel E Miller, David Rushlow, Stephen K Stacey',
        journal: 'Am Fam Physician. 2023 Nov;108(5):476-486',
        link: 'https://pubmed.ncbi.nlm.nih.gov/37983699/'
      },
      {
        year: '2018',
        title: 'SOCIETY FOR ENDOCRINOLOGY CLINICAL GUIDANCE: Inpatient management of cranial diabetes insipidus',
        description: 'Clinical guidance for the inpatient management of cranial diabetes insipidus, including specific recommendations for hypernatremia correction.',
        authors: 'S E Baldeweg, S Ball, A Brooke et al.',
        journal: 'Endocr Connect. 2018 Jul;7(7):G8-G11',
        link: 'https://pubmed.ncbi.nlm.nih.gov/29930026/'
      },
      {
        year: '2016',
        title: 'Diagnosis and treatment of hypernatremia',
        description: 'Comprehensive review of hypernatremia pathophysiology, diagnosis, and treatment strategies in clinical practice.',
        authors: 'Saif A Muhsin, David B Mount',
        journal: 'Best Pract Res Clin Endocrinol Metab. 2016 Mar;30(2):189-203',
        link: 'https://pubmed.ncbi.nlm.nih.gov/27156758/'
      },
      {
        year: '2016',
        title: 'Clinical Manifestations of Hyponatremia and Hypernatremia in Under-Five Diarrheal Children',
        description: 'Study examining clinical manifestations and outcomes of sodium disorders in pediatric patients with diarrheal illness.',
        authors: 'Lubaba Shahrin, Mohammad Jobayer Chisti, Sayeeda Huq et al.',
        journal: 'J Trop Pediatr. 2016 Jun;62(3):206-12',
        link: 'https://pubmed.ncbi.nlm.nih.gov/26851435/'
      },
      {
        year: '2016',
        title: 'Risk Factors and Outcomes in Patients With Hypernatremia and Sepsis',
        description: 'Analysis of risk factors and clinical outcomes in patients presenting with hypernatremia in the setting of sepsis.',
        authors: 'Hai-Bin Ni, Xing-Xing Hu, Xiao-Fei Huang et al.',
        journal: 'Am J Med Sci. 2016 Jun;351(6):601-5',
        link: 'https://pubmed.ncbi.nlm.nih.gov/27238923/'
      },
      {
        year: '2018',
        title: 'Risk factors and outcome of Hypernatremia amongst severe adult burn patients',
        description: 'Evaluation of hypernatremia risk factors and outcomes in adult patients with severe burn injuries.',
        authors: 'N N Lam, N T N Minh',
        journal: 'Ann Burns Fire Disasters. 2018 Dec 31;31(4):271-277',
        link: 'https://pubmed.ncbi.nlm.nih.gov/30983927/'
      },
      {
        year: '2015',
        title: 'Predialysis hypernatremia is a prognostic marker in acute kidney injury in need of renal replacement therapy',
        description: 'Study demonstrating the prognostic significance of hypernatremia in patients with acute kidney injury requiring renal replacement therapy.',
        authors: 'Renata S Mendes, Márcio Soares, Carla Valente et al.',
        journal: 'J Crit Care. 2015 Oct;30(5):982-7',
        link: 'https://pubmed.ncbi.nlm.nih.gov/26205186/'
      }
    ],
    references: [
      {
        id: 1,
        authors: 'Nathaniel E Miller, David Rushlow, Stephen K Stacey',
        title: 'Diagnosis and Management of Sodium Disorders: Hyponatremia and Hypernatremia',
        journal: 'Am Fam Physician. 2023 Nov;108(5):476-486',
        year: '2023',
        link: 'https://pubmed.ncbi.nlm.nih.gov/37983699/'
      },
      {
        id: 2,
        authors: 'S E Baldeweg, S Ball, A Brooke et al.',
        title: 'SOCIETY FOR ENDOCRINOLOGY CLINICAL GUIDANCE: Inpatient management of cranial diabetes insipidus',
        journal: 'Endocr Connect. 2018 Jul;7(7):G8-G11',
        year: '2018',
        link: 'https://pubmed.ncbi.nlm.nih.gov/29930026/'
      },
      {
        id: 3,
        authors: 'Saif A Muhsin, David B Mount',
        title: 'Diagnosis and treatment of hypernatremia',
        journal: 'Best Pract Res Clin Endocrinol Metab. 2016 Mar;30(2):189-203',
        year: '2016',
        link: 'https://pubmed.ncbi.nlm.nih.gov/27156758/'
      },
      {
        id: 4,
        authors: 'Lubaba Shahrin, Mohammad Jobayer Chisti, Sayeeda Huq et al.',
        title: 'Clinical Manifestations of Hyponatremia and Hypernatremia in Under-Five Diarrheal Children in a Diarrhea Hospital',
        journal: 'J Trop Pediatr. 2016 Jun;62(3):206-12',
        year: '2016',
        link: 'https://pubmed.ncbi.nlm.nih.gov/26851435/'
      },
      {
        id: 5,
        authors: 'Hai-Bin Ni, Xing-Xing Hu, Xiao-Fei Huang et al.',
        title: 'Risk Factors and Outcomes in Patients With Hypernatremia and Sepsis',
        journal: 'Am J Med Sci. 2016 Jun;351(6):601-5',
        year: '2016',
        link: 'https://pubmed.ncbi.nlm.nih.gov/27238923/'
      },
      {
        id: 6,
        authors: 'N N Lam, N T N Minh',
        title: 'Risk factors and outcome of Hypernatremia amongst severe adult burn patients',
        journal: 'Ann Burns Fire Disasters. 2018 Dec 31;31(4):271-277',
        year: '2018',
        link: 'https://pubmed.ncbi.nlm.nih.gov/30983927/'
      },
      {
        id: 7,
        authors: 'Renata S Mendes, Márcio Soares, Carla Valente et al.',
        title: 'Predialysis hypernatremia is a prognostic marker in acute kidney injury in need of renal replacement therapy',
        journal: 'J Crit Care. 2015 Oct;30(5):982-7',
        year: '2015',
        link: 'https://pubmed.ncbi.nlm.nih.gov/26205186/'
      }
    ]
  }
}; 