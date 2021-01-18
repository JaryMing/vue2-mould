<!--
 * @Author: wpp
 * @Date: 2021-01-18 16:09:02
 * @LastEditors: wpp
 * @LastEditTime: 2021-01-18 20:30:12
 * @FilePath: \text\src\views\About\index.vue
-->
<template>
  <div class="about">
    <h1 class="text">This is an about page</h1>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Layout extends Vue {}
</script>

<style lang="less" scoped>
.about {
  .text {
    font-size: 32px;
  }
}
</style>
