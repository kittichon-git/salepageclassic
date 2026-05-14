import type { ReactNode } from "react"
import clsx from "clsx"

type Variant = "primary" | "secondary" | "ghost" | "line"
type Size = "sm" | "md" | "lg"

const variants: Record<Variant, string> = {
  primary: "bg-brand-primary text-white hover:bg-brand-primary-hover shadow-sm",
  secondary: "bg-bg-card text-text-primary border border-border-strong hover:bg-bg-card-hover",
  ghost: "text-brand-primary hover:bg-brand-primary-soft",
  line: "bg-line-green text-white hover:opacity-90 shadow-sm",
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

export function Button({ children, variant = "primary", size = "md", href, className }: Props) {
  const cls = clsx(
    "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2",
    variants[variant],
    sizes[size],
    className,
  )

  if (href) return <a href={href} className={cls}>{children}</a>
  return <button className={cls}>{children}</button>
}
