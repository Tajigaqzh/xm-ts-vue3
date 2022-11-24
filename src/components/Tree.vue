<template>
  <div @click.stop="clickTap(item, $event)" v-for="item in data" class="tree">
    <!-- ！！！递归组件处理事件时会有冒泡！！！ -->
    <input v-model="item.checked" type="checkbox" /> <span>{{ item.name }}</span>
    <Tree v-if="item?.children?.length" :data="item?.children" />
  </div>
</template>
<script setup lang="ts">
import { TreeType } from "../datatype/index";
defineProps<{ data?: TreeType[] }>();
const clickTap = (item: TreeType, event: Event) => {
  console.log(item);
  console.log(event.target);
};
</script>
<style scoped lang="less">
.tree {
  margin-left: 10px;
}
</style>
