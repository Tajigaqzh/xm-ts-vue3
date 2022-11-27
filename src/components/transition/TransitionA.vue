<template>
  <div class="container">
    <div class="box"></div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped lang="less">
.container {
    display: flex;
    flex-direction: column;
  .box {
    width: 100px;
    height: 100px;
    background-color: brown;
    align-self: center;
  }
}
</style>
