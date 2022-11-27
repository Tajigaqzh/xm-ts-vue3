import { DefineComponent } from "vue";
export default defineComponent({
	data() {
		return {
			age: 13,
		};
	},
	render() {
		return (<div>{this.age}</div>);
	},
});
