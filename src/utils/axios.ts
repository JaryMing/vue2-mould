/*
 * @Author: wpp
 * @Date: 2021-01-23 14:37:46
 * @LastEditors: wpp
 * @LastEditTime: 2021-01-23 14:54:07
 * @FilePath: \text\src\utils\axios.ts
 */

import axios from "axios";

const instance = axios.create({
  baseURL: "/"
});

const errorHandle = (status: number | string) => {
  switch (status) {
    case 404:
      alert("请求的资源不存在");
      break;
    default:
  }
};

instance.interceptors.request.use(
  config => {
    config.timeout = 3 * 1000;

    return config;
  },
  error => Promise.reject(error)
);

instance.interceptors.response.use(
  response => {
    return response.status === 200
      ? Promise.resolve(response)
      : Promise.reject(response);
  },
  error => {
    const { response } = error;
    if (response) {
      // 请求已发出，但是不在2xx的范围
      errorHandle(response.status);
      return Promise.reject(response);
    } else {
      // 请求超时或断网时
      return Promise.reject(response);
    }
  }
);

export default instance;
