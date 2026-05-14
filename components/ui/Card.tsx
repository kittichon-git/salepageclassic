import type { ReactNode } from "react"
import clsx from "clsx"

export function Card({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={clsx(
        "bg-[var(--color-bg-card)] rounded-xl p-6 md:p-8",
        "border border-[var(--color-border-subtle)]",
        "hover:bg-[var(--color-bg-card-hover)] transition-colors",
        className,
      )}
    >
      {children}
    </div>
  )
}
