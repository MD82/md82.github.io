// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/content'],
  app: {
    head: {
      title: '워시퍼의 하루',
      meta: [
        { name: 'description', content: 'MD워시퍼의 Github' }
      ],
    }
  },
  css: [
    '~/assets/scss/main.scss',
    'http://netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css',
    'http://netdna.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css'
  ]
})
