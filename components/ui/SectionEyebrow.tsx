import type { ReactNode } from "react"

export function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs md:text-sm uppercase tracking-widest font-semibold mb-3 text-[var(--color-brand-primary)]">
      {children}
    </p>
  )
}
