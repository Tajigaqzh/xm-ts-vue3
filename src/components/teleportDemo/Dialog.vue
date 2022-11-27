<template>
  Teleport
  是一种能够将我们的模板渲染至指定DOM节点，不受父级style、v-show等属性影响，但data、prop数据依旧能够共用的技术；类似于
  React 的 Portal。 主要解决的问题
  因为Teleport节点挂载在其他指定的DOM节点下，完全不受父级style样式影响
  <p>比如弹窗，懒加载骨架屏，封装组件</p>

  <br />
  <div class="dialog">
    <header class="header">
      <div>我是弹框头部</div>
      <el-icon>
        <!-- <CloseBold /> -->
        <!-- <Edit/> -->
      </el-icon>
      <!-- <el-icon>
        <CloseBold />
      </el-icon> -->
    </header>
    <main class="main">我是内容</main>
    <footer class="footer">
      <el-button size="small">取消</el-button>
      <el-button size="small" type="primary">确定</el-button>
    </footer>
  </div>
</template>
<script setup lang="ts"></script>

<style scoped lang="less">
p {
  color: red;
}
.dialog {
  width: 400px;
  height: 400px;
  background-color: #141414;
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 50%;
  top: 50%;
  margin-left: -200px;
  margin-top: -200px;
  .header {
    display: flex;
    color: #cfd3dc;
    border-bottom: 1px solid #636466;
    padding: 10px;
    justify-content: space-between;
  }
  .main {
    flex: 1;
    color: #cfd3dc;
    padding: 10px;
  }
  .footer {
    border-top: 1px solid #636466;
    padding: 10px;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
