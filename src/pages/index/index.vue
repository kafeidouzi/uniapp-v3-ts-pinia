<!--
 * @Author: gaozhanfei gaozhanfei@jryghq.com
 * @Date: 2023-06-05 20:48:56
 * @LastEditors: gaozhanfei gaozhanfei@jryghq.com
 * @LastEditTime: 2023-06-08 09:59:26
 * @FilePath: /uniapp-v3-ts-pinia/src/pages/index/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">{{ title }}</text>
      <view class="fensi">一把粉丝</view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue'
const $to = inject('$to')
const title = ref('Hello')
// const instance = getCurrentInstance()?.proxy
// console.log(instance?.$to)
console.log($to)
</script>

<style lang="less">
.fensi {
  color: yellowgreen;
  font-size: 60rpx;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
