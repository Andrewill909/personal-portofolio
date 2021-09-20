const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: {
    enabled: true,
    content:['src/**/*.js']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        sans: ['Titillium', ...defaultTheme.fontFamily.sans],
        mont: ['Montserrat']
      },
      textColor: {
        'cust-cyan':'#66FCF1',
        'cust-peach': '#FF616D',
      },
      gradientColorStops: theme => ({
        ...theme('colors'),
        'start': '#7400b8',
        'end': '#80ffdb'
       }),
       backgroundColor: {
         'footer-purple': '#B721FF',
         'button-yellow': '#FEE715FF'
       }
    },
    textIndent: theme => theme('spacing'),
  },
  variants: {
    extend: {
      transform: ['hover', 'focus', 'group-hover'],    
    },
    textIndent: ['responsive'],
  },
  plugins: [
    require('tailwindcss-text-indent')(),
  ],
}
