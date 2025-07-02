import { DiseaseData } from '../types';

export const bluntCardiacInjuryData: DiseaseData = {
  id: 'blunt-cardiac-injury',
  title: 'Blunt Cardiac Injury',
  content: {
    background: {
      overview: {
        definition: 'BCI refers to an injury sustained due to blunt trauma to the heart, the spectrum of which ranges from a minor bruise to specific post-contusion cardiac conditions such as free-wall rupture.',
        pathophysiology: 'BCI is mostly caused by motor vehicle accidents, falls from heights, direct blow to the chest wall by airbag deployment, crushing incidents, contact sports injuries, acts of violence, or blast trauma.',
        epidemiology: 'BCI is associated with an overall mortality rate of 13.9%.',
        diseaseCourse: 'Clinical manifestations include arrhythmias, myocardial contusion, wall motion abnormalities, myocardial wall rupture, and valve damage. The spectrum of injuries includes commotio cordis, cardiac rupture, coronary artery dissection, indirect cardiac injury, cardiac herniation, pericardial effusion and tamponade, traumatic cardiac arrest, and blunt aortic injury.',
        prognosis: 'BCI is associated with an overall mortality rate of 13.9%.'
      }
    },
    clinicalFindings: {
      symptoms: [
        'Chest pain'
      ],
      vitalSigns: [
        'Hypotension'
      ],
      pastMedicalHistory: [
        'DVT',
        'Pericardial tamponade',
        'Traumatic injury'
      ]
    },
    studies: [
      {
        title: '2025 • TRAUMOX2',
        year: '2025',
        description: 'In adult patients with blunt or penetrating trauma, restrictive oxygen strategy was not superior to liberal oxygen strategy with respect to the rate of death and/or major respiratory complications within 30 days.',
        authors: 'Tobias Arleth et al.',
        journal: 'JAMA. 2025 Feb 11.'
      },
      {
        title: '2024 • VIDLARECO',
        year: '2024',
        description: 'In intubated critically ill patients, videolaryngoscope insertion technique was superior to conventional insertion technique with respect to successful TEE probe insertion on the first attempt.',
        authors: 'Manuel Taboada et al.',
        journal: 'Anaesth Crit Care Pain Med. 2024 Apr.'
      }
    ],
    guidelines: {
      keySources: 'The following summarized guidelines for the evaluation and management of blunt cardiac injury are prepared by our editorial team based on guidelines from the American College of Emergency Physicians (ACEP 2024), the Eastern Association for the Surgery of Trauma (EAST/WTA/PTS 2023), the American College of Radiology (ACR 2020), and the Eastern Association for the Surgery of Trauma (EAST 2015,2012).',
      sections: [
        {
          title: 'Screening and Diagnosis',
          id: 'screening-and-diagnosis',
          content: [
            {
              statement: 'As per EAST 2012 guidelines, avoid implementing cardiac monitoring on the sole basis of a sternal fracture, in patients in whom ECG and troponin I levels are normal.',
              level: 'D',
              source: 'EAST 2012'
            }
          ]
        },
        {
          title: 'Classification and Risk Stratification',
          id: 'classification-and-risk-stratification',
          content: [
            {
              statement: 'Use clinical judgment and hospital-specific protocols to decide between selective CT and whole-body CT in hemodynamically stable adult patients with blunt trauma.',
              level: 'B',
              source: 'ACEP 2024'
            },
            {
              statement: 'Take into account age (> 65 years) for triage of older adult patients with trauma, as they have increased morbidity and mortality compared with similarly injured adults.',
              level: 'B',
              source: 'ACEP 2024'
            },
            {
              statement: 'Admit patients for continuous ECG monitoring if the admission ECG reveals a new abnormality, such as arrhythmias, ST changes, ischemia, or heart block.',
              level: 'B',
              source: 'EAST 2012'
            }
          ]
        },
        {
          title: 'Diagnostic Investigations',
          id: 'diagnostic-investigations',
          content: [
            {
              statement: 'Obtain an admission ECG in all patients in whom BCI is suspected.',
              level: 'A',
              source: 'EAST 2012'
            },
            {
              statement: 'Admit patients for continuous ECG monitoring if the admission ECG reveals a new abnormality such as arrhythmia, ST changes, ischemia, heart block, and unexplained ST changes. Compare with a previous ECG to determine need for monitoring in patients with preexisting abnormalities.',
              level: 'B',
              source: 'EAST 2012'
            },
            {
              statement: 'Measure troponin I routinely for patients with suspected BCI; if elevated, admit patients to a monitored setting and follow troponin I serially, although the optimal timing is unknown.',
              level: 'B',
              source: 'EAST 2012'
            },
            {
              statement: 'Avoid obtaining CK with isoenzyme analysis, because it is not beneficial in predicting which patients have or will have complications related to BCI.',
              level: 'D',
              source: 'EAST 2012'
            },
            {
              statement: 'Obtain a TTE in patients (either hemodynamically stable or unstable) with suspected cardiac injury following blunt chest trauma.',
              level: 'B',
              source: 'ACR 2020'
            },
            {
              statement: 'Obtain a TTE in patients with hemodynamic instability or persistent new arrhythmia. Obtain a TEE if an optimal TTE cannot be obtained.',
              level: 'B',
              source: 'EAST 2012'
            },
            {
              statement: 'Obtain cardiac CT or MRI to help differentiate acute myocardial infarction from BCI in trauma patients with abnormal ECG, cardiac enzymes, and/or abnormal echocardiography.',
              level: 'B',
              source: 'EAST 2012'
            },
            {
              statement: 'Obtain a CXR and chest CT with IV contrast or chest CTA as complementary first-line imaging modalities in hemodynamically stable patients with suspected cardiac injury following blunt chest trauma.',
              level: 'B',
              source: 'ACR 2020'
            },
            {
              statement: 'Obtain a CXR, chest CT with IV contrast, chest CTA, and cardiac CT with IV contrast as complementary imaging modalities in hemodynamically unstable patients with suspected cardiac injury following blunt chest trauma.',
              level: 'B',
              source: 'ACR 2020'
            },
            {
              statement: 'Avoid routinely obtaining nuclear medicine studies in patients with BCI, as they provide little additional information when compared with echocardiography.',
              level: 'D',
              source: 'EAST 2012'
            }
          ]
        },
        {
          title: 'Therapeutic Procedures',
          id: 'therapeutic-procedures',
          content: [
            {
              statement: 'Use a FFP:platelet:packed RBCs ratio from 1:1:1 to 1:1:1.5 in adult patients presenting to the emergency department with blunt trauma to reduce 24-hour mortality without increasing morbidity.',
              level: 'B',
              source: 'ACEP 2024'
            }
          ]
        },
        {
          title: 'Surgical Interventions',
          id: 'surgical-interventions',
          content: [
            {
              statement: 'Consider performing emergency department thoracotomy in patients presenting pulseless to the emergency department after blunt injury with signs of life.',
              level: 'C',
              source: 'EAST 2015'
            },
            {
              statement: 'Avoid performing emergency department thoracotomy in patients presenting pulseless to the emergency department after blunt injury without signs of life.',
              level: 'D',
              source: 'EAST 2015'
            },
            {
              statement: 'Consider performing emergency department thoracotomy following emergency adjuncts, including ultrasound and thoracostomies, to determine injury location and/or reversible causes of shock in pediatric patients presenting pulseless to the emergency department after blunt injury with signs of life.',
              level: 'C',
              source: 'EAST/PTS/WTA 2023'
            },
            {
              statement: 'Do not perform emergency department thoracotomy in pediatric patients presenting pulseless to the emergency department after blunt injury without signs of life.',
              level: 'D',
              source: 'EAST/PTS/WTA 2023'
            },
            {
              statement: 'Do not perform resuscitative endovascular balloon aortic occlusion over resuscitative thoracotomy routinely in adult patients with blunt trauma in cardiac arrest or periarrest.',
              level: 'D',
              source: 'ACEP 2024'
            }
          ]
        },
        {
          title: 'Specific Circumstances',
          id: 'specific-circumstances',
          content: [
            {
              statement: 'Consider proceeding with surgery in elderly patients with known cardiac disease, unstable patients, and those with an abnormal admission ECG, provided that they are appropriately monitored. Consider placing a pulmonary artery catheter in these situations.',
              level: 'C',
              source: 'EAST 2012'
            }
          ]
        }
      ]
    },
    references: [
      {
        id: 1,
        authors: 'Rayyan Fadel, Ayman El-Menyar, Samir ElKafrawy et al.',
        title: 'Traumatic blunt cardiac injuries: An updated narrative review.',
        journal: 'Int J Crit Illn Inj Sci. Jul-Sep 2019;9(3):113-119.',
        year: '2019',
        link: 'https://pubmed.ncbi.nlm.nih.gov/31620349'
      },
      {
        id: 2,
        authors: 'Marc Hanschen, Karl-Georg Kanz, Chlodwig Kirchhoff et al.',
        title: 'Blunt Cardiac Injury in the Severely Injured - A Retrospective Multicentre Study.',
        journal: 'PLoS One. 2015 Jul 2;10(7):e0131362.',
        year: '2015',
        link: 'https://pubmed.ncbi.nlm.nih.gov/26136126'
      },
      {
        id: 3,
        authors: 'Leigh Selesner, Brian Yorkgitis, Matthew Martin et al.',
        title: 'Emergency department thoracotomy in children: A Pediatric Trauma Society, Western Trauma Association, and Eastern Association for the Surgery of Trauma systematic review and practice management guideline.',
        journal: 'J Trauma Acute Care Surg. 2023 Sep 1;95(3):432-441.',
        year: '2023',
        link: 'https://pubmed.ncbi.nlm.nih.gov/37608453/'
      },
      {
        id: 4,
        authors: 'Clancy K, Velopulos C, Bilaniuk JW et al.',
        title: 'Screening for blunt cardiac injury: an Eastern Association for the Surgery of Trauma practice management guideline.',
        journal: 'J Trauma Acute Care Surg. 2012 Nov;73(5 Suppl 4):S301-6.',
        year: '2012',
        link: 'https://pubmed.ncbi.nlm.nih.gov/23114485/'
      },
      {
        id: 5,
        authors: 'American College of Emergency Physicians Clinical Policies Subcommittee (Writing Committee) on Blunt Trauma, Charles J Gerardo, Michelle Blanda et al.',
        title: 'Clinical Policy: Critical Issues in the Evaluation of Adult Patients Presenting to the Emergency Department With Acute Blunt Trauma.',
        journal: 'Ann Emerg Med. 2024 Oct;84(4):e25-e55.',
        year: '2024',
        link: 'https://pubmed.ncbi.nlm.nih.gov/39306386/'
      },
      {
        id: 6,
        authors: 'Mark J Seamon, Elliott R Haut, Kyle Van Arendonk et al.',
        title: 'An evidence-based approach to patient selection for emergency department thoracotomy: A practice management guideline from the Eastern Association for the Surgery of Trauma.',
        journal: 'J Trauma Acute Care Surg. 2015 Jul;79(1):159-73.',
        year: '2015',
        link: 'https://pubmed.ncbi.nlm.nih.gov/26091330/'
      },
      {
        id: 7,
        authors: 'Expert Panels on Cardiac Imaging and Thoracic Imaging, Jadranka Stojanovska, Lynne M Hurwitz Koweek et al.',
        title: 'ACR Appropriateness Criteria® Blunt Chest Trauma-Suspected Cardiac Injury.',
        journal: 'J Am Coll Radiol. 2020 Nov;17(11S):S380-S390.',
        year: '2020',
        link: 'https://pubmed.ncbi.nlm.nih.gov/33153551/'
      },
      {
        id: 8,
        authors: 'Alexander Levitov, Heidi L Frankel, Michael Blaivas et al.',
        title: 'Guidelines for the Appropriate Use of Bedside General and Cardiac Ultrasonography in the Evaluation of Critically Ill Patients-Part II: Cardiac Ultrasonography.',
        journal: 'Crit Care Med. 2016 Jun;44(6):1206-27.',
        year: '2016',
        link: 'https://pubmed.ncbi.nlm.nih.gov/27182849/'
      },
      {
        id: 9,
        authors: 'Heidi L Frankel, Andrew W Kirkpatrick, Mahmoud Elbarbary et al.',
        title: 'Guidelines for the Appropriate Use of Bedside General and Cardiac Ultrasonography in the Evaluation of Critically Ill Patients-Part I: General Ultrasonography.',
        journal: 'Crit Care Med. 2015 Nov;43(11):2479-502.',
        year: '2015',
        link: 'https://pubmed.ncbi.nlm.nih.gov/26468699/'
      }
    ]
  }
}; 