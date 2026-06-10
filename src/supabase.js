import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xgkkooklaijfxercjjvy.supabase.co";

const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhna2tvb2tsYWlqZnhlcmNqanZ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEwNzAwODUsImV4cCI6MjA5NjY0NjA4NX0.HHpuifBbBDXxMRa6GN0lYIpqpcLLdmSi2sRjRJ9NyGg";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/* UTM Helper */
export const getUTMData = () => {
  const params = new URLSearchParams(window.location.search);

  return {
    utm_source: params.get("utm_source") || "direct",
    utm_medium: params.get("utm_medium") || "",
    utm_campaign: params.get("utm_campaign") || "",
    utm_term: params.get("utm_term") || "",
    utm_content: params.get("utm_content") || "",
    page_url: window.location.href,
  };
};