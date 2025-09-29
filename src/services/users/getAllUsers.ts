import { Profile } from "@/types/users";
import { createClient } from "@/utils/supabase/client";

export async function getAllUsers(): Promise<Profile[]> {
  const supabase = createClient();

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    console.error("No se pudo obtener el usuario actual:", userError?.message);
    throw new Error(userError?.message || "Usuario no autenticado");
  }

  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .neq("id", user.id)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error trayendo usuarios:", error.message);
    throw new Error(error.message);
  }

  return data as Profile[];
}
