/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        '128': '90%',
        '129': '37rem',
      },
      height: {
        '1vh': '40vh',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ preferredStrategy: 'pseudoelements' }),
  ],
}

