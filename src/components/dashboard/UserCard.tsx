import { Profile } from "@/app/types/users";
import { User, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";



interface UserCardProps {
  user: Profile;
}

export const UserCard = ({ user }: UserCardProps) => {
  return (
    <div className="group relative overflow-hidden bg-white hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1 rounded-lg border">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="relative">
            {user.avatar_url ? (
              <Image 
                src={user.avatar_url} 
                alt={user.full_name ?? user.email!}
                className="h-16 w-16 rounded-full ring-2 ring-black/20 object-cover"
              />
            ) : (
              <div className="h-16 w-16 rounded-full bg-white text-black text-lg font-semibold flex items-center justify-center ring-2 ring-black/20">
                <User className="h-8 w-8" />
              </div>
            )}
          </div>
          <span className={`px-2 py-1 border border-black rounded-full text-xs font-medium ${
            user.status === "activo" 
              ? "bg-green-500 text-white" 
              : "bg-red-500 text-white"
          }`}>
            {user.status}
          </span>
        </div>

        <div className="space-y-2 mb-4">
          <h3 className="font-semibold text-lg text-card-foreground group-hover:text-primary transition-colors">
            {user.full_name}
          </h3>
          <div className="flex items-center text-muted-foreground text-sm">
            <Mail className="h-4 w-4 mr-2" />
            {user.email}
          </div>
          
        </div>

        <div className="flex items-center justify-between">
          <Link href={`/${user.id}`}>
            <button className="px-3 py-2 bg-black text-white cursor-pointer text-sm font-medium rounded-md shadow-button group-hover:shadow-card-hover transition-all hover:bg-primary/90">
              Ver detalle
            </button>
          </Link>
        </div>

        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-primary opacity-10 rounded-full -translate-y-12 translate-x-12 group-hover:opacity-20 transition-opacity" />
      </div>
    </div>
  );
};