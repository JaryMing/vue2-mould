/*
 * @Author: wpp
 * @Date: 2021-01-18 16:25:48
 * @LastEditors: wpp
 * @LastEditTime: 2021-01-18 21:03:41
 * @FilePath: \text\src\store\mutations.ts
 */
export default {
  SETTESTVAL: (state: STATE, val: number) => {
    state.test = val;
  }
};
