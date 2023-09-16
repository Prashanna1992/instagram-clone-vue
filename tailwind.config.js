/** @type {import('tailwindcss').Config} */
module.exports = {
  important : true,
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'),require('flowbite/plugin')],
}
