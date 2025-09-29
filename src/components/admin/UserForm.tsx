"use client";
import { errorHandler } from "@/hooks/useErrorHandler";
import { createUser } from "@/services/users/createUser";
import { adminUpdatePassword } from "@/services/users/updatePassword";
import { updateUser } from "@/services/users/updateUser";
import { Profile } from "@/types/users";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export const UserForm = ({ user }: { user?: Profile }) => {
  const [form, setForm] = useState({
    identification: "",
    name: user ? user.full_name?.split(" ")[0] : "",
    lastName: user ? user.full_name?.split(" ")[1] : "",
    phone: "",
    address: "",
    email: "",
    password: "",
    university: "",
    discharge_date: "",
    text: "",
    downloads: "desactivadas",
    role: "usuario",
    status: "en_proceso",
    created_at: new Date().toISOString(),
  });

  const router = useRouter();

  useEffect(() => {
    if (user) {
      setForm((prev) => ({ ...prev, ...user }));
    }
    console.log(user);
  }, [user]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value === "" ? null : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (user) {
        await updateUser(form);

        if (form.password.length > 5) {
          await adminUpdatePassword(user!.id!, form.password);
          alert("Usuario y contraseña actualizado con éxito 🚀");
        } else {
          alert("Usuario actualizado con éxito 🚀");
        }

        router.back();
      } else {
        const { success, error } = await createUser(form);

        if (!success) {
          toast.error(error?.message);
          return;
        }

        toast.success("Usuario creado con éxito ✅");
        window.location.reload();
      }
    } catch (err: unknown) {
      errorHandler(err);
    }
  };

  return (
    <form>
      <section className="flex flex-col gap-4 flex-1">
        <div className="flex flex-col gap-1">
          <label className="font-semibold">Cédula</label>
          <input
            value={form.identification ?? ""}
            type="text"
            name="identification"
            id="identification"
            className="border rounded-sm border-black p-1"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold" htmlFor="name">
            Nombre
          </label>
          <input
            value={form.name ?? ""}
            type="text"
            name="name"
            id="name"
            autoComplete="name"
            className="border rounded-sm border-black p-1"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold" htmlFor="lastName">
            Apellido
          </label>
          <input
            value={form.lastName ?? ""}
            type="text"
            name="lastName"
            id="lastName"
            autoComplete="lastName"
            className="border rounded-sm border-black p-1"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold" htmlFor="phone">
            Teléfono
          </label>
          <input
            value={form.phone ?? ""}
            type="text"
            name="phone"
            id="phone"
            autoComplete="phone"
            className="border rounded-sm border-black p-1"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold" htmlFor="address">
            Dirección
          </label>
          <input
            value={form.address ?? ""}
            type="text"
            name="address"
            id="address"
            autoComplete="address"
            className="border rounded-sm border-black p-1"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold" htmlFor="email">
            Correo
          </label>
          <input
            value={form.email ?? ""}
            name="email"
            id="email"
            autoComplete="email"
            type="text"
            className="border rounded-sm border-black p-1"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold" htmlFor="text">
            Texto
          </label>
          <input
            value={form.text ?? ""}
            type="text"
            name="text"
            autoComplete="text"
            id="text"
            className="border rounded-sm border-black p-1"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold" htmlFor="university">
            Universidad
          </label>
          <input
            value={form.university ?? ""}
            type="text"
            name="university"
            id="university"
            autoComplete="university"
            className="border rounded-sm border-black p-1"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold" htmlFor="discharge_date">
            Fecha de egreso
          </label>
          <input
            value={form.discharge_date ?? ""}
            type="date"
            name="discharge_date"
            id="discharge_date"
            autoComplete="discharge_date"
            className="border rounded-sm border-black p-1"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold" htmlFor="password">
            Contraseña
          </label>
          <input
            value={form.password ?? ""}
            minLength={6}
            name="password"
            id="password"
            autoComplete="password"
            type="text"
            className="border rounded-sm border-black p-1"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold" htmlFor="status">
            Estado
          </label>
          <select
            value={form.status ?? "en_proceso"}
            name="status"
            id="status"
            autoComplete="status"
            className="font-semibold border rounded-sm border-black p-1"
            onChange={handleChange}
          >
            <option value="en_proceso">En proceso</option>
            <option value="activo">Activo</option>
            <option value="inactivo">Inactivo</option>
            <option value="graduado">Graduado</option>
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold">Descargas</label>
          <select
            value={form.downloads ?? "desactivadas"}
            name="downloads"
            id="downloads"
            className="font-semibold border rounded-sm border-black p-1"
            onChange={handleChange}
          >
            <option value="desactivadas">Desactivadas</option>
            <option value="activadas">Activadas</option>
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold">Rol</label>
          <select
            value={form.role ?? "usuario"}
            name="role"
            id="role"
            className="font-semibold border rounded-sm border-black p-1"
            onChange={handleChange}
          >
            <option value="usuario">Usuario</option>
            <option value="administrador">Administrador</option>
          </select>
        </div>
        <button
          onClick={handleSubmit}
          className="rounded-sm bg-blue-600 text-white py-2 w-full cursor-pointer"
        >
          {user ? "Actualizar" : "Registrar"} usuario
        </button>
      </section>
    </form>
  );
};
