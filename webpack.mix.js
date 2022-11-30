let mix = require('laravel-mix');

mix
  .setPublicPath('dist')
  .js('./resources/js/translatable-field.js', 'js')
  .vue({ version: 3 })
  .webpackConfig({
    externals: {
      vue: 'Vue',
      'laravel-nova': 'LaravelNova'
    },
    output: {
      uniqueName: 'outl1ne/nova-translatable',
    },
  })
