import { errorHandler } from "@/lib/errorHandler";
import { createClient } from "@/utils/supabase/client";
import { deleteFile } from "../buckets/deleteFile";

export async function deleteAvatar(userId?: string) {
  const supabase = createClient();

  const { error: deleteError } = await supabase
    .from("profiles")
    .update({ avatar_url: null })
    .eq("id", userId);

  await deleteFile(userId!);
  console.log("AVATAR ELIMINADO");

  if (deleteError) {
    errorHandler(deleteError);
  }

  return { success: true };
}
