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
    creatinine_error: "Креатинин должен быть от 0,3 до 15,0 мг/дл"
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
    score_points: "{score} баллов",
    ischemic_benefit: "Ишемическая польза",
    bleeding_risk: "Риск кровотечения",
    net_benefit: "Чистая клиническая польза",
    // Уровни риска
    high_risk: "Высокий",
    intermediate_risk: "Средний", 
    low_risk: "Низкий",
    // Описания рисков
    mace_reduction: "{reduction}% снижение MACE",
    bleeding_increase: "{increase}% увеличение кровотечений",
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
    interpretation_high: "Пациент с высокой пользой (Балл: {score}) - Продленная DAPT вероятно полезна",
    interpretation_intermediate: "Пациент со средней пользой (Балл: {score}) - Рассмотрите продленную DAPT",
    interpretation_low: "Пациент с низкой пользой (Балл: {score}) - Продленная DAPT может быть вредной",
    // Усовершенствованный алгоритм
    enhanced_algorithm: "Валидация усовершенствованного алгоритма",
    algorithm_validation: "Этот калькулятор включает возраст-скорректированную оценку риска кровотечения и основанные на доказательствах рекомендации из исследования DAPT для оптимального клинического принятия решений.",
    // Кнопки действий
    new_assessment: "Новая оценка",
    modify_inputs: "Изменить входные данные"
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
    score_points: '{score} баллов',
    // Risk categories and interpretations
    bleeding_risk: 'Риск Кровотечения',
    major_bleeding: 'Риск Больших Кровотечений',
    safe_duration: 'Безопасная Длительность',
    annual_major_bleeding: 'Годовой риск больших кровотечений',
    overall_bleeding_risk: 'Общий риск кровотечения через 12 месяцев: {risk}%',
    recommended_dapt_duration: 'Рекомендуемая длительность DAPT',
    // Risk levels
    low_risk: 'Низкий Риск',
    intermediate_risk: 'Промежуточный Риск',
    high_risk: 'Высокий Риск',
    // Interpretation messages
    interpretation_low: 'Низкий риск кровотечения ({risk}% через 12 месяцев) - Может рассматриваться продленная DAPT',
    interpretation_intermediate: 'Промежуточный риск кровотечения ({risk}% через 12 месяцев) - Стандартная DAPT с тщательным мониторингом',
    interpretation_high: 'Высокий риск кровотечения ({risk}% через 12 месяцев) - Рассмотреть сокращенную длительность DAPT',
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
    algorithm_validation_text: '✓ Валидирован на >39,000 пациентов с СН • Получен из мета-анализа • Комплексная оценка риска'
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
    // Risk reference ranges
    risk_reference_title: 'Справочник по оценке риска GWTG-HF',
    low_risk_range: 'Низкий риск (≤25 баллов)',
    low_mortality: '<2% риск смертности',
    intermediate_risk_range: 'Промежуточный риск (26-35 баллов)',
    intermediate_mortality: '2-4% риск смертности',
    high_risk_range: 'Высокий риск (36-45 баллов)',
    high_mortality: '4-8% риск смертности',
    very_high_risk_range: 'Очень высокий риск (>45 баллов)',
    very_high_mortality: '>8% риск смертности'
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
    
    // Common labels
    score_points: '{score} балл(ов)',
    risk_percentage: '{risk}% в год',
    
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
    interpretation_low: "Пациент низкого риска с {risk}% 14-дневным риском неблагоприятных исходов",
    interpretation_intermediate: "Пациент промежуточного риска с {risk}% 14-дневным риском неблагоприятных исходов",
    interpretation_high: "Пациент высокого риска с {risk}% 14-дневным риском неблагоприятных исходов",
    
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
  }
};
