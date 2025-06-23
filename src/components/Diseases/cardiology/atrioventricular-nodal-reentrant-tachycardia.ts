import { DiseaseData } from '../types';

export const atrioventricularNodalReentrantTachycardiaData: DiseaseData = {
  id: 'atrioventricular-nodal-reentrant-tachycardia',
  title: 'Atrioventricular Nodal Reentrant Tachycardia (AVNRT)',
  specialty: 'cardiology',
  content: {
    background: {
      overview: {
        definition: 'AVNRT is a type of SVT characterized by a reentry circuit within the atrioventricular node.',
        pathophysiology: 'The pathophysiology of AVNRT involves dual pathways within the atrioventricular node, typically referred to as the fast and slow pathways. These dual pathways create a reentry circuit, leading to the abnormal electrical signals and rapid HR characteristic of this condition.',
        epidemiology: 'The incidence of AVNRT in patients receiving ICDs is estimated at 3.5%. Risk factors for AVNRT include female sex and structural heart disease. Certain triggers, such as stress or caffeine, can also precipitate episodes of AVNRT. Additionally, genetic predisposition may play a role in the development of AVNRT.',
        diseaseCourse: 'Clinically, AVNRT often presents with symptoms such as palpitations, dizziness, and shortness of breath. The duration and frequency of AVNRT episodes can vary widely among patients, with some experiencing infrequent, short-lived episodes and others suffering from more persistent or recurrent tachycardia.',
        prognosis: 'The prognosis of AVNRT is generally good. It is a benign condition but can lead to significant morbidity due to the symptoms it causes.'
      }
    },
    clinicalFindings: {
      symptoms: [
        'Chest pain',
        'Dizziness',
        'Dyspnea',
        'Fatigue',
        'Lightheadedness',
        'Palpitations',
        'Polyuria',
        'Pounding in the chest, neck, or ears',
        'Syncope'
      ],
      vitalSigns: [
        'Diaphoresis (Integument Exam)',
        'Tachycardia (Vital Signs)'
      ]
    },
    guidelines: {
      keySources: 'The following summarized guidelines for the management of atrioventricular nodal reentrant tachycardia are prepared by our editorial team based on guidelines from the European Society of Cardiology (ESC 2020) and the American Heart Association (AHA/HRS/ACC 2016).',
      sections: [
        {
          title: 'Acute Management',
          id: 'acute-management',
          content: [
            {
              statement: 'Acute management guidelines for AVNRT are provided by ESC 2020 and ACC/AHA/HRS 2016.',
              level: 'A',
              source: 'ESC 2020, ACC/AHA/HRS 2016',
              subsections: [
                {
                  title: 'ESC 2020 Guidelines',
                  id: 'acute-management-esc-2020',
                  content: [
                    {
                      statement: 'Administer IV adenosine (6-18 mg bolus) for acute management of hemodynamically stable patients with AVNRT if vagal maneuvers fail.',
                      level: 'B',
                      source: 'ESC 2020'
                    },
                    {
                      statement: 'Consider administering IV formulations of the following medications for acute management of hemodynamically stable patients with AVNRT if vagal maneuvers and adenosine fail: Nondihydropyridine CCBs, i.e. verapamil or diltiazem; β-blockers, i.e. esmolol or metoprolol',
                      level: 'C',
                      source: 'ESC 2020'
                    }
                  ]
                },
                {
                  title: 'ACC/AHA/HRS 2016 Guidelines',
                  id: 'acute-management-acc-aha-hrs-2016',
                  content: [
                    {
                      statement: 'Administer adenosine for acute management of patients with AVNRT.',
                      level: 'B',
                      source: 'ACC/AHA/HRS 2016'
                    },
                    {
                      statement: 'Consider administering β-blockers, diltiazem, verapamil for acute management of hemodynamically stable patients with AVNRT, either formulated as IV or PO.',
                      level: 'C',
                      source: 'ACC/AHA/HRS 2016'
                    },
                    {
                      statement: 'Consider administering IV amiodarone for acute management of hemodynamically stable patients with AVNRT when other therapies are ineffective or contraindicated.',
                      level: 'C',
                      source: 'ACC/AHA/HRS 2016'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: 'Ongoing Management',
          id: 'ongoing-management',
          content: [
            {
              statement: 'Consider initiating the following medications for the management of patients with AVNRT if ablation is not desirable or feasible: Nondihydropyridine CCBs (verapamil or diltiazem) in the absence of HFrEF; β-blockers',
              level: 'C',
              source: 'ESC 2020'
            },
            {
              statement: 'Consider offering abstinence from therapy in minimally symptomatic patients with very infrequent, short-lived episodes of AVNRT.',
              level: 'C',
              source: 'ESC 2020'
            },
            {
              statement: 'Initiate oral formulations of the following medications for ongoing management of patients with AVNRT not being candidates for, or preferring not to undergo, catheter ablation: Verapamil; Diltiazem; β-blockers',
              level: 'B',
              source: 'ACC/AHA/HRS 2016'
            },
            {
              statement: 'Consider initiating the following medications for ongoing management of patients without structural heart disease or ischemic heart disease having AVNRT and not being candidates for, or preferring not to undergo, catheter ablation and if β-blockers, diltiazem, or verapamil are ineffective or contraindicated: Flecainide; Propafenone',
              level: 'C',
              source: 'ACC/AHA/HRS 2016'
            },
            {
              statement: 'Consider initiating oral formulations of the following medications for ongoing management of patients with AVNRT not being candidates for, or preferring not to undergo, catheter ablation: Sotalol; Dofetilide; Digoxin; Amiodarone',
              level: 'C',
              source: 'ACC/AHA/HRS 2016'
            },
            {
              statement: 'Consider prescribing self-administration ("pill-in-the-pocket") of acute doses of oral β-blockers, diltiazem, or verapamil for ongoing management of patients with infrequent, well-tolerated episodes of AVNRT.',
              level: 'C',
              source: 'ACC/AHA/HRS 2016'
            }
          ]
        },
        {
          title: 'Vagal Maneuvers',
          id: 'vagal-maneuvers',
          content: [
            {
              statement: 'Perform vagal maneuvers, preferably in the supine position with leg elevation, for acute management of hemodynamically stable patients with AVNRT.',
              level: 'B',
              source: 'ESC 2020'
            },
            {
              statement: 'Perform vagal maneuvers for acute management of patients with AVNRT.',
              level: 'B',
              source: 'ACC/AHA/HRS 2016'
            }
          ]
        },
        {
          title: 'Synchronized Electrical Cardioversion',
          id: 'synchronized-electrical-cardioversion',
          content: [
            {
              statement: 'Perform synchronized direct current cardioversion for acute management of hemodynamically unstable patients with AVNRT.',
              level: 'B',
              source: 'ESC 2020'
            },
            {
              statement: 'Perform synchronized direct current cardioversion for acute management of hemodynamically stable patients with AVNRT if drug therapy fails to convert or control the tachycardia.',
              level: 'B',
              source: 'ESC 2020'
            },
            {
              statement: 'Perform synchronized cardioversion for acute management of hemodynamically unstable patients with AVNRT if adenosine and vagal maneuvers do not terminate the tachycardia or are not feasible.',
              level: 'B',
              source: 'ACC/AHA/HRS 2016'
            },
            {
              statement: 'Perform synchronized cardioversion for acute management of hemodynamically stable patients with AVNRT if pharmacological therapy does not terminate the tachycardia or is contraindicated.',
              level: 'B',
              source: 'ACC/AHA/HRS 2016'
            }
          ]
        },
        {
          title: 'Catheter Ablation',
          id: 'catheter-ablation',
          content: [
            {
              statement: 'Perform catheter ablation for the management of patients with symptomatic recurrent AVNRT.',
              level: 'B',
              source: 'ESC 2020'
            },
            {
              statement: 'Perform catheter ablation of the slow pathway in patients with AVNRT.',
              level: 'B',
              source: 'ACC/AHA/HRS 2016'
            }
          ]
        },
        {
          title: 'Follow-up and Surveillance',
          id: 'follow-up-and-surveillance',
          content: [
            {
              statement: 'Consider obtaining clinical follow-up without pharmacological therapy or ablation for ongoing management of minimally symptomatic patients with AVNRT.',
              level: 'C',
              source: 'ACC/AHA/HRS 2016'
            }
          ]
        }
      ]
    },
    references: [
      {
        id: 1,
        authors: 'Luigi Di Biase, Carola Gianni, Giuseppe Bagliani et al.',
        title: 'Arrhythmias Involving the Atrioventricular Junction',
        journal: 'Card Electrophysiol Clin. 2017 Sep;9(3):435-452',
        year: '2017',
        link: 'https://pubmed.ncbi.nlm.nih.gov/28838549/'
      },
      {
        id: 2,
        authors: 'Demosthenes G Katritsis, Mark E Josephson',
        title: 'Classification, Electrophysiological Features and Therapy of Atrioventricular Nodal Reentrant Tachycardia',
        journal: 'Arrhythm Electrophysiol Rev. 2016 Aug;5(2):130-5',
        year: '2016',
        link: 'https://pubmed.ncbi.nlm.nih.gov/27617092/'
      },
      {
        id: 3,
        authors: 'Jeffrey J Goldberger, Rod Passman, Rishi Arora et al.',
        title: 'A higher than expected prevalence of AV nodal reentrant tachycardia in patients receiving implantable cardioverter-defibrillators',
        journal: 'Pacing Clin Electrophysiol. 2011 May;34(5):584-6',
        year: '2011',
        link: 'https://pubmed.ncbi.nlm.nih.gov/21332561/'
      },
      {
        id: 4,
        authors: 'John J Hayes, Param P Sharma, Peter N Smith et al.',
        title: 'Familial atrioventricular nodal reentry tachycardia',
        journal: 'Pacing Clin Electrophysiol. 2004 Jan;27(1):73-6',
        year: '2004',
        link: 'https://pubmed.ncbi.nlm.nih.gov/14720158/'
      },
      {
        id: 5,
        authors: 'P C Lee, S A Chen, C E Chiang et al.',
        title: 'Clinical and electrophysiological characteristics in children with atrioventricular nodal reentrant tachycardia',
        journal: 'Pediatr Cardiol. 2003 Jan-Feb;24(1):6-9',
        year: '2003',
        link: 'https://pubmed.ncbi.nlm.nih.gov/12574975/'
      },
      {
        id: 6,
        authors: 'Wei-Chung Tsai, Kun-Tai Lee, Kai-Hung Cheng et al.',
        title: 'Suppression of atrial fibrillation following successful ablation of atrioventricular nodal reentrant tachycardia: a case report',
        journal: 'Kaohsiung J Med Sci. 2009 Apr;25(4):207-11',
        year: '2009',
        link: 'https://pubmed.ncbi.nlm.nih.gov/19502138/'
      },
      {
        id: 7,
        authors: 'Josep Brugada, Demosthenes G Katritsis, Elena Arbelo et al.',
        title: '2019 ESC Guidelines for the management of patients with supraventricular tachycardia - The Task Force for the management of patients with supraventricular tachycardia of the European Society of Cardiology (ESC)',
        journal: 'Eur Heart J. 2020 Feb 1;41(5):655-720',
        year: '2020',
        link: 'https://pubmed.ncbi.nlm.nih.gov/31504425/'
      },
      {
        id: 8,
        authors: 'Richard L Page, José A Joglar, Mary A Caldwell et al.',
        title: '2015 ACC / AHA / HRS Guideline for the Management of Adult Patients With Supraventricular Tachycardia: Executive Summary: A Report of the American College of Cardiology / American Heart Association Task Force on Clinical Practice Guidelines and the Heart Rhythm Society',
        journal: 'Circulation. 2016 Apr 5;133(14):e471-505',
        year: '2016',
        link: 'https://pubmed.ncbi.nlm.nih.gov/26399662/'
      }
    ]
  }
}; 