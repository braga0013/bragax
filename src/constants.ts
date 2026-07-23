const WA_PHONE = '5551997321412'

const GENERIC_MESSAGE = 'Olá, vim pelo site da BragaxTech e quero saber mais!'

const FOUNDER_MESSAGE =
  'Olá! Vi o anúncio da Condição de Fundador e quero garantir o desenvolvimento do meu sistema travando a mensalidade em R$ 700!'

export const WA_LINK = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(GENERIC_MESSAGE)}`

export const WA_LINK_FOUNDER = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(FOUNDER_MESSAGE)}`

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

/**
 * Dispara a conversão "Clique WhatsApp" no Google Ads.
 * Usar no onClick de todo link que aponte para WA_LINK ou WA_LINK_FOUNDER.
 */
export function trackWhatsAppClick() {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      send_to: 'AW-16751799172/b6QzCOG5wtUcEITX8LM-',
    })
  }
}
