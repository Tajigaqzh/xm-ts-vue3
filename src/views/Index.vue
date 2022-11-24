<template>
  <div class="links">
    <router-link to="/directive">指令</router-link>
    <router-link to="/virtual">virtual</router-link>
    <router-link to="/ref">ref</router-link>
    <router-link to="/reactive">reactive</router-link>
    <router-link to="/computed">computed</router-link>
    <router-link to="/watch">watch</router-link>
    <router-link to="/watchEffect">watchEffect</router-link>
    <router-link to="/lifeTime">组件生命周期</router-link>
    <router-link to="/less">less and scoped</router-link>
    <router-link to="/layout">layout</router-link>
    <router-link to="/passParam">父子组件传参与瀑布流</router-link>
    <router-link to="/card">全局组件、局部组件</router-link>
    <router-link to="/tree">组件的递归嵌套(递归组件处理事件时会有冒泡，可用stop阻止)</router-link>
    <router-link to="/dynamic">动态切换组件</router-link>
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
