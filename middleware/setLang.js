export default function ({ store, app, route }) {
  const lang = route.query.lang ? route.query.lang : 'ru'
  app.i18n.locale = lang
  store.commit('currentLang/SET_LANG', lang)
}
