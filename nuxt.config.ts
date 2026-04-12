// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src',
  ssr: true,
  compatibilityDate: '2026-04-12',

  dir: {
    public: '../public'
  },

  css: ['bulma/css/bulma.css'],

  build: {
    transpile: [
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-brands-svg-icons',
      '@fortawesome/free-solid-svg-icons',
      '@fortawesome/vue-fontawesome'
    ]
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0',
      title: 'NEXTKIND Community',
      meta: [
        { property: 'og:title', content: 'NextKind' },
        { property: 'og:description', content: 'The Next Kind is a new society actively working towards the world of post-scarcity.' },
        { property: 'og:image', content: '/Verccina%20Gaming.jpg' },
        { property: 'og:type', content: 'article' }
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap'
        }
      ]
    }
  },

  vite: {
    vue: {
      template: {
        transformAssetUrls: {
          includeAbsolute: false
        }
      }
    }
  }
})
