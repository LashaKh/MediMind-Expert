export const gestationalAgeCalculator = {
  title: "Калькулятор гестационного возраста",
  subtitle: "Точная оценка гестационного возраста",
  description: "Профессиональный расчет гестационного возраста с использованием различных методов датировки для точной клинической оценки",

  // ACOG Alert
  acog_alert: {
    title: "Рекомендации ACOG",
    content: "УЗИ первого триместра наиболее точно для датировки. ПМ может быть ненадежной из-за нерегулярных циклов или ошибок памяти. Выбор метода должен основываться на клиническом суждении."
  },

  // Progress Steps
  progress: {
    step1: "Выбор метода",
    step2: "Ввод данных", 
    step3: "Расчет"
  },

  // Method Selection
  method_selection: {
    title: "Выберите метод датировки",
    description: "Выберите наиболее подходящий метод на основе имеющихся клинических данных",
    
    lmp: {
      title: "Последняя менструация",
      accuracy: "Точность ±7 дней",
      description: "Расчет на основе первого дня последней менструации. Требует регулярного 28-дневного цикла для оптимальной точности.",
      label: "Первый день последней менструации",
      help: "Выберите первый день последней нормальной менструации пациентки"
    },
    
    ultrasound: {
      title: "УЗИ первого триместра",
      accuracy: "Точность ±5 дней",
      description: "Наиболее точный метод с использованием измерения копчико-теменного размера (КТР) с 6-14 недель беременности.",
      crl_label: "Копчико-теменной размер (КТР)",
      crl_placeholder: "Введите измерение КТР",
      crl_unit: "мм",
      crl_help: "Измерение КТР по УЗИ первого триместра (15-95 мм)",
      crl_error: "КТР должен быть между 15-95 мм"
    },
    
    edd: {
      title: "Известная дата родов",
      accuracy: "Обратный расчет",
      description: "Расчет текущего гестационного возраста от ранее установленной предполагаемой даты родов.",
      label: "Предполагаемая дата родов",
      help: "Ранее рассчитанная или установленная дата родов"
    }
  },

  // Reference Date
  reference: {
    title: "Настройка референсной даты",
    description: "Установите дату, для которой вы хотите рассчитать гестационный возраст",
    date_label: "Референсная дата",
    date_help: "Дата для расчета гестационного возраста (обычно сегодняшняя дата)"
  },

  // Calculation Section
  calculation: {
    description: "Просмотрите информацию и рассчитайте гестационный возраст",
    summary: "Сводка расчета"
  },

  // Validation Messages
  validation: {
    reference_date_required: "Референсная дата обязательна",
    method_required: "Должен быть предоставлен хотя бы один метод датировки", 
    lmp_after_reference: "Дата ПМ не может быть позже референсной даты",
    lmp_too_far: "Дата ПМ кажется слишком далекой в прошлом (>300 дней)",
    edd_before_reference: "Дата родов не может быть раньше референсной даты",
    calculation_error: "Ошибка при расчете. Пожалуйста, проверьте ваши данные."
  },

  // Results
  results: {
    title: "Результаты гестационного возраста",
    gestational_age: "Гестационный возраст",
    trimester: "Триместр",
    calculation_method: "Метод расчета",
    estimated_due_date: "Предполагаемая дата родов",
    reference_date: "Референсная дата",
    
    method_names: {
      lmp: "Последняя менструация",
      crl: "УЗИ КТР",
      edd: "Известная дата родов"
    },
    
    trimester_names: {
      first: "Первый триместр",
      second: "Второй триместр", 
      third: "Третий триместр"
    }
  },

  // Buttons
  buttons: {
    continue: "Продолжить",
    calculate: "Рассчитать гестационный возраст",
    new_calculation: "Новый расчет"
  },

  // Footer
  footer: {
    disclaimer: "Для клинического использования квалифицированными медицинскими работниками",
    guidelines: "Соответствует рекомендациям ACOG"
  },

  // About Section
  about: {
    title: "О калькуляторе гестационного возраста",
    subtitle: "Клиническая документация и рекомендации",
    
    clinical_purpose: {
      title: "Клиническое назначение",
      description: "Точная оценка гестационного возраста является основой пренатального ухода, позволяя правильно планировать вмешательства, скрининговые тесты и роды согласно рекомендациям ACOG."
    },
    
    methods: {
      title: "Методы расчета",
      description: "Три основных метода расчета гестационного возраста, каждый с определенными клиническими применениями:",
      
      lmp_method: {
        title: "Метод ПМ",
        accuracy: "±7 дней",
        description: "Традиционный метод с использованием правила Негеле (ПМ + 280 дней). Наиболее доступный, но требует точного воспоминания и регулярных циклов.",
        features: {
          accessible: "Универсально доступный метод",
          recall: "Зависит от точности памяти пациентки",
          regular: "Предполагает регулярные 28-дневные циклы"
        }
      },
      
      ultrasound_method: {
        title: "УЗИ КТР",
        accuracy: "±5 дней",
        description: "Золотой стандарт для датировки ранней беременности с использованием измерения копчико-теменного размера в первом триместре.",
        features: {
          range: "Оптимальная точность: 6-14 недель",
          formula: "Использует валидированные формулы КТР",
          standard: "Предпочтительный метод ACOG"
        }
      },
      
      edd_method: {
        title: "Известная ПДР",
        accuracy: "На основе референса",
        description: "Рассчитывает текущий гестационный возраст от ранее установленной даты родов, сохраняя последовательность.",
        features: {
          established: "Использует установленную дату родов",
          reverse: "Метод обратного расчета",
          consistent: "Поддерживает последовательность датировки"
        }
      }
    },
    
    applications: {
      prenatal_care: {
        title: "Применение в пренатальном уходе",
        scheduling: "Планирование пренатальных визитов",
        genetic: "Время генетического скрининга",
        delivery: "Планирование родов",
        growth: "Оценка роста плода"
      },
      
      clinical_management: {
        title: "Клиническое управление",
        medication: "Корректировка дозировки лекарств",
        viability: "Оценка жизнеспособности",
        specialized: "Направления к специалистам",
        decisions: "Время вмешательств"
      }
    },
    
    guidelines: {
      title: "Клинические рекомендации",
      
      acog: {
        title: "Рекомендации ACOG",
        opinion_700: "Заключение комитета 700: Оценка гестационного возраста",
        bulletin_175: "Практический бюллетень 175: УЗИ при беременности",
        opinion_611: "Заключение комитета 611: Метод оценки даты родов",
        first_trimester: "УЗИ первого триместра предпочтительно для датировки"
      },
      
      best_practices: {
        title: "Лучшие практики",
        early_dating: "Установить датировку рано в беременности",
        flexibility: "Учитывать ограничения метода",
        comparison: "Сравнивать несколько методов при наличии",
        judgment: "Применять клиническое суждение к расхождениям"
      }
    },
    
    trimesters: {
      title: "Определения триместров",
      
      first: {
        title: "Первый триместр",
        weeks: "0-13 недель 6 дней",
        description: "Критический период органогенеза и раннего скрининга развития"
      },
      
      second: {
        title: "Второй триместр", 
        weeks: "14-27 недель 6 дней",
        description: "Оптимальный период для детального анатомического сканирования и генетического тестирования"
      },
      
      third: {
        title: "Третий триместр",
        weeks: "28 недель - роды",
        description: "Фокус на мониторинге роста и подготовке к родам"
      }
    }
  }
}; 