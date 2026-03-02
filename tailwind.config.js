/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          950: '#0a1f0e',
          900: '#0d2a12',
          800: '#1a4223',
          700: '#1f5c2a',
          600: '#2d7a3a',
        },
        gold: {
          400: '#f5c842',
          500: '#e8b800',
          600: '#c9a000',
        }
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
