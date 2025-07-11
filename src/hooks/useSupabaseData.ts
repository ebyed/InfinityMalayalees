import { useState, useEffect } from 'react';
import { 
  malayaleeRegistrations, 
  sadyaRegistrations, 
  thiruvathiraRegistrations, 
  culturalRegistrations, 
  donations,
  getStatistics 
} from '../lib/database';
import type { 
  MalayaleeRegistration, 
  SadyaRegistration, 
  ThiruvathiraRegistration, 
  CulturalRegistration, 
  Donation 
} from '../lib/supabase';

export const useSupabaseData = () => {
  const [data, setData] = useState({
    malayaleeRegistrations: [] as MalayaleeRegistration[],
    sadyaRegistrations: [] as SadyaRegistration[],
    thiruvathiraRegistrations: [] as ThiruvathiraRegistration[],
    culturalRegistrations: [] as CulturalRegistration[],
    donations: [] as Donation[],
    statistics: {
      malayaleeRegistrations: 0,
      sadyaRegistrations: 0,
      totalSadyaCount: 0,
      thiruvathiraRegistrations: 0,
      culturalRegistrations: 0,
      totalDonations: 0,
      totalDonationAmount: 0
    }
  });
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAllData = async () => {
    try {
      console.log('Fetching all data...');
      setLoading(true);
      setError(null);

      const [
        malayaleeData,
        sadyaData,
        thiruvathiraData,
        culturalData,
        donationData,
        stats
      ] = await Promise.all([
        malayaleeRegistrations.getAll(),
        sadyaRegistrations.getAll(),
        thiruvathiraRegistrations.getAll(),
        culturalRegistrations.getAll(),
        donations.getAll(),
        getStatistics()
      ]);

      console.log('Fetched data:', {
        malayalee: malayaleeData.length,
        sadya: sadyaData.length,
        thiruvathira: thiruvathiraData.length,
        cultural: culturalData.length,
        donations: donationData.length
      });
      setData({
        malayaleeRegistrations: malayaleeData,
        sadyaRegistrations: sadyaData,
        thiruvathiraRegistrations: thiruvathiraData,
        culturalRegistrations: culturalData,
        donations: donationData,
        statistics: stats
      });
    } catch (err) {
      console.error('Error fetching data:', err);
      setError(err instanceof Error ? err.message : 'An error occurred while fetching data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  const refetch = () => {
    console.log('Refetching data...');
    fetchAllData();
  };

  return { data, setData, loading, error, refetch };
};

// Individual hooks for specific data types
export const useMalayaleeRegistrations = () => {
  const [data, setData] = useState<MalayaleeRegistration[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await malayaleeRegistrations.getAll();
      setData(result);
    } catch (err) {
      console.error('Error fetching malayalee registrations:', err);
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error, refetch: fetchData };
};

export const useSadyaRegistrations = () => {
  const [data, setData] = useState<SadyaRegistration[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await sadyaRegistrations.getAll();
      setData(result);
    } catch (err) {
      console.error('Error fetching sadya registrations:', err);
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error, refetch: fetchData };
};

export const useThiruvathiraRegistrations = () => {
  const [data, setData] = useState<ThiruvathiraRegistration[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await thiruvathiraRegistrations.getAll();
      setData(result);
    } catch (err) {
      console.error('Error fetching thiruvathira registrations:', err);
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error, refetch: fetchData };
};

export const useCulturalRegistrations = () => {
  const [data, setData] = useState<CulturalRegistration[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await culturalRegistrations.getAll();
      setData(result);
    } catch (err) {
      console.error('Error fetching cultural registrations:', err);
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error, refetch: fetchData };
};

export const useDonations = () => {
  const [data, setData] = useState<Donation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await donations.getAll();
      setData(result);
    } catch (err) {
      console.error('Error fetching donations:', err);
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error, refetch: fetchData };
};