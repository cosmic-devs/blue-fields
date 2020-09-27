import { VueModule } from 'vue-modules'
import { createI18n } from 'vue-i18n'
import { supportedLocalesInclude } from './supported-locales'
import getBrowserLocale from './get-browser-locale'
import en from './locales/en'
import es from './locales/es'
import pt from './locales/pt'

export class I18nModule implements VueModule {
  readonly name = 'i18n'
  i18n?: any

  install() {
    this.i18n = createI18n({
      locale: this.getStartingLocale(),
      messages: {
        en: en,
        es: es,
        pt: pt
      }
    })

    // Set initial lang meta
    document.documentElement.lang = this.i18n.global.locale.value
  }

  getStartingLocale(): string {
    // Check for saved language
    const lang: string | null = localStorage.getItem('language')
    if (lang) return lang

    // Check for browser language
    const browserLocale: string | undefined = getBrowserLocale({
      countryCodeOnly: true
    })
    if (browserLocale && supportedLocalesInclude(browserLocale))
      return browserLocale

    // Default language
    return 'en'
  }
}
