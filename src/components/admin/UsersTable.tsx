"use client";
import { errorHandler } from "@/hooks/useErrorHandler";
import { useUsers } from "@/hooks/useUsers";
import { deleteUser } from "@/services/users/deleteUser";
import { toast } from "sonner";

export const UsersTable = () => {
  const { users, setUsers } = useUsers();

  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm(
      "¿Seguro que quieres eliminar este usuario?"
    );
    if (!confirmDelete) return;

    try {
      await deleteUser(id);
      toast.warning("Usuario eliminado con exito");
      setUsers((prev) => prev.filter((u) => u.id !== id));
    } catch (err: unknown) {
      errorHandler(err);
    }
  };

  console.log(users);
  return (
    <table className=" border border-black">
      <thead className="bg-black text-white">
        <tr className="">
          <th className="border border-black px-2 py-1">Cédula</th>
          <th className="border border-black px-2 py-1">Nombre</th>
          <th className="border border-black px-2 py-1">Teléfono</th>
          <th className="border border-black px-2 py-1">Correo</th>
          <th className="border border-black px-2 py-1">Estado</th>
          <th className="border border-black px-2 py-1">Descargas</th>
          <th className="border border-black px-2 py-1">Ver</th>
          <th className="border border-black px-2 py-1">Eliminar</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr className="text-center" key={user.id}>
            <td className="border border-black px-2 py-1">
              {user.identification}
            </td>
            <td className="border border-black px-2 py-1">{user.full_name}</td>
            <td className="border border-black px-2 py-1">{user.phone}</td>
            <td className="border border-black px-2 py-1">{user.email}</td>
            <td className="border border-black px-2 py-1">{user.status}</td>
            <td className="border border-black px-2 py-1">{user.downloads}</td>
            <td
              className="border border-black bg-amber-400 px-2 py-1 cursor-pointer"
              onClick={() => {
                window.location.href = `admin/user-view/${user.email}`;
              }}
            >
              Ver
            </td>
            <td
              className="border border-black bg-red-500 px-2 py-1 text-white cursor-pointer"
              onClick={() => handleDelete(user.id as string)}
            >
              Eliminar
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
