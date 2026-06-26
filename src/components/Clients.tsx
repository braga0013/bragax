import { motion, useReducedMotion } from 'motion/react'
import { InstagramLogo, ArrowUpRight } from '@phosphor-icons/react'

const clients = [
  {
    name: 'Oticas Relux',
    category: 'Otica',
    instagram: 'https://www.instagram.com/oticasrelux/',
    handle: '@oticasrelux',
  },
  {
    name: 'Barbearia do Rian',
    category: 'Barbearia',
    instagram: 'https://www.instagram.com/barbearia_do_rian_/',
    handle: '@barbearia_do_rian_',
  },
]

export function Clients() {
  const prefersReduced = useReducedMotion()

  return (
    <section className="py-24 px-4 sm:px-6 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={prefersReduced ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-sm text-white/35 uppercase tracking-[0.2em] font-mono mb-12"
        >
          Quem ja confia na Bragax
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {clients.map((client, i) => (
            <motion.a
              key={client.name}
              href={client.instagram}
              target="_blank"
              rel="noopener noreferrer"
              initial={prefersReduced ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="border border-white/8 bg-[#111111] p-8 hover:border-[#00C2FF]/30 transition-colors duration-300 group block"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="block text-xs text-white/35 font-mono uppercase tracking-widest mb-3">
                    {client.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#00C2FF] transition-colors duration-300 mb-3">
                    {client.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-white/30 group-hover:text-[#00C2FF]/60 transition-colors duration-300">
                    <InstagramLogo size={12} />
                    <span>{client.handle}</span>
                  </div>
                </div>
                <div className="w-9 h-9 border border-white/10 group-hover:border-[#00C2FF]/40 transition-all duration-300 flex items-center justify-center shrink-0 mt-1">
                  <ArrowUpRight size={16} className="text-white/20 group-hover:text-[#00C2FF] transition-colors duration-300" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
