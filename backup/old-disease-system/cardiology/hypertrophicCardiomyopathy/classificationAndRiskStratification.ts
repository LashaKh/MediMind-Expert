export const classificationAndRiskStratification = {
  id: 'classification-and-risk-stratification',
  title: 'Classification and Risk Stratification',
  subsections: {
    scdRiskAssessment: {
      title: 'SCD Risk Assessment',
      evidenceLevels: ['B', 'C'],
      content: '**Evidence Level B**: As per ACC/AHA/AMSSM/…/SCMR 2024 guidelines:\nObtain a comprehensive, systematic noninvasive SCD risk assessment at initial evaluation, including evaluation of the following risk factors, in adult patients with HCM:\n- personal history of cardiac arrest or sustained ventricular arrhythmia\n- personal history of syncope suspected by clinical history to be arrhythmic\n- family history in a close relative of premature HCM-related sudden death, cardiac arrest, or sustained ventricular arrhythmia\n- maximal LV wall thickness, ejection fraction, LV apical aneurysm\n- nonsustained VT episodes on continuous ambulatory ECG monitoring\n\n**Evidence Level C**: Consider obtaining echocardiography-derived LA diameter and maximal LVOT gradient in patients aged ≥ 16 years with HCM to aid in calculating an estimated 5-year sudden death risk to be used in shared decision-making for ICD implantation.\n\n**Evidence Level B**: As per ESC 2023 guidelines:\n- Use the HCM Risk-SCD calculator to estimate the risk of SCD at 5 years in patients aged ≥ 16 years for primary prevention.\n- Use validated pediatric-specific risk prediction models (such as HCM Risk-Kids) to estimate the risk of sudden death at 5 years in patients aged < 16 years for primary prevention.\n- Assess the 5-year risk of SCD at first evaluation and re-evaluate at 1-2 year intervals or whenever the clinical status changes.\n\n**Evidence Level B**: As per ACC/AHA/HRS 2018 guidelines, assess the SCD risk at the time of initial evaluation and periodically thereafter in patients with HCM.',
      riskFactors: [
        'Personal history of cardiac arrest or sustained ventricular arrhythmia',
        'Personal history of syncope suspected by clinical history to be arrhythmic',
        'Family history in a close relative of premature HCM-related sudden death, cardiac arrest, or sustained ventricular arrhythmia',
        'Maximal LV wall thickness, ejection fraction, LV apical aneurysm',
        'Nonsustained VT episodes on continuous ambulatory ECG monitoring'
      ],
      calculators: [
        'HCM Risk-SCD calculator (patients aged ≥ 16 years)',
        'HCM Risk-Kids (patients aged < 16 years)'
      ]
    }
  }
}; 