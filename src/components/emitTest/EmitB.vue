<template>
    {{flag}}
    <button @click="mittEmit">派发mitt</button>
</template>

<script setup lang="ts">
import type { Ref } from "vue";
type Props = {
  flag: boolean;
};
const props = defineProps<Props>();
  const instance = getCurrentInstance()
const mittEmit =()=>{
  instance?.proxy?.$bus.emit('o-xiao','mitaaat')
}
// mitt的emit是派发on是监听，off是取消，￥bus.all.clear()删除所有



</script>
<style scoped lang="less"></style>
