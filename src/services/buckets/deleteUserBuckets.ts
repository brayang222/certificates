"use server";

import { SUPABASE_SERVICE_ROLE_KEY, SUPABASE_URL } from "@/constants";
import { createClient } from "@supabase/supabase-js";

export async function deleteUserBuckets(userId: string) {
  const supabase = createClient(SUPABASE_URL!, SUPABASE_SERVICE_ROLE_KEY!);

  const { data: files, error: listError } = await supabase.storage
    .from("certificates")
    .list(userId);

  if (listError) {
    return { success: false, error: listError };
  }

  if (!files || files.length === 0) {
    console.log("No hay archivos en la carpeta.");
    return { success: true };
  }

  const paths = files.map((file) => `${userId}/${file.name}`);

  const { error: removeError } = await supabase.storage
    .from("certificates")
    .remove(paths);

  if (removeError) {
    return { success: false, error: removeError };
  }

  console.log("Archivos eliminados:", paths);

  return { success: true };
}
