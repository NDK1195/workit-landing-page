/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["'Manrope'", 'sans-serif'],
        fraunces: ["'Fraunces'", 'serif'],
      },
      colors: {
        'dark-purple': '#24053E',
        eucaplyptus: '#44FFA1',
        'davys-grey': '#584D62',
        'ghost-white': '#FCF8FF',
      },
    },
    plugins: [],
  },
};
