import { DiseaseData } from '../types';

export const cardiacArrestData: DiseaseData = {
  id: 'cardiac-arrest',
  title: 'Cardiac Arrest',
  lastUpdated: 'May 28, 2025',
  category: 'Emergency Cardiology',
  content: {
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
      keySources: 'The following summarized guidelines for the evaluation and management of cardiac arrest are prepared by our editorial team based on guidelines from: Society for Cardiovascular Angiography and Interventions (SCAI/NAEMSP/AHA/ACC/ACEP 2025), Society of Critical Care Medicine (SCCM 2025, 2016), Agency for Healthcare Research and Quality (AHRQ 2024), American College of Emergency Physicians (ACEP 2024), American Heart Association (AHA 2020, 2024), European Society of Cardiology (ESC 2021, 2022), International Liaison Committee on Resuscitation (ILCOR 2019).',
      sections: [
        {
          title: 'Screening and Diagnosis',
          id: 'screening-diagnosis',
          content: [
            {
              statement: 'As per AHA 2020 guidelines, assume that a victim is in cardiac arrest if unconscious/unresponsive with absent or abnormal breathing (only gasping).',
              level: 'B',
              source: 'AHA 2020 guidelines'
            }
          ]
        },
        {
          title: 'Medical Management',
          id: 'medical-management',
          content: [
            {
              statement: 'As per ILCOR 2019 guidelines, consider managing adult patients with nontraumatic out-of-hospital cardiac arrest in cardiac arrest centers rather than in non-cardiac arrest centers.',
              level: 'C',
              source: 'ILCOR 2019 guidelines'
            }
          ],
          subsections: [
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
                  statement: 'Consider placing intraosseous access if attempts at IV access are unsuccessful or not feasible.',
                  level: 'C',
                  source: 'AHA 2020 guidelines'
                },
                {
                  statement: 'Consider placing central venous access by appropriately trained providers if attempts to establish IV and intraosseous access are unsuccessful or not feasible.',
                  level: 'C',
                  source: 'AHA 2020 guidelines'
                },
                {
                  statement: 'Consider using the endotracheal route of drug administration when other access routes are not available.',
                  level: 'C',
                  source: 'AHA 2020 guidelines'
                }
              ]
            },
            {
              title: 'Vasopressors - Epinephrine',
              id: 'vasopressors-epinephrine',
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
                  statement: 'As per AHA 2024 guidelines, consider administering epinephrine as soon as feasible in patients with cardiac arrest with a nonshockable rhythm.',
                  level: 'C',
                  source: 'AHA 2024 guidelines'
                },
                {
                  statement: 'As per AHA 2024 guidelines, consider administering epinephrine after initial defibrillation attempts have failed in patients with cardiac arrest with a shockable rhythm.',
                  level: 'C',
                  source: 'AHA 2024 guidelines'
                },
                {
                  statement: 'As per AHA 2024 guidelines, do not use high-doses of epinephrine (> 1 mg bolus) routinely in patients with cardiac arrest.',
                  level: 'D',
                  source: 'AHA 2024 guidelines'
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
            },
            {
              title: 'Nonvasopressor Medications',
              id: 'nonvasopressor-medications',
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
                  statement: 'As per AHA 2024 guidelines, do not use calcium, sodium bicarbonate, or magnesium routinely in patients with cardiac arrest.',
                  level: 'D',
                  source: 'AHA 2024 guidelines'
                }
              ]
            }
          ]
        },
        {
          title: 'Therapeutic Procedures',
          id: 'therapeutic-procedures',
          content: [],
          subsections: [
            {
              title: 'CPR Technique',
              id: 'cpr-technique',
              content: [
                {
                  statement: 'As per AHA 2020 guidelines, perform chest compressions to a depth of at least 5 cm (2 in) in average adult patients while avoiding excessive chest compression depths (> 6 cm; 2.4 in) during manual CPR.',
                  level: 'B',
                  source: 'AHA 2020 guidelines'
                },
                {
                  statement: 'Consider performing chest compressions at a rate of 100-120/minute in adult patients in cardiac arrest.',
                  level: 'C',
                  source: 'AHA 2020 guidelines'
                },
                {
                  statement: 'Place the heel of one hand on the center (middle) of the victim\'s chest (the lower half of the sternum) and the heel of the other hand on top of the first so that the hands are overlapped for chest compressions.',
                  level: 'B',
                  source: 'AHA 2020 guidelines'
                },
                {
                  statement: 'Consider performing CPR with cycles of 30 compressions and 2 breaths by healthcare providers before placement of an advanced airway.',
                  level: 'C',
                  source: 'AHA 2020 guidelines'
                }
              ]
            },
            {
              title: 'Defibrillation',
              id: 'defibrillation',
              content: [
                {
                  statement: 'As per AHA 2020 guidelines, perform defibrillation (using biphasic or monophasic waveforms) for the treatment of tachyarrhythmias requiring a shock.',
                  level: 'B',
                  source: 'AHA 2020 guidelines'
                },
                {
                  statement: 'Prefer defibrillators using biphasic waveforms over monophasic defibrillators for the treatment of tachyarrhythmias due to their greater success in arrhythmia termination.',
                  level: 'B',
                  source: 'AHA 2020 guidelines'
                },
                {
                  statement: 'Consider preferring a single shock strategy over stacked shocks for defibrillation in the setting of unmonitored cardiac arrest.',
                  level: 'C',
                  source: 'AHA 2020 guidelines'
                }
              ]
            },
                         {
               title: 'Advanced Airways',
               id: 'advanced-airways',
               content: [
                 {
                   statement: 'As per AHRQ 2024 guidelines, consider using either a bag-valve mask alone or a supraglottic airway for airway management in adult and pediatric patients with out-of-hospital cardiac arrest.',
                   level: 'C',
                   source: 'AHRQ 2024 guidelines'
                 },
                 {
                   statement: 'Consider using either a bag-valve mask alone or performing endotracheal intubation for airway management in adult patients with out-of-hospital cardiac arrest.',
                   level: 'C',
                   source: 'AHRQ 2024 guidelines'
                 },
                 {
                   statement: 'As per AHA 2020 guidelines, open the airway using a head tilt-chin lift maneuver if no cervical spine injury is suspected.',
                   level: 'B',
                   source: 'AHA 2020 guidelines'
                 },
                 {
                   statement: 'Open the airway using a jaw thrust without head extension in patients with suspected cervical spine injury.',
                   level: 'B',
                   source: 'AHA 2020 guidelines'
                 }
               ]
             },
             {
               title: 'Compression and Ventilation Details',
               id: 'compression-ventilation-details',
               content: [
                 {
                   statement: 'As per AHA 2020 guidelines, ensure that total preshock and postshock pauses in chest compressions are as short as possible.',
                   level: 'B',
                   source: 'AHA 2020 guidelines'
                 },
                 {
                   statement: 'Minimize the time for checking for a pulse (≤ 10 seconds) during a rhythm check and resume chest compressions if a pulse is not definitely felt.',
                   level: 'B',
                   source: 'AHA 2020 guidelines'
                 },
                 {
                   statement: 'Consider switching chest compressors approximately every 2 minutes to prevent decreases in the quality of compressions.',
                   level: 'C',
                   source: 'AHA 2020 guidelines'
                 },
                 {
                   statement: 'Consider providing tidal volumes of approximately 500-600 mL, or enough to produce visible chest rise, in adult patients in cardiac arrest receiving ventilation.',
                   level: 'C',
                   source: 'AHA 2020 guidelines'
                 },
                 {
                   statement: 'Avoid delivering excessive ventilation (too many breaths or too large a volume).',
                   level: 'D',
                   source: 'AHA 2020 guidelines'
                 }
               ]
             },
             {
               title: 'Mechanical Devices',
               id: 'mechanical-devices',
               content: [
                 {
                   statement: 'As per AHA 2020 guidelines, do not use mechanical CPR devices routinely.',
                   level: 'D',
                   source: 'AHA 2020 guidelines'
                 },
                 {
                   statement: 'Consider using mechanical CPR devices in specific settings where the delivery of high-quality manual compressions may be challenging or dangerous for the provider.',
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
                   statement: 'Consider using physiological parameters, such as arterial BP or ETCO2, when feasible to monitor and optimize CPR quality.',
                   level: 'C',
                   source: 'AHA 2020 guidelines'
                 },
                 {
                   statement: 'Consider using an abrupt increase in ETCO2 to detect ROSC during compressions or when a rhythm check reveals an organized rhythm.',
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
                   statement: 'As per AHA 2020 guidelines, use basic life support termination of resuscitation rule by basic life support emergency medical services when considering termination of resuscitation where advanced life support is not available.',
                   level: 'B',
                   source: 'AHA 2020 guidelines'
                 },
                 {
                   statement: 'Consider using the adult advanced life support termination of resuscitation rule by prehospital advanced life support providers to terminate resuscitation efforts.',
                   level: 'C',
                   source: 'AHA 2020 guidelines'
                 },
                 {
                   statement: 'Consider using failure to achieve an ETCO2 of > 10 mmHg by waveform capnography after 20 minutes of advanced life support resuscitation as a component of a multimodal approach to decide when to end resuscitative efforts in intubated patients.',
                   level: 'C',
                   source: 'AHA 2020 guidelines'
                 }
               ]
             }
          ]
        },
        {
          title: 'Post-Resuscitation Care',
          id: 'post-resuscitation-care',
          content: [
            {
              statement: 'As per AHA 2020 guidelines, implement a comprehensive, structured, multidisciplinary system of care in a consistent manner for the treatment of post-cardiac arrest patients.',
              level: 'B',
              source: 'AHA 2020 guidelines'
            },
            {
              statement: 'Obtain a 12-lead ECG as soon as feasible after ROSC to determine whether acute ST-segment elevation is present.',
              level: 'B',
              source: 'AHA 2020 guidelines'
            }
          ],
          subsections: [
            {
              title: 'Temperature Control',
              id: 'temperature-control',
              content: [
                {
                  statement: 'As per AHA 2024 guidelines, initiate treatment with a deliberate strategy for temperature control in adult patients not following commands after ROSC, irrespective of arrest location or presenting rhythm.',
                  level: 'B',
                  source: 'AHA 2024 guidelines'
                },
                {
                  statement: 'Maintain a constant temperature of 32-37.5 °C during post-arrest temperature control.',
                  level: 'B',
                  source: 'AHA 2024 guidelines'
                },
                {
                  statement: 'Consider maintaining temperature control for at least 24 hours after achieving the target temperature.',
                  level: 'B',
                  source: 'AHA 2024 guidelines'
                },
                {
                  statement: 'Consider preventing fever actively in patients not responding to verbal commands after initial temperature control.',
                  level: 'C',
                  source: 'AHA 2024 guidelines'
                }
              ]
            },
            {
              title: 'Coronary Angiography',
              id: 'coronary-angiography',
              content: [
                {
                  statement: 'As per ACC/ACEP/AHA/SCAI 2025 guidelines, do not perform immediate angiography in resuscitated patients who are comatose after cardiac arrest, electrically and hemodynamically stable, and without evidence of STEMI.',
                  level: 'D',
                  source: 'ACC/ACEP/AHA/SCAI 2025 guidelines'
                },
                {
                  statement: 'As per AHA 2024 guidelines, obtain emergent coronary angiography in all patients with cardiac arrest with suspected cardiac cause of arrest and ST-elevation on ECG.',
                  level: 'B',
                  source: 'AHA 2024 guidelines'
                },
                {
                  statement: 'Consider obtaining emergent coronary angiography in selected adult patients without ST-elevation on ECG but with an elevated risk of significant coronary artery disease.',
                  level: 'C',
                  source: 'AHA 2024 guidelines'
                }
              ]
            },
                         {
               title: 'Management of Seizures',
               id: 'seizure-management',
               content: [
                 {
                   statement: 'As per AHA 2024 guidelines, do not administer seizure prophylaxis in adult patients after cardiac arrest.',
                   level: 'D',
                   source: 'AHA 2024 guidelines'
                 },
                 {
                   statement: 'Obtain and interpret EEG promptly for the diagnosis of seizures in patients not following commands after ROSC.',
                   level: 'B',
                   source: 'AHA 2024 guidelines'
                 },
                 {
                   statement: 'Treat clinically apparent seizures in adult patients after cardiac arrest.',
                   level: 'B',
                   source: 'AHA 2024 guidelines'
                 },
                 {
                   statement: 'Consider treating nonconvulsive seizures (diagnosed by EEG only) in adult patients after cardiac arrest.',
                   level: 'C',
                   source: 'AHA 2024 guidelines'
                 }
               ]
             },
             {
               title: 'Post-Resuscitation Evaluation',
               id: 'post-resuscitation-evaluation',
               content: [
                 {
                   statement: 'As per ESC 2022 guidelines, retrieve recordings from cardiac implantable electronic devices and wearable monitors in all sudden cardiac arrest survivors.',
                   level: 'B',
                   source: 'ESC 2022 guidelines'
                 },
                 {
                   statement: 'Obtain repeated 12-lead ECGs during stable rhythm and continuous cardiac monitoring in sudden cardiac arrest survivors.',
                   level: 'B',
                   source: 'ESC 2022 guidelines'
                 },
                 {
                   statement: 'Obtain echocardiography for evaluation of cardiac structure and function in all sudden cardiac arrest survivors.',
                   level: 'B',
                   source: 'ESC 2022 guidelines'
                 },
                 {
                   statement: 'Obtain coronary imaging and cardiac MRI with late gadolinium enhancement for evaluation of cardiac structure and function in all sudden cardiac arrest survivors without a clear underlying cause.',
                   level: 'B',
                   source: 'ESC 2022 guidelines'
                 }
               ]
             },
             {
               title: 'Revascularization',
               id: 'revascularization',
               content: [
                 {
                   statement: 'As per ACC/ACEP/AHA/SCAI 2025 guidelines, perform primary PCI in patients who have been resuscitated after cardiac arrest and are noncomatose or who are comatose with favorable prognostic features and evidence of STEMI to improve survival.',
                   level: 'B',
                   source: 'ACC/ACEP/AHA/SCAI 2025 guidelines'
                 },
                 {
                   statement: 'Consider performing primary PCI in patients with cardiac arrest who are comatose, have unfavorable prognostic features, and evidence of STEMI after individualized assessment.',
                   level: 'C',
                   source: 'ACC/ACEP/AHA/SCAI 2025 guidelines'
                 }
               ]
             },
             {
               title: 'Genetic Testing',
               id: 'genetic-testing',
               content: [
                 {
                   statement: 'As per ESC 2022 guidelines, obtain genetic testing in patients survived sudden cardiac arrest due to ventricular arrhythmia.',
                   level: 'B',
                   source: 'ESC 2022 guidelines'
                 },
                 {
                   statement: 'As per ACC/AHA/HRS 2018 guidelines, obtain further evaluation for genetic arrhythmia syndromes in young patients (aged < 40 years) with unexplained sudden cardiac arrest.',
                   level: 'B',
                   source: 'ACC/AHA/HRS 2018 guidelines'
                 },
                 {
                   statement: 'Consider offering genetic counseling in patients and family members requiring genetic testing for risk stratification.',
                   level: 'B',
                   source: 'ACC/AHA/HRS 2018 guidelines'
                 }
               ]
             },
             {
               title: 'Neuroprognostication',
               id: 'neuroprognostication',
               content: [
                 {
                   statement: 'As per AHA 2020 guidelines, ensure a multimodal approach for neuroprognostication based on a combination of findings (rather than a single finding) in patients remaining comatose after cardiac arrest.',
                   level: 'B',
                   source: 'AHA 2020 guidelines'
                 },
                 {
                   statement: 'Delay neuroprognostication until adequate time has passed to avoid confounding by medication effect or a transiently poor examination.',
                   level: 'B',
                   source: 'AHA 2020 guidelines'
                 },
                 {
                   statement: 'Consider obtaining multimodal neuroprognostication at a minimum of 72 hours after normothermia in patients remaining comatose after cardiac arrest.',
                   level: 'C',
                   source: 'AHA 2020 guidelines'
                 },
                 {
                   statement: 'Consider assessing for bilaterally absent pupillary light reflex, bilaterally absent corneal reflexes, quantitative pupillometry, and status myoclonus at ≥ 72 hours after cardiac arrest.',
                   level: 'C',
                   source: 'AHA 2020 guidelines'
                 },
                 {
                   statement: 'Consider assessing for high serum values of NSE within 72 hours after cardiac arrest, in combination with other prognostic tests.',
                   level: 'C',
                   source: 'AHA 2020 guidelines'
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
                  statement: 'As per AHA 2020 guidelines, plan team for cardiac arrest in pregnancy in collaboration with obstetric, neonatal, emergency, anesthesiology, intensive care, and cardiac arrest services.',
                  level: 'B',
                  source: 'AHA 2020 guidelines'
                },
                {
                  statement: 'Prioritize providing high-quality CPR and performing left lateral uterine displacement to relieve aortocaval compression in pregnant patients in cardiac arrest.',
                  level: 'B',
                  source: 'AHA 2020 guidelines'
                },
                {
                  statement: 'Consider preparing for immediate perimortem Cesarean delivery while initial basic life support and advanced cardiovascular life support interventions are being performed to accomplish delivery early, ideally within 5 minutes after the time of the arrest.',
                  level: 'C',
                  source: 'AHA 2020 guidelines'
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
                  statement: 'Suspect hyperkalemia in all patients with cardiac arrest, as part of identifying and treating a reversible cause using the 4Hs and 4Ts approach.',
                  level: 'A',
                  source: 'UKKA 2023 guidelines'
                },
                {
                  statement: 'Administer IV calcium chloride if hyperkalemia is the known or suspected cause of cardiac arrest.',
                  level: 'B',
                  source: 'UKKA 2023 guidelines'
                }
              ]
            },
                         {
               title: 'Drug Overdose Patients',
               id: 'drug-overdose',
               content: [
                 {
                   statement: 'As per AHA 2023 guidelines, administer high-dose insulin for hypotension from β-blocker poisoning refractory to or in conjunction with vasopressor therapy.',
                   level: 'B',
                   source: 'AHA 2023 guidelines'
                 },
                 {
                   statement: 'Administer vasopressors for hypotension from CCB poisoning.',
                   level: 'B',
                   source: 'AHA 2023 guidelines'
                 },
                 {
                   statement: 'Perform standard resuscitative measures as a priority over naloxone administration with a focus on high-quality CPR in patients with known or suspected cardiac arrest.',
                   level: 'B',
                   source: 'AHA 2023 guidelines'
                 },
                 {
                   statement: 'Consider administering a bolus of glucagon, followed by continuous infusion, for bradycardia or hypotension from β-blocker poisoning.',
                   level: 'C',
                   source: 'AHA 2023 guidelines'
                 },
                 {
                   statement: 'Consider administering IV calcium for CCB poisoning.',
                   level: 'C',
                   source: 'AHA 2023 guidelines'
                 }
               ]
             },
             {
               title: 'Patients with Pulmonary Embolism',
               id: 'pulmonary-embolism',
               content: [
                 {
                   statement: 'As per AHA 2020 guidelines, consider performing thrombolysis, surgical embolectomy, or mechanical embolectomy as emergency treatment options in patients with confirmed PE as the precipitant of cardiac arrest.',
                   level: 'C',
                   source: 'AHA 2020 guidelines'
                 },
                 {
                   statement: 'Consider performing thrombolysis when cardiac arrest is suspected to be caused by PE.',
                   level: 'C',
                   source: 'AHA 2020 guidelines'
                 }
               ]
             },
             {
               title: 'Patients with Asthma',
               id: 'asthma',
               content: [
                 {
                   statement: 'As per AHA 2020 guidelines, obtain prompt evaluation for tension pneumothorax in patients with asthma with cardiac arrest, sudden elevation in peak inspiratory pressures, or difficulty ventilating.',
                   level: 'B',
                   source: 'AHA 2020 guidelines'
                 },
                 {
                   statement: 'Consider using a low respiratory rate and tidal volume ventilation strategy due to the potential effects of intrinsic PEEP and risk of barotrauma.',
                   level: 'C',
                   source: 'AHA 2020 guidelines'
                 }
               ]
             },
             {
               title: 'Patients with Anaphylaxis',
               id: 'anaphylaxis',
               content: [
                 {
                   statement: 'As per AHA 2020 guidelines, undertake standard resuscitative measures and administer immediate epinephrine in patients in cardiac arrest secondary to anaphylaxis.',
                   level: 'B',
                   source: 'AHA 2020 guidelines'
                 },
                 {
                   statement: 'Administer early epinephrine (IM or autoinjector) in all patients with signs of a systemic allergic reaction, especially hypotension, airway swelling, or difficulty breathing.',
                   level: 'B',
                   source: 'AHA 2020 guidelines'
                 },
                 {
                   statement: 'Administer epinephrine at a dose of 0.2-0.5 mg (1:1,000) IM, and repeat every 5-15 minutes as needed.',
                   level: 'B',
                   source: 'AHA 2020 guidelines'
                 }
               ]
             },
             {
               title: 'Patients with Accidental Hypothermia',
               id: 'accidental-hypothermia',
               content: [
                 {
                   statement: 'As per AHA 2020 guidelines, undertake full resuscitative measures, including extracorporeal rewarming when available, in all victims of accidental hypothermia without characteristics suggesting that they are unlikely to survive.',
                   level: 'B',
                   source: 'AHA 2020 guidelines'
                 },
                 {
                   statement: 'Do not view victims of accidental hypothermia as dead before rewarming has been provided unless there are signs of obvious death.',
                   level: 'D',
                   source: 'AHA 2020 guidelines'
                 },
                 {
                   statement: 'Consider performing defibrillation attempts according to the standard Basic Life Support algorithm concurrent with rewarming strategies.',
                   level: 'C',
                   source: 'AHA 2020 guidelines'
                 }
               ]
             },
             {
               title: 'Patients After Drowning',
               id: 'drowning',
               content: [
                 {
                   statement: 'As per AHA 2020 guidelines, initiate CPR by rescuers, including rescue breathing, as soon as an unresponsive submersion victim is removed from the water.',
                   level: 'B',
                   source: 'AHA 2020 guidelines'
                 },
                 {
                   statement: 'Transport all victims of drowning requiring any form of resuscitation to the hospital for evaluation and monitoring, even if they appear to be alert.',
                   level: 'B',
                   source: 'AHA 2020 guidelines'
                 },
                 {
                   statement: 'Do not perform routine stabilization of the cervical spine in the absence of circumstances suggesting a spinal injury.',
                   level: 'D',
                   source: 'AHA 2020 guidelines'
                 }
               ]
             },
             {
               title: 'Patients After Lightning Injury',
               id: 'lightning-injury',
               content: [
                 {
                   statement: 'As per WMS 2014 guidelines, initiate resuscitation in victims of lightning strike immediately if the scene otherwise is deemed safe. Use the basic and advanced life support algorithms as the standard of care.',
                   level: 'B',
                   source: 'WMS 2014 guidelines'
                 }
               ]
             }
          ]
        },
        {
          title: 'Respiratory Support',
          id: 'respiratory-support',
          content: [
            {
              statement: 'As per AHA 2020 guidelines, consider administering supplemental oxygen during CPR, if available, at the maximal feasible inspired oxygen concentration.',
              level: 'C',
              source: 'AHA 2020 guidelines'
            }
          ]
        },
        {
          title: 'Perioperative Care',
          id: 'perioperative-care',
          content: [],
          subsections: [
            {
              title: 'Perioperative Cardiac Arrest',
              id: 'perioperative-cardiac-arrest',
              content: [
                {
                  statement: 'As per ESAIC/ESTES 2023 guidelines, perform closed chest cardiac compression in patients with cardiac arrest.',
                  level: 'B',
                  source: 'ESAIC/ESTES 2023 guidelines'
                },
                {
                  statement: 'Consider performing open chest cardiac massage if a ROSC has not been achieved with closed chest cardiac compression and veno-arterial ECMO is not available.',
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
                  statement: 'Perform immediate defibrillation for VF/VT in a trained provider-witnessed arrest of a post-cardiac surgery patient.',
                  level: 'B',
                  source: 'AHA 2020 guidelines'
                },
                {
                  statement: 'Consider performing early resternotomy in patients with cardiac arrest after cardiac surgery in an appropriately staffed and equipped ICU.',
                  level: 'C',
                  source: 'AHA 2020 guidelines'
                }
              ]
            }
          ]
        },
        {
          title: 'Follow-up and Surveillance',
          id: 'follow-up-surveillance',
          content: [],
          subsections: [
            {
              title: 'Recovery and Survivorship',
              id: 'recovery-survivorship',
              content: [
                {
                  statement: 'As per AHA 2020 guidelines, obtain structured assessment for anxiety, depression, posttraumatic stress, and fatigue in cardiac arrest survivors and their caregivers.',
                  level: 'B',
                  source: 'AHA 2020 guidelines'
                },
                {
                  statement: 'Obtain multimodal rehabilitation assessment and offer treatment for physical, neurological, cardiopulmonary and cognitive impairments before discharge from the hospital.',
                  level: 'B',
                  source: 'AHA 2020 guidelines'
                },
                {
                  statement: 'Provide comprehensive, multidisciplinary discharge planning including medical and rehabilitative treatment recommendations.',
                  level: 'B',
                  source: 'AHA 2020 guidelines'
                }
              ]
            },
            {
              title: 'Post-Cardiac Arrest ICD Implantation',
              id: 'post-cardiac-arrest-icd',
              content: [
                {
                  statement: 'As per ACC/AHA/HRS 2018 guidelines, perform ICD placement in patients with ischemic heart disease survived sudden cardiac arrest due to VT/VF, if the expected meaningful survival is > 1 year.',
                  level: 'B',
                  source: 'ACC/AHA/HRS 2018 guidelines'
                },
                {
                  statement: 'As per ESC 2022 guidelines, perform ICD placement in patients with dilated cardiomyopathy survived sudden cardiac arrest due to VT/VF or experienced hemodynamically not-tolerated sustained monomorphic VT.',
                  level: 'B',
                  source: 'ESC 2022 guidelines'
                },
                {
                  statement: 'As per ACC/AHA 2020 guidelines, perform ICD placement in patients with HCM and previous documented cardiac arrest or sustained VT.',
                  level: 'B',
                  source: 'ACC/AHA 2020 guidelines'
                }
              ]
            },
            {
              title: 'Organ Donation',
              id: 'organ-donation',
              content: [
                {
                  statement: 'As per AHA 2024 guidelines, consider discussing organ donation in all patients resuscitated from cardiac arrest and meeting neurological criteria for death.',
                  level: 'B',
                  source: 'AHA 2024 guidelines'
                },
                {
                  statement: 'Consider discussing organ donation in all patients resuscitated from cardiac arrest before a planned withdrawal of life-sustaining therapies.',
                  level: 'B',
                  source: 'AHA 2024 guidelines'
                }
              ]
            }
          ]
        },
        {
          title: 'Quality Improvement',
          id: 'quality-improvement',
          content: [],
          subsections: [
            {
              title: 'Public Access Defibrillation',
              id: 'public-access-defibrillation',
              content: [
                {
                  statement: 'As per ESC 2022 guidelines, ensure public access defibrillation is available at sites where cardiac arrest is more likely to occur.',
                  level: 'B',
                  source: 'ESC 2022 guidelines'
                },
                {
                  statement: 'Promote community training in basic life support to increase bystander CPR rate and automated external defibrillator use.',
                  level: 'B',
                  source: 'ESC 2022 guidelines'
                }
              ]
            }
          ]
        }
      ]
    },
    clinicalFindings: {
      symptoms: [
        'Fainting',
        'Loss of consciousness'
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
        authors: 'Amelia L Muhs et al.',
        journal: 'Chest. 2025 May'
      },
      {
        title: 'TTM2 (post-hoc analysis)',
        year: '2025',
        description: 'In out-of-hospital cardiac arrest patients who received therapeutic hypothermia, intravascular cooling was superior to surface device cooling with respect to proportion of patients successfully reaching target temperature within 4 hours.',
        authors: 'Akil Awad et al.',
        journal: 'Intensive Care Med. 2025 Apr'
      },
      {
        title: 'PARAMEDIC-2',
        year: '2018',
        description: 'In patients with out-of-hospital cardiac arrest, epinephrine was superior to placebo with respect to the rate of survival at 30 days.',
        authors: 'Gavin D Perkins et al.',
        journal: 'N Engl J Med. 2018 Aug 23'
      },
      {
        title: 'TTM',
        year: '2013',
        description: 'In unconscious adult patients after out-of-hospital cardiac arrest of presumed cardiac cause, cooling to 33 degree C was not superior to cooling to 36 degree C with respect to all-cause death.',
        authors: 'Nielsen N et al.',
        journal: 'N Engl J Med. 2013 Dec 5'
      }
    ],
    references: [
      {
        id: 1,
        authors: 'Myat A, Song KJ, Rea T',
        title: 'Out-of-hospital cardiac arrest: current concepts',
        journal: 'Lancet. 2018 Mar 10;391(10124):970-979',
        year: '2018',
        link: 'https://pubmed.ncbi.nlm.nih.gov/29536861'
      },
      {
        id: 2,
        authors: 'Hessulf F, Karlsson T, Lundgren P et al.',
        title: 'Factors of importance to 30-day survival after in-hospital cardiac arrest in Sweden - A population-based register study of more than 18,000 cases',
        journal: 'Int J Cardiol. 2018 Mar 15;255:237-242',
        year: '2018',
        link: 'https://pubmed.ncbi.nlm.nih.gov/29289346'
      },
      {
        id: 3,
        authors: 'Schluep M, Gravesteijn BY, Stolker RJ et al.',
        title: 'One-year survival after in-hospital cardiac arrest: A systematic review and meta-analysis',
        journal: 'Resuscitation. 2018 Nov;132:90-100',
        year: '2018',
        link: 'https://pubmed.ncbi.nlm.nih.gov/30213495'
      },
      {
        id: 4,
        authors: 'Hayashi M, Shimizu W, Albert CM',
        title: 'The spectrum of epidemiology underlying sudden cardiac death',
        journal: 'Circ Res. 2015 Jun 5;116(12):1887-906',
        year: '2015',
        link: 'https://pubmed.ncbi.nlm.nih.gov/26044246'
      },
      {
        id: 5,
        authors: 'Riva G, Ringh M, Jonsson M et al.',
        title: 'Survival in Out-of-Hospital Cardiac Arrest After Standard Cardiopulmonary Resuscitation or Chest Compressions Only Before Arrival of Emergency Medical Services: Nationwide Study During Three Guideline Periods',
        journal: 'Circulation. 2019 Apr 1',
        year: '2019',
        link: 'https://pubmed.ncbi.nlm.nih.gov/30929457'
      },
      {
        id: 6,
        authors: 'Ashish R Panchal, Jason A Bartos, José G Cabañas et al.',
        title: 'Part 3: Adult Basic and Advanced Life Support: 2020 American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care',
        journal: 'Circulation. 2020 Oct 20;142(16_suppl_2):S366-S468',
        year: '2020',
        link: 'https://pubmed.ncbi.nlm.nih.gov/33081529'
      },
      {
        id: 7,
        authors: 'Sarah M Perman, Jonathan Elmer, Carolina B Maciel et al.',
        title: '2023 American Heart Association Focused Update on Adult Advanced Cardiovascular Life Support: An Update to the American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care',
        journal: 'Circulation. 2024 Jan 30;149(5):e254-e273',
        year: '2024',
        link: 'https://pubmed.ncbi.nlm.nih.gov/38108133'
      },
      {
        id: 8,
        authors: 'Gavin D Perkins et al.',
        title: 'A Randomized Trial of Epinephrine in Out-of-Hospital Cardiac Arrest',
        journal: 'N Engl J Med. 2018 Aug 23',
        year: '2018',
        link: 'https://pubmed.ncbi.nlm.nih.gov/30021076'
      },
      {
        id: 9,
        authors: 'Nielsen N et al.',
        title: 'Targeted Temperature Management at 33°C versus 36°C after Cardiac Arrest',
        journal: 'N Engl J Med. 2013 Dec 5',
        year: '2013',
        link: 'https://pubmed.ncbi.nlm.nih.gov/24237006'
      },
      {
        id: 10,
        authors: 'Sheldon Cheskes et al.',
        title: 'Defibrillation Strategies for Refractory Ventricular Fibrillation',
        journal: 'N Engl J Med. 2022 Nov 24',
        year: '2022',
        link: 'https://pubmed.ncbi.nlm.nih.gov/36228631'
      },
      {
        id: 11,
        authors: 'Jonathan R Benger et al.',
        title: 'Effect of a Strategy of a Supraglottic Airway Device vs Tracheal Intubation During Out-of-Hospital Cardiac Arrest on Functional Outcome: The AIRWAYS-2 Randomized Clinical Trial',
        journal: 'JAMA. 2018 Aug 28',
        year: '2018',
        link: 'https://pubmed.ncbi.nlm.nih.gov/30167701'
      },
      {
        id: 12,
        authors: 'Katja Zeppenfeld, Jacob Tfelt-Hansen, Marta de Riva et al.',
        title: '2022 ESC Guidelines for the management of patients with ventricular arrhythmias and the prevention of sudden cardiac death',
        journal: 'Eur Heart J. 2022 Oct 21;43(40):3997-4126',
        year: '2022',
        link: 'https://pubmed.ncbi.nlm.nih.gov/36017572'
      }
    ]
  },
  specialty: 'cardiology'
}; 