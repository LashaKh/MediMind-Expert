import { useCallback } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import en from '../i18n/translations/en';
import ka from '../i18n/translations/ka';
import ru from '../i18n/translations/ru';
import type { Language, TranslationShape } from '../types/i18n';

const translations: Record<Language, any> = {
  en: en,
  ka: ka,
  ru: ru
};

export const useTranslation = () => {
  const { currentLanguage, setLanguage } = useLanguage();

  const t = useCallback((key: string, params?: Record<string, string>): string => {
    const keys = key.split('.');
    let currentLevel: any = translations[currentLanguage];

    // Debug logging
    if (key.includes('preterm_birth_risk')) {
      console.log('Debug translation:', {
        key,
        currentLanguage,
        hasTranslations: !!translations[currentLanguage],
        translationKeys: Object.keys(translations[currentLanguage] || {}),
        calculatorKeys: Object.keys(translations[currentLanguage]?.calculators || {})
      });
    }

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
      console.warn(`Translation for key: ${key} is not a string or not found. Returning key.`);
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