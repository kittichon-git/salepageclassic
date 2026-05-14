import { BookOpen, Gift, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { SectionEyebrow } from "@/components/ui/SectionEyebrow"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import { MODULES, BONUS, HERO } from "@/lib/data"

export function S6WhatsInside() {
  return (
    <section id="whats-inside" className="relative mb-7 border border-border-default bg-bg-card shadow-soft">
      <SectionEyebrow>S6 / WHAT&apos;S INSIDE</SectionEyebrow>
      <div className="px-7 md:px-10 pt-12 pb-8 md:pb-10">
        <ScrollReveal>
          <h2 className="text-[36px] font-[800] leading-[1.2] mb-8">
            ข้างในมีอะไร — 7 ภาค 24 บท
          </h2>
        </ScrollReveal>

        {/* Horizontal scroll curriculum grid */}
        <div className="overflow-x-auto pb-2 -mx-7 md:-mx-10 px-7 md:px-10 snap-x snap-mandatory mb-[18px]">
          <div
            className="grid gap-3.5"
            style={{ gridTemplateColumns: `repeat(${MODULES.length}, minmax(210px, 1fr))` }}
          >
            {MODULES.map((m, i) => (
              <ScrollReveal key={m.n} delay={i * 0.06}>
                <div className="snap-start border border-border-default bg-bg-surface shadow-soft p-5 min-h-[180px]">
                  <span className="inline-flex bg-brand-primary text-white font-mono font-black text-xs px-2 py-1 mb-3">
                    {m.n}
                  </span>
                  <h3 className="text-lg font-bold mb-2">{m.title}</h3>
                  <p className="text-text-secondary leading-[1.55] text-sm">{m.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Bonus strip — dark bg */}
        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-3.5 items-center border border-border-default bg-text-primary text-white shadow-soft p-5">
            <Sparkles size={22} className="text-brand-primary shrink-0" />
            <div>
              <p className="font-bold text-sm md:text-base leading-[1.55] text-white/90 mb-1">
                <span className="text-brand-primary font-black">{BONUS.label}:</span>{" "}
                {BONUS.items.join(" · ")}
              </p>
            </div>
            <Button variant="line" size="md" href={HERO.ctaHref}>
              อ่านบทนำ + บท 1 ฟรีใน LINE
              <ArrowRight size={16} />
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
