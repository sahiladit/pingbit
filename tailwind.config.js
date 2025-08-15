/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Fira Code"', 'monospace']
      },
      colors: {
        primary: '#00ff9f',
        dark: '#0d0d0d',
        secondary: '#1a1a1a'
      }
    },
  },
  plugins: [],
}
