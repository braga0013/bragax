import { motion, useReducedMotion } from 'motion/react'
import { Check, WhatsappLogo, Globe, Headset, Clock, EnvelopeSimple, ArrowUpRight } from '@phosphor-icons/react'
import { WA_LINK } from '../constants'

const plans = [
  {
    name: 'Página + Catálogo',
    price: 'R$ 300',
    desc: 'Site institucional com catálogo de produtos ou serviços. Ideal para dar o primeiro passo no digital.',
    featured: false,
  },
  {
    name: 'Sistemas de Gestão',
    price: 'R$ 300',
    desc: 'Painel completo para controlar estoque, vendas e clientes. Sua operação no controle.',
    featured: false,
  },
  {
    name: 'E-commerce Simples',
    price: 'R$ 400',
    desc: 'Loja virtual sem integração de pagamento online. Venda com entrega e pagamento combinado.',
    featured: false,
  },
  {
    name: 'E-commerce Completo',
    price: 'R$ 700',
    desc: 'Loja virtual com pagamento online integrado, checkout automático e painel de pedidos.',
    featured: true,
  },
  {
    name: 'Plataforma de Atendimento',
    price: 'R$ 700',
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

export function Pricing() {
  const prefersReduced = useReducedMotion()

  return (
    <section id="planos" className="py-24 px-4 sm:px-6 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#00C2FF] mb-3">
              Planos e Preços
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Escolha o plano ideal
              <br />
              para o seu negócio
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

        {/* Plan cards: row of 3, then row of 2 centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {plans.slice(0, 3).map((plan, i) => (
            <PlanCard key={plan.name} plan={plan} index={i} prefersReduced={!!prefersReduced} />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:max-w-[66.666%] lg:mx-auto">
          {plans.slice(3).map((plan, i) => (
            <PlanCard key={plan.name} plan={plan} index={i + 3} prefersReduced={!!prefersReduced} />
          ))}
        </div>

        {/* Included in all */}
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 border border-white/8 bg-[#111111] p-6 sm:p-8"
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
      </div>
    </section>
  )
}

interface PlanCardProps {
  plan: { name: string; price: string; desc: string; featured: boolean }
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
        <span className="text-4xl font-bold text-white">{plan.price}</span>
        <span className="text-sm text-white/40 ml-1">/mês</span>
      </div>

      <p className="text-sm text-white/50 leading-relaxed mb-8 flex-1">{plan.desc}</p>

      <a
        href={WA_LINK}
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
    </motion.div>
  )
}
