import { DiseaseData } from '../types';

export const atrialFlutterData: DiseaseData = {
  id: 'atrial-flutter',
  title: 'Atrial Flutter',
  lastUpdated: 'May 31, 2025',
  category: 'Arrhythmias',
  specialty: 'cardiology',
  content: {
    background: {
      overview: {
        definition: 'Atrial flutter is a supraventricular arrhythmia characterized by rapid, regular atrial contractions, primarily confined to the right atrium.',
        pathophysiology: 'The pathophysiology of atrial flutter involves the formation of a reentrant circuit, often around the tricuspid valve or along the right atrial wall. This circuit results in a rapid and regular atrial rhythm. Abnormal intraatrial conduction, slow conduction paths, and areas of low voltage in the atria can contribute to the initiation and maintenance of these reentrant circuits.',
        epidemiology: 'The prevalence of idiopathic neonatal atrial flutter in Europe is estimated at 1.5 per 100,000 population. Risk factors for atrial flutter include advancing age (particularly prevalent in the elderly population) and underlying cardiac conditions such as hypertension, HF, and congenital heart disease. Additional risk factors include pulmonary disease, hyperthyroidism, and the use of specific medications, such as class 1C antiarrhythmic drugs.',
        diseaseCourse: 'The clinical features of atrial flutter often include palpitations, dyspnea, and chest discomfort. However, the diagnosis is often confirmed through a 12-lead ECG or an electrophysiology study and mapping. Complications can include stroke, HF, thromboembolism, and progression to AF.',
        prognosis: 'The prognosis of atrial flutter can be influenced by several factors. The presence of underlying heart disease can complicate the condition and lead to poorer outcomes. There is a risk of progression to AF.'
      }
    },
    clinicalFindings: {
      patientDemographics: [
        'Elderly patients',
        'Patients with underlying cardiac conditions'
      ],
      pastMedicalHistory: [
        'COPD',
        'Congenital heart disease',
        'HF',
        'Hypertension',
        'Obstructive sleep apnea',
        'Pulmonary disease',
        'Hyperthyroidism'
      ],
      symptoms: [
        'Chest pain',
        'Dizziness',
        'Dyspnea',
        'Palpitations',
        'Syncope'
      ],
      likelihoodRatios: [
        {
          finding: 'Medication history - Antiarrhythmic agents',
          lrPlus: 'Variable',
          value: 'Class 1C antiarrhythmic drugs can contribute to atrial flutter'
        },
        {
          finding: 'Regular atrial rate 250-350 bpm',
          lrPlus: 'High',
          value: 'Classic presentation of typical atrial flutter'
        },
        {
          finding: 'Sawtooth pattern on ECG',
          lrPlus: 'High',
          value: 'Pathognomonic for typical atrial flutter'
        }
      ]
    },
    studies: [
      {
        year: '2015',
        title: 'Atrial flutter and thromboembolic risk: a systematic review',
        authors: 'Henrik Vadmann, Peter Brønnum Nielsen, Søren Pihlkjær Hjortshøj et al.',
        journal: 'Heart. 2015 Sep;101(18):1446-55',
        description: 'Systematic review examining thromboembolic risk in atrial flutter patients, providing evidence base for anticoagulation recommendations and establishing risk stratification frameworks.'
      },
      {
        year: '2020',
        title: '2019 ESC Guidelines for the management of patients with supraventricular tachycardia',
        authors: 'Josep Brugada, Demosthenes G Katritsis, Elena Arbelo et al.',
        journal: 'Eur Heart J. 2020 Feb 1;41(5):655-720',
        description: 'Comprehensive European guidelines providing updated management strategies for atrial flutter, including detailed ablation recommendations and evidence-based treatment algorithms.'
      },
      {
        year: '2024',
        title: '2023 ACC/AHA/ACCP/HRS Guideline for the Diagnosis and Management of Atrial Fibrillation',
        authors: 'José A Joglar, Mina K Chung, Anastasia L Armbruster et al.',
        journal: 'Circulation. 2024 Jan 2;149(1):e1-e156',
        description: 'Latest American guidelines addressing comprehensive management of atrial flutter within the broader context of atrial arrhythmia management, with updated recommendations for anticoagulation, ablation, and patient-specific care strategies.'
      }
    ],
    guidelines: {
      keySources: 'The following summarized guidelines for the evaluation and management of atrial flutter are prepared by our editorial team based on guidelines from the American Academy of Family Physicians (AAFP 2024), the American Heart Association (AHA/HRS/ACC/ACCP 2024), the European Society of Cardiology (ESC/EACTS 2024,2021), the Canadian Cardiovascular Society (CCS/CHRS 2020), the European Society of Cardiology (ESC 2020,2018), the Canadian Cardiovascular Society (CCS 2018), the Latin American Heart Rhythm Society (SOLAECE/ECAS/APHRS/EHRA/HRS 2017), and the American Heart Association (AHA/HRS/ACC 2016).',
      sections: [
        {
          id: 'diagnostic-investigations',
          title: 'Diagnostic Investigations',
          content: [
            {
              level: 'B',
              statement: 'Obtain a 12-lead ECG as part of the initial evaluation of patients with palpitations to screen for structural and ischemic heart disease, conduction disorders, and arrhythmias. Recognize that ambulatory ECG monitoring for 2 weeks has the highest diagnostic yield-to-cost ratio in the evaluation of palpitations of unknown etiology.',
              source: 'AAFP 2024'
            },
            {
              level: 'B',
              statement: 'Obtain echocardiography if history, physical examination, or ECG results raise concern for structural heart disease.',
              source: 'AAFP 2024'
            },
            {
              level: 'B',
              statement: 'Transfer patients experiencing palpitations in the presence of hemodynamic instability, syncope, ischemic chest pain, signs of HF, or ischemic or syndromic ECG changes to the emergency department with immediate cardiology referral.',
              source: 'AAFP 2024'
            },
            {
              level: 'B',
              statement: 'Recognize that the use of smartphone-based ambulatory cardiac monitoring devices is highly diagnostic for AF, the most common arrhythmia causing palpitations, but other forms of arrhythmia detection are less clear.',
              source: 'AAFP 2024'
            }
          ]
        },
        {
          id: 'rate-control-acute',
          title: 'Rate Control, Acute',
          content: [
            {
              level: 'C',
              statement: 'Consider administering IV β-blockers or nondihydropyridine CCBs (verapamil or diltiazem) for control of rapid ventricular rate in hemodynamically stable patients with macroreentrant atrial arrhythmia.',
              source: 'ESC 2020'
            },
            {
              level: 'C',
              statement: 'Consider administering IV amiodarone if the above agents are not available or desirable.',
              source: 'ESC 2020'
            },
            {
              level: 'B',
              statement: 'Administer IV or oral β-blockers, diltiazem, or verapamil for acute rate control in hemodynamically stable patients with atrial flutter.',
              source: 'ACC/AHA/HRS 2016'
            },
            {
              level: 'C',
              statement: 'Consider administering IV amiodarone for acute rate control (in the absence of pre-excitation) in patients with atrial flutter and systolic HF, if β-blockers are contraindicated or ineffective.',
              source: 'ACC/AHA/HRS 2016'
            }
          ]
        },
        {
          id: 'rate-control-long-term',
          title: 'Rate Control, Long-term',
          content: [
            {
              level: 'B',
              statement: 'Initiate β-blockers, diltiazem, or verapamil to control the ventricular rate in patients with hemodynamically tolerated atrial flutter.',
              source: 'ACC/AHA/HRS 2016'
            }
          ]
        },
        {
          id: 'rhythm-control-acute',
          title: 'Rhythm Control, Acute',
          content: [
            {
              level: 'B',
              statement: 'Administer IV ibutilide or IV or oral (in-hospital) dofetilide for pharmacological cardioversion in hemodynamically stable patients with macroreentrant atrial arrhythmia.',
              source: 'ESC 2020'
            },
            {
              level: 'D',
              statement: 'Do not use propafenone or flecainide for pharmacological cardioversion in hemodynamically stable patients with macroreentrant atrial arrhythmia.',
              source: 'ESC 2020'
            },
            {
              level: 'A',
              statement: 'Administer oral dofetilide or IV ibutilide for acute pharmacological cardioversion in stable patients with atrial flutter.',
              source: 'ACC/AHA/HRS 2016'
            },
            {
              level: 'C',
              statement: 'Consider administering IV ibutilide for acute management of atrial flutter in hemodynamically stable adult patients with congenital heart disease.',
              source: 'ACC/AHA/HRS 2016'
            },
            {
              level: 'C',
              statement: 'Consider administering IV procainamide for acute management of atrial flutter in hemodynamically stable adult patients with congenital heart disease.',
              source: 'ACC/AHA/HRS 2016'
            },
            {
              level: 'C',
              statement: 'Consider administering oral dofetilide for acute management of atrial flutter in hemodynamically stable adult patients with congenital heart disease.',
              source: 'ACC/AHA/HRS 2016'
            },
            {
              level: 'C',
              statement: 'Consider administering oral sotalol for acute management of atrial flutter in hemodynamically stable adult patients with congenital heart disease.',
              source: 'ACC/AHA/HRS 2016'
            }
          ]
        },
        {
          id: 'rhythm-control-long-term',
          title: 'Rhythm Control, Long-term',
          content: [
            {
              level: 'C',
              statement: 'Consider initiating β-blockers or nondihydropyridine CCBs (verapamil or diltiazem, in the absence of HFrEF) if ablation is not desirable or feasible. Consider initiating β-blockers for the management of patients with recurrent atrial flutter if ablation is not possible or successful.',
              source: 'ESC 2020'
            },
            {
              level: 'C',
              statement: 'Consider initiating amiodarone to maintain sinus rhythm if the above agents and/or catheter ablation fail.',
              source: 'ESC 2020'
            },
            {
              level: 'C',
              statement: 'Consider using amiodarone, dofetilide, or sotalol for maintaining sinus rhythm in symptomatic patients with recurrent atrial flutter, with the medication choice depending on underlying heart disease and comorbidities.',
              source: 'ACC/AHA/HRS 2016'
            },
            {
              level: 'C',
              statement: 'Consider using flecainide or propafenone for maintaining sinus rhythm in symptomatic patients with recurrent atrial flutter and without structural heart disease or ischemic heart disease.',
              source: 'ACC/AHA/HRS 2016'
            },
            {
              level: 'C',
              statement: 'Consider using oral β-blockers or sotalol for prevention of recurrent atrial flutter in adult patients with congenital heart disease.',
              source: 'ACC/AHA/HRS 2016'
            },
            {
              level: 'C',
              statement: 'Consider using oral dofetilide for prevention of recurrent atrial flutter in adult patients with congenital heart disease.',
              source: 'ACC/AHA/HRS 2016'
            },
            {
              level: 'C',
              statement: 'Consider using amiodarone for prevention of recurrent atrial flutter in adult patients with congenital heart disease, if other medications and catheter ablation are ineffective or contraindicated.',
              source: 'ACC/AHA/HRS 2016'
            }
          ]
        },
        {
          id: 'antithrombotic-therapy',
          title: 'Antithrombotic Therapy',
          content: [
            {
              level: 'B',
              statement: 'Initiate oral anticoagulation in patients with atrial flutter at elevated thromboembolic risk to prevent ischemic stroke and thromboembolism.',
              source: 'EACTS/ESC 2024'
            },
            {
              level: 'C',
              statement: 'Consider initiating anticoagulation in patients with atrial flutter without AF, but the threshold for initiation has not been established.',
              source: 'ESC 2020'
            },
            {
              level: 'B',
              statement: 'Initiate anticoagulation in patients with atrial flutter and concomitant AF as for patients with AF.',
              source: 'ESC 2020'
            },
            {
              level: 'D',
              statement: 'Avoid initiating antithrombotic therapy for stroke prevention in < 65 years old patients with atrial flutter with no CHADS₂ risk factors.',
              source: 'CCS 2018'
            },
            {
              level: 'B',
              statement: 'Initiate acute antithrombotic therapy in patients with atrial flutter to align with recommended antithrombotic therapy for patients with AF.',
              source: 'ACC/AHA/HRS 2016'
            },
            {
              level: 'B',
              statement: 'Initiate acute antithrombotic therapy in patients with atrial flutter and adult congenital heart disease patients to align with recommended antithrombotic therapy for patients with AF.',
              source: 'ACC/AHA/HRS 2016'
            },
            {
              level: 'B',
              statement: 'Continue ongoing management with antithrombotic therapy in patients with atrial flutter, both in patients without and with congenital heart disease.',
              source: 'ACC/AHA/HRS 2016'
            }
          ]
        },
        {
          id: 'electrical-cardioversion',
          title: 'Electrical Cardioversion',
          content: [
            {
              level: 'B',
              statement: 'Perform synchronized direct current cardioversion in hemodynamically unstable patients with macroreentrant atrial arrhythmia.',
              source: 'ESC 2020'
            },
            {
              level: 'B',
              statement: 'Perform low-energy (100 J biphasic) electrical cardioversion in hemodynamically stable patients with macroreentrant atrial arrhythmia.',
              source: 'ESC 2020'
            },
            {
              level: 'B',
              statement: 'Consider performing immediate electrical cardioversion if the recent-onset atrial flutter is causing hemodynamic instability with hypotension, ACS, or pulmonary edema.',
              source: 'CCS 2018'
            },
            {
              level: 'B',
              statement: 'Perform synchronized cardioversion for acute management of hemodynamically unstable patients with atrial flutter not responding to pharmacological therapies.',
              source: 'ACC/AHA/HRS 2016'
            },
            {
              level: 'B',
              statement: 'Perform elective synchronized cardioversion in stable patients with well-tolerated atrial flutter when a rhythm-control strategy is pursued.',
              source: 'ACC/AHA/HRS 2016'
            },
            {
              level: 'C',
              statement: 'Consider performing elective synchronized cardioversion for acute termination of atrial flutter in adult patients with congenital heart disease when acute pharmacological therapy is ineffective or contraindicated.',
              source: 'ACC/AHA/HRS 2016'
            }
          ]
        },
        {
          id: 'atrial-pacing',
          title: 'Atrial Pacing',
          content: [
            {
              level: 'B',
              statement: 'Perform high-rate atrial pacing for termination of atrial flutter in the presence of an implanted pacemaker or defibrillator in hemodynamically stable patients.',
              source: 'ESC 2020'
            },
            {
              level: 'C',
              statement: 'Consider performing invasive or noninvasive high-rate atrial pacing for termination of atrial flutter in hemodynamically stable patients.',
              source: 'ESC 2020'
            },
            {
              level: 'B',
              statement: 'Perform rapid atrial pacing for acute conversion of atrial flutter in patients having pacing wires in place as part of a permanent pacemaker or ICD or for temporary atrial pacing after cardiac surgery.',
              source: 'ACC/AHA/HRS 2016'
            },
            {
              level: 'C',
              statement: 'Consider performing atrial pacing to decrease recurrences of atrial flutter in adult patients with congenital heart disease and SND.',
              source: 'ACC/AHA/HRS 2016'
            }
          ]
        },
        {
          id: 'catheter-ablation',
          title: 'Catheter Ablation',
          content: [
            {
              level: 'B',
              statement: 'Consider performing catheter ablation to improve symptoms in patients with symptomatic or clinically significant atrial flutter.',
              source: 'ACC/ACCP/AHA/HRS 2024'
            },
            {
              level: 'B',
              statement: 'Perform catheter ablation of typical right atrial flutter as a reasonable alternative to pharmacologic rhythm or rate control therapy.',
              source: 'CCS/CHRS 2020'
            },
            {
              level: 'B',
              statement: 'Perform a linear ablation of the cavotricuspid isthmus in patients with a history of typical atrial flutter, or if typical atrial flutter is induced at the time of AF ablation.',
              source: 'APHRS/ECAS/EHRA/SOLAECE 2017'
            },
            {
              level: 'I',
              statement: 'Insufficient evidence to recommend linear ablation in the absence of macroreentrant atrial flutter.',
              source: 'APHRS/ECAS/EHRA/SOLAECE 2017'
            },
            {
              level: 'B',
              statement: 'Perform catheter ablation of the cavotricuspid isthmus in patients with atrial flutter that is either symptomatic or refractory to pharmacological rate control.',
              source: 'ACC/AHA/HRS 2016'
            },
            {
              level: 'C',
              statement: 'Consider performing catheter ablation in patients with cavotricuspid isthmus-dependent atrial flutter that occurs as the result of flecainide, propafenone, or amiodarone used for treatment of atrial flutter.',
              source: 'ACC/AHA/HRS 2016'
            },
            {
              level: 'C',
              statement: 'Consider performing catheter ablation of the cavotricuspid isthmus in patients undergoing catheter ablation of atrial flutter and having a history of documented clinical or induced cavotricuspid isthmus-dependent atrial flutter.',
              source: 'ACC/AHA/HRS 2016'
            },
            {
              level: 'B',
              statement: 'Perform catheter ablation in patients with recurrent symptomatic non-cavotricuspid isthmus-dependent flutter after failure of at least one antiarrhythmic agent.',
              source: 'ACC/AHA/HRS 2016'
            },
            {
              level: 'C',
              statement: 'Consider performing catheter ablation in patients with recurrent symptomatic non-cavotricuspid isthmus-dependent flutter as primary therapy, before therapeutic trials of antiarrhythmic drugs, after carefully weighing potential risks and benefits of treatment options.',
              source: 'ACC/AHA/HRS 2016'
            },
            {
              level: 'C',
              statement: 'Consider performing catheter ablation in asymptomatic patients with recurrent atrial flutter.',
              source: 'ACC/AHA/HRS 2016'
            },
            {
              level: 'C',
              statement: 'Consider performing catheter ablation after the first episode of symptomatic typical atrial flutter.',
              source: 'ESC 2020'
            },
            {
              level: 'A',
              statement: 'Perform catheter ablation for symptomatic, recurrent episodes of cavotricuspid isthmus-dependent flutter.',
              source: 'ESC 2020'
            },
            {
              level: 'B',
              statement: 'Perform catheter ablation in experienced centers for symptomatic, recurrent episodes of non-cavotricuspid isthmus-dependent flutter.',
              source: 'ESC 2020'
            },
            {
              level: 'B',
              statement: 'Perform catheter ablation in patients with persistent atrial flutter or in the presence of depressed LV systolic function due to tachycardiomyopathy.',
              source: 'ESC 2020'
            }
          ]
        },
        {
          id: 'atrioventricular-nodal-ablation',
          title: 'Atrioventricular Nodal Ablation',
          content: [
            {
              level: 'C',
              statement: 'Consider performing atrioventricular nodal ablation with subsequent pacing ("ablate and pace"), either biventricular or His-bundle pacing, if catheter ablation and pharmacological rhythm control fail and the patient has symptomatic persistent macroreentrant atrial arrhythmia with fast ventricular rates.',
              source: 'ESC 2020'
            }
          ]
        },
        {
          id: 'pericardioversion-anticoagulation',
          title: 'Pericardioversion Anticoagulation',
          content: [
            {
              level: 'B',
              statement: 'Initiate anticoagulant therapy in patients with atrial flutter according to the same risk profile used for AF.',
              source: 'ACC/ACCP/AHA/HRS 2024'
            },
            {
              level: 'B',
              statement: 'Continue anticoagulation for at least 4 weeks after successful cardioversion or ablation resulting in restoration of sinus rhythm in patients with atrial flutter.',
              source: 'ACC/ACCP/AHA/HRS 2024'
            },
            {
              level: 'A',
              statement: 'Initiate ongoing oral anticoagulation as indicated for AF after successful cavotricuspid isthmus ablation in patients with typical atrial flutter with a history of AF previously detected before atrial flutter ablation.',
              source: 'ACC/ACCP/AHA/HRS 2024'
            },
            {
              level: 'B',
              statement: 'Obtain close follow-up and arrhythmia monitoring to detect silent AF after successful cavotricuspid isthmus ablation in patients with typical atrial flutter deemed to be at high thromboembolic risk without any known previous history of AF if they are not receiving ongoing anticoagulation in view of significant risk of AF.',
              source: 'ACC/ACCP/AHA/HRS 2024'
            },
            {
              level: 'C',
              statement: 'Consider initiating long-term anticoagulation after successful cavotricuspid isthmus ablation in patients with typical atrial flutter without any known previous history of AF at high risk for development of AF (such as left atrium enlargement, inducible AF, COPD, HF) if thromboembolic risk assessment suggests high risk (> 2% annual risk) for stroke.',
              source: 'ACC/ACCP/AHA/HRS 2024'
            },
            {
              level: 'B',
              statement: 'Administer effective anticoagulation for a minimum of 3 weeks before cardioversion of atrial flutter.',
              source: 'EACTS/ESC 2021'
            },
            {
              level: 'B',
              statement: 'Initiate effective anticoagulation as soon as possible before every cardioversion of atrial flutter.',
              source: 'EACTS/ESC 2021'
            },
            {
              level: 'C',
              statement: 'Consider administering anticoagulation before cardioversion (using heparin, a factor Xa inhibitor, or a direct thrombin inhibitor) in patients with atrial flutter of < 48 hours duration and a CHA2DS2-VASc score of 0 in males and 1 in females, without the need for postcardioversion oral anticoagulation.',
              source: 'EACTS/ESC 2021'
            },
            {
              level: 'C',
              statement: 'Consider obtaining a TEE before cardioversion in patients with atrial flutter of ≥ 48 hours or of unknown duration who have not received anticoagulation for the preceding 3 weeks. Perform cardioversion if no LA thrombus is identified, including in the LAA, provided that anticoagulation is achieved before TEE and maintained after cardioversion for at least 4 weeks.',
              source: 'EACTS/ESC 2021'
            },
            {
              level: 'B',
              statement: 'Initiate therapeutic anticoagulation, in addition to appropriate rate control, for 3 weeks before cardioversion in most hemodynamically stable patients with atrial flutter planned to undergo electrical or pharmacological cardioversion.',
              source: 'CCS 2018'
            },
            {
              level: 'C',
              statement: 'Consider obtaining a TEE to exclude cardiac thrombus as an alternative to at least 3 weeks of therapeutic anticoagulation before cardioversion.',
              source: 'CCS 2018'
            },
            {
              level: 'C',
              statement: 'Consider initiating immediate (preferably before cardioversion) therapeutic anticoagulation with either a DOAC or with heparin followed by adjusted-dose warfarin when a decision is made that the patient will be undergoing unplanned cardioversion of atrial flutter.',
              source: 'CCS 2018'
            },
            {
              level: 'C',
              statement: 'Consider administering at least 4 weeks of therapeutic anticoagulation (adjusted-dose warfarin or a DOAC, in the absence of a strong contraindication) in all patients after cardioversion of atrial flutter.',
              source: 'CCS 2018'
            },
            {
              level: 'B',
              statement: 'Decide on the need for ongoing antithrombotic therapy based on the risk of stroke.',
              source: 'CCS 2018'
            }
          ]
        },
        {
          id: 'surgical-interventions',
          title: 'Surgical Interventions',
          content: [
            {
              level: 'C',
              statement: 'Consider performing surgical ablation of atrial flutter in adult patients with congenital heart disease undergoing planned surgical repair.',
              source: 'ACC/AHA/HRS 2016'
            }
          ]
        },
        {
          id: 'specific-circumstances',
          title: 'Specific Circumstances',
          content: [
            {
              level: 'C',
              statement: 'Consider administering IV ibutilide for termination of atrial flutter in pregnant patients.',
              source: 'ESC 2020'
            },
            {
              level: 'C',
              statement: 'Consider administering ibutilide or flecainide for termination of atrial flutter in stable pregnant patients with structurally normal hearts.',
              source: 'ESC 2018'
            },
            {
              level: 'C',
              statement: 'Consider initiating OACs in all adult patients with intracardiac repair, cyanosis, Fontan palliation, or systemic right ventricle and a history of atrial flutter.',
              source: 'EACTS/ESC 2021'
            },
            {
              level: 'B',
              statement: 'Initiate acute antithrombotic therapy in patients with atrial flutter and adult congenital heart disease patients to align with recommended antithrombotic therapy for patients with AF.',
              source: 'ACC/AHA/HRS 2016'
            },
            {
              level: 'C',
              statement: 'Consider offering a rhythm control strategy to improve functional status and potentially prolong survival in patients with pulmonary hypertension with pulmonary vascular disease and AF or atrial flutter.',
              source: 'ACC/ACCP/AHA/HRS 2024'
            }
          ]
        },
        {
          id: 'follow-up-surveillance',
          title: 'Follow-up and Surveillance',
          content: [
            {
              level: 'B',
              statement: 'Monitor patients after atrial flutter ablation for the occurrence of AF with opportunistic screening conducted at the time of medical encounters.',
              source: 'CCS/CHRS 2020'
            }
          ]
        }
      ]
    },
    references: [
      {
        id: 1,
        authors: 'Michela Masé, Leon Glass, Flavia Ravelli',
        title: 'A model for mechano-electrical feedback effects on atrial flutter interval variability',
        journal: 'Bull Math Biol. 2008 Jul;70(5):1326-47',
        year: '2008',
        link: 'https://pubmed.ncbi.nlm.nih.gov/18066611/'
      },
      {
        id: 2,
        authors: 'Paul G Novak, Laurent Macle, Bernard Thibault et al.',
        title: 'Right atrial tachycardia in a patient with severe atrial conduction disturbances and an anatomically normal heart',
        journal: 'Pacing Clin Electrophysiol. 2005 Jun;28(6):598-601',
        year: '2005',
        link: 'https://pubmed.ncbi.nlm.nih.gov/15955192/'
      },
      {
        id: 3,
        authors: 'Stéphanie Nguengang Wakap, Deborah M Lambert, Annie Olry et al.',
        title: 'Estimating cumulative point prevalence of rare diseases: analysis of the Orphanet database',
        journal: 'Eur J Hum Genet. 2020 Feb;28(2):165-173',
        year: '2020',
        link: 'https://pubmed.ncbi.nlm.nih.gov/31527858/'
      },
      {
        id: 4,
        authors: 'Richard L Page, José A Joglar, Mary A Caldwell et al.',
        title: '2015 ACC / AHA / HRS Guideline for the Management of Adult Patients With Supraventricular Tachycardia: Executive Summary',
        journal: 'Circulation. 2016 Apr 5;133(14):e471-505',
        year: '2016',
        link: 'https://pubmed.ncbi.nlm.nih.gov/26399663/'
      },
      {
        id: 5,
        authors: 'Bhaskar Bhardwaj, Ralph Lazzara, Stavros Stavrakis',
        title: 'Wide complex tachycardia in the presence of class I antiarrhythmic agents: a diagnostic challenge',
        journal: 'Ann Noninvasive Electrocardiol. 2014 May;19(3):289-92',
        year: '2014',
        link: 'https://pubmed.ncbi.nlm.nih.gov/24689895/'
      },
      {
        id: 6,
        authors: 'Fabio M Leonelli, Roberto De Ponti, Giuseppe Bagliani',
        title: 'Interpretation of Typical and Atypical Atrial Flutters by Precision Electrocardiology Based on Intracardiac Recording',
        journal: 'Card Electrophysiol Clin. 2022 Sep;14(3):435-458',
        year: '2022',
        link: 'https://pubmed.ncbi.nlm.nih.gov/36055751/'
      },
      {
        id: 7,
        authors: 'Christoph Scharf, Srikar Veerareddy, Mehmet Ozaydin et al.',
        title: 'Clinical significance of inducible atrial flutter during pulmonary vein isolation in patients with atrial fibrillation',
        journal: 'J Am Coll Cardiol. 2004 Jun 2;43(11):2057-62',
        year: '2004',
        link: 'https://pubmed.ncbi.nlm.nih.gov/15172412/'
      },
      {
        id: 8,
        authors: 'Henrik Vadmann, Peter Brønnum Nielsen, Søren Pihlkjær Hjortshøj et al.',
        title: 'Atrial flutter and thromboembolic risk: a systematic review',
        journal: 'Heart. 2015 Sep;101(18):1446-55',
        year: '2015',
        link: 'https://pubmed.ncbi.nlm.nih.gov/26076937/'
      },
      {
        id: 9,
        authors: 'José A Joglar, Mina K Chung, Anastasia L Armbruster et al.',
        title: '2023 ACC / AHA / ACCP / HRS Guideline for the Diagnosis and Management of Atrial Fibrillation',
        journal: 'Circulation. 2024 Jan 2;149(1):e1-e156',
        year: '2024',
        link: 'https://pubmed.ncbi.nlm.nih.gov/38033089/'
      },
      {
        id: 10,
        authors: 'Josep Brugada, Demosthenes G Katritsis, Elena Arbelo et al.',
        title: '2019 ESC Guidelines for the management of patients with supraventricular tachycardia',
        journal: 'Eur Heart J. 2020 Feb 1;41(5):655-720',
        year: '2020',
        link: 'https://pubmed.ncbi.nlm.nih.gov/31504452/'
      },
      {
        id: 11,
        authors: 'Jason G Andrade, Atul Verma, L Brent Mitchell et al.',
        title: '2018 Focused Update of the Canadian Cardiovascular Society Guidelines for the Management of Atrial Fibrillation',
        journal: 'Can J Cardiol. 2018 Nov;34(11):1371-1392',
        year: '2018',
        link: 'https://pubmed.ncbi.nlm.nih.gov/30447928/'
      },
      {
        id: 12,
        authors: 'Isabelle C Van Gelder, Michiel Rienstra, Karina V Bunting et al.',
        title: '2024 ESC Guidelines for the management of atrial fibrillation developed in collaboration with the European Association for Cardio-Thoracic Surgery (EACTS)',
        journal: 'Eur Heart J. 2024 Sep 29;45(36):3314-3414',
        year: '2024',
        link: 'https://pubmed.ncbi.nlm.nih.gov/39210738/'
      },
      {
        id: 13,
        authors: 'Gerhard Hindricks, Tatjana Potpara, Nikolaos Dagres et al.',
        title: '2020 ESC Guidelines for the diagnosis and management of atrial fibrillation developed in collaboration with the European Association for Cardio-Thoracic Surgery (EACTS)',
        journal: 'Eur Heart J. 2021 Feb 1;42(5):373-498',
        year: '2021',
        link: 'https://pubmed.ncbi.nlm.nih.gov/32860505/'
      },
      {
        id: 14,
        authors: 'Robert L Gauer, Melanie F Thomas, Ryan A McNutt',
        title: 'Palpitations: Evaluation, Management, and Wearable Smart Devices',
        journal: 'Am Fam Physician. 2024 Sep;110(3):259-269',
        year: '2024',
        link: 'https://pubmed.ncbi.nlm.nih.gov/39265145/'
      },
      {
        id: 15,
        authors: 'Jason G Andrade, Martin Aguilar, Clare Atzema et al.',
        title: 'The 2020 Canadian Cardiovascular Society / Canadian Heart Rhythm Society Comprehensive Guidelines for the Management of Atrial Fibrillation',
        journal: 'Can J Cardiol. 2020 Dec;36(12):1847-1948',
        year: '2020',
        link: 'https://pubmed.ncbi.nlm.nih.gov/33191198/'
      },
      {
        id: 16,
        authors: 'Regitz-Zagrosek V, Roos-Hesselink JW, Bauersachs J et al.',
        title: '2018 ESC Guidelines for the management of cardiovascular diseases during pregnancy',
        journal: 'Eur Heart J. 2018 Sep 7;39(34):3165-3241',
        year: '2018',
        link: 'https://pubmed.ncbi.nlm.nih.gov/30165544/'
      },
      {
        id: 17,
        authors: 'Calkins H, Hindricks G, Cappato R et al.',
        title: '2017 HRS / EHRA / ECAS / APHRS / SOLAECE expert consensus statement on catheter and surgical ablation of atrial fibrillation: Executive summary',
        journal: 'J Arrhythm. 2017 Oct;33(5):369-409',
        year: '2017',
        link: 'https://pubmed.ncbi.nlm.nih.gov/29021841/'
      },
      {
        id: 18,
        authors: 'Shah SR, Luu SW, Calestino M et al.',
        title: 'Management of atrial fibrillation-flutter: uptodate guideline paper on the current evidence',
        journal: 'J Community Hosp Intern Med Perspect. 2018 Oct 15;8(5):269-275',
        year: '2018',
        link: 'https://pubmed.ncbi.nlm.nih.gov/30338067/'
      },
      {
        id: 19,
        authors: 'January CT, Wann LS, Calkins H et al.',
        title: '2019 AHA / ACC / HRS Focused Update of the 2014 AHA / ACC / HRS Guideline for the Management of Patients With Atrial Fibrillation',
        journal: 'J Am Coll Cardiol. 2019 Jul 9;74(1):104-132',
        year: '2019',
        link: 'https://pubmed.ncbi.nlm.nih.gov/30703431/'
      },
      {
        id: 20,
        authors: 'Sheldon W Tobe, James A Stone, Todd Anderson et al.',
        title: 'Canadian Cardiovascular Harmonized National Guidelines Endeavour (C-CHANGE) guideline for the prevention and management of cardiovascular disease in primary care: 2018 update',
        journal: 'CMAJ. 2018 Oct 9;190(40):E1192-E1206',
        year: '2018',
        link: 'https://pubmed.ncbi.nlm.nih.gov/30297462/'
      },
      {
        id: 21,
        authors: 'Verma A, Cairns JA, Mitchell LB et al.',
        title: '2014 focused update of the Canadian Cardiovascular Society Guidelines for the management of atrial fibrillation',
        journal: 'Can J Cardiol. 2014 Oct;30(10):1114-30',
        year: '2014',
        link: 'https://pubmed.ncbi.nlm.nih.gov/25262857/'
      },
      {
        id: 22,
        authors: 'Perry M Elliott, Aris Anastasakis, Michael A Borger et al.',
        title: '2014 ESC Guidelines on diagnosis and management of hypertrophic cardiomyopathy',
        journal: 'Eur Heart J. 2014 Oct 14;35(39):2733-79',
        year: '2014',
        link: 'https://pubmed.ncbi.nlm.nih.gov/25173338/'
      },
      {
        id: 23,
        authors: 'Craig T January, L Samuel Wann, Joseph S Alpert et al.',
        title: '2014 AHA / ACC / HRS guideline for the management of patients with atrial fibrillation: executive summary',
        journal: 'Circulation. 2014 Dec 2;130(23):2071-104',
        year: '2014',
        link: 'https://pubmed.ncbi.nlm.nih.gov/24682348/'
      },
      {
        id: 24,
        authors: 'William J Groh, Deepak Bhakta, Gordon F Tomaselli et al.',
        title: '2022 HRS expert consensus statement on evaluation and management of arrhythmic risk in neuromuscular disorders',
        journal: 'Heart Rhythm. 2022 Oct;19(10):e61-e120',
        year: '2022',
        link: 'https://pubmed.ncbi.nlm.nih.gov/35654366/'
      },
      {
        id: 25,
        authors: 'Stefan H Hohnloser, Harry J G M Crijns, Martin van Eickels et al.',
        title: 'Effect of dronedarone on cardiovascular events in atrial fibrillation',
        journal: 'N Engl J Med. 2009 Feb 12;360(7):668-78',
        year: '2009',
        link: 'https://pubmed.ncbi.nlm.nih.gov/19213680/'
      },
      {
        id: 26,
        authors: 'E Maund, C McKenna, M Sarowar et al.',
        title: 'Dronedarone for the treatment of atrial fibrillation and atrial flutter',
        journal: 'Health Technol Assess. 2010 Oct;14(Suppl. 2):55-62',
        year: '2010',
        link: 'https://pubmed.ncbi.nlm.nih.gov/20923611/'
      }
    ]
  }
}; 