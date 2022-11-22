<template>
  <div>
    case1:<input v-model="message" type="text" />
    <br />
    case2:<input v-model="message2" type="text" />
    <br />
    case3:<input v-model="message3.foo.a.name" type="text" />
  </div>
</template>

<script lang="ts" setup>
// watch侦听，只有响应式对象才能被侦听
import { ref, reactive, Ref, watch } from "vue";

let message: Ref<string> = ref<string>("hello");
let message2 = ref("aaaa");

let message3 = ref({
  foo: {
    a: {
      name: "张三",
      age:18
    },
  },
});

let message4 = reactive({
  foo: {
    a: {
      name: "张三",
      age:18
    },
  },
});
// 侦听单个数据源
/* watch(message, (newValue, oldValue) => {
  console.log(newValue, oldValue);
}); */

// 侦听多个数据源,需要传入数组，返回也是数组，顺序和传入参数顺序相同
watch([message, message2], (newValue, oldValue) => {
  console.log(newValue, oldValue);
});

// 侦听深层次,需要传入配置deep为true，新值和旧值一样，reactive默认开启deep
// immediate开启时监听一次
// flush:"pre"|"sync"|"post"
// 组件更新之前，同步，更新之后
watch(
  message3,
  (n, o) => {
    console.log(n, o);
  },
  { deep: true,immediate:true}
);
// 还可以单独监听一个属性，比如可以单独监听message4.foo.a.age
// 传递时传入一个函数
watch(
    ()=>message4.foo.a.age,
  (n, o) => {
    console.log(n, o);
  }
);
</script>

<style scoped></style>
