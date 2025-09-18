import { SUPABASE } from "./supabaseClient";

export async function waitForProfile(userId: string, retries = 5, delay = 300) {
  for (let i = 0; i < retries; i++) {
    const { data, error } = await SUPABASE
      .from("profiles")
      .select("id")
      .eq("id", userId)
      .single();

    if (data) return true;

    // esperar antes de volver a intentar
    await new Promise((r) => setTimeout(r, delay));
  }
  throw new Error("El profile no se creó en Supabase a tiempo");
}
