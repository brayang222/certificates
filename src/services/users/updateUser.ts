import { Profile } from "@/types/users";
import { createClient } from "@/utils/supabase/client";

export async function updateUser(user: Profile, userId?: string) {
  const { password, name, lastName, ...rest } = user;
  const supabase = createClient();

  const data = {
    ...rest,
    full_name: `${name} ${lastName}`.trim(),
  };

  const { error: updateError, status } = await supabase
    .from("profiles")
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
