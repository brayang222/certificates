import { Profile } from "@/types/users";
import React from "react";

export const UserInformation = ({ user }: { user: Profile }) => {
  const [nombre, apellido] = user?.full_name?.split(" ") || [""];

  return (
    <>
      <h2 className="text-2xl font-bold">Perfil de usuario</h2>
      <div className="flex w-50 h-50 bg-gray-300 rounded-full items-center justify-center">
        <img
          src={`${user.avatar_url}?t=${Date.now()}` || "/user.png"}
          className="w-full h-full p-2 rounded-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-4 justify-center">
        <p className="text-lg">
          <span className="font-bold">Correo: </span>
          {user?.email}
        </p>
        <p className="text-lg">
          <span className="font-bold">Nombre: </span>
          {nombre?.charAt(0).toUpperCase() + nombre?.slice(1)}
        </p>
        <p className="text-lg">
          <span className="font-bold">Apellido: </span>
          {apellido?.charAt(0).toUpperCase() + apellido?.slice(1)}
        </p>
        <p className="text-lg">
          <span className="font-bold">Cedula: </span>
          {user?.identification}
        </p>
        <p className="text-lg">
          <span className="font-bold">Direccion: </span>
          {user?.direction}
        </p>
        <p className="text-lg">
          <span className="font-bold">Telefono: </span>
          {user?.phone}
        </p>
        <p className="text-lg">
          <span className="font-bold">Estado: </span>
          {user?.status}
        </p>
        <p className="text-lg">
          <span className="font-bold">Universidad: </span>
          {user?.university}
        </p>
        <p className="text-xl text-gray-600 max-w-[65ch]">{user?.text}</p>
      </div>
    </>
  );
};
