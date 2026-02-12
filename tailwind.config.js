/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    // "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  theme: {
    extend: {
      colors: {
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
