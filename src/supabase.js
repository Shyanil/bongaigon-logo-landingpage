import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://asxwdvtxfffmivcbdwxp.supabase.co";

const supabaseAnonKey =
  "sb_publishable_4o4R6aGlxW1UP-cdW8xJkg_A2Xw89Wp";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/* UTM Helper */
export const getUTMData = () => {
  const params = new URLSearchParams(window.location.search);

  const getParamValue = (key, fallback = "direct") => {
    const value = params.get(key);

    if (value && value.trim() !== "") {
      return value.trim();
    }

    return fallback;
  };

  return {
    utm_source: getParamValue("utm_source", "direct"),
    utm_medium: getParamValue("utm_medium", "direct"),
    utm_campaign: getParamValue("utm_campaign", "direct"),
    utm_term: getParamValue("utm_term", "direct"),
    utm_content: getParamValue("utm_content", "direct"),
    page_url: window.location.href,
  };
};