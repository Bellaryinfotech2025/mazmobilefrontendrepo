/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'azhar-red': '#C41E3A',
        'azhar-brown': '#8B6F47',
        'azhar-dark': '#2C3E50',
        'azhar-light': '#F5F1E8',
      },
    },
  },
  plugins: [],
}
