const errorMessages: Record<string, string> = {
  "Invalid login credentials":
    "Credenciales inválidas, revisa tu correo o contraseña",
  "Email not confirmed":
    "Tu correo no ha sido confirmado, revisa tu bandeja de entrada",
  "Password should be at least 6 characters":
    "La contraseña debe tener al menos 6 caracteres",
  "User already registered": "Este correo ya está registrado",
  "Invalid token": "El enlace de verificación no es válido o ha expirado",
};

export function errorHandler(error: unknown) {
  if (error instanceof Error) {
    const translated =
      errorMessages[error.message] || "Ocurrió un error inesperado.";
    console.error("Error:", error.message);

    alert(`⚠️ ${translated}`);
  } else {
    console.error("Error inesperado:", error);
    alert(`Ocurrió un error desconocido: ${error}`);
  }
}
