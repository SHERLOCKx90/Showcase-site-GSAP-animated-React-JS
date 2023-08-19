/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      boxShadow: {
        'custom': '0 2px 6px -1px rgba(0, 0, 0, 0.1), 0 20px 50px -1px rgba(0, 0, 0, 0.06)'
      }
    },
  },
  plugins: [],
}