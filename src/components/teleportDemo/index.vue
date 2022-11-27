<template>
  <!-- 通过to 属性 插入指定元素位置 to="body" 便可以将Teleport 内容传送到指定位置
  也可以自定义传送位置 支持 class id等 选择器
   -->

   <!-- 
        <teleport :disabled="true" to='body'>
      <A></A>
    </teleport>
    使用disabled 设置为 true则 to属性不生效  false 则生效 -->
    <div class="bg">
      <Teleport to="body">
    <Dialog></Dialog>
  </Teleport>
    </div>
  
</template>
<script setup lang="ts">
import Dialog from "./Dialog.vue";
</script>
<style scoped lang="less">
.bg{
background-color: aqua;
height: 100vh;
}
</style>
