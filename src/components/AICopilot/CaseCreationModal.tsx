import React, { useState } from 'react';
import { X, FileText, AlertTriangle } from 'lucide-react';
import { Button } from '../ui/button';
import { CaseForm } from './CaseForm';
import { PatientCase } from '../../types/chat';
import { useTranslation } from '../../hooks/useTranslation';

interface CaseCreationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCaseCreate: (caseData: Omit<PatientCase, 'id' | 'createdAt' | 'updatedAt'>) => void;
  specialty?: 'cardiology' | 'obgyn';
  className?: string;
}

export const CaseCreationModal: React.FC<CaseCreationModalProps> = ({
  isOpen,
  onClose,
  onCaseCreate,
  specialty,
  className = ''
}) => {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCaseSubmit = async (caseData: Omit<PatientCase, 'id' | 'createdAt' | 'updatedAt'>) => {
    setIsSubmitting(true);
    try {
      await onCaseCreate(caseData);
      onClose();
    } catch (error) {
      console.error('Error creating case:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    if (!isSubmitting) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Modal Overlay */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 ${className}`} 
        onClick={handleCancel}
      />
      
      {/* Modal Content */}
      <div className="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-white rounded-lg shadow-xl z-50 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <FileText className="w-6 h-6 text-primary" />
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  {t('case.createNewCase')}
                </h2>
                {specialty && (
                  <p className="text-sm text-gray-600 mt-1">
                    {specialty === 'cardiology' ? t('case.cardiologySpecialty') : t('case.obgynSpecialty')}
                  </p>
                )}
              </div>
            </div>
            <Button
              onClick={handleCancel}
              variant="ghost"
              size="sm"
              className="p-2"
              disabled={isSubmitting}
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
          
          {/* Privacy Notice */}
          <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-md">
            <div className="flex items-start space-x-2">
              <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-amber-700">
                <p className="font-medium">{t('case.privacyNotice')}</p>
                <p className="mt-1">
                  {t('case.privacyMessage')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6">
          <CaseForm
            onSubmit={handleCaseSubmit}
            onCancel={handleCancel}
            isSubmitting={isSubmitting}
            specialty={specialty}
          />
        </div>
      </div>
    </>
  );
}; 