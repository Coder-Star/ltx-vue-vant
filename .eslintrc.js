/**
 * ESLint格式配置文件
 */

module.exports = {
  // 当前配置为根配置，将不再从上级文件夹查找配置
  root: true,
  // 环境配置
  env: {
    // 是否浏览器
    browser: true,
    es2021: true
  },
  // 扩展插件
  extends: [
    "plugin:vue/essential",
    "airbnb-base"
  ],
  parserOptions: {
    // eslint允许常规解析器，有一些babel语法没有被eslint支持。
    // 当使用这些插件时，你的代码要转换成eslint能够支持解析的代码格式
    parser: "babel-eslint",
    ecmaVersion: 12,
    // js导入的方式，默认是script，此处设置为module，指模块导入方式
    sourceType: "module"
  },
  plugins: [
    "vue"
  ],
  rules: {
    // 生产环境 禁用console
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    // 生产环境 禁用debugger
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    // 行尾不使用分号
    semi: ["error", "never"],
    // 最后一项不使用逗号
    "comma-dangle": ["error", "never"],
    // 推荐使用双引号
    quotes: ["error", "double"],
    // 最后一项不使用逗号
    "max-len": ["error", { code: 200 }],
    // 允许箭头函数的参数不使用圆括号
    "arrow-parens": ["error", "as-needed"],
    // 允许@作为src文件夹的别名
    "import/no-unresolved": [2, { ignore: ["^@/"] }],

    // 允许动态名称的形式导入库
    "import/no-dynamic-require": "off",
    // 关闭 禁止对函数参数再赋值
    "no-param-reassign": "off"

  }
}
