// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader';
export default defineNuxtConfig({
  components: [
    {
      path: '@/components',
      pathPrefix: false,
    },
  ],
  devtools: { enabled: true },
  css: ['@/assets/css/main.css', '@/assets/scss/index.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: {
    plugins: [svgLoader()],
  },
});
