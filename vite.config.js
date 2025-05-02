import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/mysubfolder/', // 👈 Set to your actual deployment subfolder
  plugins: [react()],
})
