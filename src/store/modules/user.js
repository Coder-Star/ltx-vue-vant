import * as http from "@/utils/http"

const user = {
  state: {
    name: "", // 用户姓名
    email: "" // 用户email
  },
  mutations: {
    USER_NAME: (state, name) => {
      state.name = name
    },
    USER_EMAIL: (state, email) => {
      state.email = email
    }
  },
  actions: {
    // 获取用户信息
    getUserInfo({ commit }) {
      return new Promise((resolve, reject) => {
        http.getAction("getUserInfo").then(res => {
          commit("USER_NAME", res.name)
          commit("USER_EMAIL", res.email)
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default user
