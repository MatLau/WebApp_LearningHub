import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

async function testProfiles() {
  console.log("Testing connection to Supabase...");
  const { data, error } = await supabase.from('profiles').select('*').limit(1);
  if (error) {
    console.error("Error querying profiles:", error);
  } else {
    console.log("Successfully queried profiles. Data:", data);
  }

  const { data: progData, error: progError } = await supabase.from('user_progress').select('*').limit(1);
  if (progError) {
    console.error("Error querying user_progress:", progError);
  } else {
    console.log("Successfully queried user_progress. Data:", progData);
  }
}

testProfiles();
