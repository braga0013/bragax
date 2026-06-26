import { motion, useReducedMotion } from 'motion/react'
import { ChatCircle, Code, Rocket } from '@phosphor-icons/react'

const steps = [
  {
    icon: ChatCircle,
    step: '01',
    title: 'Contato',
    desc: 'Você fala conosco pelo WhatsApp. Entendemos seu negócio, seu público e o que você precisa construir.',
  },
  {
    icon: Code,
    step: '02',
    title: 'Desenvolvimento',
    desc: 'Nossa equipe desenvolve sua solução com qualidade e agilidade. Você acompanha cada etapa do progresso.',
  },
  {
    icon: Rocket,
    step: '03',
    title: 'Vai ao ar',
    desc: 'Sua plataforma entra no ar com domínio configurado, e-mails ativos e visibilidade no Google. Tudo pronto.',
  },
]

export function HowItWorks() {
  const prefersReduced = useReducedMotion()

  return (
    <section className="py-24 px-4 sm:px-6 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <div className="w-8 h-[3px] bg-[#00C2FF] mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Como funciona</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative">
          {/* Connecting line - desktop only */}
          <div className="hidden md:block absolute top-[52px] left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px bg-[#00C2FF]/20 z-0" />

          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={prefersReduced ? false : { opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative z-10 px-0 md:px-8 mb-12 md:mb-0 first:pl-0 last:pr-0"
            >
              {/* Step icon */}
              <div className="w-[110px] h-[110px] border border-[#00C2FF]/20 bg-[#111111] flex items-center justify-center mb-8 relative group-hover:border-[#00C2FF]/50 transition-colors duration-300">
                <s.icon size={40} weight="light" className="text-[#00C2FF]" />
                <span className="absolute -top-3 -right-3 w-7 h-7 bg-[#00C2FF] text-[#0A0A0A] text-xs font-black flex items-center justify-center">
                  {s.step}
                </span>
              </div>

              <h3 className="text-lg font-bold mb-3">{s.title}</h3>
              <p className="text-sm text-white/55 leading-relaxed max-w-[260px]">{s.desc}</p>

              {/* Mobile connector line */}
              {i < steps.length - 1 && (
                <div className="md:hidden mt-8 mb-0 ml-[52px] w-px h-8 bg-white/10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
