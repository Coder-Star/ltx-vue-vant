/**
 * postcss-pxtorem 配置文件，将px转换成rem
 */
const path = require("path")

module.exports = ({ file }) => {
  // 因为vant框架是以375px宽度为标准做的，业务开发以750px宽为标准开发比较合适
  const remUnit = file.dirname.includes(path.join("node_modules", "vant")) ? 37.5 : 75
  return {
    plugins: {
      autoprefixer: {
        overrideBrowserslist: [
          "Android 4.1",
          "iOS 7.1",
          "Chrome > 31",
          "ff > 31",
          "ie >= 8"
        ]
      },
      // 将px转为rem配置
      "postcss-pxtorem": {
        rootValue: remUnit, // 设计稿元素尺寸/75，比如元素宽750px,最终页面会换算成 10rem，这里其实需要结合lib-flexible的规则来配制，即配置的值最终换算出的值必须等于10rem
        propList: ["*"], // 指定需要转换的类，*为通配
        // selectorBlackList: ["van-"], // 指定不转换的类
        unitPrecision: 5, // 保留rem小数点多少位
        minPixelValue: 12 // px小于12的不会被转换
      }
    }
  }
}
