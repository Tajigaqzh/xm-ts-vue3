// 手搓reactive，reactive用到了es6的proxy，和reflect
import { track, trigger } from "./effect";

const isObject = (target:object)=>target!=null && typeof target =='object'

export const reactive = <T extends object>(target: T):object => {
	return new Proxy(target, {
		get(target, key, receiver) {
			let res = Reflect.get(target, key, receiver) as object;
			track(target, key);
			// 依赖收集

			if(isObject(res)){
				return reactive(res)
			}
			// 深层次嵌套
			return res;
		},
		set(target, key, value, receiver) {
			let res = Reflect.set(target, key, receiver);
			trigger(target, key);
			// 触发更新

			return res;
		},
	});
};
