import { Profile } from "@/app/types/users"
import { SUPABASE } from "@/lib/supabaseClient"

export async function getUserById(userId: string): Promise<Profile | null> {
  const { data, error } = await SUPABASE
    .from("profiles")
    .select("*")
    .eq("id", userId)
    .single()

  if (error) {
    console.error("Error trayendo usuario:", error.message)
    return null
  }

  return data as Profile
}