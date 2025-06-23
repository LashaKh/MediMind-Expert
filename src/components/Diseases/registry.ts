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
import { cardiacArrestData } from './cardiology/cardiac-arrest';
import { cardiogenicShockData } from './cardiology/cardiogenic-shock';
import { chestPainData } from './cardiology/chest-pain';
import { chronicThromboembolicPulmonaryHypertensionData } from './cardiology/chronic-thromboembolic-pulmonary-hypertension';

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
  'cardiac-arrest': cardiacArrestData,
  'cardiogenic-shock': cardiogenicShockData,
  'chest-pain': chestPainData,
  'chronic-thromboembolic-pulmonary-hypertension': chronicThromboembolicPulmonaryHypertensionData,
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