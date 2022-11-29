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
	{
		path: "/computed",
		component: () => import("../components/ComputedDemo.vue"),
	},
	{ path: "/mywatch", component: () => import("../components/Watch.vue") },
	{
		path: "/watchEffect",
		component: () => import("../components/WatchEffect.vue"),
	},
	{
		path: "/lifetime",
		component: () => import("../components/ComponentLifetime.vue"),
	},
	{ path: "/less", component: () => import("../components/LessScoped.vue") },
	{ path: "/layout", component: () => import("../layout/index.vue") },
	{
		path: "/passparam",
		component: () => import("../components/passParams/Father.vue"),
	},
	{ path: "/card", component: () => import("../components/card/Card.vue") },
	{ path: "/tree", component: () => import("../components/tree/TreeTest.vue") },
	{
		path: "/dynamic",
		component: () => import("../components/dynamicComponent/index.vue"),
	},
	{ path: "/slot", component: () => import("../components/slotTest/index.vue") },
	{
		path: "/dialog",
		component: () => import("../components/teleportDemo/index.vue"),
	},
	{
		path: "/async",
		component: () => import("../components/asyncComponent/index.vue"),
	},
	{
		path: "/cache",
		component: () => import("../components/cacheComponent/index.vue"),
	},
	{
		path: "/transition",
		component: () => import("../components/transition/index.vue"),
	},
	{
		path: "/provider",
		component: () => import("../components/provider/index.vue"),
	},
	{ path: "/emit", component: () => import("../components/emitTest/index.vue") },
	{ path: "/tsx", component: () => import("../components/tsx/index.vue") },
	{
		path: "/componentmodel",
		component: () => import("../components/compomentModel/index.vue"),
	},
	{
		path: "/customerdirective",
		component: () => import("../components/defineDirective/index.vue"),
	},
	{
		path: "/directivesnip",
		component: () => import("../components/defineDirective/index2.vue"),
	},
	{
		path: "/dragdirective",
		component: () => import("../components/defineDirective/index3.vue"),
	},
	{
		path: "/hooks",
		component: () => import("../components/hooks/index.vue"),
	},
	{
		path: "/globalfunva",
		component: () => import("../components/globalFunctionVariety/index.vue"),
	},
	{
		path: "/vueplugin",
		component: () => import("../components/vuePlugin/index.vue"),
	},
	{
		path: "/element",
		component: () => import("../components/elementUIcssProblem/index.vue"),
	},
	{
		path: "/taiwind",
		component: () => import("../components/taiwind/index.vue"),
	},
];

const router: Router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
