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
        'HTML':'#F16529',
        'CSS': '#5f7ae3',
        'Javascript': '#F0DB4F',
        'React': '#61DBFB',
        'Node': '#92db91',
        'Git': '#F1502F',
        'Java': '#f7b159',
        'MongoDB': '#5f9c5a',
        'MySQL': '#83d2e6'
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
