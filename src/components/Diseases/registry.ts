import { DiseaseData, DiseaseIndexItem } from './types';

// Cardiology imports
import { abdominalAorticAneurysmData } from './cardiology/abdominal-aortic-aneurysm';
import { antidromicAVRTData } from './cardiology/antidromic-atrioventricular-reentrant-tachycardia';
import { aorticIntramuralHematomaData } from './cardiology/aortic-intramural-hematoma';
import { aorticRegurgitationData } from './cardiology/aortic-regurgitation';
import { aorticStenosisData } from './cardiology/aortic-stenosis';
import { atrialFibrillationData } from './cardiology/atrial-fibrillation';
import { atrialFlutterData } from './cardiology/atrial-flutter';

// Disease registry - maps disease ID to actual data
export const diseaseRegistry: Record<string, DiseaseData> = {
  'abdominal-aortic-aneurysm': abdominalAorticAneurysmData,
  'antidromic-atrioventricular-reentrant-tachycardia': antidromicAVRTData,
  'aortic-intramural-hematoma': aorticIntramuralHematomaData,
  'aortic-regurgitation': aorticRegurgitationData,
  'aortic-stenosis': aorticStenosisData,
  'atrial-fibrillation': atrialFibrillationData,
  'atrial-flutter': atrialFlutterData,
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