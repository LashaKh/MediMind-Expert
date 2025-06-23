import { DiseaseData } from '../types';

export const heparinInducedThrombocytopeniaData: DiseaseData = {
  id: 'heparin-induced-thrombocytopenia',
  title: 'Heparin-Induced Thrombocytopenia',
  lastUpdated: 'May 22, 2025',
  category: 'Hematology/Coagulation',
  specialty: 'cardiology',
  
  content: {
    background: {
      overview: {
        definition: 'Heparin-induced thrombocytopenia (HIT) is an immune-mediated adverse drug reaction to heparin that causes thrombocytopenia and paradoxically increases the risk of thrombosis. It is mediated by antibodies against platelet factor 4 (PF4)-heparin complexes.',
        
        pathophysiology: 'HIT is caused by antibodies (primarily IgG) that recognize complexes of platelet factor 4 (PF4) and heparin. These antibodies bind to PF4-heparin complexes on platelet surfaces, leading to platelet activation, aggregation, and consumption. The activated platelets release procoagulant microparticles and promote thrombin generation, creating a paradoxical prothrombotic state despite thrombocytopenia.',
        
        epidemiology: 'HIT occurs in 0.2-5% of patients receiving heparin, with higher rates in surgical patients receiving unfractionated heparin (UFH) compared to medical patients receiving low molecular weight heparin (LMWH). The risk is highest with UFH in postoperative patients (1-5%) and lowest with LMWH in medical patients (<0.1%).',
        
        diseaseCourse: 'HIT typically develops 5-10 days after heparin initiation in heparin-naive patients, or within 24 hours in patients with recent heparin exposure (within 100 days). The condition can progress rapidly from isolated thrombocytopenia to life-threatening thrombotic complications if not recognized and treated promptly.',
        
        prognosis: 'With appropriate management (immediate heparin discontinuation and alternative anticoagulation), the prognosis is generally good with platelet count recovery within days to weeks. However, untreated HIT carries a high risk of thrombotic complications (30-50%) and mortality (up to 20%). Long-term prognosis is excellent once the acute phase resolves.'
      }
    },

    clinicalFindings: {
      symptoms: [
        'Bleeding (due to thrombocytopenia)',
        'Signs of thrombosis (depending on location)',
        'Skin necrosis at heparin injection sites',
        'Acute systemic reactions (chills, fever, hypotension, dyspnea) after heparin bolus'
      ],
      
      patientDemographics: [
        'Patients receiving heparin therapy (UFH or LMWH)',
        'Higher risk in surgical patients',
        'Previous heparin exposure within 100 days',
        'Patients with cardiovascular disease requiring anticoagulation'
      ],
      
      pastMedicalHistory: [
        'Acute coronary syndrome',
        'Deep vein thrombosis (DVT)',
        'Pulmonary embolism (PE)',
        'Stroke',
        'Adrenal vein thrombosis',
        'Cerebral venous thrombosis',
        'Mesenteric vein thrombosis',
        'Previous anaphylaxis',
        'Total global amnesia'
      ]
    },

    guidelines: {
      keySources: 'The following summarized guidelines for the evaluation and management of heparin-induced thrombocytopenia are prepared by our editorial team based on guidelines from the American Society of Hematology (ASH 2018), the American College of Chest Physicians (ACCP 2012), the British Committee for Standards in Haematology (BCSH 2012), the Groupe d\'Intérêt sur l\'Hémostase Périopératoire (GIHP 2020), and other major medical organizations.',
      
      sections: [
        {
          title: 'Screening and Diagnosis',
          id: 'screening-diagnosis',
          content: [
            {
              statement: 'Obtain baseline platelet count before initiating heparin therapy and monitor according to risk stratification. Use 4T score to determine clinical probability of HIT in suspected cases.',
              level: 'B-E',
              source: 'GIHP 2020, ASH 2018, BCSH 2012',
              subsections: [
                {
                  title: 'Baseline Platelet Count Monitoring',
                  id: 'baseline-monitoring',
                  content: [
                    {
                      statement: 'Obtain baseline platelet count before initiating heparin (or as soon as possible after first injection, before day 4), whether UFH or LMWH.',
                      level: 'E',
                      source: 'GIHP 2020'
                    },
                    {
                      statement: 'Monitor platelets 2-3 times weekly from day 4-14 in high-risk patients (>1% HIT risk), 1-2 times weekly in intermediate-risk patients (0.1-1% risk).',
                      level: 'E',
                      source: 'GIHP 2020'
                    }
                  ]
                },
                {
                  title: 'Laboratory Testing Indications',
                  id: 'testing-indications',
                  content: [
                    {
                      statement: 'Do not obtain specific laboratory evaluation for HIT exclusion in patients with low pretest probability (4T ≤ 3).',
                      level: 'D',
                      source: 'GIHP 2020, ASH 2018, BCSH 2012'
                    },
                    {
                      statement: 'Obtain anti-PF4 antibody testing in patients with intermediate (4T = 4-5) or high (4T ≥ 6) pretest probability.',
                      level: 'B-E',
                      source: 'GIHP 2020, ASH 2018'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: 'Classification and Risk Stratification',
          id: 'classification-risk',
          content: [
            {
              statement: 'Classify HIT risk based on heparin type, clinical setting, and patient factors. Use 4T score for clinical probability assessment.',
              level: 'E',
              source: 'GIHP 2020, ASH 2018',
              subsections: [
                {
                  title: 'Pretest Probability Assessment',
                  id: 'pretest-probability',
                  content: [
                    {
                      statement: 'Low Risk (<0.1%): LMWH treatment in medicine, obstetrics, minor trauma; Fondaparinux treatment.',
                      level: 'E',
                      source: 'GIHP 2020'
                    },
                    {
                      statement: 'High Risk (>1%): Prophylactic UFH in surgery, circulatory assistance, renal replacement therapy; All curative UFH treatments.',
                      level: 'E',
                      source: 'GIHP 2020'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: 'Diagnostic Investigations',
          id: 'diagnostic-investigations',
          content: [
            {
              statement: 'Use immunoassays for anti-PF4 antibody detection and functional assays for confirmation in appropriate clinical settings.',
              level: 'B-E',
              source: 'GIHP 2020, ASH 2018, BCSH 2012',
              subsections: [
                {
                  title: 'Immunoassays',
                  id: 'immunoassays',
                  content: [
                    {
                      statement: 'Obtain anti-PF4 antibodies as soon as possible in suspected HIT with intermediate or high clinical probability.',
                      level: 'E',
                      source: 'GIHP 2020'
                    },
                    {
                      statement: 'Use antigen assay of high sensitivity in non-expert laboratories. Measure only IgG class antibodies.',
                      level: 'B',
                      source: 'BCSH 2012'
                    }
                  ]
                },
                {
                  title: 'Platelet Function Tests',
                  id: 'functional-tests',
                  content: [
                    {
                      statement: 'Obtain platelet function test to confirm HIT diagnosis in patients with intermediate or high clinical probability and significant anti-PF4 antibody titer.',
                      level: 'E',
                      source: 'GIHP 2020'
                    },
                    {
                      statement: 'Consider functional assay in patients with positive immunoassay results.',
                      level: 'C',
                      source: 'ASH 2018'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: 'Medical Management',
          id: 'medical-management',
          content: [
            {
              statement: 'Immediately discontinue all heparin and initiate alternative anticoagulation in patients with confirmed or strongly suspected HIT.',
              level: 'A-B',
              source: 'ASH 2018, GIHP 2020',
              subsections: [
                {
                  title: 'Heparin Discontinuation',
                  id: 'heparin-discontinuation',
                  content: [
                    {
                      statement: 'Stop all heparin (including heparin flushes and heparin-coated catheters) immediately when HIT is suspected with intermediate or high probability.',
                      level: 'B',
                      source: 'ASH 2018'
                    },
                    {
                      statement: 'Avoid platelet transfusions unless life-threatening bleeding occurs.',
                      level: 'C',
                      source: 'ASH 2018'
                    }
                  ]
                },
                {
                  title: 'Alternative Anticoagulation',
                  id: 'alternative-anticoagulation',
                  content: [
                    {
                      statement: 'Start alternative anticoagulation (argatroban, bivalirudin, or fondaparinux) in patients with strongly suspected or confirmed HIT.',
                      level: 'B',
                      source: 'ASH 2018'
                    },
                    {
                      statement: 'Use direct oral anticoagulants (DOACs) as alternative to parenteral anticoagulants in patients with isolated HIT.',
                      level: 'C',
                      source: 'ASH 2018'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: 'Specific Circumstances',
          id: 'specific-circumstances',
          content: [
            {
              statement: 'Manage HIT in special populations (pediatric, pregnant, organ impairment) with appropriate dose adjustments and monitoring.',
              level: 'C-E',
              source: 'ASH 2018, GIHP 2020',
              subsections: [
                {
                  title: 'Pediatric Patients',
                  id: 'pediatric-patients',
                  content: [
                    {
                      statement: 'Use argatroban or bivalirudin in pediatric patients with HIT, with appropriate dose adjustments for age and weight.',
                      level: 'C',
                      source: 'ASH 2018'
                    }
                  ]
                },
                {
                  title: 'Pregnant Patients',
                  id: 'pregnant-patients',
                  content: [
                    {
                      statement: 'Use argatroban or bivalirudin in pregnant patients with HIT, as these agents do not cross the placenta.',
                      level: 'C',
                      source: 'ASH 2018'
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
        authors: 'Cuker A, Arepally GM, Chong BH, et al.',
        title: 'American Society of Hematology 2018 guidelines for management of venous thromboembolism: heparin-induced thrombocytopenia',
        journal: 'Blood Adv',
        year: '2018',
        link: 'https://pubmed.ncbi.nlm.nih.gov/30482765/'
      },
      {
        id: 2,
        authors: 'Linkins LA, Dans AL, Moores LK, et al.',
        title: 'Treatment and prevention of heparin-induced thrombocytopenia: Antithrombotic Therapy and Prevention of Thrombosis, 9th ed: American College of Chest Physicians Evidence-Based Clinical Practice Guidelines',
        journal: 'Chest',
        year: '2012',
        link: 'https://pubmed.ncbi.nlm.nih.gov/22315268/'
      },
      {
        id: 3,
        authors: 'Watson H, Davidson S, Keeling D, et al.',
        title: 'Guidelines on the diagnosis and management of heparin-induced thrombocytopenia: second edition',
        journal: 'Br J Haematol',
        year: '2012',
        link: 'https://pubmed.ncbi.nlm.nih.gov/22624596/'
      },
      {
        id: 4,
        authors: 'Alban S',
        title: 'Adverse effects of heparin',
        journal: 'Handb Exp Pharmacol',
        year: '2012',
        link: 'https://pubmed.ncbi.nlm.nih.gov/22918734/'
      },
      {
        id: 5,
        authors: 'Arepally GM, Ortel TL',
        title: 'Heparin-induced thrombocytopenia',
        journal: 'Annu Rev Med',
        year: '2010',
        link: 'https://pubmed.ncbi.nlm.nih.gov/19852403/'
      },
      {
        id: 6,
        authors: 'Greinacher A',
        title: 'Heparin-induced thrombocytopenia',
        journal: 'J Thromb Haemost',
        year: '2009',
        link: 'https://pubmed.ncbi.nlm.nih.gov/19496920/'
      },
      {
        id: 7,
        authors: 'Warkentin TE',
        title: 'Heparin-induced thrombocytopenia: pathogenesis and management',
        journal: 'Br J Haematol',
        year: '2003',
        link: 'https://pubmed.ncbi.nlm.nih.gov/12780789/'
      },
      {
        id: 8,
        authors: 'Kelton JG, Warkentin TE',
        title: 'Heparin-induced thrombocytopenia: a historical perspective',
        journal: 'Blood',
        year: '2008',
        link: 'https://pubmed.ncbi.nlm.nih.gov/18574040/'
      },
      {
        id: 9,
        authors: 'Franchini M',
        title: 'Heparin-induced thrombocytopenia: an update',
        journal: 'Thromb J',
        year: '2005',
        link: 'https://pubmed.ncbi.nlm.nih.gov/15985157/'
      },
      {
        id: 10,
        authors: 'Girolami B, Prandoni P, Stefani PM, et al.',
        title: 'The incidence of heparin-induced thrombocytopenia in hospitalized medical patients treated with subcutaneous unfractionated heparin: a prospective cohort study',
        journal: 'Blood',
        year: '2003',
        link: 'https://pubmed.ncbi.nlm.nih.gov/12393456/'
      },
      {
        id: 11,
        authors: 'Martel N, Lee J, Wells PS',
        title: 'Risk for heparin-induced thrombocytopenia with unfractionated and low-molecular-weight heparin thromboprophylaxis: a meta-analysis',
        journal: 'Blood',
        year: '2005',
        link: 'https://pubmed.ncbi.nlm.nih.gov/15741221/'
      },
      {
        id: 12,
        authors: 'Smythe MA, Koerber JM, Mattson JC',
        title: 'The incidence of recognized heparin-induced thrombocytopenia in a large, tertiary care teaching hospital',
        journal: 'Chest',
        year: '2007',
        link: 'https://pubmed.ncbi.nlm.nih.gov/17925455/'
      },
      {
        id: 13,
        authors: 'Warkentin TE, Greinacher A',
        title: 'Heparin-induced thrombocytopenia: recognition, treatment, and prevention: the Seventh ACCP Conference on Antithrombotic and Thrombolytic Therapy',
        journal: 'Chest',
        year: '2004',
        link: 'https://pubmed.ncbi.nlm.nih.gov/15383489/'
      },
      {
        id: 14,
        authors: 'Warkentin TE, Levine MN, Hirsh J, et al.',
        title: 'Heparin-induced thrombocytopenia in patients treated with low-molecular-weight heparin or unfractionated heparin',
        journal: 'N Engl J Med',
        year: '1995',
        link: 'https://pubmed.ncbi.nlm.nih.gov/7776990/'
      },
      {
        id: 15,
        authors: 'Warkentin TE, Sheppard JA, Horsewood P, et al.',
        title: 'Impact of the patient population on the risk for heparin-induced thrombocytopenia',
        journal: 'Blood',
        year: '2000',
        link: 'https://pubmed.ncbi.nlm.nih.gov/10694463/'
      },
      {
        id: 16,
        authors: 'Zwicker JI, Uhl L, Huang WY, et al.',
        title: 'Thrombosis and ELISA optical density values in hospitalized patients with heparin-induced thrombocytopenia',
        journal: 'J Thromb Haemost',
        year: '2004',
        link: 'https://pubmed.ncbi.nlm.nih.gov/15009464/'
      },
      {
        id: 17,
        authors: 'Greinacher A, Farner B, Kroll H, et al.',
        title: 'Clinical features of heparin-induced thrombocytopenia including risk factors for thrombosis. A retrospective analysis of 408 patients',
        journal: 'Thromb Haemost',
        year: '2005',
        link: 'https://pubmed.ncbi.nlm.nih.gov/15968398/'
      },
      {
        id: 18,
        authors: 'Wallis DE, Workman DL, Lewis BE, et al.',
        title: 'Failure of early heparin cessation as treatment for heparin-induced thrombocytopenia',
        journal: 'Am J Med',
        year: '1999',
        link: 'https://pubmed.ncbi.nlm.nih.gov/10609781/'
      },
      {
        id: 19,
        authors: 'Warkentin TE, Kelton JG',
        title: 'Temporal aspects of heparin-induced thrombocytopenia',
        journal: 'N Engl J Med',
        year: '2001',
        link: 'https://pubmed.ncbi.nlm.nih.gov/11547722/'
      },
      {
        id: 20,
        authors: 'Levine RL, McCollum D, Hursting MJ',
        title: 'How frequently is venous thromboembolism in heparin-treated patients associated with heparin-induced thrombocytopenia?',
        journal: 'Chest',
        year: '2006',
        link: 'https://pubmed.ncbi.nlm.nih.gov/16648669/'
      },
      {
        id: 21,
        authors: 'Salter BS, Weiner MM, Trinh MA, et al.',
        title: 'Heparin-induced thrombocytopenia: a comprehensive clinical review',
        journal: 'J Am Coll Cardiol',
        year: '2016',
        link: 'https://pubmed.ncbi.nlm.nih.gov/27515991/'
      },
      {
        id: 22,
        authors: 'Rauova L, Poncz M, McKenzie SE, et al.',
        title: 'Ultralarge complexes of PF4 and heparin are central to the pathogenesis of heparin-induced thrombocytopenia',
        journal: 'Blood',
        year: '2005',
        link: 'https://pubmed.ncbi.nlm.nih.gov/15890683/'
      }
    ]
  }
}; 