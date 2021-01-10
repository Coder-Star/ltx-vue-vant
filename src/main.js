import Vue from "vue"
import App from "./App.vue"
import router from "./routers"
import store from "./store"

// 引入全局样式
import "@/assets/stylesheet/index.scss"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
