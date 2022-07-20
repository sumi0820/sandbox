module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#F5F946',
          main: '#ADF173',
          dark: '#000000',
        },
        secondary: {
          main: '#ffff',
          dark: '#595959',
          light: '#a6eaf5',
        },
        tertiary: {
          main: '#03CD69',
          dark: '#009048',
        },
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        noto: ['Noto Sans', 'sans-serif'],
      },
      spacing: {
        '95%': '95%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
