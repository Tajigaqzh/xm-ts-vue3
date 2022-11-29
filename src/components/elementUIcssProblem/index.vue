<template>
  <hr />
  <br />
  直接在el的组件上加样式并没有生效，其实它是加在了最外层次，要找到
  它的内部的class，前缀加上/deep/(vue2写法) /deep/选择器{} 新写法:deep(选择器){}

  <br />
  <el-input class="myinput" v-model="input" placeholder="please input" />
  <br />
  <br />
  <csstestVue>
    <div class="a">aaaaa</div>
    <div class="globaldiv">全局选择器1</div>
  </csstestVue>
  <br />
  <br />
  <hr />
</template>
<script setup lang="ts">
import csstestVue from "./csstest.vue";
const input = ref("");
</script>
<style lang="less" scoped>
.myinput {
  background-color: red;
  /*  /deep/.el-input__inner{
    background-color: red;
  } */
  :deep(.el-input__inner) {
    background-color: aqua;
  }
}
</style>
