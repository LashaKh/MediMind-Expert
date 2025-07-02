import { DiseaseData } from '../../types';
import { hypertrophicCardiomyopathyBackground } from './background';
import { hypertrophicCardiomyopathyClinicalFindings } from './clinicalFindings';
import { hypertrophicCardiomyopathyDiagnosticInvestigations } from './diagnosticInvestigations';
import { hypertrophicCardiomyopathyGuidelines } from './guidelines';
import { hypertrophicCardiomyopathyMedicalManagement } from './medicalManagement';
import { hypertrophicCardiomyopathyNonpharmacologicInterventions } from './nonpharmacologicInterventions';
import { hypertrophicCardiomyopathyIcdManagement } from './icdManagement';
import { hypertrophicCardiomyopathySurgicalInterventions } from './surgicalInterventions';
import { specialCircumstances } from './specialCircumstances';
import { references } from './references';
import { hypertrophicCardiomyopathyRelatedCalculators } from './relatedCalculators';
import { hypertrophicCardiomyopathyStudies } from './studies';

export const hypertrophicCardiomyopathy: DiseaseData = {
  id: 'hypertrophic-cardiomyopathy',
  title: 'Hypertrophic Cardiomyopathy',
  lastUpdated: '2024-01-18',
  category: 'Cardiomyopathy',
  specialty: 'cardiology',
      content: {
      background: hypertrophicCardiomyopathyBackground,
      clinicalFindings: hypertrophicCardiomyopathyClinicalFindings,
      relatedCalculators: hypertrophicCardiomyopathyRelatedCalculators,
      studies: hypertrophicCardiomyopathyStudies,
    guidelines: {
      keySources: hypertrophicCardiomyopathyGuidelines.keySources,
      sections: [
        ...hypertrophicCardiomyopathyGuidelines.sections,
        ...specialCircumstances
      ]
    },
    references
  }
}; 