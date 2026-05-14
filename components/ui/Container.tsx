import type { ReactNode } from "react"
import clsx from "clsx"

export function Container({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={clsx("max-w-[1200px] mx-auto px-4 md:px-8 lg:px-16", className)}>
      {children}
    </div>
  )
}
