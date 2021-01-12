/**
 * postcss-pxtorem 配置文件，将px转换成rem
 */

module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: ["Android 4.1", "iOS 7.1", "Chrome > 31", "ff > 31", "ie >= 8"]
    },
    "postcss-pxtorem": {
      rootValue: 37.5,
      propList: ["*"], // 指定需要转换的类，*为通配
      selectorBlackList: ["van-"] // 指定不转换的类
    }
  }
}
