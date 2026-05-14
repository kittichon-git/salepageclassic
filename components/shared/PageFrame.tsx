import type { ReactNode } from "react"

export function PageFrame({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <div className="max-w-[1180px] mx-auto px-[18px] pt-[18px] pb-28">
        {children}
      </div>
    </div>
  )
}
