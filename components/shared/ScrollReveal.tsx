"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

const initial = { opacity: 0, y: 24 }
const whileInView = { opacity: 1, y: 0 }
const viewport = { once: true, margin: "-80px" as const }

export function ScrollReveal({
  children,
  delay = 0,
}: {
  children: ReactNode
  delay?: number
}) {
  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}
