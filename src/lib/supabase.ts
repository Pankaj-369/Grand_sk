import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface CafeReservation {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  reservation_date: string;
  reservation_time: string;
  guests: number;
  status: string;
  created_at: string;
  updated_at: string;
}