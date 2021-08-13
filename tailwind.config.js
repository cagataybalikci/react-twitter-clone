module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      colors: {
        primary: {
          base: 'hsl(203, 89%, 53%)',
          dark: 'hsl(203, 89%, 46%)',
          light: 'hsl(203, 89%, 96%)',
        },
        gray: {
          dark: 'hsl(207, 14%, 46%)',
          medium: 'hsl(205, 16%, 71%)',
          light: 'hsl(205, 25%, 91%)',
          lightest: 'hsl(204, 33%, 97%)',
        },
        black: 'hsl(210, 13%, 9%)',
      },
    },
  },
  plugins: [],
};
