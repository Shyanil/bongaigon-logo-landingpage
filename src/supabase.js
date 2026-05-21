import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  "https://asxwdvtxfffmivcbdwxp.supabase.co";

const supabaseAnonKey =
  "sb_publishable_4o4R6aGlxW1UP-cdW8xJkg_A2Xw89Wp";

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);