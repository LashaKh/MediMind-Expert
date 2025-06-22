import { DiseaseData } from '../types';

export const aorticStenosisData: DiseaseData = {
  id: 'aortic-stenosis',
  title: 'Aortic Stenosis',
  lastUpdated: 'June 13, 2025',
  category: 'Valvular Heart Disease',
  specialty: 'cardiology',
  content: {
    background: {
      overview: {
        definition: 'AS is a chronic fibrocalcific disease that results in narrowing of the aortic valve.',
        pathophysiology: 'AS is caused by the interplay of structural (e.g., bicuspid aortic valve), hereditary (e.g., genetic polymorphisms of lipoprotein A gene), and acquired (e.g., progressive age-related calcification, rheumatic valve disease) factors. Turbulent flow through a stenotic aortic valve causes endothelial damage, with subsequent subendothelial inflammation and accumulation of oxidized lipoproteins, and leads to deposition of calcium on the valve with progression of stenosis.',
        epidemiology: 'The prevalence of AS in the US is estimated at 400 persons per 100,000 population. The incidence of AS-related admissions in the US is estimated at 9.5-26 cases per 100,000 patient-years.',
        diseaseCourse: 'AS results in obstruction to the ejection of blood the left ventricle, with resultant signs and symptoms of left-sided HF.',
        prognosis: 'The overall survival of elderly patients with severe AS is 3 years from the onset of symptoms. In patients with severe, symptomatic AS who are at prohibitive risk for aortic valve replacement, the 1-year and 5-year mortality rates are 50% and > 90%, respectively.'
      }
    },
    clinicalFindings: {
      patientDemographics: [
        'Can affect patients of various ages',
        'More common in elderly patients',
        'Associated with bicuspid aortic valve in younger patients'
      ],
      pastMedicalHistory: [
        'Bicuspid aortic valve',
        'Coronary artery disease',
        'Rheumatic heart disease',
        'VWD type 2A',
        'History of radiation therapy',
        'Chronic kidney disease',
        'Hypercholesterolemia',
        'Hypertension'
      ],
      symptoms: [
        'Ankle swelling',
        'Chest pain',
        'Chest pain on exertion',
        'Difficulty walking',
        'Dizziness',
        'Dyspnea',
        'Exercise intolerance',
        'Fatigue',
        'Syncope'
      ],
      likelihoodRatios: [
        {
          finding: 'Delay in carotid pulse upstroke',
          lrPlus: '9.2',
          value: '(3.4-24)'
        },
        {
          finding: 'Presence of systolic murmur radiating to right carotid',
          lrPlus: '8.1',
          value: '(4-16)'
        },
        {
          finding: 'Decreased second heart sound',
          lrPlus: '7.5',
          value: '(3.2-17)'
        },
        {
          finding: 'Presence of systolic murmur over right clavicle',
          lrPlus: '3.0',
          value: '(2-4.1)'
        }
      ]
    },
    studies: [
      {
        title: '2025 • Cipepofol Anesthesia in TAVR',
        year: '2025',
        description: 'In patients with aortic stenosis scheduled for TAVR, cipepofol was superior to propofol with respect to AUC of the mean arterial pressure difference during the initial 15 minutes postinduction.',
        authors: 'Tingting Ni et al.',
        journal: 'JAMA Surg. 2025 May 21:e251299. Online ahead of print.'
      },
      {
        title: '2025 • DapaTAVI',
        year: '2025',
        description: 'In older patients with severe aortic stenosis undergoing TAVI, dapagliflozin was superior to standard care with respect to death or worsening of HF at 1 year.',
        authors: 'Sergio Raposeiras-Roubin et al.',
        journal: 'N Engl J Med. 2025 Apr 10.'
      },
      {
        title: 'EARLY TAVR',
        year: '2025',
        description: 'In patients with asymptomatic severe aortic stenosis, early TAVR was superior to clinical surveillance with respect to death from any cause, stroke, or unplanned hospitalization for cardiovascular causes.',
        authors: 'Philippe Généreux et al.',
        journal: 'N Engl J Med. 2025 Jan 16.'
      },
      {
        title: 'EVOLVED',
        year: '2025',
        description: 'In asymptomatic patients with severe aortic stenosis and myocardial fibrosis, early intervention was not superior to conservative management with respect to death from all causes or unplanned aortic stenosis-related hospitalization.',
        authors: 'Krithika Loganath et al.',
        journal: 'JAMA. 2025 Jan 21.'
      }
    ],
    guidelines: {
      keySources: 'The following summarized guidelines for the evaluation and management of aortic stenosis are prepared by our editorial team based on guidelines from the European Society of Cardiology (ESC 2024,2022), the Society of Cardiovascular Computed Tomography (SCCT/SVM/SCMR/SCA/AHA/ASNC/HRS/ACC/ACS 2024), the European Society of Hypertension (ESH 2023), the European Society of Cardiology (ESC/EACTS 2022), and the American Heart Association (AHA/ACC 2021).',
      sections: [
        {
          title: 'Diagnostic Investigations',
          id: 'diagnostic-investigations',
          content: [
            {
              statement: 'Obtain TTE for accurate diagnosis of the cause of AS, assessment of hemodynamic severity, measurement of LV size and systolic function, and determination of prognosis and timing of valve intervention in patients with signs or symptoms of AS.',
              level: 'Class A',
              source: 'ACC/AHA 2021'
            },
            {
              statement: 'Consider calculating the ratio of the outflow tract to aortic velocity to further define severity in patients with suspected low-flow, low-gradient severe AS with normal or reduced LVEF (stages D2-D3).',
              level: 'Class C',
              source: 'ACC/AHA 2021'
            },
            {
              statement: 'Consider obtaining low-dose dobutamine stress testing with echocardiographic or invasive hemodynamic measurements to further define severity and assess contractile reserve in patients with suspected low-flow, low-gradient severe AS with reduced LVEF (stage D2).',
              level: 'Class C',
              source: 'ACC/AHA 2021'
            },
            {
              statement: 'Consider obtaining exercise testing to assess physiological changes with exercise and to confirm the absence of symptoms in asymptomatic patients with severe AS (stage C1).',
              level: 'Class C',
              source: 'ACC/AHA 2021'
            },
            {
              statement: 'Do not obtain exercise testing in symptomatic patients with severe AS (stage D1, aortic velocity ≥ 4.0 m/s or mean pressure gradient ≥ 40 mmHg) because of the risk of severe hemodynamic compromise.',
              level: 'Class D',
              source: 'ACC/AHA 2021'
            },
            {
              statement: 'Consider obtaining CT for the measurement of aortic valve calcium score to further define severity in patients with suspected low-flow, low-gradient severe AS with normal or reduced LVEF (stages D2 and D3).',
              level: 'Class C',
              source: 'ACC/AHA 2021'
            }
          ]
        },
        {
          title: 'Diagnostic Procedures',
          id: 'diagnostic-procedures',
          content: [
            {
              statement: 'Obtain coronary angiography before valve surgery in patients with severe valvular heart disease and any of the following: history of CVD, suspected myocardial ischemia, LV systolic dysfunction, age > 40 for males, postmenopause, ≥ 1 cardiovascular risk factors.',
              level: 'Class B',
              source: 'EACTS/ESC 2022'
            },
            {
              statement: 'Consider obtaining coronary CTA as an alternative to coronary angiography before valve surgery in patients with severe valvular heart disease and low probability of coronary artery disease.',
              level: 'Class C',
              source: 'EACTS/ESC 2022'
            }
          ]
        },
        {
          title: 'Medical Management',
          id: 'medical-management',
          content: [
            {
              statement: 'Consider initiating renin-angiotensin system blockers as part of treatment in patients with a history of aortic valve stenosis requiring BP-lowering treatment.',
              level: 'Class C',
              source: 'ESC 2024'
            },
            {
              statement: 'Use the same BP thresholds, targets, and drug treatment strategies in patients with AS as for the general population with hypertension.',
              level: 'Class B',
              source: 'ESH 2023'
            },
            {
              statement: 'Lower BP more cautiously to avoid an excessive fall in BP and recurrent syncope in patients with high-grade AS, particularly with a history of syncope.',
              level: 'Class B',
              source: 'ESH 2023'
            },
            {
              statement: 'Ensure optimization of BP control before measurement of AS severity by TTE, TEE, cardiac catheterization, or cardiac magnetic resonance in patients with suspected low-flow, low-gradient severe AS with normal LVEF (stage D3).',
              level: 'Class B',
              source: 'ACC/AHA 2021'
            },
            {
              statement: 'Initiate antihypertensive therapy according to standard guideline-directed medical therapy, started at a low dose, and gradually titrated upward as needed, with appropriate clinical monitoring in patients at risk of developing AS (stage A) and in patients with asymptomatic AS (stages B and C).',
              level: 'Class B',
              source: 'ACC/AHA 2021'
            },
            {
              statement: 'Consider administering RAAS blockers (ACEis or ARBs) to reduce the long-term risk of all-cause mortality in patients undergoing TAVI.',
              level: 'Class C',
              source: 'ACC/AHA 2021'
            },
            {
              statement: 'Initiate statins for primary and secondary prevention of atherosclerosis on the basis of standard risk scores in all patients with calcific AS.',
              level: 'Class A',
              source: 'ACC/AHA 2021'
            },
            {
              statement: 'Do not use statins for the prevention of hemodynamic progression of AS in patients with calcific AS (stages B and C).',
              level: 'Class D',
              source: 'ACC/AHA 2021'
            }
          ]
        },
        {
          title: 'Therapeutic Procedures',
          id: 'therapeutic-procedures',
          content: [
            {
              statement: 'Consider performing balloon aortic valvotomy as a bridge to SAVR or TAVI in hemodynamically unstable patients and (if feasible) in patients with severe AS requiring urgent high-risk noncardiac surgery.',
              level: 'Class C',
              source: 'EACTS/ESC 2022'
            },
            {
              statement: 'Consider performing percutaneous aortic balloon dilation as a bridge to SAVR or TAVI in critically ill patients with severe AS.',
              level: 'Class C',
              source: 'ACC/AHA 2021'
            }
          ]
        },
        {
          title: 'Surgical Interventions - Risk Assessment',
          id: 'surgical-interventions-risk-assessment',
          content: [
            {
              statement: 'Calculate individual risks for specific surgical and/or transcatheter procedures, using on-line tools when available, in patients with valvular heart disease when an intervention is contemplated, and discuss those risks before the procedure as a part of a shared decision-making process.',
              level: 'Class B',
              source: 'ACC/AHA 2021'
            }
          ]
        },
        {
          title: 'Surgical Interventions - Indications',
          id: 'surgical-interventions-indications',
          content: [
            {
              statement: 'Perform intervention in symptomatic patients with severe, high-gradient AS (mean gradient ≥ 40 mmHg, peak velocity ≥ 4.0 m/s, and valve area ≤ 1.0 cm² (or ≤ 0.6 cm²/m²).',
              level: 'Class B',
              source: 'EACTS/ESC 2022'
            },
            {
              statement: 'Perform intervention in symptomatic patients with severe low-flow (stroke volume index ≤ 35 mL/m²), low-gradient (< 40 mmHg) AS with reduced ejection fraction (< 50%), and evidence of flow (contractile) reserve.',
              level: 'Class B',
              source: 'EACTS/ESC 2022'
            },
            {
              statement: 'Consider performing intervention in symptomatic patients with low-flow, low-gradient (< 40 mmHg) AS with normal ejection fraction after careful confirmation that the AS is severe.',
              level: 'Class C',
              source: 'EACTS/ESC 2022'
            },
            {
              statement: 'Consider performing intervention in symptomatic patients with low-flow, low-gradient severe AS and reduced ejection fraction without flow (contractile) reserve, particularly when cardiac CT calcium scoring confirms severe AS.',
              level: 'Class C',
              source: 'EACTS/ESC 2022'
            },
            {
              statement: 'Do not perform intervention in patients with severe comorbidities when the intervention is unlikely to improve QoL or prolong survival > 1 year.',
              level: 'Class D',
              source: 'EACTS/ESC 2022'
            },
            {
              statement: 'Perform intervention in asymptomatic patients with severe AS and systolic LV dysfunction (LVEF < 50%) without another cause.',
              level: 'Class B',
              source: 'EACTS/ESC 2022'
            },
            {
              statement: 'Perform intervention in asymptomatic patients with severe AS and demonstrable symptoms on exercise testing.',
              level: 'Class B',
              source: 'EACTS/ESC 2022'
            },
            {
              statement: 'Perform aortic valve replacement in adult patients with severe high-gradient AS (stage D1) and symptoms of exertional dyspnea, HF, angina, syncope, or presyncope by history or on exercise testing.',
              level: 'Class A',
              source: 'ACC/AHA 2021'
            },
            {
              statement: 'Perform aortic valve replacement in symptomatic patients with low-flow, low-gradient severe AS with reduced LVEF (stage D2).',
              level: 'Class B',
              source: 'ACC/AHA 2021'
            },
            {
              statement: 'Perform aortic valve replacement in symptomatic patients with low-flow, low-gradient severe AS with normal LVEF (stage D3) if AS is the most likely cause of symptoms.',
              level: 'Class B',
              source: 'ACC/AHA 2021'
            }
          ]
        },
        {
          title: 'Surgical Interventions - Choice of Approach',
          id: 'surgical-interventions-choice-of-approach',
          content: [
            {
              statement: 'Perform aortic valve interventions in heart valve centers declaring their local expertise and outcomes data, having active interventional cardiology and cardiac surgical programs on site, and a structured collaborative heart team approach.',
              level: 'Class B',
              source: 'EACTS/ESC 2022'
            },
            {
              statement: 'Decide between surgical and transcatheter intervention based upon careful evaluation of clinical, anatomical, and procedural factors by the heart team, weighing the risks and benefits of each approach for an individual patient.',
              level: 'Class B',
              source: 'EACTS/ESC 2022'
            },
            {
              statement: 'Perform SAVR in younger patients at low risk for surgery (< 75 years and STS-PROM/EuroSCORE II < 4%), or in operable patients unsuitable for transfemoral TAVI.',
              level: 'Class B',
              source: 'EACTS/ESC 2022'
            },
            {
              statement: 'Perform TAVI in older patients (≥ 75 years), or in patients at high risk (STS-PROM/EuroSCORE II > 8%) or unsuitable for surgery.',
              level: 'Class A',
              source: 'EACTS/ESC 2022'
            },
            {
              statement: 'Offer SAVR or TAVI in remaining patients according to individual clinical, anatomical, and procedural characteristics.',
              level: 'Class B',
              source: 'EACTS/ESC 2022'
            },
            {
              statement: 'Perform SAVR in symptomatic and asymptomatic patients with severe AS and any indication for aortic valve replacement aged < 65 years or having a life expectancy > 20 years.',
              level: 'Class A',
              source: 'ACC/AHA 2021'
            },
            {
              statement: 'Decide between SAVR or transfemoral TAVI after shared decision-making about the balance between expected patient longevity and valve durability in symptomatic patients with severe AS aged 65-80 years and without anatomic contraindication to transfemoral TAVI.',
              level: 'Class A',
              source: 'ACC/AHA 2021'
            },
            {
              statement: 'Perform transfemoral TAVI over SAVR in symptomatic patients with severe AS aged > 80 years or in younger patients with a life expectancy < 10 years and without anatomic contraindication to transfemoral TAVI.',
              level: 'Class A',
              source: 'ACC/AHA 2021'
            }
          ]
        },
        {
          title: 'Preventative Measures',
          id: 'preventative-measures',
          content: [
            {
              statement: 'Consider administering antibiotic prophylaxis before dental procedures (involving manipulation of gingival tissue, manipulation of the periapical region of teeth, or perforation of the oral mucosa) in patients with valvular heart disease having prosthetic cardiac valves, prosthetic material used for cardiac valve repair, previous infective endocarditis, unrepaired cyanotic congenital heart disease, or cardiac transplant with valve regurgitation.',
              level: 'Class C',
              source: 'ACC/AHA 2021'
            },
            {
              statement: 'Do not administer antibiotic prophylaxis for non-dental procedures (such as TEE, EGD, colonoscopy, or cystoscopy) in the absence of active infection in patients with valvular heart disease at high risk of infective endocarditis.',
              level: 'Class D',
              source: 'ACC/AHA 2021'
            },
            {
              statement: 'Administer secondary prevention of rheumatic fever in patients with rheumatic heart disease.',
              level: 'Class B',
              source: 'ACC/AHA 2021'
            }
          ]
        },
        {
          title: 'Follow-up and Surveillance',
          id: 'follow-up-surveillance',
          content: [
            {
              statement: 'Evaluate patients with severe valvular heart disease by a multidisciplinary heart valve team when intervention is considered.',
              level: 'Class B',
              source: 'ACC/AHA 2021'
            },
            {
              statement: 'Consider consulting with or referring to a primary or comprehensive heart valve center when discussing treatment options for asymptomatic patients with severe valvular heart disease, patients likely to benefit from valve repair versus valve replacement, or patients with multiple comorbidities considered for valve intervention.',
              level: 'Class C',
              source: 'ACC/AHA 2021'
            },
            {
              statement: 'Obtain a baseline postprocedural TTE in asymptomatic patients with any type of valve intervention followed by periodic monitoring with TTE, depending on type of intervention, length of time after intervention, ventricular function, and concurrent cardiac conditions.',
              level: 'Class B',
              source: 'ACC/AHA 2021'
            },
            {
              statement: 'Offer palliative care after shared decision-making, including discussion of patient preferences and values, in symptomatic patients with severe AS if predicted post-TAVI or post-SAVR survival is < 12 months or if minimal improvement in QoL is expected.',
              level: 'Class B',
              source: 'ACC/AHA 2021'
            }
          ]
        }
      ]
    },
    references: [
      {
        id: 1,
        authors: 'Carita P, Coppola G, Novo G et al.',
        title: 'Aortic stenosis: insights on pathogenesis and clinical implications',
        journal: 'J Geriatr Cardiol. 2016 Sep;13(6):489-98',
        year: '2016',
        link: 'https://pubmed.ncbi.nlm.nih.gov/27582763'
      },
      {
        id: 2,
        authors: 'Thaden JJ, Nkomo VT, Enriquez-Sarano M',
        title: 'The global burden of aortic stenosis',
        journal: 'Prog Cardiovasc Dis. 2014 May-Jun;56(6):565-71',
        year: '2014',
        link: 'https://pubmed.ncbi.nlm.nih.gov/24838132'
      },
      {
        id: 3,
        authors: 'Nkomo VT, Gardin JM, Skelton TN et al.',
        title: 'Burden of valvular heart diseases: a population-based study',
        journal: 'Lancet. 2006 Sep 16;368(9540):1005-11',
        year: '2006',
        link: 'https://pubmed.ncbi.nlm.nih.gov/16980116'
      },
      {
        id: 4,
        authors: 'Alqahtani F, Aljohani S, Amin AH et al.',
        title: 'Effect of Race on the Incidence of Aortic Stenosis and Outcomes of Aortic Valve Replacement in the United States',
        journal: 'Mayo Clin Proc. 2018 May;93(5):607-617',
        year: '2018',
        link: 'https://pubmed.ncbi.nlm.nih.gov/29506780'
      },
      {
        id: 5,
        authors: 'Bakaeen FG, Rosengart TK, Carabello BA',
        title: 'Aortic Stenosis',
        journal: 'Ann Intern Med. 2017 Jan 3;166(1):ITC1-ITC16',
        year: '2017',
        link: 'https://pubmed.ncbi.nlm.nih.gov/28030676'
      },
      {
        id: 6,
        authors: 'Catherine M Otto, Rick A Nishimura, Robert O Bonow et al.',
        title: '2020 ACC / AHA guideline for the management of patients with valvular heart disease: A report of the American College of Cardiology / American Heart Association Joint Committee on Clinical Practice Guidelines',
        journal: 'J Thorac Cardiovasc Surg. 2021 Aug;162(2):e183-e353',
        year: '2021',
        link: 'https://pubmed.ncbi.nlm.nih.gov/33972115/'
      },
      {
        id: 7,
        authors: 'Alec Vahanian, Friedhelm Beyersdorf, Fabien Praz et al.',
        title: '2021 ESC / EACTS Guidelines for the management of valvular heart disease',
        journal: 'Eur Heart J. 2022 Feb 12;43(7):561-632',
        year: '2022',
        link: 'https://pubmed.ncbi.nlm.nih.gov/34453165/'
      },
      {
        id: 8,
        authors: 'John William McEvoy, Cian P McCarthy, Rosa Maria Bruno et al.',
        title: '2024 ESC Guidelines for the management of elevated blood pressure and hypertension',
        journal: 'Eur Heart J. 2024 Oct 7;45(38):3912-4018',
        year: '2024',
        link: 'https://pubmed.ncbi.nlm.nih.gov/39210715/'
      },
      {
        id: 9,
        authors: 'Sigrun Halvorsen, Julinda Mehilli, Salvatore Cassese et al.',
        title: '2022 ESC Guidelines on cardiovascular assessment and management of patients undergoing non-cardiac surgery',
        journal: 'Eur Heart J. 2022 Oct 14;43(39):3826-3924',
        year: '2022',
        link: 'https://pubmed.ncbi.nlm.nih.gov/36017553/'
      },
      {
        id: 10,
        authors: 'Annemarie Thompson, Kirsten E Fleischmann, Nathaniel R Smilowitz et al.',
        title: '2024 AHA / ACC / ACS / ASNC / HRS / SCA / SCCT / SCMR / SVM Guideline for Perioperative Cardiovascular Management for Noncardiac Surgery: A Report of the American College of Cardiology / American Heart Association Joint Committee on Clinical Practice Guidelines',
        journal: 'Circulation. 2024 Nov 5;150(19):e351-e442',
        year: '2024',
        link: 'https://pubmed.ncbi.nlm.nih.gov/39316661/'
      },
      {
        id: 11,
        authors: 'Giuseppe Mancia, Reinhold Kreutz, Mattias Brunström et al.',
        title: '2023 ESH Guidelines for the management of arterial hypertension The Task Force for the management of arterial hypertension of the European Society of Hypertension Endorsed by the European Renal Association (ERA) and the International Society of Hypertension (ISH)',
        journal: 'J Hypertens. 2023 Dec 1;41(12):1874-2071',
        year: '2023',
        link: 'https://pubmed.ncbi.nlm.nih.gov/37345492/'
      },
      {
        id: 12,
        authors: 'E Etchells, C Bell, K Robb',
        title: 'Does This Patient Have an Abnormal Systolic Murmur?',
        journal: 'JAMA. 1997 Feb 19;277(7):564-71',
        year: '1997',
        link: 'https://pubmed.ncbi.nlm.nih.gov/9032164/'
      },
      {
        id: 13,
        authors: 'David L. Simel, Drummond Rennie, Sheri A. Keitz',
        title: 'The Rational Clinical Examination: Evidence-Based Clinical Diagnosis',
        journal: 'McGraw-Hill, New York. 2009',
        year: '2009'
      },
      {
        id: 14,
        authors: 'Nishimura RA, Otto CM, Bonow RO et al.',
        title: '2014 AHA / ACC Guideline for the Management of Patients With Valvular Heart Disease: executive summary: a report of the American College of Cardiology / American Heart Association Task Force on Practice Guidelines',
        journal: 'Circulation. 2014 Jun 10;129(23):2440-92',
        year: '2014',
        link: 'https://pubmed.ncbi.nlm.nih.gov/24589852'
      },
      {
        id: 15,
        authors: 'Nishimura RA, Otto CM, Bonow RO et al.',
        title: '2014 AHA / ACC guideline for the management of patients with valvular heart disease: a report of the American College of Cardiology / American Heart Association Task Force on Practice Guidelines',
        journal: 'J Am Coll Cardiol. 2014 Jun 10;63(22):e57-185',
        year: '2014',
        link: 'https://pubmed.ncbi.nlm.nih.gov/24603191'
      },
      {
        id: 16,
        authors: 'Nishimura RA, Otto CM, Bonow RO et al.',
        title: '2017 AHA / ACC Focused Update of the 2014 AHA / ACC Guideline for the Management of Patients With Valvular Heart Disease: A Report of the American College of Cardiology / American Heart Association Task Force on Clinical Practice Guidelines',
        journal: 'Circulation. 2017 Jun 20;135(25):e1159-e1195',
        year: '2017',
        link: 'https://pubmed.ncbi.nlm.nih.gov/28298458'
      },
      {
        id: 17,
        authors: 'Helmut Baumgartner, Volkmar Falk, Jeroen J Bax et al.',
        title: '2017 ESC / EACTS Guidelines for the management of valvular heart disease',
        journal: 'Eur Heart J. 2017 Sep 21;38(36):2739-2791',
        year: '2017',
        link: 'https://pubmed.ncbi.nlm.nih.gov/28886619'
      },
      {
        id: 18,
        authors: 'Michael J Mack, Martin B Leon, Vinod H Thourani et al.',
        title: 'Transcatheter Aortic-Valve Replacement in Low-Risk Patients at Five Years',
        journal: 'N Engl J Med. 2023 Nov 23;389(21):1949-1960',
        year: '2023',
        link: 'https://pubmed.ncbi.nlm.nih.gov/37874020/'
      },
      {
        id: 19,
        authors: 'Philippe Généreux, Allan Schwartz, J Bradley Oldemeyer et al.',
        title: 'Transcatheter Aortic-Valve Replacement for Asymptomatic Severe Aortic Stenosis',
        journal: 'N Engl J Med. 2025 Jan 16;392(3):217-227',
        year: '2025',
        link: 'https://pubmed.ncbi.nlm.nih.gov/39466903/'
      },
      {
        id: 20,
        authors: 'Krithika Loganath, Neil J Craig, Russell J Everett et al.',
        title: 'Early Intervention in Patients With Asymptomatic Severe Aortic Stenosis and Myocardial Fibrosis: The EVOLVED Randomized Clinical Trial',
        journal: 'JAMA. 2025 Jan 21;333(3):213-221',
        year: '2025',
        link: 'https://pubmed.ncbi.nlm.nih.gov/39466640/'
      },
      {
        id: 21,
        authors: 'Duk-Hyun Kang, Sung-Ji Park, Seung-Ah Lee et al.',
        title: 'Early Surgery or Conservative Care for Asymptomatic Aortic Stenosis',
        journal: 'N Engl J Med. 2020 Jan 9;382(2):111-119',
        year: '2020',
        link: 'https://pubmed.ncbi.nlm.nih.gov/31733181/'
      },
      {
        id: 22,
        authors: 'Marko Banovic, Svetozar Putnik, Martin Penicka et al.',
        title: 'Aortic Valve Replacement Versus Conservative Treatment in Asymptomatic Severe Aortic Stenosis: The AVATAR Trial',
        journal: 'Circulation. 2022 Mar;145(9):648-658',
        year: '2022',
        link: 'https://pubmed.ncbi.nlm.nih.gov/34779220/'
      },
      {
        id: 23,
        authors: 'Tingting Ni, Xiaoxia Zhou, Shuguang Wu et al.',
        title: 'Hemodynamic Impact of Cipepofol vs Propofol During Anesthesia Induction in Patients With Severe Aortic Stenosis: A Randomized Clinical Trial',
        journal: 'JAMA Surg. 2025 May 21:e251299. Online ahead of print',
        year: '2025',
        link: 'https://pubmed.ncbi.nlm.nih.gov/40397427/'
      }
    ]
  }
}; 