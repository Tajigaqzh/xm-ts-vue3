<template>
  <div>
    case1:<input v-model="message" type="text" />
    <br />
    case2:<input v-model="message2" type="text" />
    <br />
    <button @click="stopWatch">停止监听</button>
  </div>
</template>
<script setup lang="ts">
let message = ref<string>("aaa");
let message2 = ref<string>("bbb");
const stop = watchEffect((onA) => {
  console.log("监听message1", message.value),
  onA(() => {
    console.log("before");
  });
});
// 相当于配置了immediate，开始时立即执行一次
// 可以传递一个副作用函数，比如可以应用于防抖
// watchEffect返回停止监听函数
const stopWatch = () => stop();



watchEffect(() => {}, {
  flush: 'post',
//   监听时机 "pre" | "sync" | "post"
  onTrack(e) {
    debugger
  },
  onTrigger(e) {
    debugger
    // 可以用来写代码时调试
    // 侦听器的 onTrack 和 onTrigger 选项仅会在开发模式下工作。
  }
})


// watchPostEffect
// watchSyncEffect

</script>
<style scoped></style>
