"use client";

import { SUPABASE } from "@/lib/supabaseClient";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";


export const LoginComponent = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

   const router = useRouter();

    const handleLogin = async () => {
        const { data, error } = await SUPABASE.auth.signInWithPassword({ email, password })

        if (error) {
            console.error(error.message)
        } else {
            const user = data.user
            // buscar rol
            const { data: profile } = await SUPABASE
                .from("profiles")
                .select("role")
                .eq("id", user.id)
                .single()

            if (profile?.role === "admin") {
                router.push("/admin")
            } else {
                router.push("/estudiante")
            }
        }
    }

  return (
    <div className="w-full h-[100vh] max-w-md mx-auto flex items-center">
      <div className="bg-white border border-black rounded-lg p-8 shadow-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-black mb-2">
            Bienvenido de nuevo
          </h1>
          <p className="text-gray-600">
            Inicia sesión en tu cuenta para continuar
          </p>
        </div>

        <section className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
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
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Contraseña
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
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

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <input
                id="remember"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 border border-black rounded focus:ring-2 focus:ring-black"
              />
              <label htmlFor="remember" className="text-sm text-gray-600">
                Recordarme
              </label>
            </div>
            <a
              href="#"
              className="text-sm text-black hover:text-gray-700 transition-all duration-200"
            >
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          <button
            onClick={handleLogin}
            className="w-full bg-black text-white py-3 px-4 rounded-md hover:bg-gray-800 transition-all duration-200 font-medium"
          >
            Iniciar Sesión
          </button>
        </section>
      </div>
    </div>
  );
};