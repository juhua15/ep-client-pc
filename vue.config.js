const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      // 那些需要自动引入
      patterns: [
        path.join(__dirname, './src/asstes/styles/mixins.less'),
        path.join(__dirname, './src/asstes/styles/variables.less')
      ]
    }
  }
})
