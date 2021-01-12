import Vue from "vue"
import Navigation from "vue-navigation"
import globalComponents from "@/components/index"
import router from "./routers"
import store from "./store"
// 引入全局样式
import "@/assets/stylesheet/index.scss"
// 按需引入插件
import "@/plugins"
// 工具类引入
import "@/utils"
// filter引入
import "@/filters"
import App from "./App.vue"

// globalComponents.install(Vue)

// 引入导航库实现页面前进刷新，后退不刷新
Vue.use(Navigation, { router, store })

// 阻止生产模式的消息
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
