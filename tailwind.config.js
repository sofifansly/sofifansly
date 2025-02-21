/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        'onlyfans-blue': '#00AFF0',
        'onlyfans-dark': '#2D2D2D',
        'onlyfans-gray': '#6B7280'
      },
      container: {
        center: true,
        padding: '1rem'
      }
    },
  },
  plugins: [],
}
