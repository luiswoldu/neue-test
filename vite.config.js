import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  publicDir: 'public',
  server: {
    open: true,
    port: 5173
  },
  build: {
    rollupOptions: {
      input: 'home.html'
    }
  }
}) 