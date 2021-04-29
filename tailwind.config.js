module.exports = {
  purge: {
    enabled: !process.env.ROLLUP_WATCH,
    content: ['./public/index.html', './src/**/*.svelte'],
    options: {
      defaultExtractor: content => [
        ...(content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []),
        ...(content.match(/(?<=class:)[^=>\/\s]*/g) || []),
      ],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        lime: {         
          "200": 'rgb(127,218,86,1)',
          "400": 'rgba(46,153,46,1)',
          "600" : `rgba(63,109,43,1)`
        }
      }
    },
  
  },
  variants: {
    extend: {},
  },
  plugins: [],
}