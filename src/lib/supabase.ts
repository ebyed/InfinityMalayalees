import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please check your .env file.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface MalayaleeRegistration {
  id?: number;
  full_name: string;
  email: string;
  phone: string;
  flat_number: string;
  native_place?: string;
  family_members?: number;
  special_skills?: string;
  volunteer_interest: boolean;
  created_at?: string;
}

export interface SadyaRegistration {
  id?: number;
  full_name: string;
  email: string;
  phone: string;
  flat_number: string;
  sadya_count: number;
  total_amount: number;
  upi_id?: string;
  transaction_id?: string;
  registration_id: string;
  created_at?: string;
}

export interface ThiruvathiraRegistration {
  id?: number;
  full_name: string;
  email: string;
  phone: string;
  flat_number: string;
  age?: string;
  experience?: string;
  special_requirements?: string;
  emergency_contact?: string;
  emergency_phone?: string;
  created_at?: string;
}

export interface CulturalRegistration {
  id?: number;
  participant_name: string;
  email: string;
  phone: string;
  flat_number: string;
  event_category: string;
  event_title: string;
  participant_count: number;
  description: string;
  special_requirements?: string;
  created_at?: string;
}

export interface Donation {
  id?: number;
  donor_name: string;
  email: string;
  phone: string;
  flat_number?: string;
  donation_type: string;
  donation_amount: number;
  upi_id?: string;
  transaction_id?: string;
  message?: string;
  created_at?: string;
}