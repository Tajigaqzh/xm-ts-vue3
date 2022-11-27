<template>
  <div v-drag class="box">
    <div class="header"></div>
    <div>内容</div>
  </div>
</template>
<script setup lang="ts">
import { Directive, DirectiveBinding } from "vue";
// 没有返回值，Directive泛型传入void
const VDrag: Directive<any, void> = (el: HTMLElement, binding: DirectiveBinding) => {
  let dragElement: HTMLDivElement = el.firstElementChild as HTMLDivElement;
  console.log(dragElement);
  //   console.log(el);
  const mouseDown = (e: MouseEvent) => {
    let baseX = e.clientX - el.offsetLeft;
    let baseY = e.clientY - el.offsetTop;
    const move = (e: MouseEvent) => {
      console.log(e);
      el.style.left = e.clientX - baseX + "px";
      el.style.top = e.clientY - baseY + "px";
    };
    document.addEventListener("mousemove", move);
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", move);
    });
  };
  dragElement.addEventListener("mousedown", mouseDown);
};
</script>
<style scoped lang="less">
.box {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  border: 3px solid black;
  line-height: 150px;
  text-align: center;
  .header {
    height: 20px;
    background: black;
  }
}
</style>
