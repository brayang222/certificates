import { User, MapPin, Mail } from "lucide-react";
import Link from "next/link";

export interface UserData {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: string;
  location: string;
  status: "active" | "inactive";
  imageCount: number;
}

interface UserCardProps {
  user: UserData;
}

export const UserCard = ({ user }: UserCardProps) => {
  return (
    <div className="group relative overflow-hidden bg-gradient-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1 rounded-lg border border-border">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="relative">
            {user.avatar ? (
              <img 
                src={user.avatar} 
                alt={user.name}
                className="h-16 w-16 rounded-full ring-2 ring-primary/20 object-cover"
              />
            ) : (
              <div className="h-16 w-16 rounded-full bg-gradient-primary text-primary-foreground text-lg font-semibold flex items-center justify-center ring-2 ring-primary/20">
                <User className="h-8 w-8" />
              </div>
            )}
          </div>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            user.status === "active" 
              ? "bg-dashboard-success text-white" 
              : "bg-secondary text-secondary-foreground"
          }`}>
            {user.status}
          </span>
        </div>

        <div className="space-y-2 mb-4">
          <h3 className="font-semibold text-lg text-card-foreground group-hover:text-primary transition-colors">
            {user.name}
          </h3>
          <div className="flex items-center text-muted-foreground text-sm">
            <Mail className="h-4 w-4 mr-2" />
            {user.email}
          </div>
          <div className="flex items-center text-muted-foreground text-sm">
            <MapPin className="h-4 w-4 mr-2" />
            {user.location}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            <span className="font-medium text-card-foreground">{user.imageCount}</span> imágenes
          </div>
          <Link href={`/user/${user.id}`}>
            <button className="px-3 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-md shadow-button group-hover:shadow-card-hover transition-all hover:bg-primary/90">
              Ver detalle
            </button>
          </Link>
        </div>

        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-primary opacity-10 rounded-full -translate-y-12 translate-x-12 group-hover:opacity-20 transition-opacity" />
      </div>
    </div>
  );
};