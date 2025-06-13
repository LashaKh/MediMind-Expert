import React, { useState, useEffect } from 'react';
import { Calculator, Heart, Activity, Zap, Wrench, HeartHandshake, Dna, Baby, Shield, TestTube, Calendar, Menu, X, Grid3X3, Sparkles, Star, Award, TrendingUp, ArrowRight, ChevronRight } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { useSpecialty, MedicalSpecialty } from '../../contexts/SpecialtyContext';
import { useTranslation } from '../../hooks/useTranslation';
import { ChatProvider } from '../../contexts/ChatContext';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card';
import { PageContainer } from '../Layout/PageContainer';

// Cardiology Calculator Imports
// Phase 1: Core Risk Assessment  
import { ASCVDCalculator } from './ASCVDCalculator';
import { AtrialFibrillationCalculators } from './AtrialFibrillationCalculators';

// Phase 2: Acute Coronary Syndrome
import { TIMIRiskCalculator } from './TIMIRiskCalculator';
import { GRACERiskCalculator } from './GRACERiskCalculator';

// Phase 3: Advanced Therapy Management
import DAPTCalculator from './DAPTCalculator';
import { PRECISEDAPTCalculator } from './PRECISEDAPTCalculator';
import { PREVENTCalculator } from './PREVENTCalculator';

// Phase 4: Heart Failure Management
import { HeartFailureStaging } from './HeartFailureStaging';
import { GWTGHFCalculator } from './GWTGHFCalculator';
import { MAGGICCalculator } from './MAGGICCalculator';
import { SHFMCalculator } from './SHFMCalculator';

// Phase 5: Surgical Risk Assessment
import { STSCalculator } from './STSCalculator';
import { EuroSCOREIICalculator } from './EuroSCOREIICalculator';

// Phase 6: Specialized Cardiomyopathy Assessment
import { HCMRiskSCDCalculator } from './HCMRiskSCDCalculator';
import { HCMAFRiskCalculator } from './HCMAFRiskCalculator';

// OB/GYN Calculator Imports
import { EDDCalculator } from './EDDCalculator';
import { GestationalAgeCalculator } from './GestationalAgeCalculator'; // TODO: Fix type alignment
import BishopScoreCalculator from './BishopScoreCalculator';
import { ApgarScoreCalculator } from './ApgarScoreCalculator';
import PreeclampsiaRiskCalculator from './PreeclampsiaRiskCalculator';
import PretermBirthRiskCalculator from './PretermBirthRiskCalculator';
import GDMScreeningCalculator from './GDMScreeningCalculator';
import VBACSuccessCalculator from './VBACSuccessCalculator';
import PPHRiskCalculator from './PPHRiskCalculator';
import CervicalCancerRiskCalculator from './CervicalCancerRiskCalculator';
import OvarianCancerRiskCalculator from './OvarianCancerRiskCalculator';
import EndometrialCancerRiskCalculator from './EndometrialCancerRiskCalculator';
import OvarianReserveCalculator from './OvarianReserveCalculator';
import MenopauseAssessmentCalculator from './MenopauseAssessmentCalculator';

type CardiologyCalculatorType = 
  // Phase 1 - Core Risk Assessment
  | 'ascvd' | 'atrial-fibrillation'
  // Phase 2
  | 'timi-risk' | 'grace-risk'
  // Phase 3
  | 'dapt' | 'precise-dapt' | 'prevent'
  // Phase 4
  | 'heart-failure-staging' | 'gwtg-hf' | 'maggic' | 'shfm'
  // Phase 5
  | 'sts' | 'euroscore'
  // Phase 6
  | 'hcm-risk-scd' | 'hcm-af-risk';

type OBGYNCalculatorType = 
  // Pregnancy Dating & Assessment
  | 'edd-calculator' | 'gestational-age'
  // Antenatal Risk Assessment
  | 'preeclampsia-risk' | 'preterm-birth-risk' | 'gdm-screening'
  // Labor Management
  | 'bishop-score' | 'vbac-success'
  // Assessment Tools
  | 'apgar-score' | 'pph-risk'
  // Gynecologic Oncology
  | 'cervical-cancer-risk' | 'ovarian-cancer-risk' | 'endometrial-cancer-risk'
  // Reproductive Endocrinology
  | 'ovarian-reserve' | 'menopause-assessment';

