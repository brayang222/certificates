import { Profile } from "@/types/users"
import { SUPABASE } from "@/lib/supabaseClient"

export async function getAllUsers(): Promise<Profile[]> {
  const { data, error } = await SUPABASE
    .from("profiles")
    .select("*")
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error trayendo usuarios:", error.message)
    throw new Error(error.message)
  }

  return data as Profile[];
}