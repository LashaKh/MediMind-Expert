import { DiseaseData } from '../types';

export const bloodGasAnalysisData: DiseaseData = {
  id: 'blood-gas-analysis',
  title: 'Blood Gas Analysis',
  lastUpdated: 'May 21, 2025',
  category: 'Diagnostic Tests',
  content: {
    background: {
      overview: {
        definition: 'Blood gas analysis is a common diagnostic tool to correctly interpret most of the respiratory, circulatory, and metabolic derangements through arterial and pulmonary/central venous blood gas and electrolyte analysis.',
        pathophysiology: 'Blood gas analysis is used for the assessment of shunt fraction, pulmonary dead space, and respiratory, hemodynamic and metabolic relationship allowing for diagnosis and monitoring of critically ill patients.',
        epidemiology: 'Blood gas analysis is performed in emergency departments and ICUs for the diagnosis and monitoring of patients with respiratory, circulatory, and metabolic conditions.',
        diseaseCourse: 'Blood gas analysis is performed either through the arterial, central venous, or dual sampling of blood to assess oxygenation status, ventilatory and respiratory status, metabolic acid-base equilibrium disorders helping in the diagnosis and monitoring of patients in emergency departments and ICUs.',
        prognosis: 'Blood gas analysis is not associated with increased mortality.'
      }
    },
    guidelines: {
      keySources: 'The following summarized guidelines for the evaluation of blood gas analysis are prepared by our editorial team based on guidelines from the American Academy of Family Physicians (AAFP 2025) and the American Association for Respiratory Care (AARC 2013).',
      sections: [
        {
          title: 'Diagnostic investigations',
          id: 'diagnostic-investigations',
          content: [
            {
              statement: 'Use a systematic approach to evaluate acid-base disorders to provide vital diagnostic information and guide timely treatment in critically ill patients.',
              level: 'B',
              source: 'AAFP 2025 guidelines',
              subsections: [
                {
                  title: 'General principles',
                  id: 'general-principles',
                  content: [
                    {
                      statement: 'Use a systematic approach to evaluate acid-base disorders to provide vital diagnostic information and guide timely treatment in critically ill patients.',
                      level: 'B',
                      source: 'AAFP 2025'
                    },
                    {
                      statement: 'Obtain pH and pCO2 on blood gas to determine the primary process of an acid-base disorder. Recognize that abnormal values increasing or decreasing in the same direction indicate a metabolic process, while those shifting in opposite directions indicate a respiratory process.',
                      level: 'B',
                      source: 'AAFP 2025'
                    },
                    {
                      statement: 'Review expected patterns of pCO2 compensation for metabolic disturbances and bicarbonate compensation for respiratory disturbances when evaluating acid-base disorders to determine if an additional acid-base disorder is present.',
                      level: 'B',
                      source: 'AAFP 2025'
                    },
                    {
                      statement: 'Obtain blood gas analysis and hemoximetry to evaluate a patient\'s ventilatory, acid-base, and/or oxygenation status.',
                      level: 'A',
                      source: 'AARC 2013'
                    },
                    {
                      statement: 'Obtain blood gas analysis and hemoximetry to monitor the severity and progression of documented cardiopulmonary disease.',
                      level: 'A',
                      source: 'AARC 2013'
                    },
                    {
                      statement: 'Consider obtaining blood gas analysis and hemoximetry to evaluate a patient\'s response to therapeutic interventions.',
                      level: 'B',
                      source: 'AARC 2013'
                    },
                    {
                      statement: 'Consider obtaining hemoximetry for the detection and evaluation of shunts during diagnostic cardiac catheterization.',
                      level: 'C',
                      source: 'AARC 2013'
                    }
                  ]
                },
                {
                  title: 'Assessment of oxygenation',
                  id: 'assessment-oxygenation',
                  content: [
                    {
                      statement: 'Avoid capillary blood gas analysis to determine oxygenation status.',
                      level: 'D',
                      source: 'AARC 2013'
                    },
                    {
                      statement: 'Avoid using PvO2 as a substitute for PaO2.',
                      level: 'D',
                      source: 'AARC 2013'
                    },
                    {
                      statement: 'Use hemoximetry to determine the impact of dyshemoglobinemia on oxygenation.',
                      level: 'A',
                      source: 'AARC 2013'
                    }
                  ]
                },
                {
                  title: 'Assessment of ventilation',
                  id: 'assessment-ventilation',
                  content: [
                    {
                      statement: 'Avoid using venous PaCO2 and pH as a substitute for arterial blood measurement of PaCO2 and pH.',
                      level: 'D',
                      source: 'AARC 2013'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    clinicalFindings: {
      symptoms: [
        'Confusion',
        'Difficulty breathing',
        'Dyspnea',
        'Nausea'
      ],
      pastMedicalHistory: [
        'Head injury',
        'CKD (Chronic Kidney Disease)',
        'Metabolic disorders'
      ]
    },
    references: [
      {
        id: 1,
        authors: 'Luciano Gattinoni, Antonio Pesenti, Michael Matthay',
        title: 'Understanding blood gas analysis',
        journal: 'Intensive Care Med. 2018 Jan;44(1):91-93',
        year: '2018',
        link: 'https://pubmed.ncbi.nlm.nih.gov/28497267/'
      },
      {
        id: 2,
        authors: 'Lora Dukic, Lara Milevoj Kopcinovic, Adrijana Dorotic et al',
        title: 'Blood gas testing and related measurements: National recommendations on behalf of the Croatian Society of Medical Biochemistry and Laboratory Medicine',
        journal: 'Biochem Med (Zagreb). 2016 Oct 15;26(3):318-336',
        year: '2016',
        link: 'https://pubmed.ncbi.nlm.nih.gov/27812301/'
      },
      {
        id: 3,
        authors: 'Davis MD, Walsh BK, Sittig SE et al',
        title: 'AARC clinical practice guideline: blood gas analysis and hemoximetry: 2013',
        journal: 'Respir Care. 2013 Oct;58(10):1694-703',
        year: '2013',
        link: 'https://pubmed.ncbi.nlm.nih.gov/23901131'
      },
      {
        id: 4,
        authors: 'Masahiro J. Morikawa, Prakash R. Ganesh',
        title: 'Acid-Base Interpretation: A Practical Approach',
        journal: 'Am Fam Physician. 2025 Feb;111(2):148-155',
        year: '2025'
      }
    ]
  },
  specialty: 'cardiology'
}; 