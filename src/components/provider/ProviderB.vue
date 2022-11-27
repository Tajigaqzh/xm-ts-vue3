<template>
  <div class="grandson">
    <h3>providerB组件孙子组件</h3>
    <div class="box">{{color}}</div>
    <button @click="change">修改provide的值为yellow</button>
  </div>
</template>
<script setup lang="ts">
import type { Ref } from "vue";
const color = inject<Ref<string>>("color",ref('red'))
const change = ()=>{
    color.value = 'yellow';
    // 赋值表达式左侧不能是可选属性解决办法:1，非空判断  
    // 2，接收时设置一个默认值
    // 如果不想被子组件修改可以在provide时设置readonly
    // color!.value='yellow';
}
</script>
<style scoped lang="less">
.grandson {
  border: 2px black solid;
  margin: 50px;
  .box {
    height: 50px;
    width: 50px;
    border: 1px solid rgb(160, 44, 44);
    background-color: v-bind(color);
  }
}
</style>
