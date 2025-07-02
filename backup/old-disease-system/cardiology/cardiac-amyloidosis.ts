import { DiseaseData } from '../types';

export const cardiacAmyloidosisData: DiseaseData = {
  id: 'cardiac-amyloidosis',
  title: 'Cardiac Amyloidosis',
  lastUpdated: 'May 21, 2025',
  category: 'Cardiomyopathy',
  specialty: 'cardiology',
  content: {
    background: {
      overview: {
        definition: 'Cardiac amyloidosis refers to infiltration of the heart muscle by amyloid proteins, resulting in cardiomyopathy.',
        pathophysiology: 'Cardiac amyloidosis is caused by extracellular accumulation of misfolded protein fragments (immunoglobulin light-chain and transthyretin protein) in the heart muscle.',
        epidemiology: 'Unadjusted 5-year mortality rates are estimated at 65% in patients with AL cardiac amyloidosis and 44% in patients with ATTR cardiac amyloidosis.',
        diseaseCourse: 'Clinical manifestations are related to the development of restrictive cardiomyopathy and include angina, myocardial infarction, and HF. An increased risk of thromboembolic complications is also present.',
        prognosis: 'Unadjusted 5-year mortality rates are estimated at 65% in patients with AL cardiac amyloidosis and 44% in patients with ATTR cardiac amyloidosis.'
      }
    },
    clinicalFindings: {
      patientDemographics: [
        'Male sex'
      ],
      pastMedicalHistory: [
        'Cardiomyopathy',
        'Genetic abnormality',
        'Inflammation',
        'Restrictive cardiomyopathy'
      ],
      symptoms: [
        'Ankle swelling',
        'Dyspnea',
        'Excessive urination at night',
        'Fatigue',
        'Leg swelling',
        'Lightheadedness',
        'Palpitations',
        'Swelling'
      ],
      likelihoodRatios: [
        {
          finding: 'Presence of cardiac amyloidosis findings',
          lrPlus: '17.6',
          value: ''
        },
        {
          finding: 'Presence of low electrical voltages and LV septum thickness > 1.98 cm',
          lrPlus: '7.89',
          value: ''
        },
        {
          finding: 'Presence of speckled myocardium',
          lrPlus: '6.5',
          value: ''
        },
        {
          finding: 'Presence of low voltages',
          lrPlus: '4.31',
          value: ''
        }
      ]
    },
    studies: [
      {
        title: 'HELIOS-B',
        year: '2025',
        description: 'In adult patients with transthyretin amyloidosis with cardiomyopathy, vutrisiran was superior to placebo with respect to death from any cause and recurrent cardiovascular events.',
        authors: 'Marianna Fontana et al.',
        journal: 'N Engl J Med. 2025 Jan 2.'
      },
      {
        title: 'ATTRibute-CM',
        year: '2024',
        description: 'In patients with transthyretin amyloid cardiomyopathy, acoramidis was superior to placebo with respect to favorable pairwise comparisons in a hierarchical outcome of death from any cause, cardiovascular-related hospitalization, change from baseline in the NT-proBNP level, and change from baseline in the 6-minute walk distance at month 30.',
        authors: 'Julian D Gillmore et al.',
        journal: 'N Engl J Med. 2024 Jan 11.'
      },
      {
        title: 'ATTR-ACT',
        year: '2018',
        description: 'In patients with transthyretin amyloid cardiomyopathy, tafamidis was superior to placebo with respect to a all-cause death.',
        authors: 'Maurer MS et al.',
        journal: 'N Engl J Med. 2018 Sep 13.'
      }
    ],
    guidelines: {
      keySources: 'The following summarized guidelines for the evaluation and management of cardiac amyloidosis are prepared by our editorial team based on guidelines from the European Society of Cardiology (ESC 2023,2021), the Heart Failure Society of America (HFSA/AHA/ACC 2022), the Canadian Heart Failure Society (CHFS/CCS 2020), the American Heart Association (AHA/HRS/ACC 2019), the Amyloidosis Research Consortium (ARC 2019), and the Heart Rhythm Society (HRS 2019).',
      sections: [
        {
          title: 'Screening and Diagnosis',
          id: 'screening-diagnosis',
          content: [
            {
              statement: 'Obtain diagnostic workup for cardiac amyloidosis in patients presenting with signs and symptoms of HF having ≥ 1 of the following features: unexplained increased LV wall thickness, > 60 years of age with low-flow low-gradient aortic stenosis and LVEF > 40%, unexplained peripheral sensorimotor neuropathy and/or dysautonomia, history of bilateral carpal tunnel syndrome, established light chain or transthyretin amyloidosis',
              level: 'B',
              source: 'CCS/CHFS 2020'
            },
            {
              statement: 'Suspect transthyretin amyloid cardiomyopathy in older persons who have been hospitalized for HF, elevated troponin levels, or levels of NT-proBNP that are out of proportion to the clinical context',
              level: 'E',
              source: 'ARC 2019'
            },
            {
              statement: 'Consider evaluation of myocardial uptake on bone scintigraphy in patients with HF, unexplained neuropathy, a family history of amyloidosis, or unexplained increased LV wall thickness',
              level: 'E',
              source: 'ARC 2019'
            }
          ]
        },
        {
          title: 'Classification and Risk Stratification',
          id: 'classification-risk-stratification',
          content: [
            {
              statement: 'Use a validated serum biomarker-based staging system, including troponin and/or BNP/NT-proBNP, to risk-stratify patients with cardiac amyloidosis',
              level: 'A',
              source: 'CCS/CHFS 2020'
            }
          ]
        },
        {
          title: 'Diagnostic Investigations',
          id: 'diagnostic-investigations',
          content: [
            {
              statement: 'Screen for serum and urine monoclonal light chains with serum and urine immunofixation electrophoresis and sFLC in patients with a clinical suspicion for cardiac amyloidosis',
              level: 'B',
              source: 'ACC/AHA/HFSA 2022'
            },
            {
              statement: 'Obtain serum and urine protein electrophoresis with immunofixation and sFLC in all patients with suspected cardiac amyloidosis to evaluate for possible light chain amyloidosis or other plasma cell dyscrasia',
              level: 'B',
              source: 'CCS/CHFS 2020'
            },
            {
              statement: 'Obtain testing for monoclonal protein followed by scintigraphy or biopsy as part of the evaluation of patients with suspected cardiac amyloidosis',
              level: 'E',
              source: 'ARC 2019'
            },
            {
              statement: 'Obtain routine investigations for the evaluation of HF including 12-lead ECG, troponin, and BNP/NT-proBNP in patients presenting with suspected cardiac amyloidosis',
              level: 'B',
              source: 'CCS/CHFS 2020'
            },
            {
              statement: 'Obtain echocardiography with longitudinal LV strain measurement or cardiac MRI with late gadolinium enhancement and T1 mapping in all patients with suspected cardiac amyloidosis to evaluate for characteristic features of cardiac amyloidosis or alternative causes of HF',
              level: 'B',
              source: 'CCS/CHFS 2020'
            },
            {
              statement: 'Obtain bone scintigraphy to confirm the presence of transthyretin cardiac amyloidosis in patients with high clinical suspicion for cardiac amyloidosis without evidence of serum or urine monoclonal light chains',
              level: 'B',
              source: 'ACC/AHA/HFSA 2022'
            },
            {
              statement: 'Obtain nuclear scintigraphy with bone-seeking radiotracer, if available, to evaluate for cardiac involvement when transthyretin cardiac amyloidosis is suspected after exclusion of light chain amyloidosis',
              level: 'B',
              source: 'CCS/CHFS 2020'
            },
            {
              statement: 'Obtain noninvasive evaluation with bone scintigraphy in patients with negative screening for the presence of a monoclonal protein',
              level: 'E',
              source: 'ARC 2019'
            },
            {
              statement: 'Consider obtaining radionuclide scintigraphy alone, without myocardial biopsy, to diagnose ATTR cardiomyopathy in patients with no detected monoclonal protein and if a diagnosis of AL cardiac amyloidosis is excluded',
              level: 'E',
              source: 'ARC 2019'
            },
            {
              statement: 'Obtain genetic testing with transthyretin gene sequencing to differentiate hereditary variant from wild-type transthyretin cardiac amyloidosis in patients diagnosed with transthyretin cardiac amyloidosis',
              level: 'B',
              source: 'ACC/AHA/HFSA 2022'
            },
            {
              statement: 'Obtain genetic testing to differentiate hereditary transthyretin from wild-type transthyretin amyloidosis in patients with a diagnosis of transthyretin cardiac amyloidosis',
              level: 'B',
              source: 'CCS/CHFS 2020'
            },
            {
              statement: 'Perform TTR genotyping in patients in whom a diagnosis of ATTR amyloidosis is made on biopsy',
              level: 'E',
              source: 'ARC 2019'
            }
          ]
        },
        {
          title: 'Diagnostic Procedures',
          id: 'diagnostic-procedures',
          content: [
            {
              statement: 'Perform endomyocardial biopsy for diagnosis and subtyping with mass spectrometry or immunohistochemistry/immunofluorescence, if available, when the existing diagnostic workup for cardiac amyloidosis is equivocal or discordant with clinical suspicion',
              level: 'B',
              source: 'CCS/CHFS 2020'
            },
            {
              statement: 'Perform an endomyocardial biopsy to definitively diagnose ATTR cardiomyopathy in patients with monoclonal gammopathy of unknown significance',
              level: 'E',
              source: 'ARC 2019'
            },
            {
              statement: 'Consider performing endomyocardial biopsy in patients with negative screening for the presence of a monoclonal protein, if bone scintigraphy is negative or indeterminate, but suspicion of cardiac amyloidosis is high',
              level: 'E',
              source: 'ARC 2019'
            },
            {
              statement: 'Perform a tissue biopsy from a clinically affected organ (endomyocardial biopsy if the heart is clinically affected), abdominal fat, or bone marrow biopsy if a monoclonal protein is detected, depending on availability and expertise at the clinic',
              level: 'E',
              source: 'ARC 2019'
            },
            {
              statement: 'Perform biopsy of an involved organ in patients with negative fat pad biopsy',
              level: 'E',
              source: 'ARC 2019'
            }
          ]
        },
        {
          title: 'Medical Management',
          id: 'medical-management',
          content: [
            {
              statement: 'Provide comprehensive interdisciplinary management in patients with established cardiac amyloidosis',
              level: 'B',
              source: 'CCS/CHFS 2020'
            },
            {
              statement: 'Initiate transthyretin tetramer stabilizer therapy (tafamidis) to reduce cardiovascular morbidity and mortality in selected patients with wild-type or variant transthyretin cardiac amyloidosis and NYHA class I-III HF symptoms',
              level: 'B',
              source: 'ACC/AHA/HFSA 2022'
            },
            {
              statement: 'Recognize that tafamidis provides low economic value (> $180,000 per quality-adjusted life year; as of 2020 list prices) in patients with HF with wild-type or variant transthyretin cardiac amyloidosis',
              level: 'B',
              source: 'ACC/AHA/HFSA 2022'
            },
            {
              statement: 'Initiate tafamidis to reduce symptoms, cardiovascular hospitalization and mortality in patients with genetic testing proven hereditary transthyretin cardiac amyloidosis and NYHA class I or II symptoms',
              level: 'B',
              source: 'ESC 2021'
            },
            {
              statement: 'Initiate tafamidis to reduce symptoms, cardiovascular hospitalization and mortality in patients with wild-type transthyretin cardiac amyloidosis and NYHA class I or II symptoms',
              level: 'B',
              source: 'ESC 2021'
            },
            {
              statement: 'Initiate tafamidis, if available, in patients with transthyretin cardiac amyloidosis and NYHA class I-III symptoms',
              level: 'A',
              source: 'CCS/CHFS 2020'
            },
            {
              statement: 'Initiate transthyretin RNA silencing agent (patisiran or inotersen) in patients with hereditary transthyretin amyloidosis with ambulatory polyneuropathy',
              level: 'A',
              source: 'CCS/CHFS 2020'
            },
            {
              statement: 'Initiate oral anticoagulation, unless contraindicated, to reduce the risk of stroke and thromboembolic events in all patients with cardiac amyloidosis and AF or atrial flutter',
              level: 'B',
              source: 'ESC 2023'
            },
            {
              statement: 'Consider initiating anticoagulation to reduce the risk of stroke regardless of the CHA₂DS₂-VASc score in patients with cardiac amyloidosis and AF',
              level: 'C',
              source: 'ACC/AHA/HFSA 2022'
            },
            {
              statement: 'Initiate therapeutic anticoagulation in the absence of contraindications in patients with cardiac amyloidosis and AF/atrial flutter regardless of the calculated risk of stroke or systemic embolism',
              level: 'B',
              source: 'CCS/CHFS 2020'
            },
            {
              statement: 'Consider initiating digoxin with caution due to the high risk of toxicity in patients with cardiac amyloidosis',
              level: 'C',
              source: 'HRS 2019'
            }
          ]
        },
        {
          title: 'Therapeutic Procedures',
          id: 'therapeutic-procedures',
          content: [
            {
              statement: 'Place an ICD in patients with cardiac amyloidosis survived a cardiac arrest, if the expected meaningful survival is > 1 year',
              level: 'B',
              source: 'HRS 2019'
            },
            {
              statement: 'Consider placing a prophylactic ICD in patients with AL-type cardiac amyloidosis with nonsustained ventricular arrhythmias, if the expected meaningful survival is > 1 year',
              level: 'C',
              source: 'HRS 2019'
            },
            {
              statement: 'Consider permanent pacing with additional defibrillator capability if needed and meaningful survival of > 1 year is expected in patients with cardiac amyloidosis and second-degree Mobitz type II AV block, high-grade AV block, or third-degree AV block',
              level: 'C',
              source: 'ACC/AHA/HRS 2019'
            },
            {
              statement: 'Implant a permanent pacemaker in both symptomatic and asymptomatic patients with cardiac amyloidosis and second-degree AV block type II, high-grade AV block or third-degree AV block',
              level: 'B',
              source: 'HRS 2019'
            },
            {
              statement: 'Consider performing cardiac ablation in patients with cardiac amyloidosis and symptomatic atrial arrhythmias',
              level: 'C',
              source: 'HRS 2019'
            }
          ]
        },
        {
          title: 'Surgical Interventions',
          id: 'surgical-interventions',
          content: [
            {
              statement: 'Consider offering heart transplantation in selected patients with advanced HF due to cardiac amyloidosis if significant extracardiac manifestations are absent and the risk of disease progression is considered low and/or amenable to disease-modifying therapy',
              level: 'B',
              source: 'CCS/CHFS 2020'
            }
          ]
        },
        {
          title: 'Follow-up and Surveillance',
          id: 'follow-up-surveillance',
          content: [
            {
              statement: 'Refer patients with a monoclonal protein to hematology',
              level: 'E',
              source: 'ARC 2019'
            },
            {
              statement: 'Consider obtaining contrast-enhanced cardiac MRI in the serial follow-up and for the assessment of therapeutic response in patients with cardiac amyloidosis',
              level: 'C',
              source: 'ESC 2023'
            },
            {
              statement: 'Obtain serial imaging with echocardiography or cardiac MRI in addition to measuring BNP/NT-proBNP levels to monitor cardiac disease progression and/or response to therapy in patients with cardiac amyloidosis',
              level: 'B',
              source: 'CCS/CHFS 2020'
            }
          ]
        }
      ]
    },
    references: [
      {
        id: 1,
        authors: 'Omar K. Siddiqi, Frederick L. Ruberg',
        title: 'Cardiac Amyloidosis: An Update on Pathophysiology, Diagnosis, and Treatment',
        journal: 'Trends Cardiovasc Med. 2018 Jan; 28(1): 10–21',
        year: '2018',
        link: 'https://pubmed.ncbi.nlm.nih.gov/28739313/'
      },
      {
        id: 2,
        authors: 'F Escher, M Senoner, J Doerler et al.',
        title: 'When and how do patients with cardiac amyloidosis die?',
        journal: 'Clin Res Cardiol. 2020 Jan;109(1):78-88',
        year: '2020',
        link: 'https://pubmed.ncbi.nlm.nih.gov/31134330'
      },
      {
        id: 3,
        authors: 'Nowell M Fine, Margot K Davis, Kim Anderson et al.',
        title: 'Canadian Cardiovascular Society / Canadian Heart Failure Society Joint Position Statement on the Evaluation and Management of Patients With Cardiac Amyloidosis',
        journal: 'Can J Cardiol. 2020 Mar;36(3):322-334',
        year: '2020',
        link: 'https://pubmed.ncbi.nlm.nih.gov/32145862/'
      },
      {
        id: 4,
        authors: 'Paul A Heidenreich, Biykem Bozkurt, David Aguilar et al.',
        title: '2022 AHA / ACC / HFSA Guideline for the Management of Heart Failure: A Report of the American College of Cardiology / American Heart Association Joint Committee on Clinical Practice Guidelines',
        journal: 'Circulation. 2022 May 3;145(18):e895-e1032',
        year: '2022',
        link: 'https://pubmed.ncbi.nlm.nih.gov/35363499/'
      },
      {
        id: 5,
        authors: 'Fred M Kusumoto, Mark H Schoenfeld, Coletta Barrett et al.',
        title: '2018 ACC / AHA / HRS Guideline on the Evaluation and Management of Patients With Bradycardia and Cardiac Conduction Delay: A Report of the American College of Cardiology / American Heart Association Task Force on Clinical Practice Guidelines and the Heart Rhythm Society',
        journal: 'Circulation. 2019 Aug 20;140(8):e382-e482',
        year: '2019',
        link: 'https://pubmed.ncbi.nlm.nih.gov/30586771/'
      },
      {
        id: 6,
        authors: 'Maurer MS, Bokhari S, Damy T et al.',
        title: 'Expert Consensus Recommendations for the Suspicion and Diagnosis of Transthyretin Cardiac Amyloidosis',
        journal: 'Circ Heart Fail. 2019 Sep;12(9):e006075',
        year: '2019',
        link: 'https://pubmed.ncbi.nlm.nih.gov/31480867'
      },
      {
        id: 7,
        authors: 'Jeffrey A Towbin, William J McKenna, Dominic J Abrams et al.',
        title: '2019 HRS expert consensus statement on evaluation, risk stratification, and management of arrhythmogenic cardiomyopathy',
        journal: 'Heart Rhythm. 2019 Nov;16(11):e301-e372',
        year: '2019',
        link: 'https://pubmed.ncbi.nlm.nih.gov/31078652/'
      },
      {
        id: 8,
        authors: 'Theresa A McDonagh, Marco Metra, Marianna Adamo et al.',
        title: '2021 ESC Guidelines for the diagnosis and treatment of acute and chronic heart failure',
        journal: 'Eur Heart J. 2021 Sep 21;42(36):3599-3726',
        year: '2021',
        link: 'https://pubmed.ncbi.nlm.nih.gov/34447992/'
      },
      {
        id: 9,
        authors: 'Elena Arbelo, Alexandros Protonotarios, Juan R Gimeno et al.',
        title: '2023 ESC Guidelines for the management of cardiomyopathies',
        journal: 'Eur Heart J. 2023 Oct 1;44(37):3503-3626',
        year: '2023',
        link: 'https://pubmed.ncbi.nlm.nih.gov/37622657/'
      },
      {
        id: 10,
        authors: 'Rahman JE, Helou EF, Gelzer-Bell R et al.',
        title: 'Noninvasive diagnosis of biopsy-proven cardiac amyloidosis',
        journal: 'J Am Coll Cardiol. 2004 Feb 4;43(3):410-5',
        year: '2004',
        link: 'https://pubmed.ncbi.nlm.nih.gov/15013123'
      },
      {
        id: 11,
        authors: 'Austin BA, Tang WH, Rodriguez ER et al.',
        title: 'Delayed hyper-enhancement magnetic resonance imaging provides incremental diagnostic and prognostic utility in suspected cardiac amyloidosis',
        journal: 'JACC Cardiovasc Imaging. 2009 Dec;2(12):1369-77',
        year: '2009',
        link: 'https://pubmed.ncbi.nlm.nih.gov/20083070'
      },
      {
        id: 12,
        authors: 'Usman A. Tahir, Gheorghe Doros, John S. Kim et al.',
        title: 'Predictors of Mortality in Light Chain Cardiac Amyloidosis with Heart Failure',
        journal: 'Sci Rep. 2019; 9: 8552',
        year: '2019',
        link: 'https://pubmed.ncbi.nlm.nih.gov/31189919/'
      },
      {
        id: 13,
        authors: 'Expert Panel on Cardiac Imaging, Prabhakar Rajiah, Jacobo Kirsch et al.',
        title: 'ACR Appropriateness Criteria® Nonischemic Myocardial Disease with Clinical Manifestations (Ischemic Cardiomyopathy Already Excluded)',
        journal: 'J Am Coll Radiol. 2021 May;18(5S):S83-S105',
        year: '2021',
        link: 'https://pubmed.ncbi.nlm.nih.gov/33651982/'
      },
      {
        id: 14,
        authors: 'Katja Zeppenfeld, Jacob Tfelt-Hansen, Marta de Riva et al.',
        title: '2022 ESC Guidelines for the management of patients with ventricular arrhythmias and the prevention of sudden cardiac death',
        journal: 'Eur Heart J. 2022 Oct 21;43(40):3997-4126',
        year: '2022',
        link: 'https://pubmed.ncbi.nlm.nih.gov/36017572/'
      }
    ]
  }
}; 