/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./components/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '400px',
        'sm': '641px',
        'md': '769px',
        'lg': '1025px',
        'xl': '1281px',
        '2xl': '1537px'
      },
      height: {
        "custom": "75vh"
      }
    },
  },
  plugins: [],
}
