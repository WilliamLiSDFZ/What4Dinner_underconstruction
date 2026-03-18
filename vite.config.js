import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    transformer: 'lightningcss',
    lightningcss: {
      targets: {
        chrome: (80 << 16),
        safari: (14 << 16),
        firefox: (72 << 16),
      },
    },
  },
  build: {
    cssMinify: 'lightningcss',
  },
})
