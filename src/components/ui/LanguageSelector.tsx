import React, { useState, useRef, useEffect } from 'react';
import { SUPPORTED_LANGUAGES } from '../../i18n/config';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTranslation } from '../../hooks/useTranslation';
import type { Language } from '../../types/i18n';

interface LanguageSelectorProps {
  variant?: 'default' | 'compact' | 'icon-only';
  className?: string;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ 
  variant = 'default',
  className = ''
}) => {
  const { currentLanguage, setLanguage } = useLanguage();
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    setIsOpen(false);
    
    // Store preference in localStorage
    localStorage.setItem('selectedLanguage', newLanguage);
    
    // Dispatch custom event for language change
    window.dispatchEvent(new Event('languageChange'));
  };

  const currentLang = SUPPORTED_LANGUAGES[currentLanguage as keyof typeof SUPPORTED_LANGUAGES];

  const renderDefault = () => (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label={t('profile.language')}
        aria-expanded={isOpen}
      >
        <span className="text-xl" role="img" aria-label={currentLang.name}>
          {currentLang.flag}
        </span>
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {currentLang.nativeName}
        </span>
        <svg
          className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-full min-w-[200px] bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg z-50 overflow-hidden">
          {Object.entries(SUPPORTED_LANGUAGES).map(([code, lang]) => (
            <button
              key={code}
              onClick={() => handleLanguageChange(code as Language)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 ${
                currentLanguage === code
                  ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                  : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              <span className="text-xl" role="img" aria-label={lang.name}>
                {lang.flag}
              </span>
              <div className="flex-1">
                <div className="font-medium">{lang.nativeName}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{lang.name}</div>
              </div>
              {currentLanguage === code && (
                <svg
                  className="w-4 h-4 text-blue-600 dark:text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );

  const renderCompact = () => (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 px-2 py-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label={t('profile.language')}
        aria-expanded={isOpen}
      >
        <span className="text-sm" role="img" aria-label={currentLang.name}>
          {currentLang.flag}
        </span>
        <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
          {currentLang.code.toUpperCase()}
        </span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded shadow-lg z-50 overflow-hidden">
          {Object.entries(SUPPORTED_LANGUAGES).map(([code, lang]) => (
            <button
              key={code}
              onClick={() => handleLanguageChange(code as Language)}
              className={`w-full flex items-center gap-2 px-3 py-2 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 ${
                currentLanguage === code
                  ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                  : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              <span className="text-sm" role="img" aria-label={lang.name}>
                {lang.flag}
              </span>
              <span className="text-xs font-medium whitespace-nowrap">{lang.nativeName}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );

  const renderIconOnly = () => (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-8 h-8 flex items-center justify-center bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label={t('profile.language')}
        aria-expanded={isOpen}
        title={currentLang.nativeName}
      >
        <span className="text-lg" role="img" aria-label={currentLang.name}>
          {currentLang.flag}
        </span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded shadow-lg z-50 overflow-hidden">
          {Object.entries(SUPPORTED_LANGUAGES).map(([code, lang]) => (
            <button
              key={code}
              onClick={() => handleLanguageChange(code as Language)}
              className={`w-full flex items-center gap-2 px-3 py-2 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 ${
                currentLanguage === code
                  ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                  : 'text-gray-700 dark:text-gray-300'
              }`}
              title={lang.nativeName}
            >
              <span className="text-sm" role="img" aria-label={lang.name}>
                {lang.flag}
              </span>
              <span className="text-xs font-medium whitespace-nowrap">{lang.nativeName}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );

  switch (variant) {
    case 'compact':
      return renderCompact();
    case 'icon-only':
      return renderIconOnly();
    default:
      return renderDefault();
  }
};

export default LanguageSelector; 