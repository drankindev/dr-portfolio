/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'lato':['Lato', 'Arial', 'Helvetica', 'San-Serif'],
    },
    extend: {
      colors: {
        'orange':'#ff9900',
        'green':'#99cc00',
        'blue':'#3399cc',
        'red':'#cc3333',
        'dark-gray':'#333',
        'mid-gray':'#999',
        'light-gray':'#bbb',
      },
      dropShadow: {
        '3xl': '0 25px 25px rgba(0, 0, 0, 0.1)',
        '3xl-up': '0 -25px 25px rgba(0, 0, 0, 0.1)',
        'xl-up': '0 -15px 15px rgba(0, 0, 0, 0.25)',
      },
      boxShadow: {
        'xl-inner': 'inset 0 -25px 25px rgba(0, 0, 0, 0.15)',
      }
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px',
      //
    }
  },
  plugins: [],
}

