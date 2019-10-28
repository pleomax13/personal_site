export default function ({ store, app, route, redirect }) {
  let lang = route.query.lang ? route.query.lang : 'ru'
  const path = route.path

  if (lang !== 'ru' && lang !== 'en' & lang !== 'ua') {
    lang = 'ru'
    redirect(`${path}?lang=ru`)
  }

  if (lang === 'en' && (path !== '/' && path !== '/abstract')) {
    redirect(`${path}?lang=ru`)
  }

  if (lang === 'ua' && (path !== '/' && path !== '/abstract' && path !== '/biography')) {
    redirect(`${path}?lang=ru`)
  }

  app.i18n.locale = lang
  store.commit('currentLang/SET_LANG', lang)
}
