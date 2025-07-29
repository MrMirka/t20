// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/t20/', 
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
  publicDir: 'public',
});