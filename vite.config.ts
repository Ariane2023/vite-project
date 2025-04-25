import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/vite-project/",  // Adicione esta linha
  build: {
    outDir: 'dist',  // Verifique se corresponde ao seu script 'deploy'
  },
})
