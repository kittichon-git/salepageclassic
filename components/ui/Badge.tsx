import type { ReactNode } from "react"
import clsx from "clsx"

type Variant = "default" | "success" | "warning" | "danger"

const variants: Record<Variant, string> = {
  default: "bg-[var(--color-bg-surface)] text-[var(--color-text-secondary)]",
  success: "bg-green-100 text-green-800",
  warning: "bg-orange-100 text-orange-800",
  danger: "bg-red-100 text-red-800",
}

export function Badge({
  children,
  variant = "default",
  className,
}: {
  children: ReactNode
  variant?: Variant
  className?: string
}) {
  return (
    <span
      className={clsx(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}
