<template>
 <EmitA @on-click="getFlag"></EmitA>
 <EmitB :flag="flag"></EmitB>
</template>
<script setup lang="ts">
import EmitA from './EmitA.vue';
import EmitB from './EmitB.vue'
let flag=ref(false)

const getFlag = (params:boolean)=>{
  flag.value = params 
}
</script>
<style scoped lang="less"></style>
