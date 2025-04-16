import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),visualizer({ open: true,filename: 'stats.html' })],
  build: {
    chunkSizeWarningLimit: 1000,
     // Set to 1000 kB
     rollupOptions: {
      output: {
        manualChunks: {  // Example chunking strategy
          react: ['react', 'react-dom'],
        }
      }
    }
  }
})
