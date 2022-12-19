export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Zokiasu | Taïly Pierrick Portfolio',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 
        hid: 'description', 
        name: 'description', 
        content: 'Bonjour, je m\'appelle Pierrick Taïly. Je suis développeur frontend freelance, spécialisé dans la création de site web et application web Vue.JS/Nuxt.JS. \nJ\'aide mes clients à créer leurs sites internet ou leurs applications web afin de développer leur entreprise, leur projet sur le web ainsi que leur présence web.' 
      },
      { property: "og:site_name", content: "Zokiasu | Taïly Pierrick Portfolio" },
      { hid: "og:type", property: "og:type", content: "website" },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://zokiasu.netlify.app/",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Zokiasu | Taïly Pierrick Portfolio",
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "Bonjour, je m\'appelle Pierrick Taïly. Je suis développeur frontend freelance, spécialisé dans la création de site web et application web Vue.JS/Nuxt.JS. \nJ\'aide mes clients à créer leurs sites internet ou leurs applications web afin de développer leur entreprise, leur projet sur le web ainsi que leur présence web.",
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
      { rel: 'favicon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/gtag.js',
    '@/plugins/fade-image.client.js',
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
    '@nuxtjs/toast',
    '@nuxtjs/sitemap',
  ],

  sitemap: {
    hostname: 'https://zokiasu.com/',
    routes: [
      '/',
      '/about',
      '/project',
      '/contact',
    ],
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

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      sass: {
        implementation: require('sass'),
      },
      scss: {
        implementation: require('sass'),
      },
      extend(config, ctx) {
        // Ajouter UglifyJS au pipeline de build de Nuxt.js
        if (ctx.isProd) {
          config.optimization.minimizer.push(new UglifyJSPlugin())
        }
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
