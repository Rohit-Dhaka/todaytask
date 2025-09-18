/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      fontFamily:{
          
          'poppins':["Poppins" , "sans-serif"],           
           "outfit":["Outfit" , "sans-serif"]
      }, 
      container: {
      center: true,      // center the container
      padding: '12px',   // horizontal padding
      screens: {         // custom container widths per breakpoint
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
      boxShadow:{
      'cardhover': '0 20px 60px 0 rgba(0,0,0,0.4)', 
  'card': '0 20px 60px 0 #E5E9F6', 
      },
      animation:{
        'bar': 'progress 2s linear forwards'    
      },
      keyframes:{
        "progress":{
          "0%":{width:"0%"},
          "100%":{width:"100%"}
        }
      }
    },
  },
  plugins: [],
}

