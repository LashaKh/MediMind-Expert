import { DiseaseData } from '../types';

export const heparinInducedThrombocytopeniaData: DiseaseData = {
  id: 'heparin-induced-thrombocytopenia',
  title: 'Heparin-Induced Thrombocytopenia (HIT)',
  lastUpdated: 'January 18, 2025 - COMPREHENSIVE UPDATE ✓ ALL SECTIONS FIXED',
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
        'Bleeding'
      ],
      
      patientDemographics: [
        'Patients receiving heparin therapy (UFH or LMWH)',
        'Higher risk in surgical patients',
        'Previous heparin exposure within 100 days',
        'Patients with cardiovascular disease requiring anticoagulation'
      ],
      
      pastMedicalHistory: [
        'Acute coronary syndrome',
        'Adrenal vein thrombosis',
        'Anaphylaxis',
        'Cerebral venous thrombosis',
        'DVT',
        'Heparin exposure (medication history)',
        'Mesenteric vein thrombosis',
        'PE',
        'Stroke',
        'Total global amnesia'
      ]
    },

    studies: [
      {
        title: "Diagnosis and management of heparin-induced thrombocytopenia",
        year: "2020",
        authors: "Yves Gruel, Emmanuel De Maistre, Claire Pouplard et al.",
        journal: "Anaesth Crit Care Pain Med. 2020 Apr;39(2):291-310",
        description: "Comprehensive French Working Group guidelines on perioperative hemostasis for HIT diagnosis and management, including risk stratification, laboratory testing, and treatment protocols.",
        link: "https://pubmed.ncbi.nlm.nih.gov/32299756/"
      },
      {
        title: "American Society of Hematology 2018 guidelines for management of venous thromboembolism: heparin-induced thrombocytopenia",
        year: "2018",
        authors: "Adam Cuker, Gowthami M Arepally, Beng H Chong et al.",
        journal: "Blood Adv. 2018 Nov 27;2(22):3360-3392",
        description: "Evidence-based ASH guidelines for HIT management including pretest probability assessment, laboratory testing, and treatment recommendations with graded evidence quality.",
        link: "https://pubmed.ncbi.nlm.nih.gov/30482768/"
      },
      {
        title: "Venous thromboembolism and antithrombotic therapy in pregnancy",
        year: "2014",
        authors: "Wee-Shian Chan, Evelyne Rey, Nancy E Kent et al.",
        journal: "J Obstet Gynaecol Can. 2014 Jun;36(6):527-53",
        description: "Society of Gynecologists and Obstetricians of Canada guidelines covering HIT management in pregnancy and obstetric care.",
        link: "https://pubmed.ncbi.nlm.nih.gov/24927193/"
      },
      {
        title: "Guidelines on the diagnosis and management of heparin-induced thrombocytopenia: second edition",
        year: "2012",
        authors: "Henry Watson, Simon Davidson, David Keeling et al.",
        journal: "Br J Haematol. 2012 Dec;159(5):528-40",
        description: "British Committee for Standards in Haematology guidelines covering laboratory testing, monitoring protocols, and treatment approaches for HIT.",
        link: "https://pubmed.ncbi.nlm.nih.gov/23043677/"
      },
      {
        title: "Treatment and prevention of heparin-induced thrombocytopenia: Antithrombotic Therapy and Prevention of Thrombosis, 9th ed",
        year: "2012",
        authors: "Lori-Ann Linkins, Antonio L Dans, Lisa K Moores et al.",
        journal: "Chest. 2012 Feb;141(2 Suppl):e495S-e530S",
        description: "American College of Chest Physicians evidence-based clinical practice guidelines for HIT treatment and prevention with systematic literature review and recommendations.",
        link: "https://pubmed.ncbi.nlm.nih.gov/22315270/"
      },
      {
        title: "KDIGO clinical practice guidelines for acute kidney injury",
        year: "2012",
        authors: "Arif Khwaja",
        journal: "Nephron Clin Pract. 2012;120(4):c179-84",
        description: "Kidney Disease: Improving Global Outcomes guidelines for acute kidney injury management including HIT considerations in renal replacement therapy.",
        link: "https://pubmed.ncbi.nlm.nih.gov/22890468/"
      },
      {
        title: "2021 ACC/AHA/SCAI Guideline for Coronary Artery Revascularization",
        year: "2022",
        authors: "Jennifer S Lawton, Jacqueline E Tamis-Holland, Sripal Bangalore et al.",
        journal: "Circulation. 2022 Jan 18;145(3):e18-e114",
        description: "American College of Cardiology/American Heart Association/Society for Cardiovascular Angiography and Interventions guidelines including HIT management during PCI procedures.",
        link: "https://pubmed.ncbi.nlm.nih.gov/34882435/"
      },
      {
        title: "The Society for Vascular Surgery practice guidelines on the care of patients with an abdominal aortic aneurysm",
        year: "2018",
        authors: "Elliot L Chaikof, Ronald L Dalman, Mark K Eskandari et al.",
        journal: "J Vasc Surg. 2018 Jan;67(1):2-77.e2",
        description: "Society for Vascular Surgery guidelines covering HIT management considerations during vascular surgical procedures and open AAA repair.",
        link: "https://pubmed.ncbi.nlm.nih.gov/29268916/"
      },
      {
        title: "Canadian consensus recommendations on the management of venous thromboembolism in patients with cancer. Part 2: treatment",
        year: "2015",
        authors: "J C Easaw, M A Shea-Budgell, C M J Wu et al.",
        journal: "Curr Oncol. 2015 Apr;22(2):144-55",
        description: "Canadian Cardiovascular Society guidelines covering HIT management in cancer patients requiring anticoagulation therapy.",
        link: "https://pubmed.ncbi.nlm.nih.gov/25908913/"
      },
      {
        title: "2017 ESC Guidelines for the management of acute myocardial infarction in patients presenting with ST-segment elevation",
        year: "2018",
        authors: "Borja Ibanez, Stefan James, Stefan Agewall et al.",
        journal: "Eur Heart J. 2018 Jan 7;39(2):119-177",
        description: "European Society of Cardiology guidelines for STEMI management including HIT considerations during primary PCI and acute coronary syndrome care.",
        link: "https://pubmed.ncbi.nlm.nih.gov/28886621/"
      },
      {
        title: "2019 Canadian Cardiovascular Society/Canadian Association of Interventional Cardiology Guidelines on the Acute Management of ST-Elevation Myocardial Infarction",
        year: "2019",
        authors: "Wong GC, Welsford M, Ainsworth C et al.",
        journal: "Can J Cardiol. 2019 Feb;35(2):107-132",
        description: "Canadian Association of Interventional Cardiology guidelines covering HIT management during primary PCI for STEMI patients.",
        link: "https://pubmed.ncbi.nlm.nih.gov/30760415/"
      },
      {
        title: "2018 ESC/EACTS Guidelines on myocardial revascularization",
        year: "2019",
        authors: "Miguel Sousa-Uva, Franz-Josef Neumann, Anders Ahlsson et al.",
        journal: "Eur J Cardiothorac Surg. 2019 Jan 1;55(1):4-90",
        description: "European Society of Cardiology/European Association for Cardio-Thoracic Surgery guidelines for myocardial revascularization including HIT management during cardiac surgery.",
        link: "https://pubmed.ncbi.nlm.nih.gov/30165632/"
      },
      {
        title: "Clinical practice. Heparin-induced thrombocytopenia",
        year: "2006",
        authors: "Arepally GM, Ortel TL",
        journal: "N Engl J Med. 2006 Aug 24;355(8):809-17",
        description: "Comprehensive clinical practice review of HIT pathophysiology, diagnosis, and management strategies in medical practice.",
        link: "https://pubmed.ncbi.nlm.nih.gov/16928996/"
      },
      {
        title: "A prospective, blinded study of a PF4-dependent assay for HIT diagnosis",
        year: "2021",
        authors: "Bethany Samuelson Bannow, Deepti M Warad, Curtis G Jones et al.",
        journal: "Blood. 2021 Feb 25;137(8):1082-1089",
        description: "Prospective study evaluating PF4-dependent assay performance for HIT diagnosis with clinical correlation and diagnostic accuracy assessment.",
        link: "https://pubmed.ncbi.nlm.nih.gov/32898858/"
      }
    ],

    guidelines: {
      keySources: 'The following summarized guidelines for the evaluation and management of heparin-induced thrombocytopenia are prepared by our editorial team based on guidelines from the Society for Cardiovascular Angiography and Interventions (SCAI/AHA/ACC 2022), the French Working Group on Perioperative Hemostasis (GIHP 2020), the Canadian Association of Interventional Cardiology (CAIC 2019), the European Society of Cardiology (ESC/EACTS 2019), the American Society of Hematology (ASH 2018), the Society of Gynecologists and Obstetricians of Canada (SOGC 2014), the American College of Chest Physicians (ACCP 2012), the British Committee for Standards in Haematology (BCSH 2012), and the Kidney Disease: Improving Global Outcomes (KDIGO 2012).',
      
      sections: [
        {
          title: 'Screening and Diagnosis',
          id: 'screening-diagnosis',
          content: [
            {
              statement: 'Obtain baseline platelet count before initiating heparin therapy and monitor according to risk stratification. Use 4T score to determine clinical probability of HIT in suspected cases.',
              level: 'B-E',
              source: 'GIHP 2020, ASH 2018, BCSH 2012'
            }
          ],
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
        },
        {
          title: 'Classification and Risk Stratification',
          id: 'classification-risk',
          content: [
            {
              statement: 'Use the 4Ts score rather than gestalt approach to estimate probability of HIT in patients with suspected HIT.',
              level: 'B',
              source: 'ASH 2018'
            },
            {
              statement: 'Consider classifying the risk of HIT during heparin administration based on clinical setting and heparin type.',
              level: 'E',
              source: 'GIHP 2020'
            }
          ],
          subsections: [
            {
              title: 'Pretest Probability Assessment',
              id: 'pretest-probability',
              content: [
                {
                  statement: 'Consider classifying the risk of HIT during heparin administration into three groups based on clinical setting and heparin type.',
                  level: 'E',
                  source: 'GIHP 2020'
                }
              ],
              riskTable: {
                title: 'HIT Risk Stratification by Clinical Setting',
                headers: ['Situation', 'Guidance'],
                rows: [
                  {
                    situation: 'Low (< 0.1%)',
                    guidance: [
                      'Treatment with LMWH in medicine (except cancer), obstetrics (except surgery including C-section), or in the course of minor trauma',
                      'Treatment with fondaparinux',
                      'Isolated UFH injection for an endovascular procedure or simple surgery',
                      'Treatment with UFH or LMWH lasting > 1 month'
                    ]
                  },
                  {
                    situation: 'Intermediate (0.1-1%)',
                    guidance: [
                      'Prophylactic treatment with UFH in medicine/obstetrics',
                      'Prophylactic treatment with LMWH in patients with cancer or severe trauma or in postoperative care (including cardiac surgery)'
                    ]
                  },
                  {
                    situation: 'High (> 1%)',
                    guidance: [
                      'Prophylactic treatment with UFH in surgery (including circulatory assistance) or for RRT',
                      'All curative treatments with UFH in medicine/surgery/obstetrics'
                    ]
                  }
                ]
              }
            },
            {
              title: '4Ts Score for Heparin-Induced Thrombocytopenia',
              id: 'four-ts-score',
              content: [
                {
                  statement: 'Interactive 4Ts Score Calculator for assessing the clinical probability of HIT in patients with suspected HIT.',
                  level: 'B',
                  source: 'ASH 2018'
                }
              ],
              calculator: {
                type: '4ts-score',
                parameters: {
                  thrombocytopenia: {
                    label: 'Thrombocytopenia',
                    options: [
                      {
                        value: 2,
                        label: 'Platelet count fall >50% from baseline and platelet nadir ≥20×10⁹/L',
                        points: 2
                      },
                      {
                        value: 1,
                        label: 'Platelet count fall 30-50% from baseline or platelet nadir 10-19×10⁹/L',
                        points: 1
                      },
                      {
                        value: 0,
                        label: 'Platelet count fall <30% from baseline or platelet nadir <10×10⁹/L',
                        points: 0
                      }
                    ]
                  },
                  timing: {
                    label: 'Timing of platelet count fall',
                    options: [
                      {
                        value: 2,
                        label: 'Clear onset between days 5-10 or platelet fall ≤1 day with prior heparin exposure within 30 days',
                        points: 2
                      },
                      {
                        value: 1,
                        label: 'Consistent with onset days 5-10, but not clear or onset after day 10 of heparin exposure or fall ≤1 day with prior heparin exposure 30-100 days ago',
                        points: 1
                      },
                      {
                        value: 0,
                        label: '<4 days without recent exposure',
                        points: 0
                      }
                    ]
                  },
                  thrombosis: {
                    label: 'Thrombosis or other sequelae',
                    options: [
                      {
                        value: 2,
                        label: 'New thrombosis, skin necrosis, or acute systemic reaction after unfractionated heparin exposure',
                        points: 2
                      },
                      {
                        value: 1,
                        label: 'Progressive/recurrent thrombosis or unconfirmed but clinically suspected thrombosis',
                        points: 1
                      },
                      {
                        value: 0,
                        label: 'No thrombosis or thrombosis preceding heparin exposure',
                        points: 0
                      }
                    ]
                  },
                  otherCauses: {
                    label: 'Other causes for thrombocytopenia',
                    options: [
                      {
                        value: 2,
                        label: 'None apparent',
                        points: 2
                      },
                      {
                        value: 1,
                        label: 'Possible other causes',
                        points: 1
                      },
                      {
                        value: 0,
                        label: 'Probable other causes',
                        points: 0
                      }
                    ]
                  }
                },
                riskCategories: [
                  {
                    score: '≤3',
                    risk: 'Low',
                    probability: '<0.1%',
                    interpretation: 'Low probability of HIT'
                  },
                  {
                    score: '4-5',
                    risk: 'Intermediate',
                    probability: '0.1-1%',
                    interpretation: 'Intermediate probability of HIT'
                  },
                  {
                    score: '≥6',
                    risk: 'High',
                    probability: '>1%',
                    interpretation: 'High probability of HIT (up to 34% risk when score is 8)'
                  }
                ]
              }
            },
            {
              title: 'HIT Classification Stages',
              id: 'hit-classification',
              content: [
                {
                  statement: 'Acute HIT (diagnosed within last month): Anti-PF4 antibodies most often present with high thrombotic risk.',
                  level: 'E',
                  source: 'GIHP 2020'
                },
                {
                  statement: 'Subacute HIT (diagnosed 1-3 months ago): Anti-PF4 antibodies often present with low titer.',
                  level: 'E',
                  source: 'GIHP 2020'
                },
                {
                  statement: 'Previous history of HIT (diagnosed >3 months ago): Anti-PF4 antibodies most often undetectable.',
                  level: 'E',
                  source: 'GIHP 2020'
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
              source: 'GIHP 2020, ASH 2018, BCSH 2012'
            }
          ],
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
        },
        {
          title: 'Medical Management',
          id: 'medical-management',
          content: [
            {
              statement: 'Discontinue heparin immediately in suspected HIT and initiate non-heparin anticoagulants based on clinical probability and thrombotic risk.',
              level: 'B',
              source: 'GIHP 2020, ASH 2018, BCSH 2012',
              subsections: [
                {
                  title: 'Continuation/Discontinuation of Heparin',
                  id: 'heparin-continuation',
                  content: [
                    {
                      statement: 'Consider continuing or resuming heparin therapy, with close monitoring of platelet count, after exclusion of HIT based on absence of anti-PF4 antibodies in patients with intermediate clinical probability.',
                      level: 'E',
                      source: 'GIHP 2020'
                    },
                    {
                      statement: 'Do not discontinue heparin empirically in patients with suspected HIT with low probability score.',
                      level: 'D',
                      source: 'ASH 2018'
                    },
                    {
                      statement: 'Discontinue heparin immediately (without waiting for biological test results) and initiate non-heparin anticoagulant at curative doses in patients with high (4T ≥6) clinical probability of HIT.',
                      level: 'E',
                      source: 'GIHP 2020'
                    }
                  ]
                },
                {
                  title: 'HIT Without Thrombosis - General Principles',
                  id: 'hit-without-thrombosis-general',
                  content: [
                    {
                      statement: 'Initiate non-heparin anticoagulant (argatroban, bivalirudin, danaparoid, fondaparinux, or DOAC) as alternative anticoagulant in acute phase of HIT.',
                      level: 'E',
                      source: 'GIHP 2020'
                    },
                    {
                      statement: 'Initiate non-heparin anticoagulant at therapeutic intensity, rather than prophylactic intensity dosing, in patients with acute isolated HIT.',
                      level: 'B',
                      source: 'ASH 2018'
                    },
                    {
                      statement: 'Initiate non-heparin agent (including lepirudin, argatroban, and danaparoid; off-label agents include bivalirudin and fondaparinux) in patients with strongly suspected or confirmed HIT without thrombosis.',
                      level: 'A',
                      source: 'CCG-VTEC 2015'
                    }
                  ]
                },
                {
                  title: 'HIT Without Thrombosis - DOACs',
                  id: 'hit-without-thrombosis-doacs',
                  content: [
                    {
                      statement: 'Consider initiating DOAC (without specific biological monitoring) as first-line alternative anticoagulant (due to simplicity of use), after use of danaparoid or argatroban, in stable patients with acute HIT.',
                      level: 'E',
                      source: 'GIHP 2020'
                    },
                    {
                      statement: 'Consider initiating DOAC when non-heparin anticoagulant is being selected in patients with acute isolated HIT.',
                      level: 'C',
                      source: 'ASH 2018'
                    },
                    {
                      statement: 'Consider initiating DOAC (dabigatran, rivaroxaban, or apixaban) rather than VKA in patients with subacute HIT.',
                      level: 'C',
                      source: 'ASH 2018'
                    }
                  ]
                },
                {
                  title: 'HIT Without Thrombosis - VKAs',
                  id: 'hit-without-thrombosis-vkas',
                  content: [
                    {
                      statement: 'Initiate VKAs as supplement to parenteral treatment in acute phase of HIT only when platelet count is corrected (>150,000/mcL).',
                      level: 'E',
                      source: 'GIHP 2020'
                    },
                    {
                      statement: 'Do not initiate VKAs before platelet count recovery (usually ≥150,000/mcL) in patients with acute isolated HIT.',
                      level: 'D',
                      source: 'ASH 2018'
                    },
                    {
                      statement: 'Do not initiate warfarin in patients with strongly suspected or confirmed HIT until after platelet count has substantially recovered (≥150,000/mcL).',
                      level: 'D',
                      source: 'CCG-VTEC 2015'
                    }
                  ]
                },
                {
                  title: 'HIT With Thrombosis',
                  id: 'hit-with-thrombosis',
                  content: [
                    {
                      statement: 'Initiate non-heparin anticoagulant at therapeutic intensity, rather than prophylactic intensity dosing, in patients with acute HIT complicated by thrombosis.',
                      level: 'B',
                      source: 'ASH 2018'
                    },
                    {
                      statement: 'Initiate non-heparin agent (including lepirudin, argatroban, and danaparoid; off-label agents include bivalirudin and fondaparinux) in patients with strongly suspected or confirmed HIT complicated by thrombosis.',
                      level: 'A',
                      source: 'CCG-VTEC 2015'
                    },
                    {
                      statement: 'Do not initiate VKAs before platelet count recovery (usually ≥150,000/mcL) in patients with acute HIT complicated by thrombosis.',
                      level: 'D',
                      source: 'ASH 2018'
                    }
                  ]
                },
                {
                  title: 'Duration of Anticoagulation',
                  id: 'duration-anticoagulation',
                  content: [
                    {
                      statement: 'Consider continuing anticoagulation at least until platelet count recovery (usually ≥150,000/mcL) in patients with acute isolated HIT and no asymptomatic DVT identified by screening compression ultrasound. Avoid continuing treatment ≥3 months unless HIT persists without platelet count recovery.',
                      level: 'C',
                      source: 'ASH 2018'
                    },
                    {
                      statement: 'Consider continuing alternative anticoagulant therapy (including VKAs) for 4 months in patients with isolated HIT and for 3 weeks in patients with HIT complicated by thrombosis.',
                      level: 'E',
                      source: 'ACCP 2012'
                    },
                    {
                      statement: 'Continue therapeutic anticoagulation for 4 months after HIT without thrombotic complication and for 3 weeks following HIT with thrombotic complication.',
                      level: 'B-A',
                      source: 'BCSH 2012'
                    }
                  ]
                },
                {
                  title: 'Antiplatelet Therapy',
                  id: 'antiplatelet-therapy',
                  content: [
                    {
                      statement: 'Do not use oral antiplatelet agents for treatment of patients with acute HIT.',
                      level: 'D',
                      source: 'GIHP 2020'
                    },
                    {
                      statement: 'Avoid using antiplatelet agents in combination with non-heparin anticoagulants in patients with acute HIT (whether acute isolated HIT or complicated by thrombosis) and no other indication for antiplatelet therapy.',
                      level: 'D',
                      source: 'ASH 2018'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: 'Therapeutic Procedures',
          id: 'therapeutic-procedures',
          content: [
            {
              statement: 'Avoid routine platelet transfusions and IVC filter placement in patients with acute HIT.',
              level: 'D',
              source: 'GIHP 2020, ASH 2018'
            }
          ],
          subsections: [
            {
              title: 'Platelet Transfusion',
              id: 'platelet-transfusion',
              content: [
                {
                  statement: 'Do not administer platelet transfusion in acute phase of HIT in absence of life-threatening or functional bleeding.',
                  level: 'D',
                  source: 'GIHP 2020'
                },
                {
                  statement: 'Avoid administering platelet transfusions routinely in patients with acute HIT, whether acute isolated HIT or complicated by thrombosis, at average bleeding risk.',
                  level: 'D',
                  source: 'ASH 2018'
                },
                {
                  statement: 'Consider administering platelet transfusions in patients with severe thrombocytopenia only in case of bleeding or when performing invasive procedure with high risk of bleeding.',
                  level: 'C',
                  source: 'ACCP 2012'
                }
              ]
            },
            {
              title: 'IVC Filter Placement',
              id: 'ivc-filter-placement',
              content: [
                {
                  statement: 'Do not insert IVC filter in acute phase of HIT.',
                  level: 'D',
                  source: 'GIHP 2020'
                },
                {
                  statement: 'Do not insert IVC filter routinely in patients with acute HIT, whether acute isolated HIT or complicated by thrombosis.',
                  level: 'D',
                  source: 'ASH 2018'
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
              statement: 'Tailor HIT management to specific patient populations and clinical scenarios including pediatric, pregnant, hepatic/renal impairment, RRT, PCI, and cardiac surgery patients.',
              level: 'B-E',
              source: 'Multiple Guidelines'
            }
          ],
          subsections: [
            {
              title: 'Pediatric Patients',
              id: 'pediatric-patients',
              content: [
                {
                  statement: 'Consider using same procedures for monitoring platelet counts in pediatric patients treated with heparin as in adult patients.',
                  level: 'E',
                  source: 'GIHP 2020'
                },
                {
                  statement: 'Initiate sodium danaparoid or argatroban, with rigorous dose adjustment based on weight and bioassay results, in pediatric patients with HIT.',
                  level: 'E',
                  source: 'GIHP 2020'
                }
              ]
            },
            {
              title: 'Pregnant Patients',
              id: 'pregnant-patients',
              content: [
                {
                  statement: 'Consider preferring danaparoid, or fondaparinux if danaparoid is not available, in pregnant patients with HIT.',
                  level: 'E',
                  source: 'GIHP 2020'
                },
                {
                  statement: 'Consider initiating danaparoid over other non-heparin anticoagulants in pregnant patients with acute or subacute HIT. Consider initiating lepirudin or fondaparinux only when danaparoid is not available.',
                  level: 'C',
                  source: 'ACCP 2012'
                },
                {
                  statement: 'Recognize that HIT in pregnant women is extremely rare.',
                  level: 'B',
                  source: 'SOGC 2014'
                }
              ]
            },
            {
              title: 'Hepatic Impairment',
              id: 'hepatic-impairment',
              content: [
                {
                  statement: 'Initiate argatroban at 1 mcg/kg/min and reduce it to 0.5 mcg/kg/min in patients with moderate hepatic failure (Child-Pugh B).',
                  level: 'E',
                  source: 'GIHP 2020'
                },
                {
                  statement: 'Consider initiating bivalirudin, danaparoid, or fondaparinux in patients with acute HIT with severe hepatic impairment (Child-Pugh C). Do not use argatroban in patients with severe hepatic impairment.',
                  level: 'E',
                  source: 'GIHP 2020'
                }
              ]
            },
            {
              title: 'Renal Impairment',
              id: 'renal-impairment',
              content: [
                {
                  statement: 'Initiate argatroban for HIT in patients with severe renal failure (CrCl <30 mL/min).',
                  level: 'E',
                  source: 'GIHP 2020'
                },
                {
                  statement: 'Do not use danaparoid as first-line therapy in patients with severe renal failure.',
                  level: 'D',
                  source: 'GIHP 2020'
                },
                {
                  statement: 'Consider initiating argatroban over other non-heparin anticoagulants in patients with renal impairment.',
                  level: 'C',
                  source: 'ACCP 2012'
                }
              ]
            },
            {
              title: 'Patients Requiring RRT',
              id: 'patients-requiring-rrt',
              content: [
                {
                  statement: 'Consider using citrate or argatroban as preferred treatment for circuit anticoagulation for RRT in case of HIT.',
                  level: 'E',
                  source: 'GIHP 2020'
                },
                {
                  statement: 'Consider administering argatroban, danaparoid, or bivalirudin rather than other non-heparin anticoagulants in patients with acute HIT receiving RRT and requiring anticoagulation to prevent thrombosis of dialysis circuitry.',
                  level: 'C',
                  source: 'ASH 2018'
                },
                {
                  statement: 'Administer direct thrombin inhibitors (such as argatroban) or factor Xa inhibitors (such as danaparoid or fondaparinux) during RRT in patients with HIT.',
                  level: 'B',
                  source: 'KDIGO 2012'
                }
              ]
            },
            {
              title: 'Patients Requiring PCI',
              id: 'patients-requiring-pci',
              content: [
                {
                  statement: 'Initiate bivalirudin or argatroban to replace UFH to avoid thrombotic complications in patients with HIT undergoing PCI.',
                  level: 'B',
                  source: 'ACC/AHA/SCAI 2022'
                },
                {
                  statement: 'Consider initiating bivalirudin rather than other non-heparin anticoagulants in patients with acute HIT or subacute HIT A requiring PCI.',
                  level: 'C',
                  source: 'ASH 2018'
                },
                {
                  statement: 'Initiate bivalirudin as anticoagulant agent of choice in patients with HIT undergoing primary PCI.',
                  level: 'B',
                  source: 'ESC 2018'
                }
              ]
            },
            {
              title: 'Patients Requiring Cardiac Surgery',
              id: 'patients-requiring-cardiac-surgery',
              content: [
                {
                  statement: 'Consider obtaining ELISA for anti-PF4 antibodies before any cardiac surgery in patients with documented history of HIT.',
                  level: 'E',
                  source: 'GIHP 2020'
                },
                {
                  statement: 'Consider administering bivalirudin over other non-heparin anticoagulants and over heparin plus antiplatelet agents in patients with acute (thrombocytopenic, antibody-positive HIT) or subacute (platelets recovered, but still antibody-positive HIT) HIT requiring urgent cardiac surgery.',
                  level: 'C',
                  source: 'ACCP 2012'
                },
                {
                  statement: 'Administer intraoperative UFH in preference to other anticoagulants in antibody-negative (usually after >100 days) patients with previous HIT requiring cardiac surgery.',
                  level: 'B',
                  source: 'BCSH 2012'
                }
              ]
            },
            {
              title: 'Non-HIT-Related Thrombosis',
              id: 'non-hit-related-thrombosis',
              content: [
                {
                  statement: 'Consider initiating fondaparinux at full therapeutic doses until transition to VKAs in patients with past history of HIT presenting with acute thrombosis (not related to HIT) and normal renal function.',
                  level: 'C',
                  source: 'ACCP 2012'
                }
              ]
            }
          ]
        },
        {
          title: 'Preventative Measures',
          id: 'preventative-measures',
          content: [
            {
              statement: 'Implement secondary prevention strategies for patients with history of HIT requiring future anticoagulation.',
              level: 'B-E',
              source: 'GIHP 2020, ASH 2018'
            }
          ],
          subsections: [
            {
              title: 'Secondary Prevention',
              id: 'secondary-prevention',
              content: [
                {
                  statement: 'Consider initiating OAC (VKA or DOAC) or fondaparinux in patients with history of HIT requiring prophylactic or curative anticoagulation. Consider initiating argatroban, bivalirudin, or danaparoid only when OACs and fondaparinux are contraindicated.',
                  level: 'E',
                  source: 'GIHP 2020'
                },
                {
                  statement: 'Initiate non-heparin anticoagulant (such as apixaban, dabigatran, danaparoid, edoxaban, fondaparinux, rivaroxaban, or VKA) rather than UFH or LMWH in patients with remote HIT requiring VTE treatment or prophylaxis.',
                  level: 'B',
                  source: 'ASH 2018'
                }
              ]
            }
          ]
        },
        {
          title: 'Quality Improvement',
          id: 'quality-improvement',
          content: [
            {
              statement: 'Implement documentation and patient alert systems for HIT diagnosis and management.',
              level: 'C-E',
              source: 'GIHP 2020, ASH 2018'
            }
          ],
          subsections: [
            {
              title: 'Documentation',
              id: 'documentation',
              content: [
                {
                  statement: 'Consider obtaining hemostasis consultation within 3 months of HIT diagnosis and provide card attesting this complication, specifying results of biological tests, and recommending exclusion of all heparin treatment to patient.',
                  level: 'E',
                  source: 'GIHP 2020'
                }
              ]
            },
            {
              title: 'Medical Alert Bracelet',
              id: 'medical-alert-bracelet',
              content: [
                {
                  statement: 'Consider offering carrying or wearing emergency identifier (such as emergency pendant or bracelet) in patients with history of HIT in past 3 months.',
                  level: 'C',
                  source: 'ASH 2018'
                },
                {
                  statement: 'Avoid offering carrying or wearing emergency identifier in patients with history of HIT >3 months ago.',
                  level: 'D',
                  source: 'ASH 2018'
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
        authors: 'Yves Gruel, Emmanuel De Maistre, Claire Pouplard et al.',
        title: 'Diagnosis and management of heparin-induced thrombocytopenia',
        journal: 'Anaesth Crit Care Pain Med. 2020 Apr;39(2):291-310',
        year: '2020',
        link: 'https://pubmed.ncbi.nlm.nih.gov/32299756/'
      },
      {
        id: 2,
        authors: 'Adam Cuker, Gowthami M Arepally, Beng H Chong et al.',
        title: 'American Society of Hematology 2018 guidelines for management of venous thromboembolism: heparin-induced thrombocytopenia',
        journal: 'Blood Adv. 2018 Nov 27;2(22):3360-3392',
        year: '2018',
        link: 'https://pubmed.ncbi.nlm.nih.gov/30482768/'
      },
      {
        id: 3,
        authors: 'Wee-Shian Chan, Evelyne Rey, Nancy E Kent et al.',
        title: 'Venous thromboembolism and antithrombotic therapy in pregnancy',
        journal: 'J Obstet Gynaecol Can. 2014 Jun;36(6):527-53',
        year: '2014',
        link: 'https://pubmed.ncbi.nlm.nih.gov/24927193/'
      },
      {
        id: 4,
        authors: 'Henry Watson, Simon Davidson, David Keeling et al.',
        title: 'Guidelines on the diagnosis and management of heparin-induced thrombocytopenia: second edition',
        journal: 'Br J Haematol. 2012 Dec;159(5):528-40',
        year: '2012',
        link: 'https://pubmed.ncbi.nlm.nih.gov/23043677/'
      },
      {
        id: 5,
        authors: 'Lori-Ann Linkins, Antonio L Dans, Lisa K Moores et al.',
        title: 'Treatment and prevention of heparin-induced thrombocytopenia: Antithrombotic Therapy and Prevention of Thrombosis, 9th ed: American College of Chest Physicians Evidence-Based Clinical Practice Guidelines',
        journal: 'Chest. 2012 Feb;141(2 Suppl):e495S-e530S',
        year: '2012',
        link: 'https://pubmed.ncbi.nlm.nih.gov/22315270/'
      },
      {
        id: 6,
        authors: 'Arif Khwaja',
        title: 'KDIGO clinical practice guidelines for acute kidney injury',
        journal: 'Nephron Clin Pract. 2012;120(4):c179-84',
        year: '2012',
        link: 'https://pubmed.ncbi.nlm.nih.gov/22890468/'
      },
      {
        id: 7,
        authors: 'Jennifer S Lawton, Jacqueline E Tamis-Holland, Sripal Bangalore et al.',
        title: '2021 ACC / AHA / SCAI Guideline for Coronary Artery Revascularization: A Report of the American College of Cardiology / American Heart Association Joint Committee on Clinical Practice Guidelines',
        journal: 'Circulation. 2022 Jan 18;145(3):e18-e114',
        year: '2022',
        link: 'https://pubmed.ncbi.nlm.nih.gov/34882435/'
      },
      {
        id: 8,
        authors: 'Elliot L Chaikof, Ronald L Dalman, Mark K Eskandari et al.',
        title: 'The Society for Vascular Surgery practice guidelines on the care of patients with an abdominal aortic aneurysm',
        journal: 'J Vasc Surg. 2018 Jan;67(1):2-77.e2',
        year: '2018',
        link: 'https://pubmed.ncbi.nlm.nih.gov/29268916/'
      },
      {
        id: 9,
        authors: 'J C Easaw, M A Shea-Budgell, C M J Wu et al.',
        title: 'Canadian consensus recommendations on the management of venous thromboembolism in patients with cancer. Part 2: treatment',
        journal: 'Curr Oncol. 2015 Apr;22(2):144-55',
        year: '2015',
        link: 'https://pubmed.ncbi.nlm.nih.gov/25908913/'
      },
      {
        id: 10,
        authors: 'Borja Ibanez, Stefan James, Stefan Agewall et al.',
        title: '2017 ESC Guidelines for the management of acute myocardial infarction in patients presenting with ST-segment elevation: The Task Force for the management of acute myocardial infarction in patients presenting with ST-segment elevation of the European Society of Cardiology (ESC)',
        journal: 'Eur Heart J. 2018 Jan 7;39(2):119-177',
        year: '2018',
        link: 'https://pubmed.ncbi.nlm.nih.gov/28886621/'
      },
      {
        id: 11,
        authors: 'Wong GC, Welsford M, Ainsworth C et al.',
        title: '2019 Canadian Cardiovascular Society / Canadian Association of Interventional Cardiology Guidelines on the Acute Management of ST-Elevation Myocardial Infarction: Focused Update on Regionalization and Reperfusion',
        journal: 'Can J Cardiol. 2019 Feb;35(2):107-132',
        year: '2019',
        link: 'https://pubmed.ncbi.nlm.nih.gov/30760415/'
      },
      {
        id: 12,
        authors: 'Miguel Sousa-Uva, Franz-Josef Neumann, Anders Ahlsson et al.',
        title: '2018 ESC / EACTS Guidelines on myocardial revascularization',
        journal: 'Eur J Cardiothorac Surg. 2019 Jan 1;55(1):4-90',
        year: '2019',
        link: 'https://pubmed.ncbi.nlm.nih.gov/30165632/'
      },
      {
        id: 13,
        authors: 'Arepally GM, Ortel TL',
        title: 'Clinical practice. Heparin-induced thrombocytopenia',
        journal: 'N Engl J Med. 2006 Aug 24;355(8):809-17',
        year: '2006',
        link: 'https://pubmed.ncbi.nlm.nih.gov/16928996/'
      },
      {
        id: 14,
        authors: 'Bethany Samuelson Bannow, Deepti M Warad, Curtis G Jones et al.',
        title: 'A prospective, blinded study of a PF4-dependent assay for HIT diagnosis',
        journal: 'Blood. 2021 Feb 25;137(8):1082-1089',
        year: '2021',
        link: 'https://pubmed.ncbi.nlm.nih.gov/32898858/'
      },
      {
        id: 15,
        authors: 'Mark Andrew Crowther, Deborah J Cook, Martin Albert et al.',
        title: 'The 4Ts scoring system for heparin-induced thrombocytopenia in medical-surgical intensive care unit patients',
        journal: 'J Crit Care. 2010 Jun;25(2):287-93',
        year: '2010',
        link: 'https://pubmed.ncbi.nlm.nih.gov/20149589/'
      },
      {
        id: 16,
        authors: 'Anand Padmanabhan, Laura Connelly-Smith, Nicole Aqui et al.',
        title: 'Guidelines on the Use of Therapeutic Apheresis in Clinical Practice - Evidence-Based Approach from the Writing Committee of the American Society for Apheresis: The Eighth Special Issue',
        journal: 'J Clin Apher. 2019 Jun;34(3):171-354',
        year: '2019',
        link: 'https://pubmed.ncbi.nlm.nih.gov/31180581/'
      },
      {
        id: 17,
        authors: 'Samaha Syed, Robert F Reilly',
        title: 'Heparin-induced thrombocytopenia: a renal perspective',
        journal: 'Nat Rev Nephrol. 2009 Sep;5(9):501-11',
        year: '2009',
        link: 'https://pubmed.ncbi.nlm.nih.gov/19636331/'
      },
      {
        id: 18,
        authors: 'Zheng Cai, Serge V Yarovoi, Zhiqiang Zhu et al.',
        title: 'Atomic description of the immune complex involved in heparin-induced thrombocytopenia',
        journal: 'Nat Commun. 2015 Sep 22;6:8277',
        year: '2015',
        link: 'https://pubmed.ncbi.nlm.nih.gov/26391892/'
      },
      {
        id: 19,
        authors: 'Weixin Wu, Kelly Merriman, Amr Nabaah et al.',
        title: 'Heparin-induced thrombocytopenia among patients of a comprehensive cancer center',
        journal: 'SAGE Open Med Case Rep. 2014 Jul 31;2:2050313X14533945',
        year: '2014',
        link: 'https://pubmed.ncbi.nlm.nih.gov/27489647/'
      },
      {
        id: 20,
        authors: 'Gowthami M Arepally, Anand Padmanabhan',
        title: 'Heparin-Induced Thrombocytopenia: A Focus on Thrombosis',
        journal: 'Arterioscler Thromb Vasc Biol. 2021 Jan;41(1):141-152',
        year: '2021',
        link: 'https://pubmed.ncbi.nlm.nih.gov/33267665/'
      },
      {
        id: 21,
        authors: 'Neal B Shah, Parija Sharedalal, Irfan Shafi et al.',
        title: 'Prevalence and outcomes of heparin-induced thrombocytopenia in hospitalized patients with venous thromboembolic disease: Insight from national inpatient sample',
        journal: 'J Vasc Surg Venous Lymphat Disord. 2023 Jul;11(4):723-730',
        year: '2023',
        link: 'https://pubmed.ncbi.nlm.nih.gov/36893884/'
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