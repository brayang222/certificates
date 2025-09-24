import { UserForm } from "@/components/admin/UserForm";
import { BackButton } from "@/components/BackButton";
import { getUserByEmail } from "@/services/users/getUserByEmail";
import { Profile } from "@/types/users";

async function EditUserPage({ params }: { params: { email: string } }) {
  const { email } = await params;
  const decodedEmail = decodeURIComponent(email);

  const user = await getUserByEmail(decodedEmail);
  console.log(decodedEmail);
  return (
    <main className="flex h-full w-full flex-col items-center justify-center gap-5 p-10">
      <BackButton />
      <UserForm user={user as Profile} />
    </main>
  );
}

export default EditUserPage;
