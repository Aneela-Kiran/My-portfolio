/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // custom animation
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out',
        slideIn: 'slideIn 1s ease-out',
      },
      // custom colors
      colours:{
       
          default:'#736332',
          lightyellow:'#D9BA82',
          light2:'#BFA893',
          default:'#0D0D0D',
          lightblack:'#343a40'
        
      }
    },
   
  },
  plugins: [],
}

