import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint';
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "./src") }]
  }
})

