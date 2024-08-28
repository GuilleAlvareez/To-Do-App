/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Asegúrate de que Tailwind procese todos los archivos en tu carpeta src
  ],
  theme: {
    extend: {
      boxShadow: {
        'X-xs': '1px 10px 10px rgba(0, 0, 0, 0.1) ',
      },
      screens: {
        'notMobile': '600px',
    },
  },
  plugins: [],
  }
}

