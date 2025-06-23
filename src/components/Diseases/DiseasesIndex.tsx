import React, { useState } from 'react';
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
  TrendingUp
} from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';
import { getAllDiseases, searchDiseases } from './registry';
import { DiseaseIndexItem } from './types';


const categories = [
  'All Categories',
  'Cardiomyopathy',
  'Electrophysiology',
  'Heart Failure',
  'Interventional Cardiology',
  'Preventive Cardiology',
  'Valvular Heart Disease',
  'Vascular Cardiology'
];

export const DiseasesIndex: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedSeverity, setSelectedSeverity] = useState<string>('all');

  // Get all diseases from registry
  const allDiseases = getAllDiseases();
  
  const filteredDiseases = allDiseases.filter((disease: DiseaseIndexItem) => {
    const matchesSearch = searchTerm === '' || (
      disease.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      disease.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      disease.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    
    const matchesCategory = selectedCategory === 'All Categories' || disease.category === selectedCategory;
    const matchesSeverity = selectedSeverity === 'all' || disease.severity === selectedSeverity;
    
    return matchesSearch && matchesCategory && matchesSeverity;
  });

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'high': return <AlertTriangle className="w-4 h-4" />;
      case 'medium': return <Activity className="w-4 h-4" />;
      case 'low': return <Heart className="w-4 h-4" />;
      default: return <Heart className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-lg border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Cardiology Disease Database
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive, evidence-based information on cardiovascular diseases with the latest clinical guidelines and management protocols.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/50 shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0 lg:space-x-6">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search diseases, symptoms, or treatments..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                />
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm bg-white"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>

              <select
                value={selectedSeverity}
                onChange={(e) => setSelectedSeverity(e.target.value)}
                className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm bg-white"
              >
                <option value="all">All Severity Levels</option>
                <option value="high">High Severity</option>
                <option value="medium">Medium Severity</option>
                <option value="low">Low Severity</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Summary */}
        <div className="mb-6">
          <p className="text-sm text-gray-600">
            Showing {filteredDiseases.length} of {allDiseases.length} diseases
          </p>
        </div>

        {/* Disease Cards */}
        <div className="grid gap-6">
          {filteredDiseases.map((disease) => (
            <div
              key={disease.id}
              className="bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/50 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer group"
              onClick={() => navigate(`/diseases/${disease.id}`)}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                        {disease.title}
                      </h3>
                      <div className={`px-2 py-1 text-xs font-medium rounded border flex items-center space-x-1 ${getSeverityColor(disease.severity)}`}>
                        {getSeverityIcon(disease.severity)}
                        <span className="capitalize">{disease.severity}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-6 text-sm text-gray-600 mb-3">
                      <div className="flex items-center space-x-1">
                        <Tag className="w-4 h-4" />
                        <span>{disease.category}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>Updated {disease.lastUpdated}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{disease.readTime} read</span>
                      </div>
                      {disease.prevalence && (
                        <div className="flex items-center space-x-1">
                          <TrendingUp className="w-4 h-4" />
                          <span>{disease.prevalence}</span>
                        </div>
                      )}
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {disease.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {disease.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-700 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 transition-colors ml-4 flex-shrink-0" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredDiseases.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No diseases found</h3>
            <p className="text-gray-600">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
          </div>
        )}

        {/* Coming Soon */}
        <div className="mt-12 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl border border-indigo-200/50 p-8 text-center">
          <div className="max-w-md mx-auto">
            <Heart className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">More Diseases Coming Soon</h3>
            <p className="text-gray-600 mb-4">
              We're continuously expanding our database with comprehensive information on cardiovascular diseases. Check back soon for updates.
            </p>
            <div className="text-sm text-indigo-600 font-medium">
              Next updates expected: Coronary Artery Disease, Heart Failure, Hypertrophic Cardiomyopathy
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 