import { DiseaseData, DiseaseIndexItem } from './types';

// Cardiology imports
import { abdominalAorticAneurysmData } from './cardiology/abdominal-aortic-aneurysm';
import { antidromicAVRTData } from './cardiology/antidromic-atrioventricular-reentrant-tachycardia';
import { aorticIntramuralHematomaData } from './cardiology/aortic-intramural-hematoma';
import { aorticRegurgitationData } from './cardiology/aortic-regurgitation';
import { aorticStenosisData } from './cardiology/aortic-stenosis';
import { arrhythmogenicRightVentricularCardiomyopathyData } from './cardiology/arrhythmogenic-right-ventricular-cardiomyopathy';
import { aspirinOverdoseData } from './cardiology/aspirin-overdose';
import { atrialFibrillationData } from './cardiology/atrial-fibrillation';
import { atrialFlutterData } from './cardiology/atrial-flutter';
import { atrioventricularNodalReentrantTachycardiaData } from './cardiology/atrioventricular-nodal-reentrant-tachycardia';
import { betaBlockerToxicityData } from './cardiology/beta-blocker-toxicity';
import { bicuspidAorticValveData } from './cardiology/bicuspid-aortic-valve';
import { bloodGasAnalysisData } from './cardiology/blood-gas-analysis';
import { bluntCardiacInjuryData } from './cardiology/blunt-cardiac-injury';
import { brugadaSyndromeData } from './cardiology/brugada-syndrome';
import { calciumChannelBlockerToxicityData } from './cardiology/calcium-channel-blocker-toxicity';
import { cardiacAmyloidosisData } from './cardiology/cardiac-amyloidosis';
import { chagasCardiomyopathyData } from './cardiology/chagas-cardiomyopathy';
import { cardiacArrestData } from './cardiology/cardiac-arrest';
import { cardiotoxicityOfCancerTherapyData } from './cardiology/cardiotoxicity-of-cancer-therapy';
import { cardiogenicShockData } from './cardiology/cardiogenic-shock';
import { chestPainData } from './cardiology/chest-pain';
import { chronicThromboembolicPulmonaryHypertensionData } from './cardiology/chronic-thromboembolic-pulmonary-hypertension';
import { coarctationOfAortaData } from './cardiology/coarctation-of-aorta';
import { digoxinToxicityData } from './cardiology/digoxin-toxicity';
import { disseminatedIntravascularCoagulationData } from './cardiology/disseminated-intravascular-coagulation';
import { focalAtrialTachycardiaData } from './cardiology/focal-atrial-tachycardia';
import { heparinInducedThrombocytopeniaData } from './cardiology/heparin-induced-thrombocytopenia';
import { hyperkalemiaData } from './cardiology/hyperkalemia';
import { hypernatremiaDiseaseData } from './cardiology/hypernatremia';

