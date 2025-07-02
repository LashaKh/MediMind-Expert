import { GuidelineSection } from '../../types';

export const hypertrophicCardiomyopathyGuidelines = {
  keySources: "ACC/AHA/AMSSM/HRS/PACES/SCMR 2024; ESC 2023; ESC 2022; ACC/AHA/HRS 2019; ESC 2014",
  
  sections: [
    {
      title: "Medical Management - General Principles",
      id: "medical-management-general",
      content: [
        {
          statement: "Employ shared decision-making in developing a plan of care (including, but not limited to, decisions regarding genetic evaluation, activity, lifestyle, and treatment choices) for patients with or at risk of HCM, including a full disclosure of the risks, benefits, and anticipated outcomes of all options, as well the opportunity for the patient and caregivers to express their goals and concerns.",
          level: "B",
          source: "ACC/AHA/AMSSM/SCMR 2024"
        },
        {
          statement: "Ensure that all patients with cardiomyopathy and their relatives have access to multidisciplinary teams with expertise in the diagnosis and management of cardiomyopathies.",
          level: "B",
          source: "ESC 2023"
        },
        {
          statement: "Identify and manage risk factors and concomitant diseases as an integral part of the management of patients with cardiomyopathy.",
          level: "B",
          source: "ESC 2023"
        }
      ]
    },
    {
      title: "Management of obstructive symptoms - Myosin inhibitors",
      id: "medical-management-myosin",
      content: [
        {
          statement: "Initiate a myosin inhibitor (adult patients only) or disopyramide (in combination with an atrioventricular nodal blocking agent), or offer septal reduction therapy at experienced centers in patients with persistent symptoms attributable to LVOTO despite β-blockers or nondihydropyridine CCBs.",
          level: "B",
          source: "ACC/AHA/AMSSM/SCMR 2024"
        },
        {
          statement: "Landmark trials: SEQUOIA-HCM In patients with symptomatic obstructive HCM, aficamten was superior to placebo with respect to mean improvement in the peak oxygen uptake by cardiopulmonary exercise testing at week 24. [PubMed](https://pubmed.ncbi.nlm.nih.gov/38813093/)",
          level: "A",
          source: "Martin S Maron et al. N Engl J Med. 2024 May 30"
        },
        {
          statement: "Consider initiating cardiac myosin adenosine triphosphatase inhibitor (mavacamten), titrated to maximum tolerated dose with echocardiographic surveillance of LVEF, in addition to a β-blocker (or, if this is not possible, with verapamil or diltiazem) to improve symptoms in adult patients with resting or provoked LVOTO.",
          level: "B",
          source: "ESC 2023"
        },
        {
          statement: "Consider initiating cardiac myosin adenosine triphosphatase inhibitor (mavacamten), titrated to maximum tolerated dose with echocardiographic surveillance of LVEF, as monotherapy in symptomatic adult patients with resting or provoked LVOTO (exercise or Valsalva maneuver) intolerant or having contraindications to β-blockers, verapamil/diltiazem, or disopyramide.",
          level: "C",
          source: "ESC 2023"
        },
        {
          statement: "Landmark trials: EXPLORER-HCM In patients with HCM with LVOT gradient ≥ 50 mmHg and NYHA class II-III symptoms, mavacamten was superior to placebo with respect to clinical response at week 30. [PubMed](https://pubmed.ncbi.nlm.nih.gov/32871100/)",
          level: "A",
          source: "Iacopo Olivotto et al. Lancet. 2020 Sep 12"
        }
      ]
    },
    {
      title: "Management of obstructive symptoms - Diuretics",
      id: "medical-management-diuretics",
      content: [
        {
          statement: "Consider initiating low-dose oral diuretics cautiously in patients with obstructive HCM and persistent dyspnea with clinical evidence of volume overload and high left-sided filling pressures despite other HCM guideline-directed medical therapy.",
          level: "C",
          source: "ACC/AHA/AMSSM/SCMR 2024"
        },
        {
          statement: "Consider initiating low-dose diuretics cautiously to improve exertional dyspnea in symptomatic patients with LVOTO.",
          level: "C",
          source: "ESC 2023"
        }
      ]
    },
    {
      title: "Management of obstructive symptoms - Vasoconstrictors",
      id: "medical-management-vasoconstrictors",
      content: [
        {
          statement: "Administer IV phenylephrine (or other vasoconstrictors without inotropic activity), alone or in combination with β-blockers, in patients with obstructive HCM and acute hypotension not responding to fluid administration.",
          level: "B",
          source: "ACC/AHA/AMSSM/SCMR 2024"
        },
        {
          statement: "Consider administering oral or IV β-blockers and vasoconstrictors in patients with severe provocable LVOTO presenting with hypotension and acute pulmonary edema not responding to fluid administration.",
          level: "C",
          source: "ESC 2023"
        }
      ]
    },
    {
      title: "Management of obstructive symptoms - Beta-blockers and CCBs",
      id: "medical-management-beta-blockers",
      content: [
        {
          statement: "Initiate nonvasodilating β-blockers, titrated to effectiveness or maximally tolerated doses, in patients with obstructive HCM having symptoms attributable to LVOTO.",
          level: "B",
          source: "ACC/AHA/AMSSM/SCMR 2024"
        },
        {
          statement: "Substitute β-blockers with nondihydropyridine CCBs, such as verapamil or diltiazem, if β-blockers are ineffective or not tolerated.",
          level: "B",
          source: "ACC/AHA/AMSSM/SCMR 2024"
        },
        {
          statement: "Consider initiating β-blockers or verapamil to reduce LV pressures in selected asymptomatic patients with resting or provoked LVOTO.",
          level: "C",
          source: "ESC 2023"
        }
      ]
    },
    {
      title: "Management of obstructive symptoms - Disopyramide",
      id: "medical-management-disopyramide",
      content: [
        {
          statement: "Initiate disopyramide, titrated to maximum tolerated dose, in addition to a β-blocker (or, if this is not possible, with verapamil or diltiazem) to improve symptoms in patients with resting or provoked LVOTO.",
          level: "B",
          source: "ESC 2023"
        },
        {
          statement: "Consider initiating disopyramide, titrated to maximum tolerated dose, as monotherapy to improve symptoms in patients with resting or provoked LVOTO intolerant or having contraindications to β-blockers and verapamil/diltiazem.",
          level: "C",
          source: "ESC 2023"
        }
      ]
    },
    {
      title: "Management of chest pain",
      id: "medical-management-chest-pain",
      content: [
        {
          statement: "Initiate β-blockers or nondihydropyridine CCBs in patients with nonobstructive HCM with preserved ejection fraction and symptoms of exertional angina or dyspnea.",
          level: "B",
          source: "ACC/AHA/AMSSM/SCMR 2024"
        },
        {
          statement: "Insufficient evidence regarding the usefulness of ACEis and ARBs in the treatment of angina or dyspnea in patients with nonobstructive HCM with preserved ejection fraction.",
          level: "I",
          source: "ACC/AHA/AMSSM/SCMR 2024"
        },
        {
          statement: "Consider initiating β-blockers and CCBs (verapamil or diltiazem) to improve symptoms in patients with angina-like chest pain, even in the absence of LVOTO or obstructive coronary artery disease.",
          level: "C",
          source: "ESC 2023"
        },
        {
          statement: "Consider initiating oral nitrates to improve symptoms in patients with angina-like chest pain, even in the absence of obstructive coronary artery disease, if there is no LVOTO.",
          level: "C",
          source: "ESC 2023"
        },
        {
          statement: "Consider initiating ranolazine to improve symptoms in patients with angina-like chest pain, even in the absence of LVOTO or obstructive coronary artery disease.",
          level: "C",
          source: "ESC 2023"
        }
      ]
    },
    {
      title: "Management of hypertension",
      id: "medical-management-hypertension",
      content: [
        {
          statement: "Offer lifestyle modifications and medical therapy for hypertension, with a preference for β-blockers and nondihydropyridine CCBs, in patients with obstructive HCM and hypertension.",
          level: "B",
          source: "ACC/AHA/AMSSM/SCMR 2024"
        }
      ]
    },
    {
      title: "Management of HFpEF",
      id: "medical-management-hfpef",
      content: [
        {
          statement: "Initiate β-blockers or nondihydropyridine CCBs in patients with nonobstructive HCM with preserved ejection fraction and symptoms of exertional angina or dyspnea.",
          level: "B",
          source: "ACC/AHA/AMSSM/SCMR 2024"
        },
        {
          statement: "Consider adding oral diuretics when exertional dyspnea persists despite the use of β-blockers or nondihydropyridine CCBs.",
          level: "C",
          source: "ACC/AHA/AMSSM/SCMR 2024"
        },
        {
          statement: "Consider initiating valsartan to slow adverse cardiac remodeling in younger patients (age ≤ 45 years) with nonobstructive HCM due to a pathogenic or likely pathogenic cardiac sarcomere genetic variant and a mild phenotype.",
          level: "C",
          source: "ACC/AHA/AMSSM/SCMR 2024"
        },
        {
          statement: "Insufficient evidence regarding the usefulness of ACEis and ARBs in the treatment of symptoms (angina and dyspnea) in patients with nonobstructive HCM with preserved ejection fraction.",
          level: "I",
          source: "ACC/AHA/AMSSM/SCMR 2024"
        },
        {
          statement: "Insufficient evidence to recommend β-blockers or CCBs in asymptomatic patients with nonobstructive HCM.",
          level: "I",
          source: "ACC/AHA/AMSSM/SCMR 2024"
        },
        {
          statement: "Consider initiating β-blockers, verapamil, or diltiazem to improve HF in patients in NYHA Class II-IV symptoms, an ejection fraction ≥ 50%, and no evidence for resting or provocable LVOTO symptoms.",
          level: "C",
          source: "ESC 2014"
        },
        {
          statement: "Consider initiating low-dose loop and thiazide diuretics to improve HF symptoms in patients in NYHA Class II-IV symptoms, an ejection fraction ≥ 50%, and no evidence for resting or provocable LVOTO.",
          level: "C",
          source: "ESC 2014"
        }
      ]
    },
    {
      title: "Management of HFrEF",
      id: "medical-management-hfref",
      content: [
        {
          statement: "Initiate guideline-directed medical therapy for HF with reduced ejection in patients with HCM developing systolic dysfunction (LVEF < 50%).",
          level: "B",
          source: "ACC/AHA/AMSSM/SCMR 2024"
        },
        {
          statement: "Discontinue cardiac myosin inhibitors in patients with HCM developing persistent systolic dysfunction (LVEF < 50%).",
          level: "B",
          source: "ACC/AHA/AMSSM/SCMR 2024"
        },
        {
          statement: "Consider discontinuing previously indicated negative inotropic agents (specifically, verapamil, diltiazem, or disopyramide) in patients with HCM developing systolic dysfunction (LVEF < 50%).",
          level: "C",
          source: "ACC/AHA/AMSSM/SCMR 2024"
        },
        {
          statement: "Initiate ACEis (or ARBs if ACEis are not tolerated), in addition to β-blockers, to reduce the risks of HF hospitalization and premature death in patients without LVOTO and with an LVEF < 50%.",
          level: "B",
          source: "ESC 2014"
        },
        {
          statement: "Initiate β-blockers, in addition to ACEis (or ARBs if ACEis are not tolerated), to improve symptoms and reduce the risks of HF hospitalization and premature death in patients without LVOTO and with an LVEF < 50%.",
          level: "B",
          source: "ESC 2014"
        },
        {
          statement: "Initiate low-dose loop diuretics to improve symptoms and reduce the risk of HF hospitalization in patients with NYHA functional Class II-IV with an LVEF < 50%.",
          level: "B",
          source: "ESC 2014"
        },
        {
          statement: "Initiate mineralocorticoid receptor antagonists to reduce the risks of HF hospitalization and premature death in all patients with persisting symptoms (NYHA functional Class II-IV) and an LVEF < 50% despite treatment with ACEis (or ARBs) and β-blockers.",
          level: "B",
          source: "ESC 2014"
        },
        {
          statement: "Consider initiating low-dose digoxin to control HR response in patients without LVOTO and with NYHA functional Class II-IV, an ejection fraction < 50%, and permanent AF.",
          level: "C",
          source: "ESC 2014"
        },
        {
          statement: "Consider performing CRT to improve symptoms in patients with HCM, maximum LVOTO gradient < 30 mmHg, drug-refractory symptoms, NYHA functional Class II-IV, LVEF < 50%, and LBBB with a QRS duration > 120 ms.",
          level: "C",
          source: "ESC 2014"
        },
        {
          statement: "Perform orthotopic cardiac transplantation in eligible patients with an LVEF < 50% and NYHA functional Class III-IV symptoms despite optimal medical therapy or intractable ventricular arrhythmia.",
          level: "B",
          source: "ESC 2014"
        }
      ]
    },
    {
      title: "Management of AF - Rhythm/rate control",
      id: "medical-management-af-rhythm",
      content: [
        {
          statement: "Consider offering a rhythm-control strategy with cardioversion or antiarrhythmic drugs, with the choice of an agent according to AF symptom severity, patient preferences, and comorbid conditions, in patients with HCM and poorly tolerated AF.",
          level: "C",
          source: "ACC/AHA/AMSSM/SCMR 2024"
        },
        {
          statement: "Initiate β-blockers, verapamil, or diltiazem if rate control strategy is planned, with the choice of agents according to patient preferences and comorbid conditions.",
          level: "B",
          source: "ACC/AHA/AMSSM/SCMR 2024"
        }
      ]
    },
    {
      title: "Management of AF - Antithrombotic therapy",
      id: "medical-management-af-anticoag",
      content: [
        {
          statement: "Initiate anticoagulation with DOACs as the first-line option and VKAs as the second-line option in patients with HCM and clinical AF, independent of CHA2DS2-VASc score.",
          level: "B",
          source: "ACC/AHA/AMSSM/SCMR 2024"
        },
        {
          statement: "Initiate anticoagulation with DOACs as the first-line option and VKAs as the second-line option in patients with HCM and subclinical AF detected by internal or external cardiac device or monitor of > 24 hours duration for a given episode, independent of CHA2DS2-VASc score.",
          level: "B",
          source: "ACC/AHA/AMSSM/SCMR 2024"
        },
        {
          statement: "Consider initiating anticoagulation with DOACs as the first-line option and VKAs as the second-line option in patients with HCM and subclinical AF detected by internal or external device or monitor of > 5 minutes but < 24 hours duration for a given episode, taking into account the duration of AF episodes, total AF burden, underlying risk factors, and bleeding risk.",
          level: "C",
          source: "ACC/AHA/AMSSM/SCMR 2024"
        },
        {
          statement: "Initiate oral anticoagulation, unless contraindicated, to reduce the risk of stroke and thromboembolic events in all patients with HCM and AF or atrial flutter.",
          level: "B",
          source: "ESC 2023"
        },
        {
          statement: "Advise modifying unhealthy lifestyles and offer targeted therapy of intercurrent conditions to reduce AF burden and symptom severity in patients with cardiomyopathy.",
          level: "B",
          source: "ESC 2023"
        }
      ]
    },
    {
      title: "Management of AF - Catheter ablation",
      id: "medical-management-af-ablation",
      content: [
        {
          statement: "Consider performing catheter ablation as part of rhythm control strategy in patients with HCM and symptomatic AF if pharmacological therapy is ineffective, contraindicated, or not the patient's preference.",
          level: "C",
          source: "ACC/AHA/AMSSM/SCMR 2024"
        },
        {
          statement: "Consider performing concomitant surgical AF ablation for rhythm control in patients with HCM and AF requiring surgical myectomy.",
          level: "C",
          source: "ACC/AHA/AMSSM/SCMR 2024"
        },
        {
          statement: "Perform catheter ablation for rhythm control after one failed or intolerant class I or III antiarrhythmic drug to improve symptoms of recurrences in patients with paroxysmal or persistent AF and cardiomyopathy.",
          level: "B",
          source: "ESC 2023"
        },
        {
          statement: "Perform catheter ablation to reverse LV dysfunction in patients with AF when tachycardia-induced component is highly probable, independent of their symptom status.",
          level: "B",
          source: "ESC 2023"
        },
        {
          statement: "Consider ensuring maintenance of sinus rhythm rather than rate control at an early stage in patients with AF without major risk factors for recurrence, regardless of symptoms.",
          level: "C",
          source: "ESC 2023"
        },
        {
          statement: "Consider performing catheter ablation as first-line rhythm control therapy as an alternative to class I or III antiarrhythmic drugs, considering patient choice, benefit, and risk, to improve symptoms in selected patients with paroxysmal or persistent AF without major risk factors for recurrences.",
          level: "C",
          source: "ESC 2023"
        },
        {
          statement: "Consider performing catheter ablation to prevent AF recurrences and improve QoL, LVEF, and survival and reduce HF hospitalization in selected patients with AF and HF and/or reduced LVEF.",
          level: "C",
          source: "ESC 2023"
        }
      ]
    },
    {
      title: "Medications to avoid",
      id: "medical-management-avoid",
      content: [
        {
          statement: "Consider discontinuing vasodilators (ACEis, ARBs, dihydropyridine CCBs) or digoxin, as these agents can worsen symptoms caused by dynamic outflow tract obstruction in patients with obstructive HCM.",
          level: "C",
          source: "ACC/AHA/AMSSM/SCMR 2024"
        },
        {
          statement: "Consider discontinuing previously indicated negative inotropic agents (specifically, verapamil, diltiazem, or disopyramide) in patients with HCM developing systolic dysfunction (LVEF < 50%).",
          level: "C",
          source: "ACC/AHA/AMSSM/SCMR 2024"
        },
        {
          statement: "Recognize that verapamil is potentially harmful in patients with obstructive HCM and severe dyspnea at rest, hypotension, very high resting gradients (such as > 100 mmHg), as well as in pediatric patients < 6 weeks of age.",
          level: "B",
          source: "ACC/AHA/AMSSM/SCMR 2024"
        },
        {
          statement: "Avoid using digoxin and arterial and venous dilators, including nitrates and phosphodiesterase inhibitors, if possible, in patients with resting or provocable LVOTO.",
          level: "D",
          source: "ESC 2023"
        }
      ]
    },
    {
      title: "Family Screening",
      id: "family-screening",
      content: [
        {
          statement: "Obtain an electrocardiogram, echocardiogram, and clinical evaluation every 1-3 years in asymptomatic family members (first-degree relatives) of patients with HCM aged ≥ 10 years.",
          level: "B",
          source: "ACC/AHA/AMSSM/SCMR 2024"
        },
        {
          statement: "Consider obtaining cardiac MRI when echocardiography is technically inadequate or inconclusive for the diagnosis of HCM in family members of patients with HCM.",
          level: "C",
          source: "ACC/AHA/AMSSM/SCMR 2024"
        },
        {
          statement: "Perform family screening with clinical evaluation, 12-lead ECG, and echocardiography in first-degree relatives of patients with HCM.",
          level: "B",
          source: "ESC 2023"
        }
      ]
    },
    {
      title: "Pediatric Screening",
      id: "pediatric-screening",
      content: [
        {
          statement: "Obtain an electrocardiogram, echocardiogram, and clinical evaluation every 1-2 years in asymptomatic family members (first-degree relatives) of patients with HCM aged < 10 years.",
          level: "C",
          source: "ACC/AHA/AMSSM/SCMR 2024"
        },
        {
          statement: "Consider obtaining more frequent surveillance (every 6-12 months) during periods of rapid growth in pediatric family members.",
          level: "C",
          source: "ACC/AHA/AMSSM/SCMR 2024"
        }
      ]
    },
    {
      title: "Classification and Risk Stratification",
      id: "classification-risk",
      content: [
        {
          statement: "Classify HCM patients based on the presence or absence of left ventricular outflow tract obstruction (LVOTO) to guide therapeutic decisions.",
          level: "B",
          source: "ACC/AHA/AMSSM/SCMR 2024"
        },
        {
          statement: "Perform comprehensive risk stratification for sudden cardiac death using validated risk calculators and clinical risk factors.",
          level: "B",
          source: "ESC 2023"
        },
        {
          statement: "Consider the HCM Risk-SCD model for 5-year sudden cardiac death risk estimation in adult patients.",
          level: "C",
          source: "ESC 2023"
        }
      ]
    },
    {
      title: "Genetic Testing",
      id: "genetic-testing",
      content: [
        {
          statement: "Offer genetic testing to patients with a clinical diagnosis of HCM.",
          level: "B",
          source: "ACC/AHA/AMSSM/SCMR 2024"
        },
        {
          statement: "Consider genetic testing in first-degree relatives of patients with HCM and a pathogenic or likely pathogenic variant.",
          level: "C",
          source: "ACC/AHA/AMSSM/SCMR 2024"
        },
        {
          statement: "Provide genetic counseling before and after genetic testing for patients and families affected by HCM.",
          level: "B",
          source: "ESC 2023"
        }
      ]
    },
    {
      title: "Diagnostic Imaging",
      id: "diagnostic-imaging",
      content: [
        {
          statement: "Obtain transthoracic echocardiography as the initial imaging modality for suspected HCM.",
          level: "B",
          source: "ACC/AHA/AMSSM/SCMR 2024"
        },
        {
          statement: "Consider cardiac MRI when echocardiography is technically inadequate or when additional tissue characterization is needed.",
          level: "C",
          source: "ACC/AHA/AMSSM/SCMR 2024"
        },
        {
          statement: "Perform stress echocardiography or cardiac MRI to assess for provocable LVOTO in patients with symptoms but no resting obstruction.",
          level: "B",
          source: "ESC 2023"
        }
      ]
    },
    {
      title: "Nonpharmacologic Interventions",
      id: "nonpharmacologic-interventions",
      content: [
        {
          statement: "Offer counseling and comprehensive lifestyle interventions to achieve and maintain weight loss and possibly reduce the risk of developing LVOTO, HF, and AF in patients with HCM and overweight or obesity.",
          level: "B",
          source: "ACC/AHA/AMSSM/SCMR 2024"
        },
        {
          statement: "Advise practicing mild-to-moderate-intensity recreational exercise to improve cardiorespiratory fitness, physical functioning, and QoL, and for overall health in patients with HCM, in keeping with physical activity guidelines for the general population.",
          level: "B",
          source: "ACC/AHA/AMSSM/SCMR 2024"
        },
        {
          statement: "Consider allowing participation in competitive sports in patients with HCM capable of a high level of physical performance after review by an expert provider with experience managing athletes with HCM, conducting an annual comprehensive evaluation, and using shared decision-making balancing potential benefits and risks.",
          level: "C",
          source: "ACC/AHA/AMSSM/SCMR 2024"
        }
      ]
    },
    {
      title: "ICD Management",
      id: "icd-management",
      content: [
        {
          statement: "Apply individual clinical judgment when assessing the prognostic strength of conventional risk markers within the clinical profile of the individual patient, and a thorough and balanced discussion of the evidence, benefits, and estimated risks to engage the fully informed patient's active participation in decision-making of placing an ICD.",
          level: "B",
          source: "ACC/AHA/AMSSM/SCMR 2024"
        },
        {
          statement: "Consider offering ICD implantation in adult patients with HCM with ≥ 1 major risk factors for SCD, including: sudden death judged definitively or likely attributable to HCM in ≥ 1 first-degree or close relatives aged ≤ 50 years; massive LVH ≥ 30 mm in any LV segment; ≥ 1 recent episodes of syncope suspected by clinical history to be arrhythmic; LV apical aneurysm with transmural scar or late gadolinium enhancement; LV systolic dysfunction (ejection fraction < 50%).",
          level: "C",
          source: "ACC/AHA/AMSSM/SCMR 2024"
        },
        {
          statement: "Consider obtaining echocardiography-derived LA diameter and maximal LVOT gradient in patients aged ≥ 16 years with HCM to aid in calculating an estimated 5-year sudden death risk to be used in shared decision-making for ICD implantation.",
          level: "C",
          source: "ACC/AHA/AMSSM/SCMR 2024"
        }
      ]
    },
    {
      title: "Surgical Interventions",
      id: "surgical-interventions",
      content: [
        {
          statement: "Perform septal reduction therapy to relieve LVOTO in eligible patients with obstructive HCM remaining symptomatic despite guideline-directed medical therapy.",
          level: "B",
          source: "ACC/AHA/AMSSM/SCMR 2024"
        },
        {
          statement: "Perform septal reduction therapy at experienced centers (comprehensive or primary HCM centers) with demonstrated excellence in clinical outcomes for the procedure.",
          level: "B",
          source: "ACC/AHA/AMSSM/SCMR 2024"
        },
        {
          statement: "Perform surgical myectomy in symptomatic patients with obstructive HCM having associated cardiac disease requiring surgical treatment.",
          level: "B",
          source: "ACC/AHA/AMSSM/SCMR 2024"
        },
        {
          statement: "Do not perform septal reduction therapy in asymptomatic patients with HCM having normal exercise capacity.",
          level: "D",
          source: "ACC/AHA/AMSSM/SCMR 2024"
        }
      ]
    }
  ]
};

export const hypertrophicCardiomyopathyKeySources = "The following summarized guidelines for the evaluation and management of hypertrophic cardiomyopathy are prepared by our editorial team based on guidelines from the American Medical Society for Sports Medicine (AMSSM/SCMR/AHA/HRS/ACC/PACES 2024), the Heart Rhythm Society (HRS 2024), the Society of Cardiovascular Computed Tomography (SCCT/SVM/SCMR/SCA/AHA/ASNC/HRS/ACC/ACS 2024), the European Society of Cardiology (ESC 2023,2022,2018,2014), and the American Heart Association (AHA/HRS/ACC 2019,2018)."; 