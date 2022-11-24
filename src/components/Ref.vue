<template>
  <div>{{ man1.name }}</div>
  <div>{{ man2 }}</div>
  <div>{{ obj }}</div>
  <div ref="dom">refdo</div>

  <button @click="change">修改</button>
  <button @click="getDom">獲取dom内容</button>
</template>
<script setup lang="ts">

import type { Ref } from "vue";

// isref用来判断是不是一个ref对象,源码中用的比较多
// toRaw把一个响应式对象变成不是响应式的
type Man = {
  name: string;
};
const man1 = ref<Man>({ name: "zs" });
// 可以不写类型也可以ref<type>或者const man:Ref<type>
// 如果类型复杂推荐最后一种
// ref返回的es6的class类要使用.value修改

// shallowRef浅层次响应
//


const man2: Ref<Man> = shallowRef({ name: "lss" });
const change = () => {
  man2.value.name = "ssss";
  // 多层次修改（2层），值會被修改，但是数据不具有响应式
};
// shallowref中不要使用ref，因为ref会调用公用方法triggerRef,shallowRef也会被影响

// 自定義ref可以实现防抖
function MyRef<T>(value: T) {
  return customRef((track, trigger) => {
    return {
      get() {
        track();
        return value;
      },
      set(newValue) {
        value = newValue;
        trigger();
      },
    };
  });
}

const obj = MyRef<string>("xxss");
const dom = ref<HTMLDivElement>();

// ref還可以獲取dom元素,setup中無法讀到
const getDom = () => {
  console.log(dom.value?.innerText);
};
</script>
<style scoped></style>
