let activeEffect: () => void;
// 副作用函数，依赖发生变化会执行
export const effect = (fn: Function) => {
	// 闭包
	const _effect = function () {
		activeEffect = _effect;
		fn();
	};
	_effect();
};
const targetMap = new WeakMap();

// 依赖收集
export const track = (target: object, key: any) => {
	let depsMap = targetMap.get(target);
	if (!depsMap) {
		depsMap = new Map();
		targetMap.set(target, depsMap);
	}
	let deps = depsMap.get(key);
	if (!deps) {
		deps = new Set();
		depsMap.set(key, deps);
	}
	deps.add(activeEffect);
};
export const trigger = (target: object, key: any) => {
	const depsMap = targetMap.get(target);
	const deps = depsMap.get(key);
	deps.forEach((effect: () => any) => effect());
};
