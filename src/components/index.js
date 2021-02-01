/**
 * @author litianxing
 * @time 2021/1/20 3:19 下午
 * @description 全局组件
*/

import SNavBar from "@/components/SNavBar"

const globalComponents = [
  SNavBar
]

const components = {
  install(Vue) {
    globalComponents.forEach(component => {
      Vue.component(component.name, component)
    })
  }
}

export default components
