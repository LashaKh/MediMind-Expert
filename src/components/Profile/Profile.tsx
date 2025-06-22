import React, { useState, useEffect } from 'react';
import { User, Save, Edit, X, Lock, Settings, Calendar, Badge, Award, Briefcase, Star, TrendingUp, Activity, MapPin, Phone, Mail, Clock, Users, BookOpen, Shield } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';
import { useAuth } from '../../contexts/AuthContext';
import { supabase } from '../../lib/supabase';
import { ChangePasswordForm } from './ChangePasswordForm';
import { ProfilePictureUpload } from './ProfilePictureUpload';
import type { Database } from '../../types/supabase';

type UserProfile = Database['public']['Tables']['users']['Row'];

type ProfileTab = 'profile' | 'security' | 'preferences';

export const Profile: React.FC = () => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [activeTab, setActiveTab] = useState<ProfileTab>('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    full_name: '',
    medical_specialty: '',
    about_me_context: ''
  });

  const medicalSpecialties = [
    { value: '', label: t('profile.selectSpecialty') },
    { value: 'cardiology', label: t('profile.cardiology') },
    { value: 'ob-gyn', label: t('profile.obgyn') },
    { value: 'internal-medicine', label: t('profile.internalMedicine') },
    { value: 'emergency-medicine', label: t('profile.emergencyMedicine') },
    { value: 'pediatrics', label: t('profile.pediatrics') },
    { value: 'surgery', label: t('profile.surgery') },
    { value: 'family-medicine', label: t('profile.familyMedicine') },
    { value: 'psychiatry', label: t('profile.psychiatry') },
    { value: 'radiology', label: t('profile.radiology') },
    { value: 'anesthesiology', label: t('profile.anesthesiology') },
    { value: 'other', label: t('profile.other') }
  ];

  useEffect(() => {
    if (user) {
      fetchProfile();
    }
  }, [user]);

  const fetchProfile = async () => {
    try {
      setIsLoading(true);
      
      if (!user?.id) {
        throw new Error('User not authenticated');
      }

      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (error) throw error;

      setProfile(data);
      setFormData({
        full_name: data.full_name || '',
        medical_specialty: data.medical_specialty || '',
        about_me_context: data.about_me_context || ''
      });
    } catch (error) {
      console.error('Error fetching profile:', error);
      setError('Failed to load profile information');
    } finally {
      setIsLoading(false);
    }
  };

  const validateForm = () => {
    if (formData.full_name && formData.full_name.trim().length < 2) {
      setError(t('profile.nameMinLength'));
      return false;
    }
    return true;
  };

  const handleSave = async () => {
    try {
      setIsSaving(true);
      setError(null);
      setSuccess(null);

      if (!validateForm()) {
        return;
      }

      if (!user?.id) {
        throw new Error('User not authenticated');
      }

      const { error } = await supabase
        .from('users')
        .update({
          full_name: formData.full_name?.trim() || null,
          medical_specialty: formData.medical_specialty || null,
          about_me_context: formData.about_me_context?.trim() || null,
          updated_at: new Date().toISOString()
        })
        .eq('user_id', user.id);

      if (error) throw error;

      setSuccess(t('profile.updateSuccess'));
      setIsEditing(false);
      await fetchProfile(); // Refresh the profile data
    } catch (error) {
      console.error('Error updating profile:', error);
      setError(t('profile.updateError'));
    } finally {
      setIsSaving(false);
    }
  };

  const handleCancel = () => {
    setFormData({
      full_name: profile?.full_name || '',
      medical_specialty: profile?.medical_specialty || '',
      about_me_context: profile?.about_me_context || ''
    });
    setIsEditing(false);
    setError(null);
    setSuccess(null);
  };

  const handleProfilePictureUpdate = (imageUrl: string | null) => {
    if (profile) {
      setProfile({ ...profile, profile_picture_url: imageUrl });
    }
  };

  const tabs: { id: ProfileTab; label: string; icon: React.ReactNode }[] = [
    { id: 'profile', label: t('profile.profileInfo'), icon: <User className="w-4 h-4" /> },
    { id: 'security', label: t('profile.security'), icon: <Lock className="w-4 h-4" /> },
    { id: 'preferences', label: t('profile.preferences'), icon: <Settings className="w-4 h-4" /> }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-slate-900 dark:to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="animate-pulse space-y-8">
            {/* Header Skeleton */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20 dark:border-gray-700/20">
              <div className="flex items-center space-x-6">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-200 to-indigo-200 dark:from-blue-800 to-indigo-800 rounded-2xl animate-pulse"></div>
                <div className="space-y-3">
                  <div className="h-8 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-lg w-64"></div>
                  <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded w-48"></div>
                  <div className="h-3 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded w-32"></div>
                </div>
              </div>
            </div>
            
            {/* Content Skeleton */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div className="h-64 bg-white/80 dark:bg-gray-800/80 rounded-2xl animate-pulse"></div>
                <div className="h-48 bg-white/80 dark:bg-gray-800/80 rounded-2xl animate-pulse"></div>
              </div>
              <div className="space-y-6">
                <div className="h-32 bg-white/80 dark:bg-gray-800/80 rounded-2xl animate-pulse"></div>
                <div className="h-24 bg-white/80 dark:bg-gray-800/80 rounded-2xl animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-slate-900 dark:to-blue-900 transition-all duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Global Error/Success Messages - Floating */}
        {error && (
          <div className="fixed top-4 right-4 z-50 p-4 bg-red-500/90 backdrop-blur-xl border border-red-400/20 rounded-2xl shadow-2xl transform transition-all duration-500 ease-out animate-in slide-in-from-top-5">
            <p className="text-white font-medium flex items-center space-x-2">
              <X className="w-4 h-4" />
              <span>{error}</span>
            </p>
          </div>
        )}

        {success && (
          <div className="fixed top-4 right-4 z-50 p-4 bg-emerald-500/90 backdrop-blur-xl border border-emerald-400/20 rounded-2xl shadow-2xl transform transition-all duration-500 ease-out animate-in slide-in-from-top-5">
            <p className="text-white font-medium flex items-center space-x-2">
              <Badge className="w-4 h-4" />
              <span>{success}</span>
            </p>
          </div>
        )}

        {/* Hero Profile Header */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-3xl blur-3xl"></div>
          <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-gray-700/20 transition-all duration-500 hover:shadow-3xl">
            <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-8">
              
              {/* Enhanced Profile Picture */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur-xl opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="relative">
                  <ProfilePictureUpload
                    currentImageUrl={profile?.profile_picture_url}
                    onImageUpdate={handleProfilePictureUpdate}
                  />
                </div>
              </div>

              {/* Profile Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div>
                    <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-2">
                      {formData.full_name || t('profile.noNameSet')}
                    </h1>
                    <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-300 mb-4">
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4" />
                        <span className="font-medium">{user?.email}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{t('profile.memberSince')} {profile?.created_at ? new Date(profile.created_at).toLocaleDateString() : t('profile.unknown')}</span>
                      </div>
                    </div>
                    
                    {/* Specialty Badge */}
                    {profile?.medical_specialty && (
                      <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-200 dark:border-blue-800 rounded-full">
                        <Briefcase className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        <span className="text-blue-700 dark:text-blue-300 font-medium">
                          {medicalSpecialties.find(s => s.value === profile.medical_specialty)?.label}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex items-center space-x-3">
                    {!isEditing ? (
                      <button
                        onClick={() => setIsEditing(true)}
                        className="group flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                      >
                        <Edit className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                        <span className="font-medium">{t('profile.editProfile')}</span>
                      </button>
                    ) : (
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={handleSave}
                          disabled={isSaving}
                          className="group flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <Save className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                          <span className="font-medium">{isSaving ? t('profile.saving') : t('profile.saveChanges')}</span>
                        </button>
                        <button
                          onClick={handleCancel}
                          disabled={isSaving}
                          className="group flex items-center space-x-2 px-6 py-3 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <X className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
                          <span className="font-medium">{t('profile.cancel')}</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1 space-y-6">
            {/* Tab Navigation - Vertical */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/20 dark:border-gray-700/20">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">{t('profile.settings')}</h3>
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`group w-full flex items-center space-x-3 px-4 py-3 rounded-2xl font-medium text-sm transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg transform scale-105'
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700/50 hover:text-gray-900 dark:hover:text-gray-100 hover:transform hover:translate-x-1'
                    }`}
                  >
                    <div className={`${activeTab === tab.id ? 'text-white' : 'text-gray-400 group-hover:text-blue-500'} transition-colors duration-300`}>
                      {tab.icon}
                    </div>
                    <span>{tab.label}</span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Quick Stats */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/20 dark:border-gray-700/20">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">{t('profile.profileStats')}</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                      <Activity className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">{t('profile.profileComplete')}</span>
                  </div>
                  <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                    {Math.round((([formData.full_name, formData.medical_specialty, formData.about_me_context, profile?.profile_picture_url].filter(Boolean).length) / 4) * 100)}%
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center">
                      <Shield className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">{t('profile.securityScore')}</span>
                  </div>
                  <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">95%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center">
                      <Clock className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">{t('profile.lastActive')}</span>
                  </div>
                  <span className="text-sm font-semibold text-amber-600 dark:text-amber-400">{t('profile.now')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 dark:border-gray-700/20 overflow-hidden">
            {activeTab === 'profile' && (
              <div className="p-8 space-y-8">
                {/* Profile Information Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Personal Information Card */}
                  <div className="space-y-6">
                    <div className="group bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                          <User className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{t('profile.personalInformation')}</h3>
                      </div>
                      
                      {/* Full Name */}
                      <div className="space-y-3">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                          {t('profile.fullName')}
                        </label>
                        {isEditing ? (
                          <div className="relative">
                            <input
                              type="text"
                              value={formData.full_name}
                              onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                              className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 shadow-sm hover:shadow-md"
                              placeholder={t('profile.enterFullName')}
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                              <User className="w-4 h-4 text-gray-400" />
                            </div>
                          </div>
                        ) : (
                          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
                            <p className="text-gray-900 dark:text-gray-100 font-medium">
                              {profile?.full_name || t('profile.notSet')}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Professional Information Card */}
                    <div className="group bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center">
                          <Briefcase className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{t('profile.professionalDetails')}</h3>
                      </div>
                      
                      {/* Medical Specialty */}
                      <div className="space-y-3">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                          {t('profile.medicalSpecialty')}
                        </label>
                        {isEditing ? (
                          <div className="relative">
                            <select
                              value={formData.medical_specialty}
                              onChange={(e) => setFormData({ ...formData, medical_specialty: e.target.value })}
                              className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 shadow-sm hover:shadow-md appearance-none"
                            >
                              {medicalSpecialties.map((specialty) => (
                                <option key={specialty.value} value={specialty.value}>
                                  {specialty.label}
                                </option>
                              ))}
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                              <Briefcase className="w-4 h-4 text-gray-400" />
                            </div>
                          </div>
                        ) : (
                          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
                            <p className="text-gray-900 dark:text-gray-100 font-medium">
                              {medicalSpecialties.find(s => s.value === profile?.medical_specialty)?.label || t('profile.notSet')}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* About Me Section */}
                  <div className="space-y-6">
                    <div className="group bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
                          <BookOpen className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{t('profile.aboutMe')}</h3>
                      </div>
                      
                      <div className="space-y-3">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                          {t('profile.aboutMe')}
                        </label>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {t('profile.aboutMeDesc')}
                        </p>
                        {isEditing ? (
                          <textarea
                            value={formData.about_me_context}
                            onChange={(e) => setFormData({ ...formData, about_me_context: e.target.value })}
                            rows={6}
                            className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 shadow-sm hover:shadow-md resize-none"
                            placeholder={t('profile.aboutMePlaceholder')}
                          />
                        ) : (
                          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 min-h-[150px]">
                            <p className="text-gray-900 dark:text-gray-100 whitespace-pre-wrap leading-relaxed">
                              {profile?.about_me_context || (
                                <span className="text-gray-500 dark:text-gray-400 italic">{t('profile.notSet')}</span>
                              )}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-6 border border-blue-200/50 dark:border-blue-800/50">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">{t('profile.quickActions')}</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <button className="flex items-center space-x-3 p-3 bg-white/70 dark:bg-gray-800/70 rounded-xl hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 group">
                          <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <TrendingUp className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                          </div>
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{t('profile.viewAnalytics')}</span>
                        </button>
                        <button className="flex items-center space-x-3 p-3 bg-white/70 dark:bg-gray-800/70 rounded-xl hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 group">
                          <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Award className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                          </div>
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{t('profile.achievements')}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="p-8">
                <div className="max-w-2xl mx-auto">
                  <div className="mb-8">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-2xl flex items-center justify-center">
                        <Shield className="w-6 h-6 text-red-600 dark:text-red-400" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{t('profile.securitySettings')}</h2>
                        <p className="text-gray-600 dark:text-gray-400">{t('profile.keepAccountSecure')}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
                    <ChangePasswordForm
                      onSuccess={() => {
                        setSuccess(t('profile.passwordUpdateSuccess'));
                        setTimeout(() => setSuccess(null), 3000);
                      }}
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'preferences' && (
              <div className="p-8">
                <div className="max-w-4xl mx-auto">
                  <div className="mb-8">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center">
                        <Settings className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{t('profile.preferences')}</h2>
                        <p className="text-gray-600 dark:text-gray-400">{t('profile.preferencesDesc')}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Coming Soon with Enhanced Design */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-3xl blur-3xl"></div>
                    <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-12 border border-white/20 dark:border-gray-700/20 text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                        <Settings className="w-10 h-10 text-white animate-spin-slow" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                        {t('profile.comingSoon')}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto leading-relaxed">
{t('profile.preferencesDesc')}
                      </p>
                      
                      {/* Preview Cards */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                        <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl opacity-50">
                          <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-2">
                            <User className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                          </div>
                          <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-1">{t('profile.display')}</h4>
                          <p className="text-xs text-gray-500 dark:text-gray-400">{t('profile.themeLayout')}</p>
                        </div>
                        <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl opacity-50">
                          <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center mx-auto mb-2">
                            <Activity className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                          </div>
                          <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-1">{t('profile.notifications')}</h4>
                          <p className="text-xs text-gray-500 dark:text-gray-400">{t('profile.alertsUpdates')}</p>
                        </div>
                        <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl opacity-50">
                          <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mx-auto mb-2">
                            <Star className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                          </div>
                          <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-1">{t('profile.aiAssistant')}</h4>
                          <p className="text-xs text-gray-500 dark:text-gray-400">{t('profile.personalization')}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Action Button - Mobile */}
      <div className="fixed bottom-6 right-6 lg:hidden z-40">
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full shadow-2xl flex items-center justify-center transform hover:scale-110 transition-all duration-300 hover:shadow-3xl"
        >
          {isEditing ? (
            <X className="w-6 h-6" />
          ) : (
            <Edit className="w-6 h-6" />
          )}
        </button>
      </div>
    </div>
  );
}; 