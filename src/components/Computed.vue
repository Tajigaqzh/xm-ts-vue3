<template>
  <div>
    <input v-model="firstName" type="text" />
    <input v-model="lastName" type="text" />
    <div>{{ name }}</div>
    <div>{{ name1 }}</div>
  </div>

  <table>
    <tr>
      <th>商品名稱</th>
      <th>數量</th>
      <th>單價</th>
      <th>金額</th>
      <th>操作</th>
    </tr>
    <tr :key="index" v-for="(item, index) in data">
      <th>{{ item.name }}</th>
      <th>{{ item.num }}</th>
      <th>{{ item.price }}</th>
      <th>{{ item.num * item.price }}</th>
      <th><button style="color: red">刪除</button></th>
    </tr>
  </table>
</template>
<script setup lang="ts">
import { computed, ref, reactive } from "vue";
let firstName = ref("张");
let lastName = ref("三");
// computed属性为只读
const name = computed(() => {
  return firstName.value + lastName.value;
});

const name1 = computed({
  get() {
    return firstName.value + lastName.value;
  },
  set() {
    firstName.value + lastName.value;
  },
});

type Shop = {
  name: string;
  num: number;
  price: number;
};

const data = reactive<Shop[]>([
  { name: "apple", num: 10, price: 2.9 },
  { name: "orange", num: 20, price: 3.46 },
]);
</script>
<style scoped></style>
