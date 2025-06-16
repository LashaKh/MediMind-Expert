export const calculatorCommon = {
  title: 'Медицинские калькуляторы',
  back_to: 'Назад к калькуляторам',
  categories_label: 'Категории',
  tools_count: '{count} инструмента | {count} инструмента | {count} инструментов',
  back: 'Назад',
  next: 'Далее',
  new_calculation: 'Новый расчет',
  modify_inputs: 'Изменить входные данные',
  calculator_categories: 'Категории калькуляторов',
  specialty: {
    cardiology: {
      title: 'Кардиологические калькуляторы',
      description: 'Набор специализированных калькуляторов для кардиологии.',
      message: 'Выбрана специализация Кардиология'
    },
    obgyn: {
      title: 'Калькуляторы для акушерства и гинекологии',
      description: 'Набор специализированных калькуляторов для акушерства и гинекологии.',
      message: 'Выбрана специализация Акушерство и Гинекология'
    }
  },
  stats: {
    calculators: 'Калькуляторы',
    validated: 'Проверено',
    categories: 'Категории'
  },
  calculate: 'Рассчитать',
  reset: 'Сбросить',
  result: 'Результат',
  interpretation: 'Интерпретация',
  risk: 'Риск',
  score: 'Балл',
  low: 'Низкий',
  moderate: 'Умеренный',
  high: 'Высокий',
  veryHigh: 'Очень высокий',
  normal: 'Нормальный',
  abnormal: 'Аномальный',
  positive: 'Положительный',
  negative: 'Отрицательный',
  patient: {
    age: 'Возраст',
    gender: 'Пол',
    male: 'Мужской',
    female: 'Женский',
    weight: 'Вес (кг)',
    height: 'Рост (см)',
    bmi: 'ИМТ'
  },
  vitals: {
    systolicBP: 'Систолическое АД (мм рт. ст.)',
    diastolicBP: 'Диастолическое АД (мм рт. ст.)',
    heartRate: 'ЧСС (уд/мин)',
    temperature: 'Температура (°C)',
    respiratoryRate: 'ЧДД (в мин)',
    oxygenSaturation: 'SpO2 (%)'
  },
  labs: {
    hemoglobin: 'Гемоглобин (г/дл)',
    hematocrit: 'Гематокрит (%)',
    platelets: 'Тромбоциты (×10³/мкл)',
    creatinine: 'Креатинин (мг/дл)',
    glucose: 'Глюкоза (мг/дл)',
    cholesterol: 'Холестерин (мг/дл)',
    ldl: 'ЛПНП (мг/дл)',
    hdl: 'ЛПВП (мг/дл)',
    triglycerides: 'Триглицериды (мг/дл)'
  },
  validation: {
    required: 'Обязательное поле',
    invalidNumber: 'Введите действительное число',
    outOfRange: 'Значение вне допустимого диапазона'
  },
  actions: {
    share: 'Поделиться результатом',
    print: 'Печать',
    save: 'Сохранить',
    export: 'Экспорт'
  },
  categories: {
    risk_assessment: 'Оценка риска',
    acute_care: 'Неотложная помощь',
    therapy_management: 'Управление терапией',
    heart_failure: 'Сердечная недостаточность',
    surgical_risk: 'Хирургический риск',
    cardiomyopathy: 'Кардиомиопатия'
  },
  miscellaneous: "Другое",
  
  // Calculator Result Share Component
  calculator_results_summary: "Сводка результатов калькулятора",
  shared: "Отправлено",
  sharing: "Отправка...",
  share_with_ai: "Поделиться с ИИ",
  key_results: "Ключевые результаты:",
  clinical_interpretation_label: "Клиническая интерпретация:",
  recommendations_label: "Рекомендации:",
  more_recommendations: "ещё рекомендации",
  universal_recommendations: "Универсальные рекомендации",
  share_results_description: "Поделитесь этими результатами с вашим ИИ-помощником для подробного анализа и следующих шагов"
};

export default calculatorCommon; 