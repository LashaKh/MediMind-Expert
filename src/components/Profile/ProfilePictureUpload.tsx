import React, { useState, useRef } from 'react';
import { Camera, Upload, X, User } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../contexts/AuthContext';

interface ProfilePictureUploadProps {
  currentImageUrl?: string | null;
  onImageUpdate?: (imageUrl: string | null) => void;
}

export const ProfilePictureUpload: React.FC<ProfilePictureUploadProps> = ({
  currentImageUrl,
  onImageUpdate
}) => {
  const { user } = useAuth();
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
    <div className="flex flex-col items-center space-y-4">
      {/* Profile Picture Display */}
      <div className="relative">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-600 bg-gray-100 dark:bg-gray-700">
          {previewUrl ? (
            <img
              src={previewUrl}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <User className="w-16 h-16 text-gray-400" />
            </div>
          )}
        </div>

        {/* Upload overlay on hover */}
        <div className="absolute inset-0 rounded-full bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer"
             onClick={handleFileSelect}>
          <Camera className="w-8 h-8 text-white" />
        </div>

        {/* Remove button */}
        {previewUrl && !isUploading && (
          <button
            onClick={handleRemoveImage}
            className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors shadow-lg"
            title="Remove profile picture"
          >
            <X className="w-4 h-4" />
          </button>
        )}

        {/* Loading overlay */}
        {isUploading && (
          <div className="absolute inset-0 rounded-full bg-black bg-opacity-50 flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
          </div>
        )}
      </div>

      {/* Upload button */}
      <button
        onClick={handleFileSelect}
        disabled={isUploading}
        className="flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Upload className="w-4 h-4" />
        <span>{isUploading ? 'Uploading...' : 'Upload Photo'}</span>
      </button>

      {/* File input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />

      {/* Error message */}
      {error && (
        <p className="text-red-600 dark:text-red-400 text-sm text-center">
          {error}
        </p>
      )}

      {/* Upload guidelines */}
      <div className="text-xs text-gray-500 dark:text-gray-400 text-center max-w-xs">
        <p>Recommended: Square image, at least 200x200 pixels</p>
        <p>Maximum size: 5MB. Supported formats: JPG, PNG, GIF</p>
      </div>
    </div>
  );
}; 