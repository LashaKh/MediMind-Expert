import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';

interface SpecialtySelectionProps {
  onSelect: (specialty: 'cardiology' | 'ob-gyn') => void;
  selectedSpecialty: 'cardiology' | 'ob-gyn' | null;
}

export const SpecialtySelection: React.FC<SpecialtySelectionProps> = ({
  onSelect,
  selectedSpecialty
}) => {
  const { t } = useTranslation();

  const specialties = [
    {
      id: 'cardiology',
      name: t('onboarding.specialty.cardiology.name'),
      description: t('onboarding.specialty.cardiology.description'),
      icon: '❤️',
      features: [
        t('onboarding.specialty.cardiology.features.cardiac'),
        t('onboarding.specialty.cardiology.features.ecg'),
        t('onboarding.specialty.cardiology.features.heartFailure'),
        t('onboarding.specialty.cardiology.features.interventional')
      ]
    },
    {
      id: 'ob-gyn',
      name: t('onboarding.specialty.obgyn.name'),
      description: t('onboarding.specialty.obgyn.description'),
      icon: '👶',
      features: [
        t('onboarding.specialty.obgyn.features.prenatal'),
        t('onboarding.specialty.obgyn.features.gynecological'),
        t('onboarding.specialty.obgyn.features.obstetric'),
        t('onboarding.specialty.obgyn.features.reproductive')
      ]
    }
  ] as const;

  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          {t('onboarding.specialty.title')}
        </h2>
        <p className="text-gray-600">
          {t('onboarding.specialty.subtitle')}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {specialties.map((specialty) => (
          <div
            key={specialty.id}
            onClick={() => onSelect(specialty.id)}
            className={`
              relative p-6 rounded-lg border-2 cursor-pointer transition-all duration-200
              hover:shadow-md hover:scale-105
              ${selectedSpecialty === specialty.id
                ? 'border-blue-500 bg-blue-50 shadow-md'
                : 'border-gray-200 bg-white hover:border-gray-300'
              }
            `}
          >
            {/* Selection indicator */}
            {selectedSpecialty === specialty.id && (
              <div className="absolute top-4 right-4">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            )}

            <div className="text-center mb-4">
              <div className="text-4xl mb-2">{specialty.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {specialty.name}
              </h3>
              <p className="text-sm text-gray-600">
                {specialty.description}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-medium text-gray-700 mb-2">
                {t('onboarding.specialty.featuresTitle')}
              </h4>
              {specialty.features.map((feature, index) => (
                <div key={index} className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {feature}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500">
          {t('onboarding.specialty.note')}
        </p>
      </div>
    </div>
  );
}; 