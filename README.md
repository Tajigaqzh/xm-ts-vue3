vue3官网，[点击跳转](https://cn.vuejs.org/)
## 目录介绍

- public存放静态资源（此文件夹下的资源不会被编译）
- src写代码的地方
  + components
  + assets
  + App.vue vue入口文件
  + vite-env.d.ts 声明文件扩充
  + main.ts vue启动文件
- package.json
- pnpm-lock.yaml
- index.html
- tsconfig.json
- tsconfig.node.json
- vite.config.ts
### SFC
单文件组件，详情查看[官网](https://cn.vuejs.org/api/sfc-spec.html)
## 模板语法
Vue 使用一种基于 HTML 的模板语法，使我们能够声明式地将其组件实例的数据绑定到呈现的 DOM 上。
<font color="red">模板语法支持JavaScript 表达式，但是仅支持表达式。</font>
- 文本插值{{}}
- 原始html v-html
- 属性绑定 v-bind(:)
- 事件绑定 v-on(@)
    v-on:click也可以写成v[click],@click

- 双向绑定 v-model
- 调用函数 

### 指令 Directives
指令是带有 v- 前缀的特殊 attribute。Vue 提供了许多内置指令，包括上面的 v-bind 和 v-html等。

v-if

v-else

v-show

v-else-if

v-for
### tips
v-if和v-show区别一个是是否渲染，一个是控制css的display属性是否为none

修饰符 Modifiers