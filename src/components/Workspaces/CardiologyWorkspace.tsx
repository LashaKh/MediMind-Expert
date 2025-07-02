import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { SpecialtyIndicator } from '../ui/SpecialtyIndicator';
import { GuidedTour } from '../Help';
import { 
  MessageSquare, 
  Calculator, 
  BookOpen, 
  Database, 
  FileText, 
  ClipboardList, 
  Clock, 
  TrendingUp,
  Sparkles,
  Heart,
  Brain,
  Activity,
  Users,
  Calendar,
  ChevronRight,
  Star,
  Shield,
  Zap,
  Globe,
  Stethoscope,
  HeartHandshake
} from 'lucide-react';

export const CardiologyWorkspace: React.FC = () => {
  const { profile } = useAuth();
  const navigate = useNavigate();
  const [showTour, setShowTour] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  // Mouse movement effect for gradient following
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Check if user should see tour - DISABLED
  // useEffect(() => {
  //   const hasSeenTour = localStorage.getItem('tour-completed-workspace');
  //   if (!hasSeenTour) {
  //     // Show tour after a brief delay to allow page to load
  //     const timer = setTimeout(() => setShowTour(true), 1000);
  //     return () => clearTimeout(timer);
  //   }
  // }, []);

  // Navigation handlers
  const goToAICopilot = () => navigate('/ai-copilot');
  const goToCalculators = () => navigate('/calculators');
  const goToKnowledgeBase = () => navigate('/knowledge-base');
  const goToVectorStore = () => navigate('/vector-store');
  const goToForms = () => navigate('/forms');
  const goToDiseases = () => navigate('/diseases');

  // Dashboard features with enhanced cardiology-specific styling
  const dashboardFeatures = [
    {
      id: 'ai-copilot',
      title: 'AI Co-Pilot',
      subtitle: 'Intelligent Cardiology Assistant',
      description: 'Get instant answers to cardiology questions with evidence-based recommendations and cardiac case discussions',
      icon: MessageSquare,
      gradient: 'from-red-500 via-rose-500 to-pink-600',
      bgGradient: 'from-red-50/80 via-rose-50/60 to-pink-50/80',
      glowColor: 'shadow-red-500/25',
      buttonText: 'Start AI Chat',
      onClick: goToAICopilot,
      stats: '24/7 Available',
      badge: 'AI Powered',
      tourId: 'ai-copilot'
    },
    {
      id: 'calculators',
      title: 'Medical Calculators',
      subtitle: 'Cardiac Risk Assessment',
      description: 'ASCVD Risk Calculator, GRACE Score, HCM Risk-SCD and comprehensive cardiac risk assessment tools',
      icon: Calculator,
      gradient: 'from-emerald-500 via-teal-500 to-cyan-600',
      bgGradient: 'from-emerald-50/80 via-teal-50/60 to-cyan-50/80',
      glowColor: 'shadow-emerald-500/25',
      buttonText: 'View Calculators',
      onClick: goToCalculators,
      stats: '15+ Validated',
      badge: '100% Accurate',
      tourId: 'calculators'
    },
    {
      id: 'knowledge-base',
      title: 'Knowledge Base',
      subtitle: 'Cardiology Resources Hub',
      description: 'Access curated ACC/AHA guidelines, cardiology research papers, and your personal medical documents',
      icon: BookOpen,
      gradient: 'from-blue-500 via-indigo-500 to-purple-600',
      bgGradient: 'from-blue-50/80 via-indigo-50/60 to-purple-50/80',
      glowColor: 'shadow-blue-500/25',
      buttonText: 'Browse Resources',
      onClick: goToKnowledgeBase,
      stats: '1000+ Articles',
      badge: 'ACC/AHA Guidelines',
      tourId: 'knowledge-base'
    },
    {
      id: 'vector-store',
      title: 'Vector Store',
      subtitle: 'AI Document Intelligence',
      description: 'Manage your AI-powered cardiology document storage with semantic search and intelligent organization',
      icon: Database,
      gradient: 'from-indigo-500 via-blue-500 to-sky-600',
      bgGradient: 'from-indigo-50/80 via-blue-50/60 to-sky-50/80',
      glowColor: 'shadow-indigo-500/25',
      buttonText: 'Manage Vector Store',
      onClick: goToVectorStore,
      stats: 'Smart Search',
      badge: 'AI Enhanced'
    },
    {
      id: 'case-management',
      title: 'Case Management',
      subtitle: 'Cardiac Case Collaboration',
      description: 'Create, manage and discuss complex cardiac cases with AI-assisted clinical insights and recommendations',
      icon: FileText,
      gradient: 'from-orange-500 via-amber-500 to-yellow-600',
      bgGradient: 'from-orange-50/80 via-amber-50/60 to-yellow-50/80',
      glowColor: 'shadow-orange-500/25',
      buttonText: 'Manage Cases',
      onClick: () => {},
      stats: 'Collaborative',
      badge: 'Secure',
      tourId: 'case-management'
    },
    {
      id: 'medical-forms',
      title: 'Medical Forms',
      subtitle: 'Cardiac Documentation',
      description: 'Access cardiology-specific forms, templates and automated cardiac documentation workflows',
      icon: ClipboardList,
      gradient: 'from-teal-500 via-cyan-500 to-blue-600',
      bgGradient: 'from-teal-50/80 via-cyan-50/60 to-blue-50/80',
      glowColor: 'shadow-teal-500/25',
      buttonText: 'View Forms',
      onClick: goToForms,
      stats: '50+ Templates',
      badge: 'Automated'
    },
    {
      id: 'diseases',
      title: 'Disease Database',
      subtitle: 'Cardiology Reference',
      description: 'Comprehensive database of cardiovascular diseases with evidence-based guidelines, management protocols, and clinical pathways',
      icon: Database,
      gradient: 'from-rose-500 via-red-500 to-pink-600',
      bgGradient: 'from-rose-50/80 via-red-50/60 to-pink-50/80',
      glowColor: 'shadow-rose-500/25',
      buttonText: 'Browse Diseases',
      onClick: goToDiseases,
      stats: 'Evidence-Based',
      badge: 'Comprehensive',
      tourId: 'diseases'
    }
  ];

  // Analytics cards with cardiology-specific metrics
  const analyticsCards = [
    {
      title: 'Active Cardiac Cases',
      value: '0',
      change: '+0%',
      icon: Heart,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      trend: 'up'
    },
    {
      title: 'Risk Calculations',
      value: '0',
      change: '+0%',
      icon: Activity,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      trend: 'up'
    },
    {
      title: 'AI Consultations',
      value: '0',
      change: '+0%',
      icon: Brain,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      trend: 'up'
    },
    {
      title: 'ECG Reviews',
      value: '0',
      change: '+0%',
      icon: Activity,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      trend: 'up'
    }
  ];

  return (
    <div className="min-h-screen bg-white relative">
      {/* Animated Background Elements - Removed */}

      {/* Modern Header Section */}
      <div className="relative">
        <div className="bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-lg shadow-gray-900/5">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex items-center justify-between">
              <div className="space-y-3">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 via-rose-500 to-pink-600 rounded-2xl shadow-xl flex items-center justify-center group hover:scale-105 transition-transform duration-300">
                    <Heart className="w-8 h-8 text-white group-hover:animate-pulse" />
                  </div>
                  <div>
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-red-900 to-rose-900 bg-clip-text text-transparent">
                      Cardiology Workspace
                    </h1>
                    <p className="text-xl text-gray-600 font-medium">
                      Advanced Cardiac Care Platform
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <p className="text-lg text-gray-700">
                    Welcome back, <span className="font-semibold text-red-700">{profile?.full_name || 'Dr. Lasha'}</span>
                  </p>
                  <div className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 rounded-full border border-green-200/50">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-green-700">Cardiac System Online</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setShowTour(true)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-white/60 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/80 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Take Tour
                </button>
                <div className="text-right">
                  <div className="text-sm text-gray-500">Current Time</div>
                  <div className="text-lg font-semibold text-gray-900">
                    {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
                <SpecialtyIndicator variant="badge" size="lg" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Dashboard Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-12">
        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {dashboardFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            const isHovered = hoveredCard === feature.id;
            
            return (
              <div
                key={feature.id}
                data-tour={feature.tourId}
                className={`group relative bg-white/70 backdrop-blur-xl rounded-3xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden animate-in slide-in-from-bottom-4 fade-in duration-700 ${isHovered ? feature.glowColor : ''}`}
                onMouseEnter={() => setHoveredCard(feature.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
              >
                {/* Gradient Background Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Card Content */}
                <div className="relative p-8 h-full flex flex-col">
                  {/* Header Section */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl shadow-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <span className={`px-3 py-1 bg-gradient-to-r ${feature.gradient} text-white text-xs font-bold rounded-full shadow-sm`}>
                        {feature.badge}
                      </span>
                      <span className="text-xs text-gray-500 font-medium">{feature.stats}</span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-sm font-medium text-gray-600 mt-1">
                        {feature.subtitle}
                      </p>
                    </div>
                    <p className="text-gray-600 leading-relaxed flex-1">
                      {feature.description}
                    </p>
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={feature.onClick}
                    className={`w-full mt-6 bg-gradient-to-r ${feature.gradient} text-white py-4 px-6 rounded-2xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 group/btn`}
                  >
                    <span>{feature.buttonText}</span>
                    <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Analytics Dashboard */}
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Cardiac Analytics Overview</h2>
              <p className="text-gray-600">Monitor your cardiology workflow and cardiac care metrics</p>
            </div>
            <div className="flex items-center space-x-3">
              <Activity className="w-6 h-6 text-red-600" />
              <span className="text-sm font-medium text-red-600">All cardiac systems operational</span>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {analyticsCards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={card.title}
                  className="bg-white/80 backdrop-blur-xl rounded-2xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 p-6 group hover:scale-105 animate-in slide-in-from-bottom-4 fade-in duration-700"
                  style={{
                    animationDelay: `${(index + 6) * 100}ms`,
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 ${card.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`w-6 h-6 ${card.color}`} />
                    </div>
                    <div className="flex items-center space-x-1 text-xs font-medium text-green-600">
                      <TrendingUp className="w-3 h-3" />
                      <span>{card.change}</span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-gray-900">{card.value}</div>
                    <div className="text-sm text-gray-600 font-medium">{card.title}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Cardiac Quick Actions Section */}
        <div className="mt-12 bg-white/60 backdrop-blur-xl rounded-3xl border border-white/20 shadow-xl p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Cardiac Quick Actions</h3>
              <p className="text-gray-600">Frequently used cardiology tools and shortcuts</p>
            </div>
            <HeartHandshake className="w-8 h-8 text-red-600" />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'New Cardiac Case', icon: Heart, color: 'from-red-500 to-rose-600' },
              { label: 'ASCVD Calculator', icon: Calculator, color: 'from-emerald-500 to-teal-600' },
              { label: 'AI Cardiac Consult', icon: Brain, color: 'from-blue-500 to-indigo-600' },
              { label: 'ECG Analysis', icon: Activity, color: 'from-orange-500 to-amber-600' }
            ].map((action, index) => {
              const IconComponent = action.icon;
              return (
                <button
                  key={action.label}
                  className={`p-4 bg-gradient-to-br ${action.color} text-white rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group`}
                >
                  <IconComponent className="w-6 h-6 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-sm font-semibold">{action.label}</div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Guided Tour */}
      <GuidedTour
        isOpen={showTour}
        onClose={() => setShowTour(false)}
        tourType="workspace"
      />
    </div>
  );
}; 