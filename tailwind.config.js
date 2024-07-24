/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'blue-200': "#365EBA",
      'blue-400': "#2F52A3",
      'blue-600': "#0E182E",
      'blue-800': "#070C17",
      'white': "#ffffff"
    },
    extend: {
      fontFamily: {
        arsenal: ['ArsenalSC', 'sans-serif'],
      },
      fontWeight: {
        regular: 400,
        bold: 700,
      },
      fontStyle: {
        normal: 'normal',
        italic: 'italic',
      },
    },
  
  },
  plugins: [],
}

