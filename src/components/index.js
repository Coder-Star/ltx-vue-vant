<!--
 * @author litianxing
 * @time 2021/1/19 11:36 上午
 * @description 全局组件
-->
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
