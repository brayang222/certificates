"use server";

import { SUPABASE_SERVICE_ROLE_KEY, SUPABASE_URL } from "@/constants";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(SUPABASE_URL!, SUPABASE_SERVICE_ROLE_KEY!);

export async function uploadCertificates(files: File[], userId: string) {
  const uploadedUrls: string[] = [];

  for (const file of files) {
    const filePath = `${userId}/${Date.now()}-${file.name}`;

    const { data, error } = await supabase.storage
      .from("certificates")
      .upload(filePath, file);

    if (error) {
      console.error("Error subiendo:", file.name, error.message);
      continue;
    }

    const publicUrl = `${SUPABASE_URL}/storage/v1/object/public/certificates/${data.path}`;
    uploadedUrls.push(publicUrl);
  }

  return uploadedUrls;
}
