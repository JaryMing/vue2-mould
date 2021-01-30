/*
 * @Author: wpp
 * @Date: 2021-01-23 14:54:56
 * @LastEditors: wpp
 * @LastEditTime: 2021-01-30 19:49:32
 * @FilePath: \text\src\utils\index.ts
 */
import Vue from "vue";
import axios from "./axios";
import Antd from "ant-design-vue";
import api from "./api";
import util from "./util";

import "@/assets/reset.less";
import "ant-design-vue/dist/antd.css";

Vue.use(Antd);

Vue.prototype.$axios = axios;
Vue.prototype.$api = api;
Vue.prototype.$util = util;
