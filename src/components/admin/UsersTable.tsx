"use client"
import { useUsers } from '@/app/hooks/useUsers'

export const UsersTable = () => {
  const { users } = useUsers();
  console.log(users)
  return (
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
          {users.map((user) => (
        <tr className='text-center' key={user.id}>
              <td className="border border-black px-2 py-1">{user.identification}</td>
              <td className="border border-black px-2 py-1">{user.full_name}</td>
              <td className="border border-black px-2 py-1">{user.phone}</td>
              <td className="border border-black px-2 py-1">{user.email}</td>
              <td className="border border-black px-2 py-1">{user.status}</td>
              <td className="border border-black px-2 py-1">{user.downloads}</td>
              <td className="border border-black bg-amber-400 px-2 py-1">Ver</td>
        </tr>
          ))}
        
      </tbody>
    </table>
  )
}
