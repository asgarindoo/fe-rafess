import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import eslint from 'vite-plugin-eslint'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    eslint({
      cache: false,
      include: ['src/**/*.js', 'src/**/*.jsx', 'src/**/*.ts', 'src/**/*.tsx'],
      exclude: ['node_modules']
    })
  ],
  server: {
    hmr: {
      overlay: true,
    },
  },
})

