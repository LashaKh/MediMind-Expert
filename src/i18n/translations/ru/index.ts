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
  common,
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
    selectSpecialty: 'Выберите вашу специальность',
    getStarted: 'Начать работу',
    cardiology: 'Кардиология',
    obgyn: 'Акушерство и гинекология',
    completeProfile: 'Завершить профиль'
  },

  // Profile
  profile: {
    title: 'Профиль',
    personalInfo: 'Личная информация',
    firstName: 'Имя',
    lastName: 'Фамилия',
    email: 'Электронная почта',
    specialty: 'Специальность',
    institution: 'Учреждение',
    license: 'Лицензия',
    profilePicture: 'Фото профиля',
    uploadPicture: 'Загрузить фото',
    security: 'Безопасность',
    changePassword: 'Изменить пароль',
    currentPassword: 'Текущий пароль',
    newPassword: 'Новый пароль',
    confirmNewPassword: 'Подтвердите новый пароль',
    preferences: 'Настройки',
    language: 'Язык',
    theme: 'Тема',
    notifications: 'Уведомления'
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