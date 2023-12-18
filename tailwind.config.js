/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background-authenticate': "url('/images/background-authenticate.png')",
      },
      boxShadow: {
        form: '0 3px 10px 0 rgba(0,0,0,.14)',
        button: '0 1px 1px rgba(0,0,0,0.09)',
      },
    },
  },
  plugins: [],
};
