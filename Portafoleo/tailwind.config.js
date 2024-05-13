/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src//*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        roboto: ['Roboto', 'sans-serif'],
      },
      colors:{
        'app-portafoleo' : '#4ac2c4',
        'app-primary':{
          50: 'f4f5fe',
          100: '#eaebfd',
          200: '#d9dcfb',
          300: '#babdf8',
          400: '#9394f2',
          500: '#6d67eb',
          600: '#5747e0',
          700: '#4935cc',
          800: '#3c2cab',
          900: '#352792',
        }
      },
    },
  },
  plugins: [],
}