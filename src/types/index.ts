export {}
// 树形控件
export interface TreeType {
	name: string;
	checked: boolean;
	children?: TreeType[];
}
export type MyLoading = {
	hide: () => void;
	show: () => void;
};

declare module "vue" {
	interface ComponentCustomProperties {
		$myloading:MyLoading
	}
}
