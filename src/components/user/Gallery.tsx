"use client";
import { useEffect, useState } from "react";
import { BackButton } from "../BackButton";
import { getCertificates } from "@/services/buckets/getCertificates";
import { Profile } from "@/types/users";

export function Gallery({ user }: { user: Profile }) {
  const [selectedCertificate, setSelectedCertificate] = useState<string>("");
  const [certificates, setCertificates] = useState<string[]>([]);

  const openModal = (certificate: string) => {
    setSelectedCertificate(certificate);
  };

  const closeModal = () => {
    setSelectedCertificate("");
  };

  const downloadImage = (imageUrl: string) => {
    const link = document.createElement("a");
    link.href = imageUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    async function loadCertificates() {
      const data = await getCertificates(user.id as string);
      setCertificates(data);
    }
    if (user?.id) loadCertificates();
  }, [user?.id]);

  return (
    <section className="min-h-screen p-4 flex flex-col gap-6 items-center">
      <BackButton />
      <h2 className="text-3xl font-bold">Galeria de imagenes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.length > 0 ? (
          certificates.map((certificate) => (
            <div key={certificate} className="relative group">
              <div
                className="aspect-[4/3] overflow-hidden cursor-pointer bg-card border border-border rounded-lg p-6 transition-all duration-300 hover:-translate-y-2"
                onClick={() => openModal(certificate)}
              >
                <img
                  src={certificate}
                  alt={`Certificate ${certificate}`}
                  className="w-full h-full object-cover group-hover:scale-105"
                  style={{
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                />
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  downloadImage(certificate);
                }}
                className="absolute bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 hover:bg-blue-900 cursor-pointer"
                style={{ transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)" }}
              >
                Descargar
              </button>
            </div>
          ))
        ) : (
          <div className="font-bold text-xl text-gray-400">
            No hay certificados disponibles
          </div>
        )}
      </div>

      {selectedCertificate && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50"
          onClick={closeModal}
        >
          <div className="relative max-w-full max-h-full bg-white">
            <img
              src={selectedCertificate}
              alt={`Certificate ${selectedCertificate}`}
              className="max-w-full max-h-full object-contain p-4"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={closeModal}
              className="cursor-pointer absolute top-4 right-4 text-white text-3xl font-bold hover:text-yellow-500 bg-black/50 rounded-full w-12 h-12 flex items-center justify-center"
            >
              ×
            </button>

            <button
              onClick={() => downloadImage(selectedCertificate)}
              className="absolute bottom-4 right-4 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-900 cursor-pointer"
            >
              Descargar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
