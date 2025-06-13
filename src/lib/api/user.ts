import { supabase } from '../supabase';
import { TablesUpdate } from '../../types/supabase';

export interface UpdateUserProfileData {
  medical_specialty?: string;
  about_me_context?: string;
  full_name?: string;
}

/**
 * Update user profile information
 */
export const updateUserProfile = async (
  userId: string, 
  updates: UpdateUserProfileData
): Promise<void> => {
  const { error } = await supabase
    .from('users')
    .update({
      ...updates,
      updated_at: new Date().toISOString()
    })
    .eq('user_id', userId);

  if (error) {
    console.error('Error updating user profile:', error);
    throw new Error(`Failed to update profile: ${error.message}`);
  }
};

/**
 * Get user profile by user ID
 */
export const getUserProfile = async (userId: string) => {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('user_id', userId)
    .single();

  if (error) {
    console.error('Error fetching user profile:', error);
    throw new Error(`Failed to fetch profile: ${error.message}`);
  }

  return data;
};

/**
 * Check if user has completed onboarding (has specialty selected)
 */
export const hasCompletedOnboarding = async (userId: string): Promise<boolean> => {
  const { data, error } = await supabase
    .from('users')
    .select('medical_specialty')
    .eq('user_id', userId)
    .single();

  if (error) {
    console.error('Error checking onboarding status:', error);
    return false;
  }

  return !!data?.medical_specialty;
}; 