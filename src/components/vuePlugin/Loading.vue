<template>
  <div v-if="isShow" class="loading">Loading...</div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const isShow = ref<boolean>(false);
const show = () => {
  isShow.value = true;
};
const hide = () => (isShow.value = false);

defineExpose({ show, hide, isShow });
// 抛出变量以及函数方便调用
</script>
<style scoped lang="less">
.loading {
  background-color: blue;
  opacity: 0.8;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: white;

  &-content {
    font-size: 30px;
    color: #fff;
  }
}
</style>
