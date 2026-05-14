import type { ReactNode } from "react"

export function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="absolute -top-4 left-5 z-10 bg-text-primary text-white font-mono text-[11px] uppercase tracking-widest px-3 py-[7px] font-black">
      {children}
    </div>
  )
}
