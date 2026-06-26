import { motion, useReducedMotion } from 'motion/react'
import { ShoppingCart, Gear, Robot, Headset } from '@phosphor-icons/react'

const solutions = [
  {
    icon: ShoppingCart,
    title: 'E-commerce',
    desc: 'Loja virtual completa com catálogo, carrinho, checkout e integração com marketplaces. Venda 24h por dia sem depender de ninguém.',
    accent: true,
  },
  {
    icon: Gear,
    title: 'Sistemas de Gestão',
    desc: 'Controle estoque, vendas, clientes e finanças em um único painel. Tome decisões com dados reais, não intuição.',
    accent: false,
  },
  {
    icon: Robot,
    title: 'Automação',
    desc: 'Fluxos automáticos que respondem clientes, enviam confirmações, geram relatórios e eliminam tarefas repetitivas do seu time.',
    accent: false,
  },
  {
    icon: Headset,
    title: 'Plataformas de Atendimento',
    desc: 'Central de atendimento integrada com WhatsApp, chat online e pagamento no mesmo lugar. Feche vendas direto na conversa.',
    accent: true,
  },
]

export function Solutions() {
  const prefersReduced = useReducedMotion()

  return (
    <section id="solucoes" className="py-24 px-4 sm:px-6 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            O que a Bragax Tech{' '}
            <span className="text-[#00C2FF]">desenvolve</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5">
          {solutions.map((s, i) => (
            <motion.div
              key={s.title}
              initial={prefersReduced ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`relative group p-8 sm:p-10 transition-all duration-300 border-t-2 ${
                s.accent
                  ? 'bg-[#111111] border-[#00C2FF]/40 hover:border-[#00C2FF]'
                  : 'bg-[#0D0D0D] border-white/5 hover:border-[#00C2FF]/50'
              } hover:bg-[#141414]`}
            >
              {/* Top accent line overlay on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#00C2FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <s.icon
                size={40}
                weight="light"
                className="text-[#00C2FF] mb-6"
              />
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-white/55 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
