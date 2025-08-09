export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
  content: {
    // https://content.nuxt.com/get-started/configuration
    defaults: {
      // 'content/blog' 경로 아래의 모든 파일에 적용될 기본값
      _blog: {
        published: true
      }
    }
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
