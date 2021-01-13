/**
 * @author litianxing
 * @time 2021/1/12 7:10 下午
 * @description 日期工具类
*/

/**
 *
 * @param date 需要格式化的日期
 * @param fmt 格式
 * @returns 格式化后的日期字符串
 */
export function formatDate(date, fmt) {
  const o = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "H+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds(),
    "q+": Math.floor((date.getMonth() + 3) / 3),
    S: date.getMilliseconds()
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (`${date.getFullYear()}`).substr(4 - RegExp.$1.length))
  }
  Object.keys(o).forEach(key => {
    if (new RegExp(`(${key})`).test(fmt)) {
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[key] : (`00${o[key]}`).substr((`${o[key]}`).length))
    }
  })
  return fmt
}

/**
 * 数字及字符串类型时间转为Date时间
 * @param val
 * @returns {Date|undefined}
 */
export function toDate(val) {
  if (typeof val === "undefined" || val === null || val === "") {
    return undefined
  }
  let date
  if (typeof val === "number") {
    date = new Date(val)
  } else {
    // 调整字符串，将 -转为/ 如2020-01-01转为2020/01/01，否则在iOS设备上转换失败
    const dateStr = val
      .toString()
      .replace("T", " ")
      .replace(/-/g, "/")
    date = new Date(dateStr)
  }
  return date
}
