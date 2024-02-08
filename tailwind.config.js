/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: '#1f1f1f',
        secondary: '#f3c614',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '3rem',
          
        }
      }
    },
  },
  plugins: [],
}

