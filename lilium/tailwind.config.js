/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'darkgreen' : '#1F2421',
        'lightgreen' : '#8d9f94',
      },
    },
    fontFamily: {
      'monsterrat': ['Montserrat'],
    }
  },
  plugins: [],
}

