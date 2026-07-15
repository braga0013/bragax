import { motion, useReducedMotion } from 'motion/react'
import {
  Check,
  WhatsappLogo,
  Globe,
  Clock,
  EnvelopeSimple,
  ArrowUpRight,
  LockKey,
  Lightning,
} from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { WA_LINK, WA_LINK_FOUNDER } from '../constants'

const plans = [
  {
    name: 'Landing Page',
    slug: 'landing-page',
    price: 'R$ 250',
    desc: 'Página única focada em conversão. Ideal para divulgar um produto, serviço ou capturar leads.',
    featured: false,
  },
  {
    name: 'Página + Catálogo',
    slug: 'site-institucional-catalogo',
    price: 'R$ 300',
    desc: 'Site institucional com catálogo de produtos ou serviços. Ideal para dar o primeiro passo no digital.',
    featured: false,
  },
  {
    name: 'Sistemas de Gestão',
    slug: 'sistema-de-gestao',
    price: 'R$ 300',
    desc: 'Painel completo para controlar estoque, vendas e clientes. Sua operação no controle.',
    featured: false,
  },
  {
    name: 'E-commerce Simples',
    slug: 'ecommerce',
    price: 'R$ 400',
    desc: 'Loja virtual sem integração de pagamento online. Venda com entrega e pagamento combinado.',
    featured: false,
  },
  {
    name: 'E-commerce Completo',
    slug: 'ecommerce',
    price: 'R$ 700',
    originalPrice: 'R$ 1.500',
    desc: 'Loja virtual com pagamento online integrado, checkout automático e painel de pedidos.',
    featured: true,
  },
  {
    name: 'Plataforma de Atendimento',
    slug: 'plataforma-de-atendimento',
    price: 'R$ 700',
    originalPrice: 'R$ 1.500',
    desc: 'Central de atendimento com WhatsApp integrado e cobrança online no mesmo lugar.',
    featured: true,
  },
]

const included = [
  { icon: Globe, label: 'Visibilidade no Google' },
  { icon: Clock, label: 'Suporte 24h' },
  { icon: ArrowUpRight, label: 'Atualizações inclusas' },
  { icon: EnvelopeSimple, label: 'Domínio incluso' },
  { icon: EnvelopeSimple, label: 'E-mails personalizados' },
]

const rules = [
  {
    title: 'Contrato de Fidelidade',
    desc: 'A isenção da taxa de setup exige um contrato de fidelidade mínimo de 12 meses — é o que garante nossa margem de segurança nas horas iniciais de desenvolvimento.',
  },
  {
    title: 'Escopo de Manutenção',
    desc: 'O pacote mensal inclui manter o servidor no ar, renovar o domínio, corrigir bugs, realizar backups e pequenas alterações de imagens e textos.',
  },
  {
    title: 'Regra de Evolução',
    desc: 'Novas tabelas, automações avançadas e regras de negócio complexas são tratadas como um novo fluxo, sujeito a um acréscimo na mensalidade.',
  },
]

