const path = require('path')

module.exports = {
  originDir: path.resolve(__dirname, 'src/roots'),
  localizedDir: path.resolve(__dirname, 'src/app'),
  locales: ['en', 'pt'],
  defaultLocale: 'pt',
  prefixDefaultLocale: true,
}