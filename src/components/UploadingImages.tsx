"use client";
import { deleteFile } from "@/services/buckets/deleteFile";
import { uploadCertificates } from "@/services/buckets/uploadCertificates";
import { uploadFile } from "@/services/buckets/uploadFile";
import { Profile } from "@/types/users";
import { useRef } from "react";

export const UploadingImages = ({ user }: { user: Profile }) => {
  const profileInputRef = useRef<HTMLInputElement>(null);
  const certificatesInputRef = useRef<HTMLInputElement>(null);

  async function handleUploadProfile() {
    const file = profileInputRef.current?.files?.[0];
    if (!file) return alert("No seleccionaste ninguna imagen de perfil");
    if (user.avatar_url) {
      deleteFile(user.id!);
    } else {
    }
    await uploadFile(file, user.id!);
  }

  async function handleUploadCertificates() {
    const files = certificatesInputRef.current?.files;
    if (!files || files.length === 0)
      return alert("No seleccionaste certificados");

    const urls = await uploadCertificates(Array.from(files), user.id!);
    console.log("Certificados subidos:", urls);
  }

  return (
    <section className=" flex flex-col items-center gap-4">
      <div className="flex flex-col items-center gap-2">
        <input
          type="file"
          name="profile-image"
          title="Imagen de perfil"
          className="border border-black rounded-sm px-4 py-2"
          accept="image/*"
          ref={profileInputRef}
        />
        <button
          className="w-full bg-green-600 text-white cursor-pointer px-4 py-2 rounded-sm"
          onClick={handleUploadProfile}
        >
          Subir/Editar imagen de perfil
        </button>
      </div>
      <div className="w-full flex flex-col items-center gap-2">
        <input
          type="file"
          multiple
          name="student-images"
          id="student-images"
          title="Imagenes del estudiante"
          className="border border-black rounded-sm px-4 py-2 w-full"
          accept="image/*"
          ref={certificatesInputRef}
        />
        <button
          className="w-full bg-green-600 text-white cursor-pointer px-4 py-2 rounded-sm"
          onClick={handleUploadCertificates}
        >
          Subir Imagenes
        </button>
      </div>
    </section>
  );
};
