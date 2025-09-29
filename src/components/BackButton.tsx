"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export const BackButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex flex-row gap-2 bg-blue-500 cursor-pointer px-4 py-2 text-white font-bold rounded-sm"
    >
      <ArrowLeft />
      Regresar
    </button>
  );
};
