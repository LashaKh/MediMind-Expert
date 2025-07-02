export const diagnosticInvestigations = {
  id: 'diagnostic-investigations',
  title: 'Diagnostic Investigations',
  subsections: {
    generalPrinciples: {
      title: 'General Principles',
      evidenceLevel: 'B',
      content: '**Evidence Level B**: As per ESC 2023 guidelines, obtain systematic evaluation in all patients with suspected or established cardiomyopathy using a multiparametric approach, including clinical evaluation, pedigree analysis, ECG, Holter monitoring, laboratory tests, and multimodality imaging.'
    },
    historyAndPhysicalExamination: {
      title: 'History and Physical Examination',
      evidenceLevel: 'B',
      content: '**Evidence Level B**: As per ACC/AHA/AMSSM/…/SCMR 2024 guidelines:\n- Elicit a complete medical and three-generation family history and perform a comprehensive physical examination as part of the initial evaluation of patients with suspected HCM.\n- Obtain evaluation of familial inheritance, including a three-generation family history, as part of the initial assessment of patients with HCM.\n- Assess for symptoms of sleep-disordered breathing in patients with HCM and, if present, refer to a sleep medicine specialist for evaluation and treatment.\n\n**Evidence Level B**: As per ESC 2023 guidelines, elicit a three-to-four-generation family history in all patients with suspected cardiomyopathy to aid in diagnosis, provide clues to underlying etiology, determine inheritance patterns, and identify at-risk relatives.'
    },
    ecg: {
      title: 'ECG',
      evidenceLevel: 'B',
      content: '**Evidence Level B**: As per ACC/AHA/AMSSM/…/SCMR 2024 guidelines, obtain a 12-lead ECG as part of the initial evaluation of patients with HCM.\n\n**Evidence Level B**: As per ESC 2014 guidelines, obtain a standard 12-lead ECG to aid diagnosis and provide clues to underlying etiology in patients with suspected HCM.'
    },
    ambulatoryEcgMonitoring: {
      title: 'Ambulatory ECG Monitoring',
      evidenceLevels: ['B', 'C'],
      content: '**Evidence Level B**: As per ACC/AHA/AMSSM/…/SCMR 2024 guidelines:\n- Obtain 24-48-hour ambulatory ECG monitoring in the initial evaluation to identify patients at risk for SCD and to guide the management of arrhythmias.\n- Obtain extended (> 24-hour) ECG monitoring or event recording for arrhythmia diagnosis and clinical correlation in patients with HCM experiencing palpitations or lightheadedness.\n- Obtain extended ambulatory monitoring to screen for AF as part of initial evaluation in patients with HCM deemed to be at high risk for developing AF based on the presence of risk factors or as determined by a validated risk score, and eligible for anticoagulation.\n\n**Evidence Level C**: Consider obtaining extended ambulatory monitoring to assess for asymptomatic paroxysmal AF as part of initial evaluation in adult patients with HCM without risk factors for AF and eligible for anticoagulation.\n\n**Evidence Level B**: As per ESC 2014 guidelines:\n- Obtain 48-hour ambulatory ECG monitoring to detect atrial and ventricular arrhythmia in patients with newly diagnosed HCM.\n- Obtain 48-hour ambulatory ECG monitoring in patients with frequent or sustained palpitations.'
    },
    implantableLoopRecorder: {
      title: 'Implantable Loop Recorder',
      evidenceLevel: 'C',
      content: '**Evidence Level C**: As per ESC 2014 guidelines:\n- Consider placing an implantable loop recorder in patients with recurrent episodes of unexplained syncope at low risk of SCD.\n- Consider placing an implantable loop recorder in patients with frequent palpitations with no identified cause after prolonged ECG monitoring.'
    },
    tte: {
      title: 'TTE',
      evidenceLevels: ['B', 'C'],
      content: '**Evidence Level B**: As per ACC/AHA/AMSSM/…/SCMR 2024 guidelines:\n- Obtain a TTE in the initial evaluation of patients with suspected HCM.\n- Obtain a TTE with provocative maneuvers in patients with HCM and resting peak LVOT gradient < 50 mmHg.\n- Obtain an exercise TTE to detect and quantify dynamic LVOTO in symptomatic patients with HCM not having a resting or provocable outflow tract peak gradient ≥ 50 mmHg on TTE.\n\n**Evidence Level C**: Consider obtaining an exercise TTE to detect and quantify dynamic LVOTO in asymptomatic patients with HCM not having a resting or provocable outflow tract peak gradient ≥ 50 mmHg on standard TTE.\n\n**Evidence Level B**: As per ESC 2023 guidelines:\n- Obtain a comprehensive evaluation of cardiac dimensions and LV and RV systolic (global and regional) and LV diastolic function in all patients with cardiomyopathy at initial evaluation and during follow-up to monitor disease progression and aid risk stratification and management.\n- Obtain a 2D and Doppler TTE at rest and during Valsalva maneuver in the sitting and semi-supine positions, and then on standing if no gradient is provoked, to detect LVOTO in all patients with HCM.\n- Obtain a 2D and Doppler TTE during exercise in the standing, sitting (when possible), or semi-supine position to detect provocable LVOTO and exercise-induced MR in symptomatic patients with HCM and a resting or provoked peak instantaneous LVOT gradient < 50 mmHg.'
    },
    tee: {
      title: 'TEE',
      evidenceLevel: 'C',
      content: '**Evidence Level C**: As per ACC/AHA/AMSSM/…/SCMR 2024 guidelines, consider obtaining a TEE in patients with HCM if TTE is inconclusive in clinical decision-making regarding medical therapy, and in situations such as planning for myectomy, exclusion of subaortic membrane or MR secondary to structural abnormalities of the mitral valve apparatus, or in the assessment of the feasibility of alcohol septal ablation.\n\n**Evidence Level C**: As per ESC 2023 guidelines, consider obtaining a TEE in patients with HCM and LVOTO if the mechanism of obstruction is unclear, when assessing the mitral valve apparatus before a septal reduction procedure, or when severe MR caused by intrinsic valve abnormalities is suspected.'
    },
    contrastEnhancedEchocardiogram: {
      title: 'Contrast-enhanced Echocardiogram',
      evidenceLevels: ['B', 'C'],
      content: '**Evidence Level C**: As per ACC/AHA/AMSSM/…/SCMR 2024 guidelines, consider obtaining IV contrast-enhanced echocardiography if the diagnosis of apical HCM, apical aneurysm, or atypical patterns of hypertrophy is inconclusive on TTE, particularly if other imaging modalities such as cardiovascular magnetic resonance are not readily available or are contraindicated.\n\n**Evidence Level B**: As per ESC 2014 guidelines:\n- Obtain IV contrast-enhanced TTE with LV cavity opacification as an alternative to cardiovascular MRI in patients with suboptimal images or with suspected LV apical hypertrophy or aneurysm.\n- Obtain intracoronary contrast-enhanced echocardiography to ensure correct localization of alcohol in all patients undergoing septal alcohol ablation.\n\n**Evidence Level C**: Consider obtaining a TEE with intracoronary contrast injection of the candidate septal perforator artery to guide septal alcohol ablation when transthoracic windows are insufficient for proper visualization of echo-contrast within the myocardium.'
    },
    cardiacMri: {
      title: 'Cardiac MRI',
      evidenceLevels: ['B', 'C'],
      content: '**Evidence Level B**: As per ACC/AHA/AMSSM/…/SCMR 2024 guidelines:\n- Obtain cardiac MRI for diagnostic clarification in patients with suspected HCM if echocardiography is inconclusive.\n- Consider obtaining cardiac MRI in patients with LVH if there is a suspicion of alternative diagnoses, including infiltrative or storage disease and athlete\'s heart.\n- Consider obtaining cardiac MRI to assess for maximum LV wall thickness, ejection fraction, LV apical aneurysm, and extent of myocardial replacement fibrosis with late gadolinium enhancement in patients with HCM not otherwise identified as high risk for SCD, or if a decision to proceed with ICD remains uncertain after clinical assessment.\n- Obtain cardiac MRI to inform the selection and planning of septal reduction therapy in patients with obstructive HCM if the anatomic mechanism of obstruction is inconclusive on echocardiography.\n\n**Evidence Level B**: As per ESC 2023 guidelines, obtain contrast-enhanced cardiac MRI in the initial evaluation of patients with cardiomyopathy.\n\n**Evidence Level C**: Consider obtaining contrast-enhanced cardiac MRI before alcohol septal ablation or myectomy to assess the extent and distribution of hypertrophy and myocardial fibrosis.'
    },
    cardiacCt: {
      title: 'Cardiac CT',
      evidenceLevel: 'C',
      content: '**Evidence Level C**: As per ACC/AHA/AMSSM/…/SCMR 2024 guidelines, consider obtaining cardiac CT in adult patients with suspected HCM if the echocardiography is not diagnostic and cardiac MRI is unavailable.\n\n**Evidence Level C**: As per ESC 2023 guidelines:\n- Consider obtaining contrast-enhanced cardiac CT in patients with suspected cardiomyopathy having inadequate echocardiographic imaging and contraindications to cardiac MRI.\n- Consider obtaining CT-based imaging to exclude congenital or acquired coronary artery disease as a cause of the observed myocardial abnormality in patients with suspected cardiomyopathy.\n- Consider obtaining 18F-FDG-PET in the evaluation of patients with cardiomyopathy if cardiac sarcoidosis is suspected.'
    },
    nuclearImaging: {
      title: 'Nuclear Imaging',
      evidenceLevel: 'B',
      content: '**Evidence Level B**: As per ESC 2023 guidelines, obtain 99mTc-3, 3-diphosphono-1, 2-propanodicarboxylic acid, -PYP, -HMDP bone-tracer scintigraphy in patients with suspected transthyretin amyloidosis-related cardiac amyloidosis.'
    },
    cardiopulmonaryExerciseTesting: {
      title: 'Cardiopulmonary Exercise Testing',
      evidenceLevels: ['B', 'C'],
      content: 'This section was partially covered in the first 400 lines - to be completed in the next segment.'
    },
    evaluationOfUnexplainedSyncope: {
      title: 'Evaluation of Unexplained Syncope',
      evidenceLevels: ['B', 'C'],
      content: 'This section was partially covered in the first 400 lines - to be completed in the next segment.'
    },
    evaluationForCoronaryArteryDisease: {
      title: 'Evaluation for Coronary Artery Disease',
      evidenceLevel: 'B',
      content: 'This section was partially covered in the first 400 lines - to be completed in the next segment.'
    },
    laboratoryTests: {
      title: 'Laboratory Tests',
      evidenceLevels: ['B', 'C'],
      content: 'This section was partially covered in the first 400 lines - to be completed in the next segment.'
    },
    geneticTesting: {
      title: 'Genetic Testing',
      evidenceLevels: ['B', 'C', 'I'],
      content: 'This section was partially covered in the first 400 lines - to be completed in the next segment.'
    }
  }
}; 