import { WhatsappLogo } from '@phosphor-icons/react'
import { WA_LINK } from '../constants'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#080808] border-t border-white/5 py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div>
            <p className="font-bold text-lg tracking-tight mb-3">
              BRAGAX <span className="text-[#00C2FF]">TECH</span>
            </p>
            <p className="text-xs text-white/35 leading-relaxed max-w-[200px]">
              Solucoes digitais para pequenos e medios negocios. Porto Alegre, RS.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-white/30 mb-4">Navegue</p>
            <ul className="space-y-2">
              {['Solucoes', 'Planos', 'Indicacao', 'Sobre'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-white/30 mb-4">
              Contato
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-white/50 hover:text-[#25D366] transition-colors duration-200"
            >
              <WhatsappLogo size={14} weight="fill" />
              +55 51 99732-1412
            </a>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <p className="text-xs text-white/20">
            &copy; {year} Bragax Tech. Todos os direitos reservados.
          </p>
          <p className="text-xs text-white/15 font-mono">Porto Alegre, RS</p>
        </div>
      </div>
    </footer>
  )
}
