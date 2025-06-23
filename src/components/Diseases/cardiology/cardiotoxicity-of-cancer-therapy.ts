import { DiseaseData } from '../types';

export const cardiotoxicityOfCancerTherapyData: DiseaseData = {
  id: 'cardiotoxicity-of-cancer-therapy',
  title: 'Cardiotoxicity of Cancer Therapy',
  lastUpdated: 'June 10, 2025',
  category: 'Cardio-Oncology',
  specialty: 'cardiology',
  content: {
    background: {
      overview: {
        definition: 'Cardiotoxicity of cancer therapy refers to the spectrum of cardiovascular complications that can arise from the use of anticancer treatments, including chemotherapy, targeted therapies, immunotherapy, and radiation therapy. These complications can range from asymptomatic cardiac dysfunction to life-threatening cardiovascular events.',
        pathophysiology: 'Cancer therapy-related cardiovascular toxicity involves multiple mechanisms depending on the specific treatment modality. Anthracyclines cause direct myocardial injury through oxidative stress and DNA damage. Targeted therapies like HER2 inhibitors disrupt essential cardiac signaling pathways. Immune checkpoint inhibitors can trigger autoimmune myocarditis. Radiation therapy causes endothelial damage and accelerated atherosclerosis. VEGF inhibitors disrupt vascular homeostasis leading to hypertension and thrombosis.',
        epidemiology: 'The incidence of cardiovascular toxicity varies widely depending on the specific cancer therapy, dosing regimen, patient risk factors, and definition used. Anthracycline-induced cardiomyopathy occurs in approximately 1-5% of patients. Trastuzumab-associated cardiac dysfunction occurs in 2-7% of patients in clinical trials but may be higher in real-world practice. Immune checkpoint inhibitor-associated myocarditis occurs in <1% of patients but carries high mortality.',
        diseaseCourse: 'The temporal course of cardiovascular toxicity varies by treatment type. Acute effects may occur during or immediately after treatment (fluoropyrimidines, immune checkpoint inhibitors). Chronic effects can develop months to years after therapy completion, particularly with anthracyclines and radiation therapy. Some toxicities are reversible with treatment interruption and appropriate cardiac management, while others may result in permanent cardiac dysfunction.',
        prognosis: 'The prognosis of cancer therapy-related cardiovascular toxicity depends on multiple factors including the specific treatment, severity of cardiac dysfunction, timing of detection, and implementation of appropriate cardiovascular interventions. Early detection and management can improve outcomes and allow for continuation of life-saving cancer therapy in many cases.'
      }
    },
    clinicalFindings: {
      pastMedicalHistory: [
        'Acute coronary syndrome',
        'Coronary artery disease',
        'Dilated cardiomyopathy',
        'Dyslipidemia',
        'Exposure to chemotherapy',
        'HCM',
        'HF',
        'Hypertension',
        'Malignancy',
        'Myocarditis',
        'Obesity',
        'PAD',
        'Radiation therapy',
        'Restrictive cardiomyopathy',
        'Valvular heart disease'
      ],
      vitalSigns: [
        'Bradycardia',
        'Hypertension'
      ],
      patientDemographics: [
        'Alcohol consumption',
        'Tobacco use'
      ]
    },
    studies: [
      {
        title: 'STOP-CA',
        year: '2023',
        description: 'In patients with lymphoma scheduled to receive anthracycline-based chemotherapy, atorvastatin was superior to placebo with respect to proportion of patients with an absolute decline in LVEF ≥ 10% from prior to chemotherapy to a final value of < 55% over 12 months.',
        authors: 'Tomas G Neilan et al.',
        journal: 'JAMA. 2023 Aug 8.'
      }
    ],
    guidelines: {
      keySources: 'The following summarized guidelines for the evaluation and management of cardiotoxicity of cancer therapy are prepared by our editorial team based on guidelines from: European Society of Cardiology (ESC/ESTRO/EHA/IC-OS 2022), European Society of Medical Oncology (ESMO 2022, 2020), Canadian Cardiovascular Society (CCS 2016).',
      sections: [
        {
          title: 'Classification and Risk Stratification',
          id: 'classification-risk-stratification',
          content: [
            {
              statement: 'Obtain cardiovascular toxicity risk stratification in all patients with cancer before initiating potentially cardiotoxic anticancer therapy.',
              level: 'B',
              source: 'EHA/ESC/ESTRO/IC-OS 2022'
            },
            {
              statement: 'Consider using the HFA-ICOS risk assessment tool for risk stratification.',
              level: 'B',
              source: 'EHA/ESC/ESTRO/IC-OS 2022'
            },
            {
              statement: 'Communicate the results of the risk assessment to the patient and other appropriate healthcare professionals.',
              level: 'B',
              source: 'EHA/ESC/ESTRO/IC-OS 2022'
            },
            {
              statement: 'Refer patients with cancer and preexisting CVD or abnormal findings at baseline cardiovascular toxicity risk assessment requiring potentially cardiotoxic anticancer therapy to a cardiologist.',
              level: 'B',
              source: 'EHA/ESC/ESTRO/IC-OS 2022'
            }
          ],
          subsections: [
            {
              title: 'Response According to Cardiovascular Toxicity Risk',
              id: 'response-by-risk',
              content: [
                {
                  statement: 'Initiate anticancer therapy without delay in low risk patients.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Consider referring to a cardiologist before initiating anticancer therapy in moderate risk patients.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Refer to a cardiologist before initiating anticancer therapy in high and very high risk patients. Discuss the risk/benefit balance of cardiotoxic anticancer treatment in a multidisciplinary approach before initiating treatment.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
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
              statement: 'Obtain a specialist cardiovascular assessment for optimal diagnostic workup and management in patients with cancer presenting with new cardiovascular toxicity during and after cancer treatment.',
              level: 'B',
              source: 'EHA/ESC/ESTRO/IC-OS 2022'
            },
            {
              statement: 'Screen for known cardiovascular risk factors in patients with cancer. Treat identified cardiovascular risk factors according to current guidelines.',
              level: 'A',
              source: 'ESMO 2020'
            },
            {
              statement: 'Monitor cardiovascular safety during cancer therapy, especially mediastinal and left-sided chest radiation and certain chemotherapy and targeted agents, as they can substantially affect the heart and vascular system.',
              level: 'A',
              source: 'ESMO 2020'
            },
            {
              statement: 'Obtain cardiology consultation, preferably with a cardio-oncology specialist, for asymptomatic patients receiving cardiotoxic anticancer therapy and having elevations in cardiac troponin levels.',
              level: 'B',
              source: 'ESMO 2020'
            }
          ],
          subsections: [
            {
              title: 'ECG',
              id: 'ecg',
              content: [
                {
                  statement: 'Obtain an ECG as part of the baseline cardiovascular risk assessment in all patients initiating cancer therapy. Refer patients with an abnormal baseline ECG to a cardiologist.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Obtain a baseline ECG including measurement of HR QTc in patients requiring treatment with a potentially cardiotoxic treatment.',
                  level: 'A',
                  source: 'ESMO 2020'
                },
                {
                  statement: 'Consider obtaining a baseline ECG before initiating QTc-prolonging agents, and periodically during treatment.',
                  level: 'C',
                  source: 'CCS 2016'
                }
              ]
            },
            {
              title: 'Cardiac Imaging',
              id: 'cardiac-imaging',
              content: [
                {
                  statement: 'Obtain echocardiography as the first-line modality for the assessment of cardiac function in patients with cancer.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Obtain 3D echocardiography as the preferred echocardiographic modality to measure LVEF.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Assess global longitudinal strain in all patients undergoing echocardiography.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Obtain baseline comprehensive TTE in all patients with cancer at high or very high risk of cardiovascular toxicity before initiating anticancer therapy.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Consider obtaining cardiac MRI for the assessment of cardiac function if echocardiography is unavailable or nondiagnostic.',
                  level: 'C',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Consider obtaining multigated acquisition nuclear imaging if TTE is not diagnostic and cardiac MRI is not available.',
                  level: 'C',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Obtain baseline evaluation of LVEF and diastolic function according to accepted comprehensive imaging practice in patients scheduled to undergo anticancer therapy associated with HF or LV dysfunction.',
                  level: 'A',
                  source: 'ESMO 2020'
                },
                {
                  statement: 'Use the following general principles for medical imaging in patients with cancer at risk for cardiac complications, particularly for the periodic assessment of LV systolic function: Obtain highly reproducible, quantitative volumetric, non-irradiating imaging, such as quantitative 2D/3D echocardiography and cardiac MRI, with quality control.',
                  level: 'A',
                  source: 'ESMO 2020'
                },
                {
                  statement: 'Obtain the same imaging modality at the same facility for serial testing in each patient.',
                  level: 'A',
                  source: 'ESMO 2020'
                },
                {
                  statement: 'Consider obtaining LV global longitudinal strain imaging when available for baseline and serial monitoring of LV systolic function.',
                  level: 'B',
                  source: 'ESMO 2020'
                },
                {
                  statement: 'Reassess LVEF/strain every 3 months in asymptomatic patients receiving any cardiotoxic anticancer therapy with normal LVEF but a decrease in average global longitudinal strain from baseline assessment (≥ 12% relative decrease or ≥ 5% absolute decrease). Reassess LVEF/strain with suspected cardiac toxicity based on cardiac physical examination or symptoms.',
                  level: 'B',
                  source: 'ESMO 2020'
                },
                {
                  statement: 'Assess LVEF before initiating cancer therapy known to cause impairment in LV function.',
                  level: 'B',
                  source: 'CCS 2016'
                },
                {
                  statement: 'Use the same imaging modality and method to determine LVEF before, during, and after completion of cancer therapy.',
                  level: 'B',
                  source: 'CCS 2016'
                },
                {
                  statement: 'Consider obtaining myocardial strain imaging for early detection of subclinical LV dysfunction in patients treated with potentially cardiotoxic cancer therapy.',
                  level: 'C',
                  source: 'CCS 2016'
                }
              ]
            },
            {
              title: 'Cardiac Biomarkers',
              id: 'cardiac-biomarkers',
              content: [
                {
                  statement: 'Obtain baseline measurement of natriuretic peptides and/or cardiac troponin in all patients with cancer at risk of cancer therapy-related cardiac dysfunction if these biomarkers are going to be measured during treatment to detect cancer therapy-related cardiac dysfunction.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Insufficient evidence to recommend the routine use of cardiac biomarkers (high-sensitive cardiac troponins, BNP, or NT-proBNP) in patients receiving potentially cardiotoxic chemotherapy. Consider obtaining a baseline measurement of such cardiac biomarkers in high-risk patients (with preexisting significant CVD) and patients receiving high doses of cardiotoxic chemotherapy, such as anthracycline.',
                  level: 'I',
                  source: 'ESMO 2020'
                },
                {
                  statement: 'Consider obtaining serial measurements of cardiac biomarkers (BNP, troponin) for early detection of cardiotoxicity in patients with cancer receiving cardiotoxic therapies implicated in the development of LV dysfunction.',
                  level: 'C',
                  source: 'CCS 2016'
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
              statement: 'Implement comprehensive medical management strategies for cancer therapy-related cardiovascular complications, with treatment approaches varying based on the specific toxicity, underlying cancer type, and patient prognosis.',
              level: 'B',
              source: 'EHA/ESC/ESTRO/IC-OS 2022'
            }
          ],
          subsections: [
            {
              title: 'Management of Arterial Hypertension',
              id: 'arterial-hypertension',
              content: [
                {
                  statement: 'Initiate effective treatment for cancer therapy-induced arterial hypertension to prevent cancer treatment interruption and cardiovascular complications.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Set a BP target of < 140 mmHg systolic and < 90 mmHg diastolic during cancer therapy.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Consider setting a lower BP target of < 130 mmHg systolic and < 80 mmHg diastolic if the treatment is well tolerated.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Consider setting an SBP 140-160 mmHg and DBP 90-100 mmHg treatment threshold in selected asymptomatic patients with metastatic cancer, provided there is ongoing BP monitoring.',
                  level: 'C',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Obtain cardiovascular risk evaluation if the SBP is ≥ 180 mmHg or DBP ≥ 110 mmHg. Defer or temporarily withhold any cancer therapy associated with hypertension until the BP is controlled to values < 160 mmHg (systolic) and < 100 mmHg (diastolic).',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Initiate ACEis or ARBs as first-line antihypertensive drugs for BP management in patients with cancer.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Initiate dihydropyridine CCBs as second-line antihypertensive drugs in patients with uncontrolled BP.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Initiate combination therapy with ACEis/ARBs and dihydropyridine CCBs in patients with SBP ≥ 160 mmHg and DBP ≥ 100 mmHg.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Do not use diltiazem and verapamil for the treatment of arterial hypertension in patients with cancer due to their drug-drug interactions.',
                  level: 'D',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Optimize cardiovascular follow-up and treatment in patients with TKIs-mediated hypertension during cancer therapy.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Initiate, maintain, or augment antihypertensive therapy in patients with preexisting hypertension or patients developing hypertension related to cancer therapy.',
                  level: 'A',
                  source: 'CCS 2016'
                },
                {
                  statement: 'Set a target BP of < 140/90 mmHg in all patients without diabetes. Adjust the BP target to < 130/80 mmHg in patients with diabetes.',
                  level: 'A',
                  source: 'CCS 2016'
                }
              ]
            },
            {
              title: 'Management of QTc Prolongation',
              id: 'qtc-prolongation',
              content: [
                {
                  statement: 'Discontinue QTc-prolonging cancer therapy in patients developing Torsade de pointes or sustained ventricular tachyarrhythmias during treatment.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Interrupt QTc-prolonging cancer therapy temporarily in patients developing asymptomatic QTc interval ≥ 500 ms (using Fridericia correction) and repeat ECG every 24 hours until resolution of the QTc prolongation.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Withdraw any offending drug immediately and correct electrolyte abnormalities and other risk factors in patients with cancer developing QTc interval ≥ 500 ms (using Fridericia correction).',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Obtain weekly ECG monitoring in asymptomatic patients with cancer with QTc interval of 480-500 ms treated with QTc-prolonging cancer therapy. Obtain a 12-lead ECG after any dose increase of QTc-prolonging cancer therapy.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Arrange a multidisciplinary discussion before restarting QTc-prolonging drugs in patients with significant QTc prolongation, to discuss alternative cancer treatments.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Consider restarting the culprit QTc-prolonging cancer therapy, ideally at a reduced dose according to each drug recommendation, in patients experienced significant QTc prolongation.',
                  level: 'C',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Obtain weekly ECG monitoring during the first 4-6 weeks and monthly thereafter in patients with cancer after restarting QTc-prolonging cancer therapy.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Obtain ECG follow-up in patients with QTc prolongation or long QT syndrome during cancer therapy.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Identify and correct metabolic and electrolyte disturbances in patients with a QTc interval > 500 ms during treatment. Minimize the use of concomitant QT-prolonging drugs where possible.',
                  level: 'B',
                  source: 'CCS 2016'
                }
              ]
            },
            {
              title: 'Management of Atrial Fibrillation',
              id: 'atrial-fibrillation',
              content: [
                {
                  statement: 'Consider using the CHA2DS2-VASc score for risk stratification for stroke/systemic thromboembolism, recognizing that it may underestimate the actual thromboembolic risk.',
                  level: 'C',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Initiate long-term anticoagulation for stroke/systemic thromboembolism prevention in patients with cancer with AF and a CHA2DS2-VASc score ≥ 2 (for males) or ≥ 3 (for females).',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Consider initiating long-term anticoagulation for stroke/systemic thromboembolism prevention in patients with cancer with AF and a CHA2DS2-VASc score = 1 (for males) or = 2 (for females).',
                  level: 'C',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Consider initiating therapeutic anticoagulation after consideration of the bleeding risk in patients with cancer, AF, and a CHA2DS2-VASc score = 0 (for males) or = 1 (for females).',
                  level: 'C',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Obtain thromboembolic and bleeding risk reassessment during follow-up in patients with cancer and AF.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Consider initiating non-VKA OACs for stroke prevention in preference to LMWH and VKAs (excluding patients with mechanical heart valves or moderate-to-severe MS) in patients without a high bleeding risk, significant drug-drug interactions, or severe renal dysfunction.',
                  level: 'C',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Consider initiating LMWH in patients with active cancer and AF not suitable for non-VKA OACs.',
                  level: 'C',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Consider performing LAA occlusion for stroke prevention in patients with cancer and AF having contraindications for long-term anticoagulation with a life expectancy > 12 months.',
                  level: 'C',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Do not initiate antiplatelet therapy or prophylactic LMWH for stroke or systemic thromboembolism prevention in AF with cancer.',
                  level: 'D',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Consider using an HR control strategy, preferably with β-blockers, in patients developing well-tolerated AF while receiving active cancer treatment.',
                  level: 'C',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                }
              ]
            },
            {
              title: 'Management of Acute Coronary Syndrome',
              id: 'acute-coronary-syndrome',
              content: [
                {
                  statement: 'Use an invasive strategy in patients with cancer presenting with STEMI or high-risk non-ST-elevation acute coronary syndrome with a life expectancy ≥ 6 months.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Consider using a conservative noninvasive strategy in patients with poor cancer prognosis (life expectancy < 6 months) and/or very high bleeding risk presenting with STEMI or non-ST-elevation acute coronary syndrome.',
                  level: 'C',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Interrupt cancer therapy temporarily if cancer therapy is suspected as a contributing cause.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Consider initiating short dual antiplatelet therapy in patients with cancer with very high bleeding risk treated with PCI for an acute coronary syndrome.',
                  level: 'C',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Consider initiating ticagrelor or prasugrel in patients with cancer with low bleeding risk and excessive thrombotic risk treated with PCI for an acute coronary syndrome.',
                  level: 'C',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Do not use aspirin in patients with cancer and acute coronary syndrome if platelets are < 10,000/mcL. Do not use clopidogrel if platelets are < 30,000/mcL. Do not use prasugrel or ticagrelor if platelets are < 50,000/mcL.',
                  level: 'D',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Individualize the duration of dual antiplatelet therapy in patients with cancer with chronic coronary syndromes following revascularization based on thrombotic/ischemic and bleeding risk, type and stage of cancer, and current cancer treatment.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Consider switching to an alternative antineoplastic treatment if patients experience myocardial ischemia due to the cancer therapy.',
                  level: 'C',
                  source: 'CCS 2016'
                }
              ]
            },
            {
              title: 'Management of Heart Failure',
              id: 'heart-failure',
              content: [
                {
                  statement: 'Evaluate and manage patients with cancer developing clinical HF or an asymptomatic decline in LVEF (such as > 10% decrease in LVEF from baseline or LVEF < 53%) during or after treatment according to current published guidelines. Exclude other causes of LV dysfunction.',
                  level: 'A',
                  source: 'CCS 2016'
                }
              ]
            },
            {
              title: 'Management of Takotsubo Syndrome',
              id: 'takotsubo-syndrome',
              content: [
                {
                  statement: 'Obtain coronary angiography (invasive or coronary CTA) to exclude acute coronary syndromes.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Obtain cardiac MRI to exclude myocarditis and myocardial infarction.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Do not use QT-prolonging drugs during the acute Takotsubo syndrome phase.',
                  level: 'D',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                }
              ]
            },
            {
              title: 'Management of Late Cardiac Dysfunction',
              id: 'late-cardiac-dysfunction',
              content: [
                {
                  statement: 'Initiate ACEis/ARBs and/or β-blockers in adult cancer survivors with moderate asymptomatic cancer therapy-related cardiac dysfunction.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Consider initiating ACEis/ARBs and/or β-blockers in adult cancer survivors with mild asymptomatic cancer therapy-related cardiac dysfunction.',
                  level: 'C',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Continue cardiac medications long-term in patients developing severe cancer therapy-related cardiac dysfunction during cancer therapy.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                }
              ]
            },
            {
              title: 'Management of Pericarditis',
              id: 'pericarditis',
              content: [
                {
                  statement: 'Diagnose and manage acute pericarditis in patients with cancer according to current published guidelines for the diagnosis and management of pericardial diseases. Arrange a multidisciplinary discussion before interrupting cancer therapy.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Obtain multimodality cardiovascular imaging (echocardiography, cardiac MRI, and CT), ECG, and measurement of cardiac biomarkers to confirm the diagnosis, assess the hemodynamic consequences of pericardial disease, and rule out associated myocarditis.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Interrupt immune checkpoint inhibitor treatment in patients with confirmed immune checkpoint inhibitor-associated pericarditis with moderate-to-severe pericardial effusion. Initiate prednisolone and/or colchicine in patients with immune checkpoint inhibitor-associated pericarditis. Arrange a multidisciplinary discussion before restarting immune checkpoint inhibitor treatment.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Consider performing surgical pericardial window if the percutaneous approach is not feasible or in cases of recurrent malignant pericardial effusions.',
                  level: 'C',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Consider performing intrapericardial instillation of cytostatic or sclerosing agents for prevention of recurrence.',
                  level: 'C',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Consider obtaining echocardiography surveillance every 5 years in patients after acute pericarditis developed during radiotherapy to a volume including the heart, as these patients are at higher risk of developing chronic constrictive pericarditis.',
                  level: 'C',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                }
              ]
            },
            {
              title: 'Management of Valvular Heart Disease',
              id: 'valvular-heart-disease',
              content: [
                {
                  statement: 'Manage patients with cancer and preexisting severe valvular heart disease or new valvular heart disease developed during cancer therapy according to current published guidelines for the management of valvular heart disease, taking cancer prognosis, patient comorbidities, and patient preferences into consideration.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Ensure a multidisciplinary team approach to discuss and define the surgical risk in cancer survivors with severe valvular heart disease.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Consider performing TAVI in patients with symptomatic severe aortic stenosis caused by radiation at intermediate surgical risk.',
                  level: 'C',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                }
              ]
            },
            {
              title: 'Management of Carcinoid Heart Disease',
              id: 'carcinoid-heart-disease',
              content: [
                {
                  statement: 'Obtain echocardiography for the detection of carcinoid cardiac involvement in all patients with carcinoid syndrome and elevated natriuretic peptide levels and/or clinical signs of carcinoid heart disease, and for surveillance every 3-6 months depending on the severity of cardiac involvement and clinical status.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Consider obtaining natriuretic peptides for screening and surveillance of carcinoid heart disease every 6 months.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Ensure a multidisciplinary team discussion for optimal medical management to prevent carcinoid crisis before any invasive or surgical cardiac procedure.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Consider performing valve replacement surgery in patients with asymptomatic severe carcinoid tricuspid or pulmonary valvular heart disease, progressive RV dysfunction/dilatation, and an expected survival ≥ 12 months.',
                  level: 'C',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Perform valve replacement surgery in symptomatic patients with severe carcinoid tricuspid or pulmonary valvular heart disease and an expected survival ≥ 12 months.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Perform valve replacement or repair surgery in symptomatic patients with severe carcinoid mitral or aortic valvular heart disease and an expected survival ≥ 12 months.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                }
              ]
            },
            {
              title: 'Management of Cardiac Amyloidosis',
              id: 'cardiac-amyloidosis',
              content: [
                {
                  statement: 'Obtain echocardiography, natriuretic peptides, and cardiac troponin for the diagnosis of amyloid light-chain cardiac amyloidosis in patients with plasma cell dyscrasia.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Obtain cardiac MRI in patients with suspected amyloid light-chain cardiac amyloidosis.',
                  level: 'A',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Consider performing an endomyocardial biopsy in patients with suspected amyloid light-chain cardiac amyloidosis if cardiac MRI is nondiagnostic.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Measure natriuretic peptides and cardiac troponin at baseline and every 3-6 months in patients with amyloid light-chain cardiac amyloidosis.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Obtain baseline echocardiography, including assessment for amyloid light-chain cardiac amyloidosis, in all patients with multiple myeloma scheduled to receive proteasome inhibitors.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Consider admitting high-risk patients with amyloid light-chain cardiac amyloidosis for inpatient ECG monitoring, if proteasome inhibitors are required during the first cycle of therapy.',
                  level: 'C',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Consider obtaining echocardiography surveillance every 3-6 months in patients with amyloid light-chain cardiac amyloidosis treated with proteasome inhibitors.',
                  level: 'C',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                }
              ]
            },
            {
              title: 'Management of VTE',
              id: 'vte',
              content: [
                {
                  statement: 'Initiate apixaban, edoxaban, or rivaroxaban for the treatment of symptomatic or incidental VTE in patients with cancer without contraindications.',
                  level: 'A',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Initiate LMWH for the treatment of symptomatic or incidental VTE in patients with cancer with platelet count > 50,000/mcL.',
                  level: 'A',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Consider initiating anticoagulation with half-dose LMWH, after a multidisciplinary discussion, in patients with cancer with platelet counts of 25,000-50,000/mcL.',
                  level: 'C',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Consider prolonging anticoagulation therapy beyond 6 months in selected patients with active cancer including metastatic disease.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Continue anticoagulation in patients with cancer with catheter-associated VTE for a minimum of 3 months, and longer if the catheter remains in situ.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Optimize cardiovascular follow-up and treatment in patients with vascular toxicities during cancer therapy.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                }
              ]
            },
            {
              title: 'Management of PAD',
              id: 'pad',
              content: [
                {
                  statement: 'Ensure a multidisciplinary approach regarding the decision to continue versus interrupt culprit cancer therapy in patients developing new symptomatic PAD.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Optimize cardiovascular follow-up and treatment in patients with vascular toxicities during cancer therapy.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
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
              statement: 'Promote lifestyle modifications and nonpharmacologic interventions as essential components of cardiovascular risk reduction in cancer patients, alongside pharmacologic treatments.',
              level: 'B',
              source: 'ESMO 2020'
            }
          ],
          subsections: [
            {
              title: 'Lifestyle Modifications',
              id: 'lifestyle-modifications',
              content: [
                {
                  statement: 'Encourage exercising on a regular basis in patients receiving anticancer therapy and long-term cancer survivors.',
                  level: 'B',
                  source: 'ESMO 2020'
                },
                {
                  statement: 'Advise adopting healthy dietary habits (high intake of fresh fruits/vegetables and whole grains as compared with refined grains, processed and red meats, and high-fat foods) and maintaining a normal weight in patients receiving anticancer therapy and long-term cancer survivors.',
                  level: 'B',
                  source: 'ESMO 2020'
                }
              ]
            },
            {
              title: 'Cardiac Rehabilitation',
              id: 'cardiac-rehabilitation',
              content: [
                {
                  statement: 'Consider offering targeted cardiac rehabilitation in cancer survivors with high cardiovascular risk.',
                  level: 'C',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
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
              statement: 'Apply specialized management approaches for specific patient populations and clinical circumstances that require modified cardiovascular monitoring and treatment strategies.',
              level: 'B',
              source: 'EHA/ESC/ESTRO/IC-OS 2022'
            }
          ],
          subsections: [
            {
              title: 'Pregnant Patients',
              id: 'pregnant-patients',
              content: [
                {
                  statement: 'Provide pre-pregnancy counseling and management during pregnancy and around delivery in high-risk female cancer survivors by a multidisciplinary pregnancy heart team.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Obtain baseline cardiovascular evaluation including history, physical examination, ECG, natriuretic peptides, and echocardiography in female cancer survivors with a history of cancer therapy-related cardiac dysfunction considering pregnancy.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Consider obtaining baseline cardiovascular evaluation including history, physical examination, ECG, and echocardiography in all female cancer survivors received potentially cardiotoxic cancer therapy and considering pregnancy.',
                  level: 'C',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Obtain cardiovascular evaluation including echocardiography at 12 weeks of pregnancy in female cancer survivors either at high risk or received potentially cardiotoxic cancer therapy not undergone a baseline cardiovascular assessment.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Consider obtaining a second cardiovascular evaluation including echocardiography at 20 weeks of pregnancy in high-risk female cancer survivors received potentially cardiotoxic cancer therapy.',
                  level: 'C',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Initiate management by an expert multidisciplinary team (the pregnancy heart team) in an expert center in pregnant patients with cancer requiring cardiotoxic cancer therapy.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Obtain cardiac assessment including clinical history, physical examination, ECG, and echocardiography before initiating cardiotoxic cancer therapy in pregnant patients.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Consider obtaining monthly or bi-monthly cardiovascular evaluation including transthoracic echocardiography during cardiotoxic cancer therapy in pregnant patients with cancer.',
                  level: 'C',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Consider obtaining cardiac troponin at baseline and during anthracycline chemotherapy in pregnant patients with cancer.',
                  level: 'C',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                }
              ]
            }
          ]
        },
        {
          title: 'Drug-Specific Management Guidelines',
          id: 'drug-specific-management',
          content: [
            {
              statement: 'Implement drug-specific monitoring and management strategies based on the specific anticancer therapy being used, as different treatment modalities have distinct cardiovascular toxicity profiles and require tailored surveillance and intervention approaches.',
              level: 'B',
              source: 'EHA/ESC/ESTRO/IC-OS 2022'
            }
          ],
          subsections: [
            {
              title: 'Patients Receiving Anthracyclines',
              id: 'anthracyclines',
              content: [
                {
                  statement: 'Implement comprehensive cardiovascular monitoring and prevention strategies for patients receiving anthracycline chemotherapy, as these agents are associated with dose-dependent cardiotoxicity that can manifest as acute or chronic cardiomyopathy.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                }
              ],
              subsections: [
                {
                  title: 'Evaluation',
                  id: 'anthracyclines-evaluation',
                  content: [
                    {
                      statement: 'Obtain baseline echocardiography in all patients with cancer before initiating anthracycline chemotherapy.',
                      level: 'B',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    },
                    {
                      statement: 'Obtain an echocardiogram in all adult patients receiving anthracycline chemotherapy within 12 months after completing treatment.',
                      level: 'B',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    },
                    {
                      statement: 'Obtain echocardiography every 2 cycles and within 3 months after completing treatment in high- and very high-risk patients.',
                      level: 'B',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    },
                    {
                      statement: 'Consider obtaining additional echocardiography after a cumulative dose of ≥ 250 mg/m² of doxorubicin or equivalent in moderate- and low-risk patients.',
                      level: 'C',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    },
                    {
                      statement: 'Obtain baseline measurement of natriuretic peptides and cardiac troponin in high- and very high-risk patients before initiating anthracycline chemotherapy, and consider obtaining in low- and moderate-risk patients.',
                      level: 'B',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    },
                    {
                      statement: 'Consider obtaining baseline cardiac troponin measurement in low- and moderate-risk patients post-anthracycline chemotherapy.',
                      level: 'B',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    },
                    {
                      statement: 'Obtain cardiac troponin and natriuretic peptides monitoring before every cycle during anthracycline chemotherapy and 3 and 12 months after completion of therapy in high and very high-risk patients.',
                      level: 'B',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    },
                    {
                      statement: 'Obtain periodic measurement (every 3-6 weeks or before each cycle) of troponin I or troponin T, BNP or NT-proBNP for risk stratification and early detection of cardiac toxicity in asymptomatic patients with normal LVEF receiving anthracycline therapy.',
                      level: 'B',
                      source: 'ESMO 2020'
                    },
                    {
                      statement: 'Reassess LV function after a cumulative dose of doxorubicin 250 mg/m² or its equivalent anthracycline, after approximately each additional 100 mg/m² (or approximately epirubicin 200 mg/m²) beyond 250 mg/m², and at the end of therapy, even if < 400 mg/m², in asymptomatic patients with normal LVEF receiving anthracycline therapy.',
                      level: 'A',
                      source: 'ESMO 2020'
                    }
                  ]
                },
                {
                  title: 'Prevention of Cardiotoxicity',
                  id: 'anthracyclines-prevention',
                  content: [
                    {
                      statement: 'Consider initiating liposomal anthracyclines or dexrazoxane in adult patients with cancer at high or very high cardiovascular toxicity risk when anthracycline chemotherapy is indicated.',
                      level: 'C',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    },
                    {
                      statement: 'Initiate ACEis/ARBs and β-blockers for primary prevention in high- and very high-risk patients receiving anthracyclines.',
                      level: 'B',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    },
                    {
                      statement: 'Offer dexrazoxane as a primary prevention cardioprotection in selected patients receiving > 300 mg/m² anthracycline-based chemotherapy, though not widely used due to its potential risk of reducing the efficacy of anthracyclines.',
                      level: 'B',
                      source: 'ESMO 2020'
                    },
                    {
                      statement: 'Consider administering dexrazoxane concomitantly from the beginning of anthracycline therapy in patients with preexisting cardiomyopathy requiring anthracycline-based chemotherapy, regardless of the type of cancer.',
                      level: 'B',
                      source: 'ESMO 2020'
                    },
                    {
                      statement: 'Do not use anthracycline therapy in particular in patients with an LVEF < 40% unless there are no effective alternative anticancer treatment options.',
                      level: 'D',
                      source: 'ESMO 2020'
                    }
                  ]
                },
                {
                  title: 'Management of Asymptomatic Cardiac Dysfunction',
                  id: 'anthracyclines-asymptomatic',
                  content: [
                    {
                      statement: 'Interrupt anthracycline chemotherapy temporarily and initiate HF therapy in patients developing asymptomatic moderate or severe cancer therapy-related cardiac dysfunction.',
                      level: 'B',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    },
                    {
                      statement: 'Ensure a multidisciplinary approach regarding the decision when to restart in all patients with moderate or severe asymptomatic cancer therapy-related cardiac dysfunction.',
                      level: 'B',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    },
                    {
                      statement: 'Continue anthracycline chemotherapy in asymptomatic patients with LVEF ≥ 50% developed significant fall in global longitudinal strain or troponin/natriuretic peptide elevation > ULN.',
                      level: 'B',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    },
                    {
                      statement: 'Consider initiating ACEis/ARBs and/or β-blockers in asymptomatic patients with LVEF ≥ 50% developed significant fall in global longitudinal strain or troponin or natriuretic peptide elevation > ULN.',
                      level: 'C',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    }
                  ]
                },
                {
                  title: 'Management of Symptomatic Cardiac Dysfunction',
                  id: 'anthracyclines-symptomatic',
                  content: [
                    {
                      statement: 'Initiate HF therapy in patients developing symptomatic cancer therapy-related cardiac dysfunction during anthracycline chemotherapy.',
                      level: 'B',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    },
                    {
                      statement: 'Discontinue anthracycline chemotherapy in patients developing symptomatic severe cancer therapy-related cardiac dysfunction.',
                      level: 'B',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    },
                    {
                      statement: 'Interrupt anthracycline chemotherapy temporarily in patients developing symptomatic moderate cancer therapy-related cardiac dysfunction. Ensure a multidisciplinary approach regarding the decision to restart anthracyclines.',
                      level: 'B',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    },
                    {
                      statement: 'Ensure a multidisciplinary approach regarding interruption versus continuation of anthracycline chemotherapy in patients developing mild symptomatic cancer therapy-related cardiac dysfunction.',
                      level: 'B',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    },
                    {
                      statement: 'Continue cardiovascular care indefinitely including medical treatment with ACEis, ARBs, and/or β-blockers and regular cardiology review (annual if asymptomatic) in patients with LV dysfunction or HF due to anthracyclines, regardless of improvement in LVEF or symptoms. Decide on withdrawing HF-based therapy only after a period of stability, no active cardiac risk factors, and no further active anticancer therapy.',
                      level: 'B',
                      source: 'ESMO 2020'
                    }
                  ]
                },
                {
                  title: 'Restarting Anthracyclines',
                  id: 'anthracyclines-restart',
                  content: [
                    {
                      statement: 'Consider initiating liposomal anthracycline or dexrazoxane to reduce the risk of further cardiovascular toxicity in patients with moderate or severe symptomatic or asymptomatic cancer therapy-related cardiac dysfunction requiring further anthracycline chemotherapy.',
                      level: 'C',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    }
                  ]
                }
              ]
            },
            {
              title: 'Patients Receiving Anti-HER2 Therapies',
              id: 'anti-her2-therapies',
              content: [
                {
                  statement: 'Establish regular cardiac monitoring protocols for patients receiving HER2-targeted therapies, as these agents can cause reversible left ventricular dysfunction, particularly when combined with anthracyclines.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                }
              ],
              subsections: [
                {
                  title: 'Evaluation',
                  id: 'anti-her2-evaluation',
                  content: [
                    {
                      statement: 'Obtain baseline echocardiography in all patients before initiating HER2-targeted therapies.',
                      level: 'B',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    },
                    {
                      statement: 'Obtain echocardiography every 3 months and within 12 months after completing treatment in patients receiving neoadjuvant or adjuvant HER2-targeted therapies.',
                      level: 'B',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    },
                    {
                      statement: 'Consider reducing monitoring to every 4 months in low-risk asymptomatic patients with HER2+ early breast cancer with a normal assessment after 3 months.',
                      level: 'C',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    },
                    {
                      statement: 'Consider obtaining more frequent echocardiography monitoring during treatment in high- and very high-risk patients with HER2+ early breast cancer.',
                      level: 'C',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    },
                    {
                      statement: 'Obtain echocardiography every 3 months during the first year in patients with metastatic HER2+ disease. Consider obtaining surveillance every 6 months during future treatment if the patient remains asymptomatic without cardiovascular toxicity.',
                      level: 'B',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    },
                    {
                      statement: 'Obtain general surveillance for cardiovascular toxicity with periodic cardiac physical examination, cardiac biomarkers, and/or cardiac imaging in asymptomatic patients undergoing anti-HER2-based treatment of metastatic disease.',
                      level: 'B',
                      source: 'ESMO 2020'
                    },
                    {
                      statement: 'Consider obtaining cardiac biomarker assessment for cardiac safety surveillance in patients receiving adjuvant anti-HER2-based treatment.',
                      level: 'C',
                      source: 'ESMO 2020'
                    },
                    {
                      statement: 'Obtain the same assessments in patients undergoing treatment with trastuzumab (or any HER2-targeted molecular therapy) with signs and symptoms of HF or asymptomatic patients with LVEF < 40% as in patients with LVEF ≥ 40%. Withhold trastuzumab (or any HER2-based therapy) until stabilization of cardiac status. Arrange a discussion regarding the risks and benefits of continuation with the multidisciplinary team and the patient.',
                      level: 'A',
                      source: 'ESMO 2020'
                    }
                  ]
                },
                {
                  title: 'Prevention of Cardiotoxicity',
                  id: 'anti-her2-prevention',
                  content: [
                    {
                      statement: 'Initiate ACEis/ARBs and β-blockers for primary prevention in high- and very high-risk patients receiving anti-HER2 therapies.',
                      level: 'B',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    },
                    {
                      statement: 'Consider initiating cardioprotective treatments (ACEis, ARBs, and/or β-blockers), if not already prescribed, in symptomatic patients undergoing treatment with trastuzumab and with an LVEF decrease of ≥ 10% from baseline or a decrease in LVEF to ≥ 40% but < 50%.',
                      level: 'B',
                      source: 'ESMO 2020'
                    }
                  ]
                },
                {
                  title: 'Management of Asymptomatic Cardiac Dysfunction',
                  id: 'anti-her2-asymptomatic',
                  content: [
                    {
                      statement: 'Interrupt HER2-targeted therapy temporarily and initiate HF therapy in patients developing asymptomatic severe cancer therapy-related cardiac dysfunction.',
                      level: 'B',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    },
                    {
                      statement: 'Ensure a multidisciplinary approach regarding the decision to restart HER2-targeted treatment in patients with severe asymptomatic cancer therapy-related cardiac dysfunction.',
                      level: 'B',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    },
                    {
                      statement: 'Consider continuing HER2-targeted therapy with more frequent cardiac monitoring in patients developing asymptomatic moderate (LVEF 40-49%) cancer therapy-related cardiac dysfunction.',
                      level: 'C',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    },
                    {
                      statement: 'Continue HER2-targeted therapy with more frequent cardiac monitoring in patients developing asymptomatic mild (LVEF ≥ 50%) cancer therapy-related cardiac dysfunction.',
                      level: 'B',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    },
                    {
                      statement: 'Initiate ACEis/ARBs and β-blockers in patients developing asymptomatic moderate (LVEF 40-49%) cancer therapy-related cardiac dysfunction during HER2-targeted treatment.',
                      level: 'B',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    }
                  ]
                },
                {
                  title: 'Management of Symptomatic Cardiac Dysfunction',
                  id: 'anti-her2-symptomatic',
                  content: [
                    {
                      statement: 'Initiate HF therapy in patients developing symptomatic moderate-to-severe cancer therapy-related cardiac dysfunction with LVEF < 50% during human epidermal receptor 2-targeted treatment.',
                      level: 'B',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    },
                    {
                      statement: 'Interrupt human epidermal receptor 2-targeted treatment temporarily in patients developing moderate or severe symptomatic cancer therapy-related cardiac dysfunction. Ensure a multidisciplinary approach for the decision to restart treatment after improvement of LV function and symptom resolution.',
                      level: 'B',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    },
                    {
                      statement: 'Initiate HF therapy and ensure a multidisciplinary approach regarding the decision to continue versus interrupt human epidermal receptor 2-targeted therapy in patients developing mild symptomatic cancer therapy-related cardiac dysfunction.',
                      level: 'B',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    }
                  ]
                }
              ]
            },
            {
              title: 'Patients Receiving Fluoropyrimidines',
              id: 'fluoropyrimidines',
              content: [
                {
                  statement: 'Obtain baseline cardiovascular risk assessment and evaluation including BP measurement, ECG, lipid profile, HbA1c measurement, and SCORE2/SCORE2-OP or equivalent before initiating fluoropyrimidines.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Obtain a baseline echocardiogram in patients with a history of symptomatic CVD before initiating fluoropyrimidines.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Consider screening for coronary artery disease in patients at high or very high risk of coronary artery disease before initiating fluoropyrimidines.',
                  level: 'C',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                }
              ]
            },
            {
              title: 'Patients Receiving VEGF Inhibitors',
              id: 'vegf-inhibitors',
              content: [
                {
                  statement: 'Measure BP at every clinical visit in patients treated with VEGF inhibitors, bevacizumab, or ramucirumab.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Obtain daily home monitoring of BP in patients treated with VEGF inhibitors during the first cycle, after each increase of VEGF inhibitor dose, and every 2-3 weeks thereafter.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Obtain QTc monitoring monthly during the first 3 months and every 3-6 months thereafter in patients treated with VEGF inhibitors at moderate or high risk of QTc prolongation.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Obtain baseline echocardiography in high- and very high-risk patients treated with VEGF inhibitors or bevacizumab.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Consider obtaining baseline echocardiography in low- and moderate-risk patients treated with VEGF inhibitors or bevacizumab.',
                  level: 'C',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Obtain serial echocardiogram every 4 months in moderate risk patients, every 3 months in high and very high risk patients, and every 6-12 months in moderate or high risk patients requiring long-term treatment.',
                  level: 'C',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Obtain a baseline BP measurement and serial BP monitoring along with surveillance for early detection of cardiovascular toxicity consisting of periodic cardiac physical examination, cardiac biomarkers, and/or cardiac imaging in patients receiving cancer therapeutics associated with a risk of systemic hypertension, especially anti-VEGF-based therapy.',
                  level: 'A',
                  source: 'ESMO 2020'
                },
                {
                  statement: 'Assess and optimize BP control and consider measuring LVEF and/or cardiac biomarkers in patients undergoing treatment with sunitinib (or other anti-VEGF-based therapy) showing signs and symptoms of HF. Interrupt sunitinib (or other anti-VEGF-based therapies) and later assess to determine whether reinstituting those therapies is appropriate.',
                  level: 'B',
                  source: 'ESMO 2020'
                }
              ]
            },
            {
              title: 'Patients Receiving Bcr-Abl TKIs',
              id: 'bcr-abl-tkis',
              content: [
                {
                  statement: 'Monitor for cardiovascular complications in patients receiving Bcr-Abl tyrosine kinase inhibitors, particularly arterial occlusive events, pulmonary hypertension, and cardiac dysfunction, with risk varying by specific agent.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                }
              ],
              subsections: [
                {
                  title: 'Evaluation',
                  id: 'bcr-abl-evaluation',
                  content: [
                    {
                      statement: 'Obtain baseline cardiovascular risk assessment in patients requiring second- or third-generation Bcr-Abl TKIs.',
                      level: 'B',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    },
                    {
                      statement: 'Obtain cardiovascular risk assessment every 3 months during the first year and every 6-12 months thereafter in patients treated with nilotinib or ponatinib.',
                      level: 'B',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    },
                    {
                      statement: 'Consider obtaining QTc measurement at baseline, at 2 and 4 weeks after starting nilotinib, and 2 weeks after any dose increase.',
                      level: 'C',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    },
                    {
                      statement: 'Consider obtaining baseline echocardiography in all patients before initiating second- and third-generation Bcr-Abl TKIs.',
                      level: 'C',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    },
                    {
                      statement: 'Obtain baseline echocardiography in patients scheduled to receive dasatinib.',
                      level: 'B',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    },
                    {
                      statement: 'Consider obtaining echocardiography every 3 months during the first year in high- and very high-risk patients receiving dasatinib or ponatinib.',
                      level: 'C',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    },
                    {
                      statement: 'Consider obtaining echocardiography every 6-12 months in patients requiring long-term (> 12 months) ponatinib or dasatinib.',
                      level: 'C',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    },
                    {
                      statement: 'Consider obtaining serial assessments of ankle-brachial index to detect subclinical peripheral vascular disease.',
                      level: 'C',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    }
                  ]
                },
                {
                  title: 'Management of Pulmonary Hypertension',
                  id: 'bcr-abl-pulmonary-hypertension',
                  content: [
                    {
                      statement: 'Discontinue dasatinib and perform right heart catheterization in patients developing symptomatic or asymptomatic increase in peak tricuspid regurgitation velocity > 3.4 m/s.',
                      level: 'B',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    },
                    {
                      statement: 'Consider reducing the dose of dasatinib and obtaining close monitoring of peak tricuspid regurgitation velocity with echocardiography in patients with new asymptomatic peak tricuspid regurgitation velocity of 2.9-3.4 m/s.',
                      level: 'C',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    },
                    {
                      statement: 'Switch to an alternative Bcr-Abl inhibitor after peak tricuspid regurgitation velocity recovery to < 2.8 m/s in patients with confirmed dasatinib-induced pulmonary arterial hypertension or new asymptomatic peak tricuspid regurgitation velocity > 3.4 m/s.',
                      level: 'B',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    }
                  ]
                }
              ]
            },
            {
              title: 'Patients Receiving Bruton\'s TKIs',
              id: 'brutons-tkis',
              content: [
                {
                  statement: 'Obtain BP measurements at every clinical visit in patients treated with Bruton TKIs.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Consider obtaining weekly home monitoring of BP during the first 3 months and every month thereafter in patients treated with Bruton TKIs.',
                  level: 'C',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Obtain baseline echocardiography in high-risk patients scheduled to receive Bruton TKIs.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Obtain a TTE in all patients developing AF during Bruton TKI therapy.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Obtain opportunistic screening for AF by pulse-taking or ECG rhythm strip at every clinical visit during Bruton TKI therapy.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                }
              ]
            },
            {
              title: 'Patients Receiving Multiple Myeloma Therapies',
              id: 'multiple-myeloma-therapies',
              content: [
                {
                  statement: 'Implement cardiovascular monitoring and thromboembolism prevention strategies in patients receiving multiple myeloma therapies, particularly proteasome inhibitors which can cause hypertension, heart failure, and increase VTE risk.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                }
              ],
              subsections: [
                {
                  title: 'Evaluation',
                  id: 'multiple-myeloma-evaluation',
                  content: [
                    {
                      statement: 'Obtain BP measurement at every clinical visit in patients treated with proteasome inhibitors.',
                      level: 'B',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    },
                    {
                      statement: 'Consider obtaining weekly home monitoring of BP during the first 3 months and monthly thereafter in patients treated with proteasome inhibitors.',
                      level: 'C',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    },
                    {
                      statement: 'Measure natriuretic peptides before initiating proteasome inhibitors in high- and very high-risk patients.',
                      level: 'B',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    },
                    {
                      statement: 'Consider measuring natriuretic peptides before initiating proteasome inhibitors in low- and moderate-risk patients.',
                      level: 'C',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    },
                    {
                      statement: 'Consider measuring natriuretic peptides at baseline and every cycle during the first 6 cycles in patients receiving carfilzomib or bortezomib.',
                      level: 'C',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    },
                    {
                      statement: 'Measure natriuretic peptides and cardiac troponin at baseline and every 3-6 months in patients with amyloid light-chain cardiac amyloidosis.',
                      level: 'B',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    },
                    {
                      statement: 'Obtain baseline echocardiography, including assessment for amyloid light-chain cardiac amyloidosis, in all patients with multiple myeloma scheduled to receive proteasome inhibitors.',
                      level: 'B',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    },
                    {
                      statement: 'Consider obtaining echocardiogram surveillance every 3 cycles in low-, moderate-, high-, and very high-risk patients receiving carfilzomib.',
                      level: 'C',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    },
                    {
                      statement: 'Consider obtaining echocardiogram surveillance every 3-6 months in patients with amyloid light-chain cardiac amyloidosis treated with proteasome inhibitors.',
                      level: 'C',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    }
                  ]
                },
                {
                  title: 'VTE Prophylaxis',
                  id: 'multiple-myeloma-vte',
                  content: [
                    {
                      statement: 'Initiate therapeutic doses of LMWH in patients with multiple myeloma with previous VTE.',
                      level: 'B',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    },
                    {
                      statement: 'Initiate prophylactic doses of LMWH in patients with multiple myeloma with VTE-related risk factors (excluding previous VTE) at least during the first 6 months of therapy.',
                      level: 'A',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    },
                    {
                      statement: 'Consider initiating aspirin as an alternative to LMWH in patients with multiple myeloma with no risk factors or one VTE-related risk factor (excluding previous VTE) at least during the first 6 months of therapy.',
                      level: 'C',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    },
                    {
                      statement: 'Consider initiating low doses of apixaban or rivaroxaban as an alternative to LMWH or aspirin in patients with multiple myeloma with VTE-related risk factors (excluding previous VTE) at least during the first 6 months of therapy.',
                      level: 'C',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    }
                  ]
                }
              ]
            },
            {
              title: 'Patients Receiving RAF/MEK Inhibitors',
              id: 'raf-mek-inhibitors',
              content: [
                {
                  statement: 'Obtain BP monitoring at each clinical visit and weekly outpatient monitoring during the first 3 months of treatment and monthly thereafter.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Obtain an ECG at 2 and 4 weeks after initiation of treatment and every 3 months thereafter in patients treated with cobimetinib/vemurafenib.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Obtain baseline echocardiography in all high- and very high-risk patients scheduled to receive combined RAF and MEK inhibitors.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Consider obtaining baseline echocardiography in low- and moderate-risk patients scheduled to receive combined RAF and MEK inhibitors.',
                  level: 'C',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Consider obtaining echocardiography every 4 months during the first year in high- and very high-risk patients receiving combined RAF and MEK inhibitors.',
                  level: 'C',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                }
              ]
            },
            {
              title: 'Patients Receiving Immune Checkpoint Inhibitors',
              id: 'immune-checkpoint-inhibitors',
              content: [
                {
                  statement: 'Maintain high vigilance for immune-related cardiovascular toxicities, particularly myocarditis, in patients receiving immune checkpoint inhibitors, as these complications can be life-threatening but are potentially reversible with prompt recognition and treatment.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                }
              ],
              subsections: [
                {
                  title: 'Evaluation',
                  id: 'immune-checkpoint-evaluation',
                  content: [
                    {
                      statement: 'Obtain ECG, natriuretic peptides, and cardiac troponin measurements in all patients before initiating immune checkpoint inhibitor therapy.',
                      level: 'B',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    },
                    {
                      statement: 'Consider obtaining baseline echocardiography in all patients before initiating immune checkpoint inhibitor therapy.',
                      level: 'C',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    },
                    {
                      statement: 'Obtain baseline echocardiography in high-risk patients before initiating immune checkpoint inhibitor therapy.',
                      level: 'B',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    },
                    {
                      statement: 'Consider obtaining serial ECGs and cardiac troponin measurements before administering immune checkpoint inhibitor doses 2, 3, and 4, and if normal, reduce to every 3 doses until completion of therapy to detect subclinical immune checkpoint inhibitor-related cardiovascular toxicity.',
                      level: 'C',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    },
                    {
                      statement: 'Consider obtaining cardiovascular assessment every 6-12 months in all patients requiring long-term (> 12 months) immune checkpoint inhibitor treatment.',
                      level: 'C',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    },
                    {
                      statement: 'Obtain cardiovascular assessment every 6-12 months in high-risk patients requiring long-term (> 12 months) immune checkpoint inhibitor treatment.',
                      level: 'B',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    },
                    {
                      statement: 'Admit patients with suspected immune-related myocarditis to level 2 or 3 care with ECG monitoring and resuscitation facilities.',
                      level: 'B',
                      source: 'ESMO 2022'
                    },
                    {
                      statement: 'Exclude other causes of troponin elevation, including acute coronary syndrome if appropriate (patients with cardiovascular risk factors or established coronary artery disease).',
                      level: 'B',
                      source: 'ESMO 2022'
                    },
                    {
                      statement: 'Obtain cardiac MRI with inflammatory sequences (T2-weighted short-tau inversion recovery, T1, late gadolinium enhancement) and cardiac troponin measurement in patients with suspected immune-related myocarditis or pericarditis.',
                      level: 'B',
                      source: 'ESMO 2022'
                    },
                    {
                      statement: 'Consider performing an endomyocardial biopsy to confirm or refute the diagnosis in suspected cases where cardiac MRI and troponin are not diagnostic before restarting the immune checkpoint inhibitor, if gallium-68-DOTA(0)-Phe(1)-Tyr(3)-octreotide-PET-CT is not available.',
                      level: 'B',
                      source: 'ESMO 2022'
                    }
                  ]
                },
                {
                  title: 'Management',
                  id: 'immune-checkpoint-management',
                  content: [
                    {
                      statement: 'Obtain cardiac troponin, ECG, and cardiovascular imaging (echocardiography and cardiac MRI) to diagnose immune checkpoint inhibitor-associated myocarditis.',
                      level: 'B',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    },
                    {
                      statement: 'Interrupt immune checkpoint inhibitor treatment temporarily in patients with suspected immune checkpoint inhibitor-associated myocarditis until the diagnosis is confirmed or refuted.',
                      level: 'B',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    },
                    {
                      statement: 'Consider performing an endomyocardial biopsy to confirm the diagnosis of immune checkpoint inhibitor-associated myocarditis if the diagnosis is suspected but not confirmed after cardiac imaging and biomarkers.',
                      level: 'C',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    },
                    {
                      statement: 'Interrupt immune checkpoint inhibitor treatment in patients with confirmed immune checkpoint inhibitor-associated myocarditis.',
                      level: 'B',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    },
                    {
                      statement: 'Obtain continuous ECG monitoring to assess for new AV block and tachyarrhythmias during the acute phase in all patients with symptomatic immune checkpoint inhibitor-associated myocarditis.',
                      level: 'B',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    },
                    {
                      statement: 'Initiate early high-dose corticosteroids in patients with cancer and confirmed immune checkpoint inhibitor-associated myocarditis. Continue high-dose corticosteroids until resolution of symptoms, LV systolic dysfunction, conduction abnormalities, and significant cardiac troponin reduction.',
                      level: 'B',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    },
                    {
                      statement: 'Interrupt immune checkpoint inhibitor therapy in patients with immune-related cardiovascular toxicities and discontinue permanently in most cases of confirmed immune-related myocarditis.',
                      level: 'B',
                      source: 'ESMO 2022'
                    },
                    {
                      statement: 'Initiate IV methylprednisone 500-1,000 mg/day for 3 days and then review in confirmed cases of immune-related myocarditis.',
                      level: 'B',
                      source: 'ESMO 2022'
                    },
                    {
                      statement: 'Switch to oral prednisolone 1 mg/kg/day (up to a maximum of 80 mg/day) if troponin levels fall to < 50% of peak level or to normal after 3 days of IV methylprednisolone and the patient is clinically stable (no HF, ventricular arrhythmias, complete heart block), reducing by 10 mg/week with troponin monitoring if cardiovascular stability continues.',
                      level: 'B',
                      source: 'ESMO 2022'
                    },
                    {
                      statement: 'Manage HF or cardiogenic shock according to the current published guidelines on HF.',
                      level: 'B',
                      source: 'ESMO 2022'
                    },
                    {
                      statement: 'Arrange a multidisciplinary team discussion before restarting immune checkpoint inhibitor therapy in patients with mild, clinically uncomplicated immune-related myocarditis.',
                      level: 'B',
                      source: 'ESMO 2022'
                    }
                  ]
                }
              ]
            },
            {
              title: 'Patients Receiving CDK4/6 Inhibitors',
              id: 'cdk4-6-inhibitors',
              content: [
                {
                  statement: 'Obtain QTc monitoring at baseline and 14 and 28 days in all patients with cancer receiving ribociclib.',
                  level: 'A',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Obtain QTc monitoring in patients treated with ribociclib with any dose increase.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Consider obtaining QTc monitoring in patients treated with palbociclib or abemaciclib having a baseline QTc above the normal range or other conditions likely to prolong the QTc interval.',
                  level: 'C',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                }
              ]
            },
            {
              title: 'Patients Receiving ALK/EGFR Inhibitors',
              id: 'alk-egfr-inhibitors',
              content: [
                {
                  statement: 'Obtain baseline cardiovascular risk assessment in patients before initiating ALK inhibitors and EGFR inhibitors.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Obtain baseline echocardiography in all patients with cancer before initiating osimertinib.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Consider obtaining home BP monitoring in patients treated with brigatinib, crizotinib, or lorlatinib.',
                  level: 'C',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Consider obtaining cholesterol profile assessments every 3-6 months in patients on crizotinib or lorlatinib.',
                  level: 'C',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Consider obtaining echocardiography every 3 months in patients during osimertinib therapy.',
                  level: 'C',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Consider obtaining ECG 4 weeks after initiating ALK inhibitors and every 3-6 months during therapy.',
                  level: 'C',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                }
              ]
            },
            {
              title: 'Patients Receiving CAR T-cell/TIL Therapies',
              id: 'car-t-cell-til',
              content: [
                {
                  statement: 'Obtain baseline ECG, natriuretic peptides, and cardiac troponin in all patients with cancer before initiating CAR T-cell and TILs therapies.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Consider obtaining baseline echocardiography before initiating CAR T-cell and TILs therapies.',
                  level: 'C',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Obtain baseline echocardiography in patients with preexisting CVD before initiating CAR T-cell and TILs therapies.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Obtain measurement of natriuretic peptides, cardiac troponin, and echocardiography in patients developing cytokine release syndrome of ASTCT ≥ 2.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                }
              ]
            },
            {
              title: 'Patients Receiving Endocrine Therapy',
              id: 'endocrine-therapy',
              content: [
                {
                  statement: 'Obtain baseline cardiovascular risk assessment and estimation of 10-year fatal and non-fatal CVD risk with SCORE2 or SCORE2-OP in patients with breast cancer receiving endocrine therapies without preexisting CVD.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Obtain annual cardiovascular risk assessment during endocrine therapy in patients with breast cancer with a high 10-year risk of (fatal and non-fatal) cardiovascular events according to SCORE2/SCORE2-OP.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Consider obtaining cardiovascular risk assessment every 5 years in patients with breast cancer with a low or moderate 10-year risk of (fatal and non-fatal) cardiovascular events according to SCORE2/SCORE2-OP.',
                  level: 'C',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                }
              ]
            },
            {
              title: 'Patients Receiving Androgen Deprivation Therapy',
              id: 'androgen-deprivation-therapy',
              content: [
                {
                  statement: 'Obtain baseline cardiovascular risk assessment and estimation of 10-year fatal and non-fatal CVD risk with SCORE2 or SCORE2-OP in patients treated with androgen deprivation therapy without preexisting CVD.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Obtain baseline and serial ECGs in patients at risk of QTc prolongation during androgen deprivation therapy.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Consider initiating GnRH antagonists in patients with preexisting symptomatic coronary artery disease requiring androgen deprivation therapy.',
                  level: 'C',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Obtain annual cardiovascular risk assessment during androgen deprivation therapy.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                }
              ]
            },
            {
              title: 'Patients Receiving Radiotherapy',
              id: 'radiotherapy',
              content: [
                {
                  statement: 'Implement long-term cardiovascular surveillance and risk reduction strategies for patients receiving radiation therapy involving the heart, as radiation-induced cardiovascular disease can manifest years to decades after treatment.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                }
              ],
              subsections: [
                {
                  title: 'Minimization of Radiation Exposure',
                  id: 'radiation-minimization',
                  content: [
                    {
                      statement: 'Consider using modern radiotherapy techniques (such as 3D conformal radiotherapy and intensity-modulated radiotherapy) during planning mediastinal and chest radiation to reduce the risk of short- and long-term cardiotoxicity.',
                      level: 'C',
                      source: 'CCS 2016'
                    }
                  ]
                },
                {
                  title: 'Evaluation',
                  id: 'radiotherapy-evaluation',
                  content: [
                    {
                      statement: 'Obtain baseline cardiovascular risk assessment and estimation of 10-year fatal and non-fatal CVD risk with SCORE2 or SCORE2-OP.',
                      level: 'B',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    },
                    {
                      statement: 'Consider obtaining baseline echocardiography in patients with previous CVD before administering radiotherapy to a volume including the heart.',
                      level: 'C',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    }
                  ]
                },
                {
                  title: 'Considerations for Implanted Cardiac Devices',
                  id: 'implanted-devices',
                  content: [
                    {
                      statement: 'Obtain risk stratification including planned radiation type and energy, dose to the cardiac implantable electronic device, the device type, and pacing dependence before initiating cancer treatment.',
                      level: 'B',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    },
                    {
                      statement: 'Obtain a cardiac implantable electronic device check in all patients undergoing radiotherapy before and after completing radiotherapy, and during radiotherapy according to individual risk.',
                      level: 'B',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    },
                    {
                      statement: 'Obtain ECG monitoring and/or pulse oximetry during every radiotherapy session in patients with a cardiac implantable electronic device undergoing radiotherapy at high risk of arrhythmia and/or device dysfunction.',
                      level: 'B',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    }
                  ]
                },
                {
                  title: 'Management of Pericarditis',
                  id: 'radiotherapy-pericarditis',
                  content: [
                    {
                      statement: 'Consider obtaining echocardiography surveillance every 5 years in patients after acute pericarditis developed during radiotherapy to a volume including the heart, as these patients are at higher risk of developing chronic constrictive pericarditis.',
                      level: 'C',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    }
                  ]
                },
                {
                  title: 'Management of Coronary Artery Disease',
                  id: 'radiotherapy-cad',
                  content: [
                    {
                      statement: 'Obtain noninvasive stress testing to guide ischemia-directed management in asymptomatic cancer survivors with new moderate or severe radiation-induced coronary artery disease detected on coronary CTA.',
                      level: 'B',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    },
                    {
                      statement: 'Arrange a multidisciplinary team discussion for clinical decision-making in patients with radiation-induced coronary artery disease and inducible ischemia or severe left main coronary artery disease.',
                      level: 'B',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    },
                    {
                      statement: 'Obtain preoperative assessment of LIMA and right internal mammary artery viability, venous access, and sternal wound healing in cancer survivors with radiation-induced coronary artery disease, if CABG is considered.',
                      level: 'B',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    },
                    {
                      statement: 'Consider performing PCI in cancer survivors with radiation-induced coronary artery disease with severe left main or three-vessel disease with a high SYNTAX score (> 22), if the procedure is technically feasible.',
                      level: 'C',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    }
                  ]
                },
                {
                  title: 'Management of Valvular Heart Disease',
                  id: 'radiotherapy-valvular',
                  content: [
                    {
                      statement: 'Consider performing TAVI in patients with symptomatic severe aortic stenosis caused by radiation at intermediate surgical risk.',
                      level: 'C',
                      source: 'EHA/ESC/ESTRO/IC-OS 2022'
                    }
                  ]
                },
                {
                  title: 'Surveillance',
                  id: 'radiotherapy-surveillance',
                  content: [
                    {
                      statement: 'Assess for coronary artery disease, ischemia, and valvular disease in patients with a history of mediastinal chest radiotherapy, even if asymptomatic, starting at 5 years post-treatment and at least every 3-5 years thereafter.',
                      level: 'A',
                      source: 'ESMO 2020'
                    }
                  ]
                }
              ]
            },
            {
              title: 'Patients Receiving HSCT',
              id: 'hsct',
              content: [
                {
                  statement: 'Obtain baseline and serial cardiovascular risk assessment (3 and 12 months, then yearly) including BP measurement, ECG, lipid measurement, and HbA1c in HSCT recipients.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Obtain echocardiography in all patients before HSCT.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Consider obtaining baseline natriuretic peptides measurement before HSCT.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
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
              statement: 'Provide education and support for making appropriate healthy lifestyle choices in patients with cancer.',
              level: 'B',
              source: 'EHA/ESC/ESTRO/IC-OS 2022'
            },
            {
              statement: 'Educate patients with cancer regarding the recognition of early signs and symptoms of CVD.',
              level: 'B',
              source: 'EHA/ESC/ESTRO/IC-OS 2022'
            }
          ]
        },
        {
          title: 'Preventative Measures',
          id: 'preventative-measures',
          content: [
            {
              statement: 'Implement primary prevention strategies and risk factor management to reduce the incidence and severity of cardiovascular complications in cancer patients receiving potentially cardiotoxic therapies.',
              level: 'B',
              source: 'EHA/ESC/ESTRO/IC-OS 2022'
            }
          ],
          subsections: [
            {
              title: 'Primary Prevention',
              id: 'primary-prevention',
              content: [
                {
                  statement: 'Manage cardiovascular risk factors before, during, and after cancer therapy according to current published guidelines on CVD prevention.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Initiate ACEis/ARBs and β-blockers for primary prevention in high- and very high-risk patients receiving targeted cancer therapies likely to cause HF.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Consider initiating statins for primary prevention in adult patients with cancer at high or very high risk of cardiovascular toxicity.',
                  level: 'C',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Consider initiating prophylactic ACEis or ARBs (if intolerant to ACEis) and/or selected β-blockers in patients with a normal LVEF and cardiovascular risk factors scheduled to undergo anticancer therapy with known cardiotoxic agents, particularly in patients exposed to multiple cardiotoxic agents.',
                  level: 'C',
                  source: 'ESMO 2020'
                },
                {
                  statement: 'Consider initiating cardioprotective treatments (ACEis, ARBs, and/or β-blockers), if not already administered, in asymptomatic patients undergoing treatment with any cardiotoxic anticancer therapy with normal LVEF but a decrease in average global longitudinal strain from baseline assessment (≥ 12% relative decrease or ≥ 5% absolute decrease). Do not alter life-saving chemotherapy solely based on changes in LV strain.',
                  level: 'C',
                  source: 'ESMO 2020'
                },
                {
                  statement: 'Assess traditional cardiovascular risk factors and ensure optimal treatment of CVD according to current published guidelines in all patients before, during, and after receiving cancer therapy.',
                  level: 'B',
                  source: 'CCS 2016'
                },
                {
                  statement: 'Consider initiating ACEis/ARB, β-blockers, and/or statins to reduce the risk of cardiotoxicity in patients at high risk for cancer treatment-related LV dysfunction.',
                  level: 'C',
                  source: 'CCS 2016'
                }
              ]
            },
            {
              title: 'Thromboprophylaxis',
              id: 'thromboprophylaxis',
              content: [
                {
                  statement: 'Administer extended prophylaxis with LMWH for 4 weeks postoperatively in patients with cancer undergoing major open or laparoscopic abdominal or pelvic surgery with low bleeding risk and high VTE risk.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Initiate prophylactic LMWH for the primary prevention of VTE in hospitalized patients with cancer or patients with cancer and prolonged bedrest or reduced mobility, in the absence of bleeding or other contraindications.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Consider initiating primary thromboprophylaxis with a non-VKA OAC (apixaban or rivaroxaban) or LMWH in ambulatory patients with cancer at high risk of thrombosis receiving systemic therapy, in the absence of significant contraindications.',
                  level: 'C',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Discuss the relative benefits and harms, cancer prognosis, drug cost, and duration of treatment with the patient before initiating prophylactic anticoagulation for the primary prevention of VTE.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
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
              statement: 'Establish systematic follow-up and surveillance protocols for cancer patients and survivors to ensure early detection and management of cardiovascular complications throughout and after cancer treatment.',
              level: 'B',
              source: 'EHA/ESC/ESTRO/IC-OS 2022'
            }
          ],
          subsections: [
            {
              title: 'Indications for Referral',
              id: 'indications-referral',
              content: [
                {
                  statement: 'Ensure close and early collaboration between cardiologists, oncologists, hematologists, and radiation oncologists to ensure lifelong cardiovascular health and to avoid unnecessary discontinuation of cancer therapy.',
                  level: 'B',
                  source: 'ESMO 2020'
                },
                {
                  statement: 'Obtain a cardiology consultation, preferably with a cardio-oncology specialist, in asymptomatic patients undergoing treatment with cardiotoxic anticancer therapy and having elevation in cardiac troponin levels.',
                  level: 'B',
                  source: 'ESMO 2020'
                },
                {
                  statement: 'Obtain a cardiology consultation in patients undergoing treatment with any cardiotoxic agent and presenting with unexplained signs and symptoms, such as (but not limited to) sinus tachycardia, rapid weight gain, dyspnea, peripheral edema, or ascites.',
                  level: 'B',
                  source: 'ESMO 2020'
                },
                {
                  statement: 'Consider referring patients at high risk of cancer therapy-related CVD or patients developing cardiovascular complications during cancer therapy (such as > 10% decrease in LVEF from baseline or LVEF < 53%) to a cardio-oncology clinic or specialist skilled in the management of this patient population, for optimization of cardiac function and consideration of primary or secondary prevention strategies.',
                  level: 'C',
                  source: 'CCS 2016'
                },
                {
                  statement: 'Refer high- and very high-risk patients to a cardiologist before initiating anticancer therapy.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Consider referring moderate-risk patients to a cardiologist before initiating anticancer therapy.',
                  level: 'C',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Refer patients with cancer and preexisting CVD or abnormal findings at baseline cardiovascular toxicity risk assessment requiring potentially cardiotoxic anticancer therapy to a cardiologist.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Refer patients with abnormal findings on baseline ECG to a cardiologist.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Refer patients with new cardiac symptoms or new asymptomatic abnormalities on echocardiogram and/or in cardiac serum biomarkers at the end of cancer therapy assessment to a cardiologist.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                }
              ]
            },
            {
              title: 'Post-cancer Therapy Assessment',
              id: 'post-therapy-assessment',
              content: [
                {
                  statement: 'Assess cardiovascular risk factors during the first year after cancer therapy and thereafter according to current published guidelines on CVD prevention.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Obtain cardiac surveillance with echocardiography and cardiac serum biomarkers at 3 and 12 months after completion of cancer therapy in high-risk asymptomatic patients, and consider obtaining within 12 months in moderate- and low-risk asymptomatic patients.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Refer patients with new cardiac symptoms or new asymptomatic abnormalities on echocardiogram and/or in cardiac serum biomarkers at the end of therapy assessment to a cardiologist.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Consider obtaining exercise stress echocardiography and/or cardiopulmonary exercise testing in selected patients with exercise intolerance persisting at 12 months after cancer treatment and with normal resting echocardiogram and cardiac biomarkers.',
                  level: 'C',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                }
              ]
            },
            {
              title: 'Cardiovascular Surveillance, Asymptomatic Childhood/Adolescent Cancer Survivors',
              id: 'pediatric-survivors',
              content: [
                {
                  statement: 'Educate adult survivors of childhood or adolescent cancer treated with anthracyclines, mitoxantrone, and/or radiotherapy to a volume including the heart regarding their increased cardiovascular risk.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Obtain annual screening for modifiable cardiovascular risk factors.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Obtain cardiovascular assessment in female childhood or adolescent cancer survivors before pregnancy or in the first trimester.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Consider obtaining echocardiography surveillance every 2 years in adult survivors of high-risk childhood or adolescent cancer, and every 5 years in adult survivors of moderate-risk childhood or adolescent cancer.',
                  level: 'C',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                }
              ]
            },
            {
              title: 'Cardiovascular Surveillance, Asymptomatic Adult Cancer Survivors',
              id: 'adult-survivors',
              content: [
                {
                  statement: 'Obtain annual cardiovascular risk assessment, including ECG and natriuretic peptides, and initiate cardiovascular risk factor management in cancer survivors treated with a potentially cardiotoxic cancer drug or radiotherapy.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Obtain cardiovascular toxicity risk re-stratification 5 years after therapy to organize long-term follow-up.',
                  level: 'B',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Consider obtaining echocardiography at years 1, 3, and 5 after completion of cardiotoxic cancer therapy and every 5 years thereafter in asymptomatic very high- and early high-risk adult cancer survivors.',
                  level: 'C',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Consider obtaining echocardiography in asymptomatic late high-risk adult cancer survivors starting at 5 years after radiation to a volume including the heart and every 5 years thereafter.',
                  level: 'C',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Consider obtaining echocardiography every 5 years in asymptomatic moderate-risk adult cancer survivors.',
                  level: 'C',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Consider obtaining noninvasive screening for coronary artery disease every 5-10 years in asymptomatic patients received > 15 Gy mean heart dose, starting at 5 years after radiation.',
                  level: 'C',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Consider obtaining carotid ultrasound imaging every 5 years in asymptomatic patients with a history of head/neck radiotherapy, starting at 5 years after radiation and every 5-10 years thereafter.',
                  level: 'C',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Consider obtaining renal artery ultrasound in patients with a history of abdominal and pelvic radiation presenting with worsening renal function and/or systemic hypertension.',
                  level: 'C',
                  source: 'EHA/ESC/ESTRO/IC-OS 2022'
                },
                {
                  statement: 'Consider obtaining periodic screening for the development of new asymptomatic LV dysfunction with cardiac biomarkers and potentially cardiac imaging at 6-12 months, at 2 years post-treatment, and possibly periodically thereafter in asymptomatic patients treated with cardiotoxic agents and having a normal cardiac function.',
                  level: 'C',
                  source: 'ESMO 2020'
                },
                {
                  statement: 'Continue cardiovascular care indefinitely including medical treatment with ACEis, ARBs, and/or β-blockers and regular cardiology review (annual if asymptomatic) in patients with LV dysfunction or HF due to anticancer therapies, regardless of improvement in LVEF or symptoms. Decide on withdrawing HF-based therapy only after a period of stability, no active cardiac risk factors, and no further active anticancer therapy.',
                  level: 'B',
                  source: 'ESMO 2020'
                },
                {
                  statement: 'Assess for coronary artery disease, ischemia, and valvular disease in patients with a history of mediastinal chest radiotherapy, even if asymptomatic, starting at 5 years post-treatment and at least every 3-5 years thereafter.',
                  level: 'A',
                  source: 'ESMO 2020'
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
        authors: 'Alexander R Lyon, Teresa López-Fernández, Liam S Couch et al.',
        title: '2022 ESC Guidelines on cardio-oncology developed in collaboration with the European Hematology Association (EHA), the European Society for Therapeutic Radiology and Oncology (ESTRO) and the International Cardio-Oncology Society (IC-OS)',
        journal: 'Eur Heart J Cardiovasc Imaging. 2022 Sep 10;23(10):e333-e465',
        year: '2022',
        link: 'https://pubmed.ncbi.nlm.nih.gov/36017575/'
      },
      {
        id: 2,
        authors: 'G Curigliano, D Lenihan, M Fradley et al.',
        title: 'Management of cardiac disease in cancer patients throughout oncological treatment: ESMO consensus recommendations',
        journal: 'Ann Oncol. 2020 Feb;31(2):171-190',
        year: '2020',
        link: 'https://pubmed.ncbi.nlm.nih.gov/31959335/'
      },
      {
        id: 3,
        authors: 'Sean A Virani, Susan Dent, Christine Brezden-Masley et al.',
        title: 'Canadian Cardiovascular Society Guidelines for Evaluation and Management of Cardiovascular Complications of Cancer Therapy',
        journal: 'Can J Cardiol. 2016 Jul;32(7):831-41',
        year: '2016',
        link: 'https://pubmed.ncbi.nlm.nih.gov/27343741/'
      },
      {
        id: 4,
        authors: 'J Haanen, M Obeid, L Spain et al.',
        title: 'Management of toxicities from immunotherapy: ESMO Clinical Practice Guideline for diagnosis, treatment and follow-up',
        journal: 'Ann Oncol. 2022 Dec;33(12):1217-1238',
        year: '2022',
        link: 'https://pubmed.ncbi.nlm.nih.gov/36270461/'
      },
      {
        id: 5,
        authors: 'Saro H Armenian, Christina Lacchetti, Ana Barac et al.',
        title: 'Prevention and Monitoring of Cardiac Dysfunction in Survivors of Adult Cancers: American Society of Clinical Oncology Clinical Practice Guideline',
        journal: 'J Clin Oncol. 2017 Mar 10;35(8):893-911',
        year: '2017',
        link: 'https://pubmed.ncbi.nlm.nih.gov/27918725/'
      },
      {
        id: 6,
        authors: 'Diana J Mihalcea, Maria Florescu, Dragos Vinereanu',
        title: 'Mechanisms and Genetic Susceptibility of Chemotherapy-Induced Cardiotoxicity in Patients With Breast Cancer',
        journal: 'Am J Ther. 2017 Jan/Feb;24(1):e3-e11',
        year: '2017',
        link: 'https://pubmed.ncbi.nlm.nih.gov/27145188/'
      },
      {
        id: 7,
        authors: 'Luis Alberto More, Sarah Lane, Aarti Asnani',
        title: '5-FU Cardiotoxicity: Vasospasm, Myocarditis, and Sudden Death',
        journal: 'Curr Cardiol Rep. 2021 Feb 3;23(3):17',
        year: '2021',
        link: 'https://pubmed.ncbi.nlm.nih.gov/33537861/'
      },
      {
        id: 8,
        authors: 'Diwakar Jain, Raymond R Russell, Ronald G Schwartz et al.',
        title: 'Cardiac Complications of Cancer Therapy: Pathophysiology, Identification, Prevention, Treatment, and Future Directions',
        journal: 'Curr Cardiol Rep. 2017 May;19(5):36',
        year: '2017',
        link: 'https://pubmed.ncbi.nlm.nih.gov/28374177/'
      },
      {
        id: 9,
        authors: 'Naomi Dempsey, Amanda Rosenthal, Nitika Dabas et al.',
        title: 'Trastuzumab-induced cardiotoxicity: a review of clinical risk factors, pharmacologic prevention, and cardiotoxicity of other HER2-directed therapies',
        journal: 'Breast Cancer Res Treat. 2021 Jul;188(1):21-36',
        year: '2021',
        link: 'https://pubmed.ncbi.nlm.nih.gov/34115243/'
      },
      {
        id: 10,
        authors: 'Ahmed M Badheeb, Faisal Ahmed, Hassan A Alzahrani et al.',
        title: 'Cancer Therapy-Related Cardiotoxicity: A Comprehensive Retrospective Analysis at Najran Cancer Center, Saudi Arabia',
        journal: 'Cureus. 2023 Jul 2;15(7):e41287',
        year: '2023',
        link: 'https://pubmed.ncbi.nlm.nih.gov/37533611/'
      },
      {
        id: 11,
        authors: 'Stephanie Itala Rizk, Isabela Bispo Santos da Silva Costa, Cecília Beatriz Bittencourt Viana Cruz et al.',
        title: 'Randomized, Placebo-Controlled, Triple-Blind Clinical Trial of Ivabradine for the Prevention of Cardiac Dysfunction During Anthracycline-Based Cancer Therapy',
        journal: 'J Am Heart Assoc. 2025 May 20;14(10):e039745',
        year: '2025',
        link: 'https://pubmed.ncbi.nlm.nih.gov/40357644/'
      }
    ]
  }
};