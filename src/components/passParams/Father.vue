<template>
  <div>这里是父组件</div>
  <hr />
  <Son ref="son1" :name="name" :arr="list1" @s-to-p="getName" />
  <hr />

  <h1 class="pbl">瀑布流案例</h1>
  <water-fall :list="list"></water-fall>
  <!-- 瀑布流案例 -->
</template>
<script setup lang="ts">
import Son from "./Son.vue";
import WaterFall from "./WaterFall.vue";
let name = "小满";
const list1: Array<number> = [1, 2, 3, 4, 5];

const getName = (name: string) => {
  console.log("我是父组件：", name);
};
const p = getCurrentInstance();

const son1 = ref<InstanceType<typeof Son>>();
onMounted(() => {
  // 获取子组件暴露的内容，需要在子组件挂载后才能获取到，不然为undefined

  console.log(son1.value?.name1);
  son1.value?.open();
});

// son1.value?.name

// 瀑布流部分
const list = [
  { height: 300, background: "red" },
  { height: 400, background: "pink" },
  { height: 260, background: "blue" },
  { height: 180, background: "black" },
  { height: 350, background: "purple" },
  { height: 80, background: "aqua" },
  { height: 220, background: "peru" },
  { height: 280, background: "palevioletred" },
];
</script>
<style scoped lang="less">
.pbl {
  text-align: center;
  color: aqua;
}
</style>
