import { supabase } from '../lib/supabase';
import type { 
  MalayaleeRegistration, 
  SadyaRegistration, 
  ThiruvathiraRegistration, 
  CulturalRegistration, 
  Donation 
} from '../lib/supabase';

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
  },

  async delete(id: number) {
    console.log('🗑️ [MALAYALEE] === STARTING DELETE PROCESS ===');
    console.log('🗑️ [MALAYALEE] Input ID:', id);
    console.log('🗑️ [MALAYALEE] ID type:', typeof id);
    console.log('🗑️ [MALAYALEE] ID value check:', { id, isNumber: !isNaN(id), isInteger: Number.isInteger(id) });
    
    // Validate ID
    if (!id || isNaN(id) || !Number.isInteger(id)) {
      console.error('🗑️ [MALAYALEE] Invalid ID provided:', id);
      throw new Error(`Invalid ID: ${id}. Must be a valid integer.`);
    }

    // First check if the record exists
    console.log('🗑️ [MALAYALEE] Checking if record exists...');
    const { data: existingRecord, error: checkError } = await supabase
      .from('malayalee_registrations')
      .select('id, full_name, email')
      .eq('id', id)
      .single();
    
    console.log('🗑️ [MALAYALEE] Existence check result:', { existingRecord, checkError });
    
    if (checkError) {
      console.error('🗑️ [MALAYALEE] Error checking record existence:', checkError);
      if (checkError.code === 'PGRST116') {
        throw new Error(`Record with ID ${id} not found`);
      }
      throw new Error(`Failed to verify record: ${checkError.message}`);
    }
    
    if (!existingRecord) {
      console.error('🗑️ [MALAYALEE] No record found with ID:', id);
      throw new Error(`Record with ID ${id} not found`);
    }
    
    console.log('🗑️ [MALAYALEE] Found record to delete:', existingRecord);
    console.log('🗑️ [MALAYALEE] Proceeding with deletion...');
    
    const { error } = await supabase
      .from('malayalee_registrations')
      .delete()
      .eq('id', id);
    
    console.log('🗑️ [MALAYALEE] Delete operation result:', { error });
    
    if (error) {
      console.error('🗑️ [MALAYALEE] Database delete error:', error);
      console.error('🗑️ [MALAYALEE] Error details:', {
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code
      });
      throw new Error(`Failed to delete malayalee registration: ${error.message}`);
    }
    
    console.log('🗑️ [MALAYALEE] === DELETE SUCCESSFUL ===');
    return true;
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
  },

  async delete(id: number) {
    console.log('🗑️ [SADYA] === STARTING DELETE PROCESS ===');
    console.log('🗑️ [SADYA] Input ID:', id);
    console.log('🗑️ [SADYA] ID type:', typeof id);
    console.log('🗑️ [SADYA] ID value check:', { id, isNumber: !isNaN(id), isInteger: Number.isInteger(id) });
    
    // Validate ID
    if (!id || isNaN(id) || !Number.isInteger(id)) {
      console.error('🗑️ [SADYA] Invalid ID provided:', id);
      throw new Error(`Invalid ID: ${id}. Must be a valid integer.`);
    }
    
    // First check if the record exists
    console.log('🗑️ [SADYA] Checking if record exists...');
    const { data: existingRecord, error: checkError } = await supabase
      .from('sadya_registrations')
      .select('id, full_name, registration_id, email')
      .eq('id', id)
      .single();
    
    console.log('🗑️ [SADYA] Existence check result:', { existingRecord, checkError });
    
    if (checkError) {
      console.error('🗑️ [SADYA] Error checking record existence:', checkError);
      if (checkError.code === 'PGRST116') {
        throw new Error(`Record with ID ${id} not found`);
      }
      throw new Error(`Failed to verify record: ${checkError.message}`);
    }
    
    if (!existingRecord) {
      console.error('🗑️ [SADYA] No record found with ID:', id);
      throw new Error(`Record with ID ${id} not found`);
    }
    
    console.log('🗑️ [SADYA] Found record to delete:', existingRecord);
    console.log('🗑️ [SADYA] Proceeding with deletion...');
    
    const { error } = await supabase
      .from('sadya_registrations')
      .delete()
      .eq('id', id);
    
    console.log('🗑️ [SADYA] Delete operation result:', { error });
    
    if (error) {
      console.error('🗑️ [SADYA] Database delete error:', error);
      console.error('🗑️ [SADYA] Error details:', {
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code
      });
      throw new Error(`Failed to delete sadya registration: ${error.message}`);
    }
    
    console.log('🗑️ [SADYA] === DELETE SUCCESSFUL ===');
    return true;
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
  },

  async delete(id: number) {
    console.log('🗑️ [THIRUVATHIRA] === STARTING DELETE PROCESS ===');
    console.log('🗑️ [THIRUVATHIRA] Input ID:', id);
    console.log('🗑️ [THIRUVATHIRA] ID type:', typeof id);
    console.log('🗑️ [THIRUVATHIRA] ID value check:', { id, isNumber: !isNaN(id), isInteger: Number.isInteger(id) });
    
    // Validate ID
    if (!id || isNaN(id) || !Number.isInteger(id)) {
      console.error('🗑️ [THIRUVATHIRA] Invalid ID provided:', id);
      throw new Error(`Invalid ID: ${id}. Must be a valid integer.`);
    }
    
    // First check if the record exists
    console.log('🗑️ [THIRUVATHIRA] Checking if record exists...');
    const { data: existingRecord, error: checkError } = await supabase
      .from('thiruvathira_registrations')
      .select('id, full_name, email')
      .eq('id', id)
      .single();
    
    console.log('🗑️ [THIRUVATHIRA] Existence check result:', { existingRecord, checkError });
    
    if (checkError) {
      console.error('🗑️ [THIRUVATHIRA] Error checking record existence:', checkError);
      if (checkError.code === 'PGRST116') {
        throw new Error(`Record with ID ${id} not found`);
      }
      throw new Error(`Failed to verify record: ${checkError.message}`);
    }
    
    if (!existingRecord) {
      console.error('🗑️ [THIRUVATHIRA] No record found with ID:', id);
      throw new Error(`Record with ID ${id} not found`);
    }
    
    console.log('🗑️ [THIRUVATHIRA] Found record to delete:', existingRecord);
    console.log('🗑️ [THIRUVATHIRA] Proceeding with deletion...');
    
    const { error } = await supabase
      .from('thiruvathira_registrations')
      .delete()
      .eq('id', id);
    
    if (error) {
      console.error('🗑️ [THIRUVATHIRA] Database delete error:', error);
      throw new Error(`Failed to delete thiruvathira registration: ${error.message}`);
    }
    
    console.log('🗑️ [THIRUVATHIRA] Thiruvathira registration deleted successfully');
    return true;
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
  },

  async delete(id: number) {
    console.log('🗑️ [CULTURAL] Starting deletion for ID:', id);
    console.log('🗑️ [CULTURAL] ID type:', typeof id);
    console.log('🗑️ [CULTURAL] ID value:', id);
    
    // First check if the record exists
    const { data: existingRecord, error: checkError } = await supabase
      .from('cultural_registrations')
      .select('id, participant_name')
      .eq('id', id)
      .single();
    
    if (checkError) {
      console.error('🗑️ [CULTURAL] Error checking record existence:', checkError);
      throw new Error(`Record not found: ${checkError.message}`);
    }
    
    console.log('🗑️ [CULTURAL] Found record to delete:', existingRecord);
    
    const { error } = await supabase
      .from('cultural_registrations')
      .delete()
      .eq('id', id);
    
    if (error) {
      console.error('🗑️ [CULTURAL] Database delete error:', error);
      console.error('🗑️ [CULTURAL] Error details:', {
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code
      });
      throw new Error(`Failed to delete cultural registration: ${error.message}`);
    }
    
    console.log('🗑️ [CULTURAL] Cultural registration deleted successfully');
    return true;
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
  },

  async delete(id: number) {
    console.log('🗑️ [DONATION] Starting deletion for ID:', id);
    
    // First check if the record exists
    const { data: existingRecord, error: checkError } = await supabase
      .from('donations')
      .select('id, donor_name')
      .eq('id', id)
      .single();
    
    if (checkError) {
      console.error('🗑️ [DONATION] Error checking record existence:', checkError);
      throw new Error(`Record not found: ${checkError.message}`);
    }
    
    console.log('🗑️ [DONATION] Found record to delete:', existingRecord);
    
    const { error } = await supabase
      .from('donations')
      .delete()
      .eq('id', id);
    
    if (error) {
      console.error('🗑️ [DONATION] Database delete error:', error);
      throw new Error(`Failed to delete donation: ${error.message}`);
    }
    
    console.log('🗑️ [DONATION] Donation deleted successfully');
    return true;
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