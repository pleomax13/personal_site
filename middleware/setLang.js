export default function ({ store, app, route }) {
  const lang = route.query.lang ? route.query.lang : 'ru'
  store.commit('currentLang/SET_LANG', lang)
}
