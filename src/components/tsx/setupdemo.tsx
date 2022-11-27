interface Props {
	aaa?: string;
}
export default defineComponent({
	props: {
		aaa: String,
	},
	emits: ["on-click"],
	setup(props: Props, { emit }) {
		type Man = {
			name: string;
			age: number;
			sex: string;
		};
		console.log(props.aaa);

		const flag = ref<boolean>(false);
		const change = () => {
			flag.value = !flag.value;
		};

		const data = reactive<Array<Man>>([
			{ name: "张三", age: 18, sex: "男" },
			{ name: "李四", age: 20, sex: "女" },
			{ name: "王五", age: 22, sex: "男" },
		]);
		const data2 = [
			{ name: "张三", age: 18, sex: "男" },
			{ name: "李四", age: 20, sex: "女" },
			{ name: "王五", age: 22, sex: "男" },
		];
		const name = ref<string>("aaa");

		const fn = () => {
			console.log("emit被触发了");
			emit("on-click");
		};
		return () => (
			<>
				<h4>4.1v-show支持</h4>
				<div v-show={!flag.value}>展示与隐藏</div>
				<button onClick={change}>切换</button>

				<h4>4.2v-if不支持，可以用三元表达式代替</h4>
				<div>{flag.value ? <div>true</div> : <div>false</div>}</div>

				<h4>4.5 v-for 不支持，可以用数组的map方法代替</h4>
				<div>
					{data2.map((v) => {
						return (
							<div>
								{v.name}|{v.age}|{v.sex}
							</div>
						);
					})}
					-----------------------
					{data.map((v) => {
						return (
							<div>
								{v.name}|{v.age}|{v.sex}
							</div>
						);
					})}
				</div>

				<h4>4.6 v-bind用法:{}代替</h4>
				<div name={name.value}></div>
				<h4>4.7 props传参（写法一）</h4>
				<div>ssss:{props?.aaa}</div>

                <h4>4.8 emit用法</h4>
                {/* <button onClick={fn()}>派发事件</button> */}
                {/* 不能直接调用，需要函数柯里化 */}
                <button onClick={()=>fn()}>派发事件</button>
			</>
		);
	},
});
