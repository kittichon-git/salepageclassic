import { ArrowRight, LineChart } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import { FINAL_CTA } from "@/lib/data"

export function S10FinalCTA() {
  return (
    <section
      className="relative mb-7 border border-border-default bg-text-primary text-white shadow-soft overflow-hidden"
      aria-label="Final call to action"
    >
      {/* Eyebrow frame-tab — inline for dark section */}
      <div className="absolute -top-4 left-5 z-10 bg-brand-primary text-bg-base font-mono text-[11px] uppercase tracking-widest px-3 py-[7px] font-black">
        S10 / ACTION
      </div>

      {/* Grid overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(255,255,255,.022) 1px, transparent 1px), linear-gradient(rgba(255,255,255,.022) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
          maskImage: "linear-gradient(to bottom, black, transparent 80%)",
        }}
      />

      <div className="relative px-7 md:px-10 pt-12 pb-10 md:pb-12 text-center">
        <ScrollReveal>
          <LineChart size={42} className="text-brand-primary mx-auto mb-4" />

          <h2 className="text-[32px] md:text-[48px] font-heading font-[800] leading-[1.15] tracking-[-0.5px] text-white mb-6 max-w-3xl mx-auto">
            {FINAL_CTA.headline}
          </h2>

          <p className="text-lg md:text-xl text-white/80 font-bold leading-relaxed mb-8 max-w-2xl mx-auto">
            {FINAL_CTA.sub}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Button variant="line" size="lg" href={FINAL_CTA.ctaHref}>
              {FINAL_CTA.ctaText}
              <ArrowRight size={20} />
            </Button>

            <a
              href="#offer"
              className="text-white/80 hover:text-white underline underline-offset-4 font-bold transition-colors"
            >
              ดูสารบัญอีกครั้ง
            </a>
          </div>

          <p className="text-white/60 text-sm">{FINAL_CTA.trust}</p>
        </ScrollReveal>
      </div>
    </section>
  )
}
