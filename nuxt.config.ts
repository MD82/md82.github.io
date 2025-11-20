export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Modules
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],

  // Content configuration
  content: {
    defaults: {
      _blog: {
        published: true
      }
    },
    highlight: {
      theme: 'github-dark'
    }
  },

  // App configuration
  app: {
    head: {
      title: '워시퍼의 하루',
      meta: [
        { name: 'description', content: '개발자 MD워시퍼의 기술, 신앙, 일상에 대한 생각들을 기록하는 개인 블로그' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: '워시퍼의 하루' },
        { property: 'og:description', content: '개발자 MD워시퍼의 기술, 신앙, 일상에 대한 생각들을 기록하는 개인 블로그' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  // CSS
  css: ['~/assets/css/tailwind.css'],

  // Nitro configuration for better performance
  nitro: {
    prerender: {
      routes: []
    }
  },

  // Runtime configuration
  runtimeConfig: {
    public: {
      siteName: '워시퍼의 하루',
      siteDescription: '개발자 MD워시퍼의 기술, 신앙, 일상에 대한 생각들을 기록하는 개인 블로그'
    }
  },

  // Performance optimizations
  experimental: {
    payloadExtraction: false
  }
})
