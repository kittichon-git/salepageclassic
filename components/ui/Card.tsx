import type { ReactNode } from "react"
import clsx from "clsx"

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={clsx(
        "bg-bg-card rounded-2xl p-6 md:p-8",
        "border border-border-strong shadow-sm",
        "hover:bg-bg-card-hover hover:shadow-md transition-all",
        className,
      )}
    >
      {children}
    </div>
  )
}
