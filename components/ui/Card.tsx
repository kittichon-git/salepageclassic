import type { ReactNode } from "react"
import clsx from "clsx"

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={clsx(
        "bg-bg-elevated p-6 md:p-8",
        "border border-border-default shadow-soft",
        "hover:bg-bg-card-hover hover:shadow-elev transition-all duration-200",
        className,
      )}
    >
      {children}
    </div>
  )
}
