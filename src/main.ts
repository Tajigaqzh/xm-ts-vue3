import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/reset.css'
import Card from './components/card/Card.vue'

const app = createApp(App)
app.component('Card',Card)
// 全局组件注册
app.use(router)
app.mount('#app')
