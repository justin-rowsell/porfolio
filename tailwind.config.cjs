
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
        danger: '#F44336',
        success: '#777A38',
        warning: '#F56A00',
        blogPrimary: '#394867',
        blogSecondary: '#F1F6F9',
        blogAccent: '#212A3E'
      },
    },
  },
  plugins: [],
}
