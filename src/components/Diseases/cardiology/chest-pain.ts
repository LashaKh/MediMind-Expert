import { DiseaseData } from '../types';

export const chestPainData: DiseaseData = {
  id: 'chest-pain',
  title: 'Chest Pain',
  lastUpdated: 'May 1, 2025',
  category: 'Emergency/Acute Care',
  specialty: 'cardiology',
  content: {
    background: {
      overview: {
        definition: 'Chest pain is a common presenting symptom requiring systematic evaluation to identify potentially life-threatening conditions including acute coronary syndrome, aortic dissection, pulmonary embolism, and other cardiac and non-cardiac causes.',
        pathophysiology: 'Chest pain can arise from multiple sources including cardiac (ischemic and non-ischemic), pulmonary, gastrointestinal, musculoskeletal, or other systemic causes. Proper risk stratification and diagnostic approach are essential for appropriate management.',
        epidemiology: 'Chest pain is one of the most common presentations in emergency departments and primary care settings worldwide.',
        diseaseCourse: 'The course depends on the underlying etiology, ranging from benign conditions to life-threatening emergencies requiring immediate intervention.',
        prognosis: 'Prognosis varies significantly based on the underlying cause, with early identification and appropriate management being crucial for optimal outcomes.'
      }
    },
    clinicalFindings: {
      patientDemographics: [
        'Common in all age groups, but risk factors for serious causes increase with age',
        'Gender differences exist in presentation, particularly for ACS where females may present with atypical symptoms',
        'Elderly patients (> 75 years) may present with accompanying symptoms such as shortness of breath, syncope, or acute delirium'
      ],
      pastMedicalHistory: [
        'History of coronary artery disease or previous myocardial infarction',
        'Known valvular heart disease',
        'Previous coronary revascularization (PCI or CABG)',
        'Risk factors for atherosclerotic disease (diabetes, hypertension, hyperlipidemia, smoking)',
        'Family history of premature coronary artery disease',
        'History of cocaine or methamphetamine use',
        'Previous aortic pathology or connective tissue disorders',
        'History of pulmonary embolism or venous thromboembolism',
        'Sickle cell disease'
      ],
      symptoms: [
        'Chest pain characteristics (quality, location, radiation, duration)',
        'Associated symptoms in females with ACS may differ from typical presentations',
        'Accompanying symptoms in elderly: shortness of breath, syncope, acute delirium, unexplained falls',
        'Pleuritic chest pain characteristics',
        'Pain reproducible on palpation in costochondritis',
        'Symptoms suggestive of aortic dissection',
        'Signs and symptoms of pulmonary embolism',
        'Gastrointestinal symptoms in non-cardiac causes'
      ]
    },
    guidelines: {
      keySources: 'The following summarized guidelines for the evaluation and management of chest pain are prepared by our editorial team based on guidelines from the American Academy of Family Physicians (AAFP 2024,2021,2017) and the Society of Cardiovascular Computed Tomography (SCCT/SCMR/AHA/SAEM/ASE/ACC/ACCP 2021).',
      sections: [
        {
          title: 'Classification and Risk Stratification',
          id: 'classification-risk-stratification',
          content: [
            {
              statement: 'Use an appropriate clinical prediction tool for risk stratification in patients with acute chest discomfort (such as the HEART pathway) or stable chest discomfort (such as the CAD Consortium 2 calculator) to determine the need for further testing.',
              level: 'B',
              source: 'AAFP 2024 guidelines'
            }
          ]
        },
        {
          title: 'Diagnostic Investigations',
          id: 'diagnostic-investigations',
          content: [
            {
              statement: 'Comprehensive diagnostic evaluation including history, physical examination, ECG, and biomarkers as indicated.',
              level: 'B',
              source: 'ACC/ACCP/AHA/SCMR 2021 guidelines',
              subsections: [
                {
                  title: 'History and Physical Examination',
                  id: 'history-physical',
                  content: [
                    {
                      statement: 'Elicit a focused history including characteristics and duration of symptoms relative to presentation as well as associated features and assess cardiovascular risk factors in patients presenting with chest pain.',
                      level: 'B',
                      source: 'ACC/ACCP/AHA/SCMR 2021'
                    },
                    {
                      statement: 'Obtain an initial assessment of chest pain to triage patients effectively on the basis of the likelihood that symptoms may be attributable to myocardial ischemia.',
                      level: 'B',
                      source: 'ACC/ACCP/AHA/SCMR 2021'
                    },
                    {
                      statement: 'Do not describe chest pain as atypical, because it is not helpful in determining the cause and can be misinterpreted as benign in nature. Describe chest pain as cardiac, possibly cardiac or noncardiac, as these terms are more specific to the potential underlying diagnosis.',
                      level: 'D',
                      source: 'ACC/ACCP/AHA/SCMR 2021'
                    },
                    {
                      statement: 'Consider assessing for cocaine and methamphetamine use in patients presenting with acute chest pain.',
                      level: 'C',
                      source: 'ACC/ACCP/AHA/SCMR 2021'
                    },
                    {
                      statement: 'Recognize that females presenting with chest pain are at risk for underdiagnosis, therefore, always take into consideration potential cardiac causes.',
                      level: 'B',
                      source: 'ACC/ACCP/AHA/SCMR 2021'
                    },
                    {
                      statement: 'Elicit a history in females presenting with chest pain emphasizing accompanying symptoms that are more common in female patients with ACS.',
                      level: 'B',
                      source: 'ACC/ACCP/AHA/SCMR 2021'
                    },
                    {
                      statement: 'Suspect ACS in > 75 years old patients presenting with chest pain and accompanying symptoms, such as shortness of breath, syncope or acute delirium, or when an unexplained fall has occurred.',
                      level: 'B',
                      source: 'ACC/ACCP/AHA/SCMR 2021'
                    },
                    {
                      statement: 'Perform a focused cardiovascular examination to aid in the diagnosis of ACS or other potentially serious causes of chest pain (aortic dissection, PE or esophageal rupture) and to identify complications in patients presenting with chest pain.',
                      level: 'B',
                      source: 'ACC/ACCP/AHA/SCMR 2021'
                    }
                  ]
                },
                {
                  title: 'ECG',
                  id: 'ecg',
                  content: [
                    {
                      statement: 'Obtain an ECG in patients seen in the office setting with stable chest pain unless a non-cardiac cause is evident. Refer patients to the emergency department for an ECG if it is unavailable in the office setting.',
                      level: 'B',
                      source: 'ACC/ACCP/AHA/SCMR 2021'
                    },
                    {
                      statement: 'Obtain an ECG and review for ST-segment-elevation myocardial infarction within 10 minutes of arrival in all patients presenting with acute chest pain, regardless of the setting.',
                      level: 'B',
                      source: 'ACC/ACCP/AHA/SCMR 2021'
                    },
                    {
                      statement: 'Obtain serial ECGs to detect potential ischemic changes in patients with chest pain with an initial nondiagnostic ECG, especially when clinical suspicion of ACS is high, symptoms are persistent or the clinical condition deteriorates.',
                      level: 'B',
                      source: 'ACC/ACCP/AHA/SCMR 2021'
                    },
                    {
                      statement: 'Consider using supplemental ECG leads V7-V9 to rule out posterior myocardial infarction in patients with chest pain and intermediate-to-high clinical suspicion for ACS if the initial ECG is nondiagnostic.',
                      level: 'C',
                      source: 'ACC/ACCP/AHA/SCMR 2021'
                    }
                  ]
                },
                {
                  title: 'Troponin Levels',
                  id: 'troponin-levels',
                  content: [
                    {
                      statement: 'Obtain cardiac troponin as soon as possible after presentation in all patients presenting to the emergency department with acute chest pain and suspected ACS.',
                      level: 'B',
                      source: 'ACC/ACCP/AHA/SCMR 2021'
                    },
                    {
                      statement: 'Consider obtaining serial cardiac troponin I or T levels to identify abnormal values and a rising or falling pattern indicative of acute myocardial injury in patients presenting with acute chest pain.',
                      level: 'B',
                      source: 'ACC/ACCP/AHA/SCMR 2021'
                    },
                    {
                      statement: 'Obtain high-sensitivity cardiac troponin as the preferred biomarker because it enables more rapid detection or exclusion of myocardial injury and increases diagnostic accuracy in patients presenting with acute chest pain.',
                      level: 'B',
                      source: 'ACC/ACCP/AHA/SCMR 2021'
                    },
                    {
                      statement: 'Ensure that clinicians are familiar with the analytical performance and the 99th percentile upper reference limit defining myocardial injury for the cardiac troponin assay used at their institution.',
                      level: 'B',
                      source: 'ACC/ACCP/AHA/SCMR 2021'
                    },
                    {
                      statement: 'Recognize that with the availability of cardiac troponin, CK myocardial isoenzyme and myoglobin are not useful for diagnosis of acute myocardial injury.',
                      level: 'B',
                      source: 'ACC/ACCP/AHA/SCMR 2021'
                    }
                  ]
                },
                {
                  title: 'Additional Diagnostic Tests',
                  id: 'additional-diagnostic-tests',
                  content: [
                    {
                      statement: 'Obtain TTE in patients with acute chest pain with suspected other potentially life-threatening non-ischemic cardiac conditions (such as aortic pathology, pericardial effusion, endocarditis).',
                      level: 'B',
                      source: 'ACC/ACCP/AHA/SCMR 2021'
                    },
                    {
                      statement: 'Consider obtaining CXR to evaluate for other potential cardiac, pulmonary, and thoracic causes of symptoms in patients presenting with acute chest pain.',
                      level: 'B',
                      source: 'ACC/ACCP/AHA/SCMR 2021'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: 'Evaluation for ACS - General Principles',
          id: 'acs-general-principles',
          content: [
            {
              statement: 'Treat patients with chest pain and initial ECG consistent with ACS according to STEMI and non-ST-elevation ACS guidelines.',
              level: 'B',
              source: 'ACC/ACCP/AHA/SCMR 2021'
            },
            {
              statement: 'Categorize patients presenting with acute chest pain and suspected ACS into low-, intermediate- and high-risk strata using clinical decision pathways to facilitate disposition and subsequent diagnostic evaluation.',
              level: 'B',
              source: 'ACC/ACCP/AHA/SCMR 2021'
            },
            {
              statement: 'Use the following time intervals after the initial troponin sample collection (time zero) for repeat measurements for the evaluation of patients presenting with acute chest pain and suspected ACS, if serial troponins are indicated to exclude myocardial injury: 1-3 hours for high-sensitivity troponin, 3-6 hours for conventional troponin assays.',
              level: 'B',
              source: 'ACC/ACCP/AHA/SCMR 2021'
            },
            {
              statement: 'Implement a clinical decision pathway (by institutions) including a protocol for troponin sampling based on their particular assay to standardize the detection and differentiation of myocardial injury in patients presenting with acute chest pain and suspected ACS.',
              level: 'B',
              source: 'ACC/ACCP/AHA/SCMR 2021'
            },
            {
              statement: 'Take into account previous testing when available and incorporate into clinical decision pathways in patients with acute chest pain and suspected ACS.',
              level: 'B',
              source: 'ACC/ACCP/AHA/SCMR 2021'
            },
            {
              statement: 'Consider excluding myocardial injury in patients with acute chest pain, a normal ECG and symptoms suggestive of ACS began at least 3 hours before emergency department arrival, and having a single high-sensitivity cardiac troponin concentration below the limit of detection on initial measurement (time zero).',
              level: 'C',
              source: 'ACC/ACCP/AHA/SCMR 2021'
            },
            {
              statement: 'Incorporate patient decision aids to improve understanding and effectively facilitate risk communication in patients with acute chest pain and suspected ACS deemed low risk by a clinical decision pathway.',
              level: 'B',
              source: 'ACC/ACCP/AHA/SCMR 2021'
            },
            {
              statement: 'Ensure shared decision-making between the clinician and patient regarding the need for admission, observation, discharge or further evaluation in an outpatient setting for improving patient understanding and reducing low-value testing in patients with acute chest pain and suspected ACS deemed intermediate risk by a clinical decision pathway.',
              level: 'B',
              source: 'ACC/ACCP/AHA/SCMR 2021'
            }
          ]
        },
        {
          title: 'Evaluation for ACS - Low Risk',
          id: 'acs-low-risk',
          content: [
            {
              statement: 'View patients with acute chest pain and a 30-day risk of death or major adverse cardiovascular events < 1% as being at low risk.',
              level: 'B',
              source: 'ACC/ACCP/AHA/SCMR 2021'
            },
            {
              statement: 'Consider discharging patients with acute chest pain and suspected ACS deemed low risk (< 1% 30-day risk of death or major adverse cardiovascular events) home without admission or urgent cardiac testing.',
              level: 'C',
              source: 'ACC/ACCP/AHA/SCMR 2021'
            }
          ]
        },
        {
          title: 'Evaluation for ACS - Intermediate Risk',
          id: 'acs-intermediate-risk',
          content: [
            {
              statement: 'Obtain transthoracic echocardiography to establish baseline ventricular and valvular function, evaluate for wall motion abnormalities, and to assess for pericardial effusion in intermediate-risk patients with acute chest pain.',
              level: 'B',
              source: 'ACC/ACCP/AHA/SCMR 2021'
            },
            {
              statement: 'Consider managing intermediate-risk patients with acute chest pain in an observation unit to shorten the length of stay and lower costs related to inpatient admission.',
              level: 'B',
              source: 'ACC/ACCP/AHA/SCMR 2021'
            },
            {
              statement: 'Consider obtaining coronary CTA for exclusion of atherosclerotic plaque and obstructive coronary artery disease in intermediate-risk patients with acute chest pain and no known coronary artery disease eligible for diagnostic testing after a negative or inconclusive evaluation for ACS.',
              level: 'B',
              source: 'ACC/ACCP/AHA/SCMR 2021'
            },
            {
              statement: 'Obtain invasive coronary angiography in intermediate-risk patients with acute chest pain, moderate-severe ischemia on current or prior (≤ 1 year) stress testing, and no known coronary artery disease established by prior anatomic testing.',
              level: 'B',
              source: 'ACC/ACCP/AHA/SCMR 2021'
            },
            {
              statement: 'Consider obtaining coronary CTA for diagnosing obstructive coronary artery disease in intermediate-risk patients with acute chest pain with evidence of previous mildly abnormal stress test results (≤ 1 year).',
              level: 'C',
              source: 'ACC/ACCP/AHA/SCMR 2021'
            },
            {
              statement: 'Consider obtaining either exercise ECG, stress echocardiography, stress PET/SPECT myocardial perfusion imaging, or stress cardiac MRI for the diagnosis of myocardial ischemia in intermediate-risk patients with acute chest pain and no known coronary artery disease eligible for cardiac testing.',
              level: 'B',
              source: 'ACC/ACCP/AHA/SCMR 2021'
            },
            {
              statement: 'Consider obtaining FFR with CT for the diagnosis of vessel-specific ischemia and to guide decision-making regarding the use of coronary revascularization in intermediate-risk patients with acute chest pain and no known coronary artery disease with coronary artery stenosis of 40-90% in a proximal or middle coronary artery on coronary CTA.',
              level: 'C',
              source: 'ACC/ACCP/AHA/SCMR 2021'
            },
            {
              statement: 'Consider obtaining coronary CTA for excluding the presence of atherosclerotic plaque and obstructive coronary artery disease in intermediate-risk patients with acute chest pain and no known coronary artery disease, as well as an inconclusive prior stress test.',
              level: 'C',
              source: 'ACC/ACCP/AHA/SCMR 2021'
            },
            {
              statement: 'Consider obtaining stress imaging with echocardiography, PET/SPECT myocardial perfusion imaging, or cardiac MRI for the diagnosis of myocardial ischemia in intermediate-risk patients with acute chest pain and no known coronary artery disease with an inconclusive coronary CTA.',
              level: 'C',
              source: 'ACC/ACCP/AHA/SCMR 2021'
            },
            {
              statement: 'Optimize guideline-directed medical therapy before obtaining additional cardiac testing in intermediate-risk patients with acute chest pain and known coronary artery disease presenting with new onset or worsening symptoms.',
              level: 'A',
              source: 'ACC/ACCP/AHA/SCMR 2021'
            },
            {
              statement: 'Obtain invasive coronary angiography in intermediate-risk patients with acute chest pain having a worsening frequency of symptoms with significant left main, proximal left anterior descending stenosis or multivessel coronary artery disease on prior anatomic testing or history of prior coronary revascularization.',
              level: 'A',
              source: 'ACC/ACCP/AHA/SCMR 2021'
            },
            {
              statement: 'Consider obtaining coronary CTA to determine the progression of atherosclerotic plaque and obstructive coronary artery disease in intermediate-risk patients with acute chest pain and known nonobstructive coronary artery disease.',
              level: 'C',
              source: 'ACC/ACCP/AHA/SCMR 2021'
            },
            {
              statement: 'Consider obtaining FFR with CT for diagnosis of vessel-specific ischemia and to guide decision-making regarding the use of coronary revascularization in intermediate-risk patients with acute chest pain and coronary artery stenosis of 40-90% in a proximal or middle segment on coronary CTA.',
              level: 'C',
              source: 'ACC/ACCP/AHA/SCMR 2021'
            },
            {
              statement: 'Consider obtaining stress imaging with PET/SPECT myocardial perfusion imaging, cardiac MRI or stress echocardiography in intermediate-risk patients with acute chest pain and known coronary artery disease having new onset or worsening symptoms.',
              level: 'C',
              source: 'ACC/ACCP/AHA/SCMR 2021'
            }
          ]
        },
        {
          title: 'Evaluation for ACS - High Risk',
          id: 'acs-high-risk',
          content: [
            {
              statement: 'Refer patients presenting with acute chest pain and high suspicion of ACS to the emergency department and use predictive risk scores there to aid in the prognosis, diagnosis, and management. Obtain evaluation including 12-lead ECG within 10 minutes of presentation, history and physical examination, and high-sensitivity cardiac troponin measurement at initial presentation and 3 hours after symptom onset.',
              level: 'B',
              source: 'AAFP 2024 guidelines'
            },
            {
              statement: 'View patients with acute chest pain and suspected ACS having any of the following as being at high risk for short-term major adverse cardiovascular events: new ischemic changes on ECG, troponin-confirmed acute myocardial injury, new-onset LV systolic dysfunction (ejection fraction < 40%), newly diagnosed moderate-to-severe ischemia on stress testing, hemodynamic instability, high clinical decision pathway risk score.',
              level: 'B',
              source: 'ACC/ACCP/AHA/SCMR 2021'
            },
            {
              statement: 'Obtain invasive coronary angiography in high-risk patients with acute chest pain and suspected ACS.',
              level: 'B',
              source: 'ACC/ACCP/AHA/SCMR 2021'
            },
            {
              statement: 'Consider obtaining cardiac MRI or echocardiography for establishing alternative diagnoses in high-risk patients with acute chest pain and positive troponin, if obstructive coronary artery disease has been excluded by coronary CTA or invasive coronary angiography.',
              level: 'C',
              source: 'ACC/ACCP/AHA/SCMR 2021'
            }
          ]
        },
        {
          title: 'Evaluation for Non-Ischemic Cardiac Causes',
          id: 'non-ischemic-cardiac',
          content: [
            {
              statement: 'Systematic evaluation for non-ischemic cardiac causes including acute aortic syndrome, myopericarditis, valvular heart disease, and pulmonary embolism.',
              level: 'B',
              source: 'ACC/ACCP/AHA/SCMR 2021',
              subsections: [
                {
                  title: 'Acute Aortic Syndrome',
                  id: 'acute-aortic-syndrome',
                  content: [
                    {
                      statement: 'Obtain CTA of the chest, abdomen, and pelvis for the diagnosis and treatment planning in patients with acute chest pain, if there is a clinical concern for aortic dissection.',
                      level: 'B',
                      source: 'ACC/ACCP/AHA/SCMR 2021'
                    },
                    {
                      statement: 'Obtain TEE or cardiac MRI, if CT is contraindicated or unavailable.',
                      level: 'B',
                      source: 'ACC/ACCP/AHA/SCMR 2021'
                    }
                  ]
                },
                {
                  title: 'Myopericarditis',
                  id: 'myopericarditis',
                  content: [
                    {
                      statement: 'Consider obtaining cardiac MRI with gadolinium contrast to distinguish myopericarditis from other causes, including myocardial infarction and nonobstructive coronary arteries, in patients with acute chest pain and myocardial injury having nonobstructive coronary arteries on anatomic testing.',
                      level: 'B',
                      source: 'ACC/ACCP/AHA/SCMR 2021'
                    },
                    {
                      statement: 'Consider obtaining cardiac MRI if there is diagnostic uncertainty or to determine the presence and extent of myocardial and pericardial inflammation and fibrosis in patients with acute chest pain with suspected acute myopericarditis.',
                      level: 'B',
                      source: 'ACC/ACCP/AHA/SCMR 2021'
                    },
                    {
                      statement: 'Consider obtaining TTE to determine the presence of ventricular wall motion abnormalities, pericardial effusion, valvular abnormalities or restrictive physiology in patients with acute chest pain and suspected myopericarditis.',
                      level: 'B',
                      source: 'ACC/ACCP/AHA/SCMR 2021'
                    },
                    {
                      statement: 'Consider obtaining non-contrast or contrast cardiac CT to determine the presence and degree of pericardial thickening in patients with acute chest pain with suspected acute pericarditis.',
                      level: 'C',
                      source: 'ACC/ACCP/AHA/SCMR 2021'
                    }
                  ]
                },
                {
                  title: 'Valvular Heart Disease',
                  id: 'valvular-heart-disease',
                  content: [
                    {
                      statement: 'Consider obtaining TTE for determining the presence, severity and cause of valvular heart disease in patients presenting with acute chest pain with suspected or known history of valvular heart disease.',
                      level: 'B',
                      source: 'ACC/ACCP/AHA/SCMR 2021'
                    },
                    {
                      statement: 'Consider obtaining TTE (with 3D imaging if available) for determining the severity and cause of valvular heart disease in patients presenting with acute chest pain with suspected or known valvular heart disease, if TTE diagnostic quality is inadequate.',
                      level: 'B',
                      source: 'ACC/ACCP/AHA/SCMR 2021'
                    }
                  ]
                },
                {
                  title: 'Pulmonary Embolism',
                  id: 'pulmonary-embolism',
                  content: [
                    {
                      statement: 'Obtain CTA using a PE protocol in stable patients with acute chest pain with high clinical suspicion for PE.',
                      level: 'B',
                      source: 'ACC/ACCP/AHA/SCMR 2021'
                    },
                    {
                      statement: 'Decide on further testing in patients with acute chest pain and possible PE based on pretest probability.',
                      level: 'B',
                      source: 'ACC/ACCP/AHA/SCMR 2021'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: 'Evaluation for Non-Cardiac Causes',
          id: 'non-cardiac-causes',
          content: [
            {
              statement: 'Systematic evaluation for non-cardiac causes when cardiac causes have been excluded or symptoms persist.',
              level: 'B',
              source: 'ACC/ACCP/AHA/SCMR 2021',
              subsections: [
                {
                  title: 'General Principles',
                  id: 'non-cardiac-general',
                  content: [
                    {
                      statement: 'Evaluate for non-cardiac causes in patients with acute chest pain with persistent or recurring symptoms despite a negative stress test or anatomic cardiac evaluation, or a low-risk designation by a clinical decision pathway.',
                      level: 'B',
                      source: 'ACC/ACCP/AHA/SCMR 2021'
                    },
                    {
                      statement: 'Consider obtaining evaluation for gastrointestinal causes in patients with recurrent acute chest pain without evidence of a cardiac or pulmonary cause.',
                      level: 'C',
                      source: 'ACC/ACCP/AHA/SCMR 2021'
                    },
                    {
                      statement: 'Consider referring patients with recurrent, similar presentations for acute chest pain with no evidence of a physiological cause on prior diagnostic evaluation, including a negative workup for myocardial ischemia, to a cognitive behavioral therapist.',
                      level: 'C',
                      source: 'ACC/ACCP/AHA/SCMR 2021'
                    },
                    {
                      statement: 'Exclude ACS in patients with sickle cell disease reporting acute chest pain.',
                      level: 'B',
                      source: 'ACC/ACCP/AHA/SCMR 2021'
                    }
                  ]
                },
                {
                  title: 'Pleuritic Chest Pain',
                  id: 'pleuritic-chest-pain',
                  content: [
                    {
                      statement: 'Elicit a thorough history and perform a physical examination to diagnose or exclude life-threatening causes of pleuritic chest pain.',
                      level: 'B',
                      source: 'AAFP 2017 guidelines'
                    },
                    {
                      statement: 'Suspect PE in all patients with pleuritic chest pain, as it is the most common life-threatening cause of this symptom. Use a validated clinical decision rule to guide the use of additional tests, such as D-dimer and imaging.',
                      level: 'B',
                      source: 'AAFP 2017 guidelines'
                    },
                    {
                      statement: 'Obtain a CXR to evaluate for abnormalities, including pneumonia, in patients with unexplained pleuritic chest pain.',
                      level: 'B',
                      source: 'AAFP 2017 guidelines'
                    },
                    {
                      statement: 'Offer NSAIDs to control pleuritic pain.',
                      level: 'B',
                      source: 'AAFP 2017 guidelines'
                    }
                  ]
                },
                {
                  title: 'Costochondritis',
                  id: 'costochondritis',
                  content: [
                    {
                      statement: 'Elicit history and perform a physical examination reproducing pain on direct palpation of the parasternal region and/or with provocation maneuvers, such as the crowing rooster or crossed-chest adduction, for the diagnosis of costochondritis.',
                      level: 'B',
                      source: 'AAFP 2021 guidelines'
                    },
                    {
                      statement: 'Use validated clinical prediction rules to assist (but not to replace clinical judgment) in distinguishing chest pain caused by coronary artery disease in the primary care and emergency department setting.',
                      level: 'A',
                      source: 'AAFP 2021 guidelines'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: 'Evaluation of Stable Chest Pain',
          id: 'stable-chest-pain',
          content: [
            {
              statement: 'Risk-stratified approach to stable chest pain evaluation based on pretest probability.',
              level: 'B',
              source: 'ACC/ACCP/AHA/SCMR 2021',
              subsections: [
                {
                  title: 'Low Risk',
                  id: 'stable-low-risk',
                  content: [
                    {
                      statement: 'Consider obtaining tiered testing starting with exercise stress testing with ECG followed by stress testing with echocardiography as a cost-effective approach in selected low-risk patients with stable chest discomfort.',
                      level: 'C',
                      source: 'AAFP 2024 guidelines'
                    },
                    {
                      statement: 'Consider using a model to estimate pretest probability of obstructive coronary artery disease in patients with stable chest pain and no known coronary artery disease presenting to the outpatient clinic, to identify patients at low risk for obstructive coronary artery disease and favorable prognosis in whom additional diagnostic testing can be deferred.',
                      level: 'B',
                      source: 'ACC/ACCP/AHA/SCMR 2021'
                    },
                    {
                      statement: 'Consider obtaining CAC testing as first-line testing for excluding calcified plaque and identifying patients with a low likelihood of obstructive coronary artery disease in patients with stable chest pain and no known coronary artery disease categorized as low risk.',
                      level: 'C',
                      source: 'ACC/ACCP/AHA/SCMR 2021'
                    },
                    {
                      statement: 'Consider obtaining exercise testing without imaging as first-line testing for excluding myocardial ischemia and determining functional capacity in case of an interpretable ECG in patients with stable chest pain and no known coronary artery disease categorized as low risk.',
                      level: 'C',
                      source: 'ACC/ACCP/AHA/SCMR 2021'
                    }
                  ]
                },
                {
                  title: 'Intermediate-High Risk',
                  id: 'stable-intermediate-high-risk',
                  content: [
                    {
                      statement: 'Obtain stress testing with echocardiography, myocardial perfusion imaging, or cardiac MRI, or exercise stress testing with ECG in patients with an intermediate risk of coronary artery disease and stable chest discomfort.',
                      level: 'B',
                      source: 'AAFP 2024 guidelines'
                    },
                    {
                      statement: 'Consider obtaining coronary CTA for diagnosis of coronary artery disease, for risk stratification, and guiding treatment decisions in intermediate-to-high-risk patients with stable chest pain and no known coronary artery disease.',
                      level: 'B',
                      source: 'ACC/ACCP/AHA/SCMR 2021'
                    },
                    {
                      statement: 'Consider obtaining stress imaging (stress echocardiography, PET/SPECT myocardial perfusion imaging, or cardiac MRI) for diagnosis of myocardial ischemia and for estimating the risk of major adverse cardiovascular events in intermediate-to-high-risk patients with stable chest pain and no known coronary artery disease.',
                      level: 'B',
                      source: 'ACC/ACCP/AHA/SCMR 2021'
                    },
                    {
                      statement: 'Consider preferring PET over SPECT, if available, to improve diagnostic accuracy and decrease the rate of nondiagnostic test results in intermediate-to-high-risk patients with stable chest pain and no known coronary artery disease if rest/stress nuclear myocardial perfusion imaging is selected.',
                      level: 'C',
                      source: 'ACC/ACCP/AHA/SCMR 2021'
                    },
                    {
                      statement: 'Consider obtaining an exercise ECG in intermediate-to-high-risk patients with stable chest pain and no known coronary artery disease with an interpretable ECG and the ability to achieve maximal levels of exercise (≥ 5 metabolic equivalents).',
                      level: 'C',
                      source: 'ACC/ACCP/AHA/SCMR 2021'
                    },
                    {
                      statement: 'Consider obtaining attenuation correction or prone imaging to decrease the rate of false-positive findings in intermediate-to-high-risk patients with stable chest pain selected for stress myocardial perfusion imaging using SPECT.',
                      level: 'C',
                      source: 'ACC/ACCP/AHA/SCMR 2021'
                    },
                    {
                      statement: 'Consider obtaining a TTE for assessing resting LV systolic and diastolic ventricular function and detection of myocardial, valvular, and pericardial abnormalities in intermediate-to-high-risk patients with stable chest pain having Q waves, symptoms or signs suggestive of HF, complex ventricular arrhythmias, or a heart murmur with unclear diagnosis.',
                      level: 'B',
                      source: 'ACC/ACCP/AHA/SCMR 2021'
                    },
                    {
                      statement: 'Consider obtaining FFR with CT for diagnosis of vessel-specific ischemia and to guide decision-making regarding the use of coronary revascularization in intermediate-to-high-risk patients with stable chest pain and known coronary stenosis of 40-90% in a proximal or middle coronary segment on coronary CTA.',
                      level: 'C',
                      source: 'ACC/ACCP/AHA/SCMR 2021'
                    },
                    {
                      statement: 'Consider obtaining coronary CTA in intermediate-to-high-risk patients with stable chest pain after an inconclusive or abnormal exercise ECG or stress imaging.',
                      level: 'C',
                      source: 'ACC/ACCP/AHA/SCMR 2021'
                    },
                    {
                      statement: 'Consider obtaining CAC testing in intermediate-to-high-risk patients with stable chest pain and no known coronary artery disease undergoing stress testing.',
                      level: 'C',
                      source: 'ACC/ACCP/AHA/SCMR 2021'
                    },
                    {
                      statement: 'Consider obtaining stress imaging in intermediate-to-high-risk patients with stable chest pain after inconclusive coronary CTA.',
                      level: 'C',
                      source: 'ACC/ACCP/AHA/SCMR 2021'
                    },
                    {
                      statement: 'Consider obtaining coronary CTA or invasive coronary angiography in intermediate-to-high-risk patients with stable chest pain after a negative stress test but with high clinical suspicion of coronary artery disease.',
                      level: 'C',
                      source: 'ACC/ACCP/AHA/SCMR 2021'
                    }
                  ]
                },
                {
                  title: 'Known Obstructive CAD',
                  id: 'known-obstructive-cad',
                  content: [
                    {
                      statement: 'Optimize guideline-directed medical therapy in patients with obstructive coronary artery disease and stable chest pain.',
                      level: 'A',
                      source: 'ACC/ACCP/AHA/SCMR 2021'
                    },
                    {
                      statement: 'Obtain invasive coronary angiography for guiding therapeutic decision-making in patients with obstructive coronary artery disease having stable chest pain despite guideline-directed medical therapy and moderate-severe ischemia.',
                      level: 'A',
                      source: 'ACC/ACCP/AHA/SCMR 2021'
                    },
                    {
                      statement: 'Consider obtaining FFR or instantaneous wave-free ratio in patients with obstructive coronary artery disease having stable chest pain despite optimal guideline-directed medical therapy, referred for invasive coronary angiography without prior stress testing.',
                      level: 'B',
                      source: 'ACC/ACCP/AHA/SCMR 2021'
                    },
                    {
                      statement: 'Consider obtaining invasive coronary angiography for guiding therapeutic decision-making in symptomatic patients with obstructive coronary artery disease having stable chest pain with coronary CTA-defined ≥ 50% stenosis in the left main coronary artery, obstructive coronary artery disease with FFR with CT ≤ 0.80 or severe stenosis (≥ 70%) in all 3 main vessels.',
                      level: 'B',
                      source: 'ACC/ACCP/AHA/SCMR 2021'
                    },
                    {
                      statement: 'Consider obtaining coronary CTA to evaluate bypass graft or stent patency (for stents ≥ 3 mm) in patients having stable chest pain with previous coronary revascularization.',
                      level: 'C',
                      source: 'ACC/ACCP/AHA/SCMR 2021'
                    },
                    {
                      statement: 'Obtain stress PET/SPECT myocardial perfusion imaging, cardiac MRI or echocardiography for diagnosing myocardial ischemia, estimating risk of major adverse cardiovascular events and guiding therapeutic decision-making in patients with obstructive coronary artery disease having stable chest pain despite optimal guideline-directed medical therapy.',
                      level: 'B',
                      source: 'ACC/ACCP/AHA/SCMR 2021'
                    },
                    {
                      statement: 'Consider preferring PET over SPECT, if available, to improve diagnostic accuracy and decrease the rate of nondiagnostic test results in patients with obstructive coronary artery disease having stable chest pain despite optimal guideline-directed medical therapy, if rest/stress nuclear myocardial perfusion imaging is selected.',
                      level: 'C',
                      source: 'ACC/ACCP/AHA/SCMR 2021'
                    },
                    {
                      statement: 'Consider obtaining exercise treadmill testing to determine if the symptoms are consistent with angina pectoris, assess the severity of symptoms, evaluate functional capacity and select management, including cardiac rehabilitation in patients with obstructive coronary artery disease having stable chest pain despite guideline-directed medical therapy.',
                      level: 'C',
                      source: 'ACC/ACCP/AHA/SCMR 2021'
                    },
                    {
                      statement: 'Consider obtaining myocardial blood flow reserve to improve diagnosis accuracy and enhance risk stratification in patients with obstructive coronary artery disease having stable chest pain symptoms undergoing stress PET myocardial perfusion imaging or stress cardiac MRI.',
                      level: 'C',
                      source: 'ACC/ACCP/AHA/SCMR 2021'
                    }
                  ]
                },
                {
                  title: 'Known Nonobstructive CAD',
                  id: 'known-nonobstructive-cad',
                  content: [
                    {
                      statement: 'Optimize preventive therapies in patients with known nonobstructive coronary artery disease and stable chest pain.',
                      level: 'B',
                      source: 'ACC/ACCP/AHA/SCMR 2021'
                    },
                    {
                      statement: 'Consider obtaining coronary CTA for determining atherosclerotic plaque burden and progression to obstructive coronary artery disease and guiding therapeutic decision-making in symptomatic patients with known nonobstructive coronary artery disease with stable chest pain.',
                      level: 'C',
                      source: 'ACC/ACCP/AHA/SCMR 2021'
                    },
                    {
                      statement: 'Consider obtaining FFR for diagnosis of vessel-specific ischemia and to guide decision-making regarding the use of invasive coronary angiography in patients with known coronary stenosis from 40-90% on coronary CTA.',
                      level: 'C',
                      source: 'ACC/ACCP/AHA/SCMR 2021'
                    },
                    {
                      statement: 'Consider obtaining stress imaging with PET/SPECT, cardiac MRI or echocardiography for the diagnosis of myocardial ischemia in patients with known extensive nonobstructive coronary artery disease with stable chest pain symptoms.',
                      level: 'C',
                      source: 'ACC/ACCP/AHA/SCMR 2021'
                    }
                  ]
                },
                {
                  title: 'INOCA (Ischemia with Non-Obstructive Coronary Arteries)',
                  id: 'inoca',
                  content: [
                    {
                      statement: 'Consider obtaining invasive coronary function testing to improve the diagnosis of coronary microvascular dysfunction and to enhance risk stratification in patients with persistent stable chest pain and nonobstructive coronary artery disease and at least mild myocardial ischemia on imaging.',
                      level: 'C',
                      source: 'ACC/ACCP/AHA/SCMR 2021'
                    },
                    {
                      statement: 'Consider obtaining stress PET myocardial perfusion imaging with myocardial blood flow reserve to diagnose microvascular dysfunction and to enhance risk stratification in patients with persistent stable chest pain and nonobstructive coronary artery disease.',
                      level: 'C',
                      source: 'ACC/ACCP/AHA/SCMR 2021'
                    },
                    {
                      statement: 'Consider obtaining cardiac MRI with addition of myocardial blood flow reserve measurement to improve diagnosis of coronary microvascular dysfunction and for estimating risk of major adverse cardiovascular events in patients with persistent stable chest pain and nonobstructive coronary artery disease.',
                      level: 'C',
                      source: 'ACC/ACCP/AHA/SCMR 2021'
                    },
                    {
                      statement: 'Consider obtaining stress echocardiography with the addition of coronary flow velocity reserve measurement to improve diagnosis of coronary microvascular dysfunction and for estimating risk of major adverse cardiovascular events in patients with persistent stable chest pain and nonobstructive coronary artery disease.',
                      level: 'C',
                      source: 'ACC/ACCP/AHA/SCMR 2021'
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
              statement: 'Special considerations for specific patient populations and clinical scenarios.',
              level: 'B',
              source: 'ACC/ACCP/AHA/SCMR 2021',
              subsections: [
                {
                  title: 'Post-CABG Patients - Acute Chest Pain',
                  id: 'post-cabg-acute',
                  content: [
                    {
                      statement: 'Consider obtaining stress imaging to evaluate for myocardial ischemia or coronary CTA for graft stenosis or occlusion in patients with a history of CABG surgery presenting with acute chest pain not having ACS.',
                      level: 'B',
                      source: 'ACC/ACCP/AHA/SCMR 2021'
                    },
                    {
                      statement: 'Consider obtaining invasive coronary angiography in patients with a history of CABG surgery presenting with acute chest pain not having ACS or having an indeterminate/nondiagnostic stress test.',
                      level: 'B',
                      source: 'ACC/ACCP/AHA/SCMR 2021'
                    }
                  ]
                },
                {
                  title: 'Post-CABG Patients - Stable Chest Pain',
                  id: 'post-cabg-stable',
                  content: [
                    {
                      statement: 'Obtain invasive coronary angiography for guiding therapeutic decision-making in patients with a history of CABG surgery presenting with stable chest pain, if noninvasive stress test results show moderate-to-severe ischemia, or suspected to have myocardial ischemia with indeterminate/nondiagnostic stress test.',
                      level: 'B',
                      source: 'ACC/ACCP/AHA/SCMR 2021'
                    },
                    {
                      statement: 'Consider obtaining stress imaging or coronary CTA to evaluate for myocardial ischemia or graft stenosis or occlusion in patients with a history of CABG surgery presenting with stable chest pain suspected to have myocardial ischemia.',
                      level: 'C',
                      source: 'ACC/ACCP/AHA/SCMR 2021'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: 'Follow-up and Surveillance',
          id: 'follow-up-surveillance',
          content: [
            {
              statement: 'Proper follow-up care and emergency management protocols.',
              level: 'B',
              source: 'ACC/ACCP/AHA/SCMR 2021',
              subsections: [
                {
                  title: 'Transfer to Emergency Department',
                  id: 'transfer-ed',
                  content: [
                    {
                      statement: 'Transport patients with clinical evidence of ACS or other life-threatening causes of acute chest pain seen in the office setting to the emergency department urgently, ideally by emergency medical services.',
                      level: 'B',
                      source: 'ACC/ACCP/AHA/SCMR 2021'
                    },
                    {
                      statement: 'Avoid delaying transfer of patients with acute chest pain and suspected ACS initially evaluated in the office setting to the emergency department for cardiac troponin or other diagnostic testing.',
                      level: 'D',
                      source: 'ACC/ACCP/AHA/SCMR 2021'
                    },
                    {
                      statement: 'Transfer patients experiencing acute unremitting chest pain while undergoing dialysis to an acute care setting by emergency medical services.',
                      level: 'B',
                      source: 'ACC/ACCP/AHA/SCMR 2021'
                    },
                    {
                      statement: 'Transfer patients with sickle cell disease reporting acute chest pain to an acute care setting by emergency medical services.',
                      level: 'B',
                      source: 'ACC/ACCP/AHA/SCMR 2021'
                    },
                    {
                      statement: 'Educate patients to activate 9-1-1 in case of experiencing or witnessing acute chest pain to initiate transport to the closest emergency department by emergency medical services.',
                      level: 'B',
                      source: 'ACC/ACCP/AHA/SCMR 2021'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: 'Quality Improvement',
          id: 'quality-improvement',
          content: [
            {
              statement: 'Cultural competency and quality improvement measures.',
              level: 'B',
              source: 'ACC/ACCP/AHA/SCMR 2021',
              subsections: [
                {
                  title: 'Cultural Competency Training',
                  id: 'cultural-competency',
                  content: [
                    {
                      statement: 'Implement cultural competency training to help achieve the best outcomes in patients of diverse racial and ethnic backgrounds presenting with chest pain.',
                      level: 'B',
                      source: 'ACC/ACCP/AHA/SCMR 2021'
                    },
                    {
                      statement: 'Address language barriers with the use of formal translation services among patients of diverse race and ethnicity presenting with chest pain, if English is not their primary language.',
                      level: 'B',
                      source: 'ACC/ACCP/AHA/SCMR 2021'
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
        title: 'CT or Invasive Coronary Angiography in Stable Chest Pain',
        year: '2022',
        description: 'In patients with stable chest pain who had an intermediate pretest probability of obstructive coronary artery disease and were referred for invasive coronary angiography, CT was not superior to invasive coronary angiography with respect to the rate of composite outcome of cardiovascular death, nonfatal myocardial infarction, or nonfatal stroke over 3.5 years.',
        authors: 'DISCHARGE Trial Group',
        journal: 'N Engl J Med. 2022 Apr 28'
      }
    ],
    references: [
      {
        id: 1,
        authors: 'Martha Gulati, Phillip D Levy, Debabrata Mukherjee et al.',
        title: '2021 AHA / ACC / ASE / CHEST / SAEM / SCCT / SCMR Guideline for the Evaluation and Diagnosis of Chest Pain: A Report of the American College of Cardiology / American Heart Association Joint Committee on Clinical Practice Guidelines',
        journal: 'Circulation. 2021 Nov 30;144(22):e368-e454',
        year: '2021',
        link: 'https://pubmed.ncbi.nlm.nih.gov/34709879/'
      },
      {
        id: 2,
        authors: 'Raman Nohria, Anthony J Viera',
        title: 'Acute Coronary Syndrome: Diagnosis and Initial Management',
        journal: 'Am Fam Physician. 2024 Jan;109(1):34-42',
        year: '2024',
        link: 'https://pubmed.ncbi.nlm.nih.gov/38227869/'
      },
      {
        id: 3,
        authors: 'William E Cayley Jr',
        title: 'Noninvasive Cardiac Testing',
        journal: 'Am Fam Physician. 2024 Dec;110(6):577-584',
        year: '2024',
        link: 'https://pubmed.ncbi.nlm.nih.gov/39700360/'
      },
      {
        id: 4,
        authors: 'Timothy Mott, Gregory Jones, Kimberly Roman',
        title: 'Costochondritis: Rapid Evidence Review',
        journal: 'Am Fam Physician. 2021 Jul 1;104(1):73-78',
        year: '2021',
        link: 'https://pubmed.ncbi.nlm.nih.gov/34264599/'
      },
      {
        id: 5,
        authors: 'Brian V Reamy, Pamela M Williams, Michael Ryan Odom',
        title: 'Pleuritic Chest Pain: Sorting Through the Differential Diagnosis',
        journal: 'Am Fam Physician. 2017 Sep 1;96(5):306-312',
        year: '2017',
        link: 'https://pubmed.ncbi.nlm.nih.gov/28925655/'
      },
      {
        id: 6,
        authors: 'Simon A Mahler, Robert F Riley, Brian C Hiestand et al.',
        title: 'The HEART Pathway randomized trial: identifying emergency department patients with acute chest pain for early discharge',
        journal: 'Circ Cardiovasc Qual Outcomes. 2015 Mar;8(2):195-203',
        year: '2015',
        link: 'https://pubmed.ncbi.nlm.nih.gov/25737484/'
      },
      {
        id: 7,
        authors: 'Martin Than, Sally Aldous, Sarah Jane Lord et al.',
        title: 'A 2-hour diagnostic protocol for possible cardiac chest pain in the emergency department: a randomized clinical trial',
        journal: 'JAMA Intern Med. 2014 Jan;174(1):51-8',
        year: '2014',
        link: 'https://pubmed.ncbi.nlm.nih.gov/24100783/'
      },
      {
        id: 8,
        authors: 'Mohammad Jalili, Zia Hejripour, Amir Reza Honarmand et al.',
        title: 'Validation of the Vancouver Chest Pain Rule: a prospective cohort study',
        journal: 'Acad Emerg Med. 2012 Jul;19(7):837-42',
        year: '2012',
        link: 'https://pubmed.ncbi.nlm.nih.gov/22805631/'
      },
      {
        id: 9,
        authors: 'DISCHARGE Trial Group, Pál Maurovich-Horvat, Maria Bosserdt et al.',
        title: 'CT or Invasive Coronary Angiography in Stable Chest Pain',
        journal: 'N Engl J Med. 2022 Apr 28;386(17):1591-1602',
        year: '2022',
        link: 'https://pubmed.ncbi.nlm.nih.gov/35240010/'
      },
      {
        id: 10,
        authors: 'A J Six, B E Backus, J C Kelder',
        title: 'Chest pain in the emergency room: value of the HEART score',
        journal: 'Neth Heart J. 2008 Jun;16(6):191-6',
        year: '2008',
        link: 'https://pubmed.ncbi.nlm.nih.gov/18665203/'
      },
      {
        id: 11,
        authors: 'Martin Than, Dylan Flaws, Sharon Sanders et al.',
        title: 'Development and validation of the Emergency Department Assessment of Chest pain Score and 2 h accelerated diagnostic protocol',
        journal: 'Emerg Med Australas. 2014 Feb;26(1):34-44',
        year: '2014',
        link: 'https://pubmed.ncbi.nlm.nih.gov/24428678/'
      }
    ]
  }
};