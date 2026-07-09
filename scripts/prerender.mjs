import { readFileSync, writeFileSync, rmSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')

const { render } = await import(path.resolve(root, 'dist-ssr/entry-server.js'))

const appHtml = render()

const indexPath = path.resolve(root, 'dist/index.html')
const template = readFileSync(indexPath, 'utf-8')

const finalHtml = template.replace(
  '<div id="root"></div>',
  `<div id="root">${appHtml}</div>`
)

writeFileSync(indexPath, finalHtml)

// Limpa o bundle SSR intermediário, não faz parte do deploy final
rmSync(path.resolve(root, 'dist-ssr'), { recursive: true, force: true })

console.log('✓ Pré-renderização concluída: HTML estático injetado em dist/index.html')
