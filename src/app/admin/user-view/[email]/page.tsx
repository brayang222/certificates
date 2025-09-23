import { UserInformation } from "@/components/user/UserInformation";
import { getUserByEmail } from "@/services/users/getUserByEmail";

async function UserView({ params }: { params: { email: string } }) {
  const { email } = await params;
  const decodedEmail = decodeURIComponent(email);
  const user = await getUserByEmail(decodedEmail);

  return (
    <main className="flex h-screen w-full flex-col items-center justify-center gap-5 p-10">
      <UserInformation user={user!} />
      <a
        href={`/admin/edit-user/${decodedEmail}`}
        className="w-60 bg-black text-white text-lg px-4 py-2 rounded-md cursor-pointer"
      >
        Editar Usuario
      </a>
    </main>
  );
}

export default UserView;
