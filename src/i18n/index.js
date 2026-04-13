import { createI18n } from 'vue-i18n'
import ru from './locales/ru.json'
import en from './locales/en.json'

const saved = typeof localStorage !== 'undefined' ? localStorage.getItem('lang') : null
const browserLang = typeof navigator !== 'undefined' ? navigator.language.slice(0, 2) : 'ru'
const defaultLang = saved || (browserLang === 'en' ? 'en' : 'ru')

const i18n = createI18n({
  legacy: false,
  locale: defaultLang,
  fallbackLocale: 'ru',
  messages: { ru, en }
})

if (typeof document !== 'undefined') {
  document.documentElement.lang = defaultLang
}

export default i18n

export function setLang(lang) {
  i18n.global.locale.value = lang
  localStorage.setItem('lang', lang)
  document.documentElement.lang = lang
  // Re-apply current route title
  const route = window.location.pathname
  const titleMap = {
    '/Practice_Portfolio_vue_js/': 'meta.titleHome',
    '/Practice_Portfolio_vue_js/projects': 'meta.titleProjects',
    '/Practice_Portfolio_vue_js/skills': 'meta.titleSkills',
    '/Practice_Portfolio_vue_js/contacts': 'meta.titleContacts'
  }
  const key = titleMap[route] || 'meta.titleHome'
  document.title = i18n.global.t(key)
  // Update meta description
  const desc = document.querySelector('meta[name="description"]')
  if (desc) desc.setAttribute('content', i18n.global.t('meta.description'))
}
