import {
	createRouter,
	createWebHistory,
	Router,
	RouteRecordRaw,
} from "vue-router";

const routes: Array<RouteRecordRaw> = [
	{ path: "/", component: () => import("../views/Index.vue") },
	{ path: "/directive", component: () => import("../components/Directive.vue") },
	{ path: "/virtual", component: () => import("../components/VirtualDom.vue") },
	{ path: "/ref", component: () => import("../components/Ref.vue") },
	{ path: "/reactive", component: () => import("../components/Reactive.vue") },
	{ path: "/computed", component: () => import("../components/Computed.vue") },
	{ path: "/watch", component: () => import("../components/Watch.vue") },
	{
		path: "/watchEffect",
		component: () => import("../components/WatchEffect.vue"),
	},
	{
		path: "/lifeTime",
		component: () => import("../components/ComponentLifetime.vue"),
	},
	{ path: "/less", component: () => import("../components/LessScoped.vue") },
	{ path: "/layout", component: () => import("../layout/index.vue") },
];

const router: Router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
