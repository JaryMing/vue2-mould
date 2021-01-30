<!--
 * @Author: wpp
 * @Date: 2021-01-18 19:18:23
 * @LastEditors: wpp
 * @LastEditTime: 2021-01-30 21:10:19
 * @FilePath: \text\src\views\Layout.vue
-->
<template>
  <a-layout class="layout">
    <a-layout-header id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </a-layout-header>
    <a-layout class="main">
      <a-layout-sider>
        <Menu></Menu>
      </a-layout-sider>
      <a-layout>
        <router-view />
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { routeDate } from "@/router";
import Menu from "@/components/menu";

@Component({
  components: {
    Menu
  }
})
export default class Layout extends Vue {
  get getRouterDate() {
    return routeDate;
  }

  mounted() {
    document.documentElement.style.fontSize = "16px";
  }
}
</script>

<style lang="less" scoped>
.layout {
  height: 100%;
  display: flex;
  flex-direction: column;
  #nav {
    text-align: center;
    color: #fff;
    a {
      font-weight: bold;
      color: #fff;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
  .main {
    flex: 1;
    .main-box {
      height: 100%;
    }
  }
}
</style>
