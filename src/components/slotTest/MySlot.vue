<template>
  <div class="header">
    <slot name="header"></slot>
    <!-- 具名插槽1 -->
  </div>
  <main class="main">
      <div v-for="item in data">
        <slot :data="item"></slot>
      </div>
  
    <!-- 匿名插槽 -->
  </main>
  <footer class="footer">
    <slot name="footer"></slot>
    <!-- 具名插槽2 -->
  </footer>
</template>
<script setup lang="ts">
interface names {
  name: string;
  age: number;
}
const data = reactive<names[]>([
  {
    name: "sz",
    age: 19,
  },
  {
    name: "ze",
    age: 20,
  },
  {
    name: "ww",
    age: 21,
  },
  {
    name: "ls",
    age: 22,
  },
]);
</script>
<style scoped lang="less">
.header {
  height: 200px;
  background-color: black;
  color: #fff;
}
.main {
  height: 200px;
  background-color: red;
  color: #fff;
}
.footer {
  height: 200px;
  background-color: yellow;
  color: rgb(0, 0, 0);
}
</style>
