import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/Practice_Portfolio_vue_js/',
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})