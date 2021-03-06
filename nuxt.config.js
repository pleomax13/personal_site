
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Савельев Дмитрий Александрович – Исследование и разработка методов и средств повышения метрологической надежности оптического абсорбционного шахтного метанометра',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#000035' },
      { hid: 'description', name: 'description', content: 'Савельев Дмитрий Александрович – Исследование и разработка методов и средств повышения метрологической надежности оптического абсорбционного шахтного метанометра' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/m2019/fkita/saveliev/favicon.ico' } // добавить путь к favicon
    ]
  },
  router: {
    // base: '/2019/fkita/saveliev/',
    base: '/m2019/fkita/saveliev/',
    // base: '/personal_site/',
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
      // if (!isDev) {
      //   config.output.publicPath = './_nuxt/'
      // }
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
