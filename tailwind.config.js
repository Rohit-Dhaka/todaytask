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
      container:{
        center:true,
        padding:'12px'
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

