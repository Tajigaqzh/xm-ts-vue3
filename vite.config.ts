import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from '@vitejs/plugin-vue-jsx';
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import ElementPlus from 'unplugin-element-plus/vite'
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		ElementPlus(),
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
	server:{
		open:true
	}
});
