import React, { useState, useMemo } from 'react';
import { X, FileText, Search, Calendar, Filter } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { PatientCase } from '../../types/chat';
import { useTranslation } from '../../hooks/useTranslation';

interface CaseListModalProps {
  isOpen: boolean;
  onClose: () => void;
  cases: PatientCase[];
  onCaseSelect: (caseItem: PatientCase) => void;
  activeCase?: PatientCase | null;
  className?: string;
}

export const CaseListModal: React.FC<CaseListModalProps> = ({
  isOpen,
  onClose,
  cases,
  onCaseSelect,
  activeCase,
  className = ''
}) => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<'all' | 'active' | 'archived'>('all');
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'title'>('newest');

  // Filter and sort cases
  const filteredAndSortedCases = useMemo(() => {
    let filtered = cases;

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(caseItem =>
        caseItem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        caseItem.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        caseItem.metadata?.tags?.some(tag => 
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    // Apply status filter
    if (filter !== 'all') {
      filtered = filtered.filter(caseItem => caseItem.status === filter);
    }

    // Apply sorting
    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        case 'oldest':
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        case 'title':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });
  }, [cases, searchTerm, filter, sortBy]);

  const handleCaseClick = (caseItem: PatientCase) => {
    onCaseSelect(caseItem);
    onClose();
  };

  const getComplexityColor = (complexity: 'low' | 'medium' | 'high') => {
    switch (complexity) {
      case 'low':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'high':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Modal Overlay */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 ${className}`} 
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl bg-white rounded-lg shadow-xl z-50 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <FileText className="w-6 h-6 text-primary" />
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Case Library
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  {cases.length} {cases.length === 1 ? 'case' : 'cases'} total
                </p>
              </div>
            </div>
            <Button
              onClick={onClose}
              variant="ghost"
              size="sm"
              className="p-2"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
          
          {/* Search and Filters */}
          <div className="mt-4 space-y-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search cases by title, description, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            
            {/* Filters */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-700">Status:</span>
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value as any)}
                  className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                >
                  <option value="all">{t('case.all')}</option>
                  <option value="active">{t('case.active')}</option>
                  <option value="archived">{t('case.archived')}</option>
                </select>
              </div>
              
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-700">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                >
                  <option value="newest">{t('case.newestFirst')}</option>
                  <option value="oldest">{t('case.oldestFirst')}</option>
                  <option value="title">{t('case.alphabetical')}</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Cases List */}
        <div className="flex-1 overflow-y-auto p-6">
          {filteredAndSortedCases.length === 0 ? (
            <div className="text-center py-12">
              <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {searchTerm || filter !== 'all' ? t('case.noCasesFound') : t('case.noCasesYet')}
              </h3>
              <p className="text-gray-500">
                {searchTerm || filter !== 'all' 
                  ? t('case.adjustFilters')
                  : t('case.createFirstCase')
                }
              </p>
            </div>
          ) : (
            <div className="grid gap-4">
              {filteredAndSortedCases.map((caseItem) => (
                <div
                  key={caseItem.id}
                  onClick={() => handleCaseClick(caseItem)}
                  className={`border rounded-lg p-4 cursor-pointer transition-all hover:shadow-md ${
                    activeCase?.id === caseItem.id 
                      ? 'border-primary bg-primary/5 ring-2 ring-primary/20' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-medium text-gray-900">
                          {caseItem.title}
                        </h3>
                        {activeCase?.id === caseItem.id && (
                          <Badge variant="outline" className="text-xs bg-primary/10 text-primary border-primary/30">
                            Active
                          </Badge>
                        )}
                        {caseItem.metadata?.complexity && (
                          <Badge 
                            variant="outline" 
                            className={`text-xs ${getComplexityColor(caseItem.metadata.complexity)}`}
                          >
                            {caseItem.metadata.complexity}
                          </Badge>
                        )}
                      </div>
                      
                      <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                        {caseItem.description}
                      </p>
                      
                      {caseItem.metadata?.tags && caseItem.metadata.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-3">
                          {caseItem.metadata.tags.slice(0, 4).map((tag, index) => (
                            <Badge 
                              key={index} 
                              variant="outline" 
                              className="text-xs bg-gray-100 text-gray-700 border-gray-300"
                            >
                              {tag}
                            </Badge>
                          ))}
                          {caseItem.metadata.tags.length > 4 && (
                            <Badge 
                              variant="outline" 
                              className="text-xs bg-gray-100 text-gray-700 border-gray-300"
                            >
                              +{caseItem.metadata.tags.length - 4}
                            </Badge>
                          )}
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>Created {caseItem.createdAt.toLocaleDateString()}</span>
                        {caseItem.specialty && (
                          <span className="capitalize">{caseItem.specialty}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}; 