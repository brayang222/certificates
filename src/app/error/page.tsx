"use client";

const page = () => {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center gap-4">
      <h1 className="text-3xl">Lo sentimos, algo salió mal</h1>
      <button
        className="bg-black text-white text-2xl rounded-sm px-2 py-4 cursor-pointer"
        onClick={() => window.history.back()}
      >
        Volver
      </button>
    </main>
  );
};

export default page;
