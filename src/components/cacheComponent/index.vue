<template>
  <div class="keepalive">
    <el-button style="width: 100px" type="primary" @click="flag = !flag" size="small"
      >切换组件</el-button
    >

    <keep-alive>
    
      <cacheAVue v-if="flag" />
      <cacheBVue v-else="flag" />
    </keep-alive>
    <!-- keepalive属性：
      include缓存的组件的名称
      exclude不缓存的组件
      max指定缓存组件数量
       -->
  </div>
</template>
<script setup lang="ts">
import cacheAVue from "./CacheA.vue";
import cacheBVue from "./CacheB.vue";

const flag = ref<boolean>(true);
</script>
<style scoped lang="less">
.keepalive {
  display: flex;
  flex-direction: column;
}
</style>
