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
}
