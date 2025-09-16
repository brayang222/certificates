import React from 'react'

export const Admin = () => {
  return (
    <main className='w-fit h-[100vh] flex flex-col items-center'>
      <nav className='flex items-center justify-center w-full bg-black text-white py-4'>
        <h1 className='text-2xl font-bold'> Vista Admin
        </h1>
      </nav>
      <section className='flex flex-row gap-4 p-8 w-full h-fit mb-10 items-start'>

        <div className="flex flex-col gap-4 ">
          <div className="flex flex-col gap-4 min-w-sm px-4">
            <button className="rounded-sm bg-red-700 py-2 text-white cursor-pointer">Cerrar Sesión</button>
            <form className="flex flex-col gap-4 flex-1">
              <div className="flex flex-col gap-1">
                <label className='font-semibold'>Cédula</label>
                <input type="text" className="border rounded-sm border-black p-1" />
              </div>
              <div className="flex flex-col gap-1">
                <label className='font-semibold'>Nombre</label>
                <input type="text" className="border rounded-sm border-black p-1" />
              </div>
              <div className="flex flex-col gap-1">
                <label className='font-semibold'>Apellido</label>
                <input type="text" className="border rounded-sm border-black p-1" />
              </div>
              <div className="flex flex-col gap-1">
                <label className='font-semibold'>Teléfono</label>
                <input type="text" className="border rounded-sm border-black p-1" />
              </div>
              <div className="flex flex-col gap-1">
                <label className='font-semibold'>Dirección</label>
                <input type="text" className="border rounded-sm border-black p-1" />
              </div>
              <div className="flex flex-col gap-1">
                <label className='font-semibold'>Correo</label>
                <input type="text" className="border rounded-sm border-black p-1" />
              </div>
              <div className="flex flex-col gap-1">
                <label className='font-semibold'>Texto</label>
                <input type="text" className="border rounded-sm border-black p-1" />
              </div>
              <div className="flex flex-col gap-1">
                <label className='font-semibold'>Llave</label>
                <input type="text" className="border rounded-sm border-black p-1" />
              </div>
              <div className="flex flex-col gap-1">
                <label className='font-semibold'>Contraseña</label>
                <input type="text" className="border rounded-sm border-black p-1" />
              </div>
              <div className="flex flex-col gap-1">
                <label className='font-semibold'>Estado</label>
                <input type="text" className="border rounded-sm border-black p-1" />
              </div>
              <div className="flex flex-col gap-1">
                <label className='font-semibold'>Descargas</label>
                <input type="text" className="border rounded-sm border-black p-1" />
              </div>
              <div className="flex flex-col gap-1">
                <label className='font-semibold'>Rol</label>
                <input type="text" className="border rounded-sm border-black p-1" />
              </div>
              <button
                type='submit'
                className='rounded-sm bg-blue-600 text-white py-2 w-full cursor-pointer'>
                Registrar usuario
              </button>
            </form>
          </div>
        </div>

        <table className=" border border-black">
          <thead className="bg-black text-white">
            <tr className=''>
              <th className="border border-black px-2 py-1">Cédula</th>
              <th className="border border-black px-2 py-1">Nombre</th>
              <th className="border border-black px-2 py-1">Teléfono</th>
              <th className="border border-black px-2 py-1">Correo</th>
              <th className="border border-black px-2 py-1">Estado</th>
              <th className="border border-black px-2 py-1">Descargas</th>
              <th className="border border-black px-2 py-1">Ver</th>
            </tr>
          </thead>
          <tbody>
            <tr className='text-center'>
              <td className="border border-black px-2 py-1">100123123</td>
              <td className="border border-black px-2 py-1">Juan Pérez</td>
              <td className="border border-black px-2 py-1">31222133</td>
              <td className="border border-black px-2 py-1">juan@gmail.com</td>
              <td className="border border-black px-2 py-1">activo</td>
              <td className="border border-black px-2 py-1">habilitada</td>
              <button className="border border-black bg-amber-400 px-2 py-1">Ver</button>
            </tr>
            <tr>
              <td className="border border-black px-2 py-1">100123123</td>
              <td className="border border-black px-2 py-1">Juan Pérez</td>
              <td className="border border-black px-2 py-1">31222133</td>
              <td className="border border-black px-2 py-1">juan@gmail.com</td>
              <td className="border border-black px-2 py-1">activo</td>
              <td className="border border-black px-2 py-1">habilitada</td>
              <button className="border border-black bg-amber-400 px-2 py-1">Ver</button>

            </tr>
          </tbody>
        </table>

      </section>
    </main>
  )
}
