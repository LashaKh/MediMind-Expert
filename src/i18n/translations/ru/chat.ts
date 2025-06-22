export const chat = {
  title: 'ИИ Чат',
  placeholder: 'Введите ваше сообщение...',
  send: 'Отправить',
  sendMessage: 'Отправить сообщение',
  typing: 'Набирает...',
  connecting: 'Подключение...',
  connected: 'Подключено',
  disconnected: 'Отключено',
  reconnecting: 'Переподключение...',
  error: 'Ошибка чата',
  retry: 'Повторить',
  clear: 'Очистить чат',
  newChat: 'Новый чат',
  attachFile: 'Прикрепить файл',
  uploadImage: 'Загрузить изображение',
  recordAudio: 'Записать аудио',
  stopRecording: 'Остановить запись',
  playAudio: 'Воспроизвести аудио',
  pauseAudio: 'Приостановить аудио',
  deleteMessage: 'Удалить сообщение',
  editMessage: 'Редактировать сообщение',
  copyMessage: 'Копировать сообщение',
  shareMessage: 'Поделиться сообщением',
  timestamp: 'Время',
  assistant: 'Ассистент',
  user: 'Пользователь',
  system: 'Система',
  
  // Basic chat functionality from English version
  searchPlaceholder: 'Поиск разговоров...',
  noConversations: 'Пока нет разговоров',
  noConversationsFound: 'Разговоры не найдены',
  selectConversation: 'Выберите разговор или начните новый',
  typeMessage: 'Введите ваше сообщение...',
  startConversation: 'Начните разговор с MediMind AI',
  processing: 'Обработка...',
  chatWindow: 'Окно чата',
  messageHistory: 'История сообщений',
  welcomeTitle: 'Добро пожаловать в ИИ Ко-пилот',
  welcomeMessage: 'Спросите меня о медицинских случаях, руководствах или получите помощь в клинических решениях.',
  aiTyping: 'ИИ печатает...',
  
  // Status indicators
  online: 'Онлайн',
  offline: 'Офлайн',
  
  // Specialty titles
  cardiologyAICoPilot: 'ИИ Ко-пилот по кардиологии',
  obgynAICoPilot: 'ИИ Ко-пилот по акушерству-гинекологии',
  medicalAICoPilot: 'Медицинский ИИ Ко-пилот',
  
  // Personal knowledge base guidance
  usingPersonalDocs: 'Используются ваши {count} личных документов',
  uploadDocsForKB: 'Загрузите документы для создания личной базы знаний',
  
  // Welcome screen content
  welcomeToMediMind: 'Добро пожаловать в MediMind Expert',
  welcomeDescription: 'Ваш медицинский ИИ ко-пилот готов помочь с клиническими решениями, руководствами, анализом случаев и основанными на доказательствах рекомендациями.',
  
  // Feature cards
  clinicalGuidelines: 'Клинические руководства',
  clinicalGuidelinesExample: '"Каковы рекомендации ACC/AHA по лечению гипертонии?"',
  caseAnalysis: 'Анализ случая',
  caseAnalysisExample: '"Помогите мне проанализировать этого 65-летнего пациента с болью в груди"',
  drugInformation: 'Информация о лекарствах',
  drugInformationExample: '"Каковы противопоказания для бета-блокаторов?"',
  
  // Knowledge base status
  usingGeneralMedicalKnowledge: 'Используется общая медицинская база знаний',
  generalMedicalKnowledge: 'Общая медицинская база знаний',
  
  // Button tooltips
  viewAllCases: 'Просмотреть все случаи',
  viewConversationHistory: 'Просмотреть историю разговоров',
  startNewConversation: 'Начать новый разговор',
  
  // Error messages
  connectToStartChatting: 'Подключитесь, чтобы начать чат...',
  dismiss: 'Закрыть',
  
  // Loading states
  loadingConversationHistory: 'Загрузка истории разговоров...',
  analyzingQuery: 'Анализ вашего запроса...',
  
  // Default conversation title
  defaultChatTitle: 'Чат',
  
  // Case management
  caseReceived: 'Я получил случай "{title}". Я готов помочь вам проанализировать этот случай и предоставить клинические рекомендации.',
  caseSummary: 'Краткое описание случая:',
  caseDiscussionPrompt: 'Какой конкретный аспект этого случая вы хотели бы обсудить в первую очередь?',
  
  // File upload additional
  personalDocsAvailable: '{count} личных документов доступно',
  noPersonalDocs: 'Личные документы не загружены',
  maxFilesError: 'Максимум {maxFiles} файлов разрешено',
  
  sources: {
    title: 'Источники',
    viewAll: 'Посмотреть все',
    hide: 'Скрыть',
    citation: 'Цитата',
    reference: 'Ссылка'
  },
  suggestions: {
    title: 'Предложения',
    calculators: 'Рекомендуемые калькуляторы',
    tryThis: 'Попробуйте это'
  },
  fileUpload: {
    dragDrop: 'Перетащите файлы сюда или нажмите для выбора',
    selectFile: 'Выбрать файл',
    uploading: 'Загрузка...',
    uploaded: 'Загружено',
    failed: 'Ошибка загрузки',
    maxSize: 'Максимальный размер файла: {{size}}',
    allowedTypes: 'Разрешенные типы: {{types}}'
  }
};

export default chat; 