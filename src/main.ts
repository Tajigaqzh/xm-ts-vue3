import App from "./App.vue";
import router from "./router";
import "./assets/reset.css";
import Card from "./components/card/Card.vue";
import "element-plus/dist/index.css";
import Loading from "./components/vuePlugin/Loading";
import mitt from "mitt";
import "./index.css"

const Mit = mitt();
const app = createApp(App);

const pinia = createPinia();
// 全局函数和全局变量

app.config.globalProperties.$bus = Mit;
app.config.globalProperties.$name11 = "aaa";
app.config.globalProperties.$filters = {
	format<T>(str: T): string {
		return `啊啊啊${str}`;
	},
};


// 全局组件注册
app.component("Card", Card);
// 使用插件
app.use(router);
app.use(pinia);
// 使用自定义插件Loading
app.use(Loading);

app.mount("#app");
