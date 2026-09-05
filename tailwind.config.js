/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0B1E3F',
          dark: '#071326',
          royal: '#1A56DB',
          accent: '#2563EB',
          light: '#F0F6FE',
          ice: '#F8FAFC',
          card: '#FFFFFF',
          border: '#E2E8F0',
          whatsapp: '#25D366',
          whatsappDark: '#128C7E',
        }
      }
    }
  },
  plugins: []
}
