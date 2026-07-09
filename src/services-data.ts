export interface ServiceTier {
  name: string
  price: string
  desc: string
}

export interface Service {
  slug: string
  navLabel: string
  h1: string
  seoTitle: string
  metaDescription: string
  price: string
  intro: string
  bullets: string[]
  tiers?: ServiceTier[]
}

export const services: Service[] = [
  {
    slug: 'ecommerce',
    navLabel: 'E-commerce',
    h1: 'Loja Virtual e E-commerce para Pequenas e Médias Empresas',
    seoTitle: 'Criação de Loja Virtual (E-commerce) | BragaxTech',
    metaDescription:
      'Loja virtual completa com pagamento integrado ou plano simplificado a partir de R$400/mês. Domínio, suporte 24h e visibilidade no Google inclusos.',
    price: 'a partir de R$ 400/mês',
    intro:
      'Uma loja virtual profissional é o primeiro passo pra vender todos os dias, não só quando alguém passa na sua porta. A BragaxTech monta e mantém sua loja online com um plano mensal fixo — sem surpresa de orçamento e sem depender de terceiros pra colocar no ar.',
    bullets: [
      'Catálogo de produtos ilimitado',
      'Painel de pedidos',
      'Checkout otimizado para conversão',
      'Integração de pagamento no plano completo',
    ],
    tiers: [
      {
        name: 'E-commerce sem pagamento integrado',
        price: 'R$ 400/mês',
        desc: 'Loja online com catálogo completo, carrinho e finalização por WhatsApp ou combinação direta com o cliente. Ideal pra quem já tem um processo de pagamento definido, como Pix manual ou pagamento na entrega.',
      },
      {
        name: 'E-commerce completo',
        price: 'R$ 700/mês',
        desc: 'Loja online com checkout de pagamento integrado (cartão e Pix automáticos), painel de pedidos e gestão de estoque. Pra quem quer vender 24 horas por dia sem precisar confirmar pagamento manualmente.',
      },
    ],
  },
  {
    slug: 'sistema-de-gestao',
    navLabel: 'Sistema de Gestão',
    h1: 'Sistema de Gestão para Pequenas Empresas',
    seoTitle: 'Sistema de Gestão Empresarial para PMEs | BragaxTech',
    metaDescription:
      'Sistema de gestão sob medida para controlar vendas, estoque e clientes. A partir de R$300/mês, com suporte 24h e atualizações inclusas.',
    price: 'R$ 300/mês',
    intro:
      'Planilha resolve até certo ponto. Quando o negócio cresce, controlar estoque, vendas e clientes numa planilha vira risco. A BragaxTech desenvolve um sistema de gestão sob medida pro seu processo — não um software genérico que você precisa se adaptar.',
    bullets: [
      'Controle de estoque em tempo real',
      'Cadastro e histórico de clientes',
      'Relatórios de vendas',
      'Acesso de qualquer lugar, direto da nuvem',
    ],
  },
  {
    slug: 'plataforma-de-atendimento',
    navLabel: 'Plataforma de Atendimento',
    h1: 'Plataforma de Atendimento Online com Pagamento Integrado',
    seoTitle: 'Plataforma de Atendimento e Cobrança Online | BragaxTech',
    metaDescription:
      'Central de atendimento com WhatsApp integrado e cobrança automática. A partir de R$700/mês, com domínio e suporte inclusos.',
    price: 'R$ 700/mês',
    intro:
      'Atender pelo WhatsApp pessoal e cobrar por fora é insustentável quando o volume cresce. A BragaxTech monta uma plataforma que centraliza atendimento e cobrança automática no mesmo lugar, pra você não perder pedido nem cliente na correria do dia a dia.',
    bullets: [
      'Atendimento centralizado em um único painel',
      'Cobrança automática integrada',
      'Histórico completo de conversas e pedidos',
      'Notificações automáticas para o cliente',
    ],
  },
  {
    slug: 'site-institucional-catalogo',
    navLabel: 'Site com Catálogo',
    h1: 'Site Institucional com Catálogo de Produtos e Serviços',
    seoTitle: 'Site com Catálogo para Pequenas Empresas | BragaxTech',
    metaDescription:
      'Página inicial profissional com catálogo de produtos ou serviços. A partir de R$300/mês, domínio e suporte inclusos.',
    price: 'R$ 300/mês',
    intro:
      'Antes de vender online, muitos negócios só precisam existir no digital de forma profissional — um site que mostra o que você faz e vende, sem a complexidade de um e-commerce completo.',
    bullets: [
      'Catálogo de produtos ou serviços',
      'Design profissional e responsivo',
      'Otimizado para aparecer no Google',
      'Formulário de contato integrado',
    ],
  },
  {
    slug: 'landing-page',
    navLabel: 'Landing Page',
    h1: 'Landing Page para Captura de Leads e Conversão',
    seoTitle: 'Criação de Landing Page Profissional | BragaxTech',
    metaDescription:
      'Landing page focada em conversão para divulgar um produto, serviço ou campanha. A partir de R$250/mês, com suporte e domínio inclusos.',
    price: 'R$ 250/mês',
    intro:
      'Uma landing page bem feita converte visitante em lead ou venda, sem distração, focada numa única ação. Ideal pra lançar um produto, divulgar um serviço específico ou rodar uma campanha de anúncios pagos.',
    bullets: [
      'Foco total em conversão',
      'Design pensado para tráfego pago',
      'Carregamento rápido',
      'Integração com formulários e WhatsApp',
    ],
  },
]

export const included = [
  { label: 'Visibilidade no Google' },
  { label: 'Suporte 24h' },
  { label: 'Atualizações inclusas' },
  { label: 'Domínio incluso' },
  { label: 'E-mails personalizados' },
]
