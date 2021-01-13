import Vue from "vue"
import Navigation from "vue-navigation"
import touch from "vue-directive-touch"
import globalComponents from "@/components/index"
import * as filters from "./filters"
import router from "./routers"
import store from "./store"
// 引入全局样式
import "@/style/index.scss"
// 按需引入插件
import "@/plugins"
// 工具类引入
import "@/utils"
// filter引入
import "@/filters"
import App from "./App.vue"

// 注册全局filters
Object.keys(filters.default).forEach(key => {
  const object = filters.default[key]
  Object.keys(object).forEach(filterName => {
    Vue.filter(filterName, object[filterName])
  })
})

// 全局自定义组件
Vue.use(globalComponents)

// 引入导航库实现页面前进刷新，后退不刷新
Vue.use(Navigation, { router, store })
// 手势返回
Vue.use(touch)

// 阻止生产模式的消息
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
