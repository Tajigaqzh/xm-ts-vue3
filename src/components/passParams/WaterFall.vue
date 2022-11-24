<template>
  <div class="wraps">
    <div
      :style="{
        height: item.height + 'px',
        background: item.background,
        left: item.left + 'px',
        top: item.top+'px',
      }"
      v-for="item in waterList"
      class="item"
    ></div>
  </div>
</template>
<script setup lang="ts">
// 有bug，没完成
const props = defineProps<{ list: any[] }>();
const waterList = reactive<any[]>([]);
const heightList: number[] = [];
const init = () => {
  const width = 130;
  const x = document.body.clientWidth;
  const column = Math.floor(x / width);
  //   console.log(column);
  for (let i = 0; i < props.list.length; i++) {
    if (i < column) {
      props.list[i].left = i * width;
      props.list[i].top = 20;
      //   console.log(props.list[i].left);
      waterList.push(props.list[i]);
      heightList.push(props.list[i].height)
    }else{
        let current = heightList[0]
        let index = 0;
        heightList.forEach((h,i)=>{
            if (current>h) {
                current =h;
                index=i
            }
        })
        console.log(current);
        props.list[i].top = current+20
        props.list[i].left = index*width
        heightList[index] = heightList[index]+props.list[i].height+20
        waterList.push()
    }
  }
};

onMounted(() => {
  init();
});
</script>
<style scoped lang="less">
.wraps {
  position: relative;
  .item {
    position: absolute;
    width: 120px;
  }
}
</style>
