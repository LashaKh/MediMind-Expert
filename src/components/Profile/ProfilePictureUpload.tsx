import React, { useState, useRef } from 'react';
import { Camera, Upload, X, User } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../contexts/AuthContext';
import { useTranslation } from '../../hooks/useTranslation';

interface ProfilePictureUploadProps {
  currentImageUrl?: string | null;
  onImageUpdate?: (imageUrl: string | null) => void;
}

export const ProfilePictureUpload: React.FC<ProfilePictureUploadProps> = ({
  currentImageUrl,
  onImageUpdate
}) => {
  const { user } = useAuth();
  const { t } = useTranslation();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(currentImageUrl || null);
  const [error, setError] = useState<string | null>(null);

  const handleFileSelect = () => {
    fileInputRef.current?.click();
  };

  const validateFile = (file: File): string | null => {
    // Check file type
    if (!file.type.startsWith('image/')) {
      return 'Please select an image file';
    }

    // Check file size (5MB limit)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      return 'Image size must be less than 5MB';
    }

    // Check image dimensions (optional)
    return null;
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const validationError = validateFile(file);
    if (validationError) {
      setError(validationError);
      return;
    }

    setError(null);
    setIsUploading(true);

    try {
      // Create preview
      const objectUrl = URL.createObjectURL(file);
      setPreviewUrl(objectUrl);

      // Upload to Supabase Storage
      const fileExt = file.name.split('.').pop();
      const fileName = `${user?.id}-${Date.now()}.${fileExt}`;
      const filePath = `profile-pictures/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('user-uploads')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false
        });

      if (uploadError) {
        throw uploadError;
      }

      // Get public URL
      const { data } = supabase.storage
        .from('user-uploads')
        .getPublicUrl(filePath);

      const publicUrl = data.publicUrl;

      // Update user profile in database
      if (user?.id) {
        const { error: updateError } = await supabase
          .from('users')
          .update({
            profile_picture_url: publicUrl,
            updated_at: new Date().toISOString()
          })
          .eq('user_id', user.id);

        if (updateError) {
          throw updateError;
        }
      }

      // Clean up old object URL and set new one
      URL.revokeObjectURL(objectUrl);
      setPreviewUrl(publicUrl);
      onImageUpdate?.(publicUrl);

    } catch (error: any) {
      console.error('Error uploading profile picture:', error);
      setError(error.message || 'Failed to upload image. Please try again.');
      setPreviewUrl(currentImageUrl || null);
    } finally {
      setIsUploading(false);
    }
  };

  const handleRemoveImage = async () => {
    if (!user?.id) return;

    setIsUploading(true);
    setError(null);

    try {
      // Update user profile to remove image URL
      const { error: updateError } = await supabase
        .from('users')
        .update({
          profile_picture_url: null,
          updated_at: new Date().toISOString()
        })
        .eq('user_id', user.id);

      if (updateError) {
        throw updateError;
      }

      setPreviewUrl(null);
      onImageUpdate?.(null);

      // Note: We're not deleting the file from storage for now
      // In a production app, you might want to implement cleanup
    } catch (error: any) {
      console.error('Error removing profile picture:', error);
      setError(error.message || 'Failed to remove image. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      {/* Enhanced Profile Picture Display */}
      <div className="relative group">
        {/* Glow effect background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl blur-xl opacity-25 group-hover:opacity-40 transition-opacity duration-500 scale-110"></div>
        
        {/* Main picture container */}
        <div className="relative">
          <div className="w-40 h-40 rounded-3xl overflow-hidden border-4 border-white/50 dark:border-gray-700/50 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-105">
            {previewUrl ? (
              <img
                src={previewUrl}
                alt="Profile"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
                <User className="w-20 h-20 text-blue-400 dark:text-blue-300" />
              </div>
            )}
          </div>

          {/* Upload overlay with modern design */}
          <div 
            className="absolute inset-0 rounded-3xl bg-gradient-to-br from-black/70 to-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center cursor-pointer backdrop-blur-sm"
            onClick={handleFileSelect}
          >
            <div className="text-center space-y-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mx-auto backdrop-blur-sm">
                <Camera className="w-6 h-6 text-white" />
              </div>
              <p className="text-white text-sm font-medium">{t('profile.changePhoto')}</p>
            </div>
          </div>

          {/* Enhanced Remove button */}
          {previewUrl && !isUploading && (
            <button
              onClick={handleRemoveImage}
              className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl flex items-center justify-center hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110 group/remove"
              title="Remove profile picture"
            >
              <X className="w-5 h-5 group-hover/remove:rotate-90 transition-transform duration-300" />
            </button>
          )}

          {/* Enhanced Loading overlay */}
          {isUploading && (
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/80 to-indigo-500/80 flex items-center justify-center backdrop-blur-sm">
              <div className="text-center space-y-3">
                <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin mx-auto"></div>
                <p className="text-white text-sm font-medium">{t('profile.saving')}</p>
              </div>
            </div>
          )}

          {/* Status indicator */}
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-500 rounded-2xl flex items-center justify-center border-4 border-white dark:border-gray-800 shadow-lg">
            <Camera className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>

      {/* Enhanced Upload button */}
      <button
        onClick={handleFileSelect}
        disabled={isUploading}
        className="group flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none"
      >
        <Upload className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
        <span className="font-medium">{isUploading ? t('profile.saving') : t('profile.uploadNewPhoto')}</span>
      </button>

      {/* File input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />

      {/* Enhanced Error message */}
      {error && (
        <div className="flex items-center space-x-2 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl">
          <X className="w-5 h-5 text-red-500" />
          <p className="text-red-600 dark:text-red-400 text-sm font-medium">
            {error}
          </p>
        </div>
      )}

      {/* Enhanced Upload guidelines */}
      <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 border border-gray-200/50 dark:border-gray-700/50">
        <div className="text-center space-y-2">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">{t('profile.photoGuidelines')}</h4>
          <div className="space-y-1 text-xs text-gray-600 dark:text-gray-400">
            <p>• {t('profile.squareImageRecommended')}</p>
            <p>• {t('profile.maxFileSize')}</p>
            <p>• {t('profile.supportedFormats')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}; 