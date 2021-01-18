<!--
 * @Author: wpp
 * @Date: 2021-01-18 19:18:23
 * @LastEditors: wpp
 * @LastEditTime: 2021-01-18 19:47:32
 * @FilePath: \text\src\views\layout.vue
-->
<template>
  <div class="layout">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Layout extends Vue {}
</script>

<style lang="less" scoped>
.layout {
  height: 100%;
  display: flex;
  flex-direction: column;
  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
  .main {
    flex: 1;
  }
}
</style>
