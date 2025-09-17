import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    port: 3000
  },
  base: '/',   // supaya asset path bener saat di-deploy
  build: {
    target: 'esnext',
    outDir: 'dist'
  }
});
