import { background } from './background.js';
import { guidelines } from './guidelines.js';
import { clinicalFindings } from './clinicalFindings.js';
import { studies } from './studies.js';
import { screeningAndDiagnosis } from './screeningAndDiagnosis.js';
import { classificationAndRiskStratification } from './classificationAndRiskStratification.js';
import { diagnosticInvestigations } from './diagnosticInvestigations.js';
import { diagnosticProcedures } from './diagnosticProcedures.js';
import { medicalManagement } from './medicalManagement.js';
import { nonpharmacologicInterventions } from './nonpharmacologicInterventions.js';
import { therapeuticProcedures } from './therapeuticProcedures.js';
import { surgicalInterventions } from './surgicalInterventions.js';
import { specificCircumstances } from './specificCircumstances.js';
import { patientEducation } from './patientEducation.js';
import { followUpAndSurveillance } from './followUpAndSurveillance.js';
import { references } from './references.js';
import { DiseaseData, GuidelineSection, GuidelineSubsection } from '../../types';

// Transform modular sections into guideline sections format
const transformToGuidelineSection = (section: any): GuidelineSection => {
  // Helper function to parse content with multiple evidence levels
  const parseContentByEvidenceLevel = (content: string, defaultLevel: string = 'B') => {
    // Split content by evidence level markers
    const evidenceLevelRegex = /\*\*Evidence Level ([A-Z])\*\*:/g;
    const parts = content.split(evidenceLevelRegex);
    
    if (parts.length <= 1) {
      // No evidence level markers found, return as single statement
      return [{
        statement: formatStatementContent(content.trim()),
        level: defaultLevel,
        source: extractGuidelineSource(content)
      }];
    }

    const statements = [];
    for (let i = 1; i < parts.length; i += 2) {
      const level = parts[i];
      const statement = parts[i + 1]?.trim();
      if (statement) {
        statements.push({
          statement: formatStatementContent(statement),
          level: level,
          source: extractGuidelineSource(statement)
        });
      }
    }
    
    return statements.length > 0 ? statements : [{
      statement: formatStatementContent(content.trim()),
      level: defaultLevel,
      source: extractGuidelineSource(content)
    }];
  };

  // Helper function to extract guideline source from content
  const extractGuidelineSource = (content: string): string => {
    // Look for guideline references
    if (content.includes('ACC/AHA/AMSSM/…/SCMR 2024')) return 'ACC/AHA/AMSSM/SCMR 2024';
    if (content.includes('ESC 2023')) return 'ESC 2023 Guidelines';
    if (content.includes('ESC 2014')) return 'ESC 2014 Guidelines';
    if (content.includes('ACC/AHA')) return 'ACC/AHA Guidelines';
    if (content.includes('ESC')) return 'ESC Guidelines';
    if (content.includes('HRS')) return 'HRS Guidelines';
    return 'Medical Guidelines';
  };

  // Helper function to format statement content with better separation
  const formatStatementContent = (content: string): string => {
    // Remove the "As per [Guidelines]:" prefix and clean up
    let cleaned = content
      .replace(/^As per [^:]+:\s*/i, '')
      .replace(/\*\*Evidence Level [A-Z]\*\*:\s*/g, '')
      .trim();

    // Split by bullet points and format them nicely
    if (cleaned.includes('\n-')) {
      const parts = cleaned.split('\n-');
      const mainText = parts[0].trim();
      const bulletPoints = parts.slice(1).map(point => point.trim()).filter(point => point.length > 0);
      
      if (bulletPoints.length > 0) {
        return mainText + '\n\n' + bulletPoints.map(point => `• ${point}`).join('\n\n');
      }
    }

    // Split by numbered points if present
    if (cleaned.includes('\n\n')) {
      return cleaned.split('\n\n').join('\n\n');
    }

    return cleaned;
  };

  if (section.subsections) {
    // Collect all subsections from all levels
    const allSubsections: any[] = [];
    
    Object.entries(section.subsections).forEach(([key, subsection]: [string, any]) => {
      if (subsection.subsections) {
        // If this subsection has nested subsections, add them all
        Object.entries(subsection.subsections).forEach(([nestedKey, nestedSub]: [string, any]) => {
          const parsedContent = parseContentByEvidenceLevel(
            nestedSub.content || 'Content not available',
            nestedSub.evidenceLevel || (nestedSub.evidenceLevels && nestedSub.evidenceLevels[0]) || 'B'
          );
          
          allSubsections.push({
            title: nestedSub.title,
            id: nestedKey,
            content: parsedContent
          });
        });
      } else if (subsection.content) {
        // Direct subsection with content
        const parsedContent = parseContentByEvidenceLevel(
          subsection.content,
          subsection.evidenceLevel || (subsection.evidenceLevels && subsection.evidenceLevels[0]) || 'B'
        );
        
        allSubsections.push({
          title: subsection.title,
          id: key,
          content: parsedContent
        });
      }
    });

    return {
      title: section.title,
      id: section.id,
      content: [{
        statement: `Comprehensive ${section.title.toLowerCase()} protocols based on current medical guidelines.`,
        level: 'B',
        source: 'ACC/AHA/ESC Guidelines'
      }],
      subsections: allSubsections
    };
  }

  // Handle sections with direct content
  const parsedContent = parseContentByEvidenceLevel(
    section.content || 'Content not available',
    section.evidenceLevel || (section.evidenceLevels && section.evidenceLevels[0]) || 'B'
  );

  return {
    title: section.title,
    id: section.id,
    content: parsedContent
  };
};

