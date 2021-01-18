/*
 * @Author: wpp
 * @Date: 2021-01-18 16:09:02
 * @LastEditors: wpp
 * @LastEditTime: 2021-01-18 19:14:12
 * @FilePath: \text\src\store\index.ts
 */
import Vue from "vue";
import Vuex from "vuex";

import { state } from "./state";
import mutations from "./mutations";
import actions from "./actions";
import modules from "./modules";
import getters from "./getters";

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules,
  getters
});
