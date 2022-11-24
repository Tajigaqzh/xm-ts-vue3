<template>
  <div class="layout">
    <div class="menu">
      <Menu />
    </div>
    <div class="content">
      <div class="header">
        <Header />
      </div>
      <div class="main">
        <Main />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Header from "./Header/index.vue";
import Main from "./Main/index.vue";
import Menu from "./Menu/index.vue";
</script>
<style scoped lang="less">
.layout {
  display: flex;
  height: 100%;
  overflow: hidden;

  .menu {
    width: 20%;
    border-right: 1px solid gray;

  }
  .content {
    color: royalblue;
    display: flex;
    flex-direction: column;
    .header{
      height: 60px;
      border-bottom: 1px solid #ccc;
      width: 300vh;
    }
    .main{
      height: 40px;
    }
  }
}
</style>
