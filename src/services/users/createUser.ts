import { Profile } from "@/types/users";
import { SUPABASE } from "@/lib/supabaseClient";
import { updateUser } from "./updateUser";

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
  console.log(user)
   await updateUser(user, userId);

  return { success: true, userId };
}
