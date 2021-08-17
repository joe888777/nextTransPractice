const nextTranslate = require('next-translate');
module.exports = {
  ...nextTranslate()
  // locales: ['en', 'zh-TW'],
  // defaultLocale: 'en',
  // loadLocaleFrom: (lang, ns) =>
  //   import(`./locales/${lang}/${ns}.json`).then(m => m.default),
  // "pages": {
  //   "*": ["common"],
  //   "/": ["common"]
  // }
}
