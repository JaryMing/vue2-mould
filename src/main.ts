/*
 * @Author: wpp
 * @Date: 2021-01-18 16:09:02
 * @LastEditors: wpp
 * @LastEditTime: 2021-01-18 20:41:48
 * @FilePath: \text\src\main.ts
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/assets/reset.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
