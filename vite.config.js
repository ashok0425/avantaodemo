import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Define your aliases here
const aliases = {
  '@assets': '/src/assets',
  '@components': '/src/components',
  '@utils': '/src/utils',
  '@styles': '/src/styles'
  // Add more aliases as needed
}

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: aliases
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@styles/variables.scss";`
      }
    }
  }
})
