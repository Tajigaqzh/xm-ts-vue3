<template>
  <input type="text" v-model="value" />
  <Da v-leave="{background:value}"/>
</template>

<script setup lang="ts">
import { Directive, DirectiveBinding } from "vue";
import Da from "./Da.vue";
type Binding = {
  background: string;
};
const value = ref<string>("green");

/* 对于自定义指令来说，一个很常见的情况是仅仅需要在 mounted 和 updated 上实现相同的行为，
除此之外并不需要其他钩子。这种情况下我们可以直接用一个函数来定义指令，如下所示： */
const vLeave: Directive = (el: HTMLElement, binding: DirectiveBinding<Binding>) => {
    el.style.background = binding.value.background
};
</script>
<style scoped lang="less"></style>
