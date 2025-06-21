import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  content: ['./index.html', './src/**/*.{vue, js, ts, jsx, tsx}'],
  theme: {
    extend: {
      colors:  {
        primary: '#0000957',
        secondary: '#FFEB00'
      }
    }
  },
  darkMode: 'class',
  plugins: [
    tailwindcss(),
  ],
})