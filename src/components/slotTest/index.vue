<template>
  <MySlot>
    <!-- <template v-slot>我被插到了中间</template> -->

    <template v-slot="{ data }"> {{ data }} </template>
    <!-- 使用匿名插槽 -->
    <template v-slot:header> 我被插到了头部 </template>
    <!-- 使用具名插槽（简写） -->
    <template #footer>我被插到了底部</template>

    <!-- 动态插槽 -->
    <template #[name]>footer</template>
  </MySlot>
</template>
<script setup lang="ts">
import MySlot from "./MySlot.vue";
let name = ref('footer')
</script>
<style scoped lang="less"></style>
