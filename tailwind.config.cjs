
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        lightShade: '#F2EFF1',
        lightAccent: '#59CE8F',
        main: '#DC0000',
        darkAccent: '#850000',
        darkShade: '#141318',
      },
    },
  },
  plugins: [],
}
