import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,

  ChevronRight,
  ChevronLeft,

  Calendar,
  Tag,
  AlertTriangle,
  Activity,
  BookOpen,
  Heart,
  ExternalLink,
  Search,

  Printer,
  Share2,
  FileText,
  AlertCircle,
  BarChart3,

  X,
  Bookmark,
  Copy,
  Users,
  Award,
  Target,
  CheckCircle2,

  TrendingUp,
  Brain,
  Stethoscope,

  ChevronUp as ChevronUpIcon,
  ChevronDown as ChevronDownIcon,
  List
} from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';
import { Button } from '../../components/ui/button';
import { getDiseaseData } from './registry';
import { GuidelineSection, Reference } from './types';

export const DiseasePage: React.FC = () => {
  const { diseaseId } = useParams<{ diseaseId: string }>();
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSection, setActiveSection] = useState<string>('background');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  
  // List of sections that should be expanded by default
  const expandedSectionsList = [
    'screening-diagnosis',
    'diagnostic-investigations', 
    'medical-management',
    'inpatient-care',
    'nutritional-considerations',
    'nonpharmacologic',
    'therapeutic-procedures',
    'perioperative-care',
    'surgical-interventions',
    'specific-circumstances',
    'preventative-measures',
    'follow-up-surveillance',
    'vasopressors',
    'nonvasopressor-medications',
    'management-of-arrhythmias'
  ];
  
  const [expandedSections, setExpandedSections] = useState<string[]>(expandedSectionsList);
  const [expandedSubsections, setExpandedSubsections] = useState<string[]>([]);

  // Get disease data
  const diseaseData = getDiseaseData(diseaseId || '');

  // Initialize expanded subsections for sections with empty content but populated subsections
  useEffect(() => {
    if (diseaseData?.content.guidelines?.sections) {
      const subsectionsToExpand: string[] = [];
      
      diseaseData.content.guidelines.sections.forEach((section) => {
        // For all sections with subsections, expand all subsections automatically
        if (section.subsections && section.subsections.length > 0) {
          section.subsections.forEach((subsection) => {
            subsectionsToExpand.push(subsection.id);
          });
        }
      });
      
      if (subsectionsToExpand.length > 0) {
        setExpandedSubsections(prev => [...prev, ...subsectionsToExpand]);
      }
    }
  }, [diseaseData]);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Reading progress tracking and active section detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setReadingProgress(Math.min(progress, 100));

      // Detect active section based on scroll position
      const sections = ['background', 'clinical-findings', 'studies', 'guidelines', 'references'];
      
      // Add guideline subsections to the sections array
      const guidelineSections = diseaseData?.content?.guidelines?.sections?.map(section => section.id) || [];
      const allSections = [...sections, ...guidelineSections];
      
      const currentSection = allSections.find(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom > 100;
        }
        return false;
      });

      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection, diseaseData?.content?.guidelines?.sections]);

  const getSeverityConfig = (category: string) => {
    // Determine severity based on category
    const highSeverity = ['Emergency Cardiology', 'Acute Care'];
    const mediumSeverity = ['Interventional Cardiology', 'Electrophysiology'];
    
    if (highSeverity.some(s => category?.includes(s))) {
      return {
        color: 'bg-gradient-to-r from-red-500 to-red-600 text-white',
        icon: AlertTriangle,
        label: 'Critical',
        ring: 'ring-red-200'
      };
    } else if (mediumSeverity.some(s => category?.includes(s))) {
      return {
        color: 'bg-gradient-to-r from-amber-500 to-orange-500 text-white',
        icon: Activity,
        label: 'Moderate',
        ring: 'ring-amber-200'
      };
    } else {
      return {
        color: 'bg-gradient-to-r from-emerald-500 to-green-500 text-white',
        icon: CheckCircle2,
        label: 'Stable',
        ring: 'ring-emerald-200'
      };
    }
  };

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const toggleSubsection = (subsectionId: string) => {
    setExpandedSubsections(prev => 
      prev.includes(subsectionId) 
        ? prev.filter(id => id !== subsectionId)
        : [...prev, subsectionId]
    );
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: diseaseData?.title,
          text: `Learn about ${diseaseData?.title} - Comprehensive medical information`,
          url: window.location.href,
        });
      } catch (err) {
        setShowShareModal(true);
      }
    } else {
      setShowShareModal(true);
    }
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
      setActiveSection(sectionId);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="w-20 h-20 border-4 border-blue-200 rounded-full animate-spin border-t-blue-600 mx-auto mb-4"></div>
            <Stethoscope className="w-8 h-8 text-blue-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Loading Medical Information</h2>
          <p className="text-gray-600">Preparing comprehensive clinical data...</p>
        </div>
      </div>
    );
  }

  if (!diseaseData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="w-12 h-12 text-red-500" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Disease Not Found</h1>
          <p className="text-gray-600 mb-8 leading-relaxed">
            The requested cardiovascular condition could not be found in our medical database. 
            Please check the URL or browse our available diseases.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate('/diseases')} 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-colors"
            >
            <ArrowLeft className="h-4 w-4 mr-2" />
              Browse All Diseases
            </Button>
            <Button 
              onClick={() => navigate(-1)} 
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-xl font-medium transition-colors"
            >
              Go Back
          </Button>
          </div>
        </div>
      </div>
    );
  }

  const severityConfig = getSeverityConfig(diseaseData.category || '');
  const SeverityIcon = severityConfig.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute top-20 -left-10 w-60 h-60 bg-blue-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-16">
          {/* Navigation */}
          <div className="flex items-center justify-between mb-12">
            <button
              onClick={() => navigate('/diseases')}
              className="flex items-center space-x-2 text-blue-200 hover:text-white transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back to Diseases</span>
            </button>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`p-3 rounded-xl transition-all duration-300 ${
                  isBookmarked
                    ? 'bg-yellow-500/20 text-yellow-300 hover:bg-yellow-500/30'
                    : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                }`}
                title={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
              >
                <Bookmark className={`w-5 h-5 ${isBookmarked ? 'fill-current' : ''}`} />
              </button>
              
              <button
                onClick={handleShare}
                className="p-3 rounded-xl bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-all duration-300"
                title="Share"
              >
                <Share2 className="w-5 h-5" />
              </button>
              
              <button
                onClick={() => window.print()}
                className="p-3 rounded-xl bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-all duration-300"
                title="Print"
              >
                <Printer className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Disease Header */}
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <Heart className="w-12 h-12 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {diseaseData.title}
            </h1>
            
            <div className="flex items-center justify-center space-x-8 text-blue-200 mb-8">
              <div className="flex items-center space-x-2">
                <Tag className="w-5 h-5" />
                <span className="font-medium">{diseaseData.category}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Updated {diseaseData.lastUpdated}</span>
              </div>
              <div className={`px-4 py-2 rounded-full flex items-center space-x-2 ${severityConfig.color} shadow-lg`}>
                <SeverityIcon className="w-4 h-4" />
                <span className="font-bold">{severityConfig.label}</span>
              </div>
            </div>

            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              {diseaseData.content.background?.overview?.definition || 'Comprehensive medical information and clinical guidelines for this cardiovascular condition.'}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex gap-12">
          {/* Sidebar Navigation */}
          <div className={`${sidebarCollapsed ? 'w-16' : 'w-80'} flex-shrink-0 transition-all duration-300 ease-in-out`}>
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-white/50 shadow-xl sticky top-8 max-h-[calc(100vh-4rem)] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  {!sidebarCollapsed && (
                    <h3 className="text-xl font-bold text-gray-900 flex items-center">
                      <List className="w-5 h-5 mr-2 text-blue-600" />
                      Contents
                    </h3>
                  )}
                  <button
                    onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                    className="p-2 rounded-xl hover:bg-gray-100 transition-colors"
                    title={sidebarCollapsed ? 'Expand Contents' : 'Collapse Contents'}
                  >
                    {sidebarCollapsed ? (
                      <ChevronRight className="h-5 w-5 text-gray-600" />
                    ) : (
                      <ChevronLeft className="h-5 w-5 text-gray-600" />
                    )}
                  </button>
                </div>
                
                {!sidebarCollapsed && (
                  <>
                    {/* Quick Search */}
                    <div className="relative mb-6">
                      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search sections..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
                      />
                    </div>

                    {/* Navigation Links */}
                    <nav className="space-y-2">
                      <button 
                        onClick={() => scrollToSection('background')}
                        className={`w-full flex items-center space-x-3 px-4 py-3 text-left transition-all duration-200 group rounded-xl ${
                          activeSection === 'background' 
                            ? 'text-blue-600 bg-blue-50 shadow-sm' 
                            : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                        }`}
                      >
                        <FileText className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        <span className="font-medium">Background</span>
                      </button>
                      <button 
                        onClick={() => scrollToSection('clinical-findings')}
                        className={`w-full flex items-center space-x-3 px-4 py-3 text-left transition-all duration-200 group rounded-xl ${
                          activeSection === 'clinical-findings' 
                            ? 'text-blue-600 bg-blue-50 shadow-sm' 
                            : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                        }`}
                      >
                        <Stethoscope className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        <span className="font-medium">Clinical Findings</span>
                      </button>
                      <button 
                        onClick={() => scrollToSection('studies')}
                        className={`w-full flex items-center space-x-3 px-4 py-3 text-left transition-all duration-200 group rounded-xl ${
                          activeSection === 'studies' 
                            ? 'text-blue-600 bg-blue-50 shadow-sm' 
                            : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                        }`}
                      >
                        <BarChart3 className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        <span className="font-medium">Studies</span>
                      </button>
                      <button 
                        onClick={() => scrollToSection('guidelines')}
                        className={`w-full flex items-center space-x-3 px-4 py-3 text-left transition-all duration-200 group rounded-xl ${
                          activeSection === 'guidelines' 
                            ? 'text-blue-600 bg-blue-50 shadow-sm' 
                            : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                        }`}
                      >
                        <BookOpen className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        <span className="font-medium">Guidelines</span>
                      </button>
                      
                      {/* Guideline Sections */}
                      {diseaseData.content.guidelines?.sections?.map((section: GuidelineSection) => (
                        <button
                          key={section.id}
                          onClick={() => scrollToSection(section.id)}
                          className={`w-full flex items-center space-x-3 px-6 py-2 text-sm text-left transition-all duration-200 border-l-2 ml-4 rounded-xl ${
                            activeSection === section.id 
                              ? 'text-blue-600 bg-blue-50 shadow-sm border-blue-300' 
                              : 'text-gray-500 hover:text-blue-600 hover:bg-blue-50 border-gray-200 hover:border-blue-300'
                          }`}
                        >
                          <ChevronRight className="w-3 h-3" />
                          <span>{section.title}</span>
                        </button>
                      ))}
                      
                      <button 
                        onClick={() => scrollToSection('references')}
                        className={`w-full flex items-center space-x-3 px-4 py-3 text-left transition-all duration-200 group rounded-xl ${
                          activeSection === 'references' 
                            ? 'text-blue-600 bg-blue-50 shadow-sm' 
                            : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                        }`}
                      >
                        <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        <span className="font-medium">References</span>
                      </button>
                    </nav>
                  </>
                )}

                {/* Collapsed state icons */}
                {sidebarCollapsed && (
                  <nav className="space-y-4">
                    <button 
                      onClick={() => scrollToSection('background')}
                      className={`w-full flex justify-center p-3 rounded-xl transition-all duration-200 ${
                        activeSection === 'background' 
                          ? 'text-blue-600 bg-blue-50 shadow-sm' 
                          : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                      }`}
                      title="Background"
                    >
                      <FileText className="h-5 w-5" />
                    </button>
                    <button 
                      onClick={() => scrollToSection('clinical-findings')}
                      className={`w-full flex justify-center p-3 rounded-xl transition-all duration-200 ${
                        activeSection === 'clinical-findings' 
                          ? 'text-blue-600 bg-blue-50 shadow-sm' 
                          : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                      }`}
                      title="Clinical Findings"
                    >
                      <Stethoscope className="h-5 w-5" />
                    </button>
                    <button 
                      onClick={() => scrollToSection('studies')}
                      className={`w-full flex justify-center p-3 rounded-xl transition-all duration-200 ${
                        activeSection === 'studies' 
                          ? 'text-blue-600 bg-blue-50 shadow-sm' 
                          : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                      }`}
                      title="Studies"
                    >
                      <BarChart3 className="h-5 w-5" />
                    </button>
                    <button 
                      onClick={() => scrollToSection('guidelines')}
                      className={`w-full flex justify-center p-3 rounded-xl transition-all duration-200 ${
                        activeSection === 'guidelines' 
                          ? 'text-blue-600 bg-blue-50 shadow-sm' 
                          : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                      }`}
                      title="Guidelines"
                    >
                      <BookOpen className="h-5 w-5" />
                    </button>
                    <button 
                      onClick={() => scrollToSection('references')}
                      className={`w-full flex justify-center p-3 rounded-xl transition-all duration-200 ${
                        activeSection === 'references' 
                          ? 'text-blue-600 bg-blue-50 shadow-sm' 
                          : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                      }`}
                      title="References"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </button>
                  </nav>
                )}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-white/50 shadow-xl overflow-hidden">
              {/* Background Section */}
              <section id="background" className="p-8 border-b border-gray-100">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Background</h2>
              </div>

                {diseaseData.content.background?.overview && (
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                          <Target className="w-5 h-5 mr-2 text-blue-600" />
                          Definition
                        </h3>
                        <p className="text-gray-700 leading-relaxed">{diseaseData.content.background.overview.definition}</p>
                        </div>
                      
                      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                          <Brain className="w-5 h-5 mr-2 text-purple-600" />
                          Pathophysiology
                        </h3>
                        <p className="text-gray-700 leading-relaxed">{diseaseData.content.background.overview.pathophysiology}</p>
                        </div>
                        </div>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                          <Users className="w-5 h-5 mr-2 text-green-600" />
                          Epidemiology
                        </h3>
                        <p className="text-gray-700 leading-relaxed">{diseaseData.content.background.overview.epidemiology}</p>
                        </div>
                      
                      <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-100">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                          <TrendingUp className="w-5 h-5 mr-2 text-orange-600" />
                          Disease Course
                        </h3>
                        <p className="text-gray-700 leading-relaxed">{diseaseData.content.background.overview.diseaseCourse}</p>
                            </div>
                      
                      <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6 border border-teal-100">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                          <Award className="w-5 h-5 mr-2 text-teal-600" />
                          Prognosis
                        </h3>
                        <p className="text-gray-700 leading-relaxed">{diseaseData.content.background.overview.prognosis}</p>
                      </div>
                    </div>
                  </div>
                )}
                </section>

                {/* Clinical Findings Section */}
                {diseaseData.content.clinicalFindings && (
                <section id="clinical-findings" className="p-8 border-b border-gray-100">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-3 bg-green-100 rounded-xl">
                      <Stethoscope className="w-6 h-6 text-green-600" />
                          </div>
                    <h2 className="text-3xl font-bold text-gray-900">Clinical Findings</h2>
                        </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                      {diseaseData.content.clinicalFindings.symptoms && (
                      <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-6 border border-red-100">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                          <AlertTriangle className="w-5 h-5 mr-2 text-red-600" />
                          Symptoms
                        </h3>
                        <ul className="space-y-2">
                            {diseaseData.content.clinicalFindings.symptoms.map((symptom, index) => (
                            <li key={index} className="flex items-center space-x-2 text-gray-700">
                              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                              <span>{symptom}</span>
                            </li>
                          ))}
                        </ul>
                        </div>
                      )}
                    </div>
                  </section>
                )}

              {/* Guidelines Section */}
              <section id="guidelines" className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-purple-100 rounded-xl">
                    <BookOpen className="w-6 h-6 text-purple-600" />
                          </div>
                  <h2 className="text-3xl font-bold text-gray-900">Clinical Guidelines</h2>
                          </div>
                
                {diseaseData.content.guidelines?.keySources && (
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100 mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <Award className="w-5 h-5 mr-2 text-blue-600" />
                      Key Sources
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{diseaseData.content.guidelines.keySources}</p>
                    </div>
                )}

                {/* Guidelines Sections */}
                  <div className="space-y-6">
                  {diseaseData.content.guidelines?.sections?.map((section: GuidelineSection) => (
                    <div key={section.id} id={section.id} className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                        <button
                          onClick={() => toggleSection(section.id)}
                        className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                        >
                        <div className="flex items-center space-x-3">
                          <ChevronRight className="w-5 h-5 text-blue-600" />
                          <h3 className="text-lg font-semibold text-gray-900">{section.title}</h3>
                          {/* Show indicator if section has subsections but no direct content */}
                          {(!section.content || section.content.length === 0) && section.subsections && section.subsections.length > 0 && (
                            <span className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded-full">
                              {section.subsections.length} subsection{section.subsections.length > 1 ? 's' : ''}
                            </span>
                          )}
                        </div>
                        {expandedSections.includes(section.id) ? (
                          <ChevronUpIcon className="w-5 h-5 text-gray-400" />
                        ) : (
                          <ChevronDownIcon className="w-5 h-5 text-gray-400" />
                          )}
                        </button>
                        
                        {expandedSections.includes(section.id) && (
                        <div className="px-6 pb-6 space-y-4">
                          {/* Show direct content if it exists */}
                          {section.content && section.content.length > 0 && section.content.map((content, index) => (
                            <div key={index} className="bg-gray-50 rounded-xl p-4">
                              <p className="text-gray-700 leading-relaxed mb-2">{content.statement}</p>
                              <div className="flex items-center space-x-4 text-sm text-gray-500">
                                {content.level && (
                                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full font-medium">
                                    Level {content.level}
                                      </span>
                                )}
                                <span className="flex items-center">
                                  <ExternalLink className="w-3 h-3 mr-1" />
                                  {content.source}
                                            </span>
                                        </div>
                                      </div>
                                    ))}
                          
                          {/* Show message if no direct content but has subsections */}
                          {(!section.content || section.content.length === 0) && section.subsections && section.subsections.length > 0 && (
                            <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                              <p className="text-blue-800 text-sm font-medium">
                                This section contains {section.subsections.length} subsection{section.subsections.length > 1 ? 's' : ''}. Click to expand each subsection below.
                              </p>
                                  </div>
                          )}
                          
                          {/* Show subsections */}
                          {section.subsections?.map((subsection) => (
                            <div key={subsection.id} className="ml-4 border-l-2 border-blue-200 pl-4">
                              <button
                                onClick={() => toggleSubsection(subsection.id)}
                                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors mb-2"
                              >
                                {expandedSubsections.includes(subsection.id) ? (
                                  <ChevronDownIcon className="w-4 h-4" />
                                ) : (
                                  <ChevronRight className="w-4 h-4" />
                                )}
                                <span className="font-medium">{subsection.title}</span>
                                {subsection.content && (
                                  <span className="text-xs text-gray-500">
                                    ({subsection.content.length} guideline{subsection.content.length > 1 ? 's' : ''})
                                  </span>
                                )}
                              </button>
                              
                              {expandedSubsections.includes(subsection.id) && subsection.content && (
                                <div className="space-y-2 ml-6">
                                  {subsection.content.map((content, index) => (
                                    <div key={index} className="bg-white rounded-lg p-3 border border-gray-100">
                                      <p className="text-gray-700 text-sm leading-relaxed mb-2">{content.statement}</p>
                                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                                        {content.level && (
                                          <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full font-medium">
                                            Level {content.level}
                                          </span>
                                        )}
                                        <span className="flex items-center">
                                          <ExternalLink className="w-3 h-3 mr-1" />
                                          {content.source}
                                        </span>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </section>

                {/* References Section */}
                {diseaseData.content.references && (
                <section id="references" className="p-8 border-t border-gray-100">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-3 bg-teal-100 rounded-xl">
                      <ExternalLink className="w-6 h-6 text-teal-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">References</h2>
                  </div>
                  
                  <div className="space-y-4">
                      {diseaseData.content.references.map((reference: Reference) => (
                      <div key={reference.id} className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-4 border border-gray-200">
                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-sm font-bold text-teal-600">{reference.id}</span>
                          </div>
                            <div className="flex-1">
                            <p className="text-gray-900 font-medium mb-1">{reference.title}</p>
                            <p className="text-gray-600 text-sm mb-2">
                              {reference.authors} • {reference.journal} • {reference.year}
                              </p>
                              {reference.link && (
                                <a 
                                  href={reference.link} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
                                >
                                <ExternalLink className="w-3 h-3 mr-1" />
                                  View Article
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}
              </div>
          </div>
        </div>
      </div>

      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Share This Disease</h3>
              <button
                onClick={() => setShowShareModal(false)}
                className="p-2 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                <div className="flex-1 text-sm text-gray-600 truncate">
                  {window.location.href}
                </div>
                <button
                  onClick={() => copyToClipboard(window.location.href)}
                  className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>
              
              <div className="text-center">
                <p className="text-sm text-gray-500">
                  Link copied to clipboard!
                </p>
            </div>
          </div>
        </div>
      </div>
      )}
    </div>
  );
}; 