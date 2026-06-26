import { useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'motion/react'
import { WhatsappLogo } from '@phosphor-icons/react'
import { WA_LINK } from '../constants'

export function Nav() {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 40)
  })

  return (
    <motion.header
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 inset-x-0 z-50 h-16 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0A0A]/95 backdrop-blur-sm border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
        <a href="#" className="font-bold text-lg tracking-tight leading-none">
          BRAGAX <span className="text-[#00C2FF]">TECH</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-white/60">
          <a href="#solucoes" className="hover:text-white transition-colors duration-200">
            Soluções
          </a>
          <a href="#planos" className="hover:text-white transition-colors duration-200">
            Planos
          </a>
          <a href="#indicacao" className="hover:text-white transition-colors duration-200">
            Indicação
          </a>
          <a href="#sobre" className="hover:text-white transition-colors duration-200">
            Sobre
          </a>
        </nav>

        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-4 py-2 hover:bg-[#20b558] transition-colors duration-200 active:scale-[0.97]"
        >
          <WhatsappLogo size={16} weight="fill" />
          <span className="hidden sm:block">WhatsApp</span>
        </a>
      </div>
    </motion.header>
  )
}
