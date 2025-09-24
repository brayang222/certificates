import { UserInformation } from "@/components/user/UserInformation";
import { getUserByEmail } from "@/services/users/getUserByEmail";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function StudentsPage() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  const user = await getUserByEmail(data?.user?.email as string);

  if (error) {
    console.error("Error fetching user:", error.message);
    redirect("/login");
  }

  return (
    <main className="flex h-screen w-full flex-col items-center justify-center gap-5 p-10">
      <UserInformation user={user!} />
      <a
        className="w-60 bg-green-500 text-white text-lg px-4 py-2 rounded-md cursor-pointer"
        href={`/student/${user?.email}/gallery`}
      >
        Ver Galerias
      </a>
    </main>
  );
}
