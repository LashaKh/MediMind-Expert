// PlayAI status polling and audio retrieval service
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface PlayAIStatusResponse {
  status: 'generating' | 'completed' | 'failed';
  audioUrl?: string;
  duration?: number;
  progress?: number;
  error?: string;
}

export interface PodcastStatusUpdate {
  podcastId: string;
  status: 'generating' | 'completed' | 'failed';
  audioUrl?: string;
  duration?: number;
  error?: string;
}

// Poll PlayAI for generation status
export async function checkPlayAIStatus(playnoteId: string): Promise<PlayAIStatusResponse> {
  try {
    console.log('🔍 Checking PlayAI status for:', playnoteId);

    // Call Supabase Edge Function to check PlayAI status
    const { data, error } = await supabase.functions.invoke('check-playai-status', {
      body: { playnoteId }
    });

    if (error) {
      console.error('❌ PlayAI status check error:', error);
      throw new Error(error.message || 'Failed to check PlayAI status');
    }

    console.log('✅ PlayAI status response:', data);
    return data;

  } catch (error) {
    console.error('❌ Error checking PlayAI status:', error);
    throw new Error(error instanceof Error ? error.message : 'Failed to check status');
  }
}

// Update podcast status in database
export async function updatePodcastStatus(update: PodcastStatusUpdate): Promise<void> {
  try {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      throw new Error('Authentication required');
    }

    console.log('💾 Updating podcast status:', update);

    const updateData: any = {
      status: update.status,
      updated_at: new Date().toISOString()
    };

    if (update.audioUrl) {
      updateData.audio_url = update.audioUrl;
    }

    if (update.duration) {
      updateData.duration = update.duration;
    }

    if (update.error) {
      updateData.error_message = update.error;
    }

    const { error } = await supabase
      .from('ai_podcasts')
      .update(updateData)
      .eq('id', update.podcastId)
      .eq('user_id', session.user.id);

    if (error) {
      console.error('❌ Failed to update podcast status:', error);
      throw new Error(`Failed to update podcast status: ${error.message}`);
    }

    console.log('✅ Podcast status updated successfully');

  } catch (error) {
    console.error('❌ Error updating podcast status:', error);
    throw new Error(error instanceof Error ? error.message : 'Failed to update status');
  }
}

// Start polling for a specific podcast
export function startPolling(
  podcastId: string,
  playnoteId: string,
  onStatusUpdate: (status: PlayAIStatusResponse) => void,
  onComplete: (audioUrl: string, duration?: number) => void,
  onError: (error: string) => void
): () => void {
  let intervalId: NodeJS.Timeout;
  let attempts = 0;
  const maxAttempts = 60; // 5 minutes with 5-second intervals
  const pollInterval = 5000; // 5 seconds

  console.log('🔄 Starting polling for podcast:', { podcastId, playnoteId });

  const poll = async () => {
    try {
      attempts++;
      console.log(`🔍 Poll attempt ${attempts}/${maxAttempts} for podcast:`, podcastId);

      const status = await checkPlayAIStatus(playnoteId);
      onStatusUpdate(status);

      // Update database status
      await updatePodcastStatus({
        podcastId,
        status: status.status,
        audioUrl: status.audioUrl,
        duration: status.duration,
        error: status.error
      });

      if (status.status === 'completed' && status.audioUrl) {
        console.log('✅ Podcast generation completed:', {
          podcastId,
          audioUrl: status.audioUrl,
          duration: status.duration
        });
        
        clearInterval(intervalId);
        onComplete(status.audioUrl, status.duration);
        return;
      }

      if (status.status === 'failed') {
        console.error('❌ Podcast generation failed:', status.error);
        clearInterval(intervalId);
        onError(status.error || 'Podcast generation failed');
        return;
      }

      if (attempts >= maxAttempts) {
        console.error('❌ Polling timeout after', maxAttempts, 'attempts');
        clearInterval(intervalId);
        onError('Podcast generation timed out. Please try again.');
        return;
      }

    } catch (error) {
      console.error('❌ Polling error:', error);
      
      if (attempts >= maxAttempts) {
        clearInterval(intervalId);
        onError(error instanceof Error ? error.message : 'Polling failed');
        return;
      }
      
      // Continue polling on individual errors
    }
  };

  // Start polling immediately, then continue at intervals
  poll();
  intervalId = setInterval(poll, pollInterval);

  // Return cleanup function
  return () => {
    console.log('🛑 Stopping polling for podcast:', podcastId);
    clearInterval(intervalId);
  };
}

// Get current podcast status from database
export async function getPodcastStatus(podcastId: string) {
  try {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      throw new Error('Authentication required');
    }

    const { data, error } = await supabase
      .from('ai_podcasts')
      .select('*')
      .eq('id', podcastId)
      .eq('user_id', session.user.id)
      .single();

    if (error) {
      console.error('❌ Failed to get podcast status:', error);
      throw new Error(`Failed to get podcast status: ${error.message}`);
    }

    return data;

  } catch (error) {
    console.error('❌ Error getting podcast status:', error);
    throw new Error(error instanceof Error ? error.message : 'Failed to get status');
  }
}

// Get all user podcasts
export async function getUserPodcasts() {
  try {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      throw new Error('Authentication required');
    }

    const { data, error } = await supabase
      .from('ai_podcasts')
      .select('*')
      .eq('user_id', session.user.id)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('❌ Failed to get user podcasts:', error);
      throw new Error(`Failed to get podcasts: ${error.message}`);
    }

    return data || [];

  } catch (error) {
    console.error('❌ Error getting user podcasts:', error);
    throw new Error(error instanceof Error ? error.message : 'Failed to get podcasts');
  }
}