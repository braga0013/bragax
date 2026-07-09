import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from './App'
import { services } from './services-data'

export function render(url: string) {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  )
}

// Lista de rotas a serem pré-renderizadas, com metadata única de SEO para cada uma.
// Consumida pelo scripts/prerender.mjs após o build SSR.
export const routes = [
  {
    url: '/',
    outDir: '',
    title: 'BragaxTech - Seu Negócio no Digital com Planos Mensais',
    description:
      'A BragaxTech desenvolve e-commerces, sistemas de gestão, automação e plataformas digitais para pequenos e médios negócios. Planos mensais com suporte 24h, domínio incluso e e-mails personalizados.',
  },
  ...services.map((s) => ({
    url: `/servicos/${s.slug}`,
    outDir: `servicos/${s.slug}`,
    title: s.seoTitle,
    description: s.metaDescription,
  })),
]
