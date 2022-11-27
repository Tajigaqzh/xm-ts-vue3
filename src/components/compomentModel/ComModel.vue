<template>
  <div v-if="modelValue" class="model">
    <div class="famodel">
      <p>来自父组件的v-model：</p>
      {{ modelValue }}
    </div>
    <div class="close">
      <button @click="close">关闭</button>
    </div>
    <h3>我是子组件</h3>

    <div>内容：<input @change="change" :value="textValue" type="text" /></div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  modelValue: boolean;
  textValue: string;
  textValueModifiers?:{
    isBt:boolean
  }
}>();
if (props.textValueModifiers?.isBt) {
    console.log("添加了一个自定义修饰符");
    
    
}
const emit = defineEmits(["update:modelValue","update:textValue"]);
const close = () => {
  emit("update:modelValue", false);
};
const change = (e: Event) => {
  const target = e.target as HTMLInputElement;
  emit("update:textValue",target.value)
};
</script>
<style scoped lang="less">
.model {
  width: 500px;
  border: 5px solid red;
  padding: 10px;
  display: flex;
  flex-direction: column;
  .famodel {
    color: red;
    p {
      color: black;
    }
  }
  .close {
    display: flex;
    justify-content: flex-end;
  }
  h3 {
    margin: 10px;
  }
}
</style>
