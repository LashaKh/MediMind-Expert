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

  const t = useCallback((key: string, params?: Record<string, any>): any => {
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

    // Check if returnObjects is true and we have an object/array
    if (params?.returnObjects === true) {
      if (Array.isArray(currentLevel)) {
        return currentLevel; // Return the array directly
      } else if (typeof currentLevel === 'object' && currentLevel !== null) {
        return currentLevel; // Return the object directly
      }
    }

    // If still not found, return empty array for map operations or the key
    if (currentLevel === undefined || currentLevel === null) {
      console.warn(`Translation for key: ${key} is not found. Returning ${params?.returnObjects ? 'empty array' : 'key'}.`);
      return params?.returnObjects ? [] : key;
    }

    // If it's an object but returnObjects is not true, return the key
    if (typeof currentLevel !== 'string' && !params?.returnObjects) {
      console.warn(`Translation for key: ${key} is not a string or not found. Returning key.`);
      return key;
    }

    // Apply params if any (excluding returnObjects)
    if (params && typeof params === 'object' && typeof currentLevel === 'string') {
      const stringParams = Object.entries(params)
        .filter(([paramKey]) => paramKey !== 'returnObjects')
        .reduce((acc, [paramKey, paramValue]) => {
          acc[paramKey] = String(paramValue);
          return acc;
        }, {} as Record<string, string>);

      if (Object.keys(stringParams).length > 0) {
        return Object.entries(stringParams).reduce(
          (acc, [paramKey, paramValue]) => acc.replace(`{{${paramKey}}}`, paramValue),
          currentLevel
        );
      }
    }

    return currentLevel;
  }, [currentLanguage]);

  const handleLanguageChange = useCallback((newLanguage: Language) => {
    setLanguage(newLanguage);
  }, [setLanguage]);

  return { t, handleLanguageChange, currentLanguage };
};