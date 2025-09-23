import { Profile } from "@/types/users";
import { createClient } from "@/utils/supabase/client";

export async function getAllUsers(): Promise<Profile[]> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error trayendo usuarios:", error.message);
    throw new Error(error.message);
  }

  return data as Profile[];
}
