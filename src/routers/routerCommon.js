const commonRouter = [
  {
    path: "/",
    name: "main-menu",
    component: () => import("@/views/main-menu"),
    meta: { title: "主菜单" }
  },
  {
    path: "/css-menu",
    name: "css-menu",
    component: () => import("@/views/css-menu"),
    meta: { title: "CSS菜单", showNavBar: true }
  },
  {
    path: "/js-menu",
    name: "js-menu",
    component: () => import("@/views/js-menu"),
    meta: { title: "JS菜单" }
  }
]

export default commonRouter
