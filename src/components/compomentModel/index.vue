<template>
  <div>
    <b>v-model在组件上的应用 其实是一个语法糖 通过props 和 emit组合而成的 </b>
    <hr />
    1.默认值的改变
    <p>
      prop：value -> modelValue； <br />事件：input -> update:modelValue；<br />
      v-bind 的 .sync 修饰符和组件的 model 选项已移除<br />
      新增 支持多个v-model <br />新增 支持自定义 修饰符 Modifiers
    </p>
  </div>
  <div>
    <h1>我是父组件</h1>
    <div class="isshow">isShow:{{isShow}}</div>
    <div class="text">{{text}}</div>
    <div><button @click="isShow = !isShow">{{isShow?'点击关闭':'点击打开'}}</button></div>
    <hr />
    <ComModelVue v-model:textValue.isBt="text" v-model="isShow"/>
    <!-- 组件model，多model绑定，自定义修饰符 -->
  </div>
</template>
<script setup lang="ts">
import ComModelVue from "./ComModel.vue";
const isShow = ref<boolean>(true)
const text = ref<string>("张三")

</script>
<style scoped lang="less">
.isshow{
    margin:10px;
}
.text{
    margin:5px;
}
</style>
