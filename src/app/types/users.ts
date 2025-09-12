export interface Profile {
  id: string;
  full_name?: string | undefined;
  email: string | null;
  role: "admin" | "student";
  status: "activo" | "inactivo";
  avatar_url?: string | null;
  created_at: string;
}

