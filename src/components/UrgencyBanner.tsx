import { Lightning } from '@phosphor-icons/react'

export function UrgencyBanner() {
  return (
    <a
      href="#planos"
      className="fixed top-0 inset-x-0 z-[60] h-9 flex items-center justify-center gap-2 bg-[#00C2FF] text-[#0A0A0A] px-4 text-center hover:bg-[#33cbff] transition-colors duration-200"
    >
      <Lightning size={14} weight="fill" className="shrink-0" />
      <span className="text-[11px] font-bold tracking-tight truncate sm:hidden">
        Tabela de Fundador ativa. Garanta já.
      </span>
      <span className="hidden sm:block text-xs font-bold tracking-tight truncate">
        Tabela de Preços de Fundador Ativa. Garanta seu sistema sob medida antes do reajuste.
      </span>
    </a>
  )
}
