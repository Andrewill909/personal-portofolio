const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        sans: ['Titillium', ...defaultTheme.fontFamily.sans]
      },
      textColor: {
        'cust-cyan':'#66FCF1'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
