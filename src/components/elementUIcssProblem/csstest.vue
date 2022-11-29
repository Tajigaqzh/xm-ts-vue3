<template>
    <div>我是匿名插槽</div>
    <slot></slot>
    <div class="globaldiv">全局选择器</div>

    <div class="vari">1111112</div>
    <input type="text" v-model="fontColor">
</template>
<script setup lang='ts'>
    const fontColor = ref<string>("blue")
</script>
<style scoped lang='less'>
:slotted(.a){
    color: red;
}
// 直接写样式不会生效
// 用：slot()包裹起来就会生效

// 全局选择器
:global(.globaldiv){
    color:pink
}
// 动态样式
.vari{
    color: v-bind(fontColor);
}

// module写法
// style标签去掉scoped换成module，引用时:class="[$style.????]",还可以自定义
</style>