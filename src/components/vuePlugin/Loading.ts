// vite插件可以导出对象形式和函数形式
// 对象形式必须有install函数
import type { App, VNode } from "vue";
import Loading from "./Loading.vue";
import { createVNode, render } from "vue";
export default {
	install(app: App) {
		const vNode: VNode = createVNode(Loading);
		render(vNode, document.body);
		// 挂载到document的body标签内
        // console.log(vNode.component?.exposed);
        // 读取exposed暴露的方法

		app.config.globalProperties.$myloading = {
			show: vNode.component?.exposed?.show,
			hide: vNode.component?.exposed?.hide
		};
        // app.config.globalProperties.$myloading.show()
		
		// console.log(vNode);
	},
};
