import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  MessageSquare, 
  Calculator, 
  FileText, 
  BookOpen, 
  Settings,
  Stethoscope,
  X
} from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  isMobile?: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, isMobile = false }) => {
  const { t } = useTranslation();
  const location = useLocation();
  const sidebarRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const firstNavItemRef = useRef<HTMLAnchorElement>(null);

  const navigationItems = [
    {
      icon: MessageSquare,
      label: t('navigation.aiCoPilot'),
      path: '/ai-copilot',
      description: t('navigation.aiCoPilotDesc')
    },
    {
      icon: Calculator,
      label: t('navigation.calculators'),
      path: '/calculators',
      description: t('navigation.calculatorsDesc')
    },
    {
      icon: FileText,
      label: t('navigation.forms'),
      path: '/forms',
      description: t('navigation.formsDesc')
    },
    {
      icon: BookOpen,
      label: t('navigation.personalKB'),
      path: '/knowledge-base',
      description: t('navigation.personalKBDesc')
    },
    {
      icon: Settings,
      label: t('navigation.settings'),
      path: '/settings',
      description: t('navigation.settingsDesc')
    }
  ];

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  // Enhanced keyboard navigation and focus management
  useEffect(() => {
    if (isOpen && isMobile) {
      // Focus trap and initial focus
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          onClose();
          return;
        }

        if (event.key === 'Tab') {
          const sidebar = sidebarRef.current;
          if (!sidebar) return;

          const focusableElements = sidebar.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          const firstElement = focusableElements[0] as HTMLElement;
          const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

          if (event.shiftKey) {
            if (document.activeElement === firstElement) {
              event.preventDefault();
              lastElement.focus();
            }
          } else {
            if (document.activeElement === lastElement) {
              event.preventDefault();
              firstElement.focus();
            }
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      
      // Focus the close button on mobile when opening
      if (closeButtonRef.current) {
        setTimeout(() => closeButtonRef.current?.focus(), 100);
      }

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, isMobile, onClose]);

  // Announce sidebar state for screen readers
  useEffect(() => {
    if (isMobile) {
      const announcement = isOpen ? t('ui.openMenu') : t('ui.closeMenu');
      const announcer = document.createElement('div');
      announcer.setAttribute('aria-live', 'polite');
      announcer.setAttribute('aria-atomic', 'true');
      announcer.className = 'sr-only';
      announcer.textContent = announcement;
      document.body.appendChild(announcer);
      
      setTimeout(() => {
        document.body.removeChild(announcer);
      }, 1000);
    }
  }, [isOpen, isMobile, t]);

  return (
    <>
      {/* Sidebar with enhanced mobile behavior */}
      <aside
        ref={sidebarRef}
        id="sidebar"
        role="navigation"
        aria-label={t('navigation.toggleMenu')}
        aria-hidden={isMobile ? !isOpen : false}
        className={`
          w-64 bg-white dark:bg-gray-900 
          shadow-lg z-50 transform transition-transform duration-300 ease-in-out
          sidebar-container
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          ${isMobile ? 'fixed left-0' : 'relative'}
          md:translate-x-0 md:shadow-none
          focus-within:outline-none
        `}
        style={{
          ...(isMobile ? {
            top: '64px',
            height: 'calc(100vh - 64px)'
          } : {
            height: 'calc(100vh - 64px)'
          })
        }}
      >
        <div className="flex flex-col h-full">
          {/* Header with enhanced close button for mobile */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <Stethoscope className="w-8 h-8 text-primary" />
              <div className="ml-2 flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  MediMind
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {t('common.aiAssistant')}
                </span>
              </div>
            </div>
            
            {/* Enhanced close button for mobile with better accessibility */}
            {isMobile && (
              <button
                ref={closeButtonRef}
                onClick={onClose}
                className="touch-target-md rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 md:hidden focus-enhanced active:scale-95"
                aria-label={t('ui.closeMenu')}
                aria-keyshortcuts="Escape"
              >
                <X className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </button>
            )}
          </div>

          {/* Enhanced Navigation with better accessibility */}
          <nav 
            className="flex-1 p-4 space-y-2 overflow-y-auto scrollbar-thin"
            role="list"
            aria-label={t('navigation.toggleMenu')}
          >
            {navigationItems.map((item, index) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              
              return (
                <Link
                  key={item.path}
                  ref={index === 0 ? firstNavItemRef : undefined}
                  to={item.path}
                  onClick={onClose}
                  role="listitem"
                  aria-current={active ? 'page' : undefined}
                  aria-describedby={`nav-desc-${index}`}
                  className={`
                    flex items-center space-x-3 px-3 py-3 rounded-lg transition-all duration-200 group
                    touch-target-lg w-full text-left relative overflow-hidden
                    ${active 
                      ? 'bg-primary text-white shadow-md ring-2 ring-primary/20' 
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:shadow-sm'
                    }
                    focus-enhanced active:scale-[0.98]
                  `}
                >
                  {/* Active indicator */}
                  {active && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/30 rounded-r" />
                  )}
                  
                  <Icon className={`
                    w-5 h-5 flex-shrink-0 transition-all duration-200 z-10
                    ${active 
                      ? 'text-white' 
                      : 'text-gray-500 dark:text-gray-400 group-hover:text-primary group-focus:text-primary'
                    }
                  `} />
                  
                  <div className="flex-1 min-w-0 z-10">
                    <div className={`
                      text-sm font-medium truncate transition-all duration-200
                      ${active ? 'text-white' : 'group-hover:text-gray-900 dark:group-hover:text-gray-100'}
                    `}>
                      {item.label}
                    </div>
                    <div 
                      id={`nav-desc-${index}`}
                      className={`
                        text-xs truncate transition-all duration-200
                        ${active 
                          ? 'text-blue-100' 
                          : 'text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300'
                        }
                      `}
                    >
                      {item.description}
                    </div>
                  </div>

                  {/* Hover effect overlay */}
                  {!active && (
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Enhanced Footer with version info */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700 safe-bottom">
            <div className="text-xs text-gray-500 dark:text-gray-400 text-center space-y-1">
              <div className="font-medium">v1.0.0</div>
              <div>{t('common.medicalAssistant')}</div>
              {isMobile && (
                <div className="text-gray-400 dark:text-gray-500 pt-1">
                  {t('ui.escapeToClose')}
                </div>
              )}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}; 