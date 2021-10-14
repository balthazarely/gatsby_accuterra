module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  plugins: [require('tailwindcss'), require('autoprefixer')],
  // , require('autoprefixer')
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Heebo"', 'san serif'],
      },
      colors: {
        accuterraBlue: {
          100: '#99B7CD',
          300: '#5ACAF5',
          500: '#01ADF0',
          700: '#004C83',
        },
        accuterraGrey: '#717171',
        accuterraLightGrey: '#F2F7FC',
      },
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: 'rem',
        '2xl': '10rem',
      },
    },
  },
  variants: {
    extend: {
      divideColor: ['group-hover'],
      opacity: ['disabled'],
    },
  },
};
