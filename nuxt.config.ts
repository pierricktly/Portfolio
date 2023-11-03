// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  
  build: {
    transpile: ['gsap'],
  },

  app: {
    head: {
      title: 'Pierrick TAÏLY - Portfolio - Développeur Frontend Vue.js Nuxt.js',
      htmlAttrs: {
        lang: 'fr',
      },
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Retrouver mes derniers projets personnel',
        },
        // ogDescription, ogTitle, ogImage, ogUrl, ogSiteName
        {
          hid: 'og:description',
          name: 'og:description',
          content: 'Retrouver mes derniers projets personnel',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'Pierrick TAÏLY - Portfolio - Développeur Frontend Vue.js Nuxt.js',
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: 'https://pierricktly.xyz/picture.jpg',
        },
        { hid: 'og:url', name: 'og:url', content: 'https://pierricktly.xyz' },
        {
          hid: 'og:site_name',
          name: 'og:site_name',
          content: 'Pierrick TAÏLY - Portfolio - Développeur Frontend Vue.js Nuxt.js',
        },
        // twitterCard, twitterSite, twitterCreator
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        { hid: 'twitter:site', name: 'twitter:site', content: '@pierricktly' },
        {
          hid: 'twitter:creator',
          name: 'twitter:creator',
          content: '@pierricktly',
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: 'https://pierricktly.xyz/picture.jpg',
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: 'https://pierricktly.xyz',
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Pierrick TAÏLY - Portfolio - Développeur Frontend Vue.js Nuxt.js',
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'Retrouver mes derniers projets personnel',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', '@nuxtjs/i18n'],

  i18n: {
    vueI18n: './i18n.config.ts',
  },

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    injectPosition: 0,
    viewer: true,
  },
})
