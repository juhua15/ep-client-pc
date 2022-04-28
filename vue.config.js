const { defineConfig } = require('@vue/cli-service')
const { resolve } = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      // 那些需要自动引入
      patterns: [
        resolve(__dirname, 'src/assets/styles/mixins.less'),
        resolve(__dirname, 'src/assets/styles/variables.less')
      ]
    }
  }
})
