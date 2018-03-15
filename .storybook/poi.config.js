module.exports = {
  entry: '.storybook/config.js',

  presets: [
    require('poi-preset-storybook')({ iframeTemplate: '.storybook/iframe.ejs' }),
    require('poi-preset-eslint')({ mode: '*' }),
    require('poi-preset-yaml')(),
  ],
}
