import { createClient } from '@supabase/supabase-js';

// Log environment variables to debug
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

console.log('Supabase URL from env:', supabaseUrl);
console.log('Supabase Key from env:', supabaseKey);

// Check if variables are missing
if (!supabaseUrl) {
  console.error('REACT_APP_SUPABASE_URL is not defined in .env');
}
if (!supabaseKey) {
  console.error('REACT_APP_SUPABASE_ANON_KEY is not defined in .env');
}

// Throw a clear error if either is missing
if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase credentials. Check .env file and ensure REACT_APP_SUPABASE_URL and REACT_APP_SUPABASE_ANON_KEY are set.');
}

export const supabase = createClient(supabaseUrl, supabaseKey);