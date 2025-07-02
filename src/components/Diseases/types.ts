export interface DiseaseData {
  id: string;
  title: string;
  lastUpdated?: string;
  category?: string;
  content: {
    background: {
      overview: {
        definition: string;
        pathophysiology: string;
        epidemiology: string;
        diseaseCourse: string;
        prognosis: string;
      };
    };
    relatedCalculators?: RelatedCalculator[];
    guidelines: {
      keySources: string;
      sections: GuidelineSection[];
    };
    clinicalFindings?: {
      patientDemographics?: string[];
      pastMedicalHistory?: string[];
      symptoms?: string[];
      neurologicalExam?: string[];
      vitalSigns?: string[];
      likelihoodRatios?: {
        finding: string;
        lrPlus: string;
        value: string;
      }[];
    };
    surgicalInterventions?: SurgicalIntervention[];
    patientEducation?: PatientEducation[];
    followUpSurveillance?: FollowUpSurveillance[];
    specificCircumstances?: SpecificCircumstance[];
    preventiveMeasures?: PreventiveMeasure[];
    studies?: {
      title: string;
      year: string;
      description: string;
      authors: string;
      journal: string;
      link?: string;
    }[];
    references?: Reference[];
  };
  specialty: 'cardiology' | 'obgyn';
}

export interface GuidelineSection {
  title: string;
  id: string;
  content: GuidelineContent[];
  subsections?: GuidelineSubsection[];
}

export interface GuidelineContent {
  statement: string;
  level?: string;
  source: string;
  subsections?: GuidelineSubsection[];
}

export interface GuidelineSubsection {
  title: string;
  id: string;
  content?: GuidelineContent[];
  calculator?: {
    type: string;
    parameters: {
      [key: string]: {
        label: string;
        options: {
          value: number;
          label: string;
          points: number;
        }[];
      };
    };
    riskCategories: {
      score: string;
      risk: string;
      probability: string;
      interpretation: string;
    }[];
  };
  riskTable?: {
    title: string;
    headers: string[];
    rows: {
      situation: string;
      guidance: string[];
    }[];
  };
}

export interface Reference {
  id: number;
  authors: string;
  title: string;
  journal: string;
  year: string;
  link?: string;
}

export interface RelatedCalculator {
  title: string;
  url: string;
  description?: string;
}

export interface SurgicalIntervention {
  id: string;
  title: string;
  indications: string[];
  contraindications?: string[];
  procedure: string;
  complications?: string[];
  outcomes?: string;
  evidenceLevel?: string;
  source?: string;
}

export interface PatientEducation {
  id: string;
  title: string;
  content: string[];
  targetPopulation?: string;
  evidenceLevel?: string;
  source?: string;
}

export interface FollowUpSurveillance {
  id: string;
  title: string;
  protocol: string[];
  frequency?: string;
  monitoring?: string[];
  evidenceLevel?: string;
  source?: string;
}

export interface SpecificCircumstance {
  id: string;
  title: string;
  population: string;
  considerations: string[];
  management: string[];
  evidenceLevel?: string;
  source?: string;
}

export interface PreventiveMeasure {
  id: string;
  title: string;
  intervention: string;
  population: string;
  efficacy?: string;
  evidenceLevel?: string;
  source?: string;
}

export interface DiseaseIndexItem {
  id: string;
  title: string;
  category: string;
  lastUpdated: string;
  readTime: string;
  severity: 'high' | 'medium' | 'low';
  description: string;
  tags: string[];
  prevalence?: string;
  specialty: 'cardiology' | 'obgyn';
}