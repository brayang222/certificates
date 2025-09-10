import { DB_PASSWORD, DB_URL } from "@/constants";
import { createClient } from "@supabase/supabase-js";


export const SUPABASE = createClient(DB_URL as string, DB_PASSWORD as string);