import React, { useState, useEffect } from 'react';
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
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [cardAnimations, setCardAnimations] = useState({ cardiology: false, 'ob-gyn': false });

  // Stagger animation entrance
  useEffect(() => {
    setIsVisible(true);
    const timer1 = setTimeout(() => {
      setCardAnimations(prev => ({ ...prev, cardiology: true }));
    }, 300);
    const timer2 = setTimeout(() => {
      setCardAnimations(prev => ({ ...prev, 'ob-gyn': true }));
    }, 500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const specialties = [
    {
      id: 'cardiology',
      name: t('onboarding.specialty.cardiology.name'),
      description: t('onboarding.specialty.cardiology.description'),
      gradient: 'from-red-500 via-pink-500 to-purple-600',
      hoverGradient: 'from-red-400 via-pink-400 to-purple-500',
      iconGradient: 'from-red-400 to-pink-500',
      shadowColor: 'shadow-red-500/25',
      hoverShadowColor: 'shadow-red-500/40',
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <defs>
            <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="50%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#f97316" />
            </linearGradient>
          </defs>
          <path
            fill="url(#heartGradient)"
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          />
        </svg>
      ),
      features: [
        { icon: '🫀', text: t('onboarding.specialty.cardiology.features.cardiac') },
        { icon: '📊', text: t('onboarding.specialty.cardiology.features.ecg') },
        { icon: '💊', text: t('onboarding.specialty.cardiology.features.heartFailure') },
        { icon: '🔬', text: t('onboarding.specialty.cardiology.features.interventional') }
      ],
      stats: { calculators: '16+', guidelines: '50+', studies: '1000+' }
    },
    {
      id: 'ob-gyn',
      name: t('onboarding.specialty.obgyn.name'),
      description: t('onboarding.specialty.obgyn.description'),
      gradient: 'from-blue-500 via-indigo-500 to-purple-600',
      hoverGradient: 'from-blue-400 via-indigo-400 to-purple-500',
      iconGradient: 'from-blue-400 to-indigo-500',
      shadowColor: 'shadow-blue-500/25',
      hoverShadowColor: 'shadow-blue-500/40',
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <defs>
            <linearGradient id="babyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
          <path
            fill="url(#babyGradient)"
            d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 5.5V7.5L13.5 7L12 8.5L10.5 7L9 7.5V5.5L3 7V9L9 10.5V16C9 18.21 10.79 20 13 20H15C17.21 20 19 18.21 19 16V10.5L21 9Z"
          />
        </svg>
      ),
      features: [
        { icon: '🤱', text: t('onboarding.specialty.obgyn.features.prenatal') },
        { icon: '🔬', text: t('onboarding.specialty.obgyn.features.gynecological') },
        { icon: '📈', text: t('onboarding.specialty.obgyn.features.obstetric') },
        { icon: '💡', text: t('onboarding.specialty.obgyn.features.reproductive') }
      ],
      stats: { calculators: '12+', guidelines: '40+', studies: '800+' }
    }
  ] as const;

  const handleCardClick = (specialtyId: 'cardiology' | 'ob-gyn') => {
    onSelect(specialtyId);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      {/* Header Section with Staggered Animation */}
      <div className={`text-center mb-16 transition-all duration-1000 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}>
        <div className="relative inline-block mb-6">
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent leading-tight">
            {t('onboarding.specialty.title')}
          </h1>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>
        
        <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
          {t('onboarding.specialty.subtitle')}
        </p>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-20 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
          <div className="absolute top-32 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-40 animation-delay-1000"></div>
          <div className="absolute top-16 right-1/4 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse opacity-50 animation-delay-2000"></div>
        </div>
      </div>

      {/* Specialty Cards */}
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
        {specialties.map((specialty, index) => (
          <div
            key={specialty.id}
            className={`group relative transition-all duration-700 transform ${
              cardAnimations[specialty.id as keyof typeof cardAnimations]
                ? 'translate-y-0 opacity-100 scale-100'
                : 'translate-y-12 opacity-0 scale-95'
            }`}
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            {/* Card Container */}
            <div
              onClick={() => handleCardClick(specialty.id)}
              onMouseEnter={() => setHoveredCard(specialty.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`
                relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-500 transform
                ${selectedSpecialty === specialty.id
                  ? `scale-105 ${specialty.hoverShadowColor} shadow-2xl ring-4 ring-white`
                  : hoveredCard === specialty.id
                    ? `scale-102 ${specialty.hoverShadowColor} shadow-xl`
                    : `${specialty.shadowColor} shadow-lg hover:shadow-xl`
                }
                bg-white border border-slate-100
              `}
            >
              {/* Background Gradient Overlay */}
              <div className={`
                absolute inset-0 opacity-0 transition-opacity duration-500
                bg-gradient-to-br ${hoveredCard === specialty.id ? specialty.hoverGradient : specialty.gradient}
                ${hoveredCard === specialty.id || selectedSpecialty === specialty.id ? 'opacity-5' : ''}
              `} />

              {/* Selection Indicator */}
              {selectedSpecialty === specialty.id && (
                <div className="absolute top-6 right-6 z-20">
                  <div className={`
                    w-8 h-8 rounded-full flex items-center justify-center
                    bg-gradient-to-r ${specialty.gradient} shadow-lg
                    animate-pulse
                  `}>
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              )}

              {/* Card Content */}
              <div className="relative z-10 p-8 lg:p-10">
                {/* Icon Section */}
                <div className="flex items-center justify-center mb-8">
                  <div className={`
                    w-24 h-24 lg:w-28 lg:h-28 rounded-2xl p-6
                    bg-gradient-to-br ${specialty.gradient}
                    shadow-lg transform transition-all duration-500
                    ${hoveredCard === specialty.id ? 'scale-110 rotate-3' : 'scale-100'}
                  `}>
                    <div className="w-full h-full text-white">
                      {specialty.icon}
                    </div>
                  </div>
                </div>

                {/* Title and Description */}
                <div className="text-center mb-8">
                  <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-3">
                    {specialty.name}
                  </h3>
                  <p className="text-lg text-slate-600 font-medium">
                    {specialty.description}
                  </p>
                </div>

                {/* Statistics */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {Object.entries(specialty.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className={`
                        text-2xl font-bold bg-gradient-to-r ${specialty.gradient} bg-clip-text text-transparent
                      `}>
                        {value}
                      </div>
                      <div className="text-xs text-slate-500 capitalize font-medium">
                        {key}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Features List */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
                    <span className="mr-2">✨</span>
                    {t('onboarding.specialty.featuresTitle')}
                  </h4>
                  {specialty.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className={`
                        flex items-center space-x-4 p-3 rounded-xl transition-all duration-300
                        ${hoveredCard === specialty.id ? 'bg-slate-50 translate-x-2' : ''}
                      `}
                      style={{ transitionDelay: `${idx * 100}ms` }}
                    >
                      <div className="text-2xl">{feature.icon}</div>
                      <span className="text-slate-700 font-medium">{feature.text}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Section */}
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <div className={`
                    text-center transition-all duration-300
                    ${hoveredCard === specialty.id ? 'transform translate-y-0 opacity-100' : 'translate-y-2 opacity-75'}
                  `}>
                    <div className={`
                      inline-flex items-center space-x-2 px-6 py-3 rounded-full
                      bg-gradient-to-r ${specialty.gradient} text-white font-semibold
                      transform transition-all duration-300
                      ${hoveredCard === specialty.id ? 'scale-105 shadow-lg' : 'scale-100'}
                    `}>
                      <span>{t('common.getStarted')}</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className={`
                absolute inset-0 rounded-3xl transition-all duration-500
                ${hoveredCard === specialty.id || selectedSpecialty === specialty.id
                  ? `bg-gradient-to-r ${specialty.gradient} opacity-20`
                  : 'opacity-0'
                }
              `} />
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className={`
        text-center mt-16 transition-all duration-1000 delay-700 transform
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
      `}>
        <div className="max-w-2xl mx-auto">
          <p className="text-slate-500 text-lg leading-relaxed">
            {t('onboarding.specialty.note')}
          </p>
          
          {/* Trust Indicators */}
          <div className="flex items-center justify-center space-x-8 mt-8 text-sm text-slate-400">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>{t('common.evidenceBased')}</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span>{t('common.clinicallyValidated')}</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span>{t('common.hipaaCompliant')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .scale-102 {
          transform: scale(1.02);
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}; 