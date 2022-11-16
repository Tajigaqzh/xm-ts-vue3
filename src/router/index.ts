import { createRouter, createWebHistory, Router } from "vue-router";

const routes: Array<any> = [
	{
		path: "/",
		component: () => import("../views/Index.vue"),
	},
	{
		path: "/directive",
		component: () => import("../components/Directive.vue"),
	},
	{},
];

const router: Router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
