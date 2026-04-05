/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  theme: {
    screens: {
      'xs': '400px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
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
