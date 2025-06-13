import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MessageSquare, Calculator, BookOpen, Settings, Grid3X3 } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';
import { useAuth } from '../../contexts/AuthContext';

interface BottomNavigationProps {
  className?: string;
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({ className = '' }) => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const location = useLocation();

  // Don't show if user is not authenticated
  if (!user) return null;

  const navigationItems = [
    {
      icon: MessageSquare,
      label: 'AI Chat',
      path: '/ai-copilot',
      shortLabel: 'Chat'
    },
    {
      icon: Calculator,
      label: 'Calculators',
      path: '/calculators',
      shortLabel: 'Calc'
    },
    {
      icon: BookOpen,
      label: 'Knowledge',
      path: '/knowledge-base',
      shortLabel: 'KB'
    },
    {
      icon: Grid3X3,
      label: 'More',
      path: '/settings',
      shortLabel: 'More'
    }
  ];

  const isActive = (path: string) => {
    if (path === '/settings') {
      // For "More" tab, show active if on settings or forms
      return location.pathname === '/settings' || location.pathname === '/forms';
    }
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  return (
    <nav 
      className={`
        fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm
        border-t border-gray-200 dark:border-gray-700 shadow-lg safe-bottom
        md:hidden ${className}
      `}
      style={{
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
      role="navigation"
      aria-label="Bottom navigation"
    >
      <div className="flex items-center justify-around h-16 px-2">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`
                flex flex-col items-center justify-center space-y-1 px-2 py-2 rounded-lg
                transition-all duration-200 touch-target-lg relative group min-w-0 flex-1
                ${active 
                  ? 'text-primary' 
                  : 'text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary'
                }
                focus-enhanced active:scale-95
              `}
              aria-label={`${item.label} ${active ? '(current)' : ''}`}
              aria-current={active ? 'page' : undefined}
            >
              {/* Active indicator */}
              {active && (
                <div className="absolute -top-0.5 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-primary rounded-full" />
              )}
              
              {/* Icon with active state */}
              <div className={`
                relative transition-all duration-200
                ${active ? 'transform scale-110' : 'group-hover:scale-105'}
              `}>
                <Icon className={`
                  w-5 h-5 transition-all duration-200
                  ${active ? 'text-primary' : 'text-gray-600 dark:text-gray-400'}
                `} />
                
                {/* Active background glow */}
                {active && (
                  <div className="absolute inset-0 bg-primary/20 rounded-full scale-150 -z-10" />
                )}
              </div>
              
              {/* Label */}
              <span className={`
                text-xs font-medium truncate transition-all duration-200 max-w-full
                ${active 
                  ? 'text-primary' 
                  : 'text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200'
                }
              `}>
                {item.shortLabel}
              </span>
              
              {/* Hover effect */}
              <div className={`
                absolute inset-0 bg-gray-100 dark:bg-gray-800 rounded-lg opacity-0 
                group-hover:opacity-50 transition-opacity duration-200 -z-10
                ${active ? 'hidden' : ''}
              `} />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}; 