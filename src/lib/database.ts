import { supabase } from './supabase';
import type { 
  MalayaleeRegistration, 
  SadyaRegistration, 
  ThiruvathiraRegistration, 
  CulturalRegistration, 
  Donation 
} from './supabase';

// Malayalee Registrations
export const malayaleeRegistrations = {
  async create(data: Omit<MalayaleeRegistration, 'id' | 'created_at'>) {
    const { data: result, error } = await supabase
      .from('malayalee_registrations')
      .insert([data])
      .select()
      .single();
    
    if (error) throw error;
    return result;
  },

  async getAll() {
    const { data, error } = await supabase
      .from('malayalee_registrations')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data || [];
  },

  async getByEmail(email: string) {
    const { data, error } = await supabase
      .from('malayalee_registrations')
      .select('*')
      .eq('email', email)
      .single();
    
    if (error && error.code !== 'PGRST116') throw error;
    return data;
  }
};

// Sadya Registrations
export const sadyaRegistrations = {
  async create(data: Omit<SadyaRegistration, 'id' | 'created_at'>) {
    const { data: result, error } = await supabase
      .from('sadya_registrations')
      .insert([data])
      .select()
      .single();
    
    if (error) throw error;
    return result;
  },

  async getAll() {
    const { data, error } = await supabase
      .from('sadya_registrations')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data || [];
  },

  async getByRegistrationId(registrationId: string) {
    const { data, error } = await supabase
      .from('sadya_registrations')
      .select('*')
      .eq('registration_id', registrationId)
      .single();
    
    if (error && error.code !== 'PGRST116') throw error;
    return data;
  }
};

// Thiruvathira Registrations
export const thiruvathiraRegistrations = {
  async create(data: Omit<ThiruvathiraRegistration, 'id' | 'created_at'>) {
    const { data: result, error } = await supabase
      .from('thiruvathira_registrations')
      .insert([data])
      .select()
      .single();
    
    if (error) throw error;
    return result;
  },

  async getAll() {
    const { data, error } = await supabase
      .from('thiruvathira_registrations')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data || [];
  },

  async getByEmail(email: string) {
    const { data, error } = await supabase
      .from('thiruvathira_registrations')
      .select('*')
      .eq('email', email)
      .maybeSingle();
    
    if (error) throw error;
    return data;
  }
};

// Cultural Registrations
export const culturalRegistrations = {
  async create(data: Omit<CulturalRegistration, 'id' | 'created_at'>) {
    const { data: result, error } = await supabase
      .from('cultural_registrations')
      .insert([data])
      .select()
      .single();
    
    if (error) throw error;
    return result;
  },

  async getAll() {
    const { data, error } = await supabase
      .from('cultural_registrations')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data || [];
  },

  async getByCategory(category: string) {
    const { data, error } = await supabase
      .from('cultural_registrations')
      .select('*')
      .eq('event_category', category)
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data || [];
  }
};

// Donations
export const donations = {
  async create(data: Omit<Donation, 'id' | 'created_at'>) {
    const { data: result, error } = await supabase
      .from('donations')
      .insert([data])
      .select()
      .single();
    
    if (error) throw error;
    return result;
  },

  async getAll() {
    const { data, error } = await supabase
      .from('donations')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data || [];
  },

  async getTotalAmount() {
    const { data, error } = await supabase
      .from('donations')
      .select('donation_amount');
    
    if (error) throw error;
    return (data || []).reduce((sum, donation) => sum + donation.donation_amount, 0);
  }
};

// Statistics
export const getStatistics = async () => {
  try {
    const [
      malayaleeCount,
      sadyaData,
      thiruvathiraCount,
      culturalCount,
      donationData
    ] = await Promise.all([
      supabase.from('malayalee_registrations').select('id', { count: 'exact', head: true }),
      supabase.from('sadya_registrations').select('sadya_count'),
      supabase.from('thiruvathira_registrations').select('id', { count: 'exact', head: true }),
      supabase.from('cultural_registrations').select('id', { count: 'exact', head: true }),
      supabase.from('donations').select('donation_amount')
    ]);

    const totalSadyaCount = (sadyaData.data || []).reduce((sum, reg) => sum + reg.sadya_count, 0);
    const totalDonationAmount = (donationData.data || []).reduce((sum, don) => sum + don.donation_amount, 0);

    return {
      malayaleeRegistrations: malayaleeCount.count || 0,
      sadyaRegistrations: sadyaData.data?.length || 0,
      totalSadyaCount,
      thiruvathiraRegistrations: thiruvathiraCount.count || 0,
      culturalRegistrations: culturalCount.count || 0,
      totalDonations: donationData.data?.length || 0,
      totalDonationAmount
    };
  } catch (error) {
    console.error('Error fetching statistics:', error);
    return {
      malayaleeRegistrations: 0,
      sadyaRegistrations: 0,
      totalSadyaCount: 0,
      thiruvathiraRegistrations: 0,
      culturalRegistrations: 0,
      totalDonations: 0,
      totalDonationAmount: 0
    };
  }
};