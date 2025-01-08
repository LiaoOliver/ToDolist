// vite.config.js
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/todolist/',  // 確保所有資源都使用這個基礎路徑
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir: 'dist',
    // 確保資源使用正確的路徑
    rollupOptions: {
      output: {
        // 確保生成的資源使用正確的路徑
        assetFileNames: (assetInfo) => {
          return `assets/[name]-[hash][extname]`
        },
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js'
      }
    }
  }
})
