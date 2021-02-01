/**
 * @author litianxing
 * @time 2021/2/1 10:10 上午
 * @description 格式化
 */

/**
 * 格式化文件尺寸
 * @param val
 * @returns {string}
 */
export function formatFileSize(val) {
  if (typeof val === "undefined" || val === null || val === "") {
    return ""
  }
  val = val.toUpperCase().replace("K", "").replace("B", "")
  const k = 1024
  const bytes = val * 1024
  const sizes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return `${(bytes / k ** i).toPrecision(3)} ${sizes[i]}`
}

/**
 * 保留小数位
 * @param val
 * @param acc 小数位数
 * @returns {string}
 */
export function formatFixed(val, acc) {
  let num = parseFloat(val)
  if (Number.isNaN(num)) {
    num = 0
  }
  let accuracy = parseInt(acc, 10)
  if (Number.isNaN(accuracy) || accuracy < 0 || accuracy > 10) {
    accuracy = 2
  }
  return num.toFixed(accuracy)
}

/**
 * 格式化数字
 * @param number 要格式化的数字
 * @param decimals 保留几位小数 默认0位
 * @param decPoint 小数点符号 默认.
 * @param thousandsSep 千分位符号 默认为,
 * @returns {string}
 */
export function formatNumber(number, decimals = 0, decPoint = ".", thousandsSep = ",") {
  number = (`${number}`).replace(/[^0-9+-Ee.]/g, "")
  const n = !Number.isFinite(+number) ? 0 : +number
  const prec = !Number.isFinite(+decimals) ? 0 : Math.abs(decimals)
  const sep = (typeof thousandsSep === "undefined") ? "," : thousandsSep
  const dec = (typeof decPoint === "undefined") ? "." : decPoint
  let s = ""
  const toFixedFix = function (fixedN, fixedPrec) {
    const k = 10 ** fixedPrec
    return `${Math.ceil(fixedN * k) / k}`
  }
  s = (prec ? toFixedFix(n, prec) : `${Math.round(n)}`).split(".")
  const re = /(-?\d+)(\d{3})/
  while (re.test(s[0])) {
    s[0] = s[0].replace(re, `$1${sep}$2`)
  }
  if ((s[1] || "").length < prec) {
    s[1] = s[1] || ""
    s[1] += new Array(prec - s[1].length + 1).join("0")
  }
  return s.join(dec)
}
