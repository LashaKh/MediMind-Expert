import { DiseaseData } from '../../types';
import { relatedCalculators } from './relatedCalculators';
import { background } from './background';
import { clinicalFindings } from './clinicalFindings';
import { guidelines } from './guidelines';
import { references } from './references';

export const heartFailureDiseaseData: DiseaseData = {
  id: 'heart-failure',
  title: 'Heart Failure',
  lastUpdated: 'May 31, 2025',
  category: 'Cardiology',
  specialty: 'cardiology',
  
  content: {
    relatedCalculators,
    background,
    clinicalFindings,
    guidelines,
    references,
    studies: [] // Add empty studies array for now
  }
};