import type { ReactNode } from "react"
import clsx from "clsx"

type Variant = "default" | "success" | "warning" | "danger"

const variants: Record<Variant, string> = {
  default: "bg-bg-surface text-text-secondary",
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
        "inline-flex items-center text-xs font-semibold px-2 py-1 rounded-md uppercase tracking-wide",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}
