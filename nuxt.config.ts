export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
  content: {
    // https://content.nuxt.com/get-started/configuration
  },
  app: {
    head: {
      title: '워시퍼의 하루',
      meta: [
        { name: 'description', content: 'MD워시퍼의 Github' }
      ],
    }
  },
  css: ['~/assets/css/tailwind.css'],
})
