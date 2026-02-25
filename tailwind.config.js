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
        'dark-blue': '#061535',
        'deep-blue': '#092866',
        'gold-primary': '#D6AD30',
        'gold-secondary': '#A18D32',
        'light-neutral': '#E2E1DD',
        'light-grey': '#f2f4f7',
        'light-grey': '#f2f4f7',
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
