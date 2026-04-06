import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://itrxdlcnsxdqgppdxzge.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0cnhkbGNuc3hkcWdwcGR4emdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUwNjk4MDAsImV4cCI6MjA5MDY0NTgwMH0.DlzSyAwkzJI85-hm53-ZWAZWmuEEOMUsaeVhASpEP2o";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
