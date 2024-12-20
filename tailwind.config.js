/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.tsx'],
  theme: {
    extend: {
      screens: {
        '2xl': '1280px'
      }
    }
  },
  plugins: []
}

