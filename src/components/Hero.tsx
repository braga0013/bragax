import { motion, useReducedMotion } from 'motion/react'
import { WhatsappLogo, ArrowDown } from '@phosphor-icons/react'
import { WA_LINK } from '../constants'

export function Hero() {
  const prefersReduced = useReducedMotion()

  const fadeUp = (delay: number) =>
    prefersReduced
      ? {}
      : {
          initial: { opacity: 0, y: 40 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
        }

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center overflow-hidden bg-[#0A0A0A]"
    >
      {/* Blue glow left */}
      <div className="pointer-events-none absolute -left-40 top-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#00C2FF]/8 blur-[160px]" />
      {/* Blue glow right */}
      <div className="pointer-events-none absolute -right-40 bottom-0 w-[500px] h-[500px] rounded-full bg-[#00C2FF]/6 blur-[120px]" />

      {/* Subtle diagonal blue stripe */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(-45deg, #00C2FF 0px, #00C2FF 1px, transparent 1px, transparent 60px)',
        }}
      />

      <div className="relative w-full pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 items-center min-h-[calc(100dvh-4rem)]">
          {/* Left: content */}
          <div className="py-16 lg:py-0 flex flex-col justify-center">
            {/* Accent line */}
            <motion.div
              initial={prefersReduced ? false : { scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-12 h-[3px] bg-[#00C2FF] mb-8 origin-left"
            />

            <motion.h1
              {...(fadeUp(0.1) as object)}
              className="text-7xl sm:text-8xl lg:text-[7rem] font-bold tracking-tight leading-[0.88] mb-8"
            >
              BRAGAX
              <br />
              <span className="text-[#00C2FF]">TECH</span>
            </motion.h1>

            <motion.p
              {...(fadeUp(0.25) as object)}
              className="text-xl text-white/65 font-medium leading-snug mb-12 max-w-[340px]"
            >
              Seu negócio no digital com planos mensais
            </motion.p>

            <motion.div
              {...(fadeUp(0.38) as object)}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white font-bold text-base px-8 py-4 hover:bg-[#20b558] transition-colors duration-200 active:scale-[0.98]"
              >
                <WhatsappLogo size={20} weight="fill" />
                Falar no WhatsApp
              </a>
              <a
                href="#planos"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white/80 font-semibold text-base px-8 py-4 hover:border-[#00C2FF] hover:text-[#00C2FF] transition-colors duration-200 group"
              >
                Ver planos
                <ArrowDown
                  size={18}
                  className="group-hover:translate-y-0.5 transition-transform duration-200"
                />
              </a>
            </motion.div>
          </div>

          {/* Right: logo — grande, sangra até a borda */}
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex items-center justify-end h-full"
          >
            <img
              src="/imgs/bragax_logo.png"
              alt="Símbolo Bragax Tech"
              className="w-full max-w-[540px] xl:max-w-[620px] select-none"
              draggable={false}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
