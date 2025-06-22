import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  Clock,
  Calendar,
  Tag,
  AlertTriangle,
  Activity,
  BookOpen,
  Heart,
  ExternalLink,
  Search,
  BookmarkPlus,
  Share,
  Printer,
  Share2,
  FileText,
  AlertCircle,
  BarChart3
} from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';
import { Button } from '../../components/ui/button';
import { getDiseaseData } from './registry';
import { DiseaseData, GuidelineSection, GuidelineContent, GuidelineSubsection, Reference } from './types';

export const DiseasePage: React.FC = () => {
  const { diseaseId } = useParams<{ diseaseId: string }>();
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSection, setActiveSection] = useState<string>('background');
  
  // List of sections that should be expanded by default (so content is visible)
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
    'follow-up-surveillance'
  ];
  
  const [expandedSections, setExpandedSections] = useState<string[]>(expandedSectionsList);
  const [expandedSubsections, setExpandedSubsections] = useState<string[]>([]);

  // Get disease data
  const diseaseData = getDiseaseData(diseaseId || '');

  // Filter sections based on search term
  const filteredSections = diseaseData?.content.guidelines.sections.filter((section: GuidelineSection) =>
    section.title.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

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

  if (!diseaseData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Disease Not Found</h1>
          <p className="text-gray-600 mb-6">The requested disease information could not be found.</p>
          <Button onClick={() => navigate('/diseases')} variant="outline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Diseases
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar Navigation */}
          <div className="w-80 flex-shrink-0">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg sticky top-8 max-h-[calc(100vh-4rem)] overflow-y-auto">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contents</h3>
                
                {/* Search */}
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search sections..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {/* Navigation Links */}
                <nav className="space-y-2">
                  <a 
                    href="#background" 
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    Background
                  </a>
                  <a 
                    href="#clinical-findings" 
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    Clinical Findings
                  </a>
                  <a 
                    href="#studies" 
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    Studies
                  </a>
                  <a 
                    href="#guidelines" 
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    Guidelines
                  </a>
                  
                  {filteredSections.map((section: GuidelineSection) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="block px-6 py-1 text-sm text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors border-l-2 border-gray-200 ml-3"
                    >
                      {section.title}
                    </a>
                  ))}
                  
                  <a 
                    href="#references" 
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    References
                  </a>
                </nav>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg">
              {/* Header */}
              <div className="px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900">{diseaseData.title}</h1>
                    <p className="text-gray-600 mt-1">
                      Last updated: {diseaseData.lastUpdated} • {diseaseData.category}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Printer className="h-4 w-4 mr-2" />
                      Print
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="px-6 py-6">
                {/* Background Section */}
                <section id="background" className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <FileText className="h-6 w-6 mr-2 text-blue-600" />
                    Background
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Overview</h3>
                      <div className="space-y-4 text-gray-700">
                        <div>
                          <h4 className="font-medium text-gray-900 mb-1">Definition</h4>
                          <p>{diseaseData.content.background.overview.definition}</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-1">Pathophysiology</h4>
                          <p>{diseaseData.content.background.overview.pathophysiology}</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-1">Epidemiology</h4>
                          <p>{diseaseData.content.background.overview.epidemiology}</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-1">Disease Course</h4>
                          <p>{diseaseData.content.background.overview.diseaseCourse}</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-1">Prognosis and Risk of Recurrence</h4>
                          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                            <div className="flex items-center">
                              <AlertCircle className="h-5 w-5 text-red-600 mr-2" />
                              <span className="font-medium text-red-800">Critical Information:</span>
                            </div>
                            <p className="text-red-700 mt-1">{diseaseData.content.background.overview.prognosis}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Clinical Findings Section */}
                {diseaseData.content.clinicalFindings && (
                  <section id="clinical-findings" className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <Activity className="h-6 w-6 mr-2 text-green-600" />
                      Clinical Findings
                    </h2>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Patient Demographics</h3>
                        <div className="flex flex-wrap gap-2">
                          {diseaseData.content.clinicalFindings.patientDemographics.map((demo, index) => (
                            <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                              {demo}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Past Medical History</h3>
                        <div className="flex flex-wrap gap-2">
                          {diseaseData.content.clinicalFindings.pastMedicalHistory.map((history, index) => (
                            <span key={index} className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">
                              {history}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Symptoms</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                          {diseaseData.content.clinicalFindings.symptoms.map((symptom, index) => (
                            <span key={index} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-lg text-sm">
                              {symptom}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Likelihood Ratios</h3>
                        <p className="text-gray-600 mb-3">The following findings increase the probability of this condition in adults.</p>
                        <div className="bg-gray-50 rounded-lg overflow-hidden">
                          <table className="w-full">
                            <thead className="bg-gray-100">
                              <tr>
                                <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Finding</th>
                                <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">LR+</th>
                                <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Value</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                              {diseaseData.content.clinicalFindings.likelihoodRatios.map((ratio, index) => (
                                <tr key={index}>
                                  <td className="px-4 py-3 text-sm text-gray-900">{ratio.finding}</td>
                                  <td className="px-4 py-3 text-sm font-semibold text-blue-600">{ratio.lrPlus}</td>
                                  <td className="px-4 py-3 text-sm text-gray-600">{ratio.value}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </section>
                )}

                {/* Studies Section */}
                {diseaseData.content.studies && (
                  <section id="studies" className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <BarChart3 className="h-6 w-6 mr-2 text-purple-600" />
                      Studies
                    </h2>
                    
                    <div className="space-y-4">
                      {diseaseData.content.studies.map((study, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-6">
                          <div className="flex items-start justify-between mb-3">
                            <h3 className="text-lg font-semibold text-gray-900">{study.year} • {study.title}</h3>
                          </div>
                          <p className="text-gray-700 mb-3">{study.description}</p>
                          <div className="text-sm text-gray-600">
                            <span className="font-medium">{study.authors}</span> {study.journal}
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* Guidelines Section */}
                <section id="guidelines" className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <BookOpen className="h-6 w-6 mr-2 text-blue-600" />
                    Guidelines
                  </h2>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                    <h3 className="font-semibold text-blue-900 mb-2">Key Sources</h3>
                    <p className="text-blue-800 text-sm">{diseaseData.content.guidelines.keySources}</p>
                  </div>

                  <div className="space-y-6">
                    {filteredSections.map((section: GuidelineSection) => (
                      <div key={section.id} id={section.id} className="border border-gray-200 rounded-lg overflow-hidden">
                        <button
                          onClick={() => toggleSection(section.id)}
                          className="w-full px-6 py-4 bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                        >
                          <h3 className="text-lg font-semibold text-gray-900">{section.title}</h3>
                          {expandedSections.includes(section.id) ? (
                            <ChevronUp className="h-5 w-5 text-gray-500" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-gray-500" />
                          )}
                        </button>
                        
                        {expandedSections.includes(section.id) && (
                          <div className="px-6 py-4 space-y-4">
                            {section.content.map((content: GuidelineContent, contentIndex: number) => (
                              <div key={contentIndex}>
                                <div className="flex items-start gap-3 mb-3">
                                  <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-semibold ${
                                    content.level === 'A' ? 'bg-green-100 text-green-800' :
                                    content.level === 'B' ? 'bg-blue-100 text-blue-800' :
                                    content.level === 'C' ? 'bg-yellow-100 text-yellow-800' :
                                    content.level === 'D' ? 'bg-red-100 text-red-800' :
                                    content.level === 'I' ? 'bg-gray-100 text-gray-800' :
                                    'bg-gray-100 text-gray-800'
                                  }`}>
                                    {content.level}
                                  </span>
                                  <div className="flex-1">
                                    <p className="text-gray-900 font-medium">{content.statement}</p>
                                    <p className="text-sm text-gray-600 mt-1">{content.source}</p>
                                  </div>
                                </div>
                                
                                {content.subsections && content.subsections.map((subsection: GuidelineSubsection, subIndex: number) => (
                                  <div key={subIndex} className="ml-6 mt-4 border-l-2 border-gray-200 pl-4">
                                    <h4 className="font-semibold text-gray-800 mb-2">{subsection.title}</h4>
                                    {subsection.content && subsection.content.map((subContent: GuidelineContent, subContentIndex: number) => (
                                      <div key={subContentIndex} className="mb-3">
                                        <div className="flex items-start gap-2">
                                          <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-semibold ${
                                            subContent.level === 'A' ? 'bg-green-100 text-green-800' :
                                            subContent.level === 'B' ? 'bg-blue-100 text-blue-800' :
                                            subContent.level === 'C' ? 'bg-yellow-100 text-yellow-800' :
                                            subContent.level === 'D' ? 'bg-red-100 text-red-800' :
                                            subContent.level === 'I' ? 'bg-gray-100 text-gray-800' :
                                            'bg-gray-100 text-gray-800'
                                          }`}>
                                            {subContent.level}
                                          </span>
                                          <div className="flex-1">
                                            <p className="text-gray-700">{subContent.statement}</p>
                                            <p className="text-sm text-gray-500 mt-1">{subContent.source}</p>
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                ))}
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
                  <section id="references" className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <BookOpen className="h-6 w-6 mr-2 text-gray-600" />
                      References
                    </h2>
                    
                    <div className="space-y-3">
                      {diseaseData.content.references.map((reference: Reference) => (
                        <div key={reference.id} className="bg-gray-50 rounded-lg p-4">
                          <div className="flex items-start gap-3">
                            <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-semibold">
                              {reference.id}
                            </span>
                            <div className="flex-1">
                              <p className="text-gray-900 font-medium mb-1">
                                {reference.authors} ({reference.year}). {reference.title}
                              </p>
                              <p className="text-gray-600 text-sm">{reference.journal}</p>
                              {reference.link && (
                                <a 
                                  href={reference.link} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm mt-2"
                                >
                                  <ExternalLink className="h-3 w-3" />
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
      </div>
    </div>
  );
}; 