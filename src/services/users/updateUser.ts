import { Profile } from "@/app/types/users";
import { SUPABASE } from "@/lib/supabaseClient";

export async function updateUser(user: Profile, userId?: string) {
  const {password, name, lastname, ...rest } = user;

  const data = {
    ...rest,
    full_name: `${name} ${lastname}`.trim(),
  };

  const { error: updateError, status } = await SUPABASE.from("profiles")
    .update(data)
    .eq("id", userId ?? user.id);

  console.log(status);
  if (updateError) {
    console.error("Error actualizando perfil:", updateError.message, password);
    console.log(status);
    throw new Error(updateError.message);
  }

  return { success: true, user };
}
