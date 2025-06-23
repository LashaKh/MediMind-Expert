import type { DiseaseData } from '../types';

export const coarctationOfAortaData: DiseaseData = {
  id: 'coarctation-of-aorta',
  title: 'Coarctation of Aorta',
  lastUpdated: 'May 31, 2025',
  category: 'Congenital Heart Disease',
  specialty: 'cardiology',
  content: {
    background: {
      overview: {
        definition: 'Coarctation of the aorta (CoA) is a congenital heart defect characterized by a discrete narrowing of the thoracic aorta, typically distal to the left subclavian artery.',
        pathophysiology: 'The pathogenesis of coarctation is not fully understood, but two main theories exist. The hemodynamic hypothesis suggests that reduced in utero blood flow across the aortic isthmus leads to abnormal aortic development. The ectopic ductal tissue hypothesis proposes that ductal tissue extends into the aorta, thickening its walls, and as the ductus arteriosus closes, this creates the coarctation. Coarctation of the aorta results in elevated afterload on the left ventricle, leading to LVH and hypertension, and may induce the development of collateral circulation.',
        epidemiology: 'CoA is the sixth most common congenital heart disease, occurring in up to 1 in 3,000 to 4,000 live births.',
        diseaseCourse: 'Clinically, CoA is often asymptomatic, but can present with severe hypertension leading to headache, epistaxis, HF and/or aortic dissection. Other symptoms may include exertional intolerance, dizziness, lower extremity claudication, abdominal angina and ICH. CoA can be complicated by the development of aortic aneurysms, particularly in the ascending aorta.',
        prognosis: 'The prognosis of CoA largely depends on the timing of diagnosis and intervention. Early detection and intervention, such as open or endovascular repair, can lead to good outcomes, including better BP control. The 15-year survival rate after CoA repair in patients aged < 21 years is reported to be 92%.'
      }
    },
    guidelines: {
      keySources: 'The following summarized guidelines for the evaluation and management of coarctation of aorta are prepared by our editorial team based on guidelines from the European Society of Cardiology (ESC 2024,2021), the European Society of Endocrinology (ESE/PES 2024), the Society of Thoracic Surgeons (STS/EACTS 2024), the American Heart Association (AHA/ACC 2022,2021), the American Heart Association (AHA 2019), the American College of Cardiology (ACC 2018), the European Society of Vascular Surgery (ESVS 2017), the American Heart Association/American Stroke Association (AHA/ASA 2015), and the American Association for Thoracic Surgery/American College of Cardiology Foundation/American College of Radiology/American Stroke Association/Society of Cardiovascular Anesthesiologists/Society for Cardiovascular Angiography and Interventions/Society of Interventional Radiology/Society of Thoracic Surgeons/Society for Vascular Medicine (AATS/ACCF/ACR/ASA/SCA/SCAI/SIR/STS/SVM 2010).',
      sections: [
        {
          title: 'Screening and Diagnosis',
          id: 'screening-diagnosis',
          content: [],
          subsections: [
            {
              title: 'Indications for Screening, Hypertension',
              id: 'screening-hypertension',
              content: [
                {
                  statement: 'Obtain echocardiography to screen for CoA in patients with hypertension meeting any of the following criteria: young patient with hypertension (< 30 years of age), BP higher in upper extremities than in lower extremities, absent femoral pulses, continuous murmur over patient\'s back, chest, or abdominal bruit, left thoracotomy scar (postoperative).',
                  level: 'B',
                  source: 'AAPA/ABC/ACC/…/PCNA 2018'
                }
              ]
            },
            {
              title: 'Indications for Screening, Bicuspid Aortic Valve',
              id: 'screening-bicuspid-valve',
              content: [
                {
                  statement: 'Obtain a TTE to screen for CoA and other associated cardiovascular defects in patients with bicuspid aortic valve.',
                  level: 'B',
                  source: 'ACC/AHA 2022'
                },
                {
                  statement: 'Obtain a TTE to screen for CoA for prediction of clinical outcome in patients with a known bicuspid aortic valve.',
                  level: 'B',
                  source: 'ACC/AHA 2021'
                },
                {
                  statement: 'Perform a clinical examination and obtain imaging studies to screen for CoA in adult patients with bicuspid aortic valve.',
                  level: 'B',
                  source: 'AHA 2019'
                }
              ]
            },
            {
              title: 'Indications for Screening, Turner\'s Syndrome',
              id: 'screening-turners',
              content: [
                {
                  statement: 'Obtain a TTE and cardiac MRI at the time of diagnosis to screen for CoA, aortic root and ascending aortic dilation, bicuspid aortic valve, and other congenital heart defects in patients with Turner syndrome.',
                  level: 'B',
                  source: 'ACC/AHA 2022'
                },
                {
                  statement: 'Obtain screening for CoA, and enlargement of the ascending aorta, and bicuspid aortic valve in patients with Turner syndrome.',
                  level: 'B',
                  source: 'AHA 2019'
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
              title: 'BP Measurement',
              id: 'bp-measurement',
              content: [
                {
                  statement: 'Measure BP at both arms and one lower extremity in patients with CoA.',
                  level: 'B',
                  source: 'ESC 2024'
                },
                {
                  statement: 'Measure BP in both arms and one of the lower extremities in patients with CoA.',
                  level: 'B',
                  source: 'ACC/AHA 2022'
                },
                {
                  statement: 'Measure resting BP in upper and lower extremities in all adult patients with CoA.',
                  level: 'B',
                  source: 'AHA 2019'
                },
                {
                  statement: 'Consider obtaining ambulatory BP monitoring for diagnosis and management of hypertension in adult patients with CoA.',
                  level: 'C',
                  source: 'AHA 2019'
                },
                {
                  statement: 'Consider obtaining exercise testing to evaluate for exercise-induced hypertension in adult patients with CoA who exercise.',
                  level: 'C',
                  source: 'AHA 2019'
                }
              ]
            },
            {
              title: 'Diagnostic Imaging',
              id: 'diagnostic-imaging',
              content: [
                {
                  statement: 'Obtain MRI or CT for initial, surveillance, and follow-up aortic imaging in patients with CoA, including patients treated with surgical or endovascular intervention.',
                  level: 'B',
                  source: 'ACC/AHA 2022'
                },
                {
                  statement: 'Obtain cardiac MRI or CTA for initial and follow-up aortic imaging in adult patients with CoA, including patients treated with surgical or catheter intervention.',
                  level: 'B',
                  source: 'AHA 2019'
                },
                {
                  statement: 'Consider obtaining MRA as the imaging technique of choice for anatomical characterization, evaluation for associated cardiovascular abnormalities, and estimation of aortic flow gradients in adult patients with CoA.',
                  level: 'C',
                  source: 'ESVS 2017'
                }
              ]
            },
            {
              title: 'Screening for Intracranial Aneurysms',
              id: 'intracranial-screening',
              content: [
                {
                  statement: 'Consider obtaining MRI or CT to screen for intracranial aneurysms in adult patients with CoA.',
                  level: 'C',
                  source: 'ACC/AHA 2022'
                },
                {
                  statement: 'Consider obtaining MRA or CTA to screen for intracranial aneurysms in adult patients with CoA.',
                  level: 'C',
                  source: 'AHA 2019'
                },
                {
                  statement: 'Consider obtaining CTA or MRA to screen for intracranial aneurysms in patients with CoA.',
                  level: 'C',
                  source: 'AHA/ASA 2015'
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
              title: 'Setting of Care',
              id: 'setting-care',
              content: [
                {
                  statement: 'Consider referring adult patients with a diagnosis of CoA to a specialized aortic center.',
                  level: 'C',
                  source: 'EACTS/STS 2024'
                }
              ]
            },
            {
              title: 'Management of Hypertension',
              id: 'hypertension-management',
              content: [
                {
                  statement: 'Initiate guideline-directed treatment for hypertension in patients with CoA.',
                  level: 'B',
                  source: 'ESC 2024'
                },
                {
                  statement: 'Initiate guideline-directed medical therapy for the treatment of hypertension in patients with CoA.',
                  level: 'B',
                  source: 'ACC/AHA 2022'
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
              title: 'Indications for Procedural Intervention',
              id: 'procedural-indications',
              content: [
                {
                  statement: 'Perform coarctation or re-coarctation repair (either surgical or endovascular), with a preference for stenting when technically feasible, in patients with hypertension with an increased noninvasive gradient between the upper and lower limbs (decreased ankle-brachial index) confirmed with invasive measurement (peak-to-peak > 20 mmHg).',
                  level: 'B',
                  source: 'ESC 2024'
                },
                {
                  statement: 'Consider performing endovascular treatment in patients with hypertension with > 50% narrowing relative to the aortic diameter at the diaphragm, even if the invasive peak-to-peak gradient is < 20 mmHg, when technically feasible.',
                  level: 'C',
                  source: 'ESC 2024'
                },
                {
                  statement: 'Consider performing endovascular treatment in normotensive patients with an increased noninvasive gradient confirmed with invasive peak-to-peak gradient > 20 mmHg, when technically feasible.',
                  level: 'C',
                  source: 'ESC 2024'
                },
                {
                  statement: 'Treat clinically significant CoA, either primary or recurrent.',
                  level: 'B',
                  source: 'EACTS/STS 2024'
                },
                {
                  statement: 'Consider treating patients with documented hypertension with > 50% aortic luminal narrowing in relation to the aortic diameter at the level of the diaphragm (based on MRI, CT, or invasive angiography measurements), regardless of the pressure gradient.',
                  level: 'C',
                  source: 'EACTS/STS 2024'
                },
                {
                  statement: 'Consider performing open or endovascular repair in asymptomatic patients with CoA with a systolic gradient across the stenosis at rest (> 20 mmHg) and/or SBP difference > 10 mmHg combined with coarctation-attributed HF and/or proximal hypertension.',
                  level: 'C',
                  source: 'EACTS/STS 2024'
                },
                {
                  statement: 'Consider performing endovascular repair as an alternative to open surgical repair in patients with coarctation of the native thoracic aorta as well as after previous repair and suitable anatomy.',
                  level: 'C',
                  source: 'EACTS/STS 2024'
                },
                {
                  statement: 'Consider performing extra-anatomical bypass from the ascending to the descending aorta at the time of concomitant cardiac repair in patients requiring coarctation re-repair.',
                  level: 'C',
                  source: 'EACTS/STS 2024'
                },
                {
                  statement: 'Perform endovascular stenting or open surgical repair in patients with significant native or recurrent CoA and hypertension.',
                  level: 'B',
                  source: 'ACC/AHA 2022'
                },
                {
                  statement: 'Perform repair of coarctation or re-coarctation (surgically or catheter-based) in patients with hypertension and an increased noninvasive gradient between upper and lower limbs confirmed with invasive measurement (peak-to-peak ≥ 20 mmHg) with the preference for catheter treatment (stenting), when technically feasible.',
                  level: 'B',
                  source: 'ESC 2021'
                },
                {
                  statement: 'Consider performing catheter treatment (stenting) in patients with hypertension and ≥ 50% narrowing relative to the aortic diameter at the diaphragm, even if the invasive peak-to-peak gradient is < 20 mmHg, when technically feasible.',
                  level: 'C',
                  source: 'ESC 2021'
                },
                {
                  statement: 'Consider performing catheter treatment (stenting) in patients with normal BP and an increased noninvasive gradient confirmed with invasive measurement (peak-to-peak ≥ 20 mmHg), when technically feasible.',
                  level: 'C',
                  source: 'ESC 2021'
                },
                {
                  statement: 'Consider performing catheter treatment (stenting) in patients with normal BP and ≥ 50% narrowing relative to the aortic diameter at the diaphragm, even if the invasive peak-to-peak gradient is < 20 mmHg, when technically feasible.',
                  level: 'C',
                  source: 'ESC 2021'
                },
                {
                  statement: 'Perform surgical repair or catheter-based stenting in adult patients with hypertension and significant native or recurrent CoA.',
                  level: 'B',
                  source: 'AHA 2019'
                },
                {
                  statement: 'Consider performing balloon angioplasty in adult patients with native or recurrent CoA when stent placement is not feasible and surgical intervention is not an option.',
                  level: 'C',
                  source: 'AHA 2019'
                },
                {
                  statement: 'Perform open or endovascular repair in patients with CoA and clinical manifestations resulting from LV dysfunction, severe hypertension, or lower limb ischemia.',
                  level: 'B',
                  source: 'ESVS 2017'
                },
                {
                  statement: 'Consider performing open or endovascular repair in patients with CoA without clinical symptoms but with a significant aortic gradient at rest (> 20 mmHg) and/or proximal systemic hypertension (> 140/90 mmHg).',
                  level: 'C',
                  source: 'ESVS 2017'
                },
                {
                  statement: 'Consider performing endovascular repair as an alternative to open repair in anatomically suitable patients with native CoA.',
                  level: 'C',
                  source: 'ESVS 2017'
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
              title: 'Patients with Turner\'s Syndrome',
              id: 'turners-syndrome',
              content: [
                {
                  statement: 'Ensure informed, individualized decision-making about the timing of elective aortic surgery in adult patients with Turner syndrome, taking into account risk factors for aortic dissection, including moderate aortic dilation (aortic height index > 23 mm/m, aortic size index > 2.3 cm/m², or Z > 3.5) with at least one additional risk factor: bicuspid aortic valve, CoA, hypertension, or a rapid increase in aortic diameter (> 3 mm/year). Recognize that dissection risk probably increases if more than one additional risk factor is present. Evaluate for elective aortic surgery in case of severe aortic dilation (aortic height index > 25 mm/m, aortic size index > 2.5 cm/m², or Z > 4) as a single risk factor.',
                  level: 'B',
                  source: 'ESE/PES 2024'
                },
                {
                  statement: 'Recognize that the risk of aortic dissection is much lower in pediatric patients than in adult patients. Ensure informed, individualized decision-making about the timing of elective aortic surgery, taking into account risk factors for aortic dissection, including moderate aortic dilation (age < 15 years: Z > 3.5; age ≥ 15 years: aortic height index ≥ 23 mm/m, aortic size index > 2.3 cm/m², or Z > 3.5) and hypertension, CoA, bicuspid aortic valve, or a rapid increase in aortic diameter (> 3 mm/year or > 1 Z/year).',
                  level: 'B',
                  source: 'ESE/PES 2024'
                },
                {
                  statement: 'Obtain regular aortic imaging and cardiovascular follow-up with consideration for intervention before pregnancy in patients with CoA becoming pregnant.',
                  level: 'B',
                  source: 'ESE/PES 2024'
                },
                {
                  statement: 'Advise avoiding assisted reproductive technologies or spontaneous conception in the presence of severe aortic dilation (aortic height index > 25 mm/m, aortic size index > 2.5 cm/m², or Z > 4) and especially when other risk factors for aortic dissection are present (previous aortic surgery, previous aortic dissection, or rapid aortic diameter increase (> 3 mm/year), bicuspid aortic valve, hypertension, or CoA).',
                  level: 'B',
                  source: 'ESE/PES 2024'
                },
                {
                  statement: 'Consider obtaining a TTE at least once every 12 weeks during pregnancy, or more frequently on an individualized basis, in the presence of aortic dilation (aortic height index > 20 mm/m, aortic size index > 2.0 cm/m², or Z > 2.5) or at least one other risk factor (bicuspid aortic valve, aortic coarctation, hypertension, rapid aortic diameter increase). Consider obtaining additional imaging in the early third trimester if there is any concerning change observed on the second trimester TTE.',
                  level: 'C',
                  source: 'ESE/PES 2024'
                },
                {
                  statement: 'Decide on the mode of delivery based on the safest method to prevent aortic and obstetric complications, individual preferences, and local professional expertise. Consider implementing preventive measures (epidural anesthesia, expedited second stage of labor) to reduce the risk of aortic dissection, especially in the presence of aortic dilation (aortic height index > 20 mm/m, aortic size index > 2.0 cm/m², or Z > 2.5) or additional risk factors for aortic dissection (bicuspid aortic valve, aortic coarctation, hypertension, rapid aortic diameter increase). Prefer Cesarean delivery in patients with severe aortic dilation (aortic height index > 25 mm/m, aortic size index > 2.5 cm/m², or Z > 4) or a history of aortic dissection.',
                  level: 'B',
                  source: 'ESE/PES 2024'
                },
                {
                  statement: 'Provide informed, individualized peripartum cardiovascular care by a multidisciplinary team including a maternal-fetal medicine specialist and a cardiologist with expertise in managing patients with Turner syndrome, preferably in a center with expertise in aortic surgery and Turner syndrome, in the presence of aortic dilation (aortic height index > 20 mm/m, aortic size index > 2.0 cm/m², or Z > 2.5) or at least one other risk factor for dissection (bicuspid aortic valve, aortic coarctation, hypertension, rapid aortic diameter increase).',
                  level: 'B',
                  source: 'ESE/PES 2024'
                },
                {
                  statement: 'Obtain imaging of the heart and aorta for evidence of bicuspid aortic valve, CoA, or dilatation of the ascending thoracic aorta in patients with Turner syndrome.',
                  level: 'B',
                  source: 'AATS/ACC/ACR/…/SVM 2010'
                },
                {
                  statement: 'Consider obtaining imaging of the heart and aorta to help determine the risk of aortic dissection in patients with Turner syndrome with additional risk factors, including bicuspid aortic valve, CoA, and/or hypertension, and in pregnant patients (or attempting pregnancy).',
                  level: 'C',
                  source: 'AATS/ACC/ACR/…/SVM 2010'
                }
              ]
            }
          ]
        },
        {
          title: 'Follow-up and Surveillance',
          id: 'followup-surveillance',
          content: [
            {
              statement: 'Obtain lifelong follow-up including regular imaging of the aorta with cardiovascular CT/cardiovascular MRI every 3-5 years (adapted to clinical status and previous imaging findings) in patients with native or repaired CoA.',
              level: 'B',
              source: 'ESC 2024'
            }
          ]
        }
      ]
    },
    clinicalFindings: {
      patientDemographics: [],
      pastMedicalHistory: [
        'Atrial septal defect',
        'Bicuspid aortic valve',
        'HF',
        'Hypertension',
        'Hypoplastic left heart syndrome',
        'Intracranial aneurysm',
        'Patent ductus arteriosus',
        'Patent foramen ovale',
        'Transposition of the great vessels',
        'Turner syndrome',
        'Williams syndrome'
      ],
      symptoms: [
        'Chest pain',
        'Claudication of lower limb',
        'Cold feet',
        'Dyspnea',
        'Exercise intolerance',
        'Fatigue',
        'Headache',
        'Orthopnea',
        'Poor feeding'
      ],
      vitalSigns: [
        'Differences in BP between arms and legs',
        'Hypertension',
        '↑ SBP'
      ]
    },
    studies: [],
    references: [
      {
        id: 1,
        authors: 'Yuli Y Kim, Lauren Andrade, Stephen C Cook',
        title: 'Aortic Coarctation',
        journal: 'Cardiol Clin. 2020 Aug;38(3):337-351',
        year: '2020',
        link: 'https://pubmed.ncbi.nlm.nih.gov/32622489/'
      },
      {
        id: 2,
        authors: 'Utako Yokoyama, Yasuhiro Ichikawa, Susumu Minamisawa et al.',
        title: 'Pathology and molecular mechanisms of coarctation of the aorta and its association with the ductus arteriosus',
        journal: 'J Physiol Sci. 2017 Mar;67(2):259-270',
        year: '2017',
        link: 'https://pubmed.ncbi.nlm.nih.gov/28000176/'
      },
      {
        id: 3,
        authors: 'P Syamasundar Rao',
        title: 'Coarctation of the aorta',
        journal: 'Curr Cardiol Rep. 2005 Nov;7(6):425-34',
        year: '2005',
        link: 'https://pubmed.ncbi.nlm.nih.gov/16256011/'
      },
      {
        id: 4,
        authors: 'David Tanous, Lee N Benson, Eric M Horlick',
        title: 'Coarctation of the aorta: evaluation and management',
        journal: 'Curr Opin Cardiol. 2009 Nov;24(6):509-15',
        year: '2009',
        link: 'https://pubmed.ncbi.nlm.nih.gov/19667980/'
      },
      {
        id: 5,
        authors: 'Jose Maria Oliver, Pastora Gallego, Ana Gonzalez et al.',
        title: 'Risk factors for aortic complications in adults with coarctation of the aorta',
        journal: 'J Am Coll Cardiol. 2004 Oct 19;44(8):1641-7',
        year: '2004',
        link: 'https://pubmed.ncbi.nlm.nih.gov/15489097/'
      },
      {
        id: 6,
        authors: 'Gravholt CH, Andersen NH, Conway GS et al.',
        title: 'Clinical practice guidelines for the care of girls and women with Turner syndrome: proceedings from the 2016 Cincinnati International Turner Syndrome Meeting',
        journal: 'Eur J Endocrinol. 2017 Sep;177(3):G1-G70',
        year: '2017',
        link: 'https://pubmed.ncbi.nlm.nih.gov/28705803/'
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
        authors: 'Logan G Spector, Jeremiah S Menk, Jessica H Knight et al.',
        title: 'Trends in Long-Term Mortality After Congenital Heart Surgery',
        journal: 'J Am Coll Cardiol. 2018 May 29;71(21):2434-2446',
        year: '2018',
        link: 'https://pubmed.ncbi.nlm.nih.gov/29793633/'
      },
      {
        id: 9,
        authors: 'Martin Czerny, Martin Grabenwöger, Tim Berger et al.',
        title: 'EACTS / STS Guidelines for diagnosing and treating acute and chronic syndromes of the aortic organ',
        journal: 'Eur J Cardiothorac Surg. 2024 Feb 1;65(2):ezad426',
        year: '2024',
        link: 'https://pubmed.ncbi.nlm.nih.gov/38408364/'
      },
      {
        id: 10,
        authors: 'Helmut Baumgartner, Julie De Backer, Sonya V Babu-Narayan et al.',
        title: '2020 ESC Guidelines for the management of adult congenital heart disease',
        journal: 'Eur Heart J. 2021 Feb 11;42(6):563-645',
        year: '2021',
        link: 'https://pubmed.ncbi.nlm.nih.gov/32860028/'
      },
      {
        id: 11,
        authors: 'V Riambau, D Böckler, J Brunkwall et al.',
        title: 'Editor\'s Choice - Management of Descending Thoracic Aorta Diseases: Clinical Practice Guidelines of the European Society for Vascular Surgery (ESVS)',
        journal: 'Eur J Vasc Endovasc Surg. 2017 Jan;53(1):4-52',
        year: '2017',
        link: 'https://pubmed.ncbi.nlm.nih.gov/28081802/'
      },
      {
        id: 12,
        authors: 'Paul K Whelton, Robert M Carey, Wilbert S Aronow et al.',
        title: '2017 ACC / AHA / AAPA / ABC / ACPM / AGS / APhA / ASH / ASPC / NMA / PCNA Guideline for the Prevention, Detection, Evaluation, and Management of High Blood Pressure in Adults: Executive Summary: A Report of the American College of Cardiology / American Heart Association Task Force on Clinical Practice Guidelines',
        journal: 'Hypertension. 2018 Jun;71(6):e13-e115',
        year: '2018',
        link: 'https://pubmed.ncbi.nlm.nih.gov/29133356/'
      },
      {
        id: 13,
        authors: 'B Gregory Thompson, Robert D Brown Jr, Sepideh Amin-Hanjani et al.',
        title: 'Guidelines for the Management of Patients With Unruptured Intracranial Aneurysms: A Guideline for Healthcare Professionals From the American Heart Association / American Stroke Association',
        journal: 'Stroke. 2015 Aug;46(8):2368-400',
        year: '2015',
        link: 'https://pubmed.ncbi.nlm.nih.gov/26089327/'
      },
      {
        id: 14,
        authors: 'Stout KK, Daniels CJ, Aboulhosn JA et al.',
        title: '2018 AHA / ACC Guideline for the Management of Adults With Congenital Heart Disease: A Report of the American College of Cardiology / American Heart Association Task Force on Clinical Practice Guidelines',
        journal: 'Circulation. 2019 Apr 2;139(14):e698-e800',
        year: '2019',
        link: 'https://pubmed.ncbi.nlm.nih.gov/30586767/'
      },
      {
        id: 15,
        authors: 'Claus H Gravholt, Niels H Andersen, Sophie Christin-Maitre et al.',
        title: 'Clinical Practice Guidelines for the Care of Girls and Women with Turner Syndrome',
        journal: 'Eur J Endocrinol. 2024 Jun 5;190(6):G53-G151',
        year: '2024',
        link: 'https://pubmed.ncbi.nlm.nih.gov/38748847/'
      },
      {
        id: 16,
        authors: 'Lucia Mazzolai, Gisela Teixido-Tura, Stefano Lanzi et al.',
        title: '2024 ESC Guidelines for the management of peripheral arterial and aortic diseases',
        journal: 'Eur Heart J. 2024 Aug 30:ehae179',
        year: '2024',
        link: 'https://pubmed.ncbi.nlm.nih.gov/39210722/'
      },
      {
        id: 17,
        authors: 'Loren F Hiratzka, George L Bakris, Joshua A Beckman et al.',
        title: '2010 ACCF / AHA / AATS / ACR / ASA / SCA / SCAI / SIR / STS / SVM guidelines for the diagnosis and management of patients with Thoracic Aortic Disease: a report of the American College of Cardiology Foundation / American Heart Association Task Force on Practice Guidelines, American Association for Thoracic Surgery, American College of Radiology, American Stroke Association, Society of Cardiovascular Anesthesiologists, Society for Cardiovascular Angiography and Interventions, Society of Interventional Radiology, Society of Thoracic Surgeons, and Society for Vascular Medicine',
        journal: 'Circulation. 2010 Apr 6;121(13):e266-369',
        year: '2010',
        link: 'https://pubmed.ncbi.nlm.nih.gov/20233780/'
      },
      {
        id: 18,
        authors: 'Catherine M Otto, Rick A Nishimura, Robert O Bonow et al.',
        title: '2020 ACC / AHA guideline for the management of patients with valvular heart disease: A report of the American College of Cardiology / American Heart Association Joint Committee on Clinical Practice Guidelines',
        journal: 'J Thorac Cardiovasc Surg. 2021 Aug;162(2):e183-e353',
        year: '2021',
        link: 'https://pubmed.ncbi.nlm.nih.gov/33972115/'
      }
    ]
  }
};