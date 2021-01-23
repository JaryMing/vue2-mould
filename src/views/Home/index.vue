<!--
 * @Author: wpp
 * @Date: 2021-01-18 16:09:02
 * @LastEditors: wpp
 * @LastEditTime: 2021-01-23 15:40:35
 * @FilePath: \text\src\views\Home\index.vue
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="~@/assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  mounted() {
    const http = this.$axios;
    const router = this.$router;
    const api = this.$api;
    console.log(http, router, api);
  }
}
</script>

<style lang="less" scoped>
.home {
  text-align: center;
}
</style>
