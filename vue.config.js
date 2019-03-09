'use strict'
const path = require('path');
const resolve = dir => path.join(__dirname, dir);
const titles = require('./title.js')
const glob = require('glob')
const pages = {}

glob.sync('./src/pages/**/app.js').forEach(path => {
  const chunk = path.split('./src/pages/')[1].split('/app.js')[0]
  pages[chunk] = {
    entry: path,
    template: 'public/index.html',
    title: titles[chunk],
    chunks: ['chunk-vendors', 'chunk-common', chunk]
  }
})
module.exports = {
  pages,
  //chainWebpack: config => config.plugins.delete('named-chunks'),
  // 以下链式结构作用：指定文件路径的简化缩写。
  chainWebpack: config => {
      config.resolve.alias
          .set('@', resolve('src'))
          .set('_c', resolve('src/components'))
  },
  
  // 打包时不生成map文件,加快打包速度，减少体积。
  productionSourceMap: false,
  // 配置 webpack-dev-server 行为。
  devServer: {
    host: '0.0.0.0',
    port: 5678,
    https: false,
    hotOnly: false,
    // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/cli-service.md#配置代理
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:6666',
        changeOrigin: true,
        pathRewrite: { '^/api': '' }
      }
    },
    before: app => {
        // `app` 是一个 express 实例
    }
  }
}
