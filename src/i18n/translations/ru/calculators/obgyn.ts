export const obgynCalculators = {
  // VBAC Success Calculator - Comprehensive Implementation
  vbac_success: {
    title: 'Калькулятор успеха VBAC',
    subtitle: 'Прогнозирование успеха вагинальных родов после кесарева сечения',
    description: 'Прогнозирование успеха VBAC на основе доказательной медицины с использованием материнских и акушерских факторов',
    
    // Демография матери
    maternal_demographics: 'Демография матери',
    maternal_age_label: 'Возраст матери (лет)',
    maternal_age_placeholder: 'Введите возраст матери',
    maternal_age_help: 'Возраст матери является значимым фактором успеха VBAC',
    
    // Акушерский анамнез
    obstetric_history: 'Акушерский анамнез',
    prior_cesareans_label: 'Количество предыдущих кесаревых сечений',
    prior_cesareans_placeholder: 'Введите количество (1-3)',
    prior_cesareans_help: 'Количество предыдущих кесаревых сечений влияет на оценку риска',
    
    indication_previous_cd_label: 'Показание к предыдущему кесареву сечению',
    indication_ftp: 'Отсутствие прогресса родов',
    indication_breech: 'Тазовое предлежание',
    indication_fetal_distress: 'Дистресс плода',
    indication_other: 'Другие показания',
    
    prior_vaginal_delivery_label: 'Предыдущие вагинальные роды',
    vbac_history_label: 'Предыдущий успешный VBAC',
    
    // Текущая беременность
    current_pregnancy: 'Текущая беременность',
    gestational_age_label: 'Гестационный возраст (недели)',
    gestational_age_placeholder: 'Введите гестационный возраст',
    gestational_age_help: 'Гестационный возраст текущей беременности',
    
    estimated_fetal_weight_label: 'Предполагаемый вес плода (граммы)',
    estimated_fetal_weight_placeholder: 'Введите предполагаемый вес',
    estimated_fetal_weight_help: 'Вес плода влияет на успех VBAC',
    
    // Характеристики родов
    labor_characteristics: 'Характеристики родов',
    spontaneous_labor_label: 'Спонтанное начало родов',
    cervical_dilation_label: 'Раскрытие шейки матки при поступлении (см)',
    cervical_dilation_placeholder: 'Введите раскрытие (0-10 см)',
    cervical_dilation_help: 'Раскрытие шейки матки при поступлении',
    
    // Результаты
    vbac_success_probability: 'Вероятность успеха VBAC',
    risk_assessment: 'Оценка риска',
    counseling_points: 'Пункты консультирования',
    
    low_success: 'Низкая вероятность успеха (<60%)',
    moderate_success: 'Умеренная вероятность успеха (60-80%)',
    high_success: 'Высокая вероятность успеха (>80%)',
    
    detailed_counseling: 'Рекомендуется детальное консультирование',
    appropriate_candidate: 'Подходящий кандидат для VBAC',
    consider_risks_benefits: 'Рассмотрите индивидуальные риски и пользу',
    
    // Кнопки
    calculate_button: 'Рассчитать успех VBAC',
    new_assessment: 'Новая оценка',
    modify_inputs: 'Изменить',
    
    // Валидация
    age_error: 'Возраст матери должен быть 15-50 лет',
    cesareans_error: 'Предыдущие кесаревы сечения должны быть 1-3',
    gestational_age_error: 'Гестационный возраст должен быть 24-42 недели',
    fetal_weight_error: 'Предполагаемый вес плода должен быть 500-6000 грамм',
    dilation_error: 'Раскрытие шейки матки должно быть 0-10 см'
  },

  bishopScore: {
    title: 'Шкала Бишопа',
    subtitle: 'Оценка шейки матки для индукции родов',
    description: 'Оценка готовности шейки матки с использованием системы Бишопа для индукции родов',
    
    // Оценка шейки матки
    cervical_assessment: 'Оценка шейки матки',
    
    cervical_dilation_label: 'Раскрытие шейки матки (см)',
    cervical_dilation_help: 'Степень открытия шейки матки в сантиметрах',
    cervical_dilation_error: 'Раскрытие должно быть 0-10 см',
    cervical_dilation_0: 'Закрыта (0 см)',
    cervical_dilation_1_2: '1-2 см',
    cervical_dilation_3_4: '3-4 см',
    cervical_dilation_5_plus: '5+ см',
    
    cervical_effacement_label: 'Сглаживание шейки матки (%)',
    cervical_effacement_help: 'Процент истончения шейки матки',
    cervical_effacement_error: 'Сглаживание должно быть 0-100%',
    cervical_effacement_0_30: '0-30%',
    cervical_effacement_40_50: '40-50%',
    cervical_effacement_60_70: '60-70%',
    cervical_effacement_80_plus: '80%+',
    
    cervical_consistency_label: 'Консистенция шейки матки',
    cervical_consistency_help: 'Плотность ткани шейки матки',
    cervical_consistency_firm: 'Плотная',
    cervical_consistency_medium: 'Средняя',
    cervical_consistency_soft: 'Мягкая',
    
    cervical_position_label: 'Положение шейки матки',
    cervical_position_help: 'Анатомическое положение шейки матки',
    cervical_position_posterior: 'Заднее',
    cervical_position_mid: 'Среднее положение',
    cervical_position_anterior: 'Переднее',
    
    fetal_station_label: 'Стояние плода',
    fetal_station_help: 'Положение предлежащей части плода относительно седалищных остей',
    fetal_station_error: 'Стояние плода должно быть от -3 до +3',
    fetal_station_unit: 'стояние',
    
    // Результаты
    bishop_score_analysis: 'Анализ шкалы Бишопа',
    total_score: 'Общий балл',
    score_points: '{score}/13 баллов',
    induction_success: 'Успех индукции',
    labor_likelihood: 'Вероятность родов',
    cesarean_risk: 'Риск кесарева сечения',
    clinical_recommendation: 'Клиническая рекомендация',
    evidence_base: 'База доказательств',
    
    // Категории
    unfavorable_cervix: 'Неблагоприятная шейка матки',
    intermediate_cervix: 'Промежуточная шейка матки',
    favorable_cervix: 'Благоприятная шейка матки',
    very_favorable_cervix: 'Очень благоприятная шейка матки',
    
    // Кнопки
    calculate_button: 'Рассчитать шкалу Бишопа',
    new_assessment: 'Новая оценка',
    modify_inputs: 'Изменить'
  },

  endometrialCancerRisk: {
    title: 'Калькулятор риска рака эндометрия',
    subtitle: 'Оценка риска развития рака эндометрия',
    description: 'Комплексная оценка риска развития рака эндометрия на основе факторов риска и клинических данных для принятия решений о скрининге и профилактике',
    
    // Основная информация
    cancer_risk_assessment: 'Оценка онкологического риска',
    endometrial_cancer_overview: 'Рак эндометрия - наиболее частый рак женских половых органов',
    risk_stratification: 'Стратификация риска для персонализированного скрининга',
    evidence_based_assessment: 'Доказательная оценка риска',
    
    // Демографические факторы
    demographic_factors: 'Демографические факторы',
    basic_information: 'Основная информация',
    
    patient_age_label: 'Возраст пациентки (лет)',
    patient_age_placeholder: 'Введите возраст пациентки',
    patient_age_help: 'Возраст является основным фактором риска',
    patient_age_error: 'Возраст должен быть 20-90 лет',
    
    age_risk_categories: 'Возрастные категории риска',
    age_under_40: 'Моложе 40 лет - низкий риск',
    age_40_49: '40-49 лет - умеренный риск',
    age_50_59: '50-59 лет - повышенный риск',
    age_60_plus: '60+ лет - высокий риск',
    
    // Антропометрические данные
    anthropometric_data: 'Антропометрические данные',
    body_composition: 'Состав тела',
    
    current_bmi_label: 'Текущий ИМТ (кг/м²)',
    current_bmi_placeholder: 'Введите текущий ИМТ',
    current_bmi_help: 'Индекс массы тела является важным фактором риска',
    current_bmi_error: 'ИМТ должен быть 15-60 кг/м²',
    
    bmi_risk_categories: 'Категории риска по ИМТ',
    bmi_normal: 'Нормальный вес (18.5-24.9) - базовый риск',
    bmi_overweight: 'Избыточный вес (25-29.9) - повышенный риск в 1.5 раза',
    bmi_obese_1: 'Ожирение I степени (30-34.9) - повышенный риск в 3 раза',
    bmi_obese_2: 'Ожирение II степени (35-39.9) - повышенный риск в 5 раз',
    bmi_obese_3: 'Ожирение III степени (≥40) - повышенный риск в 6 раз',
    
    // Менструальный анамнез
    menstrual_history: 'Менструальный анамнез',
    reproductive_factors: 'Репродуктивные факторы',
    
    menarche_age_label: 'Возраст менархе (лет)',
    menarche_age_placeholder: 'Введите возраст первой менструации',
    menarche_age_help: 'Раннее менархе увеличивает риск',
    menarche_age_error: 'Возраст менархе должен быть 8-18 лет',
    
    menarche_categories: 'Категории риска по возрасту менархе',
    menarche_early: 'Раннее менархе (<12 лет) - повышенный риск',
    menarche_normal: 'Нормальное менархе (12-13 лет) - стандартный риск',
    menarche_late: 'Позднее менархе (>13 лет) - сниженный риск',
    
    menopause_status_label: 'Статус менопаузы',
    menopause_options: {
      premenopausal: 'Пременопауза',
      perimenopausal: 'Перименопауза',
      postmenopausal: 'Постменопауза',
      surgical: 'Хирургическая менопауза'
    },
    
    menopause_age_label: 'Возраст менопаузы (лет)',
    menopause_age_placeholder: 'Введите возраст менопаузы',
    menopause_age_help: 'Поздняя менопауза увеличивает риск',
    menopause_age_error: 'Возраст менопаузы должен быть 35-65 лет',
    
    menopause_categories: 'Категории риска по возрасту менопаузы',
    menopause_early: 'Ранняя менопауза (<45 лет) - сниженный риск',
    menopause_normal: 'Нормальная менопауза (45-55 лет) - стандартный риск',
    menopause_late: 'Поздняя менопауза (>55 лет) - повышенный риск',
    
    // Репродуктивный анамнез
    reproductive_history: 'Репродуктивный анамнез',
    pregnancy_outcomes: 'Исходы беременностей',
    
    parity_label: 'Паритет (количество родов)',
    parity_help: 'Нерожавшие женщины имеют повышенный риск',
    nulliparous: 'Нерожавшая (0 родов)',
    primiparous: 'Однорожавшая (1 роды)',
    multiparous: 'Многорожавшая (2+ родов)',
    
    parity_risk_categories: 'Риск по паритету',
    nulliparity_risk: 'Нерожавшие - повышенный риск в 2-3 раза',
    parity_protective: 'Роды оказывают защитное действие',
    
    last_pregnancy_age_label: 'Возраст последней беременности (лет)',
    last_pregnancy_age_placeholder: 'Введите возраст последней беременности',
    last_pregnancy_age_help: 'Поздние роды могут влиять на риск',
    
    breastfeeding_duration_label: 'Общая продолжительность грудного вскармливания (месяцы)',
    breastfeeding_duration_placeholder: 'Введите общую продолжительность',
    breastfeeding_duration_help: 'Грудное вскармливание снижает риск',
    
    // Гормональные факторы
    hormonal_factors: 'Гормональные факторы',
    hormone_exposure: 'Воздействие гормонов',
    
    hormone_therapy_label: 'Заместительная гормональная терапия (ЗГТ)',
    hormone_therapy_options: {
      never: 'Никогда не принимала',
      estrogen_only: 'Только эстрогены',
      combined: 'Комбинированная (эстроген + прогестин)',
      current: 'Принимает в настоящее время'
    },
    
    hormone_therapy_duration_label: 'Продолжительность ЗГТ (лет)',
    hormone_therapy_duration_placeholder: 'Введите продолжительность',
    hormone_therapy_duration_help: 'Длительность применения влияет на риск',
    
    oral_contraceptives_label: 'Использование оральных контрацептивов',
    oc_options: {
      never: 'Никогда не использовала',
      past: 'Использовала в прошлом',
      current: 'Использует в настоящее время'
    },
    
    oc_duration_label: 'Продолжительность использования ОК (лет)',
    oc_duration_placeholder: 'Введите продолжительность',
    oc_duration_help: 'Оральные контрацептивы снижают риск',
    
    // Медицинский анамнез
    medical_history: 'Медицинский анамнез',
    comorbidities: 'Сопутствующие заболевания',
    
    diabetes_mellitus_label: 'Сахарный диабет',
    diabetes_options: {
      none: 'Нет диабета',
      type1: 'Сахарный диабет 1 типа',
      type2: 'Сахарный диабет 2 типа',
      gestational: 'Гестационный диабет в анамнезе'
    },
    
    hypertension_label: 'Артериальная гипертензия',
    hypertension_options: {
      none: 'Нет гипертензии',
      controlled: 'Контролируемая гипертензия',
      uncontrolled: 'Неконтролируемая гипертензия'
    },
    
    pcos_label: 'Синдром поликистозных яичников (СПКЯ)',
    pcos_options: {
      none: 'Нет СПКЯ',
      diagnosed: 'Диагностирован СПКЯ',
      suspected: 'Подозрение на СПКЯ'
    },
    
    endometrial_polyps_label: 'Полипы эндометрия в анамнезе',
    endometrial_hyperplasia_label: 'Гиперплазия эндометрия в анамнезе',
    hyperplasia_options: {
      none: 'Нет гиперплазии',
      simple: 'Простая гиперплазия',
      complex: 'Сложная гиперплазия',
      atypical: 'Атипичная гиперплазия'
    },
    
    // Генетические факторы
    genetic_factors: 'Генетические факторы',
    hereditary_risk: 'Наследственный риск',
    
    family_history_endometrial_label: 'Семейный анамнез рака эндометрия',
    family_history_options: {
      none: 'Нет семейного анамнеза',
      second_degree: 'У родственников 2-й степени',
      first_degree: 'У родственников 1-й степени',
      multiple: 'У нескольких родственников'
    },
    
    family_history_colorectal_label: 'Семейный анамнез колоректального рака',
    family_history_ovarian_label: 'Семейный анамнез рака яичников',
    family_history_breast_label: 'Семейный анамнез рака молочной железы',
    
    lynch_syndrome_label: 'Синдром Линча',
    lynch_syndrome_options: {
      unknown: 'Неизвестно',
      negative: 'Тестирование отрицательное',
      positive: 'Подтвержден синдром Линча',
      suspected: 'Подозрение на синдром Линча'
    },
    
    // Образ жизни
    lifestyle_factors: 'Факторы образа жизни',
    
    smoking_status_label: 'Курение',
    smoking_options: {
      never: 'Никогда не курила',
      former: 'Курила в прошлом',
      current: 'Курит в настоящее время'
    },
    
    physical_activity_label: 'Физическая активность',
    activity_options: {
      sedentary: 'Малоподвижный образ жизни',
      low: 'Низкая активность',
      moderate: 'Умеренная активность',
      high: 'Высокая активность'
    },
    
    // Результаты оценки риска
    risk_assessment_results: 'Результаты оценки риска',
    overall_risk_assessment: 'Общая оценка риска',
    
    lifetime_risk_label: 'Пожизненный риск (%)',
    ten_year_risk_label: '10-летний риск (%)',
    relative_risk_label: 'Относительный риск',
    
    // Категории риска
    risk_categories: 'Категории риска',
    
    low_risk: 'Низкий риск',
    low_risk_description: 'Пожизненный риск <5%',
    low_risk_management: 'Стандартное наблюдение',
    
    moderate_risk: 'Умеренный риск',
    moderate_risk_description: 'Пожизненный риск 5-15%',
    moderate_risk_management: 'Усиленное наблюдение и профилактика',
    
    high_risk: 'Высокий риск',
    high_risk_description: 'Пожизненный риск 15-40%',
    high_risk_management: 'Интенсивное наблюдение и вмешательства',
    
    very_high_risk: 'Очень высокий риск',
    very_high_risk_description: 'Пожизненный риск >40%',
    very_high_risk_management: 'Максимальное наблюдение и профилактика',
    
    // Клинические рекомендации
    clinical_recommendations: 'Клинические рекомендации',
    
    low_risk_recommendations: 'Рекомендации при низком риске',
    low_risk_actions: [
      'Стандартное гинекологическое наблюдение',
      'Ежегодные профилактические осмотры',
      'Контроль веса и здоровый образ жизни',
      'Образование о симптомах рака эндометрия'
    ],
    
    moderate_risk_recommendations: 'Рекомендации при умеренном риске',
    moderate_risk_actions: [
      'Ежегодные гинекологические осмотры',
      'Трансвагинальное УЗИ по показаниям',
      'Контроль метаболических факторов',
      'Обсуждение профилактических мер',
      'Более частые консультации при симптомах'
    ],
    
    high_risk_recommendations: 'Рекомендации при высоком риске',
    high_risk_actions: [
      'Ежегодное трансвагинальное УЗИ',
      'Биопсия эндометрия по показаниям',
      'Генетическое консультирование',
      'Обсуждение профилактических вмешательств',
      'Мультидисциплинарное наблюдение'
    ],
    
    very_high_risk_recommendations: 'Рекомендации при очень высоком риске',
    very_high_risk_actions: [
      'Генетическое тестирование на синдром Линча',
      'Ежегодная биопсия эндометрия',
      'Обсуждение профилактической гистерэктомии',
      'Специализированное онкогинекологическое наблюдение',
      'Семейное генетическое консультирование'
    ],
    
    // Профилактические стратегии
    prevention_strategies: 'Стратегии профилактики',
    
    lifestyle_modifications: 'Изменения образа жизни',
    weight_management: 'Контроль веса',
    physical_activity_promotion: 'Увеличение физической активности',
    
    medical_prevention: 'Медицинская профилактика',
    hormone_optimization: 'Оптимизация гормонального статуса',
    metabolic_control: 'Контроль метаболических нарушений',
    
    surgical_prevention: 'Хирургическая профилактика',
    prophylactic_hysterectomy: 'Профилактическая гистерэктомия',
    endometrial_ablation: 'Абляция эндометрия',
    
    // Скрининг и диагностика
    screening_recommendations: 'Рекомендации по скринингу',
    
    standard_screening: 'Стандартный скрининг не рекомендован для общей популяции',
    high_risk_screening: 'Индивидуальный скрининг для женщин высокого риска',
    
    diagnostic_methods: 'Методы диагностики',
    transvaginal_ultrasound: 'Трансвагинальное УЗИ',
    endometrial_biopsy: 'Биопсия эндометрия',
    hysteroscopy: 'Гистероскопия',
    
    // Предупреждающие симптомы
    warning_symptoms: 'Предупреждающие симптомы',
    
    postmenopausal_bleeding: 'Постменопаузальное кровотечение',
    abnormal_uterine_bleeding: 'Аномальные маточные кровотечения',
    pelvic_pain: 'Тазовая боль',
    unexplained_weight_loss: 'Необъяснимая потеря веса',
    
    when_to_evaluate: 'Когда обращаться к врачу',
    immediate_evaluation: 'Немедленная оценка при любом постменопаузальном кровотечении',
    
    // Кнопки и действия
    calculate_risk: 'Рассчитать риск рака эндометрия',
    reset_assessment: 'Сбросить оценку',
    save_results: 'Сохранить результаты',
    print_report: 'Печать заключения',
    schedule_followup: 'Запланировать наблюдение',
    
    // Валидация
    age_required: 'Укажите возраст пациентки',
    bmi_required: 'Укажите ИМТ',
    menarche_age_required: 'Укажите возраст менархе',
    
    invalid_age: 'Некорректный возраст',
    invalid_bmi: 'Некорректный ИМТ',
    invalid_menarche_age: 'Некорректный возраст менархе',
    
    // Дополнительная информация
    evidence_base: 'База доказательств',
    clinical_guidelines: 'Клинические рекомендации',
    
    guideline_sources: 'Источники рекомендаций',
    acog_guidelines: 'Рекомендации ACOG',
    nccn_guidelines: 'Рекомендации NCCN',
    sgo_guidelines: 'Рекомендации SGO',
    
    risk_calculator_limitations: 'Ограничения калькулятора риска',
    individual_assessment: 'Индивидуальная оценка всегда требует клинического суждения',
    regular_updates: 'Регулярное обновление оценки риска по мере изменения факторов'
  },

  // Gestational Age Calculator - Comprehensive Implementation
  gestationalAge: {
    title: 'Калькулятор гестационного возраста',
    subtitle: 'Точный расчет срока беременности',
    description: 'Определение гестационного возраста с использованием различных методов датирования беременности для клинического применения',
    
    // Методы расчета
    calculation_methods: 'Методы расчета',
    method_selection: 'Выберите метод расчета',
    
    // Метод по последней менструации
    lmp_method: 'По последней менструации (ПМ)',
    lmp_method_description: 'Стандартный метод расчета на основе первого дня последней менструации',
    last_menstrual_period_label: 'Дата последней менструации',
    last_menstrual_period_help: 'Первый день последней менструации',
    cycle_length_label: 'Длина цикла (дни)',
    cycle_length_placeholder: 'Введите длину цикла (21-45 дней)',
    cycle_length_help: 'Обычная длина менструального цикла',
    cycle_length_error: 'Длина цикла должна быть 21-45 дней',
    
    // Метод по УЗИ
    ultrasound_method: 'По данным УЗИ',
    ultrasound_method_description: 'Расчет на основе биометрических измерений плода',
    ultrasound_date_label: 'Дата УЗИ',
    ultrasound_date_help: 'Дата проведения ультразвукового исследования',
    
    // Биометрические параметры
    biometric_parameters: 'Биометрические параметры',
    crl_label: 'КТР - копчико-теменной размер (мм)',
    crl_placeholder: 'Введите КТР (5-84 мм)',
    crl_help: 'Используется в первом триместре (6-14 недель)',
    crl_error: 'КТР должен быть 5-84 мм',
    
    bpd_label: 'БПР - бипариетальный размер (мм)',
    bpd_placeholder: 'Введите БПР (15-100 мм)',
    bpd_help: 'Расстояние между теменными костями',
    bpd_error: 'БПР должен быть 15-100 мм',
    
    hc_label: 'ОГ - окружность головы (мм)',
    hc_placeholder: 'Введите ОГ (70-360 мм)',
    hc_help: 'Окружность головы плода',
    hc_error: 'ОГ должна быть 70-360 мм',
    
    ac_label: 'ОЖ - окружность живота (мм)',
    ac_placeholder: 'Введите ОЖ (50-380 мм)',
    ac_help: 'Окружность живота плода',
    ac_error: 'ОЖ должна быть 50-380 мм',
    
    fl_label: 'ДБК - длина бедренной кости (мм)',
    fl_placeholder: 'Введите ДБК (10-80 мм)',
    fl_help: 'Длина диафиза бедренной кости',
    fl_error: 'ДБК должна быть 10-80 мм',
    
    // Метод по овуляции
    ovulation_method: 'По дате овуляции',
    ovulation_method_description: 'Точный расчет при известной дате овуляции',
    ovulation_date_label: 'Дата овуляции',
    ovulation_date_help: 'Точная или предполагаемая дата овуляции',
    
    // Метод по зачатию
    conception_method: 'По дате зачатия',
    conception_method_description: 'Расчет на основе известной даты зачатия',
    conception_date_label: 'Дата зачатия',
    conception_date_help: 'Дата оплодотворения (например, при ЭКО)',
    
    // Результаты расчета
    gestational_age_results: 'Результаты расчета',
    current_gestational_age: 'Текущий гестационный возраст',
    weeks_days_format: '{weeks} недель {days} дней',
    estimated_due_date: 'Предполагаемая дата родов (ПДР)',
    conceptional_age: 'Концептуальный возраст',
    
    // Триместры
    pregnancy_timeline: 'Календарь беременности',
    first_trimester: 'Первый триместр',
    first_trimester_range: '1-13 недель',
    second_trimester: 'Второй триместр',
    second_trimester_range: '14-27 недель',
    third_trimester: 'Третий триместр',
    third_trimester_range: '28-42 недели',
    
    current_trimester: 'Текущий триместр',
    weeks_remaining: 'Недель до родов',
    
    // Ключевые даты
    important_dates: 'Важные даты',
    viability_date: 'Дата жизнеспособности (24 недели)',
    term_date: 'Доношенная беременность (37 недель)',
    full_term_date: 'Полный срок (39 недель)',
    post_term_date: 'Переношенная беременность (42 недели)',
    
    // Точность методов
    method_accuracy: 'Точность метода',
    lmp_accuracy: 'ПМ: ±7-10 дней (при регулярном цикле)',
    ultrasound_first_accuracy: 'УЗИ I триместр: ±3-5 дней',
    ultrasound_second_accuracy: 'УЗИ II триместр: ±1-2 недели',
    ultrasound_third_accuracy: 'УЗИ III триместр: ±2-3 недели',
    ovulation_accuracy: 'Овуляция: ±1-2 дня',
    conception_accuracy: 'Зачатие: ±1 день',
    
    // Клинические рекомендации
    clinical_recommendations: 'Клинические рекомендации',
    dating_scan_recommended: 'Рекомендуется УЗИ для подтверждения срока',
    discrepancy_note: 'При расхождении >7 дней предпочтение УЗИ',
    multiple_methods: 'Используйте несколько методов для повышения точности',
    
    // Кнопки
    calculate_button: 'Рассчитать гестационный возраст',
    new_calculation: 'Новый расчет',
    modify_inputs: 'Изменить данные',
    
    // Валидация
    lmp_date_error: 'Укажите корректную дату последней менструации',
    ultrasound_date_error: 'Укажите корректную дату УЗИ',
    ovulation_date_error: 'Укажите корректную дату овуляции',
    conception_date_error: 'Укажите корректную дату зачатия',
    future_date_error: 'Дата не может быть в будущем',
    too_early_error: 'Слишком ранний срок для расчета',
    measurement_required_error: 'Требуется хотя бы один биометрический параметр'
  },

  // Pregnancy Weight Gain Calculator - Comprehensive Implementation
  pregnancyWeightGain: {
    title: 'Калькулятор прибавки веса при беременности',
    subtitle: 'Мониторинг здорового набора веса',
    description: 'Расчет рекомендуемой прибавки веса при беременности на основе индекса массы тела и рекомендаций IOM',
    
    // Исходные данные
    baseline_data: 'Исходные данные',
    pre_pregnancy_weight_label: 'Вес до беременности (кг)',
    pre_pregnancy_weight_placeholder: 'Введите вес до беременности',
    pre_pregnancy_weight_help: 'Вес женщины до наступления беременности',
    pre_pregnancy_weight_error: 'Вес должен быть 35-200 кг',
    
    height_label: 'Рост (см)',
    height_placeholder: 'Введите рост',
    height_help: 'Рост женщины в сантиметрах',
    height_error: 'Рост должен быть 140-220 см',
    
    pregnancy_type_label: 'Тип беременности',
    singleton_pregnancy: 'Одноплодная беременность',
    twin_pregnancy: 'Двойня',
    triplet_pregnancy: 'Тройня',
    
    // Текущие данные
    current_data: 'Текущие данные',
    current_gestational_age_label: 'Текущий гестационный возраст',
    current_gestational_age_weeks: 'Недели',
    current_gestational_age_days: 'Дни',
    current_gestational_age_error: 'Гестационный возраст должен быть 4-42 недели',
    
    current_weight_label: 'Текущий вес (кг)',
    current_weight_placeholder: 'Введите текущий вес',
    current_weight_help: 'Текущий вес во время беременности',
    current_weight_error: 'Текущий вес должен быть 35-250 кг',
    
    // ИМТ анализ
    bmi_analysis: 'Анализ ИМТ',
    pre_pregnancy_bmi: 'ИМТ до беременности',
    bmi_category: 'Категория ИМТ',
    
    underweight: 'Недостаточный вес',
    underweight_range: '<18.5 кг/м²',
    normal_weight: 'Нормальный вес',
    normal_weight_range: '18.5-24.9 кг/м²',
    overweight: 'Избыточный вес',
    overweight_range: '25.0-29.9 кг/м²',
    obese: 'Ожирение',
    obese_range: '≥30.0 кг/м²',
    
    // Рекомендации по прибавке веса
    weight_gain_recommendations: 'Рекомендации по прибавке веса',
    total_recommended_gain: 'Общая рекомендуемая прибавка',
    weekly_recommended_gain: 'Еженедельная прибавка во II-III триместре',
    
    // Прибавка веса по категориям ИМТ
    underweight_gain: '12.5-18 кг',
    normal_weight_gain: '11.5-16 кг',
    overweight_gain: '7-11.5 кг',
    obese_gain: '5-9 кг',
    
    underweight_weekly: '0.5 кг/неделя',
    normal_weight_weekly: '0.4 кг/неделя',
    overweight_weekly: '0.3 кг/неделя',
    obese_weekly: '0.2 кг/неделя',
    
    // Многоплодная беременность
    twin_gain_normal: '17-25 кг (нормальный ИМТ)',
    twin_gain_overweight: '14-23 кг (избыточный вес)',
    twin_gain_obese: '11-19 кг (ожирение)',
    
    // Текущий прогресс
    current_progress: 'Текущий прогресс',
    total_weight_gained: 'Общая прибавка веса',
    expected_weight_range: 'Ожидаемый диапазон на данном сроке',
    weight_gain_assessment: 'Оценка прибавки веса',
    
    appropriate_gain: 'Адекватная прибавка',
    insufficient_gain: 'Недостаточная прибавка',
    excessive_gain: 'Избыточная прибавка',
    
    // Триместровая разбивка
    trimester_breakdown: 'Разбивка по триместрам',
    first_trimester_gain: 'I триместр (1-13 недель)',
    first_trimester_expected: '1-2 кг общей прибавки',
    second_trimester_gain: 'II триместр (14-27 недель)',
    third_trimester_gain: 'III триместр (28-40 недель)',
    
    // Рекомендации по питанию
    nutritional_recommendations: 'Рекомендации по питанию',
    caloric_needs: 'Калорийность',
    first_trimester_calories: 'I триместр: +0 ккал/день',
    second_trimester_calories: 'II триместр: +340 ккал/день',
    third_trimester_calories: 'III триместр: +450 ккал/день',
    
    balanced_diet: 'Сбалансированная диета',
    protein_needs: 'Белки: +25г/день',
    folate_needs: 'Фолиевая кислота: 400-800 мкг/день',
    iron_needs: 'Железо: 27 мг/день',
    calcium_needs: 'Кальций: 1000 мг/день',
    
    // Предупреждения
    weight_gain_warnings: 'Важные моменты',
    rapid_weight_gain: 'Быстрая прибавка веса может указывать на преэклампсию',
    weight_loss_concern: 'Потеря веса требует медицинской оценки',
    individual_factors: 'Учитывайте индивидуальные особенности',
    medical_consultation: 'Регулярно консультируйтесь с врачом',
    
    // Кнопки
    calculate_button: 'Рассчитать прибавку веса',
    track_progress: 'Отследить прогресс',
    new_assessment: 'Новая оценка',
    
    // Валидация
    all_fields_required: 'Заполните все обязательные поля',
    valid_gestational_age: 'Укажите корректный гестационный возраст',
    weight_increase_only: 'Текущий вес должен быть больше исходного'
  },

  // BMI Calculator for Pregnancy - Comprehensive Implementation
  pregnancyBmi: {
    title: 'Калькулятор ИМТ для беременных',
    subtitle: 'Индекс массы тела при беременности',
    description: 'Расчет и интерпретация ИМТ для беременных женщин с рекомендациями по набору веса и питанию',
    
    // Основные параметры
    basic_measurements: 'Основные измерения',
    height_label: 'Рост (см)',
    height_placeholder: 'Введите рост в сантиметрах',
    height_help: 'Рост женщины (140-220 см)',
    height_error: 'Рост должен быть 140-220 см',
    
    pre_pregnancy_weight_label: 'Вес до беременности (кг)',
    pre_pregnancy_weight_placeholder: 'Введите вес до беременности',
    pre_pregnancy_weight_help: 'Вес до наступления беременности',
    pre_pregnancy_weight_error: 'Вес должен быть 35-200 кг',
    
    current_weight_label: 'Текущий вес (кг)',
    current_weight_placeholder: 'Введите текущий вес',
    current_weight_help: 'Текущий вес во время беременности (опционально)',
    current_weight_error: 'Текущий вес должен быть 35-250 кг',
    
    gestational_age_label: 'Гестационный возраст',
    gestational_age_weeks: 'Недели',
    gestational_age_days: 'Дни',
    gestational_age_help: 'Текущий срок беременности',
    gestational_age_error: 'Гестационный возраст должен быть 4-42 недели',
    
    // Результаты ИМТ
    bmi_results: 'Результаты ИМТ',
    pre_pregnancy_bmi: 'ИМТ до беременности',
    current_bmi: 'Текущий ИМТ',
    bmi_category: 'Категория ИМТ',
    bmi_interpretation: 'Интерпретация',
    
    // Категории ИМТ
    underweight: 'Недостаточный вес',
    underweight_range: '< 18.5 кг/м²',
    underweight_description: 'Низкий вес может негативно влиять на развитие плода',
    
    normal_weight: 'Нормальный вес',
    normal_weight_range: '18.5 - 24.9 кг/м²',
    normal_weight_description: 'Оптимальный вес для здоровой беременности',
    
    overweight: 'Избыточный вес',
    overweight_range: '25.0 - 29.9 кг/м²',
    overweight_description: 'Повышенный риск осложнений беременности',
    
    obese_class1: 'Ожирение I степени',
    obese_class1_range: '30.0 - 34.9 кг/м²',
    obese_class1_description: 'Умеренное ожирение, требует медицинского наблюдения',
    
    obese_class2: 'Ожирение II степени',
    obese_class2_range: '35.0 - 39.9 кг/м²',
    obese_class2_description: 'Выраженное ожирение, высокий риск осложнений',
    
    obese_class3: 'Ожирение III степени',
    obese_class3_range: '≥ 40.0 кг/м²',
    obese_class3_description: 'Морбидное ожирение, очень высокий риск',
    
    // Рекомендации по прибавке веса
    weight_gain_recommendations: 'Рекомендации по прибавке веса',
    total_weight_gain_goal: 'Целевая общая прибавка веса',
    weekly_weight_gain_goal: 'Целевая еженедельная прибавка (II-III триместр)',
    
    underweight_total_gain: '12.5 - 18.0 кг',
    normal_weight_total_gain: '11.5 - 16.0 кг',
    overweight_total_gain: '7.0 - 11.5 кг',
    obese_total_gain: '5.0 - 9.0 кг',
    
    underweight_weekly_gain: '0.44 - 0.58 кг/неделя',
    normal_weight_weekly_gain: '0.35 - 0.50 кг/неделя',
    overweight_weekly_gain: '0.23 - 0.33 кг/неделя',
    obese_weekly_gain: '0.17 - 0.27 кг/неделя',
    
    // Текущий прогресс прибавки веса
    current_weight_gain_progress: 'Прогресс прибавки веса',
    total_weight_gained: 'Общая прибавка веса',
    expected_weight_gain_range: 'Ожидаемый диапазон прибавки',
    weight_gain_assessment: 'Оценка прибавки',
    
    on_track: 'Соответствует норме',
    below_target: 'Ниже целевого диапазона',
    above_target: 'Выше целевого диапазона',
    insufficient_gain: 'Недостаточная прибавка',
    excessive_gain: 'Избыточная прибавка',
    
    // Риски и осложнения
    pregnancy_risks: 'Риски при беременности',
    underweight_risks: 'Риски при недостаточном весе',
    underweight_risk_list: [
      'Преждевременные роды',
      'Низкий вес при рождении',
      'Задержка внутриутробного развития',
      'Дефицит питательных веществ'
    ],
    
    overweight_risks: 'Риски при избыточном весе/ожирении',
    overweight_risk_list: [
      'Гестационный диабет',
      'Преэклампсия',
      'Тромбоэмболические осложнения',
      'Макросомия плода',
      'Кесарево сечение',
      'Послеродовые осложнения'
    ],
    
    // Клинические рекомендации
    clinical_recommendations: 'Клинические рекомендации',
    nutritional_counseling: 'Консультация по питанию',
    regular_monitoring: 'Регулярное наблюдение',
    physical_activity: 'Физическая активность',
    medical_follow_up: 'Медицинское наблюдение',
    
    // Рекомендации по питанию
    nutrition_recommendations: 'Рекомендации по питанию',
    caloric_adjustment: 'Корректировка калорийности',
    
    underweight_nutrition: 'Увеличение калорийности на 300-500 ккал/день',
    normal_weight_nutrition: 'Сбалансированная диета без избытка калорий',
    overweight_nutrition: 'Контроль калорийности, акцент на качество питания',
    obese_nutrition: 'Умеренное ограничение калорий под медицинским контролем',
    
    // Физическая активность
    exercise_recommendations: 'Рекомендации по физической активности',
    exercise_safety: 'Безопасность упражнений',
    
    underweight_exercise: 'Умеренная активность, акцент на набор веса',
    normal_weight_exercise: '150 минут умеренной активности в неделю',
    overweight_exercise: 'Регулярная физическая активность для контроля веса',
    obese_exercise: 'Контролируемая физическая активность под наблюдением',
    
    // Медицинское наблюдение
    medical_monitoring: 'Медицинское наблюдение',
    routine_checkups: 'Плановые осмотры',
    specialized_care: 'Специализированная помощь',
    
    underweight_monitoring: 'Контроль набора веса и развития плода',
    normal_weight_monitoring: 'Стандартное акушерское наблюдение',
    overweight_monitoring: 'Усиленное наблюдение, скрининг осложнений',
    obese_monitoring: 'Мультидисциплинарное наблюдение, эндокринолог',
    
    // Дополнительные параметры
    additional_assessments: 'Дополнительные оценки',
    waist_circumference: 'Окружность талии',
    waist_to_hip_ratio: 'Соотношение талия/бедра',
    body_fat_percentage: 'Процент жировой ткани',
    
    // Цели и мониторинг
    pregnancy_goals: 'Цели беременности',
    healthy_weight_gain: 'Здоровая прибавка веса',
    optimal_fetal_development: 'Оптимальное развитие плода',
    complication_prevention: 'Профилактика осложнений',
    postpartum_weight_management: 'Управление весом после родов',
    
    // Кнопки
    calculate_bmi: 'Рассчитать ИМТ',
    reset_calculator: 'Сбросить',
    update_progress: 'Обновить прогресс',
    print_results: 'Печать результатов',
    
    // Валидация
    height_required: 'Укажите рост',
    weight_required: 'Укажите вес до беременности',
    valid_height_range: 'Рост должен быть в диапазоне 140-220 см',
    valid_weight_range: 'Вес должен быть в допустимом диапазоне',
    current_weight_validation: 'Текущий вес не может быть меньше веса до беременности',
    gestational_age_validation: 'Укажите корректный гестационный возраст'
  },

  // EDD Calculator (Due Date) - Comprehensive Implementation
  edd: {
    title: 'Калькулятор предполагаемой даты родов (ПДР)',
    subtitle: 'Расчет даты родов по различным методам',
    description: 'Точный расчет предполагаемой даты родов с использованием различных методов датирования беременности согласно акушерским стандартам',
    
    // Методы расчета
    calculation_methods: 'Методы расчета ПДР',
    method_selection: 'Выберите метод расчета',
    method_help: 'Различные методы имеют разную точность в зависимости от срока беременности',
    
    // Метод по последней менструации (LMP)
    lmp_method: 'По последней менструации (ПМ)',
    lmp_method_description: 'Стандартный метод расчета по правилу Негеле',
    lmp_method_accuracy: 'Точность: ±7-10 дней при регулярном цикле',
    
    lmp_date_label: 'Дата последней менструации',
    lmp_date_placeholder: 'Выберите дату первого дня ПМ',
    lmp_date_help: 'Первый день последней нормальной менструации',
    lmp_date_error: 'Укажите корректную дату последней менструации',
    
    cycle_length_label: 'Длина менструального цикла (дни)',
    cycle_length_placeholder: 'Введите обычную длину цикла',
    cycle_length_help: 'Обычная длина цикла для корректировки расчета',
    cycle_length_error: 'Длина цикла должна быть 21-45 дней',
    cycle_length_adjustment: 'Корректировка на нестандартный цикл',
    
    // Метод по УЗИ (первого триместра)
    ultrasound_first_method: 'По УЗИ первого триместра',
    ultrasound_first_description: 'Наиболее точный метод при УЗИ до 14 недель',
    ultrasound_first_accuracy: 'Точность: ±3-5 дней',
    
    ultrasound_date_label: 'Дата УЗИ',
    ultrasound_date_placeholder: 'Дата проведения УЗИ',
    ultrasound_date_help: 'Дата ультразвукового исследования',
    ultrasound_date_error: 'Укажите корректную дату УЗИ',
    
    gestational_age_at_scan_label: 'Гестационный возраст по УЗИ',
    gestational_age_weeks: 'Недели',
    gestational_age_days: 'Дни',
    gestational_age_help: 'Срок беременности, определенный по УЗИ',
    gestational_age_error: 'Гестационный возраст должен быть 5-14 недель',
    
    // CRL метод
    crl_method: 'По копчико-теменному размеру (КТР)',
    crl_method_description: 'Точный расчет по размеру плода',
    crl_method_accuracy: 'Точность: ±3-5 дней (до 14 недель)',
    
    crl_measurement_label: 'КТР (мм)',
    crl_measurement_placeholder: 'Введите КТР в миллиметрах',
    crl_measurement_help: 'Копчико-теменной размер плода по УЗИ',
    crl_measurement_error: 'КТР должен быть 5-84 мм',
    
    // Метод по овуляции
    ovulation_method: 'По дате овуляции',
    ovulation_method_description: 'Точный расчет при известной овуляции',
    ovulation_method_accuracy: 'Точность: ±1-2 дня',
    
    ovulation_date_label: 'Дата овуляции',
    ovulation_date_placeholder: 'Дата овуляции или ЛГ пика',
    ovulation_date_help: 'Дата овуляции, определенная по тестам или УЗИ',
    ovulation_date_error: 'Укажите корректную дату овуляции',
    
    // Метод по ЭКО (концепции)
    conception_method: 'По дате переноса эмбрионов (ЭКО)',
    conception_method_description: 'Точный расчет для ЭКО беременности',
    conception_method_accuracy: 'Точность: ±1 день',
    
    transfer_date_label: 'Дата переноса эмбрионов',
    transfer_date_placeholder: 'Дата подсадки эмбрионов',
    transfer_date_help: 'Дата переноса эмбрионов при ЭКО',
    transfer_date_error: 'Укажите корректную дату переноса',
    
    embryo_age_label: 'Возраст эмбрионов на момент переноса',
    embryo_age_3_days: '3 дня (дробление)',
    embryo_age_5_days: '5 дней (бластоцисты)',
    embryo_age_help: 'Стадия развития эмбрионов при переносе',
    
    // Результаты расчета
    calculation_results: 'Результаты расчета',
    estimated_due_date: 'Предполагаемая дата родов (ПДР)',
    current_gestational_age: 'Текущий гестационный возраст',
    weeks_days_format: '{weeks} недель {days} дней',
    conception_date_estimated: 'Предполагаемая дата зачатия',
    
    // Сравнение методов
    method_comparison: 'Сравнение методов',
    lmp_calculated_edd: 'ПДР по ПМ',
    ultrasound_calculated_edd: 'ПДР по УЗИ',
    discrepancy_analysis: 'Анализ расхождений',
    discrepancy_days: 'Расхождение: {days} дней',
    
    // Рекомендации по точности
    accuracy_recommendations: 'Рекомендации по точности',
    most_accurate_method: 'Наиболее точный метод',
    first_trimester_us: 'УЗИ первого триместра (до 14 недель)',
    early_dating_scan: 'Раннее УЗИ для датирования (7-11 недель)',
    
    discrepancy_management: 'При расхождении методов',
    discrepancy_rule_7_days: '>7 дней: предпочтение УЗИ первого триместра',
    discrepancy_rule_14_days: '>14 дней: рекомендуется повторное УЗИ',
    
    // Клинические рекомендации
    clinical_recommendations: 'Клинические рекомендации',
    dating_scan_timing: 'Оптимальные сроки для датирующего УЗИ',
    dating_scan_early: '7-11 недель: наивысшая точность КТР',
    dating_scan_late: '11-14 недель: хорошая точность с биометрией',
    
    irregular_cycles: 'При нерегулярных циклах',
    irregular_cycles_recommendation: 'Обязательно УЗИ для точного датирования',
    
    multiple_pregnancy: 'Многоплодная беременность',
    multiple_pregnancy_note: 'Возможны различия в развитии плодов',
    
    // Важные даты беременности
    pregnancy_milestones: 'Важные сроки беременности',
    viability_threshold: 'Порог жизнеспособности (22-24 недели)',
    preterm_threshold: 'Преждевременные роды (22-37 недель)',
    term_pregnancy: 'Доношенная беременность (37-42 недели)',
    full_term: 'Полный срок (39-40 недель)',
    post_term: 'Переношенная беременность (>42 недель)',
    
    weeks_until_term: 'Недель до доношенного срока',
    weeks_until_due: 'Недель до ПДР',
    days_until_due: 'Дней до ПДР',
    
    // Дополнительная информация
    additional_info: 'Дополнительная информация',
    lunar_months: 'Лунные месяцы',
    lunar_months_count: '{months} лунных месяцев',
    
    calculation_notes: 'Примечания к расчету',
    rule_naegele: 'Правило Негеле: ПМ + 280 дней',
    conception_calculation: 'Зачатие: овуляция + 266 дней',
    ivf_calculation: 'ЭКО: перенос + (266 - возраст эмбриона) дней',
    
    // Кнопки действий
    calculate_edd: 'Рассчитать ПДР',
    recalculate: 'Пересчитать',
    compare_methods: 'Сравнить методы',
    new_calculation: 'Новый расчет',
    print_results: 'Печать результатов',
    
    // Валидация
    method_required: 'Выберите метод расчета',
    date_required: 'Укажите дату',
    future_date_error: 'Дата не может быть в будущем',
    invalid_date_range: 'Дата вне допустимого диапазона',
    measurement_required: 'Укажите измерение',
    invalid_measurement: 'Некорректное значение измерения'
  },

  // Apgar Score Calculator - Comprehensive Implementation
  apgarScore: {
    title: 'Шкала Апгар',
    subtitle: 'Оценка состояния новорожденного',
    description: 'Стандартная оценка состояния новорожденного на 1-й и 5-й минутах жизни с использованием шкалы Апгар',
    
    // Компоненты оценки
    assessment_components: 'Компоненты оценки Апгар',
    five_parameters: 'Пять основных параметров',
    scoring_system: 'Система оценки: 0-2 балла за каждый параметр',
    
    // Время оценки
    assessment_timing: 'Время оценки',
    one_minute_label: 'Оценка на 1-й минуте',
    five_minute_label: 'Оценка на 5-й минуте',
    ten_minute_label: 'Оценка на 10-й минуте (при необходимости)',
    timing_help: 'Стандартные сроки оценки по шкале Апгар',
    
    // 1. Частота сердечных сокращений (Heart Rate)
    heart_rate: 'Частота сердечных сокращений',
    heart_rate_label: 'ЧСС (уд/мин)',
    heart_rate_help: 'Частота сердечных сокращений новорожденного',
    
    heart_rate_0: 'Отсутствует (0 баллов)',
    heart_rate_1: 'Менее 100 уд/мин (1 балл)',
    heart_rate_2: '100+ уд/мин (2 балла)',
    
    heart_rate_score_0: '0 - Сердцебиение отсутствует',
    heart_rate_score_1: '1 - ЧСС менее 100 уд/мин',
    heart_rate_score_2: '2 - ЧСС 100+ уд/мин',
    
    // 2. Дыхательные усилия (Respiratory Effort)
    respiratory_effort: 'Дыхательные усилия',
    respiratory_effort_label: 'Дыхание',
    respiratory_effort_help: 'Качество и регулярность дыхания',
    
    respiratory_0: 'Отсутствует (0 баллов)',
    respiratory_1: 'Слабое, нерегулярное (1 балл)',
    respiratory_2: 'Хорошее, крик (2 балла)',
    
    respiratory_score_0: '0 - Дыхание отсутствует',
    respiratory_score_1: '1 - Слабое, нерегулярное дыхание',
    respiratory_score_2: '2 - Хорошее дыхание, громкий крик',
    
    // 3. Мышечный тонус (Muscle Tone)
    muscle_tone: 'Мышечный тонус',
    muscle_tone_label: 'Тонус мышц',
    muscle_tone_help: 'Активность и тонус мускулатуры',
    
    muscle_tone_0: 'Вялый (0 баллов)',
    muscle_tone_1: 'Слабое сгибание конечностей (1 балл)',
    muscle_tone_2: 'Активные движения (2 балла)',
    
    muscle_tone_score_0: '0 - Мышцы вялые',
    muscle_tone_score_1: '1 - Слабое сгибание конечностей',
    muscle_tone_score_2: '2 - Активные движения',
    
    // 4. Рефлекторная возбудимость (Reflex Irritability)
    reflex_irritability: 'Рефлекторная возбудимость',
    reflex_irritability_label: 'Рефлексы',
    reflex_irritability_help: 'Реакция на раздражение (катетер в носу)',
    
    reflex_0: 'Отсутствует (0 баллов)',
    reflex_1: 'Гримаса (1 балл)',
    reflex_2: 'Кашель, чихание, крик (2 балла)',
    
    reflex_score_0: '0 - Рефлексы отсутствуют',
    reflex_score_1: '1 - Слабая реакция (гримаса)',
    reflex_score_2: '2 - Хорошая реакция (кашель, чихание)',
    
    // 5. Окраска кожи (Color)
    skin_color: 'Окраска кожи',
    skin_color_label: 'Цвет кожи',
    skin_color_help: 'Цвет кожи и слизистых оболочек',
    
    color_0: 'Синюшный, бледный (0 баллов)',
    color_1: 'Розовое тело, синие конечности (1 балл)',
    color_2: 'Полностью розовый (2 баллы)',
    
    color_score_0: '0 - Генерализованный цианоз или бледность',
    color_score_1: '1 - Акроцианоз (синие руки/ноги)',
    color_score_2: '2 - Полностью розовый',
    
    // Результаты оценки
    apgar_score_results: 'Результаты оценки Апгар',
    total_score: 'Общий балл',
    score_breakdown: 'Детализация баллов',
    max_score: 'Максимальный балл: 10',
    
    heart_rate_points: 'ЧСС: {points} баллов',
    respiratory_points: 'Дыхание: {points} баллов',
    muscle_tone_points: 'Мышечный тонус: {points} баллов',
    reflex_points: 'Рефлексы: {points} баллов',
    color_points: 'Цвет кожи: {points} баллов',
    
    // Интерпретация оценки
    score_interpretation: 'Интерпретация оценки',
    
    score_0_3: '0-3 балла: Тяжелая асфиксия',
    score_4_6: '4-6 баллов: Умеренная асфиксия',
    score_7_10: '7-10 баллов: Нормальное состояние',
    
    severe_asphyxia: 'Тяжелая асфиксия (0-3 балла)',
    moderate_asphyxia: 'Умеренная асфиксия (4-6 баллов)',
    normal_condition: 'Нормальное состояние (7-10 баллов)',
    
    // Клинические рекомендации
    clinical_management: 'Клинические рекомендации',
    
    severe_asphyxia_management: 'При тяжелой асфиксии (0-3 балла)',
    severe_recommendations: [
      'Немедленная интенсивная реанимация',
      'Искусственная вентиляция легких',
      'Сердечно-легочная реанимация',
      'Медикаментозная поддержка',
      'Госпитализация в ОРИТН'
    ],
    
    moderate_asphyxia_management: 'При умеренной асфиксии (4-6 баллов)',
    moderate_recommendations: [
      'Активная тактильная стимуляция',
      'Аспирация дыхательных путей',
      'Кислородотерапия',
      'Мониторинг жизненных функций',
      'Готовность к реанимации'
    ],
    
    normal_condition_management: 'При нормальном состоянии (7-10 баллов)',
    normal_recommendations: [
      'Стандартный послеродовый уход',
      'Контакт "кожа к коже"',
      'Раннее прикладывание к груди',
      'Профилактика гипотермии',
      'Обычное наблюдение'
    ],
    
    // Динамика оценки
    score_dynamics: 'Динамика оценки',
    one_minute_assessment: 'Оценка на 1-й минуте',
    five_minute_assessment: 'Оценка на 5-й минуте',
    ten_minute_assessment: 'Оценка на 10-й минуте',
    
    score_improvement: 'Улучшение показателей',
    score_deterioration: 'Ухудшение показателей',
    stable_condition: 'Стабильное состояние',
    
    dynamic_interpretation: 'Интерпретация динамики',
    positive_dynamics: 'Положительная динамика - эффективность реанимации',
    negative_dynamics: 'Отрицательная динамика - требует интенсификации терапии',
    stable_dynamics: 'Стабильные показатели - продолжить текущую тактику',
    
    // Прогностическое значение
    prognostic_value: 'Прогностическое значение',
    
    one_minute_prognosis: 'Оценка на 1-й минуте',
    one_minute_significance: 'Отражает потребность в немедленной реанимации',
    
    five_minute_prognosis: 'Оценка на 5-й минуте',
    five_minute_significance: 'Лучший предиктор неонатальной выживаемости',
    
    ten_minute_prognosis: 'Оценка на 10-й минуте',
    ten_minute_significance: 'Коррелирует с долгосрочными неврологическими исходами',
    
    // Ограничения метода
    limitations: 'Ограничения метода',
    preterm_limitations: 'Менее точна у недоношенных детей',
    medication_effect: 'Может быть изменена материнскими препаратами',
    subjective_assessment: 'Субъективность некоторых компонентов',
    
    // Дополнительные факторы
    additional_factors: 'Дополнительные факторы',
    gestational_age_label: 'Гестационный возраст',
    birth_weight_label: 'Масса при рождении',
    delivery_complications: 'Осложнения родов',
    maternal_medications: 'Материнские препараты',
    
    // Кнопки
    calculate_apgar: 'Рассчитать Апгар',
    reset_assessment: 'Сброс оценки',
    save_results: 'Сохранить результаты',
    print_assessment: 'Печать оценки',
    
    // Валидация
    all_parameters_required: 'Оцените все пять параметров',
    invalid_score: 'Некорректная оценка параметра',
    assessment_time_required: 'Укажите время оценки'
  },

  // Fetal Weight Estimation Calculator - Comprehensive Implementation
  fetalWeightEstimation: {
    title: 'Калькулятор предполагаемой массы плода',
    subtitle: 'Ультразвуковая биометрия плода',
    description: 'Расчет предполагаемой массы плода по ультразвуковым биометрическим параметрам с использованием валидированных формул',
    
    // Биометрические параметры
    biometric_parameters: 'Биометрические параметры',
    ultrasound_measurements: 'Ультразвуковые измерения',
    measurement_quality: 'Качество измерений важно для точности расчета',
    
    // Основные измерения
    primary_measurements: 'Основные измерения',
    
    // Бипариетальный размер головки (BPD)
    bpd_measurement: 'Бипариетальный размер (BPD)',
    bpd_label: 'BPD (мм)',
    bpd_placeholder: 'Введите BPD в миллиметрах',
    bpd_help: 'Бипариетальный размер головки плода',
    bpd_error: 'BPD должен быть 30-120 мм',
    bpd_range: '30-120 мм',
    bpd_description: 'Максимальный поперечный размер головки плода',
    
    // Лобно-затылочный размер (OFD)
    ofd_measurement: 'Лобно-затылочный размер (OFD)',
    ofd_label: 'OFD (мм)',
    ofd_placeholder: 'Введите OFD в миллиметрах',
    ofd_help: 'Лобно-затылочный размер головки плода',
    ofd_error: 'OFD должен быть 40-160 мм',
    ofd_range: '40-160 мм',
    ofd_description: 'Максимальный передне-задний размер головки',
    
    // Окружность головки (HC)
    hc_measurement: 'Окружность головки (HC)',
    hc_label: 'HC (мм)',
    hc_placeholder: 'Введите HC в миллиметрах',
    hc_help: 'Окружность головки плода',
    hc_error: 'HC должна быть 100-400 мм',
    hc_range: '100-400 мм',
    hc_description: 'Периметр головки по наружному контуру',
    
    // Окружность живота (AC)
    ac_measurement: 'Окружность живота (AC)',
    ac_label: 'AC (мм)',
    ac_placeholder: 'Введите AC в миллиметрах',
    ac_help: 'Окружность живота плода',
    ac_error: 'AC должна быть 80-400 мм',
    ac_range: '80-400 мм',
    ac_description: 'Периметр живота на уровне желудка',
    
    // Длина бедренной кости (FL)
    fl_measurement: 'Длина бедренной кости (FL)',
    fl_label: 'FL (мм)',
    fl_placeholder: 'Введите FL в миллиметрах',
    fl_help: 'Длина диафиза бедренной кости',
    fl_error: 'FL должна быть 15-90 мм',
    fl_range: '15-90 мм',
    fl_description: 'Длина окостеневшей части бедренной кости',
    
    // Длина плечевой кости (HL)
    hl_measurement: 'Длина плечевой кости (HL)',
    hl_label: 'HL (мм)',
    hl_placeholder: 'Введите HL в миллиметрах',
    hl_help: 'Длина диафиза плечевой кости',
    hl_error: 'HL должна быть 15-80 мм',
    hl_range: '15-80 мм',
    hl_description: 'Длина окостеневшей части плечевой кости',
    
    // Дополнительные параметры
    additional_parameters: 'Дополнительные параметры',
    
    // Гестационный возраст
    gestational_age_label: 'Гестационный возраст',
    gestational_age_weeks: 'Недели',
    gestational_age_days: 'Дни',
    gestational_age_help: 'Точный гестационный возраст для корректировки расчета',
    gestational_age_error: 'Гестационный возраст должен быть 16-42 недели',
    weeks_label: 'недель',
    days_label: 'дней',
    
    // Формулы расчета
    calculation_formulas: 'Формулы расчета',
    formula_selection: 'Выбор формулы',
    formula_help: 'Различные формулы имеют разную точность в зависимости от срока беременности',
    
    // Доступные формулы
    hadlock_formula: 'Формула Хэдлока (Hadlock)',
    hadlock_description: 'Наиболее точная для 20-40 недель',
    hadlock_parameters: 'Использует BPD, HC, AC, FL',
    
    shepard_formula: 'Формула Шепарда (Shepard)', 
    shepard_description: 'Простая формула для ранних сроков',
    shepard_parameters: 'Использует BPD, AC',
    
    warsof_formula: 'Формула Варсофа (Warsof)',
    warsof_description: 'Альтернативная формула',
    warsof_parameters: 'Использует BPD, HC, AC, FL',
    
    // Результаты расчета
    weight_estimation_results: 'Результаты расчета массы',
    estimated_fetal_weight: 'Предполагаемая масса плода',
    weight_in_grams: 'Масса (граммы)',
    weight_in_kg: 'Масса (кг)',
    percentile_rank: 'Процентиль',
    weight_category: 'Категория массы',
    
    // Процентильные значения
    percentile_analysis: 'Анализ процентилей',
    percentile_interpretation: 'Интерпретация процентилей',
    growth_percentile: '{percentile}-й процентиль',
    
    // Категории массы плода
    weight_categories: 'Категории массы плода',
    
    small_for_gestational_age: 'Малый для гестационного возраста (SGA)',
    sga_definition: 'Менее 10-го процентиля',
    sga_description: 'Масса плода ниже нормы для данного срока',
    
    appropriate_for_gestational_age: 'Соответствует гестационному возрасту (AGA)',
    aga_definition: '10-90-й процентиль',
    aga_description: 'Нормальная масса плода для данного срока',
    
    large_for_gestational_age: 'Крупный для гестационного возраста (LGA)',
    lga_definition: 'Более 90-го процентиля',
    lga_description: 'Масса плода выше нормы для данного срока',
    
    // Дополнительные категории
    fetal_macrosomia: 'Макросомия плода',
    macrosomia_definition: 'Более 4000 г (или 4500 г)',
    macrosomia_description: 'Чрезмерно большая масса плода',
    
    // Точность оценки
    estimation_accuracy: 'Точность оценки',
    accuracy_information: 'Информация о точности',
    margin_of_error: 'Погрешность',
    confidence_interval: 'Доверительный интервал',
    
    accuracy_range: '±10-15% в 68% случаев',
    accuracy_factors: 'Факторы, влияющие на точность',
    measurement_quality_factor: 'Качество ультразвуковых измерений',
    gestational_age_factor: 'Точность определения срока беременности',
    fetal_position_factor: 'Положение плода',
    amniotic_fluid_factor: 'Количество околоплодных вод',
    
    // Клинические рекомендации
    clinical_recommendations: 'Клинические рекомендации',
    
    sga_recommendations: 'Рекомендации при SGA',
    sga_monitoring: [
      'Увеличенное наблюдение за ростом плода',
      'Допплерометрия сосудов',
      'Исключение хромосомных аномалий',
      'Оценка материнских факторов',
      'Планирование родоразрешения'
    ],
    
    aga_recommendations: 'Рекомендации при AGA',
    aga_monitoring: [
      'Стандартное наблюдение беременности',
      'Контроль роста плода по плану',
      'Обычная подготовка к родам'
    ],
    
    lga_recommendations: 'Рекомендации при LGA/макросомии',
    lga_monitoring: [
      'Скрининг гестационного диабета',
      'Контроль гликемии при диабете',
      'Оценка размеров таза матери',
      'Планирование способа родоразрешения',
      'Подготовка к дистоции плечиков'
    ],
    
    // Факторы риска
    risk_factors: 'Факторы риска',
    
    sga_risk_factors: 'Факторы риска SGA',
    sga_factors: [
      'Плацентарная недостаточность',
      'Гипертензивные расстройства',
      'Курение матери',
      'Хромосомные аномалии',
      'Внутриутробные инфекции'
    ],
    
    lga_risk_factors: 'Факторы риска LGA',
    lga_factors: [
      'Сахарный диабет матери',
      'Ожирение матери',
      'Предыдущие крупные плоды',
      'Переношенная беременность',
      'Мужской пол плода'
    ],
    
    // Мониторинг и контроль
    monitoring_recommendations: 'Рекомендации по мониторингу',
    
    repeat_measurements: 'Повторные измерения',
    measurement_frequency: 'Частота измерений',
    growth_velocity: 'Скорость роста',
    
    normal_growth_monitoring: 'При нормальном росте - каждые 3-4 недели',
    abnormal_growth_monitoring: 'При нарушениях роста - каждые 2 недели',
    high_risk_monitoring: 'При высоком риске - еженедельно',
    
    // Ограничения метода
    method_limitations: 'Ограничения метода',
    
    ultrasound_limitations: 'Ограничения УЗИ',
    operator_dependence: 'Зависимость от опыта оператора',
    equipment_quality: 'Качество ультразвукового оборудования',
    measurement_variability: 'Вариабельность измерений',
    
    formula_limitations: 'Ограничения формул',
    population_specificity: 'Специфичность для определенных популяций',
    gestational_age_range: 'Ограничения по сроку беременности',
    extreme_weights: 'Менее точны при экстремальных весах',
    
    // Кнопки и действия
    calculate_weight: 'Рассчитать массу плода',
    recalculate: 'Пересчитать',
    clear_measurements: 'Очистить измерения',
    save_results: 'Сохранить результаты',
    print_report: 'Печать заключения',
    
    // Валидация
    measurement_required: 'Необходимо ввести измерение',
    invalid_measurement: 'Некорректное значение измерения',
    gestational_age_required: 'Укажите гестационный возраст',
    formula_selection_required: 'Выберите формулу расчета',
    
    // Единицы измерения
    millimeters: 'мм',
    grams: 'г',
    kilograms: 'кг',
    weeks: 'нед',
    days: 'дн',
    percentile: 'процентиль',
    
    // Дополнительная информация
    additional_info: 'Дополнительная информация',
    clinical_context: 'Клинический контекст',
    evidence_base: 'База доказательств',
    references: 'Литература',
    
    ultrasound_technique: 'Техника УЗИ',
    measurement_technique: 'Техника измерений',
    quality_control: 'Контроль качества',
    standardization: 'Стандартизация измерений'
  },

  // Cervical Length Calculator - Comprehensive Implementation
  cervicalLength: {
    title: 'Калькулятор длины шейки матки',
    subtitle: 'Оценка риска преждевременных родов',
    description: 'Оценка длины шейки матки по данным трансвагинального УЗИ для прогнозирования риска преждевременных родов',
    
    // Основные параметры
    primary_parameters: 'Основные параметры измерения',
    ultrasound_assessment: 'Ультразвуковая оценка',
    measurement_technique: 'Техника измерения имеет критическое значение для точности',
    
    // Измерение длины шейки матки
    cervical_length_measurement: 'Измерение длины шейки матки',
    cervical_length_label: 'Длина шейки матки (мм)',
    cervical_length_placeholder: 'Введите длину в миллиметрах',
    cervical_length_help: 'Длина шейки матки по данным трансвагинального УЗИ',
    cervical_length_error: 'Длина шейки матки должна быть 5-70 мм',
    cervical_length_range: '5-70 мм',
    cervical_length_unit: 'мм',
    
    // Гестационный возраст
    gestational_age_assessment: 'Оценка гестационного возраста',
    gestational_age_label: 'Гестационный возраст',
    gestational_age_weeks: 'Недели',
    gestational_age_days: 'Дни',
    gestational_age_help: 'Точный гестационный возраст на момент измерения',
    gestational_age_error: 'Гестационный возраст должен быть 16-34 недели',
    gestational_age_range: '16-34 недели',
    
    weeks_label: 'недель',
    days_label: 'дней',
    
    // Техника измерения
    measurement_technique_details: 'Техника измерения',
    tvs_approach: 'Трансвагинальный доступ',
    tvs_description: 'Золотой стандарт для измерения длины шейки матки',
    
    measurement_conditions: 'Условия измерения',
    empty_bladder: 'Опорожненный мочевой пузырь',
    patient_position: 'Положение пациентки - литотомическое',
    probe_placement: 'Размещение датчика',
    minimal_pressure: 'Минимальное давление на шейку матки',
    
    // Качество измерения
    measurement_quality: 'Качество измерения',
    image_quality: 'Качество изображения',
    measurement_criteria: 'Критерии измерения',
    
    clear_visualization: 'Четкая визуализация внутреннего и внешнего зева',
    straight_measurement: 'Прямое измерение по центральной линии',
    repeated_measurements: 'Повторные измерения (минимум 3)',
    shortest_measurement: 'Выбор наименьшего значения',
    
    // Дополнительные параметры
    additional_assessments: 'Дополнительные оценки',
    
    // Анамнез
    obstetric_history: 'Акушерский анамнез',
    previous_preterm_birth: 'Предыдущие преждевременные роды',
    previous_preterm_options: {
      none: 'Нет в анамнезе',
      one: 'Одни преждевременные роды',
      multiple: 'Множественные преждевременные роды'
    },
    
    previous_cervical_surgery: 'Операции на шейке матки в анамнезе',
    cervical_surgery_options: {
      none: 'Нет операций',
      conization: 'Конизация шейки матки',
      leep: 'LEEP-процедура',
      other: 'Другие вмешательства'
    },
    
    // Симптомы
    current_symptoms: 'Текущие симптомы',
    symptoms_assessment: 'Оценка симптомов',
    
    uterine_contractions: 'Сокращения матки',
    contractions_options: {
      none: 'Отсутствуют',
      irregular: 'Нерегулярные',
      regular: 'Регулярные'
    },
    
    pelvic_pressure: 'Тазовое давление',
    pressure_options: {
        none: 'Отсутствует',
      mild: 'Легкое',
      moderate: 'Умеренное',
      severe: 'Выраженное'
    },
    
    vaginal_discharge: 'Изменения выделений',
    discharge_options: {
      normal: 'Обычные выделения',
      increased: 'Увеличенные выделения',
      bloody: 'Кровянистые выделения',
      watery: 'Водянистые выделения'
    },
    
    // Результаты оценки
    assessment_results: 'Результаты оценки',
    cervical_length_analysis: 'Анализ длины шейки матки',
    preterm_birth_risk: 'Риск преждевременных родов',
    risk_stratification: 'Стратификация риска',
    
    // Категории риска
    risk_categories: 'Категории риска',
    
    very_low_risk: 'Очень низкий риск',
    low_risk: 'Низкий риск',
    moderate_risk: 'Умеренный риск',
    high_risk: 'Высокий риск',
    very_high_risk: 'Очень высокий риск',
    
    // Пороговые значения
    risk_thresholds: 'Пороговые значения',
    
    normal_length: 'Нормальная длина (≥35 мм)',
    normal_description: 'Низкий риск преждевременных родов',
    normal_risk_percentage: 'Риск менее 2%',
    
    borderline_short: 'Пограничное укорочение (25-34 мм)',
    borderline_description: 'Умеренный риск преждевременных родов',
    borderline_risk_percentage: 'Риск 5-15%',
    
    short_cervix: 'Короткая шейка матки (15-24 мм)',
    short_description: 'Высокий риск преждевременных родов',
    short_risk_percentage: 'Риск 15-50%',
    
    very_short_cervix: 'Очень короткая шейка матки (<15 мм)',
    very_short_description: 'Крайне высокий риск преждевременных родов',
    very_short_risk_percentage: 'Риск более 50%',
    
    // Временные рамки риска
    risk_timeframes: 'Временные рамки риска',
    risk_before_34_weeks: 'Риск родов до 34 недель',
    risk_before_37_weeks: 'Риск родов до 37 недель',
    risk_within_7_days: 'Риск родов в течение 7 дней',
    risk_within_2_weeks: 'Риск родов в течение 2 недель',
    
    // Клинические рекомендации
    clinical_management: 'Клинические рекомендации',
    
    normal_length_management: 'Рекомендации при нормальной длине (≥35 мм)',
    normal_recommendations: [
      'Стандартное наблюдение беременности',
      'Повторное измерение при наличии симптомов',
      'Обычная активность без ограничений',
      'Плановые визиты к врачу'
    ],
    
    borderline_management: 'Рекомендации при пограничном укорочении (25-34 мм)',
    borderline_recommendations: [
      'Увеличенное наблюдение',
      'Повторные измерения каждые 2-3 недели',
      'Ограничение физической активности',
      'Обучение распознаванию симптомов',
      'Рассмотреть прогестерон'
    ],
    
    short_cervix_management: 'Рекомендации при короткой шейке матки (15-24 мм)',
    short_cervix_recommendations: [
      'Интенсивное наблюдение',
      'Еженедельные измерения',
      'Вагинальный прогестерон',
      'Цервикальный серкляж (при показаниях)',
      'Ограничение активности',
      'Стероиды для созревания легких плода'
    ],
    
    very_short_management: 'Рекомендации при очень короткой шейке матки (<15 мм)',
    very_short_recommendations: [
      'Госпитализация для наблюдения',
      'Ежедневная оценка состояния',
      'Токолитическая терапия при схватках',
      'Экстренный серкляж (при возможности)',
      'Подготовка к преждевременным родам',
      'Стероиды и нейропротекция'
    ],
    
    // Лечебные вмешательства
    therapeutic_interventions: 'Лечебные вмешательства',
    
    progesterone_therapy: 'Терапия прогестероном',
    progesterone_indications: 'Показания к прогестерону',
    progesterone_dosage: 'Дозировка и способ применения',
    progesterone_monitoring: 'Мониторинг терапии',
    
    vaginal_progesterone: 'Вагинальный прогестерон 200 мг ежедневно',
    progesterone_start: 'Начало в 16-24 недели',
    progesterone_duration: 'До 36 недель беременности',
    
    cervical_cerclage: 'Цервикальный серкляж',
    cerclage_indications: 'Показания к серкляжу',
    cerclage_technique: 'Техника операции',
    cerclage_timing: 'Сроки выполнения',
    
    prophylactic_cerclage: 'Профилактический серкляж (12-16 недель)',
    therapeutic_cerclage: 'Лечебный серкляж (при укорочении)',
    emergency_cerclage: 'Экстренный серкляж (при выпадении оболочек)',
    
    // Мониторинг и наблюдение
    monitoring_protocol: 'Протокол мониторинга',
    
    follow_up_schedule: 'График наблюдения',
    measurement_frequency: 'Частота измерений',
    assessment_parameters: 'Параметры оценки',
    
    normal_follow_up: 'При нормальной длине - по показаниям',
    increased_follow_up: 'При укорочении - каждые 2-3 недели',
    intensive_follow_up: 'При высоком риске - еженедельно',
    
    // Прогностические факторы
    prognostic_factors: 'Прогностические факторы',
    
    maternal_factors: 'Материнские факторы',
    obstetric_factors: 'Акушерские факторы',
    fetal_factors: 'Плодовые факторы',
    
    age_factor: 'Возраст матери',
    parity_factor: 'Паритет',
    bmi_factor: 'Индекс массы тела',
    smoking_factor: 'Курение',
    
    multiple_pregnancy: 'Многоплодная беременность',
    fetal_anomalies: 'Аномалии плода',
    infection_risk: 'Риск инфекции',
    
    // Осложнения
    potential_complications: 'Возможные осложнения',
    
    preterm_delivery: 'Преждевременные роды',
    delivery_complications: 'Осложнения родов',
    neonatal_complications: 'Неонатальные осложнения',
    
    respiratory_distress: 'Респираторный дистресс-синдром',
    neurological_complications: 'Неврологические осложнения',
    long_term_outcomes: 'Долгосрочные исходы',
    
    // Ограничения метода
    method_limitations: 'Ограничения метода',
    
    measurement_variability: 'Вариабельность измерений',
    operator_dependence: 'Зависимость от оператора',
    technical_limitations: 'Технические ограничения',
    
    interobserver_variation: 'Межоператорская вариабельность',
    equipment_quality: 'Качество оборудования',
    patient_factors: 'Факторы пациентки',
    
    // Кнопки и действия
    calculate_risk: 'Рассчитать риск',
    assess_cervix: 'Оценить шейку матки',
    clear_data: 'Очистить данные',
    save_assessment: 'Сохранить оценку',
    print_report: 'Печать заключения',
    
    // Валидация
    cervical_length_required: 'Укажите длину шейки матки',
    gestational_age_required: 'Укажите гестационный возраст',
    invalid_cervical_length: 'Некорректная длина шейки матки',
    invalid_gestational_age: 'Некорректный гестационный возраст',
    measurement_out_of_range: 'Измерение вне допустимого диапазона',
    
    // Единицы измерения
    millimeters: 'мм',
    weeks: 'нед',
    days: 'дн',
    percentage: '%',
    
    // Дополнительная информация
    evidence_base: 'База доказательств',
    clinical_guidelines: 'Клинические рекомендации',
    quality_standards: 'Стандарты качества',
    
    measurement_standards: 'Стандарты измерения',
    international_guidelines: 'Международные рекомендации',
    best_practices: 'Лучшие практики',
    
    // Образовательная информация
    patient_education: 'Обучение пациентки',
    warning_signs: 'Настораживающие симптомы',
    when_to_call: 'Когда обращаться к врачу',
    
    emergency_symptoms: 'Экстренные симптомы',
    regular_contractions: 'Регулярные схватки',
    fluid_leakage: 'Подтекание вод',
    bleeding: 'Кровотечение',
    severe_pressure: 'Сильное давление внизу'
  },

  // Edinburgh Postnatal Depression Scale (EPDS) - Comprehensive Implementation
  epds: {
    title: 'Эдинбургская шкала послеродовой депрессии (EPDS)',
    subtitle: 'Скрининг послеродовой депрессии',
    description: 'Валидированный инструмент для скрининга депрессии у женщин в послеродовом периоде и во время беременности',
    
    // Основная информация
    screening_information: 'Информация о скрининге',
    assessment_purpose: 'Цель оценки',
    clinical_application: 'Клиническое применение',
    
    scale_description: 'EPDS - стандартизированный инструмент для выявления депрессивных симптомов',
    screening_purpose: 'Скрининг депрессии в перинатальном периоде',
    not_diagnostic: 'Не является диагностическим инструментом - требует клинической оценки',
    
    // Время проведения
    assessment_timing: 'Сроки проведения оценки',
    timing_options: 'Варианты времени оценки',
    
    pregnancy_assessment: 'Во время беременности',
    pregnancy_timing: 'Любой триместр беременности',
    pregnancy_description: 'Скрининг дородовой депрессии',
    
    postpartum_assessment: 'Послеродовый период',
    postpartum_timing: 'Через 6-8 недель после родов',
    postpartum_description: 'Скрининг послеродовой депрессии',
    
    follow_up_assessment: 'Контрольная оценка',
    follow_up_timing: 'При наличии факторов риска',
    follow_up_description: 'Повторная оценка при необходимости',
    
    // Инструкции для пациентки
    patient_instructions: 'Инструкции для пациентки',
    instruction_text: 'Выберите ответ, который лучше всего описывает ваши чувства за последние 7 дней',
    honesty_importance: 'Важно отвечать честно для получения точной оценки',
    confidentiality: 'Ваши ответы конфиденциальны',
    time_frame: 'Период оценки: последние 7 дней',
    
    // Вопросы EPDS
    epds_questions: 'Вопросы шкалы EPDS',
    
    // Вопрос 1: Смех и удовольствие
    question_1: 'Я могла смеяться и видеть смешную сторону происходящего',
    q1_option_0: 'Так же, как и всегда',
    q1_option_1: 'Не так, как обычно',
    q1_option_2: 'Определенно не так, как раньше',
    q1_option_3: 'Совсем не могла',
    
    // Вопрос 2: Предвкушение удовольствия
    question_2: 'Я с удовольствием ожидала различных событий',
    q2_option_0: 'Так же, как и всегда',
    q2_option_1: 'Несколько меньше, чем обычно',
    q2_option_2: 'Определенно меньше, чем раньше',
    q2_option_3: 'Почти совсем не ожидала',
    
    // Вопрос 3: Самообвинение
    question_3: 'Я без необходимости обвиняла себя, когда что-то шло не так',
    q3_option_0: 'Нет, никогда',
    q3_option_1: 'Не очень часто',
    q3_option_2: 'Да, иногда',
    q3_option_3: 'Да, большую часть времени',
    
    // Вопрос 4: Тревога и беспокойство
    question_4: 'Я была тревожна или беспокойна без особой причины',
    q4_option_0: 'Нет, совсем нет',
    q4_option_1: 'Почти никогда',
    q4_option_2: 'Да, иногда',
    q4_option_3: 'Да, очень часто',
    
    // Вопрос 5: Страх и паника
    question_5: 'Я чувствовала страх или панику без особой причины',
    q5_option_0: 'Нет, совсем нет',
    q5_option_1: 'Нет, не очень',
    q5_option_2: 'Да, иногда',
    q5_option_3: 'Да, довольно часто',
    
    // Вопрос 6: Преодоление трудностей
    question_6: 'События развивались слишком быстро для меня',
    q6_option_0: 'Нет, я справлялась так же хорошо, как всегда',
    q6_option_1: 'Нет, большую часть времени я справлялась довольно хорошо',
    q6_option_2: 'Да, иногда я не справлялась так хорошо, как обычно',
    q6_option_3: 'Да, большую часть времени я вообще не могла справиться',
    
    // Вопрос 7: Несчастье и проблемы со сном
    question_7: 'Я была так несчастна, что у меня были проблемы со сном',
    q7_option_0: 'Нет, совсем нет',
    q7_option_1: 'Не очень часто',
    q7_option_2: 'Да, иногда',
    q7_option_3: 'Да, большую часть времени',
    
    // Вопрос 8: Печаль и несчастье
    question_8: 'Я чувствовала печаль или несчастье',
    q8_option_0: 'Нет, совсем нет',
    q8_option_1: 'Не очень часто',
    q8_option_2: 'Да, довольно часто',
    q8_option_3: 'Да, большую часть времени',
    
    // Вопрос 9: Плач
    question_9: 'Я была так несчастна, что плакала',
    q9_option_0: 'Нет, никогда',
    q9_option_1: 'Только изредка',
    q9_option_2: 'Да, довольно часто',
    q9_option_3: 'Да, большую часть времени',
    
    // Вопрос 10: Суицидальные мысли
    question_10: 'Мысль о причинении себе вреда приходила мне в голову',
    q10_option_0: 'Никогда',
    q10_option_1: 'Почти никогда',
    q10_option_2: 'Иногда',
    q10_option_3: 'Да, довольно часто',
    
    // Результаты оценки
    assessment_results: 'Результаты оценки EPDS',
    total_score: 'Общий балл',
    score_interpretation: 'Интерпретация результата',
    risk_level: 'Уровень риска депрессии',
    clinical_significance: 'Клиническая значимость',
    
    score_range: 'Диапазон баллов: 0-30',
    question_scores: 'Баллы по вопросам',
    
    // Интерпретация баллов
    score_categories: 'Категории баллов',
    
    minimal_depression: 'Минимальная депрессия (0-8 баллов)',
    minimal_description: 'Низкий риск депрессии',
    minimal_recommendation: 'Стандартное наблюдение',
    
    mild_depression: 'Легкая депрессия (9-11 баллов)',
    mild_description: 'Умеренный риск депрессии',
    mild_recommendation: 'Рекомендуется клиническая оценка',
    
    moderate_depression: 'Умеренная депрессия (12-13 баллов)',
    moderate_description: 'Повышенный риск депрессии',
    moderate_recommendation: 'Необходима консультация специалиста',
    
    severe_depression: 'Тяжелая депрессия (≥14 баллов)',
    severe_description: 'Высокий риск депрессии',
    severe_recommendation: 'Требуется немедленная консультация специалиста',
    
    // Особое внимание к вопросу 10
    suicidal_thoughts_assessment: 'Оценка суицидальных мыслей',
    question_10_alert: 'Особое внимание к вопросу 10',
    suicidal_risk_warning: 'При любом положительном ответе на вопрос 10 требуется немедленная оценка',
    emergency_referral: 'Экстренное направление к специалисту',
    
    q10_score_1_plus: 'Оценка 1+ по вопросу 10 = риск самоповреждения',
    immediate_assessment: 'Немедленная клиническая оценка необходима',
    safety_planning: 'Необходимо планирование безопасности',
    
    // Клинические рекомендации
    clinical_recommendations: 'Клинические рекомендации',
    
    minimal_risk_management: 'Рекомендации при минимальном риске (0-8 баллов)',
    minimal_recommendations: [
      'Стандартное послеродовое наблюдение',
      'Обучение признакам депрессии',
      'Поддержка грудного вскармливания',
      'Поощрение социальной поддержки',
      'Повторный скрининг при показаниях'
    ],
    
    mild_risk_management: 'Рекомендации при легкой депрессии (9-11 баллов)',
    mild_recommendations: [
      'Клиническая оценка в течение 2 недель',
      'Психообразование о депрессии',
      'Консультирование по поддержке',
      'Мониторинг симптомов',
      'Рассмотреть группы поддержки'
    ],
    
    moderate_risk_management: 'Рекомендации при умеренной депрессии (12-13 баллов)',
    moderate_recommendations: [
      'Консультация специалиста в течение 1 недели',
      'Структурированная психотерапия',
      'Рассмотреть медикаментозную терапию',
      'Еженедельный мониторинг',
      'Семейная поддержка и образование'
    ],
    
    severe_risk_management: 'Рекомендации при тяжелой депрессии (≥14 баллов)',
    severe_recommendations: [
      'Немедленная консультация психиатра',
      'Комплексный план лечения',
      'Медикаментозная терапия',
      'Интенсивная психотерапия',
      'Ежедневный мониторинг',
      'Планирование безопасности'
    ],
    
    // Факторы риска
    risk_factors: 'Факторы риска послеродовой депрессии',
    
    biological_factors: 'Биологические факторы',
    hormonal_changes: 'Гормональные изменения',
    sleep_deprivation: 'Недостаток сна',
    breastfeeding_difficulties: 'Проблемы с грудным вскармливанием',
    
    psychological_factors: 'Психологические факторы',
    previous_depression: 'Депрессия в анамнезе',
    anxiety_disorders: 'Тревожные расстройства',
    personality_factors: 'Личностные факторы',
    
    social_factors: 'Социальные факторы',
    lack_of_support: 'Недостаток поддержки',
    relationship_problems: 'Проблемы в отношениях',
    financial_stress: 'Финансовый стресс',
    social_isolation: 'Социальная изоляция',
    
    obstetric_factors: 'Акушерские факторы',
    pregnancy_complications: 'Осложнения беременности',
    difficult_delivery: 'Трудные роды',
    premature_birth: 'Преждевременные роды',
    infant_health_problems: 'Проблемы здоровья ребенка',
    
    // Лечение и поддержка
    treatment_options: 'Варианты лечения',
    
    non_pharmacological: 'Немедикаментозное лечение',
    counseling: 'Консультирование и психотерапия',
    support_groups: 'Группы поддержки',
    lifestyle_interventions: 'Изменения образа жизни',
    peer_support: 'Поддержка сверстников',
    
    pharmacological: 'Медикаментозное лечение',
    antidepressants: 'Антидепрессанты',
    breastfeeding_safety: 'Безопасность при грудном вскармливании',
    medication_monitoring: 'Мониторинг медикаментов',
    
    // Мониторинг и наблюдение
    monitoring_protocol: 'Протокол мониторинга',
    
    screening_schedule: 'График скрининга',
    prenatal_screening: 'Дородовый скрининг - каждый триместр при факторах риска',
    postpartum_screening: 'Послеродовый скрининг - 6-8 недель',
    follow_up_screening: 'Контрольный скрининг - при симптомах или факторах риска',
    
    response_monitoring: 'Мониторинг ответа на лечение',
    symptom_tracking: 'Отслеживание симптомов',
    functional_assessment: 'Оценка функционирования',
    quality_of_life: 'Качество жизни',
    
    // Предупреждающие признаки
    warning_signs: 'Предупреждающие признаки',
    emergency_symptoms: 'Экстренные симптомы',
    
    severe_symptoms: 'Тяжелые симптомы',
    psychotic_symptoms: 'Психотические симптомы',
    suicidal_ideation: 'Суицидальные мысли',
    inability_to_care: 'Неспособность ухаживать за ребенком',
    
    when_to_seek_help: 'Когда обращаться за помощью',
    immediate_help: 'Немедленная помощь необходима при',
    urgent_consultation: 'Срочная консультация при ухудшении симптомов',
    
    // Ограничения инструмента
    scale_limitations: 'Ограничения шкалы',
    
    screening_tool: 'EPDS - инструмент скрининга, не диагностики',
    clinical_judgment: 'Необходима клиническая оценка',
    cultural_considerations: 'Культурные особенности',
    language_barriers: 'Языковые барьеры',
    
    false_positives: 'Возможны ложноположительные результаты',
    false_negatives: 'Возможны ложноотрицательные результаты',
    comprehensive_assessment: 'Требуется комплексная оценка',
    
    // Кнопки и действия
    complete_assessment: 'Завершить оценку',
    calculate_score: 'Рассчитать балл',
    reset_answers: 'Сбросить ответы',
    save_results: 'Сохранить результаты',
    print_assessment: 'Печать оценки',
    
    // Валидация
    all_questions_required: 'Ответьте на все 10 вопросов',
    question_not_answered: 'Вопрос {number} не отвечен',
    invalid_response: 'Некорректный ответ',
    
    // Конфиденциальность
    confidentiality_notice: 'Уведомление о конфиденциальности',
    privacy_protection: 'Защита конфиденциальности',
    data_security: 'Безопасность данных',
    
    confidential_information: 'Информация конфиденциальна',
    professional_use: 'Только для профессионального использования',
    secure_storage: 'Безопасное хранение данных',
    
    // Дополнительная информация
    additional_resources: 'Дополнительные ресурсы',
    support_services: 'Службы поддержки',
    educational_materials: 'Образовательные материалы',
    
    crisis_hotlines: 'Телефоны экстренной помощи',
    online_resources: 'Онлайн-ресурсы',
    professional_referrals: 'Направления к специалистам'
  },

  // Preeclampsia Risk Calculator - Comprehensive Implementation
  preeclampsiaRisk: {
    title: 'Калькулятор риска преэклампсии',
    subtitle: 'Оценка риска развития преэклампсии',
    description: 'Комплексная оценка риска развития преэклампсии на основе материнских факторов риска и клинических данных',
    
    // Основная информация
    risk_assessment_overview: 'Общая информация об оценке риска',
    preeclampsia_definition: 'Преэклампсия - серьезное осложнение беременности',
    risk_stratification: 'Стратификация риска для профилактики и мониторинга',
    early_detection: 'Раннее выявление факторов риска',
    
    // Демографические факторы
    demographic_factors: 'Демографические факторы',
    maternal_demographics: 'Демографические данные матери',
    
    maternal_age_label: 'Возраст матери (лет)',
    maternal_age_placeholder: 'Введите возраст матери',
    maternal_age_help: 'Возраст матери влияет на риск преэклампсии',
    maternal_age_error: 'Возраст должен быть 15-50 лет',
    
    maternal_age_categories: 'Категории возрастного риска',
    age_under_20: 'Моложе 20 лет - повышенный риск',
    age_20_34: '20-34 года - стандартный риск',
    age_35_39: '35-39 лет - умеренно повышенный риск',
    age_over_40: '40+ лет - высокий риск',
    
    // Антропометрические данные
    anthropometric_data: 'Антропометрические данные',
    
    pre_pregnancy_bmi_label: 'ИМТ до беременности (кг/м²)',
    pre_pregnancy_bmi_placeholder: 'Введите ИМТ до беременности',
    pre_pregnancy_bmi_help: 'Индекс массы тела до наступления беременности',
    pre_pregnancy_bmi_error: 'ИМТ должен быть 15-50 кг/м²',
    
    bmi_risk_categories: 'Категории риска по ИМТ',
    bmi_underweight: 'Недостаточный вес (<18.5) - умеренный риск',
    bmi_normal: 'Нормальный вес (18.5-24.9) - стандартный риск',
    bmi_overweight: 'Избыточный вес (25-29.9) - повышенный риск',
    bmi_obese: 'Ожирение (≥30) - высокий риск',
    
    // Акушерский анамнез
    obstetric_history: 'Акушерский анамнез',
    previous_pregnancies: 'Предыдущие беременности',
    
    parity_label: 'Паритет (количество родов)',
    parity_help: 'Количество предыдущих родов',
    nulliparous: 'Первородящая (0 родов)',
    primiparous: 'Повторнородящая (1 роды)',
    multiparous: 'Многорожавшая (2+ родов)',
    
    previous_preeclampsia_label: 'Преэклампсия в анамнезе',
    previous_preeclampsia_options: {
      none: 'Нет преэклампсии в анамнезе',
      mild: 'Легкая преэклампсия в анамнезе',
      severe: 'Тяжелая преэклампсия в анамнезе',
      eclampsia: 'Эклампсия в анамнезе',
      hellp: 'HELLP-синдром в анамнезе'
    },
    
    pregnancy_interval_label: 'Интервал между беременностями',
    pregnancy_interval_help: 'Время с момента последних родов',
    interval_less_2_years: 'Менее 2 лет',
    interval_2_5_years: '2-5 лет',
    interval_more_5_years: 'Более 5 лет',
    
    // Медицинский анамнез
    medical_history: 'Медицинский анамнез',
    chronic_conditions: 'Хронические заболевания',
    
    chronic_hypertension_label: 'Хроническая артериальная гипертензия',
    hypertension_options: {
      none: 'Нет гипертензии',
      mild: 'Легкая гипертензия (140-159/90-99)',
      moderate: 'Умеренная гипертензия (160-179/100-109)',
      severe: 'Тяжелая гипертензия (≥180/110)'
    },
    
    diabetes_mellitus_label: 'Сахарный диабет',
    diabetes_options: {
      none: 'Нет диабета',
      type1: 'Сахарный диабет 1 типа',
      type2: 'Сахарный диабет 2 типа',
      gestational: 'Гестационный диабет в анамнезе'
    },
    
    kidney_disease_label: 'Заболевания почек',
    kidney_disease_options: {
      none: 'Нет заболеваний почек',
      chronic: 'Хроническая болезнь почек',
      proteinuria: 'Протеинурия в анамнезе',
      other: 'Другие заболевания почек'
    },
    
    autoimmune_disease_label: 'Аутоиммунные заболевания',
    autoimmune_options: {
      none: 'Нет аутоиммунных заболеваний',
      sle: 'Системная красная волчанка',
      aps: 'Антифосфолипидный синдром',
      other: 'Другие аутоиммунные заболевания'
    },
    
    // Семейный анамнез
    family_history: 'Семейный анамнез',
    familial_risk_factors: 'Семейные факторы риска',
    
    family_preeclampsia_label: 'Преэклампсия у родственников',
    family_preeclampsia_options: {
      none: 'Нет семейного анамнеза',
      mother: 'У матери',
      sister: 'У сестры',
      multiple: 'У нескольких родственниц'
    },
    
    family_hypertension_label: 'Семейный анамнез гипертензии',
    family_hypertension_options: {
      none: 'Нет семейного анамнеза',
      present: 'Есть семейный анамнез',
      early_onset: 'Раннее начало (<50 лет)'
    },
    
    // Текущая беременность
    current_pregnancy: 'Текущая беременность',
    pregnancy_characteristics: 'Характеристики беременности',
    
    gestational_age_label: 'Гестационный возраст (недели)',
    gestational_age_placeholder: 'Введите гестационный возраст',
    gestational_age_help: 'Текущий срок беременности',
    gestational_age_error: 'Гестационный возраст должен быть 6-42 недели',
    
    multiple_pregnancy_label: 'Многоплодная беременность',
    multiple_pregnancy_options: {
      singleton: 'Одноплодная беременность',
      twins: 'Двойня',
      triplets: 'Тройня и более'
    },
    
    conception_method_label: 'Способ зачатия',
    conception_options: {
      natural: 'Естественное зачатие',
      ivf: 'ЭКО/ИКСИ',
      donor_egg: 'Донорская яйцеклетка',
      other_art: 'Другие ВРТ'
    },
    
    // Текущие клинические данные
    current_clinical_data: 'Текущие клинические данные',
    vital_signs: 'Жизненно важные показатели',
    
    current_bp_label: 'Текущее артериальное давление',
    systolic_bp_label: 'Систолическое АД (мм рт.ст.)',
    diastolic_bp_label: 'Диастолическое АД (мм рт.ст.)',
    bp_help: 'Среднее значение последних измерений',
    bp_error: 'АД должно быть в диапазоне 80-250 мм рт.ст.',
    
    proteinuria_label: 'Протеинурия',
    proteinuria_options: {
      none: 'Отсутствует',
      trace: 'Следы белка',
      mild: 'Легкая протеинурия (1+)',
      moderate: 'Умеренная протеинурия (2+)',
      severe: 'Выраженная протеинурия (3-4+)'
    },
    
    // Лабораторные данные
    laboratory_data: 'Лабораторные данные',
    biochemical_markers: 'Биохимические маркеры',
    
    platelet_count_label: 'Количество тромбоцитов (×10³/мкл)',
    platelet_count_placeholder: 'Введите количество тромбоцитов',
    platelet_count_help: 'Последний анализ крови',
    platelet_count_error: 'Количество тромбоцитов должно быть 50-500 ×10³/мкл',
    
    creatinine_label: 'Креатинин сыворотки (мкмоль/л)',
    creatinine_placeholder: 'Введите уровень креатинина',
    creatinine_help: 'Показатель функции почек',
    creatinine_error: 'Креатинин должен быть 40-300 мкмоль/л',
    
    alt_label: 'АЛТ (Ед/л)',
    alt_placeholder: 'Введите уровень АЛТ',
    alt_help: 'Показатель функции печени',
    alt_error: 'АЛТ должна быть 5-200 Ед/л',
    
    // Результаты оценки риска
    risk_assessment_results: 'Результаты оценки риска',
    overall_risk_level: 'Общий уровень риска',
    risk_percentage: 'Процентный риск',
    risk_factors_summary: 'Сводка факторов риска',
    
    // Категории риска
    risk_level_categories: 'Категории риска',
    
    low_risk: 'Низкий риск преэклампсии',
    low_risk_percentage: 'Менее 5%',
    low_risk_description: 'Стандартное наблюдение беременности',
    
    moderate_risk: 'Умеренный риск преэклампсии',
    moderate_risk_percentage: '5-15%',
    moderate_risk_description: 'Усиленное наблюдение и профилактика',
    
    high_risk: 'Высокий риск преэклампсии',
    high_risk_percentage: '15-25%',
    high_risk_description: 'Интенсивное наблюдение и профилактика',
    
    very_high_risk: 'Очень высокий риск преэклампсии',
    very_high_risk_percentage: 'Более 25%',
    very_high_risk_description: 'Максимальное наблюдение и агрессивная профилактика',
    
    // Клинические рекомендации
    clinical_recommendations: 'Клинические рекомендации',
    
    low_risk_management: 'Рекомендации при низком риске',
    low_risk_recommendations: [
      'Стандартное дородовое наблюдение',
      'Измерение АД при каждом визите',
      'Анализ мочи на белок по показаниям',
      'Обучение признакам преэклампсии',
      'Обычный график визитов'
    ],
    
    moderate_risk_management: 'Рекомендации при умеренном риске',
    moderate_risk_recommendations: [
      'Усиленное наблюдение беременности',
      'Более частые измерения АД',
      'Регулярный анализ мочи на белок',
      'Биохимический анализ крови',
      'Рассмотреть аспирин 75-150 мг/день',
      'Более частые визиты к врачу'
    ],
    
    high_risk_management: 'Рекомендации при высоком риске',
    high_risk_recommendations: [
      'Интенсивное наблюдение беременности',
      'Ежедневное самоконтроль АД',
      'Еженедельные анализы мочи',
      'Регулярные биохимические анализы',
      'Аспирин 150 мг/день с 12 недель',
      'Еженедельные визиты после 28 недель',
      'УЗИ роста плода каждые 3-4 недели'
    ],
    
    very_high_risk_management: 'Рекомендации при очень высоком риске',
    very_high_risk_recommendations: [
      'Максимальное наблюдение беременности',
      'Госпитализация при показаниях',
      'Ежедневный мониторинг АД',
      'Частые лабораторные анализы',
      'Высокие дозы аспирина с ранних сроков',
      'Консультация специалистов',
      'Подготовка к преждевременным родам',
      'Стероиды для созревания легких плода'
    ],
    
    // Профилактические мероприятия
    prevention_strategies: 'Стратегии профилактики',
    
    aspirin_prophylaxis: 'Профилактика аспирином',
    aspirin_indications: 'Показания к назначению аспирина',
    aspirin_dosage: 'Дозировка и режим приема',
    aspirin_timing: 'Сроки начала и окончания',
    
    low_dose_aspirin: 'Низкие дозы аспирина (75-150 мг/день)',
    aspirin_start_12_weeks: 'Начало с 12 недель беременности',
    aspirin_until_36_weeks: 'До 36 недель беременности',
    evening_intake: 'Прием вечером для лучшей эффективности',
    
    lifestyle_modifications: 'Изменения образа жизни',
    diet_recommendations: 'Рекомендации по питанию',
    exercise_guidelines: 'Рекомендации по физической активности',
    stress_management: 'Управление стрессом',
    
    // Мониторинг и наблюдение
    monitoring_protocol: 'Протокол мониторинга',
    
    bp_monitoring: 'Мониторинг артериального давления',
    home_bp_monitoring: 'Домашний мониторинг АД',
    clinic_bp_checks: 'Клинические измерения АД',
    
    bp_target_values: 'Целевые значения АД',
    normal_bp: 'Нормальное АД: <140/90 мм рт.ст.',
    elevated_bp: 'Повышенное АД: 140-159/90-99 мм рт.ст.',
    severe_hypertension: 'Тяжелая гипертензия: ≥160/110 мм рт.ст.',
    
    laboratory_monitoring: 'Лабораторный мониторинг',
    baseline_tests: 'Базовые анализы',
    follow_up_tests: 'Контрольные анализы',
    emergency_tests: 'Экстренные анализы',
    
    // Осложнения преэклампсии
    preeclampsia_complications: 'Осложнения преэклампсии',
    
    maternal_complications: 'Материнские осложнения',
    maternal_risks: [
      'Эклампсия (судороги)',
      'HELLP-синдром',
      'Отек легких',
      'Почечная недостаточность',
      'Печеночная недостаточность',
      'Нарушения свертывания',
      'Инсульт'
    ],
    
    fetal_complications: 'Плодовые осложнения',
    fetal_risks: [
      'Задержка роста плода',
      'Преждевременные роды',
      'Отслойка плаценты',
      'Внутриутробная гибель',
      'Низкий вес при рождении'
    ],
    
    // Неотложные состояния
    emergency_situations: 'Неотложные состояния',
    warning_signs: 'Предупреждающие признаки',
    
    severe_symptoms: 'Тяжелые симптомы',
    emergency_symptoms: [
      'Сильная головная боль',
      'Нарушения зрения',
      'Боль в эпигастрии',
      'Одышка',
      'Олигурия',
      'Судороги'
    ],
    
    when_to_call_doctor: 'Когда обращаться к врачу',
    immediate_care: 'Немедленная медицинская помощь',
    urgent_evaluation: 'Срочная оценка состояния',
    
    // Кнопки и действия
    calculate_risk: 'Рассчитать риск преэклампсии',
    reset_assessment: 'Сбросить оценку',
    save_results: 'Сохранить результаты',
    print_report: 'Печать заключения',
    
    // Валидация
    age_required: 'Укажите возраст матери',
    bmi_required: 'Укажите ИМТ до беременности',
    gestational_age_required: 'Укажите гестационный возраст',
    bp_required: 'Укажите значения артериального давления',
    invalid_age: 'Некорректный возраст',
    invalid_bmi: 'Некорректный ИМТ',
    invalid_gestational_age: 'Некорректный гестационный возраст',
    invalid_bp_values: 'Некорректные значения АД',
    
    // Дополнительная информация
    evidence_base: 'База доказательств',
    clinical_guidelines: 'Клинические рекомендации',
    international_standards: 'Международные стандарты',
    
    guideline_sources: 'Источники рекомендаций',
    acog_guidelines: 'Рекомендации ACOG',
    isshp_guidelines: 'Рекомендации ISSHP',
    nice_guidelines: 'Рекомендации NICE',
    who_recommendations: 'Рекомендации ВОЗ'
  },

  // Labor Progress Calculator - Comprehensive Implementation
  laborProgress: {
    title: 'Калькулятор прогресса родов',
    subtitle: 'Оценка хода родовой деятельности',
    description: 'Мониторинг и оценка прогресса родов с использованием партограммы и клинических параметров для оптимального ведения родов',
    
    // Основная информация
    labor_monitoring: 'Мониторинг родовой деятельности',
    partogram_assessment: 'Оценка по партограмме',
    clinical_monitoring: 'Клинический мониторинг',
    
    // Исходные данные роженицы
    maternal_information: 'Данные роженицы',
    basic_demographics: 'Основная информация',
    
    maternal_age_label: 'Возраст роженицы (лет)',
    maternal_age_placeholder: 'Введите возраст роженицы',
    maternal_age_help: 'Возраст влияет на течение родов',
    maternal_age_error: 'Возраст должен быть 15-50 лет',
    
    gestational_age_label: 'Гестационный возраст (недели)',
    gestational_age_placeholder: 'Введите гестационный возраст',
    gestational_age_help: 'Срок беременности на момент родов',
    gestational_age_error: 'Гестационный возраст должен быть 24-42 недели',
    
    parity_label: 'Паритет',
    parity_help: 'Количество предыдущих родов',
    nulliparous: 'Первородящая',
    primiparous: 'Повторнородящая',
    multiparous: 'Многорожавшая',
    grand_multiparous: 'Многорожавшая (5+ родов)',
    
    // Начало родовой деятельности
    labor_onset: 'Начало родовой деятельности',
    labor_initiation: 'Инициация родов',
    
    labor_onset_time_label: 'Время начала регулярных схваток',
    labor_onset_time_help: 'Когда начались регулярные болезненные схватки',
    
    labor_type_label: 'Тип начала родов',
    labor_type_options: {
      spontaneous: 'Спонтанное начало родов',
      induced_medical: 'Медикаментозная индукция',
      induced_amniotomy: 'Амниотомия',
      induced_combined: 'Комбинированная индукция'
    },
    
    membrane_status_label: 'Состояние плодных оболочек',
    membrane_options: {
      intact: 'Целые',
      ruptured_spontaneous: 'Спонтанный разрыв',
      ruptured_artificial: 'Искусственная амниотомия',
      high_rupture: 'Высокий боковой разрыв'
    },
    
    // Текущее состояние шейки матки
    cervical_assessment: 'Оценка шейки матки',
    cervical_examination: 'Влагалищное исследование',
    
    cervical_dilation_label: 'Раскрытие шейки матки (см)',
    cervical_dilation_placeholder: 'Введите раскрытие в см',
    cervical_dilation_help: 'Диаметр внутреннего зева шейки матки',
    cervical_dilation_error: 'Раскрытие должно быть 0-10 см',
    
    cervical_effacement_label: 'Сглаживание шейки матки (%)',
    cervical_effacement_placeholder: 'Введите процент сглаживания',
    cervical_effacement_help: 'Степень укорочения шейки матки',
    cervical_effacement_error: 'Сглаживание должно быть 0-100%',
    
    cervical_consistency_label: 'Консистенция шейки матки',
    consistency_options: {
      firm: 'Плотная',
      medium: 'Средней плотности',
      soft: 'Мягкая'
    },
    
    cervical_position_label: 'Положение шейки матки',
    position_options: {
      posterior: 'Заднее',
      mid: 'Среднее',
      anterior: 'Переднее'
    },
    
    // Положение и вставление плода
    fetal_presentation: 'Предлежание и положение плода',
    fetal_assessment: 'Оценка состояния плода',
    
    presentation_label: 'Предлежание плода',
    presentation_options: {
      vertex: 'Головное предлежание',
      breech: 'Тазовое предлежание',
      shoulder: 'Поперечное положение',
      face: 'Лицевое предлежание',
      brow: 'Лобное предлежание'
    },
    
    station_label: 'Высота стояния головки (станция)',
    station_placeholder: 'Введите станцию (-3 до +3)',
    station_help: 'Соотношение предлежащей части к седалищным остям',
    station_error: 'Станция должна быть от -5 до +5',
    
    fetal_position_label: 'Позиция плода',
    fetal_position_options: {
      oa: 'Затылочно-передняя (ОА)',
      op: 'Затылочно-задняя (ОР)',
      loa: 'Левая затылочно-передняя (LOA)',
      roa: 'Правая затылочно-передняя (ROA)',
      lop: 'Левая затылочно-задняя (LOP)',
      rop: 'Правая затылочно-задняя (ROP)',
      lot: 'Левая затылочно-поперечная (LOT)',
      rot: 'Правая затылочно-поперечная (ROT)'
    },
    
    // Характеристики схваток
    contraction_assessment: 'Оценка схваток',
    uterine_activity: 'Сократительная активность матки',
    
    contraction_frequency_label: 'Частота схваток (в 10 мин)',
    contraction_frequency_placeholder: 'Введите количество схваток',
    contraction_frequency_help: 'Количество схваток за 10 минут',
    contraction_frequency_error: 'Частота должна быть 0-8 схваток/10мин',
    
    contraction_duration_label: 'Продолжительность схваток (сек)',
    contraction_duration_placeholder: 'Введите продолжительность',
    contraction_duration_help: 'Средняя продолжительность одной схватки',
    contraction_duration_error: 'Продолжительность должна быть 15-120 сек',
    
    contraction_strength_label: 'Сила схваток',
    contraction_strength_options: {
      mild: 'Слабые схватки',
      moderate: 'Схватки средней силы',
      strong: 'Сильные схватки'
    },
    
    // Время от начала родов
    labor_duration: 'Продолжительность родов',
    time_elapsed: 'Время от начала родов',
    
    hours_in_labor_label: 'Время в родах (часы)',
    hours_in_labor_placeholder: 'Введите количество часов',
    hours_in_labor_help: 'Время от начала регулярных схваток',
    hours_in_labor_error: 'Время должно быть 0-48 часов',
    
    // Фазы родов
    labor_phases: 'Фазы родов',
    
    current_phase: 'Текущая фаза родов',
    latent_phase: 'Латентная фаза (0-6 см)',
    active_phase: 'Активная фаза (6-10 см)',
    transition_phase: 'Переходная фаза (8-10 см)',
    second_stage: 'Период изгнания',
    
    // Прогресс дилатации
    dilation_progress: 'Прогресс раскрытия',
    
    expected_dilation_rate: 'Ожидаемая скорость раскрытия',
    nulliparous_rate: 'Первородящие: 1.2 см/час (активная фаза)',
    multiparous_rate: 'Повторнородящие: 1.5 см/час (активная фаза)',
    
    dilation_rate_label: 'Фактическая скорость раскрытия (см/час)',
    dilation_rate_help: 'Рассчитано на основе последних измерений',
    
    // Аномалии родовой деятельности
    labor_abnormalities: 'Аномалии родовой деятельности',
    
    protracted_labor: 'Затяжные роды',
    protracted_definition: 'Скорость раскрытия менее нормы',
    
    arrested_labor: 'Остановка родовой деятельности',
    arrested_definition: 'Отсутствие прогресса в течение 4 часов',
    
    precipitous_labor: 'Стремительные роды',
    precipitous_definition: 'Слишком быстрое течение родов',
    
    // Оценка риска
    risk_assessment: 'Оценка риска',
    
    normal_progress: 'Нормальный прогресс родов',
    slow_progress: 'Медленный прогресс родов',
    arrested_progress: 'Остановка прогресса родов',
    rapid_progress: 'Быстрый прогресс родов',
    
    // Рекомендации по ведению
    management_recommendations: 'Рекомендации по ведению',
    
    normal_management: 'Ведение при нормальных родах',
    normal_recommendations: [
      'Продолжить наблюдение',
      'Поощрять активность роженицы',
      'Обеспечить адекватную гидратацию',
      'Мониторинг состояния плода',
      'Контроль каждые 4 часа'
    ],
    
    slow_labor_management: 'Ведение при медленных родах',
    slow_labor_recommendations: [
      'Исключить диспропорцию',
      'Оценить положение плода',
      'Рассмотреть амниотомию',
      'Рассмотреть окситоцин',
      'Более частый контроль'
    ],
    
    arrested_labor_management: 'Ведение при остановке родов',
    arrested_labor_recommendations: [
      'Исключить механические препятствия',
      'Оценить возможность оперативного родоразрешения',
      'Консультация акушера',
      'Подготовка к кесареву сечению',
      'Непрерывный мониторинг плода'
    ],
    
    // Критерии для интервенций
    intervention_criteria: 'Критерии для вмешательств',
    
    amniotomy_indications: 'Показания к амниотомии',
    amniotomy_criteria: [
      'Раскрытие шейки ≥3 см',
      'Головка в полости малого таза',
      'Медленный прогресс родов',
      'Необходимость мониторинга плода'
    ],
    
    oxytocin_indications: 'Показания к окситоцину',
    oxytocin_criteria: [
      'Слабость родовой деятельности',
      'Остановка прогресса',
      'Медикаментозная индукция родов',
      'Вторичная слабость схваток'
    ],
    
    cesarean_indications: 'Показания к кесареву сечению',
    cesarean_criteria: [
      'Клинически узкий таз',
      'Дистресс плода',
      'Неэффективность родостимуляции',
      'Выпадение пуповины',
      'Отслойка плаценты'
    ],
    
    // Мониторинг состояния плода
    fetal_monitoring: 'Мониторинг состояния плода',
    
    fetal_heart_rate_label: 'ЧСС плода (уд/мин)',
    fetal_heart_rate_placeholder: 'Введите ЧСС плода',
    fetal_heart_rate_help: 'Базальная частота сердечных сокращений',
    fetal_heart_rate_error: 'ЧСС должна быть 100-180 уд/мин',
    
    fhr_variability_label: 'Вариабельность ЧСС',
    fhr_variability_options: {
      absent: 'Отсутствует (<5 уд/мин)',
      minimal: 'Минимальная (5-25 уд/мин)',
      moderate: 'Умеренная (6-25 уд/мин)',
      marked: 'Выраженная (>25 уд/мин)'
    },
    
    fhr_decelerations_label: 'Децелерации ЧСС',
    deceleration_options: {
      none: 'Отсутствуют',
      early: 'Ранние децелерации',
      late: 'Поздние децелерации',
      variable: 'Вариабельные децелерации',
      prolonged: 'Пролонгированные децелерации'
    },
    
    // Материнское состояние
    maternal_condition: 'Состояние роженицы',
    
    maternal_bp_label: 'Артериальное давление',
    systolic_bp_label: 'Систолическое АД (мм рт.ст.)',
    diastolic_bp_label: 'Диастолическое АД (мм рт.ст.)',
    bp_help: 'Последнее измерение АД',
    
    maternal_pulse_label: 'Пульс роженицы (уд/мин)',
    maternal_pulse_placeholder: 'Введите частоту пульса',
    maternal_pulse_help: 'Частота сердечных сокращений матери',
    
    temperature_label: 'Температура тела (°C)',
    temperature_placeholder: 'Введите температуру',
    temperature_help: 'Температура тела роженицы',
    
    // Результаты оценки
    assessment_results: 'Результаты оценки',
    
    labor_progress_status: 'Статус прогресса родов',
    expected_delivery_time: 'Ожидаемое время родов',
    risk_level: 'Уровень риска',
    
    // Партограмма
    partogram: 'Партограмма',
    partogram_plotting: 'Графическое отображение',
    
    alert_line: 'Линия настороженности',
    action_line: 'Линия действия',
    cervical_dilation_curve: 'Кривая раскрытия шейки матки',
    descent_curve: 'Кривая опускания головки',
    
    // Предупреждения
    warnings: 'Предупреждения',
    
    concerning_patterns: 'Настораживающие признаки',
    immediate_evaluation: 'Требует немедленной оценки',
    consider_intervention: 'Рассмотреть вмешательство',
    
    // Документация
    documentation: 'Документация',
    
    labor_record: 'Запись в истории родов',
    partogram_entry: 'Запись в партограмме',
    nursing_notes: 'Акушерские записи',
    
    // Кнопки и действия
    assess_progress: 'Оценить прогресс',
    update_assessment: 'Обновить оценку',
    plot_partogram: 'Построить партограмму',
    generate_report: 'Сформировать отчет',
    
    // Валидация
    dilation_required: 'Укажите раскрытие шейки матки',
    station_required: 'Укажите высоту стояния головки',
    time_required: 'Укажите время в родах',
    contractions_required: 'Укажите характеристики схваток',
    
    invalid_dilation: 'Некорректное значение раскрытия',
    invalid_station: 'Некорректное значение станции',
    invalid_time: 'Некорректное время',
    invalid_contractions: 'Некорректные характеристики схваток'
  },

  // Ovarian Cancer Risk Calculator - Comprehensive Implementation
  ovarianCancerRisk: {
    title: 'Калькулятор риска рака яичников',
    subtitle: 'Оценка риска развития рака яичников',
    description: 'Комплексная оценка риска развития рака яичников на основе генетических, семейных и репродуктивных факторов риска',
    
    // Основная информация
    cancer_risk_overview: 'Общая информация о риске рака яичников',
    ovarian_cancer_facts: 'Рак яичников - пятая причина смерти от рака у женщин',
    risk_assessment_importance: 'Важность оценки риска для раннего выявления',
    genetic_component: 'Значительная генетическая составляющая',
    
    // Демографические факторы
    demographic_factors: 'Демографические факторы',
    
    patient_age_label: 'Возраст пациентки (лет)',
    patient_age_placeholder: 'Введите возраст пациентки',
    patient_age_help: 'Возраст является основным фактором риска',
    patient_age_error: 'Возраст должен быть 18-90 лет',
    
    // Генетические факторы
    genetic_factors: 'Генетические факторы',
    
    brca_mutation_label: 'Мутации BRCA1/BRCA2',
    brca_options: {
      unknown: 'Неизвестно',
      negative: 'Тестирование отрицательное',
      brca1_positive: 'BRCA1 мутация выявлена',
      brca2_positive: 'BRCA2 мутация выявлена',
      both_positive: 'Обе мутации выявлены'
    },
    
    lynch_syndrome_label: 'Синдром Линча',
    lynch_options: {
      unknown: 'Неизвестно',
      negative: 'Исключен',
      positive: 'Подтвержден'
    },
    
    // Семейный анамнез
    family_history: 'Семейный анамнез',
    
    family_ovarian_cancer_label: 'Рак яичников у родственников',
    family_ovarian_options: {
      none: 'Отсутствует',
      one_relative: 'Один родственник',
      multiple_relatives: 'Несколько родственников',
      first_degree: 'Родственник первой степени'
    },
    
    family_breast_cancer_label: 'Рак молочной железы у родственников',
    family_breast_options: {
      none: 'Отсутствует',
      one_relative: 'Один родственник',
      multiple_relatives: 'Несколько родственников',
      early_onset: 'Ранний возраст (<50 лет)'
    },
    
    // Репродуктивные факторы
    reproductive_factors: 'Репродуктивные факторы',
    
    parity_label: 'Количество родов',
    parity_options: {
      nulliparous: 'Нерожавшая',
      one_birth: 'Одни роды',
      two_three_births: '2-3 родов',
      four_plus_births: '4+ родов'
    },
    
    breastfeeding_duration_label: 'Общая продолжительность грудного вскармливания',
    breastfeeding_options: {
      never: 'Никогда',
      less_6_months: 'Менее 6 месяцев',
      six_12_months: '6-12 месяцев',
      more_12_months: 'Более 12 месяцев'
    },
    
    // Результаты и рекомендации
    risk_assessment_results: 'Результаты оценки риска',
    lifetime_risk: 'Пожизненный риск (%)',
    
    low_risk: 'Низкий риск (<5%)',
    moderate_risk: 'Умеренный риск (5-20%)',
    high_risk: 'Высокий риск (20-40%)',
    very_high_risk: 'Очень высокий риск (>40%)',
    
    // Клинические рекомендации
    screening_recommendations: 'Рекомендации по скринингу',
    
    low_risk_screening: [
      'Стандартное гинекологическое наблюдение',
      'Ежегодные осмотры',
      'Обучение симптомам рака яичников'
    ],
    
    high_risk_screening: [
      'Генетическое консультирование',
      'Ежегодное трансвагинальное УЗИ',
      'Определение СА-125',
      'Рассмотреть профилактическую овариэктомию'
    ],
    
    calculate_risk: 'Рассчитать риск рака яичников'
  },

  // Cervical Cancer Screening Calculator - Comprehensive Implementation
  cervicalCancerScreening: {
    title: 'Калькулятор скрининга рака шейки матки',
    subtitle: 'Рекомендации по скринингу рака шейки матки',
    description: 'Персонализированные рекомендации по скринингу рака шейки матки на основе возраста, анамнеза и результатов предыдущих исследований',
    
    // Основная информация
    screening_overview: 'Общая информация о скрининге',
    cervical_cancer_prevention: 'Скрининг - основа профилактики рака шейки матки',
    early_detection: 'Раннее выявление предраковых изменений',
    evidence_based: 'Рекомендации основаны на международных стандартах',
    
    // Демографические данные
    patient_demographics: 'Данные пациентки',
    
    patient_age_label: 'Возраст пациентки (лет)',
    patient_age_placeholder: 'Введите возраст пациентки',
    patient_age_help: 'Возраст определяет методы и частоту скрининга',
    patient_age_error: 'Возраст должен быть 16-80 лет',
    
    sexual_activity_age_label: 'Возраст начала половой жизни',
    sexual_activity_placeholder: 'Введите возраст начала половой активности',
    sexual_activity_help: 'Влияет на риск ВПЧ-инфекции',
    
    // Анамнез скрининга
    screening_history: 'Анамнез скрининга',
    
    previous_pap_label: 'Предыдущие цитологические исследования',
    previous_pap_options: {
      never: 'Никогда не проводились',
      normal_recent: 'Нормальные результаты (последние 3 года)',
      normal_old: 'Нормальные результаты (более 3 лет назад)',
      abnormal_treated: 'Аномальные результаты (пролечены)',
      abnormal_untreated: 'Аномальные результаты (не лечены)'
    },
    
    last_pap_date_label: 'Дата последнего цитологического исследования',
    last_pap_help: 'Когда проводилось последнее исследование',
    
    hpv_testing_label: 'ВПЧ-тестирование',
    hpv_testing_options: {
      never: 'Никогда не проводилось',
      negative: 'Отрицательный результат',
      positive_hr: 'Положительный ВПЧ высокого риска',
      positive_16_18: 'Положительный ВПЧ 16/18',
      unknown: 'Результат неизвестен'
    },
    
    // Факторы риска
    risk_factors: 'Факторы риска',
    
    smoking_status_label: 'Курение',
    smoking_options: {
      never: 'Никогда не курила',
      former: 'Курила в прошлом',
      current: 'Курит в настоящее время'
    },
    
    immunosuppression_label: 'Иммуносупрессия',
    immunosuppression_options: {
      none: 'Отсутствует',
      hiv_positive: 'ВИЧ-позитивная',
      organ_transplant: 'Трансплантация органов',
      immunosuppressive_drugs: 'Иммуносупрессивная терапия'
    },
    
    // Результаты и рекомендации
    screening_recommendations: 'Рекомендации по скринингу',
    
    age_21_29: 'Возраст 21-29 лет',
    age_21_29_recommendations: [
      'Цитология каждые 3 года',
      'ВПЧ-тестирование не рекомендовано',
      'Начинать с 21 года независимо от начала половой жизни'
    ],
    
    age_30_65: 'Возраст 30-65 лет',
    age_30_65_recommendations: [
      'Предпочтительно: ВПЧ + цитология каждые 5 лет',
      'Альтернатива: цитология каждые 3 года',
      'Только ВПЧ каждые 5 лет (при наличии)'
    ],
    
    age_over_65: 'Возраст старше 65 лет',
    age_over_65_recommendations: [
      'Прекращение скрининга при адекватном предыдущем скрининге',
      'Отсутствие аномальных результатов за последние 10 лет',
      'Последние 2-3 нормальных результата'
    ],
    
    high_risk_recommendations: 'Рекомендации для групп высокого риска',
    high_risk_screening: [
      'Более частый скрининг',
      'Ежегодная цитология при иммуносупрессии',
      'Продолжение скрининга после 65 лет',
      'Консультация гинеколога-онколога'
    ],
    
    next_screening_date: 'Дата следующего скрининга',
    screening_method: 'Рекомендуемый метод скрининга',
    
    calculate_screening: 'Рассчитать рекомендации по скринингу'
  }
};

export default obgynCalculators; 