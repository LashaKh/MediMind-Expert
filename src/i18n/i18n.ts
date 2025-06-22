import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import enTranslations from './translations/en';
import kaTranslations from './translations/ka';
import ruTranslations from './translations/ru';
import { DEFAULT_LANGUAGE } from './config';

// Helper function to get initial language
const getInitialLanguage = () => {
  const savedLanguage = localStorage.getItem('selectedLanguage');
  if (savedLanguage && ['en', 'ka', 'ru'].includes(savedLanguage)) {
    return savedLanguage;
  }
  return DEFAULT_LANGUAGE;
};

// i18n configuration
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations
      },
      ka: {
        translation: kaTranslations
      },
      ru: {
        translation: ruTranslations
      }
    },
    lng: getInitialLanguage(), // Use helper function for better language detection
    fallbackLng: DEFAULT_LANGUAGE, // Use config constant
    debug: import.meta.env.DEV, // Enable debug in development
    
    interpolation: {
      escapeValue: false, // React already does escaping
    },
    
    // Namespace configuration
    defaultNS: 'translation',
    ns: ['translation'],
    
    // Key separator (use dot notation for nested keys)
    keySeparator: '.',
    
    // React-specific options
    react: {
      useSuspense: false, // Disable suspense for now
    }
  });

export default i18n; 