import type { ReactNode } from "react"

export function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-xs md:text-sm uppercase tracking-widest text-brand-primary font-semibold mb-3">
      {children}
    </p>
  )
}
