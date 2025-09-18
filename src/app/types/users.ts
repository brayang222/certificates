export interface Profile {
  id?: string;
  identification?: string;
  password?: string;
  full_name?: string | undefined;
  email: string | null;
  role?: "admin" | "student";
  status?: "activo" | "inactivo";
  phone?: string;
  direction?:string;
  key?: string;
  downloads?: "active" | "desactived";
  avatar_url?: string | null;
  created_at?: string;
}

