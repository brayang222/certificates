"use client"
import { createUser } from "@/services/users/createUser";
import { useState } from "react";

export const UserForm = () => {
  const [form, setForm] = useState({
    identification: "",
    full_name: "",
    phone: "",
    direction: "",
    email: "",
    password: "",
    university: "",
    discharge_date: "",
    text: "",  
    downloads: "desactivadas",  
    role: "usuario",
    status: "en_proceso",
    created_at: new Date().toISOString()
  });

const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
) => {
  const { name, value } = e.target;
  setForm((prev) => ({
    ...prev,
    [name]: value,
  }));
  console.log(form)
};

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await createUser(form);
      alert("Usuario creado con éxito 🚀");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error(err)
    }
  };

  return (
    <section className="flex flex-col gap-4 flex-1" >
      <div className="flex flex-col gap-1">
        <label className='font-semibold'>Cédula</label>
        <input type="text" name="identification" id="identification" className="border rounded-sm border-black p-1" onChange={handleChange}/>
      </div>
      <div className="flex flex-col gap-1">
        <label className='font-semibold'>Nombre</label>
        <input type="text" name="name" id="name" className="border rounded-sm border-black p-1" onChange={handleChange}/>
      </div>
      <div className="flex flex-col gap-1">
        <label className='font-semibold'>Apellido</label>
        <input type="text" name="lastname" id="lastname" className="border rounded-sm border-black p-1" onChange={handleChange}/>
      </div>
      <div className="flex flex-col gap-1">
        <label className='font-semibold'>Teléfono</label>
        <input type="text" name="phone" id="phone" className="border rounded-sm border-black p-1" onChange={handleChange}/>
      </div>
      <div className="flex flex-col gap-1">
        <label className='font-semibold'>Dirección</label>
        <input type="text" name="direction" id="direction" className="border rounded-sm border-black p-1" onChange={handleChange}/>
      </div>
      <div className="flex flex-col gap-1">
        <label className='font-semibold'>Correo</label>
        <input name="email" id="email" type="text" className="border rounded-sm border-black p-1" onChange={handleChange} />
      </div>
      <div className="flex flex-col gap-1">
        <label className='font-semibold'>Texto</label>
        <input type="text" name="text" id="text" className="border rounded-sm border-black p-1" onChange={handleChange}/>
      </div>
      <div className="flex flex-col gap-1">
        <label className='font-semibold'>Universidad</label>
        <input type="text" name="university" id="university" className="border rounded-sm border-black p-1" onChange={handleChange}/>
      </div>
      <div className="flex flex-col gap-1">
        <label className='font-semibold'>Fecha de egreso</label>
        <input type="date" name="discharge_date" id="discharge_date" className="border rounded-sm border-black p-1" onChange={handleChange}/>
      </div>
      <div className="flex flex-col gap-1">
        <label className='font-semibold'>Contraseña</label>
        <input name="password" id="password" type="text" className="border rounded-sm border-black p-1" onChange={handleChange} />
      </div>
      <div className="flex flex-col gap-1">
        <label className='font-semibold'>Estado</label>
        <select defaultValue="en_proceso" name="status" id="status" className="font-semibold border rounded-sm border-black p-1" onChange={handleChange}>
          <option value="en_proceso" >En proceso</option>
          <option value="activo">Activo</option>
          <option value="inactivo">Inactivo</option>
          <option value="graduado">Graduado</option>
        </select>
      </div>
      <div className="flex flex-col gap-1">
        <label className='font-semibold'>Descargas</label>
        <select defaultValue="desactivadas" name="downloads" id="downloads" className="font-semibold border rounded-sm border-black p-1" onChange={handleChange}>
          <option value="desactivadas" >Desactivadas</option>
          <option value="activadas">Activadas</option>
        </select>
      </div>
      <div className="flex flex-col gap-1">
        <label className='font-semibold'>Rol</label>
        <select defaultValue="usuario" name="role" id="role" className="font-semibold border rounded-sm border-black p-1" onChange={handleChange}>
          <option value="usuario">Usuario</option>
          <option value="administrador">Administrador</option>
        </select>
      </div>
      <button
        onClick={handleSubmit}
        className='rounded-sm bg-blue-600 text-white py-2 w-full cursor-pointer'>
        Registrar usuario
      </button>
    </section>
  )
}
