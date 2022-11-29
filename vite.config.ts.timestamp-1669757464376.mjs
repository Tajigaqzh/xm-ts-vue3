// vite.config.ts
import { defineConfig } from "file:///C:/Users/tony/Desktop/xiaoman-ts-vue3/node_modules/.pnpm/registry.npmmirror.com+vite@3.2.4_less@4.1.3/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/tony/Desktop/xiaoman-ts-vue3/node_modules/.pnpm/registry.npmmirror.com+@vitejs+plugin-vue@3.2.0_vite@3.2.4+vue@3.2.45/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///C:/Users/tony/Desktop/xiaoman-ts-vue3/node_modules/.pnpm/registry.npmmirror.com+@vitejs+plugin-vue-jsx@2.1.1_vite@3.2.4+vue@3.2.45/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import AutoImport from "file:///C:/Users/tony/Desktop/xiaoman-ts-vue3/node_modules/.pnpm/registry.npmmirror.com+unplugin-auto-import@0.11.4/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///C:/Users/tony/Desktop/xiaoman-ts-vue3/node_modules/.pnpm/registry.npmmirror.com+unplugin-vue-components@0.22.11_vue@3.2.45/node_modules/unplugin-vue-components/dist/vite.mjs";
import ElementPlus from "file:///C:/Users/tony/Desktop/xiaoman-ts-vue3/node_modules/.pnpm/registry.npmmirror.com+unplugin-element-plus@0.4.1_vite@3.2.4/node_modules/unplugin-element-plus/dist/vite.mjs";
import Icons from "file:///C:/Users/tony/Desktop/xiaoman-ts-vue3/node_modules/.pnpm/registry.npmmirror.com+unplugin-icons@0.14.14/node_modules/unplugin-icons/dist/vite.mjs";
import IconsResolver from "file:///C:/Users/tony/Desktop/xiaoman-ts-vue3/node_modules/.pnpm/registry.npmmirror.com+unplugin-icons@0.14.14/node_modules/unplugin-icons/dist/resolver.mjs";
import { ElementPlusResolver } from "file:///C:/Users/tony/Desktop/xiaoman-ts-vue3/node_modules/.pnpm/registry.npmmirror.com+unplugin-vue-components@0.22.11_vue@3.2.45/node_modules/unplugin-vue-components/dist/resolvers.mjs";
var vite_config_default = defineConfig({
  plugins: [
    ElementPlus(),
    vue(),
    vueJsx(),
    AutoImport({
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          prefix: "Icon"
        })
      ],
      dts: "src/auto-imports.d.ts",
      include: [
        /\.[tj]sx?$/,
        /\.vue$/,
        /\.vue\?vue/,
        /\.md$/
      ],
      vueTemplate: true,
      imports: ["vue", "vue-router", "pinia"]
    }),
    Components({
      extensions: ["vue", "md"],
      include: [/\.vue$/, /\.tsx$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          enabledCollections: ["ep"]
        })
      ],
      dts: "src/components.d.ts"
    }),
    Icons({
      autoInstall: true
    })
  ],
  server: {
    open: true
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx0b255XFxcXERlc2t0b3BcXFxceGlhb21hbi10cy12dWUzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx0b255XFxcXERlc2t0b3BcXFxceGlhb21hbi10cy12dWUzXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy90b255L0Rlc2t0b3AveGlhb21hbi10cy12dWUzL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCB2dWUgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXZ1ZVwiO1xuaW1wb3J0IHZ1ZUpzeCBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUtanN4JztcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gXCJ1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlXCI7XG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tIFwidW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZVwiO1xuaW1wb3J0IEVsZW1lbnRQbHVzIGZyb20gJ3VucGx1Z2luLWVsZW1lbnQtcGx1cy92aXRlJ1xuaW1wb3J0IEljb25zIGZyb20gXCJ1bnBsdWdpbi1pY29ucy92aXRlXCI7XG5pbXBvcnQgSWNvbnNSZXNvbHZlciBmcm9tIFwidW5wbHVnaW4taWNvbnMvcmVzb2x2ZXJcIjtcbmltcG9ydCB7IEVsZW1lbnRQbHVzUmVzb2x2ZXIgfSBmcm9tIFwidW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvcmVzb2x2ZXJzXCI7XG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcblx0cGx1Z2luczogW1xuXHRcdEVsZW1lbnRQbHVzKCksXG5cdFx0Ly8gXHU4MUVBXHU1MkE4XHU2MzA5XHU5NzAwXHU1QkZDXHU1MTY1XHU2ODM3XHU1RjBGXHVGRjBDXHU0RTBCXHU5NzYyXHU3Njg0XHU0RTI0XHU0RTJBYXV0b2ltcG9ydFx1NTQ4Q0NvbXBvbmVudHNcblx0XHQvLyBcdTRGMUFcdTgxRUFcdTUyQThcdTVCRkNcdTUxNjVjb21wb25lbnRcdTdCNDlcdUZGMENcdTRGNDZcdTY2MkZcdTY4MzdcdTVGMEZcdTRGMUFcdTVGODhcdTRFNDVcdTYyNERcdTY3MDlcblx0XHR2dWUoKSxcblx0XHR2dWVKc3goKSxcblx0XHRBdXRvSW1wb3J0KHtcblx0XHRcdC8vIGRpcnM6WycuL3NyYy90eXBlcyddLFxuXHRcdFx0cmVzb2x2ZXJzOiBbXG5cdFx0XHRcdEVsZW1lbnRQbHVzUmVzb2x2ZXIoKSxcblx0XHRcdFx0SWNvbnNSZXNvbHZlcih7XG5cdFx0XHRcdFx0cHJlZml4OiBcIkljb25cIixcblx0XHRcdFx0fSksXG5cdFx0XHRdLFxuXHRcdFx0ZHRzOiBcInNyYy9hdXRvLWltcG9ydHMuZC50c1wiLFxuXHRcdFx0Ly8gZHRzOmZhbHNlLFxuXHRcdFx0aW5jbHVkZTogW1xuXHRcdFx0XHQvXFwuW3RqXXN4PyQvLCAvLyAudHMsIC50c3gsIC5qcywgLmpzeFxuXHRcdFx0XHQvXFwudnVlJC8sXG5cdFx0XHRcdC9cXC52dWVcXD92dWUvLCAvLyAudnVlXG5cdFx0XHRcdC9cXC5tZCQvLCAvLyAubWRcblx0XHRcdF0sXG5cdFx0XHR2dWVUZW1wbGF0ZTogdHJ1ZSxcblx0XHRcdGltcG9ydHM6IFtcInZ1ZVwiLCBcInZ1ZS1yb3V0ZXJcIiwgXCJwaW5pYVwiXSxcblx0XHR9KSxcblxuXHRcdENvbXBvbmVudHMoe1xuXHRcdFx0Ly8gYWxsb3cgYXV0byBsb2FkIG1hcmtkb3duIGNvbXBvbmVudHMgdW5kZXIgYC4vc3JjL2NvbXBvbmVudHMvYFxuXHRcdFx0ZXh0ZW5zaW9uczogW1widnVlXCIsIFwibWRcIl0sXG5cdFx0XHQvLyBhbGxvdyBhdXRvIGltcG9ydCBhbmQgcmVnaXN0ZXIgY29tcG9uZW50cyB1c2VkIGluIG1hcmtkb3duXG5cdFx0XHRpbmNsdWRlOiBbL1xcLnZ1ZSQvLCAvXFwudHN4JC8sIC9cXC52dWVcXD92dWUvLCAvXFwubWQkL10sXG5cblx0XHRcdHJlc29sdmVyczogW1xuXHRcdFx0XHRFbGVtZW50UGx1c1Jlc29sdmVyKCksXG5cdFx0XHRcdEljb25zUmVzb2x2ZXIoe1xuXHRcdFx0XHRcdGVuYWJsZWRDb2xsZWN0aW9uczogW1wiZXBcIl0sXG5cdFx0XHRcdH0pLFxuXHRcdFx0XSxcblx0XHRcdC8vIGR0czpmYWxzZVxuXHRcdFx0ZHRzOiBcInNyYy9jb21wb25lbnRzLmQudHNcIixcblx0XHR9KSxcblx0XHRJY29ucyh7XG5cdFx0XHRhdXRvSW5zdGFsbDogdHJ1ZSxcblx0XHR9KSxcblx0XSxcblx0c2VydmVyOntcblx0XHRvcGVuOnRydWVcblx0fVxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTJTLFNBQVMsb0JBQW9CO0FBQ3hVLE9BQU8sU0FBUztBQUNoQixPQUFPLFlBQVk7QUFDbkIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxpQkFBaUI7QUFDeEIsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sbUJBQW1CO0FBQzFCLFNBQVMsMkJBQTJCO0FBRXBDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzNCLFNBQVM7QUFBQSxJQUNSLFlBQVk7QUFBQSxJQUdaLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLFdBQVc7QUFBQSxNQUVWLFdBQVc7QUFBQSxRQUNWLG9CQUFvQjtBQUFBLFFBQ3BCLGNBQWM7QUFBQSxVQUNiLFFBQVE7QUFBQSxRQUNULENBQUM7QUFBQSxNQUNGO0FBQUEsTUFDQSxLQUFLO0FBQUEsTUFFTCxTQUFTO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Q7QUFBQSxNQUNBLGFBQWE7QUFBQSxNQUNiLFNBQVMsQ0FBQyxPQUFPLGNBQWMsT0FBTztBQUFBLElBQ3ZDLENBQUM7QUFBQSxJQUVELFdBQVc7QUFBQSxNQUVWLFlBQVksQ0FBQyxPQUFPLElBQUk7QUFBQSxNQUV4QixTQUFTLENBQUMsVUFBVSxVQUFVLGNBQWMsT0FBTztBQUFBLE1BRW5ELFdBQVc7QUFBQSxRQUNWLG9CQUFvQjtBQUFBLFFBQ3BCLGNBQWM7QUFBQSxVQUNiLG9CQUFvQixDQUFDLElBQUk7QUFBQSxRQUMxQixDQUFDO0FBQUEsTUFDRjtBQUFBLE1BRUEsS0FBSztBQUFBLElBQ04sQ0FBQztBQUFBLElBQ0QsTUFBTTtBQUFBLE1BQ0wsYUFBYTtBQUFBLElBQ2QsQ0FBQztBQUFBLEVBQ0Y7QUFBQSxFQUNBLFFBQU87QUFBQSxJQUNOLE1BQUs7QUFBQSxFQUNOO0FBQ0QsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
