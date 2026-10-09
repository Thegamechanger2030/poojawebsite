/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          50: '#fdf2f4',
          100: '#fbe5e8',
          500: '#ab1947',
          800: '#8E1238',
          900: '#750e2d',
          950: '#470519',
        },
        gold: {
          400: '#e5b85d',
          500: '#D6A13C',
          600: '#b88124',
        },
        cream: '#FFF9F0',
        blush: '#F8EDE9',
        charcoal: '#292323',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
        hindi: ['"Noto Serif Devanagari"', 'serif'],
      }
    },
  },
  plugins: [],
}
