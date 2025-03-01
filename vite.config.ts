import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.md'],
  base: './', // Use relative paths for assets
  // base: 'https://www.brendanmusick.ca'
})
