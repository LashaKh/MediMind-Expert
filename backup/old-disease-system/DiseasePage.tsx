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
  List,
  Calculator,
  Clock,
  User
} from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';
import { Button } from '../../components/ui/button';
import { getDiseaseData } from './registry';
import { GuidelineSection, Reference } from './types';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';

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
    'nonpharmacologic-interventions',
    'therapeutic-procedures',
    'perioperative-care',
    'surgical-interventions',
    'specific-circumstances',
    'preventative-measures',
    'follow-up-surveillance',
    'vasopressors',
    'nonvasopressor-medications',
    'management-of-arrhythmias',
    'classification-risk-stratification',
    'acute-hypernatremia',
    'chronic-hypernatremia',
    'fluid-replacement-strategy',
    'vasopressin-administration',
    'central-diabetes-insipidus-overview',
    'monitoring-follow-up',
    'laboratory-studies',
    'related-calculators',
    'monitoring-parameters',
    'classification-table',
    'fluid-replacement'
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

              {/* Studies Section */}
              {diseaseData.content.studies && (
                <section id="studies" className="p-8 border-b border-gray-100">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-3 bg-purple-100 rounded-xl">
                      <BarChart3 className="w-6 h-6 text-purple-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Studies & Evidence</h2>
                  </div>
                  
                  <div className="space-y-6">
                    {diseaseData.content.studies.map((study, index) => {
                      // Check if this is an "Updated evidence" or "Landmark trials" statement
                      const isUpdatedEvidence = study.title.toLowerCase().includes('updated evidence:');
                      const isLandmarkTrial = study.title.toLowerCase().includes('landmark trials:');
                      
                      if (isUpdatedEvidence) {
                        // Extract the study name from "Updated evidence: STUDY_NAME"
                        const studyMatch = study.title.match(/Updated evidence:\s*(.+)/i);
                        const studyName = studyMatch ? studyMatch[1] : 'Study';
                        
                        return (
                          <div key={index} className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 border-l-4 border-emerald-400 shadow-sm">
                            <div className="flex items-start space-x-4">
                              <div className="flex-shrink-0">
                                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                                  <BookOpen className="w-5 h-5 text-emerald-600" />
                                </div>
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center space-x-2 mb-3">
                                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                                    🔬 Updated Evidence
                                  </span>
                                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-emerald-600 text-white">
                                    {studyName}
                                  </span>
                                </div>
                                <p className="text-gray-800 leading-relaxed mb-4 font-medium">
                                  {study.description}
                                </p>
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                                    <span className="flex items-center">
                                      <User className="w-4 h-4 mr-1" />
                                      {study.authors}
                                    </span>
                                    <span className="flex items-center">
                                      <Calendar className="w-4 h-4 mr-1" />
                                      {study.year}
                                    </span>
                                  </div>
                                  {study.link && (
                                    <a
                                      href={study.link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md"
                                    >
                                      <ExternalLink className="w-4 h-4 mr-2" />
                                      View Study
                                    </a>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      } else if (isLandmarkTrial) {
                        // Extract the study name from "Landmark trials: STUDY_NAME"
                        const studyMatch = study.title.match(/Landmark trials:\s*(.+)/i);
                        const studyName = studyMatch ? studyMatch[1] : 'Trial';
                        
                        return (
                          <div key={index} className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border-l-4 border-amber-400 shadow-sm">
                            <div className="flex items-start space-x-4">
                              <div className="flex-shrink-0">
                                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                                  <Award className="w-5 h-5 text-amber-600" />
                                </div>
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center space-x-2 mb-3">
                                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                                    🏆 Landmark Trial
                                  </span>
                                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-amber-600 text-white">
                                    {studyName}
                                  </span>
                                </div>
                                <p className="text-gray-800 leading-relaxed mb-4 font-medium">
                                  {study.description}
                                </p>
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                                    <span className="flex items-center">
                                      <User className="w-4 h-4 mr-1" />
                                      {study.authors}
                                    </span>
                                    <span className="flex items-center">
                                      <Calendar className="w-4 h-4 mr-1" />
                                      {study.year}
                                    </span>
                                  </div>
                                  {study.link && (
                                    <a
                                      href={study.link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-sm font-medium rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md"
                                    >
                                      <ExternalLink className="w-4 h-4 mr-2" />
                                      View Study
                                    </a>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      } else {
                        // Regular study rendering
                        return (
                          <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200 shadow-sm">
                            <div className="flex items-start space-x-4">
                              <div className="flex-shrink-0">
                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                  <BarChart3 className="w-5 h-5 text-blue-600" />
                                </div>
                              </div>
                              <div className="flex-1">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{study.title}</h3>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                  {study.description}
                                </p>
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                                    <span className="flex items-center">
                                      <User className="w-4 h-4 mr-1" />
                                      {study.authors}
                                    </span>
                                    <span className="flex items-center">
                                      <Calendar className="w-4 h-4 mr-1" />
                                      {study.year}
                                    </span>
                                  </div>
                                  {study.link && (
                                    <a
                                      href={study.link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md"
                                    >
                                      <ExternalLink className="w-4 h-4 mr-2" />
                                      View Study
                                    </a>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      }
                    })}
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
                          {section.content && section.content.length > 0 && section.content.map((content, index) => {
                            // Check if this is an "Updated evidence" or "Landmark trials" statement
                            const isUpdatedEvidence = content.statement.toLowerCase().includes('updated evidence:');
                            const isLandmarkTrial = content.statement.toLowerCase().includes('landmark trials:');
                            
                            // Look for various types of medical resource links
                            const pubmedMatch = content.statement.match(/\[PubMed\]\((https:\/\/pubmed\.ncbi\.nlm\.nih\.gov\/\d+\/)\)/);
                            const doiMatch = content.statement.match(/\[DOI\]\((https:\/\/doi\.org\/[^\)]+)\)/);
                            const urlMatch = content.statement.match(/\[(.*?)\]\((https?:\/\/[^\)]+)\)/);
                            
                            if (isUpdatedEvidence) {
                              // Extract the study name from "Updated evidence: STUDY_NAME"
                              const studyMatch = content.statement.match(/Updated evidence:\s*([A-Z][A-Za-z0-9\-]*)/i);
                              const studyName = studyMatch ? studyMatch[1] : 'Study';
                              
                              // Extract the main evidence text (remove all link patterns)
                              let evidenceText = content.statement
                                .replace(/\[PubMed\]\(https:\/\/pubmed\.ncbi\.nlm\.nih\.gov\/\d+\/\)/, '')
                                .replace(/\[DOI\]\(https:\/\/doi\.org\/[^\)]+\)/, '')
                                .replace(/\[.*?\]\(https?:\/\/[^\)]+\)/, '')
                                .trim();
                              
                              // Determine the link type and URL
                              let linkUrl = '';
                              let linkText = '';
                              let linkIcon = <ExternalLink className="w-4 h-4 mr-2" />;
                              
                              if (pubmedMatch) {
                                linkUrl = pubmedMatch[1];
                                linkText = 'View on PubMed';
                                linkIcon = <ExternalLink className="w-4 h-4 mr-2" />;
                              } else if (doiMatch) {
                                linkUrl = doiMatch[1];
                                linkText = 'View DOI';
                                linkIcon = <ExternalLink className="w-4 h-4 mr-2" />;
                              } else if (urlMatch) {
                                linkUrl = urlMatch[2];
                                linkText = `View ${urlMatch[1]}`;
                                linkIcon = <ExternalLink className="w-4 h-4 mr-2" />;
                              }
                              
                              return (
                                <div key={index} className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 border-l-4 border-emerald-400 shadow-sm">
                                  <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                      <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                                        <BookOpen className="w-5 h-5 text-emerald-600" />
                                      </div>
                                    </div>
                                    <div className="flex-1">
                                      <div className="flex items-center space-x-2 mb-3">
                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                                          🔬 Updated Evidence
                                        </span>
                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-emerald-600 text-white">
                                          {studyName}
                                        </span>
                                      </div>
                                      <p className="text-gray-800 leading-relaxed mb-4 font-medium">
                                        {evidenceText}
                                      </p>
                                      <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                                          {content.level && (
                                            <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full font-medium">
                                              Level {content.level}
                                            </span>
                                          )}
                                          <span className="flex items-center">
                                            <ExternalLink className="w-4 h-4 mr-1" />
                                            {content.source}
                                          </span>
                                        </div>
                                        {linkUrl && (
                                          <a
                                            href={linkUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md"
                                          >
                                            {linkIcon}
                                            {linkText}
                                          </a>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            } else if (isLandmarkTrial) {
                              // Extract the study name from "Landmark trials: STUDY_NAME"
                              const studyMatch = content.statement.match(/Landmark trials:\s*([A-Z][A-Za-z0-9\-]*)/i);
                              const studyName = studyMatch ? studyMatch[1] : 'Trial';
                              
                              // Extract the main evidence text (remove all link patterns)
                              let evidenceText = content.statement
                                .replace(/\[PubMed\]\(https:\/\/pubmed\.ncbi\.nlm\.nih\.gov\/\d+\/\)/, '')
                                .replace(/\[DOI\]\(https:\/\/doi\.org\/[^\)]+\)/, '')
                                .replace(/\[.*?\]\(https?:\/\/[^\)]+\)/, '')
                                .trim();
                              
                              // Determine the link type and URL
                              let linkUrl = '';
                              let linkText = '';
                              let linkIcon = <ExternalLink className="w-4 h-4 mr-2" />;
                              
                              if (pubmedMatch) {
                                linkUrl = pubmedMatch[1];
                                linkText = 'View on PubMed';
                                linkIcon = <ExternalLink className="w-4 h-4 mr-2" />;
                              } else if (doiMatch) {
                                linkUrl = doiMatch[1];
                                linkText = 'View DOI';
                                linkIcon = <ExternalLink className="w-4 h-4 mr-2" />;
                              } else if (urlMatch) {
                                linkUrl = urlMatch[2];
                                linkText = `View ${urlMatch[1]}`;
                                linkIcon = <ExternalLink className="w-4 h-4 mr-2" />;
                              }
                              
                              return (
                                <div key={index} className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border-l-4 border-amber-400 shadow-sm">
                                  <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                      <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                                        <Award className="w-5 h-5 text-amber-600" />
                                      </div>
                                    </div>
                                    <div className="flex-1">
                                      <div className="flex items-center space-x-2 mb-3">
                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                                          🏆 Landmark Trial
                                        </span>
                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-amber-600 text-white">
                                          {studyName}
                                        </span>
                                      </div>
                                      <p className="text-gray-800 leading-relaxed mb-4 font-medium">
                                        {evidenceText}
                                      </p>
                                      <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                                          {content.level && (
                                            <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full font-medium">
                                              Level {content.level}
                                            </span>
                                          )}
                                          <span className="flex items-center">
                                            <ExternalLink className="w-4 h-4 mr-1" />
                                            {content.source}
                                          </span>
                                        </div>
                                        {linkUrl && (
                                          <a
                                            href={linkUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-sm font-medium rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md"
                                          >
                                            {linkIcon}
                                            {linkText}
                                          </a>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                            
                            // Regular statement rendering with enhanced design
                            const getMainEvidenceLevelConfig = (level: string) => {
                              const levelMap: {[key: string]: {bg: string, text: string, border: string, icon: string}} = {
                                'A': { bg: 'bg-gradient-to-r from-emerald-50 to-green-50', text: 'text-emerald-800', border: 'border-l-4 border-emerald-400', icon: '🏆' },
                                'B': { bg: 'bg-gradient-to-r from-blue-50 to-indigo-50', text: 'text-blue-800', border: 'border-l-4 border-blue-400', icon: '⭐' },
                                'C': { bg: 'bg-gradient-to-r from-amber-50 to-yellow-50', text: 'text-amber-800', border: 'border-l-4 border-amber-400', icon: '💡' },
                                'D': { bg: 'bg-gradient-to-r from-red-50 to-rose-50', text: 'text-red-800', border: 'border-l-4 border-red-400', icon: '⚠️' },
                                'I': { bg: 'bg-gradient-to-r from-gray-50 to-slate-50', text: 'text-gray-800', border: 'border-l-4 border-gray-400', icon: '❓' }
                              };
                              return levelMap[level] || levelMap['B'];
                            };

                            const mainEvidenceConfig = getMainEvidenceLevelConfig(content.level || 'B');
                            
                            return (
                              <div key={index} className={`${mainEvidenceConfig.bg} ${mainEvidenceConfig.border} rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200`}>
                                <div className="flex items-start space-x-4">
                                  <div className="flex-shrink-0">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                                      <span className="text-xl">{mainEvidenceConfig.icon}</span>
                                    </div>
                                  </div>
                                  <div className="flex-1">
                                    <div className="flex items-center space-x-3 mb-4">
                                      <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-bold bg-white ${mainEvidenceConfig.text} shadow-sm`}>
                                        Evidence Level {content.level || 'B'}
                                      </span>
                                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/70 text-gray-700">
                                        <ExternalLink className="w-3 h-3 mr-1" />
                                        {content.source}
                                      </span>
                                    </div>
                                    <div className="prose prose-lg max-w-none">
                                      <p className="text-gray-800 leading-relaxed font-medium whitespace-pre-line">
                                        {content.statement}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                          
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
                              
                              {expandedSubsections.includes(subsection.id) && (
                                <div className="space-y-4 ml-6">
                                  {subsection.content && (
                                    <div className="space-y-2">
                                      {subsection.content.map((content, index) => {
                                        // Check if this is an "Updated evidence" or "Landmark trials" statement
                                        const isUpdatedEvidence = content.statement.toLowerCase().includes('updated evidence:');
                                        const isLandmarkTrial = content.statement.toLowerCase().includes('landmark trials:');
                                        
                                        // Look for various types of medical resource links
                                        const pubmedMatch = content.statement.match(/\[PubMed\]\((https:\/\/pubmed\.ncbi\.nlm\.nih\.gov\/\d+\/)\)/);
                                        const doiMatch = content.statement.match(/\[DOI\]\((https:\/\/doi\.org\/[^\)]+)\)/);
                                        const urlMatch = content.statement.match(/\[(.*?)\]\((https?:\/\/[^\)]+)\)/);
                                        
                                        if (isUpdatedEvidence) {
                                          // Extract the study name from "Updated evidence: STUDY_NAME"
                                          const studyMatch = content.statement.match(/Updated evidence:\s*([A-Z][A-Za-z0-9\-]*)/i);
                                          const studyName = studyMatch ? studyMatch[1] : 'Study';
                                          
                                          // Extract the main evidence text (remove all link patterns)
                                          let evidenceText = content.statement
                                            .replace(/\[PubMed\]\(https:\/\/pubmed\.ncbi\.nlm\.nih\.gov\/\d+\/\)/, '')
                                            .replace(/\[DOI\]\(https:\/\/doi\.org\/[^\)]+\)/, '')
                                            .replace(/\[.*?\]\(https?:\/\/[^\)]+\)/, '')
                                            .trim();
                                          
                                          // Determine the link type and URL
                                          let linkUrl = '';
                                          let linkText = '';
                                          let linkIcon = <ExternalLink className="w-4 h-4 mr-2" />;
                                          
                                          if (pubmedMatch) {
                                            linkUrl = pubmedMatch[1];
                                            linkText = 'View on PubMed';
                                            linkIcon = <ExternalLink className="w-4 h-4 mr-2" />;
                                          } else if (doiMatch) {
                                            linkUrl = doiMatch[1];
                                            linkText = 'View DOI';
                                            linkIcon = <ExternalLink className="w-4 h-4 mr-2" />;
                                          } else if (urlMatch) {
                                            linkUrl = urlMatch[2];
                                            linkText = `View ${urlMatch[1]}`;
                                            linkIcon = <ExternalLink className="w-4 h-4 mr-2" />;
                                          }
                                          
                                          return (
                                            <div key={index} className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 border-l-4 border-emerald-400 shadow-sm">
                                              <div className="flex items-start space-x-4">
                                                <div className="flex-shrink-0">
                                                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                                                    <BookOpen className="w-5 h-5 text-emerald-600" />
                                                  </div>
                                                </div>
                                                <div className="flex-1">
                                                  <div className="flex items-center space-x-2 mb-3">
                                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                                                      🔬 Updated Evidence
                                                    </span>
                                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-emerald-600 text-white">
                                                      {studyName}
                                                    </span>
                                                  </div>
                                                  <p className="text-gray-800 leading-relaxed mb-4 font-medium">
                                                    {evidenceText}
                                                  </p>
                                                  <div className="flex items-center justify-between">
                                                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                                                      <span className="flex items-center">
                                                        <ExternalLink className="w-4 h-4 mr-1" />
                                                        {content.source}
                                                      </span>
                                                    </div>
                                                    {linkUrl && (
                                                      <a
                                                        href={linkUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md"
                                                      >
                                                        {linkIcon}
                                                        {linkText}
                                                      </a>
                                                    )}
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          );
                                        } else if (isLandmarkTrial) {
                                          // Extract the study name from "Landmark trials: STUDY_NAME"
                                          const studyMatch = content.statement.match(/Landmark trials:\s*([A-Z][A-Za-z0-9\-]*)/i);
                                          const studyName = studyMatch ? studyMatch[1] : 'Trial';
                                          
                                          // Extract the main evidence text (remove all link patterns)
                                          let evidenceText = content.statement
                                            .replace(/\[PubMed\]\(https:\/\/pubmed\.ncbi\.nlm\.nih\.gov\/\d+\/\)/, '')
                                            .replace(/\[DOI\]\(https:\/\/doi\.org\/[^\)]+\)/, '')
                                            .replace(/\[.*?\]\(https?:\/\/[^\)]+\)/, '')
                                            .trim();
                                          
                                          // Determine the link type and URL
                                          let linkUrl = '';
                                          let linkText = '';
                                          let linkIcon = <ExternalLink className="w-4 h-4 mr-2" />;
                                          
                                          if (pubmedMatch) {
                                            linkUrl = pubmedMatch[1];
                                            linkText = 'View on PubMed';
                                            linkIcon = <ExternalLink className="w-4 h-4 mr-2" />;
                                          } else if (doiMatch) {
                                            linkUrl = doiMatch[1];
                                            linkText = 'View DOI';
                                            linkIcon = <ExternalLink className="w-4 h-4 mr-2" />;
                                          } else if (urlMatch) {
                                            linkUrl = urlMatch[2];
                                            linkText = `View ${urlMatch[1]}`;
                                            linkIcon = <ExternalLink className="w-4 h-4 mr-2" />;
                                          }
                                          
                                          return (
                                            <div key={index} className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border-l-4 border-amber-400 shadow-sm">
                                              <div className="flex items-start space-x-4">
                                                <div className="flex-shrink-0">
                                                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                                                    <Award className="w-5 h-5 text-amber-600" />
                                                  </div>
                                                </div>
                                                <div className="flex-1">
                                                  <div className="flex items-center space-x-2 mb-3">
                                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                                                      🏆 Landmark Trial
                                                    </span>
                                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-amber-600 text-white">
                                                      {studyName}
                                                    </span>
                                                  </div>
                                                  <p className="text-gray-800 leading-relaxed mb-4 font-medium">
                                                    {evidenceText}
                                                  </p>
                                                  <div className="flex items-center justify-between">
                                                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                                                      <span className="flex items-center">
                                                        <ExternalLink className="w-4 h-4 mr-1" />
                                                        {content.source}
                                                      </span>
                                                    </div>
                                                    {linkUrl && (
                                                      <a
                                                        href={linkUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-sm font-medium rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md"
                                                      >
                                                        {linkIcon}
                                                        {linkText}
                                                      </a>
                                                    )}
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          );
                                        }
                                        
                                        // Regular statement rendering with enhanced design
                                        const getEvidenceLevelConfig = (level: string) => {
                                          const levelMap: {[key: string]: {bg: string, text: string, border: string, icon: string}} = {
                                            'A': { bg: 'bg-gradient-to-r from-emerald-50 to-green-50', text: 'text-emerald-800', border: 'border-l-4 border-emerald-400', icon: '🏆' },
                                            'B': { bg: 'bg-gradient-to-r from-blue-50 to-indigo-50', text: 'text-blue-800', border: 'border-l-4 border-blue-400', icon: '⭐' },
                                            'C': { bg: 'bg-gradient-to-r from-amber-50 to-yellow-50', text: 'text-amber-800', border: 'border-l-4 border-amber-400', icon: '💡' },
                                            'D': { bg: 'bg-gradient-to-r from-red-50 to-rose-50', text: 'text-red-800', border: 'border-l-4 border-red-400', icon: '⚠️' },
                                            'I': { bg: 'bg-gradient-to-r from-gray-50 to-slate-50', text: 'text-gray-800', border: 'border-l-4 border-gray-400', icon: '❓' }
                                          };
                                          return levelMap[level] || levelMap['B'];
                                        };

                                        const evidenceConfig = getEvidenceLevelConfig(content.level || 'B');
                                        
                                        return (
                                          <div key={index} className={`${evidenceConfig.bg} ${evidenceConfig.border} rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200`}>
                                            <div className="flex items-start space-x-4">
                                              <div className="flex-shrink-0">
                                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-white">
                                                  <span className="text-xl">{evidenceConfig.icon}</span>
                                                </div>
                                              </div>
                                              <div className="flex-1">
                                                <div className="flex items-center flex-wrap gap-2 mb-4">
                                                  <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-bold bg-white ${evidenceConfig.text} shadow-sm border`}>
                                                    Evidence Level {content.level || 'B'}
                                                  </span>
                                                  <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-sm">
                                                    <ExternalLink className="w-4 h-4 mr-2" />
                                                    {content.source}
                                                  </div>
                                                </div>
                                                <div className="prose prose-sm max-w-none">
                                                  <div className="text-gray-800 leading-relaxed font-medium space-y-3">
                                                    {content.statement.split('\n\n').map((paragraph, pIndex) => (
                                                      <div key={pIndex}>
                                                        {paragraph.startsWith('•') ? (
                                                          <div className="flex items-start space-x-3 py-2">
                                                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                                            <p className="text-gray-700 leading-relaxed">{paragraph.substring(1).trim()}</p>
                                                          </div>
                                                        ) : (
                                                          <p className="text-gray-800 leading-relaxed">{paragraph}</p>
                                                        )}
                                                      </div>
                                                    ))}
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        );
                                      })}
                                    </div>
                                  )}
                                  
                                  {/* Render Calculator if present */}
                                  {subsection.calculator && (
                                    <div className="mt-4">
                                      {subsection.calculator.type === '4ts-score' ? (
                                        <FourTsCalculator calculator={subsection.calculator} />
                                      ) : subsection.calculator.type === 'siadh-criteria' ? (
                                        <SIADHCriteriaCalculator calculator={subsection.calculator} />
                                      ) : (
                                        <GenericCalculator calculator={subsection.calculator} />
                                      )}
                                    </div>
                                  )}
                                  
                                  {/* Render Risk Table if present */}
                                  {subsection.riskTable && (
                                    <div className="mt-4">
                                      <RiskTable riskTable={subsection.riskTable} />
                                    </div>
                                  )}
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

// SIADH Criteria Calculator Component
interface SIADHCriteriaCalculatorProps {
  calculator: {
    type: string;
    parameters: {
      [key: string]: {
        label: string;
        options: {
          value: number;
          label: string;
          points: number;
        }[];
      };
    };
    riskCategories: {
      score: string;
      risk: string;
      probability: string;
      interpretation: string;
    }[];
  };
}

const SIADHCriteriaCalculator: React.FC<SIADHCriteriaCalculatorProps> = ({ calculator }) => {
  const [selectedValues, setSelectedValues] = useState<{[key: string]: number[]}>({});
  const [activeTab, setActiveTab] = useState<'calculator' | 'when-to-use'>('calculator');

  const handleSelection = (parameter: string, value: number, checked: boolean) => {
    setSelectedValues(prev => {
      const currentValues = prev[parameter] || [];
      if (checked) {
        return {
          ...prev,
          [parameter]: [...currentValues, value]
        };
      } else {
        return {
          ...prev,
          [parameter]: currentValues.filter(v => v !== value)
        };
      }
    });
  };

  const getEssentialCriteriaCount = () => {
    const essentialCriteria = selectedValues['essential_criteria'] || [];
    return essentialCriteria.length;
  };

  const getSupplementalCriteriaCount = () => {
    const supplementalCriteria = selectedValues['supplemental_criteria'] || [];
    return supplementalCriteria.length;
  };

  const getTotalScore = () => {
    const essentialCount = getEssentialCriteriaCount();
    const supplementalCount = getSupplementalCriteriaCount();
    
    // Essential criteria: 8 points each
    const essentialPoints = essentialCount * 8;
    // Supplemental criteria: 1 point each
    const supplementalPoints = supplementalCount;
    
    return essentialPoints + supplementalPoints;
  };

  const getDiagnosisResult = () => {
    const totalScore = getTotalScore();
    
    if (totalScore >= 8) {
      return {
        diagnosis: "Meets criteria for possible SIADH",
        color: "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-200",
        interpretation: "Meets criteria for possible SIADH according to diagnostic guidelines. Consider appropriate evaluation and treatment."
      };
    } else {
      return {
        diagnosis: "Criteria not met",
        color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-200",
        interpretation: "Does not meet criteria for possible SIADH. Consider alternative causes of hyponatremia."
      };
    }
  };

  const result = getDiagnosisResult();

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-200 dark:border-blue-800 p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
          <Calculator className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        </div>
        <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100">Diagnostic criteria for syndrome of inappropriate antidiuretic hormone secretion</h3>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-1 mb-6 bg-white/50 dark:bg-gray-800/50 rounded-lg p-1">
        <button
          onClick={() => setActiveTab('calculator')}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
            activeTab === 'calculator'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
          }`}
        >
          Criteria
        </button>
        <button
          onClick={() => setActiveTab('when-to-use')}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
            activeTab === 'when-to-use'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
          }`}
        >
          When to use
        </button>
      </div>

      {activeTab === 'calculator' ? (
        <div className="space-y-6">
          {/* Essential Criteria */}
          {Object.entries(calculator.parameters).map(([key, parameter]) => (
            <div key={key} className="space-y-3">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 flex items-center space-x-2">
                <span>{parameter.label}</span>
                {key === 'essential_criteria' && (
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    ({getEssentialCriteriaCount()}/6 criteria met)
                  </span>
                )}
                {key === 'supplemental_criteria' && (
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    ({getSupplementalCriteriaCount()} criteria met)
                  </span>
                )}
              </h4>
              <div className="space-y-2">
                {parameter.options.map((option, index) => {
                  const isSelected = (selectedValues[key] || []).includes(option.value);
                  return (
                    <label
                      key={index}
                      className={`flex items-start space-x-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                        isSelected
                          ? 'bg-blue-100 dark:bg-blue-900/50 border-blue-300 dark:border-blue-600 text-blue-900 dark:text-blue-100'
                          : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={(e) => handleSelection(key, option.value, e.target.checked)}
                        className="mt-1 text-blue-600 focus:ring-blue-500"
                      />
                      <div className="flex-1">
                        <div className="text-sm text-gray-900 dark:text-gray-100">{option.label}</div>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Results */}
          <div className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                Total Score: {getTotalScore()}/55
              </div>
              <div className="text-lg font-medium text-gray-600 dark:text-gray-400 mb-2">
                Essential Criteria: {getEssentialCriteriaCount()}/6 ({getEssentialCriteriaCount() * 8} points)
              </div>
              <div className="text-lg font-medium text-gray-600 dark:text-gray-400 mb-4">
                Supplemental Criteria: {getSupplementalCriteriaCount()}/7 ({getSupplementalCriteriaCount()} points)
              </div>
              <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-semibold ${result.color}`}>
                <span>{result.diagnosis}</span>
              </div>
              <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="text-xs">{result.interpretation}</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5" />
              <div>
                <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">When to use</h4>
                <p className="text-sm text-amber-700 dark:text-amber-300 mb-3">
                  The Diagnostic Criteria for Syndrome of Inappropriate Antidiuretic Hormone Secretion (SIADH) is a clinical tool designed to aid in the diagnosis of SIADH, a condition characterized by excessive release of antidiuretic hormone from the posterior pituitary gland or other sources. The criteria are primarily used to identify patients with hyponatremia who may have SIADH as the underlying cause.
                </p>
                <p className="text-sm text-amber-700 dark:text-amber-300 mb-3">
                  <strong>Essential criteria</strong> include effective serum osmolality less than 275 mOsm/kg, urine osmolality greater than 100 mOsm/kg, absence of clinical evidence of hypovolemia or hypervolemia, urine sodium concentration greater than 30 mmol/L with normal dietary salt and water intake, absence of adrenal, thyroid, pituitary or renal insufficiency, and no recent use of diuretic agents.
                </p>
                <p className="text-sm text-amber-700 dark:text-amber-300">
                  <strong>Supplemental criteria</strong> provide additional diagnostic support, including serum uric acid less than 0.24 mmol/L, serum urea less than 3.6 mmol/L, failure to correct hyponatremia after 0.9% saline infusion, fractional sodium excretion greater than 0.5%, fractional urea excretion greater than 55%, fractional uric acid excretion greater than 12%, and correction of hyponatremia through fluid restriction.
                </p>
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
            <div className="flex items-start space-x-3">
              <ExternalLink className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
              <div>
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Reference</h4>
                <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">
                  Goce Spasovski, Raymond Vanholder, Bruno Allolio et al. Clinical practice guideline on diagnosis and treatment of hyponatraemia. Eur J Endocrinol. 2014 Feb 25;170(3):G1-47.
                </p>
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/24569125/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium transition-colors"
                >
                  <ExternalLink className="w-3 h-3 mr-1" />
                  View PubMed Article
                </a>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg border-2 bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800">
              <h5 className="font-semibold mb-2 text-green-800 dark:text-green-200">
                Meets criteria for possible SIADH (Score: 8+)
              </h5>
              <div className="text-sm space-y-1">
                <div><strong>Scoring:</strong> At least 8 points needed</div>
                <div><strong>Essential:</strong> 8 points each criterion</div>
                <div><strong>Supplemental:</strong> 1 point each criterion</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Consider appropriate evaluation and treatment</div>
              </div>
            </div>
            <div className="p-4 rounded-lg border-2 bg-yellow-50 border-yellow-200 dark:bg-yellow-900/20 dark:border-yellow-800">
              <h5 className="font-semibold mb-2 text-yellow-800 dark:text-yellow-200">
                Criteria not met (Score: 0-7)
              </h5>
              <div className="text-sm space-y-1">
                <div><strong>Scoring:</strong> Less than 8 points</div>
                <div><strong>Result:</strong> Insufficient criteria</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Consider alternative causes of hyponatremia</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Generic Calculator Component (fallback)
const GenericCalculator: React.FC<{ calculator: any }> = ({ calculator }) => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/20 dark:to-gray-800/20 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <Calculator className="w-6 h-6 text-gray-600 dark:text-gray-400" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Calculator</h3>
      </div>
      <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
        <p className="text-gray-600 dark:text-gray-400">Calculator component not yet implemented for type: {calculator.type}</p>
      </div>
    </div>
  );
};

// 4Ts Score Calculator Component
interface FourTsCalculatorProps {
  calculator: {
    type: string;
    parameters: {
      [key: string]: {
        label: string;
        options: {
          value: number;
          label: string;
          points: number;
        }[];
      };
    };
    riskCategories: {
      score: string;
      risk: string;
      probability: string;
      interpretation: string;
    }[];
  };
}

const FourTsCalculator: React.FC<FourTsCalculatorProps> = ({ calculator }) => {
  const [selectedValues, setSelectedValues] = useState<{[key: string]: number}>({});
  const [totalScore, setTotalScore] = useState(0);
  const [activeTab, setActiveTab] = useState<'calculator' | 'when-to-use'>('calculator');

  useEffect(() => {
    const score = Object.values(selectedValues).reduce((sum, value) => sum + value, 0);
    setTotalScore(score);
  }, [selectedValues]);

  const handleSelection = (parameter: string, value: number) => {
    setSelectedValues(prev => ({
      ...prev,
      [parameter]: value
    }));
  };

  const getRiskCategory = (score: number) => {
    if (score <= 3) return calculator.riskCategories[0];
    if (score <= 5) return calculator.riskCategories[1];
    return calculator.riskCategories[2];
  };

  const currentRisk = getRiskCategory(totalScore);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-200 dark:border-blue-800 p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
          <Calculator className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        </div>
        <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100">4Ts score for heparin-induced thrombocytopenia</h3>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-1 mb-6 bg-white/50 dark:bg-gray-800/50 rounded-lg p-1">
        <button
          onClick={() => setActiveTab('calculator')}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
            activeTab === 'calculator'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
          }`}
        >
          Calculator
        </button>
        <button
          onClick={() => setActiveTab('when-to-use')}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
            activeTab === 'when-to-use'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
          }`}
        >
          When to use
        </button>
      </div>

      {activeTab === 'calculator' ? (
        <div className="space-y-6">
          {/* Calculator Parameters */}
          {Object.entries(calculator.parameters).map(([key, parameter]) => (
            <div key={key} className="space-y-3">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100">{parameter.label}</h4>
              <div className="space-y-2">
                {parameter.options.map((option) => (
                  <label
                    key={option.value}
                    className={`flex items-start space-x-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedValues[key] === option.value
                        ? 'bg-blue-100 dark:bg-blue-900/50 border-blue-300 dark:border-blue-600 text-blue-900 dark:text-blue-100'
                        : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                    }`}
                  >
                    <input
                      type="radio"
                      name={key}
                      value={option.value}
                      checked={selectedValues[key] === option.value}
                      onChange={() => handleSelection(key, option.value)}
                      className="mt-1 text-blue-600 focus:ring-blue-500"
                    />
                    <div className="flex-1">
                      <div className="text-sm text-gray-900 dark:text-gray-100">{option.label}</div>
                    </div>
                    <div className={`px-2 py-1 rounded text-xs font-semibold ${
                      selectedValues[key] === option.value
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                    }`}>
                      {option.points} {option.points === 1 ? 'point' : 'points'}
                    </div>
                  </label>
                ))}
              </div>
            </div>
          ))}

          {/* Results */}
          <div className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                {totalScore} / 8 points
              </div>
              <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-semibold ${
                currentRisk.risk === 'Low' ? 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-200' :
                currentRisk.risk === 'Intermediate' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-200' :
                'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-200'
              }`}>
                <span>{currentRisk.risk} Risk ({currentRisk.score} points)</span>
              </div>
              <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                <div>Probability of HIT: <strong>{currentRisk.probability}</strong></div>
                <div className="mt-1">{currentRisk.interpretation}</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5" />
              <div>
                <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">When to use</h4>
                <p className="text-sm text-amber-700 dark:text-amber-300">
                  Use the 4T score (outside a cardiac surgery context) to determine the clinical probability of HIT in patients with suspected HIT.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {calculator.riskCategories.map((category, index) => (
              <div key={index} className={`p-4 rounded-lg border-2 ${
                category.risk === 'Low' ? 'bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800' :
                category.risk === 'Intermediate' ? 'bg-yellow-50 border-yellow-200 dark:bg-yellow-900/20 dark:border-yellow-800' :
                'bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800'
              }`}>
                <h5 className={`font-semibold mb-2 ${
                  category.risk === 'Low' ? 'text-green-800 dark:text-green-200' :
                  category.risk === 'Intermediate' ? 'text-yellow-800 dark:text-yellow-200' :
                  'text-red-800 dark:text-red-200'
                }`}>
                  {category.risk} Risk ({category.score})
                </h5>
                <div className="text-sm space-y-1">
                  <div><strong>Probability:</strong> {category.probability}</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">{category.interpretation}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Risk Table Component
interface RiskTableProps {
  riskTable: {
    title: string;
    headers: string[];
    rows: {
      situation: string;
      guidance: string[];
    }[];
  };
}

const RiskTable: React.FC<RiskTableProps> = ({ riskTable }) => {
  return (
    <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl border border-amber-200 dark:border-amber-800 p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-2 bg-amber-100 dark:bg-amber-900/50 rounded-lg">
          <AlertTriangle className="w-6 h-6 text-amber-600 dark:text-amber-400" />
        </div>
        <h3 className="text-xl font-bold text-amber-900 dark:text-amber-100">{riskTable.title}</h3>
      </div>

      <div className="overflow-hidden rounded-xl border border-amber-200 dark:border-amber-700">
        <table className="w-full">
          <thead>
            <tr className="bg-amber-100 dark:bg-amber-900/50">
              {riskTable.headers.map((header, index) => (
                <th
                  key={index}
                  className="px-6 py-4 text-left text-sm font-semibold text-amber-900 dark:text-amber-100"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {riskTable.rows.map((row, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0
                    ? 'bg-white dark:bg-gray-800'
                    : 'bg-amber-50/50 dark:bg-amber-900/10'
                } border-b border-amber-200 dark:border-amber-700 last:border-b-0`}
              >
                <td className="px-6 py-4 align-top">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${
                    row.situation.includes('Low') ? 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-200' :
                    row.situation.includes('Intermediate') ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-200' :
                    'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-200'
                  }`}>
                    {row.situation}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <ul className="space-y-2">
                    {row.guidance.map((guidance, guidanceIndex) => (
                      <li key={guidanceIndex} className="flex items-start space-x-2 text-sm text-gray-700 dark:text-gray-300">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{guidance}</span>
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}; 