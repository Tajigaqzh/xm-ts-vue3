<template>
  <div class="content">
    <ElButton @click="flag = !flag" style="width: 10%" type="primary">切换动画</ElButton>
    <Transition name="fade">
      <div v-if="flag" class="box"></div>
    </Transition>

    <!-- trasition动画声明zouqi
    
    @before-enter
@before-leave
@enter
@leave
@appear
@after-enter
@after-leave
@after-appear
@enter-cancelled
@leave-cancelled (v-show only)
@appear-cancelled
 -->
  </div>

<TransGroupTestVue/>

</template>
<script setup lang="ts">
import TransitionA from "./TransitionA.vue";
import TransGroupTestVue from "./TransGroupTest.vue";
const flag = ref<boolean>(true);
const items = ref([1,2,3,4,5,6])
</script>
<style scoped lang="less">
.content {
  display: flex;
  justify-content: center;
  flex-direction: column;
  .box {
    width: 100px;
    height: 100px;
    background-color: brown;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}



.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

</style>
