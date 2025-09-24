import { ArrowLeft } from "lucide-react";
import React from "react";

export const BackButton = () => {
  return (
    <a
      className="flex flex-row gap-2 bg-blue-500 cursor-pointer px-4 py-2 text-white font-bold rounded-sm "
      href="/admin"
    >
      <ArrowLeft />
      Regresar
    </a>
  );
};
