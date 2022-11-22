<template>
  <div class="links">
    <router-link to="/directive">指令</router-link>
    <router-link to="/virtual">virtual</router-link>
    <router-link to="/ref">ref</router-link>
    <router-link to="/reactive">reactive</router-link>
    <router-link to="/computed">computed</router-link>
    <router-link to="/watch">watch</router-link>
    <router-link to="/watchEffect">watchEffect</router-link>
    <router-link to="/lifeTime">component lifeTime</router-link>
    <router-link to="/less">less and scoped</router-link>
    <router-link to="/layout">layout</router-link>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.links{
    display: flex;
    flex-direction: column;
    font-size: 12px;
    
}
</style>
