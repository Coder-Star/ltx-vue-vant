/**
 * @author litianxing
 * @time 2021/1/11 10:31 下午
 * @description
*/

import Vue from "vue"

export function info(message, duration = 2000, position = "middle", onClose = function close() {}) {
  if (message === "") {
    return undefined
  }
  return Vue.prototype.$toast({
    type: "text",
    message,
    duration,
    position,
    forbidClick: true,
    onClose
  })
}

export function success(message, duration = 2000, position = "middle", onClose = function close() {}) {
  if (message === "") {
    return undefined
  }
  return Vue.prototype.$toast({
    type: "success",
    message,
    duration,
    position,
    forbidClick: true,
    onClose
  })
}

export function successWithBlock(message, onClose = function close() {}) {
  if (message === "") {
    return undefined
  }
  return Vue.prototype.$toast({
    type: "success",
    message,
    duration: 2000,
    position: "middle",
    forbidClick: true,
    onClose
  })
}

export function fail(message, duration = 2000, position = "middle", onClose = function close() {}) {
  if (message === "") {
    return undefined
  }
  return Vue.prototype.$toast({
    type: "fail",
    message,
    duration,
    position,
    forbidClick: true,
    onClose
  })
}

// 该方法返回一个toast实例
// 可以使用 toast.clear方法销毁 使用toast.message = "" 更改message信息
export function loading(message) {
  return Vue.prototype.$toast({
    type: "loading",
    message,
    forbidClick: true,
    duration: 0
  })
}
