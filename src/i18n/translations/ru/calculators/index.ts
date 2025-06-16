import common from './common';
import cardiology from './cardiology';
import eurscoreII from './euroscore-ii';
import hcmRiskSCD from './hcm-risk-scd';
import hcmAFRisk from './hcm-af-risk';
import { 
  gestationalAgeCalculator,
  eddCalculator,
  preeclampsiaRiskCalculator,
  pretermBirthRiskCalculator,
  gdmScreeningCalculator,
  bishopScoreCalculator
} from './ObGyn';

export default {
  common,
  cardiology,
  eurscoreII,
  
  // Individual OB/GYN calculators with direct access
  gestational_age: gestationalAgeCalculator,
  edd: eddCalculator,
  preeclampsia_risk: preeclampsiaRiskCalculator,
  preterm_birth_risk: pretermBirthRiskCalculator,
  gdm_screening: gdmScreeningCalculator,
  bishop_score: bishopScoreCalculator,
  
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
    risk_assessment: 'Оценка Рисков',
    acute_care: 'Неотложная Помощь',
    therapy_management: 'Управление Терапией',
    heart_failure: 'Сердечная Недостаточность',
    surgical_risk: 'Хирургический Риск',
    cardiomyopathy: 'Кардиомиопатия',
    pregnancy_dating: 'Датировка Беременности',
    antenatal_risk: 'Антенатальный Риск',
    labor_management: 'Ведение Родов',
    assessment_tools: 'Инструменты Оценки',
    gynecologic_oncology: 'Гинекологическая Онкология',
    reproductive_health: 'Репродуктивное Здоровье'
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
};

export {
  eurscoreII
}; 