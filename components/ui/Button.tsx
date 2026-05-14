import type { ReactNode } from "react"
import clsx from "clsx"

type Variant = "primary" | "secondary" | "ghost" | "line"
type Size = "sm" | "md" | "lg"

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--color-brand-primary)] text-white hover:bg-[var(--color-brand-primary-hover)]",
  secondary:
    "bg-[var(--color-bg-card)] text-[var(--color-text-primary)] border border-[var(--color-border-strong)] hover:bg-[var(--color-bg-card-hover)]",
  ghost:
    "text-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary-soft)]",
  line: "bg-[var(--color-line-green)] text-white hover:opacity-90",
}

const sizes: Record<Size, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-base",
  lg: "px-7 py-3.5 text-lg",
}

type Props = {
  children: ReactNode
  variant?: Variant
  size?: Size
  href?: string
  className?: string
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className,
}: Props) {
  const cls = clsx(
    "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors",
    variants[variant],
    sizes[size],
    className,
  )

  if (href) return <a href={href} className={cls}>{children}</a>
  return <button className={cls}>{children}</button>
}
