import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, Menu, ArrowUp } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';
import { useAuth } from '../../contexts/AuthContext';
import { UserDropdown } from './UserDropdown';
import { LanguageSelector } from '../ui/LanguageSelector';

interface HeaderProps {
  onMenuToggle: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isCondensed, setIsCondensed] = useState(false);

  // Detect mobile and scroll behavior
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrolled = scrollTop > 10;
      const shouldCondense = scrollTop > 100;
      const shouldShowBackToTop = scrollTop > 300;

      setIsScrolled(scrolled);
      setIsCondensed(shouldCondense);
      setShowBackToTop(shouldShowBackToTop);
    };

    checkMobile();
    handleScroll();

    window.addEventListener('resize', checkMobile);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Back to top functionality
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Header with smart condensing on scroll */}
      <header 
        className={`
          fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm
          border-b border-gray-200 dark:border-gray-700 transition-all duration-300 ease-in-out safe-top
          ${isScrolled ? 'shadow-lg' : 'shadow-md'}
          ${isCondensed && isMobile ? 'h-12' : 'h-16'}
        `}
        style={{
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
        }}
      >
        <div className={`
          flex items-center justify-between px-4 sm:px-6 lg:px-8 safe-left safe-right transition-all duration-300
          ${isCondensed && isMobile ? 'h-12' : 'h-16'}
        `}>
          {/* Left side: Logo and mobile menu button */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Mobile menu button with enhanced touch target */}
            {user && (
              <button
                onClick={onMenuToggle}
                className={`
                  touch-target-md md:hidden rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 
                  transition-all duration-200 focus-enhanced active:scale-95
                  ${isCondensed ? 'p-1' : 'p-2'}
                `}
                aria-label={t('navigation.toggleMenu')}
                aria-expanded="false"
              >
                <Menu className={`text-gray-600 dark:text-gray-300 ${isCondensed ? 'w-4 h-4' : 'w-5 h-5'}`} />
              </button>
            )}

            {/* Logo with responsive sizing */}
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-primary dark:text-white focus-enhanced rounded-lg p-1 -m-1 transition-all duration-200"
            >
              <div className="flex items-center">
                <Stethoscope className={`
                  text-primary flex-shrink-0 transition-all duration-200
                  ${isCondensed && isMobile ? 'w-5 h-5' : 'w-6 h-6 sm:w-8 sm:h-8'}
                `} />
                <div className={`
                  ml-2 flex flex-col transition-all duration-200
                  ${isCondensed && isMobile ? 'opacity-0 w-0 overflow-hidden ml-0' : ''}
                `}>
                  <span className={`
                    font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent transition-all duration-200
                    ${isCondensed && isMobile ? 'text-base' : 'text-lg sm:text-xl'}
                  `}>
                    MediMind
                  </span>
                  <span className={`
                    text-gray-500 dark:text-gray-400 transition-all duration-200
                    ${isCondensed && isMobile ? 'hidden' : 'text-xs hidden xs:block'}
                  `}>
                    {t('common.aiAssistant')}
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Right side: Language selector and user dropdown or auth buttons */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Language Selector */}
            <LanguageSelector 
              variant={isMobile ? 'icon-only' : 'compact'} 
              className="flex-shrink-0"
            />

            {user ? (
              <UserDropdown />
            ) : (
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Link
                  to="/signin"
                  className={`
                    touch-target px-3 sm:px-4 py-2 text-gray-600 dark:text-gray-300 
                    hover:text-primary dark:hover:text-white transition-all duration-200 
                    focus-enhanced rounded-lg active:scale-95
                    ${isCondensed && isMobile ? 'text-xs px-2 py-1' : 'text-sm sm:text-base'}
                  `}
                >
                  <span className={isCondensed && isMobile ? 'block' : 'hidden sm:inline'}>
                    {t('auth.signIn')}
                  </span>
                  <span className={isCondensed && isMobile ? 'hidden' : 'sm:hidden'}>
                    {t('auth.signIn')}
                  </span>
                </Link>
                <Link
                  to="/signup"
                  className={`
                    touch-target bg-primary hover:bg-primary/90 text-white rounded-lg 
                    transition-all duration-200 focus-enhanced active:scale-95
                    ${isCondensed && isMobile ? 'text-xs px-2 py-1' : 'px-3 sm:px-4 py-2 text-sm sm:text-base'}
                  `}
                >
                  <span className={isCondensed && isMobile ? 'block' : 'hidden sm:inline'}>
                    {t('auth.signUp')}
                  </span>
                  <span className={isCondensed && isMobile ? 'hidden' : 'sm:hidden'}>
                    {t('auth.signUp')}
                  </span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className={`
            fixed bottom-6 right-6 z-40 bg-primary hover:bg-primary/90 text-white 
            rounded-full shadow-lg hover:shadow-xl transition-all duration-300 
            focus-enhanced active:scale-95 group
            ${isMobile ? 'w-12 h-12' : 'w-14 h-14'}
          `}
          aria-label="Back to top"
          style={{
            transform: showBackToTop ? 'translateY(0)' : 'translateY(100px)',
          }}
        >
          <ArrowUp className={`
            transition-transform duration-200 group-hover:-translate-y-0.5
            ${isMobile ? 'w-5 h-5' : 'w-6 h-6'}
          `} />
        </button>
      )}
    </>
  );
};