// Disease registry - maps disease ID to actual data
export const diseaseRegistry: Record<string, DiseaseData> = {
  'abdominal-aortic-aneurysm': abdominalAorticAneurysmData,
  'antidromic-atrioventricular-reentrant-tachycardia': antidromicAVRTData,
  'aortic-intramural-hematoma': aorticIntramuralHematomaData,
  'aortic-regurgitation': aorticRegurgitationData,
  'aortic-stenosis': aorticStenosisData,
  'arrhythmogenic-right-ventricular-cardiomyopathy': arrhythmogenicRightVentricularCardiomyopathyData,
  'aspirin-overdose': aspirinOverdoseData,
  'atrial-fibrillation': atrialFibrillationData,
  'atrial-flutter': atrialFlutterData,
  'atrioventricular-nodal-reentrant-tachycardia': atrioventricularNodalReentrantTachycardiaData,
  'beta-blocker-toxicity': betaBlockerToxicityData,
  'bicuspid-aortic-valve': bicuspidAorticValveData,
  'blood-gas-analysis': bloodGasAnalysisData,
  'blunt-cardiac-injury': bluntCardiacInjuryData,
  'brugada-syndrome': brugadaSyndromeData,
  'calcium-channel-blocker-toxicity': calciumChannelBlockerToxicityData,
  'cardiac-amyloidosis': cardiacAmyloidosisData,
  'chagas-cardiomyopathy': chagasCardiomyopathyData,
  'cardiac-arrest': cardiacArrestData,
  'cardiotoxicity-of-cancer-therapy': cardiotoxicityOfCancerTherapyData,
  'cardiogenic-shock': cardiogenicShockData,
  'chest-pain': chestPainData,
  'chronic-thromboembolic-pulmonary-hypertension': chronicThromboembolicPulmonaryHypertensionData,
  'coarctation-of-aorta': coarctationOfAortaData,
  'digoxin-toxicity': digoxinToxicityData,
  'disseminated-intravascular-coagulation': disseminatedIntravascularCoagulationData,
  'focal-atrial-tachycardia': focalAtrialTachycardiaData,
  'heparin-induced-thrombocytopenia': heparinInducedThrombocytopeniaData,
  'hyperkalemia': hyperkalemiaData,
  'hypernatremia': hypernatremiaDiseaseData,
};

