/**
 * @author litianxing
 * @time 2021/1/11 9:25 下午
 * @description 校验工具类
*/

/**
 * 判断是否为空
 * @param val
 * @returns {boolean}
 */
export function validateNull(val) {
  if (val instanceof Array) {
    if (val.length === 0) {
      return true
    }
  } else if (val instanceof Object) {
    if (JSON.stringify(val) === "{}") {
      return true
    }
  } else if (val === "null" || val == null || val === "undefined" || val === undefined || val === "") {
    return true
  }
  return false
}

/**
 * 验证邮箱
 * @param str
 * @returns {boolean}
 */
export function validatEmail(str) {
  const reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
  return reg.test(str)
}