import Vue from "vue"
import Router from "vue-router"
import store from "../store/index"
import commonRouter from "./routerCommon"

const originalPush = Router.prototype.push
// 重写Router的push方法，解决重复路由的问题
Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) {
    return originalPush.call(this, location, onResolve, onReject)
  }
  return originalPush.call(this, location, onResolve, onReject).catch(err => err)
}

Vue.use(Router)

const createRouter = () => new Router({
  mode: "history",
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    ...commonRouter
  ]
})

const router = createRouter()

// 路由前置守卫，用于检查权限，存储用户信息以及token等
router.beforeEach((to, from, next) => {
  // 如果store里面的用户信息不存在，先获取用户信息
  if (store.getters.name === "") {
    store.dispatch("getUserInfo")
      .then(() => {
        next()
      })
      .catch(e => {
        console.log(e)
        Vue.prototype.$tap.toast.fail(Vue.prototype.$tap.formatError.fromatNetworkError(e))
      })
  } else {
    next()
  }
})

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

// 监听router返回
window.addEventListener("popstate", e => {
  router.isBack = true
}, false)

export default router
