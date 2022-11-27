<template>
  <button @click="insert">insert at random index</button>
  <button @click="shuffle">shuffle</button>

  <TransitionGroup tag="ul" name="fade" class="container">
    <div v-for="item in items" class="item" :key="item">
      {{ item }}
      <button @click="remove(item)">x</button>
    </div>
  </TransitionGroup>
</template>
<script setup lang="ts">

const items = ref<Array<number>>([1, 2, 3, 4, 5]);
    
let id = items.value.length + 1;

function insert() {
  const i = Math.round(Math.random() * items.value.length);
  items.value.splice(i, 0, id++);
}

/**
 * //返回得到max--min之间的数据，并可以包括max和min
 */
function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min); //Math.random()返回0-1之间
}

function shuffleArr(arr: Array<number>) {
  let _arr = arr.slice();
  for (let i = 0; i < _arr.length; i++) {
    let j = getRandomInt(0, i); //随机数
    let t = _arr[i]; //数组值
    _arr[i] = _arr[j];
    _arr[j] = t;
  }
  return _arr;
}

function shuffle() {
//   items.value = shuffleArr();
}

function remove(item: number) {
  const i = items.value.indexOf(item);
  if (i > -1) {
    items.value.splice(i, 1);
  }
}
</script>

<style>
.container {
  position: relative;
  padding: 0;
}

.item {
  width: 10%;
  height: 30px;
  background-color: #f3f3f3;
  border: 1px solid #666;
  box-sizing: border-box;
}

/* 1. 声明过渡效果 */
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. 声明进入和离开的状态 */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}

/* 3. 确保离开的项目被移除出了布局流
      以便正确地计算移动时的动画效果。 */
.fade-leave-active {
  position: absolute;
}
</style>
