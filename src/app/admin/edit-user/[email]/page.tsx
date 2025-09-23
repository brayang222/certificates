import { UserForm } from "@/components/admin/UserForm";
import { getUserByEmail } from "@/services/users/getUserByEmail";
import { Profile } from "@/types/users";

async function page({ params }: { params: { email: string } }) {
  const { email } = await params;
  const decodedEmail = decodeURIComponent(email);

  const user = await getUserByEmail(decodedEmail);
  console.log(decodedEmail);
  return (
    <main className="flex h-full w-full flex-col items-center justify-center gap-5 p-10">
      <UserForm user={user as Profile} />
    </main>
  );
}

export default page;
