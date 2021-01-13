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
  }
]

export default commonRouter
