import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  "https://asxwdvtxfffmivcbdwxp.supabase.co";

const supabaseAnonKey =
  "sb_publishable_4o4R6aGlxW1UP-cdW8xJkg_A2Xw89Wp";

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);

/* UTM Helper */
export const getUTMData = () => {
  const params = new URLSearchParams(window.location.search);

  return {
    utm_source: params.get("utm_source") || "",
    utm_medium: params.get("utm_medium") || "",
    utm_campaign: params.get("utm_campaign") || "",
    utm_term: params.get("utm_term") || "",
    utm_content: params.get("utm_content") || "",
    page_url: window.location.href,
  };
};