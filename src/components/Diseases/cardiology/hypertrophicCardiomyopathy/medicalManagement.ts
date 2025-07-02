export const hypertrophicCardiomyopathyMedicalManagement = {
  title: "Medical Management",
  sections: [
    {
      title: "General principles",
      evidenceLevel: "B",
      guidelines: [
        {
          organization: "ACC/AHA/AMSSM/SCMR 2024",
          recommendation: "Employ shared decision-making in developing a plan of care (including, but not limited to, decisions regarding genetic evaluation, activity, lifestyle, and treatment choices) for patients with or at risk of HCM, including a full disclosure of the risks, benefits, and anticipated outcomes of all options, as well the opportunity for the patient and caregivers to express their goals and concerns."
        },
        {
          organization: "ESC 2023",
          recommendations: [
            "Ensure that all patients with cardiomyopathy and their relatives have access to multidisciplinary teams with expertise in the diagnosis and management of cardiomyopathies.",
            "Identify and manage risk factors and concomitant diseases as an integral part of the management of patients with cardiomyopathy."
          ]
        }
      ]
    },
    {
      title: "Antiarrhythmic drugs",
      evidenceLevel: "B",
      guidelines: [
        {
          organization: "ACC/AHA/AMSSM/SCMR 2024",
          recommendations: [
            "Initiate antiarrhythmic drugs, such as amiodarone, dofetilide, mexiletine, or sotalol in adult patients with HCM and symptomatic ventricular arrhythmias or recurrent ICD shocks despite β-blocker use. Decide on the choice of antiarrhythmic agent based on age, underlying comorbidities, severity of disease, patient preferences, and balance between efficacy and safety.",
            "Initiate antiarrhythmic drugs (amiodarone, mexiletine, sotalol) in pediatric patients with HCM and recurrent ventricular arrhythmias despite β-blocker use. Decide on the choice of agent based on age, underlying comorbidities, severity of disease, patient preferences, and balance between efficacy and safety."
          ]
        },
        {
          organization: "ESC 2022",
          recommendation: "Consider initiating antiarrhythmic drugs in patients with HCM and recurrent, symptomatic ventricular arrhythmia, or recurrent ICD therapy.",
          evidenceLevel: "C"
        }
      ]
    },
    {
      title: "Management of obstructive symptoms - Beta-blockers and CCBs",
      evidenceLevel: "B",
      guidelines: [
        {
          organization: "ACC/AHA/AMSSM/SCMR 2024",
          recommendations: [
            "Initiate nonvasodilating β-blockers, titrated to effectiveness or maximally tolerated doses, in patients with obstructive HCM having symptoms attributable to LVOTO.",
            "Substitute β-blockers with nondihydropyridine CCBs, such as verapamil or diltiazem, if β-blockers are ineffective or not tolerated."
          ]
        },
        {
          organization: "ESC 2023",
          recommendation: "Consider initiating β-blockers or verapamil to reduce LV pressures in selected asymptomatic patients with resting or provoked LVOTO.",
          evidenceLevel: "C"
        }
      ]
    },
    {
      title: "Management of obstructive symptoms - Disopyramide",
      evidenceLevel: "B",
      guidelines: [
        {
          organization: "ACC/AHA/AMSSM/SCMR 2024",
          recommendation: "Initiate disopyramide (in combination with an atrioventricular nodal blocking agent) or a myosin inhibitor (adult patients only), or offer septal reduction therapy at experienced centers in patients with persistent symptoms attributable to LVOTO despite β-blockers or nondihydropyridine CCBs."
        },
        {
          organization: "ESC 2023",
          recommendations: [
            "Initiate disopyramide, titrated to maximum tolerated dose, in addition to a β-blocker (or, if this is not possible, with verapamil or diltiazem) to improve symptoms in patients with resting or provoked LVOTO.",
            "Consider initiating disopyramide, titrated to maximum tolerated dose, as monotherapy to improve symptoms in patients with resting or provoked LVOTO intolerant or having contraindications to β-blockers and verapamil/diltiazem."
          ],
          evidenceLevels: ["B", "C"]
        }
      ]
    },
    {
      title: "Management of obstructive symptoms - Myosin inhibitors",
      evidenceLevel: "B",
      studies: [
        {
          name: "SEQUOIA-HCM",
          findings: "In patients with symptomatic obstructive HCM, aficamten was superior to placebo with respect to mean improvement in the peak oxygen uptake by cardiopulmonary exercise testing at week 24.",
          authors: "Martin S Maron et al.",
          journal: "N Engl J Med. 2024 May 30.",
          link: "https://pubmed.ncbi.nlm.nih.gov/"
        },
        {
          name: "EXPLORER-HCM", 
          findings: "In patients with HCM with LVOT gradient ≥ 50 mmHg and NYHA class II-III symptoms, mavacamten was superior to placebo with respect to clinical response at week 30.",
          authors: "Iacopo Olivotto et al.",
          journal: "Lancet. 2020 Sep 12.",
          link: "https://pubmed.ncbi.nlm.nih.gov/"
        }
      ],
      guidelines: [
        {
          organization: "ACC/AHA/AMSSM/SCMR 2024",
          recommendation: "Initiate a myosin inhibitor (adult patients only) or disopyramide (in combination with an atrioventricular nodal blocking agent), or offer septal reduction therapy at experienced centers in patients with persistent symptoms attributable to LVOTO despite β-blockers or nondihydropyridine CCBs."
        },
        {
          organization: "ESC 2023",
          recommendations: [
            "Consider initiating cardiac myosin adenosine triphosphatase inhibitor (mavacamten), titrated to maximum tolerated dose with echocardiographic surveillance of LVEF, in addition to a β-blocker (or, if this is not possible, with verapamil or diltiazem) to improve symptoms in adult patients with resting or provoked LVOTO.",
            "Consider initiating cardiac myosin adenosine triphosphatase inhibitor (mavacamten), titrated to maximum tolerated dose with echocardiographic surveillance of LVEF, as monotherapy in symptomatic adult patients with resting or provoked LVOTO (exercise or Valsalva maneuver) intolerant or having contraindications to β-blockers, verapamil/diltiazem, or disopyramide."
          ],
          evidenceLevels: ["B", "C"]
        }
      ]
    },
    {
      title: "Management of chest pain",
      evidenceLevel: "B",
      guidelines: [
        {
          organization: "ACC/AHA/AMSSM/SCMR 2024",
          recommendations: [
            "Initiate β-blockers or nondihydropyridine CCBs in patients with nonobstructive HCM with preserved ejection fraction and symptoms of exertional angina or dyspnea.",
            "Insufficient evidence regarding the usefulness of ACEis and ARBs in the treatment of angina or dyspnea in patients with nonobstructive HCM with preserved ejection fraction."
          ],
          evidenceLevels: ["B", "I"]
        },
        {
          organization: "ESC 2023",
          recommendations: [
            "Consider initiating β-blockers and CCBs (verapamil or diltiazem) to improve symptoms in patients with angina-like chest pain, even in the absence of LVOTO or obstructive coronary artery disease.",
            "Consider initiating oral nitrates to improve symptoms in patients with angina-like chest pain, even in the absence of obstructive coronary artery disease, if there is no LVOTO.",
            "Consider initiating ranolazine to improve symptoms in patients with angina-like chest pain, even in the absence of LVOTO or obstructive coronary artery disease."
          ],
          evidenceLevel: "C"
        }
      ]
    },
    {
      title: "Management of HFpEF",
      evidenceLevel: "B",
      guidelines: [
        {
          organization: "ACC/AHA/AMSSM/SCMR 2024",
          recommendations: [
            "Initiate β-blockers or nondihydropyridine CCBs in patients with nonobstructive HCM with preserved ejection fraction and symptoms of exertional angina or dyspnea.",
            "Consider adding oral diuretics when exertional dyspnea persists despite the use of β-blockers or nondihydropyridine CCBs.",
            "Consider initiating valsartan to slow adverse cardiac remodeling in younger patients (age ≤ 45 years) with nonobstructive HCM due to a pathogenic or likely pathogenic cardiac sarcomere genetic variant and a mild phenotype."
          ],
          evidenceLevels: ["B", "C", "C"]
        }
      ]
    },
    {
      title: "Management of HFrEF",
      evidenceLevel: "B",
      guidelines: [
        {
          organization: "ACC/AHA/AMSSM/SCMR 2024",
          recommendations: [
            "Initiate guideline-directed medical therapy for HF with reduced ejection in patients with HCM developing systolic dysfunction (LVEF < 50%).",
            "Discontinue cardiac myosin inhibitors in patients with HCM developing persistent systolic dysfunction (LVEF < 50%).",
            "Consider discontinuing previously indicated negative inotropic agents (specifically, verapamil, diltiazem, or disopyramide) in patients with HCM developing systolic dysfunction (LVEF < 50%)."
          ],
          evidenceLevels: ["B", "B", "C"]
        },
        {
          organization: "ESC 2014",
          recommendations: [
            "Initiate ACEis (or ARBs if ACEis are not tolerated), in addition to β-blockers, to reduce the risks of HF hospitalization and premature death in patients without LVOTO and with an LVEF < 50%.",
            "Initiate β-blockers, in addition to ACEis (or ARBs if ACEis are not tolerated), to improve symptoms and reduce the risks of HF hospitalization and premature death in patients without LVOTO and with an LVEF < 50%.",
            "Initiate mineralocorticoid receptor antagonists to reduce the risks of HF hospitalization and premature death in all patients with persisting symptoms (NYHA functional Class II-IV) and an LVEF < 50% despite treatment with ACEis (or ARBs) and β-blockers."
          ],
          evidenceLevel: "B"
        }
      ]
    },
    {
      title: "Medications to avoid",
      guidelines: [
        {
          organization: "ACC/AHA/AMSSM/SCMR 2024",
          recommendations: [
            "Consider discontinuing vasodilators (ACEis, ARBs, dihydropyridine CCBs) or digoxin, as these agents can worsen symptoms caused by dynamic outflow tract obstruction in patients with obstructive HCM.",
            "Recognize that verapamil is potentially harmful in patients with obstructive HCM and severe dyspnea at rest, hypotension, very high resting gradients (such as > 100 mmHg), as well as in pediatric patients < 6 weeks of age."
          ],
          evidenceLevels: ["C", "B"]
        },
        {
          organization: "ESC 2023",
          recommendation: "Avoid using digoxin and arterial and venous dilators, including nitrates and phosphodiesterase inhibitors, if possible, in patients with resting or provocable LVOTO.",
          evidenceLevel: "D"
        }
      ]
    }
  ]
}; 