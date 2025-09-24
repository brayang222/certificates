"use server";

import { SUPABASE_SERVICE_ROLE_KEY, SUPABASE_URL } from "@/constants";
import { errorHandler } from "@/lib/errorHandler";
import { createClient } from "@supabase/supabase-js";
import { deleteAvatar } from "../users/deleteAvatar";

export async function deleteFile(userId: string) {
  const supabase = createClient(SUPABASE_URL!, SUPABASE_SERVICE_ROLE_KEY!);

  const { data, error } = await supabase.storage
    .from("avatars")
    .remove([userId]);

  await deleteAvatar(userId);
  console.log("AVATAR ELIMINADO");

  if (error) {
    errorHandler(error);
  } else {
    console.log(data);
  }
}
