import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const BASE_PATH = '/senior-living-talegaon/'

export default defineConfig({
  base: BASE_PATH,
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'transform-image-paths',
      transform(code, id) {
        const normalizedId = id.replace(/\\/g, '/')
        if (
          normalizedId.includes('/src/') &&
          (normalizedId.endsWith('.jsx') ||
            normalizedId.endsWith('.js') ||
            normalizedId.endsWith('.tsx') ||
            normalizedId.endsWith('.ts'))
        ) {
          return {
            code: code.replace(/(['"`])\/images\//g, `$1${BASE_PATH}images/`),
            map: null,
          }
        }
      },
    },
  ],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        whatsapp: 'whatsapp/index.html',
        call: 'call/index.html',
      },
    },
  },
})
