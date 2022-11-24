<template>
  <div>这里是子组件</div>
  值：{{ name }}
  {{arr}}
  <button @click="send">给父组件传值</button>
  <br />
   
</template>
<script setup lang="ts">
// js写法
// const props = defineProps({
//     name:{
//         type:String,
//         default:"aaa"
//     }
// })

// ts写法
const props = defineProps<{
  name: string;
  arr: Array<number>;
}>();

// 定义默认值withDefaults
// export interface Props {
//   msg?: string,
//   labels?: string[]
// }
// const props = withDefaults(defineProps<Props>(), {
//   msg: 'hello',
//   labels: () => ['one', 'two']
// })

const emit = defineEmits(['s-to-p'])
const send = ()=>{
    emit('s-to-p','来自子组件的信息')
}

// 子组件暴露内容，elementUI表单组件验证，reset等实现的原理
defineExpose({
    name1:"子组件暴露给父组件的内容",
    open:()=>console.log('子组件暴露给父组件的方法111')
})

const son = getCurrentInstance()



</script>
<style scoped lang="less">
div {
  color: red;
}
</style>
