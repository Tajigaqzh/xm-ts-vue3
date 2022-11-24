<template>
  <form>
    <input type="text" v-model="form.name" />
    <br />
    <input type="text" v-model="form.age" />
    <br />
    <button @click.prevent="submit">提交</button>


  </form>

  <div>
  <ul>
  <li v-for="item in list.arr">{{item}}</li>
  </ul>
  <button @click.prevent="add">添加</button>
  </div>

  {{objshallow.cla.claName}}
</template>
<script setup lang="ts">
// ref支持所有類型，reactive支持引用類型 Array，Object，Map，Set
// ref取值和賦值都需要.value，reactive不需要
// reactive proxy不能直接賦值，否則會失去響應式
// 解決方案
// 1.數組使用push
// 2.添加一個對象把數組作爲一個屬性

let form = reactive({
  name: "zs",
  age: 23,
});
const submit = ()=>{
    console.log(form)
}

let list = reactive<{arr:string[]}>({
    arr:[]
})
const add = ()=>{
    setTimeout(()=>{
        let res = ['end','start','page']
        list.arr.push(...res)
        console.log(list);
        
    },200)
}

// readonly把一個reactive變成只讀的
const obj = reactive({name:"zd"})

const readolyObj = readonly(obj)

// shallowReactive，淺層reactive。修改時，修改深層會失去響應式

const objshallow = shallowReactive({name:"zd",cla:{claName:"zzzzz",score:0}})
</script>
<style scoped>
</style>
