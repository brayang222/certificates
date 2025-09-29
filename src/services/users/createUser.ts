"use server";
import { createClient } from "@supabase/supabase-js";
import { SUPABASE_SERVICE_ROLE_KEY, SUPABASE_URL } from "@/constants";
import { Profile } from "@/types/users";
import { updateUser } from "./updateUser";

export async function createUser(user: Profile) {
  const supabase = createClient(SUPABASE_URL!, SUPABASE_SERVICE_ROLE_KEY!);
  const { data, error } = await supabase.auth.admin.createUser({
    email: user.email,
    password: user.password,
    email_confirm: true,
  });

  if (error) {
    console.error(error);
    return { success: false, error };
  }

  const userId = data.user?.id;
  if (!userId)
    throw new Error("No se pudo obtener el ID del usuario creado en Auth");

  await updateUser(user, userId);

  return { success: true, userId };
}
