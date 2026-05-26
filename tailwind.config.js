/** @type {import('tailwindcss').Config} */
export default {
  // 1. ADDED: This enables the manual class-based dark mode switch
  darkMode: 'class', 
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        swaash: {
          dark: '#050505',
          cyan: '#22d3ee', 
          purple: '#a855f7', 
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], 
      }
    },
  },
  plugins: [],
}