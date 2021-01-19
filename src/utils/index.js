/**
 * @author litianxing
 * @time 2021/1/11 9:22 下午
 * @description 全局工具类
*/

import Vue from "vue"
import _ from "lodash"
import axios from "./axiosService"
import * as validate from "./validate"
import * as formatError from "./formatError"
import * as toast from "./toast"

const utils = {
  axios,
  validate,
  formatError,
  toast
}
Vue.prototype.$tap = utils
Vue.prototype._ = _
