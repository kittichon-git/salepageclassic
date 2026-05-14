import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import { HERO } from "@/lib/data"

export function S1Hero() {
  const line1 = HERO.headline[0]
  const line2 = HERO.headline[1]
  const highlight = HERO.highlight
  const parts = line2.split(highlight)

  return (
    <header
      id="hero"
      className="relative mb-7 border-2 border-text-primary bg-bg-card shadow-[5px_5px_0_rgba(26,26,26,0.50)] overflow-hidden"
    >
      {/* Subtle grid overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-100"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(26,26,26,.022) 1px, transparent 1px), linear-gradient(rgba(26,26,26,.022) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
          maskImage: "linear-gradient(to bottom, black, transparent 80%)",
        }}
      />

      <div className="relative px-7 md:px-10 py-9 md:py-[36px] grid grid-cols-1 lg:grid-cols-[0.93fr_1.07fr] gap-6 lg:gap-8 items-center">
        {/* Left column — copy */}
        <ScrollReveal>
          <div className="flex flex-col items-start">
            {/* Micro-badge */}
            <div className="inline-block bg-text-primary text-white font-mono text-[11px] uppercase tracking-widest px-3 py-[7px] font-black mb-5">
              R-MOTRA SALE PAGE · MOBILE-FIRST
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[clamp(40px,6.4vw,84px)] font-black leading-[0.98] tracking-tight mb-5">
              <span className="block">{line1}</span>
              <span className="block">
                {parts[0]}
                <span className="italic text-brand-primary">{highlight}</span>
                {parts[1] ?? ""}
              </span>
            </h1>

            <p className="text-base md:text-lg text-text-secondary leading-relaxed mb-6 max-w-xl font-semibold">
              {HERO.sub}
            </p>

            {/* VSL callout — dark card */}
            <div className="w-full mb-6 border-2 border-text-primary bg-text-primary text-white shadow-[3px_3px_0_rgba(218,119,86,0.85)] p-5">
              <div className="font-mono text-[11px] uppercase tracking-widest text-brand-primary font-black mb-2">
                VSL 60 วินาที
              </div>
              <p className="text-white/90 leading-relaxed text-sm md:text-base">
                คนสองคนขายเซรั่มตัวเดียวกัน คนแรกเขียน 500 คำ ยอดเป็นศูนย์ คนที่สองเขียน 3 บรรทัด ขายร้อยออเดอร์ต่อวัน — ต่างกันที่ตรงไหน?
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Button variant="line" size="lg" href={HERO.ctaHref}>
                {HERO.ctaText}
                <ArrowRight size={20} />
              </Button>
              <span className="text-sm font-black text-brand-primary">{HERO.trust}</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Right column — illustration placeholder */}
        <ScrollReveal delay={0.1}>
          <div className="aspect-[4/3] border-2 border-text-primary bg-bg-surface shadow-[3px_3px_0_rgba(26,26,26,0.45)] flex flex-col items-center justify-center gap-3 p-6">
            <div className="w-16 h-16 border-2 border-text-primary bg-bg-card flex items-center justify-center font-mono text-2xl font-black text-text-muted">
              📊
            </div>
            <p className="font-mono text-xs uppercase tracking-widest text-text-muted text-center">
              Sale Page Hero<br />Illustration
            </p>
          </div>
        </ScrollReveal>
      </div>
    </header>
  )
}
