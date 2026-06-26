import { motion, useReducedMotion } from 'motion/react'
import { WhatsappLogo } from '@phosphor-icons/react'
import { WA_LINK } from '../constants'

export function FinalCTA() {
  const prefersReduced = useReducedMotion()

  return (
    <section className="py-32 px-4 sm:px-6 bg-[#0D0D0D] relative overflow-hidden">
      {/* Background decoration */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00C2FF]/30 to-transparent" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#00C2FF]/4 blur-[160px]" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.h2
          initial={prefersReduced ? false : { opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6"
        >
          Pronto para levar seu{' '}
          <span className="text-[#00C2FF]">negocio ao digital?</span>
        </motion.h2>

        <motion.p
          initial={prefersReduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg text-white/55 mb-10 max-w-md mx-auto"
        >
          Fale com a gente agora e tire seu projeto do papel ainda essa semana.
        </motion.p>

        <motion.div
          initial={prefersReduced ? false : { opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2, type: 'spring', stiffness: 200, damping: 20 }}
        >
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] text-white font-bold text-lg px-10 py-5 hover:bg-[#20b558] transition-colors duration-200 active:scale-[0.98] shadow-[0_0_40px_rgba(37,211,102,0.3)] hover:shadow-[0_0_60px_rgba(37,211,102,0.4)]"
          >
            <WhatsappLogo size={24} weight="fill" />
            Falar no WhatsApp agora
          </a>
        </motion.div>

        <motion.p
          initial={prefersReduced ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-xs text-white/30 font-mono"
        >
          +55 51 99732-1412
        </motion.p>
      </div>
    </section>
  )
}
