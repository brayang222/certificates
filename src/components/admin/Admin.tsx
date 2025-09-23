import { signout } from "@/lib/auth-actions";
import { UserForm } from "./UserForm";
import { UsersTable } from "./UsersTable";

export const Admin = () => {
  return (
    <main className="w-full h-[100vh] flex flex-col items-center">
      <nav className="flex items-center justify-center w-full bg-black text-white py-4">
        <h1 className="text-2xl font-bold"> Vista Admin</h1>
      </nav>
      <section className="flex flex-row gap-4 p-8 w-full h-fit mb-10 items-start justify-evenly">
        <div className="flex flex-col gap-4 ">
          <form className="flex flex-col gap-4 min-w-sm px-4">
            <button
              formAction={signout}
              className="rounded-sm bg-red-700 py-2 text-white cursor-pointer"
            >
              Cerrar Sesión
            </button>
            <UserForm />
          </form>
        </div>
        <UsersTable />
      </section>
    </main>
  );
};
