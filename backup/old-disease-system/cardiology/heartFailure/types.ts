export interface RelatedCalculator {
  title: string;
  url: string;
}

export interface HeartFailureBackground {
  overview: {
    definition: string;
    pathophysiology: string;
    epidemiology: string;
    diseaseCourse: string;
    prognosis: string;
  };
}

export interface LikelihoodRatio {
  finding: string;
  lrPlus: string;
  value: string;
}

export interface ClinicalFindings {
  symptoms: string[];
  vitalSigns: string[];
  pastMedicalHistory: string[];
  likelihoodRatios: LikelihoodRatio[];
}

export interface GuidelineContent {
  statement: string;
  level: string;
  source: string;
}

export interface GuidelineSubsection {
  id: string;
  title: string;
  content: GuidelineContent[];
}

export interface Trial {
  title: string;
  year: string;
  description: string;
  authors: string;
  journal: string;
  link: string;
}

export interface GuidelineSection {
  id: string;
  title: string;
  content: GuidelineContent[];
  subsections?: GuidelineSubsection[];
  trials?: Trial[];
}

export interface Guidelines {
  keySources: string;
  sections: GuidelineSection[];
}

export interface Reference {
  id: number;
  authors: string;
  title: string;
  journal: string;
  year: string;
  link: string;
}

export interface HeartFailureContent {
  relatedCalculators: RelatedCalculator[];
  background: HeartFailureBackground;
  clinicalFindings: ClinicalFindings;
  guidelines: Guidelines;
  references: Reference[];
}