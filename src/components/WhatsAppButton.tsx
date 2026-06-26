import { motion, useReducedMotion } from 'motion/react'
import { WhatsappLogo } from '@phosphor-icons/react'
import { WA_LINK } from '../constants'

export function WhatsAppButton() {
  const prefersReduced = useReducedMotion()

  return (
    <motion.a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={
        prefersReduced
          ? { duration: 0.01 }
          : { delay: 1.2, type: 'spring', stiffness: 200, damping: 15 }
      }
      whileHover={prefersReduced ? {} : { scale: 1.08 }}
      whileTap={prefersReduced ? {} : { scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] flex items-center justify-center shadow-[0_4px_24px_rgba(37,211,102,0.4)] hover:shadow-[0_4px_36px_rgba(37,211,102,0.55)] transition-shadow duration-300"
    >
      <WhatsappLogo size={26} weight="fill" color="white" />
    </motion.a>
  )
}
