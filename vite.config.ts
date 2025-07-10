import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/alpha-imobiliaria-preview/', // <- Adicione esta linha
  plugins: [react()],
});
