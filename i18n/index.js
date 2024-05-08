/* eslint-disable @typescript-eslint/no-var-requires */
const en = require('./translations.en.json')
const de = require('./translations.de.json')
const ko = require('./translations.ko.json')

const i18n = {
  translations: {
    en,
    de,
    ko,
  },
  defaultLang: 'en',
  // optional property will default to "query" if not set
  languageDataStore: 'localStorage',
}

module.exports = i18n
