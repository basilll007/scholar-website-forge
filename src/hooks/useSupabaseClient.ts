
import { createClient } from '@supabase/supabase-js';

export const useSupabaseClient = () => {
  // Initialize Supabase client with proper error handling
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

  // Create supabase client only if URL and key are available
  const supabase = (supabaseUrl && supabaseAnonKey) 
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

  return { supabase, isConfigured: !!supabase };
};
