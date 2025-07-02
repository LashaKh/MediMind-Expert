import { DiseaseData } from '../types';

export const hypokalemiaData: DiseaseData = {
  id: 'hypokalemia',
  title: 'Hypokalemia',
  lastUpdated: 'May 21, 2025',
  category: 'Electrolyte Disorders',
  specialty: 'cardiology',
  content: {
    background: {
      overview: {
        definition: 'Hypokalemia refers to the presence of serum potassium levels < 3.6 mmol/L.',
        pathophysiology: 'Potassium depletion occurs due to inadequate dietary intake, increased renal excretion (e.g., due to diuretic therapy), or increased gastrointestinal losses in the context of diarrhea.',
        epidemiology: 'Hypokalemia is the most common electrolyte disorder encountered in clinical practice.',
        diseaseCourse: 'Manifestations of hypokalemia include muscle weakness, ileus, and cardiac arrhythmias. Typical electrocardiographic changes include flat or inverted T waves, ST-segment depression, and prominent U waves.',
        prognosis: 'Severe untreated hypokalemia can lead to rhabdomyolysis and malignant cardiac arrhythmias, such as VT and VF.'
      }
    },
    clinicalFindings: {
      symptoms: [
        'Diarrhea',
        'Muscle cramps',
        'Muscle weakness',
        'Poorly localized abdominal pain',
        'Sweating',
        'Vomiting'
      ],
      pastMedicalHistory: [
        'Alcohol consumption',
        'CKD',
        'Cushing\'s syndrome',
        'Medications',
        'Primary aldosteronism'
      ]
    },
    guidelines: {
      keySources: 'The following summarized guidelines for the evaluation and management of hypokalemia are prepared by our editorial team based on guidelines from the American Academy of Family Physicians (AAFP 2023,2015) and the National Council on Potassium in Clinical Practice (NCPCP 2000).',
      sections: [
        {
          title: 'Diagnostic Investigations',
          id: 'diagnostic-investigations',
          content: [
            {
              statement: 'Use serum potassium as the most convenient laboratory test to establish the diagnosis of hypokalemia, recognizing that it is not always an accurate indicator of total body potassium.',
              level: 'E',
              source: 'NCPCP 2000 guidelines'
            },
            {
              statement: 'Consider measurement of 24-hour urinary potassium excretion as a more appropriate indicator of total body potassium in patients who are at high risk of complications from hypokalemia, such as those with HF.',
              level: 'E',
              source: 'NCPCP 2000 guidelines'
            }
          ]
        },
        {
          title: 'Medical Management',
          id: 'medical-management',
          content: [],
          subsections: [
            {
              title: 'General Principles',
              id: 'general-principles',
              content: [
                {
                  statement: 'Initiate potassium replacement in individuals who are subject to nausea, vomiting, diarrhea, bulimia, or diuretic/laxative abuse.',
                  level: 'E',
                  source: 'NCPCP 2000 guidelines'
                },
                {
                  statement: 'Administer potassium supplements PO in a moderate dosage over a period of days to weeks to achieve full repletion of potassium.',
                  level: 'E',
                  source: 'NCPCP 2000 guidelines'
                }
              ]
            },
            {
              title: 'Oral Potassium Replacement',
              id: 'oral-potassium-replacement',
              content: [
                {
                  statement: 'Consider using a dosage of 20 mmol/day of potassium in oral form for the prevention of hypokalemia.',
                  level: 'E',
                  source: 'NCPCP 2000 guidelines'
                },
                {
                  statement: 'Consider using a dosage of 40 to 100 mmol/day of potassium in oral form for the treatment of hypokalemia.',
                  level: 'E',
                  source: 'NCPCP 2000 guidelines'
                },
                {
                  statement: 'Reserve IV potassium for patients with severe hypokalemia, ECG changes, physical signs or symptoms of hypokalemia, or inability to tolerate oral potassium supplementation.',
                  level: 'B',
                  source: 'AAFP 2023 guidelines'
                }
              ]
            },
            {
              title: 'Optimization of Patient Adherence',
              id: 'optimization-patient-adherence',
              content: [
                {
                  statement: 'Use the simplest regimen possible for potassium supplementation, in order to optimize long-term compliance.',
                  level: 'E',
                  source: 'NCPCP 2000 guidelines'
                },
                {
                  statement: 'Consider using compliance-enhancing regimens, such as microencapsulated potassium, in order to increase patient adherence to potassium supplementation.',
                  level: 'E',
                  source: 'NCPCP 2000 guidelines'
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
              statement: 'Consider ECG monitoring in patients with severe hypokalemia (serum potassium < 2.5 mmol/L).',
              level: 'C',
              source: 'AAFP 2015 guidelines'
            }
          ]
        },
        {
          title: 'Nonpharmacologic Interventions',
          id: 'nonpharmacologic-interventions',
          content: [
            {
              statement: 'Initiate potassium replacement therapy in combination with dietary consumption of potassium-rich foods.',
              level: 'E',
              source: 'NCPCP 2000 guidelines'
            }
          ]
        },
        {
          title: 'Specific Circumstances',
          id: 'specific-circumstances',
          content: [],
          subsections: [
            {
              title: 'Patients with Diabetes Mellitus',
              id: 'patients-diabetes-mellitus',
              content: [
                {
                  statement: 'Monitor potassium levels closely in patients with diabetes mellitus, and initiate potassium replacement therapy when appropriate.',
                  level: 'E',
                  source: 'NCPCP 2000 guidelines'
                }
              ]
            },
            {
              title: 'Patients with Hypertension',
              id: 'patients-hypertension',
              content: [
                {
                  statement: 'Initiate potassium supplementation in patients with drug-related hypokalemia (such as therapy with a non-potassium-sparing diuretic).',
                  level: 'E',
                  source: 'NCPCP 2000 guidelines'
                },
                {
                  statement: 'Maintain serum potassium levels ≥ 4.0 mmol/L in patients with asymptomatic hypertension. Dietary consumption of potassium-rich foods and potassium supplementation should be instituted as necessary.',
                  level: 'E',
                  source: 'NCPCP 2000 guidelines'
                }
              ]
            },
            {
              title: 'Patients with Heart Disease',
              id: 'patients-heart-disease',
              content: [
                {
                  statement: 'Maintain serum potassium levels ≥ 4.0 mmol/L in patients with a history of congestive HF or myocardial infarction.',
                  level: 'B',
                  source: 'AAFP 2015 guidelines'
                },
                {
                  statement: 'Consider potassium supplementation routinely in patients with HF, even if the initial potassium determination appears to be normal.',
                  level: 'E',
                  source: 'NCPCP 2000 guidelines'
                }
              ]
            },
            {
              title: 'Patients with Cardiac Arrhythmias',
              id: 'patients-cardiac-arrhythmias',
              content: [
                {
                  statement: 'Maintain serum potassium levels ≥ 4.0 mmol/L in patients with cardiac arrhythmias.',
                  level: 'E',
                  source: 'NCPCP 2000 guidelines'
                }
              ]
            },
            {
              title: 'Patients at Risk of Stroke',
              id: 'patients-risk-stroke',
              content: [
                {
                  statement: 'Consider maintaining optimal potassium levels in patients at high risk for stroke, including those with a history of atherosclerotic or hemorrhagic cerebral vascular accidents.',
                  level: 'E',
                  source: 'NCPCP 2000 guidelines'
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
        authors: 'J N Cohn, P R Kowey, P K Whelton et al',
        title: 'New Guidelines for Potassium Replacement in Clinical Practice',
        journal: 'Arch Intern Med. 2000 Sep 11;160(16):2429-36',
        year: '2000',
        link: 'https://pubmed.ncbi.nlm.nih.gov/10979053'
      },
      {
        id: 3,
        authors: 'Michael J Kim, Christina Valerio, Glynnis K Knobloch',
        title: 'Potassium Disorders: Hypokalemia and Hyperkalemia',
        journal: 'Am Fam Physician. 2023 Jan;107(1):59-70',
        year: '2023',
        link: 'https://pubmed.ncbi.nlm.nih.gov/36689973/'
      },
      {
        id: 4,
        authors: 'Ashish R Panchal, Jason A Bartos, José G Cabañas et al',
        title: 'Part 3: Adult Basic and Advanced Life Support: 2020 American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care',
        journal: 'Circulation. 2020 Oct 20;142(16_suppl_2):S366-S468',
        year: '2020',
        link: 'https://pubmed.ncbi.nlm.nih.gov/33081529/'
      },
      {
        id: 5,
        authors: 'No authors listed',
        title: 'Guideline: Potassium Intake for Adults and Children',
        journal: 'World Health Organization. 2012',
        year: '2012',
        link: 'https://pubmed.ncbi.nlm.nih.gov/23617019/'
      }
    ]
  }
}; 