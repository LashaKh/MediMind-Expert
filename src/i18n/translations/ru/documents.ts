export const documents = {
  title: 'Документы',
  upload: {
    title: 'Загрузить документ',
    description: 'Загрузите медицинские документы для анализа ИИ',
    dragDrop: 'Перетащите файлы сюда или нажмите для выбора',
    selectFiles: 'Выбрать файлы',
    maxSize: 'Максимальный размер: {{size}}MB',
    allowedTypes: 'Разрешенные типы: PDF, DOC, DOCX, TXT, JPG, PNG',
    uploading: 'Загрузка...',
    processing: 'Обработка...',
    success: 'Документ успешно загружен',
    error: 'Ошибка загрузки документа',
    retry: 'Повторить'
  },
  library: {
    title: 'Библиотека документов',
    empty: 'Документов пока нет',
    search: 'Поиск документов...',
    filter: 'Фильтр',
    sort: 'Сортировать',
    sortBy: {
      name: 'По названию',
      date: 'По дате',
      size: 'По размеру',
      type: 'По типу'
    },
    actions: {
      view: 'Просмотр',
      download: 'Скачать',
      delete: 'Удалить',
      share: 'Поделиться',
      analyze: 'Анализировать с ИИ'
    }
  },
  details: {
    name: 'Название',
    type: 'Тип',
    size: 'Размер',
    uploaded: 'Загружено',
    modified: 'Изменено',
    status: 'Статус',
    description: 'Описание',
    tags: 'Теги'
  },
  status: {
    uploading: 'Загрузка',
    processing: 'Обработка',
    ready: 'Готов',
    error: 'Ошибка',
    analyzing: 'Анализ'
  },
  types: {
    pdf: 'PDF документ',
    doc: 'Word документ',
    docx: 'Word документ',
    txt: 'Текстовый файл',
    jpg: 'Изображение JPEG',
    png: 'Изображение PNG',
    unknown: 'Неизвестный тип'
  },
  analysis: {
    title: 'Анализ документа',
    summary: 'Резюме',
    keyPoints: 'Ключевые моменты',
    recommendations: 'Рекомендации',
    confidence: 'Уверенность',
    processing: 'Анализ в процессе...',
    error: 'Ошибка анализа',
    retry: 'Повторить анализ'
  }
};

export default documents; 