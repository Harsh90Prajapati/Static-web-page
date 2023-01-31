/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:['class','[data-mode="dark"]'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'space_img':"url('./images/pixel.jpg')"
      }
    },
  },
  plugins: [],
}
