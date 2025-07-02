import React, { useState, useEffect } from 'react';
import { Calculator, Heart, Activity, Zap, Wrench, HeartHandshake, Dna, Baby, Shield, TestTube, Calendar, Menu, Grid3X3, Sparkles, Star, Award, ArrowRight, ChevronRight, Stethoscope, Brain, Target, CheckCircle, Users, Globe, Rocket, BookOpen, Filter, Search, Play, Crown, Diamond, Zap as ZapIcon } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { useSpecialty, MedicalSpecialty } from '../../contexts/SpecialtyContext';
import { useTranslation } from '../../hooks/useTranslation';
import { ChatProvider } from '../../contexts/ChatContext';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card';

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
  const [activeCategory, setActiveCategory] = useState<string>('pregnancy-dating');
  const [activeCalculator, setActiveCalculator] = useState<CalculatorType | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showStats, setShowStats] = useState<boolean>(false);
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
          name: t('calculators.obgyn.apgar_score.title'),
          description: t('calculators.obgyn.apgar_score.subtitle')
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
    switch (activeCalculator as OBGYNCalculatorType) {
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
      case 'bishop-score':
        return <BishopScoreCalculator />;
      case 'vbac-success':
        return <VBACSuccessCalculator />;
      case 'apgar-score':
        return <ApgarScoreCalculator />;
      case 'pph-risk':
        return <PPHRiskCalculator />;
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

  // Filter calculators based on search
  const filteredCalculators = activeCategory_data?.calculators.filter(calc =>
    calc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    calc.description.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

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
      <div className="h-full w-full overflow-auto">
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20">
          {/* Animated background elements */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>

          <div className={`relative z-10 space-y-12 ${isMobile ? 'mobile-container px-4' : 'px-6 lg:px-8 xl:px-12'} py-12 ${!isMobile ? 'max-w-7xl mx-auto' : ''}`}>
            {/* Spectacular Header Section */}
            <div className="text-center space-y-8">
              {/* Hero Badge */}
              <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-emerald-100 to-blue-100 dark:from-emerald-900/30 dark:to-blue-900/30 rounded-full border border-emerald-200 dark:border-emerald-700 shadow-lg">
                <Crown className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <span className="text-sm font-bold bg-gradient-to-r from-emerald-600 to-blue-600 dark:from-emerald-400 dark:to-blue-400 bg-clip-text text-transparent">
                  World's Most Advanced Medical Calculator Suite
                </span>
                <Diamond className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>

              {/* Main Hero Section */}
              <div className="relative">
                {/* Animated background orb */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 rounded-3xl blur-3xl scale-150 animate-pulse"></div>
                
                <div className="relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-2xl border border-white/20 dark:border-gray-700/20 rounded-3xl p-12 shadow-2xl">
                  {/* Floating medical icons */}
                  <div className="absolute -top-4 -left-4 p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl shadow-lg animate-bounce">
                    <Stethoscope className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -top-4 -right-4 p-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl shadow-lg animate-bounce" style={{ animationDelay: '1s' }}>
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 p-3 bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl shadow-lg animate-bounce" style={{ animationDelay: '2s' }}>
                    <Target className="w-6 h-6 text-white" />
                  </div>

                  {/* Main icon with spectacular effects */}
                  <div className="relative inline-flex items-center justify-center mb-8">
                    {/* Multiple animated rings */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-600 opacity-20 animate-ping"></div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 to-indigo-600 opacity-30 animate-pulse scale-110"></div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 to-blue-600 opacity-10 animate-spin"></div>
                    
                    {/* Main icon container */}
                    <div className="relative p-8 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 rounded-3xl shadow-2xl">
                      <specialtyInfo.icon className="w-12 h-12 text-white" />
                    </div>
                    
                    {/* Floating sparkles */}
                    <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-yellow-400 animate-spin" />
                    <Sparkles className="absolute -bottom-2 -left-2 w-4 h-4 text-pink-400 animate-ping" />
                    <Zap className="absolute top-0 left-0 w-5 h-5 text-blue-400 animate-pulse" />
                  </div>

                  {/* Spectacular title */}
                  <h1 className={`
                    font-black mb-6 leading-tight
                    ${isMobile ? 'text-3xl' : 'text-6xl lg:text-7xl'}
                  `}>
                    <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-900 dark:from-white dark:via-blue-200 dark:to-purple-300 bg-clip-text text-transparent">
                      {specialty === MedicalSpecialty.OBGYN ? 'OB/GYN' : 'Cardiology'}
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 dark:from-pink-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
                      Calculator Suite
                    </span>
                  </h1>
                  
                  {/* Enhanced description */}
                  <p className={`text-gray-600 dark:text-gray-300 font-medium leading-relaxed mb-8 ${isMobile ? 'text-lg px-4' : 'text-xl max-w-4xl mx-auto'}`}>
                    {specialtyInfo.description}
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent font-semibold">
                      Transform clinical decision-making with precision, confidence, and speed.
                    </span>
                  </p>
                  
                  {/* Spectacular stats row */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
                    <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/40 rounded-2xl border border-blue-200 dark:border-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer" onClick={() => setShowStats(!showStats)}>
                      <div className="text-3xl font-black text-blue-600 dark:text-blue-400 mb-2 group-hover:scale-110 transition-transform">
                        {calculatorCategories.reduce((total, category) => total + category.calculators.length, 0)}
                      </div>
                      <div className="text-sm font-bold text-gray-700 dark:text-gray-300">Professional Calculators</div>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-green-100 dark:from-emerald-900/30 dark:to-green-900/40 rounded-2xl border border-emerald-200 dark:border-emerald-700 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
                      <div className="text-3xl font-black text-emerald-600 dark:text-emerald-400 mb-2 group-hover:scale-110 transition-transform">100%</div>
                      <div className="text-sm font-bold text-gray-700 dark:text-gray-300">Clinical Validation</div>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/40 rounded-2xl border border-purple-200 dark:border-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
                      <div className="text-3xl font-black text-purple-600 dark:text-purple-400 mb-2 group-hover:scale-110 transition-transform">{calculatorCategories.length}</div>
                      <div className="text-sm font-bold text-gray-700 dark:text-gray-300">Specialty Categories</div>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-yellow-100 dark:from-orange-900/30 dark:to-yellow-900/40 rounded-2xl border border-orange-200 dark:border-orange-700 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
                      <div className="text-3xl font-black text-orange-600 dark:text-orange-400 mb-2 group-hover:scale-110 transition-transform">∞</div>
                      <div className="text-sm font-bold text-gray-700 dark:text-gray-300">Clinical Accuracy</div>
                    </div>
                  </div>

                  {/* Premium status badge */}
                  <div className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-emerald-100 via-green-100 to-blue-100 dark:from-emerald-900/30 dark:via-green-900/30 dark:to-blue-900/30 rounded-2xl border border-emerald-200 dark:border-emerald-700 shadow-lg">
                    <CheckCircle className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                    <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    <span className="font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-blue-600 dark:from-emerald-400 dark:via-green-400 dark:to-blue-400 bg-clip-text text-transparent text-lg">
                      100% Validated • Clinical Grade • Evidence-Based
                    </span>
                    <Star className="w-6 h-6 text-yellow-500 fill-current" />
                    <Rocket className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                </div>
              </div>

              {/* Advanced feature highlights */}
              <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                <div className="group p-6 bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-blue-900/20 rounded-2xl border border-blue-200 dark:border-blue-700 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="p-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl mb-4 group-hover:scale-110 transition-transform">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Global Standards</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">ACOG, SGO, and international guidelines compliance for worldwide clinical excellence.</p>
                </div>
                
                <div className="group p-6 bg-gradient-to-br from-white to-purple-50 dark:from-gray-800 dark:to-purple-900/20 rounded-2xl border border-purple-200 dark:border-purple-700 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl mb-4 group-hover:scale-110 transition-transform">
                    <ZapIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">AI-Powered</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">Intelligent recommendations and contextual guidance powered by advanced medical AI.</p>
                </div>
                
                <div className="group p-6 bg-gradient-to-br from-white to-emerald-50 dark:from-gray-800 dark:to-emerald-900/20 rounded-2xl border border-emerald-200 dark:border-emerald-700 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="p-4 bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl mb-4 group-hover:scale-110 transition-transform">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Collaborative Care</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">Seamless integration with clinical workflows and multidisciplinary care teams.</p>
                </div>
              </div>
            </div>

            {/* Advanced Search and Filter Section */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 p-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search calculators..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 pr-4 py-3 w-80 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <button className="flex items-center space-x-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl">
                  <Filter className="w-5 h-5" />
                  <span className="font-semibold">Filter</span>
                </button>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className="text-sm text-gray-600 dark:text-gray-400">View:</span>
                <button 
                  onClick={() => setIsCategoryListView(false)}
                  className={`p-2 rounded-lg transition-all duration-200 ${!isCategoryListView ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                >
                  <Grid3X3 className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => setIsCategoryListView(true)}
                  className={`p-2 rounded-lg transition-all duration-200 ${isCategoryListView ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                >
                  <Menu className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Revolutionary Category Navigation */}
            <div className="space-y-12 pb-16">
              {/* Enhanced Desktop Tabs */}
              {!isMobile ? (
                <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
                  {/* Dedicated Section Header */}
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-900 dark:from-white dark:via-blue-200 dark:to-purple-300 bg-clip-text text-transparent mb-3">
                      Calculator Categories
                    </h2>
                  </div>
                  <TabsList className="w-full max-w-6xl mx-auto p-4 bg-transparent rounded-3xl grid grid-cols-6 gap-4">
                    {calculatorCategories.map((category) => (
                      <TabsTrigger 
                        key={category.id} 
                        value={category.id}
                        className="group relative flex flex-col items-center space-y-3 p-6 rounded-2xl transition-all duration-300 data-[state=active]:bg-gradient-to-br data-[state=active]:from-blue-500 data-[state=active]:to-indigo-600 data-[state=active]:text-white data-[state=active]:shadow-2xl data-[state=active]:scale-105 hover:scale-102 transform min-h-[120px] hover:shadow-lg"
                      >
                        {/* Icon container with stunning effects */}
                        <div className={`p-4 rounded-xl transition-all duration-300 ${
                          activeCategory === category.id 
                            ? 'bg-white/20 shadow-lg' 
                            : 'bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 group-hover:from-blue-100 group-hover:to-indigo-100 dark:group-hover:from-blue-900/30 dark:group-hover:to-indigo-900/30'
                        }`}>
                          <category.icon className={`w-7 h-7 transition-all duration-300 ${
                            activeCategory === category.id 
                              ? 'text-white' 
                              : `${category.color} group-hover:scale-110`
                          }`} />
                        </div>
                        
                        {/* Label */}
                        <span className="text-sm font-bold text-center leading-tight px-2">
                          {category.label}
                        </span>
                        
                        {/* Calculator count badge */}
                        <div className={`px-3 py-1.5 rounded-full text-sm font-bold transition-all duration-300 shadow-md ${
                          activeCategory === category.id 
                            ? 'bg-white/20 text-white' 
                            : 'bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-600 dark:text-blue-400 group-hover:bg-gradient-to-r group-hover:from-blue-200 group-hover:to-indigo-200 dark:group-hover:from-blue-800/40 dark:group-hover:to-indigo-800/40'
                        }`}>
                          {category.calculators.length}
                        </div>
                        
                        {/* Active state glow */}
                        {activeCategory === category.id && (
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-indigo-600/20 rounded-2xl blur-xl -z-10 animate-pulse"></div>
                        )}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  
                  {/* Category Header - Outside of tabs for better layout */}
                  {activeCategory_data && (
                    <div className="mt-40 mb-20 max-w-4xl mx-auto">
                      <div className="relative">
                        {/* Background glow - reduced scale to prevent overlap */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-2xl blur-md scale-95"></div>
                        
                        <div className="relative flex items-center justify-center space-x-4 px-6 py-4 bg-gradient-to-r from-white via-blue-50/50 to-white dark:from-gray-800 dark:via-blue-900/20 dark:to-gray-800 rounded-2xl shadow-xl border border-blue-200 dark:border-blue-700">
                          {/* Animated icon */}
                          <div className="relative flex-shrink-0">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-xl blur-md opacity-30 animate-pulse"></div>
                            <div className="relative p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-lg">
                              <activeCategory_data.icon className="w-8 h-8 text-white" />
                            </div>
                          </div>
                          
                          {/* Title and description */}
                          <div className="text-center flex-1">
                            <h2 className="text-2xl font-black bg-gradient-to-r from-gray-900 via-blue-800 to-purple-900 dark:from-white dark:via-blue-200 dark:to-purple-300 bg-clip-text text-transparent mb-1">
                              {activeCategory_data.label}
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 font-medium text-sm">
                              {activeCategory_data.calculators.length} professional-grade clinical tools
                            </p>
                          </div>
                          
                          {/* Tools badge */}
                          <div className="px-4 py-2 bg-gradient-to-r from-emerald-100 to-blue-100 dark:from-emerald-900/30 dark:to-blue-900/30 rounded-xl border border-emerald-200 dark:border-emerald-700 shadow-md flex-shrink-0">
                            <div className="text-xl font-black text-emerald-600 dark:text-emerald-400">{activeCategory_data.calculators.length}</div>
                            <div className="text-xs font-bold text-gray-600 dark:text-gray-300">TOOLS</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Enhanced Tab Content */}
                  {calculatorCategories.map((category) => (
                    <TabsContent key={category.id} value={category.id} className="mt-8">

                      {/* Revolutionary Calculator Grid */}
                      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                        {(searchQuery ? filteredCalculators : category.calculators).map((calc, index) => (
                          <Card 
                            key={calc.id}
                            className="group relative cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 border-2 border-gray-100 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 bg-gradient-to-br from-white via-blue-50/30 to-white dark:from-gray-800 dark:via-blue-900/10 dark:to-gray-800 backdrop-blur-sm overflow-hidden rounded-2xl"
                            onClick={() => setActiveCalculator(calc.id)}
                            style={{ animationDelay: `${index * 100}ms` }}
                          >
                            {/* Animated background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            {/* Floating orb effect */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 group-hover:animate-pulse"></div>
                            
                            <CardHeader className="relative space-y-6 p-8">
                              {/* Top row with icon and status */}
                              <div className="flex items-start justify-between">
                                {/* Calculator icon with spectacular effects */}
                                <div className="relative">
                                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                                  <div className="relative p-4 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    <Calculator className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                                  </div>
                                  {/* Floating sparkle */}
                                  <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400 opacity-0 group-hover:opacity-100 animate-spin transition-opacity duration-300" />
                                </div>
                                
                                {/* Validation badge */}
                                <div className="flex items-center space-x-2 px-3 py-2 bg-gradient-to-r from-emerald-100 to-green-100 dark:from-emerald-900/30 dark:to-green-900/30 rounded-xl border border-emerald-200 dark:border-emerald-700 shadow-lg">
                                  <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">VALIDATED</span>
                                </div>
                              </div>

                              {/* Title and description */}
                              <div className="space-y-4">
                                <CardTitle className="text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 leading-tight">
                                  {calc.name}
                                </CardTitle>
                                <CardDescription className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                  {calc.description}
                                </CardDescription>
                              </div>

                              {/* Enhanced bottom row */}
                              <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                                {/* Clinical grade indicator */}
                                <div className="flex items-center space-x-2">
                                  <div className="flex items-center space-x-1">
                                    <Activity className="w-4 h-4 text-blue-500 animate-pulse" />
                                    <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">Clinical Grade</span>
                                  </div>
                                  <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                                  <div className="flex items-center space-x-1">
                                    <BookOpen className="w-4 h-4 text-purple-500" />
                                    <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">Evidence-Based</span>
                                  </div>
                                </div>
                                
                                {/* Action button */}
                                <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 group-hover:translate-x-2 transition-all duration-300">
                                  <span className="text-sm font-bold">Launch</span>
                                  <div className="p-1 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:bg-purple-100 dark:group-hover:bg-purple-900/30 transition-colors duration-300">
                                    <Play className="w-4 h-4" />
                                  </div>
                                </div>
                              </div>
                            </CardHeader>
                          </Card>
                        ))}
                      </div>
                    </TabsContent>
                  ))}
                  
                  {/* Extra bottom spacing for better scrolling */}
                  <div className="h-20"></div>
                </Tabs>
              ) : (
                /* Enhanced Mobile Experience */
                <div className="space-y-8">
                  {/* Mobile category selector */}
                  <div className="relative">
                    <button
                      onClick={() => setShowMobileMenu(!showMobileMenu)}
                      className="w-full flex items-center justify-between p-6 bg-gradient-to-r from-white to-blue-50 dark:from-gray-800 dark:to-blue-900/20 rounded-2xl border border-blue-200 dark:border-blue-700 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex items-center space-x-4">
                        {activeCategory_data && (
                          <>
                            <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl">
                              <activeCategory_data.icon className="w-6 h-6 text-white" />
                            </div>
                            <div className="text-left">
                              <div className="text-lg font-bold text-gray-900 dark:text-white">{activeCategory_data.label}</div>
                              <div className="text-sm text-gray-600 dark:text-gray-400">{activeCategory_data.calculators.length} calculators</div>
                            </div>
                          </>
                        )}
                      </div>
                      <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${showMobileMenu ? 'rotate-90' : ''}`} />
                    </button>

                    {/* Mobile menu overlay */}
                    {showMobileMenu && (
                      <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-2xl z-50 overflow-hidden">
                        {calculatorCategories.map((category) => (
                          <button
                            key={category.id}
                            onClick={() => {
                              setActiveCategory(category.id);
                              setShowMobileMenu(false);
                            }}
                            className={`w-full flex items-center space-x-4 p-4 transition-all duration-200 ${
                              activeCategory === category.id 
                                ? 'bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-700 dark:text-blue-300' 
                                : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                            }`}
                          >
                            <div className={`p-2 rounded-lg ${activeCategory === category.id ? 'bg-blue-100 dark:bg-blue-800/30' : 'bg-gray-100 dark:bg-gray-800'}`}>
                              <category.icon className={`w-5 h-5 ${activeCategory === category.id ? 'text-blue-600 dark:text-blue-400' : category.color}`} />
                            </div>
                            <div className="flex-1 text-left">
                              <div className="font-semibold">{category.label}</div>
                              <div className="text-sm text-gray-500 dark:text-gray-400">{category.calculators.length} tools</div>
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Mobile Calculator Cards */}
                  {activeCategory_data && (
                    <div className="space-y-6">
                      {(searchQuery ? filteredCalculators : activeCategory_data.calculators).map((calc, index) => (
                        <Card 
                          key={calc.id}
                          className="group cursor-pointer transition-all duration-500 hover:shadow-2xl border-2 border-gray-100 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 bg-gradient-to-r from-white to-blue-50/30 dark:from-gray-800 dark:to-blue-900/10 shadow-lg rounded-2xl overflow-hidden"
                          onClick={() => setActiveCalculator(calc.id)}
                          style={{ animationDelay: `${index * 150}ms` }}
                        >
                          <CardHeader className="p-6">
                            <div className="flex items-center justify-between mb-4">
                              <div className="flex items-center space-x-3">
                                <div className="p-3 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl group-hover:scale-110 transition-transform duration-300">
                                  <Calculator className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                </div>
                                <div className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg text-xs font-bold text-emerald-600 dark:text-emerald-400">
                                  ✓ VALIDATED
                                </div>
                              </div>
                              <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform duration-300">
                                <span className="text-sm font-bold">Launch</span>
                                <ArrowRight className="w-5 h-5" />
                              </div>
                            </div>
                            
                            <CardTitle className="text-lg font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-3">
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
                  
                  {/* Extra bottom spacing for mobile */}
                  <div className="h-20"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </ChatProvider>
  );
}; 