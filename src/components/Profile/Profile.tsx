import React, { useState, useEffect } from 'react';
import { User, Save, Edit, X, Lock, Settings } from 'lucide-react';
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
      <div className="p-6">
        <div className="max-w-4xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-6"></div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <User className="w-8 h-8 text-primary" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              {t('navigation.profile')}
            </h1>
          </div>
        </div>

        {/* Global Error/Success Messages */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
            <p className="text-red-600 dark:text-red-400">{error}</p>
          </div>
        )}

        {success && (
          <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
            <p className="text-green-600 dark:text-green-400">{success}</p>
          </div>
        )}

        {/* Tab Navigation */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-primary text-primary'
                      : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'profile' && (
              <div className="space-y-8">
                {/* Profile Picture Section */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8 space-y-6 lg:space-y-0">
                  <div className="flex-shrink-0">
                    <ProfilePictureUpload
                      currentImageUrl={profile?.profile_picture_url}
                      onImageUpdate={handleProfilePictureUpdate}
                    />
                  </div>

                  {/* Basic Info Display */}
                  <div className="flex-grow">
                    <div className="mb-6">
                      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                        {formData.full_name || t('profile.noNameSet')}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-300">{user?.email}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {t('profile.memberSince')} {profile?.created_at ? new Date(profile.created_at).toLocaleDateString() : t('profile.unknown')}
                      </p>
                    </div>

                    {!isEditing && (
                      <button
                        onClick={() => setIsEditing(true)}
                        className="flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                      >
                        <Edit className="w-4 h-4" />
                        <span>{t('profile.editProfile')}</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Profile Form */}
                <div className="border-t dark:border-gray-700 pt-8">
                  <div className="space-y-6">
                    {/* Full Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {t('profile.fullName')}
                      </label>
                      {isEditing ? (
                        <input
                          type="text"
                          value={formData.full_name}
                          onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                          placeholder={t('profile.enterFullName')}
                        />
                      ) : (
                        <p className="text-gray-900 dark:text-gray-100 py-2">
                          {profile?.full_name || t('profile.notSet')}
                        </p>
                      )}
                    </div>

                    {/* Medical Specialty */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {t('profile.medicalSpecialty')}
                      </label>
                      {isEditing ? (
                        <select
                          value={formData.medical_specialty}
                          onChange={(e) => setFormData({ ...formData, medical_specialty: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                        >
                          {medicalSpecialties.map((specialty) => (
                            <option key={specialty.value} value={specialty.value}>
                              {specialty.label}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <p className="text-gray-900 dark:text-gray-100 py-2">
                          {medicalSpecialties.find(s => s.value === profile?.medical_specialty)?.label || t('profile.notSet')}
                        </p>
                      )}
                    </div>

                    {/* About Me Context */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {t('profile.aboutMe')}
                      </label>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                        {t('profile.aboutMeDesc')}
                      </p>
                      {isEditing ? (
                        <textarea
                          value={formData.about_me_context}
                          onChange={(e) => setFormData({ ...formData, about_me_context: e.target.value })}
                          rows={4}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                          placeholder={t('profile.aboutMePlaceholder')}
                        />
                      ) : (
                        <p className="text-gray-900 dark:text-gray-100 py-2 whitespace-pre-wrap">
                          {profile?.about_me_context || t('profile.notSet')}
                        </p>
                      )}
                    </div>

                    {/* Action Buttons */}
                    {isEditing && (
                      <div className="flex items-center space-x-3 pt-4">
                        <button
                          onClick={handleSave}
                          disabled={isSaving}
                          className="flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <Save className="w-4 h-4" />
                          <span>{isSaving ? t('profile.saving') : t('profile.saveChanges')}</span>
                        </button>
                        <button
                          onClick={handleCancel}
                          disabled={isSaving}
                          className="flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <X className="w-4 h-4" />
                          <span>{t('profile.cancel')}</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="max-w-2xl">
                <ChangePasswordForm
                  onSuccess={() => {
                    setSuccess(t('profile.passwordUpdateSuccess'));
                    setTimeout(() => setSuccess(null), 3000);
                  }}
                />
              </div>
            )}

            {activeTab === 'preferences' && (
              <div className="max-w-2xl">
                <div className="text-center py-12">
                  <Settings className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
                    {t('profile.comingSoon')}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    {t('profile.preferencesDesc')}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}; 