import common from './common';
import cardiology from './cardiology';
import eurscoreII from './euroscore-ii';
import hcmRiskSCD from './hcm-risk-scd';
import hcmAFRisk from './hcm-af-risk';
import { 
  ovarianReserve,
  ovarianReserveCalculator,
  gestationalAgeCalculator,
  eddCalculator,
  preeclampsiaRiskCalculator,
  pretermBirthRiskCalculator,
  gdmScreeningCalculator,
  bishopScoreCalculator,
  vbacSuccessCalculator,
  apgarScoreCalculator,
  pphRiskCalculator,
  cervicalCancerRiskCalculator,
  ovarianCancerRiskCalculator,
  endometrialCancerRiskCalculator,
  menopauseAssessmentCalculator
} from './ObGyn';

export default {
  common,
  cardiology,
  eurscoreII,
  
  // OB/GYN namespace - this is what makes t('calculators.obgyn.apgar_score.title') work
  obgyn: {
    apgar_score: apgarScoreCalculator,
    bishop_score: bishopScoreCalculator,
    cervical_cancer_risk: cervicalCancerRiskCalculator,
    edd_calculator: eddCalculator,
    endometrial_cancer_risk: endometrialCancerRiskCalculator,
    gdm_screening: gdmScreeningCalculator,
    gestational_age: gestationalAgeCalculator,
    menopause_assessment: menopauseAssessmentCalculator,
    ovarian_cancer_risk: ovarianCancerRiskCalculator,
    ovarian_reserve: ovarianReserve,
    ovarian_reserve_calculator: ovarianReserveCalculator,
    pph_risk: pphRiskCalculator,
    preeclampsia_risk: preeclampsiaRiskCalculator,
    preterm_birth_risk: pretermBirthRiskCalculator,
    vbac_success: vbacSuccessCalculator
  },
  
  // Direct access ObGyn namespace for the useTranslation hook
  ObGyn: {
    ovarianReserve: ovarianReserve,
    ovarianReserveCalculator: ovarianReserveCalculator,
    gestationalAgeCalculator: gestationalAgeCalculator,
    eddCalculator: eddCalculator,
    preeclampsiaRiskCalculator: preeclampsiaRiskCalculator,
    pretermBirthRiskCalculator: pretermBirthRiskCalculator,
    gdmScreeningCalculator: gdmScreeningCalculator,
    bishopScoreCalculator: bishopScoreCalculator,
    vbacSuccessCalculator: vbacSuccessCalculator,
    apgarScoreCalculator: apgarScoreCalculator,
    pphRiskCalculator: pphRiskCalculator,
    cervicalCancerRiskCalculator: cervicalCancerRiskCalculator,
    ovarianCancerRiskCalculator: ovarianCancerRiskCalculator,
    endometrialCancerRiskCalculator: endometrialCancerRiskCalculator,
    menopauseAssessmentCalculator: menopauseAssessmentCalculator
  },
  
  // Individual OB/GYN calculators with direct access (for backward compatibility)
  gestational_age: gestationalAgeCalculator,
  edd: eddCalculator,
  preeclampsia_risk: preeclampsiaRiskCalculator,
  preterm_birth_risk: pretermBirthRiskCalculator,
  gdm_screening: gdmScreeningCalculator,
  bishop_score: bishopScoreCalculator,
  vbac_success: vbacSuccessCalculator,
  apgar_score: apgarScoreCalculator,
  pph_risk_calculator: pphRiskCalculator,
  
  // Top-level keys for Calculator landing page
  specialty: {
    cardiology: {
      title: 'Кардиологические Калькуляторы',
      description: 'Профессиональные инструменты оценки сердечно-сосудистого риска и поддержки клинических решений',
      status: 'ГОТОВ К ПРОИЗВОДСТВУ', 
      message: '✅ 16 Калькуляторов • 100% Валидированы • 6 Категорий'
    },
    obgyn: {
      title: 'Акушерско-Гинекологические Калькуляторы',
      description: 'Комплексные инструменты оценки в акушерстве и гинекологии',
      status: 'ГОТОВ К ВНЕДРЕНИЮ',
      message: '⚠️ 14 Калькуляторов • Этап Внедрения • Профессиональный Уровень'
    }
  },
  
  stats: {
    calculators: 'Калькуляторы',
    validated: 'Валидированы', 
    categories: 'Категории'
  },
  
  categories: {
    risk_assessment: 'Оценка риска',
    acute_care: 'Острая помощь',
    therapy_management: 'Управление терапией',
    heart_failure: 'Сердечная недостаточность',
    surgical_risk: 'Хирургический риск',
    cardiomyopathy: 'Кардиомиопатия',
    pregnancy_dating: 'Датировка беременности',
    antenatal_risk: 'Антенатальный риск',
    labor_management: 'Управление родами',
    assessment_tools: 'Инструменты оценки',
    gynecologic_oncology: 'Гинекологическая онкология',
    reproductive_endocrinology: 'Репродуктивная эндокринология'
  },
  
  // Calculator title/subtitle shortcuts for cards
  dapt: {
    title: 'Калькулятор DAPT Score',
    subtitle: 'Длительность Двойной Антитромбоцитарной Терапии • Оценка Польза-Риск'
  },
  
  precise_dapt: {
    title: 'Калькулятор PRECISE-DAPT',
    subtitle: 'Оценка Риска Кровотечения • Оптимизация Длительности DAPT'
  },
  
  prevent: {
    title: 'Калькулятор AHA PREVENT™',
    subtitle: 'Оценка Сердечно-Сосудистого Риска • CKM-E Усиленный'
  },
  
  ascvd: {
    title: 'Калькулятор ASCVD Риска',
    subtitle: '10-летний Риск Атеросклеротических Сердечно-Сосудистых Заболеваний'
  },
  
  atrial_fibrillation: {
    title: 'Калькуляторы Фибрилляции Предсердий',
    subtitle: 'CHA₂DS₂-VASc • HAS-BLED • Комплексная Оценка ФП'
  },
  
  timi_risk: {
    title: 'Калькулятор TIMI Risk',
    subtitle: 'Оценка Риска Тромболизиса при Инфаркте Миокарда'
  },
  
  grace_acs: {
    title: 'Калькулятор GRACE ACS',
    subtitle: 'Глобальный Регистр Острых Коронарных Событий - Оценка Риска'
  },
  
  heart_failure_staging: {
    title: 'Стадирование Сердечной Недостаточности',
    subtitle: 'Классификация Стадий ACC/AHA • Клиническая Оценка'
  },
  
  gwtg_hf: {
    title: 'Калькулятор GWTG-HF',
    subtitle: 'Получи с Рекомендациями - Оценка Риска Сердечной Недостаточности'
  },
  
  maggic: {
    title: 'Калькулятор MAGGIC',
    subtitle: 'Мета-Анализ Глобальной Группы по Хронической Сердечной Недостаточности'
  },
  
  shfm: {
    title: 'Калькулятор SHFM',
    subtitle: 'Сиэтлская Модель Сердечной Недостаточности • Прогноз Выживаемости'
  },
  
  sts: {
    title: 'Калькулятор STS',
    subtitle: 'Общество Торакальных Хирургов - Оценка Риска'
  },
  
  euroscore: {
    title: 'Калькулятор EuroSCORE II',
    subtitle: 'Европейская Система Оценки Операционного Риска на Сердце'
  },
  
  hcm_risk_scd: hcmRiskSCD,
  
  hcmAFRisk,
  hcm_af_risk: hcmAFRisk,
  
  categories_label: 'Категории',
  calculator_categories: 'Категории Калькуляторов',
  back_to: 'Назад к',
  view_grid: 'Сетка',
  view_list: 'Список',
  
  // OB/GYN Calculator entries
  pph_risk: {
    title: 'Калькулятор риска ПРК',
    subtitle: 'Оценка риска послеродового кровотечения'
  },
  
  cervical_cancer_risk: {
    title: 'Калькулятор риска рака шейки матки',
    subtitle: 'Оценка риска рака шейки матки на основе ВПЧ'
  },
  
  ovarian_cancer_risk: {
    title: 'Калькулятор риска рака яичников',
    subtitle: 'Оценка наследственного риска рака яичников'
  },
  
  endometrial_cancer_risk: {
    title: 'Калькулятор риска рака эндометрия',
    subtitle: 'Оценка пожизненного риска рака эндометрия'
  },
  
  ovarian_reserve: {
    title: 'Калькулятор овариального резерва',
    subtitle: 'Оценка фертильности на основе АМГ'
  },
  
  menopause_assessment: menopauseAssessmentCalculator,
};

export {
  eurscoreII
}; 