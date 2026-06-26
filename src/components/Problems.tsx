import { motion, useReducedMotion } from 'motion/react'
import { FileX, Notebook, TrendDown } from '@phosphor-icons/react'

const problems = [
  {
    icon: FileX,
    number: '01',
    title: 'Não tem sistema?',
    desc: 'Sem uma plataforma digital, seu negócio perde visibilidade e fica fora do alcance de milhares de clientes em potencial que buscam online todos os dias.',
    large: true,
  },
  {
    icon: Notebook,
    number: '02',
    title: 'Controla tudo no papel?',
    desc: 'Papéis se perdem, erros acontecem e o crescimento trava. Um sistema digital organiza tudo em tempo real.',
    large: false,
  },
  {
    icon: TrendDown,
    number: '03',
    title: 'Perde vendas por falta de automação?',
    desc: 'Cada cliente sem resposta rápida é uma venda perdida. A automação trabalha enquanto você dorme.',
    large: false,
  },
]

export function Problems() {
  const prefersReduced = useReducedMotion()

  return (
    <section className="py-24 px-4 sm:px-6 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <div className="w-8 h-[3px] bg-[#00C2FF] mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Sua empresa ainda enfrenta{' '}
            <span className="text-[#00C2FF]">esses problemas?</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Large card */}
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 bg-[#111111] border-l-2 border-[#00C2FF] p-8 sm:p-10 flex flex-col justify-between min-h-[280px]"
          >
            <div>
              <span className="font-mono text-5xl font-bold text-[#00C2FF]/20 leading-none block mb-6">
                01
              </span>
              <div className="flex items-start gap-4">
                <FileX size={28} weight="light" className="text-[#00C2FF] mt-1 shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-3">Não tem sistema?</h3>
                  <p className="text-white/60 leading-relaxed max-w-md">
                    Sem uma plataforma digital, seu negócio perde visibilidade e fica fora do
                    alcance de milhares de clientes em potencial que buscam online todos os dias.
                    A concorrência que está no digital sai na frente.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-white/5">
              <p className="text-sm text-white/40 font-medium">
                Mais de 70% das decisões de compra começam com uma busca online.
              </p>
            </div>
          </motion.div>

          {/* Two stacked smaller cards */}
          <div className="flex flex-col gap-4">
            {problems.slice(1).map((p, i) => (
              <motion.div
                key={p.number}
                initial={prefersReduced ? false : { opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: 0.15 + i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bg-[#111111] border border-white/5 p-6 flex-1 hover:border-[#00C2FF]/30 transition-colors duration-300"
              >
                <span className="font-mono text-3xl font-bold text-[#00C2FF]/15 leading-none block mb-4">
                  {p.number}
                </span>
                <p.icon size={24} weight="light" className="text-[#00C2FF] mb-3" />
                <h3 className="text-base font-bold mb-2">{p.title}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
