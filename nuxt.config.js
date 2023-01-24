export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Taïly Pierrick - Développeur Front End Vue.Js/Nuxt.Js',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 
        hid: 'description', 
        name: 'description', 
        content: 'Pierrick Taïly - Développeur Front End Freelance, spécialisé dans la création de site web et application web Vue.JS/Nuxt.JS. \nJ\'accompagne les startup, entrepreneur et grandes entreprises dans leurs projets web.' 
      },
      { property: "og:site_name", content: "Taïly Pierrick - Développeur Front End Vue.Js/Nuxt.Js" },
      { hid: "og:type", property: "og:type", content: "website" },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://zokiasu.com/",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Taïly Pierrick - Développeur Front End Vue.Js/Nuxt.Js",
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "Pierrick Taïly - Développeur Front End Freelance, spécialisé dans la création de site web et application web Vue.JS/Nuxt.JS. \nJ\'accompagne les startup, entrepreneur et grandes entreprises dans leurs projets web.",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://i.ibb.co/k8MFC63/6njrc-Rl-400x400.jpg",
      },
      { property: "og:image:width", content: "740" },
      { property: "og:image:height", content: "300" },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'canonical', href: 'https://zokiasu.com/about' },
      { rel: 'canonical', href: 'https://zokiasu.com/project' },
      { rel: 'canonical', href: 'https://zokiasu.com/contact' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap' },
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
    events: {
      wheel: true,
    },
    
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
