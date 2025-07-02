import { ClinicalFindings } from './types';

export const clinicalFindings: ClinicalFindings = {
  symptoms: [
    "Abdominal pain",
    "Ankle swelling", 
    "Anxiety",
    "Bloating",
    "Chest pain",
    "Confusion",
    "Cough",
    "Depression",
    "Dizziness",
    "Dyspnea",
    "Early satiety",
    "Exercise intolerance",
    "Exertional dyspnea",
    "Fainting",
    "Fatigue",
    "Hemoptysis",
    "Lightheadedness",
    "Loss of appetite",
    "Nausea",
    "Orthopnea",
    "Palpitations",
    "Paroxsymal nocturnal dyspnea",
    "Purulent sputum",
    "Sleeping disorder",
    "Weight gain",
    "Weight loss"
  ],
  
  vitalSigns: [
    "Hypotension",
    "Tachycardia"
  ],
  
  pastMedicalHistory: [
    "Angina pectoris",
    "COPD",
    "Diabetes mellitus",
    "Dyslipidemia",
    "Hypertension",
    "Myocardial infarction",
    "Obesity",
    "Sleep apnea",
    "Valvular heart disease"
  ],

  likelihoodRatios: [
    {
      finding: "History of exertional dyspnea",
      lrPlus: "5",
      value: ""
    },
    {
      finding: "Presence of abdominojugular reflux",
      lrPlus: "4.4",
      value: "(1.8-10)"
    },
    {
      finding: "Presence of myocardial infarction",
      lrPlus: "4.3", 
      value: ""
    },
    {
      finding: "Presence of third heart sound",
      lrPlus: "4",
      value: ""
    }
  ]
};