import auth from './auth';
import common from './common';
import navigation from './navigation';
import chat from './chat';
import medical from './medical';
import validation from './validation';
import documents from './documents';
import calculators from './calculators';
import knowledgeBase from './knowledgeBase';

export default {
  auth,
  common: {
    ...common,
    getStarted: 'Начать',
    evidenceBased: 'Основанный на доказательствах',
    clinicallyValidated: 'Клинически подтвержденный',
    hipaaCompliant: 'Соответствует HIPAA'
  },
  navigation,
  chat,
  medical,
  validation,
  documents,
  calculators,
  knowledgeBase,
  
  // Legacy compatibility - Add additional common translations that might be used
  save: 'Сохранить',
  cancel: 'Отмена',
  delete: 'Удалить',
  edit: 'Редактировать',
  close: 'Закрыть',
  loading: 'Загрузка...',
  error: 'Ошибка',
  success: 'Успех',
  
  // Onboarding
  onboarding: {
    welcome: 'Добро пожаловать в MediMind Expert',
    setupMessage: 'Давайте настроим ваше персонализированное медицинское рабочее пространство',
    settingUpWorkspace: 'Настройка рабочего пространства...',
    steps: {
      selectSpecialty: 'Выбор специальности',
      aboutYou: 'О вас'
    },
    specialty: {
      title: 'Выберите вашу медицинскую специальность',
      subtitle: 'Выберите вашу основную область практики для получения персонализированной помощи ИИ и ресурсов',
      featuresTitle: 'Что вы получите:',
      note: 'Вы можете получить доступ к ресурсам обеих специальностей, но ваше рабочее пространство будет оптимизировано для вашего основного выбора',
      cardiology: {
        name: 'Кардиология',
        description: 'Уход за сердцем и сердечно-сосудистой системой',
        features: {
          cardiac: 'Инструменты оценки сердца',
          ecg: 'Руководства по интерпретации ЭКГ',
          heartFailure: 'Протоколы сердечной недостаточности',
          interventional: 'Ресурсы интервенционной кардиологии'
        }
      },
      obgyn: {
        name: 'Акушерство и гинекология',
        description: 'Акушерство и гинекология',
        features: {
          prenatal: 'Рекомендации по дородовому уходу',
          gynecological: 'Гинекологические процедуры',
          obstetric: 'Акушерские калькуляторы',
          reproductive: 'Ресурсы репродуктивного здоровья'
        }
      }
    },
    aboutMe: {
      title: 'Расскажите о себе',
      subtitle: 'Помогите нам персонализировать вашего ИИ-помощника, поделившись контекстом о вашей практике и опыте',
      label: 'Поделитесь своей профессиональной историей',
      placeholder: 'Я кардиолог с 8-летним опытом работы в больнице третичного уровня. Я специализируюсь на интервенционной кардиологии и особенно интересуюсь сложными коронарными вмешательствами. Я прошел стажировку в...',
      
      // Индикаторы прогресса
      wordCount: '{{count}} слов',
      progressMessages: {
        gettingStarted: 'Начинаем...',
        goodProgress: 'Хороший прогресс!',
        lookingGreat: 'Отлично выглядит!',
        perfectDetail: 'Идеальный уровень детализации!'
      },
      charactersCount: '{{count}} символов',
      recommended: 'Рекомендуется: 50-200 слов',
      keepConcise: 'Рассмотрите возможность сделать это кратким для лучших результатов',
      
      // Раздел предложений
      suggestionsTitle: 'Быстрые подсказки для начала',
      suggestionsSubtitle: 'Нажмите на любую тему ниже, чтобы добавить ее в свой профиль. Это поможет нашему ИИ предоставить более релевантную помощь.',
      
      // Карточки предложений
      suggestions: {
        experience: {
          title: 'Ваш опыт',
          description: 'Годы практики, специализации, сертификаты',
          prompt: 'Поделитесь своим медицинским опытом и подготовкой'
        },
        practiceSetting: {
          title: 'Место практики',
          description: 'Больница, клиника, частная практика, академическая',
          prompt: 'Опишите вашу текущую рабочую среду'
        },
        clinicalInterests: {
          title: 'Клинические интересы',
          description: 'Области экспертизы, исследовательские интересы, подспециальности',
          prompt: 'Каковы ваши основные клинические области внимания?'
        },
        patientPopulation: {
          title: 'Популяция пациентов',
          description: 'Демография, сложность случаев, типы пациентов',
          prompt: 'Расскажите нам о пациентах, которых вы обычно лечите'
        },
        clinicalApproach: {
          title: 'Клинический подход',
          description: 'Философия лечения, стиль принятия решений',
          prompt: 'Опишите свой подход к уходу за пациентами'
        },
        education: {
          title: 'Образование и обучение',
          description: 'Медицинская школа, ординатура, стажировки, непрерывное образование',
          prompt: 'Поделитесь своим образовательным опытом'
        }
      },
      
      // Раздел примера
      exampleTitle: 'Пример профессионального профиля',
      exampleText: '"Я сертифицированный кардиолог с 10-летним опытом практики в крупном академическом медицинском центре. Я специализируюсь на интервенционной кардиологии с акцентом на сложные коронарные вмешательства и структурные заболевания сердца. Я прошел стажировку в Джонс Хопкинсе и имею особый опыт в процедурах TAVR. Я вижу большой объем пациентов с острым коронарным синдромом и люблю обучать студентов-медиков и ординаторов."',
      
      // Кнопки и действия
      back: 'Назад',
      skipForNow: 'Пропустить пока',
      completeSetup: 'Завершить настройку',
      creatingWorkspace: 'Создание рабочего пространства...',
      
      // Анимация успеха
      profileCreated: 'Профиль создан!',
      settingUpPersonalized: 'Настройка вашего персонализированного рабочего пространства...'
    }
  },

  // Profile
  profile: {
    language: 'Язык',
    profileInfo: 'Информация профиля',
    security: 'Безопасность',
    preferences: 'Настройки',
    fullName: 'Полное имя',
    medicalSpecialty: 'Медицинская специальность',
    aboutMe: 'Обо мне / Профессиональный контекст',
    editProfile: 'Редактировать профиль',
    saveChanges: 'Сохранить изменения',
    cancel: 'Отмена',
    saving: 'Сохранение...',
    noNameSet: 'Имя не указано',
    notSet: 'Не указано',
    unknown: 'Неизвестно',
    memberSince: 'Участник с',
    enterFullName: 'Введите ваше полное имя',
    aboutMeDesc: 'Эта информация поможет ИИ предоставлять более персонализированную помощь на основе вашего опыта и знаний.',
    aboutMePlaceholder: 'Расскажите о вашем медицинском образовании, опыте, областях интересов или любом другом контексте, который поможет ИИ лучше вам помочь...',
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
    nameMinLength: 'Полное имя должно содержать не менее 2 символов',
    updateSuccess: 'Профиль успешно обновлен!',
    updateError: 'Не удалось обновить профиль. Попробуйте еще раз.',
    passwordUpdateSuccess: 'Пароль успешно обновлен!',
    comingSoon: 'Скоро',
    preferencesDesc: 'Расширенные настройки, включая уведомления, темы, языковые настройки и настройки ИИ-помощника, будут доступны в ближайшее время.',
    
    // Enhanced profile page elements
    personalInformation: 'Личная информация',
    professionalDetails: 'Профессиональные данные',
    quickActions: 'Быстрые действия',
    viewAnalytics: 'Просмотр аналитики',
    achievements: 'Достижения',
    securitySettings: 'Настройки безопасности',
    keepAccountSecure: 'Обеспечьте безопасность вашего аккаунта с помощью надежной аутентификации',
    profileStats: 'Статистика профиля',
    profileComplete: 'Заполненность профиля',
    securityScore: 'Оценка безопасности',
    lastActive: 'Последняя активность',
    now: 'Сейчас',
    uploadNewPhoto: 'Загрузить новое фото',
    changePhoto: 'Изменить фото',
    photoGuidelines: 'Требования к фото',
    squareImageRecommended: 'Рекомендуется квадратное изображение, минимум 200×200 пикселей',
    maxFileSize: 'Максимальный размер файла: 5МБ',
    supportedFormats: 'Поддерживаемые форматы: JPG, PNG, GIF',
    settings: 'Настройки',
    systemStatus: 'Статус системы',
    online: 'В сети',
    mediMindExpert: 'MediMind Expert v2.0',
    medicalAiAssistant: 'Медицинский ИИ-помощник',
    display: 'Отображение',
    themeLayout: 'Тема и макет',
    notifications: 'Уведомления',
    alertsUpdates: 'Уведомления и обновления',
    aiAssistant: 'ИИ-помощник',
    personalization: 'Персонализация',
    
    // Password change form
    changePassword: 'Изменить пароль',
    currentPassword: 'Текущий пароль',
    newPassword: 'Новый пароль',
    confirmNewPassword: 'Подтвердите новый пароль',
    enterCurrentPassword: 'Введите ваш текущий пароль',
    enterNewPassword: 'Введите ваш новый пароль',
    confirmNewPasswordPlaceholder: 'Подтвердите ваш новый пароль',
    passwordRequirements: 'Пароль должен содержать не менее 8 символов с заглавными, строчными буквами и цифрой',
    updatePassword: 'Обновить пароль',
    updating: 'Обновление...',
    
    // Password validation messages
    currentPasswordRequired: 'Текущий пароль обязателен',
    newPasswordRequired: 'Новый пароль обязателен',
    newPasswordMinLength: 'Новый пароль должен содержать не менее 8 символов',
    newPasswordDifferent: 'Новый пароль должен отличаться от текущего пароля',
    passwordsDoNotMatch: 'Новый пароль и подтверждение не совпадают',
    passwordComplexity: 'Новый пароль должен содержать как минимум одну заглавную букву, одну строчную букву и одну цифру',
    noAuthenticatedUser: 'Аутентифицированный пользователь не найден',
    passwordUpdateFailed: 'Не удалось обновить пароль. Попробуйте еще раз.'
  },

  // Cases
  case: {
    title: 'Клинические случаи',
    newCase: 'Новый случай',
    createNewCase: 'Создать новый случай',
    caseTitle: 'Название случая',
    caseDescription: 'Описание случая',
    anonymizedInfo: 'Анонимизированная информация о пациенте',
    anonymizedPatientInfo: 'Анонимизированная информация о пациенте',
    patientInfo: 'Информация о пациенте',
    category: 'Категория',
    complexity: 'Сложность',
    complexityLevel: 'Уровень сложности',
    tags: 'Теги',
    createCase: 'Создать случай',
    creating: 'Создание...',
    creatingCase: 'Создание случая...',
    cancel: 'Отмена',
    save: 'Сохранить',
    
    // Privacy and validation
    privacyNotice: 'Уведомление о конфиденциальности',
    privacyMessage: 'Пожалуйста, убедитесь, что вся информация о пациенте полностью анонимизирована. Удалите имена, даты, конкретные места и любые другие идентифицирующие детали.',
    privacyNoticeDetailed: 'Включите соответствующую медицинскую историю, симптомы, результаты тестов и другую клиническую информацию. Убедитесь, что все идентифицирующие детали удалены.',
    anonymizationHelp: 'Включите соответствующую медицинскую историю, симптомы, результаты тестов и другую клиническую информацию. Убедитесь, что все идентифицирующие детали удалены.',
    
    // Form placeholders
    titlePlaceholder: 'Краткое описательное название для этого случая',
    descriptionPlaceholder: 'Краткий обзор случая и того, что вы хотели бы обсудить',
    patientInfoPlaceholder: 'Возраст пациента, пол, симптомы, медицинская история, результаты тестов и т.д. (полностью анонимизировано)',
    tagsPlaceholder: 'например, гипертония, диабет, наблюдение',
    tagsHint: 'Разделяйте несколько тегов запятыми',
    categoryHint: 'Необязательно - помогает организовать ваши случаи',
    
    // Validation errors
    titleRequired: 'Название случая обязательно',
    descriptionRequired: 'Описание случая обязательно',
    patientInfoRequired: 'Информация о пациенте обязательна',
    patientInfoTooShort: 'Пожалуйста, предоставьте более подробную информацию о пациенте (минимум 50 символов)',
    sensitiveInfoDetected: 'Пожалуйста, удалите любые имена, даты или идентифицирующие номера из информации о пациенте',
    
    // Categories
    selectCategory: 'Выберите категорию (необязательно)',
    diagnosisCategory: 'Диагностика',
    treatment: 'Лечение',
    consultation: 'Консультация',
    
    // Cardiology specific
    interventionalCardiology: 'Интервенционная кардиология',
    electrophysiology: 'Электрофизиология',
    heartFailure: 'Сердечная недостаточность',
    preventiveCardiology: 'Профилактическая кардиология',
    
    // OB/GYN specific
    obstetrics: 'Акушерство',
    gynecology: 'Гинекология',
    reproductiveHealth: 'Репродуктивное здоровье',
    maternalFetalMedicine: 'Материнско-фетальная медицина',
    
    // Complexity levels
    lowComplexity: 'Низкая сложность',
    mediumComplexity: 'Средняя сложность',
    highComplexity: 'Высокая сложность',
    
    // Specialty titles
    cardiologySpecialty: 'Специальность кардиология',
    obgynSpecialty: 'Специальность акушерство и гинекология',
    
    // Character count
    charactersMinimum: '{count}/50 символов минимум',
    
    // Case management
    activeCase: 'Активный случай',
    caseDiscussion: 'Обсуждение случая',
    resetCase: 'Сбросить случай',
    viewCases: 'Просмотреть случаи',
    noCases: 'Случаи еще не созданы',
    caseCreated: 'Случай успешно создан',
    caseSaved: 'Случай сохранен',
    caseDeleted: 'Случай удален',
    
    // Legacy fields
    chiefComplaint: 'Основная жалоба',
    history: 'Анамнез',
    examination: 'Обследование',
    investigations: 'Исследования',
    diagnosis: 'Диагноз',
    followUp: 'Наблюдение',
    notes: 'Примечания',
    anonymize: 'Анонимизировать',
    share: 'Поделиться',
    delete: 'Удалить',
    
    // Case list and filters
    all: 'Все',
    active: 'Активные',
    archived: 'Архивные',
    newestFirst: 'Сначала новые',
    oldestFirst: 'Сначала старые',
    alphabetical: 'По алфавиту',
    noCasesFound: 'Случаи не найдены',
    noCasesYet: 'Случаев пока нет',
    adjustFilters: 'Попробуйте изменить поиск или фильтры.',
    createFirstCase: 'Создайте первый случай, чтобы начать обсуждение случаев.',
    
    // Knowledge base additional
    curated: 'Кураторские',
    personal: 'Личные'
  },

  // Conversation management
  conversations: {
    title: 'Разговоры',
    newChat: 'Новый чат',
    searchPlaceholder: 'Поиск разговоров...',
    allSpecialties: 'Все специальности',
    cardiology: 'Кардиология',
    obgyn: 'Акушерство-гинекология',
    recent: 'Последние',
    byName: 'По названию',
    byMessages: 'По сообщениям',
    noConversationsFound: 'Разговоры не найдены',
    deleteConversation: 'Удалить разговор',
    editTitle: 'Изменить название',
    save: 'Сохранить',
    cancel: 'Отмена',
    message: 'сообщение',
    messages: 'сообщений',
    conversation: 'разговор',
    conversations: 'разговоров',
    totalMessages: 'всего сообщений',
    tryAdjustingSearchOrFilters: 'Попробуйте изменить поиск или фильтры',
    deleteConfirmation: 'Вы уверены, что хотите удалить этот разговор? Это действие нельзя отменить.',
    delete: 'Удалить'
  },

  // Settings
  settings: {
    title: 'Настройки',
    general: 'Общие',
    appearance: 'Внешний вид',
    privacy: 'Конфиденциальность',
    data: 'Данные',
    about: 'О программе',
    version: 'Версия',
    support: 'Поддержка',
    feedback: 'Обратная связь',
    logout: 'Выйти'
  },

  // Help
  help: {
    title: 'Помощь',
    gettingStarted: 'Начало работы',
    features: 'Возможности',
    troubleshooting: 'Устранение неполадок',
    contact: 'Связаться с нами',
    documentation: 'Документация',
    tutorials: 'Учебные материалы',
    faq: 'Часто задаваемые вопросы'
  },

  // UI elements
  ui: {
    save: 'Сохранить',
    cancel: 'Отмена',
    close: 'Закрыть',
    openMenu: 'Открыть меню',
    closeMenu: 'Закрыть меню'
  },

  // Tour
  tour: {
    welcome: {
      title: 'Добро пожаловать в MediMind Expert!',
      description: 'Позвольте нам показать вам ключевые функции платформы.'
    },
    workspace: {
      title: 'Ваша медицинская рабочая область',
      description: 'Здесь находятся все ваши инструменты для клинической работы.'
    },
    aiChat: {
      title: 'ИИ-помощник',
      description: 'Общайтесь с нашим медицинским ИИ для получения клинической поддержки.'
    },
    calculators: {
      title: 'Медицинские калькуляторы',
      description: 'Доступ к профессиональным медицинским калькуляторам для вашей специальности.'
    },
    caseManagement: {
      title: 'Управление случаями',
      description: 'Создавайте и управляйте клиническими случаями с ИИ-анализом.'
    },
    complete: {
      title: 'Готово!',
      description: 'Вы готовы начать использовать MediMind Expert.'
    },
    skip: 'Пропустить',
    next: 'Далее',
    previous: 'Назад',
    finish: 'Завершить'
  }
}; 