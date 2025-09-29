import { signout } from "@/lib/auth-actions";
import { DoorOpen } from "lucide-react";

export const SignOutButton = () => {
  return (
    <form action={signout}>
      <button
        type="submit"
        className="flex flex-row gap-2 rounded-sm bg-red-700 py-2 text-white cursor-pointer px-4"
      >
        <DoorOpen />
        Cerrar Sesión
      </button>
    </form>
  );
};
