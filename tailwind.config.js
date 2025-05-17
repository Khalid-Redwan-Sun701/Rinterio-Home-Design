/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        'next-projectBg': "url('/assets/bg.jpg')",
      },
    },
  },
  plugins: [],
};
