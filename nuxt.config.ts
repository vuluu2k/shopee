// https://nuxt.com/docs/api/configuration/nuxt-config
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
});
