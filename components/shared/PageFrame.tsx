import type { ReactNode } from "react"

export function PageFrame({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-bg-base">
      <div className="max-w-[1240px] mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-8">
        <div className="rounded-2xl md:rounded-3xl bg-bg-base border-2 border-text-primary overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  )
}
