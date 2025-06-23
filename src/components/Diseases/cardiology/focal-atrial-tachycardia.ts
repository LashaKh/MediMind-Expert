import { DiseaseData } from '../types';

export const focalAtrialTachycardiaData: DiseaseData = {
  id: 'focal-atrial-tachycardia',
  title: 'Focal Atrial Tachycardia',
  specialty: 'cardiology',
  content: {
    background: {
      overview: {
        definition: 'Focal atrial tachycardia (FAT) is a type of supraventricular tachycardia originating from a single atrial focus outside the sinoatrial node.',
        pathophysiology: 'FAT arises from abnormal automaticity, triggered activity, or micro-reentry from a single atrial focus. The arrhythmia originates from various atrial locations and can occur in both structurally normal and abnormal hearts.',
        epidemiology: 'FAT accounts for approximately 10-15% of all supraventricular tachycardias. It can occur at any age but is more common in patients with structural heart disease.',
        diseaseCourse: 'FAT may present as paroxysmal or persistent episodes. In some cases, it can lead to tachycardia-induced cardiomyopathy if sustained for prolonged periods.',
        prognosis: 'The prognosis is generally good, especially in patients without structural heart disease. Catheter ablation has high success rates for symptomatic cases.'
      }
    },
    clinicalFindings: {
      symptoms: [
        'Palpitations',
        'Chest discomfort',
        'Shortness of breath',
        'Dizziness',
        'Fatigue',
        'Syncope (rare)',
        'Exercise intolerance'
      ],
      vitalSigns: [
        'Regular tachycardia',
        'Heart rate typically 150-250 bpm',
        'Normal blood pressure (unless hemodynamically compromised)'
      ]
    },
    guidelines: {
      keySources: 'The following summarized guidelines for the management of focal atrial tachycardia are prepared by our editorial team based on guidelines from the European Society of Cardiology (ESC 2020) and the American Heart Association (AHA/HRS/ACC 2016).',
      sections: [
        {
          title: 'Acute Management',
          id: 'acute-management',
          content: [
            {
              statement: 'Acute management of focal atrial tachycardia focuses on rate and rhythm control based on hemodynamic stability.',
              level: 'A',
              source: 'ESC 2020, ACC/AHA/HRS 2016',
              subsections: [
                {
                  title: 'ESC 2020 Guidelines',
                  id: 'acute-management-esc-2020',
                  content: [
                    {
                      statement: 'Consider administering intravenous adenosine (6-18 mg bolus) for acute management of hemodynamically stable patients with FAT.',
                      level: 'C',
                      source: 'ESC 2020'
                    },
                    {
                      statement: 'Consider administering IV formulations of the following medications for acute management of hemodynamically stable patients with FAT in the absence of decompensated HF, if adenosine fails: β-blockers, i.e. esmolol or metoprolol; nondihydropyridine CCBs, i.e. verapamil or diltiazem',
                      level: 'C',
                      source: 'ESC 2020'
                    },
                    {
                      statement: 'Consider administering IV formulations of the following medications for acute management of hemodynamically stable patients with FAT if adenosine, β-blockers, and nondihydropyridine CCBs fail: ibutilide; flecainide; propafenone; amiodarone',
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
                      statement: 'Administer IV formulations of the following medications for acute management of hemodynamically stable patients with FAT: β-blockers; diltiazem; verapamil',
                      level: 'B',
                      source: 'ACC/AHA/HRS 2016'
                    },
                    {
                      statement: 'Consider administering adenosine in the acute setting to either restore sinus rhythm or diagnose the tachycardia mechanism in patients with suspected FAT.',
                      level: 'C',
                      source: 'ACC/AHA/HRS 2016'
                    },
                    {
                      statement: 'Consider administering IV amiodarone in the acute setting to either restore sinus rhythm or slow the ventricular rate in hemodynamically stable patients with FAT.',
                      level: 'C',
                      source: 'ACC/AHA/HRS 2016'
                    },
                    {
                      statement: 'Consider administering ibutilide in the acute setting to restore sinus rhythm in hemodynamically stable patients with FAT.',
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
              statement: 'Long-term management strategies for FAT include pharmacological therapy and catheter ablation.',
              level: 'A',
              source: 'ESC 2020, ACC/AHA/HRS 2016',
              subsections: [
                {
                  title: 'ESC 2020 Guidelines',
                  id: 'ongoing-management-esc-2020',
                  content: [
                    {
                      statement: 'Consider initiating the following medications for the management of patients with FAT if ablation is not desirable or feasible: β-blockers; nondihydropyridine CCBs (verapamil or diltiazem) in the absence of HFrEF; propafenone or flecainide in the absence of structural or ischemic heart disease',
                      level: 'C',
                      source: 'ESC 2020'
                    },
                    {
                      statement: 'Consider initiating a combination of ivabradine and a β-blocker for the management of patients with FAT if monotherapy fails.',
                      level: 'C',
                      source: 'ESC 2020'
                    },
                    {
                      statement: 'Consider initiating amiodarone for the management of patients with FAT if the above measures fail.',
                      level: 'C',
                      source: 'ESC 2020'
                    }
                  ]
                },
                {
                  title: 'ACC/AHA/HRS 2016 Guidelines',
                  id: 'ongoing-management-acc-aha-hrs-2016',
                  content: [
                    {
                      statement: 'Consider initiating oral formulations of the following medications for ongoing management of patients with symptomatic FAT: β-blockers; diltiazem; verapamil',
                      level: 'C',
                      source: 'ACC/AHA/HRS 2016'
                    },
                    {
                      statement: 'Consider initiating the following medications for ongoing management of patients without structural heart disease or ischemic heart disease who have FAT: flecainide; propafenone',
                      level: 'C',
                      source: 'ACC/AHA/HRS 2016'
                    },
                    {
                      statement: 'Consider initiating oral formulations of the following medications for ongoing management of patients with FAT: sotalol; amiodarone',
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
          title: 'Synchronized Electrical Cardioversion',
          id: 'synchronized-electrical-cardioversion',
          content: [
            {
              statement: 'Synchronized electrical cardioversion is indicated for hemodynamically unstable patients and as rescue therapy.',
              level: 'B',
              source: 'ESC 2020, ACC/AHA/HRS 2016',
              subsections: [
                {
                  title: 'ESC 2020 Guidelines',
                  id: 'cardioversion-esc-2020',
                  content: [
                    {
                      statement: 'Perform synchronized direct current cardioversion for acute management of hemodynamically unstable patients with FAT.',
                      level: 'B',
                      source: 'ESC 2020'
                    },
                    {
                      statement: 'Perform synchronized direct current cardioversion for acute management of hemodynamically stable patients with FAT if drug therapy fails to convert or control the tachycardia.',
                      level: 'B',
                      source: 'ESC 2020'
                    }
                  ]
                },
                {
                  title: 'ACC/AHA/HRS 2016 Guidelines',
                  id: 'cardioversion-acc-aha-hrs-2016',
                  content: [
                    {
                      statement: 'Perform synchronized cardioversion for acute management of hemodynamically unstable patients with FAT.',
                      level: 'B',
                      source: 'ACC/AHA/HRS 2016'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: 'Catheter Ablation',
          id: 'catheter-ablation',
          content: [
            {
              statement: 'Catheter ablation is an effective treatment option for symptomatic focal atrial tachycardia.',
              level: 'B',
              source: 'ACC/AHA/HRS 2016',
              subsections: [
                {
                  title: 'ACC/AHA/HRS 2016 Guidelines',
                  id: 'catheter-ablation-acc-aha-hrs-2016',
                  content: [
                    {
                      statement: 'Perform catheter ablation as an alternative to pharmacological therapy in symptomatic patients with FAT.',
                      level: 'B',
                      source: 'ACC/AHA/HRS 2016'
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
        authors: 'Richard L Page, José A Joglar, Mary A Caldwell et al.',
        title: '2015 ACC / AHA / HRS Guideline for the Management of Adult Patients With Supraventricular Tachycardia: Executive Summary: A Report of the American College of Cardiology / American Heart Association Task Force on Clinical Practice Guidelines and the Heart Rhythm Society',
        journal: 'Circulation. 2016 Apr 5;133(14):e471-505',
        year: '2016',
        pmid: '26399662',
        url: 'https://pubmed.ncbi.nlm.nih.gov/26399662/'
      },
      {
        id: 2,
        authors: 'Josep Brugada, Demosthenes G Katritsis, Elena Arbelo et al.',
        title: '2019 ESC Guidelines for the management of patients with supraventricular tachycardia - The Task Force for the management of patients with supraventricular tachycardia of the European Society of Cardiology (ESC)',
        journal: 'Eur Heart J. 2020 Feb 1;41(5):655-720',
        year: '2020',
        pmid: '31504425',
        url: 'https://pubmed.ncbi.nlm.nih.gov/31504425/'
      },
      {
        id: 3,
        authors: 'Kurt C Roberts-Thomson, Peter M Kistler, Jonathan M Kalman',
        title: 'Focal atrial tachycardia I: clinical features, diagnosis, mechanisms, and anatomic location',
        journal: 'Pacing Clin Electrophysiol. 2006 Jun;29(6):643-52',
        year: '2006',
        pmid: '16784432',
        url: 'https://pubmed.ncbi.nlm.nih.gov/16784432/'
      },
      {
        id: 4,
        authors: 'Raphael Rosso, Peter M Kistler',
        title: 'Focal atrial tachycardia',
        journal: 'Heart. 2010 Feb;96(3):181-5',
        year: '2010',
        pmid: '19443472',
        url: 'https://pubmed.ncbi.nlm.nih.gov/19443472/'
      },
      {
        id: 5,
        authors: 'Kurt C Roberts-Thomson, Peter M Kistler, Jonathan M Kalman',
        title: 'Atrial tachycardia: mechanisms, diagnosis, and management',
        journal: 'Curr Probl Cardiol. 2005 Oct;30(10):529-73',
        year: '2005',
        pmid: '16182016',
        url: 'https://pubmed.ncbi.nlm.nih.gov/16182016/'
      }
    ]
  }
}; 