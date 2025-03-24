import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/', // Adjust this base if your app is deployed under a subfolder
  plugins: [react()],
  esbuild: {
    loader: 'jsx', // This will tell esbuild to handle .jsx files correctly
  },
  css: {
    postcss: './postcss.config.cjs',
  },
  build: {
    outDir: 'dist', // This ensures output goes into the dist folder
  },
})
