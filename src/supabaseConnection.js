import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://uhbacyouvigznochrspt.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVoYmFjeW91dmlnem5vY2hyc3B0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg1MjkwNTgsImV4cCI6MjAyNDEwNTA1OH0.5HUXKwRgNQV0chxu4151b_DWTbUexaGyPqQRI_ypA90"
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase;