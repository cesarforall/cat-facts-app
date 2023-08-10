import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
import license from 'rollup-plugin-license'

export default defineConfig({
  base: '/cat-facts-app',
  plugins: [
    react(),
    license({
      thirdParty: {
        output: path.join(__dirname, 'dist', 'dependencies.txt'),
        includePrivate: true
      }
    })
  ]
})
