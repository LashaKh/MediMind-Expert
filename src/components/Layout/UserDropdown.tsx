import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  User, 
  Settings, 
  LogOut, 
  Moon, 
  Sun,
  ChevronDown,
  HelpCircle
} from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';
import { useAuth } from '../../contexts/AuthContext';
import { useTheme } from '../../hooks/useTheme';

export const UserDropdown: React.FC = () => {
  const { t } = useTranslation();
  const { user, signOut } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/signin');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

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

  if (!user) return null;

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-medium">
          {user.email?.charAt(0).toUpperCase()}
        </div>
        <div className="hidden md:block text-left">
          <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
            {user.email}
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            {t('common.account')}
          </div>
        </div>
        <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg border dark:border-gray-700 py-2 z-50">
          {/* User info section */}
          <div className="px-4 py-3 border-b dark:border-gray-700">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-lg font-medium">
                {user.email?.charAt(0).toUpperCase()}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                  {user.email}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {t('common.signedIn')}
                </div>
              </div>
            </div>
          </div>

          {/* Menu items */}
          <div className="py-2">
            <Link
              to="/profile"
              onClick={() => setIsOpen(false)}
              className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <User className="w-4 h-4 mr-3" />
              {t('navigation.profile')}
            </Link>

            <Link
              to="/settings"
              onClick={() => setIsOpen(false)}
              className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <Settings className="w-4 h-4 mr-3" />
              {t('navigation.settings')}
            </Link>

            <Link
              to="/help"
              onClick={() => setIsOpen(false)}
              className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <HelpCircle className="w-4 h-4 mr-3" />
              {t('navigation.helpCenter')}
            </Link>

            {/* Theme toggle */}
            <button
              onClick={() => {
                toggleTheme();
                setIsOpen(false);
              }}
              className="w-full flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 mr-3" />
              ) : (
                <Moon className="w-4 h-4 mr-3" />
              )}
              {theme === 'dark' ? t('theme.lightMode') : t('theme.darkMode')}
            </button>

            <div className="border-t dark:border-gray-700 my-2"></div>

            <button
              onClick={() => {
                handleSignOut();
                setIsOpen(false);
              }}
              className="w-full flex items-center px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
            >
              <LogOut className="w-4 h-4 mr-3" />
              {t('auth.signOut')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}; 