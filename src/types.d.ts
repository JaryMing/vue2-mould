/*
 * @Author: wpp
 * @Date: 2021-01-18 16:09:02
 * @LastEditors: wpp
 * @LastEditTime: 2021-01-23 16:16:14
 * @FilePath: \text\src\types.d.ts
 */
import Vue from "vue";
import { AxiosInstance } from "axios";
declare module "vue/types/vue" {
  interface Vue {
    $axios: AxiosInstance;
    $api: any;
    $util: any;
  }
}
