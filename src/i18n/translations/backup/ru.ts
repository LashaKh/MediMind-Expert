export default {
  common: {
    aiAssistant: 'ИИ Ассистент',
    medicalAssistant: 'Медицинский ассистент',
    account: 'Аккаунт',
    signedIn: 'Вошел в систему',
    save: 'Сохранить',
    delete: 'Удалить',
    cancel: 'Отмена',
    loading: 'Загрузка...',
    error: 'Ошибка',
    success: 'Успех',
    retry: 'Повторить',
    close: 'Закрыть',
    back: 'Назад',
    next: 'Далее',
    previous: 'Предыдущий',
    search: 'Поиск',
    filter: 'Фильтр',
    reset: 'Сброс',
    confirm: 'Подтвердить',
    yes: 'Да',
    no: 'Нет'
  },
  nav: {
    features: 'Возможности',
    pricing: 'Цены',
    about: 'О нас'
  },
  navigation: {
    aiCoPilot: 'AI Помощник',
    aiCoPilotDesc: 'Чат со специализированным медицинским ИИ',
    calculators: 'Медицинские калькуляторы',
    calculatorsDesc: 'Клинические инструменты на основе данных',
    forms: 'Медицинские формы',
    formsDesc: 'Шаблоны клинической документации',
    personalKB: 'База знаний',
    personalKBDesc: 'Ваша библиотека медицинской литературы',
    settings: 'Настройки',
    settingsDesc: 'Аккаунт и предпочтения',
    profile: 'Профиль',
    helpCenter: 'Центр помощи',
    toggleMenu: 'Основное меню навигации'
  },
  theme: {
    lightMode: 'Светлая тема',
    darkMode: 'Темная тема'
  },
  auth: {
    signInTitle: 'Войдите в свой аккаунт',
    signUpTitle: 'Создайте свой аккаунт',
    emailLabel: 'Адрес электронной почты',
    emailPlaceholder: 'Введите ваш email',
    passwordLabel: 'Пароль',
    passwordPlaceholder: 'Введите ваш пароль',
    confirmPasswordLabel: 'Подтвердите пароль',
    confirmPasswordPlaceholder: 'Подтвердите ваш пароль',
    firstNameLabel: 'Имя',
    firstNamePlaceholder: 'Введите ваше имя',
    lastNameLabel: 'Фамилия',
    lastNamePlaceholder: 'Введите вашу фамилию',
    fullNameLabel: 'Полное имя',
    fullNamePlaceholder: 'Введите ваше полное имя',
    createPasswordPlaceholder: 'Создайте пароль',
    passwordHint: 'Минимум 6 символов',
    termsNotice: 'Создавая аккаунт, вы соглашаетесь с нашими Условиями обслуживания и Политикой конфиденциальности. Ваши медицинские данные будут надежно сохранены и никогда не будут переданы без вашего согласия.',
    signIn: 'Войти',
    signUp: 'Регистрация',
    signingIn: 'Вход...',
    signingUp: 'Регистрация...',
    noAccount: 'Нет аккаунта? Зарегистрируйтесь',
    haveAccount: 'Уже есть аккаунт? Войдите',
    forgotPassword: 'Забыли пароль?',
    resetPassword: 'Сбросить пароль',
    errors: {
      invalidCredentials: 'Неверный email или пароль',
      emailNotConfirmed: 'Пожалуйста, проверьте почту и подтвердите аккаунт',
      signInFailed: 'Ошибка входа. Попробуйте снова.',
      signUpFailed: 'Ошибка регистрации. Попробуйте снова.',
      emailExists: 'Аккаунт с этим email уже существует',
      weakPassword: 'Пароль слишком слабый'
    },
    signOut: 'Выйти',
    rememberMe: 'Запомнить меня',
    createAccount: 'Создать аккаунт',
    signInWithGoogle: 'Войти через Google',
    signUpWithGoogle: 'Зарегистрироваться через Google',
    termsAndConditions: 'Условия использования',
    privacyPolicy: 'Политика конфиденциальности',
    acceptTerms: 'Я принимаю условия'
  },
  calculators: {
    categories: {
      cardiology: 'Кардиология',
      obgyn: 'Акушерство-Гинекология',
      coming_soon: 'Скоро'
    },
    common: {
      calculate: 'Рассчитать',
      calculating: 'Вычисление...',
      result: 'Результат',
      results: 'Результаты',
      interpretation: 'Интерпретация',
      recommendations: 'Рекомендации',
      riskLevel: 'Уровень риска',
      lowRisk: 'Низкий риск',
      moderateRisk: 'Умеренный риск',
      highRisk: 'Высокий риск',
      veryHighRisk: 'Очень высокий риск',
      riskFactors: 'Факторы риска',
      inputs: 'Входные данные',
      clearInputs: 'Очистить поля',
      shareResult: 'Поделиться результатом',
      downloadPDF: 'Скачать PDF',
      printResult: 'Печать результата',
      enterValue: 'Введите значение',
      selectOption: 'Выберите вариант',
      required: 'Обязательно',
      invalidValue: 'Неверное значение',
      valueOutOfRange: 'Значение вне диапазона'
    },
    cardiology: {
      grace: {
        title: "Калькулятор риска GRACE 2.0",
        subtitle: "Оценка риска острого коронарного синдрома",
        description: "Глобальный регистр острых коронарных событий - стратификация риска пациентов с NSTEMI/UA и STEMI.",
        
        // Демография пациента
        age_label: "Возраст (годы)",
        age_placeholder: "Введите возраст пациента",
        heart_rate_label: "Частота сердечных сокращений (уд/мин)",
        heart_rate_placeholder: "Введите ЧСС",
        systolic_bp_label: "Систолическое артериальное давление (ммHg)",
        systolic_bp_placeholder: "Введите систолическое давление",
        creatinine_label: "Креатинин сыворотки (мг/дл)",
        creatinine_placeholder: "Введите уровень креатинина",
        
        // Клинические характеристики
        killip_class_label: "Класс Killip",
        killip_class_1: "Класс I (без сердечной недостаточности)",
        killip_class_2: "Класс II (легкая сердечная недостаточность, хрипы)",
        killip_class_3: "Класс III (отек легких)",
        killip_class_4: "Класс IV (кардиогенный шок)",
        
        cardiac_arrest_label: "Остановка сердца при поступлении",
        st_deviation_label: "Отклонение сегмента ST",
        elevated_markers_label: "Повышение сердечных маркеров",
        
        // Заголовки разделов
        demographics_section: "Демография пациента",
        clinical_section: "Клиническая презентация",
        labs_section: "Лабораторные показатели",
        
        // Результаты
        in_hospital_mortality: "Госпитальная смертность",
        one_year_mortality: "Годовая смертность",
        risk_category: "Категория риска",
        invasive_strategy: "Инвазивная стратегия",
        recommendation: "Рекомендация по ведению",
        
        // Категории риска
        low_risk: "Низкий риск",
        intermediate_risk: "Промежуточный риск",
        high_risk: "Высокий риск",
        
        // Кнопки действий
        calculate_button: "Рассчитать балл GRACE",
        
        // Сообщения валидации
        age_error: "Возраст должен быть в диапазоне 18-120 лет",
        heart_rate_error: "ЧСС должна быть в диапазоне 30-300 уд/мин",
        systolic_bp_error: "Систолическое давление должно быть 60-300 ммHg",
        creatinine_error: "Креатинин должен быть в диапазоне 0.3-15.0 мг/дл"
      },
      hcmRiskScd: 'Калькулятор риска ВСС при ГКМП',
      dapt: 'Калькулятор DAPT',
      preciseDapt: 'Калькулятор PRECISE-DAPT',
      maggic: 'Калькулятор MAGGIC',
      gwtgHf: 'Калькулятор GWTG-HF',
      sts: 'Калькулятор риска STS',
      euroScore: 'Калькулятор EuroSCORE II',
      timi: 'Калькулятор риска TIMI',
      prevent: 'Калькулятор AHA PREVENT',
      hcmAf: 'Калькулятор HCM-AF',
      chadsVasc: 'Калькулятор CHA2DS2-VASc',
      hasBlеd: 'Калькулятор HAS-BLED',
      chads2: 'Калькулятор CHADS2',
      hcm_risk_scd: {
        title: 'Калькулятор риска ВСС при ГКМП',
        subtitle: 'Оценка риска внезапной сердечной смерти • Гипертрофическая кардиомиопатия',
        description: 'Доказательный прогноз 5-летнего риска внезапной сердечной смерти у пациентов с гипертрофической кардиомиопатией для принятия решения о ИКД.',
        demographics: 'Демография',
        age_label: 'Возраст (годы)',
        age_placeholder: 'Введите возраст (16-80 лет)',
        gender_label: 'Пол',
        gender_male: 'Мужской',
        gender_female: 'Женский',
        clinical_features: 'Клинические признаки',
        max_wall_thickness: 'Максимальная толщина стенки (мм)',
        max_wall_thickness_placeholder: 'Введите толщину (10-50 мм)',
        left_atrial_size: 'Размер левого предсердия (мм)',
        left_atrial_size_placeholder: 'Введите размер (25-70 мм)',
        max_lvot_gradient: 'Максимальный градиент ВОЛЖ (мм рт.ст.)',
        max_lvot_gradient_placeholder: 'Введите градиент (0-200 мм рт.ст.)',
        risk_factors: 'Факторы риска',
        family_history_scd: 'Семейный анамнез внезапной сердечной смерти',
        non_sustained_vt: 'Неустойчивая желудочковая тахикардия',
        unexplained_syncope: 'Необъяснимые синкопе',
        additional_factors: 'Дополнительные факторы риска',
        apical_aneurysm: 'Апикальная аневризма',
        extensive_lge: 'Обширное позднее усиление гадолинием (>15% массы ЛЖ)',
        exclusions: 'Критерии исключения',
        prior_scd: 'Перенесенная внезапная сердечная смерть',
        prior_icd: 'Ранее имплантированный ИКД',
        concurrent_vhd: 'Сопутствующая значимая клапанная болезнь сердца',
        infiltrative_disease: 'Инфильтративная кардиомиопатия',
        validation_age: 'Возраст должен быть в пределах 16-80 лет',
        validation_gender: 'Пол обязателен',
        validation_wall_thickness: 'Толщина стенки должна быть в пределах 10-50мм',
        validation_atrial_size: 'Размер левого предсердия должен быть в пределах 25-70мм',
        validation_lvot_gradient: 'Градиент ВОЛЖ должен быть в пределах 0-200 мм рт.ст.',
        five_year_risk: '5-летний риск ВСС',
        risk_category: 'Категория риска',
        icd_recommendation: 'Рекомендация ИКД',
        recommendations: 'Клинические рекомендации',
        not_indicated: 'Не показан',
        consider: 'Рассмотреть',
        reasonable: 'Разумно',
        indicated: 'Показан',
        family_history_scd_label: 'Семейный анамнез внезапной сердечной смерти',
        non_sustained_vt_label: 'Неустойчивая желудочковая тахикардия',
        unexplained_syncope_label: 'Необъяснимые синкопе',
        apical_aneurysm_label: 'Апикальная аневризма',
        extensive_lge_label: 'Обширное позднее усиление гадолинием',
        prior_scd_label: 'Перенесенная внезапная сердечная смерть',
        prior_icd_label: 'Ранее имплантированный ИКД',
        concurrent_vhd_label: 'Сопутствующая значимая клапанная болезнь сердца',
        infiltrative_disease_label: 'Инфильтративная кардиомиопатия',
        next_clinical_data: 'Далее: Клинические данные',
        next_risk_factors: 'Далее: Факторы риска',
        next_exclusions: 'Далее: Исключения',
        traditional_risk_factors: 'Традиционные факторы риска',
        advanced_risk_markers: 'Продвинутые маркеры риска',
        calculator_exclusions: 'Исключения калькулятора'
      }
    },
    obgyn: {
      endometrialCancer: 'Риск рака эндометрия',
      cervicalCancer: 'Риск рака шейки матки',
      ovarianCancer: 'Риск рака яичников',
      pretermBirth: 'Риск преждевременных родов',
      ovarianReserve: 'Овариальный резерв',
      bishopScore: 'Шкала Бишопа',
      dueDate: 'Калькулятор срока родов',
      preeclampsia: 'Риск преэклампсии'
    },
    coming_soon: "Скоро появится",
    coming_soon_description: "Этот калькулятор будет доступен на следующем этапе разработки. Реализация следует рекомендациям руководств ACC/AHA для клинической точности.",
    calculate: "Рассчитать",
    reset: "Сбросить",
    back: "Назад",
    next: "Далее",
    required: "Обязательно",
    optional: "Необязательно",
    demographic: "Демография",
    lab_values: "Лабораторные показатели", 
    risk_factors: "Факторы риска",
    results: "Результаты",
    interpretation: "Интерпретация",
    recommendations: "Рекомендации",
    high_risk: "Высокий риск",
    intermediate_risk: "Средний риск", 
    low_risk: "Низкий риск",
    borderline_risk: "Пограничный риск"
  },
  sidebar: {
    aiChatbot: 'ИИ Чатбот',
    patientTable: 'Таблица пациентов',
    myPatients: 'Мои пациенты',
    bgAnalysis: 'Анализ гликемии',
    ecgAnalysis: 'Анализ ЭКГ',
    medivoice: 'MediVoice транскриптор'
  },
  chat: {
    newChat: 'Новый чат',
    searchPlaceholder: 'Поиск диалогов...',
    noConversations: 'Диалогов пока нет',
    noConversationsFound: 'Диалоги не найдены',
    selectConversation: 'Выберите диалог или начните новый',
    typeMessage: 'Введите сообщение...',
    startConversation: 'Начните диалог с MediMind ИИ',
    send: 'Отправить',
    processing: 'Обработка...',
    chatWindow: 'Окно чата',
    messageHistory: 'История сообщений',
    welcomeTitle: 'Добро пожаловать в ИИ Помощник',
    welcomeMessage: 'Спросите меня о медицинских случаях, рекомендациях или получите помощь в принятии клинических решений.',
    aiTyping: 'ИИ печатает...',
    sources: 'Источники',
    showMore: 'Показать больше',
    showLess: 'Показать меньше',
    uploadFile: 'Загрузить файл',
    fileUploaded: 'Файл загружен',
    fileError: 'Ошибка файла',
    maxFileSize: 'Максимальный размер файла',
    supportedFormats: 'Поддерживаемые форматы',
    attachFile: 'Прикрепить файл',
    removeAttachment: 'Удалить вложение',
    sendMessage: 'Отправить сообщение',
    maxFilesError: 'Максимум {maxFiles} файлов разрешено',
    personalDocsAvailable: '{count} личных документов доступно',
    noPersonalDocs: 'Личные документы не загружены',
    generalMedicalKnowledge: 'Общая медицинская база знаний'
  },
  case: {
    createNewCase: 'Создать новый случай',
    newCase: 'Новый случай',
    caseTitle: 'Название случая',
    caseDescription: 'Описание случая',
    anonymizedInfo: 'Анонимизированная информация о пациенте',
    category: 'Категория',
    complexity: 'Сложность',
    tags: 'Теги',
    createCase: 'Создать случай',
    creating: 'Создание...',
    privacyNotice: 'Уведомление о конфиденциальности',
    privacyMessage: 'Пожалуйста, убедитесь, что вся информация о пациенте полностью анонимизирована. Удалите имена, даты, конкретные места и любые другие идентифицирующие детали.',
    anonymizationHelp: 'Включите соответствующую медицинскую историю, симптомы, результаты тестов и другую клиническую информацию. Убедитесь, что все идентифицирующие детали удалены.',
    activeCase: 'Активный случай',
    caseDiscussion: 'Обсуждение случая',
    resetCase: 'Сбросить случай',
    viewCases: 'Просмотр случаев',
    noCases: 'Случаи еще не созданы',
    caseCreated: 'Случай успешно создан',
    caseSaved: 'Случай сохранен',
    caseDeleted: 'Случай удален'
  },
  documents: {
    uploadTitle: 'Загрузка документов',
    uploadSubtitle: 'Добавление медицинской литературы, исследовательских работ и клинических документов в вашу базу знаний',
    dragDropText: 'Перетащите файлы сюда или нажмите для выбора',
    browseFiles: 'Обзор файлов',
    supportedFormats: 'Поддерживаемые форматы: PDF, Word, текст, Markdown, CSV',
    maxFileSize: 'Максимальный размер файла: {size}МБ',
    maxFiles: 'Максимум {count} файлов',
    selectFiles: 'Выбрать файлы',
    uploading: 'Загрузка...',
    processing: 'Обработка...',
    complete: 'Завершено',
    error: 'Ошибка',
    success: 'Успешно',
    retry: 'Повторить',
    remove: 'Удалить',
    retryAll: 'Повторить все неудачные',
    clearErrors: 'Очистить ошибки',
    title: 'Заголовок',
    titlePlaceholder: 'Введите заголовок документа',
    description: 'Описание',
    descriptionPlaceholder: 'Введите описание документа',
    tags: 'Теги',
    tagsPlaceholder: 'Добавить теги (нажмите Enter)',
    category: 'Категория',
    selectCategory: 'Выберите категорию',
    advancedOptions: 'Дополнительные параметры',
    showAdvancedOptions: 'Показать дополнительные параметры',
    hideAdvancedOptions: 'Скрыть дополнительные параметры',
    initializingKnowledgeBase: 'Инициализация персональной базы знаний...',
    uploadSuccess: 'Документы успешно загружены!',
    uploadError: 'Не удалось загрузить документы. Попробуйте еще раз.',
    fileTypeError: 'Неподдерживаемый тип файла: {type}. Пожалуйста, загрузите PDF, Word, текстовые или CSV файлы.',
    fileSizeError: 'Размер файла превышает лимит {size}МБ. Пожалуйста, выберите файл меньшего размера.',
    emptyFileError: 'Файл кажется пустым. Пожалуйста, выберите действительный файл.',
    largeFileWarning: 'Обнаружен большой файл. Обработка может занять больше времени.',
    imageFileWarning: 'Большой файл изображения. Рассмотрите сжатие для более быстрой обработки.',
    noFilesSelected: 'Файлы для загрузки не выбраны.',
    allFilesProcessed: 'Все файлы обработаны.',
    categories: {
      'research-papers': 'Исследовательские работы',
      'clinical-guidelines': 'Клинические руководства',
      'case-studies': 'Клинические случаи',
      'medical-images': 'Медицинские изображения',
      'lab-results': 'Результаты лабораторных исследований',
      'patient-education': 'Обучение пациентов',
      'protocols': 'Протоколы',
      'reference-materials': 'Справочные материалы',
      'personal-notes': 'Персональные заметки',
      'other': 'Прочее'
    },
    fileTypes: {
      'pdf': 'PDF документ',
      'word-doc': 'Word документ (.doc)',
      'word-docx': 'Word документ (.docx)',
      'text': 'Текстовый файл',
      'markdown': 'Markdown файл',
      'csv': 'CSV файл',
      'unknown': 'Неизвестно'
    },
    status: {
      pending: 'Ожидание',
      uploading: 'Загрузка',
      processing: 'Обработка',
      complete: 'Завершено',
      success: 'Успешно',
      error: 'Ошибка',
      ready: 'Готов'
    },
    
    // DocumentList translations
    list: {
      noDocuments: 'Документы ещё не загружены',
      noDocumentsFiltered: 'Документы не найдены',
      uploadFirstDocument: 'Загрузите ваш первый медицинский документ для начала работы с AI-анализом и интеллектуальным управлением документами.',
      adjustSearchCriteria: 'Попробуйте изменить критерии поиска или фильтры для поиска нужного.',
      uploadFirstButton: 'Загрузить первый документ',
      showing: 'Показано',
      of: 'из',
      documents: 'документов',
      moreResultsAvailable: 'Доступно больше результатов',
      showingFirst: 'Показаны первые {count} документов. Используйте фильтры для уточнения результатов.'
    },
    
    // DocumentItem translations
    item: {
      viewDetails: 'Просмотр деталей документа',
      downloadDocument: 'Скачать документ',
      deleteDocument: 'Удалить документ',
      processingError: 'Ошибка обработки',
      moreTagsIndicator: '+{count} ещё',
      statusLabels: {
        completed: 'Готов',
        processing: 'Обрабатывается',
        pending: 'Ожидает',
        failed: 'Ошибка'
      }
    }
  },
  profile: {
    profileInfo: 'Информация профиля',
    security: 'Безопасность',
    preferences: 'Предпочтения',
    fullName: 'Полное имя',
    medicalSpecialty: 'Медицинская специальность',
    aboutMe: 'О себе / Профессиональный контекст',
    editProfile: 'Редактировать профиль',
    saveChanges: 'Сохранить изменения',
    cancel: 'Отмена',
    saving: 'Сохранение...',
    noNameSet: 'Имя не указано',
    notSet: 'Не указано',
    unknown: 'Неизвестно',
    memberSince: 'Участник с',
    enterFullName: 'Введите ваше полное имя',
    aboutMeDesc: 'Эта информация помогает ИИ предоставить более персонализированную помощь на основе вашего опыта и квалификации.',
    aboutMePlaceholder: 'Расскажите о вашем медицинском образовании, опыте, областях интересов или любом другом контексте, который поможет ИИ лучше помочь вам...',
    selectSpecialty: 'Выберите специальность',
    cardiology: 'Кардиология',
    obgyn: 'Акушерство и гинекология',
    internalMedicine: 'Внутренние болезни',
    emergencyMedicine: 'Неотложная медицина',
    pediatrics: 'Педиатрия',
    surgery: 'Хирургия',
    familyMedicine: 'Семейная медицина',
    psychiatry: 'Психиатрия',
    radiology: 'Радиология',
    anesthesiology: 'Анестезиология',
    other: 'Другое',
    nameMinLength: 'Полное имя должно содержать минимум 2 символа',
    updateSuccess: 'Профиль успешно обновлен!',
    updateError: 'Не удалось обновить профиль. Пожалуйста, попробуйте снова.',
    passwordUpdateSuccess: 'Пароль успешно обновлен!',
    comingSoon: 'Скоро',
    preferencesDesc: 'Предпочтения и настройки будут доступны в будущем обновлении.'
  },
  errors: {
    general: 'Общая ошибка',
    network: 'Ошибка сети',
    authentication: 'Ошибка аутентификации',
    authorization: 'Ошибка авторизации',
    validation: 'Ошибка валидации',
    fileUpload: 'Ошибка загрузки файла',
    processing: 'Ошибка обработки',
    notFound: 'Не найдено',
    serverError: 'Ошибка сервера',
    unknownError: 'Неизвестная ошибка',
    tryAgain: 'Попробуйте снова',
    contactSupport: 'Обратитесь в поддержку'
  },
  medical: {
    age: 'Возраст',
    weight: 'Вес',
    height: 'Рост',
    bmi: 'ИМТ',
    bloodPressure: 'Артериальное давление',
    systolic: 'Систолическое',
    diastolic: 'Диастолическое',
    heartRate: 'Частота сердечных сокращений',
    cholesterol: 'Холестерин',
    glucose: 'Глюкоза',
    creatinine: 'Креатинин',
    hemoglobin: 'Гемоглобин',
    pregnancy: 'Беременность',
    menopause: 'Менопауза',
    smoking: 'Курение',
    diabetes: 'Диабет',
    hypertension: 'Гипертензия',
    familyHistory: 'Семейный анамнез',
    medications: 'Медикаменты',
    allergies: 'Аллергии',
    symptoms: 'Симптомы',
    diagnosis: 'Диагноз',
    treatment: 'Лечение',
    prognosis: 'Прогноз',
    followUp: 'Наблюдение'
  },
  validation: {
    required: 'Это поле обязательно',
    invalidEmail: 'Неверный адрес электронной почты',
    passwordMinLength: 'Пароль должен содержать минимум 6 символов',
    passwordsDoNotMatch: 'Пароли не совпадают',
    nameMinLength: 'Имя должно содержать минимум 2 символа',
    confirmPasswordRequired: 'Пожалуйста, подтвердите пароль',
    invalidNumber: 'Пожалуйста, введите правильное число',
    minValue: 'Значение должно быть не менее {min}',
    maxValue: 'Значение должно быть не более {max}',
    invalidDate: 'Пожалуйста, введите правильную дату',
    invalidPhone: 'Пожалуйста, введите правильный номер телефона',
    emailInvalid: 'Неверный email',
    passwordTooShort: 'Пароль слишком короткий',
    numberRequired: 'Требуется число',
    numberInvalid: 'Неверное число',
    rangeInvalid: 'Значение вне диапазона',
    dateInvalid: 'Неверная дата',
    fileRequired: 'Требуется файл',
    fileTooLarge: 'Файл слишком большой',
    fileTypeInvalid: 'Неверный тип файла',
    textTooShort: 'Текст слишком короткий',
    textTooLong: 'Текст слишком длинный',
    selectionRequired: 'Требуется выбор'
  },
  feedback: {
    saveSuccess: 'Успешно сохранено',
    updateSuccess: 'Успешно обновлено',
    deleteSuccess: 'Успешно удалено',
    uploadSuccess: 'Успешно загружено',
    calculationComplete: 'Вычисление завершено',
    operationComplete: 'Операция завершена',
    changesSaved: 'Изменения сохранены',
    dataSynced: 'Данные синхронизированы',
    actionCompleted: 'Действие выполнено'
  },
  landing: {
    heroTitle: 'Специализированный медицинский интеллект, мгновенно.',
    heroSubtitle: 'Расширяя возможности кардиологов и акушеров-гинекологов быстрым доступом к курируемой медицинской литературе, обсуждениям случаев на основе ИИ и персонализированными базами знаний. Оптимизируйте принятие решений с MediMind Expert.',
    getStarted: 'Начать бесплатный пробный период',
    learnMore: 'Узнать больше',
    features: {
      title: 'Ключевые возможности MediMind Expert',
      subtitle: 'Расширение возможностей медицинских специалистов с помощью ИИ-аналитики и индивидуальных знаний.',
      aiCoPilot: {
        title: 'ИИ Медицинский помощник',
        description: 'Участвуйте в контекстных обсуждениях случаев, получайте мгновенные ответы из медицинской литературы и используйте ИИ-ассистента, адаптированного к вашей специальности.'
      },
      knowledgeAccess: {
        title: 'Доступ к специализированным знаниям',
        description: 'Мгновенный доступ к курируемой, актуальной медицинской литературе, руководствам и планам лечения по кардиологии и акушерству-гинекологии.'
      },
      personalKB: {
        title: 'Персональная база знаний',
        description: 'Интегрируйте ваши надежные ресурсы. Загружайте документы для создания безопасной, поисковой базы знаний для вашего ИИ-помощника.'
      },
      specialtyTools: {
        title: 'Специализированные инструменты',
        description: 'Используйте встроенные медицинские калькуляторы и получайте доступ к общим формам, относящимся к вашей специальности, оптимизируя ежедневные задачи.'
      }
    },
    testimonials: 'Отзывы',
    pricing: 'Цены',
    contact: 'Контакты',
    footer: 'Подвал'
  },
  ui: {
    openMenu: 'Меню навигации открыто',
    closeMenu: 'Меню навигации закрыто',
    expandAll: 'Развернуть все',
    collapseAll: 'Свернуть все',
    selectAll: 'Выбрать все',
    clearAll: 'Очистить все',
    sortBy: 'Сортировать по',
    filterBy: 'Фильтровать по',
    groupBy: 'Группировать по',
    viewDetails: 'Просмотр деталей',
    editItem: 'Редактировать элемент',
    deleteItem: 'Удалить элемент',
    duplicateItem: 'Дублировать элемент',
    shareItem: 'Поделиться элементом',
    exportData: 'Экспорт данных',
    importData: 'Импорт данных',
    refresh: 'Обновить',
    settings: 'Настройки',
    help: 'Помощь',
    about: 'О программе',
    escapeToClose: 'Нажмите Escape для закрытия'
  },
  notes: {
    newNote: 'Новая заметка',
    searchNotes: 'Поиск заметок...',
    save: 'Сохранить',
    delete: 'Удалить',
    untitledNote: 'Заметка без названия',
    addNote: 'Добавить заметку'
  },
  patients: {
    title: 'Таблица кардиологических пациентов - 9-й этаж',
    addPatient: 'Добавить пациента',
    status: {
      unstable: 'Нестабильный',
      stable: 'Стабильный',
      'discharge-ready': 'Готов к выписке'
    },
    rooms: {
      title: 'Палаты',
      room: 'Палата {{number}}',
      bed: 'Койка {{number}}',
      clickToAdd: 'Нажмите чтобы добавить пациента'
    },
    basicInfo: {
      name: 'Имя',
      diagnosis: 'Диагноз',
      comorbidities: 'Сопутствующие заболевания'
    }
  },
  onboarding: {
    specialty: {
      title: "Выберите свою медицинскую специальность",
      subtitle: "Выберите основную область практики для получения персонализированной помощи ИИ и ресурсов",
      featuresTitle: "Что вы получите:",
      note: "Вы можете использовать ресурсы обеих специальностей, но ваше рабочее пространство будет оптимизировано для вашего основного выбора",
      cardiology: {
        name: "Кардиология",
        description: "Уход за сердцем и сердечно-сосудистой системой",
        features: {
          cardiac: "Инструменты кардиологической оценки",
          ecg: "Руководства по интерпретации ЭКГ",
          heartFailure: "Протоколы сердечной недостаточности",
          interventional: "Ресурсы интервенционной кардиологии"
        }
      },
      obgyn: {
        name: "Акушерство и гинекология",
        description: "Акушерство и гинекология",
        features: {
          prenatal: "Руководства по пренатальному уходу",
          gynecological: "Гинекологические процедуры",
          obstetric: "Акушерские калькуляторы",
          reproductive: "Ресурсы репродуктивного здоровья"
        }
      }
    },
    aboutMe: {
      title: "Расскажите о себе",
      subtitle: "Помогите нам персонализировать вашего ИИ-ассистента, поделившись контекстом о вашей практике и опыте",
      label: "О вашей практике и опыте",
      placeholder: "Поделитесь любыми деталями, которые помогут ИИ предоставить более релевантную помощь. Например, ваш опыт работы, условия практики, области особого интереса или типичные случаи, с которыми вы сталкиваетесь...",
      wordCount: "{{count}} слов • Необязательно, но рекомендуется для лучшей персонализации",
      keepConcise: "Рассмотрите возможность сохранения краткости для лучших результатов",
      suggestionsTitle: "Рассмотрите включение:",
      suggestions: {
        experience: "Годы опыта в практике",
        workplace: "Текущие условия работы (больница, клиника, частная практика)",
        interests: "Области особого интереса в вашей специальности",
        cases: "Типы случаев, с которыми вы чаще всего сталкиваетесь",
        approaches: "Предпочтительные подходы к лечению или методологии",
        education: "Области фокуса непрерывного образования"
      },
      exampleTitle: "Пример:",
      exampleText: "\"Я кардиолог с 8-летним опытом работы в крупной больничной системе. Специализируюсь на интервенционной кардиологии и часто работаю со сложными случаями ЧКВ. Особенно интересуюсь последними данными о процедурах TAVR и ведении пациентов с множественными сопутствующими заболеваниями.\"",
      skipForNow: "Пропустить пока",
      completeSetup: "Завершить настройку"
    }
  },
  loading: {
    loading: "Загрузка...",
    verifying_specialty: "Проверка доступа к специальности...",
    authenticating: "Аутентификация...",
    processing: "Обработка...",
    please_wait: "Пожалуйста, подождите..."
  },
  access: {
    access_denied: "Доступ запрещен. Этот раздел ограничен для специалистов {specialties}.",
    unauthorized: "У вас нет доступа к этому разделу.",
    invalid_specialty: "Недействительный доступ к специальности.",
    redirect_message: "Перенаправление в ваше рабочее пространство..."
  },
  coming_soon: "Скоро",
  coming_soon_description: "Этот калькулятор будет доступен в следующей фазе разработки. Реализация соответствует рекомендациям ACC/AHA для клинической точности.",
  calculate: "Вычислить",
  reset: "Сбросить",
  back: "Назад",
  next: "Далее",
  required: "Обязательно",
  optional: "Необязательно",
  demographic: "Демография",
  lab_values: "Лабораторные показатели",
  risk_factors: "Факторы риска",
  results: "Результаты",
  interpretation: "Интерпретация",
  recommendations: "Рекомендации",
  high_risk: "Высокий риск",
  intermediate_risk: "Умеренный риск",
  low_risk: "Низкий риск",
  borderline_risk: "Пограничный риск",
  hcm_risk_scd: {
    title: "HCM Risk-SCD Калькулятор",
    subtitle: "Оценка риска внезапной сердечной смерти • Гипертрофическая кардиомиопатия",
    description: "5-летний прогноз риска внезапной сердечной смерти у пациентов с гипертрофической кардиомиопатией для принятия решения об ИКД.",
    demographics: "Демография",
    age_label: "Возраст (лет)",
    age_placeholder: "Введите возраст (16-80 лет)",
    gender_label: "Пол",
    gender_male: "Мужской",
    gender_female: "Женский",
    clinical_features: "Клинические особенности",
    max_wall_thickness: "Максимальная толщина стенки (мм)",
    max_wall_thickness_placeholder: "Введите толщину (10-50 мм)",
    left_atrial_size: "Размер левого предсердия (мм)",
    left_atrial_size_placeholder: "Введите размер (25-70 мм)",
    max_lvot_gradient: "Максимальный градиент ВТЛЖ (мм рт.ст.)",
    max_lvot_gradient_placeholder: "Введите градиент (0-200 мм рт.ст.)",
    risk_factors: "Факторы риска",
    family_history_scd: "Семейный анамнез внезапной сердечной смерти",
    non_sustained_vt: "Неустойчивая желудочковая тахикардия",
    unexplained_syncope: "Необъяснимый обморок",
    additional_factors: "Дополнительные факторы риска",
    apical_aneurysm: "Апикальная аневризма",
    extensive_lge: "Обширное позднее усиление гадолинием (>15% массы ЛЖ)",
    exclusions: "Критерии исключения",
    prior_scd: "Ранее перенесенная внезапная сердечная смерть",
    prior_icd: "Ранее имплантированный ИКД",
    concurrent_vhd: "Сопутствующая значимая клапанная болезнь",
    infiltrative_disease: "Инфильтративная кардиомиопатия",
    validation_age: "Возраст должен быть в диапазоне 16-80 лет",
    validation_gender: "Пол обязателен",
    validation_wall_thickness: "Толщина стенки должна быть в диапазоне 10-50 мм",
    validation_atrial_size: "Размер левого предсердия должен быть в диапазоне 25-70 мм",
    validation_lvot_gradient: "Градиент ВТЛЖ должен быть в диапазоне 0-200 мм рт.ст.",
    five_year_risk: "5-летний риск ВСС",
    risk_category: "Категория риска",
    icd_recommendation: "Рекомендация ИКД",
    recommendations: "Клинические рекомендации",
    not_indicated: "Не показано",
    consider: "Рассмотреть",
    reasonable: "Разумно",
    indicated: "Показано",
    family_history_scd_label: "Семейный анамнез внезапной сердечной смерти",
    non_sustained_vt_label: "Неустойчивая желудочковая тахикардия",
    unexplained_syncope_label: "Необъяснимый обморок",
    apical_aneurysm_label: "Апикальная аневризма",
    extensive_lge_label: "Обширное позднее усиление гадолинием",
    prior_scd_label: "Ранее перенесенная внезапная сердечная смерть",
    prior_icd_label: "Ранее имплантированный ИКД",
    concurrent_vhd_label: "Сопутствующая значимая клапанная болезнь",
    infiltrative_disease_label: "Инфильтративная кардиомиопатия",
    next_clinical_data: "Далее: Клинические данные",
    next_risk_factors: "Далее: Факторы риска",
    next_exclusions: "Далее: Исключения",
    traditional_risk_factors: "Традиционные факторы риска",
    advanced_risk_markers: "Продвинутые маркеры риска",
    calculator_exclusions: "Исключения калькулятора"
  },
  ascvd: {
    title: 'ASCVD Калькулятор риска',
    subtitle: '10-летняя оценка риска атеросклеротических сердечно-сосудистых заболеваний',
    description: 'Объединенные когортные уравнения ACC/AHA для оценки 10-летнего риска первого тяжелого события ASCVD (инфаркт миокарда, смерть от ИБС или инсульт).',
    age_label: 'Возраст (лет)',
    age_placeholder: 'Введите возраст (20-79 лет)',
    sex_label: 'Пол',
    sex_male: 'Мужской',
    sex_female: 'Женский',
    race_label: 'Раса/Этническая принадлежность',
    race_white: 'Белый',
    race_african_american: 'Афроамериканец',
    race_other: 'Другой',
    total_cholesterol_label: 'Общий холестерин (мг/дл)',
    total_cholesterol_placeholder: 'Введите общий холестерин (130-320)',
    hdl_cholesterol_label: 'HDL холестерин (мг/дл)',
    hdl_cholesterol_placeholder: 'Введите HDL холестерин (20-100)',
    systolic_bp_label: 'Систолическое артериальное давление (мм рт.ст.)',
    systolic_bp_placeholder: 'Введите систолическое давление (90-200)',
    on_htn_meds_label: 'В настоящее время принимает препараты от давления',
    diabetes_label: 'Сахарный диабет',
    smoker_label: 'Курит в настоящее время',
    validation_age: 'Возраст должен быть 20-79 лет для расчета риска ASCVD',
    validation_sex: 'Пол обязателен',
    validation_race: 'Раса необходима для точного расчета риска',
    validation_total_cholesterol: 'Общий холестерин должен быть в диапазоне 130-320 мг/дл',
    validation_hdl_cholesterol: 'HDL холестерин должен быть в диапазоне 20-100 мг/дл',
    validation_systolic_bp: 'Систолическое давление должно быть в диапазоне 90-200 мм рт.ст.',
    ten_year_risk: '10-летний риск ASCVD',
    lifetime_risk: 'Пожизненный риск',
    statin_benefit: 'Польза статиновой терапии',
    bp_control_benefit: 'Польза контроля давления',
    smoking_cessation_benefit: 'Польза отказа от курения',
    aspirin_benefit: 'Польза аспириновой терапии',
    demographics_section: "Демографические данные",
    lab_values_section: "Лабораторные данные",
    risk_factors_section: "Факторы риска",
    calculate_button: "Рассчитать риск ASCVD"
  },
  grace: {
    title: "GRACE 2.0 Калькулятор риска",
    subtitle: "Оценка риска острого коронарного синдрома",
    description: "Глобальный реестр острых коронарных событий - стратификация риска для пациентов с NSTEMI/НС и STEMI.",
    
    // Демография пациента
    age_label: "Возраст (лет)",
    age_placeholder: "Введите возраст пациента",
    heart_rate_label: "Частота сердечных сокращений (в минуту)",
    heart_rate_placeholder: "Введите ЧСС",
    systolic_bp_label: "Систолическое артериальное давление (mmHg)",
    systolic_bp_placeholder: "Введите систолическое давление",
    creatinine_label: "Креатинин сыворотки (мг/дл)",
    creatinine_placeholder: "Введите уровень креатинина",
    
    // Клинические характеристики
    killip_class_label: "Класс по Киллипу",
    killip_class_1: "Класс I (без сердечной недостаточности)",
    killip_class_2: "Класс II (легкая сердечная недостаточность, хрипы)",
    killip_class_3: "Класс III (отек легких)",
    killip_class_4: "Класс IV (кардиогенный шок)",
    
    cardiac_arrest_label: "Остановка сердца при поступлении",
    st_deviation_label: "Отклонение сегмента ST",
    elevated_markers_label: "Повышенные сердечные маркеры",
    
    // Заголовки разделов
    demographics_section: "Демография пациента",
    clinical_section: "Клиническая презентация",
    labs_section: "Лабораторные значения",
    
    // Результаты
    in_hospital_mortality: "Госпитальная смертность",
    one_year_mortality: "1-летняя смертность",
    risk_category: "Категория риска",
    invasive_strategy: "Инвазивная стратегия",
    recommendation: "Рекомендация по лечению",
    
    // Категории риска
    low_risk: "Низкий риск",
    intermediate_risk: "Умеренный риск",
    high_risk: "Высокий риск",
    
    // Кнопки действий
    calculate_button: "Рассчитать счет GRACE",
    
    // Сообщения валидации
    age_error: "Возраст должен быть в диапазоне 18-120 лет",
    heart_rate_error: "ЧСС должна быть в диапазоне 30-300 в минуту",
    systolic_bp_error: "Систолическое давление должно быть в диапазоне 60-300 mmHg",
    creatinine_error: "Креатинин должен быть в диапазоне 0.3-15.0 мг/дл"
  },
  dapt: {
    title: 'Калькулятор счета DAPT',
    subtitle: 'Продолжительность двойной антиагрегантной терапии • Оценка риска-пользы',
    description: "Оценка риска и пользы продленного курса двойной антиагрегантной терапии после ЧКВ.",
    
    // Демография пациента
    age_label: "Возраст (лет)",
    age_placeholder: "Введите возраст пациента",
    
    // Факторы риска
    cigarette_smoking_label: "Курение сигарет",
    diabetes_mellitus_label: "Сахарный диабет",
    mi_at_presentation_label: "Инфаркт миокарда при презентации",
    prior_pci_mi_label: "Ранее ЧКВ или инфаркт миокарда",
    paclitaxel_stent_label: "Паклитаксел-элюирующий стент",
    stent_diameter_label: "Диаметр стента (мм)",
    stent_diameter_placeholder: "Введите диаметр стента",
    chf_lvef_label: "Сердечная недостаточность или ФВ ЛЖ <30%",
    vein_graft_pci_label: "ЧКВ венозного шунта",
    
    // Заголовки разделов
    demographics_section: "Демография пациента",
    risk_factors_section: "Факторы риска",
    procedure_details_section: "Детали процедуры",
    
    // Результаты
    dapt_score: "DAPT счет",
    ischemic_benefit: "Ишемическая польза",
    bleeding_risk: "Риск кровотечения",
    net_benefit: "Чистая польза",
    recommendation: "Рекомендация",
    duration_guidance: "Руководство по продолжительности",
    clinical_considerations: "Клинические соображения",
    
    // Категории пользы
    high_benefit: "Высокая польза",
    intermediate_benefit: "Умеренная польза",
    low_benefit: "Низкая польза",
    
    // Категории риска
    low_risk: "Низкий риск",
    intermediate_risk: "Умеренный риск",
    high_risk: "Высокий риск",
    
    // Рекомендации
    extended_dapt_recommended: "Продленная DAPT рекомендуется",
    extended_dapt_consider: "Рассмотреть продленную DAPT",
    extended_dapt_not_recommended: "Продленная DAPT не рекомендуется",
    
    // Кнопка расчета
    calculate_button: "Рассчитать риск-пользу DAPT",
    
    // Сообщения валидации
    age_error: "Возраст должен быть в диапазоне 18-120 лет",
    stent_diameter_error: "Диаметр стента должен быть в диапазоне 1-10 мм",
    
    // Детальные результаты
    risk_balance: "Баланс риска",
    ischemic_reduction: "Снижение ишемического риска",
    bleeding_increase: "Увеличение риска кровотечения",
    net_clinical_benefit: "Чистая клиническая польза",
    
    // Возрастные факторы
    age_factor: "Возрастной фактор",
    elderly_bleeding_risk: "Риск кровотечения у пожилых",
    life_expectancy: "Ожидаемая продолжительность жизни",
    
    // Рекомендуемая продолжительность
    twelve_months: "12 месяцев (стандартно)",
    eighteen_months: "18 месяцев",
    thirty_months: "30 месяцев",
    consider_shorter: "Рассмотреть более короткий курс",
    
    // Мониторинг
    bleeding_monitoring: "Мониторинг кровотечения",
    enhanced_monitoring: "Усиленный мониторинг",
    routine_monitoring: "Рутинный мониторинг",
    algorithm_validation: 'Усовершенствованный алгоритм с возрастным риском кровотечения и доказательными клиническими рекомендациями из исследований DAPT и валидационных исследований PRECISE-DAPT.'
  },
  timi: {
    title: 'Калькулятор счета риска TIMI',
    subtitle: 'Оценка риска НС/ИМбпST • Неотложная медицина и кардиология',
    
    // Экстренное предупреждение
    emergency_tool: 'Инструмент экстренной оценки',
    tool_description: 'Разработан для быстрой стратификации риска в отделениях экстренной помощи и условиях острой помощи. Результаты определяют решения о немедленном ведении пациентов с нестабильной стенокардией или инфарктом миокарда без подъема ST.',
    
    // Этапы прогресса
    patient_info: 'Инфо пациента',
    clinical_factors: 'Клинические факторы',
    
    // Демографический раздел
    demographics_section: 'Демография пациента и факторы риска',
    age_label: 'Возраст пациента',
    age_help: 'Возраст ≥65 лет добавляет 1 балл к счету TIMI',
    age_error: 'Возраст должен быть в пределах 18-120 лет',
    
    // Раздел факторов риска
    coronary_risk_factors: 'Количество коронарных факторов риска',
    risk_factors_help: 'Факторы риска: семейный анамнез, гипертензия, гиперхолестеринемия, диабет, курение. ≥3 фактора = 1 балл',
    risk_factors_detail: 'Подсчет: семейный анамнез ИБС, гипертензия, гиперхолестеринемия, сахарный диабет, курение',
    
    // Раздел клинической оценки
    clinical_assessment: 'Факторы клинической оценки',
    clinical_assessment_description: 'Каждый фактор добавляет 1 балл к счету TIMI',
    
    // Клинические факторы
    known_cad: 'Известная болезнь коронарных артерий',
    known_cad_desc: 'Стеноз ≥50% при предыдущей катетеризации или визуализации',
    aspirin_use: 'Недавнее применение аспирина',
    aspirin_use_desc: 'Применение аспирина в течение предыдущих 7 дней',
    severe_angina: 'Тяжелые ангинальные симптомы',
    severe_angina_desc: '≥2 ангинальных эпизода в течение 24 часов',
    st_deviation: 'Отклонение сегмента ST',
    st_deviation_desc: 'Отклонение ST ≥0.5мм на ЭКГ',
    elevated_biomarkers: 'Повышенные сердечные биомаркеры',
    elevated_biomarkers_desc: 'Повышенный тропонин, КК-МБ или другие сердечные маркеры',
    
    // Навигация
    next_clinical_factors: 'Далее: Клинические факторы',
    calculate_button: 'Рассчитать счет риска TIMI',
    
    // Результаты
    score_analysis: 'Счет риска TIMI',
    score_points: '{score}/7 баллов',
    
    // Категории риска
    low_risk: 'Низкий риск',
    intermediate_risk: 'Средний риск',
    high_risk: 'Высокий риск',
    
    // Разбивка риска
    fourteen_day_breakdown: 'Разбивка 14-дневного риска',
    mortality: 'Смертность',
    myocardial_infarction: 'Инфаркт миокарда',
    urgent_revascularization: 'Экстренная реваскуляризация',
    
    // Срочность ведения
    management_urgency: 'Срочность ведения',
    routine_management: 'Рутинное ведение',
    early_intervention: 'Раннее вмешательство',
    urgent_management: 'Экстренное ведение',
    timeframe_24_72: '24-72 часа',
    timeframe_24_48: '24-48 часов',
    timeframe_under_24: '<24 часов',
    recommended_timeframe: 'Рекомендуемые сроки:',
    
    // Стратегия клинического ведения
    clinical_strategy: 'Стратегия клинического ведения',
    
    // Рекомендации по риску (по счету)
    recommendation_low_0: 'Низкий риск неблагоприятных исходов. Консервативное ведение с медикаментозной терапией может быть подходящим. Рассмотрите раннюю выписку с тщательным амбулаторным наблюдением в течение 72 часов.',
    recommendation_low_1: 'Низкий риск неблагоприятных исходов. Консервативное ведение с медикаментозной терапией может быть подходящим. Рассмотрите раннюю выписку с тщательным амбулаторным наблюдением в течение 72 часов.',
    recommendation_low_2: 'Низкий риск неблагоприятных исходов. Консервативное ведение с медикаментозной терапией может быть подходящим. Рассмотрите раннюю выписку с тщательным амбулаторным наблюдением в течение 72 часов.',
    recommendation_intermediate_3: 'Средний риск неблагоприятных исходов. Ранняя инвазивная стратегия в течение 24-48 часов разумна. Рекомендуется госпитализация с кардиологической консультацией.',
    recommendation_intermediate_4: 'Средний риск неблагоприятных исходов. Ранняя инвазивная стратегия в течение 24-48 часов разумна. Рекомендуется госпитализация с кардиологической консультацией.',
    recommendation_high_5: 'Высокий риск неблагоприятных исходов. Рекомендуется ранняя инвазивная стратегия в течение 24 часов. Требуется немедленная кардиологическая консультация и агрессивное медикаментозное ведение.',
    recommendation_high_6: 'Высокий риск неблагоприятных исходов. Рекомендуется ранняя инвазивная стратегия в течение 24 часов. Требуется немедленная кардиологическая консультация и агрессивное медикаментозное ведение.',
    recommendation_high_7: 'Высокий риск неблагоприятных исходов. Рекомендуется ранняя инвазивная стратегия в течение 24 часов. Требуется немедленная кардиологическая консультация и агрессивное медикаментозное ведение.',
    
    // Компоненты счета
    score_components: 'Компоненты счета ({score}/7 баллов)',
    age_component: 'Возраст ≥65 лет',
    cad_risk_factors_component: '≥3 фактора риска ИБС',
    known_cad_component: 'Известная коронарная болезнь',
    aspirin_component: 'Недавнее применение аспирина',
    angina_component: 'Тяжелые ангинальные симптомы',
    st_component: 'Отклонение сегмента ST',
    biomarkers_component: 'Повышенные биомаркеры',
    
    // Интерпретации
    interpretation_low: 'Низкий риск ({risk}%) смерти, ИМ или экстренной реваскуляризации в течение 14 дней. Консервативное ведение разумно.',
    interpretation_intermediate: 'Средний риск ({risk}%) неблагоприятных исходов. Рекомендуется ранняя инвазивная стратегия в течение 24-48 часов.',
    interpretation_high: 'Высокий риск ({risk}%) неблагоприятных исходов. Настоятельно рекомендуется экстренное инвазивное ведение в течение 24 часов.',
    
    // Кнопки действий
    new_assessment: 'Новая оценка',
    modify_inputs: 'Изменить ввод',
    
    // Подвал
    based_on_timi: 'Основано на шкале риска TIMI для UA/NSTEMI • 14-дневная валидация композитной конечной точки',
    clinically_validated: 'Клинически валидировано'
  },
  precise_dapt: {
    title: 'PRECISE-DAPT Калькулятор риска кровотечения',
    subtitle: 'Оценка риска кровотечения DAPT • Анализ сердечно-сосудистой безопасности',
    
    // Описание инструмента
    tool_description: 'Валидированный калькулятор риска кровотечения для пациентов на двойной антиагрегантной терапии (DAPT). Обеспечивает количественную оценку риска кровотечения для принятия решений о продолжительности DAPT у пациентов после ЧКВ.',
    bleeding_assessment_tool: 'Инструмент оценки риска кровотечения',
    
    // Прогресс шагов
    patient_labs: 'Лабораторные данные пациента',
    bleeding_history: 'История кровотечений',
    
    // Демография и лабораторные значения
    demographics_labs_section: 'Демография пациента и лабораторные значения',
    age_label: 'Возраст пациента',
    age_help: 'Пожилые пациенты имеют повышенный риск кровотечения из-за сопутствующих заболеваний и лекарственных взаимодействий',
    age_error: 'Возраст должен быть в диапазоне 18-120 лет',
    
    // Лабораторные значения
    laboratory_values: 'Критические лабораторные параметры',
    laboratory_description: 'Лабораторные значения значительно влияют на оценку риска кровотечения',
    
    creatinine_label: 'Креатинин сыворотки',
    creatinine_help: 'Маркер функции почек - высокий креатинин указывает на повышенный риск кровотечения',
    creatinine_error: 'Креатинин должен быть в диапазоне 0.5-15 мг/дл',
    creatinine_unit: 'мг/дл',
    
    hemoglobin_label: 'Уровень гемоглобина',
    hemoglobin_help: 'Анемия увеличивает геморрагические осложнения и потребность в трансфузии',
    hemoglobin_error: 'Гемоглобин должен быть в диапазоне 5-20 г/дл',
    hemoglobin_unit: 'г/дл',
    
    white_blood_count_label: 'Количество лейкоцитов',
    white_blood_count_help: 'Повышенный или низкий WBC может указывать на основные состояния, влияющие на риск кровотечения',
    white_blood_count_error: 'WBC должен быть в диапазоне 1-50 × 10³/мкл',
    white_blood_count_unit: '× 10³/мкл',
    
    // Раздел истории кровотечений
    bleeding_history_section: 'Оценка истории кровотечений',
    bleeding_history_description: 'Предыдущие эпизоды кровотечений являются сильными предикторами будущего риска кровотечения',
    
    previous_bleed: 'Предыдущее спонтанное кровотечение',
    previous_bleed_desc: 'История спонтанного кровотечения, требовавшего медицинской помощи или госпитализации',
    
    // Навигация
    next_bleeding_history: 'Далее: История кровотечений',
    calculate_button: 'Рассчитать риск кровотечения',
    
    // Результаты
    bleeding_risk_analysis: 'PRECISE-DAPT Анализ риска кровотечения',
    score_points: '{score} баллов',
    
    // Категории риска
    low_risk: 'Низкий риск',
    intermediate_risk: 'Промежуточный риск',
    high_risk: 'Высокий риск',
    
    // Панели риска
    bleeding_risk: 'Риск кровотечения',
    major_bleeding: 'Большое кровотечение',
    safe_duration: 'Безопасная продолжительность',
    
    // Описания риска
    overall_bleeding_risk: '{risk}% общий риск кровотечения в течение 1 года',
    annual_major_bleeding: 'Годовой риск большого кровотечения во время DAPT',
    recommended_dapt_duration: 'Рекомендуемый диапазон продолжительности DAPT',
    
    // Разделы клинических рекомендаций
    clinical_recommendation: 'Клиническая рекомендация',
    clinical_benefit_analysis: 'Анализ клинической пользы',
    contributing_risk_factors: 'Способствующие факторы риска',
    score_interpretation: 'Интерпретация шкалы PRECISE-DAPT',
    
    // Интерпретации уровня риска
    interpretation_low: 'Низкий риск кровотечения ({risk}%) поддерживает стандартную продолжительность DAPT. Продленная терапия рекомендуется на основе оценки ишемического риска.',
    interpretation_intermediate: 'Промежуточный риск кровотечения ({risk}%) требует индивидуального решения о продолжительности. Балансируйте ишемическую пользу против риска кровотечения с усиленным мониторингом.',
    interpretation_high: 'Высокий риск кровотечения ({risk}%) указывает на сокращенную продолжительность DAPT. Приоритет профилактики кровотечений с комплексными стратегиями снижения риска.',
    
    // Рекомендации DAPT по уровню риска
    recommendation_low: 'Стандартная или продленная продолжительность DAPT безопасна и подходящая',
    recommendation_intermediate: 'Индивидуальная продолжительность DAPT с усиленным мониторингом риска кровотечения',
    recommendation_high: 'Рассмотрите сокращенную продолжительность DAPT с комплексными стратегиями профилактики кровотечений',
    
    // Руководство по продолжительности
    duration_low: '12+ месяцев DAPT со стандартными протоколами мониторинга',
    duration_intermediate: '6-12 месяцев продолжительности DAPT с тщательной оценкой соотношения риск-польза',
    duration_high: 'Рассмотрите 3-6 месяцев продолжительности DAPT если клинически подходящее и безопасное',
    
    // Клиническое руководство
    guidance_low: 'Низкий профиль риска кровотечения поддерживает стандартные протоколы DAPT. Рассмотрите продленную продолжительность на основе оценки ишемического риска и оценки шкалы DAPT.',
    guidance_intermediate: 'Умеренный риск кровотечения требует тщательного баланса ишемической пользы против риска кровотечения. Усиленный мониторинг с терапией ингибиторами протонной помпы и регулярными проверками гемоглобина рекомендуется.',
    guidance_high: 'Высокий риск кровотечения требует сокращенной продолжительности DAPT. Приоритет профилактики кровотечений с терапией ИПП, тщательным процедурным планированием и частым мониторингом. Рассмотрите альтернативные антиагрегантные стратегии если доступны.',
    
    // Описания клинической пользы
    benefit_low: 'Отличный профиль безопасности для продленной антиагрегантной терапии',
    benefit_intermediate: 'Требуется сбалансированный подход - стратегии снижения риска кровотечения существенны',
    benefit_high: 'Профилактика кровотечений имеет приоритет - минимизируйте воздействие DAPT при сохранении существенной ишемической защиты',
    
    // Описания безопасной продолжительности
    safe_duration_low: '12-30 месяцев со стандартным мониторингом',
    safe_duration_intermediate: '6-12 месяцев с усиленным мониторингом и профилактикой кровотечений',
    safe_duration_high: '3-6 месяцев с интенсивными протоколами профилактики кровотечений',
    
    // Руководство по интерпретации шкалы
    score_low_range: 'Баллы <25',
    score_intermediate_range: 'Баллы 25-49',
    score_high_range: 'Баллы ≥50',
    
    score_low_description: 'Низкий риск кровотечения (7.9%), подходящая стандартная продолжительность DAPT',
    score_intermediate_description: 'Промежуточный риск (17.8%), индивидуализируйте продолжительность',
    score_high_description: 'Высокий риск (35.1%), рассмотрите сокращенную DAPT',
    
    // Факторы риска
    risk_factor_advanced_age: 'Преклонный возраст (≥75 лет) - группа наивысшего риска кровотечения',
    risk_factor_elderly_age: 'Пожилой возраст (65-74 года) - повышенная восприимчивость к кровотечениям',
    risk_factor_severe_renal: 'Тяжелая почечная недостаточность (Cr ≥2.0) - значительное повышение риска кровотечения',
    risk_factor_moderate_renal: 'Умеренная почечная недостаточность (Cr 1.5-1.9) - умеренный риск кровотечения',
    risk_factor_mild_renal: 'Легкая почечная недостаточность (Cr 1.2-1.4) - легкое повышение риска кровотечения',
    risk_factor_severe_anemia: 'Тяжелая анемия (Hgb <10) - основной фактор риска кровотечения',
    risk_factor_moderate_anemia: 'Легкая-умеренная анемия (Hgb 10-12) - повышенная восприимчивость к кровотечениям',
    risk_factor_low_hemoglobin: 'Низко-нормальный гемоглобин (Hgb 12-13) - легкое повышение риска кровотечения',
    risk_factor_elevated_wbc: 'Повышенное количество лейкоцитов (>12) - воспалительное состояние',
    risk_factor_low_wbc: 'Низкое количество лейкоцитов (<4) - потенциальная гематологическая проблема',
    risk_factor_previous_bleeding: 'История предыдущего кровотечения - сильнейший предиктор будущего кровотечения',
    
    // Кнопки действий
    new_assessment: 'Новая оценка',
    modify_inputs: 'Изменить входные данные',
    
    // Подвал
    enhanced_algorithm: 'Усовершенствованный алгоритм PRECISE-DAPT',
    algorithm_validation: '✓ Валидировано исследованием PRECISE-DAPT • Усовершенствованная оценка риска кровотечения с количественным анализом безопасности',
    based_on_precise_dapt: 'Основано на исследовании PRECISE-DAPT • Оценка риска кровотечения для выбора продолжительности DAPT',
    bleeding_safety_validated: 'Безопасность в отношении кровотечений валидирована'
  },
  bishop_score: {
    title: 'Калькулятор шкалы Бишопа',
    subtitle: 'Оценка зрелости шейки матки • Прогнозирование успеха индукции родов • Доказательная оценка',
    
    // Tool description
    tool_description: 'Стандартизированная система оценки зрелости шейки матки для прогнозирования успеха индукции родов. Оценивает пять ключевых цервикальных параметров и положение плода.',
    assessment_tool: 'Инструмент оценки зрелости шейки матки',
    
    // Progress steps
    cervical_assessment: 'Оценка шейки матки',
    
    // Section headers
    cervical_parameters_section: 'Параметры оценки шейки матки',
    cervical_parameters_description: 'Пять ключевых параметров оценивают готовность шейки матки к индукции родов',
    
    // Cervical dilation
    cervical_dilation_label: 'Раскрытие шейки матки',
    cervical_dilation_help: 'Измерение раскрытия шейки матки в сантиметрах при пальцевом исследовании',
    cervical_dilation_error: 'Раскрытие шейки матки должно быть между 0-10 см',
    cervical_dilation_unit: 'см',
    
    // Cervical effacement
    cervical_effacement_label: 'Сглаживание шейки матки',
    cervical_effacement_help: 'Процент истончения шейки матки - измеряет подготовку шейки матки к родам',
    cervical_effacement_error: 'Сглаживание шейки матки должно быть между 0-100%',
    cervical_effacement_unit: '%',
    
    // Cervical consistency
    cervical_consistency_label: 'Консистенция шейки матки',
    cervical_consistency_help: 'Плотность тканей шейки матки при пальцевом исследовании',
    cervical_consistency_firm: 'Плотная',
    cervical_consistency_medium: 'Умеренная',
    cervical_consistency_soft: 'Мягкая',
    
    // Cervical position
    cervical_position_label: 'Положение шейки матки',
    cervical_position_help: 'Анатомическое положение шейки матки относительно таза',
    cervical_position_posterior: 'Заднее',
    cervical_position_mid: 'Среднее положение',
    cervical_position_anterior: 'Переднее',
    
    // Fetal station
    fetal_station_label: 'Стояние плода',
    fetal_station_help: 'Положение предлежащей части плода относительно седалищных остей (от -3 до +3)',
    fetal_station_error: 'Стояние плода должно быть между -3 и +3',
    fetal_station_unit: 'стояние',
    
    // Calculate button
    calculate_button: 'Рассчитать шкалу Бишопа',
    
    // Results
    bishop_score_analysis: 'Анализ шкалы Бишопа',
    total_score: 'Общий балл',
    score_points: '{score}/13 баллов',
    
    // Score categories
    unfavorable_cervix: 'Неблагоприятная шейка матки',
    intermediate_cervix: 'Промежуточная шейка матки',
    favorable_cervix: 'Благоприятная шейка матки',
    very_favorable_cervix: 'Очень благоприятная шейка матки',
    
    // Induction success prediction
    induction_success: 'Успех индукции',
    labor_likelihood: 'Вероятность родов',
    delivery_prediction: 'Прогноз родов',
    
    // Success categories
    unlikely_success: 'Маловероятный успех',
    possible_success: 'Возможный успех',
    likely_success: 'Вероятный успех',
    very_likely_success: 'Очень вероятный успех',
    
    // Clinical interpretations
    interpretation_0_3: 'Неблагоприятная шейка матки (балл 0-3). Индукция родов маловероятна. Рассмотрите средства созревания шейки матки перед попытками индукции.',
    interpretation_4_6: 'Промежуточная зрелость шейки матки (балл 4-6). Умеренная частота успеха индукции. Рассмотрите преиндукционное созревание шейки матки.',
    interpretation_7_8: 'Благоприятная шейка матки (балл 7-8). Хорошая вероятность успешной индукции. Продолжайте стандартные протоколы индукции.',
    interpretation_9_13: 'Очень благоприятная шейка матки (балл 9-13). Отличная вероятность успешных вагинальных родов. Индукция скорее всего будет успешной.',
    
    // Clinical recommendations
    clinical_recommendation: 'Клиническая рекомендация',
    management_guidance: 'Руководство по ведению',
    induction_timing: 'Время индукции',
    cervical_ripening: 'Созревание шейки матки',
    
    // Recommendations by score
    recommendation_unfavorable: 'Рассмотрите созревание шейки матки простагландинами или механическими методами перед индукцией. Консультирование пациентки о более высоком риске кесарева сечения.',
    recommendation_intermediate: 'Можно продолжить с индукцией, но рассмотрите преиндукционное созревание шейки матки. Рекомендуется усиленный мониторинг и гибкость в сроках.',
    recommendation_favorable: 'Продолжайте стандартные протоколы индукции родов. Хороший кандидат для успешных вагинальных родов.',
    recommendation_very_favorable: 'Отличный кандидат для индукции родов. Минимальная подготовка шейки матки необходима. Продолжайте с уверенностью.',
    
    // Management guidance
    guidance_unfavorable: 'Неблагоприятная шкала Бишопа указывает на более высокий риск неудачной индукции и кесарева сечения. Рассмотрите отсроченную индукцию с созреванием шейки матки или выжидательную тактику при соответствии.',
    guidance_intermediate: 'Промежуточный балл предполагает умеренную вероятность успеха. Преиндукционное созревание шейки матки может улучшить исходы. Обсудите реалистичные ожидания с пациенткой.',
    guidance_favorable: 'Благоприятная оценка шейки матки поддерживает продолжение индукции. Стандартные протоколы подходят с ожиданием успешных вагинальных родов.',
    guidance_very_favorable: 'Оптимальные условия шейки матки для индукции. Минимальная подготовка требуется. Высокая вероятность успешного прогресса родов и вагинальных родов.',
    
    // Timing recommendations
    timing_unfavorable: 'Отложите индукцию для созревания шейки матки (12-24 часа) за исключением срочных показаний',
    timing_intermediate: 'Рассмотрите предварительное созревание (6-12 часов) или продолжайте с тщательным мониторингом',
    timing_favorable: 'Продолжайте со стандартными сроками и протоколами индукции',
    timing_very_favorable: 'Готова к немедленной индукции - задержка подготовки не нужна',
    
    // Score components breakdown
    score_components: 'Компоненты шкалы Бишопа',
    dilation_points: 'Раскрытие: {points} баллов',
    effacement_points: 'Сглаживание: {points} баллов',
    consistency_points: 'Консистенция: {points} баллов',
    position_points: 'Положение: {points} баллов',
    station_points: 'Стояние: {points} баллов',
    
    // Success rates
    success_rate_0_3: '15-20% частота успеха вагинальных родов',
    success_rate_4_6: '40-60% частота успеха вагинальных родов',
    success_rate_7_8: '80-85% частота успеха вагинальных родов',
    success_rate_9_13: '95%+ частота успеха вагинальных родов',
    
    // Clinical considerations
    clinical_considerations: 'Клинические соображения',
    cesarean_risk: 'Риск кесарева сечения',
    monitoring_needs: 'Потребности в мониторинге',
    patient_counseling: 'Консультирование пациентки',
    
    // Risk assessments
    high_cesarean_risk: 'Высокий риск кесарева сечения - усиленное консультирование и мониторинг',
    moderate_cesarean_risk: 'Умеренный риск кесарева сечения - стандартные протоколы мониторинга',
    low_cesarean_risk: 'Низкий риск кесарева сечения - рутинное ведение индукции',
    minimal_cesarean_risk: 'Минимальный риск кесарева сечения - отличный кандидат для индукции',
    
    // Action buttons
    new_assessment: 'Новая оценка',
    modify_inputs: 'Изменить данные',
    
    // About section
    about_title: 'О шкале Бишопа',
    scoring_system: 'Система оценки',
    clinical_validation: 'Клиническая валидация',
    evidence_base: 'Доказательная база',
    
    // Footer
    based_on_bishop: 'Основано на модифицированной шкале Бишопа • ACOG Practice Bulletin валидирован',
    obstetric_safety_validated: 'Акушерская безопасность валидирована'
  },
  vbac_success: {
    title: 'Калькулятор прогнозирования успеха VBAC',
    subtitle: 'Вагинальные роды после кесарева сечения • Прогнозирование успеха • Доказательная оценка • Ведение родов',
    
    // Tool description
    tool_description: 'Доказательный инструмент прогнозирования для успеха вагинальных родов после кесарева сечения, использующий валидированные материнские характеристики и клинические параметры для руководства консультированием и планированием родов.',
    assessment_tool: 'Модель прогнозирования успеха VBAC',
    acog_practice_bulletin: 'ACOG Practice Bulletin №205',
    
    // Progress steps
    maternal_demographics: 'Демография матери',
    obstetric_history: 'Акушерский анамнез',
    current_pregnancy: 'Текущая беременность',
    calculator_tab: 'Калькулятор',
    about_tab: 'Информация',
    
    // Section headers
    maternal_factors_section: 'Материнские факторы и демография',
    maternal_factors_description: 'Ключевые материнские характеристики, влияющие на вероятность успеха VBAC',
    
    previous_delivery_section: 'История предыдущих родов',
    previous_delivery_description: 'Предыдущий акушерский анамнез, влияющий на подход к текущим родам',
    
    current_pregnancy_section: 'Параметры текущей беременности',
    current_pregnancy_description: 'Факторы текущей беременности, влияющие на планирование родов',
    
    // Maternal factors
    maternal_age_label: 'Возраст матери',
    maternal_age_help: 'Возраст матери влияет на частоту успеха VBAC с оптимальными результатами в диапазоне 20-35 лет',
    maternal_age_error: 'Возраст матери должен быть между 15-55 лет',
    maternal_age_unit: 'лет',
    
    bmi_label: 'Индекс массы тела (ИМТ)',
    bmi_help: 'Более высокий ИМТ ассоциирован со сниженной частотой успеха VBAC и повышенным риском кесарева сечения',
    bmi_error: 'ИМТ должен быть между 15-60 кг/м²',
    bmi_unit: 'кг/м²',
    
    // Previous delivery history
    previous_vaginal_delivery_label: 'Предыдущие вагинальные роды',
    previous_vaginal_delivery_help: 'История вагинальных родов значительно увеличивает вероятность успеха VBAC',
    
    indication_previous_cd_label: 'Показание к предыдущему кесареву сечению',
    indication_previous_cd_help: 'Причина предыдущего кесарева сечения влияет на вероятность успешного VBAC',
    indication_non_recurring: 'Неповторяющееся (тазовое предлежание, предлежание плаценты, дистресс плода)',
    indication_recurring: 'Повторяющееся (клинически узкий таз, слабость родовой деятельности)',
    indication_unknown: 'Неизвестное показание',
    
    // Current pregnancy parameters
    gestational_age_label: 'Гестационный возраст',
    gestational_age_help: 'Текущий гестационный возраст во время родов - оптимальный успех VBAC в срок',
    gestational_age_error: 'Гестационный возраст должен быть между 34-42 неделями',
    gestational_age_unit: 'недель',
    
    cervical_dilation_label: 'Раскрытие шейки матки при поступлении',
    cervical_dilation_help: 'Степень раскрытия шейки матки при поступлении в больницу - большее раскрытие улучшает успех',
    cervical_dilation_error: 'Раскрытие шейки матки должно быть между 0-10 см',
    cervical_dilation_unit: 'см',
    cervical_dilation_optional: 'Необязательно - оставьте пустым если неизвестно',
    
    estimated_fetal_weight_label: 'Предполагаемая масса плода',
    estimated_fetal_weight_help: 'Оценка массы плода влияет на успех VBAC - макросомия увеличивает риск кесарева сечения',
    estimated_fetal_weight_error: 'Предполагаемая масса плода должна быть между 1000-6000 граммами',
    estimated_fetal_weight_unit: 'граммов',
    estimated_fetal_weight_optional: 'Необязательно - оставьте пустым если неизвестно',
    
    // Navigation
    next_obstetric_history: 'Далее: Акушерский анамнез',
    next_current_pregnancy: 'Далее: Текущая беременность',
    calculate_button: 'Рассчитать успех VBAC',
    calculating: 'Расчет вероятности успеха...',
    
    // Results
    vbac_success_analysis: 'Анализ прогнозирования успеха VBAC',
    success_probability: 'Вероятность успеха',
    success_percentage: '{percentage}% вероятность успеха',
    
    // Success categories
    excellent_candidate: 'Отличный кандидат для VBAC',
    good_candidate: 'Хороший кандидат для VBAC',
    moderate_candidate: 'Умеренный кандидат для VBAC',
    poor_candidate: 'Плохой кандидат для VBAC',
    
    // Success ranges
    excellent_success: 'Отличный успех (≥70%)',
    good_success: 'Хороший успех (50-69%)',
    moderate_success: 'Умеренный успех (30-49%)',
    poor_success: 'Плохой успех (<30%)',
    
    // Clinical interpretations
    interpretation_excellent: 'Отличная вероятность успеха VBAC ({percentage}%). Сильный кандидат для вагинальных родов. Консультирование о высокой вероятности успешного VBAC со стандартным ведением родов.',
    interpretation_good: 'Хорошая вероятность успеха VBAC ({percentage}%). Подходящий кандидат для вагинальных родов с тщательным мониторингом. Обсудите реалистичные ожидания и резервные планы.',
    interpretation_moderate: 'Умеренная вероятность успеха VBAC ({percentage}%). Требуется индивидуальное консультирование. Тщательный анализ риска и пользы с учетом предпочтений пациентки.',
    interpretation_poor: 'Плохая вероятность успеха VBAC ({percentage}%). Рассмотрите повторное кесарево сечение. Обширное консультирование о низкой частоте успеха и повышенном риске осложнений.',
    
    // Clinical recommendations
    clinical_recommendation: 'Клиническая рекомендация',
    delivery_planning: 'Планирование родов',
    patient_counseling: 'Консультирование пациентки',
    labor_management: 'Ведение родов',
    
    // Recommendations by success rate
    recommendation_excellent: 'Сильная рекомендация для попытки VBAC. Стандартные протоколы ведения родов с рутинным мониторингом. Отличный прогноз для вагинальных родов.',
    recommendation_good: 'Рекомендация попытки VBAC с тщательным мониторингом. Усиленное наблюдение за плодом и матерью во время родов. Хороший прогноз при соответствующем ведении.',
    recommendation_moderate: 'Требуется индивидуальное принятие решений. Тщательное консультирование о частоте успеха и альтернативах. Учесть предпочтения пациентки и клинические обстоятельства.',
    recommendation_poor: 'Рассмотрите повторное кесарево сечение как основную рекомендацию. Если попытка VBAC, требуется интенсивный мониторинг и немедленная доступность кесарева сечения.',
    
    // Delivery planning guidance
    planning_excellent: 'Планируйте рутинные вагинальные роды со стандартными протоколами. Подготовьтесь к нормальному прогрессу родов и исходу вагинальных родов.',
    planning_good: 'Планируйте вагинальные роды с усиленным мониторингом. Обеспечьте немедленную доступность кесарева сечения и четкие протоколы экстренных ситуаций.',
    planning_moderate: 'Разработайте индивидуальный план родов с несколькими сценариями. Рассмотрите элективное повторное кесарево сечение как разумную альтернативу.',
    planning_poor: 'Основная рекомендация для элективного повторного кесарева сечения. Если попытка VBAC, требуется учреждение третичной помощи с немедленной хирургической способностью.',
    
    // Patient counseling guidance
    counseling_excellent: 'Консультирование об отличной вероятности успеха. Обсудите преимущества вагинальных родов и низкий риск осложнений.',
    counseling_good: 'Сбалансированное консультирование о хорошей вероятности успеха. Обсудите как преимущества вагинальных родов, так и потенциальные осложнения.',
    counseling_moderate: 'Обширное консультирование об умеренной вероятности успеха. Представьте реалистичные ожидания и альтернативные варианты родов.',
    counseling_poor: 'Всестороннее консультирование о низкой вероятности успеха. Настоятельно рекомендуйте рассмотрение повторного кесарева сечения.',
    
    // Contributing factors analysis
    contributing_factors: 'Анализ способствующих факторов',
    positive_factors: 'Положительные факторы',
    negative_factors: 'Отрицательные факторы',
    neutral_factors: 'Нейтральные факторы',
    
    // Factors descriptions
    factor_optimal_age: 'Оптимальный материнский возраст (20-35 лет) - благоприятен для успеха VBAC',
    factor_advanced_age: 'Продвинутый материнский возраст (>35 лет) - немного сниженный успех',
    factor_young_age: 'Молодой материнский возраст (<20 лет) - переменные показатели успеха',
    factor_normal_bmi: 'Нормальный ИМТ (18.5-24.9) - оптимальный для успеха VBAC',
    factor_overweight: 'Избыточный вес ИМТ (25-29.9) - умеренно сниженный успех',
    factor_obese: 'Ожирение ИМТ (≥30) - значительно сниженная вероятность успеха',
    factor_previous_vaginal: 'Предыдущие вагинальные роды - сильно способствуют успеху VBAC',
    factor_no_previous_vaginal: 'Нет предыдущих вагинальных родов - нейтральный фактор',
    factor_non_recurring_indication: 'Неповторяющееся показание к кесареву сечению - способствует успеху VBAC',
    factor_recurring_indication: 'Повторяющееся показание к кесареву сечению - сниженный успех VBAC',
    factor_term_gestation: 'Срочная беременность (37-40 недель) - оптимальна для VBAC',
    factor_preterm_gestation: 'Преждевременная беременность (<37 недель) - переменные исходы',
    factor_postterm_gestation: 'Переношенная беременность (>40 недель) - немного сниженный успех',
    factor_favorable_dilation: 'Благоприятное раскрытие шейки матки (≥4 см) - улучшенная вероятность успеха',
    factor_minimal_dilation: 'Минимальное раскрытие шейки матки (<4 см) - сниженная вероятность успеха',
    factor_normal_fetal_weight: 'Нормальная предполагаемая масса плода (2500-4000г) - оптимальна для VBAC',
    factor_macrosomia: 'Макросомия плода (>4000г) - сниженный успех VBAC',
    factor_low_birth_weight: 'Низкая предполагаемая масса плода (<2500г) - переменные исходы',
    
    // Risk assessment
    risk_assessment: 'Оценка риска',
    maternal_risks: 'Материнские риски',
    fetal_risks: 'Риски для плода',
    uterine_rupture_risk: 'Риск разрыва матки',
    
    // Risk descriptions
    risk_uterine_rupture: 'Риск разрыва матки: ~0.4-0.9% (низкий но серьезный)',
    risk_maternal_morbidity: 'Риск материнской заболеваемости варьирует с вероятностью успеха',
    risk_fetal_complications: 'Риск осложнений плода связан с продолжительностью родов',
    risk_emergency_cesarean: 'Риск экстренного кесарева сечения обратно пропорционален вероятности успеха',
    
    // Monitoring recommendations
    monitoring_recommendations: 'Рекомендации по мониторингу',
    continuous_fetal_monitoring: 'Непрерывный мониторинг сердечного ритма плода во время родов',
    intrauterine_pressure_monitoring: 'Рассмотрите мониторинг внутриматочного давления',
    immediate_cesarean_availability: 'Требуется немедленная доступность кесарева сечения',
    experienced_providers: 'Опытные провайдеры в присутствии на протяжении всех родов',
    
    // Action buttons
    new_assessment: 'Новая оценка',
    modify_inputs: 'Изменить данные',
    print_results: 'Печать результатов',
    share_results: 'Поделиться результатами',
    
    // About section
    about_title: 'О прогнозировании успеха VBAC',
    clinical_validation: 'Клиническая валидация',
    prediction_model: 'Модель прогнозирования',
    evidence_base: 'Доказательная база',
    limitations: 'Ограничения',
    
    // Model information
    model_description: 'Валидированная модель прогнозирования, включающая материнские характеристики, акушерский анамнез и параметры текущей беременности для оценки вероятности успеха VBAC.',
    model_validation: 'Основана на крупномасштабных ретроспективных исследованиях и проспективных валидационных когортах с доказанной клинической точностью.',
    model_limitations: 'Модель прогнозирования предоставляет оценки вероятности, но не может гарантировать исходы. Индивидуальные факторы пациентки и интранатальные события могут влиять на фактический успех.',
    
    // Evidence base
    evidence_acog: 'ACOG Practice Bulletin №205: Вагинальные роды после кесарева сечения',
    evidence_cochrane: 'Систематические обзоры Кокрейна по исходам и прогнозированию VBAC',
    evidence_studies: 'Множественные крупномасштабные исследования, валидирующие модели прогнозирования успеха VBAC',
    
    // Footer
    based_on_evidence: 'Основано на доказательных моделях прогнозирования VBAC • ACOG Practice Bulletin №205',
    obstetric_safety_validated: 'Акушерская безопасность валидирована',
    
    // Step navigation
    step_1: 'Шаг 1',
    step_2: 'Шаг 2',
    step_3: 'Шаг 3',
    step_1_title: 'Демография матери',
    step_2_title: 'Акушерский анамнез',
    step_3_title: 'Текущая беременность'
  }
}; 