export function Pricing() {
  const prefersReduced = useReducedMotion()

  return (
    <section id="planos" className="py-24 px-4 sm:px-6 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#00C2FF] mb-3">
              Vagas Limitadas
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Lote de Condição de Fundador
            </h2>
          </motion.div>
          <motion.p
            initial={prefersReduced ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm text-white/50 max-w-xs"
          >
            Todos os planos incluem suporte, domínio e atualizações sem custo extra.
          </motion.p>
        </div>

        {/* Lock trigger */}
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 flex flex-col sm:flex-row items-start sm:items-center gap-3 bg-[#00C2FF]/10 border border-[#00C2FF]/40 px-5 py-4"
        >
          <LockKey size={22} weight="fill" className="text-[#00C2FF] shrink-0" />
          <p className="text-sm sm:text-base font-semibold text-white">
            Fechando hoje, sua mensalidade fica travada em contrato e você não sofre o reajuste.
          </p>
        </motion.div>

        {/* Plan cards: row of 3, then row of 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {plans.slice(0, 3).map((plan, i) => (
            <PlanCard key={plan.name} plan={plan} index={i} prefersReduced={!!prefersReduced} />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {plans.slice(3).map((plan, i) => (
            <PlanCard key={plan.name} plan={plan} index={i + 3} prefersReduced={!!prefersReduced} />
          ))}
        </div>

        {/* Real savings highlight */}
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex items-start gap-4 border border-[#00C2FF]/20 bg-[#00C2FF]/5 p-6 sm:p-8"
        >
          <Lightning size={24} weight="fill" className="text-[#00C2FF] shrink-0 mt-1" />
          <p className="text-sm sm:text-base text-white/80 leading-relaxed">
            Numa agência tradicional, esse mesmo desenvolvimento custaria de{' '}
            <span className="font-bold text-white">R$ 10.000 a R$ 25.000</span> só de setup inicial.
            Com a BragaxTech, a criação sai a{' '}
            <span className="font-bold text-[#00C2FF]">custo zero</span> — você paga só a mensalidade.
          </p>
        </motion.div>

        {/* Included in all */}
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 border border-white/8 bg-[#111111] p-6 sm:p-8"
        >
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-white/40 mb-6">
            Incluso em todos os planos
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {included.map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <div className="w-6 h-6 bg-[#00C2FF]/10 flex items-center justify-center shrink-0">
                  <Check size={12} weight="bold" className="text-[#00C2FF]" />
                </div>
                <span className="text-sm text-white/70 font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Scope / fidelity rules */}
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 border border-white/8 bg-[#111111] p-6 sm:p-8"
        >
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-white/40 mb-6">
            Regras da condição de fundador
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {rules.map((rule) => (
              <div key={rule.title}>
                <h4 className="text-sm font-semibold text-white mb-2">{rule.title}</h4>
                <p className="text-sm text-white/50 leading-relaxed">{rule.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

interface PlanCardProps {
  plan: {
    name: string
    slug: string
    price: string
    originalPrice?: string
    desc: string
    featured: boolean
  }
  index: number
  prefersReduced: boolean
}

function PlanCard({ plan, index, prefersReduced }: PlanCardProps) {
  return (
    <motion.div
      initial={prefersReduced ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.6,
        delay: index * 0.07,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`relative flex flex-col p-6 sm:p-8 transition-all duration-300 group ${
        plan.featured
          ? 'bg-[#00C2FF]/5 border border-[#00C2FF]/30 hover:border-[#00C2FF]/60'
          : 'bg-[#111111] border border-white/5 hover:border-white/15'
      }`}
    >
      {plan.featured && (
        <span className="absolute top-4 right-4 text-[10px] font-mono uppercase tracking-widest text-[#00C2FF] bg-[#00C2FF]/10 px-2 py-1">
          Popular
        </span>
      )}

      <h3 className="text-sm font-semibold text-white/60 mb-4 pr-16">{plan.name}</h3>

      <div className="mb-4">
        {plan.originalPrice && (
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs text-white/40 line-through">De {plan.originalPrice}/mês</span>
          </div>
        )}
        <span className="text-4xl font-bold text-white">{plan.price}</span>
        <span className="text-sm text-white/40 ml-1">/mês</span>
      </div>

      <p className="text-sm text-white/50 leading-relaxed mb-8 flex-1">{plan.desc}</p>

      <div className="flex flex-col gap-2">
        <a
          href={plan.featured ? WA_LINK_FOUNDER : WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center gap-2 py-3 text-sm font-semibold transition-colors duration-200 ${
            plan.featured
              ? 'bg-[#00C2FF] text-[#0A0A0A] hover:bg-[#00aadf]'
              : 'border border-white/15 text-white/80 hover:border-[#00C2FF] hover:text-[#00C2FF]'
          }`}
        >
          <WhatsappLogo size={16} weight="fill" />
          Contratar
        </a>
        <Link
          to={`/servicos/${plan.slug}`}
          className="text-center text-xs text-white/40 hover:text-[#00C2FF] transition-colors duration-200 py-1"
        >
          Saiba mais
        </Link>
      </div>
    </motion.div>
  )
}
