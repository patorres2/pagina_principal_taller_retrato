import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  publicDir: 'public',  // Esto asegura que la carpeta public se copie
  server: {
    port: 3000,
    host: '0.0.0.0'
  }
})