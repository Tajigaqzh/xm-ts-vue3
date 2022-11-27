<template>
  <h1>tsx用法</h1>
  <hr />
  <h3>1.function方式</h3>
  <tsxdemo />
  <hr />
  <h3>2.defineComponent方式</h3>
  <tsxdemo2 />

  <hr />
  <h3>3.setup函数方式</h3>
  <tsxsetup />

  <hr />
  <h3>4.tsx指令写法</h3>
  <setupdemo aaa="aaaaaaaaaa" @on-click="aaa" />
  <propstest title="aaaaa" />
</template>
<script setup lang="ts">
import tsxdemo from "./tsxdemo";
import tsxdemo2 from "./tsxdemo2";
import tsxsetup from "./tsxsetup";
import setupdemo from "./setupdemo";
import propstest from "./propstset";
const aaa = () => {
  console.log("父组件收到了信息");
};
</script>
<style scoped lang="less"></style>
