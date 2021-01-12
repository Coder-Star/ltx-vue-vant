const commonRouter = [
  {
    path: "/",
    name: "mainMenu",
    component: () => import("@/views/MainMenu"),
    meta: { title: "菜单" }
  }
]

export default commonRouter
