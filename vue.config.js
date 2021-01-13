const path = require("path")
// 环境配置信息
const configInfo = require("./src/config/index.js")
// 是否打包环境
const isPack = process.env.NODE_ENV === "production"

const resolve = dir => path.join(__dirname, dir)
const title = configInfo.title || "ltx-vue-vant"

module.exports = {
  publicPath: "/", // 应用包时的基本 URL
  outputDir: "dist", // 生产环境构建文件的目录
  assetsDir: "static", // outputDir的静态资源(js、css、img、fonts)目录
  lintOnSave: !isPack,
  devServer: {
    port: 1024, // 端口
    open: false, // 启动后打开浏览器，优先级比package.json中的优先级低
    // 当出现编译器错误或警告时，在浏览器中显示全屏覆盖层
    overlay: {
      warnings: false,
      errors: true
    }
  },

  css: {
    extract: isPack,
    sourceMap: false,
    loaderOptions: {
      scss: {
        prependData: `
          @import "@/style/scss/variables.scss";
        `
      },
      less: {
        lessOptions: {
          modifyVars: {
            // 定制vant样式，自定义样式路径
            hack: `
                true; @import "@/style/less/vantThemeCover.less";
            `
          }
        }
      }
    }
  },

  configureWebpack: config => {
    // eslint-disable-next-line no-param-reassign
    config.name = title
  },

  chainWebpack: config => {
    config.plugins.delete("preload")
    config.plugins.delete("prefetch")
  }
}
