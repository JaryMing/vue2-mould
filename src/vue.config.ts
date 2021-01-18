/*
 * @Author: wpp
 * @Date: 2021-01-18 16:10:47
 * @LastEditors: wpp
 * @LastEditTime: 2021-01-18 16:24:13
 * @FilePath: \text\src\vue.config.ts
 */

const ip = "http://192.168.5.133"; // 8009
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
  runtimeCompiler: true,
  devServer: {
    proxy: {
      "/api/": {
        target: ip,
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          // '^/api/': '',
        },
      },
    },
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          "primary-color": "#1DA57A",
          "link-color": "#1DA57A",
          "border-radius-base": "2px",
        },
        javascriptEnabled: true,
      },
      postcss: {
        plugins: [
          require("postcss-pxtorem")({
            rootValue: 16,
            propList: ["*"],
          }),
          require("autoprefixer")(),
        ],
      },
    },
  },
};
