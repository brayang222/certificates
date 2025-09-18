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
    id: "",
    role: 'student' as const,
    status: "activo" as const,
    created_at: new Date().toISOString()
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // console.log(form.email, form.password);
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
        <input type="text" name="" id="" className="border rounded-sm border-black p-1" onChange={handleChange}/>
      </div>
      <div className="flex flex-col gap-1">
        <label className='font-semibold'>Llave</label>
        <input type="text" name="key" id="key" className="border rounded-sm border-black p-1" onChange={handleChange}/>
      </div>
      <div className="flex flex-col gap-1">
        <label className='font-semibold'>Contraseña</label>
        <input name="password" id="password" type="text" className="border rounded-sm border-black p-1" onChange={handleChange} />
      </div>
      <div className="flex flex-col gap-1">
        <label className='font-semibold'>Estado</label>
        <select name="status" className="font-semibold border rounded-sm border-black p-1" >
          <option >Activo</option>
          <option>Inactivo</option>
        </select>
      </div>
      <div className="flex flex-col gap-1">
        <label className='font-semibold'>Descargas</label>
        <select name="Rol" className="font-semibold border rounded-sm border-black p-1">
          <option value="active">Activadas</option>
          <option value="desactived">Desactivadas</option>
        </select>
      </div>
      <div className="flex flex-col gap-1">
        <label className='font-semibold'>Rol</label>
        <select name="Rol" className="font-semibold border rounded-sm border-black p-1">
          <option >Usuario</option>
          <option>Administrador</option>
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
