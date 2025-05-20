
import { createClient } from '@supabase/supabase-js';

export const useSupabaseClient = () => {
  // Use the provided environment variables
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://uownjunswdzajonrefxo.supabase.co';
  const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVvd25qdW5zd2R6YWpvbnJlZnhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc3NTAzNzUsImV4cCI6MjA2MzMyNjM3NX0.TMXd8ZfcEN_LWPO2U_jMlOaDcILN3Vd2BFFco2qiWa0';

  // Create supabase client
  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  return { supabase, isConfigured: true };
};
