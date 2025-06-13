import { ENV_VARS } from './constants';

export interface EnvironmentConfig {
  nodeEnv: string;
  supabaseUrl: string;
  supabaseAnonKey: string;
  supabaseServiceRoleKey: string;
  jwtSecret: string;
  allowedOrigins: string[];
}

export function loadEnvironmentVariables(): EnvironmentConfig {
  return {
    nodeEnv: ENV_VARS.NODE_ENV,
    supabaseUrl: ENV_VARS.SUPABASE_URL,
    supabaseAnonKey: ENV_VARS.SUPABASE_ANON_KEY,
    supabaseServiceRoleKey: ENV_VARS.SUPABASE_SERVICE_ROLE_KEY,
    jwtSecret: ENV_VARS.JWT_SECRET,
    allowedOrigins: ENV_VARS.ALLOWED_ORIGINS
  };
}

export function validateEnvironmentVariables(): { isValid: boolean; missingVars: string[] } {
  const config = loadEnvironmentVariables();
  const missingVars: string[] = [];

  if (!config.supabaseUrl) missingVars.push('VITE_SUPABASE_URL');
  if (!config.supabaseAnonKey) missingVars.push('VITE_SUPABASE_ANON_KEY');
  if (!config.supabaseServiceRoleKey) missingVars.push('SUPABASE_SERVICE_ROLE_KEY');
  if (!config.jwtSecret || config.jwtSecret === 'fallback-secret-key') {
    missingVars.push('JWT_SECRET');
  }

  return {
    isValid: missingVars.length === 0,
    missingVars
  };
}

export function isDevelopment(): boolean {
  return ENV_VARS.NODE_ENV === 'development';
}

export function isProduction(): boolean {
  return ENV_VARS.NODE_ENV === 'production';
} 