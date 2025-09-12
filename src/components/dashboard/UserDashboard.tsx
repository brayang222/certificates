"use client"
import { useState } from "react";
import { Search, Users } from "lucide-react";
import { UserCard } from "./UserCard";
import { useUsers } from "@/app/hooks/useUsers";
import { useUser } from "@/app/hooks/useUser";

const UserDashboard = () => {
const { users } = useUsers();
const {user} = useUser("49e2af7b-a75f-4e23-b0b7-06cb3147b6d6");
console.log(user)

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<"todos" | "activo" | "inactivo">("todos");

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.full_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email!.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "todos" || user.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const activeUsers = users.filter(user => user.status === "activo").length;

  return (
    <div className="min-h-screen bg-black/5">
      {/* Header */}
      <header className="bg-white shadow border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg">
                <Users className="h-6 w-6 text-black" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-black">Dashboard de Usuarios</h1>
                <p className="text-black/60">Gestiona usuarios y sus galerías</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-card p-6 rounded-lg shadow-card border border-border bg-white">
            <div className="flex items-center justify-between ">
              <div>
                <p className="text-black/60  text-sm">Total Usuarios</p>
                <p className="text-2xl text-black font-bold">{users.length}</p>
              </div>
              <div className="p-3 bg-primary/10 rounded-full">
                <Users className="h-6 w-6 text-primary" />
              </div>
            </div>
          </div>

          <div className="bg-gradient-card p-6 rounded-lg shadow-card border border-border bg-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-black/60  text-sm">Usuarios Activos</p>
                <p className="text-2xl font-bold text-green-600">{activeUsers}</p>
              </div>
              <div className="p-3 bg-dashboard-success/10 rounded-full">
                <Users className="h-6 w-6 text-dashboard-success" />
              </div>
            </div>
          </div>

        </div>

        {/* Filters */}
        <div className="bg-card p-6 rounded-lg shadow-card mb-8 border bg-white">
          <div className="flex flex-col md:flex-row gap-4 ">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <input
                  type="text"
                  placeholder="Buscar usuarios..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 border rounded-md  text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setStatusFilter("todos")}
                className={`cursor-pointer px-3 py-2 text-sm font-medium rounded-md transition-colors ${statusFilter === "todos"
                    ? "bg-black text-white"
                    : "bg-white border border-input text-foreground hover:bg-accent hover:text-accent-foreground"
                  }`}
              >
                Todos
              </button>
              <button
                onClick={() => setStatusFilter("activo")}
                className={`cursor-pointer px-3 py-2 text-sm font-medium rounded-md transition-colors ${statusFilter === "activo"
                    ? "bg-black text-white"
                    : "bg-white border border-input text-foreground hover:bg-accent hover:text-accent-foreground"
                  }`}
              >
                Activos
              </button>
              <button
                onClick={() => setStatusFilter("inactivo")}
                className={`cursor-pointer px-3 py-2 text-sm font-medium rounded-md transition-colors ${statusFilter === "inactivo"
                    ? "bg-black text-white"
                    : "bg-white border border-input text-foreground hover:bg-accent hover:text-accent-foreground"
                  }`}
              >
                Inactivos
              </button>
            </div>
          </div>
        </div>

        {/* Users Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUsers.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>

        {filteredUsers.length === 0 && (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <div className="p-4 bg-muted/50 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">No se encontraron usuarios</h3>
              <p className="text-muted-foreground">Intenta cambiar los filtros de búsqueda</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;