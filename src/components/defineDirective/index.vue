<template>
  <!-- const myDirective = {
  // 在绑定元素的 attribute 前
  // 或事件监听器应用前调用
  created(el, binding, vnode, prevVnode) {
    // 下面会介绍各个参数的细节
  },
  // 在元素被插入到 DOM 前调用
  beforeMount(el, binding, vnode, prevVnode) {},
  // 在绑定元素的父组件
  // 及他自己的所有子节点都挂载完成后调用
  mounted(el, binding, vnode, prevVnode) {},
  // 绑定元素的父组件更新前调用
  beforeUpdate(el, binding, vnode, prevVnode) {},
  // 在绑定元素的父组件
  // 及他自己的所有子节点都更新后调用
  updated(el, binding, vnode, prevVnode) {},
  // 绑定元素的父组件卸载前调用
  beforeUnmount(el, binding, vnode, prevVnode) {},
  // 绑定元素的父组件卸载后调用
  unmounted(el, binding, vnode, prevVnode) {}
}
 -->

  <!-- el：指令绑定到的元素。这可以用于直接操作 DOM。

binding：一个对象，包含以下属性。

value：传递给指令的值。例如在 v-my-directive="1 + 1" 中，值是 2。
oldValue：之前的值，仅在 beforeUpdate 和 updated 中可用。无论值是否更改，它都可用。
arg：传递给指令的参数 (如果有的话)。例如在 v-my-directive:foo 中，参数是 "foo"。
modifiers：一个包含修饰符的对象 (如果有的话)。例如在 v-my-directive.foo.bar 中，修饰符对象是 { foo: true, bar: true }。
instance：使用该指令的组件实例。
dir：指令的定义对象。
vnode：代表绑定元素的底层 VNode。

prevNode：之前的渲染中代表指令所绑定元素的 VNode。仅在 beforeUpdate 和 updated 钩子中可用。 -->

  <Da v-move:aaa.b="{ background: 'red', ttt: 'aa' }" />
  <!-- 还可以传递参数和修饰符 -->
  {{ flag }}
  <button @click="changeFlag">修改页面</button>
</template>

<script setup lang="ts">
import Da from "./Da.vue";
import { Directive, DirectiveBinding } from "vue";
import type { VNode } from "vue";
let flag = ref<boolean>(true);

type Dir = {
  background: string;
  ttt: string;
};
const changeFlag = () => {
  flag.value = !flag.value;
};
const vMove: Directive = {
  created: () => {
    console.log("初始化====>");
  },
  beforeMount(...args: Array<any>) {
    // 在元素上做些操作
    console.log("mount之前=======>");
  },
  //   mounted(...args: Array<any>) {
  mounted(el: HTMLElement, dir: DirectiveBinding<Dir>, vnode: VNode, prevVnode: any) {
    console.log(dir.value.background);
    el.style.background = dir.value.background;
    // console.log(args);
    /* 
    第一个是元素，
    第二个是参数和修饰符等DirectiveBinding可以传入type提示，
    第三个是当前组件的vnode，
    第四个是上一个虚拟dom prevNode：之前的渲染中代表指令所绑定元素的 VNode。仅在 beforeUpdate 和 updated 钩子中可用。*/
    console.log("=====>mounted");
  },
  beforeUpdate() {
    console.log("更新之前");
  },
  updated() {
    console.log("更新结束");
  },
  beforeUnmount() {
    console.log("======>卸载之前");
  },
  unmounted() {
    console.log("====>卸载之后");
  },
};
</script>
<style scoped lang="less"></style>
