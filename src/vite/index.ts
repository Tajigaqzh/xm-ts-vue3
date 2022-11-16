
import vue from '@vitejs/plugin-vue'
import { Plugin } from 'vite'
import autpImportPlugin from './autoImport'

export default function createVitePlugins(){
    const vitePlugins:Array<Plugin> = [vue()]
    vitePlugins.push(autpImportPlugin())

}


