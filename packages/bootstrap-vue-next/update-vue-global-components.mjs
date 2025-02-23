// Provides component and prop autocompletion for WebStorm. The file is called by vite.config.mts
import {componentNames} from './dist/bootstrap-vue-next.mjs'
import fs from 'fs'
import path from 'path'
import {fileURLToPath} from 'url'

let file = '// Automatically updated by vite.config.mts\n'
file += `import { ${componentNames.join(',')} } from '../components'\n`
file += `declare module '@vue/runtime-core' {\n`
file += '  interface GlobalComponents {\n'
file += componentNames.map((name) => `    ${name}: typeof ${name}\n`).join('')
file += '  }\n'
file += '}\n'

const baseFolder = path.dirname(fileURLToPath(import.meta.url))
const filePath = `${baseFolder}/dist/src/types/VueGlobalComponents.d.ts`

fs.writeFileSync(filePath, file)
