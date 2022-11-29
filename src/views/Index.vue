r<template>
  <div class="links">
    <router-link to="/directive">指令</router-link>
    <router-link to="/virtual">virtual</router-link>
    <router-link to="/ref">ref</router-link>
    <router-link to="/reactive">reactive</router-link>
    <router-link to="/computed">computed</router-link>
    <router-link to="/mywatch">watch--</router-link>
    <router-link to="/watchEffect">watchEffect</router-link>
    <router-link to="/lifetime">组件生命周期</router-link>
    <router-link to="/less">less and scoped</router-link>
    <router-link to="/layout">layout</router-link>

    <router-link to="/async">异步组件</router-link>
    <router-link to="/passparam">父子组件传参与瀑布流</router-link>
    <router-link to="/card">全局组件、局部组件</router-link>
    <router-link to="/tree">组件的递归嵌套(递归组件处理事件时会有冒泡，可用stop阻止)</router-link>
    <router-link to="/dynamic">动态切换组件</router-link>
    <router-link to="/slot">插槽</router-link>
    <router-link to="/dialog">teleport传送组件</router-link>
    <router-link to="/cache">keep-alive缓存组件</router-link>
    <router-link to="/transition">过渡动画</router-link>
    <router-link to="/provider">provide和inject</router-link>
    <router-link to="/emit">emit和mitt</router-link>
    <router-link to="/tsx">tsx</router-link>
    <router-link to="/componentmodel">component与v-model</router-link>
    <router-link to="/customerdirective">自定义指令</router-link>
    <router-link to="/directivesnip">自定义指令（简写）</router-link>
    <router-link to="/dragdirective">自定义拖拽指令</router-link>
    <router-link to="/hooks">自定义hooks</router-link>
    <router-link to="/globalfunva">全局函数全局变量</router-link>
    <router-link to="/vueplugin">vuePlugin</router-link>
    <router-link to="/element">elementUI的css样式问题、slot插槽样式选择器</router-link>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.links{
    display: flex;
    width: 300px;
    margin:0 auto;
    flex-direction: column;
    font-size: 20px;
    align-items: flex-start;
}
</style>
