import React from 'react';
import { FileText } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';

export const Forms: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center space-x-3 mb-6">
          <FileText className="w-8 h-8 text-primary" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            {t('navigation.forms')}
          </h1>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {t('navigation.formsDesc')}
          </p>
          <div className="text-center py-12">
            <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 dark:text-gray-400">
              {t('navigation.comingSoon')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}; 