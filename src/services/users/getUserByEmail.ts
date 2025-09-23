import { Profile } from "@/types/users";
import { createClient } from "@/utils/supabase/client";

export async function getUserByEmail(email: string): Promise<Profile | null> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("email", email)
    .single();

  if (error) {
    console.error("Error trayendo usuario:", error.message);
    return null;
  }

  if (!data) {
    console.warn("No se encontró el usuario con email:", email);
    return null;
  }

  return data as Profile;
}
