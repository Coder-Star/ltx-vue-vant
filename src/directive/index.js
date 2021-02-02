/**
 * @author litianxing
 * @time 2021/2/2 5:31 下午
 * @description 自定义指令入口
*/

import copy from "./copy"

const directives = {
  copy
}

const installDirectives = {
  install(Vue) {
    Object.keys(directives).forEach(k => {
      Vue.directive(k, directives[k])
    })
  }
}

export default installDirectives
