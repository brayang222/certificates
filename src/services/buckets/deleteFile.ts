"use server";

import { SUPABASE_SERVICE_ROLE_KEY, SUPABASE_URL } from "@/constants";
import { createClient } from "@supabase/supabase-js";

export async function deleteFile(userId: string) {
  const supabase = createClient(SUPABASE_URL!, SUPABASE_SERVICE_ROLE_KEY!);

  const { data, error } = await supabase.storage
    .from("avatars")
    .remove([userId]);

  if (error) {
    return { success: false, error };
  } else {
    console.log(data);
  }
}
