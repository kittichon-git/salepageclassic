import type { ReactNode } from "react"
import clsx from "clsx"

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={clsx(
        "bg-bg-card p-6 md:p-8",
        "border-2 border-text-primary shadow-[3px_3px_0_rgba(26,26,26,0.40)]",
        className,
      )}
    >
      {children}
    </div>
  )
}
