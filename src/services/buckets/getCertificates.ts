import { SUPABASE_URL } from "@/constants";
import { createClient } from "@/utils/supabase/client";

export async function getCertificates(userId: string) {
  const supabase = createClient();
  const { data, error } = await supabase.storage
    .from("certificates")
    .list(userId);

  if (error) throw error;

  return data.map(
    (file) =>
      `${SUPABASE_URL}/storage/v1/object/public/certificates/${userId}/${file.name}`
  );
}
