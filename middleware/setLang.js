export default function ({ store, app, route, redirect }) {
  let lang = route.query.lang ? route.query.lang : 'ru'
  const path = route.name

  if (path === null) {
    redirect('/?lang=ru')
  }

  if (lang !== 'ru' && lang !== 'en' & lang !== 'ua') {
    lang = 'ru'
    if (path === 'index') {
      redirect(`/?lang=ru`)
    } else {
      redirect(`/${path}?lang=ru`)
    }
  }

  if (lang === 'en' && (path !== 'index' && path !== 'abstract')) {
    redirect(`/${path}?lang=ru`)
  }

  if (lang === 'ua' && (path !== 'index' && path !== 'abstract' && path !== 'biography')) {
    redirect(`/${path}?lang=ru`)
  }

  app.i18n.locale = lang
  store.commit('currentLang/SET_LANG', lang)
}
