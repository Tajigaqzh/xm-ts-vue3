<template>
  <div style="display: flex">
    <div
      @click="switchCom(item, index)"
      :class="[active == index ? 'active' : '']"
      v-for="(item, index) in data"
      class="tab"
    >
      <div>{{ item.name }}</div>
    </div>
  </div>
  <component :is="comId"></component>
</template>
<script setup lang="ts">
import AVue from "./A.vue";
import BVue from "./B.vue";
import CVue from "./C.vue";
// markRaw，shallowRef动态切换的组件没必要Proxy劫持，使用这两个api取消劫持
// 还有一种字符串风格，当使用export default定义组件时，components注册子组件，不用使用markRaw，字符串就可以

const comId = shallowRef(AVue);
const active = ref(0);
const data = reactive([
  { name: "A组件", component: markRaw(AVue) },
  { name: "B组件", component: markRaw(BVue) },
  { name: "C组件", component: markRaw(CVue) },
]);

const switchCom = (item: any, index: number) => {
  comId.value = item.component;
  active.value = index;
}

</script>
<style scoped lang="less">
.tab {
  border: 1px solid #ccc;
  padding: 5px 10px;
  margin: 5px;
  cursor: pointer;
}
.active {
  background-color: aqua;
}
</style>
