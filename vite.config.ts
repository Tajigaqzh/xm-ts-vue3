import { defineConfig } from "vite";
import {fileURLToPath,URL} from 'url'
import vue from "@vitejs/plugin-vue";
import vueJsx from '@vitejs/plugin-vue-jsx';
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
// import ElementPlus from 'unplugin-element-plus/vite'

import postcsspxtoviewport from "postcss-px-to-viewport" //插件
// px转换成rem
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		// ElementPlus(),
		// 自动按需导入样式，下面的两个autoimport和Components
		// 会自动导入component等，但是样式会很久才有
		vue(),
		vueJsx(),
		AutoImport({
			// dirs:['./src/types'],
			resolvers: [
				ElementPlusResolver(),
				IconsResolver({
					prefix: "Icon",
				}),
			],
			dts: "src/auto-imports.d.ts",
			// dts:false,
			include: [
				/\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
				/\.vue$/,
				/\.vue\?vue/, // .vue
				/\.md$/, // .md
			],
			vueTemplate: true,
			imports: ["vue", "vue-router", "pinia"],
		}),

		Components({
			// allow auto load markdown components under `./src/components/`
			extensions: ["vue", "md"],
			// allow auto import and register components used in markdown
			include: [/\.vue$/, /\.tsx$/, /\.vue\?vue/, /\.md$/],

			resolvers: [
				ElementPlusResolver(),
				IconsResolver({
					enabledCollections: ["ep"],
				}),
			],
			// dts:false
			dts: "src/components.d.ts",
		}),
		Icons({
			autoInstall: true,
		}),
	],
	resolve:{
		alias:{
			'@':fileURLToPath(new URL('./src',import.meta.url))
		}
	},
	server:{
		open:true
	},
	css:{
		postcss:{
			plugins:[postcsspxtoviewport({
				unitToConvert: 'px', // 要转化的单位
				viewportWidth: 750, // UI设计稿的宽度
				unitPrecision: 6, // 转换后的精度，即小数点位数
				propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
				viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
				fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
				selectorBlackList: ['ignore-'], // 指定不转换为视窗单位的类名，
				minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
				mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
				replace: true, // 是否转换后直接更换属性值
				landscape: false // 是否处理横屏情况
			})]
		}
	}
});
