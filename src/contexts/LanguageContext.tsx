import React, { createContext, useContext, useEffect } from 'react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import type { Language } from '../types/i18n';
import { DEFAULT_LANGUAGE } from '../i18n/config';
import i18n from '../i18n/i18n';

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize language from localStorage or default
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage') as Language;
    return savedLanguage && ['en', 'ka', 'ru'].includes(savedLanguage) ? savedLanguage : DEFAULT_LANGUAGE;
  });
  
  const location = useLocation();
  const navigate = useNavigate();

  const setLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
    localStorage.setItem('selectedLanguage', lang);
    
    // Update i18n library to sync with context
    i18n.changeLanguage(lang);
    
    // Dispatch custom event to trigger re-renders
    window.dispatchEvent(new CustomEvent('languageChange', { detail: { language: lang } }));
  };

  // Sync i18n on mount with current language
  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
  }, [currentLanguage]);

  useEffect(() => {
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  useEffect(() => {
    // Listen for language changes
    const handleLanguageChange = () => {
      // Force re-render of current route
      navigate(location.pathname + location.search + location.hash, { replace: true });
    };

    window.addEventListener('languageChange', handleLanguageChange);
    return () => window.removeEventListener('languageChange', handleLanguageChange);
  }, [navigate, location]);

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};