<!--
 * @author litianxing
 * @time 2021/1/17 7:07 下午
 * @description 适配相关，系统、机型等
-->

/**
 * 是否是iOS设备
 * @returns {boolean}
 */
export function isIOS() {
  const u = navigator.userAgent
  const isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
  return isIOS
}
