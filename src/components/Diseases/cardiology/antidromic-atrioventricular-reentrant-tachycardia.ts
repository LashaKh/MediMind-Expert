import { DiseaseData } from '../types';

export const antidromicAVRTData: DiseaseData = {
  id: 'antidromic-atrioventricular-reentrant-tachycardia',
  title: 'Antidromic Atrioventricular Reentrant Tachycardia',
  lastUpdated: 'May 21, 2025',
  category: 'Electrophysiology',
  specialty: 'cardiology',
  content: {
    background: {
      overview: {
        definition: 'Antidromic AVRT is a type of SVT where the electrical impulses in the heart travel in an abnormal, reverse direction, leading to a rapid HR.',
        pathophysiology: 'The pathophysiology of antidromic AVRT involves an abnormal accessory pathway in the heart that allows electrical impulses to bypass the normal conduction system. This creates a reentrant circuit, leading to rapid HRs. In some cases, the bypass tract serves as the anterograde limb of the circuit and the atrioventricular node as the retrograde limb of the reentrant circuit.',
        epidemiology: 'Antidromic AVRT is a rare condition with an estimated incidence of 8% in patients with pre-excitation syndrome.',
        diseaseCourse: 'Clinically, patients with antidromic AVRT may present with symptoms such as palpitations, dizziness, and shortness of breath. However, in some cases, patients may be asymptomatic.',
        prognosis: 'The prognosis of antidromic AVRT is generally benign, but it can lead to severe complications in rare instances.'
      }
    },
    clinicalFindings: {
      patientDemographics: [
        'Occurs in patients with pre-excitation syndrome',
        'Rare condition (8% incidence in pre-excitation syndrome patients)'
      ],
      pastMedicalHistory: [
        'Pre-excitation syndrome',
        'Accessory pathway abnormalities',
        'Previous episodes of supraventricular tachycardia'
      ],
      symptoms: [
        'Palpitations',
        'Dizziness',
        'Shortness of breath',
        'May be asymptomatic in some cases'
      ],
      likelihoodRatios: [
        {
          finding: 'Wide QRS complex tachycardia',
          lrPlus: 'High',
          value: 'Suggestive of antidromic AVRT in pre-excitation syndrome'
        },
        {
          finding: 'Pre-excitation on resting ECG',
          lrPlus: 'High',
          value: 'Strong predictor of accessory pathway presence'
        },
        {
          finding: 'Hemodynamic instability during tachycardia',
          lrPlus: 'Moderate',
          value: 'May indicate rapid ventricular response'
        }
      ]
    },
    guidelines: {
      keySources: 'The following summarized guidelines for the management of antidromic atrioventricular reentrant tachycardia are prepared by our editorial team based on guidelines from the European Society of Cardiology (ESC 2020).',
      sections: [
        {
          title: 'Medical management',
          id: 'medical-management',
          content: [
            {
              statement: 'Comprehensive approach to acute and ongoing management of antidromic AVRT based on hemodynamic stability and patient characteristics.',
              level: 'A',
              source: 'ESC 2020 guidelines',
              subsections: [
                {
                  title: 'Acute management - Hemodynamically stable patients',
                  id: 'acute-management-stable',
                  content: [
                    {
                      statement: 'Consider administering IV formulations of ibutilide, procainamide, flecainide, or propafenone for acute management of hemodynamically stable patients with antidromic AVRT if vagal maneuvers and adenosine fail.',
                      level: 'C',
                      source: 'ESC 2020'
                    },
                    {
                      statement: 'Consider administering IV amiodarone for acute management of hemodynamically stable patients with refractory antidromic AVRT.',
                      level: 'C',
                      source: 'ESC 2020'
                    }
                  ]
                },
                {
                  title: 'Ongoing management',
                  id: 'ongoing-management',
                  content: [
                    {
                      statement: 'Consider initiating β-blockers or nondihydropyridine CCBs (verapamil or diltiazem) in the absence of HFrEF for patients with antidromic AVRT and without signs of pre-excitation on resting ECG, if ablation is not desirable or feasible.',
                      level: 'IIa, B',
                      source: 'ESC 2020'
                    },
                    {
                      statement: 'Consider initiating propafenone or flecainide for patients with antidromic AVRT and without ischemic or structural heart disease, if ablation is not desirable or feasible.',
                      level: 'C',
                      source: 'ESC 2020'
                    }
                  ]
                },
                {
                  title: 'Contraindications',
                  id: 'contraindications',
                  content: [
                    {
                      statement: 'Do not use β-blockers, nondihydropyridine CCBs (verapamil or diltiazem), digoxin, or amiodarone in patients with pre-excited AF.',
                      level: 'D',
                      source: 'ESC 2020'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: 'Nonpharmacologic interventions',
          id: 'nonpharmacologic-interventions',
          content: [
            {
              statement: 'Vagal maneuvers as first-line acute management approach for hemodynamically stable patients.',
              level: 'B',
              source: 'ESC 2020 guidelines',
              subsections: [
                {
                  title: 'Vagal maneuvers',
                  id: 'vagal-maneuvers',
                  content: [
                    {
                      statement: 'Perform vagal maneuvers, preferably in the supine position with leg elevation, for acute management of hemodynamically stable patients with antidromic AVRT.',
                      level: 'B',
                      source: 'ESC 2020'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: 'Therapeutic procedures',
          id: 'therapeutic-procedures',
          content: [
            {
              statement: 'Electrical and catheter-based interventions for management of antidromic AVRT based on clinical presentation and patient factors.',
              level: 'A',
              source: 'ESC 2020 guidelines',
              subsections: [
                {
                  title: 'Synchronized electrical cardioversion',
                  id: 'electrical-cardioversion',
                  content: [
                    {
                      statement: 'Perform synchronized direct current cardioversion for acute management of hemodynamically unstable patients with antidromic AVRT.',
                      level: 'B',
                      source: 'ESC 2020'
                    },
                    {
                      statement: 'Perform synchronized direct current cardioversion for acute management of hemodynamically stable patients with antidromic AVRT if drug therapy fails to convert or control the tachycardia.',
                      level: 'B',
                      source: 'ESC 2020'
                    },
                    {
                      statement: 'Consider performing synchronized direct current cardioversion for acute management of hemodynamically stable patients with antidromic AVRT if vagal maneuvers and adenosine fail.',
                      level: 'C',
                      source: 'ESC 2020'
                    }
                  ]
                },
                {
                  title: 'Catheter ablation',
                  id: 'catheter-ablation',
                  content: [
                    {
                      statement: 'Perform catheter ablation of accessory pathways in patients with symptomatic, recurrent antidromic AVRT.',
                      level: 'B',
                      source: 'ESC 2020'
                    }
                  ]
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
        authors: 'Béatrice Brembilla-Perrot, Maheshwar Pauriah, Jean-Marc Sellal et al.',
        title: 'Incidence and prognostic significance of spontaneous and inducible antidromic tachycardia',
        journal: 'Europace. 2013 Jun;15(6):871-6',
        year: '2013',
        link: 'https://pubmed.ncbi.nlm.nih.gov/23148120/'
      },
      {
        id: 2,
        authors: 'Serkan Topaloglu, Ozcan Ozeke, Serkan Cay et al.',
        title: 'Wide QRS complex supraventricular tachycardia with negative precordial concordance: Electrocardiographic clues for Mahaim pathway with Ebstein anomaly',
        journal: 'J Electrocardiol. 2018 Jul-Aug;51(4):663-666',
        year: '2018',
        link: 'https://pubmed.ncbi.nlm.nih.gov/29997008/'
      },
      {
        id: 3,
        authors: 'Josep Brugada, Demosthenes G Katritsis, Elena Arbelo et al.',
        title: '2019 ESC Guidelines for the management of patients with supraventricular tachycardia - The Task Force for the management of patients with supraventricular tachycardia of the European Society of Cardiology (ESC)',
        journal: 'Eur Heart J. 2020 Feb 1;41(5):655-720',
        year: '2020',
        link: 'https://pubmed.ncbi.nlm.nih.gov/31504425/'
      }
    ]
  }
}; 