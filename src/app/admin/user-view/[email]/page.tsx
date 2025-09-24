import { BackButton } from "@/components/BackButton";
import { UploadingImages } from "@/components/UploadingImages";
import { UserInformation } from "@/components/user/UserInformation";
import { getUserByEmail } from "@/services/users/getUserByEmail";

async function UserViewPage({ params }: { params: { email: string } }) {
  const { email } = await params;
  const decodedEmail = decodeURIComponent(email);
  const user = await getUserByEmail(decodedEmail);

  return (
    <main className="flex h-full w-full flex-col items-center justify-center gap-5 p-10">
      <BackButton />
      <UserInformation user={user!} />
      <a
        href={`/admin/edit-user/${decodedEmail}`}
        className="w-60 bg-black text-white text-lg px-4 py-2 rounded-md cursor-pointer"
      >
        Editar datos usuario
      </a>
      <UploadingImages user={user!} />
    </main>
  );
}

export default UserViewPage;