export const hypertrophicCardiomyopathy: DiseaseData = {
  id: 'hypertrophic-cardiomyopathy',
  title: 'Hypertrophic Cardiomyopathy',
  lastUpdated: 'January 18, 2025',
  category: 'Cardiomyopathy',
  specialty: 'cardiology',
  content: {
    background: {
      overview: {
        definition: background.subsections.definition.content,
        pathophysiology: background.subsections.pathophysiology.content,
        epidemiology: background.subsections.epidemiology.content,
        diseaseCourse: background.subsections.diseaseCourse.content,
        prognosis: background.subsections.prognosisAndRiskOfRecurrence.content
      }
    },
    relatedCalculators: [
      {
        title: 'HCM Risk-SCD Calculator',
        url: '/calculators/hcm-risk-scd',
        description: 'Sudden cardiac death risk assessment in hypertrophic cardiomyopathy'
      },
      {
        title: 'HCM-AFR Calculator', 
        url: '/calculators/hcm-afr',
        description: 'Atrial fibrillation risk assessment in hypertrophic cardiomyopathy'
      },
      {
        title: 'CHA₂DS₂-VASc Score',
        url: '/calculators/cha2ds2-vasc',
        description: 'Stroke risk assessment in atrial fibrillation'
      }
    ],
    guidelines: {
      keySources: guidelines.subsections.keySources.guidelines.join(', '),
      sections: [
        transformToGuidelineSection(screeningAndDiagnosis),
        transformToGuidelineSection(classificationAndRiskStratification),
        transformToGuidelineSection(diagnosticInvestigations),
        transformToGuidelineSection(diagnosticProcedures),
        transformToGuidelineSection(medicalManagement),
        transformToGuidelineSection(nonpharmacologicInterventions),
        transformToGuidelineSection(therapeuticProcedures),
        transformToGuidelineSection(surgicalInterventions),
        transformToGuidelineSection(specificCircumstances),
        transformToGuidelineSection(patientEducation),
        transformToGuidelineSection(followUpAndSurveillance)
      ]
    },
    clinicalFindings: {
      symptoms: clinicalFindings.subsections.symptoms.content.split('\n').filter(Boolean),
      vitalSigns: clinicalFindings.subsections.vitalSigns.content.split('\n').filter(Boolean),
      pastMedicalHistory: clinicalFindings.subsections.pastMedicalHistory.content.split('\n').filter(Boolean)
    },
    studies: [
      {
        title: 'SEQUOIA-HCM 2024',
        year: '2024',
        description: studies.subsections.sequoiaHcm2024.content,
        authors: 'Maron MS, Masri A, Nassif ME, et al.',
        journal: 'N Engl J Med',
        link: 'https://pubmed.ncbi.nlm.nih.gov/38739079/'
      },
      {
        title: 'TRAVERSE 2025',
        year: '2025', 
        description: studies.subsections.traverse2025.content,
        authors: 'Lee MMY, Masri A, Nassif ME, et al.',
        journal: 'JAMA Cardiol',
        link: 'https://pubmed.ncbi.nlm.nih.gov/39230885/'
      }
    ],
    references: references.references.map(ref => ({
      id: ref.id,
      authors: ref.citation.split('.')[0],
      title: ref.citation.split('.')[1]?.trim() || '',
      journal: ref.citation.split('.')[2]?.trim() || '',
      year: ref.citation.match(/\d{4}/)?.[0] || '',
      link: ref.url
    }))
  }
}; 