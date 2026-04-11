import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: './frontend',
  plugins: [
    // The React and Tailwind plugins are both required
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './frontend/src'),
    },
  },
  server: {
    host: true,
  },
  preview: {
    host: true,
    allowedHosts: [
      'starthub-3wj2.onrender.com',
      '*.onrender.com',
      'localhost',
      '127.0.0.1',
    ],
  },
  build: {
    outDir: 'dist',
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
