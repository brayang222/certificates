export interface Profile {
  id?: string;
  identification?: string;
  password?: string;
  name?: string;
  lastname?: string;
  full_name?: string | undefined;
  email: string;
  university?: string;
  discharge_date?: string;
  role?: string;
  status?: string;
  phone?: string;
  address?: string;
  key?: string;
  downloads?: string;
  avatar_url?: string | null;
  created_at?: string;
  text?: string;
}
