import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from '@vitejs/plugin-vue-jsx';
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		vueJsx(),
		AutoImport({
			resolvers: [
				ElementPlusResolver(),
				IconsResolver({
					prefix: "Icon",
				}),
			],
			dts: "src/auto-imports.d.ts",
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
