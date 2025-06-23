import { DiseaseData } from '../types';

export const cardiogenicShockData: DiseaseData = {
  id: 'cardiogenic-shock',
  title: 'Cardiogenic Shock',
  lastUpdated: 'May 31, 2025',
  category: 'Emergency Cardiology',
  specialty: 'cardiology',
  content: {
    background: {
      overview: {
        definition: 'Cardiogenic shock is a life-threatening condition characterized by the inability of the heart to pump sufficient blood to meet the body\'s metabolic demands, resulting in tissue hypoperfusion and end-organ dysfunction.',
        pathophysiology: 'Cardiogenic shock results from severe impairment of myocardial contractility or mechanical complications leading to inadequate cardiac output. The pathophysiology involves reduced stroke volume, compensatory tachycardia, increased sympathetic activity, and activation of the renin-angiotensin-aldosterone system. This leads to vasoconstriction, fluid retention, and further deterioration of cardiac function, creating a vicious cycle of progressive hemodynamic compromise.',
        epidemiology: 'Cardiogenic shock complicates approximately 5-10% of acute myocardial infarctions and carries a high mortality rate. It is the leading cause of death in patients hospitalized with acute MI. The condition can also result from various other cardiac conditions including heart failure, mechanical complications of MI, and cardiac tamponade.',
        diseaseCourse: 'The disease course is typically rapid and progressive without intervention. Early recognition and aggressive management are crucial for survival. The condition may progress from compensated heart failure to frank cardiogenic shock within hours to days, requiring immediate hemodynamic support and treatment of the underlying cause.',
        prognosis: 'The prognosis remains poor despite advances in treatment, with mortality rates ranging from 40-80% depending on the underlying cause, timing of intervention, and availability of advanced therapies. Early revascularization and mechanical circulatory support have improved outcomes in selected patients, but overall mortality remains high.'
      }
    },
    clinicalFindings: {
      symptoms: [
        'Dizziness',
        'Dyspnea',
        'Low urine output',
        'Orthopnea'
      ],
      vitalSigns: [
        'Hypotension',
        'Tachycardia'
      ],
      pastMedicalHistory: [
        'Cardiac tamponade',
        'Cardiomyopathy',
        'Coronary artery disease',
        'Coronary artery dissection',
        'Heart failure (HF)',
        'Infective endocarditis',
        'Myocardial infarction',
        'Myocarditis',
        'Pulmonary embolism (PE)'
      ]
    },
    studies: [
      {
        title: 'Altshock-2',
        year: '2025',
        description: 'In patients with HF-related cardiogenic shock and suitable for heart replacement therapies, early intra-aortic balloon pump implantation was not superior to standard of care with respect to survival or successful bridge to heart replacement therapies at 60 days.',
        authors: 'Nuccia Morici et al.',
        journal: 'J Am Coll Cardiol. 2025 Apr 29'
      },
      {
        title: 'LACTEL',
        year: '2025',
        description: 'In adult patients with acute circulatory failure and arterial blood lactate levels ≥ 3 mmol/L, CO₂-O2-derived algorithm-based treatment was not superior to standard clinical practice with respect to lactate clearance > 10% within 2 hours.',
        authors: 'Pierre-Grégoire Guinot et al.',
        journal: 'Chest. 2025 Apr'
      },
      {
        title: 'DanGer Shock (secondary analysis)',
        year: '2024',
        description: 'In patients with STEMI-induced cardiogenic shock, microaxial flow pump was inferior to standard care with respect to AKI.',
        authors: 'Nanna Louise Junker Udesen et al.',
        journal: 'JAMA Cardiol. 2024 Oct 27:e244197'
      }
    ],
    guidelines: {
      keySources: 'European Society of Intensive Care Medicine (ESICM 2025), Society for Cardiovascular Angiography and Interventions (SCAI/NAEMSP/AHA/ACC/ACEP 2025), Society of Critical Care Medicine (SCCM 2025), European Society of Cardiology (ESC 2023, 2021), Heart Failure Society of America (HFSA 2022), American College of Cardiology/American Heart Association (ACC/AHA 2022)',
      sections: [
        {
          title: 'Diagnostic Investigations',
          id: 'diagnostic-investigations',
          content: [
            {
              statement: 'Consider obtaining critical care ultrasound in adult patients with cardiogenic shock to improve clinical outcomes.',
              level: 'C',
              source: 'SCCM 2025'
            }
          ]
        },
        {
          title: 'Diagnostic Procedures',
          id: 'diagnostic-procedures',
          content: [
            {
              statement: 'Consider placing a pulmonary artery line to define hemodynamic subsets and appropriate management strategies in patients presenting with cardiogenic shock.',
              level: 'C',
              source: 'ACC/AHA/HFSA 2022'
            }
          ]
        },
        {
          title: 'Medical Management',
          id: 'medical-management',
          content: [
            {
              statement: 'Admit patients with acute coronary syndrome and cardiogenic shock to a cardiac ICU to reduce cardiovascular events.',
              level: 'B',
              source: 'ACC/ACEP/AHA/SCAI 2025'
            },
            {
              statement: 'Consider managing patients with cardiogenic shock by a multidisciplinary team experienced in shock.',
              level: 'C',
              source: 'ACC/AHA/HFSA 2022'
            },
            {
              statement: 'Administer IV inotropic support to maintain systemic perfusion and preserve end-organ performance in patients with cardiogenic shock.',
              level: 'B',
              source: 'ACC/AHA/HFSA 2022'
            },
            {
              statement: 'Consider administering a vasopressor, preferably norepinephrine, to increase BP and vital organ perfusion in patients with cardiogenic shock.',
              level: 'C',
              source: 'ESC 2021'
            },
            {
              statement: 'Do not use fluid resuscitation as the primary treatment for circulatory failure due to left-sided cardiogenic shock.',
              level: 'D',
              source: 'ESICM 2025'
            },
            {
              statement: 'Consider administering fibrinolytic therapy in patients with STEMI presenting with cardiogenic shock if primary PCI is not available within 120 minutes of STEMI diagnosis and mechanical complications have been ruled out.',
              level: 'C',
              source: 'ESC 2023'
            }
          ]
        },
        {
          title: 'Mechanical Circulatory Support',
          id: 'mechanical-circulatory-support',
          content: [
            {
              statement: 'Consider inserting a microaxial intravascular flow pump in selected patients with STEMI and severe or refractory cardiogenic shock to reduce mortality.',
              level: 'C',
              source: 'ACC/ACEP/AHA/SCAI 2025'
            },
            {
              statement: 'Consider using short-term mechanical circulatory support devices in patients with mechanical complications of acute coronary syndrome for hemodynamic stabilization as a bridge to surgery.',
              level: 'C',
              source: 'ACC/ACEP/AHA/SCAI 2025'
            },
            {
              statement: 'Consider initiating short-term mechanical circulatory support in patients with acute coronary syndrome and severe/refractory cardiogenic shock.',
              level: 'C',
              source: 'ESC 2023'
            },
            {
              statement: 'Consider triaging patients not rapidly responding to initial shock measures to centers providing temporary mechanical circulatory support to optimize management.',
              level: 'C',
              source: 'ACC/AHA/HFSA 2022'
            },
            {
              statement: 'Consider initiating temporary mechanical circulatory support in patients with cardiogenic shock when end-organ function cannot be maintained by pharmacologic means to support cardiac function.',
              level: 'C',
              source: 'ACC/AHA/HFSA 2022'
            },
            {
              statement: 'Consider initiating short-term mechanical circulatory support in patients with cardiogenic shock as a bridge to recovery, bridge to decision, bridge to bridge or to treat the cause of cardiogenic shock or long-term mechanical circulatory support or transplantation.',
              level: 'C',
              source: 'ESC 2021'
            }
          ]
        },
        {
          title: 'Intra-aortic Balloon Counterpulsation',
          id: 'intra-aortic-balloon-counterpulsation',
          content: [
            {
              statement: 'Do not use intra-aortic balloon pump or venoarterial ECMO routinely in patients with acute myocardial infarction and cardiogenic shock due to a lack of survival benefit.',
              level: 'D',
              source: 'ACC/ACEP/AHA/SCAI 2025'
            },
            {
              statement: 'Do not perform intra-aortic balloon counterpulsation/pumping routinely in patients with acute coronary syndrome with cardiogenic shock and without mechanical complications.',
              level: 'D',
              source: 'ESC 2023'
            },
            {
              statement: 'Consider performing intra-aortic balloon counterpulsation/pumping in patients with hemodynamic instability/cardiogenic shock due to acute coronary syndrome-related mechanical complications.',
              level: 'C',
              source: 'ESC 2023'
            },
            {
              statement: 'Consider performing intra-aortic balloon pump therapy in patients with cardiogenic shock as a bridge to recovery, bridge to decision, bridge to bridge including the treatment of cardiogenic shock (mechanical complication of acute myocardial infarction) or long-term mechanical circulatory support or transplantation.',
              level: 'C',
              source: 'ESC 2021'
            },
            {
              statement: 'Do not perform intra-aortic balloon pump therapy routinely in patients with post-myocardial infarction cardiogenic shock.',
              level: 'D',
              source: 'ESC 2021'
            }
          ]
        },
        {
          title: 'Coronary Artery Revascularization',
          id: 'coronary-artery-revascularization',
          content: [
            {
              statement: 'Perform emergency revascularization of the culprit vessel by PCI or CABG in patients with acute coronary syndrome and cardiogenic shock or hemodynamic instability to improve survival, irrespective of time from symptom onset.',
              level: 'B',
              source: 'ACC/ACEP/AHA/SCAI 2025'
            },
            {
              statement: 'Do not perform routine PCI of a non-infarct-related artery at the time of primary PCI in patients with STEMI complicated by cardiogenic shock due to the higher risk of renal failure and death.',
              level: 'D',
              source: 'ACC/ACEP/AHA/SCAI 2025'
            },
            {
              statement: 'Perform immediate coronary angiography and PCI of the infarct-related artery (if indicated) in patients with cardiogenic shock complicating acute coronary syndrome.',
              level: 'B',
              source: 'ESC 2023'
            },
            {
              statement: 'Perform emergency CABG in patients with acute coronary syndrome-related cardiogenic shock if PCI of the infarct-related artery is unfeasible or unsuccessful.',
              level: 'B',
              source: 'ESC 2023'
            },
            {
              statement: 'Perform emergency surgical/catheter-based repair of mechanical complications of acute coronary syndrome in hemodynamically unstable patients based on heart team discussion.',
              level: 'B',
              source: 'ESC 2023'
            },
            {
              statement: 'Do not perform routine PCI of a non-infarct artery at the time of primary PCI in patients with STEMI complicated by cardiogenic shock because of the higher risk of renal failure and death.',
              level: 'D',
              source: 'ACC/AHA/SCAI 2022'
            }
          ]
        }
      ]
    },
    references: [
      {
        id: 1,
        authors: 'José L Díaz-Gómez, Sameer Sharif, Enyo Ablordeppey et al.',
        title: 'Society of Critical Care Medicine Guidelines on Adult Critical Care Ultrasonography: Focused Update 2024.',
        journal: 'Crit Care Med. 2025 Feb 1;53(2):e447-e458.',
        year: '2025',
        link: 'https://pubmed.ncbi.nlm.nih.gov/39982182/'
      },
      {
        id: 2,
        authors: 'Robert A Byrne, Xavier Rossello, J J Coughlan et al.',
        title: '2023 ESC Guidelines for the management of acute coronary syndromes.',
        journal: 'Eur Heart J. 2023 Oct 12;44(38):3720-3826.',
        year: '2023',
        link: 'https://pubmed.ncbi.nlm.nih.gov/37622654/'
      },
      {
        id: 3,
        authors: 'Sunil V Rao, Michelle L O\'Donoghue, Marc Ruel et al.',
        title: '2025 ACC / AHA / ACEP / NAEMSP / SCAI Guideline for the Management of Patients With Acute Coronary Syndromes: A Report of the American College of Cardiology / American Heart Association Joint Committee on Clinical Practice Guidelines.',
        journal: 'Circulation. 2025 Apr;151(13):e771-e862.',
        year: '2025',
        link: 'https://pubmed.ncbi.nlm.nih.gov/40014670/'
      },
      {
        id: 4,
        authors: 'Armand Mekontso Dessap, Fayez AlShamsi, Alessandro Belletti et al.',
        title: 'European Society of Intensive Care Medicine (ESICM) 2025 clinical practice guideline on fluid therapy in adult critically ill patients: part 2-the volume of resuscitation fluids.',
        journal: 'Intensive Care Med. 2025 Mar;51(3):461-477.',
        year: '2025',
        link: 'https://pubmed.ncbi.nlm.nih.gov/40163133/'
      },
      {
        id: 5,
        authors: 'Theresa A McDonagh, Marco Metra, Marianna Adamo et al.',
        title: '2021 ESC Guidelines for the diagnosis and treatment of acute and chronic heart failure.',
        journal: 'Eur Heart J. 2021 Sep 21;42(36):3599-3726.',
        year: '2021',
        link: 'https://pubmed.ncbi.nlm.nih.gov/34447992/'
      },
      {
        id: 6,
        authors: 'Paul A Heidenreich, Biykem Bozkurt, David Aguilar et al.',
        title: '2022 AHA / ACC / HFSA Guideline for the Management of Heart Failure: A Report of the American College of Cardiology / American Heart Association Joint Committee on Clinical Practice Guidelines.',
        journal: 'Circulation. 2022 May 3;145(18):e895-e1032.',
        year: '2022',
        link: 'https://pubmed.ncbi.nlm.nih.gov/35363499/'
      },
      {
        id: 7,
        authors: 'Jennifer S Lawton, Jacqueline E Tamis-Holland, Sripal Bangalore et al.',
        title: '2021 ACC / AHA / SCAI Guideline for Coronary Artery Revascularization: A Report of the American College of Cardiology / American Heart Association Joint Committee on Clinical Practice Guidelines.',
        journal: 'Circulation. 2022 Jan 18;145(3):e18-e114.',
        year: '2022',
        link: 'https://pubmed.ncbi.nlm.nih.gov/34882435/'
      },
      {
        id: 8,
        authors: 'Holger Thiele, Ibrahim Akin, Marcus Sandri et al.',
        title: 'One-Year Outcomes after PCI Strategies in Cardiogenic Shock.',
        journal: 'N Engl J Med. 2018 Nov 1;379(18):1699-1710.',
        year: '2018',
        link: 'https://pubmed.ncbi.nlm.nih.gov/30145971/'
      },
      {
        id: 9,
        authors: 'Holger Thiele, Uwe Zeymer, Franz-Josef Neumann et al.',
        title: 'Intra-aortic balloon counterpulsation in acute myocardial infarction complicated by cardiogenic shock (IABP-SHOCK II): final 12 month results of a randomised, open-label trial.',
        journal: 'Lancet. 2013 Nov 16;382(9905):1638-45.',
        year: '2013',
        link: 'https://pubmed.ncbi.nlm.nih.gov/24011548/'
      },
      {
        id: 10,
        authors: 'Rebecca Mathew, Pietro Di Santo, Richard G Jung et al.',
        title: 'Milrinone as Compared with Dobutamine in the Treatment of Cardiogenic Shock.',
        journal: 'N Engl J Med. 2021 Aug 5;385(6):516-525.',
        year: '2021',
        link: 'https://pubmed.ncbi.nlm.nih.gov/34347952/'
      },
      {
        id: 11,
        authors: 'Min Chul Kim, Yongwhan Lim, Seung Hun Lee et al.',
        title: 'Early left ventricular unloading after extracorporeal membrane oxygenation: rationale and design of EARLY-UNLOAD trial.',
        journal: 'ESC Heart Fail. 2023 Aug;10(4):2672-2679.',
        year: '2023',
        link: 'https://pubmed.ncbi.nlm.nih.gov/37415397/'
      },
      {
        id: 12,
        authors: 'Min Chul Kim, Yongwhan Lim, Seung Hun Lee et al.',
        title: 'Early Left Ventricular Unloading or Conventional Approach After Venoarterial Extracorporeal Membrane Oxygenation: The EARLY-UNLOAD Randomized Clinical Trial.',
        journal: 'Circulation. 2023 Nov 14;148(20):1570-1581.',
        year: '2023',
        link: 'https://pubmed.ncbi.nlm.nih.gov/37850383/'
      },
      {
        id: 13,
        authors: 'Ovidiu Chioncel, John Parissis, Alexandre Mebazaa et al.',
        title: 'Epidemiology, pathophysiology and contemporary management of cardiogenic shock - a position statement from the Heart Failure Association of the European Society of Cardiology.',
        journal: 'Eur J Heart Fail. 2020 Aug;22(8):1315-1341.',
        year: '2020',
        link: 'https://pubmed.ncbi.nlm.nih.gov/32469155/'
      },
      {
        id: 14,
        authors: 'Behnam N Tehrani, Alexander G Truesdell, Mitchell A Psotka et al.',
        title: 'A Standardized and Comprehensive Approach to the Management of Cardiogenic Shock.',
        journal: 'JACC Heart Fail. 2020 Nov;8(11):879-891.',
        year: '2020',
        link: 'https://pubmed.ncbi.nlm.nih.gov/33121700/'
      },
      {
        id: 15,
        authors: 'Corstiaan A den Uil, Wim K Lagrand, Suzanne D A Valk et al.',
        title: 'Management of cardiogenic shock: focus on tissue perfusion.',
        journal: 'Curr Probl Cardiol. 2009 Aug;34(8):330-49.',
        year: '2009',
        link: 'https://pubmed.ncbi.nlm.nih.gov/19591748/'
      },
      {
        id: 16,
        authors: 'M G Lindholm, S Boesgaard, C Torp-Pedersen et al.',
        title: 'Diabetes mellitus and cardiogenic shock in acute myocardial infarction.',
        journal: 'Eur J Heart Fail. 2005 Aug;7(5):834-9.',
        year: '2005',
        link: 'https://pubmed.ncbi.nlm.nih.gov/16051520/'
      },
      {
        id: 17,
        authors: 'Matthieu Schmidt, Aidan Burrell, Lloyd Roberts et al.',
        title: 'Predicting survival after ECMO for refractory cardiogenic shock: the survival after veno-arterial-ECMO (SAVE)-score.',
        journal: 'Eur Heart J. 2015 Sep 1;36(33):2246-56.',
        year: '2015',
        link: 'https://pubmed.ncbi.nlm.nih.gov/26033984/'
      },
      {
        id: 18,
        authors: 'Jacob E Møller, Thomas Engstrøm, Lisette O Jensen et al.',
        title: 'Microaxial Flow Pump or Standard Care in Infarct-Related Cardiogenic Shock.',
        journal: 'N Engl J Med. 2024 Apr 18;390(15):1382-1393.',
        year: '2024',
        link: 'https://pubmed.ncbi.nlm.nih.gov/38587239/'
      },
      {
        id: 19,
        authors: 'Steffen Desch, Uwe Zeymer, Ibrahim Akin et al.',
        title: 'Routine extracorporeal life support in infarct-related cardiogenic shock: 1-year results of the ECLS-SHOCK trial.',
        journal: 'Eur Heart J. 2024 Oct 14;45(39):4200-4203.',
        year: '2024',
        link: 'https://pubmed.ncbi.nlm.nih.gov/39219338/'
      },
      {
        id: 20,
        authors: 'Holger Thiele, Uwe Zeymer, Ibrahim Akin et al.',
        title: 'Extracorporeal Life Support in Infarct-Related Cardiogenic Shock.',
        journal: 'N Engl J Med. 2023 Oct 5;389(14):1286-1297.',
        year: '2023',
        link: 'https://pubmed.ncbi.nlm.nih.gov/37634145/'
      },
      {
        id: 21,
        authors: 'Nanna Louise Junker Udesen, Rasmus Paulin Beske, Christian Hassager et al.',
        title: 'Microaxial Flow Pump Hemodynamic and Metabolic Effects in Infarct-Related Cardiogenic Shock: A Substudy of the DanGer Shock Randomized Clinical Trial.',
        journal: 'JAMA Cardiol. 2024 Oct 27:e244197.',
        year: '2024',
        link: 'https://pubmed.ncbi.nlm.nih.gov/39462240/'
      },
      {
        id: 22,
        authors: 'Elric Zweck, Christian Hassager, Rasmus P Beske et al.',
        title: 'Microaxial Flow Pump Use and Renal Outcomes in Infarct-Related Cardiogenic Shock - a Secondary Analysis of the DanGer Shock Trial.',
        journal: 'Circulation. 2024 Dec 17;150(25):1990-2003.',
        year: '2024',
        link: 'https://pubmed.ncbi.nlm.nih.gov/39462276/'
      },
      {
        id: 23,
        authors: 'Nuccia Morici, Alice Sacco, Simone Frea et al.',
        title: 'Early Intra-Aortic Balloon Support for Heart Failure-Related Cardiogenic Shock: A Randomized Clinical Trial.',
        journal: 'J Am Coll Cardiol. 2025 Apr 29;85(16):1587-1597.',
        year: '2025',
        link: 'https://pubmed.ncbi.nlm.nih.gov/40162941/'
      }
    ]
  }
};