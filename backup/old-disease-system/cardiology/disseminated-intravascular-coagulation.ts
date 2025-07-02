import { DiseaseData } from '../types';

export const disseminatedIntravascularCoagulationData: DiseaseData = {
  id: 'disseminated-intravascular-coagulation',
  title: 'Disseminated Intravascular Coagulation',
  lastUpdated: 'May 21, 2025',
  category: 'Hematology/Coagulation',
  content: {
    background: {
      overview: {
        definition: 'DIC is a clinicopathologic syndrome characterized by systemic activation of widespread coagulation resulting in severe bleeding and organ failure.',
        pathophysiology: 'DIC is mostly caused by hypercoagulation (infection, particularly sepsis) and hyperfibrinolysis (acute promyelocytic leukemia, obstetric diseases, or aortic aneurysms).',
        epidemiology: 'The incidence of DIC in the US is estimated at 18.6 cases per 100,000 person-years.',
        diseaseCourse: 'Clinical manifestations include latent and compensated activation of coagulation (no obvious clinical symptoms) and overt DIC (microvascular thrombosis, multi-organ dysfunction, macrovascular thrombi resulting in venous or arterial obstruction and embolization). Sustained thrombin generation results in severe bleeding and an increased risk of death.',
        prognosis: 'The in-hospital mortality of DIC in critically ill patients is 45%.'
      }
    },
    clinicalFindings: {
      symptoms: [
        'Bleeding',
        'Petechiae',
        'Past obstetric history',
        'Current pregnancy'
      ],
      pastMedicalHistory: [
        'ALF',
        'Acute pancreatitis',
        'Acute promyelocytic leukemia',
        'Liver cirrhosis',
        'Malignancy',
        'Pancreatic cancer',
        'Sepsis',
        'Traumatic injury'
      ]
    },
    guidelines: {
      keySources: 'The following summarized guidelines for the evaluation and management of disseminated intravascular coagulation are prepared by our editorial team based on guidelines from the International Society on Thrombosis and Haemostasis (ISTH 2015,2013), the Italian Society for Haemostasis and Thrombosis (SISET 2012), and the British Committee for Standards In Haematology (BCSH 2009).',
      sections: [
        {
          title: 'Screening and Diagnosis',
          id: 'screening-diagnosis',
          content: [
            {
              statement: 'Recognize that there is no gold standard for the diagnosis of DIC and a single test that is, by itself, capable of accurately diagnosing DIC.',
              level: 'I',
              source: 'ISTH 2013 guidelines'
            },
            {
              statement: 'Diagnose DIC based on both clinical and laboratory evaluation.',
              level: 'B',
              source: 'BCSH 2009 guidelines'
            }
          ]
        },
        {
          title: 'Classification and Risk Stratification',
          id: 'classification-risk-stratification',
          content: [
            {
              statement: 'Use a scoring system for the diagnosis of DIC, recognizing that the ISTH score correlates with key clinical observations and outcomes.',
              level: 'B',
              source: 'ISTH 2013 guidelines'
            },
            {
              statement: 'Consider using any of the following scoring systems to make the diagnosis in patients with suspected DIC: the ISTH score, the JMHW score, the JAAM score.',
              level: 'C',
              source: 'SISET 2012 guidelines'
            },
            {
              statement: 'Use the ISTH DIC scoring system to obtain objective measurement of DIC.',
              level: 'B',
              source: 'BCSH 2009 guidelines'
            }
          ]
        },
        {
          title: 'Diagnostic Investigations',
          id: 'diagnostic-investigations',
          content: [
            {
              statement: 'Avoid using stand-alone laboratory tests in patients with suspected DIC.',
              level: 'D',
              source: 'SISET 2012 guidelines'
            },
            {
              statement: 'Consider obtaining D-dimer as a fibrin-related marker considering an increase up to 10 times the ULN as moderate and an increase above this threshold as strong.',
              level: 'C',
              source: 'SISET 2012 guidelines'
            }
          ]
        },
        {
          title: 'Medical Management',
          id: 'medical-management',
          content: [
            {
              statement: 'Treat the underlying condition as the cornerstone of treatment of DIC.',
              level: 'B',
              source: 'ISTH 2013 guidelines'
            }
          ],
          subsections: [
            {
              title: 'Prothrombin Complex Concentrate',
              id: 'prothrombin-complex-concentrate',
              content: [
                {
                  statement: 'Consider administering prothrombin complex concentrate in actively bleeding patients if FFP transfusion is not possible.',
                  level: 'I',
                  source: 'ISTH 2013 guidelines'
                },
                {
                  statement: 'Consider administering factor concentrates, such as prothrombin complex concentrate, if transfusion of FFP is not possible in patients with bleeding because of fluid overload, recognizing that these will only partially correct the defect because they contain only selected factors, whereas in DIC there is a global deficiency of coagulation factors.',
                  level: 'C',
                  source: 'BCSH 2009 guidelines'
                }
              ]
            },
            {
              title: 'Fibrinogen Replacement',
              id: 'fibrinogen-replacement',
              content: [
                {
                  statement: 'Consider administering fibrinogen concentrate or cryoprecipitate in actively bleeding patients with persisting severe hypofibrinogenemia (< 1.5 g/L) despite FFP replacement.',
                  level: 'C',
                  source: 'ISTH 2013 guidelines'
                },
                {
                  statement: 'Consider administering fibrinogen concentrate or cryoprecipitate in patients with severe hypofibrinogenemia (< 1 g/L) persisting despite FFP replacement.',
                  level: 'C',
                  source: 'BCSH 2009 guidelines'
                }
              ]
            },
            {
              title: 'Recombinant Factor VIIa',
              id: 'recombinant-factor-viia',
              content: [
                {
                  statement: 'Avoid using routine recombinant activated factor VII in bleeding patients with solid tumors or obstetric complications and DIC.',
                  level: 'D',
                  source: 'SISET 2012 guidelines'
                }
              ]
            },
            {
              title: 'Activated Protein C',
              id: 'activated-protein-c',
              content: [
                {
                  statement: 'Insufficient evidence to support the use of activated protein C in patients with DIC. Consider using on a case-by-case basis.',
                  level: 'I',
                  source: 'ISTH 2013 guidelines'
                },
                {
                  statement: 'Consider administering recombinant human activated protein C in patients with severe sepsis/septic shock, APACHE II score > 25 (EMEA: at least 2 organs compromised) and DIC.',
                  level: 'C',
                  source: 'SISET 2012 guidelines'
                },
                {
                  statement: 'Consider administering recombinant human-activated protein C (continuous infusion, 24 mcg/kg/hour for 4 days) in patients with severe sepsis and DIC.',
                  level: 'B',
                  source: 'BCSH 2009 guidelines'
                }
              ]
            },
            {
              title: 'Intravenous Heparin',
              id: 'intravenous-heparin',
              content: [
                {
                  statement: 'Consider administering therapeutic doses of heparin in patients with DIC where thrombosis predominates. Prefer LMWH over UFH.',
                  level: 'C',
                  source: 'ISTH 2013 guidelines'
                },
                {
                  statement: 'Consider administering therapeutic doses of heparin in patients with DIC with predominating thrombosis, such as arterial or VTE, severe purpura fulminans associated with acral ischemia or vascular skin infarction.',
                  level: 'I',
                  source: 'BCSH 2009 guidelines'
                },
                {
                  statement: 'Consider administering continuous infusion UFH in patients with perceived coexisting high risk of bleeding. Consider administering weight adjusted doses (such as 10 mcg/kg/hour) without the intention of prolonging the aPTT ratio 1.5-2.5 times the control. Observe clinical signs of bleeding because monitoring the aPTT in these patients may be complicated.',
                  level: 'C',
                  source: 'BCSH 2009 guidelines'
                }
              ]
            },
            {
              title: 'Antithrombin Concentrate',
              id: 'antithrombin-concentrate',
              content: [
                {
                  statement: 'Avoid using thrombomodulin in patients with hematological cancer or infection and DIC.',
                  level: 'D',
                  source: 'SISET 2012 guidelines'
                },
                {
                  statement: 'Do not administer antithrombin in patients with DIC not receiving heparin.',
                  level: 'D',
                  source: 'BCSH 2009 guidelines'
                }
              ]
            },
            {
              title: 'Recombinant Thrombomodulin',
              id: 'recombinant-thrombomodulin',
              content: [
                {
                  statement: 'Insufficient evidence to support the use of recombinant human thrombomodulin in patients with DIC. Consider using on a case-by-case basis.',
                  level: 'I',
                  source: 'ISTH 2013 guidelines'
                },
                {
                  statement: 'Avoid using antithrombin in patients with DIC secondary to severe sepsis/septic shock, obstetric complications, burn injury or advanced liver disease.',
                  level: 'D',
                  source: 'SISET 2012 guidelines'
                }
              ]
            },
            {
              title: 'Dermatan Sulfate and Gabexate',
              id: 'dermatan-sulfate-gabexate',
              content: [
                {
                  statement: 'Avoid using dermatan sulfate in patients with DIC and hematological malignancy.',
                  level: 'D',
                  source: 'SISET 2012 guidelines'
                },
                {
                  statement: 'Avoid using in patients with DIC and sepsis, malignancy, or in patients undergoing surgery.',
                  level: 'D',
                  source: 'SISET 2012 guidelines'
                }
              ]
            },
            {
              title: 'Antifibrinolytic Agents',
              id: 'antifibrinolytic-agents',
              content: [
                {
                  statement: 'Avoid using antifibrinolytic agents in patients with DIC.',
                  level: 'D',
                  source: 'ISTH 2013 guidelines'
                },
                {
                  statement: 'Consider administering antifibrinolytic agents in patients with DIC presenting with severe bleeding characterized by a marked hyperfibrinolytic state such as leukemia or trauma.',
                  level: 'C',
                  source: 'ISTH 2013 guidelines'
                },
                {
                  statement: 'Consider administering lysine analogs, such as tranexamic acid (for example 1 g every 8 hours), in patients with DIC characterized by a primary hyperfibrinolytic state and presenting with severe bleeding.',
                  level: 'C',
                  source: 'BCSH 2009 guidelines'
                }
              ]
            }
          ]
        },
        {
          title: 'Inpatient Care',
          id: 'inpatient-care',
          content: [
            {
              statement: 'Administer prophylaxis for VTE with prophylactic doses of UFH or LMWH in critically ill, non-bleeding patients with DIC, recognizing that there is no direct evidence of the effects of anticoagulants on DIC.',
              level: 'A',
              source: 'ISTH 2013 guidelines'
            },
            {
              statement: 'Avoid administering UFH or LMWH in patients with DIC except for thromboembolic prophylaxis in patients at high risk not having active bleeding.',
              level: 'D',
              source: 'SISET 2012 guidelines'
            }
          ]
        },
        {
          title: 'Therapeutic Procedures',
          id: 'therapeutic-procedures',
          content: [],
          subsections: [
            {
              title: 'Indications for Transfusion Therapy',
              id: 'transfusion-therapy-indications',
              content: [
                {
                  statement: 'Consider performing transfusion (platelets, plasma, cryoprecipitate) in patients with DIC and active bleeding.',
                  level: 'C',
                  source: 'SISET 2012 guidelines'
                },
                {
                  statement: 'Avoid performing transfusion solely based on laboratory parameters in patients with chronic DIC or without active bleeding.',
                  level: 'D',
                  source: 'SISET 2012 guidelines'
                }
              ]
            },
            {
              title: 'Platelet Transfusion',
              id: 'platelet-transfusion',
              content: [
                {
                  statement: 'Administer platelets in patients with DIC with active bleeding and a platelet count of < 50×10⁹/L or in patients at high risk of bleeding and a platelet count of < 20×10⁹/L.',
                  level: 'B',
                  source: 'ISTH 2013 guidelines'
                },
                {
                  statement: 'Do not rely primarily on laboratory results to administer platelets or plasma (components) in patients with DIC. Reserve it for patients presenting with bleeding.',
                  level: 'D',
                  source: 'BCSH 2009 guidelines'
                }
              ]
            },
            {
              title: 'FFP Transfusion',
              id: 'ffp-transfusion',
              content: [
                {
                  statement: 'Consider administering FFP in patients with active bleeding with either prolonged PT/aPTT (> 1.5 times normal) or decreased fibrinogen (< 1.5 g/dL). Consider administering FFP in patients with DIC requiring an invasive procedure with similar laboratory abnormalities.',
                  level: 'C',
                  source: 'ISTH 2013 guidelines'
                },
                {
                  statement: 'Consider administering FFP in bleeding patients with DIC and prolonged PT and aPTT.',
                  level: 'C',
                  source: 'BCSH 2009 guidelines'
                }
              ]
            },
            {
              title: 'Plasmapheresis',
              id: 'plasmapheresis',
              content: [
                {
                  statement: 'Avoid performing plasma exchange in patients with sepsis and DIC.',
                  level: 'D',
                  source: 'SISET 2012 guidelines'
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
              statement: 'Consider administering platelets to maintain a platelet count > 50×10⁹/L in patients with DIC and active bleeding.',
              level: 'C',
              source: 'ISTH 2015 guidelines'
            }
          ]
        },
        {
          title: 'Follow-up and Surveillance',
          id: 'follow-up-surveillance',
          content: [
            {
              statement: 'Obtain repeated tests to monitor the dynamic changes based on laboratory results and clinical observations.',
              level: 'B',
              source: 'ISTH 2013 guidelines'
            }
          ]
        }
      ]
    },
    references: [
      {
        id: 1,
        authors: 'Balwinder Singh, Andrew C Hanson, Rabe Alhurani et al.',
        title: 'Trends in the incidence and outcomes of disseminated intravascular coagulation in critically ill patients (2004-2010): a population-based study',
        journal: 'Chest. 2013 May;143(5):1235-1242',
        year: '2013',
        link: 'https://pubmed.ncbi.nlm.nih.gov/23139140/'
      },
      {
        id: 2,
        authors: 'Hideo Wada, Takeshi Matsumoto, Yoshiki Yamashita',
        title: 'Diagnosis and treatment of disseminated intravascular coagulation (DIC) according to four DIC guidelines',
        journal: 'J Intensive Care. 2014 Feb 20;2(1):15',
        year: '2014',
        link: 'https://pubmed.ncbi.nlm.nih.gov/25520831/'
      },
      {
        id: 3,
        authors: 'Chrysoula Papageorgiou, Georges Jourdi, Eusebe Adjambri et al.',
        title: 'Disseminated Intravascular Coagulation: An Update on Pathogenesis, Diagnosis, and Therapeutic Strategies',
        journal: 'Clin Appl Thromb Hemost. 2018 Dec;24(9_suppl):8S-28S',
        year: '2018',
        link: 'https://pubmed.ncbi.nlm.nih.gov/30296833/'
      },
      {
        id: 4,
        authors: 'Yukiko Kimura, Jennifer E Weiss, Kathryn L Haroldson et al.',
        title: 'Pulmonary hypertension and other potentially fatal pulmonary complications in systemic juvenile idiopathic arthritis',
        journal: 'Arthritis Care Res (Hoboken). 2013 May;65(5):745-52',
        year: '2013',
        link: 'https://pubmed.ncbi.nlm.nih.gov/23139240/'
      },
      {
        id: 5,
        authors: 'H Wada, J Thachil, M Di Nisio et al.',
        title: 'Guidance for diagnosis and treatment of DIC from harmonization of the recommendations from three guidelines',
        journal: 'J Thromb Haemost. 2013 Feb 4',
        year: '2013',
        link: 'https://pubmed.ncbi.nlm.nih.gov/23379279/'
      },
      {
        id: 6,
        authors: 'Marcello Di Nisio, Francesco Baudo, Benilde Cosmi et al.',
        title: 'Diagnosis and treatment of disseminated intravascular coagulation: guidelines of the Italian Society for Haemostasis and Thrombosis (SISET)',
        journal: 'Thromb Res. 2012 May;129(5):e177-84',
        year: '2012',
        link: 'https://pubmed.ncbi.nlm.nih.gov/21930293/'
      },
      {
        id: 7,
        authors: 'M Levi, C H Toh, J Thachil et al.',
        title: 'Guidelines for the diagnosis and management of disseminated intravascular coagulation. British Committee for Standards in Haematology',
        journal: 'Br J Haematol. 2009 Apr;145(1):24-33',
        year: '2009',
        link: 'https://pubmed.ncbi.nlm.nih.gov/19222477/'
      },
      {
        id: 8,
        authors: 'J Thachil, A Falanga, M Levi et al.',
        title: 'Management of cancer-associated disseminated intravascular coagulation: guidance from the SSC of the ISTH',
        journal: 'J Thromb Haemost. 2015 Apr;13(4):671-5',
        year: '2015',
        link: 'https://pubmed.ncbi.nlm.nih.gov/25556711/'
      },
      {
        id: 9,
        authors: 'Bick RL',
        title: 'Disseminated intravascular coagulation: objective clinical and laboratory diagnosis, treatment, and assessment of therapeutic response',
        journal: 'Semin Thromb Hemost. 1996;22(1):69-88',
        year: '1996',
        link: 'https://pubmed.ncbi.nlm.nih.gov/8711492/'
      },
      {
        id: 10,
        authors: 'Bakhtiari K, Meijers JC, de Jonge E et al.',
        title: 'Prospective validation of the International Society of Thrombosis and Haemostasis scoring system for disseminated intravascular coagulation',
        journal: 'Crit Care Med. 2004 Dec;32(12):2416-21',
        year: '2004',
        link: 'https://pubmed.ncbi.nlm.nih.gov/15599145/'
      },
      {
        id: 11,
        authors: 'Levi M, de Jonge E, van der Poll T et al.',
        title: 'Disseminated intravascular coagulation',
        journal: 'Thromb Haemost. 1999 Aug;82(2):695-705',
        year: '1999',
        link: 'https://pubmed.ncbi.nlm.nih.gov/10605770/'
      },
      {
        id: 12,
        authors: 'Hideo Wada, Esteban C Gabazza, Hidesaku Asakura et al.',
        title: 'Comparison of diagnostic criteria for disseminated intravascular coagulation (DIC): diagnostic criteria of the International Society of Thrombosis and Hemostasis and of the Japanese Ministry of Health and Welfare for overt DIC',
        journal: 'Am J Hematol. 2003 Sep;74(1):17-22',
        year: '2003',
        link: 'https://pubmed.ncbi.nlm.nih.gov/12949885/'
      }
    ]
  },
  specialty: 'cardiology'
}; 