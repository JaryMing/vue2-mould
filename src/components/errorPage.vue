<!--
 * @Author: wpp
 * @Date: 2021-01-18 16:09:02
 * @LastEditors: wpp
 * @LastEditTime: 2021-01-23 17:17:23
 * @FilePath: \text\src\components\errorPage.vue
-->
<template>
  <div class="errorPage">
    <div class="mianBox">
      <img src="~@/assets/images/error/yun0.png" alt="" class="yun yun0" />
      <img src="~@/assets/images/error/yun1.png" alt="" class="yun yun1" />
      <img src="~@/assets/images/error/yun2.png" alt="" class="yun yun2" />
      <img src="~@/assets/images/error/bird.png" alt="" class="bird" />
      <img src="~@/assets/images/error/san.png" alt="" class="san" />
      <div class="tipInfo">
        <div class="in">
          <div class="textThis">
            <i class="text-404"> 出错啦 404 ！</i>
            <i class="text-404 button-style" @click="handleBackFn">返 回</i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ErrorPage extends Vue {
  public handleBackFn() {
    this.$router.back();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.errorPage {
  width: 100%;
  height: 100%;
  background: #d2f5f1;
  .mianBox {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    & > img {
      position: absolute;
    }
  }
  .yun0 {
    right: -140px;
    top: 30px;
    -webkit-animation: cloudLarge 105s infinite;
    -moz-animation: cloudLarge 105s infinite;
    -o-animation: cloudLarge 105s infinite;
    animation: cloudLarge 105s infinite;
  }
  .yun1 {
    left: 5%;
    top: 48%;
    -webkit-animation: cloudSmall 105s infinite;
    -moz-animation: cloudSmall 105s infinite;
    -o-animation: cloudSmall 105s infinite;
    animation: cloudSmall 105s infinite;
  }
  .yun2 {
    left: 16%;
    top: 35%;
    -webkit-animation: cloudMedium 105s infinite;
    -moz-animation: cloudMedium 105s infinite;
    -o-animation: cloudMedium 105s infinite;
    animation: cloudMedium 105s infinite;
  }
  .san {
    left: 10%;
    top: 20%;
    -webkit-animation: dn400 3s 0s ease both;
    -moz-animation: dn400 3s 0s ease both;
    animation: dn400 3s 0s ease both;
  }
  .bird {
    left: 27%;
    top: 15%;
    -webkit-animation: flying 3s infinite;
    -moz-animation: flying 3s infinite;
    -o-animation: flying 3s infinite;
    animation: flying 3s infinite;
  }
  .light {
    left: 330px;
    top: 188px;
    z-index: 8;
    -webkit-animation: light 1s infinite;
    -moz-animation: light 1s infinite;
    -o-animation: light 1s infinite;
    animation: light 1s infinite;
  }
  .man {
    left: 400px;
    top: 310px;
    z-index: 7;
    -webkit-animation: hide 2s 0.5s infinite;
    -moz-animation: hide 2s 0.5s infinite;
    -o-animation: hide 2s 0.5s infinite;
    animation: hide 2s 0.5s infinite;
  }
  .picv {
    left: 15%;
    top: 390px;
  }
  .tipInfo {
    position: absolute;
    z-index: 99;
    margin-left: 150px;
    width: 360px;
    top: 45%;
    left: 55%;
    transform: translate(-50%, -50%);
    .in {
      .textThis {
        display: flex;
        flex-direction: column;
        font-size: 30px;
        .text-404 {
          line-height: 50px;
          color: #e94c3c;
        }
        .button-style {
          font-size: 20px;
          cursor: pointer;
        }
      }
    }
  }
  @-webkit-keyframes cloudLarge {
    0% {
      right: -140px;
    }
    100% {
      right: 118%;
    }
  }
  @-moz-keyframes cloudLarge {
    0% {
      right: -140px;
    }
    100% {
      right: 118%;
    }
  }
  @-o-keyframes cloudLarge {
    0% {
      right: -140px;
    }
    100% {
      right: 118%;
    }
  }
  @keyframes cloudLarge {
    0% {
      right: -140px;
    }
    100% {
      right: 118%;
    }
  }
  @-webkit-keyframes cloudSmall {
    0% {
      left: 5%;
    }
    100% {
      left: 108%;
    }
  }
  @-moz-keyframes cloudSmall {
    0% {
      left: 5%;
    }
    100% {
      left: 105%;
    }
  }
  @-o-keyframes cloudSmall {
    0% {
      left: 5%;
    }
    100% {
      left: 105%;
    }
  }
  @keyframes cloudSmall {
    0% {
      left: 5%;
    }
    100% {
      left: 105%;
    }
  }
  @-webkit-keyframes cloudMedium {
    0% {
      left: 16%;
    }
    100% {
      left: -18%;
    }
  }
  @-moz-keyframes cloudMedium {
    0% {
      left: 16%;
    }
    100% {
      left: -18%;
    }
  }
  @-o-keyframes cloudMedium {
    0% {
      left: 16%;
    }
    100% {
      left: -18%;
    }
  }
  @keyframes cloudMedium {
    0% {
      left: 16%;
    }
    100% {
      left: -18%;
    }
  }
  @-webkit-keyframes light {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 100;
    }
  }
  @-moz-keyframes light {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 100;
    }
  }
  @-o-keyframes light {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 100;
    }
  }
  @keyframes light {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 100;
    }
  }
  @-webkit-keyframes hide {
    0% {
      opacity: 100;
    }
    100% {
      opacity: 0;
    }
  }
  @-moz-keyframes hide {
    0% {
      opacity: 100;
    }
    100% {
      opacity: 0;
    }
  }
  @-o-keyframes hide {
    0% {
      opacity: 100;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes hide {
    0% {
      opacity: 100;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes flying {
    0% {
      margin-top: 0px;
    }
    50% {
      margin-top: 6px;
    }
    100% {
      margin-top: 0px;
    }
  }
  @-webkit-keyframes flying {
    0% {
      margin-top: 0px;
    }
    50% {
      margin-top: 6px;
    }
    100% {
      margin-top: 0px;
    }
  }
  @-moz-keyframes flying {
    0% {
      margin-top: 0px;
    }
    50% {
      margin-top: 6px;
    }
    100% {
      margin-top: 0px;
    }
  }
  @-o-keyframes flying {
    0% {
      margin-top: 0px;
    }
    50% {
      margin-top: 6px;
    }
    100% {
      margin-top: 0px;
    }
  }
  @keyframes flying {
    0% {
      margin-top: 0px;
    }
    50% {
      margin-top: 6px;
    }
    100% {
      margin-top: 0px;
    }
  }
  @-webkit-keyframes flying {
    0% {
      margin-top: 0px;
    }
    50% {
      margin-top: 6px;
    }
    100% {
      margin-top: 0px;
    }
  }
  @-moz-keyframes flying {
    0% {
      margin-top: 0px;
    }
    50% {
      margin-top: 6px;
    }
    100% {
      margin-top: 0px;
    }
  }
  @-o-keyframes flying {
    0% {
      margin-top: 0px;
    }
    50% {
      margin-top: 6px;
    }
    100% {
      margin-top: 0px;
    }
  }
  @-webkit-keyframes down900 {
    0% {
      opacity: 0;
      -webkit-transform: translate(0, 0);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(900, 900);
    }
  }
  @-moz-keyframes down900 {
    0% {
      opacity: 0;
      -moz-transform: translate(0, 0);
    }
    100% {
      opacity: 1;
      -moz-transform: translate(900, 900);
    }
  }
  @-o-keyframes down900 {
    0% {
      opacity: 0;
      -o-transform: translate(0, 0);
    }
    100% {
      opacity: 1;
      -o-transform: translate(900, 900);
    }
  }
  @keyframes down900 {
    0% {
      opacity: 0;
      transform: translate(0, 0);
    }
    100% {
      opacity: 1;
      transform: translate(900, 900);
    }
  }
  @-webkit-keyframes dn400 {
    0% {
      opacity: 0;
      -webkit-transform: translateY(-400px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
    }
  }
  @-moz-keyframes dn400 {
    0% {
      opacity: 0;
      -moz-transform: translateY(-400px);
    }
    100% {
      opacity: 1;
      -moz-transform: translateY(0);
    }
  }
  @-o-keyframes dn400 {
    0% {
      opacity: 0;
      -o-transform: translateY(-400px);
    }
    100% {
      opacity: 1;
      -o-transform: translateY(0);
    }
  }
  @keyframes dn400 {
    0% {
      opacity: 0;
      transform: translateY(-400px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
</style>
