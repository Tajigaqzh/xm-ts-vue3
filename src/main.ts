import App from './App.vue'
import router from './router'
import './assets/reset.css'
import Card from './components/card/Card.vue'

const app = createApp(App)
const pinia = createPinia()

app.component('Card',Card)
// 全局组件注册
app.use(router)
app.use(pinia)
app.mount('#app')
