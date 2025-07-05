export default {
  // Calculator titles for navigation
  graceTitle: 'Калькулятор GRACE 2.0',
  hcmRiskScdTitle: 'Калькулятор риска ВСС при ГКМП',
  maggicTitle: 'Калькулятор MAGGIC',
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
  ascvd: {
    title: 'Калькулятор риска АССЗ',
    subtitle: 'Оценка 10-летнего риска атеросклеротических сердечно-сосудистых заболеваний',
    description: 'Объединенные когортные уравнения ACC/AHA для расчета 10-летнего риска первого крупного события АССЗ (ИМ, смерть от ИБС или инсульт).',
    calculate_button: "Рассчитать риск АССЗ",
    risk_category: "Категория риска",
    recommendations: "Клинические рекомендации",
    low_risk: "Низкий риск (<5%)",
    high_risk: "Высокий риск (≥20%)",
    intermediate_risk: "Промежуточный риск (5-20%)",
    
    age_label: 'Возраст (лет)',
    age_placeholder: '20-79',
    sex_label: 'Пол',
    sex_placeholder: 'Выберите пол...',
    sex_male: 'Мужской',
    sex_female: 'Женский',
    race_label: 'Раса/Этническая принадлежность',
    race_placeholder: 'Выберите расу...',
    race_white: 'Белая',
    race_african_american: 'Афроамериканская',
    race_other: 'Другая',
    total_cholesterol_label: 'Общий холестерин (мг/дл)',
    total_cholesterol_placeholder: '130-320',
    hdl_cholesterol_label: 'Холестерин ЛПВП (мг/дл)',
    hdl_cholesterol_placeholder: '20-100',
    systolic_bp_label: 'Систолическое АД (мм рт.ст.)',
    systolic_bp_placeholder: '90-200',
    on_htn_meds_label: 'В настоящее время принимает препараты от АД',
    diabetes_label: 'Сахарный диабет',
    smoker_label: 'Курит в настоящее время',
    validation_age: 'Возраст должен быть 20-79 лет для расчета риска АССЗ',
    validation_sex: 'Пол обязателен',
    validation_race: 'Раса необходима для точного расчета риска',
    validation_total_cholesterol: 'Общий холестерин должен быть от 130-320 мг/дл',
    validation_hdl_cholesterol: 'Холестерин ЛПВП должен быть от 20-100 мг/дл',
    validation_systolic_bp: 'Систолическое АД должно быть от 90-200 мм рт.ст.',
    ten_year_risk: '10-летний риск АССЗ',
    lifetime_risk: 'Пожизненный риск',
    statin_benefit: 'Польза статиновой терапии',
    bp_control_benefit: 'Польза контроля АД',
    smoking_cessation_benefit: 'Польза отказа от курения',
    aspirin_benefit: 'Польза аспириновой терапии',
    demographics_section: "Демография",
    lab_values_section: "Лабораторные показатели",
    risk_factors_section: "Факторы риска",
    evidence_title: "Доказательная база",
    evidence_description: "Этот калькулятор основан на рекомендациях ACC/AHA 2013 года по оценке сердечно-сосудистого риска и объединенных когортных уравнениях.",
    evidence_link_text: "Просмотреть оригинальную научную публикацию",
    about_creator_title: "О создателе",
    creator_name: "Д-р Дэвид К. Гофф младший, MD, PhD",
    creator_bio: "Дэвид К. Гофф младший, MD, PhD, является профессором эпидемиологии в Университете Колорадо и деканом Школы общественного здравоохранения Колорадо. Он является бывшим лауреатом Премии государственной политики от Национального форума по профилактике болезней сердца и инсульта, и в настоящее время является временным председателем комитета по аккредитации и сертификации ASPPH. Его исследовательские интересы включают профилактику и понимание болезней сердца и инсульта.",
    // Раздел детального анализа
    lifetime_risk_title: "Пожизненный риск",
    lifetime_risk_description: "Расчетный пожизненный сердечно-сосудистый риск для пациентов в возрасте 20-59 лет",
    risk_classification_title: "Классификация риска",
    risk_classification_low: "Риск < 5% - Фокус на модификации образа жизни",
    risk_classification_borderline: "Риск 5-7.4% - Рассмотреть факторы, повышающие риск",
    risk_classification_intermediate: "Риск 7.5-19.9% - Статиновая терапия целесообразна",
    risk_classification_high: "Риск ≥ 20% - Рекомендована высокоинтенсивная статиновая терапия",
    therapy_reduction_title: "Предполагаемое снижение риска при терапии",
    statin_therapy: "Статиновая терапия",
    bp_control: "Контроль АД",
    smoking_cessation: "Отказ от курения",
    aspirin_therapy: "Аспирин (при необходимости)",
    // Сообщения интерпретации
    interpretation_low: "Низкий сердечно-сосудистый риск. Сосредоточьтесь на модификации образа жизни и рутинной профилактической помощи.",
    interpretation_borderline: "Пограничный риск. Рассмотрите факторы, повышающие риск, и совместное принятие решений для профилактической терапии.",
    interpretation_intermediate: "Промежуточный риск. Статиновая терапия средней интенсивности целесообразна наряду с модификацией образа жизни.",
    interpretation_high: "Высокий сердечно-сосудистый риск. Рекомендуется высокоинтенсивная статиновая терапия, если нет противопоказаний.",
    // Сообщение о валидации
    calibration_applied: "Применена калибровка",
    // Текст нижнего колонтитула
    footer_guidelines: "Основано на рекомендациях ACC/AHA 2019 по первичной профилактике и объединенных когортных уравнениях",
    footer_validated: "100% валидировано"
  },
  grace: {
    title: "Калькулятор риска GRACE 2.0",
    subtitle: "Оценка риска при остром коронарном синдроме",
    description: "Глобальный регистр острых коронарных событий - стратификация риска для пациентов с NSTEMI/НС и STEMI.",
    calculate_button: "Рассчитать шкалу GRACE",
    low_risk: "Низкий риск (<109)",
    high_risk: "Высокий риск (>140)",
    intermediate_risk: "Промежуточный риск (109-140)",
    // Patient demographics
    age_label: "Возраст (лет)",
    age_placeholder: "Введите возраст пациента",
    heart_rate_label: "ЧСС (уд/мин)",
    heart_rate_placeholder: "Введите частоту сердечных сокращений",
    systolic_bp_label: "Систолическое АД (мм рт.ст.)",
    systolic_bp_placeholder: "Введите систолическое давление",
    creatinine_label: "Креатинин сыворотки (мг/дл)",
    creatinine_placeholder: "Введите уровень креатинина",
    // Clinical characteristics
    killip_class_label: "Классификация Killip",
    killip_class_1: "Класс I (нет сердечной недостаточности)",
    killip_class_2: "Класс II (умеренная СН, хрипы)",
    killip_class_3: "Класс III (отек легких)",
    killip_class_4: "Класс IV (кардиогенный шок)",
    cardiac_arrest_label: "Остановка сердца при поступлении",
    st_deviation_label: "Отклонение сегмента ST",
    elevated_markers_label: "Повышенные кардиальные маркеры",
    // Section headers
    demographics_section: "Демография пациента",
    clinical_section: "Клиническая картина",
    labs_section: "Лабораторные показатели",
    // Results
    in_hospital_mortality: "Госпитальная летальность",
    one_year_mortality: "1-годичная летальность",
    invasive_strategy: "Инвазивная стратегия",
    recommendation: "Рекомендация по лечению",
    // Validation messages
    age_error: "Возраст должен быть от 18 до 120 лет",
    heart_rate_error: "ЧСС должна быть от 30 до 300 уд/мин",
    systolic_bp_error: "Систолическое АД должно быть от 60 до 300 мм рт.ст.",
    creatinine_error: "Креатинин должен быть от 0,3 до 15,0 мг/дл",
    
    // Strategy and recommendation texts
    strategy_conservative: "Консервативное лечение подходящее",
    strategy_early_invasive: "Ранняя инвазивная стратегия в течение 24-72 часов",
    strategy_urgent_invasive: "Неотложная инвазивная стратегия в течение 2-24 часов",
    recommendation_low: "Медикаментозная терапия, рассмотрите инвазивную при рефрактерных симптомах",
    recommendation_intermediate: "Рассмотрите раннюю катетеризацию и реваскуляризацию",
    recommendation_high: "Немедленная катетеризация и реваскуляризация при показаниях",
    
    // Results section labels
    results_title: "Результаты GRACE 2.0",
    results_description: "Расширенная оценка сердечно-сосудистого риска завершена",
    grace_score: "Балл GRACE",
    short_term_risk: "Краткосрочная оценка риска",
    long_term_prognosis: "Долгосрочный прогноз",
    risk_category_label: "Категория риска",
    clinical_risk_stratification: "Клиническая стратификация риска",
    clinical_recommendations_title: "Клинические рекомендации",
    intervention_window: "Окно вмешательства",
    
    // NEW - Missing translation keys for hardcoded text
    baseline_patient_info: "Введите базовую информацию о пациенте",
    high_risk_features: "Признаки высокого риска",
    at_presentation: "При поступлении",
    on_initial_ecg: "На исходной ЭКГ",
    troponin_ck_mb: "Тропонин/КК-МВ",
    back_to_demographics: "Назад к демографии",
    calculate_risk_score: "Рассчитать балл риска",
    review_data_assessment: "Просмотрите данные и создайте оценку GRACE 2.0",
    patient_summary: "Резюме пациента",
    demographics: "Демография",
    vital_signs: "Жизненные показатели",
    hr_label: "ЧСС:",
    sbp_label: "САД:",
    labs_clinical: "Лаб. и клин.",
    creatinine_short: "Креатинин:",
    killip_short: "Killip:",
    high_risk_features_present: "Присутствуют признаки высокого риска",
    cardiac_arrest: "Остановка сердца",
    st_deviation: "Отклонение ST",
    elevated_markers: "Повышенные маркеры",
    no_additional_risk_factors: "Дополнительные факторы риска отсутствуют",
    back_to_clinical: "Назад к клиническим",
    reset: "Сброс",
    calculating: "Вычисление...",
    continue_to_clinical_data: "Продолжить к клиническим данным",
    
    // Expert insights section
    expert_insights_title: "Экспертные мнения создателей",
    expert_insights_subtitle: "От д-ра Джоэла Гора и д-ра Кита А. А. Фокса",
    dr_joel_gore: "Д-р Джоэл Гор",
    dr_joel_gore_title: "Директор, клиника антикоагуляции, UMass Memorial",
    dr_keith_fox: "Д-р Кит А. А. Фокс",
    dr_keith_fox_title: "Профессор кардиологии, Эдинбургский университет",
    
    // Facts and figures section
    facts_figures_title: "Факты и цифры",
    facts_figures_subtitle: "Интерпретация баллов GRACE",
    grace_score_range: "Диапазон баллов GRACE",
    mortality_risk: "Риск смертности",
    risk_category_column: "Категория риска",
    
    // Evidence and validation section
    evidence_validation_title: "Доказательства и валидация",
    evidence_validation_subtitle: "Научная основа",
    database_scale: "Масштаб базы данных",
    
    // Clinical pearls section
    clinical_pearls_title: "Клинические жемчужины и подводные камни",
    
    // Score interpretation table rows
    score_0_87: "0-87",
    score_88_128: "88-128",
    score_129_149: "129-149",
    score_150_173: "150-173",
    score_174_182: "174-182",
    score_183_190: "183-190",
    score_191_199: "191-199",
    score_200_207: "200-207",
    score_208_218: "208-218",
    score_219_284: "219-284",
    score_285_plus: "285+",
    
    mortality_0_2: "0-2%",
    mortality_3_10: "3-10%",
    mortality_10_20: "10-20%",
    mortality_20_30: "20-30%",
    mortality_40: "40%",
    mortality_50: "50%",
    mortality_60: "60%",
    mortality_70: "70%",
    mortality_80: "80%",
    mortality_90: "90%",
    mortality_99: "99%",
    
    risk_low: "Низкий",
    risk_moderate: "Умеренный",
    risk_high: "Высокий",
    risk_very_high: "Очень высокий",
    
    // PubMed links
    joel_gore_publications: "Публикации д-ра Джоэла Гора",
    keith_fox_publications: "Публикации д-ра Кита А. А. Фокса",
    
    // Expert quotes and detailed content
    gore_grace_quote: "GRACE 2.0 представляет собой улучшенный и уточненный список исходов GRACE; вместо использования диапазонов баллов для расчета исходов, таких как госпитальная смертность, мы можем фактически рассчитать смертность для каждого балла. Следует использовать GRACE 2.0.",
    gore_clinical_usage: "Мы используем исход госпитальной смертности с баллами GRACE. Это помогает нам определить размещение наших пациентов с STEMI; те, у кого балл 130 или выше, идут в отделение интенсивной терапии после катетеризации, а те, у кого баллы ниже, могут пойти в наше пошаговое отделение.",
    gore_nstemi_quote: "Мы также иногда используем балл GRACE для наших пациентов с NSTEMI высокого риска, чтобы рассмотреть раннее инвазивное лечение в отличие от отложенного вмешательства.",
    fox_development_purpose: "Мы разработали балл риска GRACE ACS, потому что увидели потребность в лучшей стратификации риска для руководства лечением ACS и для помощи в решении парадокса 'Лечение-Риск'.",
    fox_clinical_pearl: "Важно учитывать не только общий риск, но и риск, который можно изменить (риск ИМ помогает в этом).",
    fox_current_research: "В настоящее время мы работаем над разработкой моделей для выявления изменяемого риска и долгосрочного риска у пациентов с ACS.",
    
    // Section labels for expert content
    on_grace_vs_grace_2: "О GRACE против GRACE 2.0:",
    clinical_usage: "Клиническое использование:",
    on_nstemi_patients: "О пациентах с NSTEMI:",
    development_purpose: "Цель разработки:",
    clinical_pearl: "Клиническая жемчужина:",
    current_research: "Текущие исследования:",
    
    // Facts and figures table content
    grace_score_range_header: "Диапазон баллов GRACE",
    mortality_risk_header: "Риск смертности",
    risk_category_header: "Категория риска",
    
    // Evidence and validation content
    database_scale_title: "Масштаб базы данных",
    database_scale_description: "GRACE (Глобальный реестр острых коронарных событий) представляет собой массивную международную базу данных ACS в 94 больницах в 14 странах, что обеспечивает отличную внешнюю валидность.",
    patient_population_title: "Популяция пациентов",
    patient_population_description: "Изучено 11,389 пациентов с ACS с доступным статусом госпитальной смертности в 98.1%. 22% госпитальных смертей произошло в течение 24 часов после поступления, что говорит о очень тяжелой когорте.",
    grace_2_improvements_title: "Улучшения GRACE 2.0",
    grace_2_improvements_description: "GRACE 2.0 оценил переменные на нелинейные ассоциации смертности, обеспечивая более точные оценки. Включает оценки смертности до 3 лет после события ACS.",
    validation_status_title: "Статус валидации",
    validation_status_description: "Валидирован на >20,000 пациентах в нескольких базах данных и чрезвычайно хорошо изучен. Руководящие принципы NICE рекомендуют балл GRACE для стратификации риска ACS.",
    
    // Clinical pearls content
    essential_clinical_insights: "Основные клинические инсайты",
    purpose_limitations_title: "Цель и ограничения",
    purpose_limitations_description: "Балл GRACE является проспективно изученной системой подсчета баллов для стратификации риска пациентов с диагностированным ACS для оценки их госпитальной и от 6 месяцев до 3 лет смертности. Как и балл TIMI, он не был разработан для оценки того, какие ангинальные симптомы пациентов вызваны ACS.",
    score_version_title: "Версия балла",
    score_version_description: "Балл GRACE был недавно улучшен (GRACE 2.0); этот калькулятор использует систему подсчета баллов GRACE 2.0, которая показала себя более точной, чем оригинальный балл.",
    clinical_validation_title: "Клиническая валидация",
    clinical_validation_description: "Этот балл был валидирован на >20,000 пациентах в нескольких базах данных и чрезвычайно хорошо изучен и поддержан. Руководящие принципы NICE рекомендуют балл GRACE для стратификации риска пациентов с ACS.",
    mini_grace_title: "Альтернатива Mini-GRACE",
    mini_grace_description: "Альтернативная версия, mini-GRACE, позволяет заменить класс Killip на использование диуретиков и/или сывороточный креатинин на историю почечной дисфункции. Однако эта платформа использует полную версию, требующую как класса Killip, так и сывороточного креатинина."
  },
  dapt: {
    title: 'Калькулятор DAPT баллов',
    subtitle: 'Продолжительность двойной антитромбоцитарной терапии • Оценка риска и пользы',
    description: "Оценка риска и пользы продленной двойной антитромбоцитарной терапии после ЧКВ.",
    // Раздел предупреждения
    therapy_management_tool: "Инструмент управления терапией",
    tool_description: "Калькулятор DAPT баллов помогает определить оптимальную продолжительность двойной антитромбоцитарной терапии после чрескожного коронарного вмешательства (ЧКВ), балансируя ишемические и геморрагические риски.",
    study_validated: "Валидирован исследованием DAPT",
    // Шаги прогресса
    patient_profile: "Профиль пациента",
    risk_assessment: "Оценка риска", 
    dapt_analysis: "Анализ DAPT",
    // Шаг 1: Демография
    demographics_section: "Демография пациента и детали процедуры",
    demographics_description: "Введите основную информацию о пациенте и детали процедуры",
    age_label: "Возраст",
    age_help: "Возраст пациента в годах (влияет на расчет риска кровотечения)",
    age_error: "Возраст должен быть между 18-120 годами",
    stent_diameter_label: "Диаметр стента",
    stent_diameter_help: "Наименьший диаметр стента, использованного во время процедуры ЧКВ",
    stent_diameter_error: "Диаметр стента должен быть между 1-10 мм",
    // Шаг 2: Факторы риска
    risk_factors_section: "Клинические факторы риска",
    risk_factors_description: "Выберите все применимые клинические факторы риска для этого пациента",
    cigarette_smoking: "Курение сигарет",
    cigarette_smoking_desc: "Текущий курильщик или бросивший в течение последнего года",
    diabetes_mellitus: "Сахарный диабет",
    diabetes_mellitus_desc: "Диабет 1 или 2 типа, требующий медикаментозного лечения",
    mi_at_presentation: "ИМ при поступлении",
    mi_at_presentation_desc: "STEMI или NSTEMI как показание для текущего ЧКВ",
    prior_pci_mi: "Предыдущие ЧКВ или ИМ",
    prior_pci_mi_desc: "Предыдущее чрескожное коронарное вмешательство или инфаркт миокарда",
    paclitaxel_stent: "Стент с паклитакселом",
    paclitaxel_stent_desc: "Использование стента с лекарственным покрытием паклитакселом",
    chf_lvef: "ХСН или ФВ ЛЖ <30%",
    chf_lvef_desc: "Застойная сердечная недостаточность или фракция выброса левого желудочка <30%",
    next_specialized_factors: "Далее: Специализированные факторы",
    // Шаг 3: Специализированные факторы
    specialized_factors_section: "Специализированные процедурные факторы",
    specialized_factors_description: "Дополнительные процедурные и анатомические соображения",
    vein_graft_pci: "ЧКВ венозного шунта",
    vein_graft_pci_desc: "ЧКВ выполнено на подкожной венозной вставке или другом шунтирующем графте",
    // Кнопка расчета
    calculate_button: "Рассчитать DAPT балл",
    // Результаты
    score_analysis: "Анализ DAPT баллов",
    score_points: "{{score}} баллов",
    ischemic_benefit: "Ишемическая польза",
    bleeding_risk: "Риск кровотечения",
    net_benefit: "Чистая клиническая польза",
    // Уровни риска
    high_risk: "Высокий",
    intermediate_risk: "Средний", 
    low_risk: "Низкий",
    // Описания рисков
    mace_reduction: "{{reduction}}% снижение MACE",
    bleeding_increase: "{{increase}}% увеличение кровотечений",
    // Категории чистой пользы
    favorable_benefit: "Благоприятная",
    uncertain_benefit: "Неопределенная",
    unfavorable_benefit: "Неблагоприятная",
    benefits_outweigh_risks: "Польза превышает риски",
    requires_individual_assessment: "Требует индивидуальной оценки",
    risks_outweigh_benefits: "Риски превышают пользу",
    assessment_required: "Требуется оценка",
    clinical_evaluation_needed: "Необходима клиническая оценка",
    // Рекомендации
    recommendation_extended_strongly: "Продленная DAPT настоятельно рекомендуется - высокая ишемическая польза с приемлемым риском кровотечения",
    recommendation_extended_may_benefit: "Продленная DAPT может принести пользу - рассмотрите индивидуальную оценку",
    recommendation_not_recommended_bleeding: "Продленная DAPT не рекомендуется из-за чрезмерного риска кровотечения",
    recommendation_individualized_assessment: "Рекомендуется индивидуальная оценка - польза и риски сбалансированы",
    recommendation_careful_consideration: "Необходимо тщательное рассмотрение - неопределенная чистая польза",
    recommendation_not_recommended: "Продленная DAPT не рекомендуется - неблагоприятное соотношение риск-польза",
    recommendation_not_recommended_limited: "Продленная DAPT не рекомендуется - ограниченная ишемическая польза",
    // Рекомендации по продолжительности
    duration_18_30_months: "Рассмотрите 18-30 месяцев DAPT с тщательным мониторингом",
    duration_18_months_monitoring: "Рассмотрите 18 месяцев с усиленным мониторингом кровотечений",
    duration_12_months_early: "Стандартные 12 месяцев, рассмотрите раннее прекращение при кровотечении",
    duration_12_18_individualized: "12-18 месяцев на основе индивидуальной оценки риска",
    duration_12_months_rationale: "Стандартные 12 месяцев, если нет веских оснований для продления",
    duration_12_months_early_consideration: "Стандартные 12 месяцев с рассмотрением раннего прекращения",
    duration_12_months_shorter: "Стандартные 12 месяцев или короче при высоком риске кровотечения",
    // Клинические соображения
    consideration_advanced_age: "Пожилой возраст (≥75 лет) значительно увеличивает риск кровотечения",
    consideration_moderate_age: "Умеренный возрастной риск кровотечения (65-74 года)",
    consideration_diabetes: "Диабет увеличивает как ишемический, так и геморрагический риск",
    consideration_mi_presentation: "Недавний ИМ увеличивает ишемический риск и пользу DAPT",
    consideration_small_vessel: "ЧКВ мелких сосудов (<3мм) увеличивает риск тромбоза стента",
    consideration_heart_failure: "Сердечная недостаточность увеличивает как ишемический, так и геморрагический риск",
    consideration_paclitaxel_stent: "Стенты с паклитакселом могут получить пользу от продленной DAPT",
    consideration_vein_graft: "ЧКВ венозного шунта имеет уникальный профиль риска, требующий индивидуального подхода",
    // Раздел рекомендаций по продолжительности
    duration_recommendation: "Рекомендация по продолжительности",
    clinical_considerations: "Клинические соображения",
    // Руководство по интерпретации
    interpretation_guide: "Руководство по интерпретации DAPT баллов",
    score_high: "Балл ≥2 (Высокая польза)",
    score_high_desc: "Вероятно получит пользу от продленной продолжительности DAPT",
    score_intermediate: "Балл 1 (Средняя польза)", 
    score_intermediate_desc: "Может получить пользу от продленной DAPT с тщательной оценкой",
    score_low: "Балл ≤0 (Низкая/Нет пользы)",
    score_low_desc: "Ограниченная польза от продленной DAPT, риск кровотечения может превышать пользу",
    // Интерпретации
    interpretation_high: "Пациент с высокой пользой (Балл: {{{score}}}) - Продленная DAPT вероятно полезна",
    interpretation_intermediate: "Пациент со средней пользой (Балл: {{{score}}}) - Рассмотрите продленную DAPT",
    interpretation_low: "Пациент с низкой пользой (Балл: {{{score}}}) - Продленная DAPT может быть вредной",
    // Усовершенствованный алгоритм
    enhanced_algorithm: "Валидация усовершенствованного алгоритма",
    algorithm_validation: "Этот калькулятор включает возраст-скорректированную оценку риска кровотечения и основанные на доказательствах рекомендации из исследования DAPT для оптимального клинического принятия решений.",
    // Кнопки действий
    new_assessment: "Новая оценка",
    modify_inputs: "Изменить входные данные",
    
    // Creator Insights Section
    creator_insights_title: "Анализ создателя",
    creator_name: "Доктор Роберт В. Йе",
    creator_bio: "Адъюнкт-профессор медицины Гарвардской медицинской школы и директор Ричарда и Сьюзан Смит Центра исследований результатов в кардиологии в Медицинском центре Бет Исраэль Диаконесс.",
    creator_insight_condensed: "Определение оптимальной продолжительности антитромбоцитарной терапии после коронарных стентов требует баланса между предотвращением сердечного приступа и риском кровотечения. Балл DAPT, разработанный на основе крупнейшего рандомизированного исследования (11,648 пациентов) в Гарвардском институте клинических исследований, помогает клиницистам выявлять пациентов, которые получают пользу от продленной терапии, по сравнению с теми, кому лучше подходит более короткая продолжительность. Этот валидированный инструмент направляет клинические решения наряду с врачебным суждением, эффективно разделяя пациентов с высоким ишемическим/низким геморрагическим риском от пациентов с противоположными профилями риска. Необходим для принятия совместных решений в рутинной практике.",
    
    // Evidence Section
    evidence_title: "Доказательства и формула",
    evidence_formula_title: "Формула балла DAPT",
    formula_description: "Сложение выбранных баллов:",
    age_scoring: "Возраст: ≥75 лет (-2 балла), 65-74 года (-1 балл), <65 лет (0 баллов)",
    risk_factors_scoring: "Факторы риска: Каждый выбранный фактор добавляет +1 балл (курение, диабет, ИМ при поступлении, предыдущие ЧКВ/ИМ, стент с паклитакселом, стент <3мм, ХСН/ФВ ЛЖ<30%, венозный шунт)",
    interpretation_note: "Балл ≥2: Высокий ишемический/низкий геморрагический риск - Рекомендуется продленная DAPT | Балл от -2 до 1: Низкий ишемический/высокий геморрагический риск - Продленная DAPT не рекомендуется",
    
    evidence_validation_title: "Валидация исследования",
    evidence_validation_description: "Разработан и валидирован с использованием данных исследования DAPT, крупнейшего рандомизированного исследования продолжительности DAPT с участием 11,648 пациентов. Балл был впоследствии валидирован в множественных независимых когортах, включая японские исследования ЧКВ и регистры реального мира, постоянно демонстрируя способность выявлять пациентов, которые получают пользу от продленной DAPT.",
    
    evidence_guidelines_title: "Клинические руководства",
    evidence_guidelines_description: "Включен в Фокусированное обновление руководства ACC/AHA 2016 года по продолжительности двойной антитромбоцитарной терапии. Балл DAPT рекомендуется как инструмент клинического решения для информирования решений о продолжительности DAPT у пациентов, которые завершили 12 месяцев DAPT без геморрагических осложнений.",
    
    references_title: "Литература",
    reference_original: "Оригинальная разработка балла DAPT (Yeh et al. JAMA 2016)",
    reference_validation: "Валидационные исследования (Piccolo et al. Ann Intern Med 2017)",
    reference_guidelines: "Руководства ACC/AHA (Levine et al. JACC 2016)"
  },
  precise_dapt: {
    title: 'Калькулятор PRECISE-DAPT',
    subtitle: 'Оценка Риска Кровотечения • Руководство по Длительности DAPT',
    description: 'Прогнозирование риска кровотечения, связанного с двойной антитромбоцитарной терапией для выбора оптимальной длительности после ЧКВ.',
    // Tool description
    bleeding_assessment_tool: 'Инструмент Оценки Риска Кровотечения',
    tool_description: 'Калькулятор PRECISE-DAPT прогнозирует риск кровотечения, связанный с двойной антитромбоцитарной терапией (DAPT) для выбора оптимальной длительности после чрескожного коронарного вмешательства. Этот валидированный инструмент балансирует безопасность кровотечения с ишемической защитой.',
    // Step navigation
    patient_labs: 'Лабораторные Пациента',
    bleeding_history: 'Анамнез Кровотечений',
    // Step 1: Demographics & Lab Values
    demographics_labs_section: 'Демографические Данные и Лабораторные Показатели Пациента',
    laboratory_description: 'Введите возраст пациента и ключевые лабораторные параметры, влияющие на риск кровотечения',
    // Form fields
    age_label: 'Возраст',
    age_error: 'Возраст должен быть от 18 до 120 лет',
    creatinine_label: 'Креатинин Сыворотки',
    creatinine_unit: 'мг/дл',
    creatinine_error: 'Креатинин должен быть от 0,5 до 15,0 мг/дл',
    hemoglobin_label: 'Гемоглобин',
    hemoglobin_unit: 'г/дл',
    hemoglobin_error: 'Гемоглобин должен быть от 5,0 до 20,0 г/дл',
    white_blood_count_label: 'Количество Лейкоцитов',
    white_blood_count_unit: '×10³/мкл',
    white_blood_count_error: 'Количество лейкоцитов должно быть от 1,0 до 50,0 ×10³/мкл',
    // Step 2: Bleeding History
    bleeding_history_section: 'Оценка Анамнеза Кровотечений',
    bleeding_history_description: 'Предыдущие кровотечения являются сильным предиктором будущего риска кровотечений',
    previous_bleed: 'Анамнез Предыдущих Кровотечений',
    previous_bleed_desc: 'История больших кровотечений, требовавших госпитализации, переливания крови или хирургического вмешательства',
    // Navigation buttons
    next_bleeding_history: 'Далее: Анамнез Кровотечений',
    calculate_button: 'Рассчитать Балл PRECISE-DAPT',
    // Results section
    bleeding_risk_analysis: 'Анализ Риска Кровотечения PRECISE-DAPT',
    score_points: '{{score}} баллов',
    // Risk categories and interpretations
    bleeding_risk: 'Риск Кровотечения',
    major_bleeding: 'Риск Больших Кровотечений',
    safe_duration: 'Безопасная Длительность',
    annual_major_bleeding: 'Годовой риск больших кровотечений',
    overall_bleeding_risk: 'Общий риск кровотечения через 12 месяцев: {{risk}}%',
    recommended_dapt_duration: 'Рекомендуемая длительность DAPT',
    // Risk levels
    low_risk: 'Низкий Риск',
    intermediate_risk: 'Промежуточный Риск',
    high_risk: 'Высокий Риск',
    // Interpretation messages
    interpretation_low: 'Низкий риск кровотечения ({{risk}}% через 12 месяцев) - Может рассматриваться продленная DAPT',
    interpretation_intermediate: 'Промежуточный риск кровотечения ({{risk}}% через 12 месяцев) - Стандартная DAPT с тщательным мониторингом',
    interpretation_high: 'Высокий риск кровотечения ({{risk}}% через 12 месяцев) - Рассмотреть сокращенную длительность DAPT',
    // Risk factors
    contributing_risk_factors: 'Способствующие Факторы Риска',
    risk_factor_advanced_age: 'Пожилой возраст (≥75 лет) - Значительно повышенный риск кровотечения',
    risk_factor_elderly_age: 'Средний возраст (65-74 года) - Умеренно повышенный риск кровотечения',
    risk_factor_severe_renal: 'Тяжелая почечная недостаточность (Креатинин ≥2,0 мг/дл) - Высокий риск кровотечения',
    risk_factor_moderate_renal: 'Умеренная почечная недостаточность (Креатинин 1,5-1,9 мг/дл) - Повышенный риск кровотечения',
    risk_factor_mild_renal: 'Легкая почечная недостаточность (Креатинин 1,2-1,4 мг/дл) - Слегка повышенный риск кровотечения',
    risk_factor_severe_anemia: 'Тяжелая анемия (Гемоглобин <10 г/дл) - Значительно повышенный риск кровотечения и осложнений',
    risk_factor_moderate_anemia: 'Умеренная анемия (Гемоглобин 10-11,9 г/дл) - Повышенный риск кровотечения',
    risk_factor_low_hemoglobin: 'Низкий гемоглобин (Гемоглобин 12-12,9 г/дл) - Слегка повышенный риск кровотечения',
    risk_factor_elevated_wbc: 'Повышенное количество лейкоцитов (>12 ×10³/мкл) - Маркер воспаления, повышенный риск кровотечения',
    risk_factor_low_wbc: 'Низкое количество лейкоцитов (<4 ×10³/мкл) - Повышенный риск кровотечения и инфекции',
    risk_factor_previous_bleeding: 'Предыдущие большие кровотечения - Сильнейший предиктор будущих кровотечений',
    // Recommendations by risk level
    recommendation_low: 'Продленная DAPT (12-30 месяцев) может обеспечить ишемическую пользу с приемлемым риском кровотечения',
    recommendation_intermediate: 'Стандартная длительность DAPT (12 месяцев) с усиленным мониторингом кровотечений и модификацией факторов риска',
    recommendation_high: 'Рассмотреть сокращенную длительность DAPT (3-6 месяцев) из-за повышенного риска кровотечения, но обеспечить адекватную ишемическую защиту',
    // Duration guidance
    duration_low: '12-30 месяцев с мониторингом',
    duration_intermediate: '12 месяцев с наблюдением',
    duration_high: '3-6 месяцев с оценкой',
    // Clinical guidance
    guidance_low: 'Низкий риск кровотечения позволяет рассмотреть продленную DAPT для пациентов с высоким ишемическим риском',
    guidance_intermediate: 'Баланс риска кровотечения и ишемического риска с индивидуализированной оценкой длительности',
    guidance_high: 'Высокий риск кровотечения требует рассмотрения более короткой длительности DAPT и модификации риска кровотечения',
    // Clinical benefit
    benefit_low: 'Благоприятный профиль безопасности кровотечения поддерживает рассмотрение продленной DAPT для ишемической пользы',
    benefit_intermediate: 'Умеренный риск кровотечения требует тщательного баланса с потребностями ишемической защиты',
    benefit_high: 'Повышенный риск кровотечения может ограничить пользу продленной DAPT, рассмотреть альтернативные антитромбоцитарные стратегии',
    // Safe duration recommendations
    safe_duration_low: '12-30 месяцев с мониторингом',
    safe_duration_intermediate: '12 месяцев с наблюдением',
    safe_duration_high: '3-6 месяцев с оценкой',
    // Clinical sections
    clinical_recommendation: 'Клиническая Рекомендация',
    clinical_benefit_analysis: 'Анализ Клинической Пользы',
    // Score interpretation guide
    score_interpretation: 'Руководство по Интерпретации Балла PRECISE-DAPT',
    score_low_range: 'Низкий Риск (<25 баллов)',
    score_low_description: 'Продленная DAPT может быть полезной с приемлемым риском кровотечения',
    score_intermediate_range: 'Промежуточный Риск (25-35 баллов)',
    score_intermediate_description: 'Рекомендуется стандартная DAPT с усиленным мониторингом',
    score_high_range: 'Высокий Риск (≥35 баллов)',
    score_high_description: 'Рассмотреть сокращенную DAPT из-за повышенного риска кровотечения',
    // Algorithm validation
    enhanced_algorithm: 'Усовершенствованный Алгоритм PRECISE-DAPT',
    algorithm_validation: '✓ Валидирован исследованием PRECISE-DAPT • Усовершенствованная оценка риска кровотечения с количественным анализом безопасности',
    based_on_precise_dapt: 'Основан на исследовании PRECISE-DAPT • Оценка риска кровотечения для руководства длительностью DAPT',
    bleeding_safety_validated: 'Безопасность Кровотечения Валидирована',
    // Action buttons
    new_assessment: 'Новая Оценка',
    modify_inputs: 'Изменить Данные'
  },
  maggic: {
    title: 'Калькулятор риска MAGGIC',
    subtitle: 'Мета-анализ глобальной группы по хронической сердечной недостаточности • Риск смертности 1-3 года',
    description: 'Основанный на доказательствах прогностический инструмент для оценки риска смертности при хронической сердечной недостаточности с использованием данных крупномасштабного мета-анализа.',
    // Alert section
    alert_title: 'Инструмент оценки риска MAGGIC',
    alert_description: 'Калькулятор риска Мета-анализ глобальной группы по хронической сердечной недостаточности (MAGGIC) предоставляет основанное на доказательствах прогнозирование смертности для пациентов с хронической сердечной недостаточностью. Этот инструмент валидирован в разнообразных популяциях пациентов и помогает руководить клиническими решениями и обсуждениями прогноза.',
    // Step labels
    demographics_step: 'Демография',
    clinical_step: 'Клиническая оценка',
    therapy_step: 'Оценка терапии',
    // Demographics section
    patient_demographics: 'Демография пациента',
    demographics_description: 'Основные демографические и клинические характеристики пациента',
    age_placeholder: 'Введите возраст в годах',
    gender_label: 'Пол',
    gender_placeholder: 'Выберите пол',
    gender_male: 'Мужской',
    gender_female: 'Женский',
    lvef_label: 'Фракция выброса левого желудочка (ФВЛЖ)',
    lvef_placeholder: 'Введите ФВЛЖ в процентах',
    nyha_class_label: 'Функциональный класс по NYHA',
    nyha_class_placeholder: 'Выберите класс NYHA',
    nyha_class_1: 'Класс I - Без ограничений',
    nyha_class_2: 'Класс II - Легкое ограничение',
    nyha_class_3: 'Класс III - Выраженное ограничение',
    nyha_class_4: 'Класс IV - Тяжелое ограничение',
    // Clinical assessment section
    clinical_assessment: 'Клиническая оценка',
    clinical_description: 'Текущие жизненные показатели, лабораторные значения и статус сопутствующих заболеваний',
    systolic_bp_label: 'Систолическое артериальное давление',
    systolic_bp_placeholder: 'Введите систолическое АД',
    bmi_label: 'Индекс массы тела (ИМТ)',
    bmi_placeholder: 'Введите ИМТ',
    creatinine_label: 'Креатинин сыворотки',
    creatinine_placeholder: 'Введите уровень креатинина',
    comorbidities_section: 'Сопутствующие заболевания',
    copd_label: 'Хроническая обструктивная болезнь легких (ХОБЛ)',
    first_diagnosis_label: 'Первый диагноз СН (в течение 18 месяцев)',
    // Therapy assessment section
    therapy_assessment: 'Оценка текущей терапии',
    therapy_description: 'Статус текущей медикаментозной терапии согласно руководящим принципам',
    gdmt_section: 'Медикаментозная терапия согласно рекомендациям',
    beta_blocker_label: 'Терапия бета-блокаторами',
    ace_inhibitor_label: 'Терапия ингибиторами АПФ или БРА',
    // Button labels
    next_clinical_assessment: 'Далее: Клиническая оценка',
    next_therapy_assessment: 'Далее: Оценка терапии',
    calculate_maggic_risk: 'Рассчитать риск MAGGIC',
    new_assessment_button: 'Новая оценка',
    validation_age: 'Пожалуйста, введите действительный возраст от 18 до 100 лет',
    validation_gender: 'Пожалуйста, выберите пол',
    validation_nyha_class: 'Пожалуйста, выберите функциональный класс NYHA',
    validation_lvef: 'Пожалуйста, введите действительную ФВЛЖ от 10% до 80%',
    validation_systolic_bp: 'Пожалуйста, введите действительное систолическое АД от 70 до 250 мм рт.ст.',
    validation_bmi: 'Пожалуйста, введите действительный ИМТ от 15 до 50 кг/м²',
    validation_creatinine: 'Пожалуйста, введите действительный креатинин от 0,5 до 10,0 мг/дл',
    results_title: 'Результаты оценки риска MAGGIC',
    one_year_mortality: 'Риск смертности в течение 1 года',
    three_year_mortality: 'Риск смертности в течение 3 лет',
    risk_stratification_title: 'Категории стратификации риска',
    low_risk_category: 'Низкий риск (<10% 1 год)',
    intermediate_risk_category: 'Промежуточный риск (10-20% 1 год)',
    high_risk_category: 'Высокий риск (20-35% 1 год)',
    very_high_risk_category: 'Очень высокий риск (>35% 1 год)',
    mortality_rates_note: '* Показатели смертности основаны на мета-анализе консорциума MAGGIC >39,000 пациентов',
    recommendations_title: 'Рекомендации по клиническому ведению',
    algorithm_validation_title: 'Валидация алгоритма MAGGIC',
    algorithm_validation_text: '✓ Валидирован на >39,000 пациентов с СН • Получен из мета-анализа • Комплексная оценка риска',
    
    // About Creator section
    about_creator_title: 'О создателе',
    creator_name: 'Д-р Стюарт Покок',
    creator_description: 'Стюарт Покок, PhD, является профессором медицинской статистики в Лондонской школе гигиены и тропической медицины. Д-р Покок является директором нескольких исследовательских групп, изучающих эпидемиологию и фармакоэпидемиологию. Он опубликовал множество статей по крупным клиническим исследованиям, которые он проводил, особенно в области сердечно-сосудистых заболеваний.',
    view_publications: 'Посмотреть публикации д-ра Стюарта Покока',
    pubmed_link_text: 'PubMed',
    
    // Evidence section
    evidence_title: 'Доказательства',
    formula_title: 'Формула',
    formula_description: 'Сложение выбранных баллов.',
    facts_figures_title: 'Факты и цифры',
    
    // Risk factor tables
    risk_factor_title: 'Фактор риска',
    points_title: 'Баллы',
    
    // Basic risk factors
    male_factor: 'Мужской пол',
    smoker_factor: 'Курящий',
    diabetic_factor: 'Диабетик',
    copd_factor: 'ХОБЛ',
    heart_failure_18_months: 'Первый диагноз СН ≥18 месяцев назад',
    not_on_beta_blocker: 'Не принимает бета-блокатор',
    not_on_ace_arb: 'Не принимает АПФ-и/БРА',
    
    // Ejection fraction ranges
    ejection_fraction_title: 'Фракция выброса (ФВ)',
    ef_less_than_20: '<20',
    ef_20_24: '20-24',
    ef_25_29: '25-29',
    ef_30_34: '30-34',
    ef_35_39: '35-39',
    ef_40_plus: '≥40',
    
    // NYHA class
    nyha_class_title: 'Класс NYHA',
    nyha_1: '1',
    nyha_2: '2',
    nyha_3: '3',
    nyha_4: '4',
    
    // Creatinine ranges
    creatinine_title: 'Креатинин*',
    creatinine_less_90: '<90',
    creatinine_90_109: '90-109',
    creatinine_110_129: '110-129',
    creatinine_130_149: '130-149',
    creatinine_150_169: '150-169',
    creatinine_170_209: '170-209',
    creatinine_210_249: '210-249',
    creatinine_250_plus: '≥250',
    
    // BMI ranges
    bmi_title: 'ИМТ',
    bmi_less_15: '<15',
    bmi_15_19: '15-19',
    bmi_20_24: '20-24',
    bmi_25_29: '25-29',
    bmi_30_plus: '≥30',
    
    // Systolic BP extra points for different EF ranges
    systolic_bp_ef_less_30_title: 'Дополнительные баллы для систолического АД (мм рт.ст.) если ФВ <30',
    systolic_bp_ef_30_39_title: 'Дополнительные баллы для систолического АД (мм рт.ст.) если ФВ 30-39',
    systolic_bp_ef_40_plus_title: 'Дополнительные баллы для систолического АД (мм рт.ст.) если ФВ ≥40',
    
    // BP ranges
    bp_less_110: '<110',
    bp_110_119: '110-119',
    bp_120_129: '120-129',
    bp_130_139: '130-139',
    bp_140_149: '140-149',
    bp_150_plus: '≥150',
    
    // Age extra points for different EF ranges
    age_ef_less_30_title: 'Дополнительные баллы для возраста (лет) если ФВ <30',
    age_ef_30_39_title: 'Дополнительные баллы для возраста (лет) если ФВ 30-39',
    age_ef_40_plus_title: 'Дополнительные баллы для возраста (лет) если ФВ ≥40',
    
    // Age ranges
    age_less_55: '<55',
    age_55_59: '55-59',
    age_60_64: '60-64',
    age_65_69: '65-69',
    age_70_74: '70-74',
    age_75_79: '75-79',
    age_80_plus: '≥80',
    
    // Creatinine note
    creatinine_note: '*Примечание: хотя эта шкала использует креатинин как показатель функции почек, рСКФ обычно считается более точным индикатором.',
    
    // Evidence Appraisal section
    evidence_appraisal_title: 'Оценка доказательств',
    evidence_appraisal_description: 'Калькулятор риска Мета-анализа Глобальной группы по хронической сердечной недостаточности (MAGGIC) был разработан международной группой исследователей под руководством Покока и др. на основе базы данных 39,372 пациентов из 30 когортных исследований (из которых 6 были рандомизированными клиническими исследованиями, включавшими приблизительно 24,000 пациентов).',
    poisson_regression_description: 'Модель пуассоновской регрессии была построена для выявления 13 факторов риска, способствующих смертности у пациентов с сердечной недостаточностью. Сравнения наблюдаемых и ожидаемых показателей 3-летней смертности во всех 30 исследованиях показали приемлемое соответствие. Две отдельные модели использовались для сохраненной против сниженной фракции выброса (ФВ).',
    subsequent_study_description: 'Последующее исследование Freed и др. (2016) показало, что для 308 пациентов с сердечной недостаточностью с сохраненной ФВ, более высокий балл риска MAGGIC был связан с большим количеством неблагоприятных событий.',
    validation_note: 'Данные еще не были внешне валидированы для сниженной ФВ.',
    
    // Literature section
    literature_title: 'Литература',
    original_reference_title: 'Оригинальный/Первичный источник',
    validation_title: 'Валидация',
    other_references_title: 'Другие источники',
    
    // Primary reference
    primary_reference_title: 'Исследовательская работа',
    primary_reference_citation: 'Pocock SJ et al. Predicting survival in heart failure: a risk score based on 39 372 patients from 30 studies. Eur Heart J. 2013 May;34(19):1404-13. doi: 10.1093/eurheartj/ehs337. Epub 2012 Oct 24.',
    
    // Validation reference
    validation_reference_title: 'Исследовательская работа',
    validation_reference_citation: 'Freed BH, Daruwalla V, Cheng JY, Aguilar FG, Beussink L, Choi A, Klein DA, Dixon D, Baldridge A, Rasmussen-Torvik LJ, Maganti K, Shah SJ. Prognostic Utility and Clinical Significance of Cardiac Mechanics in Heart Failure With Preserved Ejection Fraction: Importance of Left Atrial Strain. Circ Cardiovasc Imaging. 2016 Mar;9(3). pii: e003754. doi: 10.1161/CIRCIMAGING.115.003754.',
    
    // Other references
    other_reference_1_title: 'Исследовательская работа',
    other_reference_1_citation: 'Meta-analysis Global Group in Chronic Heart Failure (MAGGIC). The survival of patients with heart failure with preserved or reduced left ventricular ejection fraction: an individual patient data meta-analysis. Eur Heart J. 2012 Jul;33(14):1750-7. doi: 10.1093/eurheartj/ehr254. Epub 2011 Aug 6.',
    
    other_reference_2_title: 'Исследовательская работа',
    other_reference_2_citation: 'Nanayakkara S, Kaye DM. Management of heart failure with preserved ejection fraction: a review. Clin Ther. 2015 Oct 1;37(10):2186-98. doi: 10.1016/j.clinthera.2015.08.005. Epub 2015 Sep 16.',
    
    other_reference_3_title: 'Исследовательская работа',
    other_reference_3_citation: 'Chapter 1: Definition and classification of CKD. Kidney Int Suppl (2011). 2013;3(1):19-62.'
  },
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

  // Atrial Fibrillation Risk Assessment
  atrial_fibrillation: {
    title: 'Оценка риска фибрилляции предсердий',
    subtitle: 'Риск инсульта CHA₂DS₂-VASc и риск кровотечения HAS-BLED • Комплексное управление ФП',
    
    // Component header and description
    component_title: 'Оценка риска фибрилляции предсердий',
    component_subtitle: 'Риск инсульта CHA₂DS₂-VASc и риск кровотечения HAS-BLED • Комплексное управление ФП',
    
    // Alert section
    alert_title: 'Комплексная оценка риска фибрилляции предсердий',
    alert_description: 'Основанная на доказательствах оценка риска инсульта и кровотечения для пациентов с неклапанной фибрилляцией предсердий. Руководство для принятия решений по антикоагулянтной терапии с сбалансированным анализом пользы и риска.',
    alert_badge: 'Валидировано руководствами ACC/AHA/ESC - Расширенный анализ риска',
    
    // Tab labels
    tab_cha2ds2vasc: 'CHA₂DS₂-VASc',
    tab_cha2ds2vasc_subtitle: '(Риск инсульта)',
    tab_hasbled: 'HAS-BLED',
    tab_hasbled_subtitle: '(Риск кровотечения)',
    
    // CHA₂DS₂-VASc section
    cha2ds2vasc: {
      title: 'Шкала CHA₂DS₂-VASc',
      description: 'Оценка риска инсульта при неклапанной фибрилляции предсердий',
      
      // Form fields
      age_label: 'Возраст (лет)',
      age_placeholder: '65',
      age_tooltip: 'Возраст 65-74 = 1 балл, Возраст ≥75 = 2 балла',
      
      sex_label: 'Пол',
      sex_placeholder: 'Выберите...',
      sex_tooltip: 'Женский пол = 1 балл',
      sex_male: 'Мужской',
      sex_female: 'Женский',
      
      // Risk factors
      risk_factors_title: 'Факторы риска (по 1 баллу каждый)',
      chf_label: 'Застойная сердечная недостаточность/дисфункция ЛЖ',
      hypertension_label: 'Артериальная гипертензия',
      diabetes_label: 'Сахарный диабет',
      vascular_disease_label: 'Сосудистое заболевание (ИМ, ЗПА, атеросклеротические бляшки аорты)',
      
      // High-risk factors
      high_risk_title: 'Фактор высокого риска (2 балла)',
      stroke_tia_label: 'Инсульт, ТИА или тромбоэмболия в анамнезе',
      
      // Buttons
      calculate_button: 'Рассчитать баллы',
      reset_button: 'Сбросить',
      
      // Results
      score_label: 'Баллы CHA₂DS₂-VASc',
      annual_stroke_risk: 'Годовой риск инсульта',
      risk_category: 'Категория риска',
      recommendation: 'Рекомендация',
      
      // Evidence section
      evidence_title: 'Доказательства и валидация',
      evidence_origin_title: 'Разработка шкалы',
      evidence_origin_description: 'Шкала CHA₂DS₂-VASc была разработана в 2010 году как усовершенствование шкалы CHADS₂, включающее дополнительные факторы риска инсульта. Она была получена из когорты Euro Heart Survey из 5333 пациентов с фибрилляцией предсердий.',
      evidence_validation_title: 'Валидационные исследования',
      evidence_validation_description: 'Шкала была широко валидирована во многих крупных когортах по всему миру, последовательно демонстрируя превосходство над CHADS₂ в идентификации действительно низкорисковых пациентов и обеспечении лучшей стратификации риска инсульта.',
      evidence_guidelines_title: 'Рекомендации руководств',
      evidence_guidelines_description: 'Шкала CHA₂DS₂-VASc рекомендована основными международными руководствами, включая ACC/AHA/ACCP/HRS 2023, ESC 2020 и NICE 2021 для оценки риска инсульта при неклапанной фибрилляции предсердий.',
      evidence_link_guidelines: 'Руководство ACC/AHA/ACCP/HRS 2023 по управлению ФП',
      evidence_link_original: 'Оригинальное валидационное исследование CHA₂DS₂-VASc (Lip и соавт., 2010)',
      
      // Clinical pearls
      clinical_pearls_title: 'Клинические жемчужины',
      clinical_pearl_1: 'Женский пол увеличивает риск инсульта только при наличии ≥1 другого фактора риска инсульта. Балл CHA₂DS₂-VASc 1 у женщин (только категория пола) считается низким риском.',
      clinical_pearl_2: 'Шкала работает лучше всего для идентификации действительно низкорисковых пациентов (0 баллов у мужчин, 1 балл у женщин), которым может не требоваться антикоагуляция.',
      clinical_pearl_3: 'Годовой риск инсульта прогрессивно увеличивается с более высокими баллами, от 0,2% при 0 баллов до >10% при баллах ≥7.',
      clinical_pearl_4: 'Прямые пероральные антикоагулянты (ПОАК) предпочтительнее варфарина для большинства пациентов с ФП, требующих антикоагуляции, если нет противопоказаний.',
      
      // Risk-based recommendations
      recommendation_score_0_male: 'Антикоагуляция не показана. Продолжать ежегодный мониторинг факторов риска.',
      recommendation_score_1_male: 'Рассмотреть пероральную антикоагуляцию на основе индивидуальных характеристик пациента и совместного принятия решений. Обсудить риски и пользу с пациентом.',
      recommendation_score_1_female: 'Антикоагуляция не показана (только категория пола). Продолжать ежегодный мониторинг факторов риска.',
      recommendation_score_2_plus: 'Пероральная антикоагуляция рекомендована, если нет противопоказаний. ПОАК предпочтительнее варфарина для большинства пациентов. Рассмотреть оценку риска кровотечения HAS-BLED.'
    },
    
    // HAS-BLED section
    hasbled: {
      title: 'Шкала HAS-BLED',
      description: 'Оценка риска кровотечения во время антикоагулянтной терапии',
      
      // Risk factors
      risk_factors_title: 'Факторы риска кровотечения (по 1 баллу каждый)',
      hypertension_label: 'Неконтролируемая гипертензия (систолическое АД >160 мм рт.ст.)',
      abnormal_renal_label: 'Нарушение функции почек (диализ, трансплантация, креатинин >200 мкмоль/л)',
      abnormal_liver_label: 'Нарушение функции печени (цирроз, билирубин >2x норма, АЛТ/АСТ >3x норма)',
      stroke_label: 'Инсульт в анамнезе',
      bleeding_label: 'Кровотечение в анамнезе или предрасположенность',
      labile_inr_label: 'Лабильное МНО (нестабильное/высокое МНО, <60% времени в терапевтическом диапазоне)',
      elderly_label: 'Пожилой возраст (>65 лет)',
      drugs_label: 'Лекарства или алкоголь (антиагреганты, НПВП)',
      alcohol_label: 'Алкоголь (≥8 порций в неделю)',
      
      // Buttons
      calculate_button: 'Рассчитать баллы',
      reset_button: 'Сбросить',
      
      // Results
      score_label: 'Баллы HAS-BLED',
      annual_bleeding_risk: 'Годовой риск кровотечения',
      risk_category: 'Категория риска',
      recommendation: 'Рекомендация',

      // Author Information
      author_title: 'От создателя',
      author_name: 'Д-р Рон Пистерс, MD, PhD',
      author_bio: 'Д-р Рон Пистерс - кардиолог в больнице Rijnstate, Нидерланды, специализирующийся на фибрилляции предсердий и антитромботическом лечении.',
      author_key_message_title: 'Ключевое клиническое сообщение',
      author_key_message: 'HAS-BLED следует использовать как клинический инструмент для выявления и устранения модифицируемых факторов риска кровотечения, а не как абсолютное противопоказание к антикоагуляции. Помните: у большинства пациентов с ФП риск инсульта превышает риск кровотечения.',
      author_pubmed_link: 'Посмотреть публикации д-ра Рона Пистерса в PubMed',
      
      // Formula Section
      formula_title: 'ФОРМУЛА',
      formula_description: 'Сложение выбранных баллов:',
      formula_note: 'HAS-BLED - это аббревиатура от Hypertension (Гипертензия), Abnormal liver/renal function (Нарушение функции печени/почек), Stroke history (История инсульта), Bleeding predisposition (Предрасположенность к кровотечению), Labile INR (Лабильное МНО), Elderly (Пожилой возраст), Drug/alcohol usage (Использование лекарств/алкоголя).',
      
      // Risk Table
      facts_figures_title: 'Факты и цифры',
      risk_table_title: 'Оценка риска по шкале HAS-BLED',
      risk_table_score: 'Балл',
      risk_table_group: 'Группа риска',
      risk_table_major_bleeding: 'Риск большого кровотечения**',
      risk_table_bleeds_per_100: 'Кровотечений на 100 пациенто-лет***',
      risk_table_recommendation: 'Рекомендация',
      
      // Risk Groups
      risk_low: 'Низкий',
      risk_moderate: 'Умеренный', 
      risk_high: 'Высокий',
      risk_very_high: 'Очень высокий',
      
      // Risk Recommendations
      risk_rec_0_1: 'Следует рассмотреть антикоагуляцию',
      risk_rec_2: 'Можно рассмотреть антикоагуляцию',
      risk_rec_3_4: 'Следует рассмотреть альтернативы антикоагуляции',
      risk_rec_5_plus: 'Баллы больше 5 были слишком редкими для определения риска, но вероятно превышают 10%',
      
      // Evidence Section
      evidence_title: 'Оценка доказательств',
      evidence_development: 'Шкала HAS-BLED была разработана в 2010 году как практическая шкала риска для оценки 1-годичного риска большого кровотечения у пациентов с фибрилляцией предсердий (ФП). Оригинальное исследование использовало данные проспективного Euro Heart Survey по ФП и включало 3456 амбулаторных и госпитализированных пациентов с ФП и годовым наблюдением относительно больших кровотечений, без митрального стеноза или клапанной хирургии.',
      evidence_validation: 'Было опубликовано множество внешних валидаций шкалы HAS-BLED. Сетевой мета-анализ 2020 года 18 исследований показал, что HAS-BLED является наиболее сбалансированной прогностической шкалой для больших кровотечений с точки зрения чувствительности и специфичности по сравнению с другими современными шкалами, включая ABC‐bleeding score, ATRIA, European score, GARFIELD‐AF, HEMORR₂HAGES, ORBIT, Shireman и mOBRI.',
      evidence_guidelines: 'Простота шкалы HAS-BLED и обширные внешние валидации привели к широкому клиническому принятию, при этом руководства ESC 2020 специально рекомендуют HAS-BLED для оценки риска кровотечения у пациентов с ФП. Однако более поздние руководства ESC 2024 и руководства ACC/AHA/ACCP/HRS 2023 не рекомендовали конкретную прогностическую шкалу для больших кровотечений, ссылаясь на неопределенности в отношении точности и потенциального вреда от неправильной антикоагуляции.',
      evidence_limitations: 'Такая сдержанность, по крайней мере частично, проистекала из того факта, что HAS-BLED была выведена, когда ПОАК только начинали становиться доступными, что ставит под сомнение прогностическую точность HAS-BLED в действительно современных когортах с использованием ПОАК. Кроме того, даже несмотря на то, что врачам советуют балансировать риски кровотечения и тромбоэмболии у пациентов с ФП при рассмотрении антикоагуляции, реальные последствия этих событий могут не быть эквивалентными.',
      
      // Reference Links
      reference_original: 'Оригинальное исследование: Pisters и соавт. (2010)',
      reference_validation: 'Валидационное исследование: Lip и соавт. (2011)',
      reference_guidelines_2020: 'Руководства ESC 2020',
      reference_guidelines_2023: 'Руководства ACC/AHA/ACCP/HRS 2023',
      
      // Recommendations
      recommendation_low: 'Низкий риск кровотечения. Антикоагуляция может быть использована безопасно с рутинным мониторингом.',
      recommendation_moderate: 'Умеренный риск кровотечения. Усилить мониторинг, контролировать модифицируемые факторы риска кровотечения.',
      recommendation_high: 'Высокий риск кровотечения. Требуется тщательная оценка баланса риск-польза. Агрессивно контролировать модифицируемые факторы риска. Рассмотреть более частый мониторинг.'
    },
    
    // Additional UI elements for MAGGIC calculator
    reset_calculator: 'Сбросить калькулятор',
    about_title: 'О калькуляторе MAGGIC',
    about_description: 'Калькулятор риска MAGGIC является валидированным инструментом для прогнозирования риска смертности у пациентов с хронической сердечной недостаточностью. Этот калькулятор основан на комплексном мета-анализе более 39,000 пациентов из 30 исследований.',
    feature_1: 'Валидирован на 39,372 пациентах из 30 исследований',
    feature_2: 'Прогнозирует 1-летний и 3-летний риск смертности',
    feature_3: 'Комплексная оценка факторов риска',
    feature_4: 'Основанные на доказательствах клинические рекомендации',
    tables_title: 'Таблицы факторов риска',
    formula_note: 'Формула основана на сумме баллов от факторов риска и характеристик пациента',
    secondary_reference_title: 'Дополнительная справка',
    
    // Common labels
    score_points: '{{score}} балл(ов)',
    risk_percentage: '{{risk}}% в год',
    
    // Validation messages
    validation: {
      age_required: 'Возраст обязателен',
      age_range: 'Возраст должен быть от 18 до 120 лет',
      sex_required: 'Выбор пола обязателен'
    }
  },

  // TIMI Risk Calculator
  timi: {
    title: "Калькулятор риска TIMI",
    subtitle: "Оценка риска нестабильной стенокардии/ИМ без подъема ST",
    description: "Шкала риска тромболизиса при инфаркте миокарда для пациентов с нестабильной стенокардией или ИМ без подъема ST.",
    
    // Emergency alert
    emergency_tool: "Инструмент экстренной оценки риска",
    tool_description: "Шкала риска TIMI для быстрой оценки пациентов с нестабильной стенокардией или ИМ без подъема ST. Этот валидированный инструмент помогает стратифицировать риск и направлять решения по лечению в экстренных условиях.",
    
    // Step labels
    patient_info: "Информация о пациенте",
    clinical_factors: "Клинические факторы",
    
    // Section headers
    demographics_section: "Демография",
    clinical_assessment: "Клиническая оценка",
    clinical_assessment_description: "Выберите все клинические факторы, применимые к этому пациенту:",
    risk_factors_section: "Факторы риска",
    clinical_section: "Клиническая картина",
    
    // Demographics
    age_label: "Возраст ≥65 лет",
    age_help: "Пациенты 65 лет и старше получают 1 балл",
    age_error: "Возраст должен быть между 18-120 годами",
    
    // Risk factors
    coronary_risk_factors: "Факторы риска коронарной болезни сердца",
    risk_factors_help: "Количество факторов риска ИБС (0-3+)",
    risk_factors_detail: "Факторы риска включают: семейный анамнез ИБС, гипертония, гиперхолестеринемия, сахарный диабет, курение",
    
    cad_risk_factors_label: "≥3 факторов риска ИБС",
    known_cad_label: "Известная ИБС (стеноз ≥50%)",
    known_cad: "Известная коронарная болезнь сердца",
    
    aspirin_use_label: "Использование аспирина в предыдущие 7 дней",
    aspirin_use: "Использование аспирина в предыдущие 7 дней",
    
    severe_angina_label: "Тяжелая стенокардия (≥2 эпизодов за 24ч)",
    severe_angina: "Тяжелые ангинозные симптомы",
    
    st_deviation_label: "Отклонение ST ≥0.5мм",
    st_deviation: "Отклонение сегмента ST ≥0.5мм",
    
    elevated_markers_label: "Повышенные кардиальные маркеры",
    elevated_biomarkers: "Повышенные кардиальные биомаркеры",
    
    // Navigation
    next_clinical_factors: "Далее: Клинические факторы",
    
    // Results
    score_analysis: "Анализ шкалы риска TIMI",
    timi_score: "Баллы TIMI",
    fourteen_day_breakdown: "14-дневная разбивка риска",
    fourteen_day_risk: "14-дневный риск",
    mortality: "Смертность",
    myocardial_infarction: "Инфаркт миокарда",
    urgent_revascularization: "Экстренная реваскуляризация",
    
    composite_endpoint: "Композитная конечная точка",
    death_mi_revascularization: "Смерть, ИМ или экстренная реваскуляризация",
    risk_category: "Категория риска",
    management_strategy: "Стратегия лечения",
    management_urgency: "Срочность лечения",
    recommended_timeframe: "Рекомендуемые сроки:",
    
    // Time frames
    timeframe_under_24: "< 24 часов",
    timeframe_24_48: "24-48 часов",
    timeframe_24_72: "24-72 часа",
    
    // Risk categories
    low_risk: "Низкий риск (0-2 балла)",
    intermediate_risk: "Промежуточный риск (3-4 балла)",
    high_risk: "Высокий риск (5-7 баллов)",
    
    // Management recommendations
    conservative_management: "Консервативное лечение",
    routine_management: "Рутинное лечение",
    early_invasive_strategy: "Ранняя инвазивная стратегия",
    early_intervention: "Раннее вмешательство",
    urgent_invasive_strategy: "Экстренная инвазивная стратегия",
    urgent_management: "Экстренное лечение",
    
    // Score components
    score_components: "Компоненты шкалы",
    age_component: "Возраст ≥65 лет",
    cad_risk_factors_component: "≥3 факторов риска ИБС",
    known_cad_component: "Известная ИБС (≥50% стеноз)",
    aspirin_component: "Аспирин (предыдущие 7 дней)",
    angina_component: "Тяжелая стенокардия (≥2 эпизодов/24ч)",
    st_component: "Отклонение ST ≥0.5мм",
    biomarkers_component: "Повышенные кардиальные маркеры",
    
    // Clinical strategy
    clinical_strategy: "Стратегия клинического лечения",
    
    // Action buttons
    calculate_button: "Рассчитать баллы TIMI",
    new_assessment: "Новая оценка",
    modify_inputs: "Изменить входные данные",
    
    // Footer
    based_on_timi: "Основано на шкале риска TIMI",
    clinically_validated: "Клинически валидированный инструмент оценки риска",
    
    // Interpretations (dynamic)
    interpretation_low: "Пациент низкого риска с {{risk}}% 14-дневным риском неблагоприятных исходов",
    interpretation_intermediate: "Пациент промежуточного риска с {{risk}}% 14-дневным риском неблагоприятных исходов",
    interpretation_high: "Пациент высокого риска с {{risk}}% 14-дневным риском неблагоприятных исходов",
    
    // Recommendations (dynamic)
    recommendation_low_0: "Консервативное лечение с медикаментозной терапией",
    recommendation_low_1: "Консервативное лечение с медикаментозной терапией",
    recommendation_low_2: "Консервативное лечение с тщательным мониторингом",
    recommendation_intermediate_3: "Рассмотреть раннюю инвазивную стратегию в течение 24-48 часов",
    recommendation_intermediate_4: "Ранняя инвазивная стратегия рекомендуется в течение 24 часов",
    recommendation_high_5: "Экстренная инвазивная стратегия в течение 24 часов",
    recommendation_high_6: "Экстренная инвазивная стратегия в течение 12-24 часов",
    recommendation_high_7: "Немедленная инвазивная стратегия - высочайший риск",
    
    // Simplified category recommendations
    recommendation_low: "Консервативное лечение с медикаментозной терапией и тщательным мониторингом. Рассмотрите раннюю выписку с амбулаторным наблюдением.",
    recommendation_intermediate: "Ранняя инвазивная стратегия в течение 24-48 часов рекомендуется. Госпитализация с кардиологической консультацией рекомендована.",
    recommendation_high: "Экстренная инвазивная стратегия в течение 24 часов требуется. Немедленная кардиологическая консультация и агрессивная медикаментозная терапия показаны.",
    
    // Risk factor descriptions
    known_cad_desc: "Предыдущая катетеризация, показывающая ≥50% стеноз в любом крупном коронарном сосуде",
    aspirin_use_desc: "Использование аспирина в течение 7 дней до поступления в больницу",
    severe_angina_desc: "Два или более эпизодов стенокардии в течение 24 часов до поступления",
    st_deviation_desc: "Изменения сегмента ST ≥0.5мм на приемной ЭКГ",
    elevated_biomarkers_desc: "Повышенный тропонин, КФК-МВ или другие кардиальные маркеры",
    
    // About the Creator
    about_creator_title: "О создателе",
    creator_name: "Д-р Эллиотт М. Антман",
    creator_description: "Эллиотт М. Антман, доктор медицины, является профессором и заместителем декана по клиническим/трансляционным исследованиям в Гарвардской медицинской школе. Он также является старшим врачом в отделении кардиологии больницы Бригама и женщин в Массачусетсе и президентом Американской кардиологической ассоциации (2014-2015). В качестве старшего исследователя в исследовательской группе TIMI, д-р Антман опубликовал работы по использованию сывороточных кардиальных маркеров для диагностики и прогноза пациентов с нестабильной стенокардией и острым инфарктом миокарда, циклооксигеназе и сердечно-сосудистом риске, а также антитромботической терапии для острых коронарных синдромов.",
    creator_publications: "Чтобы просмотреть публикации д-ра Эллиотта М. Антмана, посетите",
    
    // Evidence Section
    evidence_title: "Доказательства",
    formula_title: "ФОРМУЛА",
    formula_description: "Сложение выбранных баллов:",
    variable_age: "Возраст ≥65",
    variable_risk_factors: "≥3 факторов риска ИБС*",
    variable_known_cad: "Известная ИБС (стеноз ≥50%)",
    variable_aspirin: "Использование АСК в предыдущие 7 дней",
    variable_angina: "Тяжелая стенокардия (≥2 эпизодов за 24 ч)",
    variable_st_changes: "Изменения ST на ЭКГ ≥0.5мм",
    variable_st_deviation: "Отклонение ST ≥0.5мм",
    variable_biomarkers: "Положительный кардиальный маркер",
    risk_factors_note: "*Факторы риска ИБС: семейный анамнез ИБС, гипертония, гиперхолестеринемия, диабет или курение",
    
    // Evidence Appraisal
    evidence_appraisal_title: "Оценка доказательств",
    evidence_appraisal_description: "Антман и соавт. (2000) использовали объединенную базу данных 7,081 пациентов с НС/ИМ без подъема ST в исследованиях TIMI 11B и ESSENCE для первоначального выведения и валидации этой шкалы риска TIMI для НС/ИМ без подъема ST. Шкала риска была первоначально выведена из 1,957 пациентов с НС/ИМ без подъема ST, получавших нефракционированный гепарин в исследовании TIMI 11B, и внутренне валидирована в 3 когортах пациентов из остальных объединенных данных: 1,953 пациентов, получавших эноксапарин в исследовании TIMI 11B, 1,564 пациентов, получавших нефракционированный гепарин в исследовании ESSENCE, и 1,607 пациентов, получавших эноксапарин в исследовании ESSENCE.",
    validation_studies: "К концу 14 дней 16.7% группы выведения умерли, перенесли инфаркт миокарда или нуждались в экстренной реваскуляризации. Увеличение баллов TIMI коррелировало с увеличением общей смертности, ИМ или экстренной реваскуляризации. Такая же закономерность наблюдалась во внутренне валидированных группах. С момента выведения было проведено много внешних валидационных исследований.",
    validation_studies_title: "Исследования валидации",
    external_validation: "Внешние валидационные исследования Шириа и соавт. (2002), Поллака и соавт. (2006), и Чейза и соавт. (2006) последовательно демонстрировали прогностическую ценность шкалы риска TIMI в различных популяциях пациентов, включая недифференцированных пациентов с болью в груди в условиях отделений экстренной помощи.",
    
    // Literature
    literature_title: "Литература",
    original_reference_title: "Оригинальная/Первичная ссылка",
    original_reference: "Antman EM, Cohen M, Bernink PJLM, McCabe CH, Hoacek T, Papuchis G, Mautner B, Corbalan R, Radley D, Braunwald E. Шкала риска TIMI для нестабильной стенокардии/инфаркта миокарда без подъема ST: метод прогнозирования и принятия терапевтических решений JAMA. 2000;284(7):835-42.",
    validation_title: "Валидация",
    validation_pollack: "Pollack CV, Sites FD, Shofer FS, Sease KL, Hollander JE. Применение шкалы риска TIMI для нестабильной стенокардии и острого коронарного синдрома без подъема ST к неселективной популяции отделения экстренной помощи с болью в груди. Acad Emerg Med. 2006;13(1):13-18.",
    validation_scirica: "Scirica BM, Cannon CP, Antman EM, Murphy SA, Morrow DA, Sabatine MS, McCabe CH, Gibson CM, Braunwald E. Валидация шкалы риска тромболизиса при инфаркте миокарда (TIMI) для нестабильной стенокардии и инфаркта миокарда без подъема ST в регистре TIMI III. Am J Cardiol. 2002;90(3):303-5.",
    validation_chase: "Chase M, Robey JL, Zogby KE, Sease KL, Shofer FS, Hollander JE. Проспективная валидация шкалы риска тромболизиса при инфаркте миокарда в популяции отделения экстренной помощи с болью в груди. Ann Emerg Med. 2006;48(3):252-9.",
    other_references_title: "Другие ссылки",
    other_reference: "Than M, Cullen L, Aldous S, et al. 2-часовой ускоренный диагностический протокол для оценки пациентов с симптомами боли в груди с использованием современных тропонинов в качестве единственного биомаркера: исследование ADAPT. J Am Coll Cardiol. 2012;59(23):2091-8."
  },

  // AHA PREVENT™ Calculator - COMPLETE RUSSIAN TRANSLATION IMPLEMENTATION
  prevent: {
    // Core information
    title: 'Калькулятор AHA PREVENT™',
    subtitle: 'Сердечно-сосудистая оценка риска нового поколения • Интеграция CKM здоровья',
    description: 'Революционное прогнозирование риска с включением факторов сердечно-сосудисто-почечно-метаболического (CKM) здоровья. Расширенное социальными детерминантами здоровья для комплексной 10-летней и 30-летней оценки риска.',
    
    // Alert section
    alert_title: 'Американская кардиологическая ассоциация PREVENT™',
    alert_description: 'Революционное прогнозирование риска с включением факторов сердечно-сосудисто-почечно-метаболического (CKM) здоровья. Расширенное социальными детерминантами здоровья для комплексной 10-летней и 30-летней оценки риска.',
    alert_badge: 'AHA 2023 - CKM-расширенное прогнозирование',
    
    // Progress steps
    step_demographics: 'Демография',
    step_clinical: 'Клинические',
    step_lab_values: 'Лаб. данные',
    step_ckm_e: 'CKM-E',
    
    // Step navigation titles and descriptions
    step_1_title: 'Личная информация',
    step_1_description: 'Основные демографические и антропометрические данные',
    step_2_title: 'Лабораторные данные',
    step_2_description: 'Профиль холестерина и биомаркеры',
    step_3_title: 'Клинические факторы',
    step_3_description: 'Артериальное давление и медицинская история',
    step_4_title: 'Расширенные факторы',
    step_4_description: 'Дополнительные CKM-E параметры (Дополнительно)',
    
    // Progress indicators
    progress_complete: 'Завершено',
    progress_of_steps: 'из 4 шагов завершено',
    
    // Step 1: Demographics
    demographics_title: 'Демография пациента',
    demographics_description: 'Основная демографическая информация для оценки риска',
    age_label: 'Возраст',
    age_placeholder: '45',
    age_help: 'Возраст в годах (30-79 для PREVENT)',
    sex_label: 'Пол',
    sex_placeholder: 'Выберите пол...',
    sex_male: 'Мужской',
    sex_female: 'Женский',
    race_label: 'Раса/этническая принадлежность',
    race_placeholder: 'Выберите расу/этническую принадлежность...',
    race_white: 'Белая',
    race_black: 'Черная/афроамериканская',
    race_hispanic: 'Испанская/латино',
    race_asian: 'Азиатская',
    race_other: 'Другая',
    height_label: 'Рост',
    height_placeholder: '170',
    weight_label: 'Вес',
    weight_placeholder: '80',
    
    // Step 2: Clinical Assessment
    clinical_title: 'Клиническая оценка',
    clinical_description: 'Артериальное давление и клинические факторы риска',
    systolic_bp_label: 'Систолическое артериальное давление',
    systolic_bp_placeholder: '120',
    diastolic_bp_label: 'Диастолическое артериальное давление',
    diastolic_bp_placeholder: '80',
    clinical_risk_factors_title: 'Клинические факторы риска',
    on_hypertension_meds_label: 'На лекарствах от гипертонии',
    on_hypertension_meds_description: 'В настоящее время принимает препараты для снижения артериального давления',
    antihypertensive_meds_label: 'Антигипертензивные препараты',
    antihypertensive_meds_description: 'В настоящее время принимает препараты для снижения артериального давления',
    on_statin_label: 'На статинотерапии',
    on_statin_description: 'В настоящее время принимает статиновые препараты',
    diabetes_label: 'Сахарный диабет',
    diabetes_description: 'Диабет 1-го или 2-го типа',
    current_smoker_label: 'Текущий курильщик',
    current_smoker_description: 'В настоящее время курит табак',
    serum_creatinine_label: 'Креатинин сыворотки',
    serum_creatinine_placeholder: '1.0',
    
    // Step 3: Laboratory Assessment
    lab_title: 'Лабораторная оценка',
    lab_description: 'Липидный профиль и измерения холестерина',
    total_cholesterol_label: 'Общий холестерин',
    total_cholesterol_placeholder: '200',
    hdl_cholesterol_label: 'HDL холестерин',
    hdl_cholesterol_placeholder: '50',
    ldl_cholesterol_label: 'LDL холестерин',
    ldl_cholesterol_placeholder: '130',
    
    // Step 4: CKM-E Enhanced Factors
    ckm_e_title: 'CKM-E расширенные факторы',
    ckm_e_description: 'Факторы улучшения сердечно-сосудисто-почечно-метаболического здоровья',
    hba1c_label: 'HbA1c',
    hba1c_placeholder: '6.5',
    egfr_label: 'eGFR',
    egfr_placeholder: '90',
    uacr_label: 'UACR',
    uacr_placeholder: '15',
    sdi_label: 'Индекс социальной депривации',
    sdi_placeholder: '0.3',
    
    // CKM-E Information
    ckm_e_info_title: 'Информация о CKM-E расширении',
    egfr_info: 'Расчетная скорость клубочковой фильтрации (маркер функции почек)',
    uacr_info: 'Соотношение альбумина к креатинину в моче (маркер повреждения почек)',
    sdi_info: 'Индекс социальной депривации (социальные детерминанты здоровья)',
    
    // Navigation buttons
    next_clinical_factors: 'Далее: Клинические факторы',
    next_laboratory_values: 'Далее: Лабораторные значения',
    next_ckm_e_factors: 'Далее: CKM-E факторы',
    back_button: 'Назад',
    calculate_prevent_risk: 'Рассчитать риск PREVENT',
    
    // Results section
    results_title: 'Анализ риска AHA PREVENT™',
    ckm_e_enhanced_title: 'CKM-E расширенная оценка',
    ckm_e_enhanced_description: 'Обнаружены расширенные сердечно-сосудисто-почечно-метаболические факторы - рекомендуется комплексный мониторинг',
    
    // Risk predictions
    ten_year_predictions_title: '10-летние прогнозы риска',
    thirty_year_predictions_title: '30-летние прогнозы риска',
    total_cvd: 'Общий ССЗ',
    ascvd: 'ASCVD',
    heart_failure: 'Сердечная недостаточность',
    
    // Risk stratification
    risk_stratification_title: 'Стратификация риска PREVENT',
    low_risk: 'Низкий риск',
    low_risk_range: '<5% ASCVD',
    borderline_risk: 'Пограничный',
    borderline_risk_range: '5-7.5% ASCVD',
    intermediate_risk: 'Промежуточный',
    intermediate_risk_range: '7.5-20% ASCVD',
    high_risk: 'Высокий риск',
    high_risk_range: '≥20% ASCVD',
    
    // Clinical recommendations
    clinical_recommendations_title: 'Рекомендации по клиническому ведению',
    
    // Algorithm validation
    algorithm_title: 'Модель AHA PREVENT™',
    algorithm_description: '✓ Руководящие принципы AHA 2023 • CKM-расширенная • Валидированная машинным обучением • 30-летние прогнозы',
    algorithm_2023_title: 'Алгоритм AHA PREVENT™ 2023',
    algorithm_implementation_description: 'Этот калькулятор реализует официальные уравнения Американской кардиологической ассоциации PREVENT™ (2023):',
    algorithm_feature_1: 'Получены от более чем 6 миллионов разнообразных лиц',
    algorithm_feature_2: 'Рассчитывает 10-летние риски для ASCVD, сердечной недостаточности и общего ССЗ',
    algorithm_feature_3: 'Для возраста 30-59 лет: Также предоставляет 30-летние оценки риска',
    algorithm_feature_4: 'Включает новые факторы риска (HbA1C, UACR, SDI) для улучшенной оценки',
    algorithm_feature_5: 'ИМТ и eGFR рассчитываются с использованием валидированных уравнений',
    
    // Action buttons
    new_assessment: 'Новая оценка',
    modify_inputs: 'Изменить входные данные',
    
    // Footer
    footer_description: 'На основе уравнений AHA PREVENT™ с факторами CKM здоровья • Только для образовательных целей',
    footer_guidelines: 'Руководящие принципы AHA 2023',
    
    // Validation messages
    validation_age: 'Возраст обязателен',
    validation_age_range: 'Возраст должен быть между 30-79 годами для PREVENT',
    validation_sex: 'Пол обязателен',
    validation_race: 'Раса/этническая принадлежность обязательна',
    validation_total_cholesterol: 'Общий холестерин обязателен',
    validation_total_cholesterol_range: 'Общий холестерин должен быть между 100-400 мг/дл',
    validation_hdl_cholesterol: 'HDL холестерин обязателен',
    validation_hdl_cholesterol_range: 'HDL холестерин должен быть между 20-100 мг/дл',
    validation_systolic_bp: 'Систолическое АД обязательно',
    validation_systolic_bp_range: 'Систолическое АД должно быть между 90-200 мм рт.ст.',
    
    // Units
    unit_years: 'лет',
    unit_mg_dl: 'мг/дл',
    unit_mmhg: 'мм рт.ст.',
    unit_ml_min: 'мл/мин/1.73м²',
    unit_mg_g: 'мг/г',
    unit_score: 'баллов',
    unit_cm: 'см',
    unit_kg: 'кг',
    unit_percent: '%',
    
    // Risk categories and prevention strategies
    risk_category: 'Категория риска',
    prevention_strategy: 'Стратегия профилактики',
    standard_prevention: 'Стандартный подход к сердечно-сосудистой профилактике',
    comprehensive_ckm: 'Комплексный подход к CKM здоровью с расширенным мониторингом',
    
    // Recommendations content
    rec_continue_lifestyle: 'Продолжайте оптимизацию образа жизни',
    rec_reassess: 'Переоценка через 4-6 лет',
    rec_risk_enhancers: 'Рекомендуется оценка усилителей риска',
    rec_cac_scoring: 'Рассмотрите CAC-скоринг при неопределенности',
    rec_lifestyle_therapy: 'Терапия образа жизни необходима',
    rec_statin_therapy: 'Статинотерапия рекомендуется',
    rec_cac_refinement: 'Рассмотрите CAC-скоринг для уточнения',
    rec_high_intensity_statin: 'Рекомендуется высокоинтенсивная статинотерапия',
    rec_additional_therapies: 'Рассмотрите дополнительные терапии (эзетимиб, PCSK9i)',
    rec_aggressive_lifestyle: 'Агрессивная модификация образа жизни',
    rec_ckm_e_monitoring: 'Присутствуют CKM-E факторы - необходим расширенный мониторинг',
    
    // Chart visualization
    ten_year_risk_estimates: '10-летние оценки риска',
    thirty_year_risk_estimates: '30-летние оценки риска',
    risk_by_age_description: 'Оценки риска по возрасту для лиц с такими же факторами риска',
    age_years: 'Возраст (лет)',
    risk_percentage: 'Риск (%)',
    age: 'Возраст',
    years: 'лет',
    risk_insights: 'Аналитика риска',
    current_age: 'Текущий возраст',
    year_total_risk: 'Годовой общий риск',
    risk_increase_decade: 'Увеличение риска/десятилетие'
  },

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
