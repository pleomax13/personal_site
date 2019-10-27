import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default ({ app }) => {
  // Set the i18n instance on app
  // This way we can use it globally in our components through this.$i18n
  app.i18n = new VueI18n({
    // Set the initial locale
    locale: 'ru',

    // Set the fallback locale in case the current locale can't be found
    fallbackLocale: 'ru',

    // Associate each locale to a content file
    messages: {
      ru: require('~/static/content-ru.json'),
      ua: require('~/static/content-ua.json'),
      en: require('~/static/content-en.json')
    }
  })
}
