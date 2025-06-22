import { DiseaseData } from '../types';

export const aorticRegurgitationData: DiseaseData = {
  id: 'aortic-regurgitation',
  title: 'Aortic Regurgitation',
  lastUpdated: 'May 31, 2025',
  category: 'Valvular Heart Disease',
  specialty: 'cardiology',
  content: {
    background: {
      overview: {
        definition: 'AR, also known as aortic insufficiency, is a structural heart disease characterized by diastolic flow of blood across the aortic valve, from the aorta into the left ventricle.',
        pathophysiology: 'AR may be due to malfunction of the valve leaflets themselves, dilatation of the aortic root and annulus, or a combination of these factors.',
        epidemiology: 'The prevalence of AR in the US is estimated at 500 persons per 100,000 population.',
        diseaseCourse: 'Chronic AR causes volume overload of the left ventricle, with ventricular dilation and systolic dysfunction, and clinical symptoms of HF. Acute AR results in acute HF, and can progress to cardiogenic shock due to an uncompensated decrease in effective stroke volume.',
        prognosis: 'Moderate or severe AR is associated with significant morbidity and mortality. In highly symptomatic patients (NYHA functional class 3-4), annual mortality rates of approximately 25% have been reported.'
      }
    },
    clinicalFindings: {
      patientDemographics: [
        'Can affect patients of various ages',
        'Associated with underlying valve or aortic root pathology'
      ],
      pastMedicalHistory: [
        'Angina pectoris',
        'Aortic dissection',
        'Ehlers-Danlos syndrome',
        'Infective endocarditis',
        'Marfan syndrome',
        'Osteogenesis imperfecta',
        'Reactive arthritis',
        'Rheumatic heart disease',
        'SLE',
        'Takayasu arteritis'
      ],
      symptoms: [
        'Ankle swelling',
        'Chest pain', 
        'Dyspnea',
        'Fatigue',
        'Leg swelling',
        'Palpitations',
        'Syncope'
      ],
      likelihoodRatios: [
        {
          finding: 'Increased volume of murmur during transient arterial occlusion',
          lrPlus: '8.4',
          value: '(1.3-81)'
        },
        {
          finding: 'Presence of aortic regurgitation murmur (grade ≥ 3)',
          lrPlus: '4.5', 
          value: '(1.6-14)'
        }
      ]
    },
    guidelines: {
      keySources: 'The following summarized guidelines for the evaluation and management of aortic regurgitation are prepared by our editorial team based on guidelines from the European Society of Cardiology (ESC 2024,2022), the Society of Cardiovascular Computed Tomography (SCCT/SVM/SCMR/SCA/AHA/ASNC/HRS/ACC/ACS 2024), the European Society of Hypertension (ESH 2023), the European Society of Cardiology (ESC/EACTS 2022), the American Heart Association (AHA/ACC 2021), and the Society of Thoracic Surgeons (STS 2013).',
      sections: [
        {
          title: 'Diagnostic Investigations',
          id: 'diagnostic-investigations',
          content: [
            {
              statement: 'Obtain TTE for assessment of the cause and severity of regurgitation, LV size and systolic function, prognosis, and timing of valve intervention in patients with signs and symptoms of AR.',
              level: 'B',
              source: 'ACC/AHA 2021'
            },
            {
              statement: 'Obtain TTE for evaluation of the presence and severity of AR in patients with bicuspid aortic valve or with known dilation of the aortic sinuses or ascending aorta.',
              level: 'B',
              source: 'ACC/AHA 2021'
            },
            {
              statement: 'Obtain cardiac magnetic resonance, TEE or perform cardiac catheterization for assessment of LV systolic function, systolic and diastolic volumes, aortic size and AR severity in patients with moderate or severe AR and suboptimal TTE images or a discrepancy between clinical and TTE findings.',
              level: 'B',
              source: 'ACC/AHA 2021'
            }
          ]
        },
        {
          title: 'Medical Management',
          id: 'medical-management',
          content: [
            {
              statement: 'Consider initiating renin-angiotensin system blockers as part of treatment in patients with a history of AR requiring BP-lowering treatment.',
              level: 'C',
              source: 'ESC 2024'
            },
            {
              statement: 'Use the same BP thresholds and targets in patients with aortic insufficiency as for the general population with hypertension.',
              level: 'B',
              source: 'ESH 2023'
            },
            {
              statement: 'Initiate treatment with drugs reducing afterload, including renin-angiotensin system blockers and CCBs, in patients with aortic insufficiency.',
              level: 'B',
              source: 'ESH 2023'
            },
            {
              statement: 'Initiate treatment of hypertension (SBP > 140 mmHg) in asymptomatic patients with chronic AR.',
              level: 'B',
              source: 'ACC/AHA 2021'
            },
            {
              statement: 'Initiate guideline-directed medical therapy for reduced LVEF with ACEis, ARBs and/or sacubitril/valsartan in patients with severe AR having symptoms and/or LV systolic dysfunction (stages C2-D) but a prohibitive surgical risk.',
              level: 'B',
              source: 'ACC/AHA 2021'
            }
          ]
        },
        {
          title: 'Surgical Interventions - Symptomatic Patients',
          id: 'surgical-interventions-symptomatic',
          content: [
            {
              statement: 'Perform surgery in symptomatic patients regardless of LV function.',
              level: 'B',
              source: 'EACTS/ESC 2022'
            },
            {
              statement: 'Perform surgery in symptomatic patients with severe AR undergoing CABG or surgery of the ascending aorta or of another valve.',
              level: 'B',
              source: 'EACTS/ESC 2022'
            },
            {
              statement: 'Consider performing aortic valve repair in selected patients at experienced centers when durable results are expected.',
              level: 'C',
              source: 'EACTS/ESC 2022'
            },
            {
              statement: 'Perform aortic valve surgery in symptomatic patients with severe AR (stage D) regardless of LV systolic function.',
              level: 'B',
              source: 'ACC/AHA 2021'
            },
            {
              statement: 'Perform aortic valve surgery in patients with severe AR (stages C-D) undergoing cardiac surgery for other indications.',
              level: 'B',
              source: 'ACC/AHA 2021'
            },
            {
              statement: 'Consider performing aortic valve surgery in patients with moderate AR (stage B) undergoing cardiac or aortic surgery for other indications.',
              level: 'C',
              source: 'ACC/AHA 2021'
            },
            {
              statement: 'Do not perform TAVI in patients with isolated AR having indications for SAVR and being candidates for surgery.',
              level: 'D',
              source: 'ACC/AHA 2021'
            },
            {
              statement: 'Perform aortic valve replacement or repair in symptomatic patients with severe AR irrespective of LV systolic function.',
              level: 'B',
              source: 'STS 2013'
            },
            {
              statement: 'Perform aortic valve replacement or repair in patients with chronic severe AR undergoing CABG or surgery on the aorta or other heart valves.',
              level: 'B',
              source: 'STS 2013'
            },
            {
              statement: 'Consider performing aortic valve replacement or repair in patients with moderate AR undergoing CABG or surgery on the aorta or other heart valves.',
              level: 'C',
              source: 'STS 2013'
            }
          ]
        },
        {
          title: 'Surgical Interventions - Asymptomatic Patients',
          id: 'surgical-interventions-asymptomatic',
          content: [
            {
              statement: 'Perform surgery in asymptomatic patients with LVESD > 50 mm or LVESD > 25 mm/m² body surface area (in patients with small body size) or resting LVEF ≤ 50%',
              level: 'B',
              source: 'EACTS/ESC 2022'
            },
            {
              statement: 'Consider performing surgery in asymptomatic patients with LVESD > 20 mm/m² body surface area (especially in patients with small body size) or resting LVEF ≤ 55%, if surgery is at low risk.',
              level: 'C',
              source: 'EACTS/ESC 2022'
            },
            {
              statement: 'Perform surgery in asymptomatic patients with severe AR undergoing CABG or surgery of the ascending aorta or of another valve.',
              level: 'B',
              source: 'EACTS/ESC 2022'
            },
            {
              statement: 'Consider performing aortic valve repair in selected patients at experienced centers when durable results are expected.',
              level: 'C',
              source: 'EACTS/ESC 2022'
            },
            {
              statement: 'Perform aortic valve surgery in asymptomatic patients with chronic severe AR and LV systolic dysfunction (LVEF ≤ 55%; stage C2) if no other cause for systolic dysfunction is identified.',
              level: 'B',
              source: 'ACC/AHA 2021'
            },
            {
              statement: 'Consider performing aortic valve surgery in asymptomatic patients with severe AR and normal LV systolic function (LVEF > 55%) if the left ventricle is severely enlarged (LVESD > 50 mm or LVESD > 25 mm/m²; stage C2).',
              level: 'C',
              source: 'ACC/AHA 2021'
            },
            {
              statement: 'Consider performing aortic valve surgery in asymptomatic patients with severe AR and normal LV systolic function at rest (LVEF > 55%; stage C1) and low surgical risk if there is a progressive decline in LVEF on at least 3 serial studies to the low-normal range (LVEF 55-60%) or a progressive increase in LV dilation into the severe range (LVEDD > 65 mm).',
              level: 'C',
              source: 'ACC/AHA 2021'
            },
            {
              statement: 'Perform aortic valve replacement or repair in asymptomatic patients with chronic severe AR and LV systolic dysfunction (LVEF ≤ 50%) at rest.',
              level: 'B',
              source: 'STS 2013'
            },
            {
              statement: 'Consider performing aortic valve replacement or repair in asymptomatic patients with severe AR with normal LV systolic function (LVEF > 50%) but with severe LV dilation (LVEDD > 75 mm or LVESD > 55 mm).',
              level: 'C',
              source: 'STS 2013'
            },
            {
              statement: 'Consider performing aortic valve replacement or repair in asymptomatic patients with severe AR and normal LV systolic function at rest (LVEF > 50%) when the degree of LV dilation exceeds a LVEDD of 70 mm or left diastolic end-systolic diameter of 50 mm, when there is evidence of progressive LV dilation, declining exercise tolerance, or abnormal hemodynamic responses to exercise.',
              level: 'C',
              source: 'STS 2013'
            },
            {
              statement: 'Do not perform aortic valve replacement in asymptomatic patients with mild, moderate, or severe AR and normal LV systolic function at rest (LVEF > 50%) when the degree of LV dilation is not moderate or severe.',
              level: 'D',
              source: 'STS 2013'
            }
          ]
        },
        {
          title: 'Specific Circumstances',
          id: 'specific-circumstances',
          content: [
            {
              statement: 'Obtain clinical evaluation and TTE in female patients with suspected valve disease contemplating pregnancy.',
              level: 'B',
              source: 'ACC/AHA 2021',
              subsections: [
                {
                  title: 'Pregnancy Considerations',
                  id: 'pregnancy-considerations',
                  content: [
                    {
                      statement: 'Obtain clinical evaluation and TTE in female patients with suspected valve disease contemplating pregnancy.',
                      level: 'B',
                      source: 'ACC/AHA 2021'
                    },
                    {
                      statement: 'Provide pre-pregnancy counseling by a cardiologist with expertise in managing valvular heart disease during pregnancy in female patients with severe valve disease (stages C-D) contemplating pregnancy.',
                      level: 'B',
                      source: 'ACC/AHA 2021'
                    },
                    {
                      statement: 'Consider obtaining exercise testing before pregnancy for risk assessment in asymptomatic female patients with severe valve disease (stage C1) contemplating pregnancy.',
                      level: 'C',
                      source: 'ACC/AHA 2021'
                    },
                    {
                      statement: 'Perform intervention before pregnancy on the basis of standard indications in symptomatic female patients with severe valvular heart disease contemplating pregnancy.',
                      level: 'B',
                      source: 'ACC/AHA 2021'
                    },
                    {
                      statement: 'Use a prosthetic valve based on a shared decision-making process accounting for the patient\'s values and preferences (including discussion of the risks of mechanical valves during pregnancy and the reduced durability of bioprosthetic valves in young females) in patients requiring a valve intervention before pregnancy.',
                      level: 'B',
                      source: 'ACC/AHA 2021'
                    },
                    {
                      statement: 'Prefer bioprosthetic over mechanical valves in female patients of childbearing age requiring valve replacement because of the increased maternal and fetal risks of mechanical heart valves in pregnancy.',
                      level: 'B',
                      source: 'ACC/AHA 2021'
                    },
                    {
                      statement: 'Obtain monitoring of pregnant patients with severe valve disease (stages C-D) in a tertiary-care center with a dedicated heart valve team of cardiologists, surgeons, anesthesiologists, and maternal-fetal medicine obstetricians with expertise in the management of high-risk cardiac conditions during pregnancy.',
                      level: 'B',
                      source: 'ACC/AHA 2021'
                    },
                    {
                      statement: 'Consider offering β-blockers as required for HR control or treatment of arrhythmias in pregnant patients with valvular heart disease.',
                      level: 'C',
                      source: 'ACC/AHA 2021'
                    },
                    {
                      statement: 'Consider offering diuretic medications, if needed for volume overload, in pregnant patients with valvular heart disease and HF symptoms.',
                      level: 'C',
                      source: 'ACC/AHA 2021'
                    },
                    {
                      statement: 'Do not use ACEis and ARBs in pregnant patients with valvular heart disease because of fetal risk.',
                      level: 'D',
                      source: 'ACC/AHA 2021'
                    },
                    {
                      statement: 'Consider performing valve surgery during pregnancy in patients with severe valve regurgitation and NYHA class IV HF symptoms (stage D) refractory to medical therapy.',
                      level: 'C',
                      source: 'ACC/AHA 2021'
                    },
                    {
                      statement: 'Do not perform valve surgeries in the absence of severe HF symptoms refractory to medical therapy in pregnant patients with valvular heart disease.',
                      level: 'D',
                      source: 'ACC/AHA 2021'
                    }
                  ]
                },
                {
                  title: 'Concurrent Aortic Stenosis',
                  id: 'concurrent-aortic-stenosis',
                  content: [
                    {
                      statement: 'Perform aortic valve replacement in symptomatic patients with combined aortic stenosis and AR and a peak transvalvular jet velocity of at least 4.0 m/s or a mean transvalvular gradient of at least 40 mmHg.',
                      level: 'B',
                      source: 'ACC/AHA 2021'
                    },
                    {
                      statement: 'Perform SAVR in asymptomatic patients with combined aortic stenosis and AR having a jet velocity of ≥ 4.0 m/s with an LVEF < 50%.',
                      level: 'B',
                      source: 'ACC/AHA 2021'
                    }
                  ]
                },
                {
                  title: 'Coronary Artery Disease',
                  id: 'coronary-artery-disease',
                  content: [
                    {
                      statement: 'Perform CABG in patients with a primary indication for aortic/mitral valve surgery and coronary artery diameter stenosis ≥ 70%.',
                      level: 'B',
                      source: 'ACC/AHA 2021'
                    },
                    {
                      statement: 'Consider performing CABG in patients with a primary indication for aortic/mitral valve surgery and coronary artery diameter stenosis ≥ 50-70%.',
                      level: 'C',
                      source: 'ACC/AHA 2021'
                    },
                    {
                      statement: 'Consider performing CABG in patients undergoing valve repair or replacement with significant proximal coronary artery disease (≥ 70% reduction in luminal diameter in major coronary arteries or ≥ 50% reduction in luminal diameter in the left main coronary artery and/or physiological significance).',
                      level: 'C',
                      source: 'ACC/AHA 2021'
                    },
                    {
                      statement: 'Consider performing PCI in patients with a primary indication to undergo TAVI or transcatheter mitral valve intervention and coronary artery diameter stenosis > 70% in proximal segments.',
                      level: 'C',
                      source: 'ACC/AHA 2021'
                    }
                  ]
                },
                {
                  title: 'Noncardiac Surgery',
                  id: 'noncardiac-surgery',
                  content: [
                    {
                      statement: 'Obtain preoperative echocardiography in patients with suspected moderate or severe valvular regurgitation before elective noncardiac surgery to guide perioperative management.',
                      level: 'B',
                      source: 'ACC/ACS/AHA/SVM 2024'
                    },
                    {
                      statement: 'Consider performing valvular intervention in patients with valvular heart disease meeting indications for valvular intervention based on clinical presentation and severity of regurgitation before elective elevated-risk noncardiac surgery to reduce perioperative risk.',
                      level: 'B',
                      source: 'ACC/ACS/AHA/SVM 2024'
                    },
                    {
                      statement: 'Consider performing elective noncardiac surgery in asymptomatic patients with moderate or severe AR and normal LV systolic function (LVEF > 55%).',
                      level: 'C',
                      source: 'ACC/ACS/AHA/SVM 2024'
                    },
                    {
                      statement: 'Perform valve surgery before elective intermediate- or high-risk noncardiac surgery in patients with symptomatic severe aortic valve regurgitation or asymptomatic severe aortic valve regurgitation and LVESD > 50 mm or LV end-systolic dimension index (LVESD/body surface area) > 25 mm/m² (in patients with small body size) or resting LVEF ≤ 50%.',
                      level: 'B',
                      source: 'ESC 2022'
                    },
                    {
                      statement: 'Obtain preoperative echocardiography in patients with clinically suspected moderate or greater degrees of valvular regurgitation undergoing noncardiac surgery.',
                      level: 'B',
                      source: 'ACC/AHA 2021'
                    },
                    {
                      statement: 'Perform valvular intervention before elective noncardiac surgery to reduce perioperative risk if possible, depending on the urgency and risk of the noncardiac procedure, in patients meeting standard indications for intervention for valvular heart disease (replacement and repair) based on symptoms and disease severity.',
                      level: 'B',
                      source: 'ACC/AHA 2021'
                    },
                    {
                      statement: 'Consider performing elective noncardiac surgeries in asymptomatic patients with moderate or greater degrees of AR and normal LV systolic function.',
                      level: 'C',
                      source: 'ACC/AHA 2021'
                    }
                  ]
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
              statement: 'Obtain baseline port-procedural TTE followed by periodic monitoring with TTE depending on type of intervention, length of time after intervention, ventricular function, and concurrent cardiac conditions in asymptomatic patients with any type of valve intervention.',
              level: 'B',
              source: 'ACC/AHA 2021'
            }
          ]
        }
      ]
    },
    studies: [
      {
        title: '2018 • Zochios - High-flow nasal oxygen in cardiac surgery',
        year: '2018',
        description: 'In adult patients with pre-existing respiratory disease undergoing elective cardiac surgery, high-flow nasal oxygen was superior to standard oxygen therapy with respect to the total length of hospital stay.',
        authors: 'V Zochios et al.',
        journal: 'Anaesthesia. 2018 Dec.'
      },
      {
        title: '2013 • RE-ALIGN - Dabigatran vs warfarin in valve replacement', 
        year: '2013',
        description: 'In patients who had undergone aortic or mitral valve replacement within the past 7 days and those who had undergone such replacement at least 3 months earlier, dabigatran was inferior to warfarin with respect to death, stroke, systemic embolism, or myocardial infarction.',
        authors: 'Eikelboom JW et al.',
        journal: 'N Engl J Med. 2013 Sep 26.'
      }
    ],
    references: [
      {
        id: 1,
        authors: 'Akinseye OA, Pathak A, Ibebuogu UN',
        title: 'Aortic Valve Regurgitation: A Comprehensive Review',
        journal: 'Curr Probl Cardiol. 2018 Aug;43(8):315-334',
        year: '2018',
        link: 'https://pubmed.ncbi.nlm.nih.gov/29174586'
      },
      {
        id: 2,
        authors: 'Maurer G',
        title: 'Aortic regurgitation',
        journal: 'Heart. 2006 Jul;92(7):994-1000',
        year: '2006',
        link: 'https://pubmed.ncbi.nlm.nih.gov/16775114'
      },
      {
        id: 3,
        authors: 'Nkomo VT, Gardin JM, Skelton TN et al',
        title: 'Burden of valvular heart diseases: a population-based study',
        journal: 'Lancet. 2006 Sep 16;368(9540):1005-11',
        year: '2006',
        link: 'https://pubmed.ncbi.nlm.nih.gov/16980116'
      },
      {
        id: 4,
        authors: 'Dujardin KS, Enriquez-Sarano M, Schaff HV et al',
        title: 'Mortality and morbidity of aortic regurgitation in clinical practice. A long-term follow-up study',
        journal: 'Circulation. 1999 Apr 13;99(14):1851-7',
        year: '1999',
        link: 'https://pubmed.ncbi.nlm.nih.gov/10199882'
      },
      {
        id: 5,
        authors: 'Catherine M Otto, Rick A Nishimura, Robert O Bonow et al',
        title: '2020 ACC / AHA guideline for the management of patients with valvular heart disease: A report of the American College of Cardiology / American Heart Association Joint Committee on Clinical Practice Guidelines',
        journal: 'J Thorac Cardiovasc Surg. 2021 Aug;162(2):e183-e353',
        year: '2021',
        link: 'https://pubmed.ncbi.nlm.nih.gov/33972115/'
      },
      {
        id: 6,
        authors: 'Alec Vahanian, Friedhelm Beyersdorf, Fabien Praz et al',
        title: '2021 ESC / EACTS Guidelines for the management of valvular heart disease',
        journal: 'Eur Heart J. 2022 Feb 12;43(7):561-632',
        year: '2022',
        link: 'https://pubmed.ncbi.nlm.nih.gov/34453165/'
      },
      {
        id: 7,
        authors: 'Annemarie Thompson, Kirsten E Fleischmann, Nathaniel R Smilowitz et al',
        title: '2024 AHA / ACC / ACS / ASNC / HRS / SCA / SCCT / SCMR / SVM Guideline for Perioperative Cardiovascular Management for Noncardiac Surgery: A Report of the American College of Cardiology / American Heart Association Joint Committee on Clinical Practice Guidelines',
        journal: 'Circulation. 2024 Nov 5;150(19):e351-e442',
        year: '2024',
        link: 'https://pubmed.ncbi.nlm.nih.gov/39316661/'
      },
      {
        id: 8,
        authors: 'John William McEvoy, Cian P McCarthy, Rosa Maria Bruno et al',
        title: '2024 ESC Guidelines for the management of elevated blood pressure and hypertension',
        journal: 'Eur Heart J. 2024 Oct 7;45(38):3912-4018',
        year: '2024',
        link: 'https://pubmed.ncbi.nlm.nih.gov/39210715/'
      },
      {
        id: 9,
        authors: 'Sigrun Halvorsen, Julinda Mehilli, Salvatore Cassese et al',
        title: '2022 ESC Guidelines on cardiovascular assessment and management of patients undergoing non-cardiac surgery',
        journal: 'Eur Heart J. 2022 Oct 14;43(39):3826-3924',
        year: '2022',
        link: 'https://pubmed.ncbi.nlm.nih.gov/36017553/'
      },
      {
        id: 10,
        authors: 'Svensson LG, Adams DH, Bonow RO et al',
        title: 'Aortic valve and ascending aorta guidelines for management and quality measures',
        journal: 'Ann Thorac Surg. 2013 Jun;95(6 Suppl):S1-66',
        year: '2013',
        link: 'https://pubmed.ncbi.nlm.nih.gov/23688839'
      },
      {
        id: 11,
        authors: 'Giuseppe Mancia, Reinhold Kreutz, Mattias Brunström et al',
        title: '2023 ESH Guidelines for the management of arterial hypertension The Task Force for the management of arterial hypertension of the European Society of Hypertension Endorsed by the European Renal Association (ERA) and the International Society of Hypertension (ISH)',
        journal: 'J Hypertens. 2023 Dec 1;41(12):1874-2071',
        year: '2023',
        link: 'https://pubmed.ncbi.nlm.nih.gov/37345492/'
      },
      {
        id: 12,
        authors: 'N K Choudhry, E E Etchells',
        title: 'The rational clinical examination. Does this patient have aortic regurgitation?',
        journal: 'JAMA. 1999 Jun 16;281(23):2231-8',
        year: '1999',
        link: 'https://pubmed.ncbi.nlm.nih.gov/10376577/'
      },
      {
        id: 13,
        authors: 'David L. Simel, Drummond Rennie, Sheri A. Keitz',
        title: 'The Rational Clinical Examination: Evidence-Based Clinical Diagnosis',
        journal: 'McGraw-Hill, New York. 2009',
        year: '2009',
        link: ''
      },
      {
        id: 14,
        authors: 'Sapira JD',
        title: 'Quincke, de Musset, Duroziez, and Hill: some aortic regurgitations',
        journal: 'South Med J. 1981 Apr;74(4):459-67',
        year: '1981',
        link: 'https://pubmed.ncbi.nlm.nih.gov/7013091'
      },
      {
        id: 15,
        authors: 'Nishimura RA, Otto CM, Bonow RO et al',
        title: '2014 AHA / ACC Guideline for the Management of Patients With Valvular Heart Disease: executive summary: a report of the American College of Cardiology / American Heart Association Task Force on Practice Guidelines',
        journal: 'Circulation. 2014 Jun 10;129(23):2440-92',
        year: '2014',
        link: 'https://pubmed.ncbi.nlm.nih.gov/24589852'
      },
      {
        id: 16,
        authors: 'Nishimura RA, Otto CM, Bonow RO et al',
        title: '2014 AHA / ACC guideline for the management of patients with valvular heart disease: a report of the American College of Cardiology / American Heart Association Task Force on Practice Guidelines',
        journal: 'J Am Coll Cardiol. 2014 Jun 10;63(22):e57-185',
        year: '2014',
        link: 'https://pubmed.ncbi.nlm.nih.gov/24603191'
      },
      {
        id: 17,
        authors: 'Nishimura RA, Otto CM, Bonow RO et al',
        title: '2017 AHA / ACC Focused Update of the 2014 AHA / ACC Guideline for the Management of Patients With Valvular Heart Disease: A Report of the American College of Cardiology / American Heart Association Task Force on Clinical Practice Guidelines',
        journal: 'Circulation. 2017 Jun 20;135(25):e1159-e1195',
        year: '2017',
        link: 'https://pubmed.ncbi.nlm.nih.gov/28298458'
      },
      {
        id: 18,
        authors: 'Helmut Baumgartner, Volkmar Falk, Jeroen J Bax et al',
        title: '2017 ESC / EACTS Guidelines for the management of valvular heart disease',
        journal: 'Eur Heart J. 2017 Sep 21;38(36):2739-2791',
        year: '2017',
        link: 'https://pubmed.ncbi.nlm.nih.gov/28886619'
      }
    ]
  }
}; 