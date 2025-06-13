import { useCallback } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import en from '../i18n/translations/en';
import ka from '../i18n/translations/ka';
import ru from '../i18n/translations/ru';
import type { Language, TranslationShape } from '../types/i18n';

const translations: Record<Language, TranslationShape> = {
  en: en as TranslationShape, // Cast because en.ts might have more keys than TranslationShape
  ka: ka as TranslationShape, // Cast because ka.ts might have more keys than TranslationShape
  ru: ru as TranslationShape  // Cast because ru.ts might have more keys than TranslationShape
};

export const useTranslation = () => {
  const { currentLanguage, setLanguage } = useLanguage();

  const t = useCallback((key: string, params?: Record<string, string>): string => {
    const keys = key.split('.');
    let currentLevel: any = translations[currentLanguage];

    for (const k of keys) {
      if (typeof currentLevel === 'object' && currentLevel !== null && k in currentLevel) {
        currentLevel = currentLevel[k];
      } else {
        currentLevel = undefined; // Key path not found
        break;
      }
    }

    // Fallback to English if translation not found in current language
    if (currentLevel === undefined) {
      console.warn(`Translation missing for key: ${key} in language: ${currentLanguage}. Falling back to English.`);
      currentLevel = translations.en;
      for (const k of keys) {
        if (typeof currentLevel === 'object' && currentLevel !== null && k in currentLevel) {
          currentLevel = currentLevel[k];
        } else {
          currentLevel = undefined; // Key path not found in English fallback
          break;
        }
      }
    }

    // If still not found, or if it's an object (meaning we didn't reach a string leaf), return the key
    if (typeof currentLevel !== 'string') {
      // console.warn(`Translation for key: ${key} is not a string or not found. Returning key.`);
      return key;
    }

    // Apply params if any
    if (params) {
      return Object.entries(params).reduce(
        (acc, [paramKey, paramValue]) => acc.replace(`{{${paramKey}}}`, paramValue),
        currentLevel
      );
    }

    return currentLevel;
  }, [currentLanguage]);

  const handleLanguageChange = useCallback((newLanguage: Language) => {
    setLanguage(newLanguage);
  }, [setLanguage]);

  return { t, handleLanguageChange, currentLanguage };
};