/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    inset: {
      '0': '0',
      'for-cell': '0.75rem'
    },
    aspectRatio: {
      'for-cell': [32, 31]
    }
  },
  variants: {
    aspectRatio: ['responsive']
  },
  plugins: [
    require('tailwindcss-aspect-ratio'),
    require("tailwindcss-padding-safe")()
  ]
}
