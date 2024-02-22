/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        bgcolor: '#051923',
        textcolor: "#f1faee",
        primary: "#006494",
        secondary: "#a8dadc",
        accentcolor: "#0582CA",

      },
    },
  },
  plugins: [],
}
