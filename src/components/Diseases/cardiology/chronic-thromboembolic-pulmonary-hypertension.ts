import { DiseaseData } from '../types';

export const chronicThromboembolicPulmonaryHypertensionData: DiseaseData = {
  id: 'chronic-thromboembolic-pulmonary-hypertension',
  title: 'Chronic Thromboembolic Pulmonary Hypertension',
  lastUpdated: 'May 22, 2025',
  category: 'Pulmonary Vascular Disease',
  specialty: 'cardiology',
  content: {
    background: {
      overview: {
        definition: 'Chronic thromboembolic pulmonary hypertension (CTEPH) is a rare and underdiagnosed complication of pulmonary embolism characterized by persistent perfusion defects after acute PE that can range from completely asymptomatic to established CTEPH. CTEPH is defined by the presence of pulmonary hypertension in patients with symptoms attributable to post-thrombotic deposits within pulmonary arteries.',
        pathophysiology: 'Two types of vascular lesions exist in CTEPH: proximal fibrotic obstruction in large elastic pulmonary arteries and secondary microvasculopathy in pulmonary vessels < 500 mcm. The right ventricle is less adapted in CTEPH than in idiopathic pulmonary arterial hypertension, but recovers largely after successful pulmonary endarterectomy. Morphological delineation of pulmonary and bronchial circulation is possible with CTPA, while MRI permits both anatomical visualization and semi-quantitative analysis of the extent of bronchopulmonary shunting.',
        epidemiology: 'CTEPH is a rare and underdiagnosed complication of PE and upon first presentation may be misclassified as acute PE. Persistent perfusion defects after acute PE are common, but have highly variable clinical relevance, ranging from completely asymptomatic to established CTEPH. There is insufficient evidence to suggest that CTEPD without pulmonary hypertension is an early stage of CTEPH, because of a lack of data on its natural history.',
        diseaseCourse: 'The disease course varies from asymptomatic persistent perfusion defects to progressive pulmonary hypertension with right heart failure. Early diagnosis and appropriate treatment are crucial for optimal outcomes.',
        prognosis: 'Prognosis depends on the severity of pulmonary hypertension, operability for pulmonary endarterectomy, and response to medical therapy. Successful pulmonary endarterectomy can result in significant improvement in symptoms and hemodynamics.'
      }
    },
    clinicalFindings: {
      symptoms: [
        'Dyspnea',
        'Exercise intolerance',
        'Fainting',
        'Fatigue',
        'Hemoptysis',
        'Lightheadedness'
      ],

      pastMedicalHistory: [
        'Malignancy',
        'PE (Pulmonary Embolism)',
        'Thrombophilia'
      ],
      likelihoodRatios: [
        {
          finding: 'Presence of PE findings (Chest computed tomography angiography)',
          lrPlus: '51',
          value: 'Chest computed tomography angiography findings significantly increase probability of CTEPH'
        },
        {
          finding: 'Presence of PE findings (Ventilation/perfusion scan)',
          lrPlus: '9.6',
          value: 'Ventilation/perfusion scan findings moderately increase probability of CTEPH'
        }
      ]
    },
    studies: [
      {
        title: 'CHEST-1',
        year: '2013',
        description: 'In patients with inoperable chronic thromboembolic pulmonary hypertension, or persistent or recurrent pulmonary hypertension after pulmonary endarterectomy, riociguat was superior to placebo with respect to improvement in 6-minute walk distance at week 16.',
        authors: 'Hossein-Ardeschir Ghofrani et al.',
        journal: 'N Engl J Med. 2013 Jul 25'
      }
    ],
    guidelines: {
      keySources: 'The following summarized guidelines for the evaluation and management of chronic thromboembolic pulmonary hypertension are prepared by our editorial team based on guidelines from the European Society of Cardiology (ESC/ERS 2022,2016), the European Respiratory Society (ERS 2021), the Canadian Cardiovascular Society (CCS/CTS 2020), the American Heart Association (AHA 2011), and the Canadian Thoracic Society (CTS 2010).',
      sections: [
        {
          title: 'Screening and Diagnosis',
          id: 'screening-diagnosis',
          content: [
            {
              statement: 'Consider viewing patients with symptoms attributable to post-thrombotic deposits within pulmonary arteries as having CTEPD, with or without pulmonary hypertension. Use CTEPH term in patients with pulmonary hypertension.',
              level: 'E',
              source: 'ERS 2021 guidelines'
            }
          ],
          subsections: [
            {
              title: 'Definition',
              id: 'definition',
              content: [
                {
                  statement: 'Consider viewing patients with symptoms attributable to post-thrombotic deposits within pulmonary arteries as having CTEPD, with or without pulmonary hypertension. Use CTEPH term in patients with pulmonary hypertension.',
                  level: 'E',
                  source: 'ERS 2021 guidelines'
                }
              ]
            },
            {
              title: 'Epidemiology',
              id: 'epidemiology',
              content: [
                {
                  statement: 'Recognize that CTEPH is a rare and underdiagnosed complication of PE and upon first presentation may be misclassified as acute PE.',
                  level: 'E',
                  source: 'ERS 2021 guidelines'
                },
                {
                  statement: 'Recognize that persistent perfusion defects after acute PE are common, but have highly variable clinical relevance, ranging from completely asymptomatic to established CTEPH.',
                  level: 'E',
                  source: 'ERS 2021 guidelines'
                },
                {
                  statement: 'Insufficient evidence to suggest that CTEPD without pulmonary hypertension is an early stage of CTEPH, because of a lack of data on its natural history.',
                  level: 'I',
                  source: 'ERS 2021 guidelines'
                },
                {
                  statement: 'Insufficient evidence to demonstrate any difference in CTEPH incidence in patients with VTE treated with VKAs and non-VKA OACs.',
                  level: 'I',
                  source: 'ERS 2021 guidelines'
                }
              ]
            },
            {
              title: 'Pathophysiology',
              id: 'pathophysiology',
              content: [
                {
                  statement: 'Recognize that two types of vascular lesions exist in CTEPH: Proximal fibrotic obstruction in large elastic pulmonary arteries and Secondary microvasculopathy in pulmonary vessels < 500 mcm.',
                  level: 'E',
                  source: 'ERS 2021 guidelines'
                },
                {
                  statement: 'Recognize that morphological delineation of pulmonary and bronchial circulation is possible with CTPA, while MRI permits both anatomical visualization and semi-quantitative analysis of the extent of bronchopulmonary shunting, and none of these techniques can quantify the microvasculopathy.',
                  level: 'E',
                  source: 'ERS 2021 guidelines'
                },
                {
                  statement: 'Recognize that the right ventricle is less adapted in CTEPH than in idiopathic pulmonary arterial hypertension, but recovers largely after successful pulmonary endarterectomy.',
                  level: 'E',
                  source: 'ERS 2021 guidelines'
                }
              ]
            },
            {
              title: 'Indications for Screening',
              id: 'indications-screening',
              content: [
                {
                  statement: 'Insufficient evidence to recommend screening for CTEPH in asymptomatic patients with specific risk factors.',
                  level: 'I',
                  source: 'ERS 2021 guidelines'
                },
                {
                  statement: 'Do not screen asymptomatic survivors of PE for CTEPH.',
                  level: 'D',
                  source: 'ERS/ESC 2016 guidelines'
                },
                {
                  statement: 'Avoid obtaining routine echocardiography or follow-up imaging (V/Q, CT or MRI) to screen for CTEPH in asymptomatic patients following an acute VTE.',
                  level: 'D',
                  source: 'CTS 2010 guidelines'
                }
              ]
            },
            {
              title: 'Indications for Testing',
              id: 'indications-testing',
              content: [
                {
                  statement: 'Obtain diagnostic evaluation to assess for CTEPH/CTEPD in patients with persistent or new-onset dyspnea or exercise intolerance after PE.',
                  level: 'B',
                  source: 'ERS/ESC 2022 guidelines'
                },
                {
                  statement: 'Refer symptomatic patients with mismatched perfusion lung defects beyond 3 months of anticoagulation or acute PE to a pulmonary hypertension/CTEPH center, after considering the results of echocardiography, BNP/NT-proBNP, and/or cardiopulmonary exercise testing.',
                  level: 'B',
                  source: 'ERS/ESC 2022 guidelines'
                },
                {
                  statement: 'Evaluate patients with acute PE with risk factors or radiological findings of CTEPH for early diagnosis of CTEPH.',
                  level: 'E',
                  source: 'ERS 2021 guidelines'
                },
                {
                  statement: 'Consider obtaining accurate assessment of CTPA images used to diagnose PE, individual risk factors for CTEPH, symptoms of functional limitations and/or right HF in the course of PE to identify patients at risk of CTEPH.',
                  level: 'E',
                  source: 'ERS 2021 guidelines'
                },
                {
                  statement: 'Evaluate for CTEPH in patients with PE optimally at the routine 3-month follow-up visit, but consider obtaining earlier work-up in highly symptomatic or deteriorating patients.',
                  level: 'E',
                  source: 'ERS 2021 guidelines'
                },
                {
                  statement: 'Assess for CTEPH with echocardiography and V/Q lung scan in patients with residual dyspnea or exercise intolerance after at least 3 months of uninterrupted anticoagulation post-acute PE.',
                  level: 'B',
                  source: 'CCS/CTS 2020 guidelines'
                },
                {
                  statement: 'Assess the possibility of CTEPH with initial V/Q lung scan in patients being evaluated for pulmonary hypertension.',
                  level: 'B',
                  source: 'CCS/CTS 2020 guidelines'
                },
                {
                  statement: 'Obtain evaluation for CTEPH in patients presenting with unexplained dyspnea, exercise intolerance, or clinical evidence of right-sided HF, with or without prior history of symptomatic VTE.',
                  level: 'B',
                  source: 'AHA 2011 guidelines'
                },
                {
                  statement: 'Consider obtaining echocardiography 6 weeks after an acute PE to screen for persistent pulmonary hypertension to predict the development of CTEPH.',
                  level: 'C',
                  source: 'AHA 2011 guidelines'
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
              statement: 'Obtain echocardiography as the test of choice in patients with suspected CTEPH. Consider using the Leiden CTEPH rule-out criteria to exclude the presence of CTEPH and/or to establish an alternative diagnosis.',
              level: 'E',
              source: 'ERS 2021 guidelines'
            }
          ],
          subsections: [
            {
              title: 'Echocardiography',
              id: 'echocardiography',
              content: [
                {
                  statement: 'Obtain echocardiography as the test of choice in patients with suspected CTEPH. Consider using the Leiden CTEPH rule-out criteria to exclude the presence of CTEPH and/or to establish an alternative diagnosis.',
                  level: 'E',
                  source: 'ERS 2021 guidelines'
                }
              ]
            },
            {
              title: 'Perfusion Imaging',
              id: 'perfusion-imaging',
              content: [
                {
                  statement: 'Obtain V/Q or perfusion lung scan to assess for CTEPH in patients with unexplained pulmonary hypertension.',
                  level: 'B',
                  source: 'ERS/ESC 2022 guidelines'
                },
                {
                  statement: 'Obtain V/Q scintigraphy as the most effective screening tool to exclude CTEPD. Consider obtaining V/Q SPECT over planar imaging. Consider reprojecting 3D planar images from SPECT because the transition from planar imaging to SPECT may not be easy for clinicians unfamiliar with the 3D anatomy.',
                  level: 'E',
                  source: 'ERS 2021 guidelines'
                },
                {
                  statement: 'Do not favor alternative perfusion techniques (such as dual-energy CT and magnetic resonance perfusion) over V/Q because they are more technically challenging and expensive with limited availability and lacking multicenter validation.',
                  level: 'D',
                  source: 'ERS 2021 guidelines'
                },
                {
                  statement: 'Obtain nuclear V/Q lung scanning instead of CTPA as a screening test to rule out the possibility of CTEPH in patients diagnosed with pulmonary hypertension.',
                  level: 'B',
                  source: 'CTS 2010 guidelines'
                },
                {
                  statement: 'Consider ruling out the possibility of CTEPH by a normal V/Q.',
                  level: '⁄',
                  source: 'CTS 2010 guidelines'
                },
                {
                  statement: 'Do not use the results of V/Q testing to assess the anatomical extent of potentially surgically accessible CTEPH.',
                  level: 'D',
                  source: 'CTS 2010 guidelines'
                }
              ]
            },
            {
              title: 'Pulmonary Angiography',
              id: 'pulmonary-angiography',
              content: [
                {
                  statement: 'Obtain CTPA in the evaluation of patients with suspected CTEPH.',
                  level: 'B',
                  source: 'ERS/ESC 2022 guidelines'
                },
                {
                  statement: 'Consider obtaining digital subtraction angiography in the evaluation of patients with CTEPH.',
                  level: 'C',
                  source: 'ERS/ESC 2022 guidelines'
                },
                {
                  statement: 'Obtain high-quality CTPA for the diagnosis of proximal CTEPH.',
                  level: 'E',
                  source: 'ERS 2021 guidelines'
                },
                {
                  statement: 'Do not exclude CTEPH with a negative CTPA, even if high-quality, as distal disease can be missed.',
                  level: 'D',
                  source: 'ERS 2021 guidelines'
                },
                {
                  statement: 'Insufficient evidence to recommend the routine use of cone beam CT and area detector CT, recognizing that they allow more accurate visualization of subsegmental vasculature and have been shown to be useful for procedural guidance for balloon pulmonary angioplasty.',
                  level: 'I',
                  source: 'ERS 2021 guidelines'
                },
                {
                  statement: 'Recognize that MRI is not fully integrated into the CTEPH diagnostic algorithm, because its use is heavily dependent on local practice and is routinely implemented only in a few high-volume institutions where there is clustering of expertise.',
                  level: 'E',
                  source: 'ERS 2021 guidelines'
                },
                {
                  statement: 'Consider obtaining positive CTPA routinely to assess the anatomical extent of surgically accessible CTEPH.',
                  level: 'C',
                  source: 'CTS 2010 guidelines'
                },
                {
                  statement: 'Do not rule out the presence of surgically accessible CTEPH by a negative CTPA and consider obtaining contrast pulmonary angiography.',
                  level: '⁄',
                  source: 'CTS 2010 guidelines'
                },
                {
                  statement: 'Avoid obtaining routine magnetic resonance pulmonary angiography in the preoperative assessment of patients with CTEPH.',
                  level: 'D',
                  source: 'CTS 2010 guidelines'
                }
              ]
            },
            {
              title: 'Cardiopulmonary Exercise Testing',
              id: 'cardiopulmonary-exercise-testing',
              content: [
                {
                  statement: 'Consider obtaining cardiopulmonary exercise testing to exclude the presence of CTEPH and/or to establish an alternative diagnosis.',
                  level: 'E',
                  source: 'ERS 2021 guidelines'
                },
                {
                  statement: 'Consider obtaining cardiopulmonary exercise testing and exercise-right heart catheterization to contribute to the definition of CTEPD helping to identify the main cause of exercise limitation in the presence of comorbidities and in patients without resting pulmonary hypertension.',
                  level: 'E',
                  source: 'ERS 2021 guidelines'
                }
              ]
            },
            {
              title: 'Antiphospholipid Antibodies',
              id: 'antiphospholipid-antibodies',
              content: [
                {
                  statement: 'Obtain testing for antiphospholipid syndrome in patients with CTEPH.',
                  level: 'B',
                  source: 'ERS/ESC 2022 guidelines'
                }
              ]
            }
          ]
        },
        {
          title: 'Diagnostic Procedures',
          id: 'diagnostic-procedures',
          content: [
            {
              statement: 'Perform right heart catheterization in all patients with suspected CTEPH to confirm the hemodynamic diagnosis of precapillary pulmonary hypertension and to assess the severity of pulmonary hypertension.',
              level: 'B',
              source: 'CCS/CTS 2020 guidelines'
            }
          ]
        },
        {
          title: 'Respiratory Support',
          id: 'respiratory-support',
          content: [
            {
              statement: 'Administer supplemental oxygen in patients with CTEPH exhibiting hypoxemia at rest.',
              level: '⁄',
              source: 'CTS 2010 guidelines'
            },
            {
              statement: 'Insufficient evidence to recommend for or against the use of supplemental oxygen in patients with CTEPH manifesting isolated nocturnal and/or exertional oxygen desaturation.',
              level: 'I',
              source: 'CTS 2010 guidelines'
            }
          ]
        },
        {
          title: 'Medical Management',
          id: 'medical-management',
          content: [
            {
              statement: 'Review all patients with CTEPH by a CTEPH team for the assessment of multimodal management.',
              level: 'B',
              source: 'ERS/ESC 2022 guidelines'
            }
          ],
          subsections: [
            {
              title: 'General Principles',
              id: 'general-principles',
              content: [
                {
                  statement: 'Review all patients with CTEPH by a CTEPH team for the assessment of multimodal management.',
                  level: 'B',
                  source: 'ERS/ESC 2022 guidelines'
                },
                {
                  statement: 'Consider offering a multimodality approach in patients with persistent pulmonary hypertension after pulmonary endarterectomy and in patients with inoperable CTEPH.',
                  level: 'C',
                  source: 'ERS/ESC 2022 guidelines'
                },
                {
                  statement: 'Ensure a multidisciplinary team approach considering pulmonary endarterectomy, medical therapy and balloon pulmonary angioplasty for optimal treatment of patients with CTEPH.',
                  level: 'E',
                  source: 'ERS 2021 guidelines'
                },
                {
                  statement: 'Insufficient evidence to recommend any eligibility criteria for multimodal therapy, which is dependent on the expertise and judgment of each individual CTEPH center. Conduct patient selection for multimodal therapy in expert centers through a multidisciplinary team approach.',
                  level: 'I',
                  source: 'ERS 2021 guidelines'
                },
                {
                  statement: 'Refer all potential CTEPH patients to a local expert pulmonary hypertension center for the establishment of a formal diagnosis of CTEPH and assessment for the most appropriate treatment.',
                  level: 'B',
                  source: 'CCS/CTS 2020 guidelines'
                }
              ]
            },
            {
              title: 'Pulmonary Arterial Hypertension-Specific Pharmacotherapy',
              id: 'pah-specific-pharmacotherapy',
              content: [
                {
                  statement: 'Consider initiating off-label drugs approved for pulmonary arterial hypertension in symptomatic patients with inoperable CTEPH.',
                  level: 'C',
                  source: 'ERS/ESC 2022 guidelines'
                },
                {
                  statement: 'Consider discontinuing pulmonary hypertension medications after successful balloon pulmonary angioplasty and/or pulmonary endarterectomy.',
                  level: 'E',
                  source: 'ERS 2021 guidelines'
                },
                {
                  statement: 'Consider initiating pulmonary arterial hypertension (WHO group I)-specific pharmacotherapy in patients with CTEPH unfit for surgery (because of comorbidities or patient choice) or having residual pulmonary hypertension after surgical treatment not amenable to repeat pulmonary endarterectomy at an experienced center.',
                  level: 'C',
                  source: 'AHA 2011 guidelines'
                },
                {
                  statement: 'Do not initiate pulmonary arterial hypertension (WHO group I)-specific pharmacotherapy in lieu of pulmonary endarterectomy and do not delay evaluation for pulmonary endarterectomy in patients with objectively proven CTEPH being or possibly being surgical candidates at an experienced center.',
                  level: 'D',
                  source: 'AHA 2011 guidelines'
                }
              ]
            },
            {
              title: 'sGC Stimulators',
              id: 'sgc-stimulators',
              content: [
                {
                  statement: 'Initiate riociguat, a sGC stimulator, in symptomatic patients with inoperable CTEPH.',
                  level: 'B',
                  source: 'ERS/ESC 2022 guidelines'
                },
                {
                  statement: 'Initiate riociguat monotherapy in all patients with symptomatic inoperable CTEPH.',
                  level: 'B',
                  source: 'CCS/CTS 2020 guidelines'
                }
              ]
            },
            {
              title: 'Anticoagulation',
              id: 'anticoagulation',
              content: [
                {
                  statement: 'Initiate lifelong, therapeutic doses of anticoagulation in all patients with CTEPH.',
                  level: 'B',
                  source: 'ERS/ESC 2022 guidelines'
                },
                {
                  statement: 'Initiate anticoagulation with VKAs in patients with CTEPH and antiphospholipid syndrome.',
                  level: 'B',
                  source: 'ERS/ESC 2022 guidelines'
                },
                {
                  statement: 'Consider initiating long-term anticoagulant therapy in patients with CTEPD without pulmonary hypertension on an individual basis.',
                  level: 'C',
                  source: 'ERS/ESC 2022 guidelines'
                },
                {
                  statement: 'Initiate lifelong anticoagulation, with VKAs as the mainstay of anticoagulant therapy, in patients with CTEPH.',
                  level: 'E',
                  source: 'ERS 2021 guidelines'
                },
                {
                  statement: 'Recognize that DOACs are increasingly used, with no safety issues reported yet. Do not use DOACs in patients with antiphospholipid syndrome.',
                  level: 'E',
                  source: 'ERS 2021 guidelines'
                },
                {
                  statement: 'Initiate indefinite therapeutic anticoagulation in patients with objectively proven CTEPH, if not contraindicated.',
                  level: 'B',
                  source: 'AHA 2011 guidelines'
                },
                {
                  statement: 'Initiate chronic anticoagulants in all patients with CTEPH, including patients not undergoing pulmonary endarterectomy and patients after pulmonary endarterectomy.',
                  level: 'B',
                  source: 'CTS 2010 guidelines'
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
              statement: 'Perform pulmonary endarterectomy as the treatment of choice in patients with CTEPH and fibrotic obstructions within pulmonary arteries accessible by surgery.',
              level: 'B',
              source: 'ERS/ESC 2022 guidelines'
            }
          ],
          subsections: [
            {
              title: 'Balloon Pulmonary Angioplasty',
              id: 'balloon-pulmonary-angioplasty',
              content: [
                {
                  statement: 'Consider performing balloon pulmonary angioplasty in technically operable patients with a high proportion of distal disease and an unfavorable risk-benefit ratio for pulmonary endarterectomy.',
                  level: 'C',
                  source: 'ERS/ESC 2022 guidelines'
                },
                {
                  statement: 'Perform balloon pulmonary angioplasty in technically inoperable patients or in patients with residual pulmonary hypertension after pulmonary endarterectomy and distal obstructions amenable to balloon pulmonary angioplasty.',
                  level: 'B',
                  source: 'ERS/ESC 2022 guidelines'
                },
                {
                  statement: 'Consider initiating medical therapy before balloon pulmonary angioplasty.',
                  level: 'C',
                  source: 'ERS/ESC 2022 guidelines'
                },
                {
                  statement: 'Consider performing balloon pulmonary angioplasty in patients with CTEPH ineligible for or declining pulmonary endarterectomy.',
                  level: 'C',
                  source: 'CCS/CTS 2020 guidelines'
                },
                {
                  statement: 'Consider performing balloon pulmonary angioplasty to improve pulmonary hemodynamics, WHO functional class and exercise capacity in patients with surgically accessible CTEPH ineligible for pulmonary endarterectomy.',
                  level: 'C',
                  source: 'CTS 2010 guidelines'
                }
              ]
            },
            {
              title: 'Pulmonary Endarterectomy',
              id: 'pulmonary-endarterectomy',
              content: [
                {
                  statement: 'Perform pulmonary endarterectomy as the treatment of choice in patients with CTEPH and fibrotic obstructions within pulmonary arteries accessible by surgery.',
                  level: 'B',
                  source: 'ERS/ESC 2022 guidelines'
                },
                {
                  statement: 'Consider performing surgery for segmental and subsegmental disease in expert, high-volume centers, recognizing that there is probably considerable anatomical overlap between balloon pulmonary angioplasty and pulmonary endarterectomy.',
                  level: 'E',
                  source: 'ERS 2021 guidelines'
                },
                {
                  statement: 'Recognize that successful outcome after pulmonary endarterectomy is multifactorial and assumes in-hospital mortality < 5%, survival of 90% at 3 years, improved functional class and QoL.',
                  level: 'E',
                  source: 'ERS 2021 guidelines'
                },
                {
                  statement: 'Evaluate all patients with CTEPH for pulmonary endarterectomy in consultation with a pulmonary endarterectomy center.',
                  level: 'B',
                  source: 'CCS/CTS 2020 guidelines'
                },
                {
                  statement: 'Obtain prompt evaluation for pulmonary endarterectomy in patients with objectively proven CTEPH, even if symptoms are mild.',
                  level: 'B',
                  source: 'AHA 2011 guidelines'
                },
                {
                  statement: 'Perform pulmonary endarterectomy as the treatment of choice in patients with surgically-accessible CTEPH.',
                  level: 'B',
                  source: 'CTS 2010 guidelines'
                }
              ]
            },
            {
              title: 'Lung Transplantation',
              id: 'lung-transplantation',
              content: [
                {
                  statement: 'Refer patients with CTEPH with persistent severe pulmonary hypertension (NYHA class III or IV, and/or RV failure) despite maximal medical therapy for lung transplantation assessment.',
                  level: 'B',
                  source: 'CCS/CTS 2020 guidelines'
                },
                {
                  statement: 'Refer inoperable patients with CTEPH or patients experiencing residual pulmonary hypertension post-pulmonary endarterectomy and remaining in WHO functional class III or IV despite optimal medical therapy for evaluation for lung transplantation.',
                  level: 'B',
                  source: 'CTS 2010 guidelines'
                }
              ]
            }
          ]
        },
        {
          title: 'Follow-up and Surveillance',
          id: 'follow-up-surveillance',
          content: [
            {
              statement: 'Obtain long-term follow-up after pulmonary endarterectomy and balloon pulmonary angioplasty, as well as in patients with CTEPH established on medical therapy.',
              level: 'B',
              source: 'ERS/ESC 2022 guidelines'
            }
          ],
          subsections: [
            {
              title: 'Post-PEA Management, Pharmacotherapy',
              id: 'post-pea-pharmacotherapy',
              content: [
                {
                  statement: 'Initiate riociguat in symptomatic patients with persistent or recurrent pulmonary hypertension after pulmonary endarterectomy.',
                  level: 'B',
                  source: 'ERS/ESC 2022 guidelines'
                },
                {
                  statement: 'Consider initiating treprostinil SC in patients with persistent or recurrent pulmonary hypertension after pulmonary endarterectomy.',
                  level: 'C',
                  source: 'ERS/ESC 2022 guidelines'
                },
                {
                  statement: 'Initiate riociguat monotherapy in all patients with residual/recurrent CTEPH post-pulmonary endarterectomy.',
                  level: 'B',
                  source: 'CCS/CTS 2020 guidelines'
                }
              ]
            },
            {
              title: 'Post-PEA Management, Follow-up',
              id: 'post-pea-follow-up',
              content: [
                {
                  statement: 'Obtain long-term follow-up after pulmonary endarterectomy and balloon pulmonary angioplasty, as well as in patients with CTEPH established on medical therapy.',
                  level: 'B',
                  source: 'ERS/ESC 2022 guidelines'
                },
                {
                  statement: 'Consider offering long-term follow-up in a pulmonary hypertension expert center in patients with CTEPH after pulmonary endarterectomy.',
                  level: 'C',
                  source: 'CTS 2010 guidelines'
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
        authors: 'Michael R Jaff, M Sean McMurtry, Stephen L Archer et al.',
        title: 'Management of massive and submassive pulmonary embolism, iliofemoral deep vein thrombosis, and chronic thromboembolic pulmonary hypertension: a scientific statement from the American Heart Association',
        journal: 'Circulation. 2011 Apr 26;123(16):1788-830',
        year: '2011',
        link: 'https://pubmed.ncbi.nlm.nih.gov/21422387/'
      },
      {
        id: 2,
        authors: 'Marc Humbert, Gabor Kovacs, Marius M Hoeper et al.',
        title: '2022 ESC / ERS Guidelines for the diagnosis and treatment of pulmonary hypertension',
        journal: 'Eur Heart J. 2022 Oct 11;43(38):3618-3731',
        year: '2022',
        link: 'https://pubmed.ncbi.nlm.nih.gov/36017548/'
      },
      {
        id: 3,
        authors: 'Sanjay Mehta, Doug Helmersen, Steeve Provencher et al.',
        title: 'Diagnostic evaluation and management of chronic thromboembolic pulmonary hypertension: a clinical practice guideline',
        journal: 'Can Respir J. Nov-Dec 2010;17(6):301-34',
        year: '2010',
        link: 'https://pubmed.ncbi.nlm.nih.gov/21165353/'
      },
      {
        id: 4,
        authors: 'Naushad Hirani, Nathan W Brunner, Ali Kapasi et al.',
        title: 'Canadian Cardiovascular Society / Canadian Thoracic Society Position Statement on Pulmonary Hypertension',
        journal: 'Can J Cardiol. 2020 Jul;36(7):977-992',
        year: '2020',
        link: 'https://pubmed.ncbi.nlm.nih.gov/32682511/'
      },
      {
        id: 5,
        authors: 'Marion Delcroix, Adam Torbicki, Deepa Gopalan et al.',
        title: 'ERS statement on chronic thromboembolic pulmonary hypertension',
        journal: 'Eur Respir J. 2021 Jun 17;57(6):2002828',
        year: '2021',
        link: 'https://pubmed.ncbi.nlm.nih.gov/33334946/'
      },
      {
        id: 6,
        authors: 'Nazzareno Galiè, Marc Humbert, Jean-Luc Vachiery et al.',
        title: '2015 ESC / ERS Guidelines for the Diagnosis and Treatment of Pulmonary Hypertension',
        journal: 'Rev Esp Cardiol (Engl Ed). 2016 Feb;69(2):177',
        year: '2016',
        link: 'https://pubmed.ncbi.nlm.nih.gov/26837729/'
      },
      {
        id: 7,
        authors: 'Tunariu N, Gibbs SJ, Win Z et al.',
        title: 'Ventilation-perfusion scintigraphy is more sensitive than multidetector CTPA in detecting chronic thromboembolic pulmonary disease as a treatable cause of pulmonary hypertension',
        journal: 'J Nucl Med. 2007 May;48(5):680-4',
        year: '2007',
        link: 'https://pubmed.ncbi.nlm.nih.gov/17475953/'
      },
      {
        id: 8,
        authors: 'Marion Delcroix, Irene Lang, Joanna Pepke-Zaba et al.',
        title: 'Long-Term Outcome of Patients With Chronic Thromboembolic Pulmonary Hypertension: Results From an International Prospective Registry',
        journal: 'Circulation. 2016 Mar 1;133(9):859-71',
        year: '2016',
        link: 'https://pubmed.ncbi.nlm.nih.gov/26826181/'
      },
      {
        id: 9,
        authors: 'Diana Bonderman, Nika Skoro-Sajer, Johannes Jakowitsch et al.',
        title: 'Predictors of outcome in chronic thromboembolic pulmonary hypertension',
        journal: 'Circulation. 2007 Apr 24;115(16):2153-8',
        year: '2007',
        link: 'https://pubmed.ncbi.nlm.nih.gov/17420352/'
      },
      {
        id: 10,
        authors: 'Joanna Pepke-Zaba, Marion Delcroix, Irene Lang et al.',
        title: 'Chronic thromboembolic pulmonary hypertension (CTEPH): results from an international prospective registry',
        journal: 'Circulation. 2011 Nov 1;124(18):1973-81',
        year: '2011',
        link: 'https://pubmed.ncbi.nlm.nih.gov/21969018/'
      }
    ]
  }
}; 