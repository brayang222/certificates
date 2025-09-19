import { createClient } from "@supabase/supabase-js";

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! 
);

export async function deleteAuthUserByEmail(email: string) {
  const { data, error } = await supabaseAdmin.auth.admin.listUsers();
  if (error) throw new Error("Error listando usuarios: " + error.message);

  const user = data.users.find((u) => u.email === email);

  if (!user) {
    throw new Error("Usuario no encontrado con ese correo");
  }

  const { error: deleteError } = await supabaseAdmin.auth.admin.deleteUser(user.id);

  if (deleteError) {
    throw new Error("Error eliminando usuario: " + deleteError.message);
  }

  return { success: true, id: user.id };
}
