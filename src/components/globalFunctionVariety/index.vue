<template>
  <div></div>
  <a
    target="_blank"
    href="https://cn.vuejs.org/api/application.html#app-config-globalproperties"
    >点击跳转到vueAPI页面</a
  >
  <br />
  <br />
  <br />
  见main.ts&nbsp;app.config.globalProperties.$bus = Mit;

  <br />
  <br />
  <br />
  <br />

  {{ $filters.format("aaaaaa") }}
  <br />
  <br />
  <br />
  {{ $name11 }}
</template>
<script setup lang="ts">
const instance = getCurrentInstance();
console.log(instance?.proxy.$filters.format("bbbbbb"));
// 爆红是因为ts没有检测到类型
// 需要给vue扩充我写在了
</script>
<style scoped lang="less"></style>
