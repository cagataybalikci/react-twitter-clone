module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primaryBlue: {
          base: 'hsl(203, 89%, 53%)',
          dark: 'hsl(203, 89%, 46%)',
          light: 'hsl(203, 89%, 96%)',
        },
        primaryGray: {
          dark: 'hsl(207, 14%, 46%)',
          medium: 'hsl(205, 16%, 71%)',
          light: 'hsl(205, 25%, 91%)',
          lightest: 'hsl(204, 33%, 97%)',
        },
        primaryBlack: 'hsl(210, 13%, 9%)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
