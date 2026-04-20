import { useState } from 'react';
import { Lock, User } from 'lucide-react';

interface LoginProps {
  onLogin: (email: string) => void;
}

// Lista de usuarios autorizados con sus contraseñas
// Aquí puedes agregar/modificar los usuarios manualmente
const authorizedUsers = [
  { email: 'torrespame2@gmail.com', password: 'taller2026' },      // Cédula del alumno 1
  { email: 'alumno2@ejemplo.com', password: '87654321' },      // Cédula del alumno 2
  { email: 'alumno3@ejemplo.com', password: '11122233' },      // Cédula del alumno 3
  { email: 'alumno4@ejemplo.com', password: '44455566' },      // Cédula del alumno 4
  { email: 'alumno5@ejemplo.com', password: '77788899' },      // Cédula del alumno 5
  { email: 'alumno6@ejemplo.com', password: '12398745' },      // Cédula del alumno 6
  { email: 'alumno7@ejemplo.com', password: '32165487' },      // Cédula del alumno 7
  { email: 'alumno8@ejemplo.com', password: '45678912' },      // Cédula del alumno 8
  { email: 'profesor@taller.com', password: 'profesor2026' },  // Profesor
  { email: 'admin@taller.com', password: 'admin2026' }         // Administrador
];

export default function Login({ onLogin }: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Buscar el usuario en la lista
    const user = authorizedUsers.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );
    
    if (user) {
      localStorage.setItem('userEmail', user.email);
      localStorage.setItem('isAuthenticated', 'true');
      onLogin(user.email);
    } else {
      setError('Email o contraseña incorrectos');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-paper px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 border border-border-soft">
        <div className="text-center mb-8">
          <img 
            src="/logo.png" 
            alt="Gveva Logo" 
            className="w-20 h-20 mx-auto mb-4 object-contain"
            onError={(e) => (e.currentTarget.style.display = 'none')}
          />
          <h1 className="font-serif text-3xl font-normal tracking-tight">Taller de Retrato</h1>
          <p className="text-ink/60 text-sm mt-2">Acceso para estudiantes</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-ink/70 mb-1">
              Email
            </label>
            <div className="relative">
              <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink/40" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-border-soft rounded-xl focus:outline-none focus:border-clay transition-colors bg-white"
                placeholder="tu@email.com"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-ink/70 mb-1">
              Contraseña (cédula)
            </label>
            <div className="relative">
              <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink/40" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-border-soft rounded-xl focus:outline-none focus:border-clay transition-colors bg-white"
                placeholder="Ingrese su cédula"
                required
              />
            </div>
          </div>

          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-clay text-white rounded-xl font-medium hover:bg-clay/90 transition-colors shadow-lg shadow-clay/20"
          >
            Ingresar al Taller
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-border-soft text-center">
          <p className="text-xs text-ink/40">
            Credenciales proporcionadas por Gveva Capacitaciones
          </p>
        </div>
      </div>
    </div>
  );
}