import { useParams, Link } from 'react-router-dom'
import { Check, WhatsappLogo } from '@phosphor-icons/react'
import { WA_LINK, trackWhatsAppClick } from '../constants'
import { services, included } from '../services-data'

export function ServicePage() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    return (
      <main className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Serviço não encontrado</h1>
          <Link to="/" className="text-[#00C2FF] hover:underline">
            Voltar para a página inicial
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="pt-32 pb-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#00C2FF] mb-4">
          Serviços BragaxTech
        </p>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6">{service.h1}</h1>
        <p className="text-lg text-white/60 leading-relaxed mb-10 max-w-2xl">{service.intro}</p>

        {!service.tiers && (
          <div className="mb-10">
            <span className="text-4xl font-bold text-white">{service.price}</span>
          </div>
        )}

        <a
          href={WA_LINK}
          onClick={trackWhatsAppClick}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#00C2FF] text-[#0A0A0A] text-sm font-semibold px-6 py-3 hover:bg-[#00aadf] transition-colors duration-200 mb-16"
        >
          <WhatsappLogo size={16} weight="fill" />
          Contratar pelo WhatsApp
        </a>

        {/* Bullets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
          {service.bullets.map((bullet) => (
            <div key={bullet} className="flex items-center gap-3 bg-[#111111] border border-white/5 p-4">
              <div className="w-6 h-6 bg-[#00C2FF]/10 flex items-center justify-center shrink-0">
                <Check size={12} weight="bold" className="text-[#00C2FF]" />
              </div>
              <span className="text-sm text-white/70 font-medium">{bullet}</span>
            </div>
          ))}
        </div>

        {/* Tiers, para serviços com mais de um plano (ex: e-commerce) */}
        {service.tiers && (
          <div className="mb-16">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-white/40 mb-6">
              Planos disponíveis
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.tiers.map((tier) => (
                <div key={tier.name} className="bg-[#111111] border border-white/5 p-6 sm:p-8">
                  <h3 className="text-sm font-semibold text-white/60 mb-3">{tier.name}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-white">{tier.price}</span>
                  </div>
                  <p className="text-sm text-white/50 leading-relaxed">{tier.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Incluso em todos os planos */}
        <div className="border border-white/8 bg-[#0D0D0D] p-6 sm:p-8 mb-16">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-white/40 mb-6">
            Incluso em todos os planos
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {included.map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <div className="w-6 h-6 bg-[#00C2FF]/10 flex items-center justify-center shrink-0">
                  <Check size={12} weight="bold" className="text-[#00C2FF]" />
                </div>
                <span className="text-sm text-white/70 font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Outros serviços, para link interno */}
        <div>
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-white/40 mb-6">
            Outros serviços
          </p>
          <div className="flex flex-wrap gap-3">
            {services
              .filter((s) => s.slug !== service.slug)
              .map((s) => (
                <Link
                  key={s.slug}
                  to={`/servicos/${s.slug}`}
                  className="text-sm text-white/60 border border-white/10 px-4 py-2 hover:border-[#00C2FF] hover:text-[#00C2FF] transition-colors duration-200"
                >
                  {s.navLabel}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </main>
  )
}
