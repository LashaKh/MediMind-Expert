import React, { useState } from 'react';
import { useChat } from '../../contexts/ChatContext';
import { formatTimestampDetailed } from '../../utils/chat/messageUtils';
import { ConversationSummary } from '../../types/chat';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { useTranslation } from '../../hooks/useTranslation';
import { 
  MessageCircle, 
  Plus, 
  Search, 
  MoreVertical,
  Edit,
  Trash2,
  Heart,
  Brain,
  X
} from 'lucide-react';

interface ConversationListProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export const ConversationList: React.FC<ConversationListProps> = ({
  isOpen,
  onClose,
  className = ''
}) => {
  const { t, currentLanguage } = useTranslation();
  const {
    state,
    createNewConversation,
    setActiveConversation,
    deleteConversation,
    updateConversation,
    getConversationSummaries
  } = useChat();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState<'all' | 'cardiology' | 'obgyn'>('all');
  const [sortBy, setSortBy] = useState<'date' | 'name' | 'messages'>('date');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingTitle, setEditingTitle] = useState('');
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);

  const conversationSummaries = getConversationSummaries();

  // Filter and sort conversations
  const filteredConversations = conversationSummaries
    .filter(conv => {
      const matchesSearch = conv.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (conv.lastMessage && conv.lastMessage.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesSpecialty = selectedSpecialty === 'all' || conv.specialty === selectedSpecialty;
      
      return matchesSearch && matchesSpecialty;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.title.localeCompare(b.title);
        case 'messages':
          return b.messageCount - a.messageCount;
        case 'date':
        default:
          return b.updatedAt.getTime() - a.updatedAt.getTime();
      }
    });

  const handleCreateNew = () => {
    createNewConversation();
    onClose();
  };

  const handleSelectConversation = (conversationId: string) => {
    setActiveConversation(conversationId);
    onClose();
  };

  const handleStartEdit = (conv: ConversationSummary) => {
    setEditingId(conv.id);
    setEditingTitle(conv.title);
  };

  const handleSaveEdit = () => {
    if (editingId && editingTitle.trim()) {
      updateConversation(editingId, { title: editingTitle.trim() });
      setEditingId(null);
      setEditingTitle('');
    }
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditingTitle('');
  };

  const handleDeleteClick = (conversationId: string) => {
    setDeleteConfirmId(conversationId);
  };

  const handleConfirmDelete = () => {
    if (deleteConfirmId) {
      deleteConversation(deleteConfirmId);
      setDeleteConfirmId(null);
    }
  };

  const getSpecialtyIcon = (specialty: 'cardiology' | 'obgyn' | undefined) => {
    switch (specialty) {
      case 'cardiology':
        return <Heart className="w-3 h-3 text-red-500" />;
      case 'obgyn':
        return <Brain className="w-3 h-3 text-purple-500" />;
      default:
        return <MessageCircle className="w-3 h-3 text-gray-400" />;
    }
  };

  const getSpecialtyColor = (specialty: 'cardiology' | 'obgyn' | undefined) => {
    switch (specialty) {
      case 'cardiology':
        return 'bg-red-50 text-red-700 border-red-200';
      case 'obgyn':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 ${className}`} onClick={onClose} />
      
      <div className="fixed left-4 top-4 bottom-4 w-96 bg-white rounded-lg shadow-xl z-50 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">{t('conversations.title')}</h2>
            <div className="flex items-center gap-2">
              <Button
                onClick={handleCreateNew}
                size="sm"
                className="flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                {t('conversations.newChat')}
              </Button>
              <Button
                onClick={onClose}
                variant="ghost"
                size="sm"
                className="p-1"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Search */}
          <div className="relative mb-3">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder={t('conversations.searchPlaceholder')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Filters */}
          <div className="flex gap-2 mb-2">
            <select
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value as 'all' | 'cardiology' | 'obgyn')}
              className="flex-1 px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">{t('conversations.allSpecialties')}</option>
              <option value="cardiology">{t('conversations.cardiology')}</option>
              <option value="obgyn">{t('conversations.obgyn')}</option>
            </select>
            
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'date' | 'name' | 'messages')}
              className="flex-1 px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="date">{t('conversations.recent')}</option>
              <option value="name">{t('conversations.byName')}</option>
              <option value="messages">{t('conversations.byMessages')}</option>
            </select>
          </div>
        </div>

        {/* Conversation List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {filteredConversations.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <MessageCircle className="w-12 h-12 mx-auto mb-3 text-gray-300" />
              <p className="text-sm">{t('conversations.noConversationsFound')}</p>
              {searchTerm && (
                <p className="text-xs mt-1">{t('conversations.tryAdjustingSearchOrFilters')}</p>
              )}
            </div>
          ) : (
            filteredConversations.map((conv) => (
              <div
                key={conv.id}
                className={`group p-3 rounded-lg border cursor-pointer transition-all hover:shadow-sm ${
                  state.activeConversationId === conv.id
                    ? 'bg-blue-50 border-blue-200'
                    : 'bg-white border-gray-200 hover:bg-gray-50'
                }`}
                onClick={() => editingId !== conv.id && handleSelectConversation(conv.id)}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    {editingId === conv.id ? (
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={editingTitle}
                          onChange={(e) => setEditingTitle(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') handleSaveEdit();
                            if (e.key === 'Escape') handleCancelEdit();
                          }}
                          className="flex-1 px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                          autoFocus
                        />
                        <Button size="sm" onClick={handleSaveEdit}>{t('conversations.save')}</Button>
                        <Button size="sm" variant="outline" onClick={handleCancelEdit}>{t('conversations.cancel')}</Button>
                      </div>
                    ) : (
                      <>
                        <div className="flex items-center gap-2 mb-1">
                          {getSpecialtyIcon(conv.specialty)}
                          <h3 className="font-medium text-sm text-gray-900 truncate">
                            {conv.title}
                          </h3>
                        </div>
                        
                        {conv.lastMessage && (
                          <p className="text-xs text-gray-600 line-clamp-2 mb-2">
                            {conv.lastMessage}
                          </p>
                        )}
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Badge variant="secondary" className="text-xs">
                              {conv.messageCount} {conv.messageCount !== 1 ? t('conversations.messages') : t('conversations.message')}
                            </Badge>
                            {conv.specialty && (
                              <Badge className={`text-xs ${getSpecialtyColor(conv.specialty)}`}>
                                {conv.specialty}
                              </Badge>
                            )}
                          </div>
                          
                          <span className="text-xs text-gray-500">
                            {formatTimestampDetailed(conv.updatedAt, 'relative')}
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                  
                  {editingId !== conv.id && (
                    <div className="relative">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="opacity-0 group-hover:opacity-100 transition-opacity p-1"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleStartEdit(conv);
                        }}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Stats */}
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <div className="text-xs text-gray-600 text-center">
            {conversationSummaries.length} {conversationSummaries.length !== 1 ? t('conversations.conversations') : t('conversations.conversation')} • {' '}
            {conversationSummaries.reduce((total, conv) => total + conv.messageCount, 0)} {t('conversations.totalMessages')}
          </div>
        </div>
      </div>

      {/* Delete Confirmation Dialog */}
      {deleteConfirmId && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-60 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-md mx-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('conversations.deleteConversation')}</h3>
            <p className="text-gray-600 mb-4">
              {t('conversations.deleteConfirmation')}
            </p>
            <div className="flex gap-2 justify-end">
              <Button variant="outline" onClick={() => setDeleteConfirmId(null)}>{t('conversations.cancel')}</Button>
              <Button 
                onClick={handleConfirmDelete}
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                {t('conversations.delete')}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}; 