import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    allowedHosts: [
      'huellitassolidarias.com',
      'www.huellitassolidarias.com',
      '52.72.85.77'
    ]
  }
})