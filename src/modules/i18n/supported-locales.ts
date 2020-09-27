const supportedLocales: any = {
  en: 'English',
  es: 'Español',
  pt: 'Português'
}

export function getSupportedLocales() {
  let annotatedLocales = []

  for (const code of Object.keys(supportedLocales)) {
    annotatedLocales.push({
      code,
      name: supportedLocales[code]
    })
  }

  return annotatedLocales
}

export function supportedLocalesInclude(locale: any) {
  return Object.keys(supportedLocales).includes(locale)
}
