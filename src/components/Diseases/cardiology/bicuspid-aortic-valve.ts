import type { DiseaseData } from '../types';

export const bicuspidAorticValveData: DiseaseData = {
  id: 'bicuspid-aortic-valve',
  title: 'Bicuspid Aortic Valve',
  lastUpdated: 'May 31, 2025',
  category: 'Valvular Heart Disease',
  specialty: 'cardiology',
  content: {
    background: {
      overview: {
        definition: 'BAV is a common congenital cardiac abnormality consisting of two cusps instead of three that is characterized by dilatation of the thoracic aorta.',
        pathophysiology: 'The exact cause of BAV is unknown; however, genetic causes (Anderson syndrome, NOTCH1 mutation) have been implicated.',
        epidemiology: '',
        diseaseCourse: 'The fusion of the aortic cusps during valvulogenesis results in the BAV, which can cause clinical manifestations of severe aortic stenosis (symptoms of dyspnea, syncope, and chest pain), aortic regurgitation, aortic incompetence, aortopathy leading to aneurysm and dissection, infective endocarditis to asymptomatic disease.',
        prognosis: 'BAV in patients with definite infective endocarditis of the native aortic valve is associated with a 9% in-hospital mortality.'
      }
    },
    guidelines: {
      keySources: 'The following summarized guidelines for the evaluation and management of bicuspid aortic valve are prepared by our editorial team based on guidelines from the European Society of Cardiology (ESC 2024,2014), the American Heart Association (AHA/ACC 2022,2021), the European Society of Cardiology (ESC/EACTS 2022), and the Society of Thoracic Surgeons (STS 2013).',
      sections: [
        {
          title: 'Screening and Diagnosis',
          id: 'screening-diagnosis',
          content: [
            {
              statement: 'Obtain TTE and cardiac MRI at the time of diagnosis to evaluate for BAV, aortic root and ascending aortic dilation, aortic coarctation, and other congenital heart defects in patients with Turner syndrome.',
              level: 'B',
              source: 'ACC/AHA 2022'
            }
          ],
          subsections: [
            {
              title: 'Screening of Family Relatives',
              id: 'family-screening',
              content: [
                {
                  statement: 'Obtain screening with TTE in first-degree relatives of patients with BAV with root phenotype aortopathy and/or isolated aortic regurgitation.',
                  level: 'B',
                  source: 'ESC 2024'
                },
                {
                  statement: 'Consider obtaining screening with TTE in first-degree relatives of all patients with BAV.',
                  level: 'C',
                  source: 'ESC 2024'
                },
                {
                  statement: 'Screen all first-degree relatives of patients with BAV and a dilated aortic root or ascending aorta by TTE to evaluate for the presence of BAV, dilation of the aortic root and ascending aorta, or both. Obtain a cardiac-gated CT or MRI of the thoracic aorta if the diameter and morphology of the aortic root, ascending aorta, or both cannot be assessed accurately or completely by TTE.',
                  level: 'B',
                  source: 'ACC/AHA 2022'
                },
                {
                  statement: 'Consider screening all first-degree relatives of patients with BAV by TTE to evaluate for the presence of a BAV, dilation of the aortic root and ascending aorta, or both.',
                  level: 'C',
                  source: 'ACC/AHA 2022'
                },
                {
                  statement: 'Consider obtaining screening with TTE to look for the presence of a BAV or asymptomatic dilation of the aortic sinuses and ascending aorta in first-degree relatives of patients with a known BAV.',
                  level: 'C',
                  source: 'ACC/AHA 2021'
                }
              ]
            }
          ]
        },
        {
          title: 'Diagnostic Investigations',
          id: 'diagnostic-investigations',
          content: [],
          subsections: [
            {
              title: 'TTE (Transthoracic Echocardiography)',
              id: 'tte',
              content: [
                {
                  statement: 'Obtain an initial TTE to assess diameters of the aorta at several levels when a BAV is first diagnosed.',
                  level: 'B',
                  source: 'ESC 2024'
                },
                {
                  statement: 'Obtain TTE to evaluate valve morphology and function, the diameter of the aortic root and ascending aorta, and to evaluate for aortic coarctation and other associated cardiovascular defects in patients with BAV.',
                  level: 'B',
                  source: 'ACC/AHA 2022'
                },
                {
                  statement: 'Obtain TTE in patients with a known BAV in order to: Evaluate valve morphology, Measure the severity of aortic stenosis and aortic regurgitation, Assess the shape and diameter of the aortic sinuses and ascending aorta, Evaluate for the presence of aortic coarctation for prediction of clinical outcome, Determine the timing of intervention.',
                  level: 'B',
                  source: 'ACC/AHA 2021'
                }
              ]
            },
            {
              title: 'CT/MRI',
              id: 'ct-mri',
              content: [
                {
                  statement: 'Obtain cardiovascular CT or cardiovascular MRI of the entire thoracic aorta at first diagnosis or when the diameter of the aorta is > 45 mm.',
                  level: 'B',
                  source: 'ESC 2024'
                },
                {
                  statement: 'Obtain CT or MRI of the thoracic aorta in patients with BAV when the diameter and morphology of the aortic root, ascending aorta, or both cannot be assessed accurately or completely by TTE.',
                  level: 'B',
                  source: 'ACC/AHA 2022'
                },
                {
                  statement: 'Obtain cardiac MRA or CTA in patients with BAV if the morphology of the aortic sinuses, sinotubular junction, or ascending aorta cannot be assessed accurately or fully by echocardiography.',
                  level: 'B',
                  source: 'ACC/AHA 2021'
                }
              ]
            },
            {
              title: 'Genetic Testing',
              id: 'genetic-testing',
              content: [
                {
                  statement: 'Obtain genetic testing in patients with BAV and either heritable thoracic aortic disease or phenotypic features concerning for Loeys-Dietz syndrome.',
                  level: 'B',
                  source: 'ACC/AHA 2022'
                }
              ]
            }
          ]
        },
        {
          title: 'Medical Management',
          id: 'medical-management',
          content: [],
          subsections: [
            {
              title: 'Beta-blockers',
              id: 'beta-blockers',
              content: [
                {
                  statement: 'Consider initiating β-blockers in patients with BAV and dilated aortic root > 40 mm.',
                  level: 'C',
                  source: 'ESC 2014'
                }
              ]
            }
          ]
        },
        {
          title: 'Nonpharmacologic Interventions',
          id: 'nonpharmacologic-interventions',
          content: [],
          subsections: [
            {
              title: 'Exercise Restrictions',
              id: 'exercise-restrictions',
              content: [
                {
                  statement: 'Advise avoiding isometric exercise with a high static load (such as weightlifting) in patients with any elastopathy or BAV with dilated aortic root (> 40 mm).',
                  level: 'B',
                  source: 'ESC 2014'
                }
              ]
            }
          ]
        },
        {
          title: 'Surgical Interventions',
          id: 'surgical-interventions',
          content: [],
          subsections: [
            {
              title: 'Indications for Aortic Replacement or Repair',
              id: 'aortic-replacement-repair',
              content: [
                {
                  statement: 'Perform surgery for bicuspid aortopathy when the maximum aortic diameter is ≥ 55 mm.',
                  level: 'B',
                  source: 'ESC 2024'
                },
                {
                  statement: 'Perform surgery for bicuspid aortopathy of the root phenotype when the maximum aortic diameter is ≥ 50 mm.',
                  level: 'B',
                  source: 'ESC 2024'
                },
                {
                  statement: 'Consider performing surgery for bicuspid aortopathy of ascending phenotype when the maximum aortic diameter is > 52 mm in patients with low surgical risk.',
                  level: 'C',
                  source: 'ESC 2024'
                },
                {
                  statement: 'Consider performing surgery for bicuspid aortopathy at a root or ascending diameter ≥ 45 mm in patients undergoing aortic valve surgery.',
                  level: 'C',
                  source: 'ESC 2024'
                },
                {
                  statement: 'Consider performing surgery at a maximum diameter ≥ 50 mm in patients with low surgical risk and ascending phenotype bicuspid aortopathy in case of any of the following: Age < 50 years, Shorter stature, Ascending aortic length ≥ 11 cm, Aortic diameter growth rate ≥ 3 mm per year, Family history of acute aortic syndrome, Aortic coarctation, Resistant hypertension, Concomitant non-aortic valve cardiac surgery, Desire for pregnancy.',
                  level: 'C',
                  source: 'ESC 2024'
                },
                {
                  statement: 'Perform surgery to replace the aortic root, ascending aorta, or both, in patients with BAV and a diameter of the aortic root, ascending aorta, or both, of ≥ 55 mm.',
                  level: 'B',
                  source: 'ACC/AHA 2022'
                },
                {
                  statement: 'Consider performing surgery to replace the aortic root, ascending aorta, or both, by experienced surgeons in a multidisciplinary aortic team in patients with BAV and a cross-sectional aortic root or ascending aortic area (cm²) to height (meters) ratio of ≥ 10 cm²/m.',
                  level: 'C',
                  source: 'ACC/AHA 2022'
                },
                {
                  statement: 'Consider performing surgery to replace the aortic root, ascending aorta, or both, by experienced surgeons in a multidisciplinary aortic team in patients with BAV, a diameter of the aortic root or ascending aorta of 50-54 mm, and an additional risk factor for aortic dissection.',
                  level: 'C',
                  source: 'ACC/AHA 2022'
                },
                {
                  statement: 'Consider performing concomitant replacement of the aortic root, ascending aorta, or both, by experienced surgeons in a multidisciplinary aortic team in patients with BAV undergoing surgical aortic valve repair or replacement and having a diameter of the aortic root or ascending aorta of ≥ 45 mm.',
                  level: 'C',
                  source: 'ACC/AHA 2022'
                },
                {
                  statement: 'Consider performing surgery to replace the aortic root, ascending aorta, or both, by experienced surgeons in a multidisciplinary aortic team in patients with BAV, a diameter of the aortic root or ascending aorta of 50-54 mm, no other risk factors for aortic dissection, and at low surgical risk.',
                  level: 'C',
                  source: 'ACC/AHA 2022'
                },
                {
                  statement: 'Perform valve-sparing aortic root replacement in young patients with aortic root dilation, if performed at an experienced center and durable results are expected.',
                  level: 'B',
                  source: 'EACTS/ESC 2022'
                },
                {
                  statement: 'Consider performing ascending aortic surgery in patients with BAV with additional risk factors or coarctation and maximal ascending aortic diameter ≥ 50 mm.',
                  level: 'C',
                  source: 'EACTS/ESC 2022'
                },
                {
                  statement: 'Consider performing replacement of the aortic root or tubular ascending aorta with a diameter ≥ 45 mm when surgery is primarily indicated for the aortic valve.',
                  level: 'C',
                  source: 'EACTS/ESC 2022'
                },
                {
                  statement: 'Perform operative intervention to replace the aortic sinuses and/or the ascending aorta in asymptomatic or symptomatic patients with BAV and a diameter of the aortic sinuses or ascending aorta > 55 mm.',
                  level: 'B',
                  source: 'ACC/AHA 2021'
                },
                {
                  statement: 'Consider performing operative intervention, if performed at a comprehensive valve center, to replace the aortic sinuses and/or the ascending aorta in asymptomatic patients with BAV, a diameter of the aortic sinuses or ascending aorta of 50-55 mm, and an additional risk factor for dissection (such as family history of aortic dissection, aortic growth rate > 5 mm/year, aortic coarctation).',
                  level: 'C',
                  source: 'ACC/AHA 2021'
                },
                {
                  statement: 'Consider performing replacement of the aortic sinuses and/or ascending aorta, if performed at a comprehensive valve center, in patients with BAV with indications for SAVR and a diameter of the aortic sinuses or ascending aorta ≥ 45 mm.',
                  level: 'C',
                  source: 'ACC/AHA 2021'
                },
                {
                  statement: 'Consider performing valve sparing surgery, if performed at a comprehensive valve center, in patients with BAV meeting criteria for replacement of the aortic sinuses.',
                  level: 'C',
                  source: 'ACC/AHA 2021'
                },
                {
                  statement: 'Consider performing operative intervention, if performed at a comprehensive valve center, to replace the aortic sinuses and/or the ascending aorta in asymptomatic patients with BAV, low surgical risk, a diameter of the aortic sinuses or ascending aorta of 50-55 mm and without additional risk factors for dissection.',
                  level: 'C',
                  source: 'ACC/AHA 2021'
                },
                {
                  statement: 'Consider performing aortic valve repair, if performed at a comprehensive valve center, in selected patients with BAV and severe aortic regurgitation meeting criteria for aortic valve replacement.',
                  level: 'C',
                  source: 'ACC/AHA 2021'
                },
                {
                  statement: 'Consider performing TAVI as an alternative to SAVR after consideration of patient-specific procedural risks, values, trade-offs, and preference in patients with BAV and symptomatic, severe aortic stenosis.',
                  level: 'C',
                  source: 'ACC/AHA 2021'
                }
              ]
            }
          ]
        },
        {
          title: 'Specific Circumstances',
          id: 'specific-circumstances',
          content: [],
          subsections: [
            {
              title: 'Pregnant Patients',
              id: 'pregnant-patients',
              content: [
                {
                  statement: 'Obtain aortic imaging (TTE, MRI or CT, or both as appropriate) before pregnancy to determine aortic diameters in patients with BAV with aortic dilation.',
                  level: 'B',
                  source: 'ACC/AHA 2022'
                },
                {
                  statement: 'Counsel patients with BAV and aortic dilation contemplating pregnancy about the risks of aortic dissection related to pregnancy.',
                  level: 'B',
                  source: 'ACC/AHA 2022'
                },
                {
                  statement: 'Perform surgery before pregnancy in patients with BAV (in the absence of Turner syndrome or a heritable thoracic aortic disease) and an aortic diameter of ≥ 50 mm.',
                  level: 'B',
                  source: 'ACC/AHA 2022'
                }
              ]
            }
          ]
        },
        {
          title: 'Follow-up and Surveillance',
          id: 'followup-surveillance',
          content: [],
          subsections: [
            {
              title: 'Follow-up Aortic Imaging',
              id: 'followup-imaging',
              content: [
                {
                  statement: 'Obtain surveillance serial imaging by TTE in patients with BAV with a maximum aortic diameter > 40 mm, either with no indication for surgery or after isolated aortic valve surgery, after 1 year, then if stable, every 2-3 years.',
                  level: 'B',
                  source: 'ESC 2024'
                },
                {
                  statement: 'Obtain cardiovascular CT or cardiovascular MRI of the entire thoracic aorta when important discrepancies in measurements are found between subsequent TTE controls during surveillance.',
                  level: 'B',
                  source: 'ESC 2024'
                },
                {
                  statement: 'Obtain lifelong surveillance imaging of the aortic root and ascending aorta by TTE, CT, or MRI at an interval dependent on the aortic diameter and rate of growth in patients with BAV and a diameter of the aortic root, ascending aorta, or both, of ≥ 40 mm, including patients undergone previous aortic valve repair or replacement.',
                  level: 'B',
                  source: 'ACC/AHA 2022'
                },
                {
                  statement: 'Consider obtaining lifelong serial evaluation of the size and morphology of the aortic sinuses and ascending aorta by echocardiography, cardiac magnetic resonance or CTA in patients with BAV and a diameter of the aortic sinuses or ascending aorta > 40 mm, with an examination interval determined by the degree and rate of the progression of aortic dilation and by family history.',
                  level: 'C',
                  source: 'ACC/AHA 2021'
                },
                {
                  statement: 'Consider obtaining continued lifelong serial interval imaging of the aorta in patients with BAV undergoing aortic valve replacement, if the diameter of the aortic sinuses or ascending aorta is ≥ 40 mm.',
                  level: 'C',
                  source: 'ACC/AHA 2021'
                }
              ]
            },
            {
              title: 'Pharmacotherapy After Valve Repair or Replacement',
              id: 'pharmacotherapy-post-surgery',
              content: [
                {
                  statement: 'Consider initiating postoperative β-blockers after bicuspid valve repair.',
                  level: 'B',
                  source: 'STS 2013'
                },
                {
                  statement: 'Consider initiating ACEis in patients with low ejection fraction postoperatively.',
                  level: 'B',
                  source: 'STS 2013'
                },
                {
                  statement: 'Administer prophylactic antibiotics for invasive procedures, including dental procedures, after bicuspid valve repair.',
                  level: 'B',
                  source: 'STS 2013'
                }
              ]
            }
          ]
        }
      ]
    },
    clinicalFindings: {
      patientDemographics: [
        'Male sex'
      ],
      pastMedicalHistory: [
        'Coarctation of aorta',
        'Congenital heart disease',
        'Ehlers-Danlos syndrome',
        'Infective endocarditis',
        'Loeys-Dietz syndrome',
        'Marfan syndrome',
        'Thoracic aortic aneurysm',
        'Thoracic aortic dissection',
        'Turner syndrome',
        'Williams syndrome'
      ],
      symptoms: [
        'Chest pain on exertion',
        'Dyspnea',
        'Fainting',
        'Fatigue',
        'Lightheadedness',
        'Palpitations'
      ]
    },
    studies: [
      {
        title: 'Dexmedetomidine for Postoperative Delirium',
        year: '2023',
        description: 'In adult ICU patients undergoing cardiac surgery, dexmedetomidine was superior to propofol with respect to duration of mechanical ventilation.',
        authors: 'M Preveden et al.',
        journal: 'Eur Rev Med Pharmacol Sci. 2023 Aug.'
      }
    ],
    references: [
      {
        id: 1,
        authors: 'Ify Mordi, Nikolaos Tzemos',
        title: 'Bicuspid aortic valve disease: a comprehensive review',
        journal: 'Cardiol Res Pract. 2012:2012:196037',
        year: '2012',
        link: 'https://pubmed.ncbi.nlm.nih.gov/22685681/'
      },
      {
        id: 2,
        authors: 'Stefanos Sakellaropoulos, Muhemin Mohammed, Stefano Svab et al.',
        title: 'Causes, Diagnosis, Risk Stratification and Treatment of Bicuspid Aortic Valve Disease: An Updated Review',
        journal: 'Cardiol Res. 2020 Aug;11(4):205-212',
        year: '2020',
        link: 'https://pubmed.ncbi.nlm.nih.gov/32595804/'
      },
      {
        id: 3,
        authors: 'Gokhan Kahveci, Fatih Bayrak, Selcuk Pala et al.',
        title: 'Impact of bicuspid aortic valve on complications and death in infective endocarditis of native aortic valves',
        journal: 'Tex Heart Inst J. 2009;36(2):111-6',
        year: '2009',
        link: 'https://pubmed.ncbi.nlm.nih.gov/19436803/'
      },
      {
        id: 4,
        authors: 'Eric M Isselbacher, Ourania Preventza, James Hamilton Black rd et al.',
        title: '2022 ACC / AHA Guideline for the Diagnosis and Management of Aortic Disease: A Report of the American Heart Association / American College of Cardiology Joint Committee on Clinical Practice Guidelines',
        journal: 'Circulation. 2022 Dec 13;146(24):e334-e482',
        year: '2022',
        link: 'https://pubmed.ncbi.nlm.nih.gov/36322642/'
      },
      {
        id: 5,
        authors: 'Catherine M Otto, Rick A Nishimura, Robert O Bonow et al.',
        title: '2020 ACC / AHA guideline for the management of patients with valvular heart disease: A report of the American College of Cardiology / American Heart Association Joint Committee on Clinical Practice Guidelines',
        journal: 'J Thorac Cardiovasc Surg. 2021 Aug;162(2):e183-e353',
        year: '2021',
        link: 'https://pubmed.ncbi.nlm.nih.gov/33972115/'
      },
      {
        id: 6,
        authors: 'Lucia Mazzolai, Gisela Teixido-Tura, Stefano Lanzi et al.',
        title: '2024 ESC Guidelines for the management of peripheral arterial and aortic diseases',
        journal: 'Eur Heart J. 2024 Aug 30:ehae179',
        year: '2024',
        link: 'https://pubmed.ncbi.nlm.nih.gov/39210722/'
      },
      {
        id: 7,
        authors: 'Raimund Erbel, Victor Aboyans, Catherine Boileau et al.',
        title: '2014 ESC Guidelines on the diagnosis and treatment of aortic diseases: Document covering acute and chronic aortic diseases of the thoracic and abdominal aorta of the adult. The Task Force for the Diagnosis and Treatment of Aortic Diseases of the European Society of Cardiology (ESC)',
        journal: 'Eur Heart J. 2014 Nov 1;35(41):2873-926',
        year: '2014',
        link: 'https://pubmed.ncbi.nlm.nih.gov/25173340/'
      },
      {
        id: 8,
        authors: 'Alec Vahanian, Friedhelm Beyersdorf, Fabien Praz et al.',
        title: '2021 ESC / EACTS Guidelines for the management of valvular heart disease',
        journal: 'Eur Heart J. 2022 Feb 12;43(7):561-632',
        year: '2022',
        link: 'https://pubmed.ncbi.nlm.nih.gov/34453165/'
      },
      {
        id: 9,
        authors: 'Svensson LG, Adams DH, Bonow RO et al.',
        title: 'Aortic valve and ascending aorta guidelines for management and quality measures',
        journal: 'Ann Thorac Surg. 2013 Jun;95(6 Suppl):S1-66',
        year: '2013',
        link: 'https://pubmed.ncbi.nlm.nih.gov/23688839'
      },
      {
        id: 10,
        authors: 'Hiratzka LF, Creager MA, Isselbacher EM et al.',
        title: 'Surgery for Aortic Dilatation in Patients With Bicuspid Aortic Valves: A Statement of Clarification From the American College of Cardiology / American Heart Association Task Force on Clinical Practice Guidelines',
        journal: 'Circulation. 2016 Feb 16;133(7):680-6',
        year: '2016',
        link: 'https://pubmed.ncbi.nlm.nih.gov/26637530'
      }
    ]
  }
};