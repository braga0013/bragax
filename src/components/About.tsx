import { motion, useReducedMotion } from 'motion/react'
import { MapPin } from '@phosphor-icons/react'

export function About() {
  const prefersReduced = useReducedMotion()

  return (
    <section id="sobre" className="py-24 px-4 sm:px-6 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: large decorative text */}
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
          aria-hidden="true"
        >
          <div className="text-[120px] sm:text-[160px] lg:text-[200px] font-black leading-none tracking-tighter text-white/3 select-none">
            BX
          </div>
          <div className="absolute inset-0 flex items-center">
            <div className="w-1 h-24 bg-[#00C2FF]" />
          </div>
        </motion.div>

        {/* Right: content */}
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
            Sobre a Bragax Tech
          </h2>

          <p className="text-white/65 leading-relaxed mb-4">
            A Bragax Tech e uma empresa de tecnologia sediada em Porto Alegre, especializada em
            solucoes digitais para pequenos e medios negocios. Desenvolvemos e-commerces, sistemas
            de gestao, automacoes e plataformas de atendimento com qualidade e preco justo.
          </p>
          <p className="text-white/65 leading-relaxed mb-8">
            Nossa missao e simples: colocar qualquer negocio no digital com o menor atrito possivel.
            Planos mensais acessiveis, suporte continuo e resultados reais.
          </p>

          <div className="flex items-center gap-2 text-sm text-white/40">
            <MapPin size={14} className="text-[#00C2FF]" />
            <span>Porto Alegre, RS</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
