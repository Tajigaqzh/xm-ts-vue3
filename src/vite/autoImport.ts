import { Plugin } from "vite"
import autoImport from 'unplugin-auto-import/vite'
export default function autpImportPlugin():Plugin{
    return autoImport({
        imports:[
            'vue','vue-router','pinia'
        ],
        dts:false
    })
}