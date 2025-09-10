"use client"
import { useState } from "react";
import { Search, Users, Filter } from "lucide-react";
import { UserCard, UserData } from "./UserCard";

// Mock data de ejemplo
const mockUsers: UserData[] = [
  {
    id: "1",
    name: "Ana García",
    email: "ana.garcia@example.com", 
    role: "Administrador",
    location: "Madrid, España",
    status: "active",
    imageCount: 15,
  },
  {
    id: "2", 
    name: "Carlos López",
    email: "carlos.lopez@example.com",
    role: "Usuario",
    location: "Barcelona, España", 
    status: "active",
    imageCount: 8,
  },
  {
    id: "3",
    name: "María Rodríguez", 
    email: "maria.rodriguez@example.com",
    role: "Editor",
    location: "Valencia, España",
    status: "inactive", 
    imageCount: 23,
  },
  {
    id: "4",
    name: "David Martínez",
    email: "david.martinez@example.com", 
    role: "Usuario",
    location: "Sevilla, España",
    status: "active",
    imageCount: 5,
  },
  {
    id: "5",
    name: "Laura Sánchez",
    email: "laura.sanchez@example.com",
    role: "Moderador", 
    location: "Bilbao, España",
    status: "active",
    imageCount: 12,
  },
  {
    id: "6",
    name: "Pablo Fernández", 
    email: "pablo.fernandez@example.com",
    role: "Usuario", 
    location: "Málaga, España",
    status: "inactive",
    imageCount: 3,
  },
];

const UserDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "active" | "inactive">("all");

  const filteredUsers = mockUsers.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || user.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const activeUsers = mockUsers.filter(user => user.status === "active").length;
  const totalImages = mockUsers.reduce((sum, user) => sum + user.imageCount, 0);

  return (
    <div className="min-h-screen bg-gradient-bg">
      {/* Header */}
      <header className="bg-card shadow-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-primary rounded-lg">
                <Users className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Dashboard de Usuarios</h1>
                <p className="text-muted-foreground">Gestiona usuarios y sus galerías</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-card p-6 rounded-lg shadow-card border border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Total Usuarios</p>
                <p className="text-2xl font-bold text-foreground">{mockUsers.length}</p>
              </div>
              <div className="p-3 bg-primary/10 rounded-full">
                <Users className="h-6 w-6 text-primary" />
              </div>
            </div>
          </div>

          <div className="bg-gradient-card p-6 rounded-lg shadow-card border border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Usuarios Activos</p>
                <p className="text-2xl font-bold text-dashboard-success">{activeUsers}</p>
              </div>
              <div className="p-3 bg-dashboard-success/10 rounded-full">
                <Users className="h-6 w-6 text-dashboard-success" />
              </div>
            </div>
          </div>

          <div className="bg-gradient-card p-6 rounded-lg shadow-card border border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Total Imágenes</p>
                <p className="text-2xl font-bold text-primary">{totalImages}</p>
              </div>
              <div className="p-3 bg-primary/10 rounded-full">
                <Filter className="h-6 w-6 text-primary" />
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-card p-6 rounded-lg shadow-card mb-8 border border-border">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <input
                  type="text"
                  placeholder="Buscar usuarios..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setStatusFilter("all")}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  statusFilter === "all" 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-background border border-input text-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                Todos
              </button>
              <button
                onClick={() => setStatusFilter("active")}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  statusFilter === "active" 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-background border border-input text-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                Activos
              </button>
              <button
                onClick={() => setStatusFilter("inactive")}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  statusFilter === "inactive" 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-background border border-input text-foreground hover:bg-accent hover:text-accent-foreground"
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