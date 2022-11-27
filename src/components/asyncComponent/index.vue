<template>
  <AsyncTest />
  <AsyncTest2 />
</template>
<script setup lang="ts">
import AsyncTest from "./AsyncTest.vue";
const AsyncTest2 = defineAsyncComponent(()=>import('./AsyncTest2.vue'))
// import AsyncTest2Vue from "./AsyncTest2.vue";
// 普通模式加载子组件与异步加载子组件对比
// 异步加载会单独打包，使用到的时候才会请求加载
// 它和vue-router类似但有所不同，
// vue-router默认就是懒加载（异步），针对的是路由组件
// defineAsyncComponent是组件中嵌套组件时使用进一步减少单屏首次加载时间

</script>
<style scoped lang="less"></style>
