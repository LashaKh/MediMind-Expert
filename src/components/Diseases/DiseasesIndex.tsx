import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Heart, 
  Activity, 
  AlertTriangle, 
  Clock, 
  BookOpen, 
  User,
  Calendar,
  ChevronRight,
  Tag,
  TrendingUp,
  Grid3X3,
  List,
  SortAsc,
  SortDesc,
  Eye,
  Bookmark,
  Share2,
  Download,
  ArrowUpDown,
  Zap,
  Shield,
  Users,
  BarChart3,
  Sparkles,
  Star,
  Award,
  Database,
  Stethoscope,
  Brain,
  Target,
  Layers,
  Lightbulb,
  Globe,
  CheckCircle2,
  Info,
  ArrowRight,
  ChevronDown,
  X,
  Plus
} from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';
import { getAllDiseases, searchDiseases } from './registry';
import { DiseaseIndexItem } from './types';

const categories = [
  { id: 'all', name: 'All Categories', icon: Database, color: 'text-slate-600' },
  { id: 'cardiomyopathy', name: 'Cardiomyopathy', icon: Heart, color: 'text-red-600' },
  { id: 'electrophysiology', name: 'Electrophysiology', icon: Zap, color: 'text-yellow-600' },
  { id: 'heart-failure', name: 'Heart Failure', icon: Activity, color: 'text-blue-600' },
  { id: 'interventional', name: 'Interventional Cardiology', icon: Target, color: 'text-green-600' },
  { id: 'preventive', name: 'Preventive Cardiology', icon: Shield, color: 'text-purple-600' },
  { id: 'valvular', name: 'Valvular Heart Disease', icon: Layers, color: 'text-indigo-600' },
  { id: 'vascular', name: 'Vascular Cardiology', icon: Globe, color: 'text-teal-600' },
  { id: 'toxicology', name: 'Toxicology', icon: AlertTriangle, color: 'text-orange-600' },
  { id: 'emergency', name: 'Emergency Cardiology', icon: Stethoscope, color: 'text-pink-600' }
];

const sortOptions = [
  { id: 'relevance', name: 'Relevance', icon: Sparkles },
  { id: 'alphabetical', name: 'Alphabetical', icon: SortAsc },
  { id: 'severity', name: 'Severity', icon: AlertTriangle },
  { id: 'updated', name: 'Recently Updated', icon: Calendar },
  { id: 'readtime', name: 'Read Time', icon: Clock }
];

const viewModes = [
  { id: 'grid', name: 'Grid View', icon: Grid3X3 },
  { id: 'list', name: 'List View', icon: List }
];

