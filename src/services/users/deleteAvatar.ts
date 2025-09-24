import { errorHandler } from "@/lib/errorHandler";
import { createClient } from "@/utils/supabase/client";

export async function deleteAvatar(userId?: string) {
  const supabase = createClient();

  const { error: deleteError } = await supabase
    .from("profiles")
    .update({ avatar_url: null })
    .eq("id", userId);

  if (deleteError) {
    errorHandler(deleteError);
  }

  return { success: true };
}
