import React from 'react';
import { FileText, Plus } from 'lucide-react';
import { Button } from '../ui/button';
import { useTranslation } from '../../hooks/useTranslation';

interface NewCaseButtonProps {
  onClick: () => void;
  disabled?: boolean;
  variant?: 'default' | 'ghost' | 'outline';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
}

export const NewCaseButton: React.FC<NewCaseButtonProps> = ({
  onClick,
  disabled = false,
  variant = 'outline',
  size = 'sm',
  className = ''
}) => {
  const { t } = useTranslation();

  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      variant={variant}
      size={size}
      className={`flex items-center space-x-2 transition-all duration-200 hover:shadow-md ${className}`}
      aria-label={t('case.createNewCase')}
      title={t('case.createNewCase')}
    >
      <Plus className="w-4 h-4" />
      <FileText className="w-4 h-4" />
      <span className="font-medium">{t('case.newCase')}</span>
    </Button>
  );
}; 