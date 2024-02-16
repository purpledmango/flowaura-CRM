/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Define your custom colors here
        bgcolor: '#1d3557',
        textcolor: "#f1faee" ,// Example custom color
        primary: "#457b9d",
        secondary:"#a8dadc",
        accentcolor:"#e63946",
          
        },
    },
  },
  plugins: [],
}
