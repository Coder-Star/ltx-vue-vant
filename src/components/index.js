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
