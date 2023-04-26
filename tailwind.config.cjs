
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
        blogPrimary: 'black',
        blogSecondary: '#F2E3DB',
        blogAccent: '#E86A33',
        blogLinks: '#263A29'
      },
    },
  },
  plugins: [],
}
