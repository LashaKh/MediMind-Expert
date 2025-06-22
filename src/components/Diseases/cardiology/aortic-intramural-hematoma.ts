import { DiseaseData } from '../types';

export const aorticIntramuralHematomaData: DiseaseData = {
  id: 'aortic-intramural-hematoma',
  title: 'Aortic Intramural Hematoma',
  lastUpdated: 'May 21, 2025',
  category: 'Vascular Cardiology',
  content: {
    background: {
      overview: {
        definition: 'Aortic IMH is a condition characterized by bleeding within the wall of the aorta without an entrance tear.',
        pathophysiology: 'The pathophysiology of aortic IMH involves two main mechanisms: extension of aortic dissection and primary intimal tear with hematoma propagation.',
        epidemiology: 'The incidence of aortic IMH is estimated at 1.2 per 100,000 person-years.',
        diseaseCourse: 'Clinically, patients with aortic IMH often present with sudden, severe, and persistent chest or back pain. Complications include progression to aortic dissection or rupture.',
        prognosis: 'The prognosis of aortic IMH can vary based on factors such as the extent and location of the hematoma. It usually carries a lower mortality rate than aortic dissection.'
      }
    },
    clinicalFindings: {
      patientDemographics: [
        'Can affect patients of various ages',
        'Associated with cardiovascular risk factors'
      ],
      pastMedicalHistory: [
        'Aortic aneurysm',
        'Hypertension'
      ],
      symptoms: [
        'Acute back pain',
        'Sudden chest pain'
      ],
      likelihoodRatios: [
        {
          finding: 'Hypertension',
          lrPlus: 'High',
          value: 'Common presenting vital sign'
        },
        {
          finding: 'Hypotension',
          lrPlus: 'High',
          value: 'May indicate complications or rupture'
        }
      ]
    },
    guidelines: {
      keySources: 'The following summarized guidelines for the evaluation and management of aortic intramural hematoma are prepared by our editorial team based on guidelines from the European Society of Cardiology (ESC 2024), the Society of Thoracic Surgeons (STS/EACTS 2024), the American Heart Association (AHA/ACC 2022), the American Association for Thoracic Surgery (AATS 2021), and the Society for Cardiovascular Angiography and Interventions (SCAI/STS/SVM/AATS/SCA/AHA/ACR/ACC/ASA/SIR).',
      sections: [
        {
          title: 'Classification and risk stratification',
          id: 'classification-risk',
          content: [
            {
              statement: 'Consider using the TEM classification in any acute aortic syndrome to identify the disease type and establish an initial treatment strategy.',
              level: 'C',
              source: 'EACTS/STS 2024 guidelines'
            }
          ]
        },
        {
          title: 'Diagnostic investigations',
          id: 'diagnostic-investigations',
          content: [
            {
              statement: 'Obtain ECG-gated cardiovascular CT from neck to pelvis as first-line imaging technique in patients with suspected acute aortic syndrome.',
              level: 'B',
              source: 'ESC 2024 guidelines',
              subsections: [
                {
                  title: 'Aortic imaging',
                  id: 'aortic-imaging',
                  content: [
                    {
                      statement: 'Obtain ECG-gated cardiovascular CT from neck to pelvis as first-line imaging technique in patients with suspected acute aortic syndrome.',
                      level: 'B',
                      source: 'ESC 2024'
                    },
                    {
                      statement: 'Consider obtaining cardiovascular MRI as an alternative if cardiovascular CT is not available in patients with suspected acute aortic syndrome.',
                      level: 'C',
                      source: 'ESC 2024'
                    }
                  ]
                },
                {
                  title: 'Echocardiography',
                  id: 'echocardiography',
                  content: [
                    {
                      statement: 'Obtain focused TTE (with contrast if feasible) during the initial evaluation in patients with suspected acute aortic syndrome.',
                      level: 'B',
                      source: 'ESC 2024'
                    },
                    {
                      statement: 'Perform TEE to guide perioperative management and detect complications in patients with suspected acute aortic syndrome.',
                      level: 'B',
                      source: 'ESC 2024'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: 'Medical management',
          id: 'medical-management',
          content: [
            {
              statement: 'Provide medical therapy including pain relief and BP control in patients with IMH.',
              level: 'B',
              source: 'ESC 2024 guidelines',
              subsections: [
                {
                  title: 'Initial medical therapy - ESC 2024',
                  id: 'initial-medical-esc',
                  content: [
                    {
                      statement: 'Provide medical therapy including pain relief and BP control in patients with IMH.',
                      level: 'B',
                      source: 'ESC 2024'
                    },
                    {
                      statement: 'Provide medical therapy under careful surveillance in patients with type B IMH.',
                      level: 'B',
                      source: 'ESC 2024'
                    },
                    {
                      statement: 'Consider offering a wait-and-see strategy in selected patients with increased operative risk and uncomplicated type A IMH without high-risk imaging features.',
                      level: 'C',
                      source: 'ESC 2024'
                    },
                    {
                      statement: 'Administer immediate anti-impulse treatment targeting SBP < 120 mmHg and HR ≤ 60 bpm in patients with acute aortic syndrome. Maintain higher mean arterial pressure in cases of spinal ischemia or concomitant brain injury.',
                      level: 'B',
                      source: 'ESC 2024'
                    },
                    {
                      statement: 'Administer IV β-blockers (such as labetalol or esmolol) as first-line therapy. Consider adding IV vasodilators (such as dihydropyridine calcium blockers or nitrates) if necessary.',
                      level: 'B',
                      source: 'ESC 2024'
                    },
                    {
                      statement: 'Obtain invasive monitoring with an arterial line and continuous 3-lead ECG recording and admit to an ICU.',
                      level: 'B',
                      source: 'ESC 2024'
                    },
                    {
                      statement: 'Ensure adequate pain control to achieve hemodynamic targets.',
                      level: 'B',
                      source: 'ESC 2024'
                    },
                    {
                      statement: 'Consider administering a nondihydropyridine calcium blocker in case of contraindication for β-blockers.',
                      level: 'C',
                      source: 'ESC 2024'
                    },
                    {
                      statement: 'Switch to oral β-blockers and, if necessary, uptitrate other BP-lowering agents after 24 hours if gastrointestinal transit is preserved in patients with acute aortic syndrome able to be managed conservatively and achieving hemodynamic targets with IV anti-impulse therapy.',
                      level: 'B',
                      source: 'ESC 2024'
                    }
                  ]
                },
                {
                  title: 'Initial medical therapy - EACTS/STS 2024',
                  id: 'initial-medical-eacts',
                  content: [
                    {
                      statement: 'Consider offering optimal medical therapy with serial imaging in patients with type A aortic IMH in the absence of high-risk features.',
                      level: 'C',
                      source: 'EACTS/STS 2024'
                    },
                    {
                      statement: 'Offer optimal medical therapy with serial imaging in patients with acute type B aortic IMH without high-risk features.',
                      level: 'B',
                      source: 'EACTS/STS 2024'
                    },
                    {
                      statement: 'Offer optimal medical therapy with close monitoring and follow-up in patients with acute type B aortic IMH without high-risk features.',
                      level: 'B',
                      source: 'EACTS/STS 2024'
                    }
                  ]
                },
                {
                  title: 'Initial medical therapy - ACC/AHA 2022',
                  id: 'initial-medical-acc',
                  content: [
                    {
                      statement: 'Consider offering an initial or expectant approach of medical management in selected patients with uncomplicated acute type A aortic IMH at increased operative risk without high-risk imaging features.',
                      level: 'C',
                      source: 'ACC/AHA 2022'
                    },
                    {
                      statement: 'Offer medical therapy as the initial management strategy in patients with uncomplicated acute type B aortic IMH.',
                      level: 'B',
                      source: 'ACC/AHA 2022'
                    }
                  ]
                },
                {
                  title: 'Initial medical therapy - AATS 2021',
                  id: 'initial-medical-aats',
                  content: [
                    {
                      statement: 'Consider offering expectant management in patients with type A aortic IMH with significant comorbidities in the absence of high-risk features.',
                      level: 'C',
                      source: 'AATS 2021'
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
              statement: 'Educate patients about the specific risks and benefits of exercise.',
              level: 'B',
              source: 'EACTS/STS 2024 guidelines',
              subsections: [
                {
                  title: 'Physical activity',
                  id: 'physical-activity',
                  content: [
                    {
                      statement: 'Educate patients about the specific risks and benefits of exercise.',
                      level: 'B',
                      source: 'EACTS/STS 2024'
                    },
                    {
                      statement: 'Advise 30-60 minutes of mild-to-moderate dynamic exercise at least 3-4 days/week in patients with well-controlled BP.',
                      level: 'B',
                      source: 'EACTS/STS 2024'
                    },
                    {
                      statement: 'Advise avoiding intense static exercise such as heavy weightlifting or activities requiring the Valsalva maneuver, and collision sports.',
                      level: 'B',
                      source: 'EACTS/STS 2024'
                    },
                    {
                      statement: 'Offer an individual cardiac rehabilitation program under medical supervision after invasive treatment of aortic pathologies.',
                      level: 'B',
                      source: 'EACTS/STS 2024'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: 'Surgical interventions',
          id: 'surgical-interventions',
          content: [
            {
              statement: 'Perform urgent surgery in patients with type A IMH.',
              level: 'B',
              source: 'ESC 2024 guidelines',
              subsections: [
                {
                  title: 'Indications for surgery - ESC 2024',
                  id: 'surgery-indications-esc',
                  content: [
                    {
                      statement: 'Perform urgent surgery in patients with type A IMH.',
                      level: 'B',
                      source: 'ESC 2024'
                    },
                    {
                      statement: 'Consider performing surgery in patients with complicated type B IMH with unfavorable anatomy for TEVAR.',
                      level: 'C',
                      source: 'ESC 2024'
                    }
                  ]
                },
                {
                  title: 'Indications for surgery - EACTS/STS 2024',
                  id: 'surgery-indications-eacts',
                  content: [
                    {
                      statement: 'Perform emergency surgery in patients with acute type A aortic IMH with complications or high-risk features.',
                      level: 'B',
                      source: 'EACTS/STS 2024'
                    },
                    {
                      statement: 'Perform urgent aortic repair in patients with acute complicated type B aortic IMH.',
                      level: 'B',
                      source: 'EACTS/STS 2024'
                    }
                  ]
                },
                {
                  title: 'Indications for surgery - ACC/AHA 2022',
                  id: 'surgery-indications-acc',
                  content: [
                    {
                      statement: 'Perform urgent repair in patients with complicated acute type A or B aortic IMH.',
                      level: 'B',
                      source: 'ACC/AHA 2022'
                    },
                    {
                      statement: 'Perform prompt open surgical repair in patients with uncomplicated acute type A aortic IMH.',
                      level: 'B',
                      source: 'ACC/AHA 2022'
                    },
                    {
                      statement: 'Consider performing open surgical repair in patients with type B aortic IMH requiring repair of the distal aortic arch or descending thoracic aorta (zones 2-5) with unfavorable anatomy for endovascular repair.',
                      level: 'C',
                      source: 'ACC/AHA 2022'
                    },
                    {
                      statement: 'Consider performing intervention in patients with uncomplicated type B aortic IMH and high-risk imaging features.',
                      level: 'C',
                      source: 'ACC/AHA 2022'
                    },
                    {
                      statement: 'Perform elective thoracic aortic repair in patients with a previous acute aortic dissection and IMH, whether initially treated medically or with intervention, with chronic residual thoracic aortic disease and an aneurysm with a total aortic diameter ≥ 5.5 cm.',
                      level: 'B',
                      source: 'ACC/AHA 2022'
                    }
                  ]
                },
                {
                  title: 'Indications for surgery - AATS 2021',
                  id: 'surgery-indications-aats',
                  content: [
                    {
                      statement: 'Perform surgery in patients with type A aortic IMH with ≥ 1 high-risk features (aortic diameter > 50 mm, hematoma thickness > 11 mm, pericardial effusion, aortic regurgitation, ulcer-like projection).',
                      level: 'B',
                      source: 'AATS 2021'
                    }
                  ]
                },
                {
                  title: 'TEVAR - ESC 2024',
                  id: 'tevar-esc',
                  content: [
                    {
                      statement: 'Perform TEVAR in patients with complicated type B IMH.',
                      level: 'B',
                      source: 'ESC 2024'
                    },
                    {
                      statement: 'Consider performing TEVAR in patients with uncomplicated type B IMH with high-risk imaging features.',
                      level: 'C',
                      source: 'ESC 2024'
                    }
                  ]
                },
                {
                  title: 'TEVAR - EACTS/STS 2024',
                  id: 'tevar-eacts',
                  content: [
                    {
                      statement: 'Consider performing TEVAR in specialized centers, in addition to optimal medical therapy, in selected patients with acute type A aortic IMH without high-risk features but a tear in the descending aorta.',
                      level: 'C',
                      source: 'EACTS/STS 2024'
                    },
                    {
                      statement: 'Consider performing TEVAR if anatomically suitable in patients with acute type B aortic IMH with high-risk features.',
                      level: 'C',
                      source: 'EACTS/STS 2024'
                    },
                    {
                      statement: 'Consider stent-graft oversizing < 15-20% of the proximal and distal landing zone diameters in penetrating aortic ulcers.',
                      level: 'B',
                      source: 'EACTS/STS 2024'
                    },
                    {
                      statement: 'Consider stent-graft oversizing < 10% of the proximal landing zone diameter in penetrating acute aortic dissection/IMH.',
                      level: 'B',
                      source: 'EACTS/STS 2024'
                    }
                  ]
                },
                {
                  title: 'TEVAR - ACC/AHA 2022',
                  id: 'tevar-acc',
                  content: [
                    {
                      statement: 'Consider performing endovascular repair by surgeons with endovascular expertise in patients with type B aortic IMH with favorable anatomy requiring repair of the distal aortic arch or descending thoracic aorta (zones 2-5).',
                      level: 'C',
                      source: 'ACC/AHA 2022'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: 'Specific circumstances',
          id: 'specific-circumstances',
          content: [
            {
              statement: 'Provide medical therapy including pain relief and BP control in all patients with penetrating atherosclerotic ulcers.',
              level: 'B',
              source: 'ESC 2024 guidelines',
              subsections: [
                {
                  title: 'Penetrating atherosclerotic ulcer - Initial medical therapy',
                  id: 'pau-initial-medical',
                  content: [
                    {
                      statement: 'Provide medical therapy including pain relief and BP control in all patients with penetrating atherosclerotic ulcers.',
                      level: 'B',
                      source: 'ESC 2024'
                    },
                    {
                      statement: 'Provide initial medical therapy under careful surveillance in patients with type B penetrating atherosclerotic ulcers.',
                      level: 'B',
                      source: 'ESC 2024'
                    },
                    {
                      statement: 'Consider offering a wait-and-see strategy in selected patients with increased operative risk and uncomplicated type A penetrating atherosclerotic ulcers without high-risk imaging features.',
                      level: 'C',
                      source: 'ESC 2024'
                    },
                    {
                      statement: 'Consider offering conservative management with regular surveillance and medical treatment in patients with isolated, asymptomatic, small penetrating atherosclerotic ulcers with no high-risk features.',
                      level: 'C',
                      source: 'ESC 2024'
                    }
                  ]
                },
                {
                  title: 'Penetrating atherosclerotic ulcer - Indications for repair',
                  id: 'pau-repair-indications',
                  content: [
                    {
                      statement: 'Perform urgent repair in patients with penetrating atherosclerotic ulcer of the ascending aorta with associated IMH.',
                      level: 'B',
                      source: 'ACC/AHA 2022'
                    },
                    {
                      statement: 'Consider performing urgent repair in patients with penetrating atherosclerotic ulcer of the aortic arch, descending thoracic aorta, or abdominal aorta with associated IMH.',
                      level: 'C',
                      source: 'ACC/AHA 2022'
                    }
                  ]
                },
                {
                  title: 'Penetrating atherosclerotic ulcer - TEVAR',
                  id: 'pau-tevar',
                  content: [
                    {
                      statement: 'Perform TEVAR in patients with complicated type B penetrating atherosclerotic ulcer.',
                      level: 'B',
                      source: 'ESC 2024'
                    },
                    {
                      statement: 'Consider performing endovascular treatment in patients with uncomplicated type B penetrating atherosclerotic ulcer with high-risk imaging features.',
                      level: 'C',
                      source: 'ESC 2024'
                    },
                    {
                      statement: 'Consider performing TEVAR if anatomically suitable in patients with high-risk penetrating aortic ulcer located in the distal arch or descending aorta.',
                      level: 'C',
                      source: 'EACTS/STS 2024'
                    }
                  ]
                },
                {
                  title: 'Penetrating atherosclerotic ulcer - Open repair',
                  id: 'pau-open-repair',
                  content: [
                    {
                      statement: 'Perform surgery in patients with type A penetrating atherosclerotic ulcers.',
                      level: 'B',
                      source: 'ESC 2024'
                    },
                    {
                      statement: 'Consider performing surgery in patients with complicated type B penetrating atherosclerotic ulcer based on anatomy and medical comorbidities.',
                      level: 'C',
                      source: 'ESC 2024'
                    },
                    {
                      statement: 'Perform urgent aortic repair in patients with penetrating aortic ulcer located in the ascending aorta in the presence of IMH or rupture.',
                      level: 'B',
                      source: 'EACTS/STS 2024'
                    },
                    {
                      statement: 'Consider performing open surgical repair after a careful evaluation of surgical risks in patients with high-risk penetrating aortic ulcer located in the distal arch or descending aorta unsuitable for TEVAR.',
                      level: 'C',
                      source: 'EACTS/STS 2024'
                    }
                  ]
                },
                {
                  title: 'Penetrating atherosclerotic ulcer - Surveillance',
                  id: 'pau-surveillance',
                  content: [
                    {
                      statement: 'Obtain repetitive cardiovascular MRI, cardiovascular CT, or TEE in patients with uncomplicated type B penetrating atherosclerotic ulcer.',
                      level: 'B',
                      source: 'ESC 2024'
                    },
                    {
                      statement: 'Consider offering conservative management with regular surveillance and medical treatment in patients with isolated, asymptomatic, small penetrating atherosclerotic ulcer with no high-risk features.',
                      level: 'C',
                      source: 'ESC 2024'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: 'Follow-up and surveillance',
          id: 'follow-up-surveillance',
          content: [
            {
              statement: 'Obtain repetitive cardiovascular CT or cardiovascular MRI in patients with uncomplicated type B IMH.',
              level: 'B',
              source: 'ESC 2024 guidelines',
              subsections: [
                {
                  title: 'Surveillance imaging - ESC 2024',
                  id: 'surveillance-imaging-esc',
                  content: [
                    {
                      statement: 'Obtain repetitive cardiovascular CT or cardiovascular MRI in patients with uncomplicated type B IMH.',
                      level: 'B',
                      source: 'ESC 2024'
                    }
                  ]
                },
                {
                  title: 'Surveillance imaging - EACTS/STS 2024',
                  id: 'surveillance-imaging-eacts',
                  content: [
                    {
                      statement: 'Establish an individual surveillance program for patients receiving aortic pathology treatment based on disease and treatment, conducted at a specialized aortic center with a dedicated outpatient clinic.',
                      level: 'B',
                      source: 'EACTS/STS 2024'
                    },
                    {
                      statement: 'Obtain imaging-based quality control after every open or endovascular aortic procedure, regardless of the treated segment, before discharge.',
                      level: 'B',
                      source: 'EACTS/STS 2024'
                    },
                    {
                      statement: 'Obtain TTE as the imaging modality after any type of root surgery.',
                      level: 'B',
                      source: 'EACTS/STS 2024'
                    },
                    {
                      statement: 'Obtain CTA surveillance after 6 months and 12 months, and if conditions are stable, annually for the next 5 years in patients treated for acute aortic dissection or IMH, regardless of treatment modality.',
                      level: 'B',
                      source: 'EACTS/STS 2024'
                    },
                    {
                      statement: 'Obtain CTA surveillance after 6 months and 12 months, and if conditions are stable, annually for the next 5 years in patients treated with endovascular treatment, regardless of the underlying aortic disease.',
                      level: 'B',
                      source: 'EACTS/STS 2024'
                    },
                    {
                      statement: 'Obtain imaging surveillance after 12 months and 24 months, and if conditions are stable, extend surveillance thereafter in patients treated with open surgical treatment for non-aortic dissection or IMH pathologies.',
                      level: 'B',
                      source: 'EACTS/STS 2024'
                    },
                    {
                      statement: 'Consider extending surveillance intervals after 5 years based on an individual protocol in patients with stable aortic conditions.',
                      level: 'C',
                      source: 'EACTS/STS 2024'
                    }
                  ]
                },
                {
                  title: 'Surveillance imaging - ACC/AHA 2022',
                  id: 'surveillance-imaging-acc',
                  content: [
                    {
                      statement: 'Obtain surveillance CT or MRI after 1 month, 6 months, and 12 months and then, if stable, annually thereafter in patients experienced acute aortic dissection and IMH managed with medical therapy alone.',
                      level: 'B',
                      source: 'ACC/AHA 2022'
                    },
                    {
                      statement: 'Obtain surveillance CT or MRI after 1 month, 6 months, and 12 months and then, if stable, annually thereafter in patients experienced acute aortic dissection and IMH treated with either open or endovascular aortic repair and having a residual aortic disease.',
                      level: 'B',
                      source: 'ACC/AHA 2022'
                    }
                  ]
                },
                {
                  title: 'Surveillance imaging - AATS/ACC/ACR/SVM 2010',
                  id: 'surveillance-imaging-aats',
                  content: [
                    {
                      statement: 'Consider obtaining surveillance imaging using the schedules established for aortic dissection in patients with aortic IMH.',
                      level: 'C',
                      source: 'AATS/ACC/ACR/SVM 2010'
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
        authors: 'Carlos Ferrera, Isidre Vilacosta, Beatriz Cabeza et al.',
        title: 'Diagnosing Aortic Intramural Hematoma: Current Perspectives',
        journal: 'Vasc Health Risk Manag. 2020 Jun 8:16:203-213',
        year: '2020',
        link: 'https://pubmed.ncbi.nlm.nih.gov/32606810/'
      },
      {
        id: 2,
        authors: 'Joshua B Goldberg, Joon Bum Kim, Thoralf M Sundt',
        title: 'Current understandings and approach to the management of aortic intramural hematomas',
        journal: 'Semin Thorac Cardiovasc Surg. 2014 Summer;26(2):123-31',
        year: '2014',
        link: 'https://pubmed.ncbi.nlm.nih.gov/25441018/'
      },
      {
        id: 3,
        authors: 'Randall R DeMartino, Indrani Sen, Ying Huang et al.',
        title: 'Population-Based Assessment of the Incidence of Aortic Dissection, Intramural Hematoma, and Penetrating Ulcer, and Its Associated Mortality From 1995 to 2015',
        journal: 'Circ Cardiovasc Qual Outcomes. 2018 Aug;11(8):e004689',
        year: '2018',
        link: 'https://pubmed.ncbi.nlm.nih.gov/30354459/'
      },
      {
        id: 4,
        authors: 'Yskert von Kodolitsch, Susanne K Csösz, Dietmar H Koschyk et al.',
        title: 'Intramural hematoma of the aorta: predictors of progression to dissection and rupture',
        journal: 'Circulation. 2003 Mar 4;107(8):1158-63',
        year: '2003',
        link: 'https://pubmed.ncbi.nlm.nih.gov/12615795/'
      },
      {
        id: 5,
        authors: 'Kevin M Harris, Alan C Braverman, Kim A Eagle et al.',
        title: 'Acute aortic intramural hematoma: an analysis from the International Registry of Acute Aortic Dissection',
        journal: 'Circulation. 2012 Sep 11;126(11 Suppl 1):S91-6',
        year: '2012',
        link: 'https://pubmed.ncbi.nlm.nih.gov/22965997/'
      },
      {
        id: 6,
        authors: 'Lucia Mazzolai, Gisela Teixido-Tura, Stefano Lanzi et al.',
        title: '2024 ESC Guidelines for the management of peripheral arterial and aortic diseases',
        journal: 'Eur Heart J. 2024 Aug 30:ehae179',
        year: '2024',
        link: 'https://pubmed.ncbi.nlm.nih.gov/39210710/'
      },
      {
        id: 7,
        authors: 'Eric M Isselbacher, Ourania Preventza, James Hamilton Black rd et al.',
        title: '2022 ACC / AHA Guideline for the Diagnosis and Management of Aortic Disease: A Report of the American Heart Association / American College of Cardiology Joint Committee on Clinical Practice Guidelines',
        journal: 'Circulation. 2022 Dec 13;146(24):e334-e482',
        year: '2022',
        link: 'https://pubmed.ncbi.nlm.nih.gov/36322642/'
      },
      {
        id: 8,
        authors: 'Loren F Hiratzka, George L Bakris, Joshua A Beckman et al.',
        title: '2010 ACCF / AHA / AATS / ACR / ASA / SCA / SCAI / SIR / STS / SVM guidelines for the diagnosis and management of patients with Thoracic Aortic Disease: a report of the American College of Cardiology Foundation / American Heart Association Task Force on Practice Guidelines, American Association for Thoracic Surgery, American College of Radiology, American Stroke Association, Society of Cardiovascular Anesthesiologists, Society for Cardiovascular Angiography and Interventions, Society of Interventional Radiology, Society of Thoracic Surgeons, and Society for Vascular Medicine',
        journal: 'Circulation. 2010 Apr 6;121(13):e266-369',
        year: '2010',
        link: 'https://pubmed.ncbi.nlm.nih.gov/20233780/'
      },
      {
        id: 9,
        authors: 'Martin Czerny, Martin Grabenwöger, Tim Berger et al.',
        title: 'EACTS / STS Guidelines for diagnosing and treating acute and chronic syndromes of the aortic organ',
        journal: 'Eur J Cardiothorac Surg. 2024 Feb 1;65(2):ezad426',
        year: '2024',
        link: 'https://pubmed.ncbi.nlm.nih.gov/38195113/'
      },
      {
        id: 10,
        authors: 'S Christopher Malaisrie, Wilson Y Szeto, Monika Halas et al.',
        title: '2021 The American Association for Thoracic Surgery expert consensus document: Surgical treatment of acute type A aortic dissection',
        journal: 'J Thorac Cardiovasc Surg. 2021 Sep;162(3):735-758.e2',
        year: '2021',
        link: 'https://pubmed.ncbi.nlm.nih.gov/34119295/'
      }
    ]
  },
  specialty: 'cardiology'
};