import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Note-Taking-App/'  // <-- IMPORTANT: match the folder name in mohitbuilds repo
})
