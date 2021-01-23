/*
 * @Author: wpp
 * @Date: 2021-01-23 14:54:56
 * @LastEditors: wpp
 * @LastEditTime: 2021-01-23 15:34:48
 * @FilePath: \text\src\utils\index.ts
 */
import Vue from "vue";
import axios from "./axios";
import api from "./api";
import util from "./util";

import "@/assets/reset.less";

Vue.prototype.$axios = axios;
Vue.prototype.$api = api;
Vue.prototype.$util = util;
