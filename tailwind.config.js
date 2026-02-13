/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  theme: {
    extend: {
      colors: {
        primary: '#101d43',
        accent: '#d6ad30',
        gold: '#a18d32',
      },
      // Extend other theme properties if needed, e.g., fonts, spacing
      // Example for fonts:
      // fontFamily: {
      //   sans: ['YourCustomFont', 'sans-serif'],
      // },
    },
  },
  plugins: [],
}
