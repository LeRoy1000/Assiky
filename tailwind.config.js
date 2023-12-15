/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: [
    './components/**/*.{js,vue,ts}',
    './composables/**/*.{js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      screens: {
        xs: '450px',
      },
      container: {
        padding: {
          DEFAULT: '1.5rem',
          lg: '3rem',
          '2xl': '6rem',
        },
      },
      colors: {
        /** Main colors */
        primary: '#1AE81A',
        secondary: '#4CAF50',
        tertiary: '#466884',
        fourthly: '#2C3E50',

        /** Neutral */
        black: '#263238',
        'dark-grey': '#4D4D4D',
        grey: '#717171',
        'light-grey': '#89939E',
        'grey-blue': '#ABBED1',
        'dark-silver': '#F2F2F2',
        silver: '#F5F7FA',

        /** Shades */
        'shade-1': 'linear-gradient(90deg, #1AE81A 0%, #466884 100%)',
        'shade-2': 'linear-gradient(90deg, #4CAF50 0%, #1AE81A 100%)',
        'shade-3': '#237D31',
        'shade-4': '#1B5E1F',
        'shade-5': '#103E13',

        /** Tint */
        'tint-1': '#66BB69',
        'tint-2': '#81C784',
        'tint-3': '#A5D6A7',
        'tint-4': '#C8E6C9',
        'tint-5': '#E8F5E9',
      },
    },
  },
  plugins: [],
};
