import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // ✅ This allows relative paths so index.html can load scripts
  plugins: [react()],
})
