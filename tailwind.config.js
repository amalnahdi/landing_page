module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
        'width': 'width',
        
    }
   
    // opacity: ['group-hover'],

    },
  },
  variants: {
    extend: {
      ringOpacity: ['hover','active'],
      ringColor:['hover']

    },
  },
  plugins: [],
}
