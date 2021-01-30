<!--
 * @Author: wpp
 * @Date: 2021-01-18 16:09:02
 * @LastEditors: wpp
 * @LastEditTime: 2021-01-30 20:34:21
 * @FilePath: \text\src\views\About\index.vue
-->
<template>
  <div class="about">
    <h1 class="text" @click="setTestValFn">
      This is an about page {{ getTestVal }}
    </h1>
    <div class="btn-box">
      <a-button type="primary">
        Primary
      </a-button>
      <a-button>Default</a-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Getter, Mutation } from "vuex-class";

@Component
export default class About extends Vue {
  @Getter getTestVal?: number | string;

  @Mutation SETTESTVAL!: Function;

  get testVal() {
    return this.getTestVal;
  }

  public setTestValFn() {
    if (this.testVal === 1) {
      this.SETTESTVAL(10);
    } else {
      this.SETTESTVAL(1);
    }
  }
}
</script>

<style lang="less" scoped>
.about {
  .text {
    font-size: 32px;
    text-align: center;
  }
  .btn-box {
    display: flex;
    justify-content: space-around;
  }
}
</style>
