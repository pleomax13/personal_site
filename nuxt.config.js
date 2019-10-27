
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Савельев Дмитрий Александрович - Исследование и разработка методов и средств метрологической надежности оптического адсорбционного шахтного метанометра',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  router: {
    // base: '/web-d/personal_site/dist/',
    middleware: [
      'setLang'
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    {
      src: '~/assets/style/style.scss',
      lang: 'scss'
    }
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vue-i18n.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, { isDev, isClient }) {
    },
    postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn
      preset: {
        // Change the postcss-preset-env settings
        autoprefixer: {
          grid: true,
          flexbox: true
          // browsers: ['last 2 versions', 'ie >= 9']
        }
      }
    }
  }
  // generate: {
  //   subFolders: false
  // }
}
