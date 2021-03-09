export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "aspr",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "https://cdn.datatables.net/1.10.20/css/dataTables.bootstrap4.min.css"
      }
    ],
    script: [
      {
        src: "https://code.jquery.com/jquery-3.5.1.slim.min.js",
        type: "text/javascript"
      },
      { src: "/js/scripts.js", type: "text/javascript" },
      {
        src:
          "https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js",
        type: "text/javascript"
      },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/js/all.min.js",
        type: "text/javascript"
      },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js",
        type: "text/javascript"
      },
      {
        src: "https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js",
        type: "text/javascript"
      },
      {
        src:
          "https://cdn.datatables.net/1.10.20/js/dataTables.bootstrap4.min.js",
        type: "text/javascript"
      },
      { src: "assets/demo/datatables-demo.js", type: "text/javascript" }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/styles.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    // 'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],
  auth: {
    strategies: {
      local: {
        token: {
          property: 'token',
          required: true,
          type: 'Bearer '
        },
        user: {
          property: 'user',
          // autoFetch: true
        },
        endpoints: {
          login: { url: '/api/v1/authenticate', method: 'post' },
          logout: { url: '/api/v1/lastLogout', method: 'post' },
          user: { url: '/api/v1/user/me', method: 'post' }
        }
      }
    }
  },
  axios: {
    baseURL: 'https://api-staging.astraproperty.co.id/'
  },
  router: {
    middleware: ['auth']
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
