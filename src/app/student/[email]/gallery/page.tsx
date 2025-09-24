"use server";

import { Gallery } from "@/components/user/Gallery";
import { getUserByEmail } from "@/services/users/getUserByEmail";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

async function GalleryPage() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  const user = await getUserByEmail(data?.user?.email as string);

  if (error) {
    console.error("Error fetching user:", error.message);
    redirect("/login");
  }

  return <Gallery user={user!} />;
}

export default GalleryPage;
