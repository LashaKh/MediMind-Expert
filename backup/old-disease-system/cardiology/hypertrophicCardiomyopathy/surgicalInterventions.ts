export const surgicalInterventions = {
  id: 'surgical-interventions',
  title: 'Surgical Interventions',
  subsections: {
    septalReductionTherapy: {
      title: 'Septal Reduction Therapy',
      subsections: {
        generalPrinciples: {
          title: 'General Principles',
          evidenceLevels: ['B', 'C', 'D'],
          content: '**Evidence Level B**: As per ACC/AHA/AMSSM/…/SCMR 2024 guidelines: \n- Perform septal reduction therapy to relieve LVOTO in eligible patients with obstructive HCM remaining symptomatic despite guideline-directed medical therapy.\n- Perform septal reduction therapy at experienced centers (comprehensive or primary HCM centers) with demonstrated excellence in clinical outcomes for the procedure.\n\n**Evidence Level C**: Consider performing septal reduction therapy as an alternative to escalation of medical therapy after shared decision-making, including risks and benefits of all treatment options, in eligible symptomatic patients with obstructive HCM.\n\n**Evidence Level D**: Do not perform septal reduction therapy in asymptomatic patients with HCM having normal exercise capacity.\n\n**Evidence Level B**: As per ESC 2023 guidelines: \n- Perform septal reduction therapy to improve symptoms in patients with resting or maximum provoked LVOT gradient ≥ 50 mmHg in NYHA/Ross functional class III-IV despite maximum tolerated medical therapy.\n- Perform septal reduction therapy by experienced operators working as part of a multidisciplinary team expert in the management of HCM.\n\n**Evidence Level C**: \n- Consider performing septal reduction therapy in patients with recurrent exertional syncope caused by a resting or maximum provoked LVOTO gradient ≥ 50 mmHg despite optimal medical therapy.\n- Consider performing septal reduction therapy in expert centers with demonstrable low procedural complication rates in patients with mild symptoms (NYHA class II) refractory to medical therapy, resting or maximum provoked (exercise or Valsalva) gradient of ≥ 50 mmHg, and: moderate-to-severe systolic anterior motion-related MR; AF; moderate-to-severe LA dilatation'
        },
        preoperativeCoronaryAngiography: {
          title: 'Preoperative Coronary Angiography',
          evidenceLevel: 'B',
          content: '**Evidence Level B**: As per ACC/AHA/AMSSM/…/SCMR 2024 guidelines, obtain coronary angiography (CT or invasive) before surgical myectomy in patients with HCM at risk of coronary atherosclerosis.'
        },
        surgicalMyectomy: {
          title: 'Surgical Myectomy',
          evidenceLevels: ['B', 'C'],
          content: '**Evidence Level B**: As per ACC/AHA/AMSSM/…/SCMR 2024 guidelines: Perform surgical myectomy in symptomatic patients with obstructive HCM having associated cardiac disease requiring surgical treatment (such as associated anomalous papillary muscle, markedly elongated anterior mitral leaflet, intrinsic mitral valve disease, multivessel coronary artery disease, valvular aortic stenosis).\n\n**Evidence Level C**: \n- Consider performing earlier (NYHA class II) surgical myectomy in patients with obstructive HCM in the presence of additional clinical factors, including: severe and progressive pulmonary hypertension thought to be attributable to LVOTO or associated MR; LA enlargement with ≥ 1 episodes of symptomatic AF; poor functional capacity attributable to LVOTO as documented on treadmill exercise testing; pediatric and young patient with very high resting LVOT gradients (> 100 mmHg)\n- Consider performing concomitant surgical AF ablation for rhythm control in patients with HCM and AF undergoing surgical myectomy.\n\n**Evidence Level B**: As per ESC 2023 guidelines: Perform septal myectomy over alcohol septal ablation in pediatric patients with an indication for septal reduction therapy and in adult patients with an indication for septal reduction therapy having other lesions requiring surgical intervention (such as mitral valve abnormalities).\n\n**Evidence Level C**: Consider performing surgical AF ablation and/or LAA occlusion procedures during septal myectomy in patients with HCM and symptomatic AF.'
        },
        alcoholSeptalAblation: {
          title: 'Alcohol Septal Ablation',
          evidenceLevel: 'B',
          content: '**Evidence Level B**: As per ACC/AHA/AMSSM/…/SCMR 2024 guidelines, perform alcohol septal ablation at experienced HCM centers in eligible adult patients with obstructive HCM remaining severely symptomatic despite guideline-directed medical therapy and if surgery is contraindicated or the risk is considered unacceptable because of serious comorbidities or advanced age.'
        },
        intraoperativeTee: {
          title: 'Intraoperative TEE',
          evidenceLevel: 'B',
          content: '**Evidence Level B**: As per ACC/AHA/AMSSM/…/SCMR 2024 guidelines: \n- Obtain intraoperative TEE to assess mitral valve anatomy and function and adequacy of septal myectomy in patients with HCM undergoing surgical septal myectomy.\n- Obtain TTE or intraoperative TEE with intracoronary ultrasound-enhancing contrast injection to the septal perforators in patients with HCM undergoing alcohol septal ablation.'
        },
        postproceduralMonitoring: {
          title: 'Postprocedural Monitoring',
          evidenceLevels: ['B', 'C'],
          content: '**Evidence Level B**: As per ACC/AHA/AMSSM/…/SCMR 2024 guidelines, obtain a TTE within 3-6 months after septal reduction therapy to assess the procedural results.\n\n**Evidence Level C**: As per ACC/AHA/HRS 2019 guidelines, consider obtaining prolonged ambulatory ECG monitoring in patients undergoing alcohol septal ablation at risk for developing late AV block.'
        }
      }
    },
    apicalMyectomy: {
      title: 'Apical Myectomy',
      evidenceLevel: 'C',
      content: '**Evidence Level C**: As per ACC/AHA/AMSSM/…/SCMR 2024 guidelines, consider performing apical myectomy by experienced surgeons at comprehensive centers to reduce symptoms in highly selected patients with apical HCM with severe dyspnea or angina (NYHA class III-IV) despite maximal medical therapy, and with preserved ejection fraction and small LV cavity size (LV end-diastolic volume < 50 mL/m² and LV stroke volume < 30 mL/m²).'
    },
    mitralValveRepair: {
      title: 'Mitral Valve Repair',
      evidenceLevels: ['C', 'D'],
      content: '**Evidence Level D**: As per ACC/AHA/AMSSM/…/SCMR 2024 guidelines, do not perform mitral valve replacement for the sole purpose of relieving LVOTO in symptomatic patients with obstructive HCM eligible for septal reduction therapy.\n\n**Evidence Level C**: As per ESC 2023 guidelines: \n- Consider performing mitral valve repair or replacement in symptomatic patients with resting or maximum provoked LVOTO gradient ≥ 50 mmHg and moderate-to-severe MR not correctable by septal reduction therapy alone.\n- Consider performing mitral valve repair or replacement in patients with resting or maximum provoked LVOTO gradient ≥ 50 mmHg and moderate-to-severe MR following isolated myectomy.'
    },
    lvAssistDevice: {
      title: 'LV Assist Device',
      evidenceLevel: 'C',
      content: '**Evidence Level C**: As per ACC/AHA/AMSSM/…/SCMR 2024 guidelines, consider offering continuous flow LV assist device therapy as a bridge to heart transplantation in patients with nonobstructive HCM and advanced HF (NYHA class III-IV despite guideline-directed medical therapy) eligible for heart transplantation.\n\n**Evidence Level C**: As per ESC 2023 guidelines: \n- Consider offering mechanical circulatory support therapy in selected patients with cardiomyopathy with advanced HF (NYHA class III-IV) despite optimal pharmacological and device treatment, otherwise suitable for heart transplantation, to improve symptoms and reduce the risk of HF hospitalization from worsening HF and premature death while awaiting a transplant.\n- Consider offering mechanical circulatory support therapy in selected patients with cardiomyopathy with advanced HF (NYHA class III-IV) despite optimal pharmacological and device therapy, ineligible for cardiac transplantation or other surgical options, and without severe RV dysfunction, to reduce the risk of death and improve symptoms.'
    },
    heartTransplantation: {
      title: 'Heart Transplantation',
      evidenceLevel: 'B',
      content: '**Evidence Level B**: As per ACC/AHA/AMSSM/…/SCMR 2024 guidelines: \n- Obtain cardiopulmonary exercise stress testing in patients with nonobstructive HCM and advanced HF (NYHA class III-IV despite guideline-directed medical therapy) to quantify the degree of functional limitation and aid in the selection of patients for heart transplantation or mechanical circulatory support.\n- Assess patients with nonobstructive HCM and advanced HF (NYHA class III-IV despite guideline-directed medical therapy) or with life-threatening ventricular arrhythmias refractory to maximal guideline-directed medical therapy for heart transplantation in accordance with current listing criteria.\n- Assess patients with HCM and recurrent, poorly tolerated life-threatening ventricular tachyarrhythmias refractory to maximal antiarrhythmic drug therapy and ablation for heart transplantation in accordance with current listing criteria.\n\n**Evidence Level B**: As per ESC 2023 guidelines, offer orthotopic cardiac transplantation in eligible patients with cardiomyopathy with advanced HF (NYHA class III-IV) or intractable ventricular arrhythmia refractory to medical/invasive/device therapy in the absence of absolute contraindications.'
    }
  }
}; 