import { deleteUserBuckets } from "../buckets/deleteUserBuckets";
import { deleteFile } from "../buckets/deleteFile";
import { deleteAuthUser } from "./deleteAuthUser";

export async function deleteUser(userId: string) {
  const { error } = await deleteAuthUser(userId);

  await deleteUserBuckets(userId);
  await deleteFile(userId);

  if (error) {
    console.error("Error actualizando perfil:", error.message);
    return { success: false, error };
  }

  return { success: true, userId };
}
