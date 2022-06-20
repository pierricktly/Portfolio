export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Zokiasu | Pierrick | Portfolio | Front-end Developer',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Salut! Je m\'appel Pierrick aka Zokiasu.\nRetrouver tout mes projets dernier sur mon portfolio. N\'hésitez pas à me contacter si vous souhaitez que nous travaillons ensemble !.' },
      { property: "og:site_name", content: "Zokiasu | Pierrick | Portfolio | Front-end Developer" },
      { hid: "og:type", property: "og:type", content: "website" },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://zokiasu.netlify.app/",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Zokiasu | Pierrick | Portfolio | Front-end Developer",
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "Salut! Je m\'appel Pierrick aka Zokiasu.\nRetrouver tout mes projets dernier sur mon portfolio. N\'hésitez pas à me contacter si vous souhaitez que nous travaillons ensemble !.",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://i.ibb.co/MD49pc3/Frame-72.png",
      },
      { property: "og:image:width", content: "740" },
      { property: "og:image:height", content: "300" },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/animate.js',
    '~/plugins/gtag.js',
    {
      src: "~/plugins/locomotiveScroll.js",
      mode: "client"
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-analytics'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/toast',
  ],
  
    router: {
      scrollBehavior: async (to, from, savedPosition) => {
        if (savedPosition) {
          return savedPosition
        }

        const findEl = async (hash, x) => {
          return document.querySelector(hash) ||
            new Promise((resolve, reject) => {
              if (x > 50) {
                return resolve()
              }
              setTimeout(() => { resolve(findEl(hash, ++x || 1)) }, 100)
            })
        }

        if (to.hash) {
          let el = await findEl(to.hash)
          if ('scrollBehavior' in document.documentElement.style) {
            return window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
          } else {
            return window.scrollTo(0, el.offsetTop)
          }
        }

        return { x: 0, y: 0 }
      }
    },
  
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  toast: {
    position: 'top-right',
    register: [ // Register custom toasts
      {
        name: 'my-error',
        message: 'Oops...Something went wrong',
        options: {
          type: 'error'
        }
      }
    ]
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      sass: {
        implementation: require('sass'),
      },
      scss: {
        implementation: require('sass'),
      },
    },
  },

  googleAnalytics: {
    id: "UA-220406598-1",
    autoTracking: {
      screenview: true
    }
  },
}
