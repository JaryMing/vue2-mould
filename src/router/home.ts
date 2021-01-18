/*
 * @Author: wpp
 * @Date: 2021-01-18 16:09:02
 * @LastEditors: wpp
 * @LastEditTime: 2021-01-18 19:59:11
 * @FilePath: \text\src\router\home.ts
 */
import { RouteConfig } from "vue-router";
import Home from "../views/Home/index.vue";

const HomeRouter: RouteConfig = {
  path: "/",
  name: "home",
  component: Home,
  children: []
};

export default HomeRouter;
