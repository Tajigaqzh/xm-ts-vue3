<template>
  <img id="logoImg" width="600" height="400" src="../../assets/girl.png" alt="vue" />
</template>
<script setup lang="ts">
import useBase64 from "../../hooks/index";
useBase64({ el: "#logoImg" }).then((res) => {
  console.log(res.baseUrl);
});
</script>
<style scoped lang="less"></style>
