/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f0ff',
          100: '#e0e0ff',
          200: '#c7c7ff',
          300: '#a5a5ff',
          400: '#7d7dff',
          500: '#535CCD',
          600: '#4a52b8',
          700: '#3f46a3',
          800: '#353b8e',
          900: '#2a3079',
        },
        blue: {
          50: '#f0f0ff',
          100: '#e0e0ff',
          200: '#c7c7ff',
          300: '#a5a5ff',
          400: '#7d7dff',
          500: '#535CCD',
          600: '#4a52b8',
          700: '#3f46a3',
          800: '#353b8e',
          900: '#2a3079',
        },
      },
    },
  },
  plugins: [],
}

