import { DiseaseData } from '../types';

export const hypernatremiaDiseaseData: DiseaseData = {
  id: 'hypernatremia',
  title: 'Hypernatremia',
  lastUpdated: 'January 19, 2025',
  category: 'Endocrine/Metabolic',
  specialty: 'cardiology',
  content: {
    background: {
      overview: {
        definition: 'Hypernatremia is a disorder of elevated serum sodium concentration that can lead to serious neurological complications if not properly managed. The condition is classified based on severity (mild: 146-149 mmol/L, moderate: 150-159 mmol/L, severe: >160 mmol/L) and requires careful correction to avoid complications.',
        pathophysiology: 'Hypernatremia results from loss of free water relative to sodium, increased sodium intake, or decreased water intake. This leads to cellular dehydration and neurological symptoms.',
        epidemiology: 'Hypernatremia is more common in elderly patients, those with diabetes insipidus, and critically ill patients. It has significant morbidity and mortality if not properly managed.',
        diseaseCourse: 'Symptoms develop gradually with chronic hypernatremia but can be severe with acute onset. Rapid correction can lead to cerebral edema.',
        prognosis: 'Generally good with appropriate correction rate and management of underlying causes. Rapid correction can lead to serious complications.'
      }
    },
    guidelines: {
      keySources: 'The following summarized guidelines for the evaluation and management of hypernatremia are prepared by our editorial team based on guidelines from the American Academy of Family Physicians (AAFP 2023) and the Society for Endocrinology (SE 2018).',
      sections: [
        {
          title: 'Classification and Risk Stratification',
          id: 'classification',
          content: [
            {
              statement: 'As per SE 2018 guidelines, classify hypernatremia according to the serum sodium level: Mild (146-149 mmol/L), Moderate (150-159 mmol/L), Severe (> 160 mmol/L)',
              level: 'E',
              source: 'SE 2018'
            }
          ]
        },
        {
          title: 'Medical Management',
          id: 'management',
          content: [
            {
              statement: 'As per AAFP 2023 guidelines, consider correcting hypernatremia in adult patients at a rate of 12 mEq/L over 24 hours. Avoid increasing serum sodium again for therapeutic purposes if the recommended correction rate is exceeded.',
              level: 'C',
              source: 'AAFP 2023'
            }
          ]
        },
        {
          title: 'Specific Circumstances - Central Diabetes Insipidus',
          id: 'central-diabetes-insipidus',
          content: [
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
        }
      ]
    },
    clinicalFindings: {
      symptoms: [
        'Increased thirst',
        'Irritability',
        'Polyuria',
        'Seizure',
        'Urinary frequency'
      ],
      pastMedicalHistory: [
        'Head trauma'
      ],
      patientDemographics: [
        '↓ water intake'
      ]
    },
    studies: [
      {
        title: 'Related Calculator: Sodium Correction for Hyperglycemia',
        year: '2024',
        description: 'Corrects sodium levels in the presence of hyperglycemia. Available at Pathway.md calculators.',
        authors: 'Pathway.md',
        journal: 'Pathway.md Calculators'
      },
      {
        title: 'Related Calculator: Free Water Deficit in Hypernatremia',
        year: '2024', 
        description: 'Calculates free water deficit for hypernatremia correction. Available at Pathway.md calculators.',
        authors: 'Pathway.md',
        journal: 'Pathway.md Calculators'
      }
    ],
    references: [
      {
        id: 1,
        authors: 'Nathaniel E Miller, David Rushlow, Stephen K Stacey',
        title: 'Diagnosis and Management of Sodium Disorders: Hyponatremia and Hypernatremia',
        journal: 'Am Fam Physician',
        year: '2023',
        link: 'https://pubmed.ncbi.nlm.nih.gov/37983699/'
      },
      {
        id: 2,
        authors: 'S E Baldeweg, S Ball, A Brooke et al',
        title: 'SOCIETY FOR ENDOCRINOLOGY CLINICAL GUIDANCE: Inpatient management of cranial diabetes insipidus',
        journal: 'Endocr Connect',
        year: '2018',
        link: 'https://pubmed.ncbi.nlm.nih.gov/29930026/'
      },
      {
        id: 3,
        authors: 'Saif A Muhsin, David B Mount',
        title: 'Diagnosis and treatment of hypernatremia',
        journal: 'Best Pract Res Clin Endocrinol Metab',
        year: '2016',
        link: 'https://pubmed.ncbi.nlm.nih.gov/27156758/'
      },
      {
        id: 4,
        authors: 'Lubaba Shahrin, Mohammad Jobayer Chisti, Sayeeda Huq et al',
        title: 'Clinical Manifestations of Hyponatremia and Hypernatremia in Under-Five Diarrheal Children in a Diarrhea Hospital',
        journal: 'J Trop Pediatr',
        year: '2016',
        link: 'https://pubmed.ncbi.nlm.nih.gov/26851435/'
      },
      {
        id: 5,
        authors: 'Hai-Bin Ni, Xing-Xing Hu, Xiao-Fei Huang et al',
        title: 'Risk Factors and Outcomes in Patients With Hypernatremia and Sepsis',
        journal: 'Am J Med Sci',
        year: '2016',
        link: 'https://pubmed.ncbi.nlm.nih.gov/27238923/'
      },
      {
        id: 6,
        authors: 'N N Lam, N T N Minh',
        title: 'Risk factors and outcome of Hypernatremia amongst severe adult burn patients',
        journal: 'Ann Burns Fire Disasters',
        year: '2018',
        link: 'https://pubmed.ncbi.nlm.nih.gov/30983927/'
      },
      {
        id: 7,
        authors: 'Renata S Mendes, Márcio Soares, Carla Valente et al',
        title: 'Predialysis hypernatremia is a prognostic marker in acute kidney injury in need of renal replacement therapy',
        journal: 'J Crit Care',
        year: '2015',
        link: 'https://pubmed.ncbi.nlm.nih.gov/26205186/'
      }
         ]
   }
}; 