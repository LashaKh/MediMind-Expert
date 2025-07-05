import maggicTranslations from './maggic';
import { riskAssessmentTranslations } from './risk-assessment';
import { timiRiskScoreTranslations } from './timi-risk-score';
import grace2Translations from './grace-2';
import daptTranslations from './dapt';
import preciseDaptTranslations from './precise-dapt';
import ahaPreventTranslations from './aha-prevent';

export default {
  ...riskAssessmentTranslations,
  // Calculator titles for navigation
  graceTitle: 'Калькулятор GRACE 2.0',
  hcmRiskScdTitle: 'Калькулятор риска ВСС при ГКМП',
  maggicTitle: maggicTranslations.title,
  gwtgHfTitle: 'Калькулятор GWTG-HF',
  heartFailureStagingTitle: 'Стадии сердечной недостаточности',
  shfmTitle: 'Калькулятор риска SHFM',
  stsTitle: 'Калькулятор риска STS',
  euroScoreTitle: 'Калькулятор EuroSCORE II',
  timiTitle: 'Калькулятор риска TIMI',
  preventTitle: 'Калькулятор AHA PREVENT',
  hcmAfTitle: 'Калькулятор HCM-AF',
  chadsVascTitle: 'Калькулятор CHA2DS2-VASc',
  hasBleedTitle: 'Калькулятор HAS-BLED',
  chads2Title: 'Калькулятор CHADS2',

  // Calculator references used by main calculator list
  timi_risk: {
    title: 'Калькулятор TIMI риска',
    subtitle: 'Оценка риска нестабильной стенокардии/ИМ без подъема ST'
  },
  
  grace_acs: {
    title: 'Калькулятор GRACE ACS',
    subtitle: 'Риск смертности при остром коронарном синдроме'
  },
  // Entries for Calculators.tsx card display
  // Make sure each calculator ID used in Calculators.tsx has a title and subtitle here.
  // ASCVD section moved to risk-assessment.ts
  // GRACE section moved to grace-2.ts
  grace: grace2Translations,
  dapt: daptTranslations,
  precise_dapt: preciseDaptTranslations,

  // MAGGIC Risk Calculator - Extracted to standalone file
  maggic: maggicTranslations,

  // AHA PREVENT™ Calculator - Extracted to standalone file
  prevent: ahaPreventTranslations,
  gwtgHf: {
    title: 'Калькулятор риска GWTG-HF',
    subtitle: 'Инструкции по лечению - Оценка риска при сердечной недостаточности',
    description: 'Основанный на доказательствах инструмент прогнозирования риска внутрибольничной смертности пациентов с сердечной недостаточностью.',
    alert_title: 'Оценка риска GWTG-HF',
    alert_description: 'Валидированный калькулятор риска для прогнозирования внутрибольничной смертности пациентов с сердечной недостаточностью на основе реестра Get With The Guidelines-Heart Failure. Этот инструмент помогает стратифицировать пациентов и руководить клиническими решениями во время госпитализации.',
    section_demographics: 'Демография и сопутствующие заболевания',
    section_demographics_description: 'Демографическая информация пациента и сердечно-сосудистые сопутствующие заболевания',
    vital_signs_section: 'Оценка жизненных показателей',
    vital_signs_description: 'Текущий гемодинамический статус и сердечно-сосудистые жизненные показатели',
    laboratory_section: 'Лабораторные показатели',
    laboratory_description: 'Ключевые лабораторные маркеры, влияющие на прогноз сердечной недостаточности',
    // Demographics fields
    field_age: 'Возраст',
    field_age_placeholder: 'Введите возраст в годах',
    field_race: 'Раса/Этническая принадлежность',
    field_race_select: 'Выберите расу/этническую принадлежность',
    field_race_black: 'Чернокожий или афроамериканец',
    field_race_other: 'Другая',
    field_copd: 'Хроническая обструктивная болезнь легких (ХОБЛ)',
    field_copd_description: 'История хронической обструктивной болезни легких',
    // Vital signs fields
    heart_rate_label: 'Частота сердечных сокращений',
    heart_rate_placeholder: 'Введите ЧСС',
    // Laboratory fields
    bun_label: 'Мочевина крови (BUN)',
    bun_placeholder: 'Введите значение BUN',
    sodium_label: 'Натрий сыворотки',
    sodium_placeholder: 'Введите уровень натрия',
    button_next_vital_signs: 'Далее: Жизненные показатели',
    next_laboratory: 'Далее: Лабораторные',
    back_button: 'Назад',
    calculate_button: 'Рассчитать риск',
    results_title: 'Результаты оценки риска GWTG-HF',
    gwtg_points: 'Баллы GWTG',
    risk_score_label: 'Показатель риска',
    mortality_risk_label: 'Риск смертности',
    in_hospital_mortality: 'Внутрибольничная смертность',
    risk_category_label: 'Категория риска',
    risk_stratification: 'Стратификация риска',
    // Risk factor breakdown
    risk_factor_contribution: 'Вклад факторов риска',
    age_factor: 'Возраст',
    systolic_bp_factor: 'САД',
    bun_factor: 'Мочевина',
    sodium_factor: 'Натрий',
    race_factor: 'Раса',
    copd_factor: 'ХОБЛ',
    heart_rate_factor: 'ЧСС',
    // Clinical management
    clinical_management: 'Рекомендации по клиническому ведению',
    
    // Risk interpretations
    interpretation_template: 'Шкала риска GWTG-HF: {{score}} баллов. {{interpretation}} Предполагаемая внутрибольничная смертность: {{mortality}}%.',
    interpretation_low: 'Низкий риск внутрибольничной смертности',
    interpretation_intermediate: 'Промежуточный риск внутрибольничной смертности',
    interpretation_high: 'Высокий риск внутрибольничной смертности',
    interpretation_very_high: 'Очень высокий риск внутрибольничной смертности',
    
    // Clinical recommendations - Base
    recommendation_guideline_therapy: 'Оптимизация терапии в соответствии с рекомендациями',
    recommendation_fluid_monitoring: 'Тщательный мониторинг баланса жидкости и ежедневного веса',
    recommendation_vital_assessment: 'Регулярная оценка жизненных показателей и насыщения кислородом',
    recommendation_precipitating_factors: 'Оценка провоцирующих факторов и триггеров',
    
    // Clinical recommendations - Low risk
    recommendation_standard_protocols: 'Стандартные протоколы лечения сердечной недостаточности',
    recommendation_early_discharge: 'Рассмотреть раннюю выписку с обучением по СН',
    recommendation_outpatient_followup: 'Амбулаторное кардиологическое наблюдение через 7-14 дней',
    recommendation_medication_reconciliation: 'Согласование и оптимизация медикаментов',
    
    // Clinical recommendations - Intermediate risk
    recommendation_enhanced_monitoring: 'Расширенный стационарный мониторинг с частыми оценками',
    recommendation_telemetry_consideration: 'Рассмотреть телеметрический мониторинг на аритмии',
    recommendation_nurse_navigator: 'Участие медсестры-навигатора по СН для координации ухода',
    recommendation_close_followup: 'Планирование выписки с тесным наблюдением через 3-7 дней',
    recommendation_biomarker_monitoring: 'Рассмотреть мониторинг динамики BNP/NT-proBNP',
    
    // Clinical recommendations - High risk
    recommendation_intensive_monitoring: 'Интенсивный мониторинг с непрерывной телеметрией',
    recommendation_early_consultation: 'Ранняя кардиологическая консультация и совместное ведение',
    recommendation_icu_consideration: 'Рассмотреть мониторинг в ОРИТ при клинических показаниях',
    recommendation_palliative_consult: 'Консультация паллиативной помощи для управления симптомами',
    recommendation_advance_directive: 'Обсуждение предварительных распоряжений с пациентом/семьей',
    recommendation_inotropic_support: 'Рассмотреть инотропную поддержку при необходимости',
    
    // Clinical recommendations - Very high risk
    recommendation_icu_level_care: 'Рекомендуется мониторинг и уход уровня ОРИТ',
    recommendation_immediate_hf_consult: 'Немедленная консультация по продвинутой сердечной недостаточности',
    recommendation_mechanical_support: 'Рассмотреть оценку механической поддержки кровообращения',
    recommendation_goals_of_care: 'Консультация паллиативной помощи по целям ухода',
    recommendation_family_meetings: 'Семейные встречи для планирования конца жизни',
    recommendation_hospice_consideration: 'Рассмотреть консультацию хосписа при необходимости',
    recommendation_multidisciplinary_team: 'Участие мультидисциплинарной команды',
    
    // Algorithm validation
    algorithm_title: 'Расширенный алгоритм GWTG-HF',
    algorithm_description: '✓ Валидирован AHA Get With The Guidelines • Расширенная стратификация риска с комплексными клиническими рекомендациями',
    // Risk reference ranges
    risk_reference_title: 'Справочник по оценке риска GWTG-HF',
    low_risk_range: 'Низкий риск (≤25 баллов)',
    low_mortality: '<2% риск смертности',
    intermediate_risk_range: 'Промежуточный риск (26-35 баллов)',
    intermediate_mortality: '2-4% риск смертности',
    high_risk_range: 'Высокий риск (36-45 баллов)',
    high_mortality: '4-8% риск смертности',
    very_high_risk_range: 'Очень высокий риск (>45 баллов)',
    very_high_mortality: '>8% риск смертности',
    
    // From the Creator section
    from_creator_title: 'От создателя',
    creator_name: 'Д-р Грегг К. Фонаров, MD',
    creator_title_role: 'Профессор медицины и директор Центра кардиомиопатии Ахмансона-UCLA',
    why_developed: 'Почему был разработан GWTG-HF',
    why_developed_text: 'Модели риска помогают информировать о сортировке пациентов и решениях о лечении. Оценка GWTG-HF была разработана с использованием данных почти 200 больниц США для предоставления объективной прогностической информации, которая направляет соответствующий мониторинг и лечение пациентов с сердечной недостаточностью.',
    clinical_application: 'Клиническое применение',
    clinical_application_text: 'Шкала риска GWTG-HF количественно определяет риск пациента в точке оказания помощи, облегчая сортировку пациентов и поощряя доказательную терапию у пациентов с самым высоким риском. Это помогает увеличить использование рекомендованной медицинской терапии у пациентов высокого риска при одновременном снижении использования ресурсов у пациентов низкого риска.',
    view_publications: 'Просмотреть публикации д-ра Фонарова',
    pubmed_link_text: 'PubMed',
    
    // Evidence section
    evidence_title: 'Доказательства и валидация',
    formula_title: 'Формула',
    formula_description: 'Сложение лабораторных и демографических значений с присвоенными баллами.',
    score_interpretation_title: 'Интерпретация баллов',
    score_interpretation_ranges: [
      { range: '0-33', mortality: '<1%' },
      { range: '34-50', mortality: '1-5%' },
      { range: '51-57', mortality: '5-10%' },
      { range: '58-61', mortality: '10-15%' },
      { range: '62-65', mortality: '15-20%' },
      { range: '66-70', mortality: '20-30%' },
      { range: '71-74', mortality: '30-40%' },
      { range: '75-78', mortality: '40-50%' },
      { range: '≥79', mortality: '>50%' }
    ],
    validation_cohort: 'Валидировано на 39 783 пациентах из 198 больниц в реестре GWTG-HF (2005-2007)',
    key_predictors: 'Ключевые предикторы: возраст, систолическое артериальное давление, BUN при поступлении, с дополнительным вкладом частоты сердечных сокращений, натрия сыворотки, наличия ХОБЛ и расы',
    ehealthrecords_validation: 'Дополнительно валидировано на 13 163 пациентах с использованием данных электронных медицинских записей',
    funding_note: 'GWTG-HF был частично поддержан GlaxoSmithKline',
    original_reference: 'Оригинальная ссылка',
    validation_reference: 'Исследование валидации',
    
    // Enhanced alert section
    enhanced_alert_title: 'Расширенная оценка риска GWTG-HF',
    enhanced_alert_description: 'Доказательное прогнозирование внутрибольничной смертности для пациентов с сердечной недостаточностью. Валидирует стратификацию риска и направляет решения по интенсивной терапии для оптимальных результатов пациентов.',
    enhanced_alert_badge: 'AHA Get With The Guidelines Валидировано - Расширенный анализ риска',
    
    // Progress step labels  
    progress_demographics: 'Демография',
    progress_vital_signs: 'Витальные показатели',
    progress_laboratory: 'Лаборатория',
    
    // Action buttons
    new_assessment: 'Новая оценка',
    modify_inputs: 'Изменить данные',
    
    // Footer validation text
    footer_validation_text: '✓ AHA Get With The Guidelines Валидировано • Расширенная стратификация риска с комплексными клиническими рекомендациями',
    footer_based_on: 'Основано на реестре AHA Get With The Guidelines-Heart Failure (GWTG-HF) • Расширенная оценка риска',
    footer_guidelines_validated: 'Валидировано рекомендациями'
  },
  sts: {
    title: 'Калькулятор риска взрослой кардиохирургии STS',
    subtitle: 'Оценка периоперационного риска • Доказательное хирургическое планирование',
    description: 'Оценка риска Общества торакальных хирургов для периоперационной смертности и заболеваемости при кардиохирургии.',
    alert_title: 'Национальная база данных STS - Доказательная оценка риска',
    alert_description: 'Валидированная модель прогнозирования риска на основе >4 миллионов кардиохирургических процедур из Национальной базы данных STS.',
    // Навигация по шагам
    demographics_step: 'Демография',
    procedure_step: 'Процедура',
    clinical_step: 'Клинический статус',
    comorbidities_step: 'Сопутствующие заболевания',
    // Шаг 1: Демография и антропометрия
    patient_demographics: 'Демография пациента и антропометрия',
    demographics_description: 'Основные характеристики пациента для оценки хирургического риска',
    age_label: 'Возраст',
    age_placeholder: '65',
    age_unit: 'лет',
    gender_label: 'Пол',
    gender_placeholder: 'Выберите пол...',
    gender_male: 'Мужской',
    gender_female: 'Женский',
    race_label: 'Раса/этническая принадлежность',
    race_placeholder: 'Выберите расу/этническую принадлежность...',
    race_white: 'Белая',
    race_black: 'Черная/афроамериканская',
    race_hispanic: 'Испанская/латиноамериканская',
    race_asian: 'Азиатская',
    race_other: 'Другая',
    height_label: 'Рост',
    height_placeholder: '170',
    height_unit: 'см',
    weight_label: 'Вес',
    weight_placeholder: '70',
    weight_unit: 'кг',
    // Шаг 2: Детали процедуры и срочность
    procedure_details: 'Детали процедуры и срочность',
    procedure_description: 'Тип кардиохирургической процедуры и статус срочности',
    procedure_type_label: 'Тип процедуры',
    procedure_placeholder: 'Выберите процедуру...',
    cabg_only: 'Только АКШ',
    valve_only: 'Только клапан',
    cabg_valve: 'АКШ + клапан',
    urgency_label: 'Срочность',
    urgency_placeholder: 'Выберите срочность...',
    elective: 'Плановая',
    urgent: 'Срочная',
    emergent: 'Экстренная',
    // Оценка клапанов
    valve_assessment: 'Оценка клапанов (если применимо)',
    mitral_insufficiency_label: 'Митральная недостаточность',
    mitral_insufficiency_placeholder: 'Выберите степень...',
    tricuspid_insufficiency_label: 'Трикуспидальная недостаточность',
    tricuspid_insufficiency_placeholder: 'Выберите степень...',
    severity_none: 'Нет (0)',
    severity_mild: 'Легкая (1+)',
    severity_moderate: 'Умеренная (2+)',
    severity_moderate_severe: 'Умеренно-тяжелая (3+)',
    severity_severe: 'Тяжелая (4+)',
    aortic_stenosis_label: 'Аортальный стеноз',
    mitral_stenosis_label: 'Митральный стеноз',
    previous_cardiac_surgery_label: 'Предыдущая кардиохирургия',
    // Шаг 3: Клинический статус и лабораторные данные
    clinical_status: 'Клинический статус и лабораторные показатели',
    clinical_description: 'Функция сердца и ключевые лабораторные параметры',
    ejection_fraction_label: 'Фракция выброса левого желудочка',
    ejection_fraction_placeholder: '55',
    ejection_fraction_unit: '%',
    nyha_class_label: 'Функциональный класс NYHA',
    nyha_class_placeholder: 'Выберите класс NYHA...',
    nyha_class_1: 'Класс I - Без ограничений',
    nyha_class_2: 'Класс II - Легкие ограничения',
    nyha_class_3: 'Класс III - Выраженные ограничения',
    nyha_class_4: 'Класс IV - Тяжелые ограничения',
    creatinine_label: 'Креатинин сыворотки',
    creatinine_placeholder: '1.0',
    creatinine_unit: 'мг/дл',
    hematocrit_label: 'Гематокрит',
    hematocrit_placeholder: '40',
    hematocrit_unit: '%',
    cardiogenic_shock_label: 'Кардиогенный шок',
    dialysis_label: 'Диализ',
    // Шаг 4: Сопутствующие заболевания
    comorbidities_title: 'Сопутствующие заболевания и факторы риска',
    comorbidities_description: 'Дополнительные медицинские состояния, влияющие на хирургический риск',
    diabetes_label: 'Сахарный диабет',
    hypertension_label: 'Артериальная гипертензия',
    immunosuppression_label: 'Иммуносупрессия',
    pvd_label: 'Заболевание периферических сосудов',
    cerebrovascular_disease_label: 'Цереброваскулярное заболевание',
    chronic_lung_disease_label: 'Хроническое заболевание легких',
    // Кнопки навигации
    next_procedure: 'Далее: Детали процедуры',
    next_clinical: 'Далее: Клинический статус',
    next_comorbidities: 'Далее: Сопутствующие заболевания',
    back_button: 'Назад',
    calculate_button: 'Рассчитать риск STS',
    reset_button: 'Сбросить калькулятор',
    // Раздел результатов
    results_title: 'Результаты оценки риска STS',
    risk_analysis: 'Комплексный анализ риска',
    predicted_outcomes: 'Прогнозируемые исходы',
    mortality_risk: 'Операционная смертность',
    morbidity_combined: 'Основная заболеваемость',
    stroke_risk: 'Риск инсульта',
    renal_failure_risk: 'Риск почечной недостаточности',
    reoperation_risk: 'Риск повторной операции',
    prolonged_ventilation: 'Длительная ИВЛ',
    sternal_infection: 'Глубокая инфекция грудины',
    // Категории риска
    risk_category: 'Категория риска',
    low_risk: 'Низкий риск',
    intermediate_risk: 'Промежуточный риск',
    high_risk: 'Высокий риск',
    very_high_risk: 'Очень высокий риск',
    // Примечания раздела оповещений
    comorbidity_impact_note: 'Сопутствующие заболевания значительно влияют на прогнозирование хирургического риска',
    validation_note: 'Модели валидированы на более чем 4 миллионах кардиохирургических процедур',
    risk_management_note: 'Категории риска определяют решения по периоперационному ведению',
    // Основные ключи опций для калькулятора STS
    male: 'Мужской',
    female: 'Женский',
    white: 'Белая',
    black: 'Черная/афроамериканская',
    hispanic: 'Испанская/латиноамериканская',
    asian: 'Азиатская',
    other: 'Другая'
  },

  // Atrial Fibrillation section moved to risk-assessment.ts

  timi: timiRiskScoreTranslations,



  heartFailureStaging: {
    title: 'Стадирование сердечной недостаточности',
    subtitle: 'Стадии сердечной недостаточности ACC/AHA A-D • Оценка риска и лечение',
    
    // New fields for component
    main_title: 'Калькулятор стадирования сердечной недостаточности',
    main_subtitle: 'Современная система классификации ACC/AHA для точного стадирования сердечной недостаточности с комплексным клиническим руководством',
    calculate_stage: 'Определить стадию сердечной недостаточности',
    analyzing_stage: 'Анализ стадии сердечной недостаточности...',
    
    // Stage A checkbox fields
    stage_a_risk_factors_label: 'Пациент с гипертонией, сердечно-сосудистыми заболеваниями, диабетом или ожирением в анамнезе',
    stage_a_risk_factors_desc: 'Распространенные факторы риска сердечно-сосудистых заболеваний, предрасполагающие к развитию сердечной недостаточности',
    stage_a_cardiotoxins_label: 'Пациент использует кардиотоксические препараты',
    stage_a_cardiotoxins_desc: 'Химиотерапевтические препараты или лучевая терапия с известными кардиотоксическими эффектами',
    stage_a_genetic_label: 'Пациент с генетическим вариантом кардиомиопатии или семейным анамнезом кардиомиопатии',
    stage_a_genetic_desc: 'Наследственная предрасположенность к сердечной недостаточности и кардиомиопатии',
    
    // Stage B checkbox fields
    stage_b_structural_label: 'Пациент со структурными заболеваниями сердца',
    stage_b_structural_desc: 'Сниженная ФВ ЛЖ, нарушения сократимости стенок, гипертрофия ЛЖ или значительные клапанные заболевания',
    stage_b_filling_label: 'Пациент с признаками повышенного давления наполнения',
    stage_b_filling_desc: 'Инвазивные гемодинамические измерения или неинвазивные данные визуализации о повышенном давлении',
    stage_b_biomarkers_label: 'Пациент с повышенными уровнями натрийуретических пептидов или стойко повышенным тропонином',
    stage_b_biomarkers_desc: 'Повышенные BNP/NT-proBNP или стойкое повышение тропонина при отсутствии конкурирующих диагнозов',
    
    // Stage C checkbox field
    stage_c_symptoms_label: 'Пациент с текущими или предшествующими признаками/симптомами сердечной недостаточности',
    stage_c_symptoms_desc: 'Одышка, диспноэ при нагрузке, утомляемость, снижение переносимости физических нагрузок или задержка жидкости',
    
    // Stage D checkbox field
    stage_d_advanced_label: 'Пациент с выраженными симптомами сердечной недостаточности, которые мешают повседневной жизни и с рецидивирующими госпитализациями, несмотря на попытки оптимизации медикаментозной терапии, основанной на рекомендациях',
    stage_d_advanced_desc: 'Продвинутая сердечная недостаточность, требующая специализированного лечения, механической поддержки или оценки для трансплантации',
    
    // Result descriptions
    stage_a_result_desc: 'Высокий риск развития сердечной недостаточности, но без структурных заболеваний сердца или симптомов',
    stage_a_result_desc_low: 'Низкий риск развития сердечной недостаточности с акцентом на первичную профилактику',
    stage_b_result_desc: 'Структурные заболевания сердца без признаков или симптомов сердечной недостаточности, требующие профилактической терапии',
    stage_c_result_desc: 'Симптоматическая сердечная недостаточность со структурными заболеваниями сердца, требующая медикаментозной терапии, основанной на рекомендациях',
    stage_d_result_desc: 'Продвинутая сердечная недостаточность с рефрактерными симптомами, несмотря на медикаментозную терапию, основанную на рекомендациях, требующая специализированных вмешательств',
    
    // Stage A recommendations
    stage_a_rec_1: 'Оптимальное лечение гипертонии согласно действующим рекомендациям',
    stage_a_rec_2: 'Комплексное лечение диабета с целевым HbA1c <7%',
    stage_a_rec_3: 'Основанное на доказательствах лечение липидов и статинотерапия',
    stage_a_rec_4: 'Консультирование по отказу от курения и программы поддержки',
    stage_a_rec_5: 'Регулярные аэробные упражнения и контроль веса',
    stage_a_rec_6: 'Умеренное потребление алкоголя и ограничение натрия в рационе',
    stage_a_rec_low_1: 'Поддержание здорового образа жизни с регулярной физической активностью',
    stage_a_rec_low_2: 'Регулярное обследование и мониторинг сердечно-сосудистого здоровья',
    stage_a_rec_low_3: 'Мониторинг и контроль артериального давления',
    stage_a_rec_low_4: 'Здоровое питание с акцентом на фрукты, овощи и цельные зерна',
    
    // Stage B recommendations
    stage_b_rec_1: 'Терапия ингибиторами АПФ или БРА для защиты сердца',
    stage_b_rec_2: 'Терапия бета-блокаторами при предшествующем ИМ или сниженной фракции выброса',
    stage_b_rec_3: 'Лечение основных сердечно-сосудистых заболеваний',
    stage_b_rec_4: 'Комплексная программа модификации факторов риска',
    stage_b_rec_5: 'Регулярный эхокардиографический мониторинг прогрессирования',
    stage_b_rec_6: 'Наблюдение за симптомами и обучение пациентов',
    
    // Stage C recommendations
    stage_c_rec_1: 'Комплексная оптимизация медикаментозной терапии, основанной на рекомендациях',
    stage_c_rec_2: 'Терапия ингибиторами АПФ/БРА/АРНИ в максимально переносимой дозе',
    stage_c_rec_3: 'Инициация и титрование терапии бета-блокаторами, основанной на доказательствах',
    stage_c_rec_4: 'Диуретики для оптимального контроля объема и симптомов',
    stage_c_rec_5: 'Оценка устройственной терапии (ИКД/СРТ) согласно действующим рекомендациям',
    stage_c_rec_6: 'Регулярный мониторинг и оптимизация медикаментов',
    
    // Stage D recommendations
    stage_d_rec_1: 'Продвинутые терапии сердечной недостаточности и координация специализированного лечения',
    stage_d_rec_2: 'Оценка механической поддержки кровообращения с консультацией кардиологической команды',
    stage_d_rec_3: 'Оценка трансплантации сердца в квалифицированном центре',
    stage_d_rec_4: 'Консультация паллиативной помощи для лечения симптомов',
    stage_d_rec_5: 'Направление в специализированный центр сердечной недостаточности для комплексного лечения',
    stage_d_rec_6: 'Рассмотрение клинических исследований для экспериментальных терапий',
    
    // Stage A next steps
    stage_a_next_1: 'Оптимизация первичной помощи с акцентом на сердечно-сосудистый риск',
    stage_a_next_2: 'Комплексная программа модификации факторов риска',
    stage_a_next_3: 'Обучение пациентов по сердечно-сосудистому здоровью',
    stage_a_next_4: 'Регулярный мониторинг с ежегодными оценками',
    stage_a_next_5: 'Базовая эхокардиограмма при наличии множественных факторов высокого риска',
    stage_a_next_low_1: 'Продолжение рутинной профилактической помощи',
    stage_a_next_low_2: 'Ежегодное поддержание здоровья и обследование',
    stage_a_next_low_3: 'Консультирование и обучение по образу жизни',
    stage_a_next_low_4: 'Регулярное наблюдение у врача первичного звена',
    
    // Stage B next steps
    stage_b_next_1: 'Кардиологическая оценка для лечения структурных заболеваний сердца',
    stage_b_next_2: 'Ежегодный или полугодовой эхокардиографический мониторинг',
    stage_b_next_3: 'Инициация и титрование оптимальной медикаментозной терапии',
    stage_b_next_4: 'Обучение пациентов распознаванию симптомов сердечной недостаточности',
    stage_b_next_5: 'Агрессивное лечение факторов риска и модификация образа жизни',
    
    // Stage C next steps
    stage_c_next_1: 'Направление к кардиологу для специализированного лечения сердечной недостаточности',
    stage_c_next_2: 'Комплексная эхокардиографическая оценка и мониторинг',
    stage_c_next_3: 'Лабораторный мониторинг и коррекция медикаментов',
    stage_c_next_4: 'Обучение пациентов и тренинг по самопомощи',
    stage_c_next_5: 'Рассмотрение устройственной терапии и консультация электрофизиолога',
    
    // Stage D next steps
    stage_d_next_1: 'Немедленная консультация специалиста по продвинутой сердечной недостаточности',
    stage_d_next_2: 'Комплексная гемодинамическая и функциональная оценка',
    stage_d_next_3: 'Оценка мультидисциплинарной кардиологической команды',
    stage_d_next_4: 'Планирование окончания жизни и обсуждение предварительных директив',
    
    // Result card section
    heart_failure_stage: 'Стадия сердечной недостаточности',
    clinical_recommendations: 'Клинические рекомендации',
    next_steps: 'Следующие шаги',

    // Results nested structure for stages
    results: {
      stageA: {
        title: 'Стадия A - В группе риска',
        description: 'Высокий риск развития сердечной недостаточности, но без структурных заболеваний сердца или симптомов',
        recommendations: [
          'Оптимальное лечение гипертонии согласно действующим рекомендациям',
          'Комплексное лечение диабета с целевым HbA1c <7%',
          'Основанное на доказательствах лечение липидов и статинотерапия',
          'Консультирование по отказу от курения и программы поддержки',
          'Регулярные аэробные упражнения и контроль веса',
          'Умеренное потребление алкоголя и ограничение натрия в рационе'
        ],
        nextSteps: [
          'Оптимизация первичной помощи с акцентом на сердечно-сосудистый риск',
          'Комплексная программа модификации факторов риска',
          'Обучение пациентов сердечно-сосудистому здоровью',
          'Регулярный мониторинг с ежегодными оценками',
          'Базовая эхокардиограмма при наличии множественных факторов высокого риска'
        ]
      },
      stageB: {
        title: 'Стадия B - Структурные заболевания',
        description: 'Структурные заболевания сердца без признаков или симптомов сердечной недостаточности, требующие профилактической терапии',
        recommendations: [
          'Терапия ингибиторами АПФ или БРА для защиты сердца',
          'Терапия бета-блокаторами при предшествующем ИМ или сниженной фракции выброса',
          'Лечение основных сердечно-сосудистых заболеваний',
          'Комплексная программа модификации факторов риска',
          'Регулярный эхокардиографический мониторинг прогрессирования',
          'Наблюдение за симптомами и обучение пациентов'
        ],
        nextSteps: [
          'Кардиологическое обследование для лечения структурных заболеваний сердца',
          'Ежегодный или полугодовой эхокардиографический мониторинг',
          'Инициация и титрование оптимальной медикаментозной терапии',
          'Обучение пациентов распознаванию симптомов сердечной недостаточности',
          'Агрессивное управление факторами риска и модификация образа жизни'
        ]
      },
      stageC: {
        title: 'Стадия C - Симптоматическая СН',
        description: 'Симптоматическая сердечная недостаточность со структурными заболеваниями сердца, требующая медикаментозной терапии, основанной на рекомендациях',
        recommendations: [
          'Комплексная оптимизация медикаментозной терапии, основанной на рекомендациях',
          'Терапия ингибиторами АПФ/БРА/АРНИ в максимально переносимой дозе',
          'Инициация и титрование терапии бета-блокаторами, основанной на доказательствах',
          'Диуретики для оптимального контроля объема и симптомов',
          'Оценка устройственной терапии (ИКД/СРТ) согласно действующим рекомендациям',
          'Регулярный мониторинг и оптимизация медикаментов'
        ],
        nextSteps: [
          'Направление к кардиологу для специализированного лечения сердечной недостаточности',
          'Комплексная эхокардиографическая оценка и мониторинг',
          'Лабораторный мониторинг и корректировка медикаментов',
          'Обучение пациентов и тренинг по самопомощи',
          'Рассмотрение устройственной терапии и консультация электрофизиолога'
        ]
      },
      stageD: {
        title: 'Стадия D - Продвинутая СН',
        description: 'Продвинутая сердечная недостаточность с рефрактерными симптомами, несмотря на медикаментозную терапию, основанную на рекомендациях, требующая специализированных вмешательств',
        recommendations: [
          'Продвинутые терапии сердечной недостаточности и координация специализированного лечения',
          'Оценка механической поддержки кровообращения с консультацией кардиологической команды',
          'Оценка трансплантации сердца в квалифицированном центре',
          'Консультация паллиативной помощи для лечения симптомов',
          'Направление в специализированный центр сердечной недостаточности для комплексного лечения',
          'Рассмотрение клинических исследований для экспериментальных терапий'
        ],
        nextSteps: [
          'Немедленная консультация специалиста по продвинутой сердечной недостаточности',
          'Комплексная гемодинамическая и функциональная оценка',
          'Мультидисциплинарная оценка кардиологической команды',
          'Планирование конца жизни и обсуждение заблаговременных распоряжений'
        ]
      }
    },
    
    // Creator section updates
    creator_insights: 'Мнения создателя',
    creator_guidance: 'Экспертное руководство от ведущих специалистов по сердечной недостаточности',
    creator_full_title: 'Медицинская школа Стэнфордского университета | Специалист по сердечной недостаточности',
    creator_description: 'Доктор Хант - известный кардиолог и профессор сердечно-сосудистой медицины в Стэнфордском университете. Она посвятила свою карьеру развитию лечения сердечной недостаточности и была инструментальна в разработке основанных на доказательствах систем стадирования, которые улучшают исходы пациентов через раннее выявление и вмешательство.',
    view_publications: 'Посмотреть публикации на PubMed',
    
    // Evidence section updates
    evidence_staging_criteria: 'Доказательства и критерии стадирования',
    evidence_subtitle: 'Рекомендации ACC/AHA 2022 по сердечной недостаточности - Полная схема стадирования',
    evidence_reference: 'Ссылка:',
    evidence_reference_text: 'Рекомендации AHA/ACC/HFSA 2022 по лечению сердечной недостаточности. Circulation. 2022;145(18):e895-e1032. Эта система классификации позволяет раннее вмешательство и стратификацию риска для предотвращения прогрессирования и улучшения исходов.',
    
    // Management recommendations section
    management_recommendations: 'Рекомендации по лечению',
    management_subtitle: 'Специфические для стадии терапевтические стратегии и клинические вмешательства',
    
    // Stage titles for management
    stage_a_management_title: 'Управление факторами риска',
    stage_b_management_title: 'Профилактика структурных заболеваний сердца',
    stage_c_management_title: 'Медикаментозная терапия, основанная на рекомендациях',
    stage_d_management_title: 'Лечение продвинутой сердечной недостаточности',
    
    // Clinical note
    clinical_note: 'Клиническая заметка:',
    clinical_note_text: 'Все рекомендации должны быть индивидуализированы на основе характеристик пациента, сопутствующих заболеваний и клинического суждения. Регулярный мониторинг и оптимизация медикаментов необходимы для оптимальных исходов на каждой стадии.',

    // Existing translations continue below...
    stage_a_title: 'Стадия A',
    stage_a_desc: 'Пациенты с высоким риском развития сердечной недостаточности, но без структурных заболеваний сердца или симптомов сердечной недостаточности.',
    stage_a_criteria: 'Критерии стадии A',
    stage_a_criteria_hypertension: 'Артериальная гипертензия',
    stage_a_criteria_atherosclerotic: 'Атеросклеротическое заболевание',
    stage_a_criteria_diabetes: 'Сахарный диабет',
    stage_a_criteria_obesity: 'Ожирение',
    stage_a_criteria_metabolic: 'Метаболический синдром',
    stage_a_criteria_cardiotoxins: 'Использование кардиотоксинов',
    stage_a_criteria_family_history: 'Семейный анамнез кардиомиопатии',
    stage_a_criteria_genetic: 'Генетические варианты, связанные с кардиомиопатией',
    stage_a_treatment_title: 'Лечение стадии A',
    stage_a_treatment_hypertension: 'Лечение артериальной гипертензии',
    stage_a_treatment_lipids: 'Лечение липидных нарушений',
    stage_a_treatment_diabetes: 'Лечение сахарного диабета',
    stage_a_treatment_lifestyle: 'Модификация образа жизни',
    stage_a_treatment_cardiotoxins: 'Избегать кардиотоксинов',
    stage_a_treatment_ace: 'Ингибиторы АПФ/БРА при показаниях',
    
    stage_b_title: 'Стадия B',
    stage_b_desc: 'Пациенты, у которых развилось структурное заболевание сердца, но никогда не было признаков или симптомов сердечной недостаточности.',
    stage_b_criteria: 'Критерии стадии B',
    stage_b_criteria_lvh: 'Гипертрофия левого желудочка',
    stage_b_criteria_reduced_ef: 'Сниженная фракция выброса',
    stage_b_criteria_regional: 'Региональные нарушения сократимости стенок',
    stage_b_criteria_valvular: 'Клапанные заболевания',
    stage_b_criteria_mi: 'Инфаркт миокарда в анамнезе',
    stage_b_criteria_elevated_natriuretic: 'Повышенные натрийуретические пептиды',
    stage_b_criteria_elevated_troponin: 'Повышенный тропонин',
    stage_b_treatment_title: 'Лечение стадии B',
    stage_b_treatment_all_stage_a: 'Все меры для стадии A',
    stage_b_treatment_ace: 'Ингибиторы АПФ/БРА',
    stage_b_treatment_beta_blocker: 'Бета-блокаторы при ИМ или сниженной ФВ',
    stage_b_treatment_statins: 'Статины при ИБС',
    stage_b_treatment_icd: 'ИКД при ишемической кардиомиопатии',
    stage_b_treatment_revascularization: 'Реваскуляризация при показаниях',
    
    stage_c_title: 'Стадия C',
    stage_c_desc: 'Пациенты с известным структурным заболеванием сердца и текущими или предшествующими симптомами сердечной недостаточности.',
    stage_c_criteria: 'Критерии стадии C',
    stage_c_criteria_known_structural: 'Известное структурное заболевание сердца',
    stage_c_criteria_shortness_breath: 'Одышка',
    stage_c_criteria_fatigue: 'Утомляемость',
    stage_c_criteria_reduced_exercise: 'Снижение переносимости физических нагрузок',
    stage_c_treatment_title: 'Лечение стадии C',
    stage_c_treatment_all_stage_a_b: 'Все меры для стадий A и B',
    stage_c_treatment_acei_arb: 'Ингибиторы АПФ/БРА/АРНИ',
    stage_c_treatment_beta_blocker: 'Бета-блокаторы',
    stage_c_treatment_aldosterone: 'Антагонисты альдостерона',
    stage_c_treatment_diuretics: 'Диуретики для контроля объема',
    stage_c_treatment_device_therapy: 'Устройственная терапия (ИКД/СРТ)',
    stage_c_treatment_hydralazine: 'Гидралазин/изосорбид динитрат',
    stage_c_treatment_ivabradine: 'Ивабрадин',
    stage_c_treatment_vericiguat: 'Верицигуат',
    stage_c_treatment_omecamtiv: 'Омекамтив мекарбил',
    
    stage_d_title: 'Стадия D',
    stage_d_desc: 'Пациенты с рефрактерной сердечной недостаточностью, требующие специализированных вмешательств.',
    stage_d_criteria: 'Критерии стадии D',
    stage_d_criteria_marked_symptoms: 'Выраженные симптомы в покое',
    stage_d_criteria_recurrent_hospitalizations: 'Рецидивирующие госпитализации',
    stage_d_criteria_inability_exercise: 'Неспособность к физическим нагрузкам',
    stage_d_criteria_inotropic_dependence: 'Зависимость от инотропных препаратов',
    stage_d_treatment_title: 'Лечение стадии D',
    stage_d_treatment_all_stage_c: 'Все меры для стадии C',
    stage_d_treatment_heart_transplant: 'Трансплантация сердца',
    stage_d_treatment_mechanical_support: 'Механическая поддержка кровообращения',
    stage_d_treatment_continuous_inotropes: 'Постоянные инотропные препараты',
    stage_d_treatment_palliative_care: 'Паллиативная помощь',
    stage_d_treatment_experimental: 'Экспериментальная терапия',
    
    // Assessment section
    assessment_title: 'Оценка',
    assessment_desc: 'Пожалуйста, выберите все критерии, которые применимы к пациенту:',
    stage_a_assessment_title: 'Оценка стадии A',
    stage_b_assessment_title: 'Оценка стадии B',
    stage_c_assessment_title: 'Оценка стадии C',
    stage_d_assessment_title: 'Оценка стадии D',
    
    // Calculation button
    calculate_button: 'Рассчитать стадию',
    
    // Results section
    results_title: 'Результаты',
    diagnosed_stage: 'Диагностированная стадия',
    stage_classification: 'Классификация стадии',
    
    // Recommendations section
    recommendations_title: 'Рекомендации',
    treatment_recommendations: 'Рекомендации по лечению',
    next_steps_title: 'Следующие шаги',
    
    // Creator section
    creator_title: 'Dr. Sharon Hunt',
    creator_subtitle: 'Кардиолог-специалист',
    creator_bio: 'Доктор Хант - известный кардиолог и профессор сердечно-сосудистой медицины в Стэнфордском университете. Она внесла значительный вклад в развитие лечения сердечной недостаточности и трансплантации сердца.',
    
    // Evidence section
    evidence_title: 'Доказательства',
    evidence_description: 'Эта система стадирования основана на рекомендациях ACC/AHA 2022 года по лечению сердечной недостаточности.',
    
    // Management section
    management_title: 'ЛЕЧЕНИЕ',
    management_summary: 'Ниже приведена сводка утверждений рекомендаций класса I. Этот список сосредоточен на целенаправленной медикаментозной терапии (GDMT) и не содержит всех утверждений руководства. Обратитесь к полному тексту руководства для получения дополнительных деталей и вариантов лечения.',
    
    // Management Stage A
    management_stage_a_title: 'Стадия A: Пациенты с высоким риском сердечной недостаточности, но без структурных заболеваний сердца или симптомов сердечной недостаточности.',
    management_stage_a_assessment: 'Оценка стадии A',
    management_stage_a_assessment_hypertension: 'Артериальная гипертензия',
    management_stage_a_assessment_atherosclerotic: 'Атеросклеротическое заболевание',
    management_stage_a_assessment_diabetes: 'Сахарный диабет',
    management_stage_a_assessment_obesity: 'Ожирение',
    management_stage_a_assessment_metabolic: 'Метаболический синдром',
    management_stage_a_assessment_cardiotoxins: 'Использование кардиотоксинов',
    management_stage_a_assessment_family_history: 'Семейный анамнез кардиомиопатии',
    management_stage_a_assessment_genetic: 'Генетические варианты, связанные с кардиомиопатией',
    
    // Management Stage B
    management_stage_b_title: 'Стадия B: Пациенты, у которых развилось структурное заболевание сердца, но никогда не было признаков или симптомов сердечной недостаточности.',
    management_stage_b_assessment: 'Оценка стадии B',
    
    // Management Stage C
    management_stage_c_title: 'Стадия C: Пациенты с известным структурным заболеванием сердца и текущими или предшествующими симптомами сердечной недостаточности.',
    management_stage_c_assessment: 'Оценка стадии C',
    
    // Management Stage D
    management_stage_d_title: 'Стадия D: Пациенты с продвинутым структурным заболеванием сердца и выраженными симптомами сердечной недостаточности в покое, несмотря на максимальную медикаментозную терапию и требующие специализированных вмешательств.',
    management_stage_d_assessment: 'Оценка стадии D'
  }
};
