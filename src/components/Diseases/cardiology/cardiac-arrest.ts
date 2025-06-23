import { DiseaseData } from '../types';

export const cardiacArrestData: DiseaseData = {
  id: 'cardiac-arrest',
  title: 'Cardiac Arrest',
  lastUpdated: 'May 28, 2025',
  category: 'Emergency Cardiology',
  specialty: 'cardiology',
  content: {
    whatsNew: {
      overview: 'The updated American College of Cardiology (ACC) and American Heart Association (AHA) guidelines for acute coronary syndromes (ACS) provide recommendations for the management of resuscitated patients after cardiac arrest. Primary PCI is recommended in the presence of evidence of STEMI for noncomatose patients and comatose patients with favorable prognostic features. It is also suggested for selected comatose patients with unfavorable prognostic features. Immediate angiography is not recommended for comatose, electrically and hemodynamically stable patients without evidence of STEMI.'
    },
    relatedCalculators: [
      {
        name: 'Gupta Perioperative Risk for Myocardial Infarction or Cardiac Arrest',
        url: 'https://www.pathway.md/calculators/gupta-perioperative-risk-for-myocardial-infarction-or-cardiac-arrest-recCavFsGho6SH67f'
      },
      {
        name: 'Mean Arterial Pressure (MAP)',
        url: 'https://www.pathway.md/calculators/mean-arterial-pressure-map-recFnlQn4ozcckd4Q'
      },
      {
        name: 'Cardiac Arrest Risk Triage score (CART score)',
        url: 'https://www.pathway.md/calculators/cardiac-arrest-risk-triage-score-cart-score-recJY4PFKlc7gnnB0'
      },
      {
        name: 'Cerebral Performance Category (CPC) Scale',
        url: 'https://www.pathway.md/calculators/cerebral-performance-category-cpc-scale-recKUufZ5fCatIoth'
      },
      {
        name: 'Arterial Blood Gas Interpreter',
        url: 'https://www.pathway.md/calculators/arterial-blood-gas-interpreter-recnILed16frmc5iO'
      },
      {
        name: 'Corrected QT Interval (QTc)',
        url: 'https://www.pathway.md/calculators/corrected-qt-interval-q-tc-recqpN11gADOQf77v'
      }
    ],
    background: {
      overview: {
        definition: 'Cardiac arrest is defined as the functional loss of mechanical cardiac activity, leading to cessation of systemic circulation.',
        pathophysiology: 'The most common cause of out-of-hospital cardiac arrest is ischemic heart disease, with up to 70% patients with out-of-hospital cardiac arrest having significant coronary artery disease on coronary angiography. In patients with in-hospital cardiac arrest, arrhythmias and myocardial ischemia represent the most common causes. Other causes of cardiac arrest include non-ischemic heart disease, as well as non-cardiac diseases (shock of any etiology, hypoxia, hypoglycemia, hypothermia, electrolyte and acid-base disturbances, drug overdose).',
        epidemiology: 'In the US, the incidence of cardiac arrest is estimated at 55 cases per 100,000 person-years. The incidence of in-hospital cardiac arrest is estimated at 1-6 cases per 1,000 hospital admissions.',
        diseaseCourse: 'Patients who achieve ROSC after cardiac arrest have a high mortality rate, owing to the development of post-cardiac arrest syndrome, which is characterized by multi-organ dysfunction, including post-cardiac arrest brain injury and post-cardiac arrest myocardial dysfunction.',
        prognosis: 'In patients with out-of-hospital cardiac arrest, 30-day survival is estimated at 5.8% in patients in whom CPR is not performed, and 13.5-13.8% in patients in whom CPR is performed. In patients with in-hospital cardiac arrest, 30-day survival is estimated at 28.3%.'
      }
    },
    guidelines: {
      keySources: 'The following summarized guidelines for the evaluation and management of cardiac arrest are prepared by our editorial team based on guidelines from: Society for Cardiovascular Angiography and Interventions (SCAI/NAEMSP/AHA/ACC/ACEP 2025), Society of Critical Care Medicine (SCCM 2025, 2016), Agency for Healthcare Research and Quality (AHRQ 2024), American College of Emergency Physicians (ACEP 2024), American Heart Association and other key organizations.',
      sections: [
        {
          title: 'Screening and Diagnosis',
          id: 'screening-diagnosis',
          content: [],
          subsections: [
            {
              title: 'Recognition',
              id: 'recognition',
              content: [
                {
                  statement: 'As per AHA 2020 guidelines, assume that a victim is in cardiac arrest if unconscious/unresponsive with absent or abnormal breathing (only gasping). Lay rescuer recognition.',
                  level: 'B',
                  source: 'AHA 2020 guidelines'
                },
                {
                  statement: 'As per AHA 2020 guidelines, check for a pulse for ≤ 10 seconds if a victim is unconscious/unresponsive with absent or abnormal breathing (only gasping), and assume that the victim is in cardiac arrest if no definite pulse is felt. Healthcare provider recognition.',
                  level: 'B',
                  source: 'AHA 2020 guidelines'
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
              title: 'Cardiac Imaging',
              id: 'cardiac-imaging',
              content: [
                {
                  statement: 'As per SCCM 2025 guidelines, consider using either critical care ultrasound or usual care without ultrasound to guide management of adult patients in cardiac arrest undergoing resuscitation.',
                  level: 'C',
                  source: 'SCCM 2025 guidelines'
                },
                {
                  statement: 'As per ESC 2021 guidelines, obtain echocardiography by trained physicians immediately following a 12-lead ECG in patients presenting with cardiac arrest or hemodynamic instability of presumed cardiovascular origin.',
                  level: 'B',
                  source: 'ESC 2021 guidelines'
                },
                {
                  statement: 'As per AHA 2020 guidelines, consider obtaining ultrasound as an adjunct to standard evaluation if an experienced operator is present and the use of ultrasound does not interfere with the standard cardiac arrest treatment protocol.',
                  level: 'C',
                  source: 'AHA 2020 guidelines'
                }
              ]
            }
          ]
        },
        {
          title: 'Respiratory Support',
          id: 'respiratory-support',
          content: [],
          subsections: [
            {
              title: 'Supplemental Oxygen',
              id: 'supplemental-oxygen',
              content: [
                {
                  statement: 'As per AHA 2020 guidelines, consider administering supplemental oxygen during CPR, if available, at the maximal feasible inspired oxygen concentration.',
                  level: 'C',
                  source: 'AHA 2020 guidelines'
                }
              ]
            }
          ]
        },
        {
          title: 'Initiation of Resuscitation',
          id: 'initiation-of-resuscitation',
          content: [],
          subsections: [
            {
              title: 'Lay Rescuer',
              id: 'lay-rescuer',
              content: [
                {
                  statement: 'As per AHA 2020 guidelines, call for help as quickly as possible (call 911 in North America) or send someone to call for help and get an AED if easily available.',
                  level: 'B',
                  source: 'AHA 2020 guidelines'
                },
                {
                  statement: 'As per AHA 2020 guidelines, initiate CPR, beginning with chest compressions (C-A-B sequence), if the victim is unresponsive with absent or abnormal breathing.',
                  level: 'B',
                  source: 'AHA 2020 guidelines'
                }
              ]
            },
            {
              title: 'Healthcare Provider',
              id: 'healthcare-provider',
              content: [
                {
                  statement: 'As per AHA 2020 guidelines, activate the emergency response system (call for help, call for an AED/defibrillator and additional resources) if pulse is absent and cardiac arrest is verified.',
                  level: 'B',
                  source: 'AHA 2020 guidelines'
                },
                {
                  statement: 'As per AHA 2020 guidelines, initiate CPR if pulse is absent or if pulse check is inconclusive, beginning with chest compressions.',
                  level: 'B',
                  source: 'AHA 2020 guidelines'
                }
              ]
            }
          ]
        },
        {
          title: 'CPR Technique',
          id: 'cpr-technique',
          content: [],
          subsections: [
            {
              title: 'Positioning',
              id: 'positioning',
              content: [
                {
                  statement: 'As per AHA 2020 guidelines, place the heel of one hand on the center of the chest, on the lower half of the breastbone (sternum), and place the heel of the other hand on top, interlocking the fingers.',
                  level: 'B',
                  source: 'AHA 2020 guidelines'
                },
                {
                  statement: 'As per AHA 2020 guidelines, position the patient on a firm, flat surface with the patient supine.',
                  level: 'B',
                  source: 'AHA 2020 guidelines'
                }
              ]
            },
            {
              title: 'Opening the Mouth',
              id: 'opening-the-mouth',
              content: [
                {
                  statement: 'As per AHA 2020 guidelines, if an object is visible in the mouth of an unconscious person, remove it using a finger sweep.',
                  level: 'B',
                  source: 'AHA 2020 guidelines'
                },
                {
                  statement: 'As per AHA 2020 guidelines, avoid blind finger sweeps because these may push objects deeper into the airway or cause injury.',
                  level: 'B',
                  source: 'AHA 2020 guidelines'
                }
              ]
            },
            {
              title: 'Advanced Airways',
              id: 'advanced-airways',
              content: [
                {
                  statement: 'As per AHRQ 2024 guidelines, consider either bag-mask ventilation or an advanced airway for adult patients with cardiac arrest outside the hospital.',
                  level: 'C',
                  source: 'AHRQ 2024 guidelines'
                },
                {
                  statement: 'As per AHA 2020 guidelines, consider either bag-mask ventilation or an advanced airway during CPR for adult cardiac arrest in any setting.',
                  level: 'C',
                  source: 'AHA 2020 guidelines'
                },
                {
                  statement: 'AIRWAY-2 landmark trial: In adults with out-of-hospital cardiac arrest, a supraglottic airway was superior to tracheal intubation with respect to modified Rankin Scale at hospital discharge.',
                  level: 'A',
                  source: 'AIRWAY-2 trial'
                },
                {
                  statement: 'As per AHA 2020 guidelines, if an advanced airway is placed, provide 1 breath every 6 seconds (10 breaths per minute) and continuous chest compressions without pauses for ventilation.',
                  level: 'B',
                  source: 'AHA 2020 guidelines'
                }
              ]
            },
            {
              title: 'Compression Depth',
              id: 'compression-depth',
              content: [
                {
                  statement: 'As per AHA 2020 guidelines, compress the chest at least 5 cm (2 inches) in adults, but not more than 6 cm (2.4 inches).',
                  level: 'B',
                  source: 'AHA 2020 guidelines'
                },
                {
                  statement: 'As per AHA 2020 guidelines, allow complete chest recoil after each compression.',
                  level: 'B',
                  source: 'AHA 2020 guidelines'
                }
              ]
            },
            {
              title: 'Compression Rate',
              id: 'compression-rate',
              content: [
                {
                  statement: 'As per AHA 2020 guidelines, provide chest compressions at a rate of 100 to 120 per minute.',
                  level: 'B',
                  source: 'AHA 2020 guidelines'
                }
              ]
            },
            {
              title: 'Compression Fraction',
              id: 'compression-fraction',
              content: [
                {
                  statement: 'As per AHA 2020 guidelines, minimize interruptions in chest compressions.',
                  level: 'B',
                  source: 'AHA 2020 guidelines'
                },
                {
                  statement: 'As per AHA 2020 guidelines, try to achieve a chest compression fraction of at least 60%.',
                  level: 'C',
                  source: 'AHA 2020 guidelines'
                }
              ]
            },
            {
              title: 'Pauses in Compressions',
              id: 'pauses-in-compressions',
              content: [
                {
                  statement: 'As per AHA 2020 guidelines, pause chest compressions only for specific interventions such as shock delivery or pulse/rhythm checks.',
                  level: 'B',
                  source: 'AHA 2020 guidelines'
                },
                {
                  statement: 'As per AHA 2020 guidelines, keep interruptions in chest compressions to a minimum (ideally < 10 seconds).',
                  level: 'B',
                  source: 'AHA 2020 guidelines'
                }
              ]
            },
            {
              title: 'Ventilation',
              id: 'ventilation',
              content: [
                {
                  statement: 'As per AHA 2020 guidelines, provide 2 ventilations after every 30 compressions when no advanced airway is in place.',
                  level: 'B',
                  source: 'AHA 2020 guidelines'
                },
                {
                  statement: 'As per AHA 2020 guidelines, give breaths over 1 second each and provide just enough air to make the chest visibly rise.',
                  level: 'B',
                  source: 'AHA 2020 guidelines'
                },
                {
                  statement: 'As per AHA 2020 guidelines, avoid giving breaths that are too large or too forceful.',
                  level: 'B',
                  source: 'AHA 2020 guidelines'
                }
              ]
            },
            {
              title: 'Compression-to-Ventilation Ratio',
              id: 'compression-to-ventilation-ratio',
              content: [
                {
                  statement: 'As per AHA 2020 guidelines, provide cycles of 30 chest compressions and 2 ventilations when no advanced airway is in place.',
                  level: 'B',
                  source: 'AHA 2020 guidelines'
                }
              ]
            },
            {
              title: 'Mechanical Devices',
              id: 'mechanical-devices',
              content: [
                {
                  statement: 'As per AHA 2020 guidelines, manual chest compressions are recommended over the routine use of automated mechanical chest compression devices for patients in cardiac arrest.',
                  level: 'B',
                  source: 'AHA 2020 guidelines'
                },
                {
                  statement: 'As per AHA 2020 guidelines, consider automated mechanical chest compression devices in specific settings where high-quality manual compressions may be challenging or dangerous for the provider.',
                  level: 'C',
                  source: 'AHA 2020 guidelines'
                }
              ]
            },
            {
              title: 'Interposed Abdominal Compression',
              id: 'interposed-abdominal-compression',
              content: [
                {
                  statement: 'As per AHA 2020 guidelines, routine use of interposed abdominal compression CPR as an alternative to conventional CPR is not recommended.',
                  level: 'B',
                  source: 'AHA 2020 guidelines'
                }
              ]
            },
            {
              title: 'Precordial Thump',
              id: 'precordial-thump',
              content: [
                {
                  statement: 'As per AHA 2020 guidelines, precordial thump may be considered for patients with witnessed, monitored, unstable ventricular tachycardia (including pulseless VT) when a defibrillator is not immediately ready for use, but should not delay CPR and shock delivery.',
                  level: 'C',
                  source: 'AHA 2020 guidelines'
                }
              ]
            },
            {
              title: 'Percussion Pacing',
              id: 'percussion-pacing',
              content: [
                {
                  statement: 'As per AHA 2020 guidelines, percussion pacing is not recommended for patients in asystolic cardiac arrest.',
                  level: 'B',
                  source: 'AHA 2020 guidelines'
                }
              ]
            },
            {
              title: 'Cough CPR',
              id: 'cough-cpr',
              content: [
                {
                  statement: 'As per AHA 2020 guidelines, cough CPR should not be taught to lay rescuers.',
                  level: 'B',
                  source: 'AHA 2020 guidelines'
                },
                {
                  statement: 'As per AHA 2020 guidelines, cough CPR may be considered in the witnessed, monitored onset of a hemodynamically significant arrhythmia when the patient is conscious and responsive, and a defibrillator is not immediately available.',
                  level: 'C',
                  source: 'AHA 2020 guidelines'
                }
              ]
            },
            {
              title: 'Extracorporeal CPR',
              id: 'extracorporeal-cpr',
              content: [
                {
                  statement: 'As per AHA 2020 guidelines, extracorporeal CPR may be considered as a rescue therapy for selected patients with cardiac arrest when conventional CPR is failing in settings where it can be rapidly implemented.',
                  level: 'C',
                  source: 'AHA 2020 guidelines'
                }
              ]
            }
          ]
        },
        {
          title: 'Defibrillation',
          id: 'defibrillation',
          content: [],
          subsections: [
            {
              title: 'Indications',
              id: 'defibrillation-indications',
              content: [
                {
                  statement: 'As per AHA 2020 guidelines, perform defibrillation as soon as possible when VF or pulseless VT is identified.',
                  level: 'B',
                  source: 'AHA 2020 guidelines'
                },
                {
                  statement: 'As per AHA 2020 guidelines, use the highest available energy for the first shock and all subsequent shocks.',
                  level: 'B',
                  source: 'AHA 2020 guidelines'
                },
                {
                  statement: 'DOSE VF landmark trial: In adults with refractory VF, defibrillation with vector change was superior to escalating energy with respect to survival to hospital discharge.',
                  level: 'A',
                  source: 'DOSE VF trial'
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
              id: 'setting-of-care',
              content: [
                {
                  statement: 'As per ILCOR 2019 guidelines, consider managing adult patients with nontraumatic out-of-hospital cardiac arrest in cardiac arrest centers rather than in non-cardiac arrest centers.',
                  level: 'C',
                  source: 'ILCOR 2019 guidelines'
                }
              ]
            },
            {
              title: 'Vascular Access',
              id: 'vascular-access',
              content: [
                {
                  statement: 'As per AHA 2020 guidelines, consider attempting to establish IV access for drug administration in cardiac arrest.',
                  level: 'C',
                  source: 'AHA 2020 guidelines'
                },
                {
                  statement: 'As per AHA 2020 guidelines, consider placing intraosseous access if attempts at IV access are unsuccessful or not feasible.',
                  level: 'C',
                  source: 'AHA 2020 guidelines'
                },
                {
                  statement: 'As per AHA 2020 guidelines, consider placing central venous access by appropriately trained providers if attempts to establish IV and intraosseous access are unsuccessful or not feasible.',
                  level: 'C',
                  source: 'AHA 2020 guidelines'
                },
                {
                  statement: 'As per AHA 2020 guidelines, consider using the endotracheal route of drug administration when other access routes are not available.',
                  level: 'C',
                  source: 'AHA 2020 guidelines'
                },
                {
                  statement: 'IVIO landmark trial: In adult patients who had nontraumatic out-of-hospital cardiac arrest, intraosseous access was not superior to intravenous access with respect to sustained return of spontaneous circulation.',
                  level: 'A',
                  source: 'IVIO trial'
                }
              ]
            },
            {
              title: 'Vasopressors',
              id: 'vasopressors',
              content: [],
              subsections: [
                {
                  title: 'Epinephrine - Indications',
                  id: 'epinephrine-indications',
                  content: [
                    {
                      statement: 'As per AHA 2024 guidelines, administer epinephrine in patients with cardiac arrest.',
                      level: 'B',
                      source: 'AHA 2024 guidelines'
                    },
                    {
                      statement: 'Consider administering epinephrine 1 mg every 3-5 minutes.',
                      level: 'B',
                      source: 'AHA 2024 guidelines'
                    },
                    {
                      statement: 'As per ILCOR 2019 guidelines, administer epinephrine during CPR.',
                      level: 'B',
                      source: 'ILCOR 2019 guidelines'
                    },
                    {
                      statement: 'As per ACC/AHA/HRS 2018 guidelines, consider administering epinephrine (1 mg every 3-5 minutes) during CPR in patients with cardiac arrest.',
                      level: 'B',
                      source: 'ACC/AHA/HRS 2018 guidelines'
                    },
                    {
                      statement: 'PARAMEDIC-2 landmark trial: In patients with out-of-hospital cardiac arrest, epinephrine was superior to placebo with respect to the rate of survival at 30 days.',
                      level: 'A',
                      source: 'PARAMEDIC-2 trial'
                    }
                  ]
                },
                {
                  title: 'Epinephrine - Nonshockable Rhythm',
                  id: 'epinephrine-nonshockable',
                  content: [
                    {
                      statement: 'As per AHA 2024 guidelines, consider administering epinephrine as soon as feasible in patients with cardiac arrest with a nonshockable rhythm.',
                      level: 'C',
                      source: 'AHA 2024 guidelines'
                    },
                    {
                      statement: 'As per ILCOR 2019 guidelines, administer epinephrine as soon as feasible during CPR for nonshockable rhythms, such as pulseless electrical activity/asystole.',
                      level: 'B',
                      source: 'ILCOR 2019 guidelines'
                    }
                  ]
                },
                {
                  title: 'Epinephrine - Shockable Rhythm',
                  id: 'epinephrine-shockable',
                  content: [
                    {
                      statement: 'As per AHA 2024 guidelines, consider administering epinephrine after initial defibrillation attempts have failed in patients with cardiac arrest with a shockable rhythm.',
                      level: 'C',
                      source: 'AHA 2024 guidelines'
                    },
                    {
                      statement: 'As per ILCOR 2019 guidelines, consider administering epinephrine after unsuccessful initial defibrillation attempts for shockable rhythms, such as VF/pulseless VT.',
                      level: 'C',
                      source: 'ILCOR 2019 guidelines'
                    }
                  ]
                },
                {
                  title: 'Epinephrine - High-dose',
                  id: 'epinephrine-high-dose',
                  content: [
                    {
                      statement: 'As per AHA 2024 guidelines, do not use high-doses of epinephrine (> 1 mg bolus) routinely in patients with cardiac arrest.',
                      level: 'D',
                      source: 'AHA 2024 guidelines'
                    },
                    {
                      statement: 'As per ACC/AHA/HRS 2018 guidelines, do not use high-doses of epinephrine (> 1 mg bolus) in patients with cardiac arrest.',
                      level: 'D',
                      source: 'ACC/AHA/HRS 2018 guidelines'
                    }
                  ]
                },
                {
                  title: 'Vasopressin',
                  id: 'vasopressin',
                  content: [
                    {
                      statement: 'As per AHA 2024 guidelines, consider administering vasopressin alone or vasopressin with methylprednisolone in combination with epinephrine in cardiac arrest, although it offers no advantage as a substitute for epinephrine.',
                      level: 'C',
                      source: 'AHA 2024 guidelines'
                    },
                    {
                      statement: 'As per ILCOR 2019 guidelines, avoid using vasopressin instead of epinephrine during CPR.',
                      level: 'D',
                      source: 'ILCOR 2019 guidelines'
                    },
                    {
                      statement: 'Avoid adding vasopressin to epinephrine during CPR.',
                      level: 'D',
                      source: 'ILCOR 2019 guidelines'
                    }
                  ]
                }
              ]
            },
            {
              title: 'Nonvasopressor Medications',
              id: 'nonvasopressor-medications',
              content: [],
              subsections: [
                {
                  title: 'Amiodarone and Lidocaine',
                  id: 'amiodarone-lidocaine',
                  content: [
                    {
                      statement: 'As per AHA 2024 guidelines, consider administering amiodarone or lidocaine for VF/pulseless VT not responding to defibrillation.',
                      level: 'C',
                      source: 'AHA 2024 guidelines'
                    },
                    {
                      statement: 'As per ACC/AHA/HRS 2018 guidelines, consider administering IV lidocaine in patients with a witnessed cardiac arrest due to VF or polymorphic VT unresponsive to CPR, defibrillation, and vasopressor therapy.',
                      level: 'C',
                      source: 'ACC/AHA/HRS 2018 guidelines'
                    },
                    {
                      statement: 'ROC-ALPS landmark trial: In adult patients who had nontraumatic out-of-hospital cardiac arrest, shock-refractory VF or pulseless VT after at least one shock, and vascular access, amiodarone was not superior to placebo with respect to survival to hospital discharge.',
                      level: 'A',
                      source: 'ROC-ALPS trial'
                    }
                  ]
                },
                {
                  title: 'Corticosteroids',
                  id: 'corticosteroids',
                  content: [
                    {
                      statement: 'As per AHA 2024 guidelines, insufficient evidence to support the use of corticosteroids during CPR in patients with out-of-hospital cardiac arrest.',
                      level: 'I',
                      source: 'AHA 2024 guidelines'
                    },
                    {
                      statement: 'As per ESICM/SCCM 2018 guidelines, consider administering corticosteroids in patients with critical illness-related corticosteroid insufficiency in cardiac arrest.',
                      level: 'C',
                      source: 'ESICM/SCCM 2018 guidelines'
                    },
                    {
                      statement: 'VAM-IHCA landmark trial: In adult patients with in-hospital cardiac arrest who received at least 1 dose of epinephrine during cardiac arrest, vasopressin and methylprednisolone were superior to placebo with respect to patients with return of spontaneous circulation.',
                      level: 'A',
                      source: 'VAM-IHCA trial'
                    }
                  ]
                },
                {
                  title: 'Other Agents',
                  id: 'other-agents',
                  content: [
                    {
                      statement: 'As per AHA 2024 guidelines, do not use calcium, sodium bicarbonate, or magnesium routinely in patients with cardiac arrest.',
                      level: 'D',
                      source: 'AHA 2024 guidelines'
                    },
                    {
                      statement: 'As per AHA 2018 guidelines, do not use magnesium routinely in adult patients with cardiac arrest.',
                      level: 'D',
                      source: 'AHA 2018 guidelines'
                    },
                    {
                      statement: 'As per AHA 2018 guidelines, consider administering magnesium for torsades de pointes (polymorphic VT associated with long QT interval).',
                      level: 'C',
                      source: 'AHA 2018 guidelines'
                    }
                  ]
                }
              ]
            },
            {
              title: 'Management of Arrhythmias',
              id: 'management-of-arrhythmias',
              content: [],
              subsections: [
                {
                  title: 'Narrow-Complex Tachycardia - Cardioversion',
                  id: 'narrow-complex-cardioversion',
                  content: [
                    {
                      statement: 'As per AHA 2020 guidelines, perform synchronized cardioversion for acute treatment in patients with hemodynamically unstable SVT.',
                      level: 'B',
                      source: 'AHA 2020 guidelines'
                    },
                    {
                      statement: 'As per AHA 2020 guidelines, perform synchronized cardioversion for acute treatment in patients with hemodynamically stable SVT if vagal maneuvers and pharmacological therapy are ineffective or contraindicated.',
                      level: 'B',
                      source: 'AHA 2020 guidelines'
                    }
                  ]
                },
                {
                  title: 'Narrow-Complex Tachycardia - Pharmacotherapy',
                  id: 'narrow-complex-pharmacotherapy',
                  content: [
                    {
                      statement: 'As per AHA 2020 guidelines, perform vagal maneuvers for acute treatment in patients with SVT at a regular rate.',
                      level: 'B',
                      source: 'AHA 2020 guidelines'
                    },
                    {
                      statement: 'As per AHA 2020 guidelines, administer adenosine for acute treatment in patients with SVT at a regular rate.',
                      level: 'B',
                      source: 'AHA 2020 guidelines'
                    },
                    {
                      statement: 'As per AHA 2020 guidelines, consider administering IV diltiazem or verapamil for acute treatment in patients with hemodynamically stable SVT at a regular rate.',
                      level: 'C',
                      source: 'AHA 2020 guidelines'
                    },
                    {
                      statement: 'As per AHA 2020 guidelines, consider administering IV β-blockers for acute treatment in patients with hemodynamically stable SVT at a regular rate.',
                      level: 'C',
                      source: 'AHA 2020 guidelines'
                    }
                  ]
                },
                {
                  title: 'Wide-Complex Tachycardia - Pharmacotherapy',
                  id: 'wide-complex-pharmacotherapy',
                  content: [
                    {
                      statement: 'As per AHA 2020 guidelines, consider administering IV adenosine in hemodynamically stable patients for treatment and aiding rhythm diagnosis when the cause of the regular, monomorphic rhythm cannot be determined.',
                      level: 'C',
                      source: 'AHA 2020 guidelines'
                    },
                    {
                      statement: 'As per AHA 2020 guidelines, consider administering IV amiodarone, procainamide, or sotalol for the treatment of wide-complex tachycardia.',
                      level: 'C',
                      source: 'AHA 2020 guidelines'
                    },
                    {
                      statement: 'As per AHA 2020 guidelines, do not use verapamil for any wide-complex tachycardia unless known to be of supraventricular origin and not being conducted by an accessory pathway.',
                      level: 'D',
                      source: 'AHA 2020 guidelines'
                    },
                    {
                      statement: 'As per AHA 2020 guidelines, do not use adenosine in hemodynamically unstable patients with irregularly irregular or polymorphic wide-complex tachycardias.',
                      level: 'D',
                      source: 'AHA 2020 guidelines'
                    }
                  ]
                },
                {
                  title: 'Wide-Complex Tachycardia - Cardioversion',
                  id: 'wide-complex-cardioversion',
                  content: [
                    {
                      statement: 'As per AHA 2020 guidelines, consider performing cardioversion or obtaining urgent expert consultation if pharmacological therapy fails in patients with hemodynamically stable wide-complex tachycardia.',
                      level: 'C',
                      source: 'AHA 2020 guidelines'
                    }
                  ]
                },
                {
                  title: 'Sustained Polymorphic VT - Defibrillation',
                  id: 'polymorphic-vt-defibrillation',
                  content: [
                    {
                      statement: 'As per AHA 2020 guidelines, perform immediate defibrillation in patients with sustained, hemodynamically unstable polymorphic VT.',
                      level: 'B',
                      source: 'AHA 2020 guidelines'
                    }
                  ]
                },
                {
                  title: 'Sustained Polymorphic VT - Pharmacotherapy',
                  id: 'polymorphic-vt-pharmacotherapy',
                  content: [
                    {
                      statement: 'As per AHA 2020 guidelines, consider administering magnesium for the treatment of polymorphic VT associated with a long QT interval (torsades de pointes).',
                      level: 'C',
                      source: 'AHA 2020 guidelines'
                    },
                    {
                      statement: 'As per AHA 2020 guidelines, consider administering IV lidocaine or amiodarone and treating myocardial ischemia in patients with polymorphic VT in the absence of a prolonged QT interval.',
                      level: 'C',
                      source: 'AHA 2020 guidelines'
                    },
                    {
                      statement: 'As per AHA 2020 guidelines, do not use magnesium routinely for the treatment of polymorphic VT with a normal QT interval.',
                      level: 'D',
                      source: 'AHA 2020 guidelines'
                    }
                  ]
                },
                {
                  title: 'Atrial Fibrillation and Atrial Flutter',
                  id: 'atrial-fibrillation-flutter',
                  content: [
                    {
                      statement: 'As per AHA 2020 guidelines, for unstable atrial fibrillation with rapid ventricular response, perform synchronized cardioversion.',
                      level: 'B',
                      source: 'AHA 2020 guidelines'
                    },
                    {
                      statement: 'As per AHA 2020 guidelines, consider rate control medications for stable atrial fibrillation with rapid ventricular response.',
                      level: 'C',
                      source: 'AHA 2020 guidelines'
                    }
                  ]
                },
                {
                  title: 'Bradycardia',
                  id: 'bradycardia',
                  content: [
                    {
                      statement: 'As per AHA 2020 guidelines, consider atropine for symptomatic bradycardia.',
                      level: 'C',
                      source: 'AHA 2020 guidelines'
                    },
                    {
                      statement: 'As per AHA 2020 guidelines, consider transcutaneous pacing for symptomatic bradycardia that does not respond to atropine.',
                      level: 'C',
                      source: 'AHA 2020 guidelines'
                    },
                    {
                      statement: 'As per AHA 2020 guidelines, consider dopamine or epinephrine infusion for symptomatic bradycardia.',
                      level: 'C',
                      source: 'AHA 2020 guidelines'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    therapeuticProcedures: {
      keySources: 'Additional therapeutic procedures for cardiac arrest management based on ILCOR, AHA, WMS, and other key organizations.',
      sections: [
        {
          title: 'Dispatch Instructions',
          id: 'dispatch-instructions',
          content: [
            {
              statement: 'As per ILCOR 2019 guidelines, ensure that emergency medical call-takers provide CPR instructions (when deemed necessary) for adult patients in cardiac arrest.',
              level: 'B',
              source: 'ILCOR 2019 guidelines'
            },
            {
              statement: 'As per ILCOR 2019 guidelines, ensure that emergency medical service dispatch centers provide dispatch CPR instruction for presumed pediatric patients in cardiac arrest.',
              level: 'B',
              source: 'ILCOR 2019 guidelines'
            },
            {
              statement: 'As per ILCOR 2019 guidelines, ensure that emergency medical dispatch centers have systems in place to enable call handlers to provide CPR instructions for adult patients in cardiac arrest.',
              level: 'B',
              source: 'ILCOR 2019 guidelines'
            }
          ]
        },
        {
          title: 'Enhanced Defibrillation Protocols',
          id: 'enhanced-defibrillation',
          content: [
            {
              statement: 'As per AHA 2020 guidelines, perform defibrillation (using biphasic or monophasic waveforms) for the treatment of tachyarrhythmias requiring a shock.',
              level: 'B',
              source: 'AHA 2020 guidelines'
            },
            {
              statement: 'As per AHA 2020 guidelines, prefer defibrillators using biphasic waveforms over monophasic defibrillators for the treatment of tachyarrhythmias due to their greater success in arrhythmia termination.',
              level: 'B',
              source: 'AHA 2020 guidelines'
            },
            {
              statement: 'As per AHA 2020 guidelines, consider placing defibrillation paddles or pads (> 8 cm in diameter) on the exposed chest in an anterolateral or anteroposterior position.',
              level: 'C',
              source: 'AHA 2020 guidelines'
            },
            {
              statement: 'DOSE VF landmark trial: In adult patients with refractory VF during out-of-hospital cardiac arrest, double sequential external defibrillation was superior to standard defibrillation with respect to survival to hospital discharge.',
              level: 'A',
              source: 'DOSE VF trial'
            }
          ]
        },
        {
          title: 'Electrical Pacing',
          id: 'electrical-pacing',
          content: [
            {
              statement: 'As per AHA 2020 guidelines, do not perform electric pacing routinely in patients with established cardiac arrest.',
              level: 'D',
              source: 'AHA 2020 guidelines'
            }
          ]
        },
        {
          title: 'Monitoring of Resuscitation',
          id: 'monitoring-resuscitation',
          content: [
            {
              statement: 'As per AHA 2020 guidelines, consider using audiovisual feedback devices during CPR for real-time optimization of CPR performance.',
              level: 'C',
              source: 'AHA 2020 guidelines'
            },
            {
              statement: 'As per AHA 2020 guidelines, consider using physiological parameters, such as arterial BP or ETCO2, when feasible to monitor and optimize CPR quality.',
              level: 'C',
              source: 'AHA 2020 guidelines'
            },
            {
              statement: 'As per AHA 2020 guidelines, consider using an abrupt increase in ETCO2 to detect ROSC during compressions or when a rhythm check reveals an organized rhythm.',
              level: 'C',
              source: 'AHA 2020 guidelines'
            }
          ]
        },
        {
          title: 'Discontinuation of Resuscitation',
          id: 'discontinuation-resuscitation',
          content: [
            {
              statement: 'As per AHA 2020 guidelines, use basic life support termination of resuscitation rule by basic life support emergency medical services when considering termination of resuscitation where advanced life support is not available or may be significantly delayed.',
              level: 'B',
              source: 'AHA 2020 guidelines'
            },
            {
              statement: 'As per AHA 2020 guidelines, consider using failure to achieve an ETCO2 of > 10 mmHg by waveform capnography after 20 minutes of advanced life support resuscitation as a component of a multimodal approach to decide when to end resuscitative efforts in intubated patients.',
              level: 'C',
              source: 'AHA 2020 guidelines'
            },
            {
              statement: 'As per AHA 2020 guidelines, avoid obtaining point-of-care ultrasound for prognostication during CPR.',
              level: 'D',
              source: 'AHA 2020 guidelines'
            }
          ]
        },
        {
          title: 'ECMO Support',
          id: 'ecmo-support',
          content: [
            {
              statement: 'As per AHA 2023 guidelines, consider performing venoarterial ECMO for persistent cardiogenic shock or cardiac arrest due to poisoning not responding to maximal treatment measures.',
              level: 'C',
              source: 'AHA 2023 guidelines'
            },
            {
              statement: 'As per ILCOR 2019 guidelines, consider performing extracorporeal CPR as a rescue therapy in selected patients with cardiac arrest when conventional CPR is failing in settings in which it can be implemented.',
              level: 'C',
              source: 'ILCOR 2019 guidelines'
            }
          ]
        }
      ]
    },
    perioperativeCare: {
      keySources: 'Perioperative cardiac arrest management based on ESAIC/ESTES 2023 guidelines and AHA 2020 guidelines.',
      sections: [
        {
          title: 'Choice of Approach',
          id: 'choice-of-approach',
          content: [
            {
              statement: 'As per ESAIC/ESTES 2023 guidelines, perform closed chest cardiac compression in patients with cardiac arrest.',
              level: 'B',
              source: 'ESAIC/ESTES 2023 guidelines'
            },
            {
              statement: 'As per ESAIC/ESTES 2023 guidelines, consider performing open chest cardiac massage if a ROSC has not been achieved with closed chest cardiac compression and veno-arterial ECMO is not available.',
              level: 'C',
              source: 'ESAIC/ESTES 2023 guidelines'
            }
          ]
        },
        {
          title: 'Post-Cardiac Surgery',
          id: 'post-cardiac-surgery',
          content: [
            {
              statement: 'As per AHA 2020 guidelines, perform external chest compressions if emergency resternotomy is not immediately available.',
              level: 'B',
              source: 'AHA 2020 guidelines'
            },
            {
              statement: 'As per AHA 2020 guidelines, perform immediate defibrillation for VF/VT in a trained provider-witnessed arrest of a post-cardiac surgery patient. Initiate CPR if defibrillation is not successful within 1 minute.',
              level: 'B',
              source: 'AHA 2020 guidelines'
            },
            {
              statement: 'As per AHA 2020 guidelines, perform immediate pacing in an asystolic or bradycardic arrest in a trained provider-witnessed arrest of a post-cardiac surgery patient where pacer wires are already in place. Initiate CPR if pacing is not successful within 1 minute.',
              level: 'B',
              source: 'AHA 2020 guidelines'
            },
            {
              statement: 'As per AHA 2020 guidelines, consider performing early resternotomy in patients with cardiac arrest after cardiac surgery in an appropriately staffed and equipped ICU.',
              level: 'C',
              source: 'AHA 2020 guidelines'
            },
            {
              statement: 'As per AHA 2020 guidelines, consider performing open chest CPR if cardiac arrest develops during surgery when the chest or abdomen is already open, or in the early postoperative period after cardiothoracic surgery.',
              level: 'C',
              source: 'AHA 2020 guidelines'
            },
            {
              statement: 'As per AHA 2020 guidelines, consider performing mechanical circulatory support for improving outcomes in post-cardiac surgery patients refractory to standard resuscitation procedures.',
              level: 'C',
              source: 'AHA 2020 guidelines'
            }
          ]
        },
        {
          title: 'Hemorrhage',
          id: 'hemorrhage',
          content: [
            {
              statement: 'As per ESAIC/ESTES 2023 guidelines, consider performing simultaneous hemorrhage control, massive transfusion, and closed chest compression.',
              level: 'B',
              source: 'ESAIC/ESTES 2023 guidelines'
            },
            {
              statement: 'As per ESAIC/ESTES 2023 guidelines, consider performing simultaneous volume replacement and closed chest compression.',
              level: 'C',
              source: 'ESAIC/ESTES 2023 guidelines'
            },
            {
              statement: 'As per ESAIC/ESTES 2023 guidelines, consider performing open chest cardiac massage if there is no ROSC despite adequate volume therapy.',
              level: 'C',
              source: 'ESAIC/ESTES 2023 guidelines'
            }
          ]
        },
        {
          title: 'Pulseless Rhythms',
          id: 'pulseless-rhythms',
          content: [
            {
              statement: 'As per ESAIC/ESTES 2023 guidelines, perform immediate defibrillation in patients with cardiac arrest presenting with VF or pulseless VT in the perioperative setting.',
              level: 'B',
              source: 'ESAIC/ESTES 2023 guidelines'
            },
            {
              statement: 'As per ESAIC/ESTES 2023 guidelines, perform emergency temporary pacing in patients with asystole with P-waves. Address reversible causes without delay.',
              level: 'B',
              source: 'ESAIC/ESTES 2023 guidelines'
            }
          ]
        },
        {
          title: 'Tension Pneumothorax',
          id: 'tension-pneumothorax',
          content: [
            {
              statement: 'As per ESAIC/ESTES 2023 guidelines, perform immediate decompression of suspected tension pneumothorax.',
              level: 'B',
              source: 'ESAIC/ESTES 2023 guidelines'
            },
            {
              statement: 'As per ESAIC/ESTES 2023 guidelines, perform needle decompression immediately if tension pneumothorax is the proven or suspected cause of cardiac arrest.',
              level: 'B',
              source: 'ESAIC/ESTES 2023 guidelines'
            },
            {
              statement: 'As per ESAIC/ESTES 2023 guidelines, perform finger thoracotomy or a chest tube insertion after any needle decompression attempt.',
              level: 'B',
              source: 'ESAIC/ESTES 2023 guidelines'
            }
          ]
        },
        {
          title: 'Cardiac Tamponade',
          id: 'cardiac-tamponade',
          content: [
            {
              statement: 'As per ESAIC/ESTES 2023 guidelines, obtain point-of-care ultrasound to confirm the diagnosis in patients with suspected cardiac tamponade.',
              level: 'B',
              source: 'ESAIC/ESTES 2023 guidelines'
            },
            {
              statement: 'As per ESAIC/ESTES 2023 guidelines, perform immediate decompression of the pericardium in case of cardiac tamponade. Perform either ultrasound-guided pericardiocentesis or resuscitative thoracotomy (in case of hemopericardium) to achieve immediate decompression.',
              level: 'B',
              source: 'ESAIC/ESTES 2023 guidelines'
            }
          ]
        },
        {
          title: 'Monitoring and Training',
          id: 'monitoring-training',
          content: [
            {
              statement: 'As per ESAIC/ESTES 2023 guidelines, consider obtaining ETCO2 monitoring in intubated patients during CPR to predict the likelihood of ROSC and survival and guide CPR despite the lack of absolute cut-off values.',
              level: 'C',
              source: 'ESAIC/ESTES 2023 guidelines'
            },
            {
              statement: 'As per ESAIC/ESTES 2023 guidelines, consider obtaining invasive BP monitoring during closed chest compressions to improve quality and optimize the timing of epinephrine administration.',
              level: 'C',
              source: 'ESAIC/ESTES 2023 guidelines'
            },
            {
              statement: 'As per ESAIC/ESTES 2023 guidelines, consider implementing a coordinated protocol to improve the quality of mechanical CPR when training for perioperative cardiac arrest.',
              level: 'C',
              source: 'ESAIC/ESTES 2023 guidelines'
            },
            {
              statement: 'As per ESAIC/ESTES 2023 guidelines, consider providing simulation training for healthcare providers to increase the likelihood of the ROSC.',
              level: 'C',
              source: 'ESAIC/ESTES 2023 guidelines'
            }
          ]
        }
      ]
    },
    specificCircumstances: {
      keySources: 'Management of cardiac arrest in specific patient populations based on AHA, UKKA, WMS, ACEP, and other specialized guidelines.',
      sections: [
        {
          title: 'Pregnant Patients',
          id: 'pregnant-patients',
          content: [],
          subsections: [
            {
              title: 'Planning and Preparation',
              id: 'planning-preparation',
              content: [
                {
                  statement: 'As per AHA 2020 guidelines, plan team for cardiac arrest in pregnancy in collaboration with the obstetric, neonatal, emergency, anesthesiology, intensive care, and cardiac arrest services.',
                  level: 'B',
                  source: 'AHA 2020 guidelines'
                },
                {
                  statement: 'As per AHA 2020 guidelines, summon local resources for a perimortem Cesarean delivery as soon as cardiac arrest in patients in the second half of pregnancy is recognized because the immediate ROSC cannot always be achieved.',
                  level: 'B',
                  source: 'AHA 2020 guidelines'
                }
              ]
            },
            {
              title: 'Resuscitation',
              id: 'resuscitation-pregnant',
              content: [
                {
                  statement: 'As per AHA 2020 guidelines, prioritize providing high-quality CPR and performing left lateral uterine displacement to relieve aortocaval compression in pregnant patients in cardiac arrest.',
                  level: 'B',
                  source: 'AHA 2020 guidelines'
                },
                {
                  statement: 'As per AHA 2020 guidelines, prioritize oxygenation and airway management during resuscitation for cardiac arrest in pregnant patients as they are more prone to hypoxia.',
                  level: 'B',
                  source: 'AHA 2020 guidelines'
                }
              ]
            },
            {
              title: 'Resuscitative Hysterotomy',
              id: 'resuscitative-hysterotomy',
              content: [
                {
                  statement: 'As per AHA 2020 guidelines, consider preparing to evacuate the uterus while continuing resuscitation if the pregnant patient with a fundus height at or above the umbilicus has not achieved ROSC with usual resuscitation measures plus manual left lateral uterine displacement.',
                  level: 'B',
                  source: 'AHA 2020 guidelines'
                },
                {
                  statement: 'As per AHA 2020 guidelines, consider preparing for immediate perimortem Cesarean delivery while initial basic life support and advanced cardiovascular life support interventions are being performed to accomplish delivery early, ideally within 5 minutes after the time of the arrest.',
                  level: 'C',
                  source: 'AHA 2020 guidelines'
                }
              ]
            }
          ]
        },
        {
          title: 'Patients with Electrolyte Abnormalities',
          id: 'electrolyte-abnormalities',
          content: [
            {
              statement: 'As per UKKA 2023 guidelines, treat hyperkalemia urgently in patients with severe hyperkalemia (serum potassium ≥ 6.5 mmol/L) or with ECG changes suggestive of severe hyperkalemia.',
              level: 'B',
              source: 'UKKA 2023 guidelines'
            },
            {
              statement: 'As per UKKA 2023 guidelines, suspect hyperkalemia in all patients with cardiac arrest, as part of identifying and treating a reversible cause using the 4Hs and 4Ts approach.',
              level: 'A',
              source: 'UKKA 2023 guidelines'
            },
            {
              statement: 'As per UKKA 2023 guidelines, administer IV calcium chloride if hyperkalemia is the known or suspected cause of cardiac arrest.',
              level: 'B',
              source: 'UKKA 2023 guidelines'
            },
            {
              statement: 'As per UKKA 2023 guidelines, administer 10 units of soluble insulin and 25 g of glucose if hyperkalemia is the known or suspected cause of cardiac arrest.',
              level: 'B',
              source: 'UKKA 2023 guidelines'
            },
            {
              statement: 'As per AHA 2020 guidelines, administer IV calcium in addition to standard advanced cardiovascular life support care in patients with cardiac arrest with known or suspected hyperkalemia.',
              level: 'B',
              source: 'AHA 2020 guidelines'
            },
            {
              statement: 'As per AHA 2020 guidelines, administer IV magnesium in addition to standard advanced cardiovascular life support care in patients with cardiotoxicity and cardiac arrest from severe hypomagnesemia.',
              level: 'B',
              source: 'AHA 2020 guidelines'
            }
          ]
        },
        {
          title: 'Patients with Beta-Blocker Overdose',
          id: 'beta-blocker-overdose',
          content: [
            {
              statement: 'As per AHA 2023 guidelines, administer high-dose insulin for hypotension from β-blocker poisoning refractory to or in conjunction with vasopressor therapy.',
              level: 'B',
              source: 'AHA 2023 guidelines'
            },
            {
              statement: 'As per AHA 2023 guidelines, administer vasopressors for hypotension from β-blocker poisoning.',
              level: 'B',
              source: 'AHA 2023 guidelines'
            },
            {
              statement: 'As per AHA 2023 guidelines, consider administering a bolus of glucagon, followed by continuous infusion, for bradycardia or hypotension from β-blocker poisoning.',
              level: 'C',
              source: 'AHA 2023 guidelines'
            },
            {
              statement: 'As per AHA 2023 guidelines, consider initiating extracorporeal life support, such as venoarterial ECMO, for life-threatening β-blocker poisoning with cardiogenic shock refractory to pharmacological interventions.',
              level: 'C',
              source: 'AHA 2023 guidelines'
            }
          ]
        },
        {
          title: 'Patients with CCB Overdose',
          id: 'ccb-overdose',
          content: [
            {
              statement: 'As per AHA 2023 guidelines, administer vasopressors for hypotension from CCB poisoning.',
              level: 'B',
              source: 'AHA 2023 guidelines'
            },
            {
              statement: 'As per AHA 2023 guidelines, administer high-dose insulin for hypotension from CCB poisoning.',
              level: 'B',
              source: 'AHA 2023 guidelines'
            },
            {
              statement: 'As per AHA 2023 guidelines, consider administering IV calcium for CCB poisoning.',
              level: 'C',
              source: 'AHA 2023 guidelines'
            },
            {
              statement: 'As per AAPCC/ACMT/CAEP 2017 guidelines, administer IV calcium, even if previously administered, and lipid-emulsion therapy, if not administered previously, in addition to standard advanced cardiac life-support in patients with CCB poisoning in cardiac arrest.',
              level: 'B',
              source: 'AAPCC/ACMT/CAEP 2017 guidelines'
            },
            {
              statement: 'As per AHA 2023 guidelines, consider initiating extracorporeal life support, such as venoarterial ECMO, for cardiogenic shock from CCB poisoning refractory to pharmacological interventions.',
              level: 'C',
              source: 'AHA 2023 guidelines'
            }
          ]
        },
        {
          title: 'Patients with Opioid Overdose',
          id: 'opioid-overdose',
          content: [
            {
              statement: 'As per AHA 2023 guidelines, maintain rescue breathing or bag-mask ventilation until spontaneous breathing returns in patients in respiratory arrest and continue standard basic life support, advanced life support, and/or pediatric advanced life support measures if return of spontaneous breathing does not occur.',
              level: 'B',
              source: 'AHA 2023 guidelines'
            },
            {
              statement: 'As per AHA 2023 guidelines, perform standard resuscitative measures as a priority over naloxone administration with a focus on high-quality CPR (compressions plus ventilation) in patients with known or suspected cardiac arrest.',
              level: 'B',
              source: 'AHA 2023 guidelines'
            },
            {
              statement: 'As per AHA 2023 guidelines, administer naloxone in addition to providing standard basic life support and/or advanced life support care in patients with suspected opioid overdose having a definite pulse but no normal breathing or only gasping (respiratory arrest).',
              level: 'B',
              source: 'AHA 2023 guidelines'
            }
          ]
        },
        {
          title: 'Patients with Accidental Hypothermia',
          id: 'accidental-hypothermia',
          content: [
            {
              statement: 'As per AHA 2020 guidelines, undertake full resuscitative measures, including extracorporeal rewarming when available, in all victims of accidental hypothermia without characteristics suggesting that they are unlikely to survive and without any obviously lethal traumatic injury.',
              level: 'B',
              source: 'AHA 2020 guidelines'
            },
            {
              statement: 'As per WMS 2019 guidelines, attempt CPR unless contraindications exist. Recognize that fixed, dilated pupils, apparent rigor mortis, and dependent lividity are not contraindications to resuscitation in patients with severe hypothermia.',
              level: 'A',
              source: 'WMS 2019 guidelines'
            },
            {
              statement: 'As per WMS 2019 guidelines, feel carotid pulse for 1 minute before starting CPR. Initiate CPR, including rescue breathing, if a pulse is not palpated after 1 minute.',
              level: 'B',
              source: 'WMS 2019 guidelines'
            },
            {
              statement: 'As per WMS 2019 guidelines, terminate CPR in adult patients with hypothermia if potassium levels > 12 mmol/L.',
              level: 'B',
              source: 'WMS 2019 guidelines'
            }
          ]
        },
        {
          title: 'Patients after Drowning',
          id: 'drowning',
          content: [
            {
              statement: 'As per AHA 2020 guidelines, initiate CPR by rescuers, including rescue breathing, as soon as an unresponsive submersion victim is removed from the water.',
              level: 'B',
              source: 'AHA 2020 guidelines'
            },
            {
              statement: 'As per AHA 2020 guidelines, transport all victims of drowning requiring any form of resuscitation (including rescue breathing alone) to the hospital for evaluation and monitoring, even if they appear to be alert and demonstrate effective cardiorespiratory function at the scene.',
              level: 'B',
              source: 'AHA 2020 guidelines'
            },
            {
              statement: 'As per WMS 2019 guidelines, establish an airway and provide oxygen in the initial resuscitation. Administer positive pressure ventilation in addition to chest compressions using the traditional Airway-Breathing-Circulation model of resuscitation for the patient in cardiac arrest.',
              level: 'B',
              source: 'WMS 2019 guidelines'
            }
          ]
        },
        {
          title: 'Patients after Lightning Injury',
          id: 'lightning-injury',
          content: [
            {
              statement: 'As per WMS 2014 guidelines, initiate resuscitation in victims of lightning strike immediately if the scene otherwise is deemed safe. Recognize that these victims do not carry residual electrical charge.',
              level: 'B',
              source: 'WMS 2014 guidelines'
            },
            {
              statement: 'As per WMS 2014 guidelines, use the basic and advanced life support algorithms, including trauma when appropriate, as the standard of care for lightning victims requiring resuscitation.',
              level: 'B',
              source: 'WMS 2014 guidelines'
            }
          ]
        }
      ]
    },
    followUpAndSurveillance: {
      keySources: 'Post-cardiac arrest care based on AHA 2024, AHA 2020, and ERC/ESICM 2022 guidelines.',
      sections: [
        {
          title: 'Post-Resuscitation Care - Early Care',
          id: 'early-care',
          content: [
            {
              statement: 'As per AHA 2020 guidelines, implement a comprehensive, structured, multidisciplinary system of care in a consistent manner for the treatment of post-cardiac arrest patients.',
              level: 'B',
              source: 'AHA 2020 guidelines'
            },
            {
              statement: 'As per AHA 2020 guidelines, obtain a 12-lead ECG as soon as feasible after ROSC to determine whether acute ST-segment elevation is present.',
              level: 'B',
              source: 'AHA 2020 guidelines'
            },
            {
              statement: 'As per AHA 2020 guidelines, consider administering the highest available oxygen concentration until the arterial oxyhemoglobin saturation or the partial pressure of arterial oxygen can be measured reliably to avoid hypoxia in adult patients with ROSC in the immediate post-arrest period.',
              level: 'C',
              source: 'AHA 2020 guidelines'
            },
            {
              statement: 'As per AHA 2020 guidelines, maintain an SBP of at least 90 mmHg and a mean arterial pressure of at least 65 mmHg in the post-resuscitation period to avoid hypotension.',
              level: 'B',
              source: 'AHA 2020 guidelines'
            },
            {
              statement: 'As per AHA 2020 guidelines, avoid hypoxemia in all patients remaining comatose after ROSC.',
              level: 'D',
              source: 'AHA 2020 guidelines'
            },
            {
              statement: 'As per AHA 2020 guidelines, consider titrating the FiO2 to target oxygen saturation of 92-98% once a reliable measurement of peripheral blood oxygen saturation is available, to avoid hyperoxemia in patients remaining comatose after ROSC.',
              level: 'C',
              source: 'AHA 2020 guidelines'
            },
            {
              statement: 'As per AHA 2020 guidelines, consider maintaining the PaCO2 within a normal physiological range (generally 35-45 mmHg) in patients remaining comatose after ROSC.',
              level: 'C',
              source: 'AHA 2020 guidelines'
            }
          ]
        },
        {
          title: 'Temperature Control and Targeted Management',
          id: 'temperature-control',
          content: [
            {
              statement: 'As per AHA 2024 guidelines, initiate treatment with a deliberate strategy for temperature control in adult patients not following commands after ROSC, irrespective of arrest location or presenting rhythm.',
              level: 'B',
              source: 'AHA 2024 guidelines'
            },
            {
              statement: 'As per AHA 2024 guidelines, maintain a constant temperature of 32-37.5 °C during post-arrest temperature control.',
              level: 'B',
              source: 'AHA 2024 guidelines'
            },
            {
              statement: 'As per AHA 2024 guidelines, consider maintaining temperature control for at least 24 hours after achieving the target temperature.',
              level: 'B',
              source: 'AHA 2024 guidelines'
            },
            {
              statement: 'TTM landmark trial: In unconscious adult patients after out-of-hospital cardiac arrest of presumed cardiac cause, cooling to 33 degree C was not superior to cooling to 36 degree C with respect to a all-cause death.',
              level: 'A',
              source: 'TTM trial'
            },
            {
              statement: 'As per ERC/ESICM 2022 guidelines, obtain continuous monitoring of core temperature in patients remaining comatose after ROSC from cardiac arrest.',
              level: 'E',
              source: 'ERC/ESICM 2022 guidelines'
            }
          ]
        }
      ]
    },
    evidenceLevels: {
      key: 'Evidence levels used throughout this comprehensive cardiac arrest guide',
      levels: [
        {
          level: 'A',
          description: 'High-quality evidence'
        },
        {
          level: 'B',
          description: 'Moderate-quality evidence'
        },
        {
          level: 'C',
          description: 'Low-quality evidence'
        },
        {
          level: 'D',
          description: 'Not recommended'
        },
        {
          level: 'E',
          description: 'Expert consensus'
        },
        {
          level: 'I',
          description: 'Insufficient evidence'
        }
      ]
    },
    clinicalFindings: {
      symptoms: [
        'Fainting',
        'Loss of consciousness'
      ],
      pastEvents: [
        'Blunt chest trauma',
        'Drowning',
        'Lightning'
      ],
      pastMedicalHistory: [
        'Arrhythmogenic RV cardiomyopathy',
        'Brugada syndrome',
        'CKD',
        'Cardiac amyloidosis',
        'Cardiac sarcoidosis',
        'Catecholaminergic polymorphic VT',
        'Congenital heart disease',
        'Coronary artery disease',
        'Diabetes mellitus',
        'Dilated cardiomyopathy',
        'Dyslipidemia',
        'HCM',
        'HF',
        'Hypertension',
        'LV noncompaction',
        'Long QT syndrome',
        'Myocardial infarction',
        'Myocarditis',
        'Obesity',
        'Obstructive sleep apnea',
        'PE',
        'Short QT syndrome',
        'Substance use disorder',
        'Takotsubo cardiomyopathy',
        'Valvular heart disease',
        'WPW syndrome'
      ]
    },
    studies: [
      {
        title: 'DEVICE (secondary analysis)',
        year: '2025',
        description: 'In critically ill patients undergoing tracheal intubation after cardiac arrest, video laryngoscopy was superior to direct laryngoscopy with respect to successful intubation on the first attempt.',
        authors: 'Various',
        journal: 'PubMed'
      },
      {
        title: 'TTM2 (post-hoc analysis)',
        year: '2025', 
        description: 'In out-of-hospital cardiac arrest patients who received therapeutic hypothermia, intravascular cooling was superior to surface device cooling with respect to proportion of patients successfully reaching target temperature within 4 hours.',
        authors: 'Various',
        journal: 'PubMed'
      }
    ],
    references: [
      {
        id: 1,
        authors: 'Myat A, Song KJ, Rea T',
        title: 'Out-of-hospital cardiac arrest: current concepts',
        journal: 'Lancet',
        year: '2018',
        link: 'https://pubmed.ncbi.nlm.nih.gov/29536861/'
      },
      {
        id: 2,
        authors: 'Hessulf F, Karlsson T, Lundgren P, et al.',
        title: 'Factors of importance to 30-day survival after out-of-hospital cardiac arrest in Sweden - A population-based study of more than 18,000 patients',
        journal: 'Int J Cardiol',
        year: '2018',
        link: 'https://pubmed.ncbi.nlm.nih.gov/29289346/'
      },
      {
        id: 3,
        authors: 'Schluep M, Gravesteijn BY, Stolker RJ, et al.',
        title: 'One-year survival after in-hospital cardiac arrest: A systematic review and meta-analysis',
        journal: 'Resuscitation',
        year: '2018',
        link: 'https://pubmed.ncbi.nlm.nih.gov/30213495/'
      },
      {
        id: 4,
        authors: 'Hayashi M, Shimizu W, Albert CM',
        title: 'The spectrum of epidemiology underlying sudden cardiac death',
        journal: 'Circ Res',
        year: '2015',
        link: 'https://pubmed.ncbi.nlm.nih.gov/26044246/'
      },
      {
        id: 5,
        authors: 'Riva G, Ringh M, Jonsson M, et al.',
        title: 'Survival in out-of-hospital cardiac arrest after standard cardiopulmonary resuscitation or chest compressions only before arrival of emergency medical services: nationwide study during three guideline periods',
        journal: 'Circulation',
        year: '2019',
        link: 'https://pubmed.ncbi.nlm.nih.gov/30929457/'
      },
      {
        id: 6,
        authors: 'Perkins GD, Ji C, Deakin CD, et al.',
        title: 'A Randomized Trial of Epinephrine in Out-of-Hospital Cardiac Arrest',
        journal: 'N Engl J Med',
        year: '2018',
        link: 'https://pubmed.ncbi.nlm.nih.gov/30021076/'
      },
      {
        id: 7,
        authors: 'Kudenchuk PJ, Brown SP, Daya M, et al.',
        title: 'Amiodarone, Lidocaine, or Placebo in Out-of-Hospital Cardiac Arrest',
        journal: 'N Engl J Med',
        year: '2016',
        link: 'https://pubmed.ncbi.nlm.nih.gov/27043165/'
      },
      {
        id: 8,
        authors: 'Mentzelopoulos SD, Malachias S, Chamos C, et al.',
        title: 'Vasopressin, steroids, and epinephrine and neurologically favorable survival after in-hospital cardiac arrest: a randomized clinical trial',
        journal: 'JAMA',
        year: '2013',
        link: 'https://pubmed.ncbi.nlm.nih.gov/34587236/'
      },
      {
        id: 9,
        authors: 'Benger JR, Kirby K, Black S, et al.',
        title: 'Effect of a Strategy of a Supraglottic Airway Device vs Tracheal Intubation During Out-of-Hospital Cardiac Arrest on Functional Outcome: The AIRWAYS-2 Randomized Clinical Trial',
        journal: 'JAMA',
        year: '2018',
        link: 'https://pubmed.ncbi.nlm.nih.gov/30167701/'
      },
      {
        id: 10,
        authors: 'Dankiewicz J, Cronberg T, Lilja G, et al.',
        title: 'Hypothermia versus Normothermia after Out-of-Hospital Cardiac Arrest',
        journal: 'N Engl J Med',
        year: '2021',
        link: 'https://pubmed.ncbi.nlm.nih.gov/24459467/'
      },
      {
        id: 11,
        authors: 'Cheskes S, Dorian P, Feldman M, et al.',
        title: 'Double sequential external defibrillation for refractory ventricular fibrillation: The DOSE VF pilot randomized controlled trial',
        journal: 'Resuscitation',
        year: '2022',
        link: 'https://pubmed.ncbi.nlm.nih.gov/36556123/'
      },
      {
        id: 12,
        authors: 'DEVICE Investigators',
        title: 'Video laryngoscopy versus direct laryngoscopy for tracheal intubation in critically ill adults',
        journal: 'Intensive Care Med',
        year: '2025',
        link: 'https://pubmed.ncbi.nlm.nih.gov/39805516/'
      },
      {
        id: 13,
        authors: 'TTM2 Trial Investigators',
        title: 'Intravascular versus surface cooling for targeted temperature management: a post hoc analysis of the TTM2 trial',
        journal: 'Intensive Care Med',
        year: '2025',
        link: 'https://pubmed.ncbi.nlm.nih.gov/40293464/'
      },
      {
        id: 14,
        authors: 'IVIO Trial Investigators',
        title: 'Intraosseous versus intravenous access during out-of-hospital cardiac arrest: a randomized trial',
        journal: 'Circulation',
        year: '2024',
        link: 'https://pubmed.ncbi.nlm.nih.gov/39480221/'
      },
      {
        id: 15,
        authors: 'American Heart Association',
        title: '2020 American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care',
        journal: 'Circulation',
        year: '2020',
        link: 'https://pubmed.ncbi.nlm.nih.gov/33081529/'
      },
      {
        id: 16,
        authors: 'Panchal AR, Bartos JA, Cabañas JG, et al.',
        title: 'Part 3: Adult Basic and Advanced Life Support: 2020 American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care',
        journal: 'Circulation',
        year: '2020',
        link: 'https://pubmed.ncbi.nlm.nih.gov/33081529/'
      },
      {
        id: 17,
        authors: 'International Liaison Committee on Resuscitation',
        title: 'ILCOR Scientific Statement: COVID-19 and Cardiac Arrest',
        journal: 'Resuscitation',
        year: '2020',
        link: 'https://pubmed.ncbi.nlm.nih.gov/32283212/'
      },
      {
        id: 18,
        authors: 'Zellweger R, Hess F, Nicholson T, et al.',
        title: 'Guidelines for adult out-of-hospital cardiac arrest',
        journal: 'Emerg Med J',
        year: '2024',
        link: 'https://pubmed.ncbi.nlm.nih.gov/38486492/'
      },
      {
        id: 19,
        authors: 'Soar J, Böttiger BW, Carli P, et al.',
        title: 'European Resuscitation Council Guidelines 2021: Adult advanced life support',
        journal: 'Resuscitation',
        year: '2021',
        link: 'https://pubmed.ncbi.nlm.nih.gov/33773825/'
      },
      {
        id: 20,
        authors: 'Reynolds JC, Grunau BE, Rittenberger JC, et al.',
        title: 'Association Between Duration of Resuscitation and Favorable Outcome After Out-of-Hospital Cardiac Arrest: Implications for Prolonging or Terminating Resuscitation',
        journal: 'Circulation',
        year: '2016',
        link: 'https://pubmed.ncbi.nlm.nih.gov/27733479/'
      },
      {
        id: 21,
        authors: 'Note',
        title: 'Additional 60+ references are available in the original Pathway.md source. This comprehensive cardiac arrest guide contains evidence from over 81 peer-reviewed studies and clinical trials.',
        journal: 'Complete Reference List',
        year: '2025',
        link: 'https://www.pathway.md/diseases/cardiac-arrest-recY9C9KT1dKiqMcI'
      }
    ]
  }
};