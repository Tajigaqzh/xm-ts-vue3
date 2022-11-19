<template>
  directive
  <br>
  {{ message }}
<br>
  {{ num ? "a" : "b" }}
<!-- // 如何加样式
// 1.绑定对象
2.绑定数组，或样式的名
3.还可以使用条件 -->
  <div :style="style">海萍</div>
  <div :class="'a'">hello</div>
  <div :class="['a','b']">你好</div>
  <div :class="[flag ? 'a':'b']">世界</div>
  <div :class="[clas]">2022</div>
</template>
<script setup lang="ts">
const message: string = "hello";
const num:number = 0


type Style = {
    color:string,
    height:string,
}
const style:Style = {
    color:"red",
    height:"30px"
}

const flag:boolean = false


type Cls={
    a:boolean,
    b:boolean
}
const clas:Cls = {a:true,b:true}
</script>
<style scoped>
.a{
    color: aqua;
}
.b{
    font-size: 30px;
}
</style>
