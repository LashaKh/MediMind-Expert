import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  MessageSquare, 
  Calculator, 
  FileText, 
  BookOpen, 
  Settings,
  X,
  ChevronLeft,
  Sparkles,
  Activity,
  Brain,
  Stethoscope,
  Heart,
  Shield,
  Zap,
  TrendingUp,
  User,
  Database,
  Mic
} from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';
import { useAuth } from '../../contexts/AuthContext';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  isMobile?: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, isMobile = false }) => {
  const { t } = useTranslation();
  const location = useLocation();
  const { user, profile } = useAuth();
  const sidebarRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const firstNavItemRef = useRef<HTMLAnchorElement>(null);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const navigationItems = [
    {
      icon: MessageSquare,
      iconSecondary: Brain,
      label: t('navigation.aiCoPilot'),
      path: '/ai-copilot',
      description: t('navigation.aiCoPilotDesc'),
      color: 'from-blue-500 to-cyan-500',
      bgPattern: 'bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30',
      badge: 'AI',
      badgeColor: 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300'
    },
    {
      icon: Mic,
      iconSecondary: Sparkles,
      label: t('navigation.podcastStudio'),
      path: '/podcast-studio',
      description: t('navigation.podcastStudioDesc'),
      color: 'from-purple-500 to-pink-500',
      bgPattern: 'bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30',
      badge: 'NEW',
      badgeColor: 'bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300'
    },
    {
      icon: Calculator,
      iconSecondary: TrendingUp,
      label: t('navigation.calculators'),
      path: '/calculators',
      description: t('navigation.calculatorsDesc'),
      color: 'from-purple-500 to-violet-500',
      bgPattern: 'bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-950/30 dark:to-violet-950/30',
      badge: '16+',
      badgeColor: 'bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300'
    },
    {
      icon: FileText,
      iconSecondary: Shield,
      label: t('navigation.forms'),
      path: '/forms',
      description: t('navigation.formsDesc'),
      color: 'from-emerald-500 to-teal-500',
      bgPattern: 'bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30',
      badge: 'NEW',
      badgeColor: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300'
    },
    {
      icon: BookOpen,
      iconSecondary: Sparkles,
      label: t('navigation.personalKB'),
      path: '/knowledge-base',
      description: t('navigation.personalKBDesc'),
      color: 'from-amber-500 to-orange-500',
      bgPattern: 'bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30',
      badge: 'DOCS',
      badgeColor: 'bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300'
    },
    {
      icon: Database,
      iconSecondary: Heart,
      label: 'Diseases',
      path: '/diseases',
      description: 'Comprehensive cardiology disease database with evidence-based guidelines',
      color: 'from-red-500 to-rose-500',
      bgPattern: 'bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-950/30 dark:to-rose-950/30',
      badge: 'NEW',
      badgeColor: 'bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300'
    },
    {
      icon: User,
      iconSecondary: Heart,
      label: t('navigation.profile'),
      path: '/profile',
      description: t('navigation.profileDesc'),
      color: 'from-rose-500 to-pink-500',
      bgPattern: 'bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950/30 dark:to-pink-950/30',
      badge: '',
      badgeColor: 'bg-rose-100 text-rose-700 dark:bg-rose-900/50 dark:text-rose-300'
    },
    {
      icon: Settings,
      iconSecondary: Zap,
      label: t('navigation.settings'),
      path: '/settings',
      description: t('navigation.settingsDesc'),
      color: 'from-slate-500 to-gray-500',
      bgPattern: 'bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-950/30 dark:to-gray-950/30',
      badge: '',
      badgeColor: 'bg-slate-100 text-slate-700 dark:bg-slate-900/50 dark:text-slate-300'
    }
  ];

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  // Enhanced keyboard navigation and focus management
  useEffect(() => {
    if (isOpen && isMobile) {
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
      {/* Enhanced Sidebar with Glassmorphism and Modern Design */}
      <aside
        ref={sidebarRef}
        id="sidebar"
        role="navigation"
        aria-label={t('navigation.toggleMenu')}
        aria-hidden={isMobile ? !isOpen : false}
        className={`
          ${isCollapsed && !isMobile ? 'w-20' : 'w-72'} 
          relative transform transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1)
          sidebar-container group
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          ${isMobile ? 'fixed left-0 z-50' : 'relative z-40'}
          md:translate-x-0
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
        {/* Glassmorphism Background with Animated Gradient */}
        <div className={`
          absolute inset-0 
          bg-gradient-to-br from-white/95 via-white/90 to-white/95 
          dark:from-gray-900/95 dark:via-gray-900/90 dark:to-gray-900/95
          backdrop-blur-xl backdrop-saturate-150
          border-r border-white/20 dark:border-gray-700/50
          shadow-2xl shadow-black/5 dark:shadow-black/20
          transition-all duration-700
        `}>
          {/* Animated gradient overlay */}
          <div className={`
            absolute inset-0 opacity-50
            bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-cyan-500/10
            dark:from-blue-400/10 dark:via-purple-400/5 dark:to-cyan-400/10
            animate-pulse-glow
          `} />
          
          {/* Noise texture for premium feel */}
          <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSBiYXNlRnJlcXVlbmN5PSIwLjkiIG51bU9jdGF2ZXM9IjEiIHJlc3VsdD0ibm9pc2UiLz48ZmVDb21wb3NpdGUgaW49Im5vaXNlIiBpbjI9IlNvdXJjZUdyYXBoaWMiIG9wZXJhdG9yPSJtdWx0aXBseSIvPjwvZmlsdGVyPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjI1Ii8+PC9zdmc+')] bg-repeat" />
        </div>

        <div className="relative z-10 flex flex-col h-full">
          {/* Enhanced Header - Simplified without logo duplication */}
          <div className={`
            flex items-center justify-between p-4 border-b border-white/10 dark:border-gray-700/30
            ${isCollapsed && !isMobile ? 'px-2' : 'px-6'}
            transition-all duration-300
          `}>
            {/* User Profile Summary */}
            <div className={`
              flex items-center space-x-3 transition-all duration-300
              ${isCollapsed && !isMobile ? 'justify-center w-full' : ''}
            `}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg blur animate-pulse-glow opacity-50" />
                <div className="relative bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg shadow-lg overflow-hidden w-10 h-10">
                  {profile?.profile_picture_url ? (
                    <img
                      src={profile.profile_picture_url}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <User className="w-6 h-6 text-white" />
                    </div>
                  )}
                </div>
              </div>
              {(!isCollapsed || isMobile) && (
                <div className="flex flex-col">
                  <h2 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
                    {profile?.full_name || 'Professional'}
                  </h2>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                    {profile?.medical_specialty || 'Medical Professional'}
                  </p>
                </div>
              )}
            </div>

            {/* Enhanced Controls */}
            <div className="flex items-center space-x-2">
              {/* Desktop Collapse Toggle */}
              {!isMobile && (
                <button
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  className={`
                    p-2 rounded-lg transition-all duration-300
                    hover:bg-white/20 dark:hover:bg-gray-700/30
                    active:scale-95 focus-enhanced
                    ${isCollapsed ? 'rotate-180' : ''}
                  `}
                  aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                </button>
              )}
              
              {/* Mobile Close Button */}
              {isMobile && (
                <button
                  ref={closeButtonRef}
                  onClick={onClose}
                  className="p-2 rounded-lg transition-all duration-300 hover:bg-white/20 dark:hover:bg-gray-700/30 active:scale-95 focus-enhanced"
                  aria-label={t('ui.closeMenu')}
                >
                  <X className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                </button>
              )}
            </div>
          </div>

          {/* Enhanced Navigation with Micro-interactions */}
          <nav 
            className={`
              flex-1 py-4 space-y-2 overflow-y-auto scrollbar-medical
              ${isCollapsed && !isMobile ? 'px-2' : 'px-6'}
              transition-all duration-300
            `}
            role="list"
            aria-label={t('navigation.toggleMenu')}
          >
            {navigationItems.map((item, index) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              const isHovered = hoveredItem === item.path;
              
              return (
                <Link
                  key={item.path}
                  ref={index === 0 ? firstNavItemRef : undefined}
                  to={item.path}
                  onClick={onClose}
                  onMouseEnter={() => setHoveredItem(item.path)}
                  onMouseLeave={() => setHoveredItem(null)}
                  role="listitem"
                  aria-current={active ? 'page' : undefined}
                  className={`
                    group relative flex items-center rounded-xl transition-all duration-300 sidebar-nav-item
                    ${isCollapsed && !isMobile ? 'px-3 py-4 justify-center' : 'px-4 py-3 space-x-4'}
                    ${active 
                      ? `bg-gradient-to-r ${item.color} shadow-xl shadow-black/10 dark:shadow-black/30 transform scale-[1.02]` 
                      : 'hover:bg-white/60 dark:hover:bg-gray-800/60 hover:shadow-lg hover:transform hover:scale-[1.01]'
                    }
                    focus-enhanced active:scale-[0.99] backdrop-blur-sm
                    border border-transparent
                    ${active ? 'border-white/20 dark:border-white/10' : 'hover:border-white/30 dark:hover:border-gray-700/50'}
                  `}
                >
                  {/* Background Pattern for Active State */}
                  {active && (
                    <div className={`absolute inset-0 rounded-xl ${item.bgPattern} opacity-10`} />
                  )}
                  
                  {/* Icon Container with Fixed Animation */}
                  <div className={`
                    relative flex items-center justify-center transition-all duration-300
                    ${active ? 'text-white' : 'text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'}
                  `}>
                    {/* Single Icon with Smooth Transition */}
                    <Icon className={`
                      w-6 h-6 transition-all duration-300 z-10 relative
                      ${isHovered && !active ? 'scale-110 rotate-6' : ''}
                      ${active ? 'scale-110' : ''}
                    `} />
                    
                    {/* Glow Effect */}
                    <div className={`
                      absolute inset-0 rounded-full transition-all duration-300
                      ${active ? `bg-gradient-to-r ${item.color} opacity-20 blur-lg scale-150` : ''}
                      ${isHovered && !active ? 'bg-white/20 dark:bg-gray-400/20 opacity-100 blur-md scale-125' : 'opacity-0'}
                    `} />
                  </div>

                  {/* Content Section */}
                  {(!isCollapsed || isMobile) && (
                    <div className="flex-1 min-w-0 relative z-10">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h3 className={`
                            text-sm font-semibold transition-all duration-300 truncate
                            ${active ? 'text-white' : 'text-gray-900 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white'}
                          `}>
                            {item.label}
                          </h3>
                          <p className={`
                            text-xs transition-all duration-300 truncate mt-0.5
                            ${active 
                              ? 'text-white/80' 
                              : 'text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300'
                            }
                          `}>
                            {item.description}
                          </p>
                        </div>
                        
                        {/* Badge */}
                        {item.badge && (
                          <div className={`
                            px-2 py-1 rounded-full text-xs font-bold transition-all duration-300
                            ${active 
                              ? 'bg-white/20 text-white' 
                              : item.badgeColor
                            }
                            ${isHovered ? 'scale-110' : ''}
                          `}>
                            {item.badge}
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Collapsed State Tooltip */}
                  {isCollapsed && !isMobile && (
                    <div className={`
                      absolute left-full ml-4 px-3 py-2 rounded-lg
                      bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900
                      text-sm font-medium whitespace-nowrap
                      opacity-0 group-hover:opacity-100 pointer-events-none
                      transition-all duration-300 transform translate-x-2 group-hover:translate-x-0
                      z-50 shadow-xl border border-gray-700 dark:border-gray-300
                    `}>
                      {item.label}
                      {item.badge && (
                        <span className={`ml-2 px-1.5 py-0.5 rounded text-xs ${item.badgeColor}`}>
                          {item.badge}
                        </span>
                      )}
                      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-900 dark:bg-gray-100 rotate-45" />
                    </div>
                  )}

                  {/* Active Indicator */}
                  {active && (
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-white/50 rounded-r-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Enhanced Footer with Medical Stats */}
          <div className={`
            p-4 border-t border-white/10 dark:border-gray-700/30 safe-bottom
            ${isCollapsed && !isMobile ? 'px-2' : 'px-6'}
            transition-all duration-300
          `}>
            {(!isCollapsed || isMobile) ? (
              <div className="space-y-3">
                {/* Medical Activity Indicator */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-white/40 to-white/20 dark:from-gray-800/40 dark:to-gray-800/20 border border-white/20 dark:border-gray-700/30">
                  <div className="flex items-center space-x-2">
                    <Activity className="w-4 h-4 text-green-500" />
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                      {t('profile.systemStatus')}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-xs text-green-600 dark:text-green-400 font-semibold">
                      {t('profile.online')}
                    </span>
                  </div>
                </div>
                
                {/* Version and Info */}
                <div className="text-center space-y-1">
                  <div className="text-xs font-semibold text-gray-600 dark:text-gray-400">
                    {t('profile.mediMindExpert')}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-500">
                    {t('profile.medicalAiAssistant')}
                  </div>
                  {isMobile && (
                    <div className="text-xs text-gray-400 dark:text-gray-600 pt-1">
                      Press Esc to close
                    </div>
                  )}
                </div>
              </div>
            ) : (
              // Collapsed footer
              <div className="flex flex-col items-center space-y-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                  <Activity className="w-4 h-4 text-white" />
                </div>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}; 