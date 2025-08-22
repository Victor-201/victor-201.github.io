import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Config base để deploy GitHub Pages
export default defineConfig({
  base: "/victor-201.github.io/",
  plugins: [react()],
})
