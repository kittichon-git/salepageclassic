"use client"

import { useEffect, useState } from "react"
import { MessageCircle } from "lucide-react"
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
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-md">
      <div className="flex items-center justify-between gap-3 rounded-2xl bg-bg-elevated border-2 border-text-primary shadow-lg p-3 pl-5">
        <span className="text-text-primary font-medium text-sm">2 บทแรกฟรี</span>
        <a
          href={HERO.ctaHref}
          className="inline-flex items-center gap-1.5 rounded-xl bg-line-green text-white px-4 py-2 font-bold text-sm md:text-base shadow-sm hover:opacity-90 transition-opacity"
        >
          <MessageCircle size={16} strokeWidth={2.5} />
          เริ่มอ่านฟรี
        </a>
      </div>
    </div>
  )
}
