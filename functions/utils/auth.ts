import { HandlerEvent, HandlerResponse } from '@netlify/functions';
import { getAuthToken, parseRequest } from './request';
import { AuthenticationError, AuthorizationError } from './errors';
import { ENV_VARS } from './constants';

export interface UserPayload {
  id: string;
  email: string;
  role?: string;
  specialty?: string;
  iat?: number;
  exp?: number;
  // Add Supabase-specific fields
  aud?: string;
  app_metadata?: any;
  user_metadata?: any;
}

// Decode Supabase JWT token
export function decodeSupabaseJWT(token: string): UserPayload | null {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) {
      return null;
    }

    const payload = JSON.parse(atob(parts[1]));
    
    // Map Supabase JWT structure to our UserPayload
    return {
      id: payload.sub,
      email: payload.email,
      role: payload.app_metadata?.role || payload.user_metadata?.role,
      specialty: payload.app_metadata?.specialty || payload.user_metadata?.specialty,
      aud: payload.aud,
      iat: payload.iat,
      exp: payload.exp,
      app_metadata: payload.app_metadata,
      user_metadata: payload.user_metadata
    } as UserPayload;
  } catch (error) {
    return null;
  }
}

// Verify Supabase JWT token (basic verification)
export function verifySupabaseJWT(token: string): UserPayload {
  console.log('🔍 JWT Verification Debug:', {
    hasToken: !!token,
    tokenLength: token?.length,
    tokenPrefix: token?.substring(0, 20) + '...',
    timestamp: new Date().toISOString()
  });

  if (!token) {
    console.error('❌ JWT Verification Failed: No token provided');
    throw new AuthenticationError('No authentication token provided');
  }

  const payload = decodeSupabaseJWT(token);
  console.log('🔍 JWT Decode Result:', {
    hasPayload: !!payload,
    payloadKeys: payload ? Object.keys(payload) : [],
    userId: payload?.id,
    email: payload?.email,
    aud: payload?.aud,
    exp: payload?.exp,
    iat: payload?.iat
  });

  if (!payload) {
    console.error('❌ JWT Verification Failed: Invalid token format');
    throw new AuthenticationError('Invalid authentication token');
  }

  // Check if token is expired
  if (payload.exp && Date.now() >= payload.exp * 1000) {
    console.error('❌ JWT Verification Failed: Token expired', {
      exp: payload.exp,
      expDate: new Date(payload.exp * 1000).toISOString(),
      currentTime: new Date().toISOString(),
      timeDiff: Date.now() - (payload.exp * 1000)
    });
    throw new AuthenticationError('Authentication token has expired');
  }

  // Check if it's a Supabase token (has 'aud' field)
  if (!payload.aud) {
    console.error('❌ JWT Verification Failed: Missing aud field');
    throw new AuthenticationError('Invalid token format');
  }

  console.log('✅ JWT Verification Successful:', {
    userId: payload.id,
    email: payload.email,
    aud: payload.aud
  });

  return payload;
}

// Fetch user profile from Supabase to get specialty information
async function fetchUserProfile(userId: string): Promise<{ specialty?: string; role?: string }> {
  try {
    // Create Supabase client for server-side use
    const { createClient } = require('@supabase/supabase-js');
    const supabase = createClient(
      ENV_VARS.SUPABASE_URL,
      ENV_VARS.SUPABASE_SERVICE_ROLE_KEY
    );

    const { data, error } = await supabase
      .from('users')
      .select('medical_specialty')
      .eq('user_id', userId)
      .single();

    if (error) {
      console.error('Error fetching user profile:', error);
      return {};
    }

    return {
      specialty: data?.medical_specialty,
      role: undefined // No role column in users table
    };
  } catch (error) {
    console.error('Error in fetchUserProfile:', error);
    return {};
  }
}

// Extract user from request with profile data
export async function extractUser(event: HandlerEvent): Promise<UserPayload> {
  const { headers } = parseRequest(event);
  const token = getAuthToken(headers);
  
  if (!token) {
    throw new AuthenticationError('Authentication required');
  }

  const user = verifySupabaseJWT(token);
  
  // Fetch additional profile data from database
  const profile = await fetchUserProfile(user.id);
  
  // Merge profile data with JWT data
  return {
    ...user,
    specialty: profile.specialty || user.specialty,
    role: profile.role || user.role
  };
}

// Legacy JWT functions (kept for backward compatibility if needed)
export function decodeJWT(token: string): UserPayload | null {
  return decodeSupabaseJWT(token);
}

export function verifyJWT(token: string): UserPayload {
  return verifySupabaseJWT(token);
}

// Check if user has required role
export function requireRole(user: UserPayload, requiredRole: string): void {
  if (!user.role || user.role !== requiredRole) {
    throw new AuthorizationError(`Access denied. Required role: ${requiredRole}`);
  }
}

// Check if user has one of the required roles
export function requireAnyRole(user: UserPayload, requiredRoles: string[]): void {
  if (!user.role || !requiredRoles.includes(user.role)) {
    throw new AuthorizationError(`Access denied. Required roles: ${requiredRoles.join(', ')}`);
  }
}

// Authentication middleware wrapper
export function withAuth(
  handler: (event: HandlerEvent, user: UserPayload) => Promise<HandlerResponse>
) {
  return async (event: HandlerEvent): Promise<HandlerResponse> => {
    try {
      const user = await extractUser(event);
      return await handler(event, user);
    } catch (error) {
      if (error instanceof AuthenticationError || error instanceof AuthorizationError) {
        throw error;
      }
      throw new AuthenticationError('Authentication failed');
    }
  };
}

// Role-based authentication middleware
export function withRoleAuth(
  requiredRole: string,
  handler: (event: HandlerEvent, user: UserPayload) => Promise<HandlerResponse>
) {
  return withAuth(async (event: HandlerEvent, user: UserPayload) => {
    requireRole(user, requiredRole);
    return await handler(event, user);
  });
}

// Multiple roles authentication middleware
export function withAnyRoleAuth(
  requiredRoles: string[],
  handler: (event: HandlerEvent, user: UserPayload) => Promise<HandlerResponse>
) {
  return withAuth(async (event: HandlerEvent, user: UserPayload) => {
    requireAnyRole(user, requiredRoles);
    return await handler(event, user);
  });
}

// Create a simple JWT token (for testing purposes)
// In production, use a proper JWT library
export function createSimpleJWT(payload: UserPayload): string {
  const header = { alg: 'HS256', typ: 'JWT' };
  const now = Math.floor(Date.now() / 1000);
  const exp = now + (24 * 60 * 60); // 24 hours

  const fullPayload = {
    ...payload,
    iat: now,
    exp: exp
  };

  const encodedHeader = btoa(JSON.stringify(header));
  const encodedPayload = btoa(JSON.stringify(fullPayload));
  const signature = btoa(`${encodedHeader}.${encodedPayload}.${ENV_VARS.JWT_SECRET}`);

  return `${encodedHeader}.${encodedPayload}.${signature}`;
} 