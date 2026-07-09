import { readFileSync, writeFileSync, rmSync, mkdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')

const { render, routes } = await import(path.resolve(root, 'dist-ssr/entry-server.js'))

const templatePath = path.resolve(root, 'dist/index.html')
const template = readFileSync(templatePath, 'utf-8')

for (const route of routes) {
  const appHtml = render(route.url)

  let html = template
    .replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`)
    .replace(
      /<meta name="description" content=".*?" \/>/,
      `<meta name="description" content="${route.description}" />`
    )
    .replace(
      /<meta property="og:title" content=".*?" \/>/,
      `<meta property="og:title" content="${route.title}" />`
    )
    .replace(
      /<meta property="og:description" content=".*?" \/>/,
      `<meta property="og:description" content="${route.description}" />`
    )
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)

  const outDir = path.resolve(root, 'dist', route.outDir)
  mkdirSync(outDir, { recursive: true })
  writeFileSync(path.join(outDir, 'index.html'), html)
}

// Limpa o bundle SSR intermediario, nao faz parte do deploy final
rmSync(path.resolve(root, 'dist-ssr'), { recursive: true, force: true })

console.log(`Pre-renderizacao concluida: ${routes.length} paginas geradas`)
