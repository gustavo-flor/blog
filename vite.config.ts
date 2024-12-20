import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'es2022'
  },
  esbuild: {
    target: ['es2022', 'chrome89', 'firefox89', 'safari15', 'edge89']
  },
  plugins: [react()],
  assetsInclude: ['**/*.md']
})
