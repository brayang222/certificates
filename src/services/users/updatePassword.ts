"use server";

import { SUPABASE_SERVICE_ROLE_KEY, SUPABASE_URL } from "@/constants";
import { createClient } from "@supabase/supabase-js";

const supabaseAdmin = createClient(SUPABASE_URL!, SUPABASE_SERVICE_ROLE_KEY!);

export async function adminUpdatePassword(userId: string, newPassword: string) {
  const { data, error } = await supabaseAdmin.auth.admin.updateUserById(
    userId,
    {
      password: newPassword,
    }
  );

  if (error) return { success: false, error };
  return data;
}
