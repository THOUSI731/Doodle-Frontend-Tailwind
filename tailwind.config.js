const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'sm': '576px',   // Small screens
        'md': '768px',   // Medium screens
        'lg': '992px',   // Large screens
        'xl': '1200px',  // Extra large screens
      },
      colors:{
        "primary-purple":"#7E56D8",
        "primary-hov-purple":"#A47DFD",
        "logo-yellow":"#FFBE0B",
        "logo-orange":"#FB5607",
        "logo-rose":"#FF006E",
        "logo-green":"#13C2C2",
        "primary-text":"#1F2D5A",
        "secondary-bg":"#F5F6FB",
      },
      fontFamily:{
        montserrat:['Montserrat'," sans-serif" ]
      }
    },
  },
  plugins: [],
});