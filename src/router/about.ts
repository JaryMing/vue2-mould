/*
 * @Author: wpp
 * @Date: 2021-01-18 16:09:02
 * @LastEditors: wpp
 * @LastEditTime: 2021-01-18 19:59:02
 * @FilePath: \text\src\router\about.ts
 */
import { RouteConfig } from "vue-router";

const AboutRouter: RouteConfig = {
  path: "/about",
  name: "about",
  component: () =>
    import(/* webpackChunkName: "about" */ "../views/About/index.vue")
};

export default AboutRouter;
