import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://kzpoqamblhosqgmwgrvk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt6cG9xYW1ibGhvc3FnbXdncnZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUyMjY3NzEsImV4cCI6MjA1MDgwMjc3MX0.Re8ncaufNZw-SrKXAX0zbXC_7Ms0ofMyIWN-xOZPkTg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
