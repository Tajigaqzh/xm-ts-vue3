<template>
  <div>
    <button @click="emitB">派发一个事件</button>
  </div>
</template>
<script setup lang="ts">
let flag = false;
const emit = defineEmits(["on-click"]);
const emitB = () => {
  flag = !flag;
  emit("on-click", flag);
};

const instance = getCurrentInstance()
instance?.proxy?.$bus.on('o-xiao',(str:string)=>{
  console.log("A组件受到了",str);
  
})

</script>
<style scoped lang="less"></style>
