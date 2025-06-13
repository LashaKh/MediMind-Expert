import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Session, User } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase'; // Assuming your Supabase client is here
import { Database } from '../types/supabase'; // Assuming your generated types are here

export type Profile = Database['public']['Tables']['users']['Row'];

import { SignInWithPasswordCredentials, SignUpWithPasswordCredentials } from '@supabase/supabase-js';

interface AuthContextType {
  session: Session | null;
  user: User | null;
  profile: Profile | null;
  isLoading: boolean;
  error: Error | null;
  signInWithPassword: (credentials: SignInWithPasswordCredentials) => Promise<any>; 
  signUpWithPassword: (credentials: SignUpWithPasswordCredentials) => Promise<any>; 
  signOut: () => Promise<void>;
  refreshProfile: () => Promise<void>;
  // Add other auth methods as needed (e.g., password recovery)
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchProfile = async (userId: string) => {
    try {
      const { data, error: profileError } = await supabase
        .from('users')
        .select('*')
        .eq('user_id', userId)
        .single();

      if (profileError) throw profileError;
      setProfile(data as Profile);
    } catch (e: any) {
      console.error('Error fetching profile:', e);
      setError(e);
      setProfile(null);
    }
  };

  const refreshProfile = async () => {
    if (user) {
      await fetchProfile(user.id);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setIsLoading(false);
    });

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        setIsLoading(false);
      }
    );

    return () => {
      authListener?.subscription?.unsubscribe();
    };
  }, []);

  // Fetch profile when user changes
  useEffect(() => {
    if (user && session) {
      fetchProfile(user.id);
    } else {
      setProfile(null); // Clear profile if no user
    }
  }, [user, session]);

  // Placeholder functions - to be implemented in Task 6.2 onwards
  const signInWithPassword = async (credentials: SignInWithPasswordCredentials) => {
    setIsLoading(true);
    setError(null);
    try {
      const { data, error: signInError } = await supabase.auth.signInWithPassword(credentials);

      if (signInError) {
        throw signInError;
      }

      // If sign in is successful, Supabase returns user and session data.
      // The onAuthStateChange listener also fires, but we can set state here for immediate UI update.
      setUser(data.user ?? null);
      setSession(data.session ?? null);
      // Profile will be fetched by the useEffect hook listening to user changes.

      return { user: data.user, session: data.session };
    } catch (e: any) {
      console.error('Error in signInWithPassword:', e);
      setError(e);
      setUser(null);
      setSession(null);
      setProfile(null);
      throw e; // Re-throw the error for the calling component to handle
    } finally {
      setIsLoading(false);
    }
  };

  const signUpWithPassword = async (credentials: SignUpWithPasswordCredentials) => {
    setIsLoading(true);
    setError(null);
    try {
      const { data, error: signUpError } = await supabase.auth.signUp(credentials);

      if (signUpError) {
        throw signUpError;
      }

      // If sign up is successful, Supabase returns user data.
      // If email confirmation is enabled, session will be null until email is verified.
      // The onAuthStateChange listener will handle setting the session when the user is verified.
      setUser(data.user ?? null);
      setSession(data.session ?? null); 
      // The profile will be fetched by the useEffect hook listening to user changes.
      
      return { user: data.user, session: data.session };
    } catch (e: any) {
      console.error('Error in signUpWithPassword:', e);
      setError(e);
      setUser(null);
      setSession(null);
      setProfile(null);
      throw e; // Re-throw the error for the calling component to handle
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = async () => {
    setIsLoading(true);
    const { error: signOutError } = await supabase.auth.signOut();
    if (signOutError) {
      setError(signOutError);
      console.error('Error signing out:', signOutError);
    }
    setSession(null);
    setUser(null);
    setProfile(null);
    setIsLoading(false);
  };

  const value = {
    session,
    user,
    profile,
    isLoading,
    error,
    signInWithPassword,
    signUpWithPassword,
    signOut,
    refreshProfile,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
