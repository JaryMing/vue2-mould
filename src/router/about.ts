/*
 * @Author: wpp
 * @Date: 2021-01-18 16:09:02
 * @LastEditors: wpp
 * @LastEditTime: 2021-01-31 20:51:48
 * @FilePath: \text\src\router\about.ts
 */
import { RouteConfig } from "vue-router";

const AboutRouter: RouteConfig = {
  path: "/about",
  name: "about",
  component: () =>
    import(/* webpackChunkName: "about" */ "../views/About/index.vue"),
  meta: {
    text: "关于",
    pathKey: "/about"
  }
};

export default AboutRouter;
