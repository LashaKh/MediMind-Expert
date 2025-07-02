export const screeningAndDiagnosis = {
  id: 'screening-and-diagnosis',
  title: 'Screening and Diagnosis',
  subsections: {
    screeningOfFamilyRelatives: {
      title: 'Screening of Family Relatives',
      subsections: {
        ecgScreening: {
          title: 'ECG Screening',
          evidenceLevel: 'B',
          content: '**Evidence Level B**: As per ACC/AHA/AMSSM/…/SCMR 2024 guidelines, obtain a 12-lead ECG as part of the screening algorithm in first-degree relatives of patients with HCM.'
        },
        echocardiography: {
          title: 'Echocardiography',
          evidenceLevel: 'B',
          content: '**Evidence Level B**: As per ACC/AHA/AMSSM/…/SCMR 2024 guidelines:\n- Obtain a TTE as part of initial family screening and periodic follow-up in first-degree relatives of patients with HCM.\n- Obtain echocardiography at periodic intervals depending on age (1-2 years in children and adolescents, 3-5 years in adults) and change in clinical status in genotype-positive, phenotype-negative persons.'
        },
        cardiacMri: {
          title: 'Cardiac MRI',
          evidenceLevel: 'C',
          content: '**Evidence Level C**: As per ESC 2023 guidelines:\n- Consider obtaining contrast-enhanced cardiac MRI in genotype-positive/phenotype-negative family members to aid in diagnosis and detection of early disease in families with cardiomyopathy with an identified disease-causing variant.\n- Consider obtaining contrast-enhanced cardiac MRI in phenotype-negative family members to aid diagnosis and detect early disease in cases of familial cardiomyopathy without a genetic diagnosis.'
        },
        geneticTesting: {
          title: 'Genetic Testing',
          evidenceLevels: ['B', 'C', 'D', 'I'],
          content: '**Evidence Level B**: As per ACC/AHA/AMSSM/…/SCMR 2024 guidelines:\n- Offer both clinical screening (ECG and 2D echocardiography) and cascade genetic testing (when a pathogenic/likely pathogenic variant has been identified in the proband) in first-degree relatives of patients with HCM.\n- Consider obtaining postmortem genetic testing to facilitate cascade genetic testing and clinical screening in first-degree relatives in families where a sudden unexplained death has occurred with a postmortem diagnosis of HCM.\n\n**Evidence Level I**: Insufficient evidence regarding the usefulness of genetic testing for variant reclassification in phenotype-negative relatives of patients with HCM having a variant of uncertain significance.\n\n**Evidence Level D**: Do not obtain cascade genetic testing in the family of patients with HCM undergone genetic testing and found to have no pathogenic variants (harbor only benign or likely benign variants).\n\n**Evidence Level B**: As per ESC 2023 guidelines:\n- Obtain cascade genetic testing, with pre- and post-test counseling, in adult at-risk relatives of a patient with cardiomyopathy with a confident genetic diagnosis (a pathogenic/likely pathogenic variant) in the family (starting with first-degree relatives, if available, and cascading out sequentially).\n\n**Evidence Level C**: \n- Consider obtaining cascade genetic testing with pre- and post-test counseling in pediatric at-risk relatives of a patient with cardiomyopathy with a confident genetic diagnosis (a pathogenic/likely pathogenic variant) in the family (starting with first-degree relatives, if available, and cascading out sequentially), considering the underlying cardiomyopathy, expected age of onset, presentation in the family, and clinical/legal consequences.\n- Consider obtaining testing for the presence of a familial variant of unknown significance, typically in parents and/or affected relatives, to determine if the variant segregates with the cardiomyopathy phenotype and if this might allow the variant to be interpreted with confidence.\n- Consider obtaining a clinical evaluation of close relatives (second-degree relatives of the index patient) during cascade screening where a first-degree relative has died.\n\n**Evidence Level D**: Do not obtain diagnostic genetic testing in phenotype-negative relatives of a patient with cardiomyopathy in the absence of a confident genetic diagnosis (a pathogenic/likely pathogenic variant) in the family.'
        },
        counseling: {
          title: 'Counseling',
          evidenceLevel: 'B',
          content: '**Evidence Level B**: As per ACC/AHA/AMSSM/…/SCMR 2024 guidelines, offer preconception and prenatal reproductive and genetic counseling in affected families with HCM.\n\n**Evidence Level C**: As per ESC 2014 guidelines, consider allowing sports activity in definite mutation carriers with no evidence of disease expression after taking into account the underlying mutation, the type of sports activity, and the results of regular and repeated cardiac examinations.'
        },
        followUp: {
          title: 'Follow-up',
          evidenceLevels: ['B', 'C', 'D'],
          content: '**Evidence Level D**: As per ACC/AHA/AMSSM/…/SCMR 2024 guidelines, do not obtain ongoing clinical screening in genotype-negative relatives in families with genotype-positive HCM unless the disease-causing variant is downgraded to a variant of uncertain significance, likely benign, or benign variant during follow-up.\n\n**Evidence Level B**: As per ESC 2023 guidelines:\n- Obtain clinical evaluation using a multiparametric approach, including ECG, cardiac imaging, and long-term follow-up, in first-degree relatives with the same disease-causing variant as the proband after cascade genetic testing.\n- Discharge first-degree relatives without a phenotype and not having the same disease-causing variant as the proband after cascade genetic testing from further follow-up, but advise seeking re-assessment in case symptoms develop or when new clinically relevant data emerge in the family.\n- Obtain initial clinical evaluation using a multiparametric approach, including ECG and cardiac imaging, in first-degree relatives when no pathogenic/likely pathogenic variant is identified in the proband or genetic testing is not obtained.\n- Consider obtaining regular, long-term clinical evaluation using a multiparametric approach, including ECG and cardiac imaging, in first-degree relatives when no pathogenic/likely pathogenic variant is identified in the proband or genetic testing is not obtained.'
        }
      }
    }
  }
}; 