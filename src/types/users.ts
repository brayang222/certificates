export interface Profile {
  id?: string;
  identification?: string;
  password?: string;
  name?: string;
  lastname?: string;
  full_name?: string | undefined;
  email: string | null;
  university?: string;
  discharge_date?: Date | string;
  role?: string;
  status?: string;
  phone?: string;
  direction?:string;
  key?: string;
  downloads?: string;
  avatar_url?: string | null;
  created_at?: string;
}

