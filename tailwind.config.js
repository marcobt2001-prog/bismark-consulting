/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#0c1742',
          950: '#081130',
        },
        gold: {
          50: '#fef8ec',
          100: '#fcefc7',
          200: '#f8df8b',
          300: '#f4c84f',
          400: '#f0b429',
          500: '#e99d1a',
          600: '#c9a227',
          700: '#a17318',
          800: '#84591a',
          900: '#6f4a1a',
          950: '#3f260b',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Bebas Neue', 'Arial', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      }
    },
  },
  plugins: [],
}
