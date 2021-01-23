/*
 * @Author: wpp
 * @Date: 2021-01-18 16:09:02
 * @LastEditors: wpp
 * @LastEditTime: 2021-01-23 16:59:30
 * @FilePath: \text\src\router\index.ts
 */
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Layout from "@/views/Layout.vue";
import error from "@/components/errorPage.vue";
import AboutRouter from "./about";
import HomeRouter from "./home";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    component: Layout,
    children: [HomeRouter, AboutRouter]
  },
  {
    path: "/*",
    component: error
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
