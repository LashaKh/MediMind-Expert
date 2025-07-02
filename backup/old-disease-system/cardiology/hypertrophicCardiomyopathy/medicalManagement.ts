export const medicalManagement = {
  id: 'medical-management',
  title: 'Medical Management',
  subsections: {
    generalPrinciples: {
      title: 'General Principles',
      evidenceLevel: 'B',
      content: '**Evidence Level B**: As per ACC/AHA/AMSSM/…/SCMR 2024 guidelines, employ shared decision-making in developing a plan of care (including, but not limited to, decisions regarding genetic evaluation, activity, lifestyle, and treatment choices) for patients with or at risk of HCM, including a full disclosure of the risks, benefits, and anticipated outcomes of all options, as well the opportunity for the patient and caregivers to express their goals and concerns.\n\n**Evidence Level B**: As per ESC 2023 guidelines:\n- Ensure that all patients with cardiomyopathy and their relatives have access to multidisciplinary teams with expertise in the diagnosis and management of cardiomyopathies.\n- Identify and manage risk factors and concomitant diseases as an integral part of the management of patients with cardiomyopathy.'
    },
    antiarrhythmicDrugs: {
      title: 'Antiarrhythmic Drugs',
      evidenceLevels: ['B', 'C'],
      content: '**Evidence Level B**: As per ACC/AHA/AMSSM/…/SCMR 2024 guidelines:\n- Initiate antiarrhythmic drugs, such as amiodarone, dofetilide, mexiletine, or sotalol in adult patients with HCM and symptomatic ventricular arrhythmias or recurrent ICD shocks despite β-blocker use. Decide on the choice of antiarrhythmic agent based on age, underlying comorbidities, severity of disease, patient preferences, and balance between efficacy and safety.\n- Initiate antiarrhythmic drugs (amiodarone, mexiletine, sotalol) in pediatric patients with HCM and recurrent ventricular arrhythmias despite β-blocker use.\n\n**Evidence Level C**: As per ESC 2022 guidelines, consider initiating antiarrhythmic drugs in patients with HCM and recurrent, symptomatic ventricular arrhythmia, or recurrent ICD therapy.\n\n**Evidence Level C**: As per ACC/AHA/HRS 2018 guidelines, consider initiating amiodarone in patients with HCM and a history of sustained VT or VF, if an ICD is not feasible or not preferred by the patient.\n\n**Evidence Level B**: As per ESC 2014 guidelines, initiate β-blockers and/or amiodarone in patients with an ICD experiencing symptomatic ventricular arrhythmias or recurrent shocks despite optimal treatment and device reprogramming.'
    },
    managementOfObstructiveSymptoms: {
      title: 'Management of Obstructive Symptoms',
      subsections: {
        betaBlockersAndCcbs: {
          title: 'Beta-blockers and CCBs',
          evidenceLevels: ['B', 'C'],
          content: '**Evidence Level B**: As per ACC/AHA/AMSSM/…/SCMR 2024 guidelines:\n- Initiate nonvasodilating β-blockers, titrated to effectiveness or maximally tolerated doses, in patients with obstructive HCM having symptoms attributable to LVOTO.\n- Substitute β-blockers with nondihydropyridine CCBs, such as verapamil or diltiazem, if β-blockers are ineffective or not tolerated.\n\n**Evidence Level C**: As per ESC 2023 guidelines, consider initiating β-blockers or verapamil to reduce LV pressures in selected asymptomatic patients with resting or provoked LVOTO.\n\n**Evidence Level B**: Initiate nonvasodilating β-blockers, titrated to maximum tolerated dose, as first-line therapy to improve symptoms in patients with obstructive HCM.\n\nInitiate verapamil or diltiazem, titrated to maximum tolerated dose, to improve symptoms in symptomatic patients with resting or provoked LVOTO intolerant or having contraindications to β-blockers.\n\n**Evidence Level C**: Consider restoring sinus rhythm or ensuring appropriate rate control before invasive management of LVOTO in patients with new-onset or poorly controlled AF.'
        },
        disopyramide: {
          title: 'Disopyramide',
          evidenceLevels: ['B', 'C'],
          content: '**Evidence Level B**: As per ACC/AHA/AMSSM/…/SCMR 2024 guidelines, initiate disopyramide (in combination with an atrioventricular nodal blocking agent) or a myosin inhibitor (adult patients only), or offer septal reduction therapy at experienced centers in patients with persistent symptoms attributable to LVOTO despite β-blockers or nondihydropyridine CCBs.\n\n**Evidence Level B**: As per ESC 2023 guidelines: Initiate disopyramide, titrated to maximum tolerated dose, in addition to a β-blocker (or, if this is not possible, with verapamil or diltiazem) to improve symptoms in patients with resting or provoked LVOTO.\n\n**Evidence Level C**: Consider initiating disopyramide, titrated to maximum tolerated dose, as monotherapy to improve symptoms in patients with resting or provoked LVOTO intolerant or having contraindications to β-blockers and verapamil/diltiazem.'
        },
        myosinInhibitors: {
          title: 'Myosin Inhibitors',
          evidenceLevels: ['B', 'C'],
          content: '**Evidence Level B**: As per ACC/AHA/AMSSM/…/SCMR 2024 guidelines, initiate a myosin inhibitor (adult patients only) or disopyramide (in combination with an atrioventricular nodal blocking agent), or offer septal reduction therapy at experienced centers in patients with persistent symptoms attributable to LVOTO despite β-blockers or nondihydropyridine CCBs.\n\n**Landmark trials: SEQUOIA-HCM (original research)**\nIn patients with symptomatic obstructive HCM, aficamten was superior to placebo with respect to mean improvement in the peak oxygen uptake by cardiopulmonary exercise testing at week 24.\n*Martin S Maron et al. N Engl J Med. 2024 May 30.*\n\n**Evidence Level B**: As per ESC 2023 guidelines: Consider initiating cardiac myosin adenosine triphosphatase inhibitor (mavacamten), titrated to maximum tolerated dose with echocardiographic surveillance of LVEF, in addition to a β-blocker (or, if this is not possible, with verapamil or diltiazem) to improve symptoms in adult patients with resting or provoked LVOTO.\n\n**Evidence Level C**: Consider initiating cardiac myosin adenosine triphosphatase inhibitor (mavacamten), titrated to maximum tolerated dose with echocardiographic surveillance of LVEF, as monotherapy in symptomatic adult patients with resting or provoked LVOTO (exercise or Valsalva maneuver) intolerant or having contraindications to β-blockers, verapamil/diltiazem, or disopyramide.\n\n**Landmark trials: EXPLORER-HCM**\nIn patients with HCM with LVOT gradient ≥ 50 mmHg and NYHA class II-III symptoms, mavacamten was superior to placebo with respect to clinical response at week 30.\n*Iacopo Olivotto et al. Lancet. 2020 Sep 12.*',
          trials: ['SEQUOIA-HCM', 'EXPLORER-HCM']
        },
        diuretics: {
          title: 'Diuretics',
          evidenceLevel: 'C',
          content: '**Evidence Level C**: As per ACC/AHA/AMSSM/…/SCMR 2024 guidelines, consider initiating low-dose oral diuretics cautiously in patients with obstructive HCM and persistent dyspnea with clinical evidence of volume overload and high left-sided filling pressures despite other HCM guideline-directed medical therapy.\n\n**Evidence Level C**: As per ESC 2023 guidelines, consider initiating low-dose diuretics cautiously to improve exertional dyspnea in symptomatic patients with LVOTO.'
        },
        vasoconstrictors: {
          title: 'Vasoconstrictors',
          evidenceLevels: ['B', 'C'],
          content: '**Evidence Level B**: As per ACC/AHA/AMSSM/…/SCMR 2024 guidelines, administer IV phenylephrine (or other vasoconstrictors without inotropic activity), alone or in combination with β-blockers, in patients with obstructive HCM and acute hypotension not responding to fluid administration.\n\n**Evidence Level C**: As per ESC 2023 guidelines, consider administering oral or IV β-blockers and vasoconstrictors in patients with severe provocable LVOTO presenting with hypotension and acute pulmonary edema not responding to fluid administration.'
        },
        medicationsToAvoid: {
          title: 'Medications to Avoid',
          evidenceLevels: ['B', 'C', 'D'],
          content: '**Evidence Level C**: As per ACC/AHA/AMSSM/…/SCMR 2024 guidelines: Consider discontinuing vasodilators (ACEis, ARBs, dihydropyridine CCBs) or digoxin, as these agents can worsen symptoms caused by dynamic outflow tract obstruction in patients with obstructive HCM.\n\n**Evidence Level B**: Recognize that verapamil is potentially harmful in patients with obstructive HCM and severe dyspnea at rest, hypotension, very high resting gradients (such as > 100 mmHg), as well as in pediatric patients < 6 weeks of age.\n\n**Evidence Level D**: As per ESC 2023 guidelines, avoid using digoxin and arterial and venous dilators, including nitrates and phosphodiesterase inhibitors, if possible, in patients with resting or provocable LVOTO.'
        }
      }
    },
    managementOfChestPain: {
      title: 'Management of Chest Pain',
      evidenceLevels: ['B', 'C', 'I'],
      content: '**Evidence Level B**: As per ACC/AHA/AMSSM/…/SCMR 2024 guidelines: Initiate β-blockers or nondihydropyridine CCBs in patients with nonobstructive HCM with preserved ejection fraction and symptoms of exertional angina or dyspnea.\n\n**Evidence Level I**: Insufficient evidence regarding the usefulness of ACEis and ARBs in the treatment of angina or dyspnea in patients with nonobstructive HCM with preserved ejection fraction.\n\n**Evidence Level C**: As per ESC 2023 guidelines: \n- Consider initiating β-blockers and CCBs (verapamil or diltiazem) to improve symptoms in patients with angina-like chest pain, even in the absence of LVOTO or obstructive coronary artery disease.\n- Consider initiating oral nitrates to improve symptoms in patients with angina-like chest pain, even in the absence of obstructive coronary artery disease, if there is no LVOTO.\n- Consider initiating ranolazine to improve symptoms in patients with angina-like chest pain, even in the absence of LVOTO or obstructive coronary artery disease.'
    },
    managementOfHypertension: {
      title: 'Management of Hypertension',
      evidenceLevel: 'B',
      content: '**Evidence Level B**: As per ACC/AHA/AMSSM/…/SCMR 2024 guidelines, offer lifestyle modifications and medical therapy for hypertension, with a preference for β-blockers and nondihydropyridine CCBs, in patients with obstructive HCM and hypertension.'
    },
    managementOfHfpef: {
      title: 'Management of HFpEF',
      evidenceLevels: ['B', 'C', 'I'],
      content: '**Evidence Level B**: As per ACC/AHA/AMSSM/…/SCMR 2024 guidelines: Initiate β-blockers or nondihydropyridine CCBs in patients with nonobstructive HCM with preserved ejection fraction and symptoms of exertional angina or dyspnea.\n\n**Evidence Level C**: Consider adding oral diuretics when exertional dyspnea persists despite the use of β-blockers or nondihydropyridine CCBs.\n\n**Evidence Level C**: Consider initiating valsartan to slow adverse cardiac remodeling in younger patients (age ≤ 45 years) with nonobstructive HCM due to a pathogenic or likely pathogenic cardiac sarcomere genetic variant and a mild phenotype.\n\n**Evidence Level I**: \n- Insufficient evidence regarding the usefulness of ACEis and ARBs in the treatment of symptoms (angina and dyspnea) in patients with nonobstructive HCM with preserved ejection fraction.\n- Insufficient evidence to recommend β-blockers or CCBs in asymptomatic patients with nonobstructive HCM.\n\n**Evidence Level C**: As per ESC 2014 guidelines: \n- Consider initiating β-blockers, verapamil, or diltiazem to improve HF in patients in NYHA Class II-IV symptoms, an ejection fraction ≥ 50%, and no evidence for resting or provocable LVOTO symptoms.\n- Consider initiating low-dose loop and thiazide diuretics to improve HF symptoms in patients in NYHA Class II-IV symptoms, an ejection fraction ≥ 50%, and no evidence for resting or provocable LVOTO.'
    },
    managementOfHfref: {
      title: 'Management of HFrEF',
      evidenceLevel: 'B',
      content: '**Evidence Level B**: As per ACC/AHA/AMSSM/…/SCMR 2024 guidelines: \n- Initiate guideline-directed medical therapy for HF with reduced ejection in patients with HCM developing systolic dysfunction (LVEF < 50%).\n- Discontinue cardiac myosin inhibitors in patients with HCM developing persistent systolic dysfunction (LVEF < 50%).\n\n**Evidence Level C**: Consider discontinuing previously indicated negative inotropic agents (specifically, verapamil, diltiazem, or disopyramide) in patients with HCM developing systolic dysfunction (LVEF < 50%).\n\n**Evidence Level B**: As per ESC 2014 guidelines: \n- Initiate ACEis (or ARBs if ACEis are not tolerated), in addition to β-blockers, to reduce the risks of HF hospitalization and premature death in patients without LVOTO and with an LVEF < 50%.\n- Initiate β-blockers, in addition to ACEis (or ARBs if ACEis are not tolerated), to improve symptoms and reduce the risks of HF hospitalization and premature death in patients without LVOTO and with an LVEF < 50%.\n- Initiate low-dose loop diuretics to improve symptoms and reduce the risk of HF hospitalization in patients with NYHA functional Class II-IV with an LVEF < 50%.\n- Initiate mineralocorticoid receptor antagonists to reduce the risks of HF hospitalization and premature death in all patients with persisting symptoms (NYHA functional Class II-IV) and an LVEF < 50% despite treatment with ACEis (or ARBs) and β-blockers.\n\n**Evidence Level C**: \n- Consider initiating low-dose digoxin to control HR response in patients without LVOTO and with NYHA functional Class II-IV, an ejection fraction < 50%, and permanent AF.\n- Consider performing CRT to improve symptoms in patients with HCM, maximum LVOTO gradient < 30 mmHg, drug-refractory symptoms, NYHA functional Class II-IV, LVEF < 50%, and LBBB with a QRS duration > 120 ms.\n\n**Evidence Level B**: Perform orthotopic cardiac transplantation in eligible patients with an LVEF < 50% and NYHA functional Class III-IV symptoms despite optimal medical therapy or intractable ventricular arrhythmia.'
    },
    managementOfAtrialFibrillation: {
      title: 'Management of Atrial Fibrillation',
      subsections: {
        rhythmRateControl: {
          title: 'Rhythm/Rate Control',
          evidenceLevels: ['B', 'C'],
          content: '**Evidence Level C**: As per ACC/AHA/AMSSM/…/SCMR 2024 guidelines: Consider offering a rhythm-control strategy with cardioversion or antiarrhythmic drugs, with the choice of an agent according to AF symptom severity, patient preferences, and comorbid conditions, in patients with HCM and poorly tolerated AF.\n\n**Evidence Level B**: Initiate β-blockers, verapamil, or diltiazem if rate control strategy is planned, with the choice of agents according to patient preferences and comorbid conditions.'
        },
        antithromboticTherapy: {
          title: 'Antithrombotic Therapy',
          evidenceLevels: ['B', 'C'],
          content: '**Evidence Level B**: As per ACC/AHA/AMSSM/…/SCMR 2024 guidelines: \n- Initiate anticoagulation with DOACs as the first-line option and VKAs as the second-line option in patients with HCM and clinical AF, independent of CHA2DS2-VASc score.\n- Initiate anticoagulation with DOACs as the first-line option and VKAs as the second-line option in patients with HCM and subclinical AF detected by internal or external cardiac device or monitor of > 24 hours duration for a given episode, independent of CHA2DS2-VASc score.\n\n**Evidence Level C**: Consider initiating anticoagulation with DOACs as the first-line option and VKAs as the second-line option in patients with HCM and subclinical AF detected by internal or external device or monitor of > 5 minutes but < 24 hours duration for a given episode, taking into account the duration of AF episodes, total AF burden, underlying risk factors, and bleeding risk.\n\n**Evidence Level B**: As per ESC 2023 guidelines: \n- Initiate oral anticoagulation, unless contraindicated, to reduce the risk of stroke and thromboembolic events in all patients with HCM and AF or atrial flutter.\n- Advise modifying unhealthy lifestyles and offer targeted therapy of intercurrent conditions to reduce AF burden and symptom severity in patients with cardiomyopathy.'
        },
        catheterAblation: {
          title: 'Catheter Ablation',
          evidenceLevels: ['B', 'C'],
          content: '**Evidence Level C**: As per ACC/AHA/AMSSM/…/SCMR 2024 guidelines: \n- Consider performing catheter ablation as part of rhythm control strategy in patients with HCM and symptomatic AF if pharmacological therapy is ineffective, contraindicated, or not the patient\'s preference.\n- Consider performing concomitant surgical AF ablation for rhythm control in patients with HCM and AF requiring surgical myectomy.\n\n**Evidence Level B**: As per ESC 2023 guidelines: \n- Perform catheter ablation for rhythm control after one failed or intolerant class I or III antiarrhythmic drug to improve symptoms of recurrences in patients with paroxysmal or persistent AF and cardiomyopathy.\n- Perform catheter ablation to reverse LV dysfunction in patients with AF when tachycardia-induced component is highly probable, independent of their symptom status.\n\n**Evidence Level C**: \n- Consider ensuring maintenance of sinus rhythm rather than rate control at an early stage in patients with AF without major risk factors for recurrence, regardless of symptoms.\n- Consider performing catheter ablation as first-line rhythm control therapy as an alternative to class I or III antiarrhythmic drugs, considering patient choice, benefit, and risk, to improve symptoms in selected patients with paroxysmal or persistent AF without major risk factors for recurrences.\n- Consider performing catheter ablation to prevent AF recurrences and improve QoL, LVEF, and survival and reduce HF hospitalization in selected patients with AF and HF and/or reduced LVEF.'
        }
      }
    }
  }
}; 