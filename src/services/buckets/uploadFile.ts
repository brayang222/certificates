"use server";

import { SUPABASE_SERVICE_ROLE_KEY, SUPABASE_URL } from "@/constants";
import { errorHandler } from "@/lib/errorHandler";
import { createClient } from "@supabase/supabase-js";
import { updateAvatar } from "../users/updateAvatar";

export async function uploadFile(file: File, userId: string) {
  const supabase = createClient(SUPABASE_URL!, SUPABASE_SERVICE_ROLE_KEY!);

  const { data, error } = await supabase.storage
    .from("avatars")
    .upload(userId, file);

  const publicUrl = `${SUPABASE_URL}/storage/v1/object/public/avatars/${data?.path}`;
  await updateAvatar(publicUrl as string, userId);
  console.log("NUEVO AVATAR", publicUrl);

  if (error) {
    errorHandler(error);
  } else {
    console.log(data);
  }
}
