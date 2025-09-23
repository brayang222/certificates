import { createClient } from "@/utils/supabase/client";

export async function deleteUser(userId: string) {
  const supabase = createClient();

  const { error } = await supabase.from("profiles").delete().eq("id", userId);

  if (error) {
    console.error("Error actualizando perfil:", error.message);
    console.log(status);
    throw new Error(error.message);
  }

  return { success: true, userId };
}
