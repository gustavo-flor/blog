/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{tsx}'
  ],
  theme: {
    extend: {
      screens: {
        '2xl': '1280px'
      }
    }
  },
  plugins: []
} 