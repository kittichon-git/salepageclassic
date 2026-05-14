"use client"

import { useEffect, useState } from "react"
import { CircleDollarSign, MessageCircle } from "lucide-react"
import { HERO } from "@/lib/data"

export function StickyCTA() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  if (!show) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 max-w-[760px] mx-auto z-50 flex items-center justify-between gap-3 border-2 border-text-primary bg-bg-card/96 backdrop-blur-sm shadow-[4px_4px_0_rgba(26,26,26,0.50)] px-3 py-2.5">
      <span className="hidden sm:flex items-center gap-2 font-black text-brand-primary text-sm">
        <CircleDollarSign size={18} strokeWidth={2} />
        2 บทแรกฟรี
      </span>
      <a
        href={HERO.ctaHref}
        className="inline-flex items-center justify-center gap-2 bg-line-green text-white font-black text-sm px-4 py-2.5 shadow-[3px_3px_0_rgba(26,26,26,0.65)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0_rgba(26,26,26,0.70)] transition-all sm:w-auto w-full"
      >
        <MessageCircle size={16} strokeWidth={2.5} />
        เริ่มอ่านฟรี
      </a>
    </div>
  )
}
