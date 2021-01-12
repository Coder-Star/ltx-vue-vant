/**
 * @author litianxing
 * @time 2021/1/11 9:26 下午
 * @description axios网络请求工具类
*/

import axios from "axios"
import { Toast } from "vant"
import Vue from "vue"

axios.defaults.withCredentials = true
axios.defaults.crossDomain = true
const service = axios.create({
  baseURL: "",
  timeout: 30000
})

/**
 * request拦截器，在该部分可以进行统一参数等操作
 */
service.interceptors.request.use(
  config => {
    config.headers["Content-Type"] = "application/json"

    // 显示加载框
    if (!Vue.prototype.$tap.validate.validateNull(config.config) && config.config.showLoad) {
      Toast.loading({
        forbidClick: true,
        loadingType: "spinner",
        duration: 0
      })
    }
    return config
  },
  error => Promise.reject(error)
)

/**
 * response拦截器，在此可以进行统一错误处理等操作
 */
service.interceptors.response.use(
  response => {
    // http状态码
    const code = response.status

    if (!Vue.prototype.$tap.validate.validateNull(response.config.config) && response.config.config.showLoad) {
      Toast.clear()
    }

    if (code < 200 || code > 300) {
      return Promise.reject(new Error(`网络错误(${code})`))
    }

    return response.data
  },
  error => {
    console.log(error)
    console.log(error.response)
    if (Vue.prototype.$tap.validate.validateNull(error.response)) {
      Toast.clear()
    } else if (!Vue.prototype.$tap.validate.validateNull(error.response.config.config) && error.response.config.config.showLoad) {
      Toast.clear()
    }
    return Promise.reject(error)
  }
)

export default service
