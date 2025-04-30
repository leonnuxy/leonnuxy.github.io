import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base URL for GitHub Pages
  base: '/',
  // Define environment variables
  define: {
    // Provide global variables if needed
    global: {},
  },
  resolve: {
    alias: {
      // Add fallbacks for Node.js built-ins
      crypto: 'crypto-js',
    },
  },
  // Optimize build settings
  build: {
    target: 'esnext',
    sourcemap: true,
    rollupOptions: {
      // External packages that shouldn't be bundled
      external: [],
    },
  },
});
