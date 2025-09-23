"use client";

import { errorHandler } from "@/lib/errorHandler";
import { createClient } from "@/utils/supabase/client";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const LoginComponent = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const supabase = createClient();

  const router = useRouter();

  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      errorHandler(error);
    } else {
      const user = data.user;

      const { data: profile } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", user.id)
        .single();

      if (profile?.role === "admin") {
        router.push("/admin");
      } else {
        router.push(`/student/${user.email}`);
      }
    }
  };

  return (
    <div className="w-full h-[100vh] mx-auto flex flex-col items-center">
      <div className="grid grid-cols-2 gap-4 w-full my-10">
        <div className="flex justify-center items-center">
          <img
            alt="logo ministerio de educación"
            src="educacion.webp"
            className="max-h-32 w-auto object-contain"
          />
        </div>
        <div className="flex justify-center items-center">
          <img
            alt="logo snies"
            src="snies.png"
            className="max-h-32 w-auto object-contain"
          />
        </div>
      </div>
      <div className="bg-white  rounded-lg p-8 shadow-md">
        <div className="flex items-center gap-5">
          <img alt="user logo" src="user.png" className="h-44" />
          <section className="space-y-6">
            <h1 className="text-3xl font-bold text-black mb-2">
              Formulario de inicio
            </h1>
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 my-4"
              >
                Correo electrónico
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  id="email"
                  type="email"
                  placeholder="Ingresa tu correo electrónico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-11 pr-3 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Contraseña
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Ingresa tu contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-11 pr-11 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-all duration-200"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
            <button
              onClick={handleLogin}
              className="w-full bg-blue-900 text-white py-3 px-4 rounded-md hover:bg-gray-800 transition-all duration-200 font-medium cursor-pointer"
            >
              Iniciar
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};
