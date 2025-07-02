import { DiseaseData } from '../types';

export const calciumChannelBlockerToxicityData: DiseaseData = {
  id: 'calcium-channel-blocker-toxicity',
  title: 'Calcium Channel Blocker Toxicity',
  lastUpdated: 'May 22, 2025',
  category: 'Emergency/Toxicology',
  specialty: 'cardiology',
  content: {
    background: {
      overview: {
        definition: 'Calcium channel blocker toxicity is a life-threatening overdose of calcium channel blocking medications requiring immediate medical intervention. CCB toxicity presents with bradycardia, hypotension, altered mental status, and potential cardiovascular collapse.',
        pathophysiology: 'Calcium channel blockers inhibit L-type calcium channels in cardiac and vascular smooth muscle, leading to negative inotropic and chronotropic effects, peripheral vasodilation, and impaired cardiac conduction. In overdose, these effects become pronounced, resulting in severe bradycardia, hypotension, and cardiogenic shock.',
        epidemiology: 'CCB toxicity is a significant cause of cardiovascular drug-related mortality. Common agents include amlodipine, diltiazem, verapamil, and nifedipine. Intentional and accidental overdoses can occur, with higher mortality rates in sustained-release formulations.',
        diseaseCourse: 'The clinical course depends on the amount ingested, type of CCB, and time to treatment. Early recognition and aggressive management are crucial. Patients may develop progressive cardiovascular collapse requiring advanced interventions including ECMO.',
        prognosis: 'Prognosis is variable depending on the severity of toxicity, time to treatment, and response to therapy. Early recognition and appropriate management improve outcomes, while delayed treatment is associated with higher mortality rates.'
      }
    },
    clinicalFindings: {
      pastMedicalHistory: [
        'CCBs (Calcium Channel Blockers)'
      ],
      symptoms: [
        'Acute cardiogenic pulmonary edema',
        'Cardiac arrest',
        'Cardiogenic shock',
        'Jugular venous distention'
      ],
      vitalSigns: [
        'Bradycardia',
        'Hypotension'
      ]
    },
    guidelines: {
      keySources: 'The following summarized guidelines for the management of calcium channel blocker toxicity are prepared by our editorial team based on guidelines from the American Heart Association (AHA 2023), the American Heart Association (AHA/HRS/ACC 2019), and the Canadian Association of Poison Control Centres (CAPCC/ESICM/CAEP/AAPCC/SCCM/CPS/EAPCCT/ESEM/CCCS/ACMT 2017).',
      sections: [
        {
          title: 'Medical Management',
          id: 'medical-management',
          content: [],
          subsections: [
            {
              title: 'Gastric Decontamination',
              id: 'gastric-decontamination',
              content: [
                {
                  statement: 'Consider administering oral activated charcoal in patients who ingested a potentially toxic amount of CCB within 1 hour of presentation.',
                  level: 'C',
                  source: 'AAPCC/ACMT/CAEP/SCCM 2017'
                }
              ]
            },
            {
              title: 'Intravenous Calcium',
              id: 'intravenous-calcium',
              content: [
                {
                  statement: 'Consider administering IV calcium in patients with CCB toxicity.',
                  level: 'C',
                  source: 'AHA 2023'
                },
                {
                  statement: 'Consider IV calcium to increase HR and improve symptoms in patients with bradycardia associated with symptoms or hemodynamic compromise because of CCB overdose.',
                  level: 'C',
                  source: 'ACC/AHA/HRS 2019'
                },
                {
                  statement: 'Administer IV calcium as first-line therapy in patients with symptomatic CCB poisoning.',
                  level: 'B',
                  source: 'AAPCC/ACMT/CAEP/SCCM 2017'
                },
                {
                  statement: 'Administer IV calcium, even if previously administered, in addition to standard advanced cardiac life-support in patients with CCB poisoning in cardiac arrest.',
                  level: 'B',
                  source: 'AAPCC/ACMT/CAEP/SCCM 2017'
                }
              ]
            },
            {
              title: 'High-Dose Insulin',
              id: 'high-dose-insulin',
              content: [
                {
                  statement: 'Administer high-dose insulin for the management of hypotension in patients with CCB toxicity.',
                  level: 'B',
                  source: 'AHA 2023'
                },
                {
                  statement: 'Consider administering high-dose insulin to increase HR and improve symptoms in patients with bradycardia associated with symptoms or hemodynamic compromise because of CCB overdose.',
                  level: 'C',
                  source: 'ACC/AHA/HRS 2019'
                },
                {
                  statement: 'Administer high-dose insulin in addition to other first-line treatments in the presence of myocardial dysfunction in patients with CCB poisoning.',
                  level: 'B',
                  source: 'AAPCC/ACMT/CAEP/SCCM 2017'
                },
                {
                  statement: 'Consider administering high-dose insulin as monotherapy in the presence of myocardial dysfunction in patients with CCB poisoning.',
                  level: 'C',
                  source: 'AAPCC/ACMT/CAEP/SCCM 2017'
                },
                {
                  statement: 'Consider administering high-dose insulin in the absence of documented myocardial dysfunction in patients with CCB poisoning, if used in combination with IV fluids, calcium, and vasopressors.',
                  level: 'C',
                  source: 'AAPCC/ACMT/CAEP/SCCM 2017'
                },
                {
                  statement: 'Consider administering incremental doses of high-dose insulin (up to 10 U/kg/hour) in the presence of myocardial dysfunction in patients with CCB poisoning refractory to first-line treatments.',
                  level: 'C',
                  source: 'AAPCC/ACMT/CAEP/SCCM 2017'
                },
                {
                  statement: 'Administer incremental doses of high-dose insulin (up to 10 U/kg/hour) as rescue therapy, if not administered previously, in the presence of myocardial dysfunction in patients with CCB poisoning having refractory shock or periarrest despite increasing doses of inotropes and vasopressors.',
                  level: 'B',
                  source: 'AAPCC/ACMT/CAEP/SCCM 2017'
                },
                {
                  statement: 'Consider administering incremental doses of high-dose insulin (up to 10 U/kg/hour) as rescue therapy, if not administered previously, even in the absence of myocardial dysfunction in patients with CCB poisoning having refractory shock or periarrest.',
                  level: 'C',
                  source: 'AAPCC/ACMT/CAEP/SCCM 2017'
                }
              ]
            },
            {
              title: 'Glucagon',
              id: 'glucagon',
              content: [
                {
                  statement: 'Insufficient evidence to support the use of glucagon bolus and infusion in patients with CCB toxicity.',
                  level: 'I',
                  source: 'AHA 2023'
                },
                {
                  statement: 'Consider administering glucagon to increase HR and improve symptoms in patients with bradycardia associated with symptoms or hemodynamic compromise because of CCB overdose.',
                  level: 'C',
                  source: 'ACC/AHA/HRS 2019'
                }
              ]
            },
            {
              title: 'Vasopressors',
              id: 'vasopressors',
              content: [
                {
                  statement: 'Administer vasopressors for the management of hypotension in patients with CCB toxicity.',
                  level: 'B',
                  source: 'AHA 2023'
                },
                {
                  statement: 'Administer norepinephrine and/or epinephrine as first-line therapy in patients with CCB poisoning with shock, even if the myocardial function has not yet been assessed. Prefer norepinephrine in patients with vasodilatory shock.',
                  level: 'B',
                  source: 'AAPCC/ACMT/CAEP/SCCM 2017'
                },
                {
                  statement: 'Consider administering dobutamine or epinephrine as first-line therapy in patients with CCB poisoning with cardiogenic shock.',
                  level: 'C',
                  source: 'AAPCC/ACMT/CAEP/SCCM 2017'
                },
                {
                  statement: 'Consider administering dopamine as first-line therapy in patients with CCB poisoning with shock.',
                  level: 'C',
                  source: 'AAPCC/ACMT/CAEP/SCCM 2017'
                },
                {
                  statement: 'Consider administering vasopressin as a single vasoactive agent in patients with CCB poisoning with documented cardiogenic shock.',
                  level: 'C',
                  source: 'AAPCC/ACMT/CAEP/SCCM 2017'
                }
              ]
            },
            {
              title: 'Atropine',
              id: 'atropine',
              content: [
                {
                  statement: 'Consider administering atropine for the management of hemodynamically significant bradycardia in patients with CCB toxicity.',
                  level: 'C',
                  source: 'AHA 2023'
                },
                {
                  statement: 'Consider administering atropine as first-line therapy in patients with CCB poisoning with symptomatic bradycardia or conduction disturbances.',
                  level: 'C',
                  source: 'AAPCC/ACMT/CAEP/SCCM 2017'
                }
              ]
            },
            {
              title: 'Lipid Emulsion Therapy',
              id: 'lipid-emulsion-therapy',
              content: [
                {
                  statement: 'Do not use routine IV lipid emulsion therapy in patients with CCB toxicity.',
                  level: 'D',
                  source: 'AHA 2023'
                },
                {
                  statement: 'Consider administering IV lipid-emulsion therapy in patients with CCB poisoning refractory to first-line treatments.',
                  level: 'C',
                  source: 'AAPCC/ACMT/CAEP/SCCM 2017'
                },
                {
                  statement: 'Administer IV lipid-emulsion therapy as rescue therapy, if not administered previously, in patients with CCB poisoning with refractory shock or periarrest despite increasing doses of inotropes and vasopressors.',
                  level: 'B',
                  source: 'AAPCC/ACMT/CAEP/SCCM 2017'
                },
                {
                  statement: 'Administer IV lipid-emulsion therapy, if not administered previously, in addition to standard advanced cardiac life-support in patients with CCB poisoning in cardiac arrest.',
                  level: 'B',
                  source: 'AAPCC/ACMT/CAEP/SCCM 2017'
                },
                {
                  statement: 'Consider administering IV lipid-emulsion therapy, even if previously administered, in patients with CCB poisoning in cardiac arrest.',
                  level: 'C',
                  source: 'AAPCC/ACMT/CAEP/SCCM 2017'
                }
              ]
            },
            {
              title: 'Methylene Blue',
              id: 'methylene-blue',
              content: [
                {
                  statement: 'Insufficient evidence to support the use of methylene blue for the management of refractory vasodilatory shock in patients with CCB toxicity.',
                  level: 'I',
                  source: 'AHA 2023'
                }
              ]
            }
          ]
        },
        {
          title: 'Therapeutic Procedures',
          id: 'therapeutic-procedures',
          content: [],
          subsections: [
            {
              title: 'Temporary Cardiac Pacing',
              id: 'temporary-cardiac-pacing',
              content: [
                {
                  statement: 'Consider attempting electrical pacing for the management of refractory bradycardia in patients with CCB toxicity.',
                  level: 'C',
                  source: 'AHA 2023'
                },
                {
                  statement: 'Consider placing a pacemaker in the presence of unstable bradycardia or high-grade AV block without significant alteration in cardiac inotropism in patients with CCB poisoning refractory to first-line treatments.',
                  level: 'C',
                  source: 'AAPCC/ACMT/CAEP/SCCM 2017'
                },
                {
                  statement: 'Consider placing a pacemaker as rescue therapy, if not tried previously, in the presence of unstable bradycardia or high-grade AV block without significant alteration in cardiac inotropism in patients with CCB poisoning having refractory shock or peri-arrest.',
                  level: 'C',
                  source: 'AAPCC/ACMT/CAEP/SCCM 2017'
                }
              ]
            },
            {
              title: 'ECMO',
              id: 'ecmo',
              content: [
                {
                  statement: 'Consider initiating extracorporeal life support, such as venoarterial ECMO, in patients with cardiogenic shock refractory to pharmacological interventions.',
                  level: 'C',
                  source: 'AHA 2023'
                },
                {
                  statement: 'Consider performing veno-arterial ECMO, in centers where the treatment is available, in patients with CCB poisoning with cardiac arrest or cardiogenic shock.',
                  level: 'C',
                  source: 'AAPCC/ACMT/CAEP/SCCM 2017'
                }
              ]
            }
          ]
        }
      ]
    },
    studies: [
      {
        title: 'NICO',
        year: '2023',
        description: 'In comatose patients with suspected acute poisoning and a GCS score < 9, restricted intubation was superior to routine practice with respect to median length of mechanical ventilation.',
        authors: 'Yonathan Freund et al.',
        journal: 'JAMA. 2023 Dec 19'
      }
    ],
    references: [
      {
        id: 1,
        authors: 'Fred M Kusumoto, Mark H Schoenfeld, Coletta Barrett et al.',
        title: '2018 ACC / AHA / HRS Guideline on the Evaluation and Management of Patients With Bradycardia and Cardiac Conduction Delay: A Report of the American College of Cardiology / American Heart Association Task Force on Clinical Practice Guidelines and the Heart Rhythm Society.',
        journal: 'Circulation. 2019 Aug 20;140(8):e382-e482',
        year: '2019',
        link: 'https://pubmed.ncbi.nlm.nih.gov/30586771/'
      },
      {
        id: 2,
        authors: 'Eric J Lavonas, Peter D Akpunonu, Ann M Arens et al.',
        title: '2023 American Heart Association Focused Update on the Management of Patients With Cardiac Arrest or Life-Threatening Toxicity Due to Poisoning: An Update to the American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care.',
        journal: 'Circulation. 2023 Oct 17;148(16):e149-e184',
        year: '2023',
        link: 'https://pubmed.ncbi.nlm.nih.gov/37721023/'
      },
      {
        id: 3,
        authors: 'Maude St-Onge, Kurt Anseeuw, Frank Lee Cantrell et al.',
        title: 'Experts Consensus Recommendations for the Management of Calcium Channel Blocker Poisoning in Adults.',
        journal: 'Crit Care Med. 2017 Mar;45(3):e306-e315',
        year: '2017',
        link: 'https://pubmed.ncbi.nlm.nih.gov/27749343/'
      },
      {
        id: 4,
        authors: 'Ashish R Panchal, Jason A Bartos, José G Cabañas et al.',
        title: 'Part 3: Adult Basic and Advanced Life Support: 2020 American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care.',
        journal: 'Circulation. 2020 Oct 20;142(16_suppl_2):S366-S468',
        year: '2020',
        link: 'https://pubmed.ncbi.nlm.nih.gov/33081529/'
      },
      {
        id: 5,
        authors: 'Omar A Alshaya, Arwa Alhamed, Sara Althewaibi et al.',
        title: 'Calcium Channel Blocker Toxicity: A Practical Approach.',
        journal: 'J Multidiscip Healthc. 2022 Aug 30:15:1851-1862',
        year: '2022',
        link: 'https://pubmed.ncbi.nlm.nih.gov/36065348/'
      },
      {
        id: 6,
        authors: 'Maude St-Onge.',
        title: 'Cardiovascular Drug Toxicity.',
        journal: 'Crit Care Clin. 2021 Jul;37(3):563-576',
        year: '2021',
        link: 'https://pubmed.ncbi.nlm.nih.gov/34053706/'
      },
      {
        id: 7,
        authors: 'Elizabeth A Persad, Lakshmi Raman, Marita T Thompson et al.',
        title: 'The use of extracorporeal life support in adolescent amlodipine overdose.',
        journal: 'Indian J Crit Care Med. 2012 Oct;16(4):204-6',
        year: '2012',
        link: 'https://pubmed.ncbi.nlm.nih.gov/23559727/'
      },
      {
        id: 8,
        authors: 'Irbert L Vega, Matthew K Griswold, Dayne Laskey.',
        title: 'Acute Medication Poisoning.',
        journal: 'Am Fam Physician. 2024 Feb;109(2):143-153',
        year: '2024',
        link: 'https://pubmed.ncbi.nlm.nih.gov/38393798/'
      }
    ]
  }
}; 