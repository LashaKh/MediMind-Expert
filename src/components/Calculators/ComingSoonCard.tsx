import React from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { useTranslation } from '../../hooks/useTranslation';

interface ComingSoonCardProps {
  title: string;
  description: string;
  phase: string;
}

export const ComingSoonCard: React.FC<ComingSoonCardProps> = ({
  title,
  description,
  phase
}) => {
  const { t } = useTranslation();

  return (
    <Card className="opacity-75 bg-gray-50 dark:bg-gray-800/50">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Clock className="w-5 h-5 text-gray-500" />
          <span className="text-gray-700 dark:text-gray-300">{title}</span>
        </CardTitle>
        <CardDescription className="text-gray-600 dark:text-gray-400">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
            {phase}
          </div>
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <span>{t('calculators.coming_soon')}</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </div>
        </div>
        <div className="mt-4 p-3 bg-gray-100 dark:bg-gray-700/50 rounded-lg">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {t('calculators.coming_soon_description')}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}; 