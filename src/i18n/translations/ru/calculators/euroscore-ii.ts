export default {
  title: 'Калькулятор риска EuroSCORE II',
  subtitle: 'Европейская система оценки кардиохирургического риска • Версия 2 • Прогнозирование 30-дневной смертности',
  description: 'Обновленная европейская система оценки кардиохирургического риска для прогнозирования 30-дневной смертности.',
  
  validation: {
    age_required: 'Возраст обязателен',
    age_range: 'Возраст должен быть от 18 до 120 лет',
    gender_required: 'Пол обязателен',
    urgency_required: 'Срочность обязательна',
    nyha_required: 'Класс NYHA обязателен',
    procedure_weight_required: 'Вес процедуры обязателен',
    creatinine_required: 'Креатинин обязателен',
    creatinine_range: 'Креатинин должен быть от 0.5 до 15 мг/дл'
  },
  
  alert_title: 'EuroSCORE II - Европейская модель кардиохирургического риска',
  alert_description: 'Обновленная европейская система оценки кардиохирургического риска',
  alert_validation: 'Nashef et al. - Европейская валидация - Обновленный алгоритм',
  
  age_label: 'Возраст',
  age_placeholder: '65',
  age_unit: 'лет',
  gender_label: 'Пол',
  gender_placeholder: 'Выберите пол...',
  gender_male: 'Мужской',
  gender_female: 'Женский',
  creatinine_label: 'Креатинин сыворотки',
  creatinine_placeholder: '1.0',
  creatinine_unit: 'мг/дл',
  
  nyha_label: 'Функциональный класс NYHA',
  nyha_placeholder: 'Выберите класс NYHA...',
  nyha_class_1: 'Класс I - Нет симптомов',
  nyha_class_2: 'Класс II - Легкие ограничения',
  nyha_class_3: 'Класс III - Выраженные ограничения',
  nyha_class_4: 'Класс IV - Тяжелые ограничения',
  
  urgency_label: 'Срочность',
  urgency_placeholder: 'Выберите уровень срочности...',
  urgency_elective: 'Плановая',
  urgency_urgent: 'Срочная',
  urgency_emergency: 'Экстренная',
  
  procedure_weight_label: 'Вес/сложность процедуры',
  procedure_weight_placeholder: 'Выберите сложность процедуры...',
  procedure_weight_low: 'Низкая сложность',
  procedure_weight_medium: 'Средняя сложность',
  procedure_weight_high: 'Высокая сложность',
  
  results_title: 'Результаты оценки EuroSCORE II',
  mortality_risk_30day: 'Риск 30-дневной смертности',
  predicted_mortality: 'Прогнозируемая 30-дневная смертность',
  
  risk_low: 'Низкий риск',
  risk_intermediate: 'Промежуточный риск',
  risk_high: 'Высокий риск',
  risk_very_high: 'Очень высокий риск',
  
  new_assessment: 'Новая оценка',
  modify_inputs: 'Изменить данные',
  
  footer_text: 'Основано на EuroSCORE II Nashef et al. • Только для образовательных целей'
}; 