// see http://vuejs-templates.github.io/webpack for documentation.
/* disable eslint */
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css']
  },
  dev: {
    env: require('./dev.env'),
    port: 8081,
    host:"apo.douban.com",
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
        "/api": {
          target: "http://api.douban.com/v2",
          changeOrigin: true,
          secure: false,
          pathRewrite: {
            '^/api': ''
          }
        }
      //在proxyTable这个属性中，配置target属性为我们要代理的目标地址。这里我们写成http://api.douban.com/v2，
      //这样我们就可以在应用中调用/api/movie/in_theaters来访问http://api.douban.com/v2/movie/in_theaters，从而解决跨域的问题。
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
