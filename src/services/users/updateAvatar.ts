import { errorHandler } from "@/lib/errorHandler";
import { createClient } from "@/utils/supabase/client";

export async function updateAvatar(fileUrl: string, userId?: string) {
  const supabase = createClient();

  const { error: updateError } = await supabase
    .from("profiles")
    .update({ avatar_url: fileUrl })
    .eq("id", userId);

  if (updateError) {
    errorHandler(updateError);
  }

  return { success: true, fileUrl };
}
