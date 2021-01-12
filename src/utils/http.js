import { baseApi } from "@/config"
import request from "./axiosService"

/**
 * 网络请求默认配置
 * @type {{showLoad: boolean}} 是否显示菊花框，默认是true
 */
const defaultConfig = {
  showLoad: true
}

/**
 * get请求
 * @param url
 * @param parameter
 * @param config
 * @returns {*}
 */
export function getAction(url, parameter, config = defaultConfig) {
  return request({
    baseURL: baseApi,
    url,
    method: "get",
    params: parameter,
    config
  })
}

/**
 * post请求
 * @param url
 * @param parameter
 * @param config
 * @returns {*}
 */
export function postAction(url, parameter, config = defaultConfig) {
  return request({
    baseURL: baseApi,
    url,
    method: "post",
    data: parameter,
    config
  })
}

/** PUT请求 */
/**
 * put请求
 * @param url
 * @param parameter
 * @param config
 * @returns {*}
 */
export function putAction(url, parameter, config = defaultConfig) {
  return request({
    baseURL: baseApi,
    url,
    method: "put",
    data: parameter,
    config
  })
}

/**
 * delete请求
 * @param url
 * @param parameter
 * @param config
 * @returns {*}
 */
export function deleteAction(url, parameter, config = defaultConfig) {
  return request({
    baseURL: baseApi,
    url,
    method: "delete",
    data: parameter,
    config
  })
}

/**
 * http请求，自定义method
 * @param url
 * @param parameter
 * @param method
 * @param config
 * @returns {*}
 */
export function httpAction(url, parameter, method, config = defaultConfig) {
  return request({
    baseURL: baseApi,
    url,
    method,
    data: parameter,
    config
  })
}
