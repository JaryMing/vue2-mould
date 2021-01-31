/*
 * @Author: wpp
 * @Date: 2021-01-18 16:09:02
 * @LastEditors: wpp
 * @LastEditTime: 2021-01-31 22:22:58
 * @FilePath: \text\src\router\home.ts
 */
import { RouteConfig } from "vue-router";
import Home from "../views/Home/index.vue";

const HomeRouter: RouteConfig = {
  path: "/",
  name: "home",
  redirect: "/homeChild/homeChildChild",
  meta: {
    text: "首页",
    pathKey: "/"
  },
  component: {
    template: "<router-view />"
  },
  children: [
    {
      path: "homeChild",
      name: "homeChild",
      redirect: "/homeChild/homeChildChild",
      meta: {
        text: "儿子页",
        pathKey: "/homeChild"
      },
      component: {
        template: "<router-view />"
      },
      children: [
        {
          path: "homeChildChild",
          name: "homeChildChild",
          meta: {
            text: "孙子页",
            pathKey: "/homeChild/homeChildChild"
          },
          component: Home
        }
      ]
    }
  ]
};

export default HomeRouter;
