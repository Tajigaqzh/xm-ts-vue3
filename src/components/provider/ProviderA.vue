<template>
  <div class="son">
    <h2>providerA组件父亲级别</h2>
    <div class="box">{{color}}</div>
    <ProviderBVue />
  </div>
</template>
<script setup lang="ts">
import type { Ref } from "vue";
import ProviderBVue from "./ProviderB.vue";
const color = inject<Ref<string>>("color")

</script>
<style scoped lang="less">
.son {
  margin-top: 5px;
  border: 5px solid blue;
  .box {
    height: 100px;
    width: 100px;
    border: 1px solid #ccc;
    background: v-bind(color);
  }
}
</style>
