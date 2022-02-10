export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Pierrick\'s Portfolio - Zokiasu',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Find all my latest works and a short presentation of myself. Don\'t hesitate to contact me if you want us to work together!.' },
      { property: "og:site_name", content: "Pierrick's Portfolio - Zokiasu" },
      { hid: "og:type", property: "og:type", content: "website" },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://pedantic-yonath-7c8910.netlify.app/",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Pierrick's Portfolio - Zokiasu",
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "Find all my latest works and a short presentation of myself. Don\'t hesitate to contact me if you want us to work together!.",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "assets/images/profile_picture.png",
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
    {
      src: "~/plugins/locomotiveScroll.js",
      mode: "client"
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
