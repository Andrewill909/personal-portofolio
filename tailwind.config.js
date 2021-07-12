const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['src/**/*.js'],
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
        'HTML':'#F16529',
        'CSS': '#264de4',
        'Javascript': '#F0DB4F',
        'React': '#61DBFB',
        'Node': '#548a53',
        'Git': '#F1502F',
        'Java': '#f7b159',
        'MongoDB': '#5f9c5a',
        'MySQL': '#00758F'
      },
      gradientColorStops: theme => ({
        ...theme('colors'),
        'start': '#7400b8',
        'end': '#80ffdb'
       }),
       backgroundColor: {
         'footer-purple': '#B721FF'
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
