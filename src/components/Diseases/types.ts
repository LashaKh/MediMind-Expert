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
}

export interface Reference {
  id: number;
  authors: string;
  title: string;
  journal: string;
  year: string;
  link?: string;
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