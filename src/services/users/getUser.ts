import { SUPABASE } from "@/lib/supabaseClient";

export async function getUsers () {
    const { data: profile } = await SUPABASE
  .from("profiles")
  .select("id, full_name")
}