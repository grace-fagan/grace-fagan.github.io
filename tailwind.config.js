/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#213547',
      },
      fontFamily: {
        body: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;'
      },
    },
  },
  plugins: [],
}