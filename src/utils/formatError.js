/**
 * @author litianxing
 * @time 2021/1/11 10:27 下午
 * @description 错误格式化
 */

/**
 * 格式化网络请求过程中的错误
 * @param error
 * @returns {string}
 */
export function fromatNetworkError(error) {
  let errorStr = ""
  let result = "网络错误"
  if (typeof error !== "undefined") {
    if (typeof error !== "string") {
      errorStr = error.toString()
    } else {
      errorStr = error
    }
  }
  if (errorStr.includes("timeout")) {
    result = "请求超时"
  } else if (errorStr.includes("Network Error")) {
    result = "网络错误"
  } else if (/^[\u4e00-\u9fa5]+$/i.test(errorStr)) {
    // 全部是中文，应该是开发者自定义的错误
    result = errorStr
  }
  return result
}

export function fromatServerError() {

}
