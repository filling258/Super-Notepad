<script setup lang='ts'>
import { useRoute } from 'vue-router';
const route = useRoute()
</script>
<template>
  <van-row>
    <van-col span="12">
      <router-link to="/">
        <p class="iconfont icon-bijijilu" :class="{ active: route.path === '/' }"></p>
        <p :class="{ active: route.path !== '/Agent' }">笔记</p>
      </router-link>
    </van-col>
    <van-col span="12">
      <router-link to="/Agent">
        <p class="iconfont icon-daibanshixiang" :class="{ active: route.path === '/Agent' }"></p>
        <p :class="{ active: route.path === '/Agent' }">代办</p>
      </router-link>
    </van-col>
  </van-row>
</template>
<style scoped lang='scss'>
.van-row {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: .65rem;
  text-align: center;
  background: pink;

  .van-col {
    a {
      p {
        line-height: 0;
        color: #ccc;
      }

      &>p:first-child {
        font-size: .25rem;
      }

      .active {
        color: #000;
      }
    }

  }
}
</style>