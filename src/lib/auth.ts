import { supabase } from './supabase';

export interface AdminUser {
  id: string;
  username: string;
  created_at: string;
  last_login?: string;
  is_active: boolean;
}

export const adminAuth = {
  async login(username: string, password: string): Promise<boolean> {
    try {
      // Call the database function to verify login
      const { data, error } = await supabase.rpc('verify_admin_login', {
        input_username: username,
        input_password: password
      });

      if (error) {
        console.error('Login error:', error);
        return false;
      }

      if (data) {
        // Store login state in localStorage
        localStorage.setItem('admin_logged_in', 'true');
        localStorage.setItem('admin_username', username);
        return true;
      }

      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  },

  logout(): void {
    localStorage.removeItem('admin_logged_in');
    localStorage.removeItem('admin_username');
  },

  isLoggedIn(): boolean {
    return localStorage.getItem('admin_logged_in') === 'true';
  },

  getCurrentUser(): string | null {
    return localStorage.getItem('admin_username');
  },

  async createAdmin(username: string, password: string): Promise<boolean> {
    try {
      // For demo purposes, using simple password storage
      // In production, you should hash the password properly
      const { error } = await supabase
        .from('admin_users')
        .insert([{
          username,
          password_hash: password // In production, use proper bcrypt hash
        }]);

      if (error) {
        console.error('Error creating admin:', error);
        return false;
      }

      return true;
    } catch (error) {
      console.error('Error creating admin:', error);
      return false;
    }
  },

  async getAllAdmins(): Promise<AdminUser[]> {
    try {
      const { data, error } = await supabase
        .from('admin_users')
        .select('id, username, created_at, last_login, is_active')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching admins:', error);
        return [];
      }

      return data || [];
    } catch (error) {
      console.error('Error fetching admins:', error);
      return [];
    }
  }
};