// Disease index for listing pages - includes summary information
export const diseaseIndex: DiseaseIndexItem[] = [
  {
    id: 'abdominal-aortic-aneurysm',
    title: 'Abdominal Aortic Aneurysm',
    category: 'Vascular Cardiology',
    lastUpdated: 'May 31, 2025',
    readTime: '15 min',
    severity: 'high',
    description: 'A structural disease of the abdominal aorta characterized by pathological dilatation > 30 mm or > 50% of original size. Mortality rate 85-90% when ruptured.',
    tags: ['Aneurysm', 'Vascular', 'Emergency', 'Surgical'],
    prevalence: '2,200 per 100,000',
    specialty: 'cardiology'
  },
  {
    id: 'antidromic-atrioventricular-reentrant-tachycardia',
    title: 'Antidromic Atrioventricular Reentrant Tachycardia',
    category: 'Electrophysiology',
    lastUpdated: 'May 21, 2025',
    readTime: '12 min',
    severity: 'medium',
    description: 'A rare type of SVT where electrical impulses travel in abnormal, reverse direction through accessory pathways. Occurs in 8% of patients with pre-excitation syndrome.',
    tags: ['Arrhythmia', 'Accessory Pathway', 'Pre-excitation', 'Tachycardia', 'Catheter Ablation'],
    prevalence: '8% in pre-excitation syndrome',
    specialty: 'cardiology'
  },
  {
    id: 'aortic-intramural-hematoma',
    title: 'Aortic Intramural Hematoma',
    category: 'Vascular Cardiology',
    lastUpdated: 'May 21, 2025',
    readTime: '18 min',
    severity: 'high',
    description: 'A condition characterized by bleeding within the wall of the aorta without an entrance tear. Usually carries a lower mortality rate than aortic dissection but requires urgent management.',
    tags: ['Aortic Syndrome', 'Emergency', 'TEVAR', 'Surgical Repair', 'Medical Management'],
    prevalence: '1.2 per 100,000 person-years',
    specialty: 'cardiology'
  },
  {
    id: 'aortic-regurgitation',
    title: 'Aortic Regurgitation',
    category: 'Valvular Heart Disease',
    lastUpdated: 'May 31, 2025',
    readTime: '25 min',
    severity: 'high',
    description: 'A structural heart disease characterized by diastolic flow of blood from the aorta into the left ventricle. Moderate or severe AR is associated with significant morbidity and mortality.',
    tags: ['Valvular Disease', 'Heart Failure', 'Surgical Repair', 'Medical Management', 'Echocardiography'],
    prevalence: '500 per 100,000',
    specialty: 'cardiology'
  },
  {
    id: 'aortic-stenosis',
    title: 'Aortic Stenosis',
    category: 'Valvular Heart Disease',
    lastUpdated: 'June 13, 2025',
    readTime: '30 min',
    severity: 'high',
    description: 'A chronic fibrocalcific disease that results in narrowing of the aortic valve. Overall survival of elderly patients with severe AS is 3 years from symptom onset without intervention.',
    tags: ['Valvular Disease', 'TAVR', 'SAVR', 'Heart Failure', 'Syncope', 'Stenosis'],
    prevalence: '400 per 100,000',
    specialty: 'cardiology'
  },
  {
    id: 'arrhythmogenic-right-ventricular-cardiomyopathy',
    title: 'Arrhythmogenic Right Ventricular Cardiomyopathy',
    category: 'Cardiomyopathy',
    lastUpdated: 'May 21, 2025',
    readTime: '25 min',
    severity: 'high',
    description: 'A genetically inherited cardiomyopathy characterized by fibrofatty replacement of myocardium, predominantly in the right ventricle. Associated with increased risk of sudden cardiac death, particularly in young individuals.',
    tags: ['Cardiomyopathy', 'Genetic', 'Sudden Death', 'ICD', 'Family Screening', 'Arrhythmia'],
    prevalence: '20 per 100,000',
    specialty: 'cardiology'
  },
  {
    id: 'aspirin-overdose',
    title: 'Aspirin Overdose',
    category: 'Toxicology',
    lastUpdated: 'May 21, 2025',
    readTime: '20 min',
    severity: 'high',
    description: 'Acute aspirin overdose results in salicylate poisoning with mild, moderate, or severe toxicity. Severe salicylate poisoning results in 5% mortality and requires immediate emergency management.',
    tags: ['Toxicology', 'Emergency', 'Poisoning', 'Hemodialysis', 'ECTR', 'Bicarbonate'],
    prevalence: 'Variable exposure',
    specialty: 'cardiology'
  },
  {
    id: 'atrial-fibrillation',
    title: 'Atrial Fibrillation',
    category: 'Electrophysiology',
    lastUpdated: 'June 19, 2025',
    readTime: '20 min',
    severity: 'high',
    description: 'A cardiac arrhythmia characterized by irregular electrical activity in the atria. Causes 15% of all strokes and increases stroke risk 5-fold. Requires comprehensive management including anticoagulation.',
    tags: ['Arrhythmia', 'Stroke Prevention', 'Anticoagulation', 'Rate Control', 'Rhythm Control'],
    prevalence: '700-775 per 100,000',
    specialty: 'cardiology'
  },
  {
    id: 'atrial-flutter',
    title: 'Atrial Flutter',
    category: 'Electrophysiology',
    lastUpdated: 'May 31, 2025',
    readTime: '18 min',
    severity: 'high',
    description: 'A supraventricular arrhythmia characterized by rapid, regular atrial contractions, primarily confined to the right atrium. Often involves reentrant circuits around the tricuspid valve.',
    tags: ['Arrhythmia', 'Cardioversion', 'Catheter Ablation', 'Anticoagulation', 'Rate Control'],
    prevalence: '1.5 per 100,000 (neonatal)',
    specialty: 'cardiology'
  },
  {
    id: 'atrioventricular-nodal-reentrant-tachycardia',
    title: 'Atrioventricular Nodal Reentrant Tachycardia (AVNRT)',
    category: 'Electrophysiology',
    lastUpdated: 'May 21, 2025',
    readTime: '15 min',
    severity: 'medium',
    description: 'A type of SVT characterized by a reentry circuit within the atrioventricular node. The incidence of AVNRT in patients receiving ICDs is estimated at 3.5%. The prognosis is generally good but can cause significant morbidity.',
    tags: ['Arrhythmia', 'SVT', 'Reentry', 'Catheter Ablation', 'Vagal Maneuvers', 'Adenosine'],
    prevalence: '3.5% (in ICD patients)',
    specialty: 'cardiology'
  },
  {
    id: 'beta-blocker-toxicity',
    title: 'Beta-blocker Toxicity',
    category: 'Toxicology',
    lastUpdated: 'May 21, 2025',
    readTime: '18 min',
    severity: 'high',
    description: 'An overdose or excessive exposure to β-blocker medications causing bradycardia, hypotension, and AV block. Incidence is 5.1% among hospitalized patients with acute poisoning.',
    tags: ['Toxicology', 'Emergency', 'Bradycardia', 'Glucagon', 'High-dose Insulin', 'ECMO'],
    prevalence: '5.1% of acute poisoning cases',
    specialty: 'cardiology'
  },
  {
    id: 'bicuspid-aortic-valve',
    title: 'Bicuspid Aortic Valve',
    category: 'Valvular Heart Disease',
    lastUpdated: 'May 31, 2025',
    readTime: '25 min',
    severity: 'high',
    description: 'A common congenital cardiac abnormality consisting of two cusps instead of three that is characterized by dilatation of the thoracic aorta. Associated with 9% in-hospital mortality in patients with infective endocarditis.',
    tags: ['Congenital', 'Valvular Disease', 'Aortic Stenosis', 'Aortic Regurgitation', 'Aortopathy', 'Genetic Screening'],
    prevalence: 'Most common congenital heart defect',
    specialty: 'cardiology'
  },
  {
    id: 'blood-gas-analysis',
    title: 'Blood Gas Analysis',
    category: 'Diagnostic Tests',
    lastUpdated: 'May 21, 2025',
    readTime: '12 min',
    severity: 'medium',
    description: 'A common diagnostic tool to interpret respiratory, circulatory, and metabolic derangements through arterial and pulmonary/central venous blood gas and electrolyte analysis.',
    tags: ['Diagnostic', 'ICU', 'Emergency', 'Acid-Base', 'Oxygenation', 'Ventilation'],
    prevalence: 'Common in ICU/Emergency settings',
    specialty: 'cardiology'
  },
  {
    id: 'blunt-cardiac-injury',
    title: 'Blunt Cardiac Injury',
    category: 'Trauma Cardiology',
    lastUpdated: 'May 21, 2025',
    readTime: '20 min',
    severity: 'high',
    description: 'An injury sustained due to blunt trauma to the heart, ranging from minor bruise to specific post-contusion cardiac conditions such as free-wall rupture. Associated with an overall mortality rate of 13.9%.',
    tags: ['Trauma', 'Emergency', 'Cardiac Contusion', 'Thoracotomy', 'Imaging', 'Monitoring'],
    prevalence: '13.9% mortality rate',
    specialty: 'cardiology'
  },
  {
    id: 'brugada-syndrome',
    title: 'Brugada Syndrome',
    category: 'Electrophysiology',
    lastUpdated: 'May 21, 2025',
    readTime: '25 min',
    severity: 'high',
    description: 'A genetic disorder characterized by a specific pattern on ECG and an increased risk of sudden cardiac death due to ventricular arrhythmia. Caused by mutations in SCN5A gene encoding cardiac sodium channels.',
    tags: ['Genetic', 'Arrhythmia', 'Sudden Death', 'ECG Pattern', 'ICD', 'Drug Challenge', 'Sodium Channel'],
    prevalence: 'Variable by population',
    specialty: 'cardiology'
  },
  {
    id: 'calcium-channel-blocker-toxicity',
    title: 'Calcium Channel Blocker Toxicity',
    category: 'Emergency/Toxicology',
    lastUpdated: 'May 22, 2025',
    readTime: '20 min',
    severity: 'high',
    description: 'Life-threatening overdose of calcium channel blocking medications requiring immediate medical intervention. Presents with bradycardia, hypotension, altered mental status, and potential cardiovascular collapse.',
    tags: ['Toxicology', 'Emergency', 'CCB Overdose', 'High-dose Insulin', 'IV Calcium', 'ECMO', 'Vasopressors'],
    prevalence: 'Significant cause of cardiovascular drug mortality',
    specialty: 'cardiology'
  },
  {
    id: 'cardiac-amyloidosis',
    title: 'Cardiac Amyloidosis',
    category: 'Cardiomyopathy',
    lastUpdated: 'May 21, 2025',
    readTime: '30 min',
    severity: 'high',
    description: 'Infiltration of the heart muscle by amyloid proteins, resulting in cardiomyopathy. Unadjusted 5-year mortality rates are estimated at 65% in patients with AL cardiac amyloidosis and 44% in patients with ATTR cardiac amyloidosis.',
    tags: ['Cardiomyopathy', 'Amyloidosis', 'Heart Failure', 'Restrictive', 'Tafamidis', 'Biopsy', 'Genetics'],
    prevalence: 'Variable by type and population',
    specialty: 'cardiology'
  },
  {
    id: 'chagas-cardiomyopathy',
    title: 'Chagas Cardiomyopathy',
    category: 'Cardiomyopathy',
    lastUpdated: 'May 22, 2025',
    readTime: '25 min',
    severity: 'high',
    description: 'A form of dilated cardiomyopathy caused by chronic infection with Trypanosoma cruzi, representing the most serious manifestation of chronic Chagas disease. Characterized by progressive myocardial damage, arrhythmias, heart failure, and increased risk of sudden cardiac death.',
    tags: ['Cardiomyopathy', 'Chagas Disease', 'Tropical Medicine', 'Heart Failure', 'Ventricular Arrhythmias', 'ICD', 'Amiodarone'],
    prevalence: '20-30% of chronic Chagas disease patients',
    specialty: 'cardiology'
  },
  {
    id: 'cardiac-arrest',
    title: 'Cardiac Arrest',
    category: 'Emergency Cardiology',
    lastUpdated: 'May 28, 2025',
    readTime: '45 min',
    severity: 'high',
    description: 'Functional loss of mechanical cardiac activity leading to cessation of systemic circulation. 30-day survival is 5.8% without CPR and 13.5-13.8% with CPR in out-of-hospital cases. Requires immediate emergency intervention.',
    tags: ['Emergency', 'CPR', 'Resuscitation', 'ROSC', 'Defibrillation', 'Epinephrine', 'Post-arrest Care', 'Temperature Control'],
    prevalence: '55 per 100,000 person-years',
    specialty: 'cardiology'
  },
  {
    id: 'cardiotoxicity-of-cancer-therapy',
    title: 'Cardiotoxicity of Cancer Therapy',
    category: 'Cardio-Oncology',
    lastUpdated: 'June 10, 2025',
    readTime: '60 min',
    severity: 'high',
    description: 'The spectrum of cardiovascular complications that can arise from the use of anticancer treatments, including chemotherapy, targeted therapies, immunotherapy, and radiation therapy. These complications can range from asymptomatic cardiac dysfunction to life-threatening cardiovascular events.',
    tags: ['Cardio-Oncology', 'Chemotherapy', 'Radiation Therapy', 'Heart Failure', 'Hypertension', 'Arrhythmias', 'Monitoring', 'Prevention'],
    prevalence: 'Variable by treatment type',
    specialty: 'cardiology'
  },
  {
    id: 'cardiogenic-shock',
    title: 'Cardiogenic Shock',
    category: 'Emergency Cardiology',
    lastUpdated: 'May 31, 2025',
    readTime: '35 min',
    severity: 'high',
    description: 'A life-threatening condition characterized by the inability of the heart to pump sufficient blood to meet the body\'s metabolic demands, resulting in tissue hypoperfusion and end-organ dysfunction. Mortality rates range from 40-80% depending on underlying cause and timing of intervention.',
    tags: ['Emergency', 'Cardiogenic Shock', 'Mechanical Support', 'IABP', 'ECMO', 'Inotropes', 'Revascularization', 'Critical Care'],
    prevalence: '5-10% of acute MI cases',
    specialty: 'cardiology'
  },
  {
    id: 'chest-pain',
    title: 'Chest Pain',
    category: 'Emergency/Acute Care',
    lastUpdated: 'May 1, 2025',
    readTime: '30 min',
    severity: 'high',
    description: 'A common presenting symptom requiring systematic evaluation to identify potentially life-threatening conditions including acute coronary syndrome, aortic dissection, pulmonary embolism, and other cardiac and non-cardiac causes.',
    tags: ['Emergency', 'ACS', 'Diagnosis', 'Risk Stratification', 'ECG', 'Troponin', 'Clinical Decision', 'Guidelines'],
    prevalence: 'Common emergency presentation',
    specialty: 'cardiology'
  },
  {
    id: 'chronic-thromboembolic-pulmonary-hypertension',
    title: 'Chronic Thromboembolic Pulmonary Hypertension',
    category: 'Pulmonary Vascular Disease',
    lastUpdated: 'May 22, 2025',
    readTime: '35 min',
    severity: 'high',
    description: 'A rare and underdiagnosed complication of pulmonary embolism characterized by persistent perfusion defects that can range from asymptomatic to established CTEPH with pulmonary hypertension and right heart failure.',
    tags: ['Pulmonary Hypertension', 'Pulmonary Embolism', 'CTEPH', 'Pulmonary Endarterectomy', 'Balloon Angioplasty', 'Anticoagulation', 'Right Heart Failure'],
    prevalence: 'Rare complication of PE',
    specialty: 'cardiology'
  },
  {
    id: 'coarctation-of-aorta',
    title: 'Coarctation of Aorta',
    category: 'Congenital Heart Disease',
    lastUpdated: 'May 31, 2025',
    readTime: '30 min',
    severity: 'high',
    description: 'A congenital heart defect characterized by discrete narrowing of the thoracic aorta, typically distal to the left subclavian artery. The 15-year survival rate after CoA repair in patients aged < 21 years is 92%.',
    tags: ['Congenital', 'Aortic Stenosis', 'Hypertension', 'Turner Syndrome', 'Bicuspid Valve', 'Endovascular Repair', 'Stenting'],
    prevalence: '1 in 3,000 to 4,000 live births',
    specialty: 'cardiology'
  },
  {
    id: 'digoxin-toxicity',
    title: 'Digoxin Toxicity',
    category: 'Toxicology',
    lastUpdated: 'May 22, 2025',
    readTime: '20 min',
    severity: 'high',
    description: 'A clinical condition resulting from excessive levels of digoxin or digitoxin, characterized by cardiac arrhythmias, gastrointestinal symptoms, and neurological manifestations. Requires immediate management with digoxin immune Fab when indicated.',
    tags: ['Toxicology', 'Emergency', 'Digoxin', 'Immune Fab', 'Bradycardia', 'Arrhythmia', 'Poisoning'],
    prevalence: 'Higher risk in elderly patients',
    specialty: 'cardiology'
  },
  {
    id: 'disseminated-intravascular-coagulation',
    title: 'Disseminated Intravascular Coagulation',
    category: 'Hematology/Coagulation',
    lastUpdated: 'May 21, 2025',
    readTime: '25 min',
    severity: 'high',
    description: 'A clinicopathologic syndrome characterized by systemic activation of widespread coagulation resulting in severe bleeding and organ failure. In-hospital mortality of DIC in critically ill patients is 45%.',
    tags: ['DIC', 'Coagulation', 'Bleeding', 'Thrombosis', 'Sepsis', 'Emergency', 'Transfusion', 'Critical Care'],
    prevalence: '18.6 per 100,000 person-years',
    specialty: 'cardiology'
  },
  {
    id: 'focal-atrial-tachycardia',
    title: 'Focal Atrial Tachycardia',
    category: 'Electrophysiology',
    lastUpdated: 'January 19, 2025',
    readTime: '15 min',
    severity: 'medium',
    description: 'A type of supraventricular tachycardia originating from a single atrial focus outside the sinoatrial node. FAT accounts for approximately 10-15% of all supraventricular tachycardias and has good prognosis with effective treatment options.',
    tags: ['Arrhythmia', 'SVT', 'Tachycardia', 'Catheter Ablation', 'Adenosine', 'Rate Control', 'Rhythm Control'],
    prevalence: '10-15% of SVT cases',
    specialty: 'cardiology'
  },
  {
    id: 'heparin-induced-thrombocytopenia',
    title: 'Heparin-Induced Thrombocytopenia',
    category: 'Hematology/Coagulation',
    lastUpdated: 'May 22, 2025',
    readTime: '25 min',
    severity: 'high',
    description: 'A prothrombotic disorder caused by antibodies that recognize complexes of platelet factor 4 (PF4) and heparin, leading to platelet activation, consumption, and thrombosis. Without appropriate treatment, HIT carries up to 50% risk of thrombotic complications.',
    tags: ['HIT', 'Heparin', 'Thrombocytopenia', 'Thrombosis', '4Ts Score', 'Argatroban', 'Bivalirudin', 'Anticoagulation', 'Emergency'],
    prevalence: '0.2-5% of patients receiving heparin',
    specialty: 'cardiology'
  },
  {
    id: 'hypernatremia',
    title: 'Hypernatremia',
    category: 'Emergency Cardiology',
    lastUpdated: 'May 22, 2025',
    readTime: '15 min',
    severity: 'high',
    description: 'Hypernatremia is defined as serum sodium concentration above normal range, typically > 145 mmol/L, resulting from water loss or sodium gain. Requires careful correction to avoid cerebral edema and neurological complications.',
    tags: ['Electrolyte', 'Sodium', 'Emergency', 'Central Diabetes Insipidus', 'Fluid Management', 'Vasopressin'],
    prevalence: 'Common in elderly and critically ill patients',
    specialty: 'cardiology'
  },
  {
    id: 'hyperkalemia',
    title: 'Hyperkalemia',
    category: 'Electrolyte Disorders',
    lastUpdated: 'May 21, 2025',
    readTime: '25 min',
    severity: 'high',
    description: 'Hyperkalemia is defined as an increase in serum potassium levels > 5.0 mmol/L. Severe untreated hyperkalemia can lead to life-threatening cardiac arrhythmias and cardiac arrest.',
    tags: ['Electrolyte', 'Potassium', 'ECG Changes', 'Cardiac Arrhythmias', 'Emergency', 'Dialysis', 'RAAS Inhibitors'],
    prevalence: '1,550 per 100,000 population',
    specialty: 'cardiology'
  }
];

// Helper functions
export const getDiseaseData = (diseaseId: string): DiseaseData | null => {
  return diseaseRegistry[diseaseId] || null;
};

export const getDiseasesBySpecialty = (specialty: 'cardiology' | 'obgyn'): DiseaseIndexItem[] => {
  return diseaseIndex.filter(disease => disease.specialty === specialty);
};

export const getAllDiseases = (): DiseaseIndexItem[] => {
  return diseaseIndex;
};

export const searchDiseases = (query: string): DiseaseIndexItem[] => {
  const lowercaseQuery = query.toLowerCase();
  return diseaseIndex.filter(disease => 
    disease.title.toLowerCase().includes(lowercaseQuery) ||
    disease.description.toLowerCase().includes(lowercaseQuery) ||
    disease.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)) ||
    disease.category.toLowerCase().includes(lowercaseQuery)
  );
};