export const DiseasesIndex: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  // State management
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSeverity, setSelectedSeverity] = useState<string>('all');
  const [sortBy, setSortBy] = useState('relevance');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [bookmarkedDiseases, setBookmarkedDiseases] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set());

  // Get all diseases from registry
  const allDiseases = getAllDiseases();

  // Extract unique tags for filtering
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    allDiseases.forEach(disease => {
      disease.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, [allDiseases]);

  // Advanced filtering and sorting
  const filteredAndSortedDiseases = useMemo(() => {
    let filtered = allDiseases.filter((disease: DiseaseIndexItem) => {
      const matchesSearch = searchTerm === '' || (
        disease.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        disease.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        disease.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      
      const matchesCategory = selectedCategory === 'all' || 
        disease.category.toLowerCase().replace(/\s+/g, '-').includes(selectedCategory) ||
        selectedCategory === 'emergency' && disease.category.includes('Emergency') ||
        selectedCategory === 'toxicology' && disease.category.includes('Toxicology');
      
      const matchesSeverity = selectedSeverity === 'all' || disease.severity === selectedSeverity;
      
      const matchesTags = selectedTags.size === 0 || 
        Array.from(selectedTags).some(tag => disease.tags.includes(tag));
      
      return matchesSearch && matchesCategory && matchesSeverity && matchesTags;
    });

    // Sort filtered results
    switch (sortBy) {
      case 'alphabetical':
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'severity':
        const severityOrder = { 'high': 3, 'medium': 2, 'low': 1 };
        filtered.sort((a, b) => severityOrder[b.severity] - severityOrder[a.severity]);
        break;
      case 'updated':
        filtered.sort((a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime());
        break;
      case 'readtime':
        filtered.sort((a, b) => parseInt(a.readTime) - parseInt(b.readTime));
        break;
      default: // relevance
        break;
    }

    return filtered;
  }, [allDiseases, searchTerm, selectedCategory, selectedSeverity, sortBy, selectedTags]);

  // Simulate loading effect
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const getSeverityConfig = (severity: string) => {
    switch (severity) {
      case 'high': 
        return { 
          color: 'bg-gradient-to-r from-red-500 to-red-600 text-white', 
          icon: AlertTriangle, 
          label: 'Critical',
          ring: 'ring-red-200'
        };
      case 'medium': 
        return { 
          color: 'bg-gradient-to-r from-amber-500 to-orange-500 text-white', 
          icon: Activity, 
          label: 'Moderate',
          ring: 'ring-amber-200'
        };
      case 'low': 
        return { 
          color: 'bg-gradient-to-r from-emerald-500 to-green-500 text-white', 
          icon: CheckCircle2, 
          label: 'Stable',
          ring: 'ring-emerald-200'
        };
      default: 
        return { 
          color: 'bg-gradient-to-r from-slate-500 to-gray-500 text-white', 
          icon: Info, 
          label: 'Unknown',
          ring: 'ring-slate-200'
        };
    }
  };

  const toggleBookmark = (diseaseId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setBookmarkedDiseases(prev => {
      const newSet = new Set(prev);
      if (newSet.has(diseaseId)) {
        newSet.delete(diseaseId);
      } else {
        newSet.add(diseaseId);
      }
      return newSet;
    });
  };

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => {
      const newSet = new Set(prev);
      if (newSet.has(tag)) {
        newSet.delete(tag);
      } else {
        newSet.add(tag);
      }
      return newSet;
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="w-20 h-20 border-4 border-blue-200 rounded-full animate-spin border-t-blue-600 mx-auto mb-4"></div>
            <Heart className="w-8 h-8 text-blue-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Loading Disease Database</h2>
          <p className="text-gray-600">Preparing comprehensive medical information...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
      {/* Hero Header */}
      <div className="relative bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute top-20 -left-10 w-60 h-60 bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-20 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <Stethoscope className="w-12 h-12 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Cardiology Disease
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                Database
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
              Comprehensive, evidence-based cardiovascular medicine resource with the latest clinical guidelines, 
              diagnostic protocols, and treatment recommendations from leading medical societies.
            </p>

            <div className="flex items-center justify-center space-x-8 text-blue-200">
              <div className="flex items-center space-x-2">
                <Database className="w-5 h-5" />
                <span className="text-sm font-medium">{allDiseases.length} Diseases</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5" />
                <span className="text-sm font-medium">Evidence-Based</span>
              </div>
              <div className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5" />
                <span className="text-sm font-medium">Latest Guidelines</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Advanced Search and Filters */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-white/50 shadow-2xl p-8 mb-12 -mt-20 relative z-10">
          {/* Main Search */}
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
              <input
                type="text"
                placeholder="Search diseases, symptoms, treatments, or medical conditions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-16 pr-6 py-5 text-lg border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/80 backdrop-blur-sm"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-6 top-1/2 transform -translate-y-1/2 p-1 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <X className="w-5 h-5 text-gray-400" />
                </button>
              )}
            </div>
          </div>

          {/* Filter Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  showFilters 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Filter className="w-5 h-5" />
                <span>Filters</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
              </button>

              {(selectedTags.size > 0 || selectedCategory !== 'all' || selectedSeverity !== 'all') && (
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">Active filters:</span>
                  <div className="flex items-center space-x-2">
                    {selectedCategory !== 'all' && (
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm flex items-center space-x-1">
                        <span>{categories.find(c => c.id === selectedCategory)?.name}</span>
                        <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedCategory('all')} />
                      </span>
                    )}
                    {selectedSeverity !== 'all' && (
                      <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm flex items-center space-x-1">
                        <span className="capitalize">{selectedSeverity}</span>
                        <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedSeverity('all')} />
                      </span>
                    )}
                    {Array.from(selectedTags).map(tag => (
                      <span key={tag} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm flex items-center space-x-1">
                        <span>{tag}</span>
                        <X className="w-3 h-3 cursor-pointer" onClick={() => toggleTag(tag)} />
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center space-x-4">
              {/* View Mode Toggle */}
              <div className="flex items-center bg-gray-100 rounded-xl p-1">
                {viewModes.map(mode => {
                  const Icon = mode.icon;
                  return (
                    <button
                      key={mode.id}
                      onClick={() => setViewMode(mode.id as 'grid' | 'list')}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                        viewMode === mode.id
                          ? 'bg-white text-blue-600 shadow-sm'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                      title={mode.name}
                    >
                      <Icon className="w-4 h-4" />
                    </button>
                  );
                })}
              </div>

              {/* Sort Dropdown */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/80 backdrop-blur-sm font-medium"
              >
                {sortOptions.map(option => (
                  <option key={option.id} value={option.id}>{option.name}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Expanded Filters */}
          {showFilters && (
            <div className="border-t border-gray-200 pt-6 space-y-6">
              {/* Categories */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Tag className="w-5 h-5 mr-2 text-blue-600" />
                  Categories
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                  {categories.map(category => {
                    const Icon = category.icon;
                    return (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`flex items-center space-x-3 p-4 rounded-xl border-2 transition-all duration-300 ${
                          selectedCategory === category.id
                            ? 'border-blue-500 bg-blue-50 text-blue-700'
                            : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        <Icon className={`w-5 h-5 ${selectedCategory === category.id ? 'text-blue-600' : category.color}`} />
                        <span className="text-sm font-medium">{category.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Severity Levels */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2 text-orange-600" />
                  Severity Levels
                </h3>
                <div className="flex flex-wrap gap-3">
                  {['all', 'high', 'medium', 'low'].map(severity => {
                    const config = getSeverityConfig(severity);
                    const Icon = config.icon;
                    return (
                      <button
                        key={severity}
                        onClick={() => setSelectedSeverity(severity)}
                        className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                          selectedSeverity === severity
                            ? `${config.color} shadow-lg ring-4 ${config.ring}`
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span className="capitalize">{severity === 'all' ? 'All Levels' : config.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Popular Tags */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Sparkles className="w-5 h-5 mr-2 text-purple-600" />
                  Popular Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {allTags.slice(0, 20).map(tag => (
                    <button
                      key={tag}
                      onClick={() => toggleTag(tag)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                        selectedTags.has(tag)
                          ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/25'
                          : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results Summary */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <h2 className="text-2xl font-bold text-gray-900">
              {filteredAndSortedDiseases.length} {filteredAndSortedDiseases.length === 1 ? 'Disease' : 'Diseases'}
            </h2>
            <div className="h-6 w-px bg-gray-300"></div>
            <p className="text-gray-600">
              {searchTerm ? `Results for "${searchTerm}"` : 'All cardiovascular conditions'}
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors">
              <Download className="w-4 h-4" />
              <span className="text-sm font-medium">Export</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors">
              <Share2 className="w-4 h-4" />
              <span className="text-sm font-medium">Share</span>
            </button>
          </div>
        </div>

        {/* Disease Cards */}
        {filteredAndSortedDiseases.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">No diseases found</h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Try adjusting your search terms or filters to find the cardiovascular conditions you're looking for.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedSeverity('all');
                setSelectedTags(new Set());
              }}
              className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-medium"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className={
            viewMode === 'grid' 
              ? 'grid grid-cols-1 lg:grid-cols-2 gap-8' 
              : 'space-y-6'
          }>
            {filteredAndSortedDiseases.map((disease) => {
              const severityConfig = getSeverityConfig(disease.severity);
              const SeverityIcon = severityConfig.icon;
              
              return (
                <div
                  key={disease.id}
                  className="group bg-white/80 backdrop-blur-xl rounded-3xl border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden hover:-translate-y-1"
                  onClick={() => navigate(`/diseases/${disease.id}`)}
                >
                  <div className="p-8">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-3">
                          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                            {disease.title}
                          </h3>
                          <div className={`px-3 py-1 text-xs font-bold rounded-full flex items-center space-x-1 ${severityConfig.color} shadow-lg`}>
                            <SeverityIcon className="w-3 h-3" />
                            <span>{severityConfig.label}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-6 text-sm text-gray-600 mb-4">
                          <div className="flex items-center space-x-2">
                            <Tag className="w-4 h-4 text-blue-500" />
                            <span className="font-medium">{disease.category}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4 text-green-500" />
                            <span>Updated {disease.lastUpdated}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4 text-purple-500" />
                            <span>{disease.readTime} read</span>
                          </div>
                          {disease.prevalence && (
                            <div className="flex items-center space-x-2">
                              <BarChart3 className="w-4 h-4 text-orange-500" />
                              <span>{disease.prevalence}</span>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2 ml-4">
                        <button
                          onClick={(e) => toggleBookmark(disease.id, e)}
                          className={`p-3 rounded-xl transition-all duration-300 ${
                            bookmarkedDiseases.has(disease.id)
                              ? 'bg-yellow-100 text-yellow-600 hover:bg-yellow-200'
                              : 'bg-gray-100 text-gray-400 hover:bg-gray-200 hover:text-gray-600'
                          }`}
                          title={bookmarkedDiseases.has(disease.id) ? 'Remove bookmark' : 'Add bookmark'}
                        >
                          <Bookmark className={`w-5 h-5 ${bookmarkedDiseases.has(disease.id) ? 'fill-current' : ''}`} />
                        </button>
                        <div className="p-3 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition-colors">
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                      {disease.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {disease.tags.slice(0, 6).map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-sm font-medium bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full border border-indigo-200/50 hover:from-indigo-200 hover:to-purple-200 transition-all duration-200"
                        >
                          {tag}
                        </span>
                      ))}
                      {disease.tags.length > 6 && (
                        <span className="px-3 py-1 text-sm font-medium bg-gray-100 text-gray-600 rounded-full">
                          +{disease.tags.length - 6} more
                        </span>
                      )}
                    </div>

                    {/* Action Bar */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>Clinical Guidelines</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <BookOpen className="w-4 h-4" />
                          <span>Evidence-Based</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Award className="w-4 h-4" />
                          <span>Latest Research</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                        <span className="mr-2">Read More</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/0 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"></div>
                </div>
              );
            })}
          </div>
        )}

        {/* Load More / Pagination (if needed for large datasets) */}
        {filteredAndSortedDiseases.length > 0 && (
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-4 text-gray-600">
              <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent w-20"></div>
              <span className="text-sm font-medium">End of results</span>
              <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent w-20"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}; 