import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/alpha-imobiliaria-preview/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
