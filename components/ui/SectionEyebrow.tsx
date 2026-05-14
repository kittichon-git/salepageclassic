import type { ReactNode } from "react"

export function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="mb-4 md:mb-5">
      <span className="inline-block rounded-lg bg-text-primary text-white font-mono text-xs uppercase tracking-widest px-3 py-1 font-bold">
        {children}
      </span>
    </div>
  )
}
