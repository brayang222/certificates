"use client";

import { deleteUserBuckets } from "@/services/buckets/deleteUserBuckets";
import { toast } from "sonner";

function DeleteCertificates({
  userId,
  count,
}: {
  userId: string;
  count: number;
}) {
  async function handleDeleteCertificates() {
    if (count <= 0) {
      toast.error("No hay imágenes para eliminar");
      return;
    }

    const confirmDelete = window.confirm(
      "¿Seguro que quieres eliminar las imágenes?"
    );
    if (!confirmDelete) return;

    await deleteUserBuckets(userId);
    toast.info(`${count} Imágenes eliminadas con éxito`);
    window.location.reload();
  }
  return (
    <button
      className="bg-red-500 text-white cursor-pointer px-4 py-2 rounded-md"
      onClick={handleDeleteCertificates}
    >
      Eliminar imágenes
    </button>
  );
}

export default DeleteCertificates;
