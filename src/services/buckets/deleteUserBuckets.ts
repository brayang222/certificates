"use server";

import { SUPABASE_SERVICE_ROLE_KEY, SUPABASE_URL } from "@/constants";
import { errorHandler } from "@/lib/errorHandler";
import { createClient } from "@supabase/supabase-js";
import { deleteFile } from "./deleteFile";

export async function deleteUserBuckets(userId: string) {
  const supabase = createClient(SUPABASE_URL!, SUPABASE_SERVICE_ROLE_KEY!);

  const { data, error } = await supabase.storage
    .from("certificates")
    .remove([`${userId}/`]);

  await deleteFile(userId);

  if (error) {
    errorHandler(error);
  } else {
    console.log(data);
  }
}
