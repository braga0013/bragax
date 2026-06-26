import { motion, useReducedMotion } from 'motion/react'
import { Gift, WhatsappLogo } from '@phosphor-icons/react'
import { WA_LINK } from '../constants'

const commissions = [
  { plan: 'Página + Catálogo', commission: 'R$ 100/mês' },
  { plan: 'Sistemas de Gestão', commission: 'R$ 100/mês' },
  { plan: 'E-commerce Simples', commission: 'R$ 150/mês' },
  { plan: 'E-commerce Completo', commission: 'R$ 250/mês' },
  { plan: 'Plataforma de Atendimento', commission: 'R$ 250/mês' },
]

export function Referral() {
  const prefersReduced = useReducedMotion()

  return (
    <section
      id="indicacao"
      className="py-24 px-4 sm:px-6 bg-[#0A0A0A] relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0 bg-[#00C2FF]/2" />
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-[#00C2FF]/20" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-[#00C2FF]/20" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#00C2FF] mb-3">
            Programa de Indicação
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Indique e ganhe{' '}
            <span className="text-[#00C2FF]">todo mês</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: description */}
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="w-14 h-14 bg-[#00C2FF]/10 border border-[#00C2FF]/20 flex items-center justify-center mb-8">
              <Gift size={28} weight="light" className="text-[#00C2FF]" />
            </div>

            <h3 className="text-xl font-bold mb-4">Como funciona?</h3>
            <p className="text-white/60 leading-relaxed mb-6">
              Indique um cliente para a Bragax Tech. Se ele contratar qualquer plano, você passa a
              receber uma comissao mensal recorrente enquanto ele mantiver o servico ativo.
            </p>
            <p className="text-white/60 leading-relaxed mb-8">
              Sem limite de indicacoes. Quanto mais voce indica, mais voce ganha. Sem
              burocracia e sem prazo de validade.
            </p>

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white font-bold px-6 py-3 hover:bg-[#20b558] transition-colors duration-200 active:scale-[0.98]"
            >
              <WhatsappLogo size={18} weight="fill" />
              Quero indicar agora
            </a>
          </motion.div>

          {/* Right: commission list */}
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#111111] border border-white/8"
          >
            <div className="px-6 py-4 border-b border-white/8 flex justify-between items-center">
              <span className="text-xs font-mono uppercase tracking-widest text-white/40">Plano</span>
              <span className="text-xs font-mono uppercase tracking-widest text-white/40">
                Sua Comissao
              </span>
            </div>

            <div className="divide-y divide-white/5">
              {commissions.map((item, i) => (
                <motion.div
                  key={item.plan}
                  initial={prefersReduced ? false : { opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.2 + i * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="flex items-center justify-between px-6 py-4 hover:bg-white/2 transition-colors duration-200"
                >
                  <span className="text-sm text-white/70">{item.plan}</span>
                  <span className="text-sm font-bold text-[#00C2FF]">{item.commission}</span>
                </motion.div>
              ))}
            </div>

            <div className="px-6 py-4 border-t border-white/8 bg-[#00C2FF]/5">
              <p className="text-xs text-[#00C2FF]/80 font-medium">
                Recorrente enquanto o cliente mantiver o plano ativo.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
