import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = () => {
  return Boolean(
    supabaseUrl &&
    supabaseAnonKey &&
    !supabaseUrl.includes('your-project-id') &&
    !supabaseAnonKey.includes('your-anon-key-here')
  );
};

export const supabase = isSupabaseConfigured()
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Auth helper functions
export const signInWithSupabase = async (email, password) => {
  if (!isSupabaseConfigured() || !supabase) {
    throw new Error('Supabase is not configured yet. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your environment variables.');
  }
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw error;
  return data;
};

export const signUpWithSupabase = async (email, password) => {
  if (!isSupabaseConfigured() || !supabase) {
    throw new Error('Supabase is not configured yet. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your environment variables.');
  }
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  if (error) throw error;
  return data;
};

export const signOutFromSupabase = async () => {
  if (isSupabaseConfigured() && supabase) {
    const { error } = await supabase.auth.signOut();
    if (error) console.error('Supabase signout error:', error);
  }
};

export const getSupabaseSession = async () => {
  if (!isSupabaseConfigured() || !supabase) return null;
  const { data } = await supabase.auth.getSession();
  return data.session;
};

export const onSupabaseAuthStateChange = (callback) => {
  if (!isSupabaseConfigured() || !supabase) return () => {};
  const { data: { subscription } } = supabase.auth.onAuthStateChange(callback);
  return () => subscription.unsubscribe();
};

// Database CRUD helpers
export const fetchOffersFromSupabase = async () => {
  if (!isSupabaseConfigured() || !supabase) return null;
  try {
    const { data, error } = await supabase
      .from('offers')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) {
      console.warn('Could not fetch offers from Supabase:', error.message);
      return null;
    }
    return data;
  } catch (err) {
    console.warn('Supabase fetch error:', err);
    return null;
  }
};

export const saveOfferToSupabase = async (offer) => {
  if (!isSupabaseConfigured() || !supabase) return null;
  try {
    const payload = {
      name: offer.name,
      image_url: offer.image_url,
      category: offer.category,
      brand: offer.brand || null,
      offer_type: offer.offer_type,
      value: String(offer.value),
      expiry_date: offer.expiry_date || null,
      is_featured: offer.is_featured || false,
      is_active: offer.is_active !== undefined ? offer.is_active : true,
      festival_tag: offer.festival_tag || null
    };

    // If ID is valid UUID or existing record, include id
    if (offer.id && offer.id.includes('-')) {
      payload.id = offer.id;
    }

    const { data, error } = await supabase
      .from('offers')
      .upsert(payload)
      .select();

    if (error) throw error;
    return data ? data[0] : null;
  } catch (err) {
    console.error('Error saving offer to Supabase:', err);
    throw err;
  }
};

export const deleteOfferFromSupabase = async (id) => {
  if (!isSupabaseConfigured() || !supabase) return false;
  try {
    const { error } = await supabase
      .from('offers')
      .delete()
      .eq('id', id);

    if (error) throw error;
    return true;
  } catch (err) {
    console.error('Error deleting offer from Supabase:', err);
    throw err;
  }
};

export const fetchSiteSettingsFromSupabase = async () => {
  if (!isSupabaseConfigured() || !supabase) return null;
  try {
    const { data, error } = await supabase
      .from('site_settings')
      .select('*')
      .eq('key', 'banner')
      .single();

    if (error) {
      console.warn('Could not fetch site settings from Supabase:', error.message);
      return null;
    }
    return data ? data.value : null;
  } catch (err) {
    console.warn('Supabase site settings fetch error:', err);
    return null;
  }
};

export const saveSiteSettingToSupabase = async (key, value) => {
  if (!isSupabaseConfigured() || !supabase) return null;
  try {
    const { data, error } = await supabase
      .from('site_settings')
      .upsert({ key, value, updated_at: new Date().toISOString() })
      .select();

    if (error) throw error;
    return data ? data[0] : null;
  } catch (err) {
    console.error('Error saving site setting to Supabase:', err);
    throw err;
  }
};