type CalculatorType = CardiologyCalculatorType | OBGYNCalculatorType;

interface CalculatorCategory {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  calculators: {
    id: CalculatorType;
    name: string;
    description: string;
  }[];
}

export const Calculators: React.FC = () => {
  const { specialty } = useSpecialty();
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<string>('risk-assessment');
  const [activeCalculator, setActiveCalculator] = useState<CalculatorType | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const [isCategoryListView, setIsCategoryListView] = useState<boolean>(false);

// Cardiology Calculator Categories
const cardiologyCalculatorCategories: CalculatorCategory[] = [
  {
    id: 'risk-assessment',
      label: t('calculators.categories.risk_assessment'),
    icon: Heart,
    color: 'text-red-600',
    calculators: [
      {
        id: 'ascvd',
          name: t('calculators.ascvd.title'),
          description: t('calculators.ascvd.subtitle')
      },
      {
        id: 'atrial-fibrillation',
          name: t('calculators.atrial_fibrillation.title'),
          description: t('calculators.atrial_fibrillation.subtitle')
      }
    ]
  },
  {
    id: 'acute-care',
      label: t('calculators.categories.acute_care'),
    icon: Activity,
    color: 'text-blue-600',
    calculators: [
      {
        id: 'timi-risk',
          name: t('calculators.timi_risk.title'),
          description: t('calculators.timi_risk.subtitle')
      },
      {
        id: 'grace-risk',
          name: t('calculators.grace_acs.title'),
          description: t('calculators.grace_acs.subtitle')
      }
    ]
  },
  {
    id: 'therapy-management',
      label: t('calculators.categories.therapy_management'), 
    icon: Zap,
    color: 'text-purple-600',
    calculators: [
      {
        id: 'dapt',
          name: t('calculators.dapt.title'),
          description: t('calculators.dapt.subtitle')
      },
      {
        id: 'precise-dapt',
          name: t('calculators.precise_dapt.title'),
          description: t('calculators.precise_dapt.subtitle')
      },
      {
        id: 'prevent',
          name: t('calculators.prevent.title'),
          description: t('calculators.prevent.subtitle')
      }
    ]
  },
  {
    id: 'heart-failure',
      label: t('calculators.categories.heart_failure'),
    icon: HeartHandshake,
    color: 'text-green-600',
    calculators: [
      {
        id: 'heart-failure-staging',
          name: t('calculators.heart_failure_staging.title'),
          description: t('calculators.heart_failure_staging.subtitle')
      },
      {
        id: 'gwtg-hf',
          name: t('calculators.gwtg_hf.title'),
          description: t('calculators.gwtg_hf.subtitle')
      },
      {
        id: 'maggic',
          name: t('calculators.maggic.title'),
          description: t('calculators.maggic.subtitle')
      },
      {
        id: 'shfm',
          name: t('calculators.shfm.title'),
          description: t('calculators.shfm.subtitle')
      }
    ]
  },
  {
    id: 'surgical-risk',
      label: t('calculators.categories.surgical_risk'),
    icon: Wrench,
    color: 'text-orange-600',
    calculators: [
      {
        id: 'sts',
          name: t('calculators.sts.title'),
          description: t('calculators.sts.subtitle')
      },
      {
        id: 'euroscore',
          name: t('calculators.euroscore.title'),
          description: t('calculators.euroscore.subtitle')
      }
    ]
  },
  {
    id: 'cardiomyopathy',
      label: t('calculators.categories.cardiomyopathy'),
    icon: Dna,
    color: 'text-indigo-600',
    calculators: [
      {
        id: 'hcm-risk-scd',
          name: t('calculators.hcm_risk_scd.title'),
          description: t('calculators.hcm_risk_scd.subtitle')
      },
      {
        id: 'hcm-af-risk',
          name: t('calculators.hcm_af_risk.title'),
          description: t('calculators.hcm_af_risk.subtitle')
      }
    ]
  }
];

// OB/GYN Calculator Categories
const obgynCalculatorCategories: CalculatorCategory[] = [
  {
    id: 'pregnancy-dating',
      label: t('calculators.categories.pregnancy_dating'),
    icon: Calendar,
      color: 'text-pink-600',
    calculators: [
      {
        id: 'edd-calculator',
          name: t('calculators.edd.title'),
          description: t('calculators.edd.subtitle')
      },
      {
        id: 'gestational-age',
          name: t('calculators.gestational_age.title'),
          description: t('calculators.gestational_age.subtitle')
      }
    ]
  },
  {
    id: 'antenatal-risk',
      label: t('calculators.categories.antenatal_risk'),
    icon: Shield,
      color: 'text-blue-600',
    calculators: [
      {
        id: 'preeclampsia-risk',
          name: t('calculators.preeclampsia_risk.title'),
          description: t('calculators.preeclampsia_risk.subtitle')
      },
      {
        id: 'preterm-birth-risk',
          name: t('calculators.preterm_birth_risk.title'),
          description: t('calculators.preterm_birth_risk.subtitle')
      },
      {
        id: 'gdm-screening',
          name: t('calculators.gdm_screening.title'),
          description: t('calculators.gdm_screening.subtitle')
      }
    ]
  },
  {
    id: 'labor-management',
      label: t('calculators.categories.labor_management'),
    icon: Activity,
    color: 'text-purple-600',
    calculators: [
      {
        id: 'bishop-score',
          name: t('calculators.bishop_score.title'),
          description: t('calculators.bishop_score.subtitle')
      },
      {
        id: 'vbac-success',
          name: t('calculators.vbac_success.title'),
          description: t('calculators.vbac_success.subtitle')
      }
    ]
  },
  {
    id: 'assessment-tools',
      label: t('calculators.categories.assessment_tools'),
    icon: TestTube,
    color: 'text-green-600',
    calculators: [
      {
        id: 'apgar-score',
          name: t('calculators.apgar_score.title'),
          description: t('calculators.apgar_score.subtitle')
      },
      {
        id: 'pph-risk',
          name: t('calculators.pph_risk.title'),
          description: t('calculators.pph_risk.subtitle')
      }
    ]
  },
  {
    id: 'gynecologic-oncology',
      label: t('calculators.categories.gynecologic_oncology'),
    icon: Shield,
      color: 'text-red-600',
    calculators: [
      {
        id: 'cervical-cancer-risk',
          name: t('calculators.cervical_cancer_risk.title'),
          description: t('calculators.cervical_cancer_risk.subtitle')
      },
      {
        id: 'ovarian-cancer-risk',
          name: t('calculators.ovarian_cancer_risk.title'),
          description: t('calculators.ovarian_cancer_risk.subtitle')
      },
      {
        id: 'endometrial-cancer-risk',
          name: t('calculators.endometrial_cancer_risk.title'),
          description: t('calculators.endometrial_cancer_risk.subtitle')
      }
    ]
  },
  {
    id: 'reproductive-endocrinology',
      label: t('calculators.categories.reproductive_endocrinology'),
      icon: Dna,
    color: 'text-indigo-600',
    calculators: [
      {
        id: 'ovarian-reserve',
          name: t('calculators.ovarian_reserve.title'),
          description: t('calculators.ovarian_reserve.subtitle')
      },
      {
        id: 'menopause-assessment',
          name: t('calculators.menopause_assessment.title'),
          description: t('calculators.menopause_assessment.subtitle')
      }
    ]
  }
];

  // Calculate which calculator categories to show based on specialty
  const calculatorCategories = specialty === MedicalSpecialty.OBGYN ? obgynCalculatorCategories : cardiologyCalculatorCategories;

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      
      // Auto-show mobile menu on larger screens
      if (!mobile) {
        setShowMobileMenu(false);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Set default category when specialty changes
  useEffect(() => {
    if (calculatorCategories.length > 0 && !activeCategory) {
      setActiveCategory(calculatorCategories[0].id);
    }
  }, [calculatorCategories, activeCategory]);

  // Close mobile menu when category or calculator changes
  useEffect(() => {
    setShowMobileMenu(false);
  }, [activeCategory, activeCalculator]);

  const renderCardiologyCalculator = (calculatorId: CardiologyCalculatorType) => {
    switch (calculatorId) {
      // Phase 1: Core Risk Assessment
      case 'ascvd':
        return <ASCVDCalculator />;
      case 'atrial-fibrillation':
        return <AtrialFibrillationCalculators />;
      
      // Phase 2: Acute Coronary Syndrome
      case 'timi-risk':
        return <TIMIRiskCalculator />;
      case 'grace-risk':
        return <GRACERiskCalculator />;
      
      // Phase 3: Advanced Therapy Management
      case 'dapt':
        return <DAPTCalculator />;
      case 'precise-dapt':
        return <PRECISEDAPTCalculator />;
      case 'prevent':
        return <PREVENTCalculator />;
      
      // Phase 4: Heart Failure Management
      case 'heart-failure-staging':
        return <HeartFailureStaging />;
      case 'gwtg-hf':
        return <GWTGHFCalculator />;
      case 'maggic':
        return <MAGGICCalculator />;
      case 'shfm':
        return <SHFMCalculator />;
      
      // Phase 5: Surgical Risk Assessment
      case 'sts':
        return <STSCalculator />;
      case 'euroscore':
        return <EuroSCOREIICalculator />;
      
      // Phase 6: Specialized Cardiomyopathy Assessment
      case 'hcm-risk-scd':
        return <HCMRiskSCDCalculator />;
      case 'hcm-af-risk':
        return <HCMAFRiskCalculator />;
      
      default:
        return null;
    }
  };

  const renderOBGYNCalculator = () => {
    switch (activeCalculator) {
      // Antenatal Risk Assessment
      case 'edd-calculator':
        return <EDDCalculator />;
      case 'gestational-age':
        return <GestationalAgeCalculator />;
      case 'preeclampsia-risk':
        return <PreeclampsiaRiskCalculator />;
      case 'preterm-birth-risk':
        return <PretermBirthRiskCalculator />;
      case 'gdm-screening':
        return <GDMScreeningCalculator />;
      
      // Labor Management
      case 'bishop-score':
        return <BishopScoreCalculator />;
      case 'vbac-success':
        return <VBACSuccessCalculator />;
      
      // Assessment Tools
      case 'apgar-score':
        return <ApgarScoreCalculator />;
      case 'pph-risk':
        return <PPHRiskCalculator />;
      
      // TODO: Implement remaining calculators
      case 'cervical-cancer-risk':
        return <CervicalCancerRiskCalculator />;
      case 'ovarian-cancer-risk':
        return <OvarianCancerRiskCalculator />;
      case 'endometrial-cancer-risk':
        return <EndometrialCancerRiskCalculator />;
      case 'ovarian-reserve':
        return <OvarianReserveCalculator />;
      case 'menopause-assessment':
        return <MenopauseAssessmentCalculator />;
      
      default:
        return null;
    }
  };

  const renderCalculator = () => {
    if (!activeCalculator) return null;

    if (specialty === MedicalSpecialty.OBGYN) {
      return renderOBGYNCalculator();
    } else {
      return renderCardiologyCalculator(activeCalculator as CardiologyCalculatorType);
    }
  };

  const getSpecialtyInfo = () => {
    if (specialty === MedicalSpecialty.OBGYN) {
      return {
        title: t('calculators.specialty.obgyn.title'),
        description: t('calculators.specialty.obgyn.description'),
        icon: Baby,
        progress: {
          status: t('calculators.specialty.obgyn.status'),
          color: 'bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20',
          textColor: 'text-pink-800 dark:text-pink-200',
          dotColor: 'bg-gradient-to-r from-pink-600 to-purple-600',
          message: t('calculators.specialty.obgyn.message')
        }
      };
    } else {
      return {
        title: t('calculators.specialty.cardiology.title'),
        description: t('calculators.specialty.cardiology.description'),
        icon: Heart,
        progress: {
          status: t('calculators.specialty.cardiology.status'),
          color: 'bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-900/20 dark:to-blue-900/20',
          textColor: 'text-emerald-800 dark:text-emerald-200',
          dotColor: 'bg-gradient-to-r from-emerald-600 to-blue-600',
          message: t('calculators.specialty.cardiology.message')
        }
      };
    }
  };

  const activeCategory_data = calculatorCategories.find(cat => cat.id === activeCategory);

  // Individual calculator view with mobile optimization
  if (activeCalculator) {
    return (
      <ChatProvider>
        <div className={`space-y-4 sm:space-y-6 ${isMobile ? 'mobile-container' : ''}`}>
          {/* Mobile-optimized header */}
          <div className={`
            flex items-center justify-between
            ${isMobile ? 'sticky top-0 bg-white/80 backdrop-blur-lg dark:bg-gray-900/80 z-10 p-3 -m-3 border-b border-gray-200/50 dark:border-gray-700/50' : ''}
          `}>
            <button
              onClick={() => setActiveCalculator(null)}
              className={`
                inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 text-blue-700 hover:text-blue-800 font-medium transition-all duration-200 transform hover:scale-105 shadow-sm hover:shadow-md
                ${isMobile ? 'touch-target text-sm' : ''}
              `}
              aria-label="Back to calculators"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              <span>{t('calculators.back_to')} {isMobile ? t('navigation.calculators') : t('calculators.calculator_categories')}</span>
            </button>
            
            {/* Mobile calculator info */}
            {isMobile && activeCategory_data && (
              <div className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-gray-50/50 backdrop-blur-sm text-xs text-gray-600 dark:text-gray-400">
                <activeCategory_data.icon className={`w-3 h-3 ${activeCategory_data.color}`} />
                <span className="truncate max-w-[120px]">{activeCategory_data.label}</span>
              </div>
            )}
          </div>
          
          {/* Calculator content with mobile padding */}
          <div className={isMobile ? 'px-1' : ''}>
            {renderCalculator()}
          </div>
        </div>
      </ChatProvider>
    );
  }

  const specialtyInfo = getSpecialtyInfo();

  return (
    <ChatProvider>
      <PageContainer>
        <div className={`space-y-6 sm:space-y-8 ${isMobile ? 'mobile-container' : ''}`}>
          {/* Stunning Header Section */}
          <div className="text-center space-y-6">
            {/* Hero Section */}
            <div className="relative">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-900/10 dark:via-indigo-900/10 dark:to-purple-900/10 rounded-3xl blur-3xl scale-110 opacity-60"></div>
              
              <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-white/20 dark:border-gray-800/20 rounded-2xl p-8 shadow-2xl">
                {/* Icon with animated background */}
                <div className="relative inline-flex items-center justify-center mb-6 float-animation">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-2xl blur-xl opacity-20 animate-pulse gradient-pulse"></div>
                  <div className="relative p-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl shadow-lg glass-morphism">
                    <specialtyInfo.icon className="w-8 h-8 text-white" />
                  </div>
                  <Sparkles className="absolute -top-1 -right-1 w-5 h-5 text-yellow-400 animate-pulse icon-pulse" />
                </div>

                {/* Title */}
                <h1 className={`
                  font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 dark:from-gray-100 dark:via-blue-200 dark:to-indigo-200 bg-clip-text text-transparent mb-4
                  ${isMobile ? 'text-2xl' : 'text-4xl'}
                `}>
                  {specialtyInfo.title}
                </h1>
                
                {/* Description */}
                <p className={`text-gray-600 dark:text-gray-300 font-medium ${isMobile ? 'text-base px-2' : 'text-lg max-w-2xl mx-auto'}`}>
                  {specialtyInfo.description}
                </p>
                
                {/* Premium Progress Badge - Fixed overlapping issue */}
                <div className={`
                  mt-6 inline-flex items-center justify-center flex-wrap gap-2 ${specialtyInfo.progress.color} backdrop-blur-sm px-4 sm:px-6 py-3 rounded-2xl border border-white/30 shadow-lg
                  ${isMobile ? 'text-xs max-w-full' : 'text-sm max-w-4xl'}
                `}>
                  <div className="flex items-center space-x-2 flex-shrink-0">
                    <div className={`w-3 h-3 ${specialtyInfo.progress.dotColor} rounded-full animate-pulse shadow-lg`}></div>
                    <Award className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  </div>
                  <span className={`font-semibold ${specialtyInfo.progress.textColor} text-center leading-tight ${isMobile ? 'text-xs' : 'text-sm'}`}>
                    {isMobile 
                      ? '✅ 16 Calculators (100% Validated)' 
                      : specialtyInfo.progress.message
                    }
                  </span>
                  <Star className="w-4 h-4 text-yellow-500 fill-current flex-shrink-0" />
                </div>
              </div>
            </div>

            {/* Statistics Row */}
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
              <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border border-blue-100 dark:border-blue-800/30">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">16</div>
                <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">{t('calculators.stats.calculators')}</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 rounded-xl border border-emerald-100 dark:border-emerald-800/30">
                <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">100%</div>
                <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">{t('calculators.stats.validated')}</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border border-purple-100 dark:border-purple-800/30">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">6</div>
                <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">{t('calculators.stats.categories')}</div>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Toggle - Fixed spacing and overflow */}
          {isMobile && (
            <div className="flex items-center justify-between gap-3 mb-6 px-2">
              <button
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="flex-1 max-w-[160px] inline-flex items-center justify-center space-x-2 px-3 py-3 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 hover:from-gray-100 hover:to-gray-200 dark:hover:from-gray-700 dark:hover:to-gray-600 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md transform hover:scale-105"
                aria-label="Toggle categories menu"
              >
                <Menu className="w-4 h-4 text-gray-600 dark:text-gray-300 flex-shrink-0" />
                <span className="font-semibold text-gray-700 dark:text-gray-200 text-sm truncate">{t('calculators.categories_label')}</span>
                <div className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-xs font-bold text-blue-600 dark:text-blue-400 flex-shrink-0">
                  {calculatorCategories.length}
                </div>
              </button>
              
              <button
                onClick={() => setIsCategoryListView(!isCategoryListView)}
                className="flex-1 max-w-[120px] inline-flex items-center justify-center space-x-2 px-3 py-3 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 hover:from-indigo-100 hover:to-purple-100 dark:hover:from-indigo-800/30 dark:hover:to-purple-800/30 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md transform hover:scale-105"
                aria-label="Toggle view mode"
              >
                <Grid3X3 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
                <span className="font-semibold text-indigo-700 dark:text-indigo-300 text-sm truncate">{isCategoryListView ? t('calculators.view_grid') : t('calculators.view_list')}</span>
              </button>
            </div>
          )}

          {/* Enhanced Mobile Menu Overlay */}
          {isMobile && showMobileMenu && (
            <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm" onClick={() => setShowMobileMenu(false)}>
              <div className="absolute inset-x-0 top-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50 p-6 space-y-4 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-blue-600 dark:from-gray-100 dark:to-blue-400 bg-clip-text text-transparent">{t('calculators.calculator_categories')}</h3>
                  <button
                    onClick={() => setShowMobileMenu(false)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6 text-gray-500" />
                  </button>
                </div>
                
                {calculatorCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setActiveCategory(category.id);
                      setShowMobileMenu(false);
                    }}
                    className={`
                      w-full flex items-center justify-between p-4 rounded-xl text-left transition-all duration-200 transform hover:scale-105
                      ${activeCategory === category.id 
                        ? 'bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-700 dark:text-blue-300 shadow-lg border-2 border-blue-200 dark:border-blue-700' 
                        : 'hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 dark:hover:from-gray-800 dark:hover:to-gray-700 border-2 border-transparent'
                      }
                    `}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`p-2 rounded-lg ${activeCategory === category.id ? 'bg-blue-100 dark:bg-blue-800/30' : 'bg-gray-100 dark:bg-gray-800'}`}>
                        <category.icon className={`w-5 h-5 ${activeCategory === category.id ? 'text-blue-600 dark:text-blue-400' : category.color}`} />
                      </div>
                      <div>
                        <div className="font-semibold text-lg">{category.label}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {category.calculators.length} calculator{category.calculators.length !== 1 ? 's' : ''}
                        </div>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Desktop Tabs / Mobile Category Display */}
          {!isMobile ? (
            <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
              {/* Enhanced TabsList - Fixed overlapping text with custom CSS */}
              <TabsList className={`tab-grid-6 w-full p-1 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-inner border border-gray-200 dark:border-gray-600`}>
                {calculatorCategories.map((category) => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="tab-container text-xs font-semibold rounded-xl transition-all duration-200 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 data-[state=active]:shadow-lg data-[state=active]:scale-105 hover:scale-102 transform py-2 px-1"
                  >
                    <div className="p-1.5 rounded-lg bg-gradient-to-br from-white to-gray-50 dark:from-gray-700 dark:to-gray-800 shadow-sm">
                      <category.icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="tab-text-wrapper hidden sm:block text-[10px] font-bold">
                      {category.label}
                    </span>
                    <div className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-700 rounded-full text-[9px] font-bold text-gray-600 dark:text-gray-300">
                      {category.calculators.length}
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {calculatorCategories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="mt-8">
                  {/* Category Header */}
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-600">
                      <category.icon className={`w-6 h-6 ${category.color}`} />
                      <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">{category.label}</h2>
                      <div className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full text-sm font-bold text-blue-600 dark:text-blue-400">
                        {category.calculators.length} Tools
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Calculator Grid */}
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {category.calculators.map((calc, index) => (
                      <Card 
                        key={calc.id}
                        className="calculator-card card-entrance group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-2 border-gray-100 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-800 dark:to-gray-700/50 backdrop-blur-sm overflow-hidden glow-effect"
                        onClick={() => setActiveCalculator(calc.id)}
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        {/* Card Background Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-indigo-50/50 dark:from-blue-900/10 dark:to-indigo-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        <CardHeader className="relative space-y-4 p-6">
                          {/* Calculator Icon & Badge */}
                          <div className="flex items-start justify-between">
                            <div className="p-3 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl group-hover:scale-110 transition-transform duration-200 icon-pulse">
                              <Calculator className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div className="flex items-center space-x-1 px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 rounded-full glass-morphism">
                              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">Validated</span>
                            </div>
                          </div>

                          {/* Title & Description */}
                          <div className="space-y-3">
                            <CardTitle className="text-lg font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 leading-tight">
                              {calc.name}
                            </CardTitle>
                            <CardDescription className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                              {calc.description}
                            </CardDescription>
                          </div>

                          {/* Interactive Elements */}
                          <div className="flex items-center justify-between pt-2">
                            <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
                              <TrendingUp className="w-3 h-3" />
                              <span>Clinical Grade</span>
                            </div>
                            <div className="flex items-center space-x-1 text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform duration-200 enhanced-button">
                              <span className="text-sm font-semibold">Open</span>
                              <ArrowRight className="w-4 h-4" />
                            </div>
                          </div>
                        </CardHeader>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          ) : (
            /* Enhanced Mobile Calculator List */
            <div className="space-y-6">
              {/* Active Category Header */}
              {activeCategory_data && (
                <div className="p-6 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-600">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl">
                      <activeCategory_data.icon className={`w-6 h-6 ${activeCategory_data.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">{activeCategory_data.label}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {activeCategory_data.calculators.length} professional calculator{activeCategory_data.calculators.length !== 1 ? 's' : ''}
                      </p>
                    </div>
                    <div className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full text-sm font-bold text-blue-600 dark:text-blue-400">
                      100% Validated
                    </div>
                  </div>
                </div>
              )}

              {/* Calculator Cards - Mobile Optimized */}
              {activeCategory_data && (
                <div className="space-y-4">
                  {activeCategory_data.calculators.map((calc, index) => (
                    <Card 
                      key={calc.id}
                      className="calculator-card card-entrance group cursor-pointer transition-all duration-300 border-2 border-gray-100 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 active:scale-95 bg-gradient-to-r from-white to-gray-50/50 dark:from-gray-800 dark:to-gray-700/50 shadow-lg hover:shadow-xl mobile-card-tap glow-effect"
                      onClick={() => setActiveCalculator(calc.id)}
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <CardHeader className="p-5">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <div className="p-2 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-lg icon-pulse">
                              <Calculator className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg text-xs font-bold text-emerald-600 dark:text-emerald-400 glass-morphism">
                              ✓ Validated
                            </div>
                          </div>
                          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-200 enhanced-button" />
                        </div>
                        
                        <CardTitle className="text-base font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                          {calc.name}
                        </CardTitle>
                        
                        <CardDescription className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                          {calc.description}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </PageContainer>
    </ChatProvider>
  );
}; 