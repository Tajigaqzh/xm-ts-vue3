<template>
  <div class="grandfather">
    <h1>爷爷组件</h1>
    <label>
      <input v-model="colorVal" value="red" name="color" type="radio" />
      红色
    </label>

    <label>
      <input v-model="colorVal" value="pink" name="color" type="radio" />
      粉色
    </label>

    <label>
      <input v-model="colorVal" value="yellow" name="color" type="radio" />
      黄色
    </label>
    <div class="box"></div>
    <ProviderAVue />
  </div>
</template>
<script setup lang="ts">
import ProviderAVue from "./ProviderA.vue";
const colorVal = ref<string>("red");
provide("color",colorVal)

</script>
<style scoped lang="less">
.grandfather {
  border: 10px solid red;
  padding: 20px;
}
.box {
  width: 150px;
  height: 150px;
  background-color: v-bind(colorVal)
}
</style>
