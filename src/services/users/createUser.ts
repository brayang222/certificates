import { Profile } from "@/app/types/users";
import { SUPABASE } from "@/lib/supabaseClient";
import { waitForProfile } from "@/lib/waitForUser";

export async function createUser(user: Profile) {
  const { data, error } = await SUPABASE.auth.signUp({
    email: user.email as string,
    password: user.password as string,
  });

  if (error) {
    console.error(error);
  }

  const userId = data.user?.id;

  if (!userId) {
    throw new Error("No se pudo obtener el ID del usuario creado en Auth");
  }

// await waitForProfile(userId);

const { error: updateError, status } = await SUPABASE
  .from("profiles")
  .update({
    identification: user.identification,
  })
  .eq("id", userId);

  console.log("status:" + status + "id:" + user.identification + "id: " + userId)
if (updateError) {
  console.error("Error actualizando perfil:", updateError.message);
  throw new Error(updateError.message);
}

  return { success: true, userId };
}
