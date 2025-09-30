import { Profile } from "@/types/users";
import { createClient } from "@/utils/supabase/client";

export async function updateUser(user: Profile, userId?: string) {
  const { password, name, lastname, discharge_date, ...rest } = user;
  const supabase = createClient();

  const data = {
    ...rest,
    name,
    lastname,
    full_name: `${name} ${lastname}`.trim(),
    discharge_date: discharge_date === "" ? null : discharge_date,
  };

  const { error: updateError, status } = await supabase
    .from("profiles")
    .update(data)
    .eq("id", userId ?? user.id);

  console.log(status);
  if (updateError) {
    console.error("Error actualizando perfil:", updateError.message, password);
    return { success: false, updateError };
  }

  return { success: true, user };
}
