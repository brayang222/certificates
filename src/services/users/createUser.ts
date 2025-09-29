import { Profile } from "@/types/users";
import { updateUser } from "./updateUser";
import { createClient } from "@/utils/supabase/client";

export async function createUser(user: Profile) {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signUp({
    email: user.email as string,
    password: user.password as string,
    options: {
      emailRedirectTo: undefined,
    },
  });

  if (error) {
    console.error(error);
    return { success: false, error };
  }

  const userId = data.user?.id;

  if (!userId) {
    throw new Error("No se pudo obtener el ID del usuario creado en Auth");
  }
  await updateUser(user, userId);

  return { success: true, userId };
}
