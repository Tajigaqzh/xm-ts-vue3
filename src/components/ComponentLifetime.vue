<template>
  <div ref="div">{{ str }}</div>
  <button @click="change">修改</button>
</template>
<script setup lang="ts">
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  nextTick,
  getCurrentInstance
} from "vue";
//组件生命周期

// 组合式api是没有created，beforeCreate
const str = ref<string>("hello");
console.log("setup");

const div = ref<HTMLDivElement>();
const instance = getCurrentInstance()
// 获取当前实例
onBeforeMount(() => {
  console.log("挂载之前", div.value);
  //   挂载之前 undefined，读不到dom,但是可以使用nextTick
  nextTick(() => {
    console.log("nextTick", div.value);
  });
});

onMounted(() => {
  console.log("挂载之后", div.value);
  //  挂载之后 <div>hello</div> 可以读取到dom

});

// change
const change = ()=>{
    str.value="hhhhhh"
}

onBeforeUpdate(() => {
    console.log("更新之前",div.value?.innerText);
    
});

onUpdated(() => {
    console.log("更新之后",div.value?.innerText);
    
});
onBeforeUnmount(() => {

});
onUnmounted(() => {

});

// onRenderTracked()注册一个调试钩子，当组件渲染过程中追踪到响应式依赖时调用。
// 这个钩子仅在开发模式下可用，且在服务器端渲染期间不会被调用。


// onRenderTriggered()
// 注册一个调试钩子，当响应式依赖的变更触发了组件渲染时调用。
// 这个钩子仅在开发模式下可用，且在服务器端渲染期间不会被调用。

</script>
<style scoped